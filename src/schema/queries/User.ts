import { GraphQLID, GraphQLList, GraphQLNonNull } from "graphql";

import { Users } from "../../db/entities/users";
import { UserType } from "../typeDefs/User";

import { UserIdArg } from "../types";

const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  async resolve() {
    const result = await Users.find();

    return result;
  },
};

const GET_USER = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  async resolve(_: any, args: UserIdArg) {
    const { id } = args;

    const result = await Users.findOneBy({
      id,
    });

    return result;
  },
};

export { GET_ALL_USERS, GET_USER };
