export interface UserDataArgs extends UserIdArg {
  name: string;
  username: string;
  password: string;
}

export interface UserIdArg {
  id: number;
}
