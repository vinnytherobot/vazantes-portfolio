import styles from "../../styles/Attractions/index.module.css"

import VazantesWorld from "../../../public/img/vazantes-world.jpeg"
import Igreja from "../../../public/img/vazantes-igreja.jpg"
import Pastoral from "../../../public/img/pastoral.jpeg"
import MoitaNel from "../../../public/img/moita-do-nel.jpeg"
import PFO from "../../../public/img/pfo.jpeg"

import Card from "@/components/Card/index"
import { StaticImageData } from "next/image"


export default function Attractions(){
    function convert(path: StaticImageData): string {
        return path.src;
    }
    

    return (
        <>
            <main>
                <Card 
                    title="Principais pontos turísticos"

                    description="A imagem apresenta uma visão panorâmica de 360° do distrito de Vazantes,
                     em Aracoiaba, Ceará, capturada com um efeito que transforma a paisagem em uma pequena
                      esfera. O céu azul com nuvens brancas dá uma sensação de serenidade e amplitude."

                        link="Ver imagem"
                        path={convert(VazantesWorld)}
                    
                    image={VazantesWorld}
                />

                <Card 
                    title="A Igreja São João Evangelista"

                    description=" O prédio desta igreja, com sua aparência bem cuidada e os elementos
                        religiosos destacados, demonstra o papel contínuo da fé na vida da comunidade.
                        Em conjunto com a Casa de Apoio Pastoral, este espaço religioso reforça o papel
                        central da igreja na vida de Vazantes, tanto na dimensão espiritual quanto no
                        apoio às necessidades práticas da população local. A beleza e o cuidado com essa
                        igreja são um reflexo do zelo dos fiéis e da importância que ela detém no tecido
                        social da cidade."

                        link="Ver imagem"
                        path={convert(Igreja)}

                    image={Igreja}
                />

                <Card 
                    title="A Casa Pastoral de Vazantes"

                    description="A Casa de Apoio Pastoral de Vazantes, localizada no Ceará,
                        Brasil, reflete um importante papel social e religioso na comunidade.
                        O nome 'Comunidade do Discípulo Amado de Jesus' sugere um foco em proporcionar
                        acolhimento e suporte espiritual, baseando-se no amor e na compaixão,
                        valores essenciais para a fé cristã. A presença de uma casa de apoio como
                        essa em uma região como Vazantes demonstra uma preocupação pastoral com os moradores,
                        oferecendo um local de encontro para a vivência da fé"

                        link="Ver imagem"
                        path={convert(Pastoral)}

                    image={Pastoral}
                />

                <Card 
                    title="A Moita do Nel"

                    description="Este é um ponto conhecido e simbólico na comunidade,
                        refletindo a relação próxima entre os moradores e a natureza ao seu redor.
                        A 'Moita do Nel' é mais do que uma simples árvore,
                        sendo parte da identidade local e um marco na paisagem de Vazantes.
                        Nela, havia um homem conhecido como 'nel', que se abrigava na moita
                        dias e noites até falecer. Ele foi homenageado tendo seu nome nomeando
                        um importante ponto turístico em Vazantes."

                        link="Ver imagem"
                        path={convert(MoitaNel)}

                    image={MoitaNel}
                />

                <Card 
                    title="EMTI Pedro Ferreira de Oliveira"

                    description="O céu claro e as nuvens, compõem uma vista inspiradora.
                        Esse ambiente reflete o compromisso com a educação em um local que busca
                        integrar modernidade com a natureza da região semiárida. Esta é a EMTI Pedro Ferreira de Oliveira,
                        a única escola de ensino fundamental em tempo integral na região."

                        link="Ver imagem"
                        path={convert(PFO)}

                    image={PFO}
                />
                
            </main>
        </>
    )
}