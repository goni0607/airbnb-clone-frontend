export interface IRoomPhoto {
    pk: number;
    file: string;
    description: string;
}

export interface IRoomList {
    pk: number;
    name: string;
    country: string;
    city: string;
    price: number;
    rating: number;
    is_owner: boolean;
    photos: IRoomPhoto[];
  }

export interface IRoomOwner {
    name: string;
    avatar: string;
    username: string;
}

export interface IAmenity {
    name: string;
    description: string;
}

export interface IRoomDetail extends IRoomList {
    id: number;
    created_at: string;
    updated_at: string;
    toilets: number;
    rooms: number;
    description: string;
    address: string;
    pet_friendly: boolean;
    kind: string;
    is_owner: boolean;
    is_liked: boolean;
    category: {
        name: string;
        kind: string;
    };
    owner: IRoomOwner;
    amenities: IAmenity[];
}

export interface IReview {
    user: IRoomOwner;
    payload: string;
    rating: number;
}