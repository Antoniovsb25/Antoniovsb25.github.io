function ProductCard() {
  return (
    <article className="container flex flex-col w-308px">
      <img className="product-image" src="/images/faux.png" />
      <div className="sku-container flex gap-2">
        <div className="sku-color w-7 h-7 bg-sku-1 rounded" />
        <div className="sku-color w-7 h-7 bg-sku-2 rounded" />
        <div className="sku-color w-7 h-7 bg-sku-3 rounded" />
        <div className="sku-color w-7 h-7 bg-sku-4 rounded" />
      </div>
      <span className="price">R$ 500,00</span>
      <span className="product-title">Faux Suede Mini Skirt</span>
      <span className="product-description">
        A faux suede mini skirt featuring exposed button-front closures and panel seam construction.
      </span>
      <button className="add-to-cart-button">Adicionar</button>
    </article>
  );
}

export default ProductCard;
