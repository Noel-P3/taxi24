import { IsNotEmpty, IsString, IsIn, IsUppercase } from 'class-validator';

const ALLOWED_STATUSES = ['TERMINADO'] as const;

export class UpdateViajeStatusDto {
  @IsNotEmpty()
  @IsString()
  @IsIn(ALLOWED_STATUSES, { message: 'El estado solo puede ser TERMINADO' })
  @IsUppercase({ message: 'El estado debe estar en mayúsculas.' })
  status: (typeof ALLOWED_STATUSES)[number];
}
