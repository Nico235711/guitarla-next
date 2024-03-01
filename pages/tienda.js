import Layout from "../components/layout"
import ListadoGuitarras from "../components/listado-guitarras"


const Tienda = ({ guitarras }) => {

  return (
    <Layout
      title="Tienda"
      description="Tienda de guitarras, guitarLA, música"
    >
      <main className="contenedor">
        <h1 className="heading">Nuesta Coleccion</h1>
        <ListadoGuitarras 
          guitarras={guitarras}
        />
      </main>
    </Layout>
  )
}

export default Tienda

// cada vez que hagas un cambio tendras que hacer un nuevo build
// export async function getStaticProps() {
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//   const { data: guitarras } = await respuesta.json()
//   return {
//     props: {
//       guitarras
//     }
//   }
// }

// cada vez que hagas un cambio no tendras que hacer un nuevo build
export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const { data: guitarras } = await respuesta.json()
  return {
    props: {
      guitarras
    }
  }
}