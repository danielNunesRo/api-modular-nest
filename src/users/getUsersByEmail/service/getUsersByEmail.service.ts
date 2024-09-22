import { Injectable } from "@nestjs/common";
import { UserByEmailRepository } from "../repository/getUsersByEmail.repository";
import { GetUserByEmailInput } from "../dto/GetUserByEmailInput.dto";
import { GetUserByEmailOutputDto } from "../dto/GetUserByEmailOutput.dto";

@Injectable()
export class GetUserByEmailService {

    constructor(private readonly repository: UserByEmailRepository) {}


    async exec (data: GetUserByEmailInput): Promise<GetUserByEmailOutputDto> {
        console.log(data);
        return await this.repository.getUserByEmail(data);
    }


}