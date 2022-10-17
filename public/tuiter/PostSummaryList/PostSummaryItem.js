const PostSummaryItem = (post) => {
return (`
    <li class="list-group-item bg-dark text-white">
        <div class="row">
            <div class="col-9">
                <div class="text-secondary">
                    ${post.topic}
                </div>
                <div class="fw-bolder">
                    ${post.userName}
                    <i class="fas fa-check-circle"></i>
                    <span class="text-secondary fw-lighter"> - ${post.time}
                    </span>
                </div>
                <div class="fw-bolder">
                ${post.title}
                </div>

            </div>

            <div class="col-3">
                <img class="float-end rounded"
                src="${post.image}" height="100px">
            </div>
        </div>
    </li>
`);
}
export default PostSummaryItem;