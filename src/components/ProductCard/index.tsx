interface ProductCardProps {
  id: number;
  price: string;
  image: string;
  name: string;
  description: string;
  skus: Array<string>;
}

function ProductCard({ id, price, image, name, description, skus }: ProductCardProps) {
  return (
    <article className="container flex flex-col w-308px flex-none snap-align-start">
      <img className="product-image" src={image} />
      <div className="info-container mx-4 flex flex-col">
        <div className="sku-container flex gap-2 my-2">
          {skus.map((sku) => (
            <button key={id} className={`sku-color w-7 h-7 bg-sku-1 rounded ${sku}`} />
          ))}
        </div>
        <span className="price font-bold text-xl text-secondary-500">{price}</span>
        <span className="product-title text-base">{name}</span>
        <span className="product-description opacity-50 text-xs my-2 pr-4">{description}</span>
        <button className="add-to-cart-button w-full bg-primary text-white text-base rounded p-2">
          Adicionar
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
