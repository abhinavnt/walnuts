import { Button } from "../ui/Button"

interface ProductFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

const categories = [
  { value: "all", label: "All Products" },
  { value: "dates", label: "Dates" },
  { value: "nuts", label: "Nuts" },
  { value: "dry-fruits", label: "Dry Fruits" },
  { value: "chocolates", label: "Chocolates" },
]

export function ProductFilter({ selectedCategory, onCategoryChange }: ProductFilterProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <h2 className="text-lg font-semibold text-[#651C32]">Filter Products</h2>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => onCategoryChange(category.value)}
              size="sm"
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
