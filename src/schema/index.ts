import { GraphQLSchema, GraphQLObjectType } from "graphql";

import { GREATING } from "./queries/greating";
import { GET_ALL_USERS, GET_USER } from "./queries/User";
import { CREATE_USER, DELETE_USER, UPDATE_USER } from "./mutations/user";

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    greating: GREATING,
    getAllUsers: GET_ALL_USERS,
    getUser: GET_USER,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    updateUser: UPDATE_USER,
    deleteUser: DELETE_USER,
  },
});

export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
