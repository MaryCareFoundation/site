"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DonorInformation, DonationInformation } from "../types";
import { X } from "lucide-react";
import { TypographyH2, TypographyH3, TypographyP } from "./typography";
import Image from "next/image";
import { PhoneInput } from "./ui/phone-input";
import dynamic from "next/dynamic";

// Dynamically import PaystackDonation with SSR disabled
const PaystackDonation = dynamic(
  () => import("./PaystackDonation").then((mod) => mod.default),
  {
    ssr: false,
  }
);

interface DonationFormProps {
  onClose: () => void;
}

export function DonationForm({ onClose }: DonationFormProps) {
  const [step, setStep] = useState(1);
  const [donorInfo, setDonorInfo] = useState<DonorInformation>({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
  });
  const [donationInfo, setDonationInfo] = useState<DonationInformation>({
    amount: 0,
    purpose: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = () => {
    if (
      donorInfo.fullName === "" ||
      donorInfo.emailAddress === "" ||
      donorInfo.phoneNumber === ""
    ) {
      alert("Please fill in all fields");
      return;
    }
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-6 max-w-md md:max-w-3xl w-full">
          <div className="flex justify-between items-center mb-4">
            <TypographyH2 className="text-xl font-bold text-center mx-auto">
              DONATION SUCCESSFUL
            </TypographyH2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-center py-8 flex items-center justify-center gap-5">
            <Image
              src={"/icons/tick-circle.svg"}
              alt="Check Circle"
              width={150}
              height={150}
            />
            <TypographyP className="max-w-sm">
              Thanks for helping us take one more step towards achieving our
              goals.
            </TypographyP>
          </div>
          <Button
            className="flex items-center justify-center mx-auto bg-[#003B3B] hover:bg-[#2F6F6F]"
            onClick={onClose}
          >
            BACK
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 md:max-w-3xl max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <TypographyH2 className="text-xl font-bold">Donate</TypographyH2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <TypographyH3 className="font-semibold">
              Donors Information
            </TypographyH3>
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={donorInfo.fullName}
                onChange={(e) =>
                  setDonorInfo({ ...donorInfo, fullName: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={donorInfo.emailAddress}
                onChange={(e) =>
                  setDonorInfo({ ...donorInfo, emailAddress: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <PhoneInput
                value={donorInfo.phoneNumber}
                onChange={(value) =>
                  setDonorInfo({ ...donorInfo, phoneNumber: value })
                }
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <TypographyH3 className="font-semibold">
              Donation Information
            </TypographyH3>
            <div className="space-y-2">
              <Label htmlFor="amount">Donation Amount</Label>
              <Input
                id="amount"
                type="number"
                value={donationInfo.amount || ""}
                onChange={(e) =>
                  setDonationInfo({
                    ...donationInfo,
                    amount: Number(e.target.value),
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="purpose">Donation Purpose</Label>
              <Select
                value={donationInfo.purpose}
                onValueChange={(value) =>
                  setDonationInfo({ ...donationInfo, purpose: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select purpose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="save-time">
                  SAVE TIME, SAVE LIFE
                  </SelectItem>
                  <SelectItem value="healthcare-practitioners-empowerment">HEALTH PRACTITIONERS EMPOWERMENT PROGRAM</SelectItem>
                  <SelectItem value="train-a-girl-child-project">TRAIN A GIRL CHILD PROJECT</SelectItem>
                  <SelectItem value="maternal-health-research">MATERNAL HEALTH RESEARCH</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm">
              <TypographyP className="font-medium mb-2">
                NOTE: You can also donate directly via the account below
              </TypographyP>
              <ul className="space-y-1 text-gray-600">
                <li>• Mary Care Foundation</li>
                <li>• Bank: Zenith Bank</li>
                <li>• Account No: 1228537710</li>
              </ul>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <Button variant="outline" onClick={() => setStep(step - 1)}>
              Back
            </Button>
          )}
          {step === 2 ? (
            <PaystackDonation
              donorInfo={donorInfo}
              donationInfo={donationInfo}
              onSuccess={() => setIsSuccess(true)}
              onClose={onClose}
            />
          ) : (
            <Button
              className="bg-[#003B3B] hover:bg-[#2F6F6F] ml-auto"
              onClick={() => setStep(step + 1)}
            >
              Continue
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
