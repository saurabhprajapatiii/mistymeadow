
import { Perfume, Review, Size } from "@/models/perfume";

// Mock data for perfumes
const perfumes: Perfume[] = [
  {
    id: "1",
    name: "Enigma",
    brand: "Luminescence",
    description: "A captivating blend of exotic florals and warm amber, Enigma is a mysterious and alluring fragrance that evolves throughout the day. Opening with bright bergamot and delicate jasmine, it transitions to a heart of rose and ylang-ylang before settling into a rich base of amber, vanilla, and musk. Perfect for evening wear and special occasions, this long-lasting perfume leaves an unforgettable impression.",
    shortDescription: "A mysterious blend of exotic florals and warm amber",
    price: 8999,
    currency: "₹",
    sizes: [
      { value: 30, unit: "ml", price: 8999 },
      { value: 50, unit: "ml", price: 12999 },
      { value: 100, unit: "ml", price: 18999 }
    ],
    category: "Floral Oriental",
    gender: "Female",
    notes: {
      top: ["Bergamot", "Jasmine", "Pink Pepper"],
      middle: ["Rose", "Ylang-ylang", "Iris"],
      base: ["Amber", "Vanilla", "Musk", "Sandalwood"]
    },
    imageUrl: "/perfume-images/enigma.jpg",
    additionalImages: [
      "/perfume-images/enigma-2.jpg",
      "/perfume-images/enigma-3.jpg"
    ],
    rating: 4.8,
    reviews: [
      {
        id: "r1",
        userName: "Sophie L.",
        rating: 5,
        comment: "This is my signature scent! I always get compliments when I wear it. Long-lasting and evolves beautifully throughout the day.",
        date: "2023-10-15"
      },
      {
        id: "r2",
        userName: "Emma J.",
        rating: 4.5,
        comment: "Sophisticated and elegant. Perfect for evening events.",
        date: "2023-09-28"
      }
    ],
    featured: true,
    new: false,
    bestseller: true
  },
  {
    id: "2",
    name: "Aqua Vitae",
    brand: "Azure",
    description: "Aqua Vitae is a fresh and invigorating fragrance inspired by the crystalline waters of the Mediterranean. This aquatic scent combines zesty citrus notes with a marine accord, creating a refreshing experience that transports you to sun-drenched coastal shores. The addition of aromatic herbs adds depth and sophistication, while the base notes of white musk provide a clean, lasting finish that stays close to the skin.",
    shortDescription: "A fresh aquatic scent inspired by Mediterranean shores",
    price: 6999,
    currency: "₹",
    sizes: [
      { value: 30, unit: "ml", price: 6999 },
      { value: 75, unit: "ml", price: 11999 },
      { value: 125, unit: "ml", price: 15999 }
    ],
    category: "Aquatic Fresh",
    gender: "Unisex",
    notes: {
      top: ["Lemon", "Bergamot", "Sea Salt"],
      middle: ["Marine Accord", "Rosemary", "Lavender"],
      base: ["White Musk", "Cedar", "Amber"]
    },
    imageUrl: "/perfume-images/aqua-vitae.jpg",
    additionalImages: [
      "/perfume-images/aqua-vitae-2.jpg",
      "/perfume-images/aqua-vitae-3.jpg"
    ],
    rating: 4.6,
    reviews: [
      {
        id: "r3",
        userName: "Alex M.",
        rating: 5,
        comment: "Perfect summer scent. Light, fresh, and gets many compliments.",
        date: "2023-07-12"
      },
      {
        id: "r4",
        userName: "Jordan T.",
        rating: 4,
        comment: "Great everyday fragrance. Wish it lasted a bit longer.",
        date: "2023-08-03"
      }
    ],
    featured: true,
    new: true,
    bestseller: false
  },
  {
    id: "3",
    name: "Oud Noir",
    brand: "Maison Royale",
    description: "Oud Noir is a luxurious and sophisticated fragrance built around the precious oud wood, known as 'liquid gold' in perfumery. This opulent scent combines smoky oud with spicy saffron and cardamom, creating a warm and resinous opening. As it develops, a heart of Turkish rose and patchouli emerges, before settling into a rich base of oud, vetiver, and leather. A powerful and long-lasting fragrance that makes a bold statement.",
    shortDescription: "A luxurious blend of precious oud wood and spices",
    price: 15999,
    currency: "₹",
    sizes: [
      { value: 50, unit: "ml", price: 15999 },
      { value: 100, unit: "ml", price: 24999 }
    ],
    category: "Woody Oriental",
    gender: "Male",
    notes: {
      top: ["Saffron", "Cardamom", "Black Pepper"],
      middle: ["Turkish Rose", "Patchouli", "Cinnamon"],
      base: ["Oud", "Vetiver", "Leather", "Amber"]
    },
    imageUrl: "/perfume-images/oud-noir.jpg",
    additionalImages: [
      "/perfume-images/oud-noir-2.jpg",
      "/perfume-images/oud-noir-3.jpg"
    ],
    rating: 4.9,
    reviews: [
      {
        id: "r5",
        userName: "Michael R.",
        rating: 5,
        comment: "Exceptional quality. The complexity of this fragrance is remarkable. Worth every penny.",
        date: "2023-12-05"
      },
      {
        id: "r6",
        userName: "David H.",
        rating: 4.5,
        comment: "Sophisticated and masculine. Perfect for formal occasions.",
        date: "2024-01-18"
      }
    ],
    featured: true,
    new: false,
    bestseller: true
  },
  {
    id: "4",
    name: "Velvet Rose",
    brand: "Blooming Essence",
    description: "Velvet Rose is a modern interpretation of the classic rose fragrance, offering a rich and velvety experience. This luxurious scent opens with bright bergamot and raspberry, leading to a heart of Damascena rose, peony, and violet. The base notes of patchouli, musk, and vanilla create a warm and sensual foundation that lingers on the skin. An elegant and feminine fragrance that celebrates the timeless beauty of roses.",
    shortDescription: "A modern interpretation of the classic rose fragrance",
    price: 9999,
    currency: "₹",
    sizes: [
      { value: 30, unit: "ml", price: 9999 },
      { value: 50, unit: "ml", price: 13999 },
      { value: 100, unit: "ml", price: 18999 }
    ],
    category: "Floral",
    gender: "Female",
    notes: {
      top: ["Bergamot", "Raspberry", "Pink Pepper"],
      middle: ["Damascena Rose", "Peony", "Violet"],
      base: ["Patchouli", "Musk", "Vanilla", "Amberwood"]
    },
    imageUrl: "/perfume-images/velvet-rose.jpg",
    additionalImages: [
      "/perfume-images/velvet-rose-2.jpg",
      "/perfume-images/velvet-rose-3.jpg"
    ],
    rating: 4.7,
    reviews: [
      {
        id: "r7",
        userName: "Isabella F.",
        rating: 5,
        comment: "The most beautiful rose fragrance I've ever tried. Not old-fashioned at all, but fresh and modern.",
        date: "2023-11-22"
      },
      {
        id: "r8",
        userName: "Catherine W.",
        rating: 4,
        comment: "Elegant and feminine. Beautiful bottle too!",
        date: "2024-02-14"
      }
    ],
    featured: false,
    new: true,
    bestseller: false
  },
  {
    id: "5",
    name: "Amber Intense",
    brand: "Golden Aura",
    description: "Amber Intense is a warm and sensual fragrance that envelops you like a cashmere blanket. This rich oriental scent opens with spicy notes of cardamom and cinnamon, revealing a heart of amber and labdanum. The base notes of vanilla, tonka bean, and sandalwood create a cozy and addictive trail that lasts for hours. Perfect for colder months or evening wear, this fragrance offers a sophisticated and comforting embrace.",
    shortDescription: "A warm and sensual amber fragrance with spicy notes",
    price: 11999,
    currency: "₹",
    sizes: [
      { value: 50, unit: "ml", price: 11999 },
      { value: 100, unit: "ml", price: 17999 }
    ],
    category: "Oriental Spicy",
    gender: "Unisex",
    notes: {
      top: ["Cardamom", "Cinnamon", "Bergamot"],
      middle: ["Amber", "Labdanum", "Jasmine"],
      base: ["Vanilla", "Tonka Bean", "Sandalwood", "Musk"]
    },
    imageUrl: "/perfume-images/amber-intense.jpg",
    additionalImages: [
      "/perfume-images/amber-intense-2.jpg",
      "/perfume-images/amber-intense-3.jpg"
    ],
    rating: 4.5,
    reviews: [
      {
        id: "r9",
        userName: "Noah P.",
        rating: 4.5,
        comment: "The perfect fall/winter scent. Warm, spicy, and comforting.",
        date: "2023-12-10"
      },
      {
        id: "r10",
        userName: "Olivia M.",
        rating: 4.5,
        comment: "Long-lasting and projects well. Gets many compliments.",
        date: "2024-01-05"
      }
    ],
    featured: true,
    new: false,
    bestseller: true
  },
];

