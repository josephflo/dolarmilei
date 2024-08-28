const width = 466;
const height = 60;

type CardDetails = {
  name: string;
  buyPrice: number;
  sellPrice: number;
};

const SlimCard = ({name, buyPrice, sellPrice}: CardDetails) => {
  return (
    <div className="flex px-3 py-4 border-t-2 border-primary shadow-lg w-[466px] h-[60px] gap-8 items-center justify-center">
      <div className="flex w-full">
        <h1 className="text-secondary font-bold text-sm">{name}</h1>
      </div>
      <div className="flex gap-2 items-center">
        <p className="text-secondary text-xs">Compra </p>
        <span className="text-primary text-xl font-bold"> {`$${buyPrice}`}</span>
      </div>
      <div className="w-0.5 bg-primary h-full" />
      <div className="flex gap-2 items-center">
        <p className="text-secondary text-xs">Venta </p>
        <span className="text-primary text-xl font-bold">{`$${sellPrice}`}</span>
      </div>
    </div>
  );
};

export default SlimCard;
