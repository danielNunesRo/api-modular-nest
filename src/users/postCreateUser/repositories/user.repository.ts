import { Injectable, Logger } from "@nestjs/common";
import { DataBaseService } from "src/shared/database/database.service";


@Injectable()
export class UserRepository {

    private readonly logger = new Logger(UserRepository.name);

    constructor(private readonly db: DataBaseService) {}

    async createUser(obj: {nome: string, email: string, senha: string}): Promise<{message: string}> {

        const sql = "INSERT INTO API.USUARIOS u (nome, email, senha) values(:nome, :email, :senha)"

        const binds = {
            nome: obj.nome,
            email: obj.email,
            senha: obj.senha,
        }

        console.log('Executing SQL:', sql, 'with binds:', binds); 

        try {
            const result = await this.db.query(sql, binds);
            return {message: 'Usuario salvo com sucesso'}
        } catch (error) {
            console.error("Erro ao executar ao criar usuario: ", error)
            throw error;
        }

       

    }

}