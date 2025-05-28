import { Button } from "../ui/Button";

// Define Category interface
interface Category {
  id: string;
  name: string;
}

interface ProductFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProductFilter({ categories, selectedCategory, onCategoryChange }: ProductFilterProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <h2 className="text-lg font-semibold text-[#651C32]">Filter Products</h2>

        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            onClick={() => onCategoryChange("all")}
            size="sm"
          >
            All Products
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => onCategoryChange(category.id)}
              size="sm"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}