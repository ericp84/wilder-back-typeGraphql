import { Skill } from "./models/Skill";
import { Upvote } from "./models/Upvote";
import { Wilder } from "./models/Wilder";
import { DataSource } from "typeorm";

const datasource = new DataSource({
  type: "postgres",
  host: "db",
  username: "postgres",
  password: "supersecret",
  database: "postgres",
  synchronize: true,
  entities: [Wilder, Skill, Upvote],
  logging: ["query", "error"],
});

export default datasource;
