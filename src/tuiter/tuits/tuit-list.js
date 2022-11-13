import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item.js";

const TuitsList = () => {
    const tuitItemArray = useSelector(
        (state) => state.tuits)
         return(
             <>
        <ul className="list-group">
            {
                tuitItemArray.map(tuits =>
                                       <TuitItem key={tuits._id}
                                        tuits={tuits}/> )

            }
        </ul>
             </>
    );
};
export default TuitsList;
