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
                    La création d'une <b>charte graphique</b> évoquant l'atmosphère nocturne et festive, la <b>conception d'une interface</b> intuitive, la réalisation d'une application facile à utiliser tout en ayant <b>défini les technologies</b> utiles à son développement au préalable, avant de finalement mener une <b>campagne marketing</b> pour convaincre puis fidéliser de nouveaux utilisateurs en France.
                    <br/><br/>
                    Cependant, ce projet n'était pas exempt de risques. Le premier défi résidait dans le financement. Un investissement initial était nécessaire pour couvrir les coûts de l'hébergement des services et le déploiement sur les stores. Même si ces coûts ne me mettaient pas dans une situation financière délicate, j'ai dû les réfléchir afin que le modèle économique de l’application puisse les rembourser, ce qui est préférable en tant qu’étudiant et même plus généralement lorsque l’on se lance dans un projet. J’ai donc effectué un benchmark pour trouver la meilleure solution entre différentes offres d’hébergement et types d’offres disponibles, et j'ai finalement opté pour un <b>VPS</b> chez Hostinger pour héberger à la fois la base de données et l'API de YourNight. Ce choix s'est appuyé sur plusieurs facteurs clés. Tout d'abord, le rapport qualité-prix offert par Hostinger était le plus intéressant parmi les différents concurrents. Avec un budget limité, il était impératif de trouver un hébergeur offrant à la fois fiabilité et abordabilité. Hostinger répondait à ces critères. Leur service VPS offrait la flexibilité nécessaire pour scaler les ressources en fonction des besoins de l'application, une considération importante pour un projet en croissance.
                    <br/><br/>
                    De plus, en tant que seul développeur, j'ai dû faire face à <b>des défis de gestion de projet</b>. Des estimations incorrectes auraient pu entraîner des retards significatifs, impactant le lancement de l'application qui était prévu pour l’été 2023 à des fins stratégiques, étant donné que l’été est une période propice à l’organisation de soirées. La limitation des ressources matérielles pouvait aussi restreindre la capacité de tester l'application sur différents appareils en raison d'un manque de mémoire sur mon ordinateur pour faire tourner plusieurs simulateurs simultanément ou du manque de téléphones physiques à proximité lors du développement, un facteur critique pour assurer la compatibilité et la réactivité.
                    <br/><br/>
                    Une fois réalisée une étude sur quelques jours, relatant les étapes et les risques évoqués précédemment, tout en étudiant d’autres éléments tels que le marché et les concurrents auxquels j’allais me confronter afin de me démarquer de ceux-ci, il était temps pour moi d’<b>imaginer une charte graphique</b> cohérente avec l’univers de la nuit et des événements festifs via Photoshop. J’ai décidé d’adopter une couleur violette en tant que couleur principale de l’application et de jouer sur des effets “néon” qui rappellent l’univers de la fête et de la nuit.
                    <br/><br/>
                    Je travaillais en parallèle sur une première maquette de l’application à l’aide de l’outil Figma afin de traduire visuellement mes idées de fonctionnalités et le <b>“workflow”</b> général, tout en y appliquant ma charte graphique. Après avoir validé une première maquette UI/UX jugée par moi-même et mes amis comme convaincante, et après avoir défini les technologies de développement en me basant sur mes compétences et préférences (MongoDB pour la base de données, ExpressJS pour le backend et React Native pour le frontend), il a été question de développer les premiers composants réutilisables (boutons, champs de texte, les différentes “cards”) afin de limiter toute duplication de code, ainsi que les premiers écrans.
                    <br/><br/>
                    De là est venue une <b>longue période de développement d’une durée de 8 mois</b>, durant laquelle la construction de l'architecture backend avec Express JS et le développement frontend en utilisant React Native ont été réalisés. Cette étape a nécessité une attention particulière aux détails de l'interface utilisateur, à la navigation au sein de l'application, et à l'intégration des différentes fonctionnalités pour assurer une expérience utilisateur cohérente et agréable. L’application a vu grandir en elle un <b>système d'amis simple</b>, permettant d'inviter des amis lors de la création d'une soirée au sein de l'application, un <b>chat en temps réel</b> entre participants d’une même soirée à l’aide de websockets côté backend, la possibilité de créer une <b>liste de courses</b> par soirée à laquelle chaque participant peut s’attribuer des articles qu’il avait ou qu'il allait acheter afin que l'application puisse calculer automatiquement le montant à rembourser entre les invités. Ces informations sont ensuite partagées dans une page spécifique en s'adaptant à chaque utilisateur afin de lui afficher les informations le concernant en priorité. Le dernier ajout majeur a été l’utilisation de l’<b>API Spotify</b> pour gérer une playlist spécifique à une soirée, où chaque utilisateur peut ajouter des musiques à celle-ci puis exporter la playlist dans sa globalité sur son profil Spotify afin de la diffuser.
                    <br/><br/>
                    Au cours du développement, plusieurs <b>remises en question</b> ont été de la partie. La première et aussi la principale a concerné la pertinence et l'intuitivité de certaines fonctionnalités, comme la manière dont les utilisateurs entreraient les informations relatives aux courses pour leur soirée. Initialement, l'idée était de permettre une saisie détaillée de chaque article, mais cela s'est avéré fastidieux et peu intuitif lors des tests préliminaires. J'ai donc dû repenser cette approche pour simplifier le processus en proposant à l’utilisateur, lors de la recherche d’un article, des articles similaires existants dans ma base de données avec une quantité d’informations déjà disponibles telles que le prix notamment, tout en gardant à l'esprit l'objectif de rendre l'organisation des soirées plus fluide. Cela a mené à l'implémentation d'un système plus flexible et convivial, où les utilisateurs peuvent facilement ajouter et modifier la liste des courses avec les participants de la soirée à partir d'une liste déjà existante ou à partir d'une liste sauvegardée par leurs soins à partir d’anciennes soirées pour éviter toute étape fastidieuse.
                    <br/><br/>
                    Cette première phase de développement a délivré une première version dont j’ai déployé le backend sur mon VPS via Docker et <b>soumis le frontend au Google Play Store et à l’App Store</b>.
                    <br/><br/>
                    Il était maintenant l’heure pour moi de faire appel pour la première fois à des externes, et plus particulièrement à mes amis, afin de <b>tester l’application en situation réelle</b>. Quelques bugs ont pu être décelés au cours de cette phase, notamment au niveau des notifications qui fonctionnaient bien sur iOS mais pas sur Android, ou encore la possibilité d’entrer des nombres négatifs en tant que prix ou quantité d’un article de la liste de courses liée à la soirée.
                    <br/><br/>
                    J'ai à ce moment mis en place des <b>tests unitaires</b> côté backend avec Mocha pour éviter de futurs bugs de ce genre et j’ai corrigé les problèmes rencontrés. J’ai également ajouté une page de <b>“feedback”</b> dans l’application pour que les utilisateurs puissent me remonter les problèmes rencontrés et les suggestions d’améliorations.
                    <br/><br/>
                    Après quelques mises à jour visant à corriger le genre de problèmes énoncés précédemment j’ai pu être fier de voir le résultat de mon travail disponible <b>en libre téléchargement</b> pour le grand public.
                    <br/><br/>
                    Cependant, le travail n’était pas encore terminé. J’ai dû m’atteler à la <b>création d’une campagne marketing</b> pour promouvoir l’application et pour attirer de nouveaux utilisateurs. J’ai donc créé des visuels publicitaires pour les réseaux sociaux TikTok et Instagram en utilisant des outils comme Premiere Pro, After Effects, Photoshop et Canva. Le but ici a été de réaliser des <b>visuels attrayants</b> et engageants pour susciter l’intérêt des utilisateurs potentiels et les inciter à télécharger l’application. Le contenu est en grande partie axé sur la démonstration de fonctionnalités pour le moment. Il existe actuellement une centaine de personnes intéragissant avec les publications sur les réseaux sociaux, ce qui est un bon début. Je suis à l'heure actuelle toujours en train de travailler sur la campagne marketing pour la rendre plus efficace et attirer plus d'utilisateurs.
                    `,
            }, {
                element: "Résultat",
                content: `
                    Aujourd'hui, YourNight n’est pas encore la nouvelle application à succès qui comptabilise des millions de téléchargements. L'application possède plutôt une base d'une <b>vingtaine d'utilisateurs actifs</b>.
                    <br/><br/>
                    Cependant, à la suite d'<b>un an de travail</b> lors de mon temps libre, ce projet m’a énormément apporté sur bien d’autres aspects et c’est déjà une première victoire non négligeable. La création de l’application a premièrement été un gain d’expérience inestimable qui me servira tout au long de ma carrière professionnelle. Elle m'a permis de m'immerger pleinement dans la conduite d'un projet, depuis l'ébauche de la charte graphique et le design fonctionnel de l'application mobile, jusqu'à l'approfondissement de mes connaissances sur les technologies employées telles que React Native, Express JS, MongoDB et Docker.
                    <br/><br/>
                    De plus, les compétences en marketing que j'ai acquises en conceptualisant la campagne de publicité pour YourNight ont élargi mon expertise et ma polyvalence permettant de mieux comprendre ce qui engendre de l'intérêt auprès de personnes ne connaissant rien au projet présenté.
                    <br/><br/>
                    L'un des aspects les plus gratifiants fut sans doute la <b>liberté créative</b> qu'elle m'a offerte. Le processus de création, de l'élaboration de la charte graphique à l'architecture de l'expérience utilisateur, a été une occasion d’exprimer ma vision et mes idées sans contrainte. Cette apprentissage a non seulement renforcé ma confiance en ma capacité à innover, mais m'a également apporté une grande satisfaction personnelle. Voir mes concepts se concrétiser en une application fonctionnelle a été une source de joie immense et une validation de mon potentiel créatif.
                    <br/><br/>
                    Ce projet va également me permettre d'accrroître ma crédibilité auprès de de futurs clients potentiels, établissant une base solide pour de futures opportunités professionnelles, démontrant ma capacité à imaginer et réaliser un projet de A à Z à partir d'une idée.
                    `,
            }, {
                element: "Regard critique",
                content: `
                    Avec le recul, mon regard sur le projet YourNight est teinté d'une reconnaissance pour les nombreuses leçons qu'il m'a enseignées. L'une des plus cruciales a été la nécessité d'<b>anticiper précisément le fonctionnement</b> et le flux de l'application dès le début. Concevoir le parcours utilisateur avant même d'écrire la première ligne de code a permis de guider le développement de manière cohérente et efficace. J'ai également appris l'importance de se <b>fixer des deadlines</b> réalistes, permettant de structurer le travail et de maintenir la dynamique du projet.
                    <br/><br/>
                    <b>La gestion financière</b> s'est révélée être un autre domaine d'apprentissage essentiel. Définir un budget détaillé et évaluer les options d'hébergement avant le lancement du développement a été fondamental pour maintenir les coûts sous contrôle et éviter les dépassements budgétaires imprévus.
                    <br/><br/>
                    J’ai également commis <b>certaines erreurs</b>, notamment ma plus conséquente qui est d’avoir voulu <b>sortir une première version parfaite</b>, ce qui s’est avéré comme n’étant pas une bonne solution. Il aurait été préférable de sortir une première version minimaliste afin de corriger le plus tôt possible les premiers bugs et ne pas avoir à tous les gérer en même temps. Cela aurait également été une occasion de valider ou non un intérêt par de potentiels utilisateurs et de jauger de l’utilité et de l’engouement généré par les différentes fonctionnalités.
                    <br/><br/>
                    Une autre erreur a été de ne pas avoir assez <b>anticiper le déploiement</b> sur les différents stores d’applications. Cela m’a couté une certaine période de temps avant que YourNight soit acceptée et mise en libre téléchargement. Une meilleure connaissance de la politique des stores m’aurait permis d’adapter le développement en fonction et éviter toute perte de temps.
                    <br/><br/>
                    Cependant ces erreurs me permettront de ne plus les commettre à l’avenir, je m’en servirai pour continuer de façonner ma démarche dans les projets futurs.
                    `,
            }, {
                element: "Evolution",
                content: `
                    Dans l'immédiat, YourNight s'oriente vers sa consolidation.
                    <br/><br/>
                    <b>À court terme</b>, l'objectif est d'instaurer un <b>système de récompenses et de "gamification"</b> pour fidéliser la base d'utilisateurs existants, en rendant leur expérience encore plus engageante et personnalisée. Parallèlement, une <b>campagne marketing</b> soutenue et créative est en train d’être finalisée et sera mise en place pour attirer de nouveaux utilisateurs, afin de bâtir une communauté dynamique autour de l'application.
                    <br/><br/>
                    <b>À long terme</b>, le développement de YourNight s'envisage avec <b>ambition</b>, à condition qu’une solide base d’utilisateurs existe. L'application évoluera pour englober une <b>palette plus large de fonctionnalités</b> liées à l'organisation d'événements. L'introduction de systèmes de sondage est notamment prévue pour permettre aux utilisateurs de décider collectivement des activités de leur soirée, transformant YourNight en un outil complet pour la planification d'événements festifs. Ces avancées sont envisagées afin de faire de l’application un <b>moyen incontournable pour organiser ses soirées</b>.
                    `,
            }, {
                element: "Compétences liées",
                content: `React, Docker, Express JS, Base de données`
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
                    L’idée du projet est émergée des dirigeants de la société Holis Consulting qui souhaitaient <b>améliorer leur productivité</b> lors de la réalisation de projets d’inspections industrielles afin de se démarquer des autres entreprises proposant les mêmes services et ayant un nombre d’effectifs plus conséquent.
                    <br/><br/>
                    Un projet d’inspection industrielle s’articule principalement sur des mesures réalisées à partir de calculs en fonction de certains paramètres afin de connaître l’état général d’un site industriel (Exemple : Calcul de la corrosion d’un tuyau sachant qu’un certain type de gaz traverse celui-ci).
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
                    Lorsque j’ai rejoint les rangs d’Holis Consulting, j’avais pour premier objectif d’aider au développement de la solution ISIS jusqu’à sa conclusion. Le projet comprenait déjà des bases solides à mon arrivée, et l’architecture ainsi que l’UI/UX de celui-ci étaient déjà imaginés.
                    <br/><br/>
                    Le développement avait été commencé par le seul développeur présent dans l'entreprise lors de mon arrivée. Celui-ci a été présent par la suite pour pouvoir m'orienter mais m'a laissé travailler en autonomie tout au long du projet. Le projet était commandité par une personne interne à l'entreprise, qui était le président de celle-ci ; c'est également lui qui avait imaginé les maquettes UI/UX.
                    <br/><br/>
                    Ma contribution personnelle s’est majoritairement concentrée sur le développement de l’application web, que ce soit côté frontend avec <b>React</b>, côté backend avec <b>Express JS</b> ou du côté base de données avec <b>PostgreSQL</b>, avec pour objectif de terminer une première version fonctionnelle de l’application.
                    <br/><br/>
                    Ma participation a englobé un éventail de fonctionnalités cruciales. Parmi celles-ci, la mise en œuvre d'un <b>système d'assignation de tâches</b> aux utilisateurs s'est avérée essentielle. Ce système permettait aux ingénieurs assignés à un projet d’avoir une vue claire des objectifs à accomplir, chaque tâche représentant un élément spécifique du site industriel nécessitant une inspection. Les tâches étaient visibles pour chaque utilisateur concerné dans une interface dédiée, optimisant ainsi la gestion du workflow.
                    <br/><br/>
                    En outre, j'ai intégré un <b>système de commentaires</b> liés aux données, un outil vital pour faciliter la communication au sein de l'équipe d'ingénierie. Parallèlement, j'ai développé une fonctionnalité pour le <b>traitement de fichiers Excel</b>, permettant l'extraction de données pour leur intégration ultérieure dans la base de données via le backend. Cette tâche a également inclus la modification des liaisons entre les tables de la base de données, afin de faciliter la récupération des objets associés à des données spécifiques, illustrées dans une popup lors d'une interaction utilisateur avec l'interface.
                    <br/><br/>
                    Bien que la majorité de ces tâches aient été réalisées avec succès, deux fonctionnalités particulières ont présenté des défis notables. La première concernait la génération de livrables liés aux données du tableau. Ces livrables, constitués de représentations 3D au format PDF (par exemple, un tuyau d'un site industriel) accompagnées d'informations pertinentes pour l'inspection (telles que le taux de corrosion), étaient générés via le logiciel Autocad. <b>Mon rôle</b> consistait à déclencher la génération de ces fichiers par un algorithme en C#, développé par une entreprise tierce, à partir du backend développé en JavaScript. En raison d'une documentation limitée de l'algorithme C#, une analyse approfondie de celui-ci a été nécessaire pour comprendre les données requises pour son exécution.
                    <br/><br/>
                    Il y avait cependant un risque planant autour du programme C# puisque nous étions dépendants de l’entreprise tierce pour toute modification ou correction de celui-ci. De plus, toute mise à jour du logiciel Autocad pouvait entraîner le non-fonctionnement de l'algorithme. Pour pallier ce problème, <b>j'ai mis en place un système de logs</b> pour chaque appel à l’algorithme afin de pouvoir déterminer si le problème venait de notre côté ou de l’algorithme.
                    <br/><br/>
                    La seconde tâche, exigeant une attention particulière, a été l'extraction de données spécifiques à partir de fichiers PDF. <b>J'ai conçu un algorithme</b> pour isoler et récupérer les données pertinentes liées à l'objet en traitement, en identifiant une caractéristique commune, la position des données dans les fichiers, qui a permis de cibler efficacement les informations nécessaires. Ce processus a impliqué une compréhension détaillée de la structure des documents à l'aide de discussions avec le commanditaire du projet ainsi qu'une programmation minutieuse pour garantir l'extraction précise des données à travers le backend de l'application web.
                    <br/><br/>
                    <b>Ma participation au projet ISIS chez Holis Consulting</b> s'est caractérisée par une grande autonomie, confiée par l'entreprise à la suite de la reconnaissance de mes compétences et de ma capacité à livrer des résultats de qualité. J'ai principalement travaillé en solo sur ce projet, avec une intervention occasionnelle de mon maître de stage pour des tâches spécifiques ou des modifications majeures impliquant la base de données.
                    <br/><br/>
                    Concernant la gestion du projet, nous avons adopté une approche s'inspirant de la méthode Scrum, tout en adaptant certains de ses principes à notre contexte. Nous avions des réunions quotidiennes (Daily Meeting), pour examiner l'avancement des différentes User Stories et pour que je puisse présenter <b>mes contributions principales</b> en termes de fonctionnalités.
                    <br/><br/>
                    Pour la gestion du code, GitHub et son système de branches ont été utilisés pour synchroniser nos travaux, minimisant ainsi les risques de conflits ou de bugs. <b>J'ai également employé l'outil Notion</b> pour la prise de notes et la définition d'objectifs personnels, ce qui m'a aidé à rester organisé, accélérant ainsi le développement du projet.
                    `,
            }, {
                element: "Résultat",
                content: `
                La solution a pu finalement être livrée aux ingénieurs après <b>deux mois de travail</b>. Celle-ci, lors de son premier déploiement, a connu des bugs qui ont temporairement empêché son utilisation par les ingénieurs de la société. Les problèmes résultaient principalement de la non prise en considération de certains cas spécifiques, difficilement anticipables pour moi, ayant peu d'expérience dans le domaine de l'ingénierie industrielle à ce moment-là. <b>Il m'est rapidement apparu nécessaire de solliciter des ressources supplémentaires pour affiner mes tests</b> et de mettre en place un système robuste de tests unitaires dans l'application, une étape que j'avais initialement omise.
                <br/><br/>
                Après deux semaines de travail, la solution a été optimisée et a finalement été mise en service avec succès. Les retours des utilisateurs ont été positifs, malgré quelques demandes de fonctionnalités supplémentaires non prévues initialement. À ce jour, la solution est toujours utilisée chez Holis Consulting, offrant un gain de temps considérable pour les salariés, et atteignant ainsi l'objectif principal du projet.
                <br/><br/>
                Travailler sur ISIS a significativement amélioré ma compréhension et ma maîtrise de technologies clés comme <b>React</b> pour le développement frontend et <b>NodeJS</b> pour le backend. J'ai acquis une expérience précieuse dans la gestion des cycles de vie des applications, depuis la conception initiale jusqu'aux phases de déploiement et de maintenance. De plus, la résolution des défis techniques rencontrés et l'interaction avec les utilisateurs finaux m'ont permis de développer des compétences en communication et en résolution de problèmes, essentielles dans ma carrière de développeur. Ce projet a non seulement renforcé mes compétences techniques, mais a également contribué à ma croissance en tant que professionnel polyvalent et adaptable.
                `,
            }, {
                element: "Regard critique",
                content: `
                Réfléchissant sur mon expérience avec le projet ISIS chez Holis Consulting, je perçois à la fois mes réussites et les domaines nécessitant une amélioration. L'un des aspects les plus valorisants a été ma capacité à m'adapter rapidement à de nouvelles technologies telles que <b>React</b> et <b>NodeJS</b>, et à les appliquer efficacement dans un contexte professionnel, ce qui m'a permis d'apporter des changements significatifs à la solution rapidement. Cela a non seulement accéléré mon apprentissage mais a également renforcé ma confiance en mes compétences de développement.
                <br/><br/>
                Cependant, j'ai aussi identifié des lacunes dans ma méthodologie initiale, en particulier en ce qui concerne la prise en compte de cas d'utilisation spécifique et la <b>mise en place de tests robustes</b>. Les bugs rencontrés lors du premier déploiement ont souligné l'importance de développer une vision plus holistique et détaillée du cycle de vie du développement de logiciels. J'ai appris qu'une compréhension approfondie des besoins des utilisateurs finaux et une approche rigoureuse des tests sont cruciales pour le succès d'une application.
                <br/><br/>
                En outre, cette expérience m'a enseigné l'<b>importance de la flexibilité et de l'adaptabilité</b>. Bien que le projet ait connu des défis initiaux, la capacité à répondre rapidement aux retours des utilisateurs et à ajuster l'application en conséquence a été un facteur clé dans son succès final.
                <br/><br/>
                En somme, travailler sur ISIS a été une expérience précieuse, m'offrant une perspective réaliste sur le développement de logiciels dans un environnement professionnel.
                    `,
            }, {
                element: "Evolution",
                content: `
                    Depuis sa mise en service, le projet ISIS <b>a continué à évoluer</b>, s'adaptant aux exigences changeantes des nouveaux projets d'inspection industrielle. Des améliorations sont apportées de <b>manière occasionnelle</b>, dictées par les besoins spécifiques et les retours des utilisateurs impliqués dans ces projets. Cette approche dynamique assure que le logiciel reste non seulement pertinent, mais également en phase avec les avancées technologiques et les pratiques du secteur de l'ingénierie industrielle.
                    <br/><br/>
                    Parallèlement, l'avenir du logiciel ISIS chez Holis Consulting est envisagé avec un <b>potentiel commercial plus large</b>. Alors que l'entreprise se développe et diversifie ses activités, l'opportunité de commercialiser ISIS devient de plus en plus tangible. Si l'entreprise diminue sa dépendance aux contrats d'inspection industrielle et étend ses horizons, ISIS pourrait être adapté pour répondre à un marché plus vaste, offrant ainsi une solution robuste et éprouvée à d'autres sociétés et secteurs d'activité.
                    <br/><br/>
                    Cette possibilité de commercialisation représente une opportunité significative pour Holis Consulting, non seulement en termes de nouvelles <b>sources de revenus</b>, mais également en tant que validation de ses capacités de développement interne. ISIS, ayant commencé comme un outil conçu pour répondre aux besoins internes, pourrait ainsi devenir un produit phare de l'entreprise, témoignant de son expertise et de sa capacité à créer des solutions logicielles innovantes et adaptées aux besoins du marché.                
                    `,
            }, {
                element: "Compétences liées",
                content: `React, Gestion de Projet Agile et Scrum, Express JS, Base de données`
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
                    Le projet représentait un défi stimulant et une opportunité de croissance professionnelle importante. Dès l'instant où <b>j'ai entamé ce projet</b>, j'ai été confronté à une page vierge. <b>Il était de mon devoir de conceptualiser et de construire l'architecture intégrale du système</b> de la base de données au backend, en passant par le frontend, en utilisant React, ExpressJS et PostgreSQL.
                    <br/><br/>
                    <b>J'ai travaillé en étroite collaboration avec mon maître d'apprentissage</b> notamment au début du projet pour être sûr que je me dirigeais dans la bonne direction. <b>J'ai ensuite travaillé en grande autonomie</b> sur le projet, en étant encadré par son commanditaire qui était l'un des dirigeants de l'entreprise. Le projet comprenait également un testeur qui était un ingénieur salarié de l'entreprise. Son rôle était de tester les fonctionnalités que je développais et de me remonter les bugs qu’il rencontrait.
                    <br/><br/>
                    Le risque majeur planant autour de ce projet venait du fait que nous avions besoin du collaborateur ayant développé la solution Access pour nous guider sur les fonctionnalités de celle-ci. En effet, il était le seul à avoir une connaissance approfondie de la solution et de ses fonctionnalités. Sa potentielle non disponibilité était donc un risque majeur pour le projet surtout à ses débuts. <b>Pour pallier ce problème, j’ai pris des notes</b> au cours des réunions que nous avions avec lui. J'ai gardé à jour une documentation sur les fonctionnalités de la solution Access afin de minimiser tout échange non nécessaire avec lui.
                    <br/><br/>
                    La première étape cruciale a été la <b>conception de l'architecture de la base de données.</b> En tenant compte des directives et des besoins spécifiques exprimés par mes supérieurs ainsi que l’existant des modèles de données réalisés via Access qui m’ont été fournis, <b>j'ai élaboré une structure de données</b> qui répondait aux exigences fonctionnelles du projet.
                    <br/><br/>
                    Ensuite, <b>j'ai abordé le développement du backend</b> en utilisant ExpressJS. Cette étape impliquait la mise en place d'une API robuste et sécurisée, capable de gérer les requêtes et de communiquer efficacement avec la base de données. <b>J'ai premièrement mis en place l'architecture de données</b> définie auparavant en créant les différents modèles et en les générant dans ma base de données à l'aide de l'ORM Sequelize. J'ai ensuite développé les différents contrôleurs et routes associés à ces modèles pour permettre la communication entre le frontend et le backend avant de les protéger via des middlewares pour l'aspect sécurité.
                    <br/><br/>
                    <b>Le développement du frontend a été réalisé avec React.</b> Je me suis basé sur une interface utilisateur imaginée par l’un de mes supérieurs via le logiciel Figma. Mon objectif était de fournir une expérience utilisateur fluide, où la complexité de la solution initiale ne serait pas un problème pour l’utilisateur.
                    <br/><br/>
                    Tout au long du processus de développement, <b>j'ai constamment interagi avec le commanditaire</b> pour des feedbacks et des ajustements, assurant ainsi que le projet reste aligné avec les objectifs globaux et réponde précisément aux besoins identifiés. Cette approche itérative a permis de s'assurer que le projet évolue dans la bonne direction et que les résultats finaux soient en parfaite adéquation avec les attentes. La solution a été également testée après chaque implémentation de fonctionnalité par le testeur dédié au projet.
                    <br/><br/>
                    Le développement de "PREMIS DM" a impliqué plusieurs défis techniques et fonctionnels, chacun nécessitant une approche méticuleuse pour garantir un fonctionnement optimal de l'application.
                    <br/><br/>
                    L'une des premières fonctionnalités clés développées a été l'importation de données à partir de fichiers Excel. Cette tâche a représenté un défi considérable, principalement en raison de la taille importante des fichiers importés. <b>Pour gérer efficacement cette fonctionnalité, j'ai mis en place des workers côté frontend</b> pour traiter les données et les envoyer par batch à l'API. Cette approche a non seulement facilité la gestion des grands volumes de données, mais a également optimisé la performance et la fiabilité de la fonctionnalité d'importation.
                    <br/><br/>
                    Une autre fonctionnalité importante a été la création de vues en base de données pour permettre la consultation de données interconnectées côté frontend. La complexité résidait dans l'optimisation des requêtes SQL, souvent très élaborées, et l'ajout d'index pour améliorer les performances de la base de données. <b>La mise en œuvre de ces vues a été essentielle pour un accès rapide et efficace aux données.</b>
                    <br/><br/>
                    L'affichage des vues en frontend nécessitait une gestion prudente de la mémoire pour éviter tout plantage. Pour cela, <b>j'ai implémenté un système de lazy loading</b>, chargeant les données progressivement à mesure que l'utilisateur en avait besoin. Cette méthode a assuré une expérience utilisateur fluide et stable.
                    <br/><br/>
                    Le développement d'un treeview pour la consultation des données a été un autre défi majeur. La construction de l'arbre de données, reliant les éléments parents aux enfants, a nécessité une réflexion approfondie et une logique de programmation complexe pour assurer une représentation précise et intuitive des relations entre les données. Pour ce faire, j'ai utilisé un composant de table affichant les données sous forme d'arbre qui a été développé par mon maître d'apprentissage. J'ai personnellement développé <b>un algorithme de reconstruction des données côté backend</b> pour afficher les éléments de manière hiérarchique, en tenant compte des relations parent-enfant.
                    <br/><br/>
                    La création d'un dashboard côté frontend a été une étape cruciale pour offrir une visualisation intuitive des données. <b>J'ai développé des graphiques en bâtonnets et en camemberts</b> à l'aide de composants créés par moi-même et d'autres venant de la bibliothèque Chart.js, permettant aux utilisateurs d'obtenir des aperçus clairs et interactifs des informations pertinentes sur leur site industriel.
                    <br/><br/>
                    Enfin, l'implémentation d'un système de vérification des données importées a été essentielle pour assurer leur exactitude et leur conformité. Ce système vérifiait non seulement la forme des données (comme le nombre maximal de caractères) mais aussi leur logique en fonction des règles spécifiques définies par l’utilisateur pour chaque site industriel. En cas d'incohérence, une erreur était retournée à l'utilisateur avec des détails précis pour faciliter la correction à l'intérieur d'un fichier Excel téléchargeable depuis le frontend de l'application web.
                    `,
            }, {
                element: "Résultat",
                content: `
                Après un an et demi de développement intensif, réalisé en grande partie par mes soins, "PREMIS DM" a atteint un stade significatif de maturité. La première version de <b>l'application web s'est avérée convaincante</b> et est actuellement utilisée dans des démonstrations auprès de clients potentiels, auxquelles je participe parfois.
                <br/><br/>
                La solution, bien que complexe, offre un <b>fonctionnement général solide et fiable</b>. Sa conception et son développement ont été guidés par une attention particulière aux détails et une compréhension approfondie des besoins des utilisateurs dans un contexte industriel. Cela se reflète dans la manière dont les utilisateurs interagissent avec l'application, exploitant ses fonctionnalités avancées facilement pour la gestion et l'analyse de données. Le retour le plus courant des utilisateurs est la facilité d'utilisation de l'application et la rapidité avec laquelle ils peuvent accéder aux informations essentielles.
                <br/><br/>
                Il est vrai que "PREMIS DM" <b>présente encore quelques bugs</b>, ce qui est attendu compte tenu de la complexité de la solution. Ces problèmes, lorsqu'ils surviennent, sont rapidement identifiés et résolus, assurant ainsi une amélioration continue de l'application. Ces défis sont une partie naturelle du processus de développement et qui offrent des opportunités précieuses pour affiner et perfectionner l'application.
                <br/><br/>
                À l'heure actuelle, "PREMIS DM" est <b>en phase de test chez deux clients potentiels</b>. Ces essais sont cruciaux pour recueillir des retours d'expérience, pour identifier des domaines d'amélioration et démontrer la valeur pratique de la solution dans des environnements réels. Ces phases de test sont également une étape importante dans le processus de commercialisation de la solution, nous permettant de prouver son efficacité et son adaptabilité aux besoins spécifiques de chaque client.
                <br/><br/>
                J'ai personnellement tiré beaucoup de leçons de cette expérience. La plus marquante est sur l'aspect technique et plus précisément sur la gestion de la mémoire. En effet, j'ai dû optimiser le code pour éviter les fuites de mémoire et les plantages de l'application, ce qui m'a permis d'acquérir une compréhension approfondie de la gestion des ressources et de l'optimisation des performances que ce soit directement dans le code ou dans la base de données. J'ai également amélioré mes compétences en matière de communication et de collaboration, en travaillant en étroite collaboration avec le testeur dédié au projet pour garantir que l'application réponde précisément aux besoins finaux.
                    `,
            }, {
                element: "Regard critique",
                content: `
                En réfléchissant sur le parcours de développement de "PREMIS DM", <b>je ressens une grande fierté pour tout ce que j'ai accompli</b>, tout en reconnaissant les défis et les difficultés rencontrés, particulièrement au début du projet en raison de mon expérience limitée à l'époque.
                <br/><br/>
                L'un des principaux obstacles a été la fonctionnalité d'importation des données. Au début, la solution que j'avais mise en place se heurtait à des difficultés avec les fichiers de grande taille, dépassant les capacités du système en place. Cette expérience m'a appris l'importance de l'optimisation et de la prévision des besoins futurs lors du développement. Initialement, <b>je me concentrais sur le fonctionnement du code dans l'immédiat</b> sans toujours considérer son évolutivité. Cette approche a été ajustée au fil du temps, me permettant désormais de développer avec une vision à long terme, en assurant que la solution puisse s'adapter et évoluer avec les exigences croissantes.
                <br/><br/>
                Un autre aspect critique a été la sécurité de l'application. Dans les premières versions, l'application a été déployée avec certaines vulnérabilités, comme des failles permettant des injections SQL. Ces expériences m'ont poussé à revoir et à renforcer mes connaissances en matière de sécurité des applications web. <b>La prise de conscience de l'importance de la sécurité dans le développement logiciel</b> a été un point tournant, me menant à intégrer des pratiques de sécurité rigoureuses et à tester de manière exhaustive pour prévenir les failles potentielles.
                <br/><br/>
                <b>J'ai cependant été capable de délivrer en quasi totale autonomie une application fonctionnelle et utilisée par des clients potentiels</b> capable de rivaliser avec des solutions développées par d'autres entreprises concurrentes à l'aide d'une conception initiale très bien ficelée de mon commanditaire et testeur du projet en se basant sur l'application existante en Access.
                <br/><br/>
                En somme, bien que le chemin parcouru avec "PREMIS DM" ait comporté son lot de défis, les leçons apprises ont été inestimables. Chaque obstacle a été une opportunité d'apprentissage, me permettant de renforcer mes compétences en développement, en optimisation et en sécurité des applications. Ces expériences ont façonné mon approche de développement, me rendant plus apte à gérer des projets complexes et à développer des solutions robustes et évolutives. <b>Je reste déterminé à continuer d'apprendre et d'améliorer mes compétences</b>, en vue de créer des applications toujours plus performantes et sécurisées.
                    `,
            }, {
                element: "Evolution",
                content: `
                La trajectoire de "PREMIS DM" se dirige vers une <b>phase d'évolution significative</b>, motivée par l'ambition de commercialiser l'application et de l'adapter en fonction des retours des premiers utilisateurs. L'objectif est de rendre cette solution encore plus complète, en la façonnant pour répondre à un éventail plus large de besoins spécifiques au secteur industriel.
                <br/><br/>
                L'application, déjà riche en fonctionnalités, sera peaufinée et élargie en se basant sur les expériences et les feedbacks des premiers clients. Cette démarche permettra de <b>cibler et de résoudre des problématiques précises</b> rencontrées par les utilisateurs, tout en intégrant de nouvelles fonctionnalités qui amélioreront davantage l'efficacité et la pertinence de l'application dans son contexte d'utilisation. L'accent sera mis sur l'amélioration continue de l'expérience utilisateur, la performance du système, et l'ajout de nouvelles capacités répondant aux besoins évolutifs du secteur industriel.
                <br/><br/>
                L'entreprise Holis Consulting envisage également dans un futur plus lointain d'étendre la portée de "PREMIS DM" en l'<b>ouvrant à d'autres sources de données</b> récupérées dynamiquement d'autres applications développées par l'entreprise afin de créer un portail d'applications permettant d'attirer plus de clients potentiels à l'aide d'une suite d'applications complémentaires.
                <br/><br/>
                En conclusion, l'avenir de "PREMIS DM" est prometteur, avec des plans d'expansion et d'amélioration guidés par les exigences et les retours des utilisateurs. La capacité à évoluer et à s'adapter reste au cœur de la stratégie de développement de cette solution, visant à en faire un outil encore plus indispensable dans le secteur industriel. <b>Mon rôle dans ce processus reste central</b>, me permettant de contribuer de manière significative à la croissance et au succès de l'application.
                    `,
            }, {
                element: "Compétences liées",
                content: `React, Intégration continue, Express JS, Base de données`
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
                Le projet "Mat' moi ça", mené dans le cadre de ma formation, avait pour but de valider le semestre 4 de mes études. Ce projet unique s'inscrivait dans le cadre d'une exigence académique où, chaque semestre, nous devions réaliser un projet technique et un projet de formation humaine. Le thème de ce dernier variait à chaque fois, et pour ce semestre particulier, il s'agissait <b>d'organiser un événement visant à collecter des fonds pour une association</b>.
                <br/><br/>
                En tant que chef de projet d'un groupe de cinq personnes, l'idée de "Mat' moi ça" est née de <b>mes réflexions pendant les vacances</b> précédant le semestre. J'ai été inspiré par l'engouement mondial pour les échecs, notamment stimulé par la popularité de la série "Le Jeu de la Dame" sur Netflix. J'ai vu dans ce regain d'intérêt pour les échecs une opportunité unique de combiner mon attrait pour ce jeu avec un objectif caritatif.
                <br/><br/>
                "Mat' moi ça" a été conçu comme un tournoi caritatif d'échecs en ligne, en <b>collaboration avec Chess.com et l'UNICEF</b>. Chess.com, en tant que plateforme leader mondiale des échecs en ligne, offrait l'environnement idéal pour accueillir le tournoi, tandis que le partenariat avec l'UNICEF soulignait notre engagement envers une cause humanitaire, celle de soutenir les enfants dans le besoin à travers le monde.
                    `,
            }, {
                element: "Mise en œuvre",
                content: `
                    L'organisation de "Mat' moi ça" a débuté sans aucune base préexistante : ni contacts, ni expérience dans le domaine de l'événementiel. Face à cette page vierge, nous avons d'abord défini des rôles clairs au sein de notre équipe de cinq personnes : un chef de projet, un trésorier, et des secrétaires. Bien que chacun ait eu des responsabilités spécifiques, <b>la collaboration et l'entraide</b> entre les membres de l'équipe ont été essentielles, permettant une flexibilité et une efficacité accrues dans la réalisation de nos tâches respectives.
                    <br/><br/>
                    La mise en place <b>d'objectifs SMARTER</b> a été fondamentale pour la conduite efficace du projet "Mat' moi ça". Cette méthode nous a aidés à structurer nos objectifs de manière claire et à orienter nos actions de manière cohérente tout au long du projet.
                    <br/><br/>
                    L'importance des objectifs SMARTER réside dans leur capacité à guider l'équipe avec des directives claires et réalisables, tout en permettant un suivi et une évaluation réguliers des progrès. Chaque objectif a été conçu pour aligner nos actions avec les résultats souhaités, assurant ainsi que chaque étape du projet contribuait de manière significative à sa réussite globale. <b>Cette approche structurée</b> a été essentielle pour naviguer efficacement dans les complexités de l'organisation d'un événement caritatif d'envergure, et a permis d'assurer que le projet "Mat' moi ça" atteignait ses objectifs avec succès et pertinence.
                    <br/><br/>
                    Les objectifs définis ont été variés, allant de la collecte de fonds pour l'UNICEF à la promotion du tournoi, en passant par la gestion financière et la communication avec les participants. Chaque objectif a été décomposé en tâches spécifiques, assignées à des membres de l'équipe en fonction de leurs compétences. Cette approche a permis une répartition équilibrée des responsabilités et une collaboration efficace, garantissant que chaque aspect du projet était pris en charge de manière professionnelle et cohérente.
                    <br/><br/>
                    Le projet n'a pas été exempt de <b>risques</b>, en raison du délai imposé par le semestre nous devions organiser notre tournoi en été, pendant une période où les mesures sanitaires liées à la pandémie de COVID-19 étaient de plus en plus souples. Ces contraintes ont potentiellement affecté la participation des joueurs et la visibilité de l'événement.
                    <br/><br/>
                    <b>La première étape</b> a consisté à établir les règles du tournoi et les conditions de participation pour assurer à la fois une expérience de qualité et la génération de fonds. Compte tenu des restrictions liées à la pandémie de COVID-19, nous avons opté pour un format de tournoi en ligne. Cette décision s'est avérée judicieuse, non seulement pour des raisons sanitaires, mais aussi pour la facilité d'accès et le potentiel d'attirer un grand nombre de participants.
                    <br/><br/>
                    <b>J'ai personnellement choisi le format Blitz</b> pour le tournoi, un mode de jeu rapide et populaire aux échecs, où chaque joueur dispose d'un temps limité de 3 minutes pour l'ensemble de la partie. Ce format est idéal pour un tournoi en ligne car il permet de jouer de nombreuses parties en un temps réduit, rendant le tournoi dynamique et captivant. Le prix d'entrée a été fixé à 3 euros, un montant accessible pour encourager une large participation.
                    <br/><br/>
                    La mise en œuvre du tournoi nécessitait une plateforme d'accueil fiable avec un <b>dispositif anti-triche</b>, une <b>association partenaire</b> pour la gestion des fonds, et des <b>lots attractifs</b> pour les gagnants. Nous avons lancé une campagne d'emailing intensive à l'aide de mail que j'ai personnellement rédigé, ciblant des plateformes d'échecs, des associations caritatives et des boutiques spécialisées pour acquérir des lots. Parallèlement, j'ai travaillé sur la création d'une identité visuelle à l'aide du logiciel Photoshop et nous avons commencé à établir une stratégie de communication sur les réseaux sociaux pour bâtir une communauté et générer de l'engouement autour de l'événement à travers une page Facebook ainsi qu’un profil Twitter.
                    <br/><br/>
                    Après plusieurs démarches, nous avons réussi à établir un partenariat avec <b>Chess.com</b>, qui a accepté d'héberger le tournoi, d'en faire la promotion et de fournir des lots sous forme d'abonnements premium. Nous avons également conclu un partenariat avec l'<b>UNICEF France</b>, à qui les fonds seraient reversés. Ces partenariats se sont conclus à la suite des mails envoyés et à travers des réunions que j'animais de par mon rôle de chef de projet. Malheureusement, une collaboration prévue avec le journal SudOuest n'a pas abouti par manque de temps.
                    <br/><br/>
                    La recherche de lots supplémentaires et la promotion du tournoi par des influenceurs d'échecs ont été plus difficiles que prévu, avec de nombreux refus et des engagements non tenus. Malgré ces obstacles, nous avons persévéré, concentrant nos efforts sur le marketing et la communication pour assurer le succès de l'événement.
                    <br/><br/>
                    À l'approche du tournoi "Mat' moi ça", le mois précédant l'événement a vu une intensification significative de nos <b>efforts de communication</b>. Conscients de l'importance cruciale de la promotion pour le succès de notre tournoi, nous avons mis en place une stratégie de communication dynamique, centrée autour de notre page Facebook et Twitter.
                    <br/><br/>
                    Des <b>publications</b> régulières <b>étaient programmées</b> pour maintenir l'engagement et étendre notre portée. Ces posts comprenaient des mises à jour sur l'actualité du tournoi, des annonces de nos partenaires Chess.com et UNICEF, ainsi que des explications détaillées des règles du tournoi. J'imaginais personnellement l'idée de ces posts et délaiguais leur rédaction à mes camarades.
                    <br/><br/>
                    De leur côté, nos partenaires de Chess.com ont joué un rôle clé dans la promotion de l'événement. Ils ont respecté leur engagement en faisant la publicité de notre tournoi sur leur page Facebook et en le mettant en avant sur la page d'accueil de la version française de leur site. Cette exposition a considérablement augmenté notre visibilité et attiré de nombreux participants.
                    <br/><br/>
                    À notre grande satisfaction, nos efforts de communication ont également <b>attiré l'attention de la Fédération Française des Échecs</b>. Grâce à notre présence active et notre engagement sur les réseaux sociaux, la Fédération a choisi de relayer l'information sur notre tournoi à travers leurs canaux officiels, notamment sur Twitter et Facebook. Cette reconnaissance par une institution aussi respectée a non seulement validé nos efforts, mais a également élargi notre audience et renforcé la crédibilité de l'événement. Nous avons également attiré l’intérêt de plusieurs pages Facebook consacrés aux échecs qui ont relayé le tournoi.
                    <br/><br/>
                    La gestion financière de "Mat' moi ça" a également joué un rôle crucial dans le déroulé global du projet, surtout compte tenu de son importance pour l'évaluation finale de notre semestre. Nous avons abordé cet aspect avec rigueur, conscient que chaque euro comptait et devait être justifié.
                    <br/><br/>
                    Pour assurer une gestion transparente et efficace du budget, nous avons mis en place un <b>plan de trésorerie détaillé</b> sous forme d'un fichier Excel. Ce document était la base de notre suivi financier, où chaque sortie et entrée d'argent était recensée. Nous avions catégorisé les dépenses et les revenus pour faciliter le suivi et l'analyse : frais de marketing, coûts de communication, dépenses liées à la plateforme du tournoi, et bien sûr, les fonds collectés pour l'UNICEF.
                    <br/><br/>
                    Ce suivi rigoureux nous a permis de maintenir un contrôle strict sur le budget, d'identifier rapidement les écarts par rapport aux prévisions et de prendre des décisions éclairées sur l'allocation des ressources. Chaque dépense était soigneusement examinée et approuvée par l'équipe, assurant que nous maximisions l'impact de chaque euro dépensé.
                    <br/><br/>
                    La transparence était également un aspect clé de notre gestion financière. Nous nous sommes assurés que toutes les parties prenantes, y compris nos partenaires et les participants au tournoi, étaient informées de la manière dont les fonds étaient utilisés à l’aide de documents nous ayant été fournis par l’UNICEF. Cette approche a renforcé la confiance dans notre gestion du projet et a souligné notre engagement envers la responsabilité et l'intégrité.
                    `,
            }, {
                element: "Résultat",
                content: `
                Le projet "Mat' moi ça", bien que mené avec détermination et passion, n'a pas atteint les objectifs initialement fixés en termes de collecte de fonds. Nous avions prévu de collecter 500 euros de bénéfices au profit de l'UNICEF, mais le montant final collecté s'est limité à <b>100 euros</b>. Cette différence considérable entre l'objectif et le résultat est principalement due à un nombre insuffisant de participants au tournoi, qui n'a attiré que 8 joueurs.
                <br/><br/>
                L'une des principales raisons de cette participation limitée a été la date de l'événement, qui coïncidait avec la fin du confinement et le début de l'été. Cette période a probablement incité de nombreuses personnes à privilégier d'autres activités après une longue période de restrictions. Bien que conscient de ce possible obstacle, <b>notre équipe était contrainte par le calendrier académique</b>, nécessitant que le tournoi soit organisé et évalué avant la fin du semestre.
                <br/><br/>
                Outre ces circonstances extérieures, nous reconnaissons également que certaines erreurs de notre part ont contribué à ce résultat. Notre analyse post-événement a révélé des lacunes dans notre stratégie de communication et de marketing, ainsi que dans notre approche de mobilisation des joueurs et des sponsors. Bien que nos efforts de promotion sur les réseaux sociaux et la collaboration avec Chess.com et l'UNICEF aient été significatifs, ils <b>n'ont pas suffi à attirer le nombre de participants escompté.</b>
                    `,
            }, {
                element: "Regard critique",
                content: `
                En rétrospective, le projet "Mat' moi ça" a été une aventure riche en enseignements, malgré le non-atteinte des objectifs fixés. En tant que chef de projet, je reconnais qu'il y a eu plusieurs facteurs qui ont influencé le résultat final, et ce regard critique me permet de tirer des leçons précieuses pour l'avenir.
                <br/><br/>
                Un des principaux défis rencontrés a été la synchronisation de notre tournoi avec la fin du confinement et le début de l'été. Cette période a probablement limité l'intérêt et la disponibilité des participants potentiels. De plus, <b>notre stratégie de marketing et de communication aurait pu être plus robuste et ciblée</b>. Bien que nous ayons réussi à créer un impact sur les réseaux sociaux, il semble que notre portée n'ait pas suffi à engager un large public. En outre, nous aurions pu explorer d'autres canaux et stratégies pour attirer des joueurs et des sponsors, tels que des partenariats plus étroits avec des clubs d'échecs locaux ou des interventions dans des événements communautaires.
                <br/><br/>
                Cependant, je ne considère pas "Mat' moi ça" comme un échec total. Il est important de reconnaître les succès que nous avons réalisés, notamment notre collaboration fructueuse avec Chess.com et l'UNICEF. Travailler directement avec une plateforme d'échecs de renom et une organisation humanitaire internationale a été une réalisation remarquable, témoignant de notre capacité à établir des partenariats significatifs.
                <br/><br/>
                De plus, le contenu que nous avons créé pour les réseaux sociaux a attiré l'attention de la Fédération Française des Échecs, <b>un accomplissement non négligeable</b> qui a donné une visibilité supplémentaire à notre projet. Cette reconnaissance par une institution aussi respectée souligne la qualité et l'impact de notre travail de communication.
                    `,
            }, {
                element: "Evolution",
                content: `
                Bien que "Mat' moi ça" <b>n'ait pas connu de suite ou de renouvellement</b>, l'expérience acquise au cours de ce projet a été d'une valeur inestimable, me dotant de compétences transférables et essentielles pour mon développement professionnel et personnel.
                <br/><br/>
                L'une des compétences clés que j'ai pu affiner est la communication sur les réseaux sociaux. Ce projet m'a permis de comprendre les nuances de création et de partage de contenu engageant, ainsi que l'importance de bâtir une communauté en ligne. Ces compétences sont cruciales dans le monde moderne, où les plateformes numériques jouent un rôle prépondérant dans le succès de nombreux projets et entreprises.
                <br/><br/>
                Par ailleurs, mes interactions avec Chess.com m'ont permis de développer des compétences significatives en matière de <b>relations humaines professionnelles et de négociation</b>. La gestion des discussions, la présentation de nos objectifs de manière convaincante et la recherche d'un terrain d'entente ont été des aspects essentiels pour établir un partenariat fructueux. Ces compétences en négociation et en communication interpersonnelle sont des atouts majeurs pour toute future collaboration professionnelle.
                <br/><br/>
                De plus, la gestion du budget du projet a été une expérience formatrice, m'enseignant à gérer efficacement les ressources financières, à suivre les dépenses et les revenus, et à prendre des décisions financières judicieuses. La capacité à gérer un budget est une compétence fondamentale dans la gestion de projets de toutes sortes, qu'ils soient personnels ou professionnels.
                <br/><br/>
                En conclusion, bien que "Mat' moi ça" n'ait pas été poursuivi, les compétences que j'ai développées grâce à ce projet comme la <b>communication digitale</b>, <b>négociation</b>, <b>relations professionnelles</b> et <b>gestion financière</b>, sont des atouts précieux. Ces compétences me seront utiles dans tous mes projets futurs, me permettant de naviguer avec succès dans divers environnements professionnels et de mener à bien des initiatives ambitieuses.
                    `,
            }, {
                element: "Compétences liées",
                content: `Gestion de Budget, Communication Digitale, Express JS, Base de données`
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
                Le projet HYPOTECH a été réalisé dans le <b>cadre de mes études</b> au sein d’Intech Sud Dax, lors de ma troisième année scolaire, en collaboration avec quatre camarades de classe. Cette <b>application mobile Android</b> native, développée en <b>Java</b>, est née de l'idée innovante d'un professionnel ayant une expérience de quinze ans dans le secteur immobilier. L'objectif principal d'HYPOTECH était de répondre à une question cruciale : "Comment faciliter et accélérer le suivi d'un projet de vente immobilière tout en automatisant certaines tâches chronophages ?”
                <br/><br/>
                Ce projet académique s'inscrivait dans un contexte où le marché offrait déjà plusieurs solutions technologiques dédiées à l'immobilier. Toutefois, ces solutions existantes ne répondaient pas entièrement aux besoins spécifiques identifiés par notre collaborateur issu du domaine immobilier. Notre défi était donc de créer une application qui non seulement comble ces lacunes, mais offre également une valeur ajoutée unique à ces professionnels.
                <br/><br/>
                <b>L'application visait à simplifier la gestion des ventes immobilières</b>, en proposant des fonctionnalités innovantes pour le suivi des projets et l'automatisation de tâches répétitives et fastidieuses. L'accent était mis sur l'efficacité, la facilité d'utilisation et l'apport d'outils permettant une meilleure gestion du temps pour les professionnels du secteur.
                    `,
            }, {
                element: "Mise en œuvre",
                content: `
                Le développement d'HYPOTECH, en tant que projet académique, a impliqué une gestion autonome et directe des échanges avec notre client, qui était également l'initiateur de l'idée de l'application. Ces interactions se déroulaient principalement par courriel et lors de réunions régulières, nous permettant d'obtenir des retours directs et de comprendre précisément les attentes du client.
                <br/><br/>
                Notre objectif était de lui fournir une <b>application fonctionnelle en guise de maquette</b> afin d'être présentée comme base pour un futur développement auprès de professionnels.
                <br/><br/>
                Le risque principal du projet était la potentielle non disponibilité du client pour des retours réguliers. Pour pallier à ce risque, nous avons mis en place une communication régulière et des points de contrôle fréquents pour nous assurer que le développement de l'application était aligné avec les attentes du client.
                <br/><br/>
                Pour mener à bien ce projet, nous avons adopté la méthode <b>Scrum</b>, une approche agile de gestion de projet qui favorise la flexibilité, la collaboration et l'adaptation rapide aux changements. L'une des premières étapes clés a été la réunion de lancement avec le <b>Product Owner</b>, au cours de laquelle nous avons défini l'ensemble des <b>User Stories</b> du projet. Ces User Stories représentaient les différentes fonctionnalités et exigences que notre application devait satisfaire, et leur définition claire a été essentielle pour orienter notre travail de développement.
                <br/><br/>
                Un de mes camarades a assumé le rôle de ScrumMaster pour ce projet. Sa responsabilité était de faciliter la communication avec le Product Owner, de s'assurer que les réunions Scrum se déroulent efficacement et que les obstacles éventuels à la progression du projet soient identifiés et soient résolus. J'ai également eu l'occasion d'expérimenter ce rôle dans le cadre d'un autre projet académique, ce qui m'a permis de développer des compétences complémentaires en matière de gestion de projet agile.
                <br/><br/>
                Notre équipe travaillait en <b>sprints d'une durée d'une semaine</b>, au cours desquels nous nous répartissions les User Stories à développer. Cette méthode nous permettait de nous concentrer sur des tâches spécifiques et de progresser de manière efficace et structurée. Toutes les deux semaines, nous livrions une version de l'application au Product Owner pour évaluation et feedback. Cette fréquence de livraison bi-hebdomadaire nous aidait à rester alignés avec les attentes du client et à apporter rapidement les ajustements nécessaires.
                <br/><br/>
                Lors de notre première livraison dans le cadre du projet HYPOTECH, nous avons présenté une version initiale de l'application qui comprenait plusieurs écrans conçus à partir de maquettes Figma. <b>Je me suis chargé de les produire</b>, en tenant compte des besoins et des attentes du Product Owner à partir des User Story que nous avions définies lors du Kick off du projet.
                <br/><br/>
                Cette première version de l'application était axée sur l'aspect visuel et l'expérience utilisateur. Elle consistait principalement en des interfaces utilisateur sans fonctionnalités opérationnelles sous-jacentes. L'objectif principal à ce stade était de valider le design général et le flow de l'application avec le Product Owner. Nous voulions nous assurer que l'aspect visuel et l'ergonomie de l'application correspondaient aux attentes et étaient suffisamment intuitifs pour l'utilisateur final.
                <br/><br/>
                Cette approche nous a permis de recueillir des retours précoces sur l'aspect visuel et la convivialité de l'application avant de nous plonger dans le développement des fonctionnalités réelles. Elle a également donné au Product Owner une vision claire de l'aspect que l'application aurait une fois terminée, et a offert une base solide pour les itérations futures.
                <br/><br/>
                Lors des sprints futurs, une des fonctionnalités clés que j'ai développées était un <b>système de notification</b> pour informer les notaires, les vendeurs, les agences immobilières et les acheteurs de l'avancement des dossiers immobiliers. Par exemple, lorsqu'un document était ajouté au dossier, une notification était envoyée aux parties concernées. Sur Android natif, cela a impliqué l'utilisation des services de notification intégrés à la plateforme. <b>J'ai programmé des triggers</b> au sein de l'application qui déclenchaient ces notifications en fonction de certaines actions, comme l'ajout de documents au sein d'un projet de vente immobilière dans l'application. Ces notifications étaient essentielles pour maintenir toutes les parties impliquées informées et engagées tout au long du processus de vente.
                <br/><br/>
                Une autre tâche importante a été de permettre aux agences immobilières de personnaliser leur espace sur l'application. Cela leur <b>permettait d'incorporer leur identité visuelle</b> et de créer un environnement plus personnalisé pour leurs clients. J'ai développé cette fonctionnalité en créant des options de personnalisation dans l'application, permettant aux agences de modifier les couleurs, les logos et d'autres éléments de design pour refléter leur marque. Cette personnalisation contribuait à une meilleure expérience utilisateur pour les clients des agences, renforçant ainsi l'attrait de l'application.
                <br/><br/>
                En outre, <b>j'ai mis en place un système de connexion entre utilisateurs</b>, semblable à celui de LinkedIn, pour faciliter l'interaction entre les parties prenantes d'un même projet immobilier. Cela permettait essentiellement aux utilisateurs de consulter les coordonnées des autres parties impliquées. La mise en œuvre de ce système nécessitait une planification minutieuse pour assurer la sécurité et la confidentialité des données des utilisateurs, tout en offrant une plateforme intuitive pour l'établissement de connexions professionnelles.
                    `,
            }, {
                element: "Résultat",
                content: `
                Le projet HYPOTECH, bien qu'ambitieux, a rencontré des défis significatifs lors de sa mise en œuvre qui ont influencé le résultat final. Malgré nos efforts et notre engagement, certaines des fonctionnalités clés envisagées par le Product Owner n'ont <b>pas pu être pleinement réalisées dans les délais impartis</b>.
                <br/><br/>
                L'une des fonctionnalités non fournies était la capacité de scanner directement des documents via l'application, avec une exigence supplémentaire de refuser les fichiers peu lisibles. Cette fonctionnalité, bien que techniquement intéressante, s'est avérée complexe à intégrer dans le temps imparti, compte tenu du nombre et de la complexité des autres fonctionnalités demandées.
                <br/><br/>
                De plus, un mois avant la livraison finale, <b>le Product Owner a considérablement modifié ses attentes</b> en termes de design et d'expérience utilisateur. Alors que l'approche initiale était axée sur un design sobre et simple, il a souhaité intégrer des éléments plus extravagants, tels que l'ajout de GIFs sur tous les écrans. Ces changements tardifs ont posé des défis supplémentaires, car ils nécessitaient une refonte significative de l'interface utilisateur à un stade avancé du projet.
                <br/><br/>
                En outre, l'application a été livrée sans tests automatisés. Bien que conscients de l'importance des tests pour assurer la qualité et la stabilité de l'application, le temps limité et les ressources disponibles ne nous ont pas permis d'implémenter un cadre de test complet.
                <br/><br/>
                En conséquence, la version finale de l'application <b>n'a pas totalement satisfait les attentes du Product Owner</b>. Cependant, ce projet a été une expérience d'apprentissage précieuse pour notre équipe. Il a souligné l'importance de la <b>communication claire et continue avec le client</b>, de la <b>gestion efficace du temps et des ressources</b>, et de l'<b>adaptabilité face aux changements inattendus</b>. Bien que nous n'ayons pas pleinement atteint l'objectif initial, le projet HYPOTECH a contribué à développer nos compétences en développement d'applications mobiles et en gestion de projets, et nous a fourni des enseignements essentiels pour nos futures initiatives.
                    `,
            }, {
                element: "Regard critique",
                content: `
                En réfléchissant à mon expérience avec le projet HYPOTECH, je ressens une certaine déception vis-à-vis de mes réalisations personnelles. Malgré mon engagement et mes efforts, j'ai rencontré des difficultés qui ont affecté ma contribution au projet.
                <br/><br/>
                Une des principales sources de frustration a été la <b>gestion des bugs</b>. J'ai souvent été ralenti par des problèmes techniques inattendus qui nécessitaient un temps considérable pour être résolus. De plus, la gestion de notre dépôt Git a été une source majeure de complications. L'utilisation limitée du système de branches a entraîné de fréquents conflits de merge, requérant des corrections importantes et prenant du temps précieux qui aurait pu être consacré au développement.
                <br/><br/>
                Le volume élevé de User Stories généré après chaque réunion était également une source de stress significative. La pression pour accomplir un grand nombre de tâches dans un laps de temps restreint m'a parfois conduit à bâcler mon travail. Cela s'est souvent traduit par l'apparition de bugs lors des tests effectués par mes camarades, ce qui m'a fait prendre conscience de <b>l'importance de produire un travail solide et bien testé avant de passer à la tâche suivante</b>.
                <br/><br/>
                Cette expérience a été une leçon précieuse sur l'importance d'une <b>gestion efficace du temps et des ressources</b>, ainsi que sur la nécessité d'une approche méthodique et rigoureuse dans le développement logiciel. J'ai appris que la qualité ne doit pas être sacrifiée au profit de la quantité et que prendre le temps de bien faire les choses dès le début, peut économiser beaucoup d'efforts et de frustrations par la suite.
                    `,
            }, {
                element: "Evolution",
                content: `
                L'évolution du projet HYPOTECH a pris une tournure intéressante après la conclusion de notre phase de développement académique. Notre travail, bien qu'ayant rencontré des défis et des limitations, <b>a jeté les bases pour une suite plus professionnelle du projet</b>.
                <br/><br/>
                Notre application a servi de maquette fonctionnelle. Elle a joué un rôle crucial en tant que démonstration technique et support pour illustrer le potentiel et les capacités de l'idée initiale. Cette maquette a été <b>présentée à une équipe de développeurs professionnels</b> engagés ultérieurement par notre ancien Product Owner.
                <br/><br/>
                Ces développeurs professionnels ont pris le relais pour transformer <b>notre prototype académique en une application plus raffinée et commercialement viable</b>. Ils ont pu s'appuyer sur la structure, les fonctionnalités et les idées que nous avions mises en place, en les améliorant et en les adaptant aux standards professionnels et aux exigences du marché.
                <br/><br/>
                Pour ma part, voir notre travail initial servir de fondation pour un développement ultérieur a été une source de satisfaction. Cela a confirmé la valeur de notre contribution initiale et a démontré que nos idées et notre mise en œuvre pouvaient inspirer et guider le travail d'une équipe de développement plus expérimentée.
                <br/><br/>
                Cette transition de notre projet académique à une initiative professionnelle souligne <b>l'importance de la phase de conception et de développement préliminaire</b> dans les projets de logiciel. Même si notre version n'était pas le produit final, elle a joué un rôle déterminant dans le cheminement du concept vers une réalisation plus aboutie. Cette expérience a renforcé ma compréhension de l'importance de la phase de prototypage et de la flexibilité dans le développement logiciel, des compétences précieuses pour mes futurs projets dans le domaine.
                    `,
            }, {
                element: "Compétences liées",
                content: `Gestion de Projet Agile et Scrum, Gestion du Temps et Organisation, Git`
            }
        ]
    }
]