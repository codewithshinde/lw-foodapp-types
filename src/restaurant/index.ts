import { IAddress } from "../address";
import { Dish } from "../dish";

interface IOrderRestaurant extends Document {
    restaurantId: string;
    name: string;
    email: string;
    mobileNumber: string;
    dropAddress: IAddress; // Assuming "AddressSchema" corresponds to IAddress
    restaurantStatusOnOrder: 'ACCEPTED' | 'PREPARING' | 'READY_TO_PICK' | 'COMPLETE';
}

interface IRestaurant {
    id: string;
    name: string;
    description: string;
    cuisine: string;
    image: string;
    rating: string;
    totalReviews: string;
    branchName?: string;
    address: IAddress;
    dishes: Map<string, Dish>;
    specials: Map<string, Dish>;
}

export {IRestaurant, IOrderRestaurant}