import { FileQuestion } from "lucide-react"
import { TypographyH2, TypographyP } from "../typography"

export function NoPosts() {
  return (
    <div className="text-center py-12">
      <div className="flex justify-center mb-6">
        <FileQuestion className="h-20 w-20 text-muted-foreground" />
      </div>
      <TypographyH2 className="mb-3">No Posts Found</TypographyH2>
      <TypographyP className="text-muted-foreground">
        There are no blog posts in this category yet. Please check back later or try a different category.
      </TypographyP>
    </div>
  )
} 