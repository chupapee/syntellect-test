import styles from './styles.module.css';

interface IMenuItem {
	mainVal: string;
	addtVal: string;
	img: string;
	onClick: (value: string) => void;
}

export const MenuItem = ({ mainVal, addtVal, img, onClick }: IMenuItem) => {
	return (
		<div className={styles.wrapper}>
			<button onClick={() => onClick(mainVal)}>
				<div className={styles.values}>
					<p>{mainVal}</p>
					<p>{addtVal}</p>
				</div>
				<img className={styles.icon} src={img} alt={addtVal} />
			</button>
		</div>
	);
};
