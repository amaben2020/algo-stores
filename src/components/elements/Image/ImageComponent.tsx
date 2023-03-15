import Image from "next/image";
import styles from "./styles.module.css";

const ImageComponent = ({
  image,
  title,
  width,
  height,
}: {
  image: string;
  title: string;
  width: number;
  height: number;
}) => {
  return (
    <Image
      src={image}
      alt={title}
      width={width}
      height={height}
      quality={100}
      className={styles.image}
      loading="lazy"
    />
  );
};

export default ImageComponent;
