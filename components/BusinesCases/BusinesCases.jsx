import styles from "./businesCases.module.css";
import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

const images = [
  "/images/cases/cases1@2x.webp",
  "/images/cases/cases2@2x.webp",
  "/images/cases/cases3@2x.webp",
  "/images/cases/cases4@2x.webp",
  "/images/cases/cases5@2x.webp",
  "/images/cases/cases6@2x.webp",
];

const BusinesCases = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const openImageViewer = useCallback((index) => {
    console.log("ds");
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <>
      <section className={styles.busines_cases}>
        <div className={styles.titles}>
          <span className={styles.titles__sub}>This is what we do</span>
          <h2 className={styles.titles__title}>Business Cases</h2>
          <p className={styles.titles__text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </p>
        </div>
        <ul className={styles.images}>
          <li className={styles.image1}>
            <picture>
              <source
                type="image/webp"
                srcSet="/images/cases/cases1.webp 1x,
               /images/cases/cases1@2x.webp 2x"
              />
              <source
                srcSet="/images/cases/cases1.jpg 1x,
              /images/cases/cases1@2x.jpg 2x"
              />
              <img
                src="/images/cases/cases1.jpg"
                alt="keyboard"
                className={styles.cases__image}
                onClick={() => openImageViewer(0)}
              />
            </picture>
          </li>
          <li className={styles.image2}>
            <picture>
              <source
                type="image/webp"
                srcSet="/images/cases/cases2.webp 1x,
               /images/cases/cases2@2x.webp 2x"
              />
              <source
                srcSet="/images/cases/cases2.jpg 1x,
              /images/cases/cases2@2x.jpg 2x"
              />
              <img
                src="/images/cases/cases2.jpg"
                alt="keyboard"
                className={styles.cases__image}
                onClick={() => openImageViewer(1)}
              />
            </picture>
          </li>
          <li className={styles.image3}>
            <picture>
              <source
                type="image/webp"
                srcSet="/images/cases/cases3.webp 1x,
               /images/cases/cases3@2x.webp 2x"
              />
              <source
                srcSet="/images/cases/cases3.jpg 1x,
              /images/cases/cases3@2x.jpg 2x"
              />
              <img
                src="/images/cases/cases3.jpg"
                alt="keyboard"
                className={styles.cases__image}
                onClick={() => openImageViewer(2)}
              />
            </picture>
          </li>
          <li className={styles.image4}>
            <picture>
              <source
                type="image/webp"
                srcSet="/images/cases/cases4.webp 1x,
               /images/cases/cases4@2x.webp 2x"
              />
              <source
                srcSet="/images/cases/cases4.jpg 1x,
              /images/cases/cases4@2x.jpg 2x"
              />
              <img
                src="/images/cases/cases4.jpg"
                alt="keyboard"
                className={styles.cases__image}
                onClick={() => openImageViewer(3)}
              />
            </picture>
          </li>
          <li className={styles.image5}>
            <picture>
              <source
                type="image/webp"
                srcSet="/images/cases/cases5.webp 1x,
               /images/cases/cases5@2x.webp 2x"
              />
              <source
                srcSet="/images/cases/cases5.jpg 1x,
              /images/cases/cases5@2x.jpg 2x"
              />
              <img
                src="/images/cases/cases5.jpg"
                alt="keyboard"
                className={styles.cases__image}
                onClick={() => openImageViewer(4)}
              />
            </picture>
          </li>
          <li className={styles.image6}>
            <picture>
              <source
                type="image/webp"
                srcSet="/images/cases/cases6.webp 1x,
               /images/cases/cases6@2x.webp 2x"
              />
              <source
                srcSet="/images/cases/cases6.jpg 1x,
              /images/cases/cases6@2x.jpg 2x"
              />
              <img
                src="/images/cases/cases6.jpg"
                alt="keyboard"
                className={styles.cases__image}
                onClick={() => openImageViewer(5)}
              />
            </picture>
          </li>
        </ul>
        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={true}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
            backgroundStyle={{ zIndex: 9999 }}
          />
        )}
      </section>
    </>
  );
};

export default BusinesCases;
