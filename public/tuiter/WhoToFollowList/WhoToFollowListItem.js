const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item border-0 bg-dark text-white">
        <div class="row">
            <div class="col-2">
                <img class ="rounded-circle"
                        src='${who.avatarIcon}' width="50px">
            </div>

            <div class="col-7 ps-4">
                <div class="fw-bolder">
                        ${who.userName}
                    <i class="fas fa-check-circle"></i>
                </div>
                <div class="text-secondary">
                        @${who.handle}
                </div>
            </div>

            <div class="col-3">
                <button type="button" class="btn btn-primary mt-2 float-end rounded-pill">Follow</button>
            </div>
        </div>
    </li>
   `);
}
export default WhoToFollowListItem;