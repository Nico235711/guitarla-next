import Layout from "../components/layout"
import ListadoGuitarras from "../components/listado-guitarras"


const Tienda = () => {
  
  return (
    <Layout
      title="Tienda"
      description="Tienda de guitarras, guitarLA, música"
    >
      <main className="contenedor">
        <h1 className="heading">Nuesta Coleccion</h1>
        <ListadoGuitarras />
      </main>
    </Layout>
  )
}

export default Tienda