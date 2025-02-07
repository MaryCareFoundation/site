"use client";
import PaystackPop from "@paystack/inline-js";

export const initializePayment = (
  amount: number,
  email: string,
  onSuccess: () => void
) => {
  const handler = new PaystackPop();
  handler.newTransaction({
    key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
    email,
    amount: amount * 100, // Convert to kobo
    currency: "NGN",
    onSuccess: (response: any) => {
      onSuccess();
      console.log(response, "success");
    },
    onCancel: () => {
      console.log("Payment closed");
    },
  });
};
