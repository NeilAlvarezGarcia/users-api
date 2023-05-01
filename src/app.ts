import express from "express";
import { graphqlHTTP } from "express-graphql";

import { schema } from "./schema/index";

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

export default app;
