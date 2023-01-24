import { IPlayer } from "shared";

export class Player implements IPlayer{
    id: number;
    age: number;
    name: string;
    picture: string;
    type: string;
    created: Date;
  }