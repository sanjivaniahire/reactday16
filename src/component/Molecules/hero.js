import styles from './hero.module.css'
function Hero(){
  return(
    <div className={styles.container}>
        <img className={styles.image} src ="https://images.unsplash.com/photo-1477511801984-4ad318ed9846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGF2ZW5kZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" />
    <div className={styles.content}>
        <h1>The Lavender</h1>
        <p className={styles.text}>Lavender is a flowering plant in the mint family that's easily identified by its sweet floral scent.
                                   <br/><br/> It's believed to be native to the Mediterranean, the Middle East, and India, with a history dating as far back as 2,500 years. ( 1) In ancient times
                                   <br/><br/> Lavender was used as a holy herb. (Lavender).</p>
                                   
        <button className={styles.button}>Buy Now</button>
    </div>
    </div>
  )
}
export default Hero;