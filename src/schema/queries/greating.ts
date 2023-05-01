import { GraphQLString } from "graphql"
export const GREATING = {
    type: GraphQLString,
    resolve: () => 'hello world'
}
