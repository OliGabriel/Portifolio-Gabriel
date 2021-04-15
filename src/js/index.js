function englishText() {
    let aboutMeH1 = document.querySelector('#about-me h1')
    let aboutMeText = document.querySelector('.me')
    let commentText = document.querySelector('.comment p')
    let commentH6 = document.querySelector('.comment h6')
    let interest = document.querySelector('.interest')

    let cardsH1 = document.querySelector('#skills h1')
    let cardsLi1 = document.querySelector('#cards > div:nth-child(3) > ul > li:nth-child(1)')
    let cardsLi2 = document.querySelector('#cards > div:nth-child(3) > ul > li:nth-child(2)')
    let cardsLi3 = document.querySelector('#cards > div:nth-child(3) > ul > li:nth-child(3)')

    aboutMeH1.innerHTML = "ABOUT ME"
    aboutMeText.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Hey there! I'm glad to see you here! I'm just a young guy seeking for personal and professional improvement. Currently I am at forth semester of <b>Information Systems at UFRPE</b>. In my free time, I like to watch movies, study, listen to random musics and watch Rupaul's Drag Race whit my boyfried and cute dogs on Instagram."
    interest.innerHTML =  "&nbsp;&nbsp;&nbsp;&nbsp;I also like to use my time to discover new areas and talents which would help me to develop my future projects. At the moment, I'm learning more about <b>Mobile Development</b> with Flutter, which is a great framework due to its ability of building an aplication that works both on Android as iOS with a single source code. Besides that, I am making progress with some web projects focused on the <b>Front-End</b> part. Another area that fascinates me a lot is project management because I love to work on group, understand the client needs and motivate my fellow project teamates."
    
    document.querySelector('#banner nav .nav-link:nth-child(1) a').innerHTML = "About me"
    document.querySelector('#banner nav .nav-link:nth-child(2) a').innerHTML = "Skills"
   
   
    /* MENU TOGGLE */ 
    document.querySelector('#menu-container > nav > a:nth-child(2)').innerHTML = "ABOUT ME"
    document.querySelector('#menu-container > nav > a:nth-child(3)').innerHTML = "SKILLS"
   

    document.querySelector('#banner > h4').innerHTML = "Social Media"

    if(screen.width <= 600) {
        document.querySelector('#banner > p').innerHTML = "<a href='#about-me' id='change-language'>Mudar para Português</a>."
    } else {
        document.querySelector('#banner > p').innerHTML = "Não fala inglês? Experimente em <a href='#about-me' id='change-language'>Português</a>."
    }
    document.querySelector('#change-language').onclick = (e) => {
        e.preventDefault()
        if(window.language === 'pt-br') {
            window.language = 'en'
            englishText()
        } else if(language === 'en') {
            window.language = 'pt-br'
            portugueseText()
        }
        console.log(window.language)
    }

    cardsH1.innerHTML = "SKILLS"
    cardsLi1.innerHTML = "Visual Design"
    cardsLi2.innerHTML = "Usability"
    cardsLi3.innerHTML = "Figma"

    projectsH1.innerHTML = "PROJECTS"
    document.querySelectorAll('.project-info > a > p').forEach((info) => {
        info.innerHTML = "SEE ON GITHUB"
    })



    document.querySelector('#footer-ilustration > h2').innerHTML = "Let\'s talk? Mail me or text me in any social media! ;)"

    document.querySelector('#rodape > h5').innerHTML = "Handcrafted by me © Gabriel Oliveira"
}

