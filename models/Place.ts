export interface Transport {
  type: 'BTS' | 'MRT' | 'BUS' | 'OTHER';
  label: string;
}

export interface PollingPlace {
  id: number;
  name: string;
  address: string;
  image: string | null;
  transports: Transport[];
}

export interface ElectionArea {
  id: number;
  number: number;
  name: string;
  pollingPlaces: PollingPlace[];
}
