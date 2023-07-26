"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Books", [
      {
        id: 1,
        category_id: 5,
        author_id: 2,
        name: "O homem mais inteligente da história",
        cover_url: "https://m.media-amazon.com/images/I/41hP6n4YLVL.jpg",
        release_date: "Tue Jul 25 2023 14:27:40",
        pages: 320,
        synopsis:
          "O psiquiatra Marco Polo é um cientista respeitadíssimo, especialista no funcionamento da mente e autor do primeiro programa mundial de gestão da emoção. Quando vai a Jerusalém participar de uma reunião na ONU, é desafiado a estudar a inteligência do homem mais famoso da história: Jesus. Mas ele é um dos maiores ateus da atualidade e se recusa a fazê-lo. Todavia, a plateia de intelectuais o instiga a realizar essa empreitada. Depois de muita resistência, Marco Polo aceita o desafio. Monta uma mesa-redonda composta de brilhantes profissionais para analisar a mente de Jesus sob os ângulos da ciência e não da religião. Ele parte em uma jornada épica para saber se Jesus era um mestre em ter autocontrole, gerir sua emoção, trabalhar perdas e frustrações, libertar sua criatividade, contemplar o belo e formar pensadores. Marco Polo esperava encontrar um homem comum, sem grandes habilidades intelectuais, mas pouco a pouco fica abalado e conclui que a mente do personagem mais conhecido da humanidade permanece um mistério, inclusive para os bilhões de pessoas que o admiram. Tanto as universidades como as religiões falharam em não estudar o homem mais inteligente da história. Este romance é uma obra vital para a minha carreira. Fruto de 15 anos de estudos e pesquisas, é o primeiro volume de uma coleção que vai abalar nossas convicções.",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        category_id: 2,
        author_id: 1,
        name: "Cartas de um diabo a seu aprendiz",
        cover_url: "https://m.media-amazon.com/images/I/51Jsf2I0IqL.jpg",
        release_date: "Tue Jul 10 2020 14:27:40",
        pages: 164,
        synopsis:
          "Um clássico da literatura cristã, este retrato satírico da vida humana, feito pelo ponto de vista do diabo, tem divertido milhões de leitores desde sua primeira publicação, na década de 1940. O livro faz parte da Coleção Especial C.S. Lewis, que conta com um projeto gráfico e tradução aprimorados, além da edição em capa dura. Cartas de um diabo a seu aprendiz é a correspondência ao mesmo tempo cômica, séria e original entre um diabo e seu sobrinho aprendiz. Revelando uma personalidade mais espirituosa, Lewis apresenta nesta obra best-seller a mais envolvente narrativa já escrita sobre livre arbítrio, fraquezas humanas e tentações — e a superação delas.",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        category_id: 1,
        author_id: 5,
        name: "A garota do lago",
        cover_url: "https://m.media-amazon.com/images/I/5194PSFbN8L.jpg",
        release_date: "Tue Jul 10 2020 14:27:40",
        pages: 380,
        synopsis:
          "Summit Lake, uma pequena cidade entre montanhas, é esse tipo de lugar, bucólico e com encantadoras casas dispostas à beira de um longo trecho de água intocada.Duas semanas atrás, a estudante de direito Becca Eckersley foi brutalmente assassinada em uma dessas casas. Filha de um poderoso advogado, Becca estava no auge de sua vida. Atraída instintivamente pela notícia, a repórter Kelsey Castle vai até a cidade para investigar o caso. ...E LOGO SE ESTABELECE UMA CONEXÃO ÍNTIMA QUANDO UM VIVO CAMINHA NAS MESMAS PEGADAS DOS MORTOS...E enquanto descobre sobre as amizades de Becca, sua vida amorosa e os segredos que ela guardava, a repórter fica cada vez mais convencida de que a verdade sobre o que aconteceu com Becca pode ser a chave para superar as marcas sombrias de seu próprio passado.",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        category_id: 2,
        author_id: 4,
        name: "A revolução dos bichos: Um conto de fadas",
        cover_url:
          "https://m.media-amazon.com/images/I/61owA5ey3iL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
        release_date: "Tue Jul 10 2020 14:27:40",
        pages: 152,
        synopsis:
          "Escrita em plena Segunda Guerra Mundial e publicada em 1945 depois de ter sido rejeitada por várias editoras, essa pequena narrativa causou desconforto ao satirizar ferozmente a ditadura stalinista numa época em que os soviéticos ainda eram aliados do Ocidente na luta contra o eixo nazifascista. De fato, são claras as referências: o despótico Napoleão seria Stálin, o banido Bola-de-Neve seria Trotsky, e os eventos políticos - expurgos, instituição de um estado policial, deturpação tendenciosa da História - mimetizam os que estavam em curso na União Soviética. Com o acirramento da Guerra Fria, as mesmas razões que causaram constrangimento na época de sua publicação levaram A revolução dos bichos a ser amplamente usada pelo Ocidente nas décadas seguintes como arma ideológica contra o comunismo. O próprio Orwell, adepto do socialismo e inimigo de qualquer forma de manipulação política, sentiu-se incomodado com a utilização de sua fábula como panfleto. Depois das profundas transformações políticas que mudaram a fisionomia do planeta nas últimas décadas, a pequena obra-prima de Orwell pode ser vista sem o viés ideológico reducionista. Mais de sessenta anos depois de escrita, ela mantém o viço e o brilho de uma alegoria perene sobre as fraquezas humanas que levam à corrosão dos grandes projetos de revolução política. É irônico que o escritor, para fazer esse retrato cruel da humanidade, tenha recorrido aos animais como personagens. De certo modo, a inteligência política que humaniza seus bichos é a mesma que animaliza os homens. Escrito com perfeito domínio da narrativa, atenção às minúcias e extraordinária capacidade de criação de personagens e situações, A revolução dos bichos combina de maneira feliz duas ricas tradições literárias: a das fábulas morais, que remontam a Esopo, e a da sátira política, que teve talvez em Jonathan Swift seu representante máximo.",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        category_id: 6,
        author_id: 3,
        name: "Pai Rico, Pai Pobre",
        cover_url:
          "https://m.media-amazon.com/images/I/519kRFUvDOL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
        release_date: "Tue Jul 10 2020 14:27:40",
        pages: 336,
        synopsis:
          "A escola prepara as crianças para o mundo real?  Essa é a primeira pergunta com a qual o leitor se depara neste livro.  O recado é ousado e direto: boa formação e notas altas não bastam para assegurar o sucesso de alguém. O mundo mudou; a maioria dos jovens tem cartão de crédito, antes mesmo de concluir os estudos, e nunca teve aula sobre dinheiro, investimentos, juros etc. Ou seja, eles vão para a escola, mas continuam financeiramente improficientes, despreparados para enfrentar um mundo que valoriza mais as despesas do que a poupança.",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        category_id: 5,
        author_id: 1,
        name: "Os quatro amores",
        cover_url:
          "https://m.media-amazon.com/images/I/51J4ROvqwLL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
        release_date: "Tue Jul 10 2020 14:27:40",
        pages: 192,
        synopsis:
          "Como expressar de maneira profunda um sentimento frequentemente tratado de forma tão rasa? Para o célebre escritor C.S. Lewis, o amor pode ser comunicado de quatro maneiras: Afeição, a forma mais básica de amar; Amizade, considerada a mais rara; Eros, o amor apaixonado; e Caridade, o maior e menos egoísta deles. Em Os quatro amores, um de seus livros mais influentes, Lewis contempla a essência desse sentimento e avalia como cada tipo se ajusta aos demais. Com a maestria que o tornou um dos autores mais importantes do século XX, Lewis desafia e incorpora definições clássicas do amor e reflexões profundas de uma forma que continua atual e relevante. Afinal, foi por amor que Deus criou o ser humano, somente a fim de poder constantemente amá-lo e aperfeiçoá-lo.",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Books", null, {});
  },
};
