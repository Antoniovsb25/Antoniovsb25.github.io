import ProductCard from '../ProductCard';

const shelfData = [
  {
    id: 1,
    price: 'R$ 500,00',
    name: 'Faux Suede Mini Skirt',
    image: '/images/faux.png',
    description:
      'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
    skus: ['bg-sku-4', 'bg-sku-3', 'bg-sku-2', 'bg-sku-1'],
  },
  {
    id: 2,
    price: 'R$ 320,00',
    name: 'Ruched Rose Print Mini Skirt',
    image: '/images/ruched.png',
    description:
      'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
    skus: ['bg-sku-8', 'bg-sku-7', 'bg-sku-6', 'bg-sku-5'],
  },
  {
    id: 3,
    price: 'R$ 500,00',
    name: 'Faux Suede Mini Skirt',
    image: '/images/faux.png',
    description:
      'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
    skus: ['bg-sku-4', 'bg-sku-3', 'bg-sku-2', 'bg-sku-1'],
  },
  {
    id: 4,
    price: 'R$ 320,00',
    name: 'Ruched Rose Print Mini Skirt',
    image: '/images/ruched.png',
    description:
      'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
    skus: ['bg-sku-8', 'bg-sku-7', 'bg-sku-6', 'bg-sku-5'],
  },
  {
    id: 5,
    price: 'R$ 500,00',
    name: 'Faux Suede Mini Skirt',
    image: '/images/faux.png',
    description:
      'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
    skus: ['bg-sku-4', 'bg-sku-3', 'bg-sku-2', 'bg-sku-1'],
  },
];

function Shelf() {
  const arr = shelfData;
  return (
    <section className="my-4">
      <h3 className="my-6 text-center font-bold text-secondary-500 text-3xl">As Mais Pedidas</h3>
      <article className="shelf-container flex gap-4 justify-center overflow-x-scroll md:overflow-x-hidden snap-x-mandatory scroll-padding-24">
        {arr.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            price={product.price}
            name={product.name}
            description={product.description}
            skus={product.skus}
          />
        ))}
      </article>
    </section>
  );
}

export default Shelf;
