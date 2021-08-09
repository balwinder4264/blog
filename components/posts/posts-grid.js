import PostItem from "./post-item"
import classes from "./posts-grid.module.css"
function PostGrid (props){
    const {posts} = props;
console.log("posts=>",posts)
    return <ul className={classes.grid}>
        {posts.map(post=>{
            return <PostItem key={post.slug} post={post}/>
        })}
    </ul>
}
export default PostGrid;