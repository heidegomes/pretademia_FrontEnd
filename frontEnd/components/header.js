import styles from './header.module.css';
const Header = () => {
  return (
    <div className={styles.container__header}>
      <a className={styles.link}>Sobre nós</a>
      <a className={styles.link}>Contato</a>
    </div>
  );
}

export default Header;