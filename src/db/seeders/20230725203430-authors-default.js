"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Authors", [
      {
        id: 1,
        name: "C. S. Lewis",
        avatar_url:
          "https://m.media-amazon.com/images/S/amzn-author-media-prod/dler95k6pk0ipcpvebgrfc0iju._SX450_.jpg",
        bio: "Clive Staples Lewis, comumente referido como C. S. Lewis (Belfast, 29 de novembro de 1898 — Oxford, 22 de novembro de 1963), foi um professor universitário, escritor, romancista, poeta, crítico literário, ensaísta e teólogo irlandês. Durante sua carreira acadêmica, foi professor e membro do Magdalen College, tanto da Universidade de Oxford como da Universidade de Cambridge. Ele é mais conhecido por seus trabalhos envolvendo a apologia cristã, incluindo as obras O Problema do Sofrimento (1940), Milagres (1947) e Cristianismo Puro e Simples (1952), e a ficção e a fantasia, sendo as obras As Crônicas de Nárnia (1950-56), Cartas de um diabo ao seu aprendiz (1942) e Trilogia Espacial (1938-45), exemplos de sua produção literária voltadas para esses temas.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Augusto Cury",
        avatar_url:
          "https://m.media-amazon.com/images/S/amzn-author-media-prod/kkje2a5k5oj24157drf1et5a55._SX450_.jpg",
        bio: "Dr. Augusto Cury é médico psiquiatra, pesquisador, professor e escritor, considerado o psiquiatra mais lido do mundo. Seus livros já foram traduzidos em mais de 70 países e já teve mais de 35 milhões de livros vendidos só no Brasil, sendo considerado o autor mais lido nas últimas duas décadas.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "Robert T. Kiyosaki",
        avatar_url:
          "https://m.media-amazon.com/images/I/31H4fUBky1L._SX450_.jpg",
        bio: "Robert Toru Kiyosaki assina como Robert T. Kiyosaki (nascido em 8 de abril de 1947, Hilo) é empresário, investidor e escritor. Conhecido principalmente pelo livro 'Pai Rico, Pai Pobre'. Traduzida em 51 idiomas e disponível em 109 países, a série Rich Dad já vendeu mais de 27 milhões de cópias em todo o mundo e dominou as listas de mais vendidos na Ásia, Austrália, América do Sul, México e Europa.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "George Orwell",
        avatar_url:
          "https://m.media-amazon.com/images/S/aplus-media/vc/ae6883d2-0e05-4b33-ac64-a2909837291a.__CR0,121,704,704_PT0_SX300_V1___.jpg",
        bio: "George Orwell nasceu Eric Arthur Blair em 25 de junho de 1903, em Bengala, Índia, onde seu pai trabalhava para o Departamento de Ópio do Serviço Público Indiano da Grã-Bretanha; estudou em instituições de elite e foi ele próprio durante cinco anos agente da polícia imperial na Birmânia; viveu com os miseráveis de Paris e Londres no final dos anos 1920; lutou pela causa republicana na Guerra Civil Espanhola ao lado de uma milícia minoritária de inspiração anarquista e trotskista, quando levou um tiro na garganta que quase lhe tirou a vida.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: "Charlie Donlea",
        avatar_url:
          "https://m.media-amazon.com/images/S/amzn-author-media-prod/nk92uppg9hal14fmdgjnkpoc65._SX450_.jpg",
        bio: "Charlie Donlea é um oftalmologista e escritor americano. Autor das obras: Summit Lake (2016) A Rapariga do Lago (título em Portugal) ou A Garota no Lago (título no Brasil) um thriller policial. Autor best-seller internacional, ele tem os seus livros publicados em 20 países. Ele também escreveu sob o pseudônimo Brian Charles.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Authors", null, {});
  },
};
