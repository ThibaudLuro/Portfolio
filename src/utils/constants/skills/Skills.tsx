import { ISkill } from "../../types";

export const skills: ISkill[] = [
    {
        name: "React",
        icon: "img/skillsIcon/React.svg",
        category: "technical",
        explanation: [
            {
                element: "Définition",
                content: `
                React (également connu sous le nom de React.js ou ReactJS) est une bibliothèque JavaScript frontale à code source ouvert permettant de créer des interfaces utilisateur ou des composants d'interface utilisateur. Elle est maintenue par Facebook et une communauté de développeurs individuels et d'entreprises. Son importance est particulièrement soulignée dans le contexte professionnel, où la rapidité de développement, la performance et la réactivité des applications sont essentielles.
                <br/><br/>
                L'actualité récente dans la presse spécialisée en technologie et les médias met en évidence l'adoption croissante de React par les grandes entreprises et les startups innovantes, attestant de sa popularité et de sa pertinence dans l'écosystème du développement web. Cette tendance est également reflétée dans mes réalisations, où l'utilisation de React a transformé mon approche du développement frontend, en me permettant de répondre plus efficacement aux exigences changeantes du marché et aux besoins des utilisateurs.       
                `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Contexte d’utilisation",
                content: `
                    L'achèvement de mes deux ans et demi d'études a coïncidé avec l'opportunité de débuter un stage de six mois chez Holis Consulting, une startup spécialisée dans le développement frontend d'applications web avec React. Avec une expérience principalement en Angular, j'ai pris l'initiative d'apprendre React durant les vacances précédant mon stage, me plongeant dans la documentation officielle et des projets pratiques, afin de m'équiper des compétences nécessaires pour une transition fluide (Réalisation d’une “To Do List”).
                    <br/><br/>
                    Mon autodidaxie a porté ses fruits, me permettant non seulement de m'immerger rapidement dans le projet ISIS, mais aussi d'y apporter des améliorations significatives dès mon deuxième jour de stage. Ma capacité à m'adapter et à comprendre les nuances de React a été rapidement reconnue par Holis Consulting, qui a partagé ces impressions positives avec mon école lors d'un suivi de stage. Notamment, j'ai pu terminer son développement en un peu moins de deux mois en travaillant majoritairement en autonomie.
                    <br/><br/>
                    Deux mois plus tard, avec la livraison réussie d'ISIS, j'ai entamé le développement de Premis, où j'étais responsable de la conception de l'architecture frontend. Ce projet m'a permis de travailler de manière autonome, développant des fonctionnalités variées et parfois complexes. J'ai introduit des Workers pour optimiser les performances, et j'ai conçu des composants réutilisables pour minimiser la redondance du code, tout en développant des fonctionnalités classiques et courantes au sein d’applications web (Comme par exemple un Dashboard d’analyse de données sous forme de graphiques ou bien un système de routes protégées par rôles utilisateurs). 
                    <br/><br/>
                    La gestion de volumes de données massifs a été un défi particulier, me permettant de démontrer ma capacité à mettre en œuvre des solutions efficaces avec React pour assurer une performance optimale de l'application. Les clés me permettant de surmonter ce défi ont été la mise en place d’un environnement de test, l'utilisation judicieuse de la virtualisation des listes pour gérer efficacement l'affichage de grands ensembles de données, et l'implémentation du lazy loading pour charger les composants uniquement quand ils sont nécessaires. J'ai également optimisé les rendus en utilisant React.memo pour éviter les re-rendus inutiles, et en appliquant le debouncing sur les événements de saisie pour réduire les calculs superflus.
                    <br/><br/>    
                    En outre, j'ai exploité le Context API pour une gestion globale de l'état plus performante, évitant ainsi les prop drilling inutiles. L'adoption de hooks personnalisés m'a permis de réutiliser la logique d'état complexe à travers différents composants, contribuant ainsi à une meilleure organisation et à des performances accrues. Ces améliorations techniques, combinées à une analyse régulière des performances via les outils de profilage de React, ont joué un rôle crucial dans l'optimisation de l'application pour gérer les grands volumes de données avec efficacité.
                    <br/><br/>
                    Parallèlement, mon projet personnel YourNight m'a donné l'occasion d'approfondir ma maîtrise de React à travers l'utilisation de React Native. Cette expérience en solitaire, où j'ai conçu et développé l'application de A à Z, a renforcé ma confiance et mes capacités sur React. Elle m'a permis de comprendre les similitudes et les différences clés entre le développement web et mobile, me rendant ainsi plus versatile et compétent dans l'utilisation de ces technologies étroitement liées.
                    `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Regard critique",
                content: `
                Ma maîtrise de React, actuellement à un niveau intermédiaire avancé, reconnaît une marge de progression, en particulier dans l'optimisation des performances des applications. L'efficacité de mon intégration de React dans mon arsenal de compétences a été particulièrement visible lors de ma rapide adaptation au projet ISIS chez Holis Consulting. En moins de deux semaines, j'étais déjà en train de contribuer de manière significative au code, résolvant des bugs complexes et proposant des améliorations fonctionnelles. Cette capacité d'apprentissage et d'adaptation rapide a été reconnue par mon entreprise elle-même, qui a salué mon approche proactive et ma compréhension rapide des exigences du projet. Cependant, en tant qu'autocritique constructive, je reconnais le besoin constant de me perfectionner, notamment dans les aspects avancés tels que le state management et le rendering conditionnel complexe, pour atteindre un niveau d'expertise.
                `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Evolution",
                content: `
                    React occupe une place centrale dans mon profil et je suis déterminé à continuer à développer mes compétences dans cette technologie. Elle joue un rôle significatif dans mes activités et responsabilités actuelles, et je suis motivé à l'explorer davantage, à suivre son évolution et à adopter les meilleures pratiques pour rester à la pointe.
                    <br/><br/>
                    Si je devais me donner un conseil, ce serait de continuer à chercher des opportunités qui me poussent hors de ma zone de confort avec React en réalisant de nouveaux projets personnels toujours plus techniques et passionnants. C'est dans la résolution des défis les plus complexes que je trouve les leçons les plus précieuses et que je peux vraiment mesurer la profondeur de ma compréhension de React. Cela, combiné à une veille technologique régulière, assurera que ma courbe de progression reste ascendante et que ma compétence reste pertinente dans un environnement technologique qui évolue rapidement.                `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Réalisations liées",
                content: `
                    YourNight, PREMIS, ISIS
                `
            }
        ]
    }, {
        name: "Docker",
        icon: "img/skillsIcon/Docker.svg",
        category: "technical",
        explanation: [
            {
                element: "Définition",
                content: `
                Docker est une plateforme de conteneurisation à code source ouvert qui automatise le déploiement d'applications au sein de conteneurs logiciels, permettant ainsi une plus grande portabilité et efficacité. Elle est largement reconnue pour sa capacité à simplifier et à accélérer le processus de développement en fournissant des environnements de développement, de test et de production cohérents. Docker est soutenu par une vaste communauté de développeurs et d'entreprises, et sa popularité continue de croître dans le milieu professionnel.
                <br/><br/>
                Dans les actualités récentes et les publications spécialisées en technologie, Docker est souvent mentionné pour son adoption croissante par les grandes entreprises technologiques et les startups innovantes. Cette tendance souligne l'importance et la pertinence de Docker dans le domaine de l'ingénierie logicielle moderne, en particulier pour le développement, la livraison et l'exploitation d'applications de manière efficace et scalable.
                `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Contexte d’utilisation",
                content: `
                    L'achèvement de deux ans et demi d'études a coïncidé avec l'opportunité de débuter un stage de six mois chez Holis Consulting, une startup spécialisée dans le développement  d'applications web s’inscrivant dans le milieu de l’industrie.
                    <br/><br/>
                    Lorsque j’ai rejoint l’entreprise, celle-ci travaillait sur deux applications web différentes développées avec des technologies récentes et celles-ci étaient notamment basées sur Docker, une technologie que je n'avais jamais utilisée auparavant. Ce stage a donc été l'occasion de découvrir et apprendre à maîtriser Docker. Je me suis rapidement familiarisé avec son utilisation, saisissant l'importance et l’utilité de cette plateforme dans la création d'environnements de développement et de production. L'utilisation de Docker a non seulement facilité la gestion des dépendances et la configuration, mais a également renforcé la fiabilité et la portabilité des applications sur lesquelles je travaillais.
                    <br/><br/>
                    Après une période initiale de deux mois durant laquelle j’utilisais Docker dans l’unique but de faire tourner un environnement de développement, j'ai eu l'opportunité de mettre en pratique mes nouvelles connaissances en Docker d'une manière plus approfondie. On m'a confié la tâche de concevoir l'environnement Docker pour une toute nouvelle application web développée from scratch. Cette application fonctionnait sur trois technologies clés : React pour le frontend, ExpressJS pour le backend et PostgreSQL comme système de gestion de base de données. Pour relever ce défi, j'ai mis en place Docker Compose, un outil qui permet de définir et de gérer des applications multi-conteneurs. J'ai créé un fichier docker-compose.yml pour orchestrer ces trois services, en m'assurant que chaque composant était correctement configuré pour interagir avec les autres. Dans ce fichier, j'ai défini les services, les volumes et les réseaux nécessaires, en veillant à ce que chaque service soit construit à partir de son propre Dockerfile et qu’ils soient instanciés dans le bon ordre en faisant attention aux “depends_on”.
                    <br/><br/>
                    Pour le service React, j'ai configuré un Dockerfile pour construire une image contenant le code source du frontend, tandis que pour ExpressJS, j'ai assuré que le Dockerfile comprenait toutes les dépendances requises pour exécuter le serveur backend. Pour PostgreSQL, j'ai utilisé une image standard de Docker Hub, en m'assurant de configurer les variables d'environnement nécessaires pour chaque service et en permettant leur extériorisation pour permettre aux développeurs de les modifier à leur guise à l’intérieur de fichers .env.
                    <br/><br/> 
                    En outre, j'ai utilisé des volumes Docker pour persister les données de PostgreSQL et et images stockées côté serveur tout en permettant un rechargement à chaud du code source en développement, optimisant ainsi le workflow de développement. J'ai également configuré des réseaux Docker pour faciliter la communication entre les conteneurs de manière sécurisée.
                    <br/><br/>
                    Grâce à cette mise en place, j'ai pu fournir un environnement de développement cohérent et facilement reproductible pour l'équipe, tout en m'assurant que l'application était prête pour une intégration et un déploiement continus. Cette expérience m'a non seulement permis de solidifier ma compréhension de Docker, mais aussi d'acquérir des compétences précieuses en matière d'orchestration de conteneurs et de gestion d'applications complexes.
                    <br/><br/>
                    Après avoir acquis une expérience significative dans la mise en place d'environnements Docker pour des applications web chez Holis Consulting, j'ai appliqué ces compétences à mon projet personnel, YourNight, une application mobile développée avec React Native, ExpressJS, et MongoDB. L'objectif était de créer un environnement cohérent et efficace pour le développement et le déploiement de cette application mobile.
                    <br/><br/>
                    Les étapes réalisées ici ont été similaires à celles réalisées en entreprise, cependant deux des trois technologies principales ont changé (React Native au lieu de React et Mongodb au lieu de Postgresql).
                    <br/><br/>
                    L'aspect le plus crucial de ce projet a été le déploiement de l'application que j’ai effectué moi-même sur un serveur privé virtuel (VPS) Linux. Docker a joué un rôle essentiel dans ce processus, en me permettant de déployer facilement l'application sur le serveur. En utilisant Docker, j'ai pu garantir que l'environnement de production sur le VPS était identique à l'environnement de développement sur mon ordinateur local, évitant ainsi les problèmes courants liés aux différences d'environnement.
                    `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Regard critique",
                content: `
                En réfléchissant de manière critique sur mes compétences en Docker, je reconnais que bien que j'aie réussi à conteneuriser deux types de projets (une application web et une application mobile) ma maîtrise de cette technologie reste limitée. Mon expérience actuelle avec Docker, bien qu'efficace dans le contexte de mes projets chez Holis Consulting et mon application personnelle YourNight, se concentre principalement sur des scénarios basiques de conteneurisation et ne couvre pas l'ensemble des capacités et des pratiques avancées que Docker offre.
                <br/><br/>
                Je suis conscient qu'il existe des possibilités d'optimisation bien plus avancées, en particulier avec des outils comme Kubernetes, que je ne maîtrise pas encore. Kubernetes, en tant qu'orchestrateur de conteneurs, offre des fonctionnalités pour la gestion à grande échelle des applications conteneurisées, permettant une automatisation plus poussée, une mise à l'échelle et une gestion des ressources plus efficaces. Mon expérience actuelle ne m'a pas encore permis d'explorer ces aspects plus complexes, ce qui représente une opportunité significative d'apprentissage et d'amélioration.
                <br/><br/>
                Je reconnais également que Docker, utilisé en combinaison avec des outils d'intégration et de déploiement continus, peut offrir une pipeline de développement et de production encore plus robuste et automatisée. Cela souligne un besoin pour moi de continuer à apprendre et à explorer les meilleures pratiques et les outils complémentaires à Docker pour améliorer mon efficacité en tant que développeur et pour rester à jour avec les tendances actuelles du développement logiciel.
                <br/><br/>
                En somme, bien que j'aie acquis une base solide dans l'utilisation de Docker pour le développement et le déploiement d'applications, je suis conscient de l'étendue de ce que je dois encore apprendre pour maîtriser pleinement cette technologie et pour l'exploiter de manière optimale dans une variété de contextes de projet. Cela représente pour moi une voie claire pour le développement professionnel et une motivation pour continuer à explorer et à maîtriser les aspects avancés de la conteneurisation et de l'orchestration des applications.
                `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Evolution",
                content: `
                    Mon parcours avec Docker, bien qu'encore dans ses débuts, a été profondément enrichissant et a suscité en moi un vif intérêt pour les technologies de conteneurisation. La facilité d'utilisation, la portabilité et l'efficacité de Docker ont fait de cette technologie un élément essentiel de mon arsenal de développement, et je suis déterminé à continuer à l'explorer et à l'appliquer dans mes futurs projets.
                    <br/><br/>
                    Regardant vers l'avenir, mon ambition est de non seulement approfondir ma compréhension de Docker mais aussi d'explorer les horizons étendus que Kubernetes offre. Kubernetes représente le prochain niveau dans la gestion de conteneurs, en particulier pour les applications à grande échelle et distribuées. Son écosystème, sa capacité à gérer des clusters de conteneurs, et ses fonctionnalités d'automatisation et de mise à l'échelle sont des aspects qui suscitent en moi un fort désir de les maîtriser.
                    <br/><br/>
                    Je prévois d'aborder l'apprentissage de Kubernetes, en commençant par des tutoriels, et en progressant vers l’implémentation dans mes futurs projets personnels. Mon objectif est de développer une expertise en Kubernetes qui complète et renforce ma maîtrise de Docker, me permettant ainsi de construire des infrastructures de développement et de production plus robustes, scalables et efficaces.
                    <br/><br/>
                    En conclusion, Docker a déjà façonné de manière significative mon approche du développement logiciel, et avec l'ajout de Kubernetes à mon ensemble de compétences, je m'attends à franchir de nouvelles frontières dans le domaine de la conteneurisation et de l'orchestration d'applications.
                    `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Réalisations liées",
                content: `
                    YourNight, PREMIS, ISIS
                `
            }
        ]
    }, {
        name: "Express JS",
        icon: "img/skillsIcon/NodeJS.svg",
        category: "technical",
        explanation: [
            {
                element: "Définition",
                content: `
                ExpressJS est un framework web pour Node.js, reconnu pour sa flexibilité et sa minimalité. Il permet de construire des applications web et des API de manière rapide et efficace. En tant que middleware et système de routage, ExpressJS facilite la création d'applications web robustes et scalables en offrant un ensemble de fonctionnalités essentielles pour le développement backend. Il est particulièrement apprécié pour sa facilité d'utilisation et sa capacité à s'intégrer avec d'autres technologies et frameworks.
                <br/><br/>
                La popularité d'ExpressJS continue de croître dans le milieu professionnel, comme en témoignent les nombreuses références dans les médias spécialisés en technologie. Son adoption par de grandes entreprises technologiques ainsi que par des startups innovantes souligne son importance dans l'écosystème du développement logiciel. ExpressJS est souvent choisi pour sa rapidité de mise en œuvre et sa grande adaptabilité, ce qui en fait un outil de choix pour le développement d'applications web modernes, en particulier dans des environnements où la performance et l'efficacité sont primordiales.
                `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Contexte d’utilisation",
                content: `
                    L'achèvement de deux ans et demi d'études a coïncidé avec l'opportunité de débuter un stage de six mois chez Holis Consulting, une startup spécialisée dans le développement  d'applications web s’inscrivant dans le milieu de l’industrie. Holis Consulting utilise exclusivement ExpressJS pour développer le backend de ses applications.
                    <br/><br/>
                    Avec une expérience principalement en Java pour le développement d’API, j'ai pris l'initiative d'apprendre ExpressJS durant les vacances précédant mon stage, me plongeant dans la documentation officielle et des projets pratiques, afin de m'équiper des compétences nécessaires pour une transition fluide (Réalisation d’une API pour une “To Do List”).
                    <br/><br/>
                    Mon autodidaxie a porté ses fruits, me permettant non seulement de m'immerger rapidement dans mon premier projet en entreprise (ISIS), mais aussi d'y apporter des améliorations significatives dès mon deuxième jour de stage avec la mise en place d’une route permettant l’assignation de données à un utilisateur inscrit dans l’application.
                    <br/><br/>
                    Durant les deux premiers mois de mon stage chez Holis Consulting, mon travail avec ExpressJS s'est concentré sur le développement de fonctionnalités clés pour la première application web. J'ai intégré et mis en place des modèles de données en utilisant l'ORM Sequelize, ce qui a permis une gestion efficace et structurée de la base de données. La liaison entre les modèles a été une partie cruciale de mon travail, assurant des relations cohérentes et logiques entre les différentes entités de données.
                    <br/><br/>
                    En plus de la modélisation des données, j'ai créé une variété de controlleurs et de routes pour gérer les requêtes entrantes. Cela incluait des routes pour l'authentification des utilisateurs, la manipulation des données, et la réponse aux requêtes spécifiques liées à l'application. La mise en œuvre de middleware pour la gestion des erreurs et la validation des requêtes a également été un aspect important de mon travail, renforçant la sécurité et la fiabilité de l'application (notamment pour vérifier si sur des requêtes réservées aux administrateurs, l’utilisateur faisant l’appel possédait bien ce statut).
                    <br/><br/>
                    Après cette période initiale, j'ai été chargé de développer une architecture backend complète pour une nouvelle application web développée from scratch avec ExpressJS. Ce défi m'a permis de construire un backend robuste en partant de zéro, en conceptualisant et en implémentant une structure de serveur, en définissant des endpoints API, et en intégrant des fonctionnalités avancées telles que le traitement asynchrone et la gestion d'état. J'ai également travaillé sur l'intégration de systèmes de base de données, l'optimisation des requêtes, et l'implémentation de solutions de stockage en cache pour améliorer les performances (je devais initialement utiliser le service Redis mais après un benchmark le cache nodeJS de base suffisait).
                    <br/><br/>
                    Au cours de mon stage j’ai développé un attrait pour cette technologie que je préférais à celle utilisée pendant mes cours (Java). C'est cette attraction pour ExpressJS qui m'a motivé à choisir cette technologie pour mon projet personnel, YourNight. Ayant déjà acquis une compréhension solide de ses fonctionnalités et capacités pendant mon stage, j'étais convaincu que ExpressJS serait parfaitement adapté pour le backend de YourNight, une application mobile.
                    <br/><br/>
                    Pour YourNight, j'ai assumé la responsabilité complète de construire l'architecture et la logique backend de l'application. Travaillant seul sur ce projet, j'ai eu l'occasion de mettre en pratique mes compétences en conception et en développement de manière indépendante. J'ai conçu l'architecture backend en tenant compte des exigences spécifiques de l'application mobile, en m'assurant que l'API était à la fois robuste et performante. Cela m’a également permis de faire face à des problématiques communes aux différents projets mais qui m’ont été flagrantes étant donné le fait que je devais anticiper le maximum de cas possibles, comme par exemple le fait de protéger mon backend de possible attaques DDOS en limitant le nombre d’appels API par adresses IP.
                    <br/><br/>
                    Cette expérience a été particulièrement enrichissante, car elle m'a permis d'explorer de manière approfondie toutes les facettes d'ExpressJS, de la conception initiale de l'architecture à la mise en œuvre de fonctionnalités complexes. La réalisation de YourNight m'a non seulement permis de consolider mes compétences en développement backend avec ExpressJS, mais m'a également offert une compréhension approfondie de la création et de la gestion d'une application mobile dans son intégralité.
                    `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Regard critique",
                content: `
                    En évaluant de manière critique mes compétences en ExpressJS, je me sens globalement à l'aise avec cette technologie, bien que conscient de ne pas la maîtriser entièrement. Mon expérience avec ExpressJS, à la fois chez Holis Consulting et sur mon projet personnel YourNight, m'a permis de développer une bonne compréhension de la construction et de la gestion des architectures backend. Cela inclut la création de routes API, la gestion des sessions, et l'implémentation de mesures de sécurité telles que l'authentification et la validation des données.
                    <br/><br/>
                    Cependant, je reconnais qu'il existe des aspects d'ExpressJS que je n'ai pas encore explorés en profondeur. Par exemple, les subtilités de l'optimisation des performances et de la gestion avancée des erreurs sont des domaines où je vois un potentiel de croissance. De plus, bien que j'aie réussi à implémenter un certain nombre de fonctionnalités, je n'ai pas eu l'occasion de travailler sur des projets qui nécessitent une utilisation très avancée d'ExpressJS, comme l'intégration avec des systèmes complexes ou la gestion de charges de travail très importantes.
                    <br/><br/>
                    Je suis également conscient que le domaine du développement backend évolue rapidement, avec de nouvelles pratiques et technologies émergentes. Pour atteindre une maîtrise complète d'ExpressJS, je dois continuer à me former, à expérimenter et à rester à jour avec les dernières tendances et meilleures pratiques.
                    `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Evolution",
                content: `
                    Ma relation avec ExpressJS, enrichie par mes expériences passées, est marquée par une affection particulière pour cette technologie. Sa flexibilité, sa simplicité et son efficacité m'ont convaincu de son potentiel et de sa valeur dans le développement de projets backend. Dans mes projets futurs, je prévois de continuer à utiliser ExpressJS, tirant parti de sa robustesse et de sa capacité à faciliter le développement rapide et efficace d'applications web et mobiles.
                    <br/><br/>
                    Toutefois, reconnaissant l'importance de l'évolution constante dans le domaine du développement logiciel, je suis également déterminé à explorer de nouveaux frameworks backend basés sur Node.js. Un exemple de cela est AdonisJS, un framework qui offre une expérience de développement plus structurée et qui est souvent comparé à Laravel dans le monde PHP. AdonisJS, avec ses fonctionnalités avancées telles que l'injection de dépendances, le système ORM intégré, et les outils de test complets, représente une opportunité pour moi d'élargir mes horizons et d'acquérir de nouvelles compétences.
                    <br/><br/>
                    L'apprentissage de frameworks comme AdonisJS me permettra non seulement de rester à jour avec les dernières innovations dans le développement backend, mais aussi d'approfondir ma compréhension des architectures d'applications et de découvrir de nouvelles manières de résoudre des problèmes complexes. Cela enrichira ma boîte à outils de développement, me rendant plus polyvalent et adaptable dans mes projets futurs. Cette démarche s'inscrit dans mon engagement à long terme pour l'apprentissage continu dans le développement logiciel, me permettant de rester pertinent et efficace dans un domaine technologique en constante évolution.
                    `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Réalisations liées",
                content: `
                    YourNight, PREMIS, ISIS
                `
            }
        ]
    }, {
        name: "Base de données",
        icon: "img/skillsIcon/Database.svg",
        category: "technical",
        explanation: [
            {
                element: "Définition",
                content: `
                Les bases de données jouent un rôle fondamental dans le monde de la technologie, en servant de pilier pour le stockage, la gestion et la récupération d'informations. Elles peuvent être relationnelles, comme MySQL ou PostgreSQL, ou non relationnelles (NoSQL), comme MongoDB. Les bases de données relationnelles utilisent un modèle structuré avec des tables et des relations, tandis que les bases de données NoSQL offrent une flexibilité accrue avec des modèles de données variés comme le document, le graphique ou la clé-valeur.
                <br/><br/>
                La pertinence des bases de données dans le milieu professionnel est indéniable. Elles sont essentielles pour une multitude d'applications, allant des systèmes de gestion de contenu aux réseaux sociaux et aux applications mobiles. Leur choix et leur utilisation dépendent fortement des besoins spécifiques du projet, notamment en termes de volume de données, de vitesse d'accès et de la complexité des requêtes.
                <br/><br/>
                Leur popularité ne cesse de croître, comme en témoigne l'intérêt constant dans les médias spécialisés en technologie. Les grandes entreprises technologiques et les startups innovantes adoptent des bases de données avancées pour gérer d'énormes volumes de données, assurer des performances élevées et maintenir la scalabilité. Dans les environnements où la gestion des données est critique, le choix de la base de données appropriée est crucial pour la réussite du projet.
                `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Contexte d’utilisation",
                content: `
                    Mon initiation aux bases de données a débuté il y a environ quatre ans, dans le cadre de mes projets réalisés durant mes études. J'ai principalement travaillé avec MySQL, un système de base de données relationnelle répandu. Cette expérience m'a permis de me familiariser avec les fondements des bases de données SQL, notamment en appliquant les opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) de manière classique, ce qui a constitué la base de ma compréhension dans ce domaine.
                    <br/><br/>
                    Tout au long de mes projets académiques, j'ai fréquemment utilisé des ORM (Object-Relational Mapping) pour interagir avec les bases de données. Cela m'a permis de me concentrer sur la logique métier tout en gérant efficacement les interactions avec la base de données. Cependant, conscient de l'importance de comprendre les principes fondamentaux des bases de données SQL, j'ai également passé du temps à travailler directement dans l'éditeur de requêtes. Cette pratique m'a aidé à acquérir une compréhension approfondie des opérations SQL telles que ORDER BY, COUNT, HAVING, WHERE, et d'autres commandes classiques.
                    <br/><br/>
                    Cette approche mixte, combinant l'utilisation d'ORM et l'interaction directe avec l'éditeur de requêtes, m'a permis de développer une compréhension complète et nuancée de la gestion des bases de données. J'ai appris à optimiser les requêtes pour l'efficacité et la précision, et j'ai acquis une appréciation des nuances et des capacités de MySQL. Cette fondation solide dans les bases de données relationnelles a été cruciale pour mes projets ultérieurs et a ouvert la voie à mon exploration de technologies de base de données plus avancées et diversifiées.
                    <br/><br/>
                    Au cours de l'année écoulée, mon travail sur le projet Premis m'a conduit à approfondir significativement mes connaissances et compétences en bases de données, en particulier avec PostgreSQL. Ce système de gestion de base de données avancé m'a offert l'opportunité de m'attaquer à des défis techniques plus complexes, en particulier dans la création de vues et dans l’optimisation générale du fonctionnement de la base de données étant donné le nombre volumineux de données nécessaire au fonctionnement de l’application Web.
                    <br/><br/>
                    L'utilisation de PostgreSQL pour Premis m'a permis de concevoir des vues qui simplifiaient et accéléraient les requêtes complexes. La création de certaines de ces vues s'est avérée particulièrement complexe, en raison des multiples conditions nécessaires pour ramener les bonnes données. J'ai dû naviguer à travers une série de conditions imbriquées et de jointures pour assurer que les vues générées fournissaient des informations précises et pertinentes, en accord avec les besoins spécifiques du projet.
                    <br/><br/>
                    Cette tâche a nécessité une compréhension approfondie de la logique SQL, ainsi qu'une aptitude à conceptualiser et à mettre en œuvre des solutions de requête sophistiquées. Travailler avec PostgreSQL et relever ces défis a non seulement renforcé ma compréhension des bases de données relationnelles, mais a également amélioré ma capacité à résoudre des problèmes complexes et à optimiser les performances des bases de données.
                    <br/><br/>
                    En outre, j'ai acquis de l'expérience dans la gestion des utilisateurs et de leurs droits d'accès, un aspect crucial pour la sécurité et la conformité des applications. En passant également par la mise en place de migrations afin d’effectuer des changements proprement en base de données sans risque de perte de données. L'implémentation d'index a été une autre compétence clé que j'ai développée, me permettant d'optimiser davantage les temps de recherche et d'améliorer les performances globales des bases de données en complément de la compréhension et de la restauration du cache mis en place à l’intérieur de PostgreSQL.
                    <br/><br/>
                    Parallèlement à mon travail avec des bases de données relationnelles, j'ai également exploré le monde des bases de données non SQL avec MongoDB dans mon projet personnel, YourNight. L'utilisation de MongoDB m'a permis d'apprécier les avantages des systèmes de bases de données NoSQL, notamment en termes de flexibilité de schéma et de facilité d'intégration avec des applications basées sur JavaScript, comme celles utilisant Node.js et React Native. Je n’ai cependant pas développé énormément de compétences avancées, juste le nécessaire pour que mon application fonctionne correctement malgré un potentiel gros volume de données.
                    <br/><br/>
                    Durant ma formation en école, j'ai également eu l'opportunité d'acquérir des connaissances de base en PL/SQL, le langage de programmation procédural pour les systèmes de gestion de base de données Oracle. Cette introduction au PL/SQL m'a permis de comprendre les principes fondamentaux de la programmation dans les environnements de bases de données, notamment la création de procédures stockées, de fonctions, et de déclencheurs (triggers).
                    <br/><br/>
                    Bien que j'aie acquis une compréhension solide des concepts de base de PL/SQL, je reconnais que mes compétences dans ce domaine ne sont pas avancées. Mon expérience se limite principalement à des applications et des exercices académiques, sans immersion profonde dans des projets réels de grande envergure ou des environnements de production complexes.
                    <br/><br/>
                    Cette expérience variée avec les bases de données relationnelles et non relationnelles m'a permis de développer une compréhension complète de la gestion des données dans les applications modernes. Elle a renforcé ma capacité à choisir et à optimiser la base de données la plus adaptée en fonction des besoins spécifiques de chaque projet, qu'il s'agisse de performance, de flexibilité, ou de sécurité.
                    `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Regard critique",
                content: `
                    En réfléchissant de manière critique à mes compétences en bases de données, je reconnais que j'ai établi de solides fondations tant en SQL qu'en NoSQL. Mes expériences avec MySQL, PostgreSQL, et MongoDB m'ont fourni une bonne compréhension des opérations et des structures de bases de données, ainsi que de la logique nécessaire pour leur manipulation efficace. Cependant, je suis conscient que pour atteindre un niveau supérieur de maîtrise, je dois encore approfondir mes connaissances et compétences, en particulier dans l'optimisation des bases de données pour la manipulation d'énormes volumes de données.
                    <br/><br/>
                    Bien que j'aie acquis une certaine expérience dans l'optimisation des requêtes et la création de vues complexes avec PostgreSQL, et que j'aie exploré la flexibilité des modèles de données avec MongoDB, je suis conscient que la gestion et l'optimisation des bases de données à grande échelle représentent un défi bien plus complexe. Cela implique une compréhension avancée des index, des stratégies de partitionnement des données, du tuning des performances et de la gestion efficace des transactions, surtout dans des environnements où la rapidité d'accès et la cohérence des données sont primordiales.
                    `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Evolution",
                content: `
                    Ma trajectoire avec les technologies de bases de données a été une aventure constante d'apprentissage et d'adaptation. Reconnaissant leur rôle essentiel dans le développement de toute application moderne, je suis résolu à continuer à les utiliser activement dans mes projets futurs. Pour les petits projets, je prévois de continuer à utiliser MongoDB en raison de sa flexibilité et de sa facilité d'implémentation. La nature schéma-moins de MongoDB et sa capacité à gérer des données de forme libre la rendent idéale pour des projets agiles et innovants.
                    <br/><br/>
                    Pour les projets plus importants et complexes, les bases de données SQL resteront mon choix privilégié, compte tenu de leur robustesse, de leur fiabilité et de leur capacité à gérer efficacement de grandes quantités de données structurées. Toutefois, j'ai une forte envie de développer davantage mes compétences en NoSQL. Mon expérience avec MongoDB m'a particulièrement impressionné et a suscité un intérêt marqué pour explorer d'autres bases de données NoSQL, chacune ayant ses propres forces et cas d'utilisation spécifiques.
                    <br/><br/>
                    Parallèlement à mon intérêt croissant pour les bases de données NoSQL, je suis également conscient de l'importance croissante du cloud computing dans la gestion des données. Le cloud offre une flexibilité, une scalabilité et une efficacité inégalées, ce qui en fait un élément crucial dans la stratégie de gestion des données modernes. Mon objectif est de m'intégrer davantage dans le cloud, en apprenant à utiliser des services de bases de données cloud comme Amazon RDS, Google Cloud SQL ou Azure SQL Database pour les solutions basées sur SQL, ainsi que des services comme MongoDB Atlas pour les solutions NoSQL.
                    `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Réalisations liées",
                content: `
                    YourNight, PREMIS, ISIS
                `
            }
        ]
    }, {
        name: "Git",
        icon: "img/skillsIcon/Git.svg",
        category: "technical",
        explanation: [
            {
                element: "Définition",
                content: `
                GIT est un système de contrôle de version décentralisé, largement reconnu pour sa robustesse et sa flexibilité. Il est conçu pour gérer tout, des petits aux très grands projets, avec rapidité et efficacité. GIT facilite le suivi des modifications dans les fichiers, permettant aux développeurs de collaborer sur le code de manière coordonnée et sécurisée. Il supporte des workflows non linéaires, fournit des outils pour naviguer et visualiser l'historique des modifications, et gère efficacement les branches et les fusions.
                <br/><br/>
                La popularité de GIT dans le milieu professionnel est indéniable, comme le montrent les nombreuses références dans les médias spécialisés en technologie. Sa présence est omniprésente dans le monde du développement logiciel, adoptée par des grandes entreprises technologiques et des startups innovantes. L'importance de GIT réside dans sa capacité à faciliter la collaboration entre les développeurs et à gérer efficacement les versions du code dans un environnement de développement moderne.
                <br/><br/>
                GIT est souvent choisi pour sa capacité à gérer efficacement les projets de développement logiciel de toutes tailles, offrant une solution fiable et évolutive pour le contrôle de version. Sa facilité d'intégration avec d'autres outils de développement et sa capacité à s'adapter à divers workflows en font un élément essentiel dans les pratiques modernes de développement logiciel, en particulier dans des environnements où la collaboration et la gestion efficace du code sont primordiales.
                `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Contexte d’utilisation",
                content: `
                    Depuis mes débuts dans le monde de la programmation, il y a environ quatre ans, GIT a été un outil constant dans mon parcours de développement. J'ai utilisé GIT dans divers contextes, que ce soit à l'école ou en entreprise, en adoptant GitLab comme plateforme principale pour les projets académiques et professionnels, et GitHub pour mes projets personnels ou ceux réalisés en collaboration avec mes amis.                
                    <br/><br/>
                    Au fil des années, j'ai acquis une maîtrise solide des fonctionnalités classiques de GIT. Lors de mes années d'études, j'ai souvent eu recours à des commandes telles que git clone pour récupérer les dernières versions de projets de groupe, et git pull ainsi que git push pour maintenir la synchronisation avec les dépôts distants. Les commandes git add et git commit étaient routinières pour enregistrer mes progrès, tandis que git merge me permettait d'intégrer des travaux issus de différentes branches.
                    <br/><br/>
                    La gestion des branches avec git branch et git checkout a été particulièrement utile dans des projets où plusieurs fonctionnalités étaient développées en parallèle. Cette approche me permettait de travailler sur différentes tâches sans perturber le code principal. Lors de projets plus complexes, j'ai également utilisé git rebase pour réorganiser les commits et maintenir un historique propre, ce qui a grandement facilité la compréhension du déroulement du projet. C’est notamment en entreprise que j’ai pu développer ces aspects cruciaux et en apprendre correctement les avantages.
                    <br/><br/>
                    Une anecdote marquante de mes années d'étude concerne la gestion parfois laborieuse de GIT. Lors d'un projet de groupe, nous avons rencontré des conflits de fusion complexes qui ont nécessité plusieurs heures pour être résolus. Ces situations ont été des occasions d'apprentissage précieuses, me poussant à développer une compréhension plus profonde de la résolution de conflits avec git merge. J'ai appris l'importance de communiquer efficacement avec les membres de l'équipe pour éviter de tels problèmes et la nécessité d'une gestion rigoureuse des branches.
                    <br/><br/>
                    En travaillant sur mon projet personnel, l'application mobile YourNight, l'utilisation des fonctionnalités avancées de GIT a pris une nouvelle dimension. J'ai notamment utilisé les git hooks pour automatiser l'exécution de tests unitaires avant chaque commit. Cette pratique a considérablement amélioré la qualité du code et la fiabilité de l'application, en assurant que toutes les modifications soumises passaient avec succès un ensemble de tests préalablement définis.
                    <br/><br/>
                    L'intégration de tests unitaires via les git hooks a été un aspect crucial dans le développement de YourNight. Cela m'a permis de détecter rapidement les erreurs et les bugs avant qu'ils n'atteignent la branche principale, garantissant ainsi un niveau de qualité et de stabilité plus élevé dans l'application. De plus, cela a renforcé la confiance dans chaque nouvelle fonctionnalité ajoutée ou modification apportée, sachant que le code était systématiquement validé par ces tests.
                    <br/><br/>
                    Cette approche a également contribué à une meilleure discipline de développement, m'encourageant à écrire des tests unitaires complets et à penser davantage aux potentiels impacts des changements de code. L'automatisation des tests via GIT a simplifié le processus de validation du code et a renforcé les bonnes pratiques de développement au sein de mon workflow personnel.
                    <br/><br/>
                    En somme, l'intégration des tests unitaires avec GIT pour mon projet YourNight a non seulement amélioré la qualité du code mais a également été une étape significative dans le développement de mes compétences en matière de gestion de version et d'assurance qualité dans le développement logiciel.
                    `,
                illustration: ""
            }, {
                element: "Regard critique",
                content: `
                En évaluant mes compétences et mon expérience avec GIT, je me considère comme ayant des connaissances solides, particulièrement en ce qui concerne l'utilisation de GitHub. J'ai acquis une bonne maîtrise des opérations de base et avancées de GIT, comme la gestion des branches, la résolution de conflits, l'utilisation de hooks pour l'automatisation des tests, et la collaboration efficace via les pull requests. Cependant, en regardant de manière critique, je reconnais qu'il existe des domaines où je peux encore m'améliorer, surtout en ce qui concerne l'utilisation de GitLab et la mise en place de workflows complets de CI/CD (Continuous Integration/Continuous Deployment).
                <br/><br/>
                GitLab offre des fonctionnalités étendues pour le CI/CD, permettant une automatisation plus poussée du processus de développement et de déploiement. Jusqu'à présent, mon expérience avec ces aspects de GitLab reste limitée. Je vois une opportunité significative d'amélioration dans la compréhension et la mise en œuvre de pipelines de CI/CD complets, qui comprennent non seulement l'exécution automatique des tests, mais aussi l'intégration de l'analyse de code, le déploiement automatique dans différents environnements et la gestion efficace des versions.
                `,
                illustration: ""
            }, {
                element: "Evolution",
                content: `
                    Ma trajectoire avec GIT a été un voyage d'apprentissage constant, marqué par une appréciation croissante pour cet outil puissant et polyvalent. J'ai développé un attachement fort à GIT, le trouvant fantastique pour sa capacité à gérer efficacement les versions de code et à faciliter la collaboration. Cela me motive à explorer encore plus profondément ses possibilités, en particulier dans le domaine de l'intégration et du déploiement continus (CI/CD) via GitLab.
                    <br/><br/>
                    En regardant vers l'avenir, je suis déterminé à maîtriser les concepts de CI/CD, reconnaissant leur importance cruciale dans les cycles de développement logiciel modernes. Mon objectif est de gagner une compréhension approfondie des pipelines de CI/CD dans GitLab, allant de la configuration initiale des pipelines à la mise en œuvre de stratégies de déploiement automatisé et d'assurance qualité. Je prévois de me plonger dans la documentation de GitLab, d'explorer les tutoriels en ligne et de participer à des projets pratiques pour renforcer cette compétence.
                    <br/><br/>
                    Je vois cette évolution comme une étape naturelle dans ma croissance en tant que développeur. La maîtrise des flux de travail de CI/CD me permettra non seulement d'optimiser le processus de développement dans mes projets, mais aussi de garantir une qualité de code plus élevée et une distribution plus efficace. Cela augmentera ma valeur en tant que professionnel du développement logiciel, me rendant plus compétent dans la gestion de projets complexes et dans la réponse aux besoins des environnements de développement dynamiques.
                    <br/><br/>
                    En résumé, ma volonté d'apprendre et de maîtriser les concepts de CI/CD via GitLab, combinée à mon attachement profond à l'outil GIT, reflète mon engagement à rester à l'avant-garde des meilleures pratiques de développement logiciel. Cet engagement envers l'apprentissage continu et l'adoption de nouvelles méthodologies souligne ma passion pour le développement logiciel et mon désir de contribuer de manière significative et efficace à ce domaine en constante évolution.
                    `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Réalisations liées",
                content: `
                    YourNight, PREMIS, ISIS
                `
            }
        ]
    }, {
        name: "Intégration continue",
        icon: "img/skillsIcon/Cicd.svg",
        category: "technical",
        explanation: [
            {
                element: "Définition",
                content: `
                L'intégration continue (CI) est une pratique de développement logiciel qui consiste à automatiser l'intégration du code dans un dépôt partagé plusieurs fois par jour. Cette approche permet aux équipes de détecter rapidement les erreurs, de les corriger en amont et d'améliorer la qualité du logiciel, tout en réduisant le temps nécessaire pour publier de nouvelles mises à jour. La CI encourage une culture de tests fréquents, ce qui aide à identifier et à résoudre les conflits entre les branches de développement dès qu'ils se présentent, facilitant ainsi un processus de développement plus fluide et plus rapide.
                <br/><br/>
                Au cœur de l'intégration continue se trouve l'automatisation du processus de build et de test, qui exécute une série de scripts ou de tâches automatiquement à chaque soumission de code. Cela inclut la compilation du code, l'exécution des tests unitaires et d'intégration, et parfois la vérification du respect des normes de codage. Si le processus détecte des erreurs ou des tests échoués, il alerte l'équipe de développement, permettant une intervention rapide avant que le problème ne s'aggrave ou ne se propage.
                <br/><br/>
                L'adoption de l'intégration continue dans les projets de développement logiciel apporte plusieurs avantages, notamment une diminution significative des conflits de fusion, une détection précoce des bugs, une réduction des risques liés à la publication, et une augmentation de la confiance dans le code qui est livré. De plus, la CI favorise les livraisons de logiciels plus fréquentes et plus fiables, ce qui est essentiel dans un environnement de développement agile.
                <br/><br/>
                En résumé, l'intégration continue est une pierre angulaire des pratiques de développement moderne, permettant aux équipes de maintenir un rythme de développement élevé tout en assurant la qualité et la stabilité du logiciel produit.
                `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Contexte d’utilisation",
                content: `
                    Dans le contexte de l'application web PREMIS, développée au sein de l'entreprise où j'étais en stage, l'intégration continue a joué un rôle clé dans l'efficacité et la fiabilité du processus de déploiement. Lorsque j'ai rejoint le projet, une des tâches qui m'ont été assignées était de structurer l'hébergement de la solution qui, jusqu'à ce moment, ne disposait d'aucun système automatisé pour le déploiement. Pour répondre à ce besoin, nous avons loué un serveur Linux, ce qui a posé la base matérielle nécessaire pour l'hébergement de notre application web.
                    <br/><br/>
                    Ma responsabilité était ensuite de mettre en place une chaîne d'intégration continue via GitHub, un outil que je maîtrisais déjà pour la gestion du code source. L'objectif était de créer un processus automatisé de déploiement qui faciliterait et accélérerait la mise en production des nouvelles versions de l'application. Cela impliquait la configuration de webhooks GitHub pour déclencher des scripts de déploiement sur le serveur chaque fois que des modifications étaient poussées vers la branche principale du dépôt.
                    <br/><br/>
                    Le processus d'intégration continue que j'ai mis en place comprenait plusieurs étapes clés : la compilation du code, l'exécution des tests automatiques pour vérifier l'intégrité et la fonctionnalité de l'application, et enfin le déploiement automatique sur le serveur de production. Ce workflow a non seulement permis de garantir que chaque nouvelle version déployée était stable et prête pour la production, mais il a également significativement réduit le temps nécessaire pour publier des mises à jour, permettant ainsi à l'équipe de se concentrer davantage sur le développement de nouvelles fonctionnalités et l'amélioration de l'application.
                    <br/><br/>
                    En automatisant le processus de déploiement avec l'intégration continue, j'ai contribué à instaurer une pratique de développement plus agile et plus réactive au sein de l'équipe. Cette expérience a été enrichissante, me permettant de renforcer mes compétences en gestion de serveur, en automatisation, et en travail collaboratif grâce à GitHub, tout en répondant efficacement aux exigences techniques et opérationnelles du projet PREMIS.
                    <br/><br/>
                    Une anecdote marquante de cette période fut la manière dont les déploiements étaient gérés avant la mise en place de l'intégration continue. À cette époque, c'était le chef de projet qui était chargé de diriger les déploiements de l'application. Sans une compréhension approfondie des processus sous-jacents, il suivait un ensemble de commandes fournies par mon maître d'apprentissage, exécutées séquentiellement sans véritable automatisation ou assurance de cohérence entre les déploiements. Cette méthode, bien que fonctionnelle, était loin d'être optimale et pouvait être source d'erreurs humaines, sans compter le temps conséquent qu'elle requérait pour chaque mise à jour de l'application.
                    <br/><br/>
                    La transition vers un système d'intégration continue que j'ai initialement mise en place a marqué un tournant significatif dans notre façon de travailler. Cependant, la véritable évolution est venue plus tard, lorsqu'un collègue a pris l'initiative de développer un workflow d'intégration continue et de déploiement continu (CI/CD) encore plus robuste, en utilisant notre propre instance GitLab. Cette nouvelle configuration a non seulement automatisé le processus de déploiement, mais a également introduit des étapes supplémentaires de vérification et de validation du code, garantissant ainsi une plus grande fiabilité et sécurité des versions déployées.
                    <br/><br/>
                    Ce workflow GitLab a transformé notre manière de gérer les mises à jour de l'application, en passant d'une approche manuelle, sujette à erreurs, à un système automatisé, efficient, et transparent. La mise en place de cette chaîne CI/CD a permis à l'équipe de se concentrer davantage sur le développement et l'amélioration de l'application, tout en réduisant significativement les risques liés aux déploiements. Cette expérience a été une leçon précieuse sur l'importance de l'automatisation et de l'optimisation des processus dans le développement logiciel moderne, ainsi que sur la valeur de l'adoption des meilleures pratiques en matière d'intégration et de déploiement continu.
                    <br/><br/>
                    Pour mon projet personnel YourNight, j'ai également pris l'initiative de mettre en place un système d'intégration continue automatisé, en utilisant GitHub pour gérer le code source et automatiser les déploiements de mon API sur un VPS Ubuntu. Ce workflow incluait l'exécution automatique de tests pour assurer la qualité du code, ainsi que l'application de ESLint pour maintenir une cohérence de style de codage et détecter les erreurs potentielles avant le déploiement.
                    <br/><br/>
                    Une anecdote particulièrement instructive a émergé suite à la mise en place de ce système. À chaque déploiement de l'application, un problème récurrent entraînait la perte des photos de profil des utilisateurs. Après investigation, il s'est avéré que le problème était lié à la gestion des volumes dans Docker. En effet, lors du déploiement de nouvelles versions de l'application via Docker, les données stockées localement dans le conteneur, y compris les photos de profil, étaient effacées, car le volume contenant ces données n'était pas correctement configuré pour persister au-delà du cycle de vie du conteneur.
                    <br/><br/>
                    La mise en place d'un système d'intégration continue automatisé pour YourNight a considérablement transformé ma façon de gérer les déploiements, les rendant non seulement plus fiables mais aussi beaucoup moins stressants. L'automatisation du processus de déploiement, incluant l'exécution des tests, l'application de ESLint, et la gestion correcte des volumes Docker, a éliminé une grande part d'incertitude et de tâches manuelles qui pouvaient auparavant mener à des erreurs ou des oublis.
                    <br/><br/>
                    Ce gain de temps est non négligeable; il me permet désormais de me concentrer davantage sur le développement de nouvelles fonctionnalités et l'amélioration de l'expérience utilisateur, plutôt que de me préoccuper des détails techniques du déploiement. La confiance accrue dans la fiabilité et la stabilité des déploiements automatisés a également réduit le stress associé à la mise en ligne de nouvelles versions de l'application. Je peux maintenant effectuer des mises à jour fréquentes et réactives, en réponse aux besoins des utilisateurs ou pour corriger des bugs, avec l'assurance que chaque déploiement est préalablement testé et vérifié.
                    `,
                illustration: ""
            }, {
                element: "Regard critique",
                content: `
                Mon regard critique sur ma compétence en intégration continue reflète une appréciation nuancée de mes acquis et des domaines nécessitant une amélioration. Bien que je dispose de bases solides dans la mise en œuvre de workflows d'intégration continue, notamment grâce à mes expériences avec GitHub et la gestion de déploiements automatisés sur des VPS Linux, je reconnais que mon expérience reste limitée, surtout quand il s'agit d'outils et de pratiques plus avancés.
                <br/><br/>
                Je n'ai, par exemple, pas encore eu l'opportunité d'utiliser des outils d'intégration continue et de déploiement continu (CI/CD) plus poussés comme Jenkins ou Travis CI dans un contexte GitLab. Ces plateformes offrent des fonctionnalités et une flexibilité supplémentaires pour gérer des pipelines CI/CD complexes, permettant une automatisation encore plus grande et plus sophistiquée des tests, des builds, et des déploiements.
                <br/><br/>
                Mon manque d'expérience avec ces outils avancés limite ma capacité à tirer pleinement parti des potentialités de l'intégration continue, en particulier pour des projets de grande envergure ou nécessitant une configuration de déploiement complexe. Cette lacune souligne un besoin pour moi de continuer à me former et à explorer ces technologies pour enrichir ma maîtrise de l'intégration et du déploiement continu.
                <br/><br/>
                En somme, bien que je sois capable de gérer efficacement les déploiements et d'apprécier les avantages de l'intégration continue avec les outils que j'ai utilisés jusqu'à présent, je reste conscient de l'étendue de ce que j'ai encore à apprendre.
                `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Evolution",
                content: `
                    Mon intérêt pour la compétence en intégration continue (CI/CD) est plus que présent, et je suis résolu à approfondir ma compréhension et ma maîtrise de cette discipline essentielle au développement logiciel moderne. Conscient de l'importance cruciale des outils d'intégration continue avancés pour optimiser et sécuriser le processus de développement et de déploiement des applications, je m'engage à me former de manière plus approfondie sur des plateformes telles que Jenkins, Travis CI, et d'autres solutions GitLab CI/CD.
                    <br/><br/>
                    Cette formation se fera au travers de contenus en ligne, tels que des tutoriels, des cours, et des webinaires dédiés, qui me permettront d'acquérir les connaissances et compétences nécessaires pour implémenter des pipelines CI/CD plus complexes et plus efficaces. Mon objectif est de pouvoir non seulement appliquer ces compétences accrues à mes futurs projets personnels, en maximisant leur efficacité et leur fiabilité, mais aussi de contribuer de manière plus significative à l'entreprise où je réalise mon alternance. En aidant à résoudre des problèmes liés à l'intégration et au déploiement continu, je souhaite apporter une valeur ajoutée à mon équipe et améliorer les processus de développement au sein de l'entreprise.
                 `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Réalisations liées",
                content: `
                    YourNight, PREMIS, ISIS
                `
            }
        ]
    }, {
        name: "Commmunication Digitale",
        icon: "img/skillsIcon/DigitalMarketing.svg",
        category: "soft",
        explanation: [
            {
                element: "Définition",
                content: `
                La communication sur les réseaux sociaux est devenue une compétence essentielle dans le monde professionnel moderne, offrant une plateforme dynamique pour le marketing, l'engagement communautaire et le partage d'informations. Ma maîtrise de cette compétence me permet de créer du contenu attractif, de gérer les interactions avec les utilisateurs et de développer des stratégies de communication efficaces adaptées à chaque plateforme sociale.
                <br/><br/>
                L'importance de la communication sur les réseaux sociaux dans le milieu professionnel est incontestable. Son adoption par des grandes marques, des startups innovantes et des individus souhaitant renforcer leur présence en ligne témoigne de son rôle crucial dans la construction et le maintien de relations avec une audience globale. Les réseaux sociaux permettent une diffusion rapide de l'information et offrent une plateforme pour le storytelling, la promotion de produits et services, et l'engagement direct avec les clients.
                <br/><br/>
                Ma compétence en communication sur les réseaux sociaux s'appuie sur une compréhension approfondie des différentes plateformes (Facebook, Twitter, Instagram, etc.) et de leurs spécificités, permettant de choisir les stratégies les plus adaptées pour chaque canal. Cela inclut la création de contenu visuel et textuel engageant, la planification de campagnes publicitaires ciblées, l'analyse des données pour optimiser les stratégies de publication et l'interaction en temps réel avec la communauté pour renforcer la fidélité et l'engagement.
                `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Contexte d’utilisation",
                content: `
                    Ma première campagne de communication significative sur les réseaux sociaux s'est déroulée dans le cadre du projet "Mat' moi ça", un tournoi d'échecs en ligne organisé en partenariat avec Chess.com et l'UNICEF. Ce projet a représenté un défi de taille, nécessitant une stratégie de communication efficace pour atteindre et engager notre public cible. Pour mener à bien cette mission, je me suis autoformé sur les meilleures pratiques de communication sur les réseaux sociaux, comprenant rapidement l'importance cruciale de définir précisément notre audience et d'adapter notre message en conséquence.
                    <br/><br/>
                    L'un des aspects fondamentaux que j'ai appris était l'importance de la segmentation du public. Cela impliquait de comprendre les différentes caractéristiques et intérêts de notre audience, pour créer des messages résonnant avec leurs attentes et augmentant ainsi l'engagement. J'ai également découvert le rôle central de la planification du contenu, qui nécessite une approche équilibrée entre les publications promotionnelles et les contenus générant de l'engagement, tels que des histoires intéressantes autour des échecs, des astuces de jeu, et des mises à jour sur notre cause caritative.
                    <br/><br/>
                    Au-delà de la création de contenu, j'ai appris l'importance de la régularité des publications, de l'interaction avec la communauté par des réponses aux commentaires et des messages privés, ainsi que de l'utilisation de hashtags stratégiques pour augmenter la visibilité de nos publications. L'analyse des performances de nos publications à travers les outils “analytics” des plateformes a également joué un rôle crucial, me permettant d'ajuster notre stratégie en temps réel pour optimiser notre portée et notre engagement.
                    <br/><br/>
                    Dans le cadre du projet "Mat' moi ça", l'utilisation stratégique des plateformes Facebook et Twitter a été essentielle pour la réussite de notre campagne de communication. Nous avons élaboré une stratégie en plusieurs phases, axée sur la création d'une communauté engagée, la promotion de l'événement, et l'augmentation de la visibilité de notre cause caritative auprès de l'UNICEF.
                    <br/><br/>
                    Nous avons commencé par lancer une série de publications destinées à construire une communauté autour des échecs et de la cause caritative. Cela incluait des anecdotes historiques sur les échecs, des profils de joueurs célèbres, et des faits intéressants sur l'impact de l'UNICEF dans le monde. L'objectif était de susciter l'intérêt et d'établir une connexion émotionnelle avec notre audience, encourageant ainsi les interactions et le partage de nos contenus.
                    <br/><br/>
                    Une fois la communauté établie, nous avons intensifié la promotion directe du tournoi en partageant des informations détaillées sur les règles, le format du tournoi Blitz, et les modalités de participation. Des publications régulières mettaient en avant les avantages de participer, non seulement pour la compétition mais aussi pour le soutien à une bonne cause. Nous avons utilisé des visuels attrayants réalisés avec Photoshop ou Premiere Pro et des appels à l'action clairs pour encourager les inscriptions, en mettant l'accent sur l'aspect caritatif de l'événement.
                    <br/><br/>
                    Pour chaque plateforme, nous avons adapté notre contenu pour répondre aux attentes spécifiques de leurs utilisateurs. Sur Facebook, nous avons privilégié des contenus détaillés et interactifs, tels que des vidéos et des interviews, tandis que sur Twitter, nous avons opté pour des messages courts et percutants, accompagnés de hashtags stratégiques. Des hashtags comme #EchecsCaritatif, #JouezPourUneCause et #MatMoiCa ont été soigneusement sélectionnés pour maximiser la visibilité et attirer une audience plus large intéressée par les échecs et les actions caritatives.
                    <br/><br/>
                    Notre stratégie de communication sur les réseaux sociaux, méticuleusement élaborée et exécutée, a porté ses fruits, générant un certain engagement mais qui reste tout de même en dessous de nos attentes initiales. Grâce à nos efforts concertés et à une présence constante sur Facebook et Twitter, nous avons réussi à captiver l'intérêt de notre audience, aboutissant à des centaines d'interactions, incluant des likes, des commentaires, et surtout, des partages.
                    <br/><br/>
                    Notre plus gros succès a été particulièrement marqué par l'attention et le soutien de deux acteurs majeurs dans le monde des échecs. La Fédération Française des Échecs, une institution reconnue dans le milieu échiquéen français, a repartagé nos publications sur leur Twitter. Cette reconnaissance par une entité de cette stature a non seulement validé la pertinence de notre projet mais a aussi grandement amplifié notre visibilité auprès d'une audience passionnée et engagée.
                    <br/><br/>
                    De même, notre partenariat avec Chess.com, la plateforme leader mondial des échecs en ligne, a été un vecteur crucial. Chess.com a activement promu notre tournoi sur leur page Facebook et a mis en avant l'événement sur la version française de leur site. Leur soutien a non seulement apporté une légitimité indéniable à notre initiative mais a aussi attiré l'attention d'une communauté mondiale d'adeptes des échecs.
                    <br/><br/>
                    Pour la campagne de communication de YourNight, mon application mobile dédiée à la gestion de soirées, j'ai adopté une stratégie fondamentalement différente, reflétant le changement de plateforme et de public cible. Reconnaissant que YourNight s'adressait principalement à une audience jeune, âgée de 18 à 30 ans, j'ai choisi de concentrer mes efforts sur Instagram et TikTok, des plateformes particulièrement populaires auprès de cette tranche d'âge.
                    <br/><br/>
                    Sur Instagram, j'ai opté pour une approche visuelle forte, en publiant régulièrement des contenus engageants qui reflètent l'esprit et l'ambiance des soirées YourNight. Cela inclut des stories mettant en avant les fonctionnalités de l'app, comme la création collaborative de playlists ou la gestion simplifiée des dépenses, ainsi que des posts présentant des témoignages d'utilisateurs satisfaits. L'utilisation de hashtags pertinents et ciblés, tels que #SoiréeParfaite, #GestionSoirée et #PlaylistPartagée, a aidé à augmenter la visibilité de nos publications et à attirer des followers intéressés par l'univers des soirées et des rencontres entre amis.
                    <br/><br/>
                    Pour TikTok, j'ai misé sur la création de contenus dynamiques et divertissants qui exploitent les tendances actuelles et encouragent la participation de la communauté. En partageant des vidéos animées sur After Effects, le but est ici de réaliser de belles vidéos attrayantes montrant l’utilité de l’application et la rendant désirable auprès du public. L'objectif était de montrer que YourNight n'est pas seulement un outil pratique, mais aussi un moyen de rendre les soirées inoubliables.
                    <br/><br/>
                    Bien que cette campagne soit encore à ses débuts, les premiers retours sont prometteurs. L'accent mis sur l'engagement direct avec notre audience, à travers des contenus qui résonnent avec leurs intérêts et leurs habitudes sur les réseaux sociaux, a permis d'établir une base solide pour la croissance de YourNight. 
                    <br/><br/>
                    A terme avec de potentiels revenus engendrés avec l’application il serait intéressant de mettre en place des partenariats avec des influenceurs ou de payer des mises en avant des publications via la plateforme instagram afin d’améliorer considérablement la visibilité de mon contenu.
                    <br/><br/>
                    Pour un autre de mes projets personnels, un site internet destiné à comparer les rangs entre les différents jeux vidéo compétitifs, j'ai exploré la possibilité de toucher un public international en utilisant Reddit, une plateforme connue pour sa vaste communauté de gamers du monde entier. Conscient de l'aspect global et diversifié de la communauté de joueurs, j'ai décidé de me plonger dans les subreddits spécifiques à chaque jeu vidéo compétitif, ainsi que dans ceux dédiés à l'esport en général, pour partager mon site et recueillir des retours. L'objectif était de présenter mon outil comme une ressource précieuse pour les joueurs souhaitant comprendre comment leur niveau se traduisait à travers différents jeux, encourageant ainsi les discussions et l'engagement autour de mon projet. Cette approche ciblée m'a permis de capter l'intérêt de joueurs du monde entier, démontrant l'efficacité de Reddit pour atteindre un public international spécifique et engagé.
                    `,
                illustration: ""
            }, {
                element: "Regard critique",
                content: `
                Mon parcours dans la communication sur les réseaux sociaux, bien qu'encourageant, m'offre une perspective réaliste sur mes compétences dans ce domaine. Si les campagnes pour "Mat' moi ça" et YourNight m'ont permis de comprendre l'importance de cibler justement et d'engager activement avec mon audience, je reconnais que mon expertise est encore en développement. La réussite mesurée de ces initiatives a révélé des failles dans l'efficacité de ma stratégie de contenu et de ma capacité à stimuler l'intérêt autour d'un projet. Elle a aussi souligné la nécessité d'une compréhension plus profonde des métriques de performance et d'une adaptation plus fine aux retours des utilisateurs. Cependant je me sens bien meilleur dans la compréhension du genre de contenu qui fait réagir je suis maintenant capable de mieux comprendre les mécanismes humaines entrainant leurs réactions à la vu d’un contenu.
                <br/><br/>
                L'utilisation de Reddit pour atteindre un public international a été une exploration bénéfique, me montrant le potentiel des plateformes moins conventionnelles dans la stratégie de communication. Cependant, cette expérience a aussi mis en évidence mon besoin d'approfondir mes connaissances sur comment maximiser l'impact à travers différentes cultures et communautés qui parfois sont bien différentes de celles que l’on connait.
                <br/><br/>
                Je suis tout de même fier de ce que j'ai accompli, notamment d'avoir réussi à travailler avec des organisations de renom et d'avoir capté l'attention de communautés importantes. Néanmoins, je suis conscient que ma route vers la maîtrise de la communication sur les réseaux sociaux est encore longue.
                `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Evolution",
                content: `
                    Bien que la maîtrise de la communication sur les réseaux sociaux ne figure pas parmi mes priorités immédiates, l'intérêt que je porte à cet aspect crucial de la promotion de projets personnels ou professionnels demeure significatif. À l'approche de la conclusion de projets personnels, notamment, je prévois de me pencher davantage sur ce domaine, envisageant de suivre des formations en ligne pour enrichir mes compétences.
                    <br/><br/>
                    Cette approche sélective me permettra de consacrer le temps et les ressources nécessaires à l'apprentissage de nouvelles stratégies de communication digitale au moment le plus opportun. Je suis convaincu que cette flexibilité dans mon parcours d'apprentissage, combinée à une curiosité naturelle pour les dernières tendances en matière de réseaux sociaux, me préparera efficacement à lancer et à promouvoir mes futurs projets avec succès.
                    <br/><br/>
                    De cette manière, je m'assure que ma compétence en communication sur les réseaux sociaux continue de se développer sans en devenir un expert ce qui me permettra tout de même d'exploiter le potentiel de ces plateformes pour atteindre et engager des audiences variées.
                `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Réalisations liées",
                content: `
                    YourNight, PREMIS, ISIS
                `
            }
        ]
    }, {
        name: "Gestion de Budget",
        category: "soft",
        icon: "img/skillsIcon/Budget.svg",
        explanation: [
            {
                element: "Définition",
                content: `
                La compétence en gestion de budget implique la capacité à planifier, superviser, et contrôler les flux financiers d'un projet ou d'une organisation, en veillant à l'optimisation des ressources et à la réalisation des objectifs dans le respect des contraintes budgétaires. Elle englobe la prévision des revenus et des dépenses, la mise en place de plans financiers détaillés, le suivi des performances par rapport au budget prévu, et l'ajustement stratégique des plans en fonction des analyses financières.
                <br/><br/>
                Cette compétence est cruciale dans tout contexte professionnel, car elle permet non seulement d'assurer la viabilité financière d'un projet, mais aussi de mettre en évidence les opportunités d'amélioration de l'efficacité et de la rentabilité. Une bonne gestion de budget requiert une compréhension approfondie des principes comptables, une capacité d'analyse et de synthèse des données financières, ainsi qu'une forte aptitude à la prise de décision basée sur des critères économiques.
                <br/><br/>
                Dans un environnement de travail de plus en plus axé sur les résultats et l'optimisation des coûts, savoir gérer un budget devient une compétence transversale, applicable dans de nombreux domaines tels que la gestion de projet, le marketing, l'ingénierie, et même dans des projets personnels nécessitant une allocation efficace des ressources. La gestion de budget implique également une communication claire et efficace avec toutes les parties prenantes, pour s'assurer que les objectifs financiers sont compris et respectés par tous.
                `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Contexte d’utilisation",
                content: `
                    Ma première expérience significative en gestion de budget a été pour le projet "Mat' moi ça", un tournoi d'échecs en ligne caritatif organisé dans le cadre d’un projet scolaire de formation humaine. Dans ce contexte, j'ai été confronté à la nécessité de gérer un budget avec l'objectif de maximiser les fonds collectés pour l'UNICEF tout en couvrant les coûts liés à l'organisation de l'événement. Ce défi a impliqué une planification financière minutieuse, comprenant l'estimation des coûts, la définition des prix d'entrée, et la gestion des dépenses opérationnelles.
                    <br/><br/>
                    Pour ce faire, nous avons d'abord établi un budget prévisionnel, identifiant toutes les sources potentielles de revenus et de dépenses. Cela incluait les frais d'inscription, les contributions volontaires, ainsi que les coûts liés à la promotion de l'événement, la technologie nécessaire pour sa réalisation en ligne, et la gestion des partenariats avec Chess.com et l'UNICEF. Nous avons également anticipé les besoins en termes de communication et de marketing pour atteindre un large public.
                    <br/><br/>
                    L'une des clés de notre gestion de budget a été la mise en place d'un suivi rigoureux des dépenses, avec l'utilisation de tableaux Excel détaillés comme outil de gestion financière. Chaque dépense était soigneusement examinée et justifiée, garantissant que chaque euro dépensé contribuait directement à la réussite du projet. 
                    <br/><br/>
                    Nous avions également mis en place et tenu une feuille-temps. Cette feuille de temps nous a permis de suivre précisément les heures consacrées par chaque membre de l'équipe aux différentes tâches du projet, offrant ainsi une visibilité claire sur le coût humain associé à l'organisation de l'événement.
                    <br/><br/>
                    L'utilisation de cette feuille de temps avait plusieurs objectifs. Premièrement, elle servait à garantir une allocation efficace des ressources humaines, en nous permettant d'identifier les activités qui nécessitaient plus de temps que prévu et d'ajuster nos plans en conséquence. Deuxièmement, elle a contribué à une gestion financière plus précise, en nous aidant à comprendre l'impact des coûts de main-d'œuvre sur le budget global du projet et à identifier les opportunités d'optimisation.
                    <br/><br/>
                    Pour tenir cette feuille de temps à jour, nous avons adopté une approche collaborative où chaque membre de l'équipe était responsable de l'enregistrement de son temps passé sur le projet. Cela impliquait une discipline et une communication constantes au sein de l'équipe pour s'assurer que les données étaient à la fois précises et complètes.
                    <br/><br/>
                    La feuille de temps était régulièrement révisée lors de nos réunions d'équipe, ce qui nous permettait de discuter des progrès réalisés par rapport au plan de projet et d'ajuster notre stratégie de travail si nécessaire. Cet outil s'est avéré être un élément crucial pour la gestion de notre budget, en nous offrant une base solide pour les décisions financières et en favorisant une transparence totale au sein de l'équipe concernant l'effort investi dans le projet même si la finalité n’était pas d’en obtenir un revenu étant donné le cadre scolaire du projet.
                    <br/><br/>
                    L'une des anecdotes les plus marquantes que j'ai apprises lors de la gestion du budget pour le projet "Mat' moi ça" concerne l'importance cruciale de réalisme dans l'établissement du budget prévisionnel. Initialement, nous avions établi notre budget avec un optimisme débordant concernant le nombre d'inscrits au tournoi, anticipant une participation massive qui se traduirait par des revenus significatifs. Cette attente reposait sur notre enthousiasme pour le projet et notre conviction quant à l'attrait du tournoi auprès des amateurs d'échecs.
                    <br/><br/>
                    Cependant, la réalité s'est avérée bien différente. Malgré tous nos efforts de promotion et le soutien de partenaires de renom comme Chess.com et l'UNICEF, le nombre de participants inscrits est resté bien en deçà de nos prévisions. Cette surestimation des revenus a entraîné un écart notable entre notre budget prévisionnel et le budget final, nous obligeant à réévaluer nos plans et à ajuster nos dépenses en conséquence.
                    <br/><br/>
                    Cet écart a été un moment de prise de conscience sur l'importance de baser les prévisions budgétaires sur des données et des hypothèses réalistes, plutôt que sur un optimisme non étayé. J'ai appris qu'une gestion de budget efficace nécessite non seulement une planification minutieuse mais aussi la capacité à rester agile et à s'adapter aux réalités changeantes du projet.
                    <br/><br/>
                    Cette anecdote m'a enseigné une leçon précieuse sur la nécessité de préparer des scénarios budgétaires alternatifs et de disposer de plans de contingence pour gérer les incertitudes inhérentes à tout projet. Elle a renforcé ma compréhension de la gestion financière dans le contexte de projet, soulignant l'importance de l'adaptabilité, de la prudence dans les prévisions de revenus, et de la préparation face aux imprévus.
                    <br/><br/>
                    Pour le projet YourNight, un projet personnel sous la forme d’une application mobile destinée à faciliter l'organisation de soirées entre amis, j'ai également assuré une gestion rigoureuse du budget, en établissant un budget prévisionnel et en suivant de près les dépenses. Compte tenu du budget limité, il était impératif de faire des choix stratégiques d'investissement pour maximiser l'efficacité de chaque euro dépensé. Pour cela, j'ai utilisé l'outil Notion, qui a servi de plateforme centralisée pour le suivi budgétaire et la prise de décision financière.
                    <br/><br/>
                    Le budget prévisionnel a pris en compte tous les coûts initiaux et récurrents nécessaires au lancement et à l'exploitation de l'application. Parmi les dépenses clés figuraient le prix d'entrée sur les stores d'applications, tels que Google Play et l'App Store d'Apple, ainsi que les coûts associés à l'hébergement de notre serveur sur un VPS (Virtual Private Server). Ces dépenses étaient essentielles pour assurer la disponibilité et la performance de l'application pour les utilisateurs finaux.
                    <br/><br/>
                    En plus de ces coûts opérationnels, j'ai également planifié les potentiels revenus générés par les publicités intégrées dans l'application. Cette source de revenus était particulièrement importante pour le modèle économique de YourNight, car elle représentait ma principale voie de monétisation dans la phase initiale du projet. L'objectif était de couvrir les coûts d'exploitation grâce aux revenus publicitaires et, à terme, d'atteindre la rentabilité.
                    <br/><br/>
                    L'utilisation de Notion pour la gestion de budget a offert plusieurs avantages, notamment une grande flexibilité dans la mise à jour des informations financières et la possibilité de visualiser rapidement l'état des dépenses par rapport au budget prévisionnel à l’aide de tableurs et graphiques. Cette approche m'a permis d'ajuster dynamiquement nos stratégies d'investissement en fonction de l'évolution du projet, en optimisant l'allocation des ressources financières pour assurer le succès et la croissance de l'application.
                    `,
                illustration: ""
            }, {
                element: "Regard critique",
                content: `
                Dans ma réflexion sur ma compétence en gestion de budget, je suis conscient que, bien que possédant une bonne base, mes prévisions tendent à s'écarter de la réalité, principalement en raison d'un manque d'expérience. Cette prise de conscience découle notamment des différences observées entre les budgets prévisionnels et les résultats finaux de mes projets, comme illustré par l'expérience avec le projet "Mat' moi ça". L'optimisme non calibré et les attentes irréalistes en sont souvent les causes principales, soulignant un besoin d'approfondir mes connaissances et compétences dans ce domaine.
                <br/><br/>
                Pour m'améliorer, plusieurs pistes se dessinent. Tout d'abord, il serait bénéfique de me former davantage sur les techniques de prévision financière et d'analyse de risques, afin de pouvoir établir des prévisions plus précises et réalistes. Cela inclut l'apprentissage des méthodologies de budgétisation basées sur les données historiques, ainsi que l'utilisation d'outils analytiques plus avancés pour soutenir ces analyses.
                <br/><br/>
                Ensuite, développer une meilleure compréhension des facteurs externes qui peuvent influencer le budget d'un projet, tels que les conditions du marché, le comportement des consommateurs ou encore les événements imprévus, serait crucial. Cela implique de rester constamment informé et de savoir adapter le budget en fonction de l'évolution du contexte.
                <br/><br/>
                Par ailleurs, l'expérience pratique, à travers la gestion de projets de plus grande envergure et diversifiés, contribuera indéniablement à affiner mes compétences en gestion de budget. L'exposition à différents types de projets et défis budgétaires me permettra d'acquérir une expérience précieuse, d'apprendre de mes erreurs et de mieux anticiper les pièges potentiels.
                `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Evolution",
                content: `
                    L'évolution de ma compétence en gestion de budget s'inscrit dans une démarche pragmatique, où l'approfondissement de cette compétence n'est pas ma priorité immédiate, mais reste un objectif clair à moyen terme. Reconnaissant l'importance cruciale d'une gestion budgétaire efficace dans la réussite de tout projet, je suis déterminé à renforcer cette compétence au fur et à mesure de mes besoins, particulièrement à l'initiation et tout au long du suivi de mes projets personnels.
                    <br/><br/>
                    L'apprentissage se fera de manière opportune, en s'alignant avec le lancement de nouveaux projets qui requièrent une planification financière rigoureuse et un suivi budgétaire précis. Cette approche me permettra de mettre en pratique immédiatement les compétences acquises, en les adaptant aux spécificités et aux défis financiers de chaque projet.
                    <br/><br/>
                    Je prévois de me former à travers une combinaison de ressources en ligne, de tutoriels, et de formations spécifiques sur la gestion de budget et la finance de projet. Ces ressources m'aideront à acquérir une compréhension plus profonde des principes de la gestion financière et à développer des stratégies budgétaires plus robustes et réalistes.
                    <br/><br/>
                    En parallèle, l'expérience directe acquise à travers la gestion de mes propres projets personnels servira de terrain d'apprentissage idéal. Chaque projet représentera une occasion unique de mettre à l'épreuve mes compétences en gestion de budget, d'identifier les domaines nécessitant une amélioration et d'ajuster mes approches en conséquence. Cela inclut la pratique de la prévision, la gestion des dépenses, l'optimisation des ressources et l'adaptation aux changements et imprévus qui caractérisent souvent le parcours d'un projet.
                    <br/><br/>
                    Bien que la gestion de budget ne soit pas ma priorité absolue à l'instant présent, je suis conscient de son importance et je m'engage à intégrer progressivement cette compétence dans mon arsenal professionnel.
                    `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Réalisations liées",
                content: `
                    YourNight, PREMIS, ISIS
                `
            }
        ]
    }, {
        name: "Gestion de Projet Agile et Scrum",
        category: "soft",
        icon: "img/skillsIcon/ProjectGesture.svg",
        explanation: [
            {
                element: "Définition",
                content: `
                La compétence en gestion de projet Agile Scrum est une approche méthodologique qui priorise la flexibilité, la collaboration et l'adaptabilité tout au long du processus de développement de projets. Cette compétence se caractérise par l'organisation du travail en cycles courts et itératifs, appelés Sprints, permettant une réévaluation régulière des objectifs et des résultats attendus en fonction des retours des parties prenantes et des changements de contexte. Elle implique la répartition des rôles clairs au sein de l'équipe, incluant le Scrum Master, le Product Owner, et l'équipe de développement, chacun ayant des responsabilités spécifiques pour assurer le bon déroulement et l'efficacité du projet.
                <br/><br/>
                La maîtrise de cette compétence permet de gérer efficacement les projets en assurant une communication fluide et continue entre tous les membres de l'équipe et les parties prenantes, favorisant ainsi une meilleure réactivité aux changements et une optimisation des temps de livraison. Elle souligne également l'importance de la planification flexible, de l'estimation des tâches, de la gestion des priorités et du suivi des progrès grâce à des outils comme les tableaux Scrum et les réunions quotidiennes (Daily Scrum). En outre, la compétence en gestion de projet Agile Scrum met en évidence la capacité à créer un environnement de travail collaboratif et transparent, où l'amélioration continue et l'apprentissage mutuel sont encouragés, alignant ainsi étroitement les objectifs du projet avec les besoins du client.
                `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Contexte d’utilisation",
                content: `
                    Dans le cadre de mes études, j'ai eu l'opportunité d'appliquer la gestion de projet Agile Scrum à travers des projets informatiques scolaires. Ces projets, loin d'être de simples exercices académiques, m'ont confronté à des situations réelles où le travail en équipe et la collaboration avec un Product Owner externe étaient cruciaux. Chaque projet avait pour but de répondre à des besoins concrets exprimés par des entreprises ou des associations, agissant en tant que clients ou partenaires du projet. Cette démarche impliquait une interaction directe avec le Product Owner, qui apportait sa vision et ses exigences spécifiques pour le développement du projet.
                    <br/><br/>
                    Cette expérience a nécessité l'adoption d'une approche Agile Scrum, avec la mise en place de Sprints, la définition de User Stories, et l'organisation de réunions de planification, de revues de Sprint, et de rétrospectives.
                    <br/><br/>
                    Parmi les projets marquants où j'ai appliqué la méthode Agile Scrum, le développement d'Hypotech, une application mobile Android, occupe une place significative. Ce projet, réalisé en collaboration étroite avec un Product Owner externe, a été structuré autour de sprints de deux semaines, chacun conclu par une livraison et une réunion de revue avec le Product Owner.
                    <br/><br/>
                    L'utilisation de Scrum pour Hypotech a permis d'instaurer un rythme de travail régulier et productif, favorisant la transparence et la communication ouverte avec le Product Owner. À la fin de chaque sprint d’une durée de deux semaines, nous organisions une réunion de revue pour présenter les fonctionnalités développées, recueillir les retours et ajuster les priorités pour le sprint suivant. Cette approche itérative nous a aidés à mieux comprendre les attentes du Product Owner, à prioriser efficacement les tâches et à adapter notre travail en fonction des feedbacks reçus, assurant ainsi une évolution constante du produit qui répondait aux besoins réels du projet.
                    <br/><br/>
                    Pour le projet Hypotech, la réunion kick-off a joué un rôle crucial dans la définition des User Stories qui allaient orienter le développement de l'application. Durant cette réunion initiale, nous avons collaboré étroitement avec le Product Owner pour identifier, discuter et prioriser les fonctionnalités clés du produit, ce qui a permis de transformer ses besoins et attentes en User Stories concrètes. Cette étape initiale a été fondamentale pour établir un plan de travail clair et pour s'assurer que l'équipe et le Product Owner partageaient une vision commune du projet.
                    <br/><br/>
                    Toutefois, l'adoption de la méthode Agile Scrum nous a aussi appris l'importance de la flexibilité et de l'adaptabilité dans la gestion de projet. Ainsi, bien que les User Stories aient été définies lors de la réunion de lancement, nous étions conscients que le projet évoluerait en fonction des feedbacks, des contraintes rencontrées et des opportunités qui se présentaient. Après chaque sprint et livraison, nous procédions à des ajustements des User Stories en fonction des retours du Product Owner et de notre propre évaluation du travail réalisé. Cela signifiait que certaines User Stories pouvaient être repriorisées, modifiées, ou même nouvelles, ajoutées pour refléter l'évolution des exigences et des objectifs du projet.
                    <br/><br/>
                    Dans le cadre du projet Hypotech, la répartition des User Stories parmi les membres de l'équipe à chaque sprint était une étape cruciale pour le succès de notre méthode Agile Scrum. Après avoir défini et ajusté les User Stories avec le Product Owner, notre prochain défi était de s'assurer que chaque membre de l'équipe avait une charge de travail équilibrée et adaptée à ses compétences et disponibilités.
                    <br/><br/>
                    Lors de nos séances de planification de sprint, nous abordions chaque User Story en détail, discutant des tâches spécifiques qu'elles impliquaient et des compétences nécessaires pour les mener à bien. Chaque membre de l'équipe avait alors l'opportunité de choisir les User Stories sur lesquelles il souhaitait travailler, en tenant compte de son expertise et de ses intérêts. Cette approche participative assurait non seulement une répartition équitable du travail mais favorisait également l'engagement et la motivation de l'équipe.
                    <br/><br/>
                    La collaboration et la communication étaient essentielles durant ces séances. Nous nous assurions que chaque User Story était clairement comprise par celui ou celle qui s'engageait à la réaliser, et nous établissions ensemble des estimations réalistes de la charge de travail. Cela impliquait souvent des discussions sur les dépendances entre les tâches, les risques potentiels et les besoins en ressources, ce qui nous permettait d'anticiper et de planifier efficacement pour le sprint à venir.
                    <br/><br/>
                    La répartition des User Stories contribuait également à créer un environnement de travail collaboratif, où l'entraide et le partage de connaissances entre les membres de l'équipe étaient encouragés. Si un membre de l'équipe rencontrait des difficultés avec une User Story, il savait qu'il pouvait compter sur le soutien de ses collègues pour surmonter les obstacles et trouver des solutions. Cette dynamique renforçait la cohésion de l'équipe et augmentait notre capacité collective à relever les défis du projet.
                    <br/><br/>
                    Au sein du projet Hypotech, les Daily Meetings constituaient un pilier de notre méthode de gestion de projet Agile Scrum. Chaque jour, à une heure fixe, l'ensemble de l'équipe se réunissait pour une courte réunion, généralement ne dépassant pas quinze minutes, où chaque membre partageait ses avancées, ses planifications pour la journée et les obstacles rencontrés.
                    <br/><br/>
                    Ces réunions quotidiennes étaient essentielles pour plusieurs raisons. D'abord, elles permettaient à chacun de rester informé de l'évolution globale du projet, favorisant ainsi une vision partagée des objectifs à atteindre. Ensuite, elles offraient une plateforme pour que les membres de l'équipe expriment leurs difficultés et sollicitent de l'aide. Cette transparence dans la communication aidait à identifier rapidement les blocages et à y apporter des solutions collectives, souvent par l'entraide entre les membres de l'équipe.
                    <br/><br/>
                    Dans le cadre du projet Devmato, une application web conçue pour une professionnelle en dermofacialiste désireuse de digitaliser la vente de ses services, j'ai endossé le rôle de ScrumMaster, une expérience qui m'a permis de développer et de mettre en pratique des compétences clés en gestion de projet Agile Scrum. Mon rôle de ScrumMaster était central pour assurer la fluidité de la communication entre l'équipe de développement et la Product Owner, ainsi que pour veiller au bon déroulement et à l'efficacité du processus de développement.
                    <br/><br/>
                    En tant que ScrumMaster, j'étais le principal point de contact pour la Product Owner. J'assurais que toutes les communications, qu'elles soient formulées par des demandes de renseignements, des mises à jour de projet ou des feedbacks sur les livrables, passaient par moi. Cette responsabilité impliquait la gestion des e-mails, la planification et la conduite des réunions, y compris les sprints plannings, les revues de sprint et les rétrospectives, en veillant à ce que chaque session soit productive et centrée sur les objectifs du projet.
                    <br/><br/>
                    La reconnaissance de ma contribution par la Product Owner à la fin du projet a été particulièrement gratifiante. Ses éloges concernant ma capacité à diriger les réunions, à maintenir une communication efficace et à contribuer à la réalisation du projet ont souligné l'importance du rôle de ScrumMaster dans le succès d'un projet Agile. Cette expérience a renforcé ma compréhension de la méthodologie Scrum et m'a permis de développer des compétences essentielles en leadership, en gestion de projet et en communication, qui seront inestimables pour mes futurs projets.
                    <br/><br/>
                    L'introduction de la méthodologie Agile Scrum au sein de l'entreprise pour le projet ISIS marque un tournant significatif dans la gestion de projet et illustre mon rôle actif dans l'amélioration des processus internes. Avant mon arrivée, l'entreprise ne suivait pas de méthode de gestion de projet structurée, ce qui pouvait entraîner des inefficacités et des difficultés dans le suivi des progrès. Convaincu des avantages de la méthode Agile Scrum, j'ai proposé son adoption pour le projet ISIS, une application web développée pour répondre aux besoins internes de l'entreprise.
                    <br/><br/>
                    La mise en œuvre de Scrum a commencé par l'organisation de sprints bi-hebdomadaires, au cours desquels nous présentions les avancées du projet au product owner interne. Cette approche itérative a non seulement permis un meilleur suivi des développements mais a également facilité l'adaptation rapide aux changements, en veillant à ce que le projet reste aligné sur les objectifs commerciaux de l'entreprise.
                    <br/><br/>
                    Les daily meetings, ou réunions quotidiennes, ont été adoptées pour renforcer la communication au sein de l'équipe, permettant à chacun d'exprimer les progrès réalisés et les obstacles rencontrés. Cette pratique a encouragé une atmosphère de transparence et de collaboration, essentielle au succès d'un projet Agile.
                    <br/><br/>
                    L'introduction de la gestion par user stories a également permis de mieux définir les attentes et les besoins, en focalisant le développement sur la création de valeur pour l'utilisateur final. Cela a amélioré la qualité des livrables et la satisfaction du product owner, tout en optimisant le processus de développement.
                    <br/><br/>
                    L'adoption de la méthode Scrum au sein de l'entreprise, à l'initiative de ma participation au projet ISIS, a non seulement eu un impact positif sur ce projet spécifique mais a également laissé une empreinte durable sur les pratiques de gestion de projet de l'entreprise. La reconnaissance de l'efficacité de cette méthode par l'entreprise, qui a conservé certaines de ses pratiques pour de futurs projets, témoigne de la valeur ajoutée que j'ai apportée en termes de gestion de projet Agile. Cette expérience a renforcé ma conviction dans les avantages de l'approche Agile Scrum et m'a équipé de compétences précieuses pour la gestion efficace de projets futurs, en milieu académique comme professionnel.
                    `,
                illustration: ""
            }, {
                element: "Regard critique",
                content: `
                Ma maîtrise de la gestion de projet Agile Scrum, acquise à travers divers projets académiques et professionnels, me confère une solide compréhension des principes et pratiques fondamentaux de cette méthodologie. Cependant, je reconnais que mon expérience, bien qu'appréciable, reste limitée en termes de diversité et de complexité des environnements de travail dans lesquels j'ai pu l'appliquer. La plupart de mes projets se sont déroulés dans des contextes où l'équipe était relativement restreinte et la portée du projet, bien que significative, ne reflétait pas la complexité que l'on peut rencontrer dans de grands projets d'entreprise impliquant de nombreux collaborateurs et départements.
                <br/><br/>
                Cette prise de conscience souligne un domaine dans lequel je vois un potentiel d'amélioration et d'apprentissage. Bien que confiant dans ma capacité à naviguer et à contribuer efficacement à des projets gérés selon les principes Scrum, je suis désireux d'élargir mon expérience en participant à des projets plus vastes et plus diversifiés. Cela comprend le travail au sein d'équipes plus grandes, la gestion de parties prenantes multiples avec des intérêts variés, et l'adaptation de la méthodologie Agile à des contextes où les défis de communication et de coordination sont plus prononcés.
                `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Evolution",
                content: `
                    Mon parcours avec la gestion de projet Agile Scrum jusqu'à présent m'a convaincu de son efficacité et de sa valeur dans la coordination et la réalisation de projets en groupe. Fort de cette expérience, je suis déterminé à continuer d'utiliser cette méthodologie pour mes futurs projets collaboratifs. La structure, la flexibilité et la dynamique d'amélioration continue qu'offre Scrum en font, à mon sens, l'approche de gestion de projet la plus adaptée pour naviguer dans les complexités du développement de logiciels et d'applications.
                    <br/><br/>
                    Malgré le succès rencontré dans la plupart de mes projets, une réalisation en particulier n'a pas entièrement satisfait les attentes du product owner lors de la livraison finale. Cette expérience, loin d'être un échec, m'a offert des leçons précieuses sur l'importance de la communication, de l'alignement des visions et de l'adaptabilité dans la gestion de projet. Elle souligne également la nécessité d'une compréhension profonde des besoins du client et de la capacité à intégrer les retours et les ajustements de manière agile.
                    <br/><br/>
                    En regardant vers l'avenir, je souhaite non seulement appliquer Scrum dans mes projets de groupe mais aussi approfondir ma compréhension et ma maîtrise de cette méthodologie. Cela inclut une exploration plus poussée des différents rôles au sein d'une équipe Scrum, une meilleure utilisation des outils et techniques pour maximiser l'efficacité des sprints, et une réflexion constante sur la manière dont les principes Agile peuvent être adaptés pour répondre au mieux aux défis uniques de chaque projet.
                    `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Réalisations liées",
                content: `
                    YourNight, PREMIS, ISIS
                `
            }
        ]
    }, {
        name: "Gestion du Temps et Organisation",
        category: "soft",
        icon: "img/skillsIcon/TimeManagement.svg",
        explanation: [
            {
                element: "Définition",
                content: `
                La compétence de gestion du temps et d'organisation dans le milieu professionnel fait référence à la capacité d'optimiser ses journées de travail pour atteindre les objectifs fixés tout en maintenant un équilibre sain entre vie professionnelle et personnelle. Cela inclut la planification efficace des tâches, la priorisation des activités en fonction de leur importance et de leur urgence, ainsi que l'adaptation flexible aux imprévus tout en respectant les délais. Une bonne gestion du temps permet non seulement d'améliorer la productivité et l'efficacité au travail, mais aussi de réduire le stress en évitant la surcharge et les situations de dernier moment.
                <br/><br/>
                Dans le contexte professionnel actuel, où les projets sont souvent multidimensionnels et les délais serrés, maîtriser cette compétence devient crucial. Cela implique l'utilisation d'outils et de techniques variés, allant des agendas électroniques et applications de planification à des méthodes plus traditionnelles comme les listes de tâches et le blocage de temps. La gestion du temps et de l'organisation va au-delà de la simple planification des activités ; elle englobe également la délégation efficace, la réduction des interruptions, et la capacité à dire non aux demandes non prioritaires.
                <br/><br/>
                Dans un environnement de travail de plus en plus agile et collaboratif, savoir s'organiser et gérer son temps n'est pas seulement bénéfique à l'individu, mais aussi à l'équipe et à l'organisation dans son ensemble. Cela permet d'aligner les efforts individuels avec les objectifs globaux de l'entreprise, de respecter les engagements pris envers les clients et les collègues, et de contribuer à une culture de travail respectueuse du bien-être de chacun.          
                `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Contexte d’utilisation",
                content: `
                    Dans le cadre de mes études, la compétence en gestion du temps et organisation s'est révélée être un pilier central de mon succès dans la réalisation de projets scolaires. Dès le début, j'ai compris l'importance de distinguer les priorités et de planifier efficacement mon emploi du temps pour répondre aux exigences variées et souvent simultanées de multiples projets. Cette capacité à organiser mon travail, tout en faisant preuve de flexibilité face aux imprévus.
                    <br/><br/>
                    J'ai rapidement adopté des outils de gestion du temps, comme les calendriers numériques et les listes de tâches avec notamment Notion, qui m’a aidé à visualiser mes engagements et à équilibrer mes responsabilités académiques avec mes activités personnelles. L'efficacité de ma méthode de travail n'a pas tardé à être reconnue par mes professeurs et mes pairs, qui ont souvent salué ma capacité à livrer des travaux de qualité dans les délais impartis, tout en restant disponible pour participer activement aux projets de groupe.
                    <br/><br/>
                    Ma gestion du temps et de l'organisation s'est affinée au fil des semestres, me permettant d'aborder les projets plus complexes avec confiance et sérénité. J'ai appris à anticiper les besoins en ressources et à allouer mon temps de manière stratégique, en tenant compte des deadlines et des priorités fluctuantes. Cette compétence s'est avérée particulièrement utile lors de projets multidisciplinaires, où la coordination avec les membres de l'équipe et la gestion efficace des contributions individuelles étaient cruciales pour le succès du projet.
                    <br/><br/>
                    Mon passage dans le monde professionnel a marqué une évolution significative dans ma maîtrise de la gestion du temps et de l'organisation. En entreprise, j'ai été confronté à des défis plus complexes et à des attentes plus élevées en termes de productivité et d'efficacité. C'est dans ce contexte que j'ai affiné ma capacité à me définir des objectifs quotidiens, en les alignant scrupuleusement avec les priorités de l'entreprise et les exigences des projets sur lesquels je travaillais.
                    <br/><br/>
                    J'ai rapidement compris que réussir dans un environnement professionnel dynamique et souvent imprévisible nécessitait non seulement une planification rigoureuse, mais aussi une adaptabilité constante. Pour répondre efficacement à ces besoins, j'ai commencé à utiliser des méthodes d'organisation plus avancées, telles que la technique Pomodoro pour gérer mon temps de travail et les pauses, ainsi que des outils de gestion de projet en ligne pour suivre l'avancement des tâches et collaborer plus efficacement avec mes collègues.
                    <br/><br/>
                    Définir des objectifs quotidiens m'a permis de rester concentré et motivé, en me donnant des cibles claires à atteindre chaque jour. Cette méthode a non seulement amélioré ma productivité, mais elle a également renforcé ma capacité à prioriser les tâches et à ajuster mon emploi du temps en fonction des urgences et des changements de dernière minute. En mettant en œuvre ces stratégies, j'ai pu non seulement répondre aux attentes de mes supérieurs, mais souvent les dépasser, en livrant des résultats de qualité dans des délais serrés.
                    <br/><br/>
                    Cette expérience en entreprise a consolidé ma compréhension de l'importance cruciale de la gestion du temps et de l'organisation dans le succès professionnel. Elle m'a enseigné l'importance de l'autodiscipline et de la proactivité, des qualités que j'ai continué à développer et à appliquer dans tous les aspects de ma vie professionnelle.
                    <br/><br/>
                    En plus de mes responsabilités professionnelles, le développement de l'application YourNight pendant mon temps libre a mis à l'épreuve ma gestion du temps et de l'organisation à un autre niveau. Ce projet personnel, mené en parallèle de mon activité professionnelle, nécessitait une discipline et une planification minutieuses pour équilibrer efficacement le travail sur l'application, mes obligations professionnelles, et mon temps personnel.
                    <br/><br/>
                    J'ai dû faire des choix délibérés sur la manière de répartir mon temps, en veillant à consacrer des périodes suffisantes au développement de YourNight sans empiéter sur les moments précieux passés avec ma famille et mes amis. Cela impliquait souvent de travailler sur l'application tard le soir ou pendant les week-ends, tout en m'efforçant de garder un équilibre sain pour ne pas m'isoler. Malgré ces efforts, il y a eu des moments où la passion pour mon projet a emporté sur le reste, conduisant à des périodes d'isolement temporaire.
                    <br/><br/>
                    Cette expérience a renforcé ma capacité à jongler entre différentes priorités et à faire des sacrifices calculés pour atteindre mes objectifs. Elle a également souligné l'importance de maintenir un équilibre entre la vie professionnelle et personnelle, une leçon précieuse qui a influencé ma manière de gérer mon temps et mes projets par la suite. La réalisation de YourNight, tout en maintenant des relations saines et en remplissant mes responsabilités professionnelles, a été une période intense d'apprentissage et de croissance dans ma compétence en gestion du temps et organisation.
                    `,
                illustration: ""
            }, {
                element: "Regard critique",
                content: `
                    Ma compétence en gestion du temps et organisation est quelque chose que je maîtrise bien, ayant développé et affiné cette aptitude au fil des années à travers divers projets scolaires et professionnels. J'ai appris à distinguer les priorités, à planifier efficacement mon emploi du temps, et à m'adapter aux imprévus tout en conservant un équilibre entre ma vie professionnelle et personnelle. Toutefois, je suis conscient que la gestion du temps est une compétence qui peut toujours être améliorée, surtout en ce qui concerne la prévention de l'isolement lors de périodes de travail intense sur des projets passionnants comme YourNight. Bien que je considère avoir une bonne maîtrise dans ce domaine, je reconnais l'importance de continuer à travailler sur ma capacité à maintenir un équilibre sain, à déléguer des tâches lorsque nécessaire, et à me donner des pauses pour éviter l'épuisement. Cette auto-évaluation critique me motive à chercher des moyens d'optimiser encore plus mon organisation et ma gestion du temps, en intégrant peut-être de nouveaux outils ou méthodologies qui pourraient améliorer mon efficacité et ma productivité.
                `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Evolution",
                content: `
                    Mon approche de la gestion du temps et de l'organisation continue d'évoluer, à mesure que je prends en charge des projets plus complexes et diversifiés, tant sur le plan professionnel que personnel. Je prévois d'intégrer des méthodologies et des outils supplémentaires pour affiner ma capacité à gérer efficacement mon temps, comme l'adoption de techniques avancées de planification et l'utilisation de logiciels de gestion de projets plus sophistiqués. Mon objectif est de parvenir à un équilibre optimal entre productivité et bien-être personnel, en veillant à allouer du temps pour le repos et la détente afin d'éviter le surmenage. Je suis également ouvert à apprendre de nouvelles stratégies de gestion du temps auprès de mes collègues et mentors, et je m'engage à rester flexible et adaptable face aux exigences changeantes de mon environnement de travail. En reconnaissant l'importance de cette compétence pour le succès à long terme, je suis déterminé à continuer son développement pour devenir encore plus efficace dans la gestion de mes projets et responsabilités.
                    `,
                illustration: "/images/projects/yournight.png"
            }, {
                element: "Réalisations liées",
                content: `
                    YourNight, PREMIS, ISIS
                `
            }
        ]
    },
]