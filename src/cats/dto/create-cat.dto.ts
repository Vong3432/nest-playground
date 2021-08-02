import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateCatDto {
    id: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsInt()
    age: number;
}
