import { ISkill } from "../types";

export const skills: ISkill[] = [
    {
        name: "React",
        icon: "img/skillsIcon/React.svg",
        category: "technical",
        percentageOfMastery: 75,
        explanation: [
            {
                element: "Définition",
                content: `
                React (également connu sous le nom de React.js ou ReactJS) est une <b>bibliothèque JavaScript</b> frontale à code source ouvert permettant de créer des interfaces utilisateur ou des composants d'interface utilisateur. Elle est maintenue par Facebook et une communauté de développeurs individuels et d'entreprises. Son importance est particulièrement soulignée dans le contexte professionnel, où la rapidité de développement, la performance et la réactivité des applications sont essentielles.
                <br/><br/>
                L'actualité récente dans la presse spécialisée en technologie et les médias met en évidence <b>l'adoption croissante</b> de React par les grandes entreprises et les startups innovantes, attestant de sa popularité et de sa pertinence dans l'écosystème du développement web. Cette tendance est également reflétée dans mes réalisations, où l'utilisation de React a transformé mon approche du développement frontend, en me permettant de répondre plus efficacement aux exigences changeantes du marché et aux besoins des utilisateurs.       
                `,
                
            }, {
                element: "Contexte d’utilisation",
                content: `
                    Lorsque j’ai travaillé sur <a>PREMIS DM</a> qui est une application web ayant pour but de gérer de grands volumes de données liés au domaine de l’industrie afin de les consulter, de les analyser et les visualiser sous forme de graphiques. J’ai eu comme première tâche de <b>concevoir l’architecture frontend</b>. J'ai conçu des composants réutilisables pour minimiser la redondance du code, tout en développant des fonctionnalités classiques et courantes au sein d’applications web (Comme par exemple un <b>Dashboard d’analyse de données</b> sous forme de graphiques ou bien un système de routes protégées par rôles utilisateurs) en totale autonomie. Le projet nécessitant d’énormes volumes de données pour pouvoir fonctionner, j’ai dû mettre en place des solutions moins communes que les implémentations classiques de React. Après m’être renseigné sur le sujet j’ai proposé à mon maître d’apprentissage <b>l’implémentation de Workers</b> qu’il a tout de suite acquiescée. L'implémentation de Workers est arrivée comme une solution ingénieuse à un problème de performance critique que nous avons rencontré lors du développement de Premis. En travaillant sur ce projet au sein de Holis Consulting, le traitement et l'analyse de données massives, extraites de fichiers Excel, étaient au cœur de l'application. Cependant, lors de tests avec des volumes de données importants, nous avons été confrontés à un obstacle majeur : le front-end de l'application, malgré une conception initialement robuste, la mémoire était rapidement saturé et se retrouvait en état de crash en raison de surcharge. L'adoption de cette approche a marqué un tournant dans le développement de Premis. En déléguant le lourd traitement des données des fichiers Excel à des Workers, j’ai non seulement <b>résolu le problème de surcharge de mémoire</b> mais j’ai également amélioré significativement les performances de l'application. L’application était à ce moment-là fonctionnelle et performante pour le volume de données que nous connaissions.
                    <br/><br/>
                    Toujours sur <a>PREMIS DM</a>, nous avons eu plus tard l’injection de données supplémentaires qui mettaient en péril les performances existantes. La gestion de volumes de données massifs a été un défi particulier, me permettant de démontrer ma capacité à mettre en œuvre des solutions efficaces avec React pour assurer une performance optimale de l'application. Les clés m'autorisant à surmonter ce défi ont été la mise en place d’un <b>environnement de test</b>, l'utilisation judicieuse de la virtualisation des listes pour gérer efficacement l'affichage de grands ensembles de données, et l'implémentation du <b>lazy loading</b> pour charger les composants uniquement quand ils sont nécessaires. J'ai également optimisé les rendus en utilisant React.memo pour éviter les re-rendus inutiles, et en appliquant le debouncing sur les événements de saisie pour réduire les calculs superflus. J'ai également exploité le <b>Context API</b> pour une gestion globale de l'état plus performante, évitant ainsi les prop drilling inutiles. L'adoption de hooks personnalisés m'a permis de réutiliser la logique d'état complexe à travers différents composants, contribuant ainsi à une meilleure organisation et à des performances accrues. Ces améliorations techniques, combinées à une analyse régulière des performances via les outils de profilage de React, ont joué un rôle crucial dans l'optimisation de l'application pour gérer les grands volumes de données avec efficacité. Aujourd’hui <b>l’application web est globalement solide et performante</b>. Elle possède une marge qui favorise l’acceptation de données supplémentaires sans problème.
                    <br/><br/>
                    Mon projet personnel <a>YourNight</a> est une application mobile qui a pour but de faciliter l’organisation de soirées. Il m'a donné l'occasion d'approfondir ma maîtrise de React à travers l'utilisation de React Native. J'ai développé l'interface utilisateur complète de l'application en utilisant React Native, ce qui comprenait la <b>conception des divers écrans de l’application</b> et des composants réutilisables, la gestion de l'état de l'application, l'intégration avec des <b>APIs externes</b> pour la création de playlist musicales (API de Spotify), et la mise en œuvre d'un système de <b>chat en temps réel</b> pour les utilisateurs. Pour assurer une expérience utilisateur fluide et réactive, j'ai utilisé le contexte et les hooks de React Native pour gérer efficacement l'état global de l'application, permettant ainsi des mises à jour en temps réel sans rechargement. L'une des plus grandes réussites techniques du projet a été l'optimisation des performances de l'application sur les dispositifs mobiles. J'ai mis en œuvre le <b>lazy loading</b> pour les images et les données, ce qui a considérablement réduit le temps de chargement initial de l'application et qui a amélioré l'expérience utilisateur sur les appareils avec des connexions internet lentes. De plus, j'ai utilisé <b>Redux</b> pour une gestion d'état plus avancée, qui contribue à une synchronisation efficace entre les différents composants de l'application et assurant une expérience utilisateur cohérente. Aujourd'hui, YourNight <b>fonctionne extrêmement bien</b> pour le nombre actuel d'utilisateurs actifs. Les retours des utilisateurs sont positifs. Ils mettent en avant la facilité d'utilisation et la réactivité de l'application.
                    `,
                
            }, {
                element: "Regard critique",
                content: `
                Ma maîtrise de React, actuellement à un <b>niveau intermédiaire avancé</b>, reconnaît une marge de progression, en particulier dans l'optimisation des performances des applications. L'efficacité de mon intégration de React dans mon arsenal de compétences a été particulièrement visible lors de ma rapide adaptation au projet ISIS chez Holis Consulting. En moins de deux semaines, j'étais déjà en train de contribuer de manière significative au code, résolvant des bugs complexes et proposant des améliorations fonctionnelles. Cette <b>capacité d'apprentissage et d'adaptation rapide a été reconnue par mon entreprise elle-même</b>, qui a salué mon approche proactive et ma compréhension rapide des exigences du projet. Cependant, en tant qu'autocritique constructive, je reconnais le besoin constant de me perfectionner, notamment dans les aspects avancés tels que le state management et le rendering conditionnel complexe, pour atteindre un niveau d'expertise.
                `,
                
            }, {
                element: "Evolution",
                content: `
                    React occupe une <b>place centrale dans mon profil</b> et je suis déterminé à continuer à développer mes compétences dans cette technologie. Elle joue un rôle significatif dans mes activités et responsabilités actuelles, et je suis motivé à l'explorer davantage, à suivre son évolution et à adopter les meilleures pratiques pour rester à la pointe.
                    <br/><br/>
                    Si je devais me prodiguer un conseil, ce serait de continuer à chercher des opportunités qui me poussent hors de ma zone de confort avec React en réalisant de nouveaux projets personnels toujours plus techniques et passionnants. C'est dans la résolution des défis les plus complexes que je trouve les leçons les plus précieuses et que je peux vraiment mesurer la profondeur de ma compréhension de React. Ceci, combiné à une veille technologique régulière, assurera que ma courbe de progression reste ascendante et que ma compétence reste pertinente dans un environnement technologique qui évolue rapidement.
                    `,
                
            }, {
                element: "Réalisations liées",
                content: `
                    YourNight, PREMIS DM, ISIS
                `
            }
        ]
    }, {
        name: "Docker",
        icon: "img/skillsIcon/Docker.svg",
        percentageOfMastery: 75,
        category: "technical",
        explanation: [
            {
                element: "Définition",
                content: `
                Docker est une <b>plateforme de conteneurisation</b> à code source ouvert qui automatise le déploiement d'applications au sein de conteneurs logiciels, qui autorise ainsi une plus grande portabilité et efficacité. Elle est largement reconnue pour sa capacité à simplifier et à accélérer le processus de développement en fournissant des environnements de développement, de test et de production cohérents. Docker est soutenu par une vaste communauté de développeurs et d'entreprises, et sa popularité continue de croître dans le milieu professionnel.
                <br/><br/>
                Dans les actualités récentes et les publications spécialisées en technologie, Docker est souvent mentionné pour son <b>adoption croissante</b> par les grandes entreprises technologiques et les startups innovantes. Cette tendance souligne l'importance et la pertinence de Docker dans le domaine de l'ingénierie logicielle moderne, en particulier pour le développement, la livraison et l'exploitation d'applications de manière efficace et scalable.
                `,
                
            }, {
                element: "Contexte d’utilisation",
                content: `
                    Pour mon premier projet en entreprise qui a été <a>ISIS</a> (une application web visant l’automatisation de certaines tâches chronophages pour les ingénieurs salariés de l’entreprise), j’ai été amené à utiliser Docker comme un <b>environnement de développement</b> était mis en place sur le projet. Ma première installation de Docker pour cette application a été marquée par une journée entière de défis techniques inattendus. La mise en place de la technologie étant relativement récente, il y avait certains problèmes tels que la la non-initialisation des données essentielles dans la base de données, telles qu'un compte utilisateur nécessaire pour se connecter à l'application. Armé des connaissances acquises, j'ai modifié les fichiers docker-compose.yml et Dockerfile pour assurer l'initialisation correcte des données dans la base de données. Cela incluait <b>l'ajout de scripts d'initialisation et la configuration des volumes persistants</b> pour sauvegarder les données essentielles. Un autre problème que j'ai dû affronter concernait la connectivité réseau entre les conteneurs, empêchant l'application de communiquer correctement avec la base de données. J'ai une fois de plus modifié le fichier docker-compose.yml pour <b>définir un réseau personnalisé</b> et assurer que tous les conteneurs nécessaires (application et base de données) soient attachés à ce réseau. Cela impliquait d'utiliser la section networks de Docker Compose pour en créer un et le spécifier dans la configuration de chaque service concerné. Pour faciliter la communication entre les conteneurs, j'ai également <b>défini des noms de domaine internes</b> spécifiques à chaque conteneur dans le réseau Docker, en utilisant la propriété hostname dans le docker-compose.yml. Cela a permis à l'application de se référer à la base de données par son nom de domaine interne, simplifiant ainsi la résolution des noms et la connectivité. Après une journée de recherche, de tests, et d'ajustements constants de la configuration, j'ai finalement réussi à surmonter ces obstacles. Cette expérience, bien que frustrante sur le moment, s'est avérée extrêmement bénéfique. Elle m'a non seulement permis de <b>résoudre les problèmes initiaux</b> mais également de les voir disparaître pour les futures installations du Docker de ce projet.
                    <br/><br/>
                    Lorsque j’ai travaillé sur mon projet personnel <a>YourNight</a> qui est une application mobile destinée à fluidifier l’organisation de soirées, est venu le moment où j’ai voulu <b>héberger</b> le serveur et la base de données de l’application <b>sur un VPS via Docker</b>. Il faut savoir que cette application fonctionnait sur trois technologies clés : React Native pour le frontend, ExpressJS pour le backend et MongoDB comme système de gestion de base de données. Pour relever ce défi, j'ai mis en place <b>Docker Compose</b>, un outil qui permet de définir et de gérer des applications multi-conteneurs. J'ai créé un fichier <b>docker-compose.yml</b> pour orchestrer ces trois services, en m'assurant que chaque composant était correctement configuré pour interagir avec les autres. Dans ce fichier, j'ai défini les services, les volumes et les réseaux nécessaires, en veillant à ce que chaque service soit construit à partir de son propre Dockerfile et qu’ils soient instanciés dans le bon ordre en faisant attention aux “depends_on”. Pour le service React Native, j'ai configuré un Dockerfile pour construire une image contenant le code source du frontend, tandis que pour ExpressJS, j'ai fait en sorte que le Dockerfile comprenne toutes les dépendances requises pour exécuter le serveur backend. Pour MongoDB, j'ai utilisé une image standard de Docker Hub, en m'assurant de configurer les <b>variables d'environnement</b> nécessaires pour chaque service et en permettant leur extériorisation pour me permettre de les modifier à ma guise à l’intérieur de <b>fichiers .env</b>. J'ai également configuré des réseaux Docker pour faciliter la communication entre les conteneurs de manière sécurisée. Je suis ensuite passé à l'aspect le plus crucial de ce projet qu’a été le déploiement de l'application que j’ai effectué moi-même sur un serveur privé virtuel (VPS) Linux. Docker a joué un rôle essentiel dans ce processus, en me permettant de déployer facilement l'application sur le serveur. En utilisant Docker, j'ai pu garantir que l'environnement de production sur le VPS était identique à l'environnement de développement sur mon ordinateur local, évitant ainsi les problèmes courants liés aux différences d'environnement. Après <b>une soirée d’implémentation</b> j’ai pu me servir de mon serveur et base de données hébergé sur le VPS pour faire des premiers tests de l’application avec mes amis.
                    `,
                
            }, {
                element: "Regard critique",
                content: `
                En réfléchissant de manière critique sur mes compétences en Docker, je reconnais que bien que j'aie réussi à conteneuriser deux types de projets (une application web et une application mobile) ma maîtrise de cette technologie reste quelque peu limitée, je la jugerai comme étant <b>intermédiare avancé</b>. Mon expérience actuelle avec Docker, bien qu'efficace dans le contexte de mes projets chez Holis Consulting et mon application personnelle YourNight, se concentre principalement sur des <b>scénarios assez basiques de conteneurisation</b> et ne couvre pas l'ensemble des capacités et des pratiques avancées que Docker offre.
                <br/><br/>
                Docker représente tout de même une <b>place centrale dans mon profil</b>, puisque la majorité de mes projets utilisent cette technologie. <b>J'ai très vite compris son utilité et fonctionnement</b> et j'ai pu l'intégrer dans mes projets de manière autonome en peu de temps.
                <br/><br/>
                Je suis conscient qu'il existe des possibilités d'optimisation bien plus avancées, en particulier avec des outils comme <b>Kubernetes, que je ne maîtrise pas encore</b>. Kubernetes, en tant qu'orchestrateur de conteneurs, offre des fonctionnalités pour la gestion à grande échelle des applications conteneurisées, permettant une automatisation plus poussée, une mise à l'échelle et une gestion des ressources plus efficaces. Mon expérience actuelle ne m'a pas encore permis d'explorer ces aspects plus complexes, ce qui représente une opportunité significative d'apprentissage et d'amélioration.
                <br/><br/>
                Je reconnais également que Docker, utilisé en <b>combinaison avec des outils d'intégration</b> et de déploiement continus, peut offrir une pipeline de développement et de production encore plus robuste et automatisée. Cela souligne un besoin pour moi de continuer à apprendre et à explorer les meilleures pratiques et les outils complémentaires à Docker pour améliorer mon efficacité en tant que développeur et pour rester à jour avec les tendances actuelles du développement logiciel.
                <br/><br/>
                En somme, bien que j'aie acquis une base solide dans l'utilisation de Docker pour le développement et le déploiement d'applications, je suis conscient de <b>l'étendue de ce que je dois encore apprendre</b> pour maîtriser pleinement cette technologie et pour l'exploiter de manière optimale dans une variété de contextes de projet. Cela représente pour moi une voie claire pour le développement professionnel et une motivation pour continuer à explorer et à maîtriser les aspects avancés de la conteneurisation et de l'orchestration des applications.
                `,
                
            }, {
                element: "Evolution",
                content: `
                    Mon parcours avec Docker, bien qu'encore dans ses débuts, a été profondément enrichissant et a suscité en moi un <b>vif intérêt pour les technologies de conteneurisation</b>. La facilité d'utilisation, la portabilité et l'efficacité de Docker ont fait de cette technologie un élément essentiel pour moi, et je suis déterminé à continuer à l'explorer et à l'appliquer dans mes futurs projets.
                    <br/><br/>
                    Regardant vers l'avenir, mon ambition est de non seulement <b>approfondir ma compréhension de Docker</b> mais aussi d'explorer les horizons étendus que Kubernetes offre. Kubernetes représente le prochain niveau dans la gestion de conteneurs, en particulier pour les applications à grande échelle et distribuées. Son écosystème, sa capacité à gérer des clusters de conteneurs, et ses fonctionnalités d'automatisation et de mise à l'échelle sont des aspects que je désire maîtriser.
                    <br/><br/>
                    Je prévois d'aborder <b>l'apprentissage de Kubernetes</b>, en commençant par des tutoriels, et en progressant vers l’implémentation dans mes futurs projets personnels. Mon objectif est de développer une expertise en Kubernetes qui complète et renforce ma maîtrise de Docker, me permettant ainsi de construire des infrastructures de développement et de production plus robustes, scalables et efficaces.
                    <br/><br/>
                    En conclusion, Docker a déjà façonné de manière significative mon approche du développement logiciel, et avec l'ajout de Kubernetes à mon ensemble de compétences, je m'attends à franchir de nouvelles frontières dans le domaine de la conteneurisation et de l'orchestration d'applications.
                `,
                
            }, {
                element: "Réalisations liées",
                content: `
                    YourNight, PREMIS DM, ISIS
                `
            }
        ]
    }, {
        name: "Express JS",
        icon: "img/skillsIcon/NodeJS.svg",
        percentageOfMastery: 90,
        category: "technical",
        explanation: [
            {
                element: "Définition",
                content: `
                ExpressJS est un <b>framework web pour Node.js</b>, reconnu pour sa flexibilité et sa minimalité. Il permet de construire des applications web et des API de manière rapide et efficace. En tant que middleware et système de routage, ExpressJS facilite la création d'applications web robustes et scalables en offrant un ensemble de fonctionnalités essentielles pour le développement backend. Il est particulièrement apprécié pour sa facilité d'utilisation et pour sa capacité à s'intégrer avec d'autres technologies et frameworks.
                <br/><br/>
                La popularité d'ExpressJS <b>continue de croître</b> dans le milieu professionnel, comme en témoignent les nombreuses références dans les médias spécialisés en technologie. Son adoption par de grandes entreprises technologiques ainsi que par des startups innovantes souligne son importance dans l'écosystème du développement logiciel. ExpressJS est souvent choisi pour sa rapidité de mise en œuvre et pour sa grande adaptabilité, ce qui en fait un outil de choix pour le développement d'applications web modernes, en particulier dans des environnements où la performance et l'efficacité sont primordiales.
                `,
                
            }, {
                element: "Contexte d’utilisation",
                content: `
                    Pour mon premier projet en entreprise qui a été <a>ISIS</a> (une application web visant l’automatisation de certaines tâches chronophages pour les ingénieurs salariés de l’entreprise), mon travail avec ExpressJS s'est concentré sur le développement de fonctionnalités assez classiques sur un projet déjà existant. J'ai intégré et j'ai mis en place des modèles de données en utilisant <b>l'ORM Sequelize</b>. J’ai également créé une variété de <b>contrôleurs et de routes</b> pour gérer les requêtes entrantes. Cela incluait des routes pour <b>l'authentification</b> des utilisateurs, la manipulation des données, et la réponse aux requêtes spécifiques liées à l'application. La <b>mise en œuvre de middleware</b> pour la gestion des erreurs et la validation des requêtes a également été un aspect important de mon travail, renforçant la sécurité et la fiabilité de l'application (notamment pour vérifier si sur des requêtes réservées aux administrateurs, l’utilisateur faisant l’appel possédait bien ce statut). J’ai pu délivrer une api comportant toutes les fonctionnalités au bout de deux mois, celle-ci comprenait quelques problèmes qui ont été résolus par mes soins les jours suivant la livraison finale. Mes supérieurs qui représentaient les clients du projet étaient <b>satisfaits du résultat</b>.
                    <br/><br/>
                    Sur un autre projet professionnel nommé <a>PREMIS DM</a> qui est une application web ayant pour but pour de gérer de grands volumes de données liées au domaine de l’industrie afin de les consulter, de les analyser et de les visualiser sous forme de graphiques, j’ai été chargé <b>d’imaginer et de développer l’architecture backend complète</b>. Pour ce faire je me suis inspiré de l’architecture d’ISIS qui avait des similarités avec le fonctionnement futur de PREMIS DM. Cependant je devais anticiper certains détails étant donné que l’application allait fonctionner avec d’énormes volumes de données. Une fois la première version fonctionnelle avec les routes et modèles essentiels au fonctionnement de l’application mis en place, j’ai implémenté une solution de <b>stockage en cache</b> pour améliorer les performances globales de la délivrance et traitement général des données (je devais initialement utiliser le service Redis mais après un benchmark le cache nodeJS de base suffisait). J’ai également pensé et mis en place un <b>système de pagination des résultats</b>. Cela a permis de limiter le nombre de données chargées et affichées simultanément, réduisant ainsi la charge sur le navigateur. Le dernier atout majeur influant dans la performance du backend que j’ai pu mettre en place a été la mise en place d'un <b>système de files d'attente</b> pour les tâches lourdes. Certaines opérations, comme l’insertion des massifs volumes de données, ont été déplacées vers des files d'attente de tâches asynchrones grâce à un système de token permettant le bloquage de tâches similaires simultanément. Cela a permis de ne pas geler les processus principaux de l'application pendant ces opérations gourmandes en ressource et à éviter toute saturation du système. <b>L’API a bien répondu aux besoins initiaux</b>. Cette dernière connaitra des améliorations pour permettre encore plus de performance qu’actuellement.
                    <br/><br/>
                    Au cours des mes réalisations professionnelles j’ai développé un attrait pour cette technologie. C'est cette attirance pour ExpressJS qui m'a motivé à choisir cette technologie pour mon projet personnel, <a>YourNight</a> qui est un projet personnel d’application mobile destiné à fluidifier l’organisation de soirées. Pour YourNight, j'ai assumé la responsabilité complète de construire l'architecture et la logique backend de l'application. Travaillant seul sur ce projet, j'ai eu l'occasion de mettre en pratique mes compétences en conception et en développement de manière indépendante. La mise en place de l’API a été assez succincte avec une première version fonctionnelle robuste et sans bug au bout d’une semaine en raison de l’expérience acquise au cours des projets réalisés en entreprise. Sa réalisation n’a pas énormément différencié de celle de PREMIS DM même si moins technique. J’ai cependant dû penser à des problèmes différents tels que la mise en place d’un <b>bouclier anti DDOS</b> en limitant le nombre d’appels API par adresses IP. J’ai également mis des <b>notifications push</b> côté backend en interrogeant l’API expo push et l’une des choses les plus importantes a été une attention particulière portée à <b>l'authentification des utilisateurs</b> et à la sécurité des données. Des protocoles d'authentification robustes ont été mis en place pour protéger les comptes utilisateurs et les informations sensibles, notamment le <b>protocole JWT</b> (JSON Web Tokens). Lorsqu'un utilisateur se connecte avec succès, le serveur génère un token JWT signé avec une clé secrète. Ce token contient des informations d'identification de l'utilisateur ainsi qu'une date d'expiration. Pour l’instant <b>mon API est fonctionnelle et amplement suffisante</b> pour les besoins actuels de l’application mobile.
                `,
                
            }, {
                element: "Regard critique",
                content: `
                    En évaluant de manière critique mes compétences en ExpressJS, je me sens globalement à l'aise avec cette technologie m'attriburant <b>un niveau avancé</b>, bien que conscient de ne pas la maîtriser entièrement. Mon expérience avec ExpressJS, à la fois chez Holis Consulting et sur mon projet personnel YourNight, m'a permis de développer une bonne compréhension de la construction et de la gestion des architectures backend. Cela inclut la création de routes API, la gestion des sessions, et l'implémentation de mesures de sécurité telles que l'authentification avec token JWT et la validation des données.
                    <br/><br/>
                    Cette technologie occupe <b>une place centrale au sein de mon profil professionnel</b> car la majorité de mes projets utilisent ExpressJS. J'ai pu rapidement assimiler les concepts clés et les meilleures pratiques de cette technologie, ce qui m'a permis de contribuer de manière significative aux projets en entreprise et de réaliser mon projet personnel avec succès.
                    <br/><br/>
                    Cependant, je reconnais qu'il existe des aspects d'ExpressJS que je n'ai pas encore explorés en profondeur. Par exemple, les subtilités de <b>l'optimisation des performances</b> et de la <b>gestion avancée des erreurs</b> sont des domaines où je vois un <b>potentiel de croissance</b>. De plus, bien que j'aie réussi à implémenter un certain nombre de fonctionnalités, je n'ai pas eu l'occasion de travailler sur des projets qui nécessitent une utilisation très avancée d'ExpressJS, comme l'intégration avec des systèmes complexes ou la gestion de charges de travail très importantes.
                    <br/><br/>
                    Je suis également conscient que le domaine du développement backend évolue rapidement, avec de nouvelles pratiques et technologies émergentes. Pour atteindre une maîtrise complète d'ExpressJS, je dois continuer à me former, à expérimenter et à rester à jour avec les dernières tendances et meilleures pratiques.
                `,
                
            }, {
                element: "Evolution",
                content: `
                    Ma relation avec ExpressJS, enrichie par mes expériences passées, est marquée par une affection particulière pour cette technologie. Sa flexibilité, sa simplicité et son efficacité m'ont convaincu de son potentiel et de sa valeur dans le développement de projets backend. Dans mes projets futurs, <b>je prévois de continuer à utiliser ExpressJS</b>, tirant parti de sa robustesse et de sa capacité à faciliter le développement rapide et efficace d'applications web et mobiles.
                    <br/><br/>
                    Toutefois, reconnaissant l'importance de l'évolution constante dans le domaine du développement logiciel, je suis également <b>déterminé à explorer de nouveaux frameworks backend</b> basés sur Node.js. Un exemple de cela est AdonisJS, un framework qui offre une expérience de développement plus structurée et qui est souvent comparé à Laravel dans le monde PHP. AdonisJS, avec ses fonctionnalités avancées telles que l'injection de dépendances, le système ORM intégré, et les outils de test complets, représente une opportunité pour moi d'élargir mes horizons et d'acquérir de nouvelles compétences.
                    <br/><br/>
                    L'apprentissage de frameworks comme AdonisJS me permettra non seulement de rester à jour avec les dernières innovations dans le développement backend, mais aussi <b>d'approfondir ma compréhension des architectures d'applications</b> et de découvrir de nouvelles manières de résoudre des problèmes complexes. Cela enrichira mes outils de développement, me rendant plus polyvalent et adaptable dans mes projets futurs. Cette démarche s'inscrit dans mon engagement à long terme pour l'apprentissage continu dans le développement logiciel, me permettant de rester pertinent et efficace dans un domaine technologique en constante évolution.
                `,
                
            }, {
                element: "Réalisations liées",
                content: `
                    YourNight, PREMIS DM, ISIS
                `
            }
        ]
    }, {
        name: "Base de données",
        icon: "img/skillsIcon/Database.svg",
        percentageOfMastery: 90,
        category: "technical",
        explanation: [
            {
                element: "Définition",
                content: `
                Les bases de données jouent un rôle fondamental dans le monde de la technologie, en servant de <b>pilier pour le stockage</b>, la gestion et la récupération d'informations. Elles peuvent être relationnelles, comme MySQL ou PostgreSQL, ou non relationnelles (NoSQL), comme MongoDB. Les bases de données relationnelles utilisent un modèle structuré avec des tables et des relations, tandis que les bases de données NoSQL offrent une flexibilité accrue avec des modèles de données variés comme le document, le graphique ou la clé-valeur.
                <br/><br/>
                La <b>pertinence</b> des bases de données dans le milieu professionnel est <b>indéniable</b>. Elles sont essentielles pour une multitude d'applications, allant des systèmes de gestion de contenu aux réseaux sociaux et aux applications mobiles. Leur choix et leur utilisation dépendent fortement des besoins spécifiques du projet, notamment en termes de volume de données, de vitesse d'accès et de la complexité des requêtes.
                <br/><br/>
                Leur <b>popularité n'est plus à prouver</b>, comme en témoigne l'intérêt constant dans les médias spécialisés en technologie. Les grandes entreprises technologiques et les startups innovantes adoptent des bases de données avancées pour gérer d'énormes volumes de données, assurer des performances élevées et maintenir la scalabilité. Dans les environnements où la gestion des données est critique, le choix de la base de données appropriée est crucial pour la réussite du projet.
                `,
                
            }, {
                element: "Contexte d’utilisation",
                content: `
                        Mon initiation aux bases de données a débuté il y a environ cinq ans, dans le cadre de mes projets
                        réalisés durant mes études. J'ai principalement travaillé avec <b>MySQL</b>, un système de base de données
                        relationnelle répandu. Cette expérience m'a permis de me familiariser avec les fondements des bases de
                        données SQL, notamment en appliquant les <b>opérations CRUD</b> (Créer, Lire, Mettre à jour, Supprimer) de
                        manière classique, en imaginant mes premiers modèles de base de données et mes premières <b>gestions
                        d’utilisateurs</b>, ce qui a constitué la base de ma compréhension dans ce domaine.                    
                    <br/><br/>
                        Mon utilisation des bases de données a pris une toute autre ampleur lorsque j’ai travaillé en entreprise
                        lors de mon alternance sur le projet <a>PREMIS DM</a>, qui est une application web ayant pour but pour de
                        gérer de grands volumes de données liés au domaine de l’industrie afin de les consulter, de les analyser
                        et les visualiser sous forme de graphiques. J’ai notamment travaillé en totale autonomie avec
                        <b>PostgreSQL</b> pour mettre en place des <b>vues complexes</b> afin d’assembler sous une même forme, des
                        données venant de plusieurs tables différentes. Le défi était ici de transformer le besoin client exprimé
                        verbalement, en requête SQL, étant donné le grand nombres de conditions spécifiques et techniques. Il
                        était question de faire cohabiter les opérations classiques (ORDER BY, COUNT, HAVING, WHERE,
                        JOIN...) avec des <b>opérations plus complexes</b> (CASE, split_part, regexp_split_to_array, OVER,
                        PARTITION...) pour répondre aux besoins précis nécessaires au bon fonctionnement de l’application. La
                        création de ces vues s’inscrivait dans une optique d’optimisation globale de vitesse d’exécution et de
                        traitement des nombreuses données liées à l’application web. Je devais donc travailler en me servant du
                        gestionnaire visuel de base de données <b>pgAdmin</b> afin de mesurer la performance des requêtes ce qui
                        représentait un défi supplémentaire. Après une semaine de travail j’ai pu fournir un premier jet
                        fonctionnel d’une vingtaine de requêtes plus ou moins complexes que j’ai introduit dans l’application. Les
                        premiers tests ont été concluants et la majeure partie de ces requêtes sont restées plus tard telles
                        quelles, sans subir d’optimisation ou d’amélioration nécessaire d’autres s’en sont vu attribuées par mes
                        soins car moins performantes avec d’encore plus gros volumes de données. L’objectif initial était tout de
                        même accompli avec <b>une base de données beaucoup plus légère et efficace</b>.
                    <br/><br/>
                        Toujours dans le cadre de l’optimisation de l’application web <a>PREMIS DM</a>, nous avions un autre
                        problème majeur qui est survenu lors d'un test crucial, avec un volume de données plus conséquent que
                        d'habitude : la mémoire du système se retrouvait parfois saturé, et l'application venait à <b>crash sous le
                        poids de l'énorme quantité de données</b> à traiter lors de l’exécution de certaines fonctionnalités au sein de
                        l’application. Face à ce problème, j'ai initié une discussion avec mon maître d'apprentissage pour trouver
                        une solution. C'est alors que l'idée d'optimiser le processus de <b>traitement de données en utilisant des
                        index</b> est apparue. J'ai plongé dans une analyse approfondie de la structure des données, déterminant
                        les points de goulot d'étranglement et conceptualisant une stratégie pour alléger la charge sur le
                        système à la suite de nombreux tests. Je mesurais les temps d’arrivée des données dans chaque page
                        de l’application web en prenant en compte les requêtes et modèles appelés. À la suite de ces tests est
                        venue ma <b>première implémentation d’index sur des propriétés</b> que j’ai identifiées comme <b>centrales</b> aux
                        cœur des requêtes les plus problématiques. Cette implémentation a été une révélation, réduisant
                        significativement les temps de réponse et permettant à l'application de gérer des volumes de données
                        bien plus importants sans faillir. Cette intervention n'a pas seulement <b>résolu le problème immédiat</b> mais a
                        également servi de tremplin pour réévaluer et améliorer l'ensemble du système de gestion de données
                        de l'application.
                    <br/><br/>
                        Parallèlement à mon travail avec des bases de données relationnelles, j'ai également exploré le monde
                        des bases de données non SQL avec <b>MongoDB</b> dans mon projet personnel <a>YourNight</a> qui est une
                        application mobile permettant de faciliter l’organisation de soirées. J’ai <b>imaginé et mis en place mon
                        schéma de données</b> en une soirée, relativement facilement et sans être perdu car je me sentais très vite
                        familier avec MongoDB de par mon expérience déjà solide avec les bases de données relationnelles. Je
                        l’ai premièrement imaginé et hébergé sur Atlas avant de plus tard le faire fonctionner localement. J’ai tout
                        de même pris un peu plus de temps par la suite pour améliorer mon schéma de données malgré qu’il soit
                        fonctionnel pour <b>anticiper un potentiel gros volume de données</b> et solidifier l’ensemble (une leçon que j’ai
                        tirée du projet PREMIS DM) à l’aide de l'indexation, à la suite d’une analyse approfondie du flux de
                        donnée de manière similaire à ce que j’avais pu faire sur PREMIS DM. Mes essais faits localement avec
                        de fausses données sur une base de données test ont été concluants mais du fait du faible nombre
                        d’utilisateurs de l’application, je n’ai jamais pu constater les résultats de cette optimisation en production. Aujourd'hui
                        ma base de données <b>fonctionne extrêmement bien</b> pour le volume de données actuel.
                    `,
                
            }, {
                element: "Regard critique",
                content: `
                    En réfléchissant de manière critique à mes compétences en bases de données, je reconnais que j'ai
                    établi de <b>solides fondations</b> tant en SQL qu'en NoSQL. Mes expériences avec MySQL, PostgreSQL, et
                    MongoDB m'ont fourni une bonne compréhension des opérations et des structures de bases de
                    données, ainsi que de la logique nécessaire pour leur manipulation efficace.
                <br/><br/>
                    Cette compétence représente <b>plus qu'une place importante au sein de mon profil</b> technique étant donné
                    que j'utilise des bases de données pour tous mes projets. J'ai eu du mal à comprendre les fondements
                    du fonctionnement des requêtes SQL à mes débuts mais après quelques projets et de l'entrainement sur
                    des outils tels que MySQL Workbench, j'ai pu assimiler les concepts clés et les meilleures pratiques.
                <br/><br/>
                    Cependant, je suis conscient que pour atteindre un niveau supérieur de maîtrise, je dois encore
                    <b>approfondir mes connaissances</b> et compétences, en particulier dans <b>l'optimisation des bases de
                    données</b> pour la manipulation d'énormes volumes de données.
                <br/><br/>
                    Bien que j'aie acquis une certaine expérience dans l'optimisation des requêtes et la création de vues
                    complexes avec PostgreSQL, et que j'aie exploré la flexibilité des modèles de données avec MongoDB,
                    je suis conscient que la gestion et l'optimisation des bases de données à grande échelle représentent un
                    défi bien plus complexe. Cela implique une compréhension avancée des index, des stratégies de
                    partitionnement des données, du tuning des performances et de la gestion efficace des transactions,
                    surtout dans des environnements où la rapidité d'accès et la cohérence des données sont primordiales.
                `,
                
            }, {
                element: "Evolution",
                content: `
                    Ma trajectoire avec les technologies de bases de données a été une aventure constante d'apprentissage
                    et d'adaptation. Reconnaissant leur rôle essentiel dans le développement de toute application moderne,
                    je suis résolu à continuer à les utiliser activement dans mes projets futurs. <b>Pour les petits projets</b>, je
                    prévois de continuer à utiliser <b>MongoDB</b> en raison de sa flexibilité et de sa facilité d'implémentation. Le
                    fonctionnement par schéma de MongoDB et sa capacité à gérer des données de forme libre la rendent
                    idéale pour des projets agiles et innovants.
                <br/><br/>
                    <b>Pour les projets plus importants et complexes</b>, les <b>bases de données SQL</b> resteront mon choix privilégié,
                    compte tenu de leur robustesse, de leur fiabilité et de leur capacité à gérer efficacement de grandes
                    quantités de données structurées. Toutefois, j'ai une forte envie de développer davantage mes
                    compétences en NoSQL. Mon expérience avec MongoDB m'a particulièrement impressionné et a suscité
                    un intérêt marqué pour explorer d'autres bases de données NoSQL, chacune ayant ses propres forces et
                    cas d'utilisation spécifiques.
                <br/><br/>
                    Parallèlement à mon intérêt croissant pour les bases de données NoSQL, je suis également conscient
                    de l'importance croissante du cloud computing dans la gestion des données. Le cloud offre une flexibilité,
                    une scalabilité et une efficacité inégalée, ce qui en fait un élément crucial dans la stratégie de gestion
                    des données modernes. Mon objectif est de <b>m'intégrer davantage dans le cloud</b>, en apprenant à utiliser
                    des services de bases de données cloud comme Amazon RDS, Google Cloud SQL ou Azure SQL
                    Database pour les solutions basées sur SQL, ainsi que des services comme MongoDB Atlas pour les
                    solutions NoSQL.
                `,
                
            }, {
                element: "Réalisations liées",
                content: `YourNight, PREMIS DM, ISIS, Hypotech`
            }
        ]
    }, {
        name: "Git",
        icon: "img/skillsIcon/Git.svg",
        percentageOfMastery: 90,
        category: "technical",
        explanation: [
            {
                element: "Définition",
                content: `
                GIT est un système de <b>contrôle de version décentralisé</b>, largement reconnu pour sa robustesse et sa flexibilité. Il est conçu pour tout gérer, des petits aux très grands projets, avec rapidité et efficacité. GIT facilite le suivi des modifications dans les fichiers, permettant aux développeurs de collaborer sur le code de manière coordonnée et sécurisée. Il fournit des outils pour naviguer et visualiser l'historique des modifications, et gère efficacement les branches et les fusions.
                <br/><br/>
                La <b>popularité</b> de GIT dans le milieu professionnel est <b>indéniable</b>, comme le montrent les nombreuses références dans les médias spécialisés en technologie. Sa présence est omniprésente dans le monde du développement logiciel, adoptée par des grandes entreprises technologiques et des startups innovantes. L'importance de GIT réside dans sa capacité à faciliter la collaboration entre les développeurs et à gérer efficacement les versions du code dans un environnement de développement moderne.
                <br/><br/>
                GIT est souvent choisi pour sa capacité à <b>gérer efficacement les projets de développement logiciel</b> de toutes tailles, offrant une solution fiable et évolutive pour le contrôle de version. Sa facilité d'intégration avec d'autres outils de développement et sa capacité à s'adapter à divers workflows en font un élément essentiel dans les pratiques modernes de développement logiciel, en particulier dans des environnements où la collaboration et la gestion efficace du code sont primordiales.
                `,
                
            }, {
                element: "Contexte d’utilisation",
                content: `
                    Depuis mes débuts dans le monde de la programmation, il y a environ cinq ans, GIT a été un outil
                    constant dans mon parcours de développement. J'ai utilisé GIT dans divers contextes, que ce soit à
                    l'école ou en entreprise, en adoptant GitLab comme plateforme principale pour les projets académiques
                    et professionnels, et GitHub pour mes projets personnels ou ceux réalisés en collaboration avec mes
                    amis.
                <br/><br/>
                    Lorsque j’ai travaillé dans le cadre scolaire sur le projet de groupe <a>Hypotech</a> qui est une application
                    mobile Android ayant pour objectif de fluidifier la gestion de projets de vente immobilière, notre gestion
                    du gitlab était quelque peu laborieuse notamment due au fait que nous n’utilisions que très peu le
                    système de branche. C’est à ce moment que j’ai énormément progressé sur la technologie et compris le
                    réel intérêt et la puissance de GIT. Au vu de la situation nous avons rencontré des <b>conflits de fusion
                    complexes</b> qui ont nécessité plusieurs heures pour être résolus. Ces situations ont été des occasions
                    d'apprentissage précieuses, me poussant à développer une compréhension plus profonde de la
                    résolution de conflits avec <b>git merge</b>. Je me portais souvent volontaire pour résoudre ces conflits, car je
                    commençais à bien appréhender le problème et ils ne représentaient plus un si grand défi pour moi. À la
                    suite de ce genre de problèmes il n’était plus question pour nous de continuer comme ça. J'ai décidé
                    d’aller de l’avant et de commencer une discussion autour du problème pour trouver une solution et nous
                    avons par conséquent <b>adopté une nouvelle approche consistant à faire une branche par User Story</b> (que
                    l’on peut définir grossièrement de fonctionnalité) et à venir merge ces branches dans la branche
                    principale qui était en l’occurrence “master”. Au démarrage d'une nouvelle User Story nous devions créer une 
                    brance à partir de master et la nommer en référence avec la User Story pour que tout le monde puisse s’y retrouver.
                    Lors de modifications sur master nous devions <b>rebase</b> nos branches pour éviter les conflits de fusion. Cette
                    approche a <b>considérablement amélioré notre flux de travail</b>, réduisant les conflits et les erreurs de
                    fusion.
                <br/><br/>
                    Au-delà des commandes classiques et de la gestion par branche j’ai découvert et adopté de nouveaux
                    principes au cours du développement de <a>YourNight</a>. J’ai voulu trouver un moyen d’automatiser le
                    lancement de mes tests unitaires car je savais que c’était possible. C’est à ce moment que j’ai
                    implémenté les <b>git hooks</b> sans difficulté particulière et qui se sont avérés comme étant un aspect crucial
                    du projet. En mettant en place ce système j’ai considérablement <b>amélioré la qualité du code et la fiabilité
                    de l'application</b>, sachant que le code était systématiquement validé par ces tests à chaque commit. J’ai
                    pu détecter rapidement les erreurs et les bugs avant qu'ils n'atteignent la branche principale et même
                    plus globalement cette approche a contribué à une <b>meilleure discipline de développement</b>,
                    m'encourageant à écrire des tests unitaires complets et à penser davantage aux potentiels impacts des
                    changements de code.
                `,
                
            }, {
                element: "Regard critique",
                content: `
                    En évaluant mes compétences et mon expérience avec GIT, je dispose de
                    <b>connaissances solides</b>, particulièrement en ce qui concerne l'utilisation de GitHub. J'ai rapidement acquis
                    une <b>bonne maîtrise des opérations de base et avancées de GIT</b>, comme la gestion des branches, la
                    résolution de conflits, l'utilisation de hooks pour l'automatisation des tests, et la collaboration efficace via
                    les pull requests. Git est aujourd'hui un outil que j'utilise pour tous mes projets, qu'ils soient personnels
                    ou professionnels.
                <br/><br/>
                    Cependant, en regardant de manière critique, je reconnais qu'il existe des <b>domaines où je peux encore
                    m'améliorer</b>, surtout en ce qui concerne l'utilisation de GitLab et la mise en place de workflows complets
                    de <b>CI/CD</b> (Continuous Integration/Continuous Deployment).
                <br/><br/>
                    GitLab offre des fonctionnalités étendues pour le CI/CD, permettant une automatisation plus poussée du
                    processus de développement et de déploiement. Jusqu'à présent, <b>mon expérience avec ces aspects de
                    GitLab reste limitée</b>. Je vois une opportunité significative d'amélioration dans la compréhension et la
                    mise en œuvre de pipelines de CI/CD complets, qui comprennent non seulement l'exécution
                    automatique des tests, mais aussi l'intégration de l'analyse de code, le déploiement automatique dans
                    différents environnements et la gestion efficace des versions.
                `,
                
            }, {
                element: "Evolution",
                content: `
                        Ma trajectoire avec GIT a été un voyage d'apprentissage constant, marqué par une appréciation
                        croissante pour cet outil puissant et polyvalent. J'ai développé un <b>attachement fort à GIT</b>, le trouvant
                        fantastique pour sa capacité à gérer efficacement les versions de code et à faciliter la collaboration. Cela
                        me motive à <b>explorer</b> encore plus profondément ses possibilités, en particulier dans le domaine de
                        l'intégration et du <b>déploiement continus</b> (CI/CD) via GitLab.
                    <br/><br/>
                        En regardant vers l'avenir, je suis déterminé à <b>maîtriser les concepts de CI/CD</b>, reconnaissant leur
                        importance cruciale dans les cycles de développement logiciel modernes. Mon objectif est de gagner
                        une compréhension approfondie des pipelines de CI/CD dans GitLab, allant de la configuration initiale
                        des pipelines à la mise en œuvre de stratégies de déploiement automatisé et d'assurance qualité. Je
                        prévois de me plonger dans la documentation de GitLab, d'explorer les tutoriels en ligne et de participer
                        à des projets pratiques pour renforcer cette compétence.
                    <br/><br/>
                        Je vois cette évolution comme une étape naturelle dans ma croissance en tant que développeur. La
                        maîtrise des flux de travail de CI/CD me permettra non seulement <b>d'optimiser le processus de
                        développement</b> dans mes projets, mais aussi de garantir une qualité de code plus élevée et une
                        distribution plus efficace. Cela augmentera ma valeur en tant que professionnel du développement
                        logiciel, me rendant plus compétent dans la gestion de projets complexes et dans la réponse aux
                        besoins des environnements de développement dynamiques.
                    `,
                
            }, {
                element: "Réalisations liées",
                content: `YourNight, PREMIS DM, ISIS, Hypotech`
            }
        ]
    }, {
        name: "Intégration continue",
        icon: "img/skillsIcon/Cicd.webp",
        percentageOfMastery: 60,
        category: "technical",
        explanation: [
            {
                element: "Définition",
                content: `
                L'intégration continue (CI) est une pratique de développement logiciel qui consiste à <b>automatiser l'intégration du code</b> dans un dépôt partagé plusieurs fois par jour. Cette approche permet aux équipes de détecter rapidement les erreurs, de les corriger en amont et d'améliorer la qualité du logiciel, tout en réduisant le temps nécessaire pour publier de nouvelles mises à jour. La CI encourage une culture de tests fréquents, ce qui aide à identifier et à résoudre les conflits entre les branches de développement dès qu'ils se présentent, facilitant ainsi un processus de développement plus fluide et plus rapide.
                <br/><br/>
                Au cœur de l'intégration continue se trouve l'automatisation du <b>processus de build et de test</b>, qui exécute une série de scripts ou de tâches automatiquement à chaque soumission de code. Cela inclut la compilation du code, l'exécution des tests unitaires et d'intégration, et parfois la vérification du respect des normes de codage. Si le processus détecte des erreurs ou des tests échoués, il alerte l'équipe de développement, permettant une intervention rapide avant que le problème ne s'aggrave ou ne se propage.
                <br/><br/>
                L'adoption de l'intégration continue dans les projets de développement logiciel apporte plusieurs avantages, notamment une <b>diminution significative des conflits de fusion</b>, une détection précoce des bugs, une réduction des risques liés à la publication, et une augmentation de la confiance dans le code qui est livré. De plus, la CI favorise les livraisons de logiciels plus fréquentes et plus fiables, ce qui est essentiel dans un environnement de développement agile.
                <br/><br/>
                En résumé, l'intégration continue est une pierre angulaire des pratiques de développement moderne, permettant aux équipes de maintenir un rythme de développement élevé tout en assurant la qualité et la stabilité du logiciel produit.
                `,
                
            }, {
                element: "Contexte d’utilisation",
                content: `
                    Dans le contexte de l'application web <a>PREMIS DM</a> qui est une application web ayant pour but pour de gérer de grands volumes de données liées au domaine de l’industrie afin de les consulter, de les analyser et de les visualiser sous forme de graphiques, l’implémentation d’une première intégration continue était essentielle en raison du nombre de <b>déploiement faits manuellement</b> par semaine à des fins de tests. La solution jusqu'à ce moment, ne disposait d'aucun système automatisé pour le déploiement, c'était le chef de projet qui était chargé de diriger les déploiements de l'application. Sans une compréhension approfondie des processus sous-jacents, il suivait un ensemble de commandes fournies par mon maître d'apprentissage, exécutées séquentiellement sans véritable assurance de cohérence entre les déploiements. Ma responsabilité a été de <b>mettre en place une chaîne d'intégration continue via GitHub</b>, un outil que je maîtrisais déjà pour la gestion du code source. L'objectif était de créer un processus automatisé de déploiement qui faciliterait et accélérerait la mise en production des nouvelles versions de l'application. Cela impliquait la <b>configuration de webhooks GitHub</b> pour déclencher des scripts de déploiement que j'avais imaginé en me basant sur les commandes exécutées manuellement, sur le serveur chaque fois que des modifications étaient poussées vers la branche principale du dépôt. Le processus d'intégration continue que j'ai mis en place comprenait plusieurs étapes clés : <b>la compilation du code</b>, <b>l'exécution des tests automatiques</b> pour vérifier l'intégrité et la fonctionnalité de l'application, et enfin le <b>déploiement automatique</b> sur le serveur de production. Ce workflow a non seulement permis de garantir que chaque nouvelle version déployée était stable et prête pour la production, mais il a également significativement réduit le temps nécessaire pour publier des mises à jour, permettant ainsi à l'équipe de se concentrer davantage sur le développement de nouvelles fonctionnalités et l'amélioration de l'application. En automatisant le processus de déploiement avec l'intégration continue, j'ai contribué à instaurer une <b>pratique de développement plus agile et plus réactive</b> au sein de l'équipe. Cette expérience a été enrichissante, me permettant de renforcer mes compétences en gestion de serveur, en automatisation, et en travail collaboratif grâce à GitHub, tout en répondant efficacement aux exigences techniques et opérationnelles du projet PREMIS DM. La transition vers un système d'intégration continue que j'ai initialement mise en place a marqué un tournant significatif dans notre façon de travailler. Cependant, la véritable évolution est venue plus tard, lorsqu'un collègue a pris l'initiative de développer un workflow d'intégration continue et de déploiement continu (CI/CD) encore plus robuste, en utilisant notre propre instance GitLab. 
                    <br/><br/>
                    Pour mon projet personnel <a>YourNight</a> qui est une application mobile visant à fluidifier l’organisation de soirées, j'ai également pris l'initiative de mettre en place un <b>système d'intégration continue automatisé, en utilisant GitHub</b> pour gérer le code source et automatiser les déploiements de mon API sur un VPS Ubuntu. Ce workflow incluait <b>l'exécution automatique de tests</b> pour assurer la qualité du code, ainsi que <b>l'application de ESLint</b> pour maintenir une cohérence de style de codage et détecter les erreurs potentielles avant le déploiement. Cependant à chaque déploiement de l'application, un problème récurrent entraînait la perte des photos de profil des utilisateurs. Après investigation, il s'est avéré que le problème était lié à la gestion des volumes dans Docker. En effet, lors du déploiement de nouvelles versions de l'application via Docker, les données stockées localement dans le conteneur, y compris les photos de profil, étaient effacées, car le volume contenant ces données n'était pas correctement configuré pour persister au-delà du cycle de vie du conteneur. La mise en place d'un système d'intégration continue automatisé pour YourNight a considérablement <b>transformé ma façon de gérer les déploiements</b>, les rendant non seulement <b>plus fiables mais aussi beaucoup moins stressants</b>. L'automatisation du processus de déploiement, incluant l'exécution des tests, l'application de ESLint, et la gestion correcte des volumes Docker, a éliminé une grande part d'incertitude et de tâches manuelles qui pouvaient auparavant mener à des erreurs ou à des oublis. Ce gain de temps est non négligeable, il me permet désormais de me concentrer davantage sur le développement de nouvelles fonctionnalités et l'amélioration de l'expérience utilisateur, plutôt que de me préoccuper des détails techniques du déploiement. La confiance accrue dans la fiabilité et la stabilité des déploiements automatisés a également réduit le stress associé à la mise en ligne de nouvelles versions de l'application. <b>Je peux maintenant effectuer des mises à jour fréquentes et réactives</b>, en réponse aux besoins des utilisateurs ou pour corriger des bugs, avec l'assurance que chaque déploiement est préalablement testé et vérifié.
                    `,
                
            }, {
                element: "Regard critique",
                content: `
                Mon regard critique sur ma compétence en intégration continue reflète <b>une appréciation nuancée de mes acquis</b> et des domaines nécessitant une amélioration. Bien que je dispose de bases solides dans la mise en œuvre de workflows d'intégration continue, notamment grâce à mes expériences avec GitHub et la gestion de déploiements automatisés sur des VPS Linux, je reconnais que <b>mon expérience reste limitée</b>, surtout quand il s'agit d'outils et de pratiques plus avancés.
                <br/><br/>
                L'intégration continue ne représente qu'un <b>faible pourcentage de mon profil professionnel</b>, je ne l'utilise que lorsque j'en ai besoin avec des outils relativement basiques me permettant de répondre à mes besoins. J'ai tout de même rapidement saisi son importance et son potentiel pour améliorer la qualité du code et la fiabilité des applications. J'ai pu constater les avantages de l'intégration continue dans mes projets, notamment en termes de détection précoce des erreurs et de réduction des risques liés aux déploiements.
                <br/><br/>
                Je n'ai pas encore eu l'opportunité d'utiliser des outils d'intégration continue et de déploiement continu (CI/CD) plus poussés comme Jenkins ou Travis CI dans un contexte GitLab. Ces plateformes offrent des fonctionnalités et une flexibilité supplémentaires pour gérer des pipelines CI/CD complexes, permettant une automatisation encore plus grande et plus sophistiquée des tests, des builds, et des déploiements.
                <br/><br/>
                Mon manque d'expérience avec ces outils avancés <b>limite ma capacité à tirer pleinement parti des potentialités de l'intégration continue</b>, en particulier pour des projets de grande envergure ou nécessitant une configuration de déploiement complexe. Cette lacune souligne un besoin pour moi de continuer à me former et à explorer ces technologies pour enrichir ma maîtrise de l'intégration et du déploiement continu.
                <br/><br/>
                En somme, bien que je sois capable de gérer efficacement les déploiements et d'apprécier les avantages de l'intégration continue avec les outils que j'ai utilisés jusqu'à présent, je reste conscient de l'étendue de ce que j'ai encore à apprendre.
                `,
                
            }, {
                element: "Evolution",
                content: `
                    <b>Mon intérêt pour la compétence en intégration continue (CI/CD) est plus que présent</b>, et je suis résolu à approfondir ma compréhension et ma maîtrise de cette discipline essentielle au développement logiciel moderne. Conscient de l'importance cruciale des outils d'intégration continue avancés pour optimiser et sécuriser le processus de développement et de déploiement des applications, <b>je m'engage à me former de manière plus approfondie</b> sur des plateformes telles que Jenkins, Travis CI, et d'autres solutions GitLab CI/CD.
                    <br/><br/>
                    Cette formation se fera au travers de contenus en ligne, tels que des tutoriels, des cours, et des webinaires dédiés, qui me permettront d'acquérir les connaissances et compétences nécessaires pour implémenter des pipelines CI/CD plus complexes et plus efficaces. Mon objectif est de pouvoir non seulement appliquer ces compétences accrues à mes futurs projets personnels, en maximisant leur efficacité et leur fiabilité, mais aussi de contribuer de manière plus significative à l'entreprise où je réalise mon alternance. En aidant à résoudre des problèmes liés à l'intégration et au déploiement continu, je souhaite apporter une valeur ajoutée à mon équipe et améliorer les processus de développement au sein de l'entreprise.
                    `,
                
            }, {
                element: "Réalisations liées",
                content: `YourNight, PREMIS DM`
            }
        ]
    }, {
        name: "Communication Digitale",
        icon: "img/skillsIcon/DigitalMarketing.png",
        percentageOfMastery: 55,
        category: "soft",
        explanation: [
            {
                element: "Définition",
                content: `
                La communication sur les réseaux sociaux est devenue une compétence essentielle dans le monde professionnel moderne, offrant une <b>plateforme dynamique pour le marketing</b>, l'engagement communautaire et le partage d'informations.
                <br/><br/>
                L'importance de la communication sur les réseaux sociaux dans le milieu professionnel est incontestable. Son adoption par des grandes marques, des startups innovantes et des individus souhaitant renforcer leur présence en ligne témoigne de son rôle crucial dans la construction et le maintien de relations avec une audience globale. Les réseaux sociaux permettent une diffusion rapide de l'information. Ils offrent une plateforme pour le storytelling, la promotion de produits et services, et l'engagement direct avec les clients.
                <br/><br/>
                Ma compétence en communication sur les réseaux sociaux s'appuie sur une compréhension approfondie des différentes plateformes (Facebook, Twitter, Instagram, etc.) et de leurs spécificités, permettant de choisir les stratégies les plus adaptées pour chaque canal. Cela inclut la création de contenu visuel et textuel qui engage la planification de campagnes publicitaires ciblées, l'analyse des données pour optimiser les stratégies de publication et l'interaction en temps réel avec la communauté pour renforcer la fidélité et l'engagement.
                `,
                
            }, {
                element: "Contexte d’utilisation",
                content: `
                    Ma première campagne de communication significative sur les réseaux sociaux s'est déroulée dans le cadre du projet <a>Mat’ Moi Ca</a>, un tournoi d'échecs en ligne organisé en partenariat avec Chess.com et l'UNICEF. Dans le cadre de ce projet, l'utilisation stratégique des plateformes <b>Facebook et Twitter</b> a été essentielle pour la réussite de notre campagne de communication. En tant que chef de ce projet, j’ai élaboré une stratégie en plusieurs phases que j’ai partagé à mes camarades par la suite, axée sur la création d'une communauté engagée, la promotion de l'événement, et l'augmentation de la visibilité de notre cause caritative auprès de l'UNICEF. Nous avons commencé par lancer une série de publications destinées à <b>construire une communauté autour des échecs</b> et autour de cette cause. Cela incluait des anecdotes historiques sur les échecs, des profils de joueurs célèbres, et des faits intéressants sur l'impact de l'UNICEF dans le monde. L'objectif était de <b>susciter l'intérêt et d'établir une connexion émotionnelle</b> avec notre audience, encourageant ainsi les interactions et le partage de nos contenus. <b>Les outils d'analytics</b> des différentes plateformes nous ont aidé à nous diriger dans la bonne direction en comprenant les posts qui faisaient réagir les utilisateurs en constatant le pourcentage d'interractions par rapport au nombre de vues. Une fois ceci réalisé, nous avons intensifié la promotion directe du tournoi en partageant des <b>informations détaillées sur les règles</b>, le format du tournoi Blitz, et les modalités de participation. Des publications régulières mettaient en avant les avantages de contribuer, non seulement pour la compétition mais aussi pour le soutien à une bonne action. J’ai personnellement réalisé des <b>visuels attrayants</b> réalisés avec Photoshop ou Premiere Pro (des logiciels avec lesquels j’étais familier) et des appels à l'action clairs pour encourager les inscriptions, en mettant l'accent sur l'aspect caritatif de l'événement. Pour chaque plateforme, nous avons <b>adapté notre contenu</b> pour répondre aux attentes spécifiques de leurs utilisateurs. Sur Facebook, nous avons privilégié des contenus détaillés et interactifs, tels que des vidéos, tandis que sur Twitter, nous avons opté pour des messages courts et percutants, accompagnés de hashtags stratégiques. Des hashtags comme #EchecsCaritatif ont été sélectionnés pour maximiser la visibilité et attirer une audience plus large intéressée par les échecs et les actions caritatives. Notre stratégie de communication sur les réseaux sociaux, méticuleusement élaborée et exécutée, a porté ses fruits, générant un certain engagement mais qui reste tout de même en dessous de nos attentes initiales. Grâce à nos efforts concertés et à une présence constante sur Facebook et Twitter, nous avons réussi à captiver l'intérêt de notre audience, <b>aboutissant à des dizaines d'interactions</b>, incluant des likes, des commentaires, et surtout, des partages. Notre plus gros succès a été particulièrement marqué par l'attention et le soutien de deux acteurs majeurs dans le monde des échecs. La Fédération Française des Échecs, une institution reconnue dans le milieu échiquéen français, a repartagé nos publications sur leur Twitter. Cette reconnaissance par une entité de cette stature a non seulement validé la pertinence de notre projet mais a aussi grandement amplifié notre visibilité auprès d'une audience passionnée et engagée. De même, notre partenariat avec Chess.com, la plateforme leader mondial des échecs en ligne, a été un vecteur crucial. Chess.com a activement promu notre tournoi sur leur page Facebook et a mis en avant l'événement sur la version française de leur site. Leur soutien a non seulement apporté une légitimité indéniable à notre initiative mais a aussi attiré l'attention d'une communauté mondiale d'adeptes des échecs.
                    <br/><br/>
                    Pour la campagne de communication de <a>YourNight</a>, mon application mobile dédiée à la gestion de soirées, j'ai adopté une stratégie fondamentalement différente, reflétant le changement de plateforme et de public cible. Reconnaissant que YourNight s'adressait principalement à une audience jeune, âgée de 18 à 30 ans, j'ai choisi de concentrer mes efforts sur <b>Instagram et TikTok</b>, des plateformes particulièrement populaires auprès de cette tranche d'âge. Sur Instagram, j'ai opté pour <b>une approche visuelle forte</b>, en publiant régulièrement des contenus engageants qui reflètent l'esprit et l'ambiance des soirées en respectant la charte graphique que j’avais définie pour l’application. Cela inclut des stories <b>mettant en avant les fonctionnalités de l'app</b>, comme la création collaborative de playlists ou la gestion simplifiée des dépenses, ainsi que des posts présentant des témoignages d'utilisateurs satisfaits. L'utilisation de hashtags pertinents et ciblés, a aidé à augmenter la visibilité de nos publications et à attirer des followers intéressés par l'univers des soirées et des rencontres entre amis. J’ai utilisé <b>Photoshop, Premiere Pro ainsi que Canva pour produire les posts</b>. Pour TikTok, j'ai misé sur la création de <b>contenus dynamiques et divertissants</b> qui exploitent les tendances actuelles et encouragent la participation de la communauté. En partageant des vidéos animées sur After Effects et Premiere Pro, le but est ici de réaliser de belles vidéos attrayantes qui montrent l’utilité de l’application et la rendant désirable auprès du public. L'objectif était de montrer que YourNight est réellement un outil pratique. J'ai suivi une stratégie similaire pour instagram en publiant les mêmes contenus que sur TikTok en plus d'y ajouter des posts sous forme d'images. Bien que cette campagne soit encore à ses débuts, <b>les premiers retours sont prometteurs</b> avec une première communauté d'une centaine de personnes. L'accent mis sur l'engagement direct avec l'audience, à travers des contenus qui résonnent avec leurs intérêts et leurs habitudes sur les réseaux sociaux, a permis d'établir une base solide pour la croissance de YourNight. A terme avec de potentiels revenus engendrés avec l’application il serait intéressant de mettre en place des partenariats avec des personnalités publiques ou de <b>payer des mises en avant des publications</b> via la plateforme Instagram afin d’améliorer considérablement la visibilité de mon contenu.
                    `,
                
            }, {
                element: "Regard critique",
                content: `
                Mon parcours dans la communication sur les réseaux sociaux, bien qu'encourageant, m'offre une perspective réaliste sur mes compétences dans ce domaine. Si les campagnes pour "Mat' moi ça" et YourNight m'ont permis de comprendre l'importance de cibler justement et d'engager activement avec mon audience, je reconnais que mon expertise est encore en développement et que je ne possède qu'<b>un niveau intermédiaire</b> pour le moment. La réussite mesurée de ces initiatives a révélé des failles dans l'efficacité de ma stratégie de contenu et de ma capacité à stimuler l'intérêt autour d'un projet. Elle a aussi souligné la nécessité d'une compréhension plus profonde des métriques de performance et d'une adaptation plus fine aux retours des utilisateurs. Cependant <b>j'ai rapidement saisi le genre de contenu qui fait réagir</b> je suis maintenant capable de mieux comprendre les mécanismes humains entrainant leurs réactions à la vu d’un contenu.
                <br/><br/>
                Je me suis également seulement limité à des plateformes populaires telles que Facebook, Twitter, Instagram et TikTok, sans explorer d'autres canaux de communication qui pourraient être pertinents pour des projets spécifiques. Par exemple, je n'ai pas encore exploré les possibilités offertes par LinkedIn pour le networking professionnel ou par YouTube pour la création de contenu vidéo. Cette limitation dans la diversité des plateformes utilisées pourrait potentiellement réduire l'impact de mes campagnes de communication et limiter la portée de mes projets.
                <br/><br/>
                <b>Je manque également d'expérience dans la création de contenu pour une portée mondiale</b> ou en tout cas plus vaste que locale ou nationale. La communication sur les réseaux sociaux à l'échelle internationale nécessite une compréhension approfondie des différences culturelles, des tendances mondiales et des attentes des audiences diverses. Mon expérience actuelle est principalement centrée sur des projets locaux ou nationaux, ce qui limite ma capacité à créer des campagnes de communication véritablement mondiales.
                <br/><br/>
                Je suis tout de même fier de ce que j'ai accompli, notamment d'avoir réussi à travailler avec des organisations de renom et d'avoir capté l'attention de communautés importantes. Néanmoins, je suis conscient que ma route vers la maîtrise de la communication sur les réseaux sociaux est encore longue. 
                `,
                
            }, {
                element: "Evolution",
                content: `
                    Bien que <b>la maîtrise de la communication sur les réseaux sociaux ne figure pas parmi mes priorités immédiates</b>, l'intérêt que je porte à cet aspect crucial de la promotion de projets personnels ou professionnels demeure significatif. À l'approche de la conclusion de projets personnels, notamment, je prévois de me pencher davantage sur ce domaine, envisageant de suivre des formations en ligne pour enrichir mes compétences.
                    <br/><br/>
                    Cette approche sélective me permettra de consacrer le temps et les ressources nécessaires à l'apprentissage de nouvelles stratégies de communication digitale au moment le plus opportun. Je suis convaincu que cette flexibilité dans mon parcours d'apprentissage, combinée à une curiosité naturelle pour les dernières tendances en matière de réseaux sociaux, me préparera efficacement à lancer et à promouvoir mes futurs projets avec succès.
                    <br/><br/>
                    De cette manière, je m'assure que ma compétence en communication sur les réseaux sociaux <b>continue de se développer sans en devenir un expert</b> ce qui me permettra tout de même d'exploiter le potentiel de ces plateformes pour atteindre et engager des audiences variées.
                    `,
                
            }, {
                element: "Réalisations liées",
                content: `YourNight, Mat’ Moi Ca`
            }
        ]
    }, {
        name: "Gestion de Budget",
        category: "soft",
        percentageOfMastery: 70,
        icon: "img/skillsIcon/Budget.png",
        explanation: [
            {
                element: "Définition",
                content: `
                La compétence en gestion de budget implique la <b>capacité à planifier, superviser, et contrôler les flux financiers</b> d'un projet ou d'une organisation, en veillant à l'optimisation des ressources et à la réalisation des objectifs dans le respect des contraintes budgétaires. Elle englobe la prévision des revenus et des dépenses, la mise en place de plans financiers détaillés, le suivi des performances par rapport au budget prévu, et l'ajustement stratégique des plans en fonction des analyses financières.
                <br/><br/>
                Cette compétence est <b>cruciale</b> dans tout contexte professionnel, car elle permet non seulement d'assurer la viabilité financière d'un projet, mais aussi de mettre en évidence les opportunités d'amélioration de l'efficacité et de la rentabilité. Une bonne gestion de budget requiert une compréhension approfondie des principes comptables, une capacité d'analyse et de synthèse des données financières, ainsi qu'une forte aptitude à la prise de décision basée sur des critères économiques.
                <br/><br/>
                Dans un environnement de travail de plus en plus axé sur les résultats et l'optimisation des coûts, savoir gérer un budget devient une compétence transversale, <b>applicable dans de nombreux domaines</b> tels que la gestion de projet, le marketing, l'ingénierie, et même dans des projets personnels nécessitant une allocation efficace des ressources. La gestion de budget implique également une communication claire et efficace avec toutes les parties prenantes, pour s'assurer que les objectifs financiers sont compris et respectés par tous.
                `,
                
            }, {
                element: "Contexte d’utilisation",
                content: `
                    Ma première expérience significative en gestion de budget a été pour le projet <a>Mat’ Moi Ca</a>, un tournoi d'échecs en ligne caritatif organisé dans le cadre d’un projet scolaire de formation humaine. Dans ce contexte, j'ai été confronté à la nécessité de gérer un budget avec l'objectif de maximiser les fonds collectés pour l'UNICEF tout en couvrant les coûts liés à l'organisation de l'événement. Pour ce faire, nous avons mon équipe et moi, établi un <b>budget prévisionnel</b>, identifiant toutes les sources potentielles de revenus et de dépenses. Cela incluait les frais d'inscription, les contributions volontaires, ainsi que les coûts liés à la promotion de l'événement, la technologie nécessaire pour sa réalisation en ligne, et la gestion des partenariats avec Chess.com et l'UNICEF. Nous avons également anticipé les besoins en termes de communication et de marketing pour atteindre un large public. L'une des clés de notre gestion de budget a été la mise en place d'un suivi rigoureux des dépenses, avec l'utilisation de <b>tableaux Excel détaillés</b> comme outil de gestion financière. Chaque dépense était soigneusement examinée et justifiée, garantissant que chaque euro dépensé contribuait directement à la réussite du projet. Nous avions également mis en place et tenu une <b>feuille-temps</b>. Cette feuille de temps nous a permis de suivre précisément les heures consacrées par chaque membre de l'équipe aux différentes tâches du projet, offrant ainsi une visibilité claire sur le coût humain associé à l'organisation de l'événement. L'utilisation de cette feuille de temps avait plusieurs objectifs. Premièrement, elle servait à garantir une allocation efficace des ressources humaines, en nous permettant d'identifier les activités qui nécessitaient plus de temps que prévu et d'ajuster nos plans en conséquence. Deuxièmement, elle a contribué à une gestion financière plus précise, en nous aidant à comprendre l'impact des coûts de main-d'œuvre sur le budget global du projet et à <b>identifier les opportunités d'optimisation</b>. Pour tenir cette feuille de temps à jour, nous avons adopté une approche collaborative où chaque membre de l'équipe était responsable de l'enregistrement de son temps passé sur le projet. Cela impliquait une discipline et une communication constantes au sein de l'équipe pour s'assurer que les données étaient à la fois précises et complètes. La feuille de temps était régulièrement révisée lors de nos réunions d'équipe, ce qui nous permettait de discuter des progrès réalisés par rapport au plan de projet et d'ajuster notre stratégie de travail si nécessaire. Cet outil s'est avéré être un élément crucial pour la gestion de notre budget, en nous offrant une base solide pour les décisions financières et en favorisant une transparence totale au sein de l'équipe concernant l'effort investi dans le projet même si la finalité n’était pas d’en obtenir un revenu étant donné le cadre scolaire du projet. Cependant malgré tous nos efforts de promotion et le soutien de partenaires de renom comme Chess.com et l'UNICEF, le nombre de participants inscrits est resté en deçà de nos prévisions. Cette surestimation des revenus a entraîné <b>un écart entre notre budget prévisionnel et le budget final</b>, nous obligeant à réévaluer nos plans et à ajuster nos dépenses en conséquence. Cet écart a été un moment de prise de conscience sur l'importance de baser les prévisions budgétaires sur des données et des hypothèses réalistes, plutôt que sur un optimisme non étayé. Nous avions tout de même bien anticipé tous les coûts initiaux sans erreurs, en limitant les imprévus à la suite d'une longue réflexion lors de la création du budget prévisionnel. Ma plus-value dans ce contexte a été en corrélation avec mon rôle de chef de projet en <b>garantissant que chaque décision budgétaire soutenait directement nos objectifs</b> et était justifiée en apportant une réelle plus-value, illustrant ainsi une gestion budgétaire à la fois stratégique et pragmatique.
                    <br/><br/>
                    Pour le projet <a>YourNight</a>, un projet personnel sous la forme d’une application mobile destinée à faciliter l'organisation de soirées entre amis, j'ai également assuré une gestion rigoureuse du budget, en établissant un <b>budget prévisionnel</b> et en suivant de près les dépenses. Compte tenu du budget limité, il était impératif de faire des choix stratégiques d'investissement pour maximiser l'efficacité de chaque euro dépensé. Pour cela, j'ai utilisé l'outil <b>Notion</b>, qui a servi de plateforme centralisée pour le suivi budgétaire et la prise de décision financière. Le budget prévisionnel a pris en compte tous les coûts initiaux et récurrents nécessaires au lancement et au suivi de l'application. Parmi les dépenses clés figuraient le prix d'entrée sur les stores d'applications, tels que Google Play et l'App Store d'Apple, ainsi que les coûts associés à l'hébergement du serveur sur un VPS (Virtual Private Server) après un benchmark des différentes offres disponibles correspondant à mon cas d’usage. Ces dépenses étaient essentielles pour assurer la disponibilité et la performance de l'application pour les utilisateurs finaux. En plus de ces coûts opérationnels, j'ai également <b>planifié les potentiels revenus générés</b> par les publicités intégrées dans l'application. Cette source de revenus était particulièrement importante pour le modèle économique de YourNight, car elle représentait ma principale voie de monétisation dans la phase initiale du projet. L'objectif était de <b>couvrir les coûts d'exploitation</b> grâce aux revenus publicitaires et, à terme, d'atteindre la rentabilité. L'utilisation de l’outil Notion pour la gestion de budget a offert plusieurs avantages, notamment une grande flexibilité dans la mise à jour des informations financières et la possibilité de visualiser rapidement l'état des dépenses par rapport au budget prévisionnel à l’aide de tableurs et graphiques. Cette approche m'a permis d'ajuster dynamiquement ma stratégie d'investissement en fonction de l'évolution du projet, en optimisant l'allocation des ressources financières pour assurer le succès et la croissance de l'application. À l'heure actuelle, la gestion financière de YourNight se trouve <b>en adéquation avec les prévisions initiales</b>, une réussite qui souligne ma capacité à ne pas reproduire les erreurs passées et à planifier et à ajuster les dépenses de manière relativement efficace. Cette gestion budgétaire rigoureuse et proactive a non seulement permis d’anticiper efficacement les coûts nécessaires au lancement et au fonctionnement de YourNight, mais a également posé les bases d'une croissance soutenue, en alignant les dépenses avec les objectifs à long terme du projet.
                    `,
                
            }, {
                element: "Regard critique",
                content: `
                Dans ma réflexion sur ma compétence en gestion de budget, je suis conscient que, bien que possédant une bonne base acquise rapidement lors du projet Mat' moi ça, mes prévisions tendent à s'écarter de la réalité, principalement en raison d'un manque d'expérience. J'en conclue que je possède seulement <b>un niveau intermédiaire</b>. Cette prise de conscience découle notamment des différences observées entre les budgets prévisionnels et les résultats finaux de mes projets, comme illustré par l'expérience avec le projet "Mat' moi ça". L'optimisme non calibré et les attentes irréalistes en sont souvent les causes principales, soulignant un besoin d'approfondir mes connaissances et compétences dans ce domaine.
                <br/><br/>
                Pour m'améliorer, plusieurs pistes se dessinent. Tout d'abord, il serait bénéfique de <b>me former davantage sur les techniques de prévision financière et d'analyse de risques</b>, afin de pouvoir établir des prévisions plus précises et réalistes. Cela inclut l'apprentissage des méthodologies de budgétisation basées sur les données historiques, ainsi que l'utilisation d'outils analytiques plus avancés pour soutenir ces analyses.
                <br/><br/>
                Ensuite, <b>développer une meilleure compréhension des facteurs externes</b> qui peuvent influencer le budget d'un projet, tels que les conditions d’un marché, le comportement des consommateurs ou encore les événements imprévus, serait crucial. Cela implique de rester constamment informé et de savoir adapter le budget en fonction de l'évolution du contexte.
                <br/><br/>
                Par ailleurs, l'expérience pratique, à travers la gestion de projets de plus grande envergure et diversifiés, contribuera indéniablement à affiner mes compétences en gestion de budget. L'exposition à différents types de projets et défis budgétaires me permettra d'acquérir une expérience précieuse, d'apprendre de mes erreurs et de mieux anticiper les pièges potentiels.
            `,
                
            }, {
                element: "Evolution",
                content: `
                    L'évolution de ma compétence enS gestion de budget s'inscrit dans une démarche pragmatique, où <b>l'approfondissement de cette compétence n'est pas ma priorité immédiate</b>, mais reste un objectif clair à moyen terme. Reconnaissant l'importance cruciale d'une gestion budgétaire efficace dans la réussite de tout projet, je suis déterminé à renforcer cette compétence au fur et à mesure de mes besoins, particulièrement à l'initiation et tout au long du suivi de mes projets personnels.
                    <br/><br/>
                    <b>L'apprentissage se fera de manière opportune</b>, en s'alignant avec le lancement de nouveaux projets qui requièrent une planification financière rigoureuse et un suivi budgétaire précis. Cette approche me permettra de mettre en pratique immédiatement les compétences acquises, en les adaptant aux spécificités et aux défis financiers de chaque projet.
                    <br/><br/>
                    Je prévois de me former à travers une combinaison de ressources en ligne, de tutoriels, et de formations spécifiques sur la gestion de budget et la finance de projet. Ces ressources m'aideront à acquérir une compréhension plus profonde des principes de la gestion financière et à développer des stratégies budgétaires plus robustes et réalistes.
                    <br/><br/>
                    En parallèle, l'expérience directe acquise à travers la gestion de mes propres projets personnels servira de terrain d'apprentissage idéal. <b>Chaque projet représentera une occasion unique de mettre à l'épreuve mes compétences en gestion de budget</b>, d'identifier les domaines nécessitant une amélioration et d'ajuster mes approches en conséquence. Cela inclut la pratique de la prévision, la gestion des dépenses, l'optimisation des ressources et l'adaptation aux changements et imprévus qui caractérisent souvent le parcours d'un projet.
                    <br/><br/>
                    Bien que la gestion de budget ne soit pas ma priorité absolue à l'instant présent, je suis conscient de son importance et je m'engage à intégrer progressivement cette compétence dans mon bagage professionnel.
                    `,
                
            }, {
                element: "Réalisations liées",
                content: `Mat’ Moi Ca, YourNight`
            }
        ]
    }, {
        name: "Gestion de Projet Agile et Scrum",
        category: "soft",
        percentageOfMastery: 90,
        icon: "img/skillsIcon/ProjectGesture.svg",
        explanation: [
            {
                element: "Définition",
                content: `
                La compétence en gestion de projet Agile Scrum est une approche méthodologique qui donne la priorité la <b>flexibilité, à la collaboration et à l'adaptabilité</b> tout au long du processus de développement de projets. Cette compétence se caractérise par l'organisation du travail en cycles courts et itératifs, appelés Sprints, qui permet une réévaluation régulière des objectifs et des résultats attendus en fonction des retours des parties prenantes et des changements de contexte. Elle implique la répartition des rôles clairs au sein de l'équipe, incluant le Scrum Master, le Product Owner, et l'équipe de développement, chacun exerçant des responsabilités spécifiques pour assurer le bon déroulement et l'efficacité du projet.
                <br/><br/>
                La maîtrise de cette compétence permet de <b>gérer efficacement les projets</b> en assurant une communication fluide et continue entre tous les membres de l'équipe et les parties prenantes, favorisant ainsi une meilleure réactivité aux changements et une optimisation des temps de livraison. Elle souligne également l'importance de la planification flexible, de l'estimation des tâches, de la gestion des priorités et du suivi des progrès grâce à des outils comme les tableaux Scrum et les réunions quotidiennes (Daily Scrum). En outre, la compétence en gestion de projet Agile Scrum met en évidence la capacité à créer un environnement de travail collaboratif et transparent, où l'amélioration continue et l'apprentissage mutuel sont encouragés, alignant ainsi étroitement les objectifs du projet avec les besoins du client.
                `,
                
            }, {
                element: "Contexte d’utilisation",
                content: `
                    Dans le cadre de mes études, j'ai eu l'opportunité d'appliquer la gestion de projet Agile Scrum à travers des projets informatiques scolaires. Parmi les projets marquants où j'ai appliqué la méthode Agile Scrum, le développement d'<a>Hypotech</a>, une application mobile Android visant à fluidifier les démarches de ventes immobilières, occupe une place significative. Ce projet, réalisé en collaboration avec un <b>Product Owner</b> externe, a été structuré autour de <b>sprints de deux semaines</b>, chacun conclu par une <b>livraison et une réunion de revue</b> avec le Product Owner. À la fin de chaque sprint, nous organisions une réunion de revue pour présenter les User Story développées, recueillir les retours et <b>ajuster les priorités</b> pour le sprint suivant. Cette approche nous a aidés à mieux comprendre les attentes du Product Owner, à établir en priorité les tâches et à adapter notre travail en fonction des feedbacks reçus, assurant ainsi une <b>évolution constante du produit</b> qui répondait aux besoins réels du projet. <b>La réunion kick-off</b> a joué un rôle crucial dans la définition des User Stories qui allaient orienter le développement de l'application. Durant cette réunion initiale, nous avons collaboré avec le Product Owner pour identifier, pour discuter et donner la priorité aux fonctionnalités clés du produit, ce qui a permis de transformer ses besoins et ses attentes en User Stories concrètes. Nous étions cependant conscients que le projet évoluerait en fonction des feedbacks et des contraintes rencontrées. Après chaque sprint et livraison, nous procédions à des ajustements des User Stories en fonction des retours du Product Owner et de <b>notre propre évaluation du travail réalisé</b>. Cela signifiait que certaines User Stories pouvaient être repriorisées, modifiées, ou même ajoutées pour refléter l'évolution des exigences et des objectifs du projet. La répartition des User Stories parmi les membres de l'équipe à chaque sprint était une étape cruciale pour le succès de notre méthode Agile Scrum. Après avoir défini et ajusté les User Stories avec le Product Owner, notre prochain défi était de s'assurer que chaque membre de l'équipe avait une charge de travail équilibrée et adaptée à ses compétences et disponibilités. Lors de nos séances de planification de sprint, nous abordions chaque User Story en détail, discutant des tâches spécifiques qu'elles impliquaient et des compétences nécessaires pour les mener à bien. Chaque membre de l'équipe avait alors l'opportunité de <b>choisir les User Stories</b> sur lesquelles il souhaitait travailler. La collaboration et la communication étaient essentielles durant ces séances. Au sein du projet, les <b>Daily Meetings</b> constituaient également un pilier de notre méthode de gestion de projet Agile Scrum. Chaque jour, à une heure fixe, l'ensemble de l'équipe se réunissait pour une courte réunion, où chaque membre <b>partageait ses avancées, ses planifications pour la journée et les obstacles rencontrés</b>. Ces réunions permettaient à chacun de rester informé de l'évolution globale du projet. Ensuite, elles offraient une plateforme pour que les membres de l'équipe expriment leurs difficultés et <b>sollicitent de l'aide</b>. Malgré tous nos efforts et notre discipline dans l’utilisation de la méthode scrum, un mois avant la livraison finale, le Product Owner a modifié considérablement ses attentes en termes de design et d'expérience utilisateur. Alors que l'approche initiale était axée sur un design sobre et simple, il a souhaité intégrer des éléments plus extravagants, tels que l'ajout de GIFs sur tous les écrans. Il était impossible pour nous de fournir une application similaire à ses nouvelles envies lors de la livraison finale étant donné qu’il nous restait des User Story planifiées d’ici là. Ma plus-value s'est manifestée par ma capacité à veiller à ce que les membres de l'équipe respectent les principes de cette méthode. Ma bonne compréhension de la méthode Scrum a joué un rôle crucial, surtout lorsque j'ai <b>endossé le rôle de Scrum Master</b> lors d’un autre projet scolaire. Dans cette fonction, j'ai pu orienter efficacement l'équipe vers le respect des cycles de sprint, la planification des tâches et la mise en œuvre des feedbacks, en maintenant une communication fluide et constructive avec le <b>Product Owner qui a dressé des éloges</b> envers ma capacité à diriger les réunions, à maintenir une communication efficace et à contribuer proactivement à la réalisation du projet.
                    <br/><br/>
                    Avant mon arrivée en stage dans l’entreprise Holis Consulting, celle-ci ne suivait pas de méthode de gestion de projet structurée, ce qui pouvait entraîner des inefficacités et des difficultés dans le suivi des progrès. Convaincu des avantages de la méthode Agile Scrum, <b>j'ai proposé son adoption</b> pour le projet <a>ISIS</a>, une application web développée pour répondre aux besoins internes de l'entreprise. La mise en œuvre de Scrum a commencé par l'organisation de <b>sprints bi-hebdomadaires</b>, au cours desquels nous présentions les avancées du projet au Product Owner interne. Cette approche itérative a non seulement permis un <b>meilleur suivi des développements</b> mais a également facilité l'adaptation rapide aux changements, en veillant à ce que le projet reste aligné sur les objectifs commerciaux de l'entreprise. Les Daily Meetings, ou réunions quotidiennes, ont été adoptées pour renforcer la communication au sein de l'équipe, permettant à chacun d'exprimer les progrès réalisés et les obstacles rencontrés. Cette pratique a encouragé <b>une atmosphère de transparence et de collaboration</b>, essentielle au succès d'un projet Agile. L'introduction de la gestion par User Stories a également permis de mieux définir les attentes et les besoins, en focalisant le développement sur la création de valeur pour l'utilisateur final. Cela a amélioré la qualité des livrables et la satisfaction du Product Owner, tout en optimisant le processus de développement. L'adoption de la méthode Scrum au sein de l'entreprise, à l'initiative de ma participation au projet ISIS, a non seulement eu un impact positif sur ce projet spécifique mais a également <b>laissé une empreinte durable sur les pratiques de gestion de projet de l'entreprise</b>.
                    `,
                
            }, {
                element: "Regard critique",
                content: `
                Ma maîtrise de la gestion de projet Agile Scrum, acquise à travers divers projets académiques et professionnels, me confère une <b>solide compréhension des principes et pratiques fondamentaux</b> de cette méthodologie même si ce n'est pas celle que j'ai maitrisé le plus rapidement parmi mes compétences notamment en ayant du mal à saisir l'intérêt de certains aspects tels que les Users Story à mes débuts. 
                <br/><br/>
                La gestion de projet Agile Scrum <b>ne réprésente plus aujourd'hui une place aussi importante</b> qu'il y a deux ans dans ma vie professionnelle. Les projets sur lesquels je travaille en entreprise ne mettent pas en place cette méthode de gestion de projet contrairement à mes derniers projets académiques où elle était systématiquement appliquée.
                <br/><br/>
                Je reconnais que <b>mon expérience, bien qu'appréciable, reste limitée</b> en termes de diversité et de complexité des environnements de travail dans lesquels j'ai pu l'appliquer. La plupart de mes projets se sont déroulés dans des contextes où l'équipe était relativement restreinte et la portée du projet, bien que significative, ne reflétait pas la complexité que l'on peut rencontrer dans de grands projets d'entreprise impliquant de nombreux collaborateurs et départements.
                <br/><br/>
                Cette prise de conscience souligne un domaine dans lequel je vois un potentiel d'amélioration et d'apprentissage. Bien que confiant dans ma capacité à naviguer et à contribuer efficacement à des projets gérés selon les principes Scrum, <b>je suis désireux d'élargir mon expérience en participant à des projets plus vastes</b> et plus diversifiés. Cela comprend le travail au sein d'équipes plus grandes, la gestion de parties prenantes multiples avec des intérêts variés, et l'adaptation de la méthodologie Agile à des contextes où les défis de communication et de coordination sont plus prononcés.
                `,
                
            }, {
                element: "Evolution",
                content: `
                    Mon parcours avec la gestion de projet Agile Scrum jusqu'à présent m'a <b>convaincu de son efficacité</b> et de sa valeur dans la coordination et la réalisation de projets en groupe. Fort de cette expérience, je suis déterminé à continuer d'utiliser cette méthodologie pour mes futurs projets collaboratifs. La structure, la flexibilité et la dynamique d'amélioration continue qu'offre Scrum en font, à mon sens, l'approche de gestion de projet la plus adaptée pour naviguer dans les complexités du développement de logiciels et d'applications.
                    <br/><br/>
                    Malgré <b>le succès rencontré dans la plupart de mes projets</b>, une réalisation en particulier n'a pas entièrement satisfait les attentes du Product Owner lors de la livraison finale. Cette expérience, loin d'être un échec, m'a offert des leçons précieuses sur l'importance de la communication, de l'alignement des visions et de l'adaptabilité dans la gestion de projet. Elle souligne également la nécessité d'une compréhension profonde des besoins du client et de la capacité à intégrer les retours et les ajustements de manière agile.
                    <br/><br/>
                    En regardant vers l'avenir, je souhaite non seulement <b>appliquer Scrum dans mes projets de groupe</b> mais aussi approfondir ma compréhension et ma maîtrise de cette méthodologie. Cela inclut une exploration plus poussée des différents rôles au sein d'une équipe Scrum, une meilleure utilisation des outils et techniques pour maximiser l'efficacité des sprints, et une réflexion constante sur la manière dont les principes Agile peuvent être adaptés pour répondre au mieux aux défis uniques de chaque projet.
                    `,
                
            }, {
                element: "Réalisations liées",
                content: `Hypotech, ISIS`
            }
        ]
    }, {
        name: "Gestion du Temps et Organisation",
        category: "soft",
        percentageOfMastery: 95,
        icon: "img/skillsIcon/TimeManagement.svg",
        explanation: [
            {
                element: "Définition",
                content: `
                La compétence de gestion du temps et d'organisation dans le milieu professionnel fait référence à la capacité d'<b>optimiser ses journées de travail</b> pour atteindre les objectifs fixés tout en maintenant un équilibre sain entre vie professionnelle et personnelle. Cela inclut la planification efficace des tâches, la priorisation des activités en fonction de leur importance et de leur urgence, ainsi que l'adaptation flexible aux imprévus tout en respectant les délais. Une bonne gestion du temps permet non seulement d'améliorer la productivité et l'efficacité au travail, mais aussi de réduire le stress en évitant la surcharge et les situations de dernier moment.
                <br/><br/>
                Dans le contexte professionnel actuel, où les projets sont souvent multidimensionnels et les délais serrés, maîtriser cette compétence devient crucial. Cela implique <b>l'utilisation d'outils et de techniques variés</b>, allant des agendas électroniques et applications de planification à des méthodes plus traditionnelles comme les listes de tâches et le blocage de temps. La gestion du temps et de l'organisation va au-delà de la simple planification des activités ; elle englobe également la délégation efficace, la réduction des interruptions, et la capacité à dire non aux demandes non prioritaires.
                <br/><br/>
                Dans un environnement de travail de plus en plus agile et collaboratif, savoir s'organiser et gérer son temps n'est pas seulement bénéfique à l'individu, mais aussi à l'équipe et à l'organisation dans son ensemble. Cela permet d'<b>aligner les efforts individuels avec les objectifs globaux de l'entreprise</b>, de respecter les engagements pris envers les clients et les collègues, et de contribuer à une culture de travail respectueuse du bien-être de chacun.
                `,
                
            }, {
                element: "Contexte d’utilisation",
                content: `
                    Dans le cadre de mes études, la compétence en emploi du temps et en organisation s'est révélée être
                    <b>un pilier central de mon succès</b> dans la réalisation de projets scolaires. Dès le début, j'ai compris
                    l'importance de distinguer les priorités et de planifier efficacement mon agenda pour répondre aux
                    exigences variées et souvent simultanées de multiples projets. J'ai rapidement adopté <b>des outils de
                    gestion du temps</b>, comme les calendriers numériques et les listes de tâches avec notamment Notion, qui
                    m’a aidé à visualiser mes engagements et à équilibrer mes responsabilités académiques avec mes
                    activités personnelles. L'efficacité de ma méthode de travail n'a pas tardé à être <b>reconnue par mes
                    professeurs</b>, qui ont souvent salué ma capacité à livrer des travaux de qualité dans les délais impartis,
                    tout en restant disponible pour participer activement aux projets de groupe.
                <br/><br/>
                    Mon passage dans le monde professionnel a marqué une évolution significative dans ma maîtrise de la
                    gestion du temps et de l'organisation. En entreprise, j'ai été confronté à des défis plus complexes et à
                    des attentes plus élevées en termes de productivité et d'efficacité. C'est dans ce contexte que j'ai affiné
                    ma capacité à me <b>définir des objectifs quotidiens</b>, en les alignant avec les priorités de l'entreprise et les
                    exigences des projets sur lesquels je travaillais. J'ai rapidement compris que réussir dans un
                    environnement professionnel et souvent imprévisible nécessitait non seulement une planification
                    rigoureuse, mais aussi une <b>adaptabilité constante</b>. Pour répondre efficacement à ces besoins, j'ai
                    commencé à utiliser des méthodes d'organisation plus avancées, telles que la technique <b>Pomodoro</b> pour
                    gérer mon temps de travail et les pauses, ainsi que des outils de gestion de projet en ligne tels que Jira
                    ou Trello en collaboration avec mes collègues pour suivre l'avancement des tâches et collaborer plus
                    efficacement.
                    Définir des objectifs quotidiens m'a permis de rester concentré et motivé, en me donnant des cibles
                    claires à atteindre chaque jour. Cette méthode a non seulement amélioré ma productivité, mais elle a
                    également renforcé ma capacité à donner des priorités aux tâches et à ajuster mon emploi du temps en
                    fonction des urgences et des changements de dernière minute. En mettant en œuvre ces stratégies, j'ai
                    pu non seulement répondre aux attentes de mes supérieurs, <b>mais souvent les dépasser</b>, en livrant des
                    résultats de qualité dans des délais serrés.
                <br/><br/>
                    En plus de mes responsabilités professionnelles, le développement de mon application <a>YourNight</a>
                    pendant mon temps libre a mis à l'épreuve mon planning et l'organisation à un autre niveau. Ce projet
                    personnel, mené en parallèle de mon activité professionnelle, nécessitait une discipline et une
                    <b>planification minutieuses</b> pour équilibrer efficacement le travail sur l'application, mes obligations
                    professionnelles, et mon temps personnel. J'ai dû faire des choix délibérés sur la manière de répartir
                    mon temps, en veillant à consacrer des périodes suffisantes au développement de YourNight sans
                    empiéter sur les moments passés avec ma famille et mes amis. Cela impliquait souvent de travailler sur
                    l'application le soir ou pendant les week-ends, tout en m'efforçant de garder <b>un équilibre sain</b> pour ne
                    pas m'isoler. Malgré ces efforts, il y a eu des moments où la passion pour mon projet a emporté sur le
                    reste, conduisant à des périodes d'isolement temporaire. Cette expérience a renforcé ma capacité à
                    jongler entre différentes priorités et à faire des sacrifices calculés pour atteindre mes objectifs. Elle a
                    également souligné l'importance de maintenir un équilibre entre la vie professionnelle et personnelle, une
                    leçon précieuse qui a influencé ma manière de gérer mon temps et mes projets par la suite. La
                    réalisation de YourNight, tout en maintenant des relations saines et en remplissant mes responsabilités
                    professionnelles, a été une période intense d'apprentissage et de croissance dans ma compétence en
                    gestion du temps et organisation.                    
                `,
                
            }, {
                element: "Regard critique",
                content: `
                    Ma compétence en gestion du temps et organisation est quelque chose que <b>je maîtrise bien</b>, ayant
                    développé et affiné cette aptitude au fil des années à travers divers projets scolaires et professionnels.
                    J'ai appris à <b>distinguer les priorités</b>, à planifier efficacement mon emploi du temps, et à m'adapter aux
                    imprévus tout en conservant un équilibre entre ma vie professionnelle et vie personnelle. Cependant, je
                    suis conscient que la gestion du temps est une compétence qui peut toujours être améliorée, surtout en
                    ce qui concerne <b>la prévention de l'isolement</b> lors de périodes de travail intense sur des projets
                    passionnants comme YourNight.
                <br/><br/>
                    Bien que je considère avoir une bonne maîtrise dans ce domaine, je reconnais l'importance de continuer
                    à travailler sur ma capacité à maintenir un équilibre sain, à déléguer des tâches lorsque nécessaire, et à
                    me donner des pauses pour éviter l'épuisement. Cette auto-évaluation critique me motive à chercher des
                    moyens d'optimiser encore plus mon organisation et ma gestion du temps, en intégrant peut-être de
                    nouveaux outils ou méthodologies qui pourraient améliorer mon efficacité et ma productivité.
                `,
                
            }, {
                element: "Evolution",
                content: `
                    Mon approche de la gestion du temps et de l'organisation continue d'évoluer, à mesure que je prends en
                    charge des projets plus complexes et diversifiés, tant sur le plan professionnel que personnel. Je prévois
                    <b>d'intégrer des méthodologies et des outils supplémentaires</b> pour affiner ma capacité à gérer efficacement
                    mon temps, comme l'adoption de techniques avancées de planification et l'utilisation de logiciels de
                    gestion de projets plus sophistiqués. Mon objectif est de parvenir à un équilibre optimal entre productivité
                    et bien-être personnel, en veillant à allouer du temps pour le repos et la détente afin d'éviter le
                    surmenage.
                <br/><br/>
                    Je suis également ouvert à apprendre de nouvelles stratégies de gestion du temps auprès de mes
                    collègues et mentors, et <b>je m'engage à rester flexible et adaptable</b> face aux exigences changeantes de
                    mon environnement de travail. En reconnaissant l'importance de cette compétence pour le succès à long
                    terme, je suis déterminé à continuer son développement pour devenir encore plus efficace dans la
                    gestion de mes projets et responsabilités.            
                `,
                
            }, {
                element: "Réalisations liées",
                content: `YourNight, PREMIS DM, ISIS, Mat’ Moi Ca, Hypotech`
            }
        ]
    },
]