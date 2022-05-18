import { Repository } from '../../constants/repository.constants';
import { Retailer } from './entities/retailer.entity';

export const retailersProviders = [
  {
    provide: Repository.Retailer,
    useValue: Retailer,
  },
];
