import React from "react";

const TuitStats = (
    {
        tuit = {}
    }
) => {
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
                <i className={tuit.liked ? 'bi bi-heart-fill text-danger' : 'bi bi-heart'}></i>
                <span className='ps-3'>
                    {tuit.likes}
                </span>
            </div>
            <div className='col'>
                <i className='ps-3 bi bi-upload'></i>
            </div>
        </div>
    )
}
export default TuitStats