import { Injectable } from "@nestjs/common";
import { DataBaseService } from "src/shared/database/database.service";

@Injectable()
export class getAllUsersRepository {

    constructor(private readonly db: DataBaseService) {}

    async getAllUsers(): Promise<any[]> {
        const sql = "SELECT NOME, EMAIL, DATA_CRIACAO FROM api.USUARIOS"

        return this.db.query(sql);
    }


}