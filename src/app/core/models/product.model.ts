export interface ProductModel {
    id: number;
    name: string;
    type: 'Fruit' | 'Vegetable';
    price: number;
    unit: 'kg' | 'piece' | 'head';
    origin: string;
    imageUrl: string;
    description: string;
    organic?: boolean;
    portuguese?: boolean;
    nutriScore?: number; // 0 to 5
}
