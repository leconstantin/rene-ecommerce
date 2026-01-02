import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ReturnsFaqs() {
  return (
    <div className="space-y-5">
      <h3 className="font-bold text-xl">Returns</h3>
      <Accordion
        className="w-full"
        collapsible
        defaultValue="item-1"
        type="single"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-foreground/80">
            <p>
              Returns can be requested for up to 7 days after the item is
              received, and are for store credit ONLY. All item(s) must be
              returned in original condition, and all items purchased new with
              tags must be returned with tags still attached and in unworn
              condition. Returns are subject to a 15% restocking fee.
            </p>
            <p>
              We reserve the right to not accept returns that do not meet our
              standards, and they will be sent back to you.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I request a return?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-foreground/80">
            <p>
              Returns can be requested at help@justinreed.com. Please e-mail
              with your order number and your reason for return, and someone
              will respond to you within 24 hours.
            </p>
            <p>
              Returns will be analyzed on a case by case basis. Please do not
              send your item(s) back without reaching out to initiate a return.
            </p>
            <p>
              Store credit will be given for the total of the item(s) minus the
              shipping cost, and will be issued when the return is received back
              in our possession.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            How will I receive my store credit?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-foreground/80">
            <p>
              Returns are brought to our office from our secure external mailbox
              several times a week. Upon receipt of your return in our office,
              store credit will be issued to you in the form of a gift card.
              Gift cards are sent via e-mail and are available for use as soon
              as they are received.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
