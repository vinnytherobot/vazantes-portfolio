import Card from "@/components/Card/index"

import VazantesWorld from "../../public/img/vazantes-world.jpeg"
import VazantesDesenvolvida from "../../public/img/vazantes-desenvolvida.jpeg"
import VazantesLegado from "../../public/img/vazantes-legado.jpeg"

export default function Home(){

    const vazantesLocation = "https://www.google.com.br/maps/place/Vazantes,+Aracoiaba+-+CE,+62750-000/@-4.4091052,-38.6931644,15z/data=!4m15!1m8!3m7!1s0x7bf2b761e85a3c1:0x5921230d6332fae2!2sVazantes,+Aracoiaba+-+CE,+62750-000!3b1!8m2!3d-4.4061102!4d-38.6872849!16s%2Fg%2F1tp8_7sn!3m5!1s0x7bf2b761e85a3c1:0x5921230d6332fae2!8m2!3d-4.4061102!4d-38.6872849!16s%2Fg%2F1tp8_7sn?hl=pt-PT&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"

    return(
        <>
            <main>
                <Card 
                    title="Vazantes: Uma Jornada Histórica"

                    image={VazantesWorld}

                    description="➤ Descubra a história rica e inspiradora de Vazantes, um distrito do
                    município de Aracoiaba, no Ceará. Mergulhe em suas raízes, explore seu
                    desenvolvimento e conheça a história de uma comunidade unida."

                    link="Ver no Google Maps"
                    path={vazantesLocation}
                />
                <Card 
                    title="A Chegada dos Primeiros Habitantes"

                    description="➤ Há muitos anos, uma família cansada de viajar por longos dias, decidiu parar em uma região que lhes pareceu propícia ao plantio. Essa região, ainda desconhecida, se tornaria o berço de Vazantes.
                    A família, observando a terra fértil e a abundância de recursos naturais, decidiu se estabelecer nesse lugar, plantando as sementes do que viria a ser uma comunidade próspera.
                    Com o passar do tempo, outras famílias se juntaram à primeira, atraídas pela promessa de uma vida melhor e pela beleza natural da região. A comunidade começou a florescer, consolidando as bases do que seria Vazantes."
                />
                <Card 
                    title="A Fundação de Vazantes"

                    description="➤ A família Evangelista, a primeira a se estabelecer na região, desempenhou um papel fundamental na formação da comunidade. Seu legado se perpetua na história de Vazantes.
                    Unidos por um ideal comum, os moradores da comunidade, sob a liderança da família Evangelista, iniciaram a construção de uma capela, dedicada a São João Evangelista, em homenagem à primeira família que lá se fixou. A capela se tornou um símbolo da fé e da união da comunidade.
                    A construção da capela marca o início da história oficial de Vazantes. A comunidade, em constante crescimento, ganhava forma e identidade, com a capela como um marco central."
                />

                <Card 
                    title="O Desenvolvimento de Vazantes"

                    description="➤ Vazantes, em 1885, foi elevado à categoria de distrito, tornando-se parte do município de Aracoiaba, situado na microrregião do Maciço de Baturité, no Ceará. Sua história se entrelaça com a história de Aracoiaba, com suas raízes fincadas em um passado comum.
                    Em 1963, Vazantes, juntamente com Ocara e Curupira, compunham o município de Aracoiaba. Vazantes, em sua busca por autonomia, foi elevada à categoria de cidade pela Lei Estadual n° 6686. No entanto, devido ao regime militar da época, o processo foi interrompido.
                    Em 1965, Vazantes, em virtude do contexto político da época, foi reintegrada ao município de Aracoiaba, permanecendo como distrito até os dias atuais."

                    image={VazantesDesenvolvida}
                />

                <Card 
                    title="A Escola Capitão Antônio Joaquim: Um Marco Educacional"

                    description="➤ A Escola Capitão Antônio Joaquim, inaugurada em 1965, é um importante marco na história da educação de Vazantes. Seu nome, uma homenagem ao doador do terreno, Capitão Antônio Joaquim, pai do ilustre Dr. Francisco Maia de Oliveira, simboliza a dedicação e o compromisso com a educação da comunidade.
                    A escola, construída com recursos obtidos pelo Dr. Francisco Maia de Oliveira junto ao Ministério da Educação em Brasília, tornou-se um centro de conhecimento e desenvolvimento para a comunidade de Vazantes. Sua fundação representou um passo fundamental para o progresso educacional da região.
                    A escola, atualmente, é 'mantida' e 'monitorada' pela Secretaria de Educação de Aracoiaba, oferecendo educação de qualidade para os alunos do Ensino Fundamental I e II. Sob a liderança do diretor, Marcos Roberto de Oliveira Maia, a escola continua a desempenhar um papel crucial na formação das futuras gerações de Vazantes.
                    "
                />

                <Card 
                    title="A Evolução da Educação em Vazantes"

                    description="➤ Em 1965, além da construção da Escola Capitão Antônio Joaquim, outra escola de rede estadual foi inaugurada no distrito de Vazantes, marcando um período de grande avanço educacional.
                    O acesso à educação de qualidade proporcionou aos moradores de Vazantes a oportunidade de ascensão profissional. A base sólida adquirida nas primeiras séries do ensino fundamental abriu portas para o sucesso profissional, transformando a vida de muitos.
                    A educação, além de preparar os alunos para o mercado de trabalho, contribuiu para a formação de cidadãos conscientes, capazes de construir um futuro melhor para Vazantes. A escola se tornou um espaço de desenvolvimento integral, preparando os alunos para a vida."
                />

                <Card 
                    title="O Legado de Vazantes"

                    image={VazantesLegado}

                    description="➤ A história de Vazantes é rica em tradição e valores. A comunidade, unida por laços de amizade e respeito, construiu uma identidade singular, com orgulho de suas raízes.
                    A educação sempre teve um papel fundamental no desenvolvimento de Vazantes. A escola, um espaço de aprendizado e transformação, moldou gerações de moradores e contribuiu para o progresso da comunidade.
                    Vazantes é mais do que um distrito. É um lugar onde a comunidade se sente acolhida, integrada e unida por laços fortes de amizade e solidariedade. É um lugar que respira história, tradição e esperança."
                />
            </main>
        </>
    )
}