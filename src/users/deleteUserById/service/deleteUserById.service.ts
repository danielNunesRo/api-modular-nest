import { Injectable, Query } from "@nestjs/common";
import { DeleteUserByIdRepository } from "../repositories/deleteUserById.repository";
import { DeleteUserByIdInputDto } from "../dto/deleteUserByIdInput.dto";


@Injectable()
export class DeleteUserByIdService {

    constructor(private readonly deleteUserService: DeleteUserByIdRepository) {}


    async exec (data: DeleteUserByIdInputDto): Promise<{message: string}> {

        try {
            const result = this.deleteUserService.DeleteUserById(data);
            return {message: "Usuario deletado com sucesso do banco de dados"}
        } catch (error) {
            console.error("Erro na camada service ao tentar deletar usuario");
            throw error;
        }

    }

}