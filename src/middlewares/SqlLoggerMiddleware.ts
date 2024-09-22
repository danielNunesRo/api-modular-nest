import { Injectable, NestMiddleware, Logger } from "@nestjs/common";
import { Request, Response } from "express";
import { DataBaseService } from "src/shared/database/database.service";

@Injectable()
export class SqlLoggerMiddleware implements NestMiddleware {
    private readonly logger = new Logger(SqlLoggerMiddleware.name);

    constructor(private readonly dbService: DataBaseService) {}

    use(req: Request, res: Response, next: Function) {
        // Salvar a referência original do método query
        const originalQuery = this.dbService.query.bind(this.dbService);
        
        // Sobrescrever o método query para incluir o log
        this.dbService.query = (...args: any[]) => {
            this.logger.log(`SQL Query: ${args[0]}`);
            return originalQuery(...args);
        };

        // Passar para o próximo middleware ou controlador
        next();
    }
}
