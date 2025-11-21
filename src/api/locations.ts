import type { LocationInterface } from '@/types/api';
import { getDatabaseTable } from './helpers';

export const getLocationById = (id: number): LocationInterface | undefined => {
  const locations = getDatabaseTable('locations');
  if (!locations) {
    console.log('No locations table found');
    return;
  }

  return locations.find((location: LocationInterface) => location.id === id);
};
