function Newsletter() {
  return (
    <section className="newsletter-container flex justify-center border-t border-b border-secondary-400 p-8">
      <form className="flex flex-col md:flex-row gap-6 items-center">
        <label className="font-bold text-2xl" htmlFor="inputField">
          Receba nossa Newsletter
        </label>
        <div className="flex gap-2">
          <input
            className="md:pl-6 md:pr-64 py-2 border border-secondary-500 border-solid rounded"
            type="email"
            id="inputField"
            name="inputField"
            placeholder="Digite seu e-mail"
          />
          <button className="rounded bg-primary text-white font-bold px-12 py-3" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
}

export default Newsletter;
