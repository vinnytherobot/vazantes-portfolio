import { StaticImageData } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import Link from "next/link";

import styles from "../../styles/Card/index.module.css"

interface CardType {
    title: string;
    description: string;
    image?: string | StaticImageData;
    link?: string;
    path?: string;
}

export default function Card({ title, description, image, link, path }: CardType) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.info}>
                    <h2 className={styles.title}>{title}</h2>
                    <h4 className={styles.description}>{description}</h4>

                    {link && <Link href={path!} target="_blank">{link}</Link>}
                </div>
                <div className={styles.responsiveInfo}>
                    <h2 className={styles.title}>{title}</h2>
                    <h4 className={styles.description}>{description}</h4>

                    {link && <Link href={path!} target="_blank">{link}</Link>}
                </div>
                {image && <Image src={image} alt="vazantes-representation"/>}
            </div>
        </>
    )
}