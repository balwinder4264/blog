import Image from "next/image"

import classes from './hero.module.css'

function Hero(){
    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/site/bal.jpeg" 
                    alt="An image showing Balwinder" 
                    width={300} height={300}/>
        </div>
        <h1 >Hi i am Balwinder</h1>
        <p>I blog about web deveoplemnt  - 
            specially frontend framework like React, nextJs</p>
    </section>

}
export default Hero