import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";

const TuitItem = (
    {
        tuits = {}
    }
) => {
    const dispatch = useDispatch()
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-1 float-start">
                        <img className="rounded-pill"
                             src={`/images/${tuits.image}`} height={50}/>
                    </div>

                    <div className="col-11 ps-4">
                        <div className="fw-bolder">
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitHandler(tuits._id)}></i>
                            {tuits.userName}
                            <i className="bi bi-patch-check text-primary ps-2"></i>
                            <span
                                className="text-dark fw-lighter ps-2">{tuits.handle} • {tuits.time}
                    </span>
                        </div>
                        {/*<div className="mb-2">*/}
                        {/*    {tuit.tweetContent}*/}
                        {/*    <i className="bi bi-arrow-right"></i>*/}
                        {/*    <span className="text-primary">{tuit.tweetlink}</span>*/}
                        {/*</div>*/}

                        <div className="text-dark pb-2">
                            <div>
                                {tuits.tuit}
                            </div>
                        </div>
                        <TuitStats
                            key={tuits._id}
                            tuit={tuits}/>
                    </div>
                </div>
            </li>
        );
};
export default TuitItem;
