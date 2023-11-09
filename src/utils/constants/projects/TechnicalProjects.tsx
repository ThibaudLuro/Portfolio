import { IProject } from "../../types";

//TODO: Add images
//TODO: Find a way to redirect to skills or projects page when clicking on a skill or a project

export const technicalProjects: IProject[] = [
    {
        name: "YourNight",
        description: "Application mobile de gestion de soirées",
        technologies: ["React Native", "NodeJS", "Base de données"],
        image: "/images/projects/yournight.png",
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
                illustration: "/images/projects/yournight.png"
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
                illustration: "/images/projects/yournight.png"
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
                illustration: "/images/projects/yournight.png"
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
                illustration: "/images/projects/yournight.png"
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
                illustration: "/images/projects/yournight.png"
            }
        ]
    },{
        name: "YourNight",
        description: "Application mobile de gestion de soirées",
        technologies: ["React Native", "NodeJS", "Base de données"],
        image: "/images/projects/yournight.png",
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
                illustration: "/images/projects/yournight.png"
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
                illustration: "/images/projects/yournight.png"
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
                illustration: "/images/projects/yournight.png"
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
                illustration: "/images/projects/yournight.png"
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
                illustration: "/images/projects/yournight.png"
            }
        ]
    },{
        name: "YourNight",
        description: "Application mobile de gestion de soirées",
        technologies: ["React Native", "NodeJS", "Base de données"],
        image: "/images/projects/yournight.png",
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
                illustration: "/images/projects/yournight.png"
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
                illustration: "/images/projects/yournight.png"
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
                illustration: "/images/projects/yournight.png"
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
                illustration: "/images/projects/yournight.png"
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
                illustration: "/images/projects/yournight.png"
            }
        ]
    },{
        name: "YourNight",
        description: "Application mobile de gestion de soirées",
        technologies: ["React Native", "NodeJS", "Base de données"],
        image: "/images/projects/yournight.png",
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
                illustration: "/images/projects/yournight.png"
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
                illustration: "/images/projects/yournight.png"
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
                illustration: "/images/projects/yournight.png"
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
                illustration: "/images/projects/yournight.png"
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
                illustration: "/images/projects/yournight.png"
            }
        ]
    },
    {
        name: "YourNight",
        description: "Application mobile de gestion de soirées",
        technologies: ["React Native", "NodeJS", "Base de données"],
        image: "/images/projects/yournight.png",
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
                illustration: "/images/projects/yournight.png"
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
                illustration: "/images/projects/yournight.png"
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
                illustration: "/images/projects/yournight.png"
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
                illustration: "/images/projects/yournight.png"
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
                illustration: "/images/projects/yournight.png"
            }
        ]
    },{
        name: "YourNight",
        description: "Application mobile de gestion de soirées",
        technologies: ["React Native", "NodeJS", "Base de données"],
        image: "/images/projects/yournight.png",
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
                illustration: "/images/projects/yournight.png"
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
                illustration: "/images/projects/yournight.png"
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
                illustration: "/images/projects/yournight.png"
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
                illustration: "/images/projects/yournight.png"
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
                illustration: "/images/projects/yournight.png"
            }
        ]
    }
]