import { Body, Controller, Delete, Get, Injectable, Post, Query } from "@nestjs/common";
import { UserCreateService } from "./postCreateUser/service/userCreate.service";
import { UserInputDto } from "./postCreateUser/dtos/UserInput.dto";
import { UserOutputDto } from "./postCreateUser/dtos/UserOutput.dto";
import { GetAllUsersService } from "./getAllUsers/service/getAllUsers.service";
import { GetUserByEmailService } from "./getUsersByEmail/service/getUsersByEmail.service";
import { GetUserByEmailInput } from "./getUsersByEmail/dto/GetUserByEmailInput.dto";
import { GetUserByEmailOutputDto } from "./getUsersByEmail/dto/GetUserByEmailOutput.dto";
import { DeleteUserByIdService } from "./deleteUserById/service/deleteUserById.service";
import { DeleteUserByIdInputDto } from "./deleteUserById/dto/deleteUserByIdInput.dto";


@Injectable()
@Controller()
export class UserController {

    constructor(private readonly createUserPostService: UserCreateService, 
        private readonly getAllService: GetAllUsersService,
        private readonly getUserByEmailService: GetUserByEmailService,
        private readonly deleteUserByIdService: DeleteUserByIdService) {}
    
    @Get()
    async getAll() {
        console.log("Carregando lista de usuarios");
        return await this.getAllService.getAll();
    }

    @Get('/byemail')
    async getUserByEmail(@Query() data :GetUserByEmailInput): Promise<GetUserByEmailOutputDto> {
        return this.getUserByEmailService.exec(data)
    }
    
    
    @Post()
    async createUser(@Body() userInputDto:UserInputDto): Promise<{message: string}> {
        console.log("Recebido: ", userInputDto);
        return await this.createUserPostService.createUser(userInputDto);
    }

    @Delete()
    async deleteById(@Query() data: DeleteUserByIdInputDto): Promise<{message: string} | any> {
        try {
            const result = this.deleteUserByIdService.exec(data);
            return result;
        } catch (error) {
            console.error("Erro na camada controller: ", error);
            throw error;
        }
    }



  

    

}