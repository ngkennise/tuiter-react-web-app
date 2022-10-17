import post from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return(`
           <ul class="list-group">
           ${post.map(element => PostSummaryItem(element)).join('')}
           </ul>
           
    `);
}
export default PostSummaryList;

