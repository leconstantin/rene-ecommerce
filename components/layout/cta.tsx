import { InfiniteTextMarquee } from "../custom/infinite-text-marquee";

const texts = [
  "Concierge Service",
  "Fast Payouts",
  "Consign with Us",
  "Up to 80% commission",
];
export default function Cta() {
  return (
    <div className="py-10">
      {/* add more gap between texts */}
      <InfiniteTextMarquee text={texts.join("  ")} />
    </div>
  );
}
