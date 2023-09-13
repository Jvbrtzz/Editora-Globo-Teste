import { useEffect, useState } from "react"
import styles from "./Sobre.module.css"
import axios from "axios"

function Sobre(){

    return(
        <>
            <div className={styles.sobre_container}>          
                <h1 className="">Sobre Nós</h1>
                <p className={styles.conteudo}>A Infoglobo, através de seus produtos - os jornais O Globo, Extra, Valor Econômico e Expresso, com os sites Globo, Extra, Valor Econômico, Valor Investe e a Agência O Globo - tem o dever de apurar o fato, oferecendo aos seus leitores a informação mais completa, sempre com a preocupação de adequar a linguagem ao público a que se destina.<br/><br/>Além de esclarecer o que acontece de mais importante no Brasil e no mundo, os produtos da Infoglobo também são uma ferramenta de acesso ao melhor do entretenimento e da cultura. A Infoglobo tem muito orgulho desse papel e trabalha com o compromisso de levar jornalismo sério e isento à população.</p>
                <p className={styles.conteudo}>Desde   1952,   a   Editora   Globo   dissemina   conhecimento   entre   os   leitores   e   produz   um jornalismo   independente   que   antecipa   as   transformações   da   sociedade.   Moderna, dinâmica   e   inovadora,   a   empresa   conecta   consumidores   a   conteúdos   que   transformam suas   vidas   e   oferecem   a   eles   a   liberdade   de   escolherem   em   qual   plataforma   preferem ler.<br/><br/>   Com   mais   de   16   revistas   no   portfólio   -   incluindo   as   marcas   Vogue,   Casa   Vogue,   GQ e   Glamour,   após   joint-venture   estabelecida   com   a   Condé   Nast   -   a   Editora   Globo   e Edições   Globo   Condé   Nast   têm   3,4   milhões   de   cópias   por   mês,   9,2   milhões   de   leitores, 18   websites,   11,4   milhões   de   visitantes   únicos   por   mês,   40   eventos   anuais,   25 aplicativos   para   iPhone,   iPad   e   Android   e   mais   de   1   milhão   de   downloads. <br/><br/>  Ainda, contamos   com   a   marca   Globo   Livros,   que   tem   mais   de   mil   títulos   no   catálogo   de   livros, de   autores   nacionais   e   internacionais,   publicados   em   menos   de   dois   anos.   No   digital,   a marca   conta   com   200   títulos   e   parcerias   com   os   principais   players   do   mercado,   como Apple,   Kobo   Cultura,   Google,   Saraiva   and   Amazon.</p>

            </div>
        </>
    )
}

export default Sobre    