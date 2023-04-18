interface InventoryStatus {
    label: string;
    value: string;
}
export interface Product {
    id?: string| number;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: InventoryStatus | string;
    category?: string;
    image?: string;
    rating?: number;
}
