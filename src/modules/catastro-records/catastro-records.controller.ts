import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CatastroRecordsService } from './catastro-records.service';
import { CreateCatastroRecordDto } from './dto/create-catastro-record.dto';
import { UpdateCatastroRecordDto } from './dto/update-catastro-record.dto';

@Controller('catastro-records')
export class CatastroRecordsController {
  constructor(
    private readonly catastroRecordsService: CatastroRecordsService,
  ) {}

  @Post()
  create(@Body() createCatastroRecordDto: CreateCatastroRecordDto) {
    return this.catastroRecordsService.create(createCatastroRecordDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('address=:address')
  getRecordsByPredialAddress(@Param('address') address: string) {
    return this.catastroRecordsService.getRecordsByPredialAddress(address);
  }

  @UseGuards(JwtAuthGuard)
  @Get('reference=:reference')
  getRecordsByPredialReference(@Param('reference') reference: number) {
    return this.catastroRecordsService.getRecordsByCatastralReference(
      reference,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('registration=:registration')
  getRecordsByPredialRegistration(@Param('registration') registration: string) {
    return this.catastroRecordsService.getRecordsByPredialRegistration(
      registration,
    );
  }

  @Get()
  getRecords() {
    return this.catastroRecordsService.getRecords();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catastroRecordsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCatastroRecordDto: UpdateCatastroRecordDto,
  ) {
    return this.catastroRecordsService.update(+id, updateCatastroRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catastroRecordsService.remove(+id);
  }
}
