import { ObjectId } from "mongodb";

export interface ObjectItem {
  _id: ObjectId;
  id?: number;
  name: string;
  desc: string;
  objectId: string;
  categoryId: string;
  categoryName?: string;
}
export interface Category {
  _id: string;
  id: number;
  name: string;
}

export interface Beacon {
  _id: ObjectId;
  beacon_id: string;
  rssi: number;
}

export interface Navigation {
  start: string;
  end?: string;
}

export interface NavigationContextType {
  navigation: Navigation;
  setNavigation: React.Dispatch<React.SetStateAction<Navigation>>;
  isEditMode: boolean;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MapDataContextType {
  objects: ObjectItem[];
  categories: Category[];
  beacons?: Beacon[];
  refetchData: () => void;
}

export interface AdminContextType {
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface BleBeacon {
  name: string;
  id: string;
  rssi: number;
  txPower: number;
  uuids: string[];
}
