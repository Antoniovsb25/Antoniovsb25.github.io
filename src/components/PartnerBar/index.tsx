import PartnerCard from '../PartnerCard';

function PartnerBar() {
  return (
    <section className="my-12">
      <h3 className="mb-8 text-center font-bold text-3xl text-secondary-500">Marcas Parceiras</h3>
      <article className="flex justify-center gap-4 w-308 overflow-x-scroll md:overflow-x-hidden snap-x-mandatory scroll-padding-24">
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
      </article>
    </section>
  );
}

export default PartnerBar;  
