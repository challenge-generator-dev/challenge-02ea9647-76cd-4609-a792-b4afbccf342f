export class DuplicateProductException extends Error {
    private readonly productName: string;
    private readonly existingProductId: string | null;
    private readonly suggestedAction: string;

    constructor(productName: string, existingProductId?: string) {
        const message = `El producto '${productName}' ya existe en el catálogo`;
        super(message);
        this.name = 'DuplicateProductException';
        this.productName = productName;
        this.existingProductId = existingProductId || null;
        this.suggestedAction = 'Utilice otro nombre para el producto o actualice el producto existente';
        
        Object.setPrototypeOf(this, DuplicateProductException.prototype);
    }

    getProductName(): string {
        return this.productName;
    }

    getExistingProductId(): string | null {
        return this.existingProductId;
    }

    getSuggestedAction(): string {
        return this.suggestedAction;
    }

    getHttpStatus(): number {
        return 409;
    }

    toJSON(): object {
        return {
            error: this.name,
            message: this.message,
            statusCode: this.getHttpStatus(),
            details: {
                productName: this.productName,
                existingProductId: this.existingProductId,
                suggestedAction: this.suggestedAction
            }
        };
    }

    toResponse(): { status: number; body: object } {
        return {
            status: this.getHttpStatus(),
            body: this.toJSON()
        };
    }
}