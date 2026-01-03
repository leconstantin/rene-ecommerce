import clsx from "clsx";
import Image from "next/image";
import logo from "@/public/icon.png";

export default function LogoSquare({ size }: { size?: "sm" | undefined }) {
  return (
    <div
      className={clsx(
        "flex flex-none items-center justify-center bg-white dark:border-neutral-700 dark:bg-black",
        {
          "h-10 w-10 rounded-xl": !size,
          "h-[30px] w-[30px] rounded-lg": size === "sm",
        }
      )}
    >
      <Image alt="Logo" src={logo} />
    </div>
  );
}
