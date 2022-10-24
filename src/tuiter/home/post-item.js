import React from "react";

const PostItem = (
    {
        post = {
            "avatarIcon": "spacex.jpg",
            "name": "SpaceX",
            "userName": "@SpaceX",
            "time": "23h",
            "tweetContent": "Dennis and Akiko Tito are the first two crewmembers on Starship's second commercial spaceflight around the Moon",
            "tweetlink" : "spacex.com/updates",
            "tweetPicture": "dennisakiko.jpg",
            "newsTitle": "",
            "newsContent": "",
            "retweetedavatorIcon": "spacex.jpg",
            "retweetuserName": "SpaceX",
            "retweettime": "16h",
            "retweettweetContent": "Starlink for RVs now has over 100,000 customers! Access high-speed, low-latency internet on an as-needed basis anywhere Starlink provides active",
            "retweettweetlink": "starlink.com/rv",
            "link": "",
            "comment": "5,346",
            "retweet": "1,601",
            "love": "19.2K"
        }
    }
) => {
//     if (post.tweetlink === "") {
//         return (
//             <li class="list-group-item">
//                 <div class="row">
//                     <div class="col-1 float-start">
//                         <img class="rounded-pill"
//                              src={`/images/${post.avatarIcon}`} height={50}/>
//                     </div>
//
//                     <div class="col-11 ps-4">
//                         <div class="fw-bolder">
//                             {post.userName}
//                             <i class="fas fa-check-circle"></i>
//                             <span class="text-secondary fw-lighter">{post.userName} - {post.time}
//                     </span>
//                         </div>
//                         <div className="mb-2">
//                             {post.tweetContent}
//                             <span className="text-primary">{post.tweetlink}</span>
//                         </div>
//
//                         <div className="border border-secondary rounded">
//                             <div>
//                                 <img className="rounded" src={`/images/${post.tweetPicture}`}
//                                      />
//                                 <div className="border border-secondary border-bottom-0 p-2">
//                                     <div>
//                                         {post.newsTitle}
//                                         <div className="text-secondary">
//                                             {post.newsContent}
//                                         </div>
//                                         <div>
//                                             <i className="fas fa-link"></i>
//                                             <div>
//                                                 <span><i className="bi bi-arrow-right"></i></span>
//                                                 <span className="text-secondary">{post.tweetlink}</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row text-secondary">
//                             <span className="col-3"><i className="bi bi-chat"></i>{post.comment}</span>
//                             <span className="col-3"><i className="bi bi-share"></i>{post.retweet}</span>
//                             <span className="col-3"><i className="bi bi-balloon-heart"></i>{post.love}</span>
//                             <span className="col-3"><i className= "bi bi-inbox"></i></span>
//                         </div>
//
//                         <div className="text-primary mt-3">
//                             Show this thread
//                         </div>
//                     </div>
//                 </div>
//             </li>
//         );
//
//     } else {
//         return (
//             <li className="list-group-item">
//                 <div className="row">
//                     <div className="col-1 float-start">
//                         <img className="rounded-pill"
//                              src={`/images/${post.avatarIcon}`} height="50px"/>
//                     </div>
//
//                     <div className="col-11 ps-4">
//                         <div className="fw-bolder">
//                             {post.userName}
//                             <i className="fas fa-check-circle"></i>
//                             <span
//                                 className="text-secondary fw-lighter">{post.userName} . {post.time}
//                     </span>
//                         </div>
//                         <div className="mb-2">
//                             {post.tweetContent}
//                             <span className="text-primary">{post.tweetlink}</span>
//                         </div>
//
//                         <div className="border border-secondary rounded">
//                             <div className="col-1 float-start">
//                                 <img className="rounded-pill"
//                                      src={`/images/${post.retweetedavatorIcon}`} height="50px"/>
//                             </div>
//
//                             <div className="col-11 ps-4">
//                                 <div className="fw-bolder">
//                                     {post.retweetuserName}
//                                     <i className="fas fa-check-circle"></i>
//                                     <span
//                                         className="text-secondary fw-lighter">{post.retweetuserName} - {post.retweettime}
//                             </span>
//                                 </div>
//                                 <div className="mb-2">
//                                     {post.retweettweetContent}
//                                     <span className="text-black">
//                             {post.retweettweetlink}</span>
//                                 </div>
//                             </div>
//
//                             <div className="row text-secondary">
//                                 <span className="col-3"><i className="bi bi-chat"></i>{post.comment}</span>
//                                 <span className="col-3"><i className="bi bi-share"></i>{post.retweet}</span>
//                                 <span className="col-3"><i className="bi bi-balloon-heart"></i>{post.love}</span>
//                                 <span className="col-3"><i className= "bi bi-inbox"></i></span>
//                             </div>
//                         </div>
//
//                     </div>
//
//                 </div>
//             </li>
//         );
//     }
// };
// export default PostItem;
    if (post.link === "") {
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-1 float-start">
                        <img className="rounded-pill"
                             src={`/images/${post.avatarIcon}`} height={50}/>
                    </div>

                    <div className="col-11 ps-4">
                        <div className="fw-bolder">
                            {post.userName}
                            <i className="bi bi-patch-check"></i>
                            <span
                                className="text-secondary fw-lighter">{post.userName} - {post.time}
                    </span>
                        </div>
                        <div className="mb-2">
                            {post.tweetContent}
                            <i className="bi bi-arrow-right"></i>
                            <span className="text-primary">{post.tweetlink}</span>
                        </div>

                        <div className="border border-secondary rounded">
                            <div>
                                <img className="rounded img-fluid"
                                     src={`/images/${post.tweetPicture}`}/>
                            </div>
                        </div>
                        <div className="row text-secondary">
                            <span className="col-3"><i
                                className="bi bi-chat"></i>{post.comment}</span>
                            <span className="col-3"><i
                                className="bi bi-share"></i>{post.retweet}</span>
                            <span className="col-3"><i
                                className="bi bi-balloon-heart"></i>{post.love}</span>
                            <span className="col-3"><i className="bi bi-inbox"></i></span>
                        </div>

                        <div className="text-primary">Show this thread</div>

                    </div>
                </div>
            </li>
        );

        // } else {
        //     return (
        // <li className="list-group-item">
        // <div className="row">
        //         <div className="col-1 float-start">
        //             <img className="rounded-pill"
        //                  src={`/images/${post.avatarIcon}`} height={50}/>
        //         </div>
        //
        //         <div className="col-11 ps-4">
        //             <div className="fw-bolder">
        //                 ${post.userName}
        //                 <i className="bi bi-patch-check"></i>
        //                 <span className="text-secondary fw-lighter">{post.userName} - {post.time}
        //                 </span>
        //             </div>
        //             <div className="mb-2">
        //             ${post.tweetContent}
        //             <span className="text-primary">{post.tweetlink}</span>
        //             </div>
        //             <div>
        //
        //             </div>
        //
        //             <div className="border border-secondary rounded">
        //                 <div>
        //                 <img className="rounded img-fluid" src={`/images/${post.tweetPicture}`}/>
        //                     <div className="border border-secondary border-bottom-0 p-2">
        //                         <div>
        //                         ${post.newsTitle}
        //                         <div className="text-secondary">
        //                         ${post.newsContent}
        //                         </div>
        //                         <div>
        //                         <i className="fas fa-link"></i>
        //                         <span className="text-secondary">{post.link}</span>
        //                         </div>
        //                         </div>
        //                     </div>
        //
        //                 </div>
        //             </div>
        //                  <div className="row text-secondary">
        //                      <span className="col-3"><i className="bi bi-chat"></i>{post.comment}</span>
        //                      <span className="col-3"><i className="bi bi-share"></i>{post.retweet}</span>
        //                      <span className="col-3"><i className="bi bi-balloon-heart"></i>{post.love}</span>
        //                      <span className="col-3"><i className= "bi bi-inbox"></i></span>
        //                  </div>
        //       </div>
        // </div>
        // </li>
        // );
        //
        // }
    }
}
export default PostItem;