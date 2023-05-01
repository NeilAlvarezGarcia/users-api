import { GraphQLBoolean, GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
});
const MessageType = new GraphQLObjectType({
  name: "Message",
  fields: {
    status: { type: GraphQLBoolean },
    message: { type: GraphQLString },
  },
});

export { UserType, MessageType };
