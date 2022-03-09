import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User | void {
    const userAlreadExist = this.usersRepository.findById(user_id);
    if (userAlreadExist) {
      const user = this.usersRepository.turnAdmin(userAlreadExist);
      return user;
    }
    throw new Error("Mensagem do erro");
  }
}

export { TurnUserAdminUseCase };
