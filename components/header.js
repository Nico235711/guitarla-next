import Image from "next/image"
import Link from "next/link"
import styles from '../styles/header.module.css'

export default function Header() {

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Image src="img/logo.svg" alt="logo" width={300} height={400} />

        <nav className={styles.navegacion}>
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/tienda">Tienda</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  )
}
