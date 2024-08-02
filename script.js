const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "para promover a , sustentabilidade ambiental qual das seguintes açoẽs é mais eficaz?",
        alternativas: [
            {
                texto: "gerencia residuos de froma eficiente para reduzir a poluição e conservar recursos",
                afirmacao: "o gerenciamento de forma eficiente de residuos minimizada o desperdicio reduza a poluição e preservar recursos"
            },
            {
                texto: "investir em energia eolica para a agua eletricidade e reduzir a dependencia de combustives fosseis",
                afirmacao: "a energia eolica e uma fonte renovavel e linpa que reduz a emissão de gases "
            }
        ]
    },
    {
        enunciado:"De que forma a adoção de energia eolica pode empactar a gestão de residuos e a conservação de agua em uma comunidade ",
        alternativas: [
            {
                texto: "a comunidade adota energia eolica como principal fonte de energia ",
                afirmacao: "reduz a produção de residuos toxicos ao diminuir a dependencia de combustives fosseis"
            },
            {
                texto: "a comunidade continua a ultilizar fontes tradicionais de energia, como carvão e gas natural",
                afirmacao: "comsome grandes quantidades de agua exarcesbando a escasez hidrica"
            }
        ]
    },
    {
        enunciado: "como a implementação de energia eolica pode impactar o gerenciamento de residuos e a consrvação de agua  ",
        alternativas: [
            {
                texto: "a energia eolica ao substituir fontes de energia baseadas em combustiveis fosseis reduz a producao de residuos toxicos ea producao de agua ",
                afirmacao: "a energia eolica melhora o gerenciamento de residuos e conserva a agua "
            },
            {
                texto: "a producao e a manutenção de turbinas eolicas podem gerar residuos industriais espesificos e em algumas faes demandae uso intensivo",
                afirmacao: "e crucial adotar praticas de reciclagem e gestao de residuos e minimizar o uso de agua para maximizar a sustentabilidade da energia eolica  "
            }
        ]
    },
    {
        enunciado: "de que maneira a conservação de agua pode ser afetada pela expanção de pesquisa de energia eolica ",
        alternativas: [
            {
                texto: "a energia eolica requer pouca agua para operacao o contrario de outras energias ",
                afirmacao: "a expansao de parques eolicoscomtribui para a conservacao de recursos hidricos para outras essemcias na cominidade "
            },
            {
                texto: "a comprucao dos parques eolicos pode alterar o uso do solo impactando os recursos hidricos ",
                afirmacao: "apesar da operação dos parques eolicos comservas agua e crucial para impactos durante a combustao para protyeger os recursos hidricos "
            }
        ]
    },
    
        
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
