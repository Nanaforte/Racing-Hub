// ======================================================================
// menu responsivo - botao hamburguer
// ======================================================================


//procura o btn do menu no HTML e guarda-o numa variavel
const menuToggle = document.querySelector('.menu-toggle');


//procura o menu de navegacao no HTML e guarda-o numa variavel
const navMenu = document.querySelector('.nav-menu');


//quando o user clicar no btn do menu executa as acoes seguintes
menuToggle.addEventListener('click', () => {
    //add ou remove a classe "active" para mostrar ou esconder o menu
    navMenu.classList.toggle('active');
    //procura o icon que estadentro do btn do menu
    const icon = menuToggle.querySelector('i');
    //se o icon tiver as barras do menu remove-as ou adiciona-as
    icon.classList.toggle('fa-bars');
    //se o icon tiver o "X" de fechar, remove-o ou adiciona-o
    icon.classList.toggle('fa-times');
});



// ======================================================================
// modo claro e modo escuro
// ======================================================================


//procura o btn que muda o tema do site e guarda-o numa variavel
const themeToggleBtn = document.getElementById('theme-theme-toggle');


//guarda o corpo inteiro da page
const bodyElement = document.body;

//quando o user clicar no btn de mudar o tema
themeToggleBtn.addEventListener('click', () => {

    //add ou remove a classe "light-mode" para trocar entre modo escuro e claro
    bodyElement.classList.toggle('light-mode');

    //procura o icon dentro do btn do tema
    const icon = themeToggleBtn.querySelector('i');

    //verifica se o modo claro esta ativado
    if (bodyElement.classList.contains('light-mode')) {
        //troca o icon da lua pelo icon do sol
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        //se voltar ao modo escuro, troca o sol pela lua
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});



// ======================================================================
// botao para voltar para o topo da page
// ======================================================================


//procura o btn que leva o user de volta ao topo
const backToTopBtn = document.getElementById('back-to-top');

//fica a verificar sempre que o user mexe a page para cima ou para baixo
window.addEventListener('scroll', () => {

    //se o user descer mais de 300 pixels na page
    if (window.scrollY > 300) {
        //mostra o btn add a classe "show"
        backToTopBtn.classList.add('show');
    } else {
        //esconde o btn removendo a classe "show"
        backToTopBtn.classList.remove('show');
    }
});


//quando o user clicar no btn de voltar ao topo
backToTopBtn.addEventListener('click', () => {

    //faz a page subir lentamente ate ao início
    window.scrollTo({
        //define o destino do scroll como o topo da page
        top: 0,

        //faz o movimento de subida de forma suave
        behavior: 'smooth'
    });
});








// ======================================================================
// Modal CARROS/MOTAS MARCAS
// ======================================================================

const dadosMarcas = {
    "ferrari": {
        desc: "A mítica Scuderia de Maranello, conhecida pelo seu icónico vermelho paixão e o Cavallino Rampante que domina a história da F1.",
        modelos: [
            { nome: "Ferrari F40", 
                img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Ferrari_F40_at_Auto_Salon_Singen_Germany_432393386.jpg" },
            { nome: "Ferrari LaFerrari", 
                img: "https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_580,q_75,w_906/svwpfltutb7q4ezph1vb.jpg" },
            { nome: "Ferrari 458 Italia", 
                img: "https://upload.wikimedia.org/wikipedia/commons/0/04/Ferrari_458_Fort_Worth_June_2016_56_%28Ferrari%29_%28cropped-2%29.jpg" }
        ]
    },
    "mclaren": {
        desc: "Uma das equipas mais bem-sucedidas da F1 e criadora de alguns dos supercarros mais tecnológicos e desejados do mundo.",
        modelos: [
            { nome: "McLaren F1 (1992)", 
                img: "https://global.honda/en/F1/machine/1992_McLarenHondaMP47A/img/main.jpg" },
            { nome: "McLaren P1", 
                img: "https://www.razaoautomovel.com/wp-content/uploads/2019/08/McLaren-P1-XP05_925x520_acf_cropped.jpg" },
            { nome: "McLaren 720S", 
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/2018_McLaren_720S_V8_S-A_4.0.jpg/1280px-2018_McLaren_720S_V8_S-A_4.0.jpg" }
        ]
    },
    "toyota": {
        desc: "Gigante japonesa que domina os terrenos exigentes do WRC (Rally) e das 24 Horas de Le Mans com engenharia híbrida de topo.",
        modelos: [
            { nome: "Toyota Supra MK4", 
                img: "https://www.ronbrooks.co.uk/wp-content/uploads/2023/06/toyota-supra-mk4-1024x576.png" },
            { nome: "Toyota GR Yaris", 
                img: "https://scene7.toyota.eu/is/image/toyotaeurope/ogier9x_01_Principal?wid=1280&fit=fit,1&ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0" }
        ]
    },
    "nissan": {
        desc: "Famosa pela sua linhagem lendária Skyline GT-R e com uma presença gigante e incontornável na cultura mundial de modificações e drift.",
        modelos: [
            { nome: "Nissan Skyline GT-R R34", 
                img: "https://www.super-hobby.pt/zdjecia/9/6/0/55555_1692891024676.jpg" },
            { nome: "Nissan GT-R Nismo", 
                img: "https://www.razaoautomovel.com/wp-content/uploads/2014/02/2014_nissan_gt_r_nismo.jpg.webp" }
        ]
    },
    "subaru": {
        desc: "O eterno ícone azul e dourado dos ralis mundiais. Celebrizada pelos seus potentes motores Boxer de som único e tração integral AWD.",
        modelos: [
            { nome: "Subaru Impreza WRX STI", 
                img: "https://www.carscoops.com/wp-content/uploads/2021/12/Subaru-WRX-STI-Type-R-14.jpg" }
        ]
    },
    "bmw": {
        desc: "A conceituada divisão M da BMW foca-se em trazer a pura performance e dinâmica das pistas para as estradas públicas.",
        modelos: [
            { nome: "BMW M3 E30", 
                img: "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/topics/magazine-article-pool/2018/bmw-m3-e30/bmw-m3-e30-article-image-02.jpg" },
            { nome: "BMW M5 E60 V10", 
                img: "https://ireland.apollo.olxcdn.com/v1/files/psps9uj6156g2-PT/image;s=1085x814" }
        ]
    },
    "porsche": {
        desc: "Sinónimo mundial do desportivo de formato intemporal 911 e detentora de um palmarés inigualável nas competições de endurance.",
        modelos: [
            { nome: "Porsche 911 GT3 RS", 
                img: "https://images.pistonheads.com/nimg/47438/blobid0.jpg" },
            { nome: "Porsche 911 GT2 RS", 
                img: "https://quatrorodas.abril.com.br/wp-content/uploads/2017/06/p17_0577_a4_rgb-e1594826105542.jpg?quality=70&strip=info&resize=1080,565&crop=1" },
            { nome: "Porsche 911 turbo (1988)", 
                img: "https://assets.dyler.com/uploads/cars/443283/9656294/medium_7e4e2fcc-6f8e-459c-a9a4-cfa812a18718.jpg" }
        ]
    },
    "ford": {
        desc: "Desde o histórico GT40 que desafiou e venceu a Ferrari, até aos ralis modernos com o Puma, a Ford é um pilar do automobilismo.",
        modelos: [
            { nome: "Ford GT", 
                img: "https://www.topgear.com/sites/default/files/cars-car/image/2017/05/row_0410_copy.jpg?w=1280&h=720" },
            { nome: "Ford Mustang GTD", 
                img: "https://pedalcommander.com/cdn/shop/articles/Ford-Mustang-GTD_b8779962-fd69-4e66-a9d4-982add6e70ae.jpg?v=1758746811" }
        ]   
    },
    "hondacar": {
        desc: "Reconhecida mundialmente pelos seus motores rotativos VTEC de alta rotação e fornecimento de motores de topo na F1.",
        modelos: [
            { nome: "honda acura nsx", 
                img: "https://cdn.motor1.com/images/mgl/mLQPr/s1/first-generation-acura-nsx.webp" },
            { nome: "Honda Civic Type R", 
                img: "https://filintomota.s3.eu-west-3.amazonaws.com/wp-content/uploads/2019/01/Honda-civic-type-r.png" }
        ]
    },
    "mazda": {
        desc: "Inovadora e única ao triunfar nas pistas mundiais com os seus motores rotativos Wankel, com a mítica vitória do Mazda 787B em Le Mans.",
        modelos: [
            { nome: "Mazda RX-7", 
                img: "https://cdn.motor1.com/images/mgl/1Z176w/s3/1992-mazda-rx-7-fd-veilside-fortune-coupe-from-tokyo-drift.jpg" },
            { nome: "Mazda miata 1990", 
                img: "https://static0.hotcarsimages.com/wordpress/wp-content/uploads/2022/05/16129785880f365b95cbTRS_0715.jpg?w=1600&h=900&fit=crop" }
        ]
    },
    // SECÇÃO DAS MOTAS
    "yamaha": {
        desc: "Uma potência incontornável no MotoGP com a icónica YZR-M1 e famosa no mercado de rua pela fantástica superdesportiva R1.",
        modelos: [
            { nome: "Yamaha YZF-R1", 
                img: "https://global-fs.webike-cdn.net/@japan/magazine/wp-content/uploads/2024/07/yzfr1_20240729_01.jpg" },
            { nome: "Yamaha MT-09", 
                img: "https://cdn.easysite.pt/pub/16310/4444/EDN_NCAUTO_26340860-0.jpg" }
        ]
    },
    "hondamota": {
        desc: "O maior fabricante de motociclos do mundo, com domínio nas pistas e modelos icónicos de estrada, aventura e fora de estrada.",
        modelos: [
            { nome: "Honda CBR1000RR-R Fireblade", 
                img: "https://www.honda.pt/content/dam/central/motorcycles/supersports/cbr1000rr-rr-fireblade-2024/overview/xl-tile/honda-cbr1000rr-r-xl-tile-1728x972-desktop.jpg/jcr:content/renditions/fb_r.jpg" },
            { nome: "Honda Africa Twin", 
                img: "https://cdn.motor1.com/images/mgl/gZGoN/s3/2022-honda-crf1100l-africa-twin-adventure-sports---pearl-white-blue-red---king-of-the-mountain.jpg" }
        ]
    },
    "ducati": {
        desc: "A marca de Bolonha une o refinado design italiano à brutal performance, dominando por completo os mundiais de MotoGP e WorldSBK.",
        modelos: [
            { nome: "Ducati Panigale V4 R", 
                img: "https://as.sobrenet.pt/s/image/tsr/brandm/content/x1050/j3ljmv0ieady4mvzqidnkqdr4i2.jpg" }
        ]
    },
    "kawasaki": {
        desc: "Identificada instantaneamente pelo seu verde lime agressivo e pela lendária e temível família Ninja de alta performance.",
        modelos: [
            { nome: "Kawasaki Ninja H2R", 
                img: "https://images.unsplash.com/photo-1682980798344-6feac9455e66?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2F3YXNha2klMjBoMnJ8ZW58MHx8MHx8fDA%3D" },
            { nome: "Kawasaki Z900", 
                img: "https://ireland.apollo.olxcdn.com/v1/files/lbfoh0a4tmsh1-PT/image;s=2000x2667" },
        ]
    },
    "ktm": {
        desc: "Sob o lema 'Ready to Race', a construtora austríaca é a rainha absoluta do Motocross, Hard Enduro e das vitórias no Rally Dakar.",
        modelos: [
            { nome: "KTM 1290 Super Duke RR", 
                img: "https://s7g10.scene7.com/is/image/ktm/KTM_1290SDRR_LandingPage_Pic_04?wid=920&dpr=off" }
        ]
    },
    "suzuki": {
        desc: "Dona de um legado incrível com motas que redefiniram as pistas de asfalto e quebraram recordes mundiais de velocidade máxima.",
        modelos: [
            { nome: "Suzuki Hayabusa", 
                img: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Hayabusa.jpg" }
        ]
    },
    "aprilia": {
        desc: "Especialista italiana em ciclísticas de precisão cirúrgica, campeonatos de 2 tempos e enorme sucesso técnico nas Superbikes.",
        modelos: [
            { nome: "Aprilia RSV4 1100 Factory", 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjIoaexFXJgf2LQ3uOyTXJVwmKvy8FMadDfLKOge2EjN3zdgBWawDVODvy&s=10" },
            { nome: "Aprilia RS 660", 
                img: "https://gen-performance.com/cdn/shop/files/APRILIA_RS_660_-_GEN_PERFORMANCE.webp?v=1700485254&width=3840" }
        ]
    },
    "bmwmotorrad": {
        desc: "Líder absoluta no segmento de aventura com as lendárias GS de motor Boxer, e pura agressividade nas pistas com a divisão desportiva M.",
        modelos: [
            { nome: "BMW S 1000 RR", 
                img: "https://mediapool.bmwgroup.com/cache/P9/202410/P90572515/P90572515-bmw-presents-the-new-bmw-s-1000-rr-10-2024-2248px.jpg" },
            { nome: "BMW F 900 GS", 
                img: "https://www.europcarbikes.com/wp-content/uploads/2025/12/P90520397_highRes_the-new-bmw-f-900-gs-scaled.jpg" },
            { nome: "BMW S 1000 RR", 
                img: "https://www.bmw-motorrad.com.br/content/dam/bmwmotorradnsc/marketBR/bmw-motorrad_com_br/multiimages/models/tour/k-1600-gtl/K_1600_GTL_2560x1440.jpg.asset.1774862844665.jpg" }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const brandCards = document.querySelectorAll('.brand-card');
    const modal = document.getElementById('brand-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalList = document.getElementById('modal-models-list');
    const closeModalBtn = document.querySelector('.close-modal');

    brandCards.forEach(card => {
        card.addEventListener('click', () => {
            const classeMarca = card.classList[1].replace('b-', ''); 
            const dados = dadosMarcas[classeMarca];

            if (dados) {
                modalTitle.textContent = card.querySelector('span').textContent;
                modalDesc.textContent = dados.desc;

                // Limpa os veículos antigos da modal
                modalList.innerHTML = "";

                // Constrói os blocos dinâmicos com Nome + Imagem de cada veículo
                dados.modelos.forEach(modelo => {
                    // Cria o contentor do bloco
                    const block = document.createElement('div');
                    block.className = 'model-item-block';

                    // Cria o título com o nome do carro/mota
                    const titleEl = document.createElement('span');
                    titleEl.className = 'model-item-title';
                    titleEl.textContent = modelo.nome;

                    // Cria a tag da imagem
                    const imgEl = document.createElement('img');
                    imgEl.className = 'model-item-image';
                    imgEl.src = modelo.img;
                    imgEl.alt = modelo.nome;
                    imgEl.loading = "lazy"; // Melhora a velocidade de carregamento

                    // Monta o bloco inserindo o texto e a imagem lá dentro
                    block.appendChild(titleEl);
                    block.appendChild(imgEl);

                    // Adiciona o bloco final à área de scroll da modal
                    modalList.appendChild(block);
                });

                modal.style.display = 'flex';
                
                // Faz o scroll voltar automaticamente para o topo ao abrir uma nova marca
                document.querySelector('.modal-body-layout').scrollTop = 0;
            }
        });
    });

    closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
});




// ======================================================================
// Modais SUPERCROSS
// ======================================================================

const dadosSupercross = {
    "sx-kawasaki": {
        desc: "A Monster Energy Kawasaki é uma das equipas mais vitoriosas dos estádios, conhecida pelo seu icónico verde agressivo e motos preparadas ao pormenor pela Pro Circuit.",
        modelos: [
            { nome: "Jason Anderson #21 (Piloto 450SX)", 
                img: "https://cdn.sanity.io/images/8oyzogbt/production/1e6677813474c2ac82cf00c8013af5d2009954c2-1200x722.jpg" },
            { nome: "Kawasaki KX450SR Factory Edition", 
                img: "https://www.dirtrider.com/resizer/nrM60bER7Rm3B7iZgSwgxtdgms0=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/F3T7HT7BG5FZFKTU3I6QVICNI4.jpg" }
        ]
    },
    "sx-honda": {
        desc: "A equipa oficial Honda HRC (American Honda) carrega um legado lendário com a sua emblemática cor vermelha, dominando as pistas com precisão e técnica impecável.",
        modelos: [
            { nome: "Jett Lawrence #1 (Campeão 450SX)", 
                img: "https://www.mxparts.com.br/blog/img/imagens_colunas/foto_3170.jpg" },
            { nome: "Honda CRF450R Works Edition", 
                img: "https://motocrossactionmag.com/wp-content/uploads/2500/06/2021-HONDA-CRF450-SHOOTOUT-15WEe-scaled.jpg" }
        ]
    },
    "sx-ktm": {
        desc: "Sob a filosofia 'Ready to Race', a Red Bull KTM Factory Racing trouxe a mentalidade europeia para os EUA, revolucionando o Supercross com chassis ultraleves.",
        modelos: [
            { nome: "Chase Sexton #4 (Piloto 450SX)", 
                img: "https://pt.alpinestars.com/cdn/shop/files/SEXTON5.png?height=1644&v=1751615546" },
            { nome: "KTM 450 SX-F Factory Edition", 
                img: "https://www.dirtrider.com/resizer/qFRNqLxqpgv56MUzggfxhlRMV74=/1037x0/filters:focal(681x528:691x538)/cloudfront-us-east-1.images.arcpublishing.com/octane/KVHZNNEVCZHBRBBECAFO4RGCVA.jpg" }
        ]
    },
    "sx-yamaha": {
        desc: "A Monster Energy Star Racing Yamaha transformou-se numa autêntica máquina de vencer campeonatos nos últimos anos, desenvolvendo motores incrivelmente potentes.",
        modelos: [
            { nome: "Eli Tomac #3 (Lenda do Supercross)", 
                img: "https://www.yamaha-racing.com.br/wp-content/uploads/2024/10/capa-Eli-Tomac-WSX-Foto-FIM-WSX.jpg" },
            { nome: "Yamaha YZ450F Factory Team", 
                img: "https://dirtbiketest.com/wp-content/uploads/2023/04/Stew23YZ450F_01.png" }
        ]
    },
    "sx-husqvarna": {
        desc: "A Rockstar Energy Husqvarna combina a herança da marca sueca com a alta tecnologia de fábrica do grupo, destacando-se pela sobriedade e eficácia.",
        modelos: [
            { nome: "Malcolm Stewart #27", 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKQUZI8D_cctrlt4TyBanw0G9X6ImnTNJ2f5uRSR97JKiKP190PTVisFae&s=10" },
            { nome: "Husqvarna FC 450 Rockstar Edition", 
                img: "https://i.ytimg.com/vi/eR2lXWRWeBo/maxresdefault.jpg" }
        ]
    },
    "sx-suzuki": {
        desc: "A Twisted Tea Suzuki (H.E.P. Motorsports) mantém bem viva a tradição amarela das RM-Z, famosas pela sua agilidade superior em curvas fechadas de estádios.",
        modelos: [
            { nome: "Ken Roczen #94 (Piloto Estrela Suzuki)", 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTblco59E5S-fzMLQFXCHyJlgsJTICST5KDDdhE3Mj5vGD2kWo66U51CDv5&s=10" },
            { nome: "Suzuki RM-Z450 Factory Stage", 
                img: "https://dirtbiketest.com/wp-content/uploads/2019/04/OF_7439.jpg" }
        ]
    },
    "sx-triumph": {
        desc: "A Triumph Racing é a mais recente e revolucionária adição ao AMA Supercross, trazendo a lendária engenharia britânica para o deserto americano com a sua nova TF 250-X.",
        modelos: [
            { nome: "Triumph TF 250-X (A nova moto oficial)", 
                img: "https://media.triumphmotorcycles.co.uk/image/upload/t_/c_limit,w_3840/f_auto/q_auto:eco/v1749200471/TF_250X_MY26_0079_zxlbzl?_a=BAVMn6ID0" }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const brandCards = document.querySelectorAll('.brand-card');
    const modal = document.getElementById('brand-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalList = document.getElementById('modal-models-list');
    const closeModalBtn = document.querySelector('.close-modal');

    // Se não existirem cartões de marcas ou modal nesta página específica, interrompe o script para evitar erros
    if (!modal || brandCards.length === 0) return;

    brandCards.forEach(card => {
        card.addEventListener('click', () => {
            // Extrai a classe exata (ex: b-sx-kawasaki -> sx-kawasaki)
            const classeMarca = card.classList[1].replace('b-', '');
            const dados = dadosSupercross[classeMarca];

            if (dados) {
                modalTitle.textContent = card.querySelector('span').textContent;
                modalDesc.textContent = dados.desc;
                modalList.innerHTML = ""; // Limpa os dados anteriores

                // Gera dinamicamente cada bloco com Nome + Imagem
                dados.modelos.forEach(item => {
                    const block = document.createElement('div');
                    block.className = 'model-item-block';

                    const titleEl = document.createElement('span');
                    titleEl.className = 'model-item-title';
                    titleEl.textContent = item.nome;

                    const imgEl = document.createElement('img');
                    imgEl.className = 'model-item-image';
                    imgEl.src = item.img;
                    imgEl.alt = item.nome;
                    imgEl.loading = "lazy";

                    block.appendChild(titleEl);
                    block.appendChild(imgEl);
                    modalList.appendChild(block);
                });

                modal.style.display = 'flex';
                document.querySelector('.modal-body-layout').scrollTop = 0; // Reseta o scroll para o topo
            }
        });
    });

    closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
});




// ======================================================================
// Modais MX 
// ======================================================================

const dadosMX = {
    "mx-ktm": {
        desc: "Sob o lema 'Ready to Race', a construtora austríaca KTM é uma força dominante no Mundial de MXGP, colecionando títulos mundiais com a sua tecnologia de ponta e quadros em aço cromo-molibdénio.",
        modelos: [
            { nome: "Jeffrey Herlings #84 (Lenda do MXGP)", 
                img: "https://motomundo.com.br/wp-content/uploads/2018/05/foto-destaque.001-113.jpeg" },
            { nome: "KTM 450 SX-F Factory Edition", 
                img: "https://www.dirtrider.com/resizer/qFRNqLxqpgv56MUzggfxhlRMV74=/1037x0/filters:focal(681x528:691x538)/cloudfront-us-east-1.images.arcpublishing.com/octane/KVHZNNEVCZHBRBBECAFO4RGCVA.jpg" }
        ]
    },
    "mx-yamaha": {
        desc: "A Yamaha Monster Energy Factory Team destaca-se pelas suas fiáveis e potentes YZ450F e YZ250F, célebres pela sua admissão invertida única e excelente controlo de tração.",
        modelos: [
            { nome: "Yamaha YZ450F", 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEX6Jh7mYaz81BqDsz7CArMhAf8a5YOA0QcF3BrO36W1m9uhDft_p7uq4&s=10" }
        ]
    },
    "mx-honda": {
        desc: "A mítica equipa Team HRC traz a precisão japonesa para a terra do MXGP, conquistando campeonatos com a agressiva e ágil família CRF vermelha.",
        modelos: [
            { nome: "Honda CRF450R", 
                img: "https://frasermotorcycles.com.au/cdn/shop/files/CRF450R_MY25_00445_rt_1400x.jpg?v=1779931550" }
        ]
    },
    "mx-kawasaki": {
        desc: "O 'Verde Lima' da Kawasaki Racing Team representa potência bruta e foco total nos holeshots, lutando sempre pelas posições cimeiras do pódio mundial.",
        modelos: [
            { nome: "Kawasaki KX450-SR", 
                img: "https://kawasaki-global-admin.com/ContentStorage/CKM/ProductTopFeature/1412/532cd23b-2741-41e0-aaa1-cc142d8c2dde.jpg?w=800" }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const brandCards = document.querySelectorAll('.brand-card');
    const modal = document.getElementById('brand-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalList = document.getElementById('modal-models-list');
    const closeModalBtn = document.querySelector('.close-modal');

    if (!modal || brandCards.length === 0) return;

    brandCards.forEach(card => {
        card.addEventListener('click', () => {
            // Se a classe for 'brand-card b-mx-ktm', o replace limpa 'b-' restando 'mx-ktm'
            const classeMarca = card.classList[1].replace('b-', '');
            
            // Procura primeiro no novo objeto do MX, se não encontrar tenta os outros
            const dados = dadosMX[classeMarca] || dadosMarcas[classeMarca] || (typeof dadosSupercross !== 'undefined' ? dadosSupercross[classeMarca] : null);

            if (dados) {
                modalTitle.textContent = card.querySelector('span').textContent;
                modalDesc.textContent = dados.desc;
                modalList.innerHTML = ""; // Limpa os dados anteriores

                dados.modelos.forEach(item => {
                    const block = document.createElement('div');
                    block.className = 'model-item-block';

                    const titleEl = document.createElement('span');
                    titleEl.className = 'model-item-title';
                    titleEl.textContent = item.nome;

                    const imgEl = document.createElement('img');
                    imgEl.className = 'model-item-image';
                    imgEl.src = item.img;
                    imgEl.alt = item.nome;
                    imgEl.loading = "lazy";

                    block.appendChild(titleEl);
                    block.appendChild(imgEl);
                    modalList.appendChild(block);
                });

                modal.style.display = 'flex';
                const bodyLayout = document.querySelector('.modal-body-layout');
                if(bodyLayout) bodyLayout.scrollTop = 0;
            }
        });
    });

    if(closeModalBtn) {
        closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
    }
    window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
});






// ======================================================================
// Modais ENDURO
// ======================================================================

const dadosEnduro = {
    "enduro-ktm": {
        desc: "A KTM Factory Racing é a rainha absoluta do Hard Enduro e do EnduroGP, famosa pelo desenvolvimento dos motores a 2 tempos com injeção TBI e pelos chassis ágeis que vencem o Erzbergrodeo.",
        modelos: [
            { nome: "Manuel Lettenbichler (Campeão do Mundo de Hard Enduro)", 
                img: "https://press.ktm.com/Content/774872/2509d9b4-732a-47e8-b679-648b633206ac/1200/2400/.jpg" },
            { nome: "KTM 300 EXC EXC", 
                img: "https://lfsport.com/wp-content/uploads/2025/09/KTM-500-EXC-F.png" }
        ]
    },
    "enduro-yamaha": {
        desc: "A Yamaha mantém forte tradição no Enduro com a lendária gama WR-F, oferecendo uma entrega de potência linear fantástica e suspensões KYB consideradas referência mundial.",
        modelos: [
            { nome: "Yamaha WR450F", 
                img: "https://www.cyclenews.com/wp-content/uploads/2018/09/2019-Yamaha-WR450F.jpg" }
        ]
    },
    "enduro-honda": {
        desc: "Através da parceria com a RedMoto em Itália, as motos de motocross CRF da Honda são transformadas em autênticas armas de competição de Enduro, dominando classes do EnduroGP.",
        modelos: [
            { nome: "Steve Holcombe (Piloto Oficial Honda RedMoto)", 
                img: "https://enduro21.com/images/2025/march/steve-holcombe-5-minutes-honda-crf300rx/steve-holcombe_honda-redmoto-2025_00269.jpg" }
        ]
    },
    "enduro-sherco": {
        desc: "A marca francesa Sherco conquistou o respeito mundial no Hard Enduro e nos ralis, criando motos compactas com excelente tração e motores a 2 tempos extremamente elásticos.",
        modelos: [
            { nome: "Mario Roman (Estrela de Hard Enduro)", 
                img: "https://enduro21.com/images/2026/january/mario-roman-mr74-racing-team/2026_mr74-2.jpg" }
        ]
    },
    "enduro-beta": {
        desc: "Fabricadas em Itália, as motos Beta RR são sinónimo de pura performance em Enduro Tradicional, acumulando múltiplos títulos mundiais consecutivos na categoria rainha com motores de fabrico próprio.",
        modelos: [
            { nome: "Beta RR 300 Racing 2-Tempos", 
                img: "https://www.betamotor.com/wp-content/uploads/2025/10/Betamotor-Enduro-RR-RACE-300-2T-media-slider-1920x1080-08-1.jpg" }
        ]
    },
    "enduro-husqvarna": {
        desc: "A Husqvarna combina o design premium nórdico com a engenharia de ponta do grupo, oferecendo sub-chassis em material composto e pinças de travão de alta sensibilidade para trilhos técnicos.",
        modelos: [
            { nome: "Husqvarna TE 300 Pro", 
                img: "https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_DET_Husqvarna-Enduro-TE-300-PRO-MY26-Motor_%23SALL_%23AEPI_%23V1.jpg" }
        ]
    },
    "enduro-gasgas": {
        desc: "Sob o lema 'Get On The Gas', a GASGAS traz a herança espanhola reconfigurada com alta tecnologia, focando-se num estilo jovem, divertido e competitivo para os trilhos mais exigentes.",
        modelos: [
            { nome: "GASGAS EC 300 TBI", 
                img: "https://enduro21.com/images/2024/may-2024/wade-young-pro-bike-gasgas-ec300/wade_young_pro_bike_hewc-2024-rnd1-valleys-hard-enduro_1915.jpg" }
        ]
    }
};

// Gestor Unificado e Inteligente de Modais Dinâmicas

document.addEventListener('DOMContentLoaded', () => {
    const brandCards = document.querySelectorAll('.brand-card');
    const modal = document.getElementById('brand-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalList = document.getElementById('modal-models-list');
    const closeModalBtn = document.querySelector('.close-modal');

    // Impede que o script falte ou dê erro caso a página atual não tenha estes elementos
    if (!modal || brandCards.length === 0) return;

    brandCards.forEach(card => {
        card.addEventListener('click', () => {
            // Se a classe for 'brand-card b-enduro-ktm', o replace limpa 'b-' e sobra 'enduro-ktm'
            const classeMarca = card.classList[1].replace('b-', '');
            
            // Procura dinamicamente em qual objeto de dados a classe existe (Enduro, MX, Supercross ou Gerais)
            let dados = null;
            if (typeof dadosEnduro !== 'undefined' && dadosEnduro[classeMarca]) dados = dadosEnduro[classeMarca];
            else if (typeof dadosMX !== 'undefined' && dadosMX[classeMarca]) dados = dadosMX[classeMarca];
            else if (typeof dadosSupercross !== 'undefined' && dadosSupercross[classeMarca]) dados = dadosSupercross[classeMarca];
            else if (typeof dadosMarcas !== 'undefined' && dadosMarcas[classeMarca]) dados = dadosMarcas[classeMarca];

            if (dados) {
                // Altera dinamicamente os textos principais do cabeçalho da modal
                modalTitle.textContent = card.querySelector('span').textContent;
                modalDesc.textContent = dados.desc;
                modalList.innerHTML = ""; // Limpa os dados anteriores da modal

                // Cria os blocos visuais dinâmicos para cada modelo/piloto
                dados.modelos.forEach(item => {
                    const block = document.createElement('div');
                    block.className = 'model-item-block';

                    const titleEl = document.createElement('span');
                    titleEl.className = 'model-item-title';
                    titleEl.textContent = item.nome;

                    const imgEl = document.createElement('img');
                    imgEl.className = 'model-item-image';
                    imgEl.src = item.img;
                    imgEl.alt = item.nome;
                    imgEl.loading = "lazy";

                    block.appendChild(titleEl);
                    block.appendChild(imgEl);
                    modalList.appendChild(block);
                });

                modal.style.display = 'flex';
                
                // Reseta a barra de scroll interna para o topo automaticamente
                const bodyLayout = document.querySelector('.modal-body-layout');
                if (bodyLayout) bodyLayout.scrollTop = 0;
            }
        });
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
    }
    window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
});







// ======================================================================
// Modais FREESTYLE
// ======================================================================

const dadosFMX = {
    "fmx-yz250": {
        desc: "A Yamaha YZ250 a 2 tempos é indiscutivelmente a mota mais lendária e utilizada na história do Freestyle Motocross. Graças ao seu motor a dois tempos, oferece uma entrega de potência explosiva instantânea e uma leveza incrível de chassis que facilita manobras complexas de rotação como Backflips e Body Varials.",
        modelos: [
            { nome: "Yamaha YZ250 (Configuração FMX de Competição)", 
                img: "https://cdn2.yamaha-motor.eu/prod/product-assets/2027/YZ250LC/2027-Yamaha-YZ250LC-EU-Icon_Blue-Action-001-03.jpg" }
        ]
    },
    "fmx-yz450f": {
        desc: "Para arenas gigantescas ou eventos como os Nitro World Games com rampas do tipo Mega Ramp, a YZ450F fornece o torque massivo e estabilidade necessários. A sua tração a quatro tempos garante uma aproximação consistente à rampa, ideal para alcançar alturas extremas com segurança.",
        modelos: [
            { nome: "Yamaha YZ450F (Alta Tração e Estabilidade)", 
                img: "https://cdn2.yamaha-motor.eu/prod/product-assets/2026/YZ450F/2026-Yamaha-YZ450F-EU-Icon_Blue-Action-001-03.jpg" }
        ]
    },
    "fmx-ktm250": {
        desc: "A gama de 250cc da KTM destaca-se pelos seus componentes premium e pelo quadro em aço cromo-molibdénio, que oferece flexibilidade e absorção de impactos inigualáveis nas receções mais violentas do Freestyle moderno.",
        modelos: [
            { nome: "KTM 250 SX Performance Edition", 
                img: "https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_DET_KTM-250-sxf-factory-edition-desktop-action-new3_%23SALL_%23AEPI_%23V1.png" }
        ]
    },
    "fmx-honda450": {
        desc: "A Honda CRF450R é adorada por pilotos que priorizam precisão cirúrgica e ergonomia estreita. Com modificações na carenagem para criar furos de aderência (grab holes), torna-se uma extensão perfeita do corpo do piloto em truques como o Superman ou Hart Attack.",
        modelos: [
            { nome: "Honda CRF450R Supercross/FMX Setup", 
                img: "https://www.keeferinctesting.com/wp-content/uploads/2023/09/al5_6294-1024x683.jpg" }
        ]
    },
    "fmx-ktm350": {
        desc: "A KTM 350 SX-F representa o equilíbrio perfeito procurado por muitos atletas de FMX: oferece a agilidade e leveza de rotação aérea típica de uma 250cc combinada com a potência e entrega de binário contínua de uma 450cc.",
        modelos: [
            { nome: "KTM 350 SX-F Factory Style", 
                img: "https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_DET_KTM-motocross-350-sxf-my27-click-into-action_%23SALL_%23AEPI_%23V1.png" },
            {img: "https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_DET_KTM-motocross-350-sxf-my27-calm-under-fire_%23SALL_%23AEPI_%23V1.png" },
            {img: "https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_DET_KTM-motocross-350-sxf-my27-start-strong_%23SALL_%23AEPI_%23V1.png" }
            ]
    }
};


// Atualização do Listener de Eventos das Modais (Compatível com FMX)
document.addEventListener('DOMContentLoaded', () => {
    const brandCards = document.querySelectorAll('.brand-card');
    const modal = document.getElementById('brand-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalList = document.getElementById('modal-models-list');
    const closeModalBtn = document.querySelector('.close-modal');

    if (!modal || brandCards.length === 0) return;

    brandCards.forEach(card => {
        card.addEventListener('click', () => {
            const classeMarca = card.classList[1].replace('b-', '');
            
            // Verifica dinamicamente se a mota pertence ao dicionário do FMX ou aos anteriores
            let dados = null;
            if (typeof dadosFMX !== 'undefined' && dadosFMX[classeMarca]) dados = dadosFMX[classeMarca];
            else if (typeof dadosEnduro !== 'undefined' && dadosEnduro[classeMarca]) dados = dadosEnduro[classeMarca];
            else if (typeof dadosMX !== 'undefined' && dadosMX[classeMarca]) dados = dadosMX[classeMarca];
            else if (typeof dadosMarcas !== 'undefined' && dadosMarcas[classeMarca]) dados = dadosMarcas[classeMarca];

            if (dados) {
                modalTitle.textContent = card.querySelector('span').textContent;
                modalDesc.textContent = dados.desc;
                modalList.innerHTML = ""; 

                dados.modelos.forEach(item => {
                    const block = document.createElement('div');
                    block.className = 'model-item-block';

                    const titleEl = document.createElement('span');
                    titleEl.className = 'model-item-title';
                    titleEl.textContent = item.nome;

                    const imgEl = document.createElement('img');
                    imgEl.className = 'model-item-image';
                    imgEl.src = item.img;
                    imgEl.alt = item.nome;
                    imgEl.loading = "lazy";

                    block.appendChild(titleEl);
                    block.appendChild(imgEl);
                    modalList.appendChild(block);
                });

                modal.style.display = 'flex';
                const bodyLayout = document.querySelector('.modal-body-layout');
                if (bodyLayout) bodyLayout.scrollTop = 0;
            }
        });
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
    }
    window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
});










// ======================================================================
// Dicionário de Dados para os Pilotos F1 (Com Imagem de Bandeira)
// ======================================================================

const dadosF1 = {
    "f1-hamilton": {
        idade: 41,
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
        equipas: "McLaren, Mercedes, Ferrari",
        desc: "Heptacampeão mundial e estatisticamente o piloto mais bem-sucedido de todos os tempos. Conquistou 6 dos seus 7 títulos mundiais com as Flechas de Prata, quebrando recordes de vitórias e pole positions.",
        modelos: [{ nome: "Lewis Hamilton na Mercedes (Era de Ouro)", img: "https://e0.365dm.com/21/06/2048x1152/skysports-lewis-hamilton-f1_5431399.jpg?20210629144756" }]
    },
    "f1-fangio": {
        idade: "Falecido (Aos 84 anos)",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/AR.svg",
        equipas: "Alfa Romeo, Maserati, Mercedes, Ferrari",
        desc: "O Maestro. Um dos pioneiros da F1 que alcançou o bicampeonato mundial pela Mercedes nos primórdios do desporto (1954 e 1955), demonstrando uma perícia cirúrgica inacreditável ao volante.",
        modelos: [{ nome: "Juan Manuel Fangio pilotando o W196", img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/KlingK-MB-W196-1976.jpg" }]
    },
    "f1-schumacher": {
        idade: 57,
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
        equipas: "Jordan, Benetton, Ferrari, Mercedes",
        desc: "O Kaiser. Após retirar-se, regressou espetacularmente à F1 in 2010 para liderar o projeto de reestruturação das Flechas de Prata modernas, aplicando toda a sua mentoria na evolução técnica da equipa.",
        modelos: [{ nome: "Michael Schumacher no seu regresso pela Mercedes", img: "https://s2-ge.glbimg.com/BezdO18f4z3xifeEQUJv4uCnzaU=/0x0:2944x2199/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2018/k/W/mWlOvfQuq2cU5Z0lidpw/gettyimages-145308226.jpg" }]
    },
    "f1-rosberg": {
        idade: 40,
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
        equipas: "Williams, Mercedes",
        desc: "O homem que levou o seu corpo e mente ao limite extremo para bater Lewis Hamilton e sagrar-se Campeão Mundial de 2016 pelas Flechas de Prata, anunciando a sua retirada dias depois.",
        modelos: [{ nome: "Nico Rosberg celebrando no W07", img: "https://cdn-8.motorsport.com/static/img/amp/400000/450000/454000/454100/454158/s6_63137/f1-british-gp-2014-nico-rosberg-mercedes-amg-f1-w05.jpg" }]
    },
    "f1-russell": {
        idade: 28,
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
        equipas: "Williams, Mercedes",
        desc: "Promovido da academia de jovens pilotos da escuderia, George Russell assumiu o papel de pilar principal da equipa, colecionando vitórias espetaculares e pole positions consistentes.",
        modelos: [{ nome: "George Russell em foco nos bastidores", img: "https://hips.hearstapps.com/hmg-prod/images/george-russell-of-great-britain-and-mercedeslooks-on-during-news-photo-1766508756.pjpeg?crop=1.00xw:0.847xh;0,0.0181xh&resize=640:*" }]
    },
    "f1-antonelli": {
        idade: 19,
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg",
        equipas: "Mercedes (Estreia oficial)",
        desc: "Visto como o prodígio italiano da nova geração, Andrea Kimi Antonelli quebrou barreiras e etapas de promoção júnior devido à sua velocidade pura assustadora, assumindo o assento mais desejado da grelha.",
        modelos: [{ nome: "Kimi Antonelli preparado para o cockpit", img: "https://ichef.bbci.co.uk/ace/standard/1008/cpsprodpb/a522/live/5762c960-ddac-11ef-93a2-45736c5a96a4.jpg" }]
    },
    "f1-schumacher-ferrari": {
        idade: 57,
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
        equipas: "Jordan, Benetton, Ferrari, Mercedes",
        desc: "O maior ícone da história moderna da Scuderia. Sob a sua liderança em pista, a Ferrari quebrou um jejum histórico de 21 anos e estabeleceu um domínio avassalador que resultou em 5 títulos consecutivos de pilotos.",
        modelos: [{ nome: "Michael Schumacher dominando no F2004", img: "https://cdn.ferrari.com/cms/network/media/img/resize/5e25dbc3a80ad1366dcc22c0-ferrari-histoty-2004-michael-schumacher-desk?width=1080" }]
    },
    "f1-lauda": {
        idade: "Falecido (Aos 70 anos)",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/AT.svg",
        equipas: "March, BRM, Ferrari, Brabham, McLaren",
        desc: "Uma lenda de pura resiliência. Niki Lauda conquistou dois campeonatos do mundo pela Ferrari nos anos 70 e imortalizou-se ao regressar aos cockpits apenas seis semanas após o seu gravíssimo acidente em Nürburgring.",
        modelos: [{ nome: "Niki Lauda e o mítico capacete vermelho", img: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/C426/production/_107041205_5585fd58-12c2-493b-8516-fe3c588d42c4.jpg" }]
    },
    "f1-ascari": {
        idade: "Falecido (Aos 36 anos)",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg",
        equipas: "Ferrari, Maserati, Lancia",
        desc: "Alberto Ascari foi o primeiro grande herói italiano da Scuderia, vencendo de forma consecutiva os campeonatos do mundo de 1952 e 1953, detendo até hoje marcas impressionantes de vitórias seguidas.",
        modelos: [{ nome: "Alberto Ascari no GP da Bélgica em 1952", img: "https://cdn.shopify.com/s/files/1/0035/9877/8435/files/Alberto_Ascari_1952_Belgian_Grand_Prix_2048x2048.jpg?v=1751650280" }]
    },
    "f1-villeneuve": {
        idade: "Falecido (Aos 32 anos)",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/CA.svg",
        equipas: "McLaren, Ferrari",
        desc: "O epítome da audácia e controlo mecânico. Apesar de não ter conquistado um campeonato mundial, a sua condução destemida e coração gigante conquistaram diretamente a admiração pessoal de Enzo Ferrari.",
        modelos: [{ nome: "Gilles Villeneuve no limite da aderência", img: "https://rossoautomobili.com/cdn/shop/articles/Gilles-Villeneuve_90d93f2a-bd62-462c-942e-857f5be2e098.jpg?v=1751651565" }]
    },
    "f1-leclerc": {
        idade: 28,
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/MC.svg",
        equipas: "Sauber, Ferrari",
        desc: "O 'Il Predestinato'. Formado na Ferrari Driver Academy, Charles Leclerc carrega nos ombros as esperanças dos Tifosi com a sua velocidade supersónica em qualificação e vitórias memoráveis em Monza.",
        modelos: [{ nome: "Charles Leclerc defendendo as cores de Maranello", img: "https://images.rr.pt/250727-r13-belgio-dp-fb5-8357-c3e935e1-3868-4134-8093-96676dcec64b2144c7a4defaultlarge_1024.jpg" }]
    },
    "f1-hamilton-ferrari": {
        idade: 41,
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
        equipas: "McLaren, Mercedes, Ferrari",
        desc: "O capítulo mais aguardado e bombástico do desporto motorizado contemporâneo. Lewis Hamilton junta-se à equipa do Cavallino Rampante com o objetivo máximo de procurar o seu oitavo título mundial.",
        modelos: [{ nome: "Lewis Hamilton na sua nova etapa a vermelho", img: "https://e0.365dm.com/26/06/1600x900/skysports-lewis-hamilton-ferrari_7281173.jpg?20260623185013" }]
    },
    "f1-senna": {
        idade: "Falecido (Aos 34 anos)",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg",
        equipas: "Toleman, Lotus, McLaren, Williams",
        desc: "O Rei de Mónaco. Considerado um dos pilotos mais rápidos e influentes da história da F1, conquistou o tricampeonato mundial (1988, 1990 e 1991) pela McLaren, sendo lendário pelo seu domínio à chuva e determinação implacável.",
        modelos: [{ nome: "Ayrton Senna pilotando o MP4/4", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsCyr_HuGRZ12o_uwhPAncTLpCXSIX5wltq7ZFW5whOBJSO0z4V7bk70&s=10" }]    
    },
    "f1-mika": {
        idade: "57 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/FI.svg",
        equipas: "Lotus, McLaren",
        desc: "O Finlandês Voador. Conhecido pela sua rivalidade histórica com Michael Schumacher, conquistou o bicampeonato mundial pela McLaren (1998 e 1999) com uma velocidade pura impressionante e ultrapassagens inesquecíveis.",
        modelos: [{ nome: "Mika Häkkinen pilotando o MP4/13", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTADv-S6cpas-YshPMq0hi0mYZKlmiEyAcJE8iu2Jwixysm58zjnSaEfrrM&s=10" }]
    },
    "f1-jameshunt": {
        idade: "Falecido (Aos 45 anos)",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
        equipas: "Hesketh, McLaren, Wolf",
        desc: "The Shunt. Uma das personalidades mais rebeldes e carismáticas da F1, conquistou o campeonato mundial de 1976 pela McLaren após uma rivalidade lendária e intensa com Niki Lauda.",
        modelos: [{ nome: "James Hunt pilotando o M23", 
        img: "dhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwkz5I5czeHhfxx5iA9NOJ_4YUIeRP7ZbqoWkt2N6AFSmW3JU6qHKnJm-R&s=10" }]
    },
    "f1-norris": {
        idade: "26 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
        equipas: "McLaren",
        desc: "Um dos talentos mais brilhantes e populares da grelha atual. Destaca-se pela sua consistência impressionante, velocidade pura em qualificação e por liderar o ressurgimento da McLaren rumo às vitórias.",
        modelos: [{ nome: "Lando Norris pilotando o MCL38", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrzDkKJfa4rFllk6xWtKST5t9StsM4JMp5eCzHTWIvNX5EbdguVR-NOE&s=10" }]
    },
    "f1-piastri": {
        idade: "25 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg",
        equipas: "McLaren",
        desc: "Calmo, frio e incrivelmente talentoso. Teve uma das estreias mais impressionantes dos últimos anos e rapidamente se afirmou como um vencedor de corridas, exibindo uma maturidade tática fora do comum.",
        modelos: [{ nome: "Oscar Piastri pilotando o MCL38", 
        img: "https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2024/09/21140143/oscar-piastri-mclaren-mcl38-f1-2024-singapore-grand-prix-marina-bay.jpg" }]
    },
"f1-max": {
        idade: "28 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/NL.svg",
        equipas: "Red Bull Racing",
        desc: "Um fenómeno de agressividade e velocidade pura. Tornou-se o mais jovem vencedor da história da F1 e estabeleceu um domínio avassalador na era do efeito solo, quebrando recordes com a sua mentalidade implacável focada na vitória.",
        modelos: [{ nome: "Max Verstappen pilotando o RB20", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFIqdG8rmlFOiInt2rpw8CTN9cxnA1etmUl2obEVKpZYGipkYWQTAEUdwQ&s=10" }]
    },
    "f1-vettel": {
        idade: "39 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
        equipas: "Red Bull / Ferrari / Aston Martin",
        desc: "Tetracampeão mundial consecutivo e uma lenda viva do desporto. Conhecido pela sua precisão cirúrgica ao liderar corridas desde a pole position, além de se ter tornado uma das vozes mais respeitadas no paddock em questões sociais e ambientais.",
        modelos: [{ nome: "Sebastian Vettel pilotando o RB9", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxdG0BEr8JysvZPe_5dXBBHtPH7lZc2Dr1pGKyG8eriIQMlWa-cIPKH3M&s=10" }]
    },
    "f1-hadjar": {
        idade: "21 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg",
        equipas: "Racing Bulls / Red Bull (Junior Team)",
        desc: "Uma das promessas mais explosivas do programa de jovens pilotos da Red Bull. Destaca-se pela sua condução arrojada, ultrapassagens no limite e um temperamento altamente competitivo que o catapultou das fórmulas de promoção para a F1.",
        modelos: [{ nome: "Isack Hadjar em testes de Fórmula 1", 
        img: "https://www.f1mania.net/wp-content/uploads/2026/01/isack-hadjar_redbull-barcelona2026.jpg" }]
    },
    "f1-webber": {
        idade: "49 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg",
        equipas: "Red Bull Racing / Williams / Jaguar",
        desc: "Um guerreiro das pistas conhecido pela sua frontalidade e determinação férrea. Foi peça fundamental nos primeiros títulos de construtores da Red Bull, protagonizando duelos intensos e vitórias marcantes em circuitos clássicos como Mónaco e Silverstone.",
        modelos: [{ nome: "Mark Webber pilotando o RB6", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiBN0rGZAp4xfiN5V0jRC7x2hzYxoL-B6h8WD33SKaXJsttRzcnlBEkAM&s=10" }]
    },
    "f1-ocon": {
        idade: "29 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg",
        equipas: "Alpine / Force India / Haas",
        desc: "Conhecido pela sua consistência e combatividade feroz em pista. O piloto francês, que alcançou uma vitória memorável na Hungria, destaca-se como um competidor resiliente no meio do pelotão, sempre focado em extrair o máximo do seu monolugar.",
        modelos: [{ nome: "Esteban Ocon em ação na Fórmula 1", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr9W5JN8Wm-SDH5WPe0QuAFS2kIEBvAwuUSdMJVACvwGNk3BEFyiBiFz19&s=10" }]
    },
    "f1-alonso": {
        idade: "44 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg",
        equipas: "Renault / Ferrari / McLaren / Aston Martin",
        desc: "Bicampeão mundial e um dos pilotos mais completos e longevos da história do automobilismo. Famoso pela sua leitura de corrida genial, largadas agressivas e capacidade ímpar de extrair performance extrema de qualquer carro.",
        modelos: [{ nome: "Fernando Alonso pilotando o AMR24", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbMiuxUmR3laJMUtKqDSvzjtcWCk9HiebnTVXKT5PjI5UDCpIlHwZ6e4Sm&s=10" }]
    },
    "f1-gasly": {
        idade: "30 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg",
        equipas: "AlphaTauri / Red Bull / Alpine",
        desc: "Veloz, focado e dotado de uma resiliência mental impressionante. Vencedor do GP de Itália de 2020, o francês consolidou o seu estatuto na grelha como um líder de equipa maduro, capaz de entregar pódios e liderar o desenvolvimento técnico.",
        modelos: [{ nome: "Pierre Gasly pilotando o Alpine A524", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZR_GPXfunmkjup2gZVOsLuCUGfala2ZeAS1tucovKI-9FUsQYL55lVY4H&s=10" }]
    },
    "f1-colapinto": {
        idade: "23 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/AR.svg",
        equipas: "Williams / Alpine",
        desc: "O novo orgulho da Argentina na categoria rainha. Impressionou o paddock ao saltar da F2 diretamente para os pontos com a Williams e, graças à sua condução destemida e carisma, garantiu a continuidade na grelha pela Alpine.",
        modelos: [{ nome: "Franco Colapinto em pista na Alpine", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLYTGLJlg-ElvE1lbC63jKZID2rYdHUiZyHN04GdXaXrM02j3texsFFNJO&s=10" }]
    },
    "f1-tsunoda": {
        idade: "26 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg",
        equipas: "Racing Bulls / AlphaTauri",
        desc: "Conhecido pela sua paixão explosiva via rádio e por uma evolução técnica notável. O piloto japonês consolidou-se como o líder natural da equipa de Faenza, combinando uma velocidade bruta impressionante com uma maturidade competitiva cada vez maior.",
        modelos: [{ nome: "Yuki Tsunoda em pista", 
        img: "https://www.f1mania.net/wp-content/uploads/2025/12/XPB_1391605_HiRes.jpeg" }]
    },
    "f1-hadjar": {
        idade: "21 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg",
        equipas: "Racing Bulls / Red Bull (Junior Team)",
        desc: "Uma das promessas mais explosivas do programa de jovens pilotos da Red Bull. Destaca-se pela sua condução arrojada, ultrapassagens no limite e um temperamento altamente competitivo que o catapultou das fórmulas de promoção para o topo do automobilismo.",
        modelos: [{ nome: "Isack Hadjar em testes de Fórmula 1", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR64YhpMhARz_6cRXibsWMsUOt_A1vQULsVx--jYfGTnzLlEKGE4OC0EoMn&s=10" }]
    },
    "f1-lawson": {
        idade: "24 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/NZ.svg",
        equipas: "Racing Bulls / AlphaTauri",
        desc: "O destemido talento da Nova Zelândia. Entrou na categoria rainha a impressionar logo nas primeiras oportunidades como substituto e afirmou-se a tempo inteiro na grelha graças ao seu estilo de condução aguerrido, foco sob pressão e frieza nos duelos roda com roda.",
        modelos: [{ nome: "Liam Lawson pilotando o monolugar da equipa", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTVargKSwzjL7k09doFUIkLOhji61gQS59dB2S-iNV1ygGdgW7RnHa14&s=10" }]
    },
    "f1-lindblad": {
        idade: "18 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
        equipas: "Red Bull Junior Team",
        desc: "Um dos mais jovens e brilhantes prodígios do Red Bull Junior Team. Com uma ascensão meteórica nas categorias de formação (como a F3), destaca-se pela sua maturidade precoce em pista, consistência impressionante em corrida e velocidade natural que atraiu os olhos do paddock.",
        modelos: [{ nome: "Arvid Lindblad com as cores da Red Bull", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOknYesXHh83lnTqMVikZqZmeG6whIIPZ7Ud2xdXm9h2Ou6dVMQLLe1BwG&s=10" }]
    },
    "f1-magnussen": {
        idade: "33 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/DK.svg",
        equipas: "McLaren / Renault / Haas",
        desc: "Um competidor nato conhecido pelo seu estilo de condução intransigente e agressivo em pista. O piloto dinamarquês acumulou momentos marcantes na F1, incluindo um pódio na estreia e uma pole position histórica em Interlagos.",
        modelos: [{ nome: "Kevin Magnussen em pista", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJcSdo-f8bMwYvw6PWIkWVqDUDgHMJ-RoGL9RLs8H-_pIDFodhWmf4jYc&s=10" }]
    },
    "f1-grosjean": {
        idade: "40 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg",
        equipas: "Lotus / Haas / Renault",
        desc: "Um piloto incrivelmente veloz que conquistou múltiplos pódios ao longo da sua carreira. Protagonizou um dos salvamentos mais impressionantes da história moderna do automobilismo e deixou uma marca indelével pela sua resiliência e paixão pelas corridas.",
        modelos: [{ nome: "Romain Grosjean competindo na F1", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiOPhJR8OrC-MijX9KSt48nO76G6MhYASs1noZRhEJAUgjqk59DJb5hGA&s=10" }]
    },
    "f1-nico": {
        idade: "38 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
        equipas: "Williams / Force India / Renault / Haas / Sauber",
        desc: "Um dos pilotos mais respeitados e consistentes do pelotão. O experiente piloto alemão destaca-se pela sua precisão técnica milimétrica, capacidade impressionante em sessões de qualificação e valiosa leitura tática no desenvolvimento de monolugares.",
        modelos: [{ nome: "Nico Hülkenberg ao volante", 
        img: "https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2022/12/01114604/haas-nico-hulkenberg-abu-dhabi-test-planet-f1.jpg" }]
    },
    "f1-ocon": {
        idade: "29 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg",
        equipas: "Alpine / Force India / Haas / Manor",
        desc: "Conhecido pela sua consistência e combatividade feroz em pista. O piloto francês, que alcançou uma vitória memorável na Hungria, destaca-se como um competidor resiliente no meio do pelotão, sempre focado em extrair o máximo do seu monolugar.",
        modelos: [{ nome: "Esteban Ocon em ação na Fórmula 1", 
        img: "https://grandepremio.com/br/wp-content/uploads/2026/06/f1-2026-barcelona-catalunha-treinos-livre-haas-esteban-ocon-01-1-1200x800.jpg" }]
    },
    "f1-oliver": {
        idade: "21 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
        equipas: "Ferrari / Haas",
        desc: "Um talento britânico brilhante que chocou o paddock ao estrear-se com pontos pela Ferrari em Jidá com apenas 18 anos. Destaca-se pela sua maturidade impressionante sob pressão, velocidade natural refinada e capacidade de adaptação imediata.",
        modelos: [{ nome: "Oliver Bearman pilotando na F1", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROvwlf2NhDo1B729NGo66XFV_0sNGDYHBOHRJBVFawjuWsyJFFpsuewhk&s=10" }]
    },
    "f1-jones": {
        idade: "79 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg",
        equipas: "Williams / Arrows / Haas Lola / Shadow",
        desc: "O primeiro campeão mundial da Williams e uma das figuras mais duras e respeitadas da F1. Conhecido pelo seu estilo de condução implacável, força física impressionante e frontalidade absoluta, dominou a temporada de 1980 com uma determinação de ferro.",
        modelos: [{ nome: "Alan Jones pilotando o histórico Williams FW07", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1gF6KOnMTt44SxJodPFZNR8l39zOdwvQSlyByKfwN2l2_hjk4yKDq60E&s=10" }]
    },
    "f1-rosberg": {
        idade: "41 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
        equipas: "Mercedes / Williams",
        desc: "Campeão mundial de 2016 conhecido pela sua inteligência tática, dedicação obsessiva ao detalhe e precisão cirúrgica. Protagonizou uma das rivalidades mais intensas da história moderna da F1, retirando-se no topo absoluto do desporto após conquistar o título.",
        modelos: [{ nome: "Nico Rosberg pilotando o Mercedes W07", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIDRW3ye64V3TPBuSj3_BStc5iA1B7nwZSVPLXd6bSrhOqjwDWG7-5Bs&s=10" }]
    },
    "f1-piquet": {
        idade: "73 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg",
        equipas: "Brabham / Williams / Lotus / Benetton",
        desc: "Um dos pilotos mais geniais e astutos da história da F1. O tricampeão mundial brasileiro era famoso não só pela sua velocidade pura e ultrapassagens antológicas, mas também pelo seu conhecimento técnico profundo e capacidade incomparável de acertar e desenvolver carros.",
        modelos: [{ nome: "Nelson Piquet ao volante do Brabham BT52", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo6ahz3UKSnqp4zzMnkDZ8PIu5YOEn6dn6-PrrH-SdFjM8PO46pq6Sq4&s=10" }]
    },
    "f1-mansell": {
        idade: "72 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
        equipas: "Williams / Ferrari / Lotus / McLaren",
        desc: "Apelidado de 'O Leão' pelos exigentes adeptos italianos devido à sua coragem indomável e estilo de condução ultra-agressivo. Protagonizou duelos históricos na era de ouro da F1 e dominou de forma avassaladora a temporada de 1992 para conquistar o seu merecido título mundial.",
        modelos: [{ nome: "Nigel Mansell pilotando o icónico Williams FW14B", 
        img: "https://cdn.sanity.io/images/fnx611yr/productionv2/f7e68adfc5348f864c9d6358519890d6322a81ec-4088x2299.jpg?w=1920&auto=format" }]
    },
    "f1-prost": {
        idade: "71 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg",
        equipas: "McLaren / Ferrari / Renault / Williams",
        desc: "Apelidado de 'O Professor' devido à sua abordagem cerebral, precisão cirúrgica e maestria tática nas corridas. O tetracampeão mundial francês marcou uma era dourada do desporto através de uma das maiores e mais intensas rivalidades de sempre da história da Fórmula 1.",
        modelos: [{ nome: "Alain Prost pilotando", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm-RoETyq8SpDlx8rA2XqsQ6ZBxPy6N1Yt_uc4Vy5b2xXUZdpUt71m0Co&s=10" }]
    },
    "f1-hill": {
        idade: "65 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
        equipas: "Williams / Arrows / Jordan / Brabham",
        desc: "Filho do lendário Graham Hill, superou uma enorme pressão para escrever o seu próprio nome na história ao sagrar-se campeão mundial em 1996. Conhecido pela sua integridade, persistência e classe em pista, protagonizou batalhas inesquecíveis na década de 90.",
        modelos: [{ nome: "Damon Hill pilotando o Williams FW18", 
        img: "https://i.ytimg.com/vi/f4sSeF7jVHQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD9JKcFdtYutE6OUq0BPmEYuYYPUw" }]
    },
    "f1-villeneuve": {
        idade: "55 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/CA.svg",
        equipas: "Williams / BAR / Renault / Sauber",
        desc: "Campeão mundial de 1997, conhecido pela sua personalidade irreverente, estilo destemido e determinação implacável. Conquistou o título numa batalha psicológica e em pista memorável contra Michael Schumacher, afirmando-se como um dos grandes nomes dos anos 90.",
        modelos: [{ nome: "Jacques Villeneuve pilotando o Williams FW19", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJURabUPI6pBaXcZddJyushZ6bJOn-q58dA7FAnHpTRPLfGu1BDKp8XJU&s=10" }]
    },
    "f1-albon": {
        idade: "30 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/TH.svg",
        equipas: "Toro Rosso / Red Bull / Williams",
        desc: "Um piloto extremamente técnico, resiliente e mestre em extrair exibições defensivas heroicas de pneus desgastados. Após um início atribulado no programa da Red Bull, reinventou-se na Williams, assumindo o papel de líder absoluto da escuderia britânica.",
        modelos: [{ nome: "Alex Albon pilotando o monolugar da Williams", 
        img: "https://www.williamsf1.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffnx611yr%2Fproductionv2%2Fafadd0537d538f17862f434d2bda8875f58d0833-4088x2300.jpg%3Fw%3D1920%26h%3D1080%26auto%3Dformat&w=3840&q=75&dpl=dpl_CieesD6RCvPPv8WavZifQDqcXjBj" }]
    },
    "f1-sainz": {
        idade: "31 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg",
        equipas: "Toro Rosso / Renault / McLaren / Ferrari / Williams",
        desc: "Apelidado de 'Operador Suave' pela sua inteligência estratégica genial, precisão cirúrgica em corrida e um conhecimento técnico apurado que o torna quase um engenheiro dentro do cockpit. Um vencedor de Grandes Prémios provado, conhecido pela sua frieza e consistência sob pressão.",
        modelos: [{ nome: "Carlos Sainz em ação em pista", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC3lX9LxuUzjGhs7_9uk-ywljgfRKS33QYfcxUl1B19LiccVpw_qBNHko&s=10" }]
    },
    "f1-nuvolari": {
        idade: "Falecido (viveria 133 anos)",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg",
        equipas: "Alfa Romeo / Maserati / Auto Union / Ferrari",
        desc: "Considerado por Ferdinand Porsche como 'o maior piloto do passado, do presente e do futuro'. Uma lenda pré-Fórmula 1 que redefiniu os limites do controlo de um automóvel com a sua técnica de slide em curva e coragem quase sobre-humana.",
        modelos: [{ nome: "Tazio Nuvolari a domar o seu monolugar", 
        img: "https://cdn.aquelamaquina.pt/images/2016-07/img_944x629$2016_07_26_17_57_52_5430.jpg" }]
    },
    "f1-rosemeyer": {
        idade: "Falecido (viveria 116 anos)",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
        equipas: "Auto Union",
        desc: "Um talento meteorítico e destemido dos anos 30. Sem qualquer experiência prévia em carros de corrida, saltou das motas diretamente para os temíveis monstros de motor central da Auto Union, dominando-os como nenhum outro piloto da sua era.",
        modelos: [{ nome: "Bernd Rosemeyer num teste de velocidade", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGYkdOKK9KH682s1ky_fIdBpWm_bx9JWLHAHQqE20bUlfpcevkW5Q258fU&s=10" }]
    },
    "f1-nico": {
        idade: "41 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
        equipas: "Mercedes / Williams",
        desc: "Campeão mundial de 2016 conhecido pela sua inteligência tática, dedicação obsessiva ao detalhe e precisão cirúrgica. Protagonizou uma das rivalidades mais intensas da história moderna da F1, retirando-se no topo absoluto do desporto após conquistar o título.",
        modelos: [{ nome: "Nico Rosberg pilotando o Mercedes W07", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6V_yPmdJD82K5syoi8W5Q-YOsVvzckAyxzZuHwIsEGO9Qbn-sbeqTRc&s=10" }]
    },
    "f1-bortotelo": {
        idade: "21 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg",
        equipas: "Sauber / Audi F1 Team / McLaren (Academy)",
        desc: "Uma das maiores promessas do automobilismo brasileiro moderno. Conquistou campeonatos logo na sua estreia nas categorias de acesso à F1 através de uma consistência incrível, maturidade tática precoce e uma velocidade pura impressionante.",
        modelos: [{ nome: "Gabriel Bortoleto em pista focado", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRTwwGdpS5MV7U_68P3u_lGlUedKb_dD19jjUtAFuZ1YZvy5x_YHkasNw&s=10" }]
    },
    "f1-vettel": {
        idade: "39 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
        equipas: "BMW Sauber / Toro Rosso / Red Bull / Ferrari / Aston Martin",
        desc: "Tetracampeão mundial consecutivo e um dos pilotos mais bem-sucedidos da história da F1. Conhecido pela sua precisão cirúrgica na liderança, conhecimento profundo da história do desporto e uma paixão inigualável que marcou a era de ouro da Red Bull.",
        modelos: [{ nome: "Sebastian Vettel celebrando a vitória", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtNRp5yrc4ZUATMkAD251ge_A_lOB4usNdM0LbstMXiNrcIpVic9KHjDU&s=10" }]
    },
    "f1-salvadori": {
        idade: "Falecido (viveria 104 anos)",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
        equipas: "Cooper / BRM / Aston Martin / Connaught / Vanwall",
        desc: "Um dos grandes nomes do automobilismo britânico dos anos 50 e 60. Alcançou pódios na Fórmula 1 e gravou o seu nome na história ao vencer as 24 Horas de Le Mans de 1959 pela Aston Martin, destacando-se pela sua versatilidade ao volante.",
        modelos: [{ nome: "Roy Salvadori com o monolugar clássico", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXLnfSyequ0QB9U7cS-pNxVnVRhX7ZO08DaWym0j8usL5qd8YgrH4GYFu&s=10" }]
    },
    "f1-alonso": {
        idade: "44 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg",
        equipas: "Minardi / Renault / McLaren / Ferrari / Alpine / Aston Martin",
        desc: "Bicampeão mundial e uma lenda viva dotada de uma longevidade e fome de vitória sem precedentes. O piloto espanhol é mestre na leitura de corrida, famoso pela sua pilotagem ultra-agressiva e capacidade de extrair desempenhos milagrosos de qualquer carro.",
        modelos: [{ nome: "Fernando Alonso em ação em pista", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4l4rAUaS1hcawx_umm_tdE8_5oL_ai6F11G4VqwgbUdQUYbdLFKUtns&s=10" }]
    },
    "f1-stroll": {
        idade: "27 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/CA.svg",
        equipas: "Williams / Racing Point / Aston Martin",
        desc: "Um piloto com momentos de brilho inegável, especialmente em condições de chuva intensa e partidas relâmpago. Conta com pódios e uma pole position no currículo, consolidando a sua presença na grelha ao serviço do ambicioso projeto da Aston Martin.",
        modelos: [{ nome: "Lance Stroll pilotando o Aston Martin", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjhw897FKMmBJTnns-vfP5fmeTHIRb188TqacBWlyE3lVeeW_c3gE5sAC&s=10" }]
    },
    "f1-perez": {
        idade: "36 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/MX.svg",
        equipas: "Sauber / McLaren / Force India / Racing Point / Red Bull",
        desc: "Apelidado de 'Rei das Ruas' e conhecido como um dos melhores gestores de pneus da era moderna. O piloto mexicano construiu uma carreira sólida baseada em recuperações fantásticas e pódios inesperados, afirmando-se como uma peça-chave no pelotão da frente.",
        modelos: [{ nome: "Sergio Pérez em pista", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf_u-GtK1I5DOsu8JnCh4g03NI6EXoK-VDKKB3t2N5fmML8cZe7RsqdbA&s=10" }]
    },
    "f1-bottas": {
        idade: "36 anos",
        bandeiraUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/FI.svg",
        equipas: "Williams / Mercedes / Alfa Romeo / Sauber",
        desc: "Um piloto com uma velocidade pura formidável em qualificação e um excelente espírito de equipa. Teve um papel crucial no domínio de construtores da Mercedes com múltiplas vitórias e, fora de pista, tornou-se uma das personalidades mais autênticas e acarinhadas do paddock.",
        modelos: [{ nome: "Valtteri Bottas ao volante", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSiRN0oa3V3Ak_nEOQAstXSIRLLbYBF6l0PZVqBDzhW1z92KMd7K68qNg&s=10" }]
    }
};


// Lógica de Ativação Atualizada para Imagens de Bandeiras
document.addEventListener('DOMContentLoaded', () => {
    const brandCards = document.querySelectorAll('.brand-card');
    const modal = document.getElementById('brand-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalList = document.getElementById('modal-models-list');
    const closeModalBtn = document.querySelector('.close-modal');

    // Mapeamento dos elementos de texto e da imagem da bandeira
    const modalAge = document.getElementById('modal-age');
    const modalTeams = document.getElementById('modal-teams');
    const modalFlagImg = document.getElementById('modal-flag-img');

    if (!modal || brandCards.length === 0) return;

    brandCards.forEach(card => {
        card.addEventListener('click', () => {
            const classeMarca = card.classList[1].replace('b-', '');
            
            let dados = null;
            if (typeof dadosF1 !== 'undefined' && dadosF1[classeMarca]) dados = dadosF1[classeMarca];
            else if (typeof dadosFMX !== 'undefined' && dadosFMX[classeMarca]) dados = dadosFMX[classeMarca];
            else if (typeof dadosEnduro !== 'undefined' && dadosEnduro[classeMarca]) dados = dadosEnduro[classeMarca];
            else if (typeof dadosMX !== 'undefined' && dadosMX[classeMarca]) dados = dadosMX[classeMarca];

            if (dados) {
                modalTitle.textContent = card.querySelector('span').textContent;
                modalDesc.textContent = dados.desc;
                modalList.innerHTML = "";

                // Gestão da Imagem da Bandeira (Apenas se o dado existir, senão esconde)
                if (modalFlagImg) {
                    if (dados.bandeiraUrl) {
                        modalFlagImg.src = dados.bandeiraUrl;
                        modalFlagImg.style.display = 'inline-block';
                    } else {
                        modalFlagImg.style.display = 'none';
                    }
                }

                // Injeção dos dados de Idade e Equipas
                if (modalAge) modalAge.textContent = dados.idade || '-';
                if (modalTeams) modalTeams.textContent = dados.equipas || '-';

                // Desenha as imagens principais do piloto
                dados.modelos.forEach(item => {
                    const block = document.createElement('div');
                    block.className = 'model-item-block';

                    const titleEl = document.createElement('span');
                    titleEl.className = 'model-item-title';
                    titleEl.textContent = item.nome;

                    const imgEl = document.createElement('img');
                    imgEl.className = 'model-item-image';
                    imgEl.src = item.img;
                    imgEl.alt = item.nome;
                    imgEl.loading = "lazy";

                    block.appendChild(titleEl);
                    block.appendChild(imgEl);
                    modalList.appendChild(block);
                });

                modal.style.display = 'flex';
                const bodyLayout = document.querySelector('.modal-body-layout');
                if (bodyLayout) bodyLayout.scrollTop = 0;
            }
        });
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
    }
    window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
});









