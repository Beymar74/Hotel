import { getPlates } from "@/lib/getPlates";
import Headatras from "@/components/Headatras";
import Cantimaxmin from "@/components/Maxmin";
import Resenas from "@/components/Resenas";
import Image from "next/image";
import "./Platillos.css";

// Tipo para los datos del platillo
type PlateData = {
  id: string;
  plaimagen: string;
  titulo: string;
  precio: number;
  descripcion: string;
  ingredientes: string;
  Resenas: any[];
};

// Sobreescribir el tipo de las props de la página para evitar conflictos
type PageProps = {
  params: { id: string }; // Redefinimos manualmente `params` para evitar problemas
};

const PlatillosPage = async ({ params }: PageProps) => {
  const { id } = params;

  // Obtenemos los datos del platillo
  const data: PlateData = await getPlates<PlateData>(
    `https://673629d5aafa2ef2222fb0a8.mockapi.io/platos/${id}`
  );

  return (
    <main>
      <Headatras />
      <div className="imagen">
        <Image
          className="plate"
          src={data.plaimagen}
          alt={data.titulo}
          width={500}
          height={500}
        />
      </div>
      <div className="descripcion">
        <h1 className="titulo">Platillo: {data.titulo}</h1>
        <div className="money">
          <p className="precio">
            Precio: <span className="uni">{data.precio}</span>
            <span className="bs">Bs</span>
          </p>
        </div>
        <div className="blockdes">
          <p className="descripcion">Descripción: {data.descripcion}</p>
        </div>
      </div>
      <div className="blocking">
        <h1 className="subtitulo">Ingredientes Principales</h1>
        <p className="lista">Ingredientes: {data.ingredientes}</p>
      </div>
      <Cantimaxmin
        initialCantidad={1}
        data={{
          id: data.id,
          titulo: data.titulo,
          precio: data.precio,
          plaimagen: data.plaimagen,
        }}
      />
      <Resenas resenas={data.Resenas} />
    </main>
  );
};

export default PlatillosPage;

