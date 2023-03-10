import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "players",
    synchronize: true,
    logging: false,
    entities:['src/**/**.entity{.ts,.js}'],
    migrations:['migrations/**/*{.ts,.js}'],
    subscribers:['src/**/**.subscriber{.ts,.js}'],
})
