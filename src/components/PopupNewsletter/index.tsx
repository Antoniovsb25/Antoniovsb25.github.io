import { useState } from 'react';
function PopupNewsletter() {
  const [isOpen, setIsOpen] = useState(true);
  const closePopupHandler = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isOpen ? (
        <>
          <section
            onClick={closePopupHandler}
            className="dropdown-bg bg-secondary-500 opacity-50 fixed z-20 w-full h-screen"
          ></section>
          <article className="bg-white flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 opacity-100 justify-center">
            <div className="flex flex-col justify-center items-center max-w-xs p-4">
              <img className="w-6 h-6 self-center" src="/images/newsletter-mail-icon.png" />
              <h2 className="text-secondary-500 text-center text-xs">BEM VINDO À MAEZTRA</h2>
              <h3 className="text-secondary-500 text-center my-4">
                Receba em Primeira mão{' '}
                <strong className="text-secondary-500">desconto e ofertas exclusivas</strong>
              </h3>
              <form className="flex flex-col gap-2">
                <input
                  className="border border-secondary-500 border-solid rounded"
                  type="email"
                  id="inputField"
                  name="inputField"
                  placeholder="Digite seu e-mail"
                />
                <button
                  className="md:-m-1 rounded-xl text-xs bg-primary text-white font-bold px-12 py-2"
                  type="submit"
                >
                  Enviar
                </button>
              </form>
            </div>
          </article>
        </>
      ) : null}
    </>
  );
}

export default PopupNewsletter;
