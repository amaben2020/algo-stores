import Image from "next/image";

import { useEffect, useState } from "react";
import { Firebase } from "~/base/helpers/firebase";
import IProducts from "~/types/types";
import styles from "./styles.module.css";

const Card = ({
  id,
  title,
  image,
  description,
  price,
  category,
}: IProducts) => {
  const [favorites, setFavorites] = useState([]);
  const firebase = new Firebase();
  useEffect(() => {
    (async () => {
      try {
        const data = await firebase.getFavorites();

        setFavorites(data);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    })();
  }, []);

  const isFavorited =
    favorites.findIndex((elem: IProducts) => elem.id == id) > -1;

  const handleAddToFavorite = async () => {
    const data = {
      id,
      title,
      image,
      description,
      price,
      category,
    };
    try {
      const info = await firebase.addToFavorites(String(id), data);

      if (info === "Succesful operation") {
        alert(`
          Product:  ${title} with id: ${id} successfully added to favorites
        `);
        return info;
      }
    } catch (error) {
      if (error instanceof Error) {
        alert("Failed");
      }
    }
  };

  return (
    <div className="w-96 relative h-[530px] m-6 cursor-pointer rounded-md">
      <div className={styles["image-container"]}>
        {!isFavorited ? (
          <button
            className="absolute top-4 right-2 text-red-600 z-30"
            onClick={handleAddToFavorite}
          >
            Favorite{" "}
          </button>
        ) : (
          <button className="absolute top-4 right-2 text-red-600 z-30">
            Remove from favorites
          </button>
        )}

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

        <div className="my-2">{category}</div>
      </div>
      <button className="absolute -bottom-3 rounded-full border-2 border-indigo-500 text-indigo-800 dark:bg-green-700 dark:border-green-400  dark:text-white p-3 px-6 hover:border-white hover:bg-indigo-500 hover:text-white transition-all  ">
        Add to cart
      </button>
    </div>
  );
};

export default Card;
