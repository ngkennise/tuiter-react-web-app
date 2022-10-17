const PostItem = (tweet) => {

    if (tweet.link === '') {
        return (`
    <li class="list-group-item  border border-top-0 border-secondary bg-black text-white">
    <div class="row">
            <div class="col-1 float-start">
                <img class="rounded-pill"
                src = "${tweet.avatarIcon}" height="50px">
            </div>
            
            <div class="col-11 ps-4">
                <div class="fw-bolder">
                    ${tweet.userName}
                    <i class="fas fa-check-circle"></i>
                    <span class="text-secondary fw-lighter">${tweet.userName} - ${tweet.time}
                    </span>
                </div>
                <div class="mb-2">
                ${tweet.tweetContent}
                <span class="text-primary">${tweet.tweetlink}</span>
                </div>
                
                <div class="border border-secondary rounded">
                    <div>
                    <img class="rounded" src="${tweet.tweetPicture}" width=100%>
                     </div>
                </div>
                    <div class="text-secondary m-2">
                        <span><i class="far fa-comment"></i></span>
                        <span>${tweet.comment}</span>
                        <span class="ms-5"><i class="fas fa-retweet"></i></span>
                        <span>${tweet.retweet}</span>
                        <span class="ms-5"><i class="fas fa-heart"></i></span>
                        <span>${tweet.love}</span>
                        <span class="ms-5"><i class="fas fa-share-square"></i></span>
                    </div>

                </div>
          </div>
    </li>
        `);

    } else {
        return (`
    <li class="list-group-item  border border-top-0 border-secondary bg-black text-white">
    <div class="row">
            <div class="col-1 float-start">
                <img class="rounded-pill"
                src = "${tweet.avatarIcon}" height="50px">
            </div>
            
            <div class="col-11 ps-4">
                <div class="fw-bolder">
                    ${tweet.userName}
                    <i class="fas fa-check-circle"></i>
                    <span class="text-secondary fw-lighter">${tweet.userName} - ${tweet.time}
                    </span>
                </div>
                <div class="mb-2">
                ${tweet.tweetContent}
                <span class="text-primary">${tweet.tweetlink}</span>
                </div>
                
                <div class="border border-secondary rounded">
                    <div>
                    <img class="rounded" src="${tweet.tweetPicture}" width=100%>
                        <div class="border border-secondary border-bottom-0 p-2">
                            <div>
                            ${tweet.newsTitle}
                            <div class="text-secondary">
                            ${tweet.newsContent}
                            </div>
                            <div>
                            <i class="fas fa-link"></i>
                            <span class="text-secondary">${tweet.link}</span>
                            </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
                    <div class="text-secondary m-2">
                        <span><i class="far fa-comment"></i></span>
                        <span>${tweet.comment}</span>
                        <span class="ms-5"><i class="fas fa-retweet"></i></span>
                        <span>${tweet.retweet}</span>
                        <span class="ms-5"><i class="fas fa-heart"></i></span>
                        <span>${tweet.love}</span>
                        <span class="ms-5"><i class="fas fa-share-square"></i></span>
                    </div>
          </div>
    </div>    
    </li>
    `);

    }
}
export default PostItem;