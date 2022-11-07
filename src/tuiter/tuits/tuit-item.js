import React from "react";
// import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = (
    {
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.jpg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
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
                             src={`/images/${tuit.image}`} height={50}/>
                    </div>

                    <div className="col-11 ps-4">
                        <div className="fw-bolder">
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitHandler(tuit._id)}></i>
                            {tuit.userName}
                            <i className="bi bi-patch-check text-primary ps-2"></i>
                            <span
                                className="text-dark fw-lighter ps-2">{tuit.handle} • {tuit.time}
                    </span>
                        </div>
                        {/*<div className="mb-2">*/}
                        {/*    {tuit.tweetContent}*/}
                        {/*    <i className="bi bi-arrow-right"></i>*/}
                        {/*    <span className="text-primary">{tuit.tweetlink}</span>*/}
                        {/*</div>*/}

                        <div className="text-dark pb-2">
                            <div>
                                {tuit.tuit}
                            </div>
                        </div>
                        <div className="row text-secondary">
                            <span className="col-3"><i
                                className="bi bi-chat"></i>{tuit.replies}</span>
                            <span className="col-3"><i
                                className="bi bi-share"></i>{tuit.retuits}</span>
                            <span className="col-3"><i
                                className="bi bi-balloon-heart"></i>{tuit.likes}</span>
                            <span className="col-3"><i className="bi bi-inbox"></i></span>
                        </div>

                        {/*<div className="text-primary">Show this thread</div>*/}

                    </div>
                </div>
            </li>
        );
};
export default TuitItem;
