import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserCreateService } from "./postCreateUser/service/userCreate.service";
import { UserRepository } from "./postCreateUser/repositories/user.repository";
import { DataBaseService } from "src/shared/database/database.service";
import { GetAllUsersService } from "./getAllUsers/service/getAllUsers.service";
import { getAllUsersRepository } from "./getAllUsers/repositories/getAllUsers.repository";

@Module({
    imports: [],
    providers: [UserCreateService, UserRepository, DataBaseService, GetAllUsersService, getAllUsersRepository], 
    controllers: [UserController],
    exports: [UserCreateService, GetAllUsersService]
})

export class UserModule {}