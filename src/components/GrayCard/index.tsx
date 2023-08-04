interface GrayCardProps {
  title: string;
  text: string;
  imageLink: string
}
function GrayCard({ title, text, imageLink }: GrayCardProps) {
  return (
    <div className="bg-secondary-400 container rounded flex h-16 items-center gap-6 p-3 item flex-none w-308px snap-align-start">
      <img className="logo w-8 h-8" src={imageLink} />
      <div className="text-container flex flex-col">
        <span className="text-sm font-bold">{title}</span>
        <span className="text-xs">{text}</span>
      </div>
    </div>
  );
}
export default GrayCard;
