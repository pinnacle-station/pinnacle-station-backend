import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import { SquadService } from 'src/services/Squad.service';
import { SquadREQUESTCreate } from './Squad.request';

@Controller('/squad')
class SquadController {
  constructor(private squadService: SquadService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() body: SquadREQUESTCreate) {
    return await this.squadService.create(body);
  }

  @Get('/')
  async getAllRegistersWithFilters(@Body() body: SquadREQUESTCreate) {
    return await this.squadService.getAllRegistersWithFilters(body);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.squadService.getById(id);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return await this.squadService.deleteById(id);
  }
}

export { SquadController };