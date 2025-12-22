import clsx from "clsx";

const Price = ({
  amount,
  className,
  currencyCode = "USD",
  currencyCodeClassName,
  showCurrencyCode = true,
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
  showCurrencyCode?: boolean;
} & React.ComponentProps<"p">) => (
  <p className={className} suppressHydrationWarning={true}>
    {`${new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: currencyCode,
      currencyDisplay: "narrowSymbol",
    }).format(Number.parseFloat(amount))}`}
    {showCurrencyCode ? (
      <span
        className={clsx("ml-1 inline", currencyCodeClassName)}
      >{`${currencyCode}`}</span>
    ) : null}
  </p>
);

export default Price;
