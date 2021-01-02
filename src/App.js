import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Booklist from './components/Booklist';
import Sobremim from './components/Sobremim';
import Bookpage from './components/Bookpage';

const logo = {
    url: './images/mylena.png',
    alt: 'Logo do site'
}

const mainbg = '../images/mainbg.png';
const mainbgstyle = { 
    backgroundImage: `url(${mainbg})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center center',
    backgroundRepeat: 'repeat',
}

const allbooks = [

    {
        id: 1,
        title: 'A Ladra de Dois Mundos',
        subtitle: 'Todo crime tem um preço e ela está prestes a pagar pelo seu',
        autora: 'Mylena Aladim',
        description: "Isabelle seria apenas mais uma ladra da favela, não fosse o fato de seus roubos não passarem de meros desafios. Um roubo em um dia qualquer poderia ser apenas isso, não fosse o fato de não ser apenas um objeto, mas o Orientador. Transportada para uma realidade paralela, agora a jovem ladra precisa lidar com o fato de ter roubado uma bússola do outro mundo e todos os perigos que a cercam, como ter a cabeça premiada ou ser treinada por um Guerreiro sanguinário. O que será que corre mais perigo, sua vida ou seu coração?",
        imageurl: '../images/ladra_de_dois_mundos.jpg',
        alt: 'Livro: A Ladra de Dois Mundos',
        extra: 'A Ladra de Dois Mundos é o primeiro livro de uma trilogia de fantasia New Adult',
        summary: 'Todo crime tem um preço e ela está prestes a pagar pelo seu.\n\n Isabelle seria apenas mais uma ladra da favela, não fosse o fato de seus roubos não passarem de meros desafios. Um roubo em um dia qualquer poderia ser apenas isso, não fosse o fato de não ser apenas um objeto, mas o Orientador. Transportada para uma realidade paralela, agora a jovem ladra precisa lidar com o fato de ter roubado uma bússola do outro mundo e todos os perigos que a cercam, como ter a cabeça premiada ou ser treinada por um Guerreiro sanguinário. O que será que corre mais perigo, sua vida ou seu coração?',
    },
    {
        id: 2,
        title: 'A Rebelde de Dois Mundos',
        subtitle: 'Uma ladra convencida teve seu destino roubado',
        autora: 'Mylena Aladim',
        description: "Em um mundo governado por um Rei cruel, Isabelle teve que lutar em Salavinder ao lado de rebeldes para salvar a cidade do cerco. Porém, depois daquela fatídica noite, ela também perdeu o controle das suas emoções e entregou o seu coração para um certo Guerreiro. Convicta de que nunca mais iria ver o Áquila, Isa estava em paz com o rumo dos acontecimentos. No entanto, algo aconteceu. Isabelle ficou forte como os Guerreiros de Fayrehal, mas isso não será o suficiente, porque o Rei é ainda mais esperto do que o imaginado. Além disso, a Ladra também irá descobrir que entregou seu bem mais precioso nas mãos do inimigo. Áquila não é quem diz ser e Isabelle não é quem pensou que fosse. Nessa luta de opostos, quem irá vencer: a honra ou o amor?",
        imageurl: '../images/rebelde_de_dois_mundos.jpg',
        alt: 'Livro: A Rebelde de Dois Mundos',
        extra: 'A Rebelde de Dois Mundos é o segundo livro da trilogia de A Ladra de Dois Mundos',
        summary: 'Uma bela de uma Ladra convencida teve o seu destino roubado de suas mãos.\nEm um mundo governado por um Rei cruel, Isabelle teve que lutar em Salavinder ao lado de rebeldes para salvar a cidade do cerco. Porém, depois daquela fatídica noite, ela também perdeu o controle das suas emoções e entregou o seu coração para um certo Guerreiro. Convicta de que nunca mais iria ver o Áquila, Isa estava em paz com o rumo dos acontecimentos. No entanto, algo aconteceu.\nIsabelle ficou forte como os Guerreiros de Fayrehal, mas isso não será o suficiente, porque o Rei é ainda mais esperto do que o imaginado. Além disso, a Ladra também irá descobrir que entregou seu bem mais precioso nas mãos do inimigo. Áquila não é quem diz ser e Isabelle não é quem pensou que fosse. Nessa luta de opostos, quem irá vencer: a honra ou o amor?',
    },
    {
        id: 3,
        title: 'As Leis do Acaso',
        subtitle: 'Um Conto de Amor',
        autora: 'Mylena Aladim',
        description: "Nada é tão ruim que não possa ser piorado. Foi o que Nara descobriu após receber a notícia que alterou o curso do seu destino. Ela precisava aprender, e rápido, a como dar aulas de física para alunos do último ano do ensino médio. Francis logo de cara deixa claro que será a pedra em seu caminho. Agora basta Nara descobrir o que é mais importante para ela: a vida profissional ou o campo magnético do Francis que a envolve a cada vez que o acaso os une.",
        imageurl: '../images/as_leis_do_acaso.jpg',
        alt: 'Livro: As Leis do Acaso',
        extra: 'As Leis do Acaso é um conto de amor com um clichê invertido',
        summary: 'Nada é tão ruim que não possa ser piorado. Foi o que Nara descobriu após receber a notícia que alterou o curso do seu destino. Ela precisava aprender, e rápido, a como dar aulas de física para alunos do último ano do ensino médio. Francis logo de cara deixa claro que será a pedra em seu caminho. Agora basta Nara descobrir o que é mais importante para ela: a vida profissional ou o campo magnético do Francis que a envolve a cada vez que o acaso os une.',
    },


];

 const App = () => {
    const bookpages = allbooks.map((book) => {
        const bookhref = '/' + (book.id).toString();
        return(
            <Route
                key={book.id} 
                path={bookhref} 
                exact 
                component={() => <Bookpage book={book}/>}
            />
        );
    });
    return (
        <Router>
            <img className="ui centered medium image" src={logo.url} alt={logo.alt}></img>
            <Header />
                <div style={mainbgstyle}>
                    <br/>
                    <Route path="/" exact component={Home}/>
                    <Route 
                        path="/meuslivros" 
                        exact
                        component={() => <Booklist allbooks={allbooks}/>} 
                    />
                    <Route path="/sobremim" exact component={Sobremim}/>
                    <Route path="/extras" exact component={Home}/>
                    {bookpages}
                    <br/><br/><br/><br/><br/><br/><br/>
                </div>
            <Footer/>
        </Router>
    );
};

export default App;