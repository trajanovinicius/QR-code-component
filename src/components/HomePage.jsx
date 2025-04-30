import styles from "./HomePage.module.css";
import QrCodeImage from "../assets/QrImage.svg";

export function HomePage() {
	return (
		<div className={styles.page}>
			<div className={styles.cardQr}>
				<img className={styles.imageQRcode} src={QrCodeImage} />

				<div className={styles.content}>
					<p className={styles.title}>
						&nbsp; Improve your front-end <br />
						skills by building projects
					</p>
					<p className={styles.text}>
						&nbsp; Scan the QR code to visit Frontend <br />
						Mentor and take your coding skills to <br />
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp;the next level
					</p>
				</div>
			</div>
		</div>
	);
}
