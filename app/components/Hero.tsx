import { exchangeRates } from "@/lib/actions";
import Card from "./Card";
import SlimCard from "./SlimCard";
import { ExchangeRate } from "@/types";
import Image from "next/image";

const Hero = async () => {
  const data = await exchangeRates();
  console.log(data);

  const filteredData = data.filter((rate:ExchangeRate) => rate.nombre.toLowerCase() !== 'blue' && 
  rate.nombre.toLowerCase() !== 'mayorista');

  return (
    <section className="flex mt-20 gap-4">
      <Card />
      <div className="flex flex-col gap-4">
        {filteredData.map(({nombre, compra,venta}: ExchangeRate) => (
          <SlimCard
            key={nombre}
            name={nombre}
            buyPrice={compra}
            sellPrice={venta}
          />
        ))}
      </div>
      <div className="hidden lg:block ">
        <Image
          src="/petrobras-publi.png"
          alt="Dolar"
          width={266}
          height={349}
        />
      </div>
    </section>
  );
};

export default Hero;
