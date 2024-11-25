import { getPlates } from "@/lib/getPlates";
import Headatras from "@/components/Headatras";
import Cantimaxmin from "@/components/Maxmin";
import Canconfi from "@/components/Canconfi";
import Resenas from "@/components/Resenas";
import "./Platillos.css";

type Props = {
  params: {
    id: string;
  };
};

const PlatillosPage = async ({ params: { id } }: Props) => {
  const data = await getPlates(
    `https://673629d5aafa2ef2222fb0a8.mockapi.io/platos/${id}`
  );

  return (
    <main>
      <Headatras />
      <div className="imagen">
        <img className="plate" src={data.plaimagen} alt={data.titulo} />
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