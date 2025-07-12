
export interface Perfume {
  id: string;
  name: string;
  brand: string;
  description: string;
  shortDescription: string;
  price: number;
  currency: string; // Adding currency field
  sizes: Size[];
  category: string;
  gender: "Male" | "Female" | "Unisex";
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  imageUrl: string;
  additionalImages: string[];
  rating: number;
  reviews: Review[];
  featured: boolean;
  new: boolean;
  bestseller: boolean;
  isInWishlist?: boolean;
}

export interface Size {
  value: number;
  unit: "ml" | "oz";
  price: number;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}
