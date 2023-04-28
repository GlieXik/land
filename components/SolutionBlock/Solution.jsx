import Image from "next/image";
import styles from "./solution.module.css";
import OutlineBtn from "../Buttons/OutlineBtn";

const Solution = () => {
  return (
    <>
      <section className={styles.solution_wrapper} id="about">
        <div className={styles.image_container}>
          <picture>
            <source
              type="image/webp"
              srcSet="/images/home/people.webp 1x,
               /images/home/people@2x.webp 2x"
            />
            <source
              srcSet="/images/home/people.jpg 1x,
              /images/home/people@2x.jpg 2x"
            />
            <img
              src="/images/home/people.jpg"
              alt="keyboard"
              className={styles.image}
            />
          </picture>
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
          <OutlineBtn text="Read More" variant="outline__green"></OutlineBtn>
        </article>
      </section>
    </>
  );
};

export default Solution;
