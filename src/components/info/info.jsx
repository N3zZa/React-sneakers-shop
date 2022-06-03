import React,{useContext} from 'react'
import AppContext from '../../context';
import styles from "../info/info.module.scss"

export const Info = ({title, description, image}) => {

  const { setCartOpened, setCartItems } = useContext(AppContext);

  return (
    <div className={styles.cartempty}>
      <img width={120} src={image} alt="emptycart" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => setCartOpened(false)} className={styles.greenButton}>
        <img src="/img/arrow.svg" alt="arrow" />
        Вернуться назад
      </button>
    </div>
  );
}

export default Info;
