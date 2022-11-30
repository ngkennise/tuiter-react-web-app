import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = (
    {
        tuit = {}
    }
) => {
    const dispatch = useDispatch()
    return(
        <div className='row text-secondary ps-2'>
            <div className='col'>
                <i className='bi bi-chat'></i>
                <span className='ps-3'>
                    {tuit.replies}
                </span>
            </div>
            <div className='col'>
                <i className='bi bi-arrow-repeat'></i>
                <span className='ps-3'>
                    {tuit.retuits}
                </span>
            </div>

            <div className='col'>
                <i onClick={() => dispatch(updateTuitThunk({
                                                               ...tuit,
                                                               likes: tuit.likes + 1
                                                           }))
                }

                   className="bi bi-heart-fill text-danger"/>
                <span className='ps-2'>
                    {tuit.likes}
                </span>
            </div>

            <div className='col'>
                <i onClick={() => dispatch(updateTuitThunk({
                                                               ...tuit,
                                                               dislikes: tuit.dislikes + 1
                                                           }))
                }

                   className="bi bi-hand-thumbs-down-fill text-danger"/>
                <span className='ps-3'>
                    {tuit.dislikes}
                </span>
            </div>

            <div className='col'>
                <i className='ps-3 bi bi-upload'></i>
            </div>
        </div>
    )
}
export default TuitStats

