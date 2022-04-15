import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/About.module.css'



export default function About() {
  return (
    <div  className={styles.main}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been  
        standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a 
        type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining 
        essentially unchangedLorem Ipsum is simply dummy text of 
        the printing and typesetting industry. Lorem Ipsum has been 
        the s standard dummy text ever since the 1500s, when 
        an unknown printer took a galley of type and scrambled it to 
        make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic 
        typesetting, remaining essentially unchanged
      </p>
      <Image src="/images/charizard.png" width="300" height="300" alt="charizard"/>
     </div>
  )
}
