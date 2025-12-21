import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ProductQuantity() {
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  return (
    <div className="flex h-10 w-fit min-w-26 flex-row items-center justify-between rounded-full border border-neutral-200 px-3 font-medium">
      <button
        aria-label="Decrease quantity"
        className={cn(
          "h-full cursor-pointer",
          quantity === 1 && "text-muted-foreground"
        )}
        onClick={handleDecrement}
        type="button"
      >
        <MinusIcon className="size-4" strokeWidth={2.5} />
      </button>

      <p className="text-center">
        <span className="w-full text-sm">{quantity}</span>
      </p>

      <button
        aria-label="Increase quantity"
        className={cn("h-full cursor-pointer")}
        onClick={handleIncrement}
        type="button"
      >
        <PlusIcon className="size-4" strokeWidth={2.5} />
      </button>
    </div>
  );
}
