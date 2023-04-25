import { Entity, Column, BaseEntity, PrimaryColumn } from 'typeorm';

@Entity()
export class BlacklistedJwt extends BaseEntity {
    @PrimaryColumn()
    token!: string;

    @Column()
    expirationDate!: Date;

    public toObject() {
        return {
            token: this.token,
            expirationDate: this.expirationDate,
        }
    }
}
