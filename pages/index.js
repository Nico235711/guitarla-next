import Link from "next/link"
import Layout from "../components/layout"


export default function Home() {
  return (
    <>
      <Layout>
        <h1>Hola mundo en next</h1>
        <Link href="/nosotros">Nosotros</Link>
      </Layout>

    </>
  )
}
