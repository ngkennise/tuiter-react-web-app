import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item.js";

const TuitsList = () => {
    const tuitItemArray = useSelector(
        (state) => state.tuits)
         return(
        <ul className="list-group">
            {
                tuitItemArray.map(tuit =>
                                       <TuitItem key={tuit.id} tuits={tuit}/> )
            }
        </ul>
    );
};
export default TuitsList;
