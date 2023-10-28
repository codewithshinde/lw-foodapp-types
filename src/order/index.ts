import { IBillDetails } from "../billing";
import { IOrderDeliveryPersonSchema } from "../delivery";
import { IOrderPayments } from "../payments";
import { IOrderRestaurant } from "../restaurant";
import { IOrderUser } from "../user";

interface IOrder {
    orderId: string;
    orderStatus: 'RECEIVED' | 'ACCEPTED' | 'ASSIGNED' | 'PICKED_UP' | 'DELIVERED' | 'REJECTED' | 'CANCELLED' | 'REFUND';
    billingDetails: IBillDetails;
    paymentsDetails: IOrderPayments;
    userDetails: IOrderUser;
    restaurantDetails: IOrderRestaurant;
    deliveryPerson: IOrderDeliveryPersonSchema;
}

export { IOrder }