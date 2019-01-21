import { Options, createDefaultOptions } from "./pokemons-api";

export const calculateUrlStringByOptions = (options: Options, apiUrl: string): string => {
    let url = `${apiUrl}/api/v2/pokemon/`;
    if (options === undefined) {
        options = createDefaultOptions();
    }
    let queryString = `limit=${options.pageSize}`;
    if (options.pageIndex && options.pageSize) {
        let pageIndex = options.pageIndex === 0 ? 1:options.pageIndex;
        let offset  = (pageIndex-1)*options.pageSize;
        queryString += `&offset=${offset}`
    }
    return `${url}?${queryString}`;
}