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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillResolver = void 0;
const type_graphql_1 = require("type-graphql");
const skills_1 = require("../../models/skills");
const utils_1 = __importDefault(require("../../utils"));
let SkillResolver = class SkillResolver {
    async createSkill(name) {
        return await utils_1.default.getRepository(skills_1.Skill).save({ name });
    }
    async deleteSkill() {
        return await utils_1.default
            .getRepository(skills_1.Skill)
            .createQueryBuilder()
            .delete()
            .from(skills_1.Skill)
            .execute();
    }
    async deleteOneSkill(id) {
        return await utils_1.default
            .getRepository(skills_1.Skill)
            .createQueryBuilder()
            .delete()
            .where("id = :id", { id })
            .execute();
    }
    async skills() {
        return await utils_1.default
            .getRepository(skills_1.Skill)
            .find({ relations: ["upvotes", "upvotes.wilder"] });
    }
    async skill(id) {
        return await utils_1.default
            .getRepository(skills_1.Skill)
            .findOne({ where: { id }, relations: ["upvotes", "upvotes.wilder"] });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => skills_1.Skill),
    __param(0, (0, type_graphql_1.Arg)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SkillResolver.prototype, "createSkill", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => skills_1.Skill),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SkillResolver.prototype, "deleteSkill", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => skills_1.Skill),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SkillResolver.prototype, "deleteOneSkill", null);
__decorate([
    (0, type_graphql_1.Query)(() => [skills_1.Skill]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SkillResolver.prototype, "skills", null);
__decorate([
    (0, type_graphql_1.Query)(() => skills_1.Skill, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SkillResolver.prototype, "skill", null);
SkillResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], SkillResolver);
exports.SkillResolver = SkillResolver;
