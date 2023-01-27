import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { BankModule } from './bank/bank.module';
import { CategoryModule } from './category/category.module';
import { TransactionModule } from './transaction/transaction.module';

export const ImportsMain = {
  imports: [
    AuthModule,
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

    ConfigModule.forRoot({
      envFilePath: [`stage.${process.env.STAGE}.env`],
      isGlobal: true,
    }),
  ],
  controllers: [],
};
