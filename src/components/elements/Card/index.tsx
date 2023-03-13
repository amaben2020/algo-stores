import Image from "next/image";

import { DocumentData } from "firebase/firestore";
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
  const [favorites, setFavorites] = useState<DocumentData>([]);
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
  }, [favorites]);

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
        // change this to use toast
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

  const handleRemoveFromFavorites = async (id: string) => {
    try {
      await firebase.deleteFromFavorites(id);
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
            className="absolute top-4 right-2 text-gray-600 z-30"
            onClick={handleAddToFavorite}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="gray"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 hover:text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        ) : (
          <button
            className="absolute top-4 right-2 text-red-600 z-30 hover:animate-bounce"
            onClick={() => handleRemoveFromFavorites(String(id))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="red"
              className="w-8 h-8"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </button>
        )}

        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          quality={100}
          className={styles.image}
          loading="lazy"
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
