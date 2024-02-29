import Image from "next/image"
import Link from "next/link"

export default function Header() {

  return (
    <header>
      <div className="contenedor">
        <Image src="img/logo.svg" alt="logo" width={300} height={400} />

        <nav>
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/tienda">Tienda</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  )
}
