import { IsNotEmpty, IsNumber } from 'class-validator';

export class CrearViajeDto {
  @IsNumber()
  @IsNotEmpty()
  conductorId: number;
  @IsNumber()
  @IsNotEmpty()
  pasajeroId: number;
  @IsNumber()
  @IsNotEmpty()
  latitudDesde: number;
  @IsNumber()
  @IsNotEmpty()
  longitudDesde: number;
  @IsNumber()
  @IsNotEmpty()
  latitudHasta: number;
  @IsNumber()
  @IsNotEmpty()
  longitudHasta: number;
}
