import { User } from "../../secure-app/models/user";

export class AuthResult {
  isSuccess: boolean;
  user: User;
}
