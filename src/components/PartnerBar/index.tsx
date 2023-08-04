import PartnerCard from '../PartnerCard';

const partnerbarData = [
  {
    id: '1',
    logo: '/images/comma.png',
  },
  {
    id: '2',
    logo: '/images/melissa.png',
  },
  {
    id: '3',
    logo: '/images/forever.png',
  },
  {
    id: '4',
    logo: '/images/zara.png',
  },
  {
    id: '5',
    logo: '/images/anntaylor.png',
  },
];

function PartnerBar() {
  const arr = partnerbarData;
  return (
    <section className="my-12">
      <h3 className="mb-8 text-center font-bold text-3xl text-secondary-500">Marcas Parceiras</h3>
      <article className="flex justify-center gap-4 w-308 overflow-x-scroll md:overflow-x-hidden snap-x-mandatory scroll-padding-24">
        {arr.map((product) => (
          <PartnerCard key={product.id} imageLink={product.logo} />
        ))}
      </article>
    </section>
  );
}

export default PartnerBar;
