export class NotFoundException extends Error {
    private readonly resourceType: string;
    private readonly resourceIdentifier: string | number;
    private readonly searchFields: Record<string, unknown>;
    private readonly suggestSearch: boolean;

    constructor(resourceType: string, identifier: string | number, additionalSearchFields?: Record<string, unknown>) {
        const message = `No se encontró el ${resourceType} con identificador '${identifier}'`;
        super(message);
        this.name = 'NotFoundException';
        this.resourceType = resourceType;
        this.resourceIdentifier = identifier;
        this.searchFields = additionalSearchFields || {};
        this.suggestSearch = Object.keys(this.searchFields).length > 0;
        
        Object.setPrototypeOf(this, NotFoundException.prototype);
    }

    getResourceType(): string {
        return this.resourceType;
    }

    getResourceIdentifier(): string | number {
        return this.resourceIdentifier;
    }

    getSearchFields(): Record<string, unknown> {
        return { ...this.searchFields };
    }

    getSuggestSearch(): boolean {
        return this.suggestSearch;
    }

    getHttpStatus(): number {
        return 404;
    }

    toJSON(): object {
        const response: Record<string, unknown> = {
            error: this.name,
            message: this.message,
            statusCode: this.getHttpStatus(),
            details: {
                resourceType: this.resourceType,
                resourceIdentifier: this.resourceIdentifier
            }
        };
        
        if (this.suggestSearch) {
            response.details.searchFields = this.searchFields;
            response.suggestion = 'Intente con otros criterios de búsqueda';
        }
        
        return response;
    }

    toResponse(): { status: number; body: object } {
        return {
            status: this.getHttpStatus(),
            body: this.toJSON()
        };
    }

    static forProduct(productId: string): NotFoundException {
        return new NotFoundException('producto', productId);
    }

    static forProductByName(productName: string): NotFoundException {
        return new NotFoundException('producto', productName, { name: productName });
    }
}