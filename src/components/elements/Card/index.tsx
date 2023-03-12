import Image from "next/image";

import IProducts from "~/types/types";
import styles from "./styles.module.css";

const Card = ({ title, image, description, price, category }: IProducts) => {
  return (
    <div className="w-96 relative h-[530px] m-6 cursor-pointer rounded-md">
      <div className={styles["image-container"]}>
        <div className="absolute top-4 right-2 text-red-600">Favorite </div>

        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          quality={100}
          className={styles.image}
          priority
        />
        <div className="py-4 flex justify-between">
          <h2 className="w-60">{title.substring(0, 28)}...</h2>

          <p>$ {price.toFixed(2)}</p>
        </div>

        <div>
          <p>{description.substring(0, 44)}...</p>
        </div>

        <div className="my-3">{category}</div>
      </div>
      <button className="absolute bottom-0 rounded-full border-2 border-indigo-500 text-indigo-800 dark:bg-green-700 dark:border-green-400  dark:text-white p-3 px-6 hover:border-white hover:bg-indigo-500 hover:text-white transition-all">
        Add to cart
      </button>
    </div>
  );
};

export default Card;
