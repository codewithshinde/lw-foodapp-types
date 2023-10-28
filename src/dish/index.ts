interface Dish {
    dishId?: string;
    name: string;
    description: string;
    cuisine?: string;
    price: number;
    currency?: string;
    restaurantId: string;
    image?: string;
}

export { Dish }