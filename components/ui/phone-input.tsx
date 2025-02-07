import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function PhoneInput({ value, onChange, className }: PhoneInputProps) {
  return (
    <div className="flex gap-2">
      <Select defaultValue="NGN">
        <SelectTrigger className="w-[140px] bg-[#F5F5F5]">
          <SelectValue placeholder="Country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="NGN">NGN +234</SelectItem>
          <SelectItem value="NGN">Nigeria (+234)</SelectItem>
          <SelectItem value="USA">United States (+1)</SelectItem>
          <SelectItem value="GBR">United Kingdom (+44)</SelectItem>
          <SelectItem value="CAN">Canada (+1)</SelectItem>
          <SelectItem value="AUS">Australia (+61)</SelectItem>
          <SelectItem value="DEU">Germany (+49)</SelectItem>
          <SelectItem value="FRA">France (+33)</SelectItem>
          <SelectItem value="IND">India (+91)</SelectItem>
          <SelectItem value="CHN">China (+86)</SelectItem>
          <SelectItem value="JPN">Japan (+81)</SelectItem>
          <SelectItem value="BRA">Brazil (+55)</SelectItem>
          <SelectItem value="ZAF">South Africa (+27)</SelectItem>
          <SelectItem value="KEN">Kenya (+254)</SelectItem>
          <SelectItem value="GHA">Ghana (+233)</SelectItem>
          <SelectItem value="UAE">UAE (+971)</SelectItem>
        </SelectContent>
      </Select>
      <Input
        type="tel"
        placeholder="Input your phone number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={className}
      />
    </div>
  );
}
