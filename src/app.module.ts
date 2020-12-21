import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzModule } from './pizz/pizz.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [PizzModule,MongooseModule.forRoot(`mongodb+srv://almas:1205tFACtn1HnCgu@cluster0.yyvhq.mongodb.net/almas`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
