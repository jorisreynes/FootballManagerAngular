"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerService = void 0;
const common_1 = require("@nestjs/common");
let PlayerService = class PlayerService {
    create(createPlayerDto) {
        return 'This action adds a new player';
    }
    findAll() {
        return `This action returns all player`;
    }
    findOne(id) {
        return `This action returns a #${id} player`;
    }
    update(id, updatePlayerDto) {
        return `This action updates a #${id} player`;
    }
    remove(id) {
        return `This action removes a #${id} player`;
    }
};
PlayerService = __decorate([
    (0, common_1.Injectable)()
], PlayerService);
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map