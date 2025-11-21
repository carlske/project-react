export interface ListingInterface {
  availability: { from: Date; to: Date };
  description: string;
  guestFavorite?: boolean;
  id: number;
  maxGuests: number;
  name: string;
  locationId: number;
  images: string[];
  price: number;
  rating: number;
  userId: number;
  createdAt?: Date;
  modifiedAt?: Date;
}

export interface LocationInterface {
  id: number;
  name: string;
  country: string;
  createdAt?: Date;
  modifiedAt?: Date;
}

export interface ReviewInterface {
  id: number;
  userId: number;
  listingId: number;
  rating: number;
  comment: string;
  createdAt?: Date;
  modifiedAt?: Date;
}

export interface UserInterface {
  id: number;
  avatarUrl: string;
  bio: string;
  email: string;
  firstName: string;
  lastName: string;
  initials: string;
  password: string;
  createdAt?: Date;
  modifiedAt?: Date;
}
