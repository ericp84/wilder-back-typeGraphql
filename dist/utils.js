"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skills_1 = require("./models/skills");
const Upvote_1 = require("./models/Upvote");
const wilders_1 = require("./models/wilders");
const typeorm_1 = require("typeorm");
const datasource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "./wildersdb.sqlite",
    synchronize: true,
    entities: [wilders_1.Wilder, skills_1.Skill, Upvote_1.Upvote],
    logging: ["query", "error"],
});
exports.default = datasource;
