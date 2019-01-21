import { Options, createDefaultOptions } from "./pokemons-api";

export const calculateUrlStringByOptions = (options: Options, apiUrl: string): string => {
    let url = `${apiUrl}/api/v2/pokemon/`;
    if (options === undefined) {
        options = createDefaultOptions();
    }
    let queryString = ``;
    if (options.limit && !isNaN(options.limit)) {
        queryString += `limit=${options.limit}`;
    }
    return `${url}?${queryString}`;
}