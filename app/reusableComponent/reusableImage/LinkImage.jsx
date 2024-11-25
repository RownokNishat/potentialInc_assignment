"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const LinkImage = ({ src, route }) => {
  const router = useRouter;

  return (
    <Image
      onClick={() => router.push(route)}
      className="cursor-pointer hover:border-[3px] hover:border-theme hover:rounded-full"
      src={src}
      alt="Banner Rectangle"
      width={35}
      height={35}
    />
  );
};

export default LinkImage;
