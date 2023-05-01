import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";

import { schema } from "./schema/index";

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

export default app;
