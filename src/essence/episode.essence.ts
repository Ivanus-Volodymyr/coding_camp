import {Show} from "./show.essence";
import {IGenre} from "../interfaces";

export class Episode extends Show {

    constructor(name: string, genres: IGenre, releaseDate: Date, private duration: number) {
        super(name, genres, releaseDate);
    }

    getDuration(): number {
        return this.duration;
    }
}
