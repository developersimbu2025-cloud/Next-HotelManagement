export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: any;
  category: string;
  rating: number;
  preparationTime: string;
  ingredients: string[];
  isVegetarian: boolean;
  isSpicy: boolean;
};

export type CartItem = MenuItem & {
  quantity: number;
  specialInstructions?: string;
};

export type Order = {
  id: string;
  items: CartItem[];
  total: number;
  status: "pending" | "preparing" | "ready" | "delivered";
  createdAt: Date;
  customerInfo: {
    name: string;
    phone: string;
    address: string;
  };
};

export type Category = {
  id: string;
  name: string;
  image: any;
  description: string;
};
