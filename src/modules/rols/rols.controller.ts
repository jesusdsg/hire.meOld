import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { RolsService } from './rols.service';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from '@common/filters/HttpException.filter';
import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';

@ApiTags('rols')
@Controller('rols')
export class RolsController {
  constructor(private readonly rolsService: RolsService) {}

  @UseFilters(HttpExceptionFilter)
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createRolDto: CreateRolDto) {
    return this.rolsService.create(createRolDto);
  }

  @UseFilters(HttpExceptionFilter)
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.rolsService.findAll();
  }

  @UseFilters(HttpExceptionFilter)
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolsService.findOne(+id);
  }

  @UseFilters(HttpExceptionFilter)
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRolDto: UpdateRolDto) {
    return this.rolsService.update(+id, updateRolDto);
  }

  @UseFilters(HttpExceptionFilter)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolsService.remove(+id);
  }
}
