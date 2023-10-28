interface IOrderPayments {
    stripOrderId?: string;
    paymentIntent: object;
}

export { IOrderPayments }