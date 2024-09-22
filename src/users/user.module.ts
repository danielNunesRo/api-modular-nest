import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserCreateService } from "./postCreateUser/service/userCreate.service";
import { UserRepository } from "./postCreateUser/repositories/user.repository";
import { DataBaseService } from "src/shared/database/database.service";
import { GetAllUsersService } from "./getAllUsers/service/getAllUsers.service";
import { getAllUsersRepository } from "./getAllUsers/repositories/getAllUsers.repository";
import { GetUserByEmailService } from "./getUsersByEmail/service/getUsersByEmail.service";
import { UserByEmailRepository } from "./getUsersByEmail/repository/getUsersByEmail.repository";
import { DeleteUserByIdService } from "./deleteUserById/service/deleteUserById.service";
import { DeleteUserByIdRepository } from "./deleteUserById/repositories/deleteUserById.repository";

@Module({
    imports: [],
    providers: [UserCreateService, UserRepository, DataBaseService, GetAllUsersService, getAllUsersRepository, GetUserByEmailService, UserByEmailRepository, DeleteUserByIdService, DeleteUserByIdRepository], 
    controllers: [UserController],
    exports: [UserCreateService, GetAllUsersService, GetUserByEmailService,DeleteUserByIdService]
})

export class UserModule {}