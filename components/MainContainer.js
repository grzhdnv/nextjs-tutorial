import A from "./A";
import Head from "next/head";
import styles from "../styles/MainContainer.module.css";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"mgrzhdnv, nextjs" + keywords}></meta>
        <title>Main Page</title>
      </Head>
      <div className={styles.navbar}>
        <A href={"/"} text="Main"></A>
        <A href={"/users"} text="Users"></A>
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
