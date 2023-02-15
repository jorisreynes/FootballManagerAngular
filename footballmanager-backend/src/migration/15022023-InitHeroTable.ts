import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';
export class InitHeroTable15022023 implements MigrationInterface{
    name = 'InitPlayerTable15022023';
    public async up(queryRunner: QueryRunner): Promise < void> {
        await queryRunner.createTable(
            new Table({
                name: 'player',
                columns:[
                    new TableColumn({
                        type: 'int',
                        name: 'id',
                        isGenerated: true,
                        isPrimary: true,
                    }),
                    new TableColumn({
                        type: 'varchar',
                        length: '30',
                        name: 'name',
                    }),
                    new TableColumn({
                        type: 'varchar',
                        length: '255',
                        name: 'picture'
                    }),
                    new TableColumn({
                        type: 'int',
                        length: '3',
                        name: 'age',
                    }),
                    new TableColumn({
                        type: 'varchar',
                        length: '30',
                        name: 'type'
                    }),
                    new TableColumn({
                        type: 'Date',
                        length: '30',
                        name: 'created'
                    }),
                ]
            }),
        ); 
    }
public async down(queryRunner: QueryRunner): Promise < void> { await queryRunner.dropTable('player'); 
} 
}
