/*  Auteur: Samuel Dubé
    Description: Fichier javascript pour mon portfolio personnel
*/

//Déclaration concernant tout les élements de l'interface
let UI_banner = document.querySelector("#banner");
let UI_bannerTitle = document.querySelector("#banner-title");
let UI_body = document.querySelector("body");
let UI_about = document.querySelector("#about");
// let UI_skillset = document.querySelector("#skillset-body");
let UI_carouselBtn = Array.prototype.slice.call(document.querySelectorAll(".carousel-btn"));
let UI_carousel = Array.prototype.slice.call(document.querySelectorAll(".carousel"));

// Portfolio Component
let UI_portfolioBtn = Array.prototype.slice.call(document.querySelectorAll(".portfolio-btn"));
let UI_projectDetail = Array.prototype.slice.call(document.querySelectorAll(".project-detail"));
let UI_portfolioCat = Array.prototype.slice.call(document.querySelectorAll(".cat-tab"));
let UI_portfolioBody = Array.prototype.slice.call(document.querySelectorAll(".portfolio-body"));

//Déclaration de tout les éléments qui vont être animé
let ANIM_text = Array.prototype.slice.call(document.querySelectorAll(".title-info")); 
let ANIM_bar = Array.prototype.slice.call(document.querySelectorAll(".title-border"));

//Navigation Component
let UI_navTab = Array.prototype.slice.call(document.querySelectorAll(".nav-tab"));
let UI_navTop = document.querySelector("#nav-top");
let UI_nav = document.querySelector("#nav-container");
let UI_navbtn = document.querySelector("#nav-btn");
let UI_goDownBtn = document.querySelector("#goDown-btn");
let UI_navItem = Array.prototype.slice.call(document.querySelectorAll(".nav-item"));
let UI_section = Array.prototype.slice.call(document.querySelectorAll("section"));

//Conteneur pour mes champs de compétences
let Skills= {
    framework:
    [
        {
        name: "Bootstrap 4",
        percentage: 80
        },
        {
        name: "Bootstrap 3",
        percentage: 70
        },
        {
        name: "Express",
        percentage: 45
        },
        {
        name: "Mongoose",
        percentage: 35
        },
        {
        name: "Passport",
        percentage: 35
        },
        {
        name: "Scss",
        percentage: 20
        },
        {
        name: "jQuery",
        percentage: 40
        }
    ],
    modeling: 
    [
        {
        name: "3ds Max",
        percentage: 70
        },
        {
        name: "Corona",
        percentage: 70
        },
        {
        name: "Sb Painter",
        percentage: 60
        },
        {
        name: "Blender",
        percentage: 60
        },
        {
        name: "Cycles",
        percentage: 70
        },
        {
        name: "Marmoset",
        percentage: 30
        },
        {
        name: "Crazy Bump",
        percentage: 70
        }
    ],
    programming:
    [
        {
        name: "C#",
        percentage: 60
        },
        {
        name: "Html",
        percentage: 90
        },
        {
        name: "Css",
        percentage: 80
        },
        {
        name: "Node.js",
        percentage: 45
        },
        {
        name: "Mongo DB",
        percentage: 40
        },
        {
        name: "SQL",
        percentage: 70
        },
        {
        name: "Vanilla js",
        percentage: 55
        }
    ]
};
Skills.programming.sort(function(a , b){ return b.percentage - a.percentage;});
Skills.modeling.sort(function(a , b){ return b.percentage - a.percentage;});
Skills.framework.sort(function(a , b){ return b.percentage - a.percentage;});

//Initialise la position du carousel
let carouselPosition = 0;

Main();

//Fonction Principal
function Main()
{
    AdjustElementsHeight();   
    AdjustInfoPosition();
    AnimateText();
    
    //Ajoute tout les events listeners
    UI_navItem.forEach(function(navItem){navItem.addEventListener("click", ScrollToSection)});
    UI_navbtn.addEventListener("click" , DisplayMenu);
    UI_goDownBtn.addEventListener("click" , SlideTo)
    UI_navTab.forEach(function(tab){tab.addEventListener("click" , DisplaySkill)});
    UI_portfolioBtn.forEach(function(btn){btn.addEventListener("click", DisplayPortfolio);});
    UI_projectDetail.forEach(function(portfolio){portfolio.addEventListener("click" , ClosePortfolio);});
    UI_carouselBtn.forEach(function(btn){btn.addEventListener("click", ChangeCarousel);});
    UI_portfolioCat.forEach(function(cat){cat.addEventListener("click", ChangePortfolioContent)})
    
    window.onscroll =  OnScroll;
}

