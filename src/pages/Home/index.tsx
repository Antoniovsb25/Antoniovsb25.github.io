import Header from '../../components/Header';
import MainBanner from '../../components/MainBanner';
import PartnerBar from '../../components/PartnerBar';
import ProductCard from '../../components/ProductCard';
import TipBar from '../../components/TipBar';

function Home() {
  return (
    <main className="mx-auto max-w-1920px self-center bg-secondary-300">
      <Header />
      <MainBanner />
      <TipBar />
      <PartnerBar />
      <ProductCard />
    </main>
  );
}
export default Home;
