//~~~~~~~~~~~Dependency and Declaration~~~~~~~~~~~~~~~//
let PersonnalInfo = require("./api/personnalInfoAPI.js"),
    Quality       = require("./api/qualityAPI.js"),
    Skill         = require("./api/skillAPI.js"),
    Work          = require("./api/workAPI.js");

//~~~~~~~~~~Starter Data~~~~~~~~~~//
let personnalInfoData = {
    Title: "Samuel Dubé",
    Age: 21,
    Phone: 5146886447,
    Email: "samuel_personnel@outlook.com",
    ProfilImage: "profil.jpg",
    Description: `Bien l'bonjour, je m'appel Samuel Dubé. Je suis présentement un DEC en informatique au cégep de Saint-Jean-sur-Richelieu. 
                  Je me passione pour le dévelopement Web ainsi que la création 3d. 
                  Mon fruit favori est la banane.`,
    Occupation: "Développeur Web & Artiste 3d",
    Adress: {
        City : "Sainte-Catherine",
        Province : "Quebec",
        PostalCode : "J5C 1M5",
        Country: "Canada"
    },
};
let qualityData = [
    {
    Title: "Artistique",
    Image: "brush-icon.png",
    Description: "Mes projets intégrent toujours une touche artistique bien unique." 
    },
    {
    Title: "Créatif",
    Image: "light-icon.png",
    Description: "Ma créativité est ma meilleur carte. Autant dans la résolution de problème que dans la création 3d."
    },
    {
    Title: "Apprenti",
    Image: "hat-icon.png",
    Description: "Étudiant formel en informatique et autodidacte dans le domaine de la 3d."
    },
    {
    Title: "Curieux",
    Image: "search-icon.png",
    Description: "Je suis curieux de nature. J'aime questioner le pourquoi du comment."
    }
]; 
let skillData = [
    {
    Title: "Bootstrap 4",
    Pourcentage: 80,
    Category: "framework"
    },
    {
    Title: "Bootstrap 3",
    Pourcentage: 70,
    Category: "framework"
    },
    {
    Title: "Express",
    Pourcentage: 45,
    Category: "framework"
    },
    {
    Title: "Mongoose",
    Pourcentage: 35,
    Category: "framework"
    },
    {
    Title: "Passport",
    Pourcentage: 35,
    Category: "framework"
    },
    {
    Title: "Scss",
    Pourcentage: 20,
    Category: "framework"
    },
    {
    Title: "jQuery",
    Pourcentage: 40,
    Category: "framework"
    },
    {
    Title: "3ds Max",
    Pourcentage: 70,
    Category: "modeling"
    },
    {
    Title: "Corona",
    Pourcentage: 70,
    Category: "modeling"
    },
    {
    Title: "Sb Painter",
    Pourcentage: 60,
    Category: "modeling"
    },
    {
    Title: "Blender",
    Pourcentage: 60,
    Category: "modeling"
    },
    {
    Title: "Cycles",
    Pourcentage: 70,
    Category: "modeling"
    },
    {
    Title: "Marmoset",
    Pourcentage: 30,
    Category: "modeling"
    },
    {
    Title: "Crazy Bump",
    Pourcentage: 70,
    Category: "modeling"
    },
    {
    Title: "C#",
    Pourcentage: 60,
    Category: "programming"
    },
    {
    Title: "Html",
    Pourcentage: 90,
    Category: "programming"
    },
    {
    Title: "Css",
    Pourcentage: 80,
    Category: "programming"
    },
    {
    Title: "Node.js",
    Pourcentage: 45,
    Category: "programming"
    },
    {
    Title: "Mongo DB",
    Pourcentage: 40,
    Category: "programming"
    },
    {
    Title: "SQL",
    Pourcentage: 70,
    Category: "programming"
    },
    {
    Title: "Vanilla js",
    Pourcentage: 55,
    Category: "programming"
    }
];
let workData = [
    {
    Title: "Créativa Studio",
    Images: [
        "creativa/home.jpg",
        "creativa/portfolio.jpg",
        "creativa/service.jpg",
        "creativa/contact.jpg"
        ],
    Legend: "Site Web personnel pour promouvoir mes services dans le domaine de l'architecture.",
    Description: `Site Web personnel utilisé pour faire la promotion de mes services d'artiste 3d dans le domaine de l'architecture. 
                  Trois versions ont été créer en utilisant la plateforme Wordpress.com. Celle-ci est la plus récente et la plus peaufiner.`,
    KeyFeatures: [
        "Réalisé avec Wordpress.com",
        "Premier Site Web mit en ligne"
        ]
    },
    {
    Title: "From Scratch",
    Images: [
        "fromscratch/home.jpg",
        "fromscratch/shop.jpg",
        "fromscratch/portfolio.jpg",
        "fromscratch/learning.jpg",
        "fromscratch/shop-cart.jpg"
        ],
    Legend: "Projet d'agrandissement pour ma marque créativa studio qui ne verras pas le jour.",
    Description: `Gros projet d'agrandissement pour ma marque Creativa Studio. Le projet
                  quoique prometteur sur papier ne verras pas la lumière du jour. J'ai pris cette décision après avoir mené une étude de marché auprès des firmes d'architectures.`,
    KeyFeatures: [
        "Réalisé en Php/Sql",
        "Vidéo en bannière",
        "Système pour uploader des modèles",
        "Panier d'achats fonctionnels",
        "Utilisation du framework bootstrap 3"
        ]
    },
    {
    Title: "Student Application",
    Images: [
        "student/banner1.jpg",
        "student/banner2.jpg"
        ],
    Legend: "Projet en cours, application mobile destinée aux étudiants",
    Description: `Projet personnel portant sur une application mobile d'entraide étudiante. Incorporant 
                  une approche plus libre de tuteurs/tutorés, l'application offre à un étudiant avec des difficultés de l'aide d'un confrère compétent.`,
    KeyFeatures: [
        "Réalisé en Node.js/Express/MongoDb",
        "Développement orientée Hybride",
        "Intégration de service de récompense",
        "Premier développement mobile"
        ]
    },
    {
    Title: "Cooking Blog",
    Images: [
        "cookingblog/home.jpg"
        ],
    Legend: "Blog fictif portant sur le thème de la cuisine",
    Description: "Projet personnel fictif portant sur la création d'un blog dans le thème de la cuisine.",
    KeyFeatures: [
        "Réalisé en Node.js/Express/MongoDb",
        "Système pour uploader des articles",
        "Section administrative",
        "Utilisation du framework Semantic UI"
        ]
    },
    {
    Title: "Yelp Camp",
    Images: [
        "yelpcamp/home.jpg"
        ],
    Legend: "Projet fictif portant le même concept que yelp mais pour les sites de camping",
    Description: "Projet fictif portant sur le même thème que yelp mais pour différent type de camping extérieur.",
    KeyFeatures: [
        "Réalisé en Node.js/Express/MongoDb",
        "Système d'authentification Passport",
        "Banque d'utilisateur pouvant intéragir",
        "Utilisation du framework Bootstrap 4"
        ]
    },
]

