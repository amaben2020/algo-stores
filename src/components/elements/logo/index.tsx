import { LightningBoltIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" legacyBehavior>
      <a className="my-2 flex items-center space-x-1 text-indigo-500">
        <LightningBoltIcon className="h-8 w-8 flex-shrink-0 mr-3" />

        <span className="font-bold text-3xl font-sans tracking-tight whitespace-nowrap dark:text-gray-100">
          Algo Stores
        </span>
      </a>
    </Link>
  );
};

export default Logo;
