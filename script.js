const characters = [
    {
        name: "Letycia Dawson",
        code: "5014",
        bio: "Estudante de fotografia que enxerga o mundo através de enquadramentos, sombras e contrastes. Enquanto a maioria das pessoas só tira fotos rápidas com o celular, Letty faz questão de carregar sua velha câmera analógica pendurada no ombro para todo lado, gastando boa parte da mesada em rolos de filme e produtos químicos. Ela passa horas trancada no laboratório escuro da faculdade revelando imagens à mão, ouvindo música baixa e fugindo da correria das aulas teóricas. De personalidade mais reservada e contemplativa, Letty nem sempre é a primeira a puxar assunto numa roda barulhenta, mas é a amiga que está sempre presente nos bastidores, registrando as risadas, os perrengues e as memórias de todo mundo antes que a noite acabe.",
        image: "img/leticia.png",
        sheetImage: "fichas/ficha_letycia.png",
        spotifyTrack: "4gHnSNHs8RyVukKoWdS99f",
        attributes: [
            { label: "DES", value: 0 },
            { label: "INEX", value: 4 },
            { label: "ERUD", value: 2 },
            { label: "ALT", value: 2 }
        ],
        items: [
            { name: "Gomas de Mascar de Menta (3/3)", desc: "Recupera 1d4 PV e 1d4 de Sanidade ao mascar para controlar a ansiedade." },
            { name: "Câmera Analógica com Flash", desc: "Revela detalhes ocultos no escuro ao tirar fotos e usa o flash para cegar alguém por 1 turno." }
        ]
    },
    {
        name: "Maya Vasconcelos",
        code: "0294",
        bio: "A alma emo do grupo. Maya passou os últimos anos rabiscando letras melancólicas e cheias de raiva nas margens dos cadernos escolares, até finalmente decidir parar de adiar o sonho de montar sua própria banda. Entre turnos cansativos em um emprego meio período para pagar os equipamentos e noites varadas tentando achar o timbre perfeito, ela vive à base de café preto, delineador borrado e camisetas largas de bandas antigas. Temperamental, sincera até demais e dona de um senso de humor ácido, Maya não tem paciência para falsidade, mas compra briga por qualquer um dos seus amigos sem pensar duas vezes. Para ela, a música não é só um hobby: é a única válvula de escape que realmente funciona.",
        image: "img/maya.png",
        sheetImage: "fichas/ficha_maya.png",
        spotifyTrack: "0FtD1ZukwCnuTfTNuwxrQM", 
        attributes: [
            { label: "DES", value: 2 },
            { label: "INEX", value: 2 },
            { label: "ERUD", value: 0 },
            { label: "ALT", value: 4 }
        ],
        items: [
            { name: "Maço de Cigarros e Isqueiro (5/5)", desc: "Fumar recupera 1d6 de Sanidade; o isqueiro funciona como fonte de luz imediata." },
            { name: "Spray de Pimenta (2/2)", desc: "Faz o alvo perder 1 turno (ou agir com desvantagem) se acertado de perto." }
        ]
    },
    {
        name: "Jaxson Vance",
        code: "7354",
        bio: "Recém-liberado do período de treinamento básico no exército, Jax voltou para a cidade natal parecendo outra pessoa no espelho, mais largo nos ombros, cheio de tatuagens novas e com o corte de cabelo ainda denunciando os meses de quartel. Embora não tenha ido para nenhuma zona de conflito, a rotina exaustiva de acordar antes do sol nascer, marchar sob chuva e seguir ordens o tempo inteiro deixou ele morrendo de saudade das coisas simples da vida civil. Agora que finalmente está livre de horários rígidos e superiores gritando no seu ouvido, Jax só quer saber de tirar o atraso: dormir até tarde, comer besteira, dar risada com os velhos amigos e aproveitar cada segundo de liberdade antes de decidir o que vai fazer da vida.",
        image: "img/jaxson.png",
        sheetImage: "fichas/ficha_jaxson.png",
        spotifyTrack: "6x4tKaOzfNJpEJHySoiJcs", 
        attributes: [
            { label: "DES", value: 4 },
            { label: "INEX", value: 2 },
            { label: "ERUD", value: 0 },
            { label: "ALT", value: 2 }
        ],
        items: [
            { name: "Cantil Metálico (3/3)", desc: "Recupera 1d4+1 PV ao beber para repor as energias." },
            { name: "Lanterna Tática de Bolso", desc: "Ilumina ambientes totalmente escuros e serve como arma improvisada de impacto leve." }
        ]
    },
    {
        name: "Damon Cross",
        code: "3224",
        bio: "O típico cara que não pisa fora de casa sem um par de fones no pescoço e uma opinião forte sobre alguma banda obscura dos anos 90. Desde adolescente, Damon trocou as festas comuns por lojas de discos usados, fóruns de áudio e tardes inteiras desmontando amplificadores velhos para descobrir como funcionavam. Esse vício acabou transformando o quarto dele em um miniestúdio improvisado cheio de cabos enrolados, pedaleiras e instrumentos surrados. Tranquilo, meio sarcástico e com um jeito desligado de quem está sempre com uma batida tocando na cabeça, ele virou o 'nerd musical' oficial da turma, e o parceiro criativo perfeito para ajudar Maya a transformar letras soltas em músicas de verdade.",
        image: "img/damon.png",
        sheetImage: "fichas/ficha_damon.png",
        spotifyTrack: "0OFQwUVOYXn4E8scJq0PAc", 
        attributes: [
            { label: "DES", value: 0 },
            { label: "INEX", value: 2 },
            { label: "ERUD", value: 4 },
            { label: "ALT", value: 2 }
        ],
        items: [
            { name: "Fones de Ouvido e MP3 Player (4/4)", desc: "Recupera 1d6 de Sanidade ao ouvir música, mas deixa o personagem com desvantagem para ouvir o ambiente enquanto usa." },
            { name: "Canivete Multiúso", desc: "Concede +1 em testes de ERUD ou ALT para abrir painéis, consertar fiações, destrancar portas simples ou improvisar ferramentas." }
        ]
    }
];

