"use client";

import { XIcon } from "lucide-react";
import { useActionState } from "react";
import type { CartItem } from "@/shopify/types";
import { removeItem } from "./actions";

export function DeleteItemButton({
  item,
  optimisticUpdate,
}: {
  item: CartItem;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  optimisticUpdate: any;
}) {
  const [message, formAction] = useActionState(removeItem, null);
  const merchandiseId = item.merchandise.id;
  const removeItemAction = formAction.bind(null, merchandiseId);

  return (
    <form
      action={async () => {
        optimisticUpdate(merchandiseId, "delete");
        await removeItemAction();
      }}
    >
      <button
        aria-label="Remove cart item"
        className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-neutral-500"
        type="submit"
      >
        <XIcon className="mx-px h-4 w-4 text-white dark:text-black" />
      </button>
      <p aria-live="polite" className="sr-only">
        {message}
      </p>
    </form>
  );
}
