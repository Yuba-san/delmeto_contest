import styles from '../styles/404.module.css';
import { Header } from "../components/elements/Header.js";

export default function Custom404() {
    return (
    <div className={styles.base}>
        <Header/>
        <p className={styles.text}>404 - Page Not Found<br/>お探しのページは見つかりませんでした。</p>
    </div>
    )
  }