function InfoCard() {
  return (
    <section className="info-card-container flex my-24 max-w-screen-2xl m-auto">
      <div className="text-container flex-shrink w-1/5 flex flex-col justify-center">
        <h3 className="title font-bold text-2xl my-6">Lorem ipsum</h3>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce
          proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget
          nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit
          pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis
          id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit
          massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor
          phasellus donec condimentum sit sapien.
        </p>
      </div>
      <div className="image-container flex-grow w-4/5 flex justify-end">
        <picture>
          <source media="(max-width: 650px)" srcSet="/images/infocard-banner-mobile.png" />
          <img src="/images/infocard-banner.png" />
        </picture>
      </div>
    </section>
  );
}

export default InfoCard;
