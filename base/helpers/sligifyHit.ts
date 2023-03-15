export const slugifyHit = (category: string): "men" | "women" | string => {
  return category.includes("men")
    ? "men"
    : category.includes("women")
    ? "women"
    : category;
};
