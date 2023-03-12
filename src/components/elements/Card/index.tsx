import Image from "next/image";
import styles from "./styles.module.css";
const Card = ({ title, image }: any) => {
  return (
    <div className="rounded-md border w-96 relative h-96 m-6">
      <div className={styles["image-container"]}>
        <div className="absolute top-4 right-2 text-red-600">Love</div>
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          quality={100}
          className={styles.image}
          priority
        />
        <div className="p-2">
          <h2>{title}</h2>

          <p>$ Price</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