function portugueseText() {
    let aboutMeH1 = document.querySelector('#about-me h1')
    let aboutMeText = document.querySelector('.me')
    let commentText = document.querySelector('.comment p')
    let commentH6 = document.querySelector('.comment h6')
    let interest = document.querySelector('.interest')

    let cardsH1 = document.querySelector('#skills h1')
    let cardsLi1 = document.querySelector('#cards > div:nth-child(3) > ul > li:nth-child(1)')
    let cardsLi2 = document.querySelector('#cards > div:nth-child(3) > ul > li:nth-child(2)')
    let cardsLi3 = document.querySelector('#cards > div:nth-child(3) > ul > li:nth-child(3)')



    document.querySelector('#banner nav .nav-link:nth-child(1) a').innerHTML = "Sobre mim"
    document.querySelector('#banner nav .nav-link:nth-child(2) a').innerHTML = "Habilidades"
    

    /* MENU TOGGLE */
    document.querySelector('#menu-container > nav > a:nth-child(2)').innerHTML = "SOBRE MIM"
    document.querySelector('#menu-container > nav > a:nth-child(3)').innerHTML = "HABILIDADES"
    

    document.querySelector('#banner > h4').innerHTML = "Redes Sociais"

    if(screen.width <= 600) {
        document.querySelector('#banner > p').innerHTML = "<a href='#about-me' id='change-language'>Switch to English</a>."   
    } else {
        document.querySelector('#banner > p').innerHTML = "Not your language? Switch to <a href='#about-me' id='change-language'>English</a>."   
    }

    document.querySelector('#change-language').onclick = (e) => {
        e.preventDefault()
        if(window.language === 'pt-br') {
            window.language = 'en'
            englishText()
        } else if(language === 'en') {
            window.language = 'pt-br'
            portugueseText()
        }
        console.log(window.language)
    }

    aboutMeH1.innerHTML = "SOBRE MIM"
    aboutMeText.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Prazer! Pode me chamar de Gabriek. Sou um jovem em busca de evolução pessoal e profissional. Atualmente sou discente do 4° período do curso de <b>Sistemas de Informação na UFRPE</b>. Nos tempos livres, gosto de acompanhar coisas sobre filmes, estudar, ouvir música e ver Rupaul's Drag Race com meu namorado  e ver vídeos de cachorro no Instagram."
    interest.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Tenho usado meu tempo para descobrir novos talentos e tecnologias que possam me ajudar no desenvolvimento de projetos futuros. No momento, tenho dedicado meus estudos para a parte de <b>Desenvolvimento Mobile</b>, usando Flutter como ferramenta principal para criar aplicações híbridas (que funcionam tanto em Android quanto em IOS), mas também toco projetos web, tendo um foco maior na parte de <b>Front-End</b>.  Outra área que tem me encantado bastante é a que tanje o gerenciamento de projetos de software, pois sou fascinado em trabalhar em equipe, lidar com clientes e motivar pessoas."
                
    cardsH1.innerHTML = "HABILIDADES"
    cardsLi1.innerHTML = "Design de Interfaces"
    cardsLi2.innerHTML = "Usabilidade"
    cardsLi3.innerHTML = "Figma"

    projectsH1.innerHTML = "PROJETOS"
    document.querySelectorAll('.project-info > a > p').forEach((info) => {
        info.innerHTML = "VER REPOSITÓRIO"
    })


    document.querySelector('#footer-ilustration > h2').innerHTML = "Vamos conversar? Me chame em alguma rede social! ;)"
    document.querySelector('#rodape > h5').innerHTML = "Feito por mim © Gabriel"
}

function buttonOnClick() {
    /* Captura a linguagem do botão escolhido na tela inicial e faz animações acontecerem. */
    window.previousOrientation = screen.orientation.type
    document.querySelectorAll('button').forEach((button) => {
        button.onclick = () => {
            let initial = document.querySelector('#initial')
            
            
            Array.from(initial.children).forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('sumir')
                }, 200 * index)
            })
    
            setTimeout(() => {
                document.querySelector('html').style.overflowY = "visible"
                document.querySelector('#page').style.animation = "up 1.5s"

                if(screen.orientation.type !== "portrait-primary") {
                    document.querySelector('#banner').style.left = "0" 
                    document.querySelector('#banner').style.bottom = "0"
                    document.querySelector('#banner').style.position = "fixed"
                }

                document.querySelector("#initial").style.display = "none" 
                
            }, 1600);

            
            window.language = button.value

            if(window.language == 'pt-br') {
                portugueseText()

            } else if (window.language == 'en') {
                englishText()
            }

            // Confirmando que uma linguagem foi escolhida
            window.languageChose = true
        }

    })

}

function hoverLink() {
    /* Efeito do hover dos links do banner. */
    document.querySelectorAll(".nav-link > a").forEach(link => {
        link.onmouseenter = () => {
            link.nextElementSibling.style.transform = "translateX(0px)"
        }
    })

    document.querySelectorAll('.nav-link').forEach(div => {
        div.onmouseout = () => {
            div.lastElementChild.style.transform = "translateX(-100px)"
        }
    })
}

function toggleAdder() {
    /* Função para abrir e fechar o menu toggle */
    toggleCont++
    if(toggleCont % 2 === 1) {
        $('#menu-container').css({"transform": "translate3d(0, 0, 0)", "opacity": "1", "position": "fixed", "visibility" : "visible"})
    } else {
        $('#menu-container').css({"transform": "translate3d(100px, 0, 0)", "opacity": "0", "visibility" : "hidden"})
    }
}

function orientationChange() {
    /* Função que verifica a troca de orientação da tela. */
    const event = "onorientationchange" in window ? "orientationchange" : "resize"
    window.addEventListener(event, () => {
        if(window.languageChose && window.previousOrientation != screen.orientation.type) {
            // A função só será executada caso o usuário tenha escolhido uma linguagem no botão inicial
            const banner = document.querySelector('#banner')

            if(screen.orientation.type == "portrait-primary") {
                banner.style.position = "absolute"
            } else if(screen.orientation.type == "landscape-primary") {
                banner.style.position = "fixed"
            } else {
                console.log('not detected')
            }

            window.previousOrientation = screen.orientation.type

        }
        
    })
}

$('#menu-container > nav > a').click(function(e) {
    toggleAdder();
})

$('#menu-toggle > p').click(function(e) {
    e.preventDefault();
    toggleAdder();
})


/*
$('nav a').click(function(e) {
    e.preventDefault();
    let id = $(this).attr('href'); // retorna o id para onde vai o link
    let targetOffset = document.querySelector(id).offsetTop
    $('html, body').animate({
      scrollTop: targetOffset
    }, 800);
  })
*/
let toggleCont = 0

if(!window.language) {
    window.language = 'pt-br'
    portugueseText()
}

buttonOnClick()
hoverLink()
orientationChange()    