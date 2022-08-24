import {StreamingService} from "./streamingService.essence";
import {Show} from "./show.essence";

import {IGenre} from "../interfaces";

export class Subscription {
    constructor(public streamingService: StreamingService) {
    }

    watch(showName: string): Show {
        const show = this.streamingService.shows.find(value => value.name === showName);

        if (!show) {
            throw new Error('Show not found!!!')
        }

        this.streamingService.viewsByShowNames.set(show.name, (this.streamingService.viewsByShowNames.get(show.name) || 0) + 1)
        return show
    }

    getRecommendationTrending(): Show {
        const shows = this.streamingService.getMostViewedShowsOfYear(new Date().getFullYear());
        return Subscription._getRandomShow(shows)
    }

    getRecommendationByGenre(genre: IGenre): Show {
        const shows = this.streamingService.getMostViewedShowsByGenre(genre);
        return Subscription._getRandomShow(shows)
    }

    private static _getRandomShow(shows: Show[]): Show {
        return shows[Math.floor(Math.random() * shows.length)]
    }
}
