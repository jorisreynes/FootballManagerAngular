import{ IPlayer} from '@shared';
import{ Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
@Entity('player-table')
export class Player implements IPlayer{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    age: number | undefined;
    @Column()
    name: string;
    @Column()
    picture: string;
    @Column()
    type: string;
    @Column()
    created: Date;
}