import { IPokemon, IResultPokemon } from "../types/apiType";

export const paginationObject = (
  items: IPokemon[],
  pageActual: number,
  limitItems: number
) => {
  let result: IPokemon[] = [] as IPokemon[];
  let totalPage = Math.ceil(items.length / limitItems);
  let count = pageActual * limitItems - limitItems;
  let delimiter = count + limitItems;

  if (pageActual <= totalPage) {
    for (let i = count; i < delimiter; i++) {
      if (items[i] != null) {
        result.push(items[i]);
      }
      count++;
    }
  }

  return { result, totalPage };
};

export const pagination = (
  items: IResultPokemon[],
  pageActual: number,
  limitItems: number
) => {
  let result: IResultPokemon[] = [] as IResultPokemon[];
  let totalPage = Math.ceil(items.length / limitItems);
  let count = pageActual * limitItems - limitItems;
  let delimiter = count + limitItems;

  if (pageActual <= totalPage) {
    for (let i = count; i < delimiter; i++) {
      if (items[i] != null) {
        result.push(items[i]);
      }
      count++;
    }
  }

  return { result, totalPage };
};
