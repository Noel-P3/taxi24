import { Injectable } from '@nestjs/common';
import { Conductores } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConductorService {
    constructor(private prisma: PrismaService) { }

    async getAll(): Promise<Conductores[]> {
        return this.prisma.conductores.findMany();
    }

    async getAllAlvaible(): Promise<Conductores[]> {
        return this.prisma.conductores.findMany({
            where: {disponibilidadId: 1}
        });
    }

    async getById(id: number): Promise<Conductores> {
        return this.prisma.conductores.findUnique({
            where: {id}
        });
    }


}
