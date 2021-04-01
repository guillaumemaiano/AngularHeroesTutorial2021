import { Mission } from './mission';
export interface Hero {
    id: number;
    name: string;
    power?: string;
    alterEgo?: string;
    mission?: Mission;
  }