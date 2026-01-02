import type { Metadata } from "next";
import { AuthenticityFaqs } from "@/features/customerCare/auth";
import { ReturnsFaqs } from "@/features/customerCare/returns";
import { ShippingFaqs } from "@/features/customerCare/shipping";

export const metadata: Metadata = {
  title: "Customer Care",
  description: "Customer Care",
};
export default function CustomerCare() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-10 py-16">
      <ReturnsFaqs />
      <ShippingFaqs />
      <AuthenticityFaqs />
    </div>
  );
}
