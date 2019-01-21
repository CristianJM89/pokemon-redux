import { calculateUrlStringByOptions } from "./pokemons-api.business";
import { Options, createDefaultOptions } from "./pokemons-api";
import { settings } from "../common-app";

const pokemonsUrl = 'http://pokeapi.salestock.net/api/v2/pokemon/';

describe(`default value is sent when options is null`, () => {
    it(`should send default values`, () => {
        //ARRANGE
        let options: Options = undefined;
        let expectedUrl = `${pokemonsUrl}/api/pokemon?_page=1&_limit=${settings.pageSize}`;
        //ACT
        let url = calculateUrlStringByOptions(options, pokemonsUrl);
        //ASSERT
        expect(url).toEqual(expectedUrl);
    }),/*
        it(`should send query to call api filter by genre`, () => {
            //ARRANGE
            let options: Options = createDefaultOptions();
            options.filter = {
                title: "",
                genre: "Drama",
                year: "",
            }
            let expectedUrl = `${pokemonsUrl}/api/pokemon?_page=1&_limit=${settings.pageSize}&genres_like=Drama`;
            //ACT
            let url = calculateUrlStringByOptions(options, pokemonsUrl);
            //ASSERT
            expect(url).toEqual(expectedUrl);
        }),
        it(`should send query to call api filter by title`, () => {
            //ARRANGE
            let options: Options = createDefaultOptions();
            options.filter = {
                title: "Title",
                genre: "",
                year: "",
            }
            let expectedUrl = `${pokemonsUrl}/api/pokemon?_page=1&_limit=${settings.pageSize}&title_like=Title`;
            //ACT
            let url = calculateUrlStringByOptions(options, pokemonsUrl);
            //ASSERT
            expect(url).toEqual(expectedUrl);
        }),
        it(`should send query to call api filter by year`, () => {
            //ARRANGE
            let options: Options = createDefaultOptions();
            options.filter = {
                title: "",
                genre: "",
                year: "2018",
            }
            let expectedUrl = `${pokemonsUrl}/api/pokemon?_page=1&_limit=${settings.pageSize}&year=2018`;
            //ACT
            let url = calculateUrlStringByOptions(options, pokemonsUrl);
            //ASSERT
            expect(url).toEqual(expectedUrl);
        }),
        it(`should send query to call api filter by complete filter`, () => {
            //ARRANGE
            let options: Options = createDefaultOptions();
            options.filter = {
                title: "Title",
                genre: "Drama",
                year: "2018",
            }
            let expectedUrl = `${pokemonsUrl}/api/pokemon?_page=1&_limit=${settings.pageSize}&genres_like=Drama&title_like=Title&year=2018`;
            //ACT
            let url = calculateUrlStringByOptions(options, pokemonsUrl);
            //ASSERT
            expect(url).toEqual(expectedUrl);
        })
*/

})
