import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Booklist from './components/Booklist';
import Sobremim from './components/Sobremim';
import Bookpage from './components/Bookpage';
import Firstchapter from './components/Firstchapter';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Extra from './components/Extra';

const logo = {
    url: './images/mylena.png',
    alt: 'Logo do site'
}

const allbooks = [

    {
        id: 1,
        title: 'A Ladra de Dois Mundos',
        subtitle: 'Todo crime tem um preço e ela está prestes a pagar pelo seu',
        author: 'Mylena Aladim',
        imageurl: '../images/ladra_de_dois_mundos.jpg',
        alt: 'Livro: A Ladra de Dois Mundos',
        nameurl: '/a_ladra_de_dois_mundos',
        pdfurl: '../pdf/A Ladra de Dois Mundos.pdf',
        extra: 'A Ladra de Dois Mundos é o primeiro livro de uma trilogia de fantasia New Adult',
        description: "Isabelle seria apenas mais uma ladra da favela, não fosse o fato de seus roubos não passarem de meros desafios. Um roubo em um dia qualquer poderia ser apenas isso, não fosse o fato de não ser apenas um objeto, mas o Orientador. Transportada para uma realidade paralela, agora a jovem ladra precisa lidar com o fato de ter roubado uma bússola do outro mundo e todos os perigos que a cercam, como ter a cabeça premiada ou ser treinada por um Guerreiro sanguinário. O que será que corre mais perigo, sua vida ou seu coração?",
        summary: 'Isabelle seria apenas mais uma ladra da favela, não fosse o fato de seus roubos não passarem de meros desafios. Um roubo em um dia qualquer poderia ser apenas isso, não fosse o fato de não ser apenas um objeto, mas o Orientador. Transportada para uma realidade paralela, agora a jovem ladra precisa lidar com o fato de ter roubado uma bússola do outro mundo e todos os perigos que a cercam, como ter a cabeça premiada ou ser treinada por um Guerreiro sanguinário. O que será que corre mais perigo, sua vida ou seu coração?',
        wattpadurl: '',
        amazonurl: 'https://www.amazon.com.br/Ladra-Dois-Mundos-crime-prestes-ebook/dp/B07Z235ZND',
        summaryurl: '',
        skooburl: '',
    },
    {
        id: 2,
        title: 'A Rebelde de Dois Mundos',
        subtitle: 'Uma ladra convencida teve seu destino roubado',
        author: 'Mylena Aladim',
        imageurl: '../images/rebelde_de_dois_mundos.jpg',
        alt: 'Livro: A Rebelde de Dois Mundos',
        nameurl: '/a_rebelde_de_dois_mundos',
        pdfurl: '../pdf/A Rebelde de Dois Mundos.pdf',
        extra: 'A Rebelde de Dois Mundos é o segundo livro da trilogia de A Ladra de Dois Mundos',
        description: "Em um mundo governado por um Rei cruel, Isabelle teve que lutar em Salavinder ao lado de rebeldes para salvar a cidade do cerco. Porém, depois daquela fatídica noite, ela também perdeu o controle das suas emoções e entregou o seu coração para um certo Guerreiro. Convicta de que nunca mais iria ver o Áquila, Isa estava em paz com o rumo dos acontecimentos. No entanto, algo aconteceu. Isabelle ficou forte como os Guerreiros de Fayrehal, mas isso não será o suficiente, porque o Rei é ainda mais esperto do que o imaginado. Além disso, a Ladra também irá descobrir que entregou seu bem mais precioso nas mãos do inimigo. Áquila não é quem diz ser e Isabelle não é quem pensou que fosse. Nessa luta de opostos, quem irá vencer: A honra ou o amor?",
        summary: 'Em um mundo governado por um Rei cruel, Isabelle teve que lutar em Salavinder ao lado de rebeldes para salvar a cidade do cerco. Porém, depois daquela fatídica noite, ela também perdeu o controle das suas emoções e entregou o seu coração para um certo Guerreiro. Convicta de que nunca mais iria ver o Áquila, Isa estava em paz com o rumo dos acontecimentos. No entanto, algo aconteceu.\nIsabelle ficou forte como os Guerreiros de Fayrehal, mas isso não será o suficiente, porque o Rei é ainda mais esperto do que o imaginado. Além disso, a Ladra também irá descobrir que entregou seu bem mais precioso nas mãos do inimigo. Áquila não é quem diz ser e Isabelle não é quem pensou que fosse. Nessa luta de opostos, quem irá vencer: A honra ou o amor?',
        wattpadurl: '',
        amazonurl: 'https://www.amazon.com.br/Rebelde-Dois-Mundos-convencida-destino-ebook/dp/B08P94FNF3',
        summaryurl: '',
        skooburl: '',
    },
    {
        id: 3,
        title: 'As Leis do Acaso',
        subtitle: 'Um Conto de Amor',
        author: 'Mylena Aladim',        
        imageurl: '../images/as_leis_do_acaso.jpg',
        alt: 'Livro: As Leis do Acaso',
        nameurl: '/as_leis_do_acaso',
        pdfurl: '../pdf/As Leis do Acaso.pdf',
        extra: 'As Leis do Acaso é um conto de amor com um clichê invertido',
        description: "Nada é tão ruim que não possa ser piorado. Foi o que Nara descobriu após receber a notícia que alterou o curso do seu destino. Ela precisava aprender, e rápido, a como dar aulas de física para alunos do último ano do ensino médio. Francis logo de cara deixa claro que será a pedra em seu caminho. Agora basta Nara descobrir o que é mais importante para ela: a vida profissional ou o campo magnético do Francis que a envolve a cada vez que o acaso os une.",
        summary: 'Nada é tão ruim que não possa ser piorado. Foi o que Nara descobriu após receber a notícia que alterou o curso do seu destino. Ela precisava aprender, e rápido, a como dar aulas de física para alunos do último ano do ensino médio. Francis logo de cara deixa claro que será a pedra em seu caminho. Agora basta Nara descobrir o que é mais importante para ela: a vida profissional ou o campo magnético do Francis que a envolve a cada vez que o acaso os une.',
        wattpadurl: '',
        amazonurl: 'https://www.amazon.com.br/As-Leis-Acaso-Conto-Amor-ebook/dp/B087ZSCNBG',
        summaryurl: '',
        skooburl: '',
    },
    {
        id: 4,
        title: 'Violeta é a Cor do Verão',
        subtitle: 'Os anos passam e o confronto com o passado é inevitável',
        author: 'Mylena Aladim',        
        imageurl: '../images/violeta_e_a_cor_do_verao.png',
        alt: 'Livro: Violeta é a Cor do Verão',
        nameurl: '/violeta_e_a_cor_do_verao',
        pdfurl: '',
        extra: '',
        description: `Tuka nunca foi conhecida por ser delicada, muito pelo contrário. Onde ela entra não há margem para dúvidas quanto a sua presença. Dante logo percebeu. Aquele garoto amante de música e carros - mas não qualquer música: rock; e não qualquer instrumento músical: bateria - não teve chance alguma quando a garota da pulseira violeta apareceu na oficina mecânica. Depois desse verão tudo mudou para os dois, e não foi para melhor. 
                Os anos passam e o confronto com o passado é inevitável, mas os tempos são outros e as cicatrizes existem.
                Para ela, ele é a personificação da frase "Deus me livre, mas quem me dera".
                Para ele, ela é a personificação da música "Complicada e perfeitinha".`,
        summary: `Tuka nunca foi conhecida por ser delicada, muito pelo contrário. Onde ela entra não há margem para dúvidas quanto a sua presença. Dante logo percebeu. Aquele garoto amante de música e carros - mas não qualquer música: rock; e não qualquer instrumento músical: bateria - não teve chance alguma quando a garota da pulseira violeta apareceu na oficina mecânica. Depois desse verão tudo mudou para os dois, e não foi para melhor. 
                    Os anos passam e o confronto com o passado é inevitável, mas os tempos são outros e as cicatrizes existem.
                    Para ela, ele é a personificação da frase "Deus me livre, mas quem me dera".
                    Para ele, ela é a personificação da música "Complicada e perfeitinha".`,
        wattpadurl: 'https://www.wattpad.com/story/235945511-violeta-%C3%A9-a-cor-do-ver%C3%A3o',
        amazonurl: '',
        summaryurl: '',
        skooburl: '',
    },
];

 const App = () => {

    const pdfroute = (book) => {
        if(book.pdfurl !== ''){
            return (
                <Route         
                    path={`${book.nameurl}-primeiro_capitulo`}
                    exact 
                    component={() => <Firstchapter pdfurl={book.pdfurl}/>}
                />
            )
        }  
    }


    const bookpages = allbooks.map((book) => {
        return(
            <div key={book.id}>
                <Route
                    path={book.nameurl} 
                    exact 
                    component={() => <Bookpage book={book}/>}
                />
                {pdfroute(book)}
            </div>  
        );
    });
    return (
        <Router>
            <img className="ui centered medium image" src={logo.url} alt={logo.alt}></img>
            <Header />
                <div style={{backgroundColor: '#ededed'}}>
                    <br/>
                    <Route path="/" exact component={Home}/>
                    <Route 
                        path="/meuslivros" 
                        exact
                        component={() => <Booklist allbooks={allbooks}/>}
                    />
                    <Route 
                        path="/sobremim" 
                        exact 
                        component={() => <Sobremim allbooks={allbooks}/>}
                    />
                    <Route path="/extras" exact component={Extra}/>
                    {bookpages}
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
            <Footer/>
        </Router>
    );
};

export default App;