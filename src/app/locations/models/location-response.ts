import { ApiLocation } from "./location";

export interface LocationResponse {
    info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: ApiLocation[];
}
