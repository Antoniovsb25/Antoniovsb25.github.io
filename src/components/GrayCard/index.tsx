function GrayCard() {
  return (
    <div className="bg-secondary-400 container rounded flex h-16 w-308px items-center gap-6 p-3">
      <img className="logo w-8 h-8" src="/images/truck.png" />
      <div className="text-container flex flex-col">
        <span className="text-sm font-bold">Frete Grátis</span>
        <span className="text-xs">Em compras acima de R$499,00</span>
      </div>
    </div>
  );
}
export default GrayCard;
