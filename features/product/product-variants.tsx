"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ProductOption, ProductVariant } from "@/shopify/types";
import { useProduct, useUpdateURL } from "./product-context";

type Combination = {
  id: string;
  availableForSale: boolean;
  [key: string]: string | boolean;
};

export function ProductVariantsSelector({
  options,
  variants,
}: {
  options: ProductOption[];
  variants: ProductVariant[];
}) {
  const { state, updateOption } = useProduct();
  const updateUrl = useUpdateURL();
  const hasNoOptionsOrJustOneOption =
    !options.length ||
    (options.length === 1 && options[0]?.values.length === 1);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }

  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.id,
    availableForSale: variant.availableForSale,
    ...variant.selectedOptions.reduce((accumulator, option) => {
      accumulator[option.name.toLowerCase()] = option.value;
      return accumulator;
    }, {} as Record<string, string>),
  }));
  return options.map((option) => (
    <form key={option.id}>
      <dl className="space-y-2">
        {/* <dt className="mb-4 text-sm uppercase tracking-wide">{option.name}</dt> */}
        <dt className="text-sm capitalize">
          <span className="font-medium">{option.name}</span>{" "}
          {state[option.name.toLowerCase()]}
        </dt>
        <dd className="flex flex-wrap gap-3">
          {option.values.map((value) => {
            const optionNameLowerCase = option.name.toLowerCase();

            // Base option params on current selectedOptions so we can preserve any other param state.
            const optionParams = { ...state, [optionNameLowerCase]: value };

            // Filter out invalid options and check if the option combination is available for sale.
            const filtered = Object.entries(optionParams).filter(
              ([key, paramValue]) =>
                options.find(
                  (opt) =>
                    opt.name.toLowerCase() === key &&
                    opt.values.includes(paramValue)
                )
            );
            const isAvailableForSale = combinations.find((combination) =>
              filtered.every(
                ([key, filterValue]) =>
                  combination[key] === filterValue &&
                  combination.availableForSale
              )
            );

            // The option is active if it's in the selected options.
            const isActive = state[optionNameLowerCase] === value;

            return (
              <Button
                aria-disabled={!isAvailableForSale}
                className={cn(
                  "rounded-full font-medium text-sm ring ring-muted hover:bg-transparent hover:ring-black",
                  isActive && "ring-brand"
                )}
                disabled={!isAvailableForSale}
                formAction={() => {
                  const newState = updateOption(optionNameLowerCase, value);
                  updateUrl(newState);
                }}
                key={value}
                variant={"outline"}
              >
                {value}
              </Button>
              //   <button
              //     aria-disabled={!isAvailableForSale}
              //     className={clsx(
              //       "flex min-w-12 items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900",
              //       {
              //         "cursor-default ring-2 ring-blue-600": isActive,
              //         "ring-1 ring-transparent transition duration-300 ease-in-out hover:ring-blue-600":
              //           !isActive && isAvailableForSale,
              //         "relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700 dark:before:bg-neutral-700":
              //           !isAvailableForSale,
              //       }
              //     )}
              //     disabled={!isAvailableForSale}
              //     formAction={() => {
              //       const newState = updateOption(optionNameLowerCase, value);
              //       updateUrl(newState);
              //     }}
              //     key={value}
              //     title={`${option.name} ${value}${
              //       isAvailableForSale ? "" : " (Out of Stock)"
              //     }`}
              //     type="submit"
              //   >
              //     {value}
              //   </button>
            );
          })}
        </dd>
      </dl>
    </form>
  ));
}
