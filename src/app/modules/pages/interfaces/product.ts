/* interface InventoryStatus {
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
} */

//

export interface Category {
    id? : number;
    category?: string;
}


export interface Product {
  id?: number;
  category_id?: number;
  nombre?: string;
  descripcion?: string;
  imagen?: string;
  stock?: number;
  precio_venta?: number;
  margen_ganancia?: number;
  estado?: string;
  created_at?: Date;
  updated_at?: Date;
  category : Category;
  quantity?:number;
}
