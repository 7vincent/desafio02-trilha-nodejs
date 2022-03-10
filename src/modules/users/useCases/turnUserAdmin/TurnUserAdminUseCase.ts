import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userAlreadExist = this.usersRepository.findById(user_id);
    if (!userAlreadExist) {
      throw new Error("User does exists!");
    }

    return this.usersRepository.turnAdmin(userAlreadExist);
  }
}

export { TurnUserAdminUseCase };
