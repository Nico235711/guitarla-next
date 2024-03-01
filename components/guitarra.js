import Image from "next/image"
import Link from "next/link"

export default function Guitarra({ guitarra }) {
  
  const { url, precio, nombre, imagen, descripcion } = guitarra
  
  return (
    <div>
      <Image src={imagen.data.attributes.formats.medium.url} alt={`guitarra ${nombre}`} width={600} height={400} />
      
      <div>
        <h3>{nombre}</h3>
        <p>{descripcion[0].children[0].text}</p>
        <p>{precio}</p>

        <Link href={`/guitarras/${url}`}>Ver Producto</Link>
      </div>
    </div>
  )
}
