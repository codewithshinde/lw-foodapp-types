interface IAddress {
    id: string;
    area: string;
    address: string;
    flatOrHouseOrBlockNo: string;
    HouseOrApptName: string;
    landmark: string;
    type: string;
    city: string;
    state: string;
    country: string;
    postcode: string;
    location: {
        latitude: number;
        longitude: number;
    };
}

export { IAddress }