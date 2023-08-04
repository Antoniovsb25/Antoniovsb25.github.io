import { useState } from 'react';
import SlimBanner from '../SlimBanner';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <SlimBanner />
        <header className=" header-mobile relative flex gap-24 md:hidden p-2">
          <div className="flex">
            {/* Menu Hamburguer */}
            <div
              className={`cursor-pointer p-4 flex items-center justify-center flex-col ${
                isOpen ? 'bg-transparent' : 'bg-secondary-300'
              }`}
              onClick={toggleMenu}
            >
              <div
                className={`w-6 h-px bg-black ${
                  isOpen ? 'rotate-45 translate-x-1 translate-y-2' : ''
                }`}
              ></div>
              <div className={`w-6 h-px bg-black my-1 ${isOpen ? 'opacity-0' : ''}`}></div>
              <div
                className={`w-6 h-px bg-black ${
                  isOpen ? '-rotate-45 translate-x-1 -translate-y-2' : ''
                }`}
              ></div>
            </div>
            {/* Logo */}
            <div className="flex items-center">
              <img src="/images/logo-maeztra-novo-mobile.png" alt="Logo" className="" />
            </div>
          </div>

          {/* Div com logos */}
          <div className="flex items-center gap-8">
            {/* Logo 2 */}
            <div className="">
              <img src="/images/search-icon-mobile.png" alt="Logo 2" className="" />
            </div>

            {/* Logo 3 */}
            <div className="">
              <img src="/images/minicart.png" alt="Logo 3" className="" />
            </div>
          </div>
        </header>
        <header className="header-desktop hidden md:flex md:flex-col">
          <div className="top-header flex justify-between p-4 border-b shadow-md">
            <div className="logo-search-wrapper flex-grow gap-20 flex items-center justify-start">
              <img src="/images/logo-maeztra-novo.png" />
              <div className="w-full">
                <input
                  className="border rounded w-4/5 bg-secondary-400 text-secondary-500 p-2"
                  type="text"
                  placeholder="O que você busca?"
                />
                <button className="bg-primary text-white rounded px-8 py-2" type="button">
                  Buscar
                </button>
              </div>
            </div>
            <div className="options-wrapper flex gap-20">
              <a className="text-sm" href="#">
                Minha Conta
              </a>
              <a className="text-sm" href="#">
                Favoritos
              </a>
              <a className="text-sm" href="#">
                Meu carrinho
              </a>
            </div>
          </div>
          <div className="bottom-header">
            <nav>
              <ul className="flex justify-center items-center gap-32">
                <li className="my-4 text-sm cursor-pointer text-gray-700 hover:text-primary">
                  Novidades
                </li>
                <li className="my-4 text-sm cursor-pointer text-gray-700 hover:text-primary">
                  Vestidos
                </li>
                <li className="my-4 text-sm cursor-pointer text-gray-700 hover:text-primary">
                  Roupas
                </li>
                <li className="my-4 text-sm cursor-pointer text-gray-700 hover:text-primary">
                  Sapatos
                </li>
                <li className="my-4 text-sm cursor-pointer text-gray-700 hover:text-primary">
                  Lingerie
                </li>
                <li className="my-4 text-sm cursor-pointer text-gray-700 hover:text-primary">
                  Acessórios
                </li>
                <li className="my-4 text-sm cursor-pointer text-gray-700 hover:text-primary">
                  OUTLET
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>

      {isOpen && (
        <div className="z-10 fixed top-0 left-0 bg-secondary-300 w-1/2 h-screen flex items-center justify-center flex-col">
          <button
            className="absolute top-4 right-4 text-xl font-bold text-gray-700 cursor-pointer"
            onClick={closeMenu}
          >
            X
          </button>
          <ul>
            <li className="my-4 text-lg text-gray-700">Novidades</li>
            <li className="my-4 text-lg text-gray-700">Vestidos</li>
            <li className="my-4 text-lg text-gray-700">Roupas</li>
            <li className="my-4 text-lg text-gray-700">Sapatos</li>
            <li className="my-4 text-lg text-gray-700">Lingerie</li>
            <li className="my-4 text-lg text-gray-700">Acessórios</li>
            <li className="my-4 text-lg text-gray-700">OUTLET</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
