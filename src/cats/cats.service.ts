import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(createCatDto: CreateCatDto) {
    this.cats.push(createCatDto)
    return { msg: 'This action adds a new meow' };
  }

  findAll() {
    return { msg: `This action returns all meows`, data: this.cats };
  }

  findOne(id: number) {
    return { msg: `This action returns a #${id} meow` };
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return { msg: `This action updates a #${id} meow` };
  }

  remove(id: number) {
    return { msg: `This action removes a #${id} meow` };
  }
}
