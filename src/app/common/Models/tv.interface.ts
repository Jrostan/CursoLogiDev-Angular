import { ColorsTv, ResolutionTv, SizaTv } from "./tv.types";

export interface ITv{
  id: number,
  color: ColorsTv;
  rack: boolean;
  tamanio: SizaTv;
  resolution: ResolutionTv;
}
