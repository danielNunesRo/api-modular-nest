import { Injectable } from "@nestjs/common";
import { DataBaseService } from "src/shared/database/database.service";
import { GetUserByEmailOutputDto } from "../dto/GetUserByEmailOutput.dto";


@Injectable()
export class UserByEmailRepository {

    constructor(private readonly db: DataBaseService) {}


    async getUserByEmail(obj :{email: string}): Promise<GetUserByEmailOutputDto | any> {

        const sql = 'SELECT * FROM API.USUARIOS u WHERE EMAIL = :EMAIL';

        const binds = {
            email: obj.email
        }

        try {
            const result = await this.db.query(sql, binds);
            
            const outputDto: GetUserByEmailOutputDto = {
                nome: result[0].NOME,
                email: result[0].EMAIL,
                data_criacao: result[0].DATA_CRIACAO
            }
            return outputDto;
        } catch(error) {
            console.error('Erro ao buscar usuario pelo email', error);
            throw error;
        }

    }

}