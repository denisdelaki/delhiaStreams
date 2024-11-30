import { Url } from "url";

export interface Movie {
    id: number;
    title: string;
    description: string;
    image: string;
    video_url: Url;
    video_url_2: Url;
}
