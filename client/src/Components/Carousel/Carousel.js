
import styles from "./carousel.module.css";


function Carousel({images}) 
{
  return (
    
      <div className={styles.carousel}>
          <div className={styles.carousel_wrapper}>
            {images.map((image, index) => {
              return(
                <div key={index} className={styles.carousel_card}>

                    <img className={styles.card_image} src={image.image} alt="" />
                    <div className={styles.card_overlay}>
                        <h2 className={styles.card_title}>{image.title}</h2>
                    </div>
                </div>
              );
            })}
          </div>
      </div>
   
  );
};

export default Carousel;