import Image from "next/image";
import styles from "./post.module.css";
import OutlineBtn from "../Buttons/OutlineBtn";

const Post = () => {
  return (
    <>
      <section className={styles.solution_wrapper}>
        <div className={styles.image_container}>
          <Image
            className={styles.image}
            src={"/images/home/blog.jpg"}
            alt={"blog"}
            fill
          ></Image>
        </div>
        <article className={styles.article}>
          <span className={styles.article__subtitle}>
            What you are looking for
          </span>
          <h3 className={styles.article__title}>
            We provide bespoke solutions
          </h3>
          <p className={styles.article__paragraph}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <OutlineBtn text="Read More" variant="outline__blue"></OutlineBtn>
        </article>
      </section>
    </>
  );
};

export default Post;
