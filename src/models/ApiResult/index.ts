import { Character } from "../Character";

export interface ApiResult {
  info: Info;
  results: Character[];
}

export interface Info {
  count: number;
  next: string;
  pages: number;
  prev: null;
}
