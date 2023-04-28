import Image from "next/image";
import SimpleButton from "../Buttons/SimpleButton";
import styles from "./form.module.css";
import { useForm } from "react-hook-form";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <section className={styles.solution_wrapper} id="contact">
        <div className={styles.image_container}>
          <picture>
            <source
              type="image/webp"
              srcSet="/images/home/contact.webp 1x,
               /images/home/contact@2x.webp 2x"
            />
            <source
              srcSet="/images/home/contact.jpg 1x,
              /images/home/contact@2x.jpg 2x"
            />
            <img
              src="/images/home/contact.jpg"
              alt="keyboard"
              className={styles.image}
            />
          </picture>
        </div>
        <article className={styles.article}>
          <h3 className={styles.article__title}>Request Callback</h3>
          <form
            className={styles.form}
            onSubmit={handleSubmit((data) => console.log(data))}
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className={styles.inputs}>
              <input
                {...register("name")}
                placeholder="Enter your name"
                className={styles.input}
                name="name"
              />
              <input
                {...register("email", { required: true })}
                placeholder="Enter email*"
                type="email"
                className={styles.input}
                name="name"
              />
              {errors.email && (
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "red",
                  }}
                >
                  <Image
                    src="/images/form/worning.svg"
                    alt="worning"
                    width={"30"}
                    height={"30"}
                  ></Image>
                  This is a required field
                </p>
              )}
            </div>
            <SimpleButton text={"Send"} type="submit" />
          </form>
        </article>
      </section>
    </>
  );
};

export default Form;
