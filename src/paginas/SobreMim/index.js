import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

export default function SobreMim() {
    return (
        <PostModelo FotoCapa={fotoCapa} titulo="Sobre mim">
            <h3 className={styles.subtitulo}>Olá, eu sou o Matheus!</h3>
            <img
                src={fotoSobreMim}
                alt="Foto de Matheus Biesdorf"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Olá, tudo bem? Eu sou estudante de graduação em Ciência da
                Computação na Universidade Federal de Mato Grosso do Sul (UFMS).
            </p>
            <p className={styles.paragrafo}>
                Meu primeiro emprego foi como empacotador em uma rede de
                supermercados. Foi durante o ensino médio e apesar de ser um
                trabalho simples, me ajudou a evoluir em muitos aspectos como
                atendimento ao público, organização e pontualidade.
            </p>
            <p className={styles.paragrafo}>
                Estudei graduação em Matemática Industrial na Universidade
                Federal do Ceará (UFC). Nesse curso estudei matemática,
                probabilidade e estatística, matemática discreta, programação,
                informática, inglês técnico e algumas outras disciplinas de
                exatas.
            </p>
            <p className={styles.paragrafo}>
                Atualmente estou atuando na área de Desenvolvimento Web e
                Desenvolvimento Mobile. Possuo alguns conhecimentos como HTML,
                CSS, Bootstrap, JavaScript, React, Node.js, Banco de Dados
                MySQL, PHP, Programação Orientada a Objetos, UI/UX Design e
                Kotlin.
            </p>
            <p className={styles.paragrafo}>
                Sempre fui apaixonado por Hardware, o que me trouxe muito
                conhecimento e a capacidade de mexer com manutenção e montagem
                de computadores. Além disso, possuo bom conhecimento em
                informática e outros aparelhos eletrônicos.
            </p>
            <p className={styles.paragrafo}>
                No futuro, pretendo me especializar na parte de Desenvolvimento web Front-end e Desenvolvimento Mobile, é por isso que o aprendizado deve ser constante e gradual.
            </p>
        </PostModelo>
    );
}
