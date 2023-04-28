import IconSocGroup from "../Icon/IconSocGroup";
import styles from "./professionTeam.module.css";
const ProfessionTeam = () => {
  return (
    <>
      <section className={styles.profession_team} id="blog">
        <div className={styles.titles}>
          <span className={styles.titles__sub}>Who we are</span>
          <h2 className={styles.titles__title}>Our Professional Team</h2>
          <p className={styles.titles__text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </p>
        </div>
        <div className={styles.image_wrapper}>
          <ul className={styles.profession_team__list}>
            <li className={styles.profession_team__item}>
              <div className={styles.social__con}>
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/images/team/person1.webp 1x,
               /images/team/person1@2x.webp 2x"
                  />
                  <source
                    srcSet="/images/team/person1.jpg 1x,
              /images/team/person1@2x.jpg 2x"
                  />
                  <img
                    src="/images/team/person1.jpg"
                    alt="keyboard"
                    className={styles.profession_team__image}
                  />
                </picture>
                <div className={styles.overlay}>
                  <div>
                    <IconSocGroup></IconSocGroup>
                  </div>
                </div>
              </div>
              <div>
                <h4 className={styles.profession_team__name}>Jane Doe</h4>
                <p className={styles.profession_team__pos}>President</p>
              </div>
            </li>
            <li className={styles.profession_team__item}>
              <div className={styles.social__con}>
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/images/team/person2.webp 1x,
               /images/team/person2@2x.webp 2x"
                  />
                  <source
                    srcSet="/images/team/person2.jpg 1x,
              /images/team/person2@2x.jpg 2x"
                  />
                  <img
                    src="/images/team/person2.jpg"
                    alt="keyboard"
                    className={styles.profession_team__image}
                  />
                </picture>
                <div className={styles.overlay}>
                  <div>
                    <IconSocGroup></IconSocGroup>
                  </div>
                </div>
              </div>
              <div>
                <h4 className={styles.profession_team__name}>Jane Doe</h4>
                <p className={styles.profession_team__pos}>Vice President</p>
              </div>
            </li>
            <li className={styles.profession_team__item}>
              <div className={styles.social__con}>
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/images/team/person3.webp 1x,
               /images/team/person3@2x.webp 2x"
                  />
                  <source
                    srcSet="/images/team/person3.jpg 1x,
              /images/team/person3@2x.jpg 2x"
                  />
                  <img
                    src="/images/team/person3.jpg"
                    alt="keyboard"
                    className={styles.profession_team__image}
                  />
                </picture>
                <div className={styles.overlay}>
                  <div>
                    <IconSocGroup></IconSocGroup>
                  </div>
                </div>
              </div>
              <div>
                <h4 className={styles.profession_team__name}>Steve Smith</h4>
                <p className={styles.profession_team__pos}>Marketing Head</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ProfessionTeam;