function SeedDatabase(){
    PersonnalInfo.Model.deleteMany({}, (err) => {
        if(err) console.log(err);
        
       PersonnalInfo.Model.create(personnalInfoData, (err, data) => {
            if(err) 
                console.log(err);
            else
                console.log("[-Personnal Info injected in Database-]");
       }) 
    });
    Quality.Model.deleteMany({} , (err) =>{
        if(err) console.log(err);
        
        qualityData.forEach((element) => {
            Quality.Model.create(element, (err, data) =>{
                if(err) 
                    console.log(err); 
            });
        });     
        console.log("[-Quality Data injected in Database-]");
    });
    Skill.Model.deleteMany({}, (err) => {
        if(err) console.log(err);
        
        skillData.forEach((element) => {
            Skill.Model.create(element , (err, data) =>{
                if(err)
                    console.log(err);
            });
        });
        console.log("[-Skill Data injected in Database-]");
    });
    Work.Model.deleteMany({} , (err) =>{
        if(err) console.log(err);
        
        workData.forEach((element) => {
            Work.Model.create(element, (err, data) =>{
                if(err)
                    console.log(err);
            });
        });
        console.log("[-Work Data injected in Database-]");
    });
}

//~~~~~~~~~~Exportation~~~~~~~~~//

module.exports = SeedDatabase();

