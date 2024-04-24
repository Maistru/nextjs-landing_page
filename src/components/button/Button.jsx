import styles from "./page.module.css";
import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className="bg-teal-700 rounded-full p-2 text-[#bbb] self-center md:self-start">
        {text}
      </button>
    </Link>
  );
};

export default Button;
