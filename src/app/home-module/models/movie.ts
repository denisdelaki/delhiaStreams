import { Url } from "url";

export interface MovieItem {
    id: number;
    title: string;
    description: string;
    image: string;
    embed_url: Url;
    embed_url_tmdb: Url;
    quality: string;
}
