import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BlogFilterProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function BlogFilter({ value, onValueChange }: BlogFilterProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[300px] bg-[#F5F5F5]">
        <SelectValue placeholder="Filter by program" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Programs</SelectItem>
        <SelectItem value="save-time">SAVE TIME, SAVE LIFE</SelectItem>
        <SelectItem value="health-professionals">
          HEALTH PRACTIONALS EMPOWERMENT PROGRAM
        </SelectItem>
        <SelectItem value="girl-child">TRAIN A GIRL CHILD PROJECT</SelectItem>
        <SelectItem value="maternal-health">
          MATERNAL HEALTH RESEARCH
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
