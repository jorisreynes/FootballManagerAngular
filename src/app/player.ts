export class Player {
  id: number;
  age: number | undefined;
  name: string;
  picture: string;
  type: string;
  created: Date;

  constructor(id: number, age: number, name: string, picture: string, type: string, created: Date) {
    this.id = id;
    this.age = age? age : undefined;
    this.name = name;
    this.picture = picture;
    this.type = type;
    this.created = created;
  }
}