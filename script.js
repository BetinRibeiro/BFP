class QuizGame {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.targetScore = 0; // agora não é usado para vitória
        this.gameOver = false;
        
        this.initializeElements();
        this.loadQuestions();
        this.setupEventListeners();
    }

    initializeElements() {
        this.questionNumberElement = document.getElementById('questionNumber');
        this.questionTextElement = document.getElementById('questionText');
        this.currentScoreElement = document.getElementById('currentScore');
        this.progressBarElement = document.getElementById('progressBar');
        this.questionCardElement = document.getElementById('questionCard');
        this.resultDisplayElement = document.getElementById('resultDisplay');
        this.correctResultElement = document.getElementById('correctResult');
        this.incorrectResultElement = document.getElementById('incorrectResult');
        this.correctAnswerElement = document.getElementById('correctAnswer');
        this.nextQuestionBtn = document.getElementById('nextQuestionBtn');
        this.gameOverModal = document.getElementById('gameOverModal');
        this.restartGameBtn = document.getElementById('restartGameBtn');
        this.answerButtons = document.querySelectorAll('.answer-btn');
    }
    loadQuestions() {
        // Mock data - in a real scenario, this would come from an API or file
        this.questions = [
    {
        "numero": "1",
        "questao": "PROCURO SEGUIR AS REGRAS SOCIAIS SEM QUESTIONÁ-LAS",
        "resposta": "6"
    },
    {
        "numero": "2",
        "questao": "TENTO FAZER COM QUE AS PESSOAS SE SINTAM BEM",
        "resposta": "6"
    },
    {
        "numero": "3",
        "questao": "GOSTO DE FALAR SOBRE MIM",
        "resposta": "4"
    },
    {
        "numero": "4",
        "questao": "TENHO UM CORAÇÃO MOLE",
        "resposta": "4"
    },
    {
        "numero": "5",
        "questao": "FALO TUDO QUE PENSO",
        "resposta": "2"
    },
    {
        "numero": "6",
        "questao": "GOSTO DE FAZER COISAS QUE NUNCA FIZ ANTES",
        "resposta": "4"
    },
    {
        "numero": "7",
        "questao": "ACREDITO QUE AS PESSOAS TÊM BOAS INTENÇÕES",
        "resposta": "6"
    },
    {
        "numero": "8",
        "questao": "SOU DIVERTIDO",
        "resposta": "6"
    },
    {
        "numero": "9",
        "questao": "TOMO CUIDADO COM O QUE FALO",
        "resposta": "6"
    },
    {
        "numero": "10",
        "questao": "DIFICILMENTE PERDOO",
        "resposta": "2"
    },
    {
        "numero": "11",
        "questao": "DIVIRTO ME QUANDO ESTOU ENTRE VARIAS PESSOAS",
        "resposta": "6"
    },
    {
        "numero": "12",
        "questao": "RESPEITO OS SENTIMENTOS ALHEIOS",
        "resposta": "6"
    },
    {
        "numero": "13",
        "questao": "MESMO QUANDO PRECISO RESOLVER ALGUMA COISA PARA MIM, COSTUMO ADIAR ATÉ O ÚLTIMO MOMENTO",
        "resposta": "2"
    },
    {
        "numero": "14",
        "questao": "TENTO INFLUENCIAR OS OUTROS",
        "resposta": "4"
    },
    {
        "numero": "15",
        "questao": "SOU GENEROSO",
        "resposta": "6"
    },
    {
        "numero": "16",
        "questao": "ESTOU SATISFEITO COMIGO MESMO",
        "resposta": "6"
    },
    {
        "numero": "17",
        "questao": "NÃO FALO MUITO",
        "resposta": "2"
    },
    {
        "numero": "18",
        "questao": "POSSO AGREDIR FISICAMENTE AS PESSOAS QUANDO FICO MUITO IRRITADO",
        "resposta": "1"
    },
    {
        "numero": "19",
        "questao": "RESOLVO MEUS PROBLEMAS SEM PENSAR MUITO",
        "resposta": "2"
    },
    {
        "numero": "20",
        "questao": "Preocupo-me COM TODOS",
        "resposta": "6"
    },
    {
        "numero": "21",
        "questao": "GERALMENTE ME SINTO FELIZ",
        "resposta": "6"
    },
    {
        "numero": "22",
        "questao": "PRECISO DE ESTIMULOS PARA COMEÇAR A FAZER AS COISAS",
        "resposta": "2"
    },
    {
        "numero": "23",
        "questao": "TENHO POUCO INTERESSE POR EXPOSIÇÕES DE ARTE",
        "resposta": "4"
    },
    {
        "numero": "24",
        "questao": "DIVIRTO-ME CONTRARIANDO AS PESSOAS",
        "resposta": "1"
    },
    {
        "numero": "25",
        "questao": "COM FREQUÊNCIA TOMO DECISÕES PRECIPITADAS",
        "resposta": "2"
    },
    {
        "numero": "26",
        "questao": "FACILMENTE COLOCO AS MINHAS IDEIAS EM PRÁTICA",
        "resposta": "6"
    },
    {
        "numero": "27",
        "questao": "USO AS PESSOAS PARA CONSEGUIR O QUE DESEJO",
        "resposta": "2"
    },
    {
        "numero": "28",
        "questao": "POSSO LIDAR COM MUITAS TAREFAS AO MESMO TEMPO",
        "resposta": "6"
    },
    {
        "numero": "29",
        "questao": "QUASE SEMPRE ME SINTO DESANIMADO",
        "resposta": "2"
    },
    {
        "numero": "30",
        "questao": "SUSPEITO DAS INTENÇÕES DAS PESSOAS",
        "resposta": "2"
    },
    {
        "numero": "31",
        "questao": "ATUALMENTE, DEFENDO IDEIAS DIFERENTES DAQUELAS QUE DEFENDIA ANTIGAMENTE",
        "resposta": "4"
    },
    {
        "numero": "32",
        "questao": "CONSIGO O QUE EU QUERO",
        "resposta": "6"
    },
    {
        "numero": "33",
        "questao": "TENHO POUCA CURIOSIDADE PARA CONHECER NOVOS ESTILOS MUSICAIS",
        "resposta": "4"
    },
    {
        "numero": "34",
        "questao": "DEDICO-ME MUITO PARA FAZER BEM AS COISAS",
        "resposta": "6"
    },
    {
        "numero": "35",
        "questao": "ESPERO PELA DECISÃO DOS OUTROS",
        "resposta": "2"
    },
    {
        "numero": "36",
        "questao": "INTERESSO-ME POR TEORIAS QUE TENTAM EXPLICAR O UNIVERSO",
        "resposta": "4"
    },
    {
        "numero": "37",
        "questao": "TENHO POUCA PACIÊNCIA PARA TERMINAR TAREFAS MUITO LONGAS OU DIFÍCEIS",
        "resposta": "2"
    },
    {
        "numero": "38",
        "questao": "SOU UMA PESSOA TÍMIDA",
        "resposta": "2"
    },
    {
        "numero": "39",
        "questao": "TENHO ALGUNS INIMIGOS",
        "resposta": "2"
    },
    {
        "numero": "40",
        "questao": "ACHO QUE A MINHA VIDA É VAZIA E SEM EMOÇÃO",
        "resposta": "2"
    },
    {
        "numero": "41",
        "questao": "COMEÇO RAPIDAMENTE AS TAREFAS QUE TENHO PARA FAZER",
        "resposta": "6"
    },
    {
        "numero": "42",
        "questao": "ACHO POUCO INTERESSANTES EXPOSIÇÕES FOTOGRÁFICAS",
        "resposta": "4"
    },
    {
        "numero": "43",
        "questao": "RESPEITO O PONTO DE VISTA DOS OUTROS",
        "resposta": "6"
    },
    {
        "numero": "44",
        "questao": "TENHO DIFICULDADE PARA ME ADAPTAR A TRABALHOS QUE ENVOLVAM UMA ROTINA FIXA",
        "resposta": "4"
    },
    {
        "numero": "45",
        "questao": "ANTES DE AGIR, PENSO NO QUE PODE ME ACONTECER",
        "resposta": "6"
    },
    {
        "numero": "46",
        "questao": "SINTO-ME MAL SE NÃO CUMPRO ALGO QUE PROMETI",
        "resposta": "6"
    },
    {
        "numero": "47",
        "questao": "ADORO ATIVIDADES EM GRUPO",
        "resposta": "6"
    },
    {
        "numero": "48",
        "questao": "TUDO O QUE POSSO VER A MINHA FRENTE E MAIS DESPRAZER DO QUE PRAZER",
        "resposta": "2"
    },
    {
        "numero": "49",
        "questao": "GOSTO E IR A LUGARES QUE NÃO CONHEÇO",
        "resposta": "4"
    },
    {
        "numero": "50",
        "questao": "CONVERSO COM MUITAS PESSOAS DIFERENTES QUANDO VOU A FESTAS",
        "resposta": "6"
    },
    {
        "numero": "51",
        "questao": "AJO IMPULSIVAMENTE QUANDO ALGUMA COISA ESTÁ ME ABORRECENDO",
        "resposta": "2"
    },
    {
        "numero": "52",
        "questao": "GOSTO DE TER UMA VIDA SOCIAL AGITADA",
        "resposta": "4"
    },
    {
        "numero": "53",
        "questao": "PARTICIPAR DE ATIVIDADES QUE ENVOLVAM CRIATIVIDADE E/OU FANTASIA ME EMPOLGA",
        "resposta": "4"
    },
    {
        "numero": "54",
        "questao": "ME ESFORÇO PARA TER DESTAQUE NA ESCOLA OU NO TRABALHO",
        "resposta": "6"
    },
    {
        "numero": "55",
        "questao": "GERALMENTE FAÇO O QUE MEUS AMIGOS E PARENTES QUEREM,EMBORA NÃO CONCORDE COM ELES, COM MEDO DE QUE SE AFASTEM DE MIM",
        "resposta": "4"
    },
    {
        "numero": "56",
        "questao": "TENHO POUCO INTERESSE POR IDEIAS ABSTRATAS",
        "resposta": "4"
    },
    {
        "numero": "57",
        "questao": "ACHO QUE OS OUTROS ZOBAM DE MIM",
        "resposta": "2"
    },
    {
        "numero": "58",
        "questao": "COSTUMO FAZER SACRIFÍCIOS PARA CONSEGUIR O QUE QUERO",
        "resposta": "6"
    },
    {
        "numero": "59",
        "questao": "ACHO NATURAL QUE OS VALORES MORAIS MUDEM AO LONGO DO TEMPO",
        "resposta": "4"
    },
    {
        "numero": "60",
        "questao": "TENHO MUITO MEDO DE QUE MEUS AMIGOS DEIXEM DE GOSTAR DE MIM",
        "resposta": "4"
    },
    {
        "numero": "61",
        "questao": "TENTO INCENTIVAR AS PESSOAS",
        "resposta": "6"
    },
    {
        "numero": "62",
        "questao": "SOU UMA PESSOA COM POUCA IMAGINAÇÃO",
        "resposta": "2"
    },
    {
        "numero": "63",
        "questao": "FAÇO COISAS CONSIDERADAS PERIGOSAS",
        "resposta": "2"
    },
    {
        "numero": "64",
        "questao": "PENSO SOBRE O QUE PRECISO FAZER PARA ALCANÇAR MEUS OBJETIVOS",
        "resposta": "6"
    },
    {
        "numero": "65",
        "questao": "SOU UMA PESSOA NERVOSA",
        "resposta": "2"
    },
    {
        "numero": "66",
        "questao": "COSTUMO FICAR CALADO QUANDO ESTOU ENTRE ESTRANHOS",
        "resposta": "2"
    },
    {
        "numero": "67",
        "questao": "RESOLVO MEUS PROBLEMAS COM RAPIDEZ",
        "resposta": "6"
    },
    {
        "numero": "68",
        "questao": "CONFIO NO QUE AS PESSOAS DIZEM",
        "resposta": "6"
    },
    {
        "numero": "69",
        "questao": "ACHO QUE NÃO EXISTE UMA VERDADE ABSOLUTA",
        "resposta": "4"
    },
    {
        "numero": "70",
        "questao": "POR MAIS QUE ME ESFORCE, SEI QUE NÃO SOU CAPAZ DE SUPERAR OS OBSTÁCULOS QUE TENHO QUE ENTRENTAR NO DIA A DIA",
        "resposta": "2"
    },
    {
        "numero": "71",
        "questao": "ENVOLVO-ME RAPIDAMENTE COM OS OUTROS",
        "resposta": "6"
    },
    {
        "numero": "72",
        "questao": "GOSTO DE PENSAR SOBRE SOLUÇÕES DIFERENTES PARA PROBLEMAS COMPLEXOS",
        "resposta": "6"
    },
    {
        "numero": "73",
        "questao": "DEIXO DE FAZER AS COISAS QUE DESEJO POR MEDO DE SER CRITICADO PELOS OUTROS",
        "resposta": "2"
    },
    {
        "numero": "74",
        "questao": "ACREDITO QUE A MAIORIA DOS VALORES MORAIS SÃO DEPENDENTES DA ÉPOCA E DO LUGAR",
        "resposta": "4"
    },
    {
        "numero": "75",
        "questao": "FICO MUITO TÍMIDO QUANDO ESTOU ENTRE DESCONHECIDOS",
        "resposta": "2"
    },
    {
        "numero": "76",
        "questao": "PREOCUPO-ME EM AGIR SEGUNDO AS LEIS",
        "resposta": "6"
    },
    {
        "numero": "77",
        "questao": "MEU HUMOR VARIA CONSTANTEMENTE",
        "resposta": "2"
    },
    {
        "numero": "78",
        "questao": "NECESSITO ESTAR NO CENTRO DAS ATENÇÕES",
        "resposta": "4"
    },
    {
        "numero": "79",
        "questao": "SINTO-ME MUITO INSEGURO QUANDO TENHO QUE FAZER COISAS QUE NUNCA FIZ ANTES",
        "resposta": "2"
    },
    {
        "numero": "80",
        "questao": "AS PESSOAS DIZEM QUE SOU MUITO DETALHISTA",
        "resposta": "6"
    },
    {
        "numero": "81",
        "questao": "EVITO DISCUSSÕES FILOSÓFICAS",
        "resposta": "4"
    },
    {
        "numero": "82",
        "questao": "NÃO GOSTO DE EXPRESSAR MINHAS IDEIAS, POIS TENHO MEDO DE SER RIDICULARIZADO",
        "resposta": "2"
    },
    {
        "numero": "83",
        "questao": "SOU  CAPAZ DE ASSUMIR TAREFAS IMPORTANTES",
        "resposta": "6"
    },
    {
        "numero": "84",
        "questao": "GOSTO DE MANTER A ROTINA",
        "resposta": "4"
    },
    {
        "numero": "85",
        "questao": "ACHO QUE FAÇO BEM AS COISAS",
        "resposta": "6"
    },
    {
        "numero": "86",
        "questao": "SOU UMA PESSOA IRRITÁVEL",
        "resposta": "2"
    },
    {
        "numero": "87",
        "questao": "COSTUMO ENGANAR AS PESSOAS",
        "resposta": "2"
    },
    {
        "numero": "88",
        "questao": "GOSTO DE TRABALHOS ARTÍSTICOS QUE SÃO CONSIDERADOS ESTRANHOS",
        "resposta": "4"
    },
    {
        "numero": "89",
        "questao": "TENHO MUITA DIFICULDADE DE TOMAR DECISÕES EM MINHA VIDA",
        "resposta": "2"
    },
    {
        "numero": "90",
        "questao": "VIVO MINHAS EMOÇÕES INTENSAMENTE",
        "resposta": "2"
    },
    {
        "numero": "91",
        "questao": "GOSTO DE FAZER COISAS QUE EXIGEM MUITO DE MIM",
        "resposta": "6"
    },
    {
        "numero": "92",
        "questao": "SOFRO QUANDO ENCONTRO ALGUÉM QUE ESTÁ COM DIFICULDADE",
        "resposta": "6"
    },
    {
        "numero": "93",
        "questao": "É COMUM TEREM INVEJA DE MIM",
        "resposta": "2"
    },
    {
        "numero": "94",
        "questao": "SEMPRE QUE POSSO, MUDO OS TRAJETOS NOS MEUS PERCURSOS DIÁRIOS",
        "resposta": "4"
    },
    {
        "numero": "95",
        "questao": "TENHO DIFICULDADE PARA TERMINAR AS TAREFAS, POIS DISTRAIO COM OUTRAS COISAS",
        "resposta": "2"
    },
    {
        "numero": "96",
        "questao": "PREOCUPO-ME COM AQUELES QUE ESTÃO NUMA SITUAÇÃO PIOR QUE A MINHA",
        "resposta": "6"
    },
    {
        "numero": "97",
        "questao": "SOU COMUNICATIVO",
        "resposta": "6"
    },
    {
        "numero": "98",
        "questao": "ACHO QUE OS OUTROS PODEM TENTAR ME PREJUDICAR",
        "resposta": "2"
    },
    {
        "numero": "99",
        "questao": "SINTO UMA INCOTROLÁVEL VONTADE DE FALAR, MESMO QUE SEJA COM QUEM NÃO CONHEÇO",
        "resposta": "2"
    },
    {
        "numero": "100",
        "questao": "EU PARO DE FAZER AS COISAS QUANDO ELAS FICAM DIFÍCEIS",
        "resposta": "2"
    },
    {
        "numero": "101",
        "questao": "ESCOLHO AS PALAVRAS COM CUIDADO",
        "resposta": "6"
    },
    {
        "numero": "102",
        "questao": "COM FREQUÊNCIA, PASSO POR PERÍODOS EM QUE FICO EXTREMAMENTE IRRITÁVEL, INCOMODANDO-ME COM QUALQUER COISA",
        "resposta": "2"
    },
    {
        "numero": "103",
        "questao": "RARAMENTE MOSTRO UM TRABALHO A OUTRAS PESSOAS ANTES DE REVISÁ-LO CUIDADOSAMENTE",
        "resposta": "6"
    },
    {
        "numero": "104",
        "questao": "IMPORTO-ME COM OS SENTIMENTOS DOS OUTROS",
        "resposta": "6"
    },
    {
        "numero": "105",
        "questao": "FAÇO MUITAS COISAS DURANTE MINHAS HORAS DE FOLGA",
        "resposta": "6"
    },
    {
        "numero": "106",
        "questao": "ESTOU CANSADO DE VIVER",
        "resposta": "1"
    },
    {
        "numero": "107",
        "questao": "GOSTO DE QUEBRAR REGRAS",
        "resposta": "2"
    },
    {
        "numero": "108",
        "questao": "COSTUMO TOMAR A INICIATIVA E CONVERSAR COM OS OUTROS",
        "resposta": "6"
    },
    {
        "numero": "109",
        "questao": "RESPEITO AUTORIDADES",
        "resposta": "7"
    },
    {
        "numero": "110",
        "questao": "SOU UMA PESSOA INSEGURA",
        "resposta": "2"
    },
    {
        "numero": "111",
        "questao": "QUANDO ESTOU ENTRE UM GRUPO, GOSTO QUE ME DEEM ATENÇÃO",
        "resposta": "4"
    },
    {
        "numero": "112",
        "questao": "MEUS AMIGOS DIZEM QUE EU TRABALHO/ESTUDO DEMAIS",
        "resposta": "6"
    },
    {
        "numero": "113",
        "questao": "SINTO-ME ENTENDIADO QUANDO TENHO QUE FAZER AS MESMAS COISAS",
        "resposta": "2"
    },
    {
        "numero": "114",
        "questao": "EXIJO MUITO DE MIM MESMO",
        "resposta": "6"
    },
    {
        "numero": "115",
        "questao": "TENHO DIFICULDADE DE PARTICIPAR DE ATIVIDADES QUE EXIJAM IMAGINAÇÃO OU FANTASIA",
        "resposta": "4"
    },
    {
        "numero": "116",
        "questao": "GOSTO DE PROGRAMAR DETALHADAMENTE AS COISAS QUE TENHO PARA FAZER",
        "resposta": "6"
    },
    {
        "numero": "117",
        "questao": "USUALMENTE, TOMO A INCIATIVA NAS SITUAÇÕES",
        "resposta": "6"
    },
    {
        "numero": "118",
        "questao": "SINTO-ME MUITO MAL QUANDO RECEBO ALGUMA CRÍTICA",
        "resposta": "2"
    },
    {
        "numero": "119",
        "questao": "ACREDITO QUE AS PESSAOS TÊM UMA NATUREZA RUIM",
        "resposta": "4"
    },
    {
        "numero": "120",
        "questao": "DIFICILMENTE FICO SEM JEITO",
        "resposta": "6"
    },
    {
        "numero": "121",
        "questao": "SÓ ME APROXIMO DE UMA PESSOA QUANDO ESTOU CERTO DE QUE ELA CONCORDA COM AS MINHAS OPINIÕES E ATITUDES, PARA EVITAR CRÍTICAS OU DESAPROVAÇÃO",
        "resposta": "2"
    },
    {
        "numero": "122",
        "questao": "SEI O QUE QUERO PARA MINHA VIDA",
        "resposta": "6"
    },
    {
        "numero": "123",
        "questao": "FREQUENTEMENE QUESTIONO REGRAS E COSTUMES SOCIAIS",
        "resposta": "2"
    },
    {
        "numero": "124",
        "questao": "TENHO UMA GRANDE DIFICULDADE EM DORMIR",
        "resposta": "2"
    },
    {
        "numero": "125",
        "questao": "PREOCUPO-ME EM AGRADAR AS PESSOAS",
        "resposta": "6"
    },
    {
        "numero": "126",
        "questao": "SOU DISPOSTO A REVER MEUS POSICIONAMENTOS SOBRE DIFERENTES ASSUNTOS",
        "resposta": "6"
    }
];

        this.displayQuestion();
    }

    setupEventListeners() {
        this.answerButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                if (this.gameOver) return;
                
                const selectedValue = e.target.getAttribute('data-value');
                this.selectAnswer(selectedValue);
            });
        });

        this.nextQuestionBtn.addEventListener('click', () => this.nextQuestion());
        this.restartGameBtn.addEventListener('click', () => this.restartGame());
    }

    selectAnswer(value) {
        this.answerButtons.forEach(btn => {
            btn.classList.remove('selected', 'bg-primary', 'text-white');
            btn.classList.add('bg-gray-100', 'text-gray-700');
        });

        const selectedButton = document.querySelector(`[data-value="${value}"]`);
        if (selectedButton) {
            selectedButton.classList.add('selected', 'bg-primary', 'text-white');
        }

        setTimeout(() => {
            this.checkAnswer(value);
        }, 500);
    }

    checkAnswer(userAnswer) {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        const correctAnswer = currentQuestion.resposta;

        if (userAnswer === correctAnswer) {
            this.score++;
            this.showResult(true, correctAnswer);

            // ✅ Remove a questão da lista quando acertar
            this.questions.splice(this.currentQuestionIndex, 1);

        } else {
            this.score--;

            // ❌ Duplicar a questão e mover para o final da lista
            const questionCopy = { ...currentQuestion };
            this.questions.push(questionCopy);

            this.showResult(false, correctAnswer);
        }

        this.updateScoreDisplay();
    }

    showResult(isCorrect, correctAnswer) {
        this.questionCardElement.classList.add('hidden');
        this.resultDisplayElement.classList.remove('hidden');

        if (isCorrect) {
            this.correctResultElement.classList.remove('hidden');
            this.incorrectResultElement.classList.add('hidden');
        } else {
            this.incorrectResultElement.classList.remove('hidden');
            this.correctResultElement.classList.add('hidden');
            this.correctAnswerElement.textContent = correctAnswer;
        }

        // Verifica se o jogo acabou (sem mais perguntas)
        setTimeout(() => {
            if (this.questions.length === 0) {
                this.endGame(true);
            }
        }, 1000);
    }

    nextQuestion() {
        // Se não há mais perguntas, encerra
        if (this.questions.length === 0) {
            this.endGame(true);
            return;
        }

        // Se removeu uma questão, o índice pode sair do limite
        if (this.currentQuestionIndex >= this.questions.length) {
            this.currentQuestionIndex = 0;
        }

        this.displayQuestion();
        this.resultDisplayElement.classList.add('hidden');
        this.questionCardElement.classList.remove('hidden');
    }

    displayQuestion() {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if (!currentQuestion) {
            this.endGame(true);
            return;
        }

        this.questionNumberElement.textContent = currentQuestion.numero;
        this.questionTextElement.textContent = currentQuestion.questao;

        this.answerButtons.forEach(btn => {
            btn.classList.remove('selected', 'bg-primary', 'text-white');
            btn.classList.add('bg-gray-100', 'text-gray-700');
        });

        this.questionCardElement.classList.add('slide-in');
        setTimeout(() => this.questionCardElement.classList.remove('slide-in'), 400);
    }

    updateScoreDisplay() {
        this.currentScoreElement.textContent = this.score;
        this.currentScoreElement.classList.add('bounce-animation');

        const totalInicial = 126; // total original, se quiser
        const progresso = ((totalInicial - this.questions.length) / totalInicial) * 100;
        this.progressBarElement.style.width = `${Math.min(progresso, 100)}%`;

        setTimeout(() => {
            this.currentScoreElement.classList.remove('bounce-animation');
        }, 600);
    }

    endGame(isVictory) {
        this.gameOver = true;
        
        const title = document.getElementById('gameOverTitle');
        const message = document.getElementById('gameOverMessage');
        
        if (isVictory) {
            title.textContent = '🔥 Treino concluído com sucesso!';
            message.textContent = `Você acertou todas as questões! Parabéns pelo desempenho.`;
        } else {
            title.textContent = 'Fim de Jogo 😔';
            message.textContent = `Pontuação final: ${this.score}. Continue praticando!`;
        }
        
        this.gameOverModal.classList.remove('hidden');
    }

    restartGame() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.gameOver = false;

        this.loadQuestions();
        this.updateScoreDisplay();
        this.gameOverModal.classList.add('hidden');
        this.questionCardElement.classList.remove('hidden');
        this.resultDisplayElement.classList.add('hidden');
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    new QuizGame();
});
