function MainBanner() {
  return (
    <picture>
      <source media="(max-width: 650px)" srcSet="/images/mainbanner-mobile.png" />
      <img src="/images/mainbanner.png" />
    </picture>
  );
}

export default MainBanner;
