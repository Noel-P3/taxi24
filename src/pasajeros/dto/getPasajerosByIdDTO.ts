import { IsNotEmpty } from 'class-validator';

export class GetPasajerosByIdDTO {
    @IsNotEmpty({ message: 'El ID no puede estar vacío.' })
    id: number;
}