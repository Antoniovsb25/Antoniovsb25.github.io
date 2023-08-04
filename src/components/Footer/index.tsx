import { useState } from 'react';

interface AccordionProps {
  title: string;
  content: React.ReactNode;
}

const Accordion = ({ title, content }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="p-1 mb-2 md:hidden">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleAccordion}>
        <h2 className="text-xl font-semibold">{title}</h2>
        <span className="font-bold">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="mt-2">{content}</div>}
    </div>
  );
};

function Footer() {
  return (
    <footer>
      <article className="light-section flex flex-col md:flex-row justify-around p-12 gap-4">
        <div className="info md:flex flex-col gap-6 hidden">
          <h4 className="font-bold text-secondary-500">Informações</h4>
          <a href="#">Quem Somos</a>
          <a href="#">Prazo de Envio</a>
          <a href="#">Trocas e Devoluções</a>
          <a href="#">Promoções e cupons</a>
        </div>
        <div className="contact md:flex flex-col gap-6 hidden">
          <h4 className="font-bold text-secondary-500">Minha Conta</h4>
          <a href="#">Minha Conta</a>
          <a href="#">Meus Pedidos</a>
          <a href="#">Cadastre-se</a>
        </div>
        <div className="where-to-find-us md:flex flex-col gap-6 hidden">
          <h4 className="font-bold text-secondary-500">Onde nos encontrar</h4>
          <a href="#">Lojas</a>
          <a href="#">Endereço</a>
        </div>
        <Accordion
          title="Informações"
          content={
            <div className="flex flex-col">
              <a href="#">Quem Somos</a>
              <a href="#">Prazo de Envio</a>
              <a href="#">Trocas e Devoluções</a>
              <a href="#">Promoções e cupons</a>
            </div>
          }
        />
        <Accordion
          title="Minha Conta"
          content={
            <div className="flex flex-col">
              <a href="#">Minha Conta</a>
              <a href="#">Meus Pedidos</a>
              <a href="#">Cadastre-se</a>
            </div>
          }
        />
        <Accordion
          title="Onde nos encontrar"
          content={
            <div className="flex flex-col">
              <a href="#">Lojas</a>
              <a href="#">Endereços</a>
            </div>
          }
        />
      </article>
      <article className="black-section bg-secondary-500 flex flex-col md:flex-row justify-around p-4 items-center gap-4">
        <div className="social-media flex gap-4">
          <img className="max-h-8" src="/images/facebook.png" />
          <img className="max-h-8" src="/images/linkedin.png" />
          <img className="max-h-8" src="/images/instagram.png" />
          <img className="max-h-8" src="/images/youtube.png" />
        </div>
        <div className="accepted-payment flex gap-4">
          <img className="max-h-6" src="/images/visa.png" />
          <img className="max-h-6" src="/images/mastercard.png" />
          <img className="max-h-6" src="/images/visa.png" />
          <img className="max-h-6" src="/images/mastercard.png" />
        </div>
        <div className="powered-by flex gap-2">
          <img src="/images/poweredbyvtex.png" />
          <img src="/images/developedbymaeztra.png" />
        </div>
      </article>
    </footer>
  );
}

export default Footer;
