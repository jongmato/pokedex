import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";

import { PokemonResponse } from "../types";

const pokemonApi = (id?: string) =>
	axios.get(`https://pokeapi.co/api/v2/pokemon/${id || ""}`, { params: { limit: 151 } });

const usePokemon = (id?: string) =>
	useQuery<AxiosResponse<PokemonResponse>, Error>(id ? ["pokemon", id] : "pokemon", () => pokemonApi(id));

export default usePokemon;
