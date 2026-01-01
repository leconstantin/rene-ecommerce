import clsx from "clsx";
import { ShoppingCartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <Button className="text-sm" size="icon-lg" variant={"outline"}>
      <ShoppingCartIcon
        className={clsx(
          "h-4 transition-all ease-in-out hover:scale-110",
          className
        )}
      />

      {quantity ? (
        <div className="absolute top-0 right-0 -mt-2 -mr-2 h-4 w-4 rounded-sm bg-blue-600 font-medium text-[11px] text-white">
          {quantity}
        </div>
      ) : null}
    </Button>
  );
}