// Get all perfumes
export const getAllPerfumes = (): Promise<Perfume[]> => {
  return Promise.resolve(perfumes);
};

// Get featured perfumes
export const getFeaturedPerfumes = (): Promise<Perfume[]> => {
  return Promise.resolve(perfumes.filter(perfume => perfume.featured));
};

// Get a specific perfume by ID
export const getPerfumeById = (id: string): Promise<Perfume | undefined> => {
  return Promise.resolve(perfumes.find(perfume => perfume.id === id));
};

// Get new arrivals
export const getNewArrivals = (): Promise<Perfume[]> => {
  return Promise.resolve(perfumes.filter(perfume => perfume.new));
};

// Get bestsellers
export const getBestsellers = (): Promise<Perfume[]> => {
  return Promise.resolve(perfumes.filter(perfume => perfume.bestseller));
};

// Add a review to a perfume
export const addReview = (
  perfumeId: string, 
  review: Omit<Review, "id" | "date">
): Promise<Review> => {
  const perfume = perfumes.find(p => p.id === perfumeId);
  if (!perfume) {
    return Promise.reject(new Error("Perfume not found"));
  }
  
  const newReview: Review = {
    ...review,
    id: `r${Date.now()}`,
    date: new Date().toISOString().split('T')[0]
  };
  
  perfume.reviews.push(newReview);
  
  // Recalculate average rating
  perfume.rating = perfume.reviews.reduce((sum, r) => sum + r.rating, 0) / perfume.reviews.length;
  
  return Promise.resolve(newReview);
};
