import { Injectable } from "@nestjs/common";
import { getAllUsersRepository } from "../repositories/getAllUsers.repository";


@Injectable()
export class GetAllUsersService {

    constructor(private readonly getAllUsersRepository: getAllUsersRepository){}


     async getAll(): Promise<any[]> {
        return this.getAllUsersRepository.getAllUsers();
     }   
    
}