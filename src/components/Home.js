import React from 'react';
import Maincontent from './Maincontent';
import Iconlist from './Iconlist';
import Readerlist from './Readerlist';

const readers = [
    {
        id: 1,
        name: 'Carol Aladim',
        title: 'Se gostou do 1º livro, vai perder o chão neste 2º livro!!',
        opinion: "Eu a amei ler a A Ladra, mas quando comecei a ler A Rebelde eu fui totalmente absorvida por esse livro incrível, a história foi contada com riqueza de detalhes, sob visões diferentes, a trama gruda em você, você não quer parar de ler para saber o que acontece a seguir... Eu AMEEEI este livro e super recomendo pra você que adora um bom livro!! #JáQueroOProximo rsrs'",
        imageurl: '../images/reader01.png'
    },
    {
        id: 2,
        name: 'Paloma Cunha',
        title: 'Ufa!',
        opinion: "Que continuação!!! Já quero logo o terceiro! Muito bem escrito, uma trama envolvente que deixa a gente ansiando o que está para acontecer. Impressionante como duas vontades totalmente opostas encontraram um jeito de se aliarem por causa do amor que sentem 😍",
        imageurl: '../images/reader02.png'
    },
    {
        id: 3,
        name: 'Cliente Kindle',
        title: 'Simplesmente Maravilhoso!!!',
        opinion: "Li os dois livros dela em questão de 5 dias. Se tu gostou do primeiro com certeza esse vai te tirar o fôlego! Nesse livro me apaixonei, chorei, me indgnei tudo num tempo só. Foi muito lindo ver o quanto todos os personagens e até mesmo a escrita da autora amadureceram, é lindo ver isso, aguardo ansiosa o próximo livro! Obrigada por esse presente Mylena Aladim ♥️👏",
        imageurl: '../images/female.png'
    },

];
const socialmedia = [
    {
        id: 1,
        location: '../images/instagram_icon.png',
        href: 'https://www.instagram.com/mylena_aladim_autora/',
        alt: 'Instagram logo',
    },
    {
        id: 2,
        location: '../images/pinterest_icon.png',
        href: 'https://br.pinterest.com/mimica_cunha/_saved/',
        alt: 'Pinterest logo',
    },
    {
        id: 3,
        location: '../images/amazon_icon.png',
        href: 'https://www.amazon.com.br/kindle-dbs/entity/author/B08NLQM23L?ref_=dbs_p_ebk_r00_abau_000000',
        alt: 'Amazon logo',
    },
]

const Home = () => {
    return(
        <div className="ui center aligned container">
            <br/>
            <Maincontent />
            <br/>
            <Iconlist icons={socialmedia}/>
            <br/>
            <Readerlist readers ={readers}/>
            <br/>
        </div>
        
    );
}

export default Home;