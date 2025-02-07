"use client";

import { usePaystackPayment } from "react-paystack";
import { DonorInformation, DonationInformation } from "../types";

interface PaystackDonationProps {
  donorInfo: DonorInformation;
  donationInfo: DonationInformation;
  onSuccess: () => void;
  onClose: () => void;
}

export default function PaystackDonation({
  donorInfo,
  donationInfo,
  onSuccess,
  onClose,
}: PaystackDonationProps) {
  const config = {
    reference: new Date().getTime().toString(),
    email: donorInfo.emailAddress,
    amount: donationInfo.amount * 100, // Convert to kobo
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
  };

  const initializePayment = usePaystackPayment(config);

  const handlePayment = () => {
    initializePayment({ onSuccess, onClose });
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-[#003B3B] hover:bg-[#2F6F6F] text-white px-4 py-2 rounded"
    >
      DONATE
    </button>
  );
}
