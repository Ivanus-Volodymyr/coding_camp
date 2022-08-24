import {FC} from "react";

import {IProps} from "../interfaces";


const ShowTv: FC<IProps> = ({show}) => {
    return (
        <div>
            {show.name} -- {show.releaseDate.getFullYear()} -- {show.genre.name} -- {show.getDuration()}
        </div>
    );
};

export {ShowTv};
