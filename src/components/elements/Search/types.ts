export interface IHits {
  hit: {
    category: string;
    image: string;
    title: string;
    price: string;
    rating: Record<string, number>;
  };
}
