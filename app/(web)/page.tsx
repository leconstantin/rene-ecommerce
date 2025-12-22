import { HomeCarousel } from "@/features/home/home-carousel";
import { ThreeItemGrid } from "@/features/home/three-item-grids";

export default function Home() {
  return (
    <>
      <ThreeItemGrid />
      <div className="container space-y-4 bg-white py-4 lg:bg-transparent">
        <HomeCarousel />
      </div>
    </>
  );
}
