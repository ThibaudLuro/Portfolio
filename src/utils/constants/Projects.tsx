import { IProject } from "../types";

export const projects: IProject[] = [
    {
        name: "YourNight",
        category: "technical",
        description: "Application mobile de gestion de soirées",
        technologies: ["React Native", "NodeJS", "Base de données"],
        illustrations: ["img/projects/YourNight/WebSite.png", "img/projects/YourNight/Playlist.png", "img/projects/YourNight/Supplies.png", "img/projects/YourNight/Refunds.png"],
        icon: "img/projectsIcon/YourNight.svg",
        link: "https://www.yournight.net/",
        explanation: [
            {
                element: "Contexte",
                content: `
                    En tant qu'étudiant, il m'arrive de participer à et d'organiser des soirées entre amis. Lors de la préparation de ces soirées, un problème revenait souvent : Nous ne savions pas quoi amener, et une fois que chacun avait acheté ce qu'il voulait, il fallait que nous consacrions du temps à définir le montant que chacun devait aux autres.
                    <br/><br/>
                    La question qui s’est posée à un moment donné a été : Comment faire pour <b>faciliter et fluidifier l’organisation de nos soirées</b> ?
                    <br/><br/>
                    C’est à ce moment que j'ai conceptualisé YourNight. Cette <b>application mobile</b> est née de cette nécessité de rationaliser le processus de préparation des soirées en permettant une <b>gestion collective des achats</b> et la création collaborative d'une <b>playlist musicale</b>. L'objectif était de transformer les préparatifs souvent fastidieux en une expérience fluide et agréable.                
                    `
            }, {
                element: "Mise en œuvre",
                content: `
                    La réalisation de YourNight s'est articulée autour de plusieurs axes : 
                    <br/><br/>
                    La création d'une <b>charte graphique</b> évoquant l'atmosphère nocturne et festive, la <b>conception d'une interface</b> intuitive, la réalisation d'une application facile à utiliser tout en ayant <b>défini les technologies</b> utiles à son développement, avant de finalement mener une campagne marketing pour convaincre puis fidéliser de nouveaux utilisateurs en France.
                    <br/><br/>
                    Cependant, ce projet avait son lot de risques. Le premier défi était dans le financement. Un investissement initial était nécessaire pour couvrir les coûts de l'hébergement des services et le déploiement sur les stores. Même si ces coûts ne me mettaient pas dans une situation financière délicate, j'ai dû les réfléchir afin que le modèle économique de l’application puisse les rembourser, ce qui est préférable en tant qu’étudiant et même plus généralement lorsque l’on se lance dans un projet. J’ai donc effectué un benchmark pour trouver la meilleure solution entre différentes offres d’hébergement et types d’offres disponibles, et j'ai finalement opté pour un <b>VPS</b> chez Hostinger pour héberger à la fois la base de données et l'API de YourNight. J'ai opté pour ce choix en définissant plusieurs critères. Tout d'abord, le rapport qualité-prix offert par Hostinger était le plus intéressant parmi les différents concurrents. Leur service VPS avait aussi une flexibilité pour scaler les ressources en fonction des besoins de mon application.
                    <br/><br/>
                    Étant donné que je suis le seul développeur je devais m'organiser pour faire face à <b>des défis de gestion de projet</b>. Je ne voulais pas être en retard et mal estimer le temps de réalisation des tâches pour pouvoir lancer l'application à l’été 2023 à des fins stratégiques étant donné que l’été est une période idéale pour l’organisation de soirées. J'avais également des contraintes ressources matérielles pour pouvoir tester l'application sur différents appareils en raison d'un manque de mémoire sur mon ordinateur pour faire tourner plusieurs simulateurs simultanément et du manque de téléphones physiques à proximité lors du développement.
                    <br/><br/>
                    Une fois réalisée une étude sur quelques jours des étapes et des risques évoqués précédemment en même temps qu'étudier d’autres éléments tels que le marché et les concurrents auxquels j’allais me confronter afin de me démarquer de ceux-ci, c'était le moment d’<b>imaginer une charte graphique</b> cohérente avec l’univers de la nuit via Photoshop. J’ai décidé d'utiliser une couleur violette en tant que couleur principale de l’application et de jouer sur des effets “néon” pour rappeler l’univers de la fête.
                    <br/><br/>
                    Je travaillais en parallèle sur une première maquette de l’application à l’aide de l’outil Figma pour mettre des images sur mes idées de fonctionnalités et le <b>“workflow”</b> général. Après avoir validé une première maquette UI/UX qui a été jugée par moi-même et mes amis convaincante et après avoir défini les technologies de développement en me basant sur mes compétences et préférences (MongoDB pour la <a>Base de données</a>, <a>Express JS</a> pour le backend et <a>React</a> Native pour le frontend), c'était le momnet de développer les premiers composants réutilisables (boutons, champs de texte, les différentes “cards”) pour limiter toute duplication de code, ainsi que les premiers écrans.
                    <br/><br/>
                    De là est venue une <b>longue période de développement d’une durée de 8 mois</b>, durant laquelle la construction de l'architecture backend avec Express JS et le développement frontend en utilisant React Native ont été réalisés. L'une des premières fonctionnalité était un <b>système d'amis simple</b>, permettant d'inviter des amis lors de la création d'une soirée au sein de l'application, un <b>chat en temps réel</b> entre participants d’une même soirée à l’aide de websockets côté backend, la possibilité de créer une <b>liste de courses</b> par soirée à laquelle chaque participant peut s’attribuer des articles qu’il avait ou qu'il allait acheter afin que l'application puisse calculer automatiquement le montant à rembourser entre les invités. Ces informations sont ensuite partagées dans une page spécifique en s'adaptant à chaque utilisateur afin de lui afficher les informations le concernant en priorité. Le dernier ajout a été l’utilisation de l’<b>API Spotify</b> pour gérer une playlist spécifique à une soirée, où chaque utilisateur peut ajouter des musiques à celle-ci puis exporter la playlist dans sa globalité sur son profil Spotify afin de la diffuser.
                    <br/><br/>
                    Cette première phase de développement m'a permis d'obtenir une première version dont j’ai déployé le backend sur mon VPS via <a>Docker</a> et <b>soumis le frontend au Google Play Store et à l’App Store</b>.
                    <br/><br/>
                    Il était maintenant l’heure pour moi de faire appel pour la première fois à des externes qui étaient mes amis, afin de <b>tester l’application en situation réelle</b>. Quelques bugs ont pu être trouvés au cours de cette phase commes les notifications qui fonctionnaient bien sur iOS mais pas sur Android, ou encore la possibilité d’entrer des nombres négatifs en tant que prix ou quantité d’un article de la liste de courses liée à la soirée.
                    <br/><br/>
                    J'ai du coup pensé à mettre en place des <b>tests unitaires</b> côté backend avec Mocha pour éviter de futurs bugs de ce genre et j’ai corrigé les problèmes rencontrés. J’ai également ajouté une page de <b>“feedback”</b> dans l’application pour que les utilisateurs puissent me remonter les problèmes rencontrés et les suggestions d’améliorations.
                    <br/><br/>
                    Après quelques mises à jour visant à corriger le genre de problèmes énoncés précédemment j’ai pu être fier de voir le résultat de mon travail disponible <b>en libre téléchargement</b> pour le grand public.
                    <br/><br/>
                    Cependant, le travail n’était pas encore terminé. Il fallait maintenant que je mette en application ma campagne de <a>Communication Digitale</a> pour promouvoir l’application et pour attirer de nouveaux utilisateurs. J’ai commencé par créer des visuels pour les réseaux sociaux TikTok et Instagram en utilisant des outils comme Premiere Pro, After Effects, Photoshop et Canva. Le but ici a été de réaliser des <b>visuels attrayants</b> pour susciter l’intérêt des utilisateurs potentiels et les inciter à télécharger l’application. Le contenu est en grande partie axé sur la démonstration de fonctionnalités pour le moment. Il existe actuellement une centaine de personnes intéragissant avec les publications sur les réseaux sociaux, ce qui est un bon début. Je suis à l'heure actuelle toujours en train de travailler sur la campagne marketing pour la rendre plus efficace et attirer plus d'utilisateurs.
                    `,
            }, {
                element: "Résultat",
                content: `
                    Aujourd'hui, YourNight n’est pas encore la nouvelle application à succès qui comptabilise des millions de téléchargements. L'application possède plutôt une base d'une <b>vingtaine d'utilisateurs actifs</b>.
                    <br/><br/>
                    Le projet m’a énormément apporté sur beaucoup d’autres aspects et c’est déjà pour moi un gain précieux. La création de l’application a premièrement été un gain d’expérience qui me servira tout au long de ma carrière professionnelle. Elle m'a permis de diriger seul la conduite d'un projet depuis l'imagination de la charte graphique jusqu'à l'approfondissement de mes connaissances sur les technologies employées telles que React Native, Express JS, MongoDB et Docker.
                    <br/><br/>
                    Il y a aussi les compétences en marketing que j'ai acquises en conceptualisant la campagne de publicité pour YourNight qui ont élargi mon profil d'expert pour me permettre de mieux comprendre ce qui engendre de l'intérêt auprès de personnes ne connaissant rien au projet présenté.
                    <br/><br/>
                    Ce projet va également me permettre d'accrroître ma crédibilité auprès de de futurs clients potentiels en leur montrant ma capacité à imaginer et réaliser un projet de A à Z à partir d'une idée.
                    `,
            }, {
                element: "Regard critique",
                content: `
                    J’ai commis <b>certaines erreurs</b>, notamment ma plus conséquente qui est d’avoir voulu <b>sortir une première version parfaite</b>. Il aurait été préférable de sortir une première version fonctionnelle avec les fonctionnalités essentielles (à l'image d'un MVP) afin de corriger le plus tôt possible les premiers bugs et ne pas avoir à tous les gérer en même temps en même temps que de tester un marché potentiel.
                    <br/><br/>
                    Une autre erreur a été de ne pas avoir assez <b>anticiper le déploiement</b> sur les différents stores d’applications. Cela m’a couté une certaine période de temps avant que YourNight soit acceptée et mise en libre téléchargement. J'aurai dû anticiper et me renseigner le plus tôt possible sur la politique des différents stores pour éviter toute perte de temps.
                    <br/><br/>
                    Cependant ces erreurs me permettront de ne plus les commettre à l’avenir, je m’en servirai pour continuer de façonner ma démarche dans les projets futurs.
                    `,
            }, {
                element: "Evolution",
                content: `
                    Pour le moment YourNight s'oriente vers sa consolidation.
                    <br/><br/>
                    <b>À court terme</b>, l'objectif est d'instaurer un <b>système de récompenses et de "gamification"</b> pour fidéliser la base d'utilisateurs existants.
                    <br/><br/>
                    <b>À long terme</b>, le développement de YourNight se veur <b>ambitieux</b>, à condition qu'une solide base d'utilsateurs existe. Je veux faire évoluer l'application pour englober une <b>palette plus large de fonctionnalités</b> liées à l'organisation d'événements, comme des systèmes de sondage pour permettre de décider des activités des soirées. YourNight pourra devenir un outil complet pour la planification d'événements afin de faire de l’application un <b>moyen incontournable pour organiser ses soirées</b>.
                    `,
            }, {
                element: "Compétences liées",
                content: `React, Docker, Express JS, Base de données, Git, Communication Digitale`
            }
        ]
    }, {
        name: "ISIS",
        category: "technical",
        description: "Application web servant au milieu de l'industrie",
        technologies: ["React", "NodeJS", "Base de données"],
        icon: "img/projectsIcon/Isis.svg",
        link: "https://www.yournight.net/",
        illustrations: ["img/projects/ISIS/1.png", "img/projects/ISIS/2.png", "img/projects/ISIS/3.png", "img/projects/ISIS/4.png", "img/projects/ISIS/5.png", "img/projects/ISIS/6.png"],
        explanation: [
            {
                element: "Contexte",
                content: `
                    ISIS est le <b>premier projet professionnel en entreprise</b> sur lequel j’ai travaillé. C’est une application web sur laquelle j’ai participé au développement au cours de mon seul et unique stage. 
                    <br/><br/>
                    L’idée du projet est née des dirigeants de la société Holis Consulting qui souhaitaient <b>améliorer leur productivité</b> lors de la réalisation de projets d’inspections industrielles afin de se démarquer des autres entreprises proposant les mêmes services et ayant un nombre d’effectifs plus conséquent.
                    <br/><br/>
                    Un projet d’inspection industrielle se base sur des mesures réalisées à partir de calculs en fonction de certains paramètres afin de connaître l’état général d’un site industriel (Exemple : Calcul de la corrosion d’un tuyau sachant qu’un certain type de gaz traverse celui-ci).
                    <br/><br/>
                    Ils se sont posés la question suivante : Que pouvons-nous automatiser afin d’améliorer notre efficacité ?
                    <br/><br/>
                    De cette réflexion est née l’application web ISIS qui a pour objectif d’<b>automatiser certaines tâches chronophages</b> liées à l’inspection industrielle et d’améliorer la répartition du travail entre les différents collaborateurs d’un projet.
                    <br/><br/>
                    Le but ici est de venir en aide aux ingénieurs salariés au sein de l'entreprise sans viser une commercialisation de l’outil.
                    <br/><br/>
                    Comme le logiciel est utilisé dans un contexte très technique et propre au milieu de l’ingénierie d’inspection, il me semble important d’en expliquer le fonctionnement plus en détail. Dans un premier temps, l’ingénieur en inspection industrielle importe des fichiers au format Excel et PDF dans ISIS (ce sont les fichiers contenant les données essentielles à l’élaboration d’un projet d’inspection). ISIS se charge dans un second temps d’extraire les données des fichiers Excel afin de les stocker en base de données et de stocker les fichiers au format PDF dans le <b>NAS</b> de l’entreprise. Le but principal du logiciel est d’obtenir un bien meilleur suivi de l’avancée d’un projet d’inspection tout en facilitant le travail en équipe sur un même projet. Il permet également la génération automatisée des livrables à partir des données insérées.
                    `,
            }, {
                element: "Mise en œuvre",
                content: `
                    Lorsque j’ai rejoint Holis Consulting, j’avais pour premier objectif d’aider au développement de la solution ISIS jusqu’au déploiement de la solution. Le projet comprenait déjà des bases solides à mon arrivée avec les premières foncationnalités développées et l’UI/UX imaginé.
                    <br/><br/>
                    Mes missions étiaent donc axées sur le développement de l’application web, que ce soit côté frontend avec <a>React</a>, côté backend avec <a>Express JS</a> ou du côté <a>Base de données</a> avec PostgreSQL.
                    <br/><br/>
                    Pour ce qui est des fonctionnalités que j'ai réalisées, il y a la mise en œuvre d'un <b>système d'assignation de tâches</b> aux utilisateurs. Ce système permettait aux ingénieurs assignés à un projet d’avoir une vue précise des objectifs à accomplir, chaque tâche représente un élément spécifique du site industriel qui nécessite une inspection. Les tâches étaient visibles pour chaque utilisateur concerné dans une page web dédiée.
                    <br/><br/>
                    Mais certaines des ces fonctionnalités ont représenté un défi. Le premier concernait la génération de livrables liés aux données du tableau. Ces livrables sont constitués de représentations 3D au format PDF (par exemple, un tuyau d'un site industriel) accompagnées d'informations pour l'inspection (telles que le taux de corrosion). Ces représentations étaient générés via le logiciel Autocad. <b>Mon rôle</b> était de lancer la génération de ces fichiers par un algorithme en développé en C# par une entreprise tierce, à partir du backend développé en JavaScript. Le problème était que la documentation était limitée voire inexistante ce qui fait que j'ai du analyser celui-ci pour comprendre les données requises pour l'éxécution.
                    <br/><br/>
                    Comme je l'ai précisé juste avant, l'algorithme C# a été développé par une entreprise tierce ce qui fait que nous étions entièrement dépendant d'eux pour toute modification ou amélioration de celui-ci. Il fallait également que l'on fasse attention à toute mise à jour du logiciel Autocad qui pouvait entraîner le non-fonctionnement de l'algorithme. Pour pallier ce problème, <b>j'ai mis en place un système de logs</b> pour chaque appel à l’algorithme afin de pouvoir déterminer si le problème venait de notre côté ou de l’algorithme.
                    <br/><br/>
                    La seconde tâche qui a représenté un défi était l'extraction de données spécifiques à partir de fichiers PDF. <b>J'ai imaginé un algorithme</b> pour récupérer les données liées à l'objet en identifiant une caractéristique commune qui était la position des données dans les fichiers. C'est en organisant par moi même des réunions avec le commanditaire du projet afin de mieux comprendre la structure des documents que j'ai pu venir à bout de cette tâche.
                    <br/><br/>
                    J'ai réalisé la majorité de ces tâches en <b>autonomie</b> à la suite de la reconnaissance de mes compétences et de ma capacité à livrer des résultats de qualité par l'entreprise. J'ai principalement travaillé en solitaire sur ce projet, avec une intervention occasionnelle de mon maître de stage pour des tâches spécifiques ou des modifications majeures impliquant la base de données.
                    <br/><br/>
                    Pour ce qui est de la gestion du projet, nous avons adopté une approche basée sur la méthode de <a>Gestion de Projet Agile et Scrum</a>. Nous avions des réunions quotidiennes (Daily Meeting), pour faire un point de l'avancement des différentes User Stories et pour que je puisse présenter <b>mes contributions principales</b> en termes de fonctionnalités.
                    <br/><br/>
                    Pour la gestion du code nous avons utilisé GitHub pour synchroniser les réalisations. <b>J'ai également utilisé l'outil Notion</b> pour la prise de notes et la définition d'objectifs personnels ce qui m'a aidé à rester organisé en améliorant ma productivité.
                    `,
            }, {
                element: "Résultat",
                content: `
                La solution a pu finalement être livrée aux ingénieurs après <b>deux mois de travail</b>. Lors du premier déploiement il y a eu des bugs qui ont temporairement empêché son utilisation par les ingénieurs de la société. Les problèmes étaient venait principalement de la non prise en considération de certains cas spécifiques qui étaient difficilement anticipables pour moi avec mon peu d'expérience dans le domaine de l'ingénierie industrielle à ce moment-là. C'est pour cette raison là que j'ai mis en place des test unitaires, ce que je n'avais pas anticipé avant le lancement de la solution.
                <br/><br/>
                Après deux semaines de travail la solution a été optimisée et était finalement fonctionnelle. Les retours des utilisateurs ont été positifs malgré quelques demandes de fonctionnalités supplémentaires non prévues initialement. Aujourd'hui la solution est toujours utilisée chez Holis Consulting avec un gain de temps pour les salariés l'utilisant.
                <br/><br/>
                Travailler sur ISIS m'a permis d'améliorer ma compréhension et ma maîtrise des technologies comme <b>React</b> pour le développement frontend et <b>NodeJS</b> pour le backend. J'ai acquis une expérience que je juge conséquente dans la gestion des cycles de vie des applications, depuis la conception initiale jusqu'aux phases de déploiement et de maintenance. Les différents problèmes qui sont apparus et leur résolution m'ont permis de développer des compétences en communication et en résolution de problèmes.
                `,
            }, {
                element: "Regard critique",
                content: `
                L'aspect positif que je retiens de mon travail sur ISIS a été ma capacité à m'adapter rapidement à de nouvelles technologies telles que <b>React</b> et <b>NodeJS</b>, et à les appliquer efficacement dans un contexte professionnel ce qui m'a permis d'apporter des changements significatifs à la solution rapidement.
                <br/><br/>
                Cependant, j'ai aussi identifié des lacunes dans ma méthodologie, en particulier en ce qui concerne la prise en compte de cas d'utilisation spécifique et la <b>mise en place de tests robustes</b>. Les bugs rencontrés lors du premier déploiement m'ont montré l'importance d'avoir une vision plus reculée cycle de vie du développement de logiciels.
                `,
            }, {
                element: "Evolution",
                content: `
                    Depuis le déploiement le projet ISIS <b>a continué à évoluer</b> en s'adaptant aux exigences des nouveaux projets d'inspection industrielle. Des améliorations sont apportées de <b>manière occasionnelle</b> en fonction des besoins spécifiques et des retours des utilisateurs impliqués dans ces projets.
                    <br/><br/>
                    L'avenir du logiciel ISIS chez Holis Consulting est envisagé avec un <b>potentiel commercial plus large</b>. L'opportunité de commercialiser ISIS devient de plus en plus probable. Si l'entreprise diminue sa dépendance aux contrats d'inspection industrielle, ISIS pourrait être adapté pour répondre à un marché afin d'offrir une solution robuste à d'autres sociétés et secteurs d'activité.
                    <br/><br/>
                    La possibilité de commercialisation représente une opportunité pour Holis Consulting en termes de nouvelles <b>sources de revenus</b>, mais également en tant que validation de mes capacités de développement.         
                    `,
            }, {
                element: "Compétences liées",
                content: `React, Gestion de Projet Agile et Scrum, Express JS, Base de données, Git`
            }
        ]
    }, {
        name: "PREMIS DM",
        category: "technical",
        description: "Application web servant au milieu de l'industrie",
        technologies: ["React", "NodeJS", "Base de données"],
        icon: "img/projectsIcon/PREMISDM.svg",
        illustrations: ["img/projects/PREMISDM/Intro.png", "img/projects/PREMISDM/HowItWorks.png", "img/projects/PREMISDM/TreeViewExplain.png", "img/projects/PREMISDM/TreeViewColors.png", "img/projects/PREMISDM/Popin.png", "img/projects/PREMISDM/SparePartExplain.png", "img/projects/PREMISDM/SpareParts.png", "img/projects/PREMISDM/Resume.png"],
        link: "https://www.yournight.net/",
        explanation: [
            {
                element: "Contexte",
                content: `
                Le monde de l’industrie peine encore à se digitaliser et adopte des méthodes de travail fonctionnelles mais chronophages, qui favorisent l’erreur humaine.
                <br/><br/>
                De ce fait, l’entreprise Holis Consulting imagine des solutions digitales afin de faciliter la vie des travailleurs et de là est venue l’idée de PREMIS.
                <br/><br/>
                PREMIS, avant de devenir une <b>application web</b>, a été une solution développée par un collaborateur de la société avec la technologie Access, ce qui ne permet pas une bonne scalabilité de celle-ci et limite l’ajout de nouvelles fonctionnalités.
                <br/><br/>
                C’est pour cette raison que l’entreprise a décidé de redévelopper la solution sous la forme d’une application web qui permettra aux utilisateurs d’accéder aux mêmes fonctionnalités sur une interface plus claire et simpliste, tout en ajoutant des fonctionnalités permettant une meilleure visualisation de ses données à l’aide de dashboard, par exemple.
                <br/><br/>
                L’application web est destinée à des <b>clients qui viennent du milieu de l’industrie</b> et qui possédent des sites industriels, puisque l’application vient corriger le format et la cohérence de nouvelles données concernant la plateforme industrielle.
                <br/><br/>
                Lorsque des travaux et ajouts sont réalisés sur le site, de nouvelles données concernant les nouveaux éléments sont générés et PREMIS vient justement <b>aider au contrôle du format et de la cohérence de ces données</b>, qui, si ajoutées avec des erreurs, pourront créer des incompréhensions plus tard par les ingénieurs qui travaillent ou qui inspectent le site.
                <br/><br/>
                PREMIS DM a été la seconde application web sur laquelle j’ai contribué durant mon stage puis mon alternance au sein d’Holis Consulting.
                    `,
            }, {
                element: "Mise en œuvre",
                content: `
                    <b>J'ai du conceptualiser et de construire l'architecture intégrale du système</b> de la base de données au backend et au frontend, en utilisant <a>React</a>, <a>Express JS</a> et PostgreSQL pour la <a>Base de données</a>.
                    <br/><br/>
                    <b>J'ai travaillé en collaboration avec mon maître d'apprentissage</b> notamment au début du projet pour être sûr que je me dirigeais dans la bonne direction. <b>J'ai ensuite travaillé en grande autonomie</b> sur le projet en étant encadré par son commanditaire qui était l'un des dirigeants de l'entreprise. Le projet comprenait également un testeur qui était un ingénieur salarié de l'entreprise. Son rôle était de tester les fonctionnalités que je développais et de me remonter les bugs qu’il rencontrait.
                    <br/><br/>
                    Le risque majeur qui planait autour de ce projet venait du fait que nous avions besoin du collaborateur ayant développé la solution Access pour nous guider sur les fonctionnalités de celle-ci. Il était le seul à avoir la connaissance nécessaire à la réalisation de la solution et de ses fonctionnalités. Sa potentielle non disponibilité était un risque majeur pour le projet surtout à ses débuts. <b>Pour pallier ce problème, j’ai pris des notes</b> au cours des réunions que nous avions avec lui. J'ai gardé à jour une documentation sur les fonctionnalités de la solution Access afin d'éviter tout échange non nécessaire avec lui.
                    <br/><br/>
                    Le premier élément sur lequel je me suis concentré a été la <b>conception de l'architecture de la base de données</b> en tenant prenant en compte l’existant des modèles de données réalisés via Access qui m’ont été fournis.
                    <br/><br/>
                    Ensuite <b>j'ai commencé par le développement du backend</b> en utilisant Express JS. <b>J'ai premièrement mis en place l'architecture de données</b> définie auparavant en créant les différents modèles et en les générant dans ma base de données avec l'ORM Sequelize. J'ai ensuite développé les différents contrôleurs et routes associés à ces modèles pour permettre la communication entre le frontend et le backend avant de les protéger via des middlewares pour tout ce qui concerne la sécurité.
                    <br/><br/>
                    <b>Le développement du frontend a été réalisé avec React.</b> Je me suis basé sur une interface utilisateur imaginée par l’un de mes supérieurs via le logiciel Figma. Mon objectif était de réaliser une expérience utilisateur simple étant donné la complexité de la solution initiale.
                    <br/><br/>
                    Tout au long du processus de développement, <b>j'ai interagi avec le commanditaire</b> pour des ajustements afin que le projet reste aligné avec les objectifs. C'est cette approche qui a permis de s'assurer que le projet évolue dans la bonne direction et que les résultats finaux soient cohérants par rapport aux attentes. La solution a été également testée après chaque implémentation de fonctionnalité par le testeur dédié au projet.
                    <br/><br/>
                    Le développement de "PREMIS DM" a relevé plusieurs défis techniques.
                    <br/><br/>
                    L'une des premières fonctionnalités développées a été l'importation de données à partir de fichiers Excel. La tâche était complexe à gérér car les tailles des fichiers importés étaient conséquentes. <b>Pour gérer efficacement cette fonctionnalité j'ai mis en place des workers côté frontend</b> pour traiter les données et les envoyer par batch à l'API. C'est ce qui a permis d'optimiser la performance et la fiabilité de la fonctionnalité.
                    <br/><br/>
                    Une autre fonctionnalité représentant un défi a été la création de vues en base de données pour permettre la consultation de données côté frontend. Il était complexe d'optimier ces requêtes SQL qui étaient souvent très complexes. C'est l'ajout d'index qui a amélioré les performances de la base de données. <b>La mise en œuvre de ces vues a été essentielle pour un accès rapide et efficace aux données.</b>
                    <br/><br/>
                    L'affichage des vues en frontend a nécessité de gérer la mémoire pour éviter tout crash. Pour cela, <b>j'ai implémenté un système de lazy loading</b>, chargeant les données progressivement à mesure que l'utilisateur en avait besoin. C'est cette méthode qui a assuré une expérience utilisateur fluide.
                    <br/><br/>
                    Le développement d'un treeview pour la consultation des données consistait à construire un arbre de données reliant les éléments parents aux enfants. Pour ce faire j'ai utilisé un composant de table affichant les données sous forme d'arbre qui a été développé par mon maître d'apprentissage. J'ai ensuite personnellement développé <b>un algorithme de reconstruction des données côté backend</b> pour afficher les éléments de manière hiérarchique, en tenant compte des relations parent-enfant.
                    <br/><br/>
                    La création d'un dashboard côté frontend a permis d'offrir une visualisation intuitive des données. <b>J'ai développé des graphiques en bâtonnets et en camemberts</b> à l'aide de composants créés par moi-même et d'autres venant de la bibliothèque Chart.js. C'est une vraie plus value pour les utilisateurs puisque ça leur permet d'obtenir des aperçus clairs et interactifs des informations pertinentes sur leur site industriel.
                    <br/><br/>
                    C'est finalement l'implémentation d'un système de vérification des données importées qui a été la dernière fonctionnalité nécessaire à l'intérêt de la solution. Ce système vérifiait non seulement la forme des données (comme le nombre maximal de caractères) mais aussi leur logique en fonction des règles spécifiques définies par l’utilisateur pour chaque site industriel. En cas d'incohérence, une erreur était retournée à l'utilisateur avec des détails précis pour faciliter la correction à l'intérieur d'un fichier Excel téléchargeable depuis le frontend de l'application web.
                    `,
            }, {
                element: "Résultat",
                content: `
                Après un an et demi de développement intensif, réalisé en grande partie par moi-même, "PREMIS DM" est aujourd'hui à un stade de première version fonctionnelle. La première version de <b>l'application web est plus  convaincante</b> et est actuellement utilisée dans des démonstrations auprès de clients potentiels, auxquelles je participe parfois.
                <br/><br/>
                La solution offre un <b>fonctionnement général solide et fiable</b>. Le retour le plus courant des utilisateurs est la facilité d'utilisation de l'application et la rapidité avec laquelle ils peuvent accéder aux informations.
                <br/><br/>
                Il est cependant vrai que "PREMIS DM" <b>présente encore quelques bugs</b>, ce qui est attendu normal au vu de la complexité de la solution. Ces problèmes, lorsqu'ils surviennent, sont rapidement identifiés et résolus par moi-même.
                <br/><br/>
                À l'heure actuelle, "PREMIS DM" est <b>en phase de test chez deux clients potentiels</b>. Ces essais sont essentiels pour recueillir des retours d'expérience, pour identifier des domaines d'amélioration.
                <br/><br/>
                J'ai personnellement tiré beaucoup de leçons de cette expérience notamment sur l'aspect technique et la gestion de la mémoire. Le fait d'optimiser le code pour éviter les fuites de mémoire et les plantages de l'application était pour moi très instructif et c'est ce qui m'a permis d'acquérir une certaine compréhension dans la gestion des ressources et de l'optimisation des performances que ce soit directement dans le code ou dans la base de données. J'ai également amélioré mes compétences en matière de communication et de collaboration, en travaillant en collaboration avec le testeur dédié au projet pour garantir que l'application réponde précisément aux besoins finaux.
                    `,
            }, {
                element: "Regard critique",
                content: `
                En prenant du recul sur le parcours de développement de "PREMIS DM", <b>je ressens une grande fierté pour tout ce que j'ai accompli</b>, tout en reconnaissant les défis et les difficultés rencontrés, particulièrement au début du projet en raison de mon expérience limitée à l'époque.
                <br/><br/>
                Initialement, <b>je me concentrais sur le fonctionnement du code dans l'immédiat</b> sans prendre de recul et penser au futur. J'ai ajusté cette approche au fil du temps, me permettant désormais de développer avec une vision à long terme, en assurant que la solution puisse évoluer.
                <br/><br/>
                <b>J'ai cependant été capable de délivrer en quasi totale autonomie une application fonctionnelle et utilisée par des clients potentiels</b> capable de rivaliser avec des solutions développées par d'autres entreprises concurrentes en se basant sur l'application existante en Access.
                `,
            }, {
                element: "Evolution",
                content: `
                "PREMIS DM" se dirige vers une <b>phase d'évolution</b> avec l'ambition de commercialiser l'application et de l'adapter en fonction des retours des premiers utilisateurs. L'objectif est de rendre cette solution encore plus complète.
                <br/><br/>
                L'application aujourd'hui est riche en fonctionnalités mais elle sera peaufinée en se basant sur les expériences et les feedbacks des premiers clients. Cette démarche permettra de <b>cibler et de résoudre des problématiques</b> rencontrées par les utilisateurs.
                <br/><br/>
                L'entreprise Holis Consulting envisage également dans un futur plus lointain d'étendre la portée de "PREMIS DM" en l'<b>ouvrant à d'autres sources de données</b> récupérées dynamiquement d'autres applications développées par l'entreprise afin de créer un portail d'applications permettant d'attirer plus de clients potentiels à l'aide d'une suite d'applications complémentaires se voulant fonctionner comme des modules assemblables.
                <br/><br/>
                <b>Mon rôle dans ce processus est central</b>. Je contribue à la croissance et au succès de l'application tout en continuant de monter en compétence.
                    `,
            }, {
                element: "Compétences liées",
                content: `React, Intégration continue, Express JS, Base de données, Git`
            }
        ]
    }, {
        name: "Mat’ Moi Ca",
        category: "soft",
        description: "Tournoi caritatif d'échecs en ligne",
        technologies: ["Chess.com", "UNICEF", "Gestion de projet"],
        icon: "img/projectsIcon/MatMoiCa.png",
        illustrations: ["img/projects/MatMoiCa/1.jpg"],
        link: "https://www.yournight.net/",
        explanation: [
            {
                element: "Contexte",
                content: `
                Le projet Mat' moi ça, mené dans le cadre de ma formation, avait pour but de valider le semestre quatre de mes études. Chaque semestre nous devions réaliser un projet technique et un projet de formation humaine. Le thème de ce dernier variait à chaque fois et pour ce semestre il s'agissait <b>d'organiser un événement visant à collecter des fonds pour une association</b>.
                <br/><br/>
                En tant que chef de projet d'un groupe de cinq personnes, l'idée de Mat' moi ça est née de <b>mes réflexions pendant les vacances</b> précédant le semestre. J'ai été inspiré par l'engouement mondial pour les échecs qu'il y a eu notamment à la suite de la popularité de la série "Le Jeu de la Dame" sur Netflix. J'ai directement fait le lien entre ce regain d'intérêt pour les échecs, mon attrait pour ce jeu et l'objectif caritatif.
                <br/><br/>
                Mat' moi ça a été conçu comme un tournoi caritatif d'échecs en ligne, en <b>collaboration avec Chess.com et l'UNICEF</b>. Chess.com, en tant que plateforme leader mondiale des échecs en ligne était l'environnement idéal pour accueillir le tournoi de par leur crédilité, tandis que le partenariat avec l'UNICEF était elle aussi une association crédible pour notre engagement envers une cause humanitaire.
                    `,
            }, {
                element: "Mise en œuvre",
                content: `
                    L'organisation de Mat' moi ça a débuté sans aucune base préexistante : ni contacts, ni expérience dans le domaine de l'événementiel. Face à cette page vierge, nous avons d'abord défini des rôles clairs au sein de notre équipe de cinq personnes : un chef de projet, un trésorier, et des secrétaires.
                    <br/><br/>
                    La mise en place <b>d'objectifs SMARTER</b> nous a bien aidé pour la conduite du projet Mat' moi ça. Cette méthode nous a permis de structurer nos objectifs de manière claire tout en orientant nos actions de manière cohérente tout au long du projet.
                    <br/><br/>
                    Les objectifs définis ont été variés. Ca allait de la collecte de fonds pour l'UNICEF à la promotion du tournoi à la gestion financière et la communication avec les participants. Chaque objectif a été séparé en tâches spécifiques et assignées à des membres de l'équipe en fonction de leurs compétences. Je m'occupais moi-même de l'attribution des tâches.
                    <br/><br/>
                    Le projet comportait son lot de <b>risques</b> de par le délai imposé par le semestre. Nous devions organiser notre tournoi en été, pendant une période où les mesures sanitaires liées à la pandémie de COVID-19 étaient de plus en plus souples. Ces contraintes ont potentiellement affecté la participation des joueurs et la visibilité de l'événement.
                    <br/><br/>
                    <b>La première étape</b> a consisté à établir les règles du tournoi et les conditions de participation. Compte tenu des restrictions liées à la pandémie de COVID-19, nous avons décidé d'organiser un tournoi en ligne. Cette décision était logique pour des raisons sanitaires mais aussi pour la facilité d'accès et le potentiel d'attirer un grand nombre de participants.
                    <br/><br/>
                    <b>J'ai personnellement choisi le format Blitz</b> pour le tournoi qui est un mode de jeu rapide et populaire aux échecs, où chaque joueur dispose d'un temps limité de trois minutes pour l'ensemble de la partie. Ce format est idéal pour un tournoi en ligne car il permet de jouer de nombreuses parties en un temps réduit. Le prix d'entrée a été fixé à trois euros, un montant accessible pour encourager une large participation.
                    <br/><br/>
                    La mise en œuvre du tournoi a nécessité une plateforme d'accueil fiable avec un <b>dispositif anti-triche</b>, une <b>association partenaire</b> pour la gestion des fonds, et des <b>lots attractifs</b> pour les gagnants. Nous avons lancé une campagne d'emailing à l'aide de mail que j'ai rédigé en ciblant des plateformes d'échecs, des associations caritatives et des boutiques spécialisées dans les échecs pour les lots. J'ai en même temps travaillé sur la création d'une identité visuelle à l'aide de Photoshop et nous avons commencé à établir une stratégie de communication sur les réseaux sociaux pour bâtir une communauté et générer de l'engouement autour de l'événement à travers une page Facebook ainsi qu’un profil Twitter.
                    <br/><br/>
                    Nous avons finalement réussi à établir un partenariat avec <b>Chess.com</b>, qui a accepté d'héberger le tournoi mais aussi d'en faire la promotion et de fournir des lots sous forme d'abonnements premium. Nous avons également conclu un partenariat avec l'<b>UNICEF France</b>, à qui les fonds seraient reversés. Ces partenariats se sont conclus à la suite des mails envoyés et à travers des réunions que j'animais en tant que chef de projet. Malheureusement, une collaboration prévue avec le journal Sud-Ouest n'a pas abouti par manque de temps.
                    <br/><br/>
                    Cependant la recherche de lots supplémentaires et la promotion du tournoi par des influenceurs d'échecs ont été plus difficiles que prévu avec de nombreux refus et des engagements non tenus. Nous avons tout de même persévéré en concentrant nos efforts sur la <a>Communication Digitale</a>.
                    <br/><br/>
                    À l'approche du tournoi Mat' moi ça et plus précisément lors du mois précédant l'événement, nous nous sommes surtout concentré sur la <b>communication</b> étant donné l'importance de la promotion pour le succès de notre tournoi. Nous avons avons multiplié par trois le nombre de posts hebdomadaire sur notre page Facebook et Twitter.
                    <br/><br/>
                    Des <b>publications</b> régulières <b>étaient programmées</b>. Ces posts comprenaient des mises à jour sur l'actualité du tournoi, des annonces de nos partenaires Chess.com et UNICEF, ainsi que des explications détaillées des règles du tournoi. J'imaginais personnellement l'idée de ces posts et je délaiguais leur rédaction à mes camarades.
                    <br/><br/>
                    De leur côté, nos partenaires de Chess.com nous ont énormément aidé dans la promotion de l'événement. Ils ont respecté leur engagement en faisant la publicité de notre tournoi sur leur page Facebook et en le mettant en avant sur la page d'accueil de la version française de leur site.
                    <br/><br/>
                    Nos efforts de communication ont également <b>attiré l'attention de la Fédération Française des Échecs</b>. La Fédération a choisi de relayer l'information sur notre tournoi à travers leurs réseaux officiels, notamment sur Twitter et Facebook ce qui a renforcé la crédibilité de l'évènement. Nous avons également attiré l’intérêt de plusieurs pages Facebook consacrés aux échecs qui ont relayé le tournoi.
                    <br/><br/>
                    Nous avons également fait attention à toute la partie concernant la gestion financière de Mat' moi ça, surtout au vu de son importance pour l'évaluation finale de notre semestre.
                    <br/><br/>
                    Pour réaliser notre <a>Gestion de Budget</a> nous avons mis en place un <b>plan de trésorerie détaillé</b> sous forme d'un fichier Excel. Ce document était la base de notre suivi des finances. Chaque sortie et entrée d'argent était recensées. Nous avions catégorisé les dépenses et les revenus pour faciliter le suivi et l'analyse : frais de marketing, coûts de communication, dépenses liées à la plateforme du tournoi, et bien sûr, les fonds collectés pour l'UNICEF.
                    <br/><br/>
                    La transparence était très importante pour nous. Nous voulions que le tournoi soit crébile pour pouvoir convaicre les personnes d'y participer sans crainte. Nous nous sommes assurés que toutes les parties prenantes, y compris nos partenaires et les participants au tournoi, étaient informés de la manière dont les fonds étaient utilisés à l’aide de documents nous ayant été fournis par l’UNICEF.
                    `,
            }, {
                element: "Résultat",
                content: `
                Le projet Mat' moi ça n'a malheureusement pas atteint les objectifs fixés en termes de collecte de fonds. Nous avions prévu de collecter 500 euros de bénéfices au profit de l'UNICEF, mais le montant final collecté s'est limité à <b>100 euros</b>. Cette différence est due à un nombre insuffisant de participants au tournoi, qui n'a attiré que 8 joueurs.
                <br/><br/>
                L'une des principales raisons de cette participation limitée a été la date de l'événement, qui coïncidait avec la fin du confinement et le début de l'été. Cette période a probablement incité de nombreuses personnes à privilégier d'autres activités après la longue période de restrictions que nous avions connu. Bien que conscient de ce possible obstacle, <b>notre équipe était contrainte par le calendrier</b>, qui voulait que le tournoi soit organisé et évalué avant la fin du semestre.
                <br/><br/>
                Cepedant nous reconnaissons également que certaines erreurs sont dues de notre part. Notre prise de recul nous a fait prendre conscience des lacunes dans notre stratégie de communication. C'est ofrt dommage surtout quand on voit la collaboration avec Chess.com et l'UNICEF. Malheureusement ça n'a pas suffi <b>à attirer le nombre de participants prévu.</b>
                    `,
            }, {
                element: "Regard critique",
                content: `
                Je ne considère pas Mat' moi ça comme un échec total. Il est important de relativiser avec les succès que nous avons réalisés comme notre collaboration avec Chess.com et l'UNICEF. Travailler directement avec une plateforme d'échecs de ce type et une organisation humanitaire internationale a été une réalisation que je trouve remarquable.
                <br/><br/>
                Il y a également le fait que le contenu que nous avons créé pour les réseaux sociaux a attiré l'attention de la Fédération Française des Échecs, <b>un accomplissement pour moi</b>.
                    `,
            }, {
                element: "Evolution",
                content: `
                Mat' moi ça <b>n'a pas connu de suite ou de renouvellement</b> mais nous avons tiré une expérience de cette réalisation.
                <br/><br/>
                L'une des compétences que j'ai pu affiner et que je trouve importante au vu de mes envies entreprenariales, c'est la communication sur les réseaux sociaux. Ce projet m'a permis de comprendre ce qui fait réagir une audience. Aujourd'hui les réseaux sociaux permettent le succès de nombreux projets et entreprises, il est donc préférable de savoir les utiliser.
                <br/><br/>
                Mes interactions avec Chess.com m'ont permis de développer mes compétences en <b>relations humaines professionnelles et de négociation</b>. La gestion des discussions comme la présentation de nos objectifs et la recherche d'un terrain d'entente m'ont permis d'évoluer en tant qu'homme au delà du contexte professionnel en me permettant d'avoir une meilleure confiance en moi en terme de relation sociale.
                <br/><br/>
                La gestion du budget du projet a aussi été intéressante me permettant de mieuc comprendre et d'anticiper les imprévus. La capacité à gérer un budget est une compétence plus qu'essentielle dans la gestion de projets personnels ou professionnels.
                <br/><br/>
                En conclusion, bien que Mat' moi ça n'ait pas été poursuivi, les compétences que j'ai développées grâce à ce projet vont me permettre de mener à bien des initiatives entreprenariales.
                    `,
            }, {
                element: "Compétences liées",
                content: `Communication Digitale, Gestion de Budget, Gestion du Temps et Organisation`
            }
        ]
    },
    {
        name: "Hypotech",
        category: "technical",
        description: "Application Android de gestion de vente immobilière",
        technologies: ["", "", "Base de données"],
        icon: "img/projectsIcon/Hypotech.png",
        illustrations: ["img/projects/Hypotech/1.png", "img/projects/Hypotech/2.png", "img/projects/Hypotech/3.png", "img/projects/Hypotech/4.png", "img/projects/Hypotech/5.png", "img/projects/Hypotech/6.png"],
        link: "https://www.yournight.net/",
        explanation: [
            {
                element: "Contexte",
                content: `
                Le projet HYPOTECH a été réalisé dans le <b>cadre de mes études</b> au sein d’Intech Sud Dax, lors de ma troisième année scolaire, en collaboration avec quatre camarades de classe. Cette <b>application mobile Android</b> native, développée en <b>Java</b>, est née d'un professionnel ayant une expérience de quinze ans dans le secteur immobilier. L'objectif principal d'HYPOTECH était de répondre à cette question : "Comment faciliter et accélérer le suivi d'un projet de vente immobilière tout en automatisant certaines tâches chronophages ?”
                <br/><br/>
                Ce projet se voulait entrer dans un marché qui était déjà constitué de plusieurs solutions simimilaires dédiées à l'immobilier. Toutefois, ces solutions existantes ne répondaient pas entièrement aux besoins spécifiques identifiés par notre collaborateur issu du domaine immobilier. Notre défi était donc de créer une application qui comble ces lacunes.
                <br/><br/>
                <b>L'application visait à simplifier la gestion des ventes immobilières</b>.
                    `,
            }, {
                element: "Mise en œuvre",
                content: `
                Notre objectif était de délivrer une <b>application fonctionnelle en guise de maquette</b> afin d'être présentée comme base pour un futur développement auprès de professionnels.
                <br/><br/>
                Pour mener à bien ce projet nous avons décidé d'adopter la méthode de <a>Gestion de Projet Agile et Scrum</a>. La première étape a été la réunion de lancement avec le <b>Product Owner</b>, au cours de laquelle nous avons défini l'ensemble des <b>User Stories</b> du projet. Ces User Stories représentaient les différentes fonctionnalités que notre application devait comporter.
                <br/><br/>
                Notre équipe travaillait en <b>sprints d'une durée d'une semaine</b>, au cours desquels nous nous répartissions les User Stories à développer. Toutes les deux semaines, nous livrions une version de l'application au Product Owner pour l'adapter en fonction de ses retours. C'est cette fréquence de livraison bi-hebdomadaire qui nous a aidé à rester cohérent par rapport aux attentes du client.
                <br/><br/>
                Lors de notre première livraison dans le cadre du projet HYPOTECH, nous avons présenté une version initiale de l'application qui comprenait plusieurs écrans conçus à partir de maquettes Figma. <b>Je me suis chargé de les produire</b> à partir des User Story que nous avions définies lors du Kick off du projet.
                <br/><br/>
                Cette première version de l'application était basée sur l'aspect visuel et l'expérience utilisateur. Elle consistait en des interfaces utilisateur sans fonctionnalités opérationnelles. L'objectif était de valider le design général et le flow de l'application avec le Product Owner. Nous voulions nous assurer que l'aspect visuel et l'ergonomie de l'application correspondaient aux attentes et étaient suffisamment intuitifs pour l'utilisateur final.
                <br/><br/>
                Lors des sprints futurs, j'ai développé un <b>système de notification</b> pour informer les notaires, les vendeurs, les agences immobilières et les acheteurs de l'avancement des dossiers immobiliers. Par exemple, lorsqu'un document était ajouté au dossier, une notification était envoyée aux parties que j'ai énoncé précedemment. <b>J'ai programmé des triggers</b> au sein de l'application qui déclenchaient ces notifications en fonction de certaines actions comme par exemple l'ajout de documents au sein d'un projet de vente immobilière dans l'application. Ces notifications servaient à maintenir toutes les parties impliquées informées et engagées tout au long du processus de vente.
                <br/><br/>
                Une autre tâche que j'ai réalisé a été de permettre aux agences immobilières de personnaliser leur espace sur l'application. Cela leur <b>permettait d'incorporer leur identité visuelle</b> et de créer un environnement plus personnalisé pour leurs clients. J'ai développé cette fonctionnalité en créant des options de personnalisation dans l'application en permettant aux agences de modifier des paramètres comme les couleurs, les logos et d'autres éléments de design pour implanter leur marque.
                <br/><br/>
                J'ai également <b>mis en place un système de connexion entre utilisateurs</b> semblable à celui de LinkedIn pour faciliter l'interaction entre les parties prenantes d'un même projet immobilier. Cela permettait surtout aux utilisateurs de consulter les coordonnées des autres parties impliquées.
                    `,
            }, {
                element: "Résultat",
                content: `
                Le projet HYPOTECH a rencontré des défis lors de sa mise en oeuvre qui ont influencé le résultat final. Certaines des fonctionnalités demandées par le Product Owner n'ont <b>pas pu être réalisées dans les délais impartis</b>.
                <br/><br/>
                L'une des fonctionnalités non fournies était le fait de scanner directement des documents via l'application en refusant les fichiers peu lisibles. Cette fonctionnalité était techniquement intéressante pour nous mais elle était complexe à intégrer dans le temps imparti étant donné le nombre et la complexité des autres fonctionnalités demandées.
                <br/><br/>
                Un mois avant la livraison finale <b>le Product Owner a également considérablement modifié ses attentes</b> en termes de design et d'expérience utilisateur. L'approche initiale était axée sur un design sobre et simple mais il a souhaité intégrer des éléments plus extravagants comme par exemple l'ajout de GIFs sur tous les écrans. Pour nous il était impossible de mettre en place ceci étant donné qu'il fallait repenser tout le design mais aussi l'ergonomie et l'UX.
                <br/><br/>
                Finalement la version finale de l'application <b>n'a pas totalement satisfait les attentes du Product Owner</b>. Ça n'empêche que ce projet a été une expérience d'apprentissage important pour notre équipe et moi-même. J'ai au vu des fait retenu l'importance d'une <b>communication continue avec le client</b> et de l'<b>adaptabilité face aux changements inattendus</b>.
                    `,
            }, {
                element: "Regard critique",
                content: `
                En prenant du recul par rapport projet HYPOTECH je ressens une certaine déception vis-à-vis de mes réalisations personnelles. J'ai rencontré des difficultés qui ont affecté ma contribution au projet.
                <br/><br/>
                J'ai souvent été amené à gérer la <b>gestion des bugs</b>. J'ai souvent été ralenti par des problèmes techniques inattendus qui nécessitaient un temps conséquent pour être résolus. C'est notamment la gestion de notre dépôt <a>Git</a> qui a été problématique. Nous utilisions mal le système de branches ce qui a entraîné de fréquents conflits de merge, ce qui fait que j'ai du faire des corrections importantes en prenant du temps qui aurait pu être consacré au développement.
                <br/><br/>
                Il y avait également le volume élevé de User Stories généré après chaque réunion était également une source de stress. La pression pour accomplir un grand nombre de tâches dans un laps de temps court m'a parfois conduit à ne pas peaufinner mon travail. Finalement cela s'est souvent traduit par l'apparition de bugs lors des tests effectués par mes camarades, c'est là que j'ai pris conscience de <b>l'importance de produire un travail solide et bien testé avant de passer à la tâche suivante</b>.
                <br/><br/>
                J'ai également appris l'importance d'une <b>gestion efficace du temps et des ressources</b>. J'ai appris que la qualité ne doit pas être sacrifiée pour de la quantité et que prendre le temps de bien faire les choses dès le début peut et va économiser beaucoup d'efforts et de frustrations par la suite.
                    `,
            }, {
                element: "Evolution",
                content: `
                L'évolution du projet HYPOTECH a été intéressant après la conclusion de notre part du travail. Notre travail <b>a jeté les bases pour une suite plus professionnelle du projet</b>.
                <br/><br/>
                Notre application a servi de maquette fonctionnelle. Elle a servi support pour illustrer l'idée initiale. Cette maquette a été <b>présentée à une équipe de développeurs professionnels</b> engagés par la suite par notre ancien Product Owner.
                <br/><br/>
                Ces développeurs professionnels ont pris le relais pour transformer <b>notre prototype en une application commercialement viable</b>. Ils ont pu s'appuyer sur la structure que nous avions mises en place.
                <br/><br/>
                Pour ma part cela a été un plaisir de voir que notre projet a pu être utilisé comme base de travail par des professionnels. Ça nous a démontré à nous même que nos idées pouvaient inspirer et guider le travail d'une équipe de développement plus expérimentée.
                <br/><br/>
                Cette transition de notre projet à une initiative professionnelle montre <b>l'importance de la phase de conception et de développement</b> dans les projets.
                    `,
            }, {
                element: "Compétences liées",
                content: `Gestion de Projet Agile et Scrum, Gestion du Temps et Organisation, Git`
            }
        ]
    }
]