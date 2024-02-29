import Image from "next/image"
import Layout from "../components/layout"
import styles from '../styles/nosotros.module.css'

const Nosotros = () => {
  
  return (
    <Layout
      title="Nosotros"
      description="Sobre nosotros, guitarLA, tienda de música"
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />

          <div>
            <p>Maecenas ut lacinia est, eget mollis mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi at ligula id nisi tincidunt molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras elementum dui felis, ac malesuada tortor efficitur sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros