export type OrderProduct = {
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    quantity: number;
    totalPrice: number;
}

export type Order = {
    id: string;
    products: OrderProduct[];
    totalPrice: number;
}