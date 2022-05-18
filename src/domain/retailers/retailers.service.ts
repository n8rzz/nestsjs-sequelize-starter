import { Inject, Injectable } from '@nestjs/common';
import { Repository } from '../../constants/repository.constants';
import { CreateRetailerDto } from './dto/create-retailer.dto';
import { RetailerDto } from './dto/retailer.dto';
import { Retailer } from './entities/retailer.entity';

@Injectable()
export class RetailersService {
  constructor(
    @Inject(Repository.Retailer)
    private readonly _retailersRepository: typeof Retailer,
  ) {}

  async create(createRetailerDto: CreateRetailerDto) {
    return this._retailersRepository.create<Retailer>({
      retailerName: createRetailerDto.retailerName,
      isArchived: createRetailerDto.isArchived,
    });
  }

  async findAll() {
    return this._retailersRepository.findAll({ where: { isArchived: false } });
  }

  async findOne(id: string) {
    return this._retailersRepository.findOne({ where: { id } });
  }

  async update(id: string, updateRetailerDto: RetailerDto) {
    const [numberOfAffectedRows, [updatedRetailer]] =
      await this._retailersRepository.update(
        { ...updateRetailerDto },
        { where: { id }, returning: true },
      );

    return { numberOfAffectedRows, updatedRetailer };
  }

  remove(id: string) {
    return this._retailersRepository.destroy({ where: { id } });
  }
}
