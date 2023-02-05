import { User } from "./IUser";

export interface ISession {
    authToken?: string;
    user?: User
}
