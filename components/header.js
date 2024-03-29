import Image from "next/image"
import Link from "next/link"
import styles from '../styles/header.module.css'
import { useRouter } from "next/router"

export default function Header() {

  const router = useRouter()

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href="/">
            <Image src="/img/logo.svg" alt="logo" width={300} height={40} />
        </Link>

        <nav className={styles.navegacion}>
          <Link href="/">
            <a className={router.pathname === "/" ? styles.active  : ""}>Inicio</a>
          </Link>
          <Link href="/nosotros">
            <a className={router.pathname === "/nosotros" ? styles.active  : ""}>Nosotros</a>
          </Link>
          <Link href="/tienda">
            <a className={router.pathname === "/tienda" ? styles.active  : ""}>Tienda</a>
          </Link>
          <Link href="/blog">
            <a className={router.pathname === "/blog" ? styles.active  : ""}>Blog</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
