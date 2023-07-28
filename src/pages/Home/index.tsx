import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InfoCard from '../../components/InfoCard';
import MainBanner from '../../components/MainBanner';
import Newsletter from '../../components/Newsletter';
import PartnerBar from '../../components/PartnerBar';
import Shelf from '../../components/Shelf';
import TipBar from '../../components/TipBar';

function Home() {
  return (
    <main className="mx-auto w-full max-w-1920px self-center bg-secondary-300">
      <Header />
      <MainBanner />
      <TipBar />
      <PartnerBar />
      <Shelf />
      <InfoCard />
      <Newsletter />
      <Footer />
    </main>
  );
}
export default Home;
