import styles from './bento.module.css';
import About from './about';

export default function Bento() {
	return (
		<div className={styles.bentoGrid}>
			<div className={`${styles.about} ${styles.bentoItem}`}> 
				<About />
			</div>

			<div className={`${styles.projects} ${styles.bentoItem}`}> Projetos </div>

			<div className={`${styles.updates}`}> 
				<div className={`${styles.stories}`}> stories </div>
				<div className={`${styles.experiences} ${styles.bentoItem}`}> xp </div>
			</div>

			<div className={`${styles.menu} ${styles.bentoItem}`}> Menu </div>

			<div className={`${styles.contact} ${styles.bentoItem}`}> contato </div>

			<div className={`${styles.skills} ${styles.bentoItem}`}> skills </div>
		</div>
	)
};