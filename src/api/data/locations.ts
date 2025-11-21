import type { LocationInterface } from "@/types/api";

export const createLocation = (location: LocationInterface): LocationInterface => {
  const { id, name, country } = location;

  return {
    id,
    country,
    name,
    createdAt: new Date(),
    modifiedAt: new Date(),
  };
};

export const locations: LocationInterface[] = [
  createLocation({
    id: 1,
    name: "London",
    country: "United Kingdom",
  }),
  createLocation({
    id: 2,
    name: "Paris",
    country: "France",
  }),
];
