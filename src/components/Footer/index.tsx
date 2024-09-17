import styles from "../../styles/Footer/index.module.css"

import Link from "next/link"

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.box}>
                <div className={styles.creatorInfo}>
                    <h1>By JVN</h1>
                    <span>Vinny is a web developer and one of his creations is this website.</span>
                    <span>This website summarizes the incredible history of the Vazantes district, located in Aracoiaba, Ceará, Brazil.</span>
                </div>
                <nav className={styles.links}>
                    <div>
                        <h1>Links</h1>
                        <Link href="#vazantes">Vazantes</Link>
                        <Link href="#arrival">A chegada</Link>
                        <Link href="#foundation">A Fundação</Link>
                        <Link href="#development">Desenvolvimento</Link>
                    </div>

                    <div>
                        <h1>Links</h1>
                        <Link href="#school">Escolas</Link>
                        <Link href="#evolution">Evolução</Link>
                        <Link href="#legacy">Legado</Link>
                        <Link href="/attractions">Pontos Turísticos</Link>
                    </div>
                </nav>
            </div>
            <hr />
            <span>&copy; All rights reserved by vinnytherobot</span>
        </footer>
    )
}