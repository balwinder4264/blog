import Link from "next/link";
import classes from "./post-item.module.css"
import Image from "next/image";
function PostItem (props){
    const { title,image,excerpt,date,slug } = props.post
    console.log("date=>",date)
    const formatedDate =  new Date(date).toLocaleDateString('en-US',{
        day :'numeric',
        month:"long",
        year :"numeric"
    })
    console.log("formatedDate=>",formatedDate)
    const imagePath = `/images/posts/${slug}/${image}`;
    const linnkPath = `/posts/${slug}`;
    return <li className={classes.post}>
        <Link href={linnkPath}>
            <a>
                <div className={classes.image}>
                    <Image src={imagePath} alt={title}  width={300} height={200}/>
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formatedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </a>
        </Link>
    </li>
}

export default PostItem;