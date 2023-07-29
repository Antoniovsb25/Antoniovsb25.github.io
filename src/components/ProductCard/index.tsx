function ProductCard() {
  return (
    <article className="container flex flex-col w-308px flex-none snap-align-start">
      <img className="product-image" src="/images/faux.png" />
      <div className="info-container mx-4 flex flex-col">
        <div className="sku-container flex gap-2 my-2">
          <button className="sku-color w-7 h-7 bg-sku-1 rounded" />
          <button className="sku-color w-7 h-7 bg-sku-2 rounded" />
          <button className="sku-color w-7 h-7 bg-sku-3 rounded" />
          <button className="sku-color w-7 h-7 bg-sku-4 rounded" />
        </div>
        <span className="price font-bold text-xl text-secondary-500">R$ 500,00</span>
        <span className="product-title text-base">Faux Suede Mini Skirt</span>
        <span className="product-description opacity-50 text-xs my-2">
          A faux suede mini skirt featuring exposed button-front closures and panel seam
          construction.
        </span>
        <button className="add-to-cart-button w-full bg-primary text-white text-base rounded p-2">
          Adicionar
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
