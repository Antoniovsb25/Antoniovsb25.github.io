interface PartnerCardProps {
  imageLink: string;
}
function PartnerCard({ imageLink }: PartnerCardProps) {
  return (
    <div className="bg-secondary-400 container rounded h-16 w-308px flex-none snap-align-start">
      <img className="logo" src={imageLink} />
    </div>
  );
}
export default PartnerCard;
