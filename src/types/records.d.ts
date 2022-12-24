import { IStats } from "../services/slices/cards";
import { TGrid } from "./card";

export type TRecords = {
  creator: string;
  displayName: string;
  mapId: string;
  recordId: string;
  stats: IStats;
  userEmail: string;
  userId: string;
};

export type TDBRecords = {
  [key: string]: TRecords & { map?: TGrid };
};

export type TDBRecord = TRecords & { map?: TGrid };
