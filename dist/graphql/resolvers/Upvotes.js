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
exports.UpvoteResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Upvote_1 = require("../../models/Upvote");
const utils_1 = __importDefault(require("../../utils"));
let UpvoteResolver = class UpvoteResolver {
    async createUpvote(wilderId, skillId) {
        const existingUpvote = await utils_1.default
            .getRepository(Upvote_1.Upvote)
            .findOneBy({ skill: { id: skillId }, wilder: { id: wilderId } });
        if (existingUpvote) {
            return null;
        }
        else {
            const upvote = await utils_1.default.getRepository(Upvote_1.Upvote).save({
                wilder: { id: wilderId },
                skill: { id: skillId },
            });
            return upvote;
        }
    }
    async upVote(upvoteId) {
        const existingUpVote = await utils_1.default
            .getRepository(Upvote_1.Upvote)
            .findOneBy({ id: upvoteId });
        console.log("🚀 ~ file: Upvotes.ts ~ line 30 ~ UpvoteResolver ~ upVote ~ existingUpVote", existingUpVote);
        if (existingUpVote) {
            existingUpVote.upvotes += 1;
        }
        await utils_1.default.getRepository(Upvote_1.Upvote).save(existingUpVote);
        return existingUpVote;
    }
    async upvotes() {
        return await utils_1.default.getRepository(Upvote_1.Upvote).find({});
    }
    async upvote(id) {
        return await utils_1.default.getRepository(Upvote_1.Upvote).findOne({ where: { id } });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Upvote_1.Upvote),
    __param(0, (0, type_graphql_1.Arg)("wilderId", () => type_graphql_1.ID)),
    __param(1, (0, type_graphql_1.Arg)("skillId", () => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], UpvoteResolver.prototype, "createUpvote", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Upvote_1.Upvote),
    __param(0, (0, type_graphql_1.Arg)("upvoteId", () => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UpvoteResolver.prototype, "upVote", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Upvote_1.Upvote]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UpvoteResolver.prototype, "upvotes", null);
__decorate([
    (0, type_graphql_1.Query)(() => Upvote_1.Upvote, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UpvoteResolver.prototype, "upvote", null);
UpvoteResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UpvoteResolver);
exports.UpvoteResolver = UpvoteResolver;
