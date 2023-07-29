function MainBanner() {
  return (
    <div className="flex justify-center">
    <picture>
      <source media="(max-width: 640px)" srcSet="/images/mainbanner-mobile.png" />
      <img className="max-w-full w-auto h-auto" src="/images/mainbanner.png" />
    </picture>
    </div>
  );
}

export default MainBanner;
