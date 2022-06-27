import axios from "axios";
import { Cast } from "./models/Cast";
import { Show } from "./models/Show";

export const getShow = async (query: string) => {
  const reponse = await axios.get<{ show: Show }[]>(
    ` https://api.tvmaze.com/search/shows?q=${query}`
  );
  return reponse.data.map((data) => data.show);
};
export const getShowDetail = async (id: number) => {
  const response = await axios.get<Show>(`https://api.tvmaze.com/shows/${id}`);
  return response.data;
};
export const getCast = async (id: number) => {
  const reponse = await axios.get<Cast>(` https://api.tvmaze.com/shows/${id}/cast`);
  return reponse.data;
};
