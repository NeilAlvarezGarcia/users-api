import { GraphQLID, GraphQLNonNull, GraphQLString } from "graphql";
import { hash } from "bcryptjs";

import { Users } from "../../db/entities/users";
import { MessageType, UserType } from "../typeDefs/User";

import { UserDataArgs, UserIdArg } from "../types";

const CREATE_USER = {
  type: UserType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(_: any, args: UserDataArgs) {
    const { name, username, password } = args;

    const hashedPassword = await hash(password, 10);

    const result = await Users.create({
      name,
      username,
      password: hashedPassword,
    }).save();

    return result;
  },
};

const UPDATE_USER = {
  type: MessageType,
  args: {
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  async resolve(_: any, args: UserDataArgs) {
    const { id, ...rest } = args;

    const { affected } = await Users.update(id, rest);

    if (affected)
      return {
        message: `User updated successfully`,
        status: true,
      };

    return {
      message: `No user with id ${id}`,
      status: false,
    };
  },
};

const DELETE_USER = {
  type: MessageType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  async resolve(_: any, args: UserIdArg) {
    const { id } = args;

    const { affected } = await Users.delete(id);

    if (affected)
      return {
        message: "User deleted",
        status: true,
      };

    return {
      message: `No user with id ${id}`,
      status: false,
    };
  },
};

export { CREATE_USER, UPDATE_USER, DELETE_USER };
