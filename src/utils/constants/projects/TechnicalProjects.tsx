import { IProject } from "../../types";

//TODO: Add images
//TODO: Find a way to redirect to skills or projects page when clicking on a skill or a project

export const technicalProjects: IProject[] = [
    {
        name: "YourNight",
        description: "Application mobile de gestion de soirées",
        technologies: ["React Native", "NodeJS", "Base de données"],
        icon: "img/projectsIcon/YourNight.svg",
        link: "https://www.yournight.net/",
        explanation: [
            {
                element: "Contexte",
                content: `
                    En tant qu’étudiant il m’arrive de participer et organiser des soirées entre amis.
                    Lors de la préparation de ces soirées, un problème revenait souvent, nous ne savions pas quoi amener et une fois que chacun achetait ce qu’il voulait, il fallait que nous consacrions du temps pour définir le montant que chacun devait aux autres.
                    <br/><br/>
                    La question qui s’est posée à un moment donné a été : Comment faire pour faciliter et fluidifier l’organisation de nos soirées ?
                    <br/><br/>
                    C’est à ce moment que j'ai conceptualisé YourNight. Cette application mobile est née de cette nécessité de rationaliser le processus de préparation des soirées en permettant une gestion collective des achats et la création collaborative d'une playlist musicale. L'objectif était de transformer les préparatifs souvent fastidieux en une expérience fluide et agréable.
                `,
                illustration: "img/projects/YourNight/1.png"
            }, {
                element: "Mise en œuvre",
                content: `
                    La réalisation de YourNight s'est articulée autour de plusieurs axes : 
                    <br/><br/>
                    La création d'une charte graphique évoquant l'atmosphère nocturne et festive, la conception d'une interface intuitive, la réalisation d'une application facile à utiliser tout en ayant défini les technologies utiles à son développement au préalable, avant de finalement mener une campagne marketing pour convaincre puis fidéliser de nouveaux utilisateurs en France. 
                    <br/><br/>
                    Cependant, ce projet n'était pas exempt de risques. Le premier défi résidait dans le financement. Un investissement initial était nécessaire pour couvrir les coûts de l'hébergement des services et le déploiement sur les stores. Même si ces coûts ne me mettaient dans une situation financière délicate, j’ai du les réfléchir afin que le modèle économique de l’application puisse les rembourser, ce qui est préférable en tant qu’étudiant et même plus généralement lorsque l’on se lance dans un projet. De plus, en tant que seul développeur, j'ai dû faire face à des défis de gestion de projet. Des estimations incorrectes auraient pu entraîner des retards significatifs, impactant le lancement de l'application qui été prévu pour l’été 2023. La limitation des ressources matérielles pouvait aussi restreindre la capacité de tester l'application sur différents appareils, un facteur critique pour assurer la compatibilité et la réactivité.
                    <br/><br/>
                    Une fois réalisé une étude sur quelques jours des étapes et risques évoqués précédemment tout en étudiant d’autres éléments tels que le marché et concurrents auxquels j’allais me confronter afin de me démarquer de ceux-ci, il était temps pour moi d’imaginer une charte graphique cohérente avec l’univers de la nuit et des événements festifs via Photoshop, je travaillais en parallèle sur une première maquette de l’application à l’aide de l’outil Figma afin de traduire visuellement mes idées de fonctionnalités et le “workflow” général. Après avoir validé une première maquette UI/UX jugée par moi-même convaincante et défini les technologies de développement, il a été question de développer les premiers composants réutilisables (boutons, champs de texte, les différentes “cards”) permettant de limiter toute duplication de code et les premiers écrans. De là est venu une longue période de développement, plusieurs remises en questions et changements avant de voir venir au jour une première version dont j’ai déployé le backend sur un VPS via Docker et soumis le frontend au Google Play Store et à l’App Store.
                    <br/><br/>
                    Il était maintenant l’heure pour moi de faire appel pour la première fois à des externes et plus particulièrement à mes amis afin de tester l’application en situation réelle. Quelques bugs ont pu être décelés au cours de cette phase comme par exemple au niveau des notifications qui fonctionnaient bien sur IOS mais pas sur Android, ou encore la possibilité d’entrer des nombres négatifs en tant que prix ou quantité d’un élément devant être présent à la soirée.
                    <br/><br/>
                    Après quelques mises à jour visant à corriger le genre de problèmes énoncés précédemment j’ai pu être fier de voir le résultat de mon travail disponible en libre téléchargement pour le grand public.
                    <br/><br/>
                    Malgré certains obstacles, une planification stratégique et une gestion de projet agile ont été cruciales pour naviguer à travers ces défis. La flexibilité et l'adaptabilité ont été mes alliés les plus fiables pour surmonter les problèmes rencontrés.
                    `,
                illustration: "img/projects/YourNight/GlobalScreens.png"
            }, {
                element: "Résultat",
                content: `
                    Aujourd'hui, YourNight n’est pas encore la nouvelle application à succès qui comptabilise des millions de téléchargements. Actuellement, je peaufine ma stratégie marketing, une étape cruciale que je n'ai pas encore eu l'opportunité de déployer pleinement.
                    <br/><br/>
                    Cependant, après presque 1 an de travail durant une partie mon temps libre, ce projet m’a énormément apporté sur bien d’autres aspects et c’est déjà une première victoire non négligeable. La création de l’application a premièrement été un gain d’expérience inestimable qui me servira tout au long de ma carrière professionnelle. Elle m'a permis de m'immerger pleinement dans la conduite d'un projet, depuis l'ébauche de la charte graphique et le design fonctionnel de l'application mobile, jusqu'à la maîtrise de compétences diverses en développement.
                    <br/><br/>
                    Cependant, après presque 1 an de travail durant une partie mon temps libre, ce projet m’a énormément apporté sur bien d’autres aspects et c’est déjà une première victoire non négligeable. La création de l’application a premièrement été un gain d’expérience inestimable qui me servira tout au long de ma carrière professionnelle. Elle m'a permis de m'immerger pleinement dans la conduite d'un projet, depuis l'ébauche de la charte graphique et le design fonctionnel de l'application mobile, jusqu'à la maîtrise de compétences diverses en développement.
                    <br/><br/>
                    J'ai développé une compréhension approfondie des subtilités du déploiement d'API, de la gestion de bases de données non relationnelles, et de l'intégration continue, ce qui a renforcé mes capacités techniques. De plus, les compétences en marketing que j'ai acquises en conceptualisant la campagne de publicité pour YourNight ont élargi mon expertise et ma polyvalence.
                    <br/><br/>
                    L'un des aspects les plus gratifiants fut sans doute la liberté créative qu'elle m'a offerte. Le processus de création, de l'élaboration de la charte graphique à l'architecture de l'expérience utilisateur, a été une occasion d’exprimer ma vision et mes idées sans contrainte. Cette expérience a non seulement renforcé ma confiance en ma capacité à innover, mais m'a également apporté une grande satisfaction personnelle. Voir mes concepts se concrétiser en une application fonctionnelle a été une source de joie immense et une validation de mon potentiel créatif.
                    <br/><br/>
                    Ce projet a également accru ma visibilité et ma crédibilité auprès de de futurs clients potentiels, établissant une base solide pour de futures opportunités professionnelles. Que ce soit à travers la complexité de la gestion de projet ou le raffinement du design et de l'expérience utilisateur, chaque étape a contribué à mon évolution en tant que professionnel du numérique.
                    `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Regard critique",
                content: `
                    Avec le recul, mon regard sur le projet YourNight est teinté d'une reconnaissance pour les nombreuses leçons qu'il m'a enseignées. L'une des plus cruciales a été la nécessité d'anticiper précisément le fonctionnement et le flux de l'application dès le début. Concevoir le parcours utilisateur avant même d'écrire la première ligne de code a permis de guider le développement de manière cohérente et efficace. J'ai également appris l'importance de se fixer des deadlines réalistes, permettant de structurer le travail et de maintenir la dynamique du projet.
                    <br/><br/>
                    La gestion financière s'est révélée être un autre domaine d'apprentissage essentiel. Définir un budget détaillé et évaluer les options d'hébergement avant le lancement du développement a été fondamental pour maintenir les coûts sous contrôle et éviter les dépassements budgétaires imprévus.
                    <br/><br/>
                    J’ai également réalisé avoir fait certaines erreurs, notamment ma plus conséquente qui est d’avoir voulu sortir une première version parfaite, ce qui s’est avéré comme n’étant pas une bonne solution. Il aurait été préférable de sortir une première version minimaliste afin de corriger le plus tôt possible les premiers bugs et ne pas avoir à tous les gérer en même temps. Cela aurait également été une occasion de valider ou non un intérêt par de potentiels utilisateurs et de jauger de l’utilité et de l’engouement généré par les différentes fonctionnalités.
                    <br/><br/>
                    Une autre erreur a été de ne pas avoir assez anticiper le déploiement sur les différents stores d’applications. Cela m’a couté une certaine période de temps avant que YourNight soit acceptée et mise en libre téléchargement. Une meilleure connaissance de la politique des stores m’aurait permis d’adapter le développement en fonction et éviter toute perte de temps.
                    <br/><br/>
                    Cependant ces erreurs me permettront de ne plus les commettre à l’avenir, je m’en servirai pour continuer de façonner ma démarche dans les projets futurs.
                    `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Evolution",
                content: `
                    Dans l'immédiat, YourNight s'oriente vers sa consolidation.
                    <br/><br/>
                    À court terme, l'objectif est d'instaurer un système de récompenses et de "gamification" pour fidéliser la base d'utilisateurs existants, en rendant leur expérience encore plus engageante et personnalisée. Parallèlement, une campagne marketing soutenue et créative est en train d’être finalisée et sera mise en place pour attirer de nouveaux utilisateurs, afin de bâtir une communauté dynamique autour de l'application.
                    <br/><br/>
                    À long terme, le développement de YourNight s'envisage avec ambition à condition qu’une solide base d’utilisateurs existe : 
                    <br/><br/>
                    L'application évoluera pour englober une palette plus large de fonctionnalités liées à l'organisation d'événements. L'introduction de systèmes de sondage est notamment prévue pour permettre aux utilisateurs de décider collectivement des activités de leur soirée, transformant YourNight en un outil complet pour la planification d'événements festifs. Ces avancées sont envisagées à fin de faire de l’application un moyen incontournable pour organiser ses soirées.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }
        ]
    }, {
        name: "ISIS",
        description: "Application web servant au milieu de l'industrie",
        technologies: ["React", "NodeJS", "Base de données"],
        icon: "img/projectsIcon/YourNight.svg",
        link: "https://www.yournight.net/",
        explanation: [
            {
                element: "Contexte",
                content: `
                    Isis est le premier projet professionnel en entreprise sur lequel j’ai travaillé. C’est une application web sur laquelle j’ai participé au développement au cours de mon seul et unique stage. 
                    <br/><br/>
                    L’idée du projet est émergée des dirigeants de la société Holis Consulting qui souhaitaient améliorer leur productivité lors de la réalisation de projets d’inspections industrielles afin de se démarquer d’autres entreprises proposant les mêmes services et ayant un nombre d’effectifs plus conséquent.
                    <br/><br/>
                    Un projet d’inspection industrielle s’articule principalement sur des mesures réalisées à partir de calculs en fonction de certains paramètres afin de connaître l’état général d’un site industriel (Exemple : Calcul de la corrosion d’un tuyau sachant que du gaz traverse celui-ci).
                    <br/><br/>
                    La questions qu’ils se sont posés a été la suivante : Que pouvons nous automatiser afin d’améliorer notre efficacité ?
                    <br/><br/>
                    De cette réflexion est née l’application web ISIS qui a pour objectif d’automatiser certaines tâches chronophages liées à l’inspection industrielle et d’améliorer la répartition du travail entre les différents collaborateurs d’un projet.
                    <br/><br/>
                    Le but ici est de venir en aide aux ingénieurs salariés au sein de la boîte sans viser une commercialisation de l’outil.
                    <br/><br/>
                    Étant donné le fait que le logiciel est utilisé dans un contexte très technique et propre au milieu de l’ingénierie d’inspection, il me semble important d’en expliquer le fonctionnement plus en détail. Dans un premier temps, l’ingénieur en inspection industrielle importe des fichiers au format Excel et PDF dans ISIS (ce sont les fichiers contenant les données essentielles à l’élaboration d’un projet d’inspection). ISIS se charge dans un second temps d’extraire les données des fichiers Excel afin de les stocker en base de données et de stocker les fichiers au format PDF dans le NAS de l’entreprise. Le but principal du logiciel est d’obtenir un bien meilleur suivi de l’avancée d’un projet d’inspection tout en facilitant le travail en équipe sur un même projet tout en permettant la génération automatisée des livrables.
                    `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Mise en œuvre",
                content: `
                    Lorsque j’ai rejoint les rangs d’Holis Consulting, j’avais pour premier objectif d’aider le développement de la solution ISIS jusqu’à sa conclusion. Le projet comprenait déjà des bases solides à mon arrivée et l’architecture ainsi que l’UI/UX de celui-ci étaient déjà imaginés.
                    <br/><br/>
                    Ma contribution personnelle s’est majoritairement accès sur le développement de l’application web, que ce soit côté frontend ou côté backend.
                    <br/><br/>
                    Ma participation a englobé un éventail de fonctionnalités cruciales. Parmi celles-ci, la mise en œuvre d'un système d'assignation de tâches aux utilisateurs s'est avérée essentielle. Ce système permettait aux ingénieurs assignés à un projet d'avoir une vue claire des tâches à accomplir, chaque tâche représentant un élément spécifique du site industriel nécessitant une inspection. Les tâches étaient visibles pour chaque utilisateur concerné dans une interface dédiée, optimisant ainsi la gestion du workflow.
                    <br/><br/>
                    En outre, j'ai intégré un système de commentaires liés aux données, un outil vital pour faciliter la communication au sein de l'équipe d'ingénierie. Parallèlement, j'ai développé une fonctionnalité pour le traitement de fichiers Excel, permettant l'extraction de données pour leur intégration ultérieure dans la base de données via le backend. Cette tâche a également inclus la modification des liaisons entre les tables de la base de données, afin de faciliter la récupération des objets associés à des données spécifiques, illustrés dans une popup lors d'une interaction utilisateur avec l'interface.
                    <br/><br/>
                    Bien que la majorité de ces tâches aient été réalisées avec succès, deux fonctionnalités particulières ont présenté des défis notables. La première concernait la génération de livrables liés aux données du tableau. Ces livrables, constitués de représentations 3D au format PDF (par exemple, un tuyau d'un site industriel) accompagnées d'informations pertinentes pour l'inspection (telles que le taux de corrosion), étaient générés via le logiciel Autocad. Mon rôle consistait à déclencher la génération de ces fichiers par un algorithme en C#, développé par une entreprise tierce. En raison d'une documentation limitée, une analyse approfondie de l'algorithme a été nécessaire pour comprendre les données requises pour son exécution.
                    <br/><br/>
                    La seconde tâche, exigeant une attention particulière, a été l'extraction de données spécifiques à partir de fichiers PDF. J'ai conçu un algorithme pour isoler et récupérer les données pertinentes liées à l'objet en traitement, en identifiant une caractéristique commune, la position des données dans les fichiers, qui a permis de cibler efficacement les informations nécessaires. Ce processus a impliqué une compréhension détaillée de la structure des documents et une programmation minutieuse pour garantir l'extraction précise des données.
                    <br/><br/>
                    Ma participation au projet ISIS chez Holis Consulting s'est caractérisée par une grande autonomie, confiée par l'entreprise suite à la reconnaissance de mes compétences et de ma capacité à livrer des résultats de qualité. J'ai principalement travaillé en solo sur ce projet, avec une intervention occasionnelle de mon maître de stage pour des tâches spécifiques ou des modifications majeures impliquant la base de données.
                    <br/><br/>
                    Concernant la gestion du projet, nous avons adopté une approche s'inspirant de la méthode Scrum, tout en adaptant certains de ses principes à notre contexte. Nous avions des réunions hebdomadaires, chaque mercredi après-midi, pour examiner l'avancement des différentes user stories et pour que je puisse présenter mes contributions principales en termes de fonctionnalités. Cette structure flexible nous a permis de maintenir une progression constante sans les contraintes de réunions quotidiennes ou de livraisons formelles.
                    <br/><br/>
                    En l'absence d'un designer UI/UX dédié durant mon stage, j'ai également eu la responsabilité de traduire les maquettes fournies, initialement réalisées sur PowerPoint puis sur Figma, dans l'application web ISIS. Ce défi supplémentaire a renforcé ma compréhension des aspects visuels et fonctionnels du développement web.
                    <br/><br/>
                    Pour la gestion du code, GitHub et son système de branches ont été utilisés pour synchroniser nos travaux, minimisant ainsi les risques de conflits ou de bugs. J'ai également employé l'outil Notion pour la prise de notes et la définition d'objectifs personnels, ce qui m'a aidé à rester organisé, accélérant ainsi le développement du projet.
                    `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Résultat",
                content: `
                    La solution a pu finalement être livrée aux ingénieurs après deux mois de travail. Celle-ci, lors de son premier déploiement, a connu des bugs qui ont temporairement empêché son utilisation par les ingénieurs de la société. Les problèmes résultaient principalement de la non prise en considération de certains cas spécifiques, difficilement anticipables pour moi, ayant peu d'expérience dans le domaine de l'ingénierie industrielle à ce moment-là. Il m'est rapidement apparu nécessaire de solliciter des ressources supplémentaires pour affiner mes tests et de mettre en place un système robuste de tests unitaires dans l'application, une étape que j'avais initialement omise.
                    <br/><br/>
                    Suite à deux semaines de travail, la solution a été optimisée et a finalement été mise en service avec succès. Les retours des utilisateurs ont été positifs, malgré quelques demandes de fonctionnalités supplémentaires non prévues initialement. À ce jour, la solution est toujours utilisée chez Holis Consulting, offrant un gain de temps considérable pour les salariés, et atteignant ainsi l'objectif principal du projet.
                    <br/><br/>
                    Travailler sur ISIS a significativement amélioré ma compréhension et ma maîtrise de technologies clés comme React pour le développement frontend et NodeJS pour le backend. J'ai acquis une expérience précieuse dans la gestion des cycles de vie des applications, depuis la conception initiale jusqu'aux phases de déploiement et de maintenance. De plus, la résolution des défis techniques rencontrés et l'interaction avec les utilisateurs finaux m'ont permis de développer des compétences en communication et en résolution de problèmes, essentielles dans ma carrière de développeur. Ce projet a non seulement renforcé mes compétences techniques, mais a également contribué à ma croissance en tant que professionnel polyvalent et adaptable.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Regard critique",
                content: `
                    Réfléchissant sur mon expérience avec le projet ISIS chez Holis Consulting, je perçois à la fois mes réussites et les domaines nécessitant une amélioration. L'un des aspects les plus valorisants a été ma capacité à m'adapter rapidement à de nouvelles technologies telles que React et NodeJS, et à les appliquer efficacement dans un contexte professionnel. Cela a non seulement accéléré mon apprentissage mais a également renforcé ma confiance en mes compétences de développement.
                    <br/><br/>
                    Cependant, j'ai aussi identifié des lacunes dans ma méthodologie initiale, en particulier en ce qui concerne la prise en compte de cas d'utilisation spécifiques et la mise en place de tests robustes. Les bugs rencontrés lors du premier déploiement ont souligné l'importance de développer une vision plus holistique et détaillée du cycle de vie du développement de logiciels. J'ai appris qu'une compréhension approfondie des besoins des utilisateurs finaux et une approche rigoureuse des tests sont cruciales pour le succès d'une application.
                    <br/><br/>
                    En outre, cette expérience m'a enseigné l'importance de la flexibilité et de l'adaptabilité. Bien que le projet ait connu des défis initiaux, la capacité à répondre rapidement aux retours des utilisateurs et à ajuster l'application en conséquence a été un facteur clé dans son succès final.
                    <br/><br/>
                    En somme, travailler sur ISIS a été une expérience précieuse, m'offrant une perspective réaliste sur le développement de logiciels dans un environnement professionnel. J'ai acquis non seulement des compétences techniques, mais aussi une compréhension plus profonde de l'importance de la planification détaillée, des tests rigoureux et de l'adaptation rapide aux retours des utilisateurs. Ces leçons seront essentielles pour mes futurs projets et mon développement professionnel continu.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Evolution",
                content: `
                    Depuis sa mise en service, le projet ISIS a continué à évoluer, s'adaptant aux exigences changeantes des nouveaux projets d'inspection industrielle. Des améliorations sont apportées de manière occasionnelle, dictées par les besoins spécifiques et les retours des utilisateurs impliqués dans ces projets. Cette approche dynamique assure que le logiciel reste non seulement pertinent, mais également en phase avec les avancées technologiques et les pratiques du secteur de l'ingénierie industrielle.
                    <br/><br/>
                    Parallèlement, l'avenir du logiciel ISIS chez Holis Consulting est envisagé avec un potentiel commercial plus large. Alors que l'entreprise se développe et diversifie ses activités, l'opportunité de commercialiser ISIS devient de plus en plus tangible. Si l'entreprise diminue sa dépendance aux contrats d'inspection industrielle et étend ses horizons, ISIS pourrait être adapté pour répondre à un marché plus vaste, offrant ainsi une solution robuste et éprouvée à d'autres sociétés et secteurs d'activité.
                    <br/><br/>
                    Cette possibilité de commercialisation représente une opportunité significative pour Holis Consulting, non seulement en termes de nouvelles sources de revenus, mais également en tant que validation de ses capacités de développement interne. ISIS, ayant commencé comme un outil conçu pour répondre aux besoins internes, pourrait ainsi devenir un produit phare de l'entreprise, témoignant de son expertise et de sa capacité à créer des solutions logicielles innovantes et adaptées aux besoins du marché.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }
        ]
    }, {
        name: "YourNight",
        description: "Application mobile de gestion de soirées",
        technologies: ["React Native", "NodeJS", "Base de données"],
        icon: "img/projectsIcon/YourNight.svg",
        link: "https://www.yournight.net/",
        explanation: [
            {
                element: "Contexte",
                content: `
                    En tant qu’étudiant il m’arrive de participer et organiser des soirées entre amis.
                    Lors de la préparation de ces soirées, un problème revenait souvent, nous ne savions pas quoi amener et une fois que chacun achetait ce qu’il voulait, il fallait que nous consacrions du temps pour définir le montant que chacun devait aux autres.
                    <br/><br/>
                    La question qui s’est posée à un moment donné a été : Comment faire pour faciliter et fluidifier l’organisation de nos soirées ?
                    <br/><br/>
                    C’est à ce moment que j'ai conceptualisé YourNight. Cette application mobile est née de cette nécessité de rationaliser le processus de préparation des soirées en permettant une gestion collective des achats et la création collaborative d'une playlist musicale. L'objectif était de transformer les préparatifs souvent fastidieux en une expérience fluide et agréable.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Mise en œuvre",
                content: `
                    La réalisation de YourNight s'est articulée autour de plusieurs axes : 
                    <br/><br/>
                    La création d'une charte graphique évoquant l'atmosphère nocturne et festive, la conception d'une interface intuitive, la réalisation d'une application facile à utiliser tout en ayant défini les technologies utiles à son développement au préalable, avant de finalement mener une campagne marketing pour convaincre puis fidéliser de nouveaux utilisateurs en France.
                    <br/><br/>
                    Cependant, ce projet n'était pas exempt de risques. Le premier défi résidait dans le financement. Un investissement initial était nécessaire pour couvrir les coûts de l'hébergement des services et le déploiement sur les stores. Même si ces coûts ne me mettaient dans une situation financière délicate, j’ai du les réfléchir afin que le modèle économique de l’application puisse les rembourser, ce qui est préférable en tant qu’étudiant et même plus généralement lorsque l’on se lance dans un projet. De plus, en tant que seul développeur, j'ai dû faire face à des défis de gestion de projet. Des estimations incorrectes auraient pu entraîner des retards significatifs, impactant le lancement de l'application qui été prévu pour l’été 2023. La limitation des ressources matérielles pouvait aussi restreindre la capacité de tester l'application sur différents appareils, un facteur critique pour assurer la compatibilité et la réactivité.
                    <br/><br/>
                    Une fois réalisé une étude sur quelques jours des étapes et risques évoqués précédemment tout en étudiant d’autres éléments tels que le marché et concurrents auxquels j’allais me confronter afin de me démarquer de ceux-ci, il était temps pour moi d’imaginer une charte graphique cohérente avec l’univers de la nuit et des événements festifs, je travaillais en parallèle sur une première maquette de l’application à l’aide de l’outil Figma afin de traduire visuellement mes idées de fonctionnalités et le “workflow” général. Après avoir validé une première maquette UI/UX jugée par moi-même convaincante et défini les technologies de développement, il a été question de développer les premiers composants réutilisables et les premiers écrans. De là est venu une longue période de développement, plusieurs remises en questions et changements avant de voir venir au jour une première version dont j’ai déployé le backend sur un VPS via Docker et soumis le frontend au Google Play Store et à l’App Store.
                    <br/><br/>
                    Il était maintenant l’heure pour moi de faire appel pour la première fois à des externes et plus particulièrement à mes amis afin de tester l’application en situation réelle. Quelques bugs ont pu être décelés au cours de cette phase, ce qui m’a permis après quelques mises à jour de pouvoir être fier de voir le résultat de mon travail disponible en libre téléchargement pour le grand public.
                    <br/><br/>
                    Malgré certains obstacles, une planification stratégique et une gestion de projet agile ont été cruciales pour naviguer à travers ces défis. La flexibilité et l'adaptabilité ont été mes alliés les plus fiables pour surmonter les problèmes rencontrés.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Résultat",
                content: `
                    Aujourd'hui, YourNight n’est pas encore la nouvelle application à succès qui comptabilise des millions de téléchargements. Actuellement, je peaufine ma stratégie marketing, une étape cruciale que je n'ai pas encore eu l'opportunité de déployer pleinement.
                    <br/><br/>
                    Cependant, après presque 1 an de travail durant une partie mon temps libre, ce projet m’a énormément apporté sur bien d’autres aspects et c’est déjà une première victoire non négligeable. La création de l’application a premièrement été un gain d’expérience inestimable qui me servira tout au long de ma carrière professionnelle. Elle m'a permis de m'immerger pleinement dans la conduite d'un projet, depuis l'ébauche de la charte graphique et le design fonctionnel de l'application mobile, jusqu'à la maîtrise de compétences diverses en développement.
                    <br/><br/>
                    J'ai développé une compréhension approfondie des subtilités du déploiement d'API, de la gestion de bases de données non relationnelles, et de l'intégration continue, ce qui a renforcé mes capacités techniques. De plus, les compétences en marketing que j'ai acquises en conceptualisant la campagne de publicité pour YourNight ont élargi mon expertise et ma polyvalence.
                    <br/><br/>
                    L'un des aspects les plus gratifiants fut sans doute la liberté créative qu'elle m'a offerte. Le processus de création, de l'élaboration de la charte graphique à l'architecture de l'expérience utilisateur, a été une occasion d’exprimer ma vision et mes idées sans contrainte. Cette expérience a non seulement renforcé ma confiance en ma capacité à innover, mais m'a également apporté une grande satisfaction personnelle. Voir mes concepts se concrétiser en une application fonctionnelle a été une source de joie immense et une validation de mon potentiel créatif.
                    <br/><br/>
                    Ce projet a également accru ma visibilité et ma crédibilité auprès de de futurs clients potentiels, établissant une base solide pour de futures opportunités professionnelles. Que ce soit à travers la complexité de la gestion de projet ou le raffinement du design et de l'expérience utilisateur, chaque étape a contribué à mon évolution en tant que professionnel du numérique.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Regard critique",
                content: `
                    Avec le recul, mon regard sur le projet YourNight est teinté d'une reconnaissance pour les nombreuses leçons qu'il m'a enseignées. L'une des plus cruciales a été la nécessité d'anticiper précisément le fonctionnement et le flux de l'application dès le début. Concevoir le parcours utilisateur avant même d'écrire la première ligne de code a permis de guider le développement de manière cohérente et efficace. J'ai également appris l'importance de se fixer des deadlines réalistes, permettant de structurer le travail et de maintenir la dynamique du projet.
                    <br/><br/>
                    La gestion financière s'est révélée être un autre domaine d'apprentissage essentiel. Définir un budget détaillé et évaluer les options d'hébergement avant le lancement du développement a été fondamental pour maintenir les coûts sous contrôle et éviter les dépassements budgétaires imprévus.
                    <br/><br/>
                    J’ai également réalisé avoir fait certaines erreurs, notamment ma plus conséquente qui est d’avoir voulu sortir une première version parfaite, ce qui s’est avéré comme n’étant pas une bonne solution. Il aurait été préférable de sortir une première version minimaliste afin de corriger le plus tôt possible les premiers bugs et ne pas avoir à tous les gérer en même temps. Cela aurait également été une occasion de valider ou non un intérêt par de potentiels utilisateurs et de jauger de l’utilité et de l’engouement généré par les différentes fonctionnalités.
                    <br/><br/>
                    Une autre erreur a été de ne pas avoir assez anticiper le déploiement sur les différents stores d’applications. Cela m’a couté une certaine période de temps avant que YourNight soit acceptée et mise en libre téléchargement. Une meilleure connaissance de la politique des stores m’aurait permis d’adapter le développement en fonction et éviter toute perte de temps.
                    <br/><br/>
                    Cependant ces erreurs me permettront de ne plus les commettre à l’avenir, je m’en servirai pour continuer de façonner ma démarche dans les projets futurs.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Evolution",
                content: `
                    Dans l'immédiat, YourNight s'oriente vers sa consolidation.
                    <br/><br/>
                    À court terme, l'objectif est d'instaurer un système de récompenses et de "gamification" pour fidéliser la base d'utilisateurs existants, en rendant leur expérience encore plus engageante et personnalisée. Parallèlement, une campagne marketing soutenue et créative est en train d’être finalisée et sera mise en place pour attirer de nouveaux utilisateurs, afin de bâtir une communauté dynamique autour de l'application.
                    <br/><br/>
                    À long terme, le développement de YourNight s'envisage avec ambition à condition qu’une solide base d’utilisateurs existe : 
                    <br/><br/>
                    L'application évoluera pour englober une palette plus large de fonctionnalités liées à l'organisation d'événements. L'introduction de systèmes de sondage est notamment prévue pour permettre aux utilisateurs de décider collectivement des activités de leur soirée, transformant YourNight en un outil complet pour la planification d'événements festifs. Ces avancées sont envisagées à fin de faire de l’application un moyen incontournable pour organiser ses soirées.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }
        ]
    }, {
        name: "YourNight",
        description: "Application mobile de gestion de soirées",
        technologies: ["React Native", "NodeJS", "Base de données"],
        icon: "img/projectsIcon/YourNight.svg",
        link: "https://www.yournight.net/",
        explanation: [
            {
                element: "Contexte",
                content: `
                    En tant qu’étudiant il m’arrive de participer et organiser des soirées entre amis.
                    Lors de la préparation de ces soirées, un problème revenait souvent, nous ne savions pas quoi amener et une fois que chacun achetait ce qu’il voulait, il fallait que nous consacrions du temps pour définir le montant que chacun devait aux autres.
                    <br/><br/>
                    La question qui s’est posée à un moment donné a été : Comment faire pour faciliter et fluidifier l’organisation de nos soirées ?
                    <br/><br/>
                    C’est à ce moment que j'ai conceptualisé YourNight. Cette application mobile est née de cette nécessité de rationaliser le processus de préparation des soirées en permettant une gestion collective des achats et la création collaborative d'une playlist musicale. L'objectif était de transformer les préparatifs souvent fastidieux en une expérience fluide et agréable.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Mise en œuvre",
                content: `
                    La réalisation de YourNight s'est articulée autour de plusieurs axes : 
                    <br/><br/>
                    La création d'une charte graphique évoquant l'atmosphère nocturne et festive, la conception d'une interface intuitive, la réalisation d'une application facile à utiliser tout en ayant défini les technologies utiles à son développement au préalable, avant de finalement mener une campagne marketing pour convaincre puis fidéliser de nouveaux utilisateurs en France.
                    <br/><br/>
                    Cependant, ce projet n'était pas exempt de risques. Le premier défi résidait dans le financement. Un investissement initial était nécessaire pour couvrir les coûts de l'hébergement des services et le déploiement sur les stores. Même si ces coûts ne me mettaient dans une situation financière délicate, j’ai du les réfléchir afin que le modèle économique de l’application puisse les rembourser, ce qui est préférable en tant qu’étudiant et même plus généralement lorsque l’on se lance dans un projet. De plus, en tant que seul développeur, j'ai dû faire face à des défis de gestion de projet. Des estimations incorrectes auraient pu entraîner des retards significatifs, impactant le lancement de l'application qui été prévu pour l’été 2023. La limitation des ressources matérielles pouvait aussi restreindre la capacité de tester l'application sur différents appareils, un facteur critique pour assurer la compatibilité et la réactivité.
                    <br/><br/>
                    Une fois réalisé une étude sur quelques jours des étapes et risques évoqués précédemment tout en étudiant d’autres éléments tels que le marché et concurrents auxquels j’allais me confronter afin de me démarquer de ceux-ci, il était temps pour moi d’imaginer une charte graphique cohérente avec l’univers de la nuit et des événements festifs, je travaillais en parallèle sur une première maquette de l’application à l’aide de l’outil Figma afin de traduire visuellement mes idées de fonctionnalités et le “workflow” général. Après avoir validé une première maquette UI/UX jugée par moi-même convaincante et défini les technologies de développement, il a été question de développer les premiers composants réutilisables et les premiers écrans. De là est venu une longue période de développement, plusieurs remises en questions et changements avant de voir venir au jour une première version dont j’ai déployé le backend sur un VPS via Docker et soumis le frontend au Google Play Store et à l’App Store.
                    <br/><br/>
                    Il était maintenant l’heure pour moi de faire appel pour la première fois à des externes et plus particulièrement à mes amis afin de tester l’application en situation réelle. Quelques bugs ont pu être décelés au cours de cette phase, ce qui m’a permis après quelques mises à jour de pouvoir être fier de voir le résultat de mon travail disponible en libre téléchargement pour le grand public.
                    <br/><br/>
                    Malgré certains obstacles, une planification stratégique et une gestion de projet agile ont été cruciales pour naviguer à travers ces défis. La flexibilité et l'adaptabilité ont été mes alliés les plus fiables pour surmonter les problèmes rencontrés.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Résultat",
                content: `
                    Aujourd'hui, YourNight n’est pas encore la nouvelle application à succès qui comptabilise des millions de téléchargements. Actuellement, je peaufine ma stratégie marketing, une étape cruciale que je n'ai pas encore eu l'opportunité de déployer pleinement.
                    <br/><br/>
                    Cependant, après presque 1 an de travail durant une partie mon temps libre, ce projet m’a énormément apporté sur bien d’autres aspects et c’est déjà une première victoire non négligeable. La création de l’application a premièrement été un gain d’expérience inestimable qui me servira tout au long de ma carrière professionnelle. Elle m'a permis de m'immerger pleinement dans la conduite d'un projet, depuis l'ébauche de la charte graphique et le design fonctionnel de l'application mobile, jusqu'à la maîtrise de compétences diverses en développement.
                    <br/><br/>
                    J'ai développé une compréhension approfondie des subtilités du déploiement d'API, de la gestion de bases de données non relationnelles, et de l'intégration continue, ce qui a renforcé mes capacités techniques. De plus, les compétences en marketing que j'ai acquises en conceptualisant la campagne de publicité pour YourNight ont élargi mon expertise et ma polyvalence.
                    <br/><br/>
                    L'un des aspects les plus gratifiants fut sans doute la liberté créative qu'elle m'a offerte. Le processus de création, de l'élaboration de la charte graphique à l'architecture de l'expérience utilisateur, a été une occasion d’exprimer ma vision et mes idées sans contrainte. Cette expérience a non seulement renforcé ma confiance en ma capacité à innover, mais m'a également apporté une grande satisfaction personnelle. Voir mes concepts se concrétiser en une application fonctionnelle a été une source de joie immense et une validation de mon potentiel créatif.
                    <br/><br/>
                    Ce projet a également accru ma visibilité et ma crédibilité auprès de de futurs clients potentiels, établissant une base solide pour de futures opportunités professionnelles. Que ce soit à travers la complexité de la gestion de projet ou le raffinement du design et de l'expérience utilisateur, chaque étape a contribué à mon évolution en tant que professionnel du numérique.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Regard critique",
                content: `
                    Avec le recul, mon regard sur le projet YourNight est teinté d'une reconnaissance pour les nombreuses leçons qu'il m'a enseignées. L'une des plus cruciales a été la nécessité d'anticiper précisément le fonctionnement et le flux de l'application dès le début. Concevoir le parcours utilisateur avant même d'écrire la première ligne de code a permis de guider le développement de manière cohérente et efficace. J'ai également appris l'importance de se fixer des deadlines réalistes, permettant de structurer le travail et de maintenir la dynamique du projet.
                    <br/><br/>
                    La gestion financière s'est révélée être un autre domaine d'apprentissage essentiel. Définir un budget détaillé et évaluer les options d'hébergement avant le lancement du développement a été fondamental pour maintenir les coûts sous contrôle et éviter les dépassements budgétaires imprévus.
                    <br/><br/>
                    J’ai également réalisé avoir fait certaines erreurs, notamment ma plus conséquente qui est d’avoir voulu sortir une première version parfaite, ce qui s’est avéré comme n’étant pas une bonne solution. Il aurait été préférable de sortir une première version minimaliste afin de corriger le plus tôt possible les premiers bugs et ne pas avoir à tous les gérer en même temps. Cela aurait également été une occasion de valider ou non un intérêt par de potentiels utilisateurs et de jauger de l’utilité et de l’engouement généré par les différentes fonctionnalités.
                    <br/><br/>
                    Une autre erreur a été de ne pas avoir assez anticiper le déploiement sur les différents stores d’applications. Cela m’a couté une certaine période de temps avant que YourNight soit acceptée et mise en libre téléchargement. Une meilleure connaissance de la politique des stores m’aurait permis d’adapter le développement en fonction et éviter toute perte de temps.
                    <br/><br/>
                    Cependant ces erreurs me permettront de ne plus les commettre à l’avenir, je m’en servirai pour continuer de façonner ma démarche dans les projets futurs.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Evolution",
                content: `
                    Dans l'immédiat, YourNight s'oriente vers sa consolidation.
                    <br/><br/>
                    À court terme, l'objectif est d'instaurer un système de récompenses et de "gamification" pour fidéliser la base d'utilisateurs existants, en rendant leur expérience encore plus engageante et personnalisée. Parallèlement, une campagne marketing soutenue et créative est en train d’être finalisée et sera mise en place pour attirer de nouveaux utilisateurs, afin de bâtir une communauté dynamique autour de l'application.
                    <br/><br/>
                    À long terme, le développement de YourNight s'envisage avec ambition à condition qu’une solide base d’utilisateurs existe : 
                    <br/><br/>
                    L'application évoluera pour englober une palette plus large de fonctionnalités liées à l'organisation d'événements. L'introduction de systèmes de sondage est notamment prévue pour permettre aux utilisateurs de décider collectivement des activités de leur soirée, transformant YourNight en un outil complet pour la planification d'événements festifs. Ces avancées sont envisagées à fin de faire de l’application un moyen incontournable pour organiser ses soirées.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }
        ]
    },
    {
        name: "YourNight",
        description: "Application mobile de gestion de soirées",
        technologies: ["React Native", "NodeJS", "Base de données"],
        icon: "img/projectsIcon/YourNight.svg",
        link: "https://www.yournight.net/",
        explanation: [
            {
                element: "Contexte",
                content: `
                    En tant qu’étudiant il m’arrive de participer et organiser des soirées entre amis.
                    Lors de la préparation de ces soirées, un problème revenait souvent, nous ne savions pas quoi amener et une fois que chacun achetait ce qu’il voulait, il fallait que nous consacrions du temps pour définir le montant que chacun devait aux autres.
                    <br/><br/>
                    La question qui s’est posée à un moment donné a été : Comment faire pour faciliter et fluidifier l’organisation de nos soirées ?
                    <br/><br/>
                    C’est à ce moment que j'ai conceptualisé YourNight. Cette application mobile est née de cette nécessité de rationaliser le processus de préparation des soirées en permettant une gestion collective des achats et la création collaborative d'une playlist musicale. L'objectif était de transformer les préparatifs souvent fastidieux en une expérience fluide et agréable.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Mise en œuvre",
                content: `
                    La réalisation de YourNight s'est articulée autour de plusieurs axes : 
                    <br/><br/>
                    La création d'une charte graphique évoquant l'atmosphère nocturne et festive, la conception d'une interface intuitive, la réalisation d'une application facile à utiliser tout en ayant défini les technologies utiles à son développement au préalable, avant de finalement mener une campagne marketing pour convaincre puis fidéliser de nouveaux utilisateurs en France.
                    <br/><br/>
                    Cependant, ce projet n'était pas exempt de risques. Le premier défi résidait dans le financement. Un investissement initial était nécessaire pour couvrir les coûts de l'hébergement des services et le déploiement sur les stores. Même si ces coûts ne me mettaient dans une situation financière délicate, j’ai du les réfléchir afin que le modèle économique de l’application puisse les rembourser, ce qui est préférable en tant qu’étudiant et même plus généralement lorsque l’on se lance dans un projet. De plus, en tant que seul développeur, j'ai dû faire face à des défis de gestion de projet. Des estimations incorrectes auraient pu entraîner des retards significatifs, impactant le lancement de l'application qui été prévu pour l’été 2023. La limitation des ressources matérielles pouvait aussi restreindre la capacité de tester l'application sur différents appareils, un facteur critique pour assurer la compatibilité et la réactivité.
                    <br/><br/>
                    Une fois réalisé une étude sur quelques jours des étapes et risques évoqués précédemment tout en étudiant d’autres éléments tels que le marché et concurrents auxquels j’allais me confronter afin de me démarquer de ceux-ci, il était temps pour moi d’imaginer une charte graphique cohérente avec l’univers de la nuit et des événements festifs, je travaillais en parallèle sur une première maquette de l’application à l’aide de l’outil Figma afin de traduire visuellement mes idées de fonctionnalités et le “workflow” général. Après avoir validé une première maquette UI/UX jugée par moi-même convaincante et défini les technologies de développement, il a été question de développer les premiers composants réutilisables et les premiers écrans. De là est venu une longue période de développement, plusieurs remises en questions et changements avant de voir venir au jour une première version dont j’ai déployé le backend sur un VPS via Docker et soumis le frontend au Google Play Store et à l’App Store.
                    <br/><br/>
                    Il était maintenant l’heure pour moi de faire appel pour la première fois à des externes et plus particulièrement à mes amis afin de tester l’application en situation réelle. Quelques bugs ont pu être décelés au cours de cette phase, ce qui m’a permis après quelques mises à jour de pouvoir être fier de voir le résultat de mon travail disponible en libre téléchargement pour le grand public.
                    <br/><br/>
                    Malgré certains obstacles, une planification stratégique et une gestion de projet agile ont été cruciales pour naviguer à travers ces défis. La flexibilité et l'adaptabilité ont été mes alliés les plus fiables pour surmonter les problèmes rencontrés.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Résultat",
                content: `
                    Aujourd'hui, YourNight n’est pas encore la nouvelle application à succès qui comptabilise des millions de téléchargements. Actuellement, je peaufine ma stratégie marketing, une étape cruciale que je n'ai pas encore eu l'opportunité de déployer pleinement.
                    <br/><br/>
                    Cependant, après presque 1 an de travail durant une partie mon temps libre, ce projet m’a énormément apporté sur bien d’autres aspects et c’est déjà une première victoire non négligeable. La création de l’application a premièrement été un gain d’expérience inestimable qui me servira tout au long de ma carrière professionnelle. Elle m'a permis de m'immerger pleinement dans la conduite d'un projet, depuis l'ébauche de la charte graphique et le design fonctionnel de l'application mobile, jusqu'à la maîtrise de compétences diverses en développement.
                    <br/><br/>
                    J'ai développé une compréhension approfondie des subtilités du déploiement d'API, de la gestion de bases de données non relationnelles, et de l'intégration continue, ce qui a renforcé mes capacités techniques. De plus, les compétences en marketing que j'ai acquises en conceptualisant la campagne de publicité pour YourNight ont élargi mon expertise et ma polyvalence.
                    <br/><br/>
                    L'un des aspects les plus gratifiants fut sans doute la liberté créative qu'elle m'a offerte. Le processus de création, de l'élaboration de la charte graphique à l'architecture de l'expérience utilisateur, a été une occasion d’exprimer ma vision et mes idées sans contrainte. Cette expérience a non seulement renforcé ma confiance en ma capacité à innover, mais m'a également apporté une grande satisfaction personnelle. Voir mes concepts se concrétiser en une application fonctionnelle a été une source de joie immense et une validation de mon potentiel créatif.
                    <br/><br/>
                    Ce projet a également accru ma visibilité et ma crédibilité auprès de de futurs clients potentiels, établissant une base solide pour de futures opportunités professionnelles. Que ce soit à travers la complexité de la gestion de projet ou le raffinement du design et de l'expérience utilisateur, chaque étape a contribué à mon évolution en tant que professionnel du numérique.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Regard critique",
                content: `
                    Avec le recul, mon regard sur le projet YourNight est teinté d'une reconnaissance pour les nombreuses leçons qu'il m'a enseignées. L'une des plus cruciales a été la nécessité d'anticiper précisément le fonctionnement et le flux de l'application dès le début. Concevoir le parcours utilisateur avant même d'écrire la première ligne de code a permis de guider le développement de manière cohérente et efficace. J'ai également appris l'importance de se fixer des deadlines réalistes, permettant de structurer le travail et de maintenir la dynamique du projet.
                    <br/><br/>
                    La gestion financière s'est révélée être un autre domaine d'apprentissage essentiel. Définir un budget détaillé et évaluer les options d'hébergement avant le lancement du développement a été fondamental pour maintenir les coûts sous contrôle et éviter les dépassements budgétaires imprévus.
                    <br/><br/>
                    J’ai également réalisé avoir fait certaines erreurs, notamment ma plus conséquente qui est d’avoir voulu sortir une première version parfaite, ce qui s’est avéré comme n’étant pas une bonne solution. Il aurait été préférable de sortir une première version minimaliste afin de corriger le plus tôt possible les premiers bugs et ne pas avoir à tous les gérer en même temps. Cela aurait également été une occasion de valider ou non un intérêt par de potentiels utilisateurs et de jauger de l’utilité et de l’engouement généré par les différentes fonctionnalités.
                    <br/><br/>
                    Une autre erreur a été de ne pas avoir assez anticiper le déploiement sur les différents stores d’applications. Cela m’a couté une certaine période de temps avant que YourNight soit acceptée et mise en libre téléchargement. Une meilleure connaissance de la politique des stores m’aurait permis d’adapter le développement en fonction et éviter toute perte de temps.
                    <br/><br/>
                    Cependant ces erreurs me permettront de ne plus les commettre à l’avenir, je m’en servirai pour continuer de façonner ma démarche dans les projets futurs.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Evolution",
                content: `
                    Dans l'immédiat, YourNight s'oriente vers sa consolidation.
                    <br/><br/>
                    À court terme, l'objectif est d'instaurer un système de récompenses et de "gamification" pour fidéliser la base d'utilisateurs existants, en rendant leur expérience encore plus engageante et personnalisée. Parallèlement, une campagne marketing soutenue et créative est en train d’être finalisée et sera mise en place pour attirer de nouveaux utilisateurs, afin de bâtir une communauté dynamique autour de l'application.
                    <br/><br/>
                    À long terme, le développement de YourNight s'envisage avec ambition à condition qu’une solide base d’utilisateurs existe : 
                    <br/><br/>
                    L'application évoluera pour englober une palette plus large de fonctionnalités liées à l'organisation d'événements. L'introduction de systèmes de sondage est notamment prévue pour permettre aux utilisateurs de décider collectivement des activités de leur soirée, transformant YourNight en un outil complet pour la planification d'événements festifs. Ces avancées sont envisagées à fin de faire de l’application un moyen incontournable pour organiser ses soirées.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }
        ]
    }, {
        name: "YourNight",
        description: "Application mobile de gestion de soirées",
        technologies: ["React Native", "NodeJS", "Base de données"],
        icon: "img/projectsIcon/YourNight.svg",
        link: "https://www.yournight.net/",
        explanation: [
            {
                element: "Contexte",
                content: `
                    En tant qu’étudiant il m’arrive de participer et organiser des soirées entre amis.
                    Lors de la préparation de ces soirées, un problème revenait souvent, nous ne savions pas quoi amener et une fois que chacun achetait ce qu’il voulait, il fallait que nous consacrions du temps pour définir le montant que chacun devait aux autres.
                    <br/><br/>
                    La question qui s’est posée à un moment donné a été : Comment faire pour faciliter et fluidifier l’organisation de nos soirées ?
                    <br/><br/>
                    C’est à ce moment que j'ai conceptualisé YourNight. Cette application mobile est née de cette nécessité de rationaliser le processus de préparation des soirées en permettant une gestion collective des achats et la création collaborative d'une playlist musicale. L'objectif était de transformer les préparatifs souvent fastidieux en une expérience fluide et agréable.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Mise en œuvre",
                content: `
                    La réalisation de YourNight s'est articulée autour de plusieurs axes : 
                    <br/><br/>
                    La création d'une charte graphique évoquant l'atmosphère nocturne et festive, la conception d'une interface intuitive, la réalisation d'une application facile à utiliser tout en ayant défini les technologies utiles à son développement au préalable, avant de finalement mener une campagne marketing pour convaincre puis fidéliser de nouveaux utilisateurs en France.
                    <br/><br/>
                    Cependant, ce projet n'était pas exempt de risques. Le premier défi résidait dans le financement. Un investissement initial était nécessaire pour couvrir les coûts de l'hébergement des services et le déploiement sur les stores. Même si ces coûts ne me mettaient dans une situation financière délicate, j’ai du les réfléchir afin que le modèle économique de l’application puisse les rembourser, ce qui est préférable en tant qu’étudiant et même plus généralement lorsque l’on se lance dans un projet. De plus, en tant que seul développeur, j'ai dû faire face à des défis de gestion de projet. Des estimations incorrectes auraient pu entraîner des retards significatifs, impactant le lancement de l'application qui été prévu pour l’été 2023. La limitation des ressources matérielles pouvait aussi restreindre la capacité de tester l'application sur différents appareils, un facteur critique pour assurer la compatibilité et la réactivité.
                    <br/><br/>
                    Une fois réalisé une étude sur quelques jours des étapes et risques évoqués précédemment tout en étudiant d’autres éléments tels que le marché et concurrents auxquels j’allais me confronter afin de me démarquer de ceux-ci, il était temps pour moi d’imaginer une charte graphique cohérente avec l’univers de la nuit et des événements festifs, je travaillais en parallèle sur une première maquette de l’application à l’aide de l’outil Figma afin de traduire visuellement mes idées de fonctionnalités et le “workflow” général. Après avoir validé une première maquette UI/UX jugée par moi-même convaincante et défini les technologies de développement, il a été question de développer les premiers composants réutilisables et les premiers écrans. De là est venu une longue période de développement, plusieurs remises en questions et changements avant de voir venir au jour une première version dont j’ai déployé le backend sur un VPS via Docker et soumis le frontend au Google Play Store et à l’App Store.
                    <br/><br/>
                    Il était maintenant l’heure pour moi de faire appel pour la première fois à des externes et plus particulièrement à mes amis afin de tester l’application en situation réelle. Quelques bugs ont pu être décelés au cours de cette phase, ce qui m’a permis après quelques mises à jour de pouvoir être fier de voir le résultat de mon travail disponible en libre téléchargement pour le grand public.
                    <br/><br/>
                    Malgré certains obstacles, une planification stratégique et une gestion de projet agile ont été cruciales pour naviguer à travers ces défis. La flexibilité et l'adaptabilité ont été mes alliés les plus fiables pour surmonter les problèmes rencontrés.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Résultat",
                content: `
                    Aujourd'hui, YourNight n’est pas encore la nouvelle application à succès qui comptabilise des millions de téléchargements. Actuellement, je peaufine ma stratégie marketing, une étape cruciale que je n'ai pas encore eu l'opportunité de déployer pleinement.
                    <br/><br/>
                    Cependant, après presque 1 an de travail durant une partie mon temps libre, ce projet m’a énormément apporté sur bien d’autres aspects et c’est déjà une première victoire non négligeable. La création de l’application a premièrement été un gain d’expérience inestimable qui me servira tout au long de ma carrière professionnelle. Elle m'a permis de m'immerger pleinement dans la conduite d'un projet, depuis l'ébauche de la charte graphique et le design fonctionnel de l'application mobile, jusqu'à la maîtrise de compétences diverses en développement.
                    <br/><br/>
                    J'ai développé une compréhension approfondie des subtilités du déploiement d'API, de la gestion de bases de données non relationnelles, et de l'intégration continue, ce qui a renforcé mes capacités techniques. De plus, les compétences en marketing que j'ai acquises en conceptualisant la campagne de publicité pour YourNight ont élargi mon expertise et ma polyvalence.
                    <br/><br/>
                    L'un des aspects les plus gratifiants fut sans doute la liberté créative qu'elle m'a offerte. Le processus de création, de l'élaboration de la charte graphique à l'architecture de l'expérience utilisateur, a été une occasion d’exprimer ma vision et mes idées sans contrainte. Cette expérience a non seulement renforcé ma confiance en ma capacité à innover, mais m'a également apporté une grande satisfaction personnelle. Voir mes concepts se concrétiser en une application fonctionnelle a été une source de joie immense et une validation de mon potentiel créatif.
                    <br/><br/>
                    Ce projet a également accru ma visibilité et ma crédibilité auprès de de futurs clients potentiels, établissant une base solide pour de futures opportunités professionnelles. Que ce soit à travers la complexité de la gestion de projet ou le raffinement du design et de l'expérience utilisateur, chaque étape a contribué à mon évolution en tant que professionnel du numérique.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Regard critique",
                content: `
                    Avec le recul, mon regard sur le projet YourNight est teinté d'une reconnaissance pour les nombreuses leçons qu'il m'a enseignées. L'une des plus cruciales a été la nécessité d'anticiper précisément le fonctionnement et le flux de l'application dès le début. Concevoir le parcours utilisateur avant même d'écrire la première ligne de code a permis de guider le développement de manière cohérente et efficace. J'ai également appris l'importance de se fixer des deadlines réalistes, permettant de structurer le travail et de maintenir la dynamique du projet.
                    <br/><br/>
                    La gestion financière s'est révélée être un autre domaine d'apprentissage essentiel. Définir un budget détaillé et évaluer les options d'hébergement avant le lancement du développement a été fondamental pour maintenir les coûts sous contrôle et éviter les dépassements budgétaires imprévus.
                    <br/><br/>
                    J’ai également réalisé avoir fait certaines erreurs, notamment ma plus conséquente qui est d’avoir voulu sortir une première version parfaite, ce qui s’est avéré comme n’étant pas une bonne solution. Il aurait été préférable de sortir une première version minimaliste afin de corriger le plus tôt possible les premiers bugs et ne pas avoir à tous les gérer en même temps. Cela aurait également été une occasion de valider ou non un intérêt par de potentiels utilisateurs et de jauger de l’utilité et de l’engouement généré par les différentes fonctionnalités.
                    <br/><br/>
                    Une autre erreur a été de ne pas avoir assez anticiper le déploiement sur les différents stores d’applications. Cela m’a couté une certaine période de temps avant que YourNight soit acceptée et mise en libre téléchargement. Une meilleure connaissance de la politique des stores m’aurait permis d’adapter le développement en fonction et éviter toute perte de temps.
                    <br/><br/>
                    Cependant ces erreurs me permettront de ne plus les commettre à l’avenir, je m’en servirai pour continuer de façonner ma démarche dans les projets futurs.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Evolution",
                content: `
                    Dans l'immédiat, YourNight s'oriente vers sa consolidation.
                    <br/><br/>
                    À court terme, l'objectif est d'instaurer un système de récompenses et de "gamification" pour fidéliser la base d'utilisateurs existants, en rendant leur expérience encore plus engageante et personnalisée. Parallèlement, une campagne marketing soutenue et créative est en train d’être finalisée et sera mise en place pour attirer de nouveaux utilisateurs, afin de bâtir une communauté dynamique autour de l'application.
                    <br/><br/>
                    À long terme, le développement de YourNight s'envisage avec ambition à condition qu’une solide base d’utilisateurs existe : 
                    <br/><br/>
                    L'application évoluera pour englober une palette plus large de fonctionnalités liées à l'organisation d'événements. L'introduction de systèmes de sondage est notamment prévue pour permettre aux utilisateurs de décider collectivement des activités de leur soirée, transformant YourNight en un outil complet pour la planification d'événements festifs. Ces avancées sont envisagées à fin de faire de l’application un moyen incontournable pour organiser ses soirées.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }
        ]
    }
]