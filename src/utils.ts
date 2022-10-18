import { Skill } from "./models/skills";
import { Upvote } from "./models/Upvote";
import { Wilder } from "./models/wilders";
import { DataSource } from "typeorm";

const datasource = new DataSource({
  type: "sqlite",
  database: "./wildersdb.sqlite",
  synchronize: true,
  entities: [Wilder, Skill, Upvote],
  logging: ["query", "error"],
});

export default datasource;
