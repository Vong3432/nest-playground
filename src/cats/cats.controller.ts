import { Controller, Get, Post, Body, Patch, Param, Delete, Header, ParseIntPipe, HttpStatus, ValidationPipe } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) { }

  @Post()
  @Header('Content-Type', 'application/json')
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  @Header('Content-Type', 'application/json')
  findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  @Header('Content-Type', 'application/json')
  findOne(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    id: number
  ) {
    return this.catsService.findOne(id);
  }

  @Patch(':id')
  @Header('Content-Type', 'application/json')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  @Header('Content-Type', 'application/json')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
