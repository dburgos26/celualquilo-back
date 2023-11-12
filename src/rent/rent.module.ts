import { Module } from '@nestjs/common';

import { RentController } from './rent.controller';
import { RentService } from './rent.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { RentEntity } from './rent.entity';
import { PhoneEntity } from 'src/phone/phone.entity';
import { UserEntity } from 'src/user/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([RentEntity, PhoneEntity, UserEntity])],
    controllers: [RentController],
    providers: [RentService],
})
export class RentModule { }
