import { getPlates } from "@/lib/getPlates";
import Plate from "./Plate";
import "./Desayuno.css";

async function Cena() {
  const plates = await getPlates(
    "https://673629d5aafa2ef2222fb0a8.mockapi.io/menucena"
  );

  return (
    <section className="desayuno-container">
      <h1 className="des">Cena</h1>
      <div className="grid-container">
        {plates.map((plate: any) => (
          <Plate key={plate.id} plate={plate} />
        ))}
      </div>
    </section>
  );
}

export default Cena;