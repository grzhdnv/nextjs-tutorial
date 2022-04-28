import Link from "next/dist/client/link";
import styles from "../styles/A.module.css";

export default function A({ text, href }) {
  return (
    <div>
      <Link href={href}>
        <a className={styles.link}>{text}</a>
      </Link>
    </div>
  );
}