//Fonction qui change le contenu du portfolio pour montrer le skill desirer
function ChangePortfolioContent(e)
{
    UI_portfolioCat.forEach(function(cat){
        cat.classList.remove("active-prog" , "active-3d");
    });
    
    if(e.target.textContent === "3d")
        e.target.classList.add("active-3d");
    else{
        e.target.classList.add("active-prog");
    }
    
    
    UI_portfolioBody.forEach(function(content){
        if(content.style.transform == "translateX(-100%)")
        {
            content.style.transform = "translateX(0%)";
        }else{
            content.style.transform = "translateX(-100%)";
        }
    });
}

//Fonction pour naviguer du menu à la sectino désirée
function ScrollToSection(e)
{
    DisplayMenu();
    UI_section.find(function(section){
        return section.id == e.target.getAttribute("data-scroll");
    }).scrollIntoView({block : "start" , behavior: "smooth"});
}

//Fonction qui s'occupe de l'interaction avec le menu
function DisplayMenu()
{
    if(UI_navbtn.children[0].classList.contains("bars"))
    {
        UI_nav.style.transform = "translateX(0%)";
        UI_navbtn.children[0].classList.remove("bars");
        UI_navbtn.children[0].classList.add("close");
        window.scrollTo(0 , 0);
        UI_body.classList.add("stop-scrolling");
    }
    else 
    {
        UI_nav.style.transform = "translateX(-100%)";
        UI_navbtn.children[0].classList.add("bars");
        UI_navbtn.children[0].classList.remove("close");
        UI_body.classList.remove("stop-scrolling");
    }
}

//Fonction qui s'occupe d'afficher le carousel et de faire défiler celui-ci 
function ChangeCarousel(e)
{
    let carousel = this.parentElement.children[0];
    let carouselImages = Array.prototype.slice.call(this.parentElement.children[0].children);
    
    NextCarouselPosition(e);
    VerifyCarouselPosition(carouselImages);
    MoveCarouselPosition(carousel);
}

//Fonction qui s'occupe de selectionner la prochaine position pour le carousel
function NextCarouselPosition(e)
{
    if(e.target.classList.contains("right-btn") || e.target.classList.contains("right"))
        carouselPosition++;
    else
        carouselPosition--;
}

//Fonction qui vérifie la position du carousel en realtion avec le nombre d'images
function VerifyCarouselPosition(carouselImages)
{
    if(carouselPosition === carouselImages.length)
        carouselPosition = 0;
    
    if(carouselPosition < 0)
        carouselPosition = carouselImages.length - 1;
}

//Fonction qui bouge le carousel pour afficher l'image suivante/précédente en fonction de carouselPosition
function MoveCarouselPosition(carouselImagesContainer)
{
    carouselImagesContainer.style.transform = "translateX(-"+carouselPosition * 100+"%)";
}

//Fonction qui affiche une boite modal avec plus d'information sur le projet selectionné
function DisplayPortfolio()
{
    UI_body.children[0].setAttribute("style" , "opacity : 0.6; z-index: 100;");
    this.parentElement.children[5].setAttribute("style" , "transform : scale(1); opacity: 1;");
}

//Fonction qui ferme le modal du portfolio quand on clique à l'éxtérieur
function ClosePortfolio(click)
{
    //Retire les coordonnées de l'éléments selectionnées
    let left = this.children[0].getBoundingClientRect().left; 
    let right = this.children[0].getBoundingClientRect().right; 
    let top = this.children[0].getBoundingClientRect().top; 
    let bottom = this.children[0].getBoundingClientRect().bottom; 
    
    //Vérifie que les coordonnées sont à l'extérieur de la fenêtre
    if(isClickOutsideBound(click, left, right, top, bottom))
    {
        this.setAttribute("style" , "transform : scale(0); opacity: 0;");   
        UI_body.children[0].setAttribute("style" , "opacity: 0; z-index: -1;");
        carouselPosition=0;
        UI_carousel.forEach(function(carousel){MoveCarouselPosition(carousel);});
    }
}

//Fonction qui vérifie que le click est à l'exterieur de l'object ciblé
function isClickOutsideBound(click , left, right, top, bottom)
{
    return ((click.clientX < left || click.clientX > right)|| (click.clientY < top || click.clientY > bottom));
}

