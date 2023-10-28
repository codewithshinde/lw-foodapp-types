import { IAddress } from "../address";
import { Dish } from "../dish";


interface UserCartItem {
    restuarantId: string;
    items: [{
        id: string;
        dishDetails: Dish;
        quantity: number;
    }]
}

interface IOrderUser {
    name: string;
    email: string;
    mobileNumber: string;
    deliveryAddress: IAddress;
    orderedItems: UserCartItem;
}

interface IUser {
    name?: string;
    email?: string;
    mobileNumber: string;
    otp?: string;
    role?: string;
    isExistingUser?: boolean;
    cart: UserCartItem;
    address: IAddress[];
}

export { IUser, UserCartItem, IOrderUser }