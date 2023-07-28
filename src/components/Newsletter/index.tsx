function Newsletter() {
  return (
    <section className="newsletter-container flex justify-center border-t border-b border-secondary-400 p-8">
      <form className="flex gap-6 items-center">
        <label className="font-bold text-2xl" htmlFor="inputField">
          Receba nossa Newsletter
        </label>
        <div>
          <input
            className="pl-6 pr-64 py-2 border border-secondary-500 border-solid rounded"
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