//Fonction qui permet de scroll à différentes sections avec un bouton
function SlideTo()
{
    if(window.scrollY === 0)
        UI_about.scrollIntoView({block: "start" , behavior : "smooth"});
    else
        UI_banner.scrollIntoView({block : "start", behavior : "smooth"});
}

//Fonction qui permet d'ajuster la hauteur pour remplir l'écran
function AdjustElementsHeight()
{
    UI_banner.style.height = window.innerHeight + "px";
    UI_nav.style.height = window.innerHeight + "px";
}

//Fonction qui permet de center un élément parfaitement dans l'écran
function AdjustInfoPosition()
{
    UI_bannerTitle.style.top = window.innerHeight / 2 - UI_bannerTitle.clientHeight - UI_navTop.clientHeight + "px";
}

//Fonction qui est appeller à chaque le document est scroll
function OnScroll()
{
    RotateScrollButton();
    AnimateText();
}

//Fonction qui tourne le bouton de 180 degree en fonction de la position du scoll
function RotateScrollButton()
{
    if(window.scrollY === 0)
        UI_goDownBtn.children[0].style.transform = "rotate(0deg)";
    else
        UI_goDownBtn.children[0].style.transform = "rotate(180deg)";
}

//Fonction qui anime le titre de différentes sections
function AnimateText()
{
    for(let i = 0  ; i < ANIM_text.length ; i++){
        if((ANIM_text[i].getBoundingClientRect().top > 0) && 
           (ANIM_text[i].getBoundingClientRect().top < window.innerHeight))
        {
            ANIM_bar[i].style.height = "100%";
            setTimeout(function(){
                ANIM_text[i].style.transform = "translateX(0%)";
            } , 1000);
        }
    }
}

//Fonction qui charge la bar de talent dans le document
function LoadSkillBar()
{
    Skills.programming.forEach(function(skill){
        UI_skillset.innerHTML += `  <div class="skill">
                                        <span class="skill-name">${skill.name}</span>
                                        <div class="skill-bar">
                                            <span class="skill-bar-bg"></span>
                                        </div>
                                        <span class="skill-percentage">${skill.percentage}%</span>
                                    </div>`;
    });
}

// Fonction qui charge le pourcentage de chaque bar de talent
function LoadSkillPercentage()
{
    let skills = Array.prototype.slice.call(UI_skillset.children);
    
    if((UI_skillset.getBoundingClientRect().bottom > 0) && 
      (UI_skillset.getBoundingClientRect().bottom < window.innerHeight))
    {
    skills.forEach(function(skill){
        skill.children[1].children[0].style.paddingLeft = skill.children[2].textContent;
    });
    }
}

//Fonction qui change le contenu de la section talent
function DisplaySkill(e)
{
    UI_navTab.forEach(function(tab){tab.classList.remove("active-3d" , "active-prog" , "active-framework");})
    if(e.target.textContent === "3d")
    {
        e.target.classList.add("active-3d");
        ChangeSkillContent(Skills.modeling , "#915a5a" , "#a37676");
    }
    else if(e.target.textContent === "Programmation")
    {
        e.target.classList.add("active-prog");
        ChangeSkillContent(Skills.programming, "#57777f", "#738d94");
    }
    else if(e.target.textContent === "Framework")
    {
        e.target.classList.add("active-framework");
        ChangeSkillContent(Skills.framework, "#627f57", "#7c9473");
    }
}

//Fonction qui change et anime le contenu de la section talent 
function ChangeSkillContent(skillSelected, skillNameColor, skillBarColor)
{
    let skills = Array.prototype.slice.call(UI_skillset.children);
    for(let i = 0 ; i < skills.length ; i++ )
    {
        let skillName = skills[i].children[0];
        let skillBar = skills[i].children[1].children[0];
        let skillPercentage = skills[i].children[2];
        
        skillName.style.transform = "translateX(-100%)";
        skillBar.style.paddingLeft = "0%"
        skillName.addEventListener("transitionend" , function(){
            skillName.setAttribute("style",`background: ${skillNameColor}; translateX(0%);`);
            skillBar.style.background = skillBarColor;
            skillName.textContent = skillSelected[i].name;
            skillPercentage.textContent = skillSelected[i].percentage + "%";
            LoadSkillPercentage();
        })
    };
}
