import { IsString, IsNumber, IsOptional, Min } from 'class-validator';

export class CreateProductDto {
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsNumber()
    @Min(0)
    price: number;

    @IsString()
    category: string;

    constructor(name: string, price: number, category: string, description?: string) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.description = description;
    }
}

export class ProductDto {
    id: string;
    name: string;
    description?: string;
    price: number;
    category: string;

    constructor(id: string, name: string, price: number, category: string, description?: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.description = description;
    }
}

export class Product {
    id: string;
    name: string;
    description?: string;
    price: number;
    category: string;

    constructor(id: string, name: string, price: number, category: string, description?: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.description = description;
    }

    static fromCreateProductDto(dto: CreateProductDto): Product {
        return new Product(
            this.generateId(),
            dto.name,
            dto.price,
            dto.category,
            dto.description
        );
    }

    static toProductDto(product: Product): ProductDto {
        return new ProductDto(
            product.id,
            product.name,
            product.price,
            product.category,
            product.description
        );
    }

    private static generateId(): string {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
}