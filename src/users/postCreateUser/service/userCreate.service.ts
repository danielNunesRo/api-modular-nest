import { Injectable, Logger } from "@nestjs/common";
import { UserRepository } from "../repositories/user.repository";
import { UserInputDto } from "../dtos/UserInput.dto";
import { UserOutputDto } from "../dtos/UserOutput.dto";


@Injectable()
export class UserCreateService {

    private readonly logger = new Logger(UserRepository.name);

    constructor(private readonly userRepository: UserRepository) {}


    async createUser(userInputDto: UserInputDto): Promise<{message: string}> {
        
        console.log('Service : ', userInputDto);

        if (!userInputDto) {
            throw new Error("UserInputDto não pode ser undefined");
        }

        const {nome, email, senha} = userInputDto
        console.log('Desestruturação: ', nome, email, senha);
        console.log(typeof(nome), typeof(email), typeof(senha));
       
        try {
            await this.userRepository.createUser(userInputDto);
            console.log('Usuário criado: ');
            const  obj = {message: "Usuario criado com sucesso"}
            return obj;  
    
        } catch(error) {
            console.error("Erro na camada de Service", error)
            throw error;
        }
      

       

    }

}