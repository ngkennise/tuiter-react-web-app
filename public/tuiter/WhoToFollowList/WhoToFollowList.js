import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return (`

           <ul class="list-group">
                <li class="list-group-item border-0 bg-dark text-white">
                <div class="fw-bolder">
                Who to follow
                </div>
                </li>

           ${who.map(element => WhoToFollowListItem(element)).join('')}
           </ul>
`); }
export default WhoToFollowList;