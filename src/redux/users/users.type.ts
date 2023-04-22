import { Mode } from "@/types/mode.type";
import { UserModel } from "@/types/user.type";

export enum UsersActionType {
    FIND_ALL_USERS = 'FIND_ALL_USERS',
}

export interface FindAllUsers {
    type: UsersActionType.FIND_ALL_USERS;
    payload?: UserModel[];
    mode?: Mode;
    errorMessage?: string;
}


export type UsersActions = FindAllUsers