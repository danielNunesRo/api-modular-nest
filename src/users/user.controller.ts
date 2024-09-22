import { Body, Controller, Get, Injectable, Post, Query } from "@nestjs/common";
import { UserCreateService } from "./postCreateUser/service/userCreate.service";
import { UserInputDto } from "./postCreateUser/dtos/UserInput.dto";
import { UserOutputDto } from "./postCreateUser/dtos/UserOutput.dto";
import { GetAllUsersService } from "./getAllUsers/service/getAllUsers.service";

@Injectable()
@Controller()
export class UserController {

    constructor(private readonly createUserPostService: UserCreateService, private readonly getAllService: GetAllUsersService) {}
    
    @Get()
    async getAll() {
        console.log("Carregando lista de usuarios");
        return await this.getAllService.getAll();
    }
    
    
    @Post()
    async createUser(@Body() userInputDto:UserInputDto): Promise<{message: string}> {
        console.log("Recebido: ", userInputDto);
        return await this.createUserPostService.createUser(userInputDto);
    }



  

    

}