let currentIndex = 0;
let isAnimating = false;

const sound1 = new Audio('aud/clicar.mp3');
const sound2 = new Audio('aud/clicar2.mp3');
sound1.volume = 0.1;
sound2.volume = 0.1;
let useSecondSound = false;

function playClickSound() {
    let currentSound = useSecondSound ? sound2 : sound1;
    currentSound.currentTime = 0;
    currentSound.play().catch(e => {
        console.log("Áudio aguardando interação do usuário.");
    });
    useSecondSound = !useSecondSound;
}

const selectionScreen = document.querySelector('.selection-screen');
const nameElement = document.getElementById('char-name');
const bioElement = document.getElementById('char-bio');
const mainImgElement = document.getElementById('main-img');
const ghostImgElement = document.getElementById('ghost-img');
const attributesContainer = document.getElementById('attributes-container');
const spotifyContainer = document.getElementById('spotify-container'); 
const centerPanel = document.querySelector('.center-panel');
const rightPanel = document.querySelector('.right-panel');

const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const passwordSection = document.getElementById('password-section');
const inventorySection = document.getElementById('inventory-section');
const passwordInput = document.getElementById('password-input');
const passwordError = document.getElementById('password-error');
const itemsList = document.getElementById('items-list');

const animatedBlocks = [nameElement, attributesContainer, centerPanel, rightPanel, spotifyContainer];

function renderCharacterData(index) {
    const char = characters[index];
    nameElement.textContent = char.name;
    bioElement.textContent = char.bio;
    mainImgElement.src = char.image;
    ghostImgElement.src = char.image;

    spotifyContainer.innerHTML = `
        <div class="spotify-label">Música Favorita</div>
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${char.spotifyTrack}?utm_source=generator&theme=0" width="352" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `;

    attributesContainer.innerHTML = '';
    const positions = ['hex-top', 'hex-left', 'hex-right', 'hex-bottom'];
    char.attributes.forEach((attr, i) => {
        const hexDiv = document.createElement('div');
        hexDiv.className = `hex-attribute ${positions[i]}`;
        hexDiv.innerHTML = `
            <span class="hex-label">${attr.label}</span>
            <span class="hex-value">${attr.value}</span>
        `;
        attributesContainer.appendChild(hexDiv);
    });
}

function updateCharacter(index, direction) {
    if (isAnimating) return;
    isAnimating = true;
    playClickSound();

    selectionScreen.classList.add('shake-screen');
    setTimeout(() => {
        selectionScreen.classList.remove('shake-screen');
    }, 300);

    const outClass = direction === 'right' ? 'slide-out-right' : 'slide-out-left';
    const prepareClass = direction === 'right' ? 'prepare-from-left' : 'prepare-from-right';

    animatedBlocks.forEach(el => el.classList.add(outClass));

    setTimeout(() => {
        renderCharacterData(index);
        animatedBlocks.forEach(el => {
            el.classList.remove(outClass);
            el.classList.add(prepareClass);
        });
        void nameElement.offsetWidth;
        animatedBlocks.forEach(el => el.classList.remove(prepareClass));
        setTimeout(() => {
            isAnimating = false;
        }, 300);
    }, 250);
}

function nextCharacter() {
    currentIndex = (currentIndex + 1) % characters.length;
    updateCharacter(currentIndex, 'right');
}

function prevCharacter() {
    currentIndex = (currentIndex - 1 + characters.length) % characters.length;
    updateCharacter(currentIndex, 'left');
}

function openSelectModal() {
    passwordInput.value = '';
    passwordError.textContent = '';
    modalTitle.classList.remove('hidden');
    passwordSection.classList.remove('hidden');
    inventorySection.classList.add('hidden');
    modalOverlay.classList.add('active');
    passwordInput.focus();
}

function closeSelectModal() {
    modalOverlay.classList.remove('active');
}

function verifyPassword() {
    const enteredCode = passwordInput.value.trim();
    const currentChar = characters[currentIndex];
    if (enteredCode === currentChar.code) {
        modalTitle.classList.add('hidden');
        passwordSection.classList.add('hidden');
        inventorySection.classList.remove('hidden');
        itemsList.innerHTML = '';
        currentChar.items.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.className = 'item-card';
            itemCard.innerHTML = `
                <div class="item-name">${item.name}</div>
                <div class="item-desc">${item.desc}</div>
            `;
            itemsList.appendChild(itemCard);
        });
    } else {
        passwordError.textContent = 'Código incorreto. Tente novamente.';
        passwordInput.value = '';
        passwordInput.focus();
    }
}

function downloadCharacterSheet() {
    const currentChar = characters[currentIndex];
    const link = document.createElement('a');
    link.href = currentChar.sheetImage;
    link.download = `Ficha_${currentChar.name}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

passwordInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        verifyPassword();
    }
});

document.addEventListener('keydown', (event) => {
    if (modalOverlay.classList.contains('active')) {
        if (event.key === 'Escape') {
            closeSelectModal();
        }
        return;
    }
    if (event.key === 'ArrowRight') {
        nextCharacter();
    } else if (event.key === 'ArrowLeft') {
        prevCharacter();
    }
});

renderCharacterData(currentIndex);
