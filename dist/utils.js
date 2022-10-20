"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Skill_1 = require("./models/Skill");
const Upvote_1 = require("./models/Upvote");
const Wilder_1 = require("./models/Wilder");
const typeorm_1 = require("typeorm");
const datasource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "./wildersdb.sqlite",
    synchronize: true,
    entities: [Wilder_1.Wilder, Skill_1.Skill, Upvote_1.Upvote],
    logging: ["query", "error"],
});
exports.default = datasource;
