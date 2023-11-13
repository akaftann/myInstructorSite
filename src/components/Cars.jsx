import { cars, cars2 } from "../constants";
import styles from "../style";
import CarsCard from "./CarsCard";

const Cars = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Гнучкий вибір {" "}
            <span className="text-gradient">географії</span>{" "}занять та авто
      </h2>
      
    </div>  

    <div className="flex flex-wrap sm:justify-start justify-between">
      {cars.map((card) => <CarsCard key={card.id} {...card} />)}
    </div>

    <div className="flex flex-wrap sm:justify-start justify-between">
      {cars2.map((card) => <CarsCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Cars;