import styles from './Hero.module.css'
import Image from "next/image";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image src={'/images/site/hero.jpg'} alt={'image'} width={300} height={300}/>
      </div>
      <h1>Hi, I'm Naveen</h1>
      <p>I blog about web development - especially frameworks like React and Nextjs</p>
    </section>
  );
}

export default Hero;