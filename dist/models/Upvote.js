"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upvote = void 0;
const typeorm_1 = require("typeorm");
const skills_1 = require("./skills");
const wilders_1 = require("./wilders");
const type_graphql_1 = require("type-graphql");
let Upvote = class Upvote {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", Object)
], Upvote.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Upvote.prototype, "upvotes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => wilders_1.Wilder, "upvotes", { onDelete: "CASCADE" }),
    (0, type_graphql_1.Field)(() => [wilders_1.Wilder]),
    __metadata("design:type", wilders_1.Wilder)
], Upvote.prototype, "wilder", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => skills_1.Skill, "upvotes"),
    (0, type_graphql_1.Field)(() => [skills_1.Skill]),
    __metadata("design:type", skills_1.Skill)
], Upvote.prototype, "skill", void 0);
Upvote = __decorate([
    (0, typeorm_1.Entity)(),
    (0, type_graphql_1.ObjectType)()
], Upvote);
exports.Upvote = Upvote;