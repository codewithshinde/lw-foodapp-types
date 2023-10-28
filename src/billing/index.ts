interface IBillStandards {
    deliveryFeePerKMcost: number;
    platformFeeInPercentage: number;
    gstInPercentage: number;
    restaurantfeeInPercentage: number;
}

interface IBillDetails {
    billingStandardsUsed: IBillStandards;
    totalItemsCost: number;
    deliveryFee: number;
    platformFee: number;
    gst: number;
    restaurantFee: number;
    totalDistanceInKM: number;
    totalCostToPay: number;
}

export { IBillStandards, IBillDetails };
