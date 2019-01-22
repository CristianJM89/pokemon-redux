import { calculateUrlStringByOptions } from "./pokemons-api.business";
import { Options, createDefaultOptions } from "./pokemons-api";
import { settings } from "../common-app";

const pokemonsUrl = 'http://pokeapi.salestock.net';

describe(`default value is sent when options is null`, () => {
    it(`should send default values`, () => {
        //ARRANGE
        let options: Options = undefined;
        let expectedUrl = `${pokemonsUrl}/api/v2/pokemon/?limit=${settings.pageSize}&offset=0`;
        //ACT
        let url = calculateUrlStringByOptions(options, pokemonsUrl);
        //ASSERT
        expect(url).toEqual(expectedUrl);
    }),
    it(`should send query to call api filter by offset`, () => {
        //ARRANGE
        let options: Options = createDefaultOptions();
        let expectedUrl = `${pokemonsUrl}/api/v2/pokemon/?limit=${settings.pageSize}&offset=0`;
        //ACT
        let url = calculateUrlStringByOptions(options, pokemonsUrl);
        //ASSERT
        expect(url).toEqual(expectedUrl);
    })

})
