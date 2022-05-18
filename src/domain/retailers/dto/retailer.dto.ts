import { PartialType } from '@nestjs/mapped-types';
import { CreateRetailerDto } from './create-retailer.dto';

export class RetailerDto extends PartialType(CreateRetailerDto) {
  readonly retailerName: string;
  readonly isArchived: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
