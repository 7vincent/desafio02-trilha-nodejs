import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailAlreadExist = this.usersRepository.findByEmail(email);
    if (emailAlreadExist) {
      throw new Error("User already exists!");
    }
    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
