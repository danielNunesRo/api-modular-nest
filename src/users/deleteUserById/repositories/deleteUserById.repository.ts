import { Injectable } from "@nestjs/common";
import { DataBaseService } from "src/shared/database/database.service";


@Injectable()
export class DeleteUserByIdRepository {

    constructor(private readonly db: DataBaseService) {}


    async DeleteUserById(obj: {id:number}): Promise<{message: string}> {
        const sql = "DELETE FROM API.USUARIOS WHERE ID = :id"

        const binds = {
            id: obj.id
        }

        try {
            const result = await this.db.query(sql, binds);
            return {message: "Usuário apagado com sucesso."}
        } catch(error) {
            console.error("Erro ao deletar usuario: ", error)
            throw error;
        }


        
    }
    
}