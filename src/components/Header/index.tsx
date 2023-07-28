import SlimBanner from '../SlimBanner';

function Header() {
  return (
    <header>
      <SlimBanner />
      <div className="flex bg-white p-8 border-b shadow-xl">
        <div className="flex items-center">
          <img src="/images/logo-maeztra-novo.png" alt="Logo da Minha Loja" />
        </div>

        <form className="flex-grow mx-4 flex">
          <input
            type="text"
            placeholder="Pesquisar produtos"
            className="w-full rounded-lg px-4 py-2 bg-secondary-400 text-secondary-500 focus:outline-none"
          />
          <button className="px-8 py-2 bg-primary rounded-lg text-white" type="submit">
            Buscar
          </button>
        </form>

        <nav className="flex items-center space-x-4">
          <a href="#" className="text-secondary-500">
            Minha Conta
          </a>
          <a href="#" className="text-secondary-500">
            Lista de Desejos
          </a>
          <a href="#" className="text-secondary-500">
            Meu Carrinho
          </a>
        </nav>
      </div>
      <div className="categories bg-white flex justify-evenly p-4">
        <a href="#">Novidades</a>
        <a href="#">Vestidos</a>
        <a href="#">Roupas</a>
        <a href="#">Sapatos</a>
        <a href="#">Lingeries</a>
        <a href="#">Acessórios</a>
        <a href="#">OUTLET</a>
      </div>
    </header>
  );
}

export default Header;
