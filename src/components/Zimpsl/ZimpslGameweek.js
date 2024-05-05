import React from "react";
import { Link } from "react-router-dom";

const ZimpslGameweek = (props) => {
    const { zimpslgameweek } = props;
    return (
        <div className="fixture-content link-margin">
            <Link
                to={`/zimpsl/${zimpslgameweek}`}
                className="btn btn-sm btn-outline-gold p-2 pb-3"
            >
                {zimpslgameweek}
            </Link>
        </div>
    )
};

export default ZimpslGameweek;