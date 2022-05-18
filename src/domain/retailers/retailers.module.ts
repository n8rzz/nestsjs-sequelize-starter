import { Module } from '@nestjs/common';
import { RetailersService } from './retailers.service';
import { RetailersController } from './retailers.controller';
import { retailersProviders } from './retailers.providers';

@Module({
  controllers: [RetailersController],
  providers: [RetailersService, ...retailersProviders],
})
export class RetailersModule {}
