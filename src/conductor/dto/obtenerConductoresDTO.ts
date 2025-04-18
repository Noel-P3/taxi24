import { IsOptional, IsString, IsNumber, IsIn } from 'class-validator';

const ALLOWED_STATUSES = ['ACTIVO', 'INACTIVO'] as const;

export class GetConductoresDto {
    @IsOptional()
    @IsString({ message: 'El estado debe ser una cadena de texto.' })
    @IsIn(ALLOWED_STATUSES, { message: 'El estado solo puede ser ACTIVO O INACTIVO' })
    status?: (typeof ALLOWED_STATUSES)[number];

    @IsOptional()
    latitud?: number;

    @IsOptional()
    longitud?: number;

    @IsOptional()
    radio?: number;
}