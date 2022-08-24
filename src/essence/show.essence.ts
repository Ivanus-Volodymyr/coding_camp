import {IGenre} from "../interfaces";

export abstract class Show {

    protected constructor(public name: string, public genre: IGenre, public releaseDate: Date) {
    }

    abstract getDuration(): number

    compare(show: Show): boolean {
        return this.name === show.name
            && this.genre === show.genre
            && this.releaseDate === show.releaseDate;

    }
}
