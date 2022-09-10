interface BaseUser {
    email: string;
    username: string;
}

export interface User extends BaseUser {
    id: string;
}

export interface CreateUserRequest extends BaseUser {
    password: string
}