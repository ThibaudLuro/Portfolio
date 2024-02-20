import { IProject } from "../../types";

//TODO: Add images
//TODO: Find a way to redirect to skills or projects page when clicking on a skill or a project

export const projects: IProject[] = [
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
        icon: "img/projectsIcon/Isis.svg",
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
        name: "Premis DM",
        description: "Application web servant au milieu de l'industrie",
        technologies: ["React", "NodeJS", "Base de données"],
        icon: "",
        link: "https://www.yournight.net/",
        explanation: [
            {
                element: "Contexte",
                content: `
                    Le monde de l’industrie peine encore à se digitaliser et adopte encore des méthodes de travail fonctionnelles mais chronophages, qui favorisent l’erreur humaine.
                    <br/><br/>
                    De ce fait l’entreprise Holis consulting imagine des solutions digitales afin de faciliter la vie des travailleurs et de là est venue l’idée de PREMIS.
                    <br/><br/>
                    PREMIS avant de devenir une application web a été une solution développée par un collaborateur de la société avec la technologie Access ce qui ne permet pas une bonne scalabilité de celle-ci et limite l’ajout de nouvelles fonctionnalités 
                    <br/><br/>
                    C’est pour cette raison que l’entreprise a décidé de re développer la solution sous la forme d’une application web qui permettra aux utilisateurs d’accéder aux même fonctionnalités sur une interface plus claire et simpliste tout en ajouter des fonctionnalités permettant une meilleure visualisation de ses données à l’aide de dashboard par exemple.
                    <br/><br/>
                    L’application web est destinée à des clients venant du milieu de l’industrie et possédant des sites industriels puisque l’application vient corriger le format et la cohérence de nouvelles données concernant la plateforme industrielle.
                    <br/><br/>
                    Lorsque des travaux et ajouts sont faits sur le site, de nouvelles données concernant les nouveaux éléments sont générés et PREMIS vient justement aider au contrôle du format et de la cohérence de ces données qui si ajoutées avec des erreurs pourront créer des incompréhensions plus tard par les ingénieurs travaillant ou inspectant le site.
                    <br/><br/>
                    PREMIS DM a été la seconde application web sur laquelle j’ai contribué durant mon stage puis mon alternance au sein d’Holis Consulting.
                    `,
                illustration: ""
            }, {
                element: "Mise en œuvre",
                content: `
                    Le projet représentait un défi stimulant et une opportunité de croissance professionnelle importante. Au moment où j'ai entamé ce projet, j'étais confronté à une page vierge : il était de mon devoir de conceptualiser et de construire l'architecture intégrale du système - de la base de données au backend, en passant par le frontend - en utilisant React, ExpressJS et PostgreSQL.
                    <br/><br/>
                    La première étape cruciale a été la conception de l'architecture de la base de données. En tenant compte des directives et des besoins spécifiques exprimés par mes supérieurs ainsi que l’existant des modèles de données réalisés via Access qui m’ont été fournis, j'ai élaboré une structure de données qui non seulement répondait aux exigences fonctionnelles du projet, mais offrait également la flexibilité nécessaire pour des évolutions futures.
                    <br/><br/>
                    Ensuite, j'ai abordé le développement du backend en utilisant ExpressJS. Cette étape impliquait la mise en place d'une API robuste et sécurisée, capable de gérer les requêtes et de communiquer efficacement avec la base de données. J'ai veillé à ce que chaque composant du backend soit optimisé pour les performances et la sécurité, tout en garantissant une intégration transparente avec le frontend.                    
                    <br/><br/>
                    Le développement du frontend a été réalisé avec React. J'ai me suis basé sur une interface utilisateur imaginé par l’un de mes supérieurs via le logiciel Figma. Mon objectif était de fournir une expérience utilisateur fluide, où la complexité de la solution initiale ne serait pas un problème pour l’utilisateur.
                    <br/><br/>
                    Tout au long du processus de développement, j'ai constamment interagi avec mes supérieurs pour des feedbacks et des ajustements, assurant ainsi que le projet reste aligné avec les objectifs globaux et réponde précisément aux besoins identifiés. Cette approche itérative a permis de s'assurer que le projet évolue dans la bonne direction et que les résultats finaux soient en parfaite adéquation avec les attentes. La solution a été également été testé après chaque implémentation de fonctionnalité via le déploiement de celle-ci sur un environnement hébergé en ligne. 
                    <br/><br/>
                    J’ai travaillé en très grande majorité en autonomie sur ce projet, étant donné la petite taille de l’équipe de développement à ce moment-là (trois personnes au total).
                    <br/><br/>
                    Le développement de "PREMIS DM" a impliqué plusieurs défis techniques et fonctionnels, chacun nécessitant une approche méticuleuse pour garantir un fonctionnement optimal de l'application.
                    <br/><br/>
                    L'une des premières fonctionnalités clés développées a été l'importation de données à partir de fichiers Excel. Cette tâche a représenté un défi considérable, principalement en raison de la taille importante des fichiers importés. Pour gérer efficacement cette fonctionnalité, j'ai mis en place des workers côté frontend pour traiter les données et les envoyer par batch à l'API. Cette approche a non seulement facilité la gestion des grands volumes de données, mais a également optimisé la performance et la fiabilité de la fonctionnalité d'importation.
                    <br/><br/>
                    Une autre fonctionnalité importante a été la création de vues en base de données pour permettre la consultation de données interconnectées côté frontend. La complexité résidait dans l'optimisation des requêtes SQL, souvent très élaborées, et l'ajout d'index pour améliorer les performances de la base de données. La mise en œuvre de ces vues a été essentielle pour un accès rapide et efficace aux données.
                    <br/><br/>
                    L'affichage des vues en frontend nécessitait une gestion prudente de la mémoire pour éviter tout plantage. Pour cela, j'ai implémenté un système de lazy loading, chargeant les données progressivement à mesure que l'utilisateur en avait besoin. Cette méthode a assuré une expérience utilisateur fluide et stable.
                    <br/><br/>
                    Le développement d'un treeview pour la consultation des données a été un autre défi majeur. La construction de l'arbre de données, reliant les éléments parents aux enfants, a nécessité une réflexion approfondie et une logique de programmation complexe pour assurer une représentation précise et intuitive des relations entre les données.
                    <br/><br/>
                    La création d'un dashboard côté frontend a été une étape cruciale pour offrir une visualisation intuitive des données. J'ai développé des graphiques en bâtonnets et en camemberts, permettant aux utilisateurs d'obtenir des aperçus clairs et interactifs des informations pertinentes sur leur site industriel.
                    <br/><br/>
                    Enfin, l'implémentation d'un système de vérification des données importées a été essentielle pour assurer leur exactitude et leur conformité. Ce système vérifiait non seulement la forme des données (comme le nombre maximal de caractères) mais aussi leur logique en fonction des règles spécifiques définies par l’utilisateur pour chaque site industriel. En cas d'incohérence, une erreur était retournée à l'utilisateur avec des détails précis pour faciliter la correction.
                    `,
                illustration: ""
            }, {
                element: "Résultat",
                content: `
                    Après un an et demi de développement intensif, réalisé en grande partie par moi-même, "PREMIS DM" a atteint un stade significatif de maturité. La première version de l'application web s'est avérée convaincante et est actuellement utilisée dans des démonstrations auprès de clients potentiels, auxquelles je participe parfois.
                    <br/><br/>
                    La solution, bien que complexe, offre un fonctionnement général solide et fiable. Sa conception et son développement ont été guidés par une attention particulière aux détails et une compréhension approfondie des besoins des utilisateurs dans un contexte industriel. Cela se reflète dans la manière dont les utilisateurs interagissent avec l'application, exploitant ses fonctionnalités avancées facilement pour la gestion et l'analyse de données.
                    <br/><br/>
                    Il est vrai que "PREMIS DM" présente encore quelques bugs, ce qui est attendu compte tenu de la complexité de la solution. Ces problèmes, lorsqu'ils surviennent, sont rapidement identifiés et résolus, assurant ainsi une amélioration continue de l'application. Ces défis sont une partie naturelle du processus de développement et offrent des opportunités précieuses pour affiner et perfectionner l'application.
                    <br/><br/>
                    À l'heure actuelle, "PREMIS DM" est en phase de test chez deux clients potentiels. Ces essais sont cruciaux pour recueillir des retours d'expérience, identifier des domaines d'amélioration et démontrer la valeur pratique de la solution dans des environnements réels. Ces phases de test sont également une étape importante dans le processus de commercialisation de la solution, nous permettant de prouver son efficacité et son adaptabilité aux besoins spécifiques de chaque client.
                `,
                illustration: ""
            }, {
                element: "Regard critique",
                content: `
                    En réfléchissant sur le parcours de développement de "PREMIS DM", je ressens une grande fierté pour tout ce que j'ai accompli, tout en reconnaissant les défis et les difficultés rencontrés, particulièrement au début du projet en raison de mon expérience limitée à l'époque.
                    <br/><br/>
                    L'un des principaux obstacles a été la fonctionnalité d'importation des données. Au début, la solution que j'avais mise en place se heurtait à des difficultés avec les fichiers de grande taille, dépassant les capacités du système en place. Cette expérience m'a appris l'importance de l'optimisation et de la prévision des besoins futurs lors du codage. Initialement, je me concentrais sur le fait que le code fonctionne dans l'immédiat sans toujours considérer son évolutivité. Cette approche a été ajustée au fil du temps, me permettant désormais de développer avec une vision à long terme, en assurant que la solution puisse s'adapter et évoluer avec les exigences croissantes.
                    <br/><br/>
                    Un autre aspect critique a été la sécurité de l'application. Dans les premières versions, l'application a été déployée avec certaines vulnérabilités, comme des failles permettant des injections SQL. Ces expériences m'ont poussé à revoir et à renforcer mes connaissances en matière de sécurité des applications web. La prise de conscience de l'importance de la sécurité dans le développement logiciel a été un point tournant, me menant à intégrer des pratiques de sécurité rigoureuses et à tester de manière exhaustive pour prévenir les failles potentielles.
                    <br/><br/>
                    En somme, bien que le chemin parcouru avec "PREMIS DM" ait comporté son lot de défis, les leçons apprises ont été inestimables. Chaque obstacle a été une opportunité d'apprentissage, me permettant de renforcer mes compétences en développement, en optimisation et en sécurité des applications. Ces expériences ont façonné mon approche de développement, me rendant plus apte à gérer des projets complexes et à développer des solutions robustes et évolutives. Je reste déterminé à continuer d'apprendre et d'améliorer mes compétences, en vue de créer des applications toujours plus performantes et sécurisées.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Evolution",
                content: `
                    La trajectoire de "PREMIS DM" se dirige vers une phase d'évolution significative, motivée par l'ambition de commercialiser l'application et de l'adapter en fonction des retours des premiers utilisateurs. L'objectif est de rendre cette solution encore plus complète, en la façonnant pour répondre à un éventail plus large de besoins spécifiques au secteur industriel.
                    <br/><br/>
                    L'application, déjà riche en fonctionnalités, sera peaufinée et élargie en se basant sur les expériences et les feedbacks des premiers clients. Cette démarche permettra de cibler et de résoudre des problématiques précises rencontrées par les utilisateurs, tout en intégrant de nouvelles fonctionnalités qui amélioreront davantage l'efficacité et la pertinence de l'application dans son contexte d'utilisation. L'accent sera mis sur l'amélioration continue de l'expérience utilisateur, la performance du système, et l'ajout de nouvelles capacités répondant aux besoins évolutifs du secteur industriel.
                    <br/><br/>
                    Pour ma part, "PREMIS DM" reste ma mission principale. Je continue d'y apporter des améliorations, des ajustements et des corrections nécessaires. Cependant, je jongle également avec d'autres projets, ce qui m'offre l'opportunité d'élargir mes compétences et d'appliquer les leçons apprises à un éventail plus large de défis et de contextes. Cette expérience polyvalente me permet de rester flexible et adaptable, tout en me concentrant sur l'amélioration continue de "PREMIS DM" en tant que produit phare.
                    <br/><br/>
                    En conclusion, l'avenir de "PREMIS DM" est prometteur, avec des plans d'expansion et d'amélioration guidés par les exigences et les retours des utilisateurs. La capacité à évoluer et à s'adapter reste au cœur de la stratégie de développement de cette solution, visant à en faire un outil encore plus indispensable dans le secteur industriel. Mon rôle dans ce processus reste central, me permettant de contribuer de manière significative à la croissance et au succès de l'application.
                `,
                illustration: ""
            }
        ]
    }, {
        name: "Mat’ Moi Ca",
        description: "Tournoi caritatif d'échecs en ligne",
        technologies: ["Chess.com", "UNICEF", "Gestion de projet"],
        icon: "img/projectsIcon/MatMoiCa.png",
        link: "https://www.yournight.net/",
        explanation: [
            {
                element: "Contexte",
                content: `
                    Le projet "Mat' moi ça", mené dans le cadre de ma formation, avait pour but de valider le semestre 4 de mes études. Ce projet unique s'inscrivait dans le cadre d'une exigence académique où, chaque semestre, nous devions réaliser un projet technique et un projet de formation humaine. Le thème de ce dernier variait à chaque fois, et pour ce semestre particulier, il s'agissait d'organiser un événement visant à collecter des fonds pour une association.
                    <br/><br/>
                    En tant que chef de projet d'un groupe de cinq personnes, l'idée de "Mat' moi ça" est née de mes réflexions pendant les vacances précédant le semestre. J'ai été inspiré par l'engouement mondial pour les échecs, notamment stimulé par la popularité de la série "Le Jeu de la Dame" sur Netflix. J'ai vu dans ce regain d'intérêt pour les échecs une opportunité unique de combiner ma passion pour ce jeu avec un objectif caritatif.
                    <br/><br/>
                    "Mat' moi ça" a été conçu comme un tournoi caritatif d'échecs en ligne, en collaboration avec Chess.com et l'UNICEF. Chess.com, en tant que plateforme leader mondiale des échecs en ligne, offrait l'environnement idéal pour accueillir le tournoi, tandis que le partenariat avec l'UNICEF soulignait notre engagement envers une cause humanitaire, celle de soutenir les enfants dans le besoin à travers le monde.
                `,
                illustration: ""
            }, {
                element: "Mise en œuvre",
                content: `
                    L'organisation de "Mat' moi ça" a débuté sans aucune base préexistante : ni contacts, ni expérience dans le domaine de l'événementiel. Face à cette page vierge, nous avons d'abord défini des rôles clairs au sein de notre équipe de cinq personnes : un chef de projet, un trésorier, et des secrétaires. Bien que chacun ait eu des responsabilités spécifiques, la collaboration et l'entraide entre les membres de l'équipe ont été essentielles, permettant une flexibilité et une efficacité accrues dans la réalisation de nos tâches respectives.
                    <br/><br/>
                    La première étape a consisté à établir les règles du tournoi et les conditions de participation pour assurer à la fois une expérience de qualité et la génération de fonds. Compte tenu des restrictions liées à la pandémie de COVID-19, nous avons opté pour un format de tournoi en ligne. Cette décision s'est avérée judicieuse, non seulement pour des raisons sanitaires, mais aussi pour la facilité d'accès et le potentiel d'attirer un grand nombre de participants.
                    <br/><br/>
                    La mise en place d'objectifs SMARTER (Spécifiques, Mesurables, Atteignables, Pertinents, Évaluables, Réalisables) a été fondamentale pour la conduite efficace du projet "Mat' moi ça". Cette méthode nous a aidés à structurer nos objectifs de manière claire et à orienter nos actions de manière cohérente tout au long du projet.
                    <br/><br/>
                    L'importance des objectifs SMARTER réside dans leur capacité à guider l'équipe avec des directives claires et réalisables, tout en permettant un suivi et une évaluation réguliers des progrès. Chaque objectif a été conçu pour aligner nos actions avec les résultats souhaités, assurant ainsi que chaque étape du projet contribuait de manière significative à sa réussite globale. Cette approche structurée a été essentielle pour naviguer efficacement dans les complexités de l'organisation d'un événement caritatif d'envergure, et a permis d'assurer que le projet "Mat' moi ça" atteignait ses objectifs avec succès et pertinence.
                    <br/><br/>
                    Nous avons choisi le format Blitz pour le tournoi, un mode de jeu rapide et populaire aux échecs, où chaque joueur dispose d'un temps limité de 3 minutes pour l'ensemble de la partie. Ce format est idéal pour un tournoi en ligne car il permet de jouer de nombreuses parties en un temps réduit, rendant le tournoi dynamique et captivant. Le prix d'entrée a été fixé à 3 euros, un montant accessible pour encourager une large participation.
                    <br/><br/>
                    La mise en œuvre du tournoi nécessitait une plateforme d'accueil fiable avec un dispositif anti-triche, une association partenaire pour la gestion des fonds, et des lots attractifs pour les gagnants. Nous avons lancé une campagne d'emailing intensive, ciblant des plateformes d'échecs, des associations caritatives et des boutiques spécialisées pour acquérir des lots. Parallèlement, nous avons travaillé sur la création d'une identité visuelle et une stratégie de communication sur les réseaux sociaux pour bâtir une communauté et générer de l'engouement autour de l'événement à travers une page Facebook ainsi qu’un profil Twitter.
                    <br/><br/>
                    Après plusieurs démarches, nous avons réussi à établir un partenariat avec Chess.com, qui a accepté d'héberger le tournoi, d'en faire la promotion et de fournir des lots sous forme d'abonnements premium. Nous avons également conclu un partenariat avec l'UNICEF France, à qui les fonds seraient reversés. Malheureusement, une collaboration prévue avec le journal SudOuest n'a pas abouti par manque de temps.
                    <br/><br/>
                    La recherche de lots supplémentaires et la promotion du tournoi par des influenceurs d'échecs ont été plus difficiles que prévu, avec de nombreux refus et des engagements non tenus. Malgré ces obstacles, nous avons persévéré, concentrant nos efforts sur le marketing et la communication pour assurer le succès de l'événement.
                    <br/><br/>
                    À l'approche du tournoi "Mat' moi ça", le mois précédant l'événement a vu une intensification significative de nos efforts de communication. Conscients de l'importance cruciale de la promotion pour le succès de notre tournoi, nous avons mis en place une stratégie de communication dynamique, centrée autour de notre page Facebook et Twitter.
                    <br/><br/>
                    Des publications régulières étaient programmées pour maintenir l'engagement et étendre notre portée. Ces posts comprenaient des mises à jour sur l'actualité du tournoi, des annonces de nos partenaires Chess.com et UNICEF, ainsi que des explications détaillées des règles du tournoi.
                    <br/><br/>
                    De leur côté, nos partenaires de Chess.com ont joué un rôle clé dans la promotion de l'événement. Ils ont respecté leur engagement en faisant la publicité de notre tournoi sur leur page Facebook et en le mettant en avant sur la page d'accueil de la version française de leur site. Cette exposition a considérablement augmenté notre visibilité et attiré de nombreux participants.
                    <br/><br/>
                    À notre grande satisfaction, nos efforts de communication ont également attiré l'attention de la Fédération Française des Échecs. Grâce à notre présence active et notre engagement sur les réseaux sociaux, la Fédération a choisi de relayer l'information sur notre tournoi à travers leurs canaux officiels, notamment sur Twitter et Facebook. Cette reconnaissance par une institution aussi respectée a non seulement validé nos efforts, mais a également élargi notre audience et renforcé la crédibilité de l'événement. Nous avons également attiré l’intérêt de plusieurs pages Facebook consacrés aux échecs qui ont relayé le tournoi.
                    <br/><br/>
                    La gestion financière de "Mat' moi ça" a également joué un rôle crucial dans le déroulé global du projet, surtout compte tenu de son importance pour l'évaluation finale de notre semestre. Nous avons abordé cet aspect avec une rigueur et une précision méticuleuses, conscient que chaque euro comptait et devait être justifié.
                    <br/><br/>
                    Pour assurer une gestion transparente et efficace du budget, nous avons mis en place un plan de trésorerie détaillé sous forme d'un fichier Excel. Ce document était la pierre angulaire de notre suivi financier, où chaque sortie et entrée d'argent était consciencieusement recensée. Nous avions catégorisé les dépenses et les revenus pour faciliter le suivi et l'analyse : frais de marketing, coûts de communication, dépenses liées à la plateforme du tournoi, et bien sûr, les fonds collectés pour l'UNICEF.
                    <br/><br/>
                    Ce suivi rigoureux nous a permis de maintenir un contrôle strict sur le budget, d'identifier rapidement les écarts par rapport aux prévisions et de prendre des décisions éclairées sur l'allocation des ressources. Chaque dépense était soigneusement examinée et approuvée par l'équipe, assurant que nous maximisions l'impact de chaque euro dépensé.
                    <br/><br/>
                    La transparence était également un aspect clé de notre gestion financière. Nous nous sommes assurés que toutes les parties prenantes, y compris nos partenaires et les participants au tournoi, étaient informées de la manière dont les fonds étaient utilisés. Cette approche a renforcé la confiance dans notre gestion du projet et a souligné notre engagement envers la responsabilité et l'intégrité.
                    `,
                illustration: ""
            }, {
                element: "Résultat",
                content: `
                    Le projet "Mat' moi ça", bien que mené avec détermination et passion, n'a pas atteint les objectifs initialement fixés en termes de collecte de fonds. Nous avions prévu de collecter 500 euros de bénéfices au profit de l'UNICEF, mais le montant final collecté s'est limité à 100 euros. Cette différence considérable entre l'objectif et le résultat est principalement due à un nombre insuffisant de participants au tournoi, qui n'a attiré que 8 joueurs.
                    <br/><br/>
                    L'une des principales raisons de cette participation limitée a été la date de l'événement, qui coïncidait avec la fin du confinement et le début de l'été. Cette période a probablement incité de nombreuses personnes à privilégier d'autres activités après une longue période de restrictions. Bien que conscient de ce possible obstacle, notre équipe était contrainte par le calendrier académique, nécessitant que le tournoi soit organisé et évalué avant la fin du semestre.
                    <br/><br/>
                    Outre ces circonstances extérieures, nous reconnaissons également que certaines erreurs de notre part ont contribué à ce résultat. Notre analyse post-événement a révélé des lacunes dans notre stratégie de communication et de marketing, ainsi que dans notre approche de mobilisation des joueurs et des sponsors. Bien que nos efforts de promotion sur les réseaux sociaux et la collaboration avec Chess.com et l'UNICEF aient été significatifs, ils n'ont pas suffi à attirer le nombre de participants escompté.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Regard critique",
                content: `
                    En rétrospective, le projet "Mat' moi ça" a été une aventure riche en enseignements, malgré le non-atteinte des objectifs fixés. En tant que chef de projet, je reconnais qu'il y a eu plusieurs facteurs qui ont influencé le résultat final, et ce regard critique me permet de tirer des leçons précieuses pour l'avenir.
                    <br/><br/>
                    Un des principaux défis rencontrés a été la synchronisation de notre tournoi avec la fin du confinement et le début de l'été. Cette période a probablement limité l'intérêt et la disponibilité des participants potentiels. De plus, notre stratégie de marketing et de communication aurait pu être plus robuste et ciblée. Bien que nous ayons réussi à créer un impact sur les réseaux sociaux, il semble que notre portée n'ait pas suffi à engager un large public. En outre, nous aurions pu explorer d'autres canaux et stratégies pour attirer des joueurs et des sponsors, tels que des partenariats plus étroits avec des clubs d'échecs locaux ou des interventions dans des événements communautaires.
                    <br/><br/>
                    Cependant, je ne considère pas "Mat' moi ça" comme un échec total. Il est important de reconnaître les succès que nous avons réalisés, notamment notre collaboration fructueuse avec Chess.com et l'UNICEF. Travailler directement avec une plateforme d'échecs de renom et une organisation humanitaire internationale a été une réalisation remarquable, témoignant de notre capacité à établir des partenariats significatifs.
                    <br/><br/>
                    De plus, le contenu que nous avons créé pour les réseaux sociaux a attiré l'attention de la Fédération Française des Échecs, un accomplissement non négligeable qui a donné une visibilité supplémentaire à notre projet. Cette reconnaissance par une institution aussi respectée souligne la qualité et l'impact de notre travail de communication.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }, {
                element: "Evolution",
                content: `
                    Bien que "Mat' moi ça" n'ait pas connu de suite ou de renouvellement, l'expérience acquise au cours de ce projet a été d'une valeur inestimable, me dotant de compétences transférables et essentielles pour mon développement professionnel et personnel.
                    <br/><br/>
                    L'une des compétences clés que j'ai pu affiner est la communication sur les réseaux sociaux. Ce projet m'a permis de comprendre les nuances de création et de partage de contenu engageant, ainsi que l'importance de bâtir une communauté en ligne. Ces compétences sont cruciales dans le monde moderne, où les plateformes numériques jouent un rôle prépondérant dans le succès de nombreux projets et entreprises.
                    <br/><br/>
                    Par ailleurs, mes interactions avec Chess.com m'ont permis de développer des compétences significatives en matière de relations humaines professionnelles et de négociation. La gestion des discussions, la présentation de nos objectifs de manière convaincante et la recherche d'un terrain d'entente ont été des aspects essentiels pour établir un partenariat fructueux. Ces compétences en négociation et en communication interpersonnelle sont des atouts majeurs pour toute future collaboration professionnelle.
                    <br/><br/>
                    De plus, la gestion du budget du projet a été une expérience formatrice, m'enseignant à gérer efficacement les ressources financières, à suivre les dépenses et les revenus, et à prendre des décisions financières judicieuses. La capacité à gérer un budget est une compétence fondamentale dans la gestion de projets de toutes sortes, qu'ils soient personnels ou professionnels.
                    <br/><br/>
                    En conclusion, bien que "Mat' moi ça" n'ait pas été poursuivi, les compétences que j'ai développées grâce à ce projet – communication digitale, négociation, relations professionnelles et gestion financière – sont des atouts précieux. Ces compétences me seront utiles dans tous mes projets futurs, me permettant de naviguer avec succès dans divers environnements professionnels et de mener à bien des initiatives ambitieuses.
                    `,
                illustration: "img/projectsIcon/YourNight.svg"
            }
        ]
    },
    {
        name: "Hypotech",
        description: "Application Android de gestion de vente immbilière",
        technologies: ["", "", "Base de données"],
        icon: "img/projectsIcon/Hypotech.png",
        link: "https://www.yournight.net/",
        explanation: [
            {
                element: "Contexte",
                content: `
                    Le projet HYPOTECH a été réalisé dans le cadre de mes études au sein d’Intech Sud Dax, lors de ma troisième année au sein de l’école, en collaboration avec quatre camarades de classe. Cette application mobile Android native, développée en Java, est née de l'idée innovante d'un professionnel ayant une expérience de 15 ans dans le secteur immobilier. L'objectif principal d'HYPOTECH était de répondre à une question cruciale : "Comment faciliter et accélérer le suivi d'un projet de vente immobilière tout en automatisant certaines tâches chronophages ?”
                    <br/><br/>
                    Ce projet académique s'inscrivait dans un contexte où le marché offrait déjà plusieurs solutions technologiques dédiées à l'immobilier. Toutefois, ces solutions existantes ne répondaient pas entièrement aux besoins spécifiques identifiés par notre collaborateur issu du domaine immobilier. Notre défi était donc de créer une application qui non seulement comble ces lacunes, mais offre également une valeur ajoutée unique aux professionnels de l'immobilier.
                    <br/><br/>
                    L'application visait à simplifier la gestion des ventes immobilières, en proposant des fonctionnalités innovantes pour le suivi des projets et l'automatisation de tâches répétitives et fastidieuses. L'accent était mis sur l'efficacité, la facilité d'utilisation et l'apport d'outils permettant une meilleure gestion du temps pour les professionnels du secteur.
                `,
                illustration: ""
            }, {
                element: "Mise en œuvre",
                content: `
                    Le développement d'HYPOTECH, en tant que projet académique, a impliqué une gestion autonome et directe des échanges avec notre client, qui était également l'initiateur de l'idée de l'application. Ces interactions se déroulaient principalement par courriel et lors de réunions régulières, nous permettant d'obtenir des retours directs et de comprendre précisément les attentes du client.
                    <br/><br/>
                    Pour mener à bien ce projet, nous avons adopté la méthode Scrum, une approche agile de gestion de projet qui favorise la flexibilité, la collaboration et l'adaptation rapide aux changements. L'une des premières étapes clés a été la réunion de lancement avec le product owner, au cours de laquelle nous avons défini l'ensemble des user stories du projet. Ces user stories représentaient les différentes fonctionnalités et exigences que notre application devait satisfaire, et leur définition claire a été essentielle pour orienter notre travail de développement.
                    <br/><br/>
                    Un de mes camarades a assumé le rôle de ScrumMaster pour ce projet. Sa responsabilité était de faciliter la communication avec le product owner, de s'assurer que les réunions Scrum se déroulent efficacement et que les obstacles éventuels à la progression du projet soient identifiés et résolus. J'ai également eu l'occasion d'expérimenter ce rôle dans le cadre d'un autre projet académique, ce qui m'a permis de développer des compétences complémentaires en matière de gestion de projet agile.
                    <br/><br/>
                    Notre équipe travaillait en sprints d'une durée d'une semaine, au cours desquels nous nous répartissions les user stories à développer. Cette méthode nous permettait de nous concentrer sur des tâches spécifiques et de progresser de manière efficace et structurée. Toutes les deux semaines, nous livrions une version de l'application au product owner pour évaluation et feedback. Cette fréquence de livraison bi-hebdomadaire nous aidait à rester alignés avec les attentes du client et à apporter rapidement les ajustements nécessaires.
                    <br/><br/>
                    Lors de notre première livraison dans le cadre du projet HYPOTECH, nous avons présenté une version initiale de l'application qui comprenait plusieurs écrans conçus à partir de maquettes Figma. Ces maquettes avaient été imaginées en grande partie par moi-même, en tenant compte des besoins et des attentes du product owner ainsi que des utilisateurs finaux.
                    <br/><br/>
                    Cette première version de l'application était axée sur l'aspect visuel et l'expérience utilisateur. Elle consistait principalement en des interfaces utilisateur sans fonctionnalités opérationnelles sous-jacentes. L'objectif principal à ce stade était de valider le design général et le flow de l'application avec le product owner. Nous voulions nous assurer que l'aspect visuel et l'ergonomie de l'application correspondaient aux attentes et étaient suffisamment intuitifs pour l'utilisateur final.
                    <br/><br/>
                    Cette approche nous a permis de recueillir des retours précoces sur l'aspect visuel et la convivialité de l'application avant de nous plonger dans le développement des fonctionnalités réelles. Elle a également donné au product owner une vision claire de l'aspect que l'application aurait une fois terminée, et a offert une base solide pour les itérations futures.
                    <br/><br/>
                    Lors des sprints futurs, une des fonctionnalités clés que j'ai développées était un système de notification pour informer les notaires, les vendeurs, les agences immobilières et les acheteurs de l'avancement des dossiers immobiliers. Par exemple, lorsqu'un document était ajouté au dossier, une notification était envoyée aux parties concernées. Sur Android natif, cela a impliqué l'utilisation des services de notification intégrés à la plateforme. J'ai programmé des triggers au sein de l'application qui déclenchaient ces notifications en fonction de certaines actions, comme l'ajout de documents. Ces notifications étaient essentielles pour maintenir toutes les parties impliquées informées et engagées tout au long du processus de vente.
                    <br/><br/>
                    Une autre tâche importante a été de permettre aux agences immobilières de personnaliser leur espace sur l'application. Cela leur permettait d'incorporer leur identité visuelle et de créer un environnement plus personnalisé pour leurs clients. J'ai développé cette fonctionnalité en créant des options de personnalisation dans l'application, permettant aux agences de modifier les couleurs, les logos et d'autres éléments de design pour refléter leur marque. Cette personnalisation contribuait à une meilleure expérience utilisateur pour les clients des agences, renforçant ainsi l'attrait de l'application.
                    <br/><br/>
                    En outre, j'ai mis en place un système de connexion entre utilisateurs, semblable à celui de LinkedIn, pour faciliter l'interaction entre les parties prenantes d'un même projet immobilier. Cela permettait essentiellement aux utilisateurs de consulter les coordonnées des autres parties impliquées. La mise en œuvre de ce système nécessitait une planification minutieuse pour assurer la sécurité et la confidentialité des données des utilisateurs, tout en offrant une plateforme intuitive pour l'établissement de connexions professionnelles. Les données étaient toutes stockées sur une base de données Firebase.
                    `,
                illustration: ""
            }, {
                element: "Résultat",
                content: `
                    Le projet HYPOTECH, bien qu'ambitieux, a rencontré des défis significatifs lors de sa mise en œuvre qui ont influencé le résultat final. Malgré nos efforts et notre engagement, certaines des fonctionnalités clés envisagées par le product owner n'ont pas pu être pleinement réalisées dans les délais impartis.
                    <br/><br/>
                    L'une des fonctionnalités non fournies était la capacité de scanner directement des documents via l'application, avec une exigence supplémentaire de refuser les fichiers peu lisibles. Cette fonctionnalité, bien que techniquement intéressante, s'est avérée complexe à intégrer dans le temps imparti, compte tenu du nombre et de la complexité des autres fonctionnalités demandées.
                    <br/><br/>
                    De plus, un mois avant la livraison finale, le product owner a modifié considérablement ses attentes en termes de design et d'expérience utilisateur. Alors que l'approche initiale était axée sur un design sobre et simple, il a souhaité intégrer des éléments plus extravagants, tels que l'ajout de GIFs sur tous les écrans. Ces changements tardifs ont posé des défis supplémentaires, car ils nécessitaient une refonte significative de l'interface utilisateur à un stade avancé du projet.
                    <br/><br/>
                    En outre, l'application a été livrée sans tests automatisés. Bien que conscients de l'importance des tests pour assurer la qualité et la stabilité de l'application, le temps limité et les ressources disponibles ne nous ont pas permis d'implémenter un cadre de test complet.
                    <br/><br/>
                    En conséquence, la version finale de l'application n'a pas totalement satisfait les attentes du product owner. Cependant, ce projet a été une expérience d'apprentissage précieuse pour notre équipe. Il a souligné l'importance de la communication claire et continue avec le client, de la gestion efficace du temps et des ressources, et de l'adaptabilité face aux changements inattendus. Bien que nous n'ayons pas pleinement atteint l'objectif initial, le projet HYPOTECH a contribué à développer nos compétences en développement d'applications mobiles et en gestion de projets, et nous a fourni des enseignements essentiels pour nos futures initiatives.
                `,
                illustration: ""
            }, {
                element: "Regard critique",
                content: `
                    En réfléchissant à mon expérience avec le projet HYPOTECH, je ressens une certaine déception vis-à-vis de mes réalisations personnelles. Malgré mon engagement et mes efforts, j'ai rencontré des difficultés qui ont affecté ma contribution au projet.
                    <br/><br/>
                    Une des principales sources de frustration a été la gestion des bugs. J'ai souvent été ralenti par des problèmes techniques inattendus qui nécessitaient un temps considérable pour être résolus. De plus, la gestion de notre dépôt Git a été une source majeure de complications. L'utilisation limitée du système de branches a entraîné de fréquents conflits de merge, requérant des corrections importantes et prenant du temps précieux qui aurait pu être consacré au développement.
                    <br/><br/>
                    Le volume élevé de user stories généré après chaque réunion était également une source de stress significative. La pression pour accomplir un grand nombre de tâches dans un laps de temps restreint m'a parfois conduit à bâcler mon travail. Cela s'est souvent traduit par l'apparition de bugs lors des tests effectués par mes camarades, ce qui m'a fait prendre conscience de l'importance de produire un travail solide et bien testé avant de passer à la tâche suivante.
                    <br/><br/>
                    Cette expérience a été une leçon précieuse sur l'importance d'une gestion efficace du temps et des ressources, ainsi que sur la nécessité d'une approche méthodique et rigoureuse dans le développement logiciel. J'ai appris que la qualité ne doit pas être sacrifiée au profit de la quantité et que prendre le temps de bien faire les choses dès le début peut économiser beaucoup d'efforts et de frustrations par la suite.
                `,
                illustration: ""
            }, {
                element: "Evolution",
                content: `
                    L'évolution du projet HYPOTECH a pris une tournure intéressante après la conclusion de notre phase de développement académique. Notre travail, bien qu'ayant rencontré des défis et des limitations, a jeté les bases pour une suite plus professionnelle du projet.
                    <br/><br/>
                    Notre application a servi de maquette fonctionnelle. Elle a joué un rôle crucial en tant que démonstration technique et support pour illustrer le potentiel et les capacités de l'idée initiale. Cette maquette a été présentée à une équipe de développeurs professionnels engagés ultérieurement par notre ancien product owner.
                    <br/><br/>
                    Ces développeurs professionnels ont pris le relais pour transformer notre prototype académique en une application plus raffinée et commercialement viable. Ils ont pu s'appuyer sur la structure, les fonctionnalités et les idées que nous avions mises en place, en les améliorant et en les adaptant aux standards professionnels et aux exigences du marché.
                    <br/><br/>
                    Pour ma part, voir notre travail initial servir de fondation pour un développement ultérieur a été une source de satisfaction. Cela a confirmé la valeur de notre contribution initiale et a démontré que nos idées et notre mise en œuvre pouvaient inspirer et guider le travail d'une équipe de développement plus expérimentée.
                    <br/><br/>
                    Cette transition de notre projet académique à une initiative professionnelle souligne l'importance de la phase de conception et de développement préliminaire dans les projets de logiciel. Même si notre version n'était pas le produit final, elle a joué un rôle déterminant dans le cheminement du concept vers une réalisation plus aboutie. Cette expérience a renforcé ma compréhension de l'importance de la phase de prototypage et de la flexibilité dans le développement logiciel, des compétences précieuses pour mes futurs projets dans le domaine.
                `,
                illustration: "img/projectsIcon/YourNight.svg"
            }
        ]
    }
]