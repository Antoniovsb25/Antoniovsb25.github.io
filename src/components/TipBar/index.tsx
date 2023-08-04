import GrayCard from '../GrayCard';

const tipbarData = [
  {
    id: '1',
    logo: '/images/globe.png',
    title: 'Produtos importados',
    text: 'Produto de Alta Qualidade',
  },
  {
    id: '2',
    logo: '/images/stock.png',
    title: 'Estoque no Brasil',
    text: 'Produtos mais perto de você!',
  },
  {
    id: '3',
    logo: '/images/trade.png',
    title: 'Trocas Garantidas',
    text: 'Trocas em até 48 horas, veja as regras',
  },
  {
    id: '4',
    logo: '/images/tag.png',
    title: 'Ganhe 5% off',
    text: 'Pagando à vista no cartão',
  },
  {
    id: '5',
    logo: '/images/truck.png',
    title: 'Frete Grátis',
    text: 'Em compras acima de R$499,00',
  },
];

function TipBar() {
  const arr = tipbarData.reverse();
  return (
    <section className="my-8">
      <h3 className="mb-8 text-center font-bold text-base text-secondary-500">
        Por que comprar na Maeztra?
      </h3>
      <article className="flex justify-center gap-4 overflow-x-scroll md:overflow-x-hidden w-308 snap-x-mandatory scroll-padding-24">
        {arr.map((card) => (
          <GrayCard key={card.id} title={card.title} text={card.text} imageLink={card.logo} />
        ))}
      </article>
    </section>
  );
}

export default TipBar;
