import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ShippingFaqs() {
  return (
    <div className="space-y-5">
      <h3 className="font-bold text-xl">Shipping</h3>
      <Accordion
        className="w-full"
        collapsible
        defaultValue="item-1"
        type="single"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>What is your shipping process?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-foreground/80">
            <p>
              Please allow 1-3 days for your purchases to be shipped. Please
              note this may take longer during sale periods.
            </p>
            <p>
              Once your item(s) have been shipped from our location you will
              receive an email with your tracking information so you can follow
              the shipment progress of your item(s).
            </p>
            <p>
              All shipments valued at over $750 will require a signature upon
              delivery, but lower valued packages may require a signature as
              well on a case-by-case basis.
            </p>
            <p>
              All standard domestic shipments will be sent via UPS or USPS.
              Overnight shipments, as well as international shipments, will be
              sent via UPS or FEDEX.
            </p>
            <p>Please note, FedEx and UPS do not ship to P.O. Boxes.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
