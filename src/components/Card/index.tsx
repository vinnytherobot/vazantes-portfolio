'use client'

import { StaticImageData } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import Link from "next/link"

import styles from "../../styles/Card/index.module.css"

interface CardType {
    title: string;
    description: string;
    image?: string | StaticImageData;
    link?: string;
    path?: string;
    imageFont?: string;
    id?: string;
}

export default function Card({ title, description, image, link, path, imageFont, id }: CardType) {
    return (
        <>
            <div className={styles.card} id={id}>
                <div className={styles.info}>
                    <h2 className={styles.title}>{title}</h2>
                    <h4 className={styles.description}>{description}</h4>

                    {link && <Link href={path!} target="_blank">{link}</Link>}
                </div>

                {/* Responsive */}
                <div className={styles.responsiveInfo}>
                    <h2 className={styles.title}>{title}</h2>
                    <h4 className={styles.description}>{description}</h4>

                    {link && <Link href={path!} target="_blank">{link}</Link>}
                </div>
                {image && (
                    <div className={styles.imageContainer}>
                        <Image src={image} alt="vazantes-representation"/>
                        {imageFont && <Link href={imageFont} target="_blank" className={styles.imageFont}>Fonte: {imageFont}</Link>}
                    </div>
                )}
            </div>
        </>
    )
}