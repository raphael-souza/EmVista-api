import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate } from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import * as bcrypt from "bcryptjs";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    // @Column()
    // @Length(4, 20)
    // firstName: string;

    // @Column()
    // lastName: string;

    // @Column()
    // age: number;

    @Column()
    @Length(4, 100)
    password: string;

    @Column()
    email: string;

    // @Column()
    // @IsNotEmpty()
    // role: string;

    // @Column()
    // @CreateDateColumn()
    // createdAt: Date;

    // @Column()
    // @UpdateDateColumn()
    // updatedAt: Date;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    // checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    //     return bcrypt.compareSync(unencryptedPassword, this.password);
    // }

}
export default User 