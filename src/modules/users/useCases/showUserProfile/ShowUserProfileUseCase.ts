import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User | void {
    const user = this.usersRepository.findById(user_id);
    if (user) {
      return user;
    }
    throw new Error("Mensagem do erro");
  }
}

export { ShowUserProfileUseCase };
