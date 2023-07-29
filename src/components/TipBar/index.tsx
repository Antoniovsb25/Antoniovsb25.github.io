import GrayCard from '../GrayCard';

function TipBar() {
  return (
    <section className="my-8">
      <h3 className="mb-8 text-center font-bold text-base text-secondary-500">
        Por que comprar na Maeztra?
      </h3>
      <article className="flex justify-center gap-4 overflow-x-scroll md:overflow-x-hidden w-308 snap-x-mandatory scroll-padding-24">
        <GrayCard />
        <GrayCard />
        <GrayCard />
        <GrayCard />
        <GrayCard />
      </article>
    </section>
  );
}

export default TipBar;
