import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankModule } from './bank/bank.module';
import { testController } from './test.controller';
import { CategoryModule } from './category/category.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`stage.${process.env.STAGE}.env`],
    }),

    BankModule,
    CategoryModule,
    TransactionModule,
    HttpModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          autoLoadEntities: true,
          synchronize: true,
          logging: true,
          dropSchema: true,
        };
      },
    }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'db',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'postgres',
    //   database: 'postgres',
    //   autoLoadEntities: true,
    //   synchronize: true,
    //   logging: true,
    //   dropSchema: true,
    // }),

    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [testController],
})
export class AppModule {}
