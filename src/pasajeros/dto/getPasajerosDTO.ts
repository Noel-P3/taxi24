import { IsOptional, IsString, IsIn } from 'class-validator';

const ALLOWED_STATUSES = ['ACTIVO', 'INACTIVO'] as const;

export class GetPasajerosDTO {
    @IsOptional()
    @IsString({ message: 'El estado debe ser una cadena de texto.' })
    @IsIn(ALLOWED_STATUSES, { message: 'El estado solo puede ser ACTIVO O INACTIVO' })
    status?: (typeof ALLOWED_STATUSES)[number];
}