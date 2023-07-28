function Footer() {
  return (
    <footer>
      <article className="light-section flex justify-around p-12">
        <div className="info flex flex-col gap-6">
          <h4 className="font-bold text-secondary-500">Informações</h4>
          <a href="#">Quem Somos</a>
          <a href="#">Prazo de Envio</a>
          <a href="#">Trocas e Devoluções</a>
          <a href="#">Promoções e cupons</a>
        </div>
        <div className="contact flex flex-col gap-6">
          <h4 className="font-bold text-secondary-500">Minha Conta</h4>
          <a href="#">Minha Conta</a>
          <a href="#">Meus Pedidos</a>
          <a href="#">Cadastre-se</a>
        </div>
        <div className="where-to-find-us flex flex-col gap-6">
          <h4 className="font-bold text-secondary-500">Onde nos encontrar</h4>
          <a href="#">Lojas</a>
          <a href="#">Endereço</a>
        </div>
      </article>
      <article className="black-section bg-secondary-500 flex justify-around p-4 items-center">
        <div className="social-media flex gap-4">
          <img className="max-h-8" src="/images/linkedin.png" />
          <img className="max-h-8" src="/images/linkedin.png" />
          <img className="max-h-8" src="/images/linkedin.png" />
          <img className="max-h-8" src="/images/linkedin.png" />
        </div>
        <div className="accepted-payment flex gap-4">
          <img className="max-h-6" src="/images/visa.png" />
          <img className="max-h-6" src="/images/visa.png" />
          <img className="max-h-6" src="/images/visa.png" />
          <img className="max-h-6" src="/images/visa.png" />
        </div>
        <div className="powered-by flex gap-4">
          <img className="max-h-6" src="/images/maeztralogo.png" />
          <img className="max-h-6" src="/images/maeztralogo.png" />
        </div>
      </article>
    </footer>
  );
}

export default Footer;
