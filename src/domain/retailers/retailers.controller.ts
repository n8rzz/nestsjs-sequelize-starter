import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateRetailerDto } from './dto/create-retailer.dto';
import { RetailerDto } from './dto/retailer.dto';
import { RetailersService } from './retailers.service';

@Controller('retailers')
export class RetailersController {
  constructor(private readonly _retailersService: RetailersService) {}

  @Post()
  // @HttpCode(201)
  create(@Body() createRetailerDto: CreateRetailerDto) {
    return this._retailersService.create(createRetailerDto);
  }

  @Get()
  findAll() {
    return this._retailersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._retailersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRetailerDto: RetailerDto) {
    return this._retailersService.update(id, updateRetailerDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this._retailersService.remove(id);
  }
}
