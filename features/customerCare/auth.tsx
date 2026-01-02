import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AuthenticityFaqs() {
  return (
    <div className="space-y-5">
      <h3 className="font-bold text-xl">Authenticity</h3>
      <Accordion
        className="w-full"
        collapsible
        defaultValue="item-1"
        type="single"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How can I be sure my item is authentic?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-foreground/80">
            <p>
              We understand the importance of authenticity when it comes to both
              vintage and contemporary pieces, and we take great pride in
              offering genuine, high-quality products. To ensure your confidence
              and trust in our brand, we provide the following authenticity
              guarantee:
            </p>
            <div className="space-y-3">
              <h4 className="font-medium">Quality Assessment</h4>
              <p>
                Before being listed for sale, every item undergoes a rigorous
                quality assessment to confirm its condition and authenticity. We
                scrutinize details such as materials, construction techniques,
                and manufacturer markings to ensure they align with the
                standards of the brand in the object’s given period.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">Expert Curation</h4>
              <p>
                Our team of experienced curators meticulously selects each item
                in our collection, conducting thorough research and verification
                processes to authenticate its origin, era, and craftsmanship.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">Transparent Descriptions</h4>
              <p>
                We provide detailed descriptions and photographs of each item,
                highlighting unique features, imperfections (if any), and any
                signs of wear or age to give you a comprehensive understanding
                of its condition and authenticity.
              </p>
            </div>
            <p>
              At Justin Reed, our commitment to authenticity extends beyond just
              selling products; it's essential to our brand. We understand the
              significance of owning pieces with a genuine connection to the
              past, and we're dedicated to preserving that authenticity for
              generations to come.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
