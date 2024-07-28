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
                React (également connu sous le nom de React.js ou ReactJS) est une <b>bibliothèque JavaScript</b> FrontEnd permettant de créer des interfaces utilisateur. Elle est maintenue par Facebook et une communauté de développeurs individuels et d'entreprises.
                <br/><br/>
                L'actualité récente dans les médias montre <b>l'adoption croissante</b> de React par les entreprises et les startups ce qui traduit sa popularité et sa pertinence dans l'écosystème du développement web.
                `,

            }, {
                element: "Contexte d’utilisation",
                content: `
                    Lorsque j’ai travaillé sur <a>PREMIS DM</a> qui est une application web ayant pour but de gérer de grands volumes de données liés au domaine de l’industrie afin de les consulter, de les analyser et les visualiser sous forme de graphiques. J’ai eu comme première tâche de <b>concevoir l’architecture frontend</b>. J'ai réalisé des composants réutilisables pour éviter la redondance du code et j'ai développé des fonctionnalités classiques au sein d’applications web (Comme par exemple un <b>Dashboard d’analyse de données</b> sous forme de graphiques ou bien un système de routes protégées par rôles utilisateurs) en totale autonomie. Le projet nécessitait d’énormes volumes de données pour pouvoir fonctionner ce qui fait que j’ai dû mettre en place des solutions moins communes que les implémentations classiques de React. Après m’être renseigné sur le sujet j’ai proposé à mon maître d’apprentissage <b>l’implémentation de Workers</b> qu’il a tout de suite acquiescée. Cette implémentation a été une solution à un problème de performance critique que nous avons rencontré lors du développement de Premis. En travaillant sur ce projet au sein de Holis Consulting, le traitement et l'analyse de données en masse, extraites de fichiers Excel, étaient une étape centrale pour le fonctionnement de l'application. Sauf que lors de tests avec des volumes de données importants nous avons été confrontés à un obstacle majeur : Le front-end de l'application voyait sa mémoire rapidement saturé et se retrouvait en état de crash pour des raisons de surcharge. J'ai donc délégué le lourd traitement des données des fichiers Excel à des Workers ce qui a <b>résolu le problème de surcharge de mémoire</b> mais aussi amélioré les performances globales de l'application. L’application était donc à ce moment-là fonctionnelle et performante pour le volume de données de l'époque.
                    <br/><br/>
                    Toujours sur <a>PREMIS DM</a> nous avons eu plus tard l’injection de données supplémentaires qui a bousculé la fluidité de l'application. Pour contrer ce problème j'ai mis en place d’un <b>environnement de test</b>, j'ai aussi utilisé de la virtualisation des listes pour gérer l'affichage de grands volumes de données et l'implémentation du <b>lazy loading</b> pour charger les composants uniquement quand ils sont nécessaires pour l'utilisateur. J'ai aussi optimisé les rendus en utilisant React.memo pour éviter les re-rendus inutiles et en mettant en place le debouncing sur les événements de saisie pour réduire les calculs inutiles. Il y aussi eu l'adoption de hooks personnalisés qui m'a permis de réutiliser la logique d'état complexe à travers différents composants ce qui a grandement contribué à de meilleures performances. Aujourd’hui <b>l’application web est globalement solide et performante</b>. Elle possède une marge qui permet l’acceptation de données supplémentaires sans problème.
                    <br/><br/>
                    Mon projet personnel <a>YourNight</a> est une application mobile qui a pour but de faciliter l’organisation de soirées. Il m'a donné l'occasion d'approfondir ma maîtrise de React à travers l'utilisation de React Native. J'ai développé l'interface utilisateur complète de l'application en utilisant React Native, ce qui comprenait la <b>conception des divers écrans de l’application</b> et des composants réutilisables, la gestion de l'état de l'application, l'intégration avec des <b>APIs externes</b> pour la création de playlist musicales (API de Spotify), et la mise en œuvre d'un système de <b>chat en temps réel</b> pour les utilisateurs. Mon but principal était d'avoir une expérience utilisateur fluide et réactive ce qui fait que j'ai utilisé le contexte et les hooks de React Native pour gérer l'état global de l'application. L'une de mes plus grandes réussites techniques du projet, ça a été l'optimisation de l'application sur les téléphones mobiles. J'ai mis en place le <b>lazy loading</b> pour les images et les données ce qui a permis en autre de réduire le temps de chargement initial de l'application et ce qui a amélioré l'expérience utilisateur sur les appareils avec des connexions internet lentes (ce qui peut arriver lorsque l'on est en ville par exemple). Aujourd'hui, YourNight <b>fonctionne extrêmement bien</b> pour le nombre actuel d'utilisateurs actifs. Les retours des utilisateurs sont positifs. Ils mettent en avant la facilité d'utilisation et la réactivité de l'application.
                    `,

            }, {
                element: "Regard critique",
                content: `
                Ma maîtrise de React est actuellement à un <b>niveau intermédiaire avancé</b>. Je reconnais qu'il existe bien sûr une marge de progression surtout dans l'optimisation des performances des applications. J'ai tout de même rapidement pris en main la compétence ce qui s'est vu lors de ma rapide adaptation au projet ISIS chez Holis Consulting. En moins de deux semaines,j'étais déjà capable de contribuer au code en résolvant des bugs et en proposant des améliorations fonctionnelles. Ma <b>capacité d'apprentissage et d'adaptation rapide a été reconnue par mon entreprise</b> qui a salué ma compréhension rapide des différents aspects du projet. Cependant je reconnais le besoin de me perfectionner notamment dans les aspects avancés tels que le state management ou même le rendering conditionnel pour atteindre un niveau d'expertise.
                `,

            }, {
                element: "Evolution",
                content: `
                    React occupe une <b>place centrale dans mon profil</b> et je suis déterminé à développer mes compétences dans cette technologie. Elle est extrêmement présente dans mes responsabilités actuelles, c'est pour cette raison que je vais continuer à suivre son évolution.
                    <br/><br/>
                    Si je devais me donner un conseil ce serait de continuer à me pousser hors de ma zone de confort avec React en réalisant de nouveaux projets personnels encore plus techniques. Je vais également continuer une veille technologique pour que ma compétence reste d'actualité dans cet environnement qui évolue rapidement.
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
                Docker est une <b>plateforme de conteneurisation</b> qui automatise le déploiement d'applications au sein de conteneurs logiciels ce qui permet une plus grande portabilité. Elle est largement reconnue pour simplifier le processus de développement en délivrant des environnements de développement ou de production facilement. Docker est soutenu par une grande communauté de développeurs et d'entreprises et sa popularité ne cesse d'augmenter dans le milieu professionnel.
                <br/><br/>
                Dans les actualités récentes Docker est souvent mentionné pour son <b>adoption croissante</b> par les grandes entreprises et les startups.
                `,

            }, {
                element: "Contexte d’utilisation",
                content: `
                    Pour mon premier projet en entreprise qui a été <a>ISIS</a> (une application web visant l’automatisation de certaines tâches chronophages pour les ingénieurs salariés de l’entreprise), j’ai utilisé Docker comme un <b>environnement de développement</b>. Ma première installation de Docker pour cette application a été le résultat d'une journée entière de résolution de bugs. La mise en place de la technologie était récente dans l'entreprise et il y avait certains problèmes comme la non-initialisation des données essentielles dans la base de données. Avec mes compétences de l'époque j'ai pu modifier les fichiers docker-compose.yml et Dockerfile pour permettre l'initialisation des données dans la base de données. J'ai ajouté <b>des scripts d'initialisation et la configuration des volumes</b> pour sauvegarder les données. Un autre problème que j'ai eu concernait la connectivité réseau entre les conteneurs ce qui empêchait l'application de communiquer avec la base de données. J'ai encore une fois modifié le fichier docker-compose.yml pour <b>définir un réseau personnalisé</b> et assurer que tous les conteneurs (application et base de données) soient reliés à ce réseau. J'ai pour ce faire utilisé la section networks de Docker Compose pour en créer un et le rensigner dans la configuration de chaque service concerné. Pour faciliter la communication entre les conteneurs j'ai également <b>défini des noms de domaine internes</b> pour chaque conteneur dans le réseau Docker en utilisant "hostname" dans le docker-compose.yml. Le but ici c'était de simplifier la résolution des noms. Au final, après une journée de recherche j'ai pu surmonter les différents obstacles. Ça m'a permis dès mon premier jour de corriger des problèmes pour toutes les futures installations du Docker de ce projet.
                    <br/><br/>
                    Lorsque j’ai travaillé sur mon projet personnel <a>YourNight</a> qui est une application mobile destinée à fluidifier l’organisation de soirées, j'ai voulu à un moment <b>héberger</b> le serveur et la base de données de l’application <b>sur un VPS via Docker</b>. Il faut savoir que cette application fonctionnait sur trois technologies : React Native pour le frontend, ExpressJS pour le backend et MongoDB comme système de gestion de base de données. J'ai donc mis en place <b>Docker Compose</b>. J'ai aussi créé un fichier <b>docker-compose.yml</b> pour faire fonctionner ensemble ces trois services ensemble et pour qu'ils intéragissent entre eux. Dans ce fichier j'ai défini les services, les volumes et les réseaux, en faisant attention à ce qu'ils soient instanciés dans le bon ordre grâce aux “depends_on”. Je suis ensuite passé à l'aspect le plus important de ce projet qui a été le déploiement de l'application que j’ai effectué moi-même sur un serveur privé virtuel (VPS) Linux. Docker était donc mon élément pilier dans ce processus en me permettant de déployer facilement l'application sur le serveur. L'avantage de Docker était le fait que l'environnement de production sur le VPS était identique à l'environnement de développement sur mon ordinateur ce qui m'a permis d'éviter les problèmes courants liés aux différents environnements. C'est après <b>une soirée d’implémentation</b> que j’ai pu me servir de mon serveur et base de données hébergé sur le VPS pour faire des premiers tests de l’application avec mes amis.
                    `,

            }, {
                element: "Regard critique",
                content: `
                En prenant du recul sur mes compétences en Docker je constate que ma maîtrise de cette technologie reste encore limitée. Je la jugerai comme étant <b>intermédiare avancé</b>. Mon expérience actuelle avec Docker se concentre surtout sur des <b>implémentations assez basiques de conteneurisation</b> et ne me permet pas encore des réaliser des pratiques avancées via Docker.
                <br/><br/>
                Docker représente tout de même une <b>place importante dans mon profil d'expert</b> puisque la majorité de mes projets utilisent cette technologie.
                <br/><br/>
                Aujourd'hui je sais qu'il existe des possibilités d'optimisation plus avancées avec des outils comme <b>Kubernetes, que je ne maîtrise pas encore</b>. Mon expérience actuelle ne m'a pas encore permis de m'avanturer dans ce genre d'implémentation plus complexe alors que ce sont des aspects qui m'intéressent et qui me permettraient d'en apprendre plus au global.
                `,

            }, {
                element: "Evolution",
                content: `
                    Mon parcours avec Docker a généré en moi un <b>intérêt pour les technologies de conteneurisation</b>. La facilité d'utilisation et l'efficacité de Docker m'ont surpris et m'ont encouragé à développer cette technologie.
                    <br/><br/>
                    Mon ambition est d' <b>approfondir ma compréhension de Docker</b> mais aussi de m'intéresser à d'autres aspects comme Kubernetes.
                    <br/><br/>
                    Je prévois de commencer <b>l'apprentissage de Kubernetes</b> par des tutoriels et en arrivant vers l’implémentation dans mes futurs projets personnels. Mon objectif est de développer une certaine expérience en Kubernetes qui complèterait ma maîtrise de Docker.
                    <br/><br/>
                    En conclusion, Docker a déjà transformé de manière d'aborder le développement d'une solution et avec l'ajout de Kubernetes à mes compétences je m'attends à réaliser des applications toujours plus scalables et sécurisées.
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
                ExpressJS est un <b>framework web pour Node.js</b>. Il permet de réaliser des applications web et des API. Avec son système de middleware et de routage, ExpressJS permet de faciliter la création d'applications web scalables avec un ensemble de fonctionnalités dédiées au développement backend. Il est apprécié pour sa facilité d'utilisation et sa capacité à s'intégrer avec d'autres technologies.
                <br/><br/>
                La popularité d'ExpressJS <b>continue de croître</b> dans le milieu professionnel avec ce que l'on peut voir dans les médias spécialisés. Son adoption par de grandes entreprises ainsi que par des startups montre sa place importante dans l'écosystème du développement logiciel.
                `,

            }, {
                element: "Contexte d’utilisation",
                content: `
                    Pour mon premier projet en entreprise qui a été <a>ISIS</a> (une application web visant l’automatisation de certaines tâches chronophages pour les ingénieurs salariés de l’entreprise), mon travail avec ExpressJS s'est surtout basé sur le développement de fonctionnalités assez classiques. J'ai intégré des modèles de données en utilisant <b>l'ORM Sequelize</b>. J’ai également créé des <b>contrôleurs et des routes</b> pour gérer les requêtes entrantes. Il y avait des routes pour <b>l'authentification</b> des utilisateurs, la manipulation des données, et la réponse aux différentes requêtes liées à l'application. La <b>mise en œuvre de middleware</b> pour la gestion des erreurs et la validation des requêtes a également représenté une grande partie de mon travail dans un but de renforcer la sécurité et la fiabilité de l'application (notamment pour vérifier si sur des requêtes réservées aux administrateurs, l’utilisateur faisant l’appel possédait bien ce statut). J’ai pu réaliser une api comportant toutes les fonctionnalités au bout de deux mois. Celle-ci avait quelques problèmes qui ont été résolus par moi-même les jours qui ont suivi la livraison finale. Mes supérieurs qui étaient les clients du projet étaient <b>satisfaits du résultat</b>.
                    <br/><br/>
                    Sur un autre projet professionnel nommé <a>PREMIS DM</a> qui est une application web ayant pour but pour de gérer de grands volumes de données liées au domaine de l’industrie afin de les consulter, de les analyser et de les visualiser sous forme de graphiques, j’ai du <b>imaginer et développer l’architecture backend complète</b>. Pour ce faire je me suis inspiré de l’architecture d’ISIS qui avait des similarités avec le fonctionnement de PREMIS DM. Mais je devais anticiper certains détails vu que l’application allait fonctionner avec d’énormes volumes de données. Une fois que la première version fonctionnelle était mise en place, j’ai décidé d'implémenter une solution de <b>stockage en cache</b> pour améliorer les performances globales de la gestion des données (je devais initialement utiliser le service Redis mais après un benchmark le cache nodeJS de base suffisait). J’ai également mis en place un <b>système de pagination des résultats</b>. Cela a permis de limiter le nombre de données chargées et affichées simultanément pour réduire la charge sur le navigateur. J'ai finalement mis en place d'un <b>système de files d'attente</b> pour les tâches lourdes. Notamment pour certaines opérations comme l’insertion des massifs volumes de données que j'ai déplacé vers des files d'attente grâce à un système de token permettant le bloquage de cette même tâche en simultané. Cela a permis de ne pas bloquer les processus principaux de l'application pendant ces opérations demandantes en ressource et à éviter toute saturation du système. <b>L’API a bien répondu aux besoins</b>. Il y aura bien sûr des améliorations pour permettre encore plus de performance qu’actuellement.
                    <br/><br/>
                    Lorsque je travaillais sur mes réalisations professionnelles j’ai développé un attrait pour cette technologie. C'est cette attirance pour ExpressJS qui a fait que j'ai choisi cette technologie pour mon projet personnel <a>YourNight</a> qui est un projet personnel d’application mobile destiné à fluidifier l’organisation de soirées. Pour YourNight j'ai construit l'architecture et la logique backend de l'application. Étant donné que j'ai travaillé seul sur ce projet, j'ai pu de mettre en pratique mes compétences et me tester. La mise en place de l’API a été assez rapide avec une première version fonctionnelle robuste et sans bug au bout d’une semaine avec l’expérience que j'avais acquise au cours des projets réalisés en entreprise. J’ai par contre dû penser à des problèmes différents comme la mise en place d’un <b>bouclier anti DOS</b> en limitant le nombre d’appels API par adresses IP. J’ai également mis des <b>notifications push</b> côté backend en interrogeant l’API expo push et l’une des choses les plus importantes a été <b>l'authentification des utilisateurs</b> et la sécurité des données. J'ai mis en place des protocoles d'authentification robustes pour protéger les comptes utilisateurs et les informations sensibles, notamment le <b>protocole JWT</b> (JSON Web Tokens). Lorsqu'un utilisateur se connecte à l'application le serveur génère un token JWT signé avec une clé secrète. Ce token contient les informations d'identification de l'utilisateur avec une date d'expiration. Pour l’instant <b>mon API est fonctionnelle et amplement suffisante</b> pour les besoins actuels de l’application mobile.
                `,

            }, {
                element: "Regard critique",
                content: `
                    En prenant du recul sur mes compétences en ExpressJS je me sens à l'aise avec cette technologie et je m'attribuerai <b>un niveau avancé</b>. Mon expérience avec ExpressJS, à la fois chez Holis Consulting et sur mon projet personnel YourNight, m'a permis de bien comprendre la construction des architectures backend ainsi que la création de routes API, la gestion des sessions, et l'implémentation de mesures de sécurité comme l'authentification avec token JWT.
                    <br/><br/>
                    Cette technologie occupe <b>une place importante au sein de mon profil professionnel</b> car la majorité de mes projets utilisent ExpressJS.
                    <br/><br/>
                    Cependant je sui conscient qu'il existe des aspects d'ExpressJS que je ne maitrise pas encore. Par exemple tout ce qui concerne <b>l'optimisation des performances</b> en détails et de la <b>gestion avancée des erreurs</b>. Ce sont des domaines où je possède un <b>potentiel de croissance</b>.
                `,

            }, {
                element: "Evolution",
                content: `
                    Aujourd'hui je suis très satisfait de l'utilisation d'ExpressJS. Sa flexibilité, sa simplicité et son efficacité m'ont convaincu pour l'utiliser à nouveau dans le développement de projets backend. Dans mes projets futurs <b>je prévois de continuer à utiliser ExpressJS</b>.
                    <br/><br/>
                    Cependant je suis également ouvert <b>à explorer de nouveaux frameworks backend</b> basés sur Node.js. Un exemple de cela est AdonisJS qui est un framework qui offre une expérience de développement plus stricte et qui est souvent comparé à Laravel chez PHP.
                    <br/><br/>
                    L'apprentissage de frameworks comme AdonisJS me permettra de rester à jour avec les dernières nouveautés dans le développement backend mais aussi <b>d'approfondir ma compréhension des architectures d'applications</b> et de découvrir de nouvelles manières de résoudre des problèmes.
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
                Les bases de données servent de <b>pilier pour le stockage</b>. Elles peuvent être relationnelles comme MySQL ou PostgreSQL ou non relationnelles (NoSQL), comme MongoDB. Les bases de données relationnelles utilisent un modèle structuré avec des tables et des relations tandis que les bases de données NoSQL permettent plus de flexibilité avec des modèles de données variés comme le document, le graphique ou la clé-valeur.
                <br/><br/>
                La <b>pertinence</b> des bases de données dans le milieu professionnel est <b>inconstestable</b>. Elles sont obligatoires pour la majorité des applications.
                <br/><br/>
                Leur <b>popularité n'est plus à prouver</b>. Les grandes entreprises et les startups adoptent des bases de données pour gérer d'énormes volumes de données et maintenir la scalabilité.
                `,

            }, {
                element: "Contexte d’utilisation",
                content: `
                        Mon début avec les bases de données a débuté il y a environ cinq ans, dans le cadre des projets
                        réalisés durant mes études. J'ai travaillé avec <b>MySQL</b>, un système de base de données
                        relationnelle. Ça m'a permis de me familiariser avec les bases de
                        données SQL en utilisant les <b>opérations CRUD</b> (Créer, Lire, Mettre à jour, Supprimer) de
                        manière classique et en imaginant mes premiers modèles de base de données et mes premières <b>gestions
                        d’utilisateurs</b>.                    
                    <br/><br/>
                        Mon utilisation des bases de données a évolué lorsque j’ai travaillé en entreprise
                        lors de mon alternance sur le projet <a>PREMIS DM</a>, qui est une application web ayant pour but pour de
                        gérer de grands volumes de données liés au domaine de l’industrie afin de les consulter, de les analyser
                        et les visualiser sous forme de graphiques. J’ai notamment travaillé en autonomie avec
                        <b>PostgreSQL</b> pour mettre en place des <b>vues complexes</b> afin d’assembler sous une même réponse, des
                        données venant de plusieurs tables différentes. Le but était ici de transformer le besoin client exprimé
                        à l'oral, en requête SQL, en prenant en compte le grand nombres de conditions spécifiques qu'elles comportaient. Il
                        était question de faire fonctionner ensemble les opérations classiques (ORDER BY, COUNT, HAVING, WHERE,
                        JOIN...) avec des <b>opérations plus complexes</b> (CASE, split_part, regexp_split_to_array, OVER,
                        PARTITION...) pour répondre aux demandes de l’application. La
                        création de ces vues servaient pour une optimisation globale de vitesse d’exécution et de
                        traitement des nombreuses données liées à l’application web. Je devais donc travailler en me servant du
                        gestionnaire visuel de base de données <b>pgAdmin</b> pour mesurer la performance des requêtes. 
                        Après une semaine de travail j’ai pu fournir un premier jet
                        d’une vingtaine de requêtes plus ou moins complexes que j’ai introduit dans l’application. Les
                        premiers tests ont été positifs et la majeure partie de ces requêtes sont restées plus tard telles
                        quelles, sans avoir d’optimisation ou d’amélioration nécessaire d’autres en ont eu par mes
                        soins car moins performantes avec d’encore plus gros volumes de données. L’objectif initial était quand
                        même accompli avec <b>une base de données beaucoup plus légère et efficace</b>.
                    <br/><br/>
                        Toujours dans le cadre de l’optimisation de l’application web <a>PREMIS DM</a>, nous avions un autre
                        problème qui est survenu lors d'un test avec un volume de données plus conséquent que
                        d'habitude. La mémoire du système se retrouvait parfois saturé et l'application venait à <b>crash face à
                        une énorme quantité de données</b> à traiter lors de l’exécution de certaines fonctionnalités.
                        J'en ai parlé avec mon maître d'apprentissage pour trouver
                        une solution. C'est comme ça que nous avons eu l'idée d'optimiser le processus de <b>traitement de données en utilisant des
                        index</b>. J'ai réaliser une analyse de la base de données pour trouver les
                        points de goulot d'étranglement. Je mesurais les temps d’arrivée des données dans chaque page
                        de l’application web. C'est à la suite de ces tests qu'est
                        venue ma <b>première implémentation d’index sur des propriétés</b> que j’ai identifiées comme <b>centrales</b> aux
                        coeur des requêtes les plus problématiques. C'était une réussite puisque ça a permis de réuidre
                        les temps de réponse et de permettre à l'application de gérer des volumes de données
                        bien plus importants.
                    <br/><br/>
                        J'ai également exploré
                        les bases de données non SQL avec <b>MongoDB</b> dans mon projet personnel <a>YourNight</a> qui est une
                        application mobile permettant de faciliter l’organisation de soirées. J’ai <b>imaginé et mis en place mon
                        schéma de données</b> en une soirée relativement facilement et sans être perdu car je me sentais très vite
                        familier avec MongoDB de par mon expérience déjà solide avec les bases de données relationnelles. Je
                        l’ai premièrement imaginé et hébergé sur Atlas avant de plus tard le faire fonctionner localement. J’ai tout
                        de même pris un peu plus de temps par la suite pour améliorer mon schéma de données malgré qu’il soit
                        fonctionnel pour <b>anticiper un potentiel gros volume de données</b> et solidifier l’ensemble (une leçon que j’ai
                        tirée du projet PREMIS DM) à l’aide de l'indexation à l'aide d'une étude de la base de donénes 
                        similaire à ce que j’avais pu faire sur PREMIS DM. Mes essais faits localement avec
                        de fausses données sur une base de données test ont été concluants mais du fait du faible nombre
                        d’utilisateurs de l’application, je n’ai jamais pu voir les résultats de cette optimisation en production. Aujourd'hui
                        ma base de données <b>fonctionne extrêmement bien</b> pour le volume de données actuel.
                    `,

            }, {
                element: "Regard critique",
                content: `
                    En prenant du recul par rapoort à mes compétences en bases de données, je constate que j'ai
                    établi de <b>solides fondations</b> tant en SQL qu'en NoSQL.
                <br/><br/>
                    Cette compétence représente <b>plus qu'une place importante au sein de mon profil d'expert</b>
                    technique étant donné
                    que j'utilise des bases de données pour tous mes projets. J'ai eu du mal au début à bien comprendre
                    le fonctionnement des requêtes SQL mais après quelques projets et de l'entrainement sur
                    des outils tels que MySQL Workbench tout était plus clair et ne réprésente plus aucune difficulté pour moi.
                <br/><br/>
                    Cependant si je veux atteindre un niveau supérieur de maîtrise, je dois encore
                    <b>approfondir mes connaissances</b> dans <b>l'optimisation des bases de
                    données</b> pour la manipulation d'énormes volumes de données.
                <br/><br/>
                    Je suis conscient que la gestion et l'optimisation des bases de données à grande échelle représentent un
                    défi bien plus complexe que ce que j'ai pu connaitre jusqu'à présent. 
                    Il me manque encore une compréhension avancée des index, des stratégies de
                    partitionnement des données et de la gestion efficace des transactions.
                `,

            }, {
                element: "Evolution",
                content: `
                    Je suis déterminé à continuer d'utiliser les bases de données dans mes projets futurs. <b>Pour les petits projets</b>, je
                    prévois de continuer à utiliser <b>MongoDB</b> pour sa facilité d'implémentation.
                <br/><br/>
                    <b>Pour les projets plus importants et complexes</b>, les <b>bases de données SQL</b> resteront mon choix privilégié
                    pour leur robustesse, leur fiabilité et de leur capacité à gérer efficacement de grandes
                    quantités de données. J'ai tout de même une forte envie de développer davantage mes
                    compétences en NoSQL. Mon expérience avec MongoDB m'a beaucoup plu et m'a donné envie
                    d'explorer d'autres bases de données NoSQL.
                <br/><br/>
                    Je suis également conscient
                    de l'importance du cloud computing dans la gestion des données. Le cloud offre
                    une scalabilité beaucoup plus importante que ce que j'ai connu jusqu'à présent.
                    Un de mes objectifs est donc également de <b>m'intégrer davantage dans le cloud</b>, en apprenant à utiliser
                    des services de bases de données cloud comme Azure SQL.
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
                GIT est un système de <b>contrôle de version décentralisé</b>. Il est conçu pour gérer les petits et très grands projets. GIT facilite le suivi des modifications dans les fichiers ce qui permet aux développeurs de collaborer sur le code. Il fournit des outils pour visualiser l'historique des modifications et gère efficacement les branches et les fusions de code.
                <br/><br/>
                La <b>popularité</b> de GIT dans le milieu professionnel est <b>incontestable</b>. Git est présent partout dans le monde du développement logiciel.
                <br/><br/>
                GIT est souvent choisi car il est capable de <b>gérer efficacement les projets de développement logiciel</b> de toutes tailles. Il est également facile à intégrer avec d'autres outils de développement.
                `,

            }, {
                element: "Contexte d’utilisation",
                content: `
                    Lorsque j'ai débuté la programmation il y a environ cinq ans, j'ai directement utilisé GIT pour mes premiers projets.
                    J'ai utilisé GitLab comme plateforme pour les projets scolaires
                    et professionnels et GitHub pour mes projets personnels ou ceux réalisés en collaboration avec mes
                    amis.
                <br/><br/>
                    Lorsque j’ai travaillé dans le cadre scolaire sur le projet <a>Hypotech</a> qui est une application
                    mobile Android ayant pour objectif de fluidifier la gestion de projets de vente immobilière, notre gestion
                    du gitlab n'était pas optimale étant donné que nous n’utilisions que très peu le
                    système de branche. C’est surtout à ce moment là que j’ai énormément progressé sur la technologie et compris le
                    réel intérêt et la puissance de GIT. Nous avions donc bien évidemment rencontré des <b>conflits de merge
                    complexes</b> qui ont eu besoin de plusieurs heures pour être résolus.
                    Je me portais souvent volontaire pour résoudre ces conflits car je
                    commençais à bien appréhender le problème et ça ne représentait plus un si grand défi pour moi. Malgré tout ces problèmes nous faisaient perdre trop de temps
                    et j'ai décidé
                    de commencer une discussion autour du problème pour trouver une solution c'est à ce moment que nous avons
                    <b>adopté une nouvelle approche consistant à faire une branche par User Story</b> (que
                    l’on peut définir grossièrement de fonctionnalité) et à venir merge ces branches dans la branche
                    principale qui était chez nous la brache “master”. Lorsque l'on commençait le développement d'une nouvelle User Story nous devions créer une 
                    brance à partir de master et la nommer par rapport à la User Story pour que tout le monde puisse s’y retrouver.
                    Lors de modifications sur master nous devions <b>rebase</b> nos branches pour éviter les conflits. C'est cette
                    approche qui a <b>amélioré notre flux de travail</b> en réduisant les conflits et les différentes erreurs.
                <br/><br/>
                    J’ai découvert et adopté de nouveaux
                    principes au cours du développement de <a>YourNight</a>. J’ai voulu trouver un moyen d’automatiser le
                    lancement de mes tests unitaires car je savais que c’était possible. J’ai donc découvert et
                    implémenté les <b>git hooks</b> sans difficulté particulière. 
                    C'est la mise en place de ce système qui a <b>amélioré la qualité du code et la fiabilité
                    de l'application</b> puisque maintenant le code était validé par ces tests à chaque commit. C'est de cette manière que j’ai
                    pu détecter rapidement les erreurs et les bugs avant qu'ils n'atteignent la branche principale et même
                    plus de manière générale cela m'a forcé à avoir une <b>meilleure discipline de développement</b>
                    en m'encourageant à écrire des tests unitaires et à penser davantage aux potentiels impacts des
                    changements de code.
                `,

            }, {
                element: "Regard critique",
                content: `
                    En prenant du recul par rapport à mon expérience avec GIT je possède aujourd'hui des
                    <b>connaissances solides</b> sur l'utilisation de GIT. J'ai rapidement acquis
                    une <b>bonne maîtrise des opérations de base et avancées de GIT</b> comme la gestion des branches, la
                    résolution de conflits, l'utilisation de hooks pour l'automatisation des tests, et l'utilisation des pull requests. 
                    Git est aujourd'hui un outil que j'utilise pour tous mes projets, qu'ils soient personnels
                    ou professionnels.
                <br/><br/>
                    Cependant je suis conscient qu'il existe des <b>domaines où je peux encore
                    m'améliorer</b> comme l'utilisation de GitLab et la mise en place de workflows complets
                    de <b>CI/CD</b> (Continuous Integration/Continuous Deployment).
                <br/><br/>
                    GitLab offre des fonctionnalités avancées pour le CI/CD qui permettent d'automatiser par exemple les processus de déploiement. 
                    Pour l'instant <b>mon expérience avec ces aspects de
                    GitLab reste limitée</b>. 
                `,

            }, {
                element: "Evolution",
                content: `
                        J'ai développé un <b>attachement fort à GIT</b> pour sa capacité à faciliter la collaboration. Je l'utilise pour tous mes projets même si je travaille seul dessus.
                    <br/><br/>
                        Je suis aujourd'hui déterminé à <b>maîtriser les concepts de CI/CD</b>. Mon objectif est d'avoir une 
                        compréhesion approfondie des pipelines de CI/CD dans GitLab. Je
                        prévois de me plonger dans la documentation de GitLab, et de consulter les tutoriels en ligne.
                    <br/><br/>
                        Cette évolution est une étape dans ma carrière de développeur. Cela 
                        me permettra <b>d'optimiser le processus de
                        développement</b> dans mes projets tout en garantissant une qualité de code plus élevée.
                        Cela renforcera mon profil en tant que développeur logiciel
                        logiciel, me rendant plus compétent dans la gestion de projets complexes.
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
                L'intégration continue est une pratique de développement logiciel pour <b>automatiser l'intégration du code</b> dans un dépôt partagé plusieurs fois par jour. Cette approche permet aux équipes de détecter rapidement des erreurs, de les corriger et d'améliorer la qualité du logiciel.
                <br/><br/>
                Son adoption apporte plusieurs avantage comme par exemple une <b>diminution significative des conflits de fusion de code</b>, une détection des bugs et une réduction des risques liés au déploiement de la solution.
                `,

            }, {
                element: "Contexte d’utilisation",
                content: `
                    Lorsque j'ai travaillé sur l'application web <a>PREMIS DM</a> qui est une application web ayant pour but pour de gérer de grands volumes de données liées au domaine de l’industrie afin de les consulter, de les analyser et de les visualiser sous forme de graphiques, l’implémentation d’une première intégration continue était obligatoire pour nous au vu du nombre de <b>déploiement faits manuellement</b> par semaine. Nous n'avions jusqu'à ce moment aucun système automatisé pour le déploiement, c'était le chef de projet qui était chargé de diriger les déploiements de l'application ce qui était problématique d'autant plus qu'il suivait un ensemble de commandes fournies par mon maître d'apprentissage. Ces lignes de commandes étaient exécutées dans un ordre précis sans que le chef de projet ne sache réellement ce qu'il étaient en train de faire. C'est pour cette raison que j'ai eu pour responsabilité de <b>mettre en place une chaîne d'intégration continue via GitHub</b>. Je maitrisais déjà l'outil pour la gestion du code source. Mon objectif était donc de créer un processus automatisé de déploiement accélérerait la mise en production des nouvelles versions de l'application et surtout beaucoup plus simplement sans se préocuper de le faire manuellement. J'ai donc <b>configuré des webhooks GitHub</b> pour déclencher des scripts de déploiement que j'avais imaginé à partir des commandes exécutées manuellement. Il y avait le déclanchmenet de plusieurs étapes clés : <b>La compilation du code</b>, <b>l'exécution des tests automatiques</b> pour vérifier l'intégrité et la fonctionnalité de l'application, et enfin le <b>déploiement automatique</b> sur le serveur de production. J'a par conséquent contribué à mettre en place une <b>pratique de développement plus agile</b> au sein de l'équipe en évitant notre problème principal. Cependant, la véritable évolution est venue plus tard, lorsqu'un collègue a développé un workflow d'intégration continue et de déploiement continu (CI/CD) encore plus robuste en utilisant notre propre instance GitLab. 
                    <br/><br/>
                    Pour mon projet personnel <a>YourNight</a> qui est une application mobile visant à fluidifier l’organisation de soirées, j'ai également décidé de mettre en place un <b>système d'intégration continue automatisé, en utilisant GitHub</b> pour automatiser les déploiements de mon API sur un VPS Ubuntu. Ce workflow était composé de <b>l'exécution automatique de tests</b> ainsi que <b>l'application de ESLint</b> pour maintenir un style de codage et détecter les erreurs potentielles avant le déploiement. Cependant à chaque déploiement de l'application il y avait un problème qui entraînait la perte des photos de profil des utilisateurs. Il s'est en fait avéré que le problème était du à la gestion des volumes dans Docker puisque lors du déploiement de nouvelles versions de l'application les données stockées localement dans le conteneur comme du coup les photos de profil étaient effacées car le volume contenant ces données n'était pas correctement configuré pour stocker les données localement sur la machine hôte. C'est la mise en place d'un système d'intégration continue pour YourNight qui a <b>transformé ma façon de gérer les déploiements</b> en les rendant <b>plus fiables mais aussi beaucoup moins stressants</b>. Ça a aussi été un gain de temps est non négligeable, ça permet aujourd'hui de me concentrer sur le développement de nouvelles fonctionnalités plutôt que de me préoccuper des détails liés au déploiement. <b>Je peux maintenant effectuer des mises à jour fréquentes</b> par rapport aux demandes des utilisateurs ou pour corriger des bugs.
                    `,

            }, {
                element: "Regard critique",
                content: `
                Mon regard critique sur ma compétence en intégration continue montre <b>un bilan un peu nuancé sur mes acquis</b>. Je reconnais que <b>mon expérience reste limitée</b>, surtout quand il s'agit d'outils et de pratiques plus avancés.
                <br/><br/>
                L'intégration continue ne représente qu'un <b>faible pourcentage de mon profil d'expert</b>, je ne l'utilise que lorsque j'en ai besoin avec des outils basiques me permettant de répondre à mes besoins. J'ai tout de même rapidement compris son importance pour améliorer la fiabilité des applications. J'ai constaté les avantages de l'intégration continue dans mes projets surtout pour tout ce qui concerne la détection des erreurs.
                <br/><br/>
                Je n'ai pas encore pu utiliser des outils d'intégration continue et de déploiement continu (CI/CD) plus poussés comme Jenkins, ce que j'aimerai découvrir dans le futur.
                <br/><br/>
                Mon manque d'expérience avec ces outils avancés <b>limite ma capacité dans l'implémentation de chaine d'intégration continue</b> surtout pour des projets importants qui nécessitent une configuration de déploiement complexe.
                `,

            }, {
                element: "Evolution",
                content: `
                    <b>Je ressens un grand intérêt pour la compétence en intégration continue (CI/CD)</b>, j'ai vraiment envie d'approfondir ma compréhension et ma maîtrise de cette compétence puisque je suis conscient de l'importance de ces outils pour optimiser et sécuriser le processus de développement et de déploiement des applications.
                    <br/><br/>
                    Je compte me former à des outils plus complexe à travers des contenus en ligne sous la forme de tutoriels qui me permettront d'acquérir les compétences nécessaires pour implémenter des pipelines CI/CD plus complexes et plus efficaces. Mon objectif est de pouvoir appliquer ces compétences à mes futurs projets personnels mais aussi à contribuer dans la gestion CI/CD de l'entreprise où je réalise mon alternance en aidant à résoudre des problèmes liés à l'intégration et au déploiement continu.
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
                La communication sur les réseaux sociaux permet de genérer un engagement communautaire et le partage d'informations.
                <br/><br/>
                L'importance de la communication sur les réseaux sociaux dans le milieu professionnel est aujourdh'ui incontestable. Son adoption permet de renforcer sa présence en ligne. Les réseaux sociaux permettent une diffusion rapide de l'information. Ils représentent une plateforme pour le storytelling et la promotion de produits et services.
                `,

            }, {
                element: "Contexte d’utilisation",
                content: `
                    Ma première campagne de communication sur les réseaux sociaux s'est déroulée dans le cadre 
                    du projet scolaire <a>Mat’ Moi Ca</a> qui était un tournoi d'échecs en ligne organisé en partenariat avec Chess.com et l'UNICEF. 
                    Nous avons utilisé des plateformes commes <b>Facebook et Twitter</b> 
                    pour réussir notre campagne de communication. 
                    En tant que chef de ce projet, j’ai imaginé une stratégie 
                    en plusieurs étapes que j’ai partagé à mes camarades par la suite qui se voulait axée sur l'augmentation de la visibilité de notre cause caritative auprès de l'UNICEF. 
                    Nous avons commencé par poster des publications destinées à <b>construire une communauté autour des 
                    échecs</b> et autour de cette cause. Nous avons utilisé des anecdotes historiques sur les échecs et des faits intéressants sur l'impact de l'UNICEF dans le monde. 
                    L'objectif était de 
                    <b>susciter l'intérêt</b> avec notre audience pour encourager 
                    ainsi les interactions et le partage de nos contenus. <b>Les outils d'analytics</b> des différentes
                    plateformes nous ont aidé à nous diriger dans la bonne direction en comprenant les posts qui faisaient 
                    réagir les utilisateurs à l'aide du pourcentage d'interractions par rapport au nombre de vues. 
                    Nous avons ensuite intensifié la promotion du tournoi en partageant des 
                    <b>informations détaillées sur les règles</b>, le format du tournoi Blitz et aussi les modalités de participation. 
                    J’ai personnellement réalisé des <b>visuels attrayants</b> 
                    réalisés avec Photoshop ou Premiere Pro (des logiciels avec lesquels j’étais familier) pour encourager les inscriptions, en mettant l'accent sur l'aspect caritatif de l'événement. Pour chaque 
                    plateforme, nous avons <b>adapté notre contenu</b> pour s'adapter aux bases d'utilisateurs. 
                    Sur Facebook, nous avons privilégié des contenus détaillés tels que des vidéos alors que sur 
                    Twitter on est plutot passé par des messages courts accompagnés de hashtags stratégiques. 
                    Notre stratégie de communication sur les réseaux 
                    a porté ses fruits en générant un certain engagement mais qui reste 
                    quand même en dessous de nos attentes initiales. 
                    Grâce à nos efforts nous avons tout de même réussi à attirer l'attention <b>avec des dizaines 
                    d'interactions</b> comme des likes, commentaires et surtout des partages. 
                    Notre plus gros succès a 
                    été marqué par l'attention de deux acteurs majeurs dans le monde des échecs. 
                    La Fédération Française des Échecs qui a repartagé 
                    nos publications sur leur Twitter a validé 
                    la pertinence de notre projet mais a aussi permis une plus grande visibilité auprès de leur audience. 
                    De même, notre partenariat avec Chess.com qui est la plateforme leader mondial des échecs en ligne, ils ont 
                    promu notre tournoi sur leur page Facebook et ont mis en avant l'événement 
                    sur la version française de leur site. 
                    Leur soutien a permis beaucoup plus de crédibilité à notre tournoi.
                    `,

            }, {
                element: "Regard critique",
                content: `
                Je reconnais que mon expertise est encore en développement et que je ne possède qu'<b>un niveau intermédiaire</b> pour le moment. 
                Cependant <b>j'ai rapidement compris le genre de contenu qui fait réagir</b> je suis maintenant capable de mieux comprendre et réaliser des posts entrainant des réactions.
                <br/><br/>
                Je me suis également seulement limité à des plateformes comme Facebook, Twitter, Instagram et TikTok, 
                sans explorer d'autres modes de communication qui pourraient être plus pertinents pour des projets spécifiques. 
                Par exemple LinkedIn pour le networking professionnel ou YouTube pour la création de contenu vidéo. 
                <br/><br/>
                <b>Je manque également d'expérience dans la création de contenu pour une portée mondiale</b>. 
                <br/><br/>
                Je suis tout de même fier de ce que j'ai accompli et surtout d'avoir réussi à travailler 
                avec des organisations telles que Chess.com. 
                `,

            }, {
                element: "Evolution",
                content: `
                    Aujourdh'ui <b>la maîtrise de la communication sur les réseaux sociaux ne fait pas parti de mes priorités immédiates</b>
                    <br/><br/>
                    Je compte seulement l'utiliser lors de déploiement de projets personnels mais je souhaiterai tout de même pouvoir m'associer avec quelqu'un dont il est la spécialité de pouvoir promouvoir un produit à travers les réseaux sociaux.
                    <br/><br/>
                    Je préfère consacrer mon l'apprentissage de nouvelles stratégies de communication digitale auc moments où j'en aurai réellement besoin. 
                    Je pense que cette flexibilité me permettra de lancer dans un premier temps un projet sans emcombre mais sans non plus attirer une grande population.
                    <br/><br/>
                    De cette manière je <b>continue de la développer sans en devenir un expert</b> ce qui me permettra tout de même d'exploiter une partie de ces outils.
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
                La compétence en gestion de budget concerte tout ce qui est <b>capacité à planifier et contrôler les flux financiers</b> d'un projet ou d'une organisation en veillant à la réalisation des objectifs en respectant les contraintes budgétaires. 
                <br/><br/>
                Cette compétence est plus qu'importante dans un contexte professionnel puisqu'elle permet d'assurer la viabilité financière d'un projet.
                <br/><br/>
                Dans un environnement de travail qui est axé sur l'optimisation des coûts, 
                savoir gérer un budget est essentiel et 
                <b>applicable dans de nombreux domaines</b> comme la gestion de projet, le marketing, l'ingénierie, et même dans des projets personnels. 
                `,

            }, {
                element: "Contexte d’utilisation",
                content: `
                    Ma première expérience dans la gestion de budget a été pour le projet scolaire <a>Mat’ Moi Ca</a>, un tournoi d'échecs en ligne caritatif 
                    organisé dans le cadre d’un projet scolaire de formation humaine. 
                    J'ai du gérer un budget avec l'objectif d'engendre un maximum de fonds pour l'UNICEF tout en couvrant les coûts liés à l'organisation de l'événement. 
                    Pour ce faire nous avons établi un <b>budget prévisionnel</b> en identifiant toutes les sources de revenus et de dépenses. 
                    On y retrouvait les frais d'inscription ainsi que les coûts liés à la promotion de l'événement
                    et la gestion des partenariats avec Chess.com et l'UNICEF. 
                    Nous avons également anticipé les dépenses pour la communication et le marketing pour atteindre un large public. 
                    Nous avons mis en place d'un suivi des dépenses avec l'utilisation de <b>tableaux Excel</b> comme outil de gestion financière. 
                    Chaque dépense était justifiée pour garantir que chaque euro dépensé était lié à la réalisation et le bien du projet. 
                    Nous avions également tenu une <b>feuille-temps</b>. 
                    Cette feuille de temps nous a permis de suivre les heures consacrées par chaque membre de l'équipe aux différentes tâches du projet
                    pour avoir une représentation du coup coût associé à l'organisation de l'événement. 
                    L'utilisation de cette feuille de temps avait plusieurs objectifs. 
                    Elle servait à garantir une gestion efficace des ressources en temps 
                    en nous permettant de voir quelles étaient les activités qui nécessitaient plus de temps que prévu 
                    et d'ajuster nos objectifs en conséquence. 
                    Elle a aussi contribué à une gestion financière plus précise en nous aidant à <b>identifier les optimisations possibles</b>. 
                    Pour tenir cette feuille de temps à jour nous avons décidé que chaque membre de 
                    l'équipe était responsable de l'enregistrement de son temps passé sur le projet. 
                    La feuille de temps était revue lors de nos réunions d'équipe 
                    pour discuter des progrès réalisés par rapport au plan initial et d'ajuster nos méthodes s'il le fallait. 
                    Cependant le nombre de participants inscrits était au final en dessous de nos prévisions. 
                    Cele a entrainé <b>un écart entre notre budget prévisionnel et le budget final</b>
                    Nous avions tout de même bien anticipé tous les coûts initiaux sans erreurs ce qui n'a pas mis en péril notre gestion en financière en créant un potentiel endettement. 
                    <br/><br/>
                    Pour le projet <a>YourNight</a>, un projet personnel sous la forme d’une application mobile destinée à faciliter 
                    l'organisation de soirées entre amis, 
                    j'ai également réalisé une gestion de budget, en établissant un <b>budget prévisionnel</b>. 
                    Pour cela, j'ai utilisé l'outil <b>Notion</b>, qui m'a servir de plateform pour le suivi budgétaire et la prise de décision financière. 
                    Dans mon budget prévisionnel j'ai pris en compte tous les coûts nécessaires au lancement de l'application. 
                    On retrouvait le prix d'entrée sur les stores d'applications, tels que Google Play et l'App Store d'Apple, 
                    ainsi que les coûts associés à l'hébergement du serveur sur un VPS (Virtual Private Server. 
                    En plus de ces coûts, j'ai également <b>planifié les potentiels revenus générés</b> par les publicités intégrées dans l'application. 
                    Cette source de revenus était importante dans le modèle économique de YourNight
                    puisqu'elle représentait ma seule source de rémunération. 
                    L'objectif était de <b>couvrir les coûts de lancement</b> grâce aux revenus publicitaires 
                    avant d'atteindre la rentabilité. 
                    Aujourd'hui la gestion financière de YourNight est <b>correcte par rapport aux prévisions initiales</b>. 
                    `,

            }, {
                element: "Regard critique",
                content: `
                Je possède aujourd'hui <b>un niveau intermédiaire</b> dans ma maitrise de cette compétence. 
                Cela vient des différences observées entre les budgets prévisionnels et les résultats finaux de mes projets de par 
                l'expérience avec le projet "Mat' moi ça". 
                <br/><br/>
                Pour m'améliorer je vois plusieurs possibilités. 
                J'aimerai tout d'abord <b>me former davantage sur les techniques de prévision financière et d'analyse de risques</b>
                pour pouvoir établir des prévisions plus précises et réalistes. 
                <br/><br/>
                J'aimerai également <b>développer une meilleure compréhension des facteurs externes</b> qui peuvent influencer le budget d'un projet
                comme par exemple les conditions d’un marché avec le comportement des consommateurs ou encore les événements imprévus. 
            `,

            }, {
                element: "Evolution",
                content: `
                    Aujourd'hui <b>l'approfondissement de cette compétence n'est pas ma priorité immédiate</b> 
                    mais ça reste un objectif à moyen terme étant donné que je suis conscient
                    de l'importance de la gestion budgétaire dans la réussite d'un projet.
                    <br/><br/>
                    <b>L'apprentissage se fera lorsque j'en aurai besoin</b> lors du lancement de nouveaux projets. 
                    <br/><br/>
                    Je prévois de me former à travers des ressources en ligne notamment des tutoriels. 
                    <br/><br/>
                    Même si la gestion de budget n'est pas ma priorité absolue pour l'instant je souhaite progresser dans cette compétance progressivement 
                    pour l'intégrer au mieu dans mon profil d'expert.
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
                La compétence en gestion de projet Agile Scrum donne la priorité à la <b>flexibilité, à la collaboration et à l'adaptabilité</b> tout au de développement de projets. 
                Cette compétence se caractérise par l'organisation du travail en Sprint
                qui permet de revoir régulièrement les objectifs et les résultats attendus en fonction des retours des parties prenantes. 
                Il y a des rôles clairs au sein de l'équipe, incluant le Scrum Master, le Product Owner, et l'équipe de développement, chacun exerçant des responsabilités spécifiques pour assurer le bon déroulement et l'efficacité du projet.
                `,

            }, {
                element: "Contexte d’utilisation",
                content: `
                    Dans le cadre de mes études, j'ai pu appliquer la gestion de projet Agile Scrum à travers mes projets informatiques scolaires. 
                    Il y a notamment eu le développement d'<a>Hypotech</a> qui est une application mobile Android visant à fluidifier les démarches de ventes immobilières
                    .Ce projet a été réalisé avec un <b>Product Owner</b> externe et il a été décidé de travailler avec des <b>sprints de deux semaines</b>, 
                    chacun conclu par une <b>livraison et une réunion de revue</b> avec le Product Owner.
                    À la fin de chaque sprint nous organisions une réunion pour présenter les User Story développées 
                    afin de recueillir les retours et <b>ajuster les priorités</b> pour le sprint suivant. 
                    Nous avions également réalisé une <b>réunion kick-off</b> qui nous a permis de définir les User Stories nécessaires pour le développement de l'application. 
                    Après chaque sprint et livraison nous faisions des ajustements des User Stories en fonction des retours du Product Owner et de <b>notre propre évaluation du travail réalisé</b>. 
                    Ce qui fait que certaines User Stories pouvaient être repriorisées, modifiées, ou même ajoutées pour s'adapter aux changements du projet. 
                    Après avoir défini les User Stories avec le Product Owner il fallait que chaque membre de l'équipe ait une charge de travail équilibrée et qui soit en adéquation avec ses compétences. 
                    Pour ce faire on organisait des réunions quotidiennes dans lesquelles on parlait des tâches spécifiques qu'elles impliquaient et des compétences nécessaires pour les réaliser et c'est comme ça que nous répartissions les User Stories entre nous. 
                    Chaque membre de l'équipe avait alors le <b>choix des User Stories</b> sur lesquelles il souhaitait travailler. 
                    Cependant malgré notre maitrise et notre correcte gestion du projet et du respect de la méthodologie, un mois avant la livraison finale 
                    le Product Owner a totalement modifié ses attentes en termes de design et d'expérience utilisateur. 
                    De base il était question d'un design sobre et simple mais il a souhaité intégrer des éléments plus extravagants, tels que des GIFs sur tous les écrans. 
                    Il était impossible pour nous de fournir une application correspondant à ses nouvelles envies lors de la livraison finale étant donné qu’il nous restait des User Story planifiées d’ici là.
                    J'ai également pu <b>endosser le rôle de Scrum Master</b> lors d’un autre projet scolaire.
                    C'est à ce moment que j'ai dirigé les communications avec le <b>Product Owner qui a dressé des éloges</b> envers ma capacité à diriger les réunions et à diriger le projet selon ses envies.
                    `,

            }, {
                element: "Regard critique",
                content: `
                Je possède aujourd'hui une <b>solide compréhension des principes</b> de cette méthodologie même si ce n'est pas celle que j'ai maitrisé le plus rapidement 
                parmi mes compétences notamment en ayant du mal à comprendre l'intérêt des Users Story à mes débuts. 
                <br/><br/>
                La gestion de projet Agile Scrum <b>ne réprésente plus aujourd'hui une place aussi importante</b> qu'il y a deux ans dans ma vie professionnelle. 
                Les projets sur lesquels je travaille en entreprise ne mettent pas en place cette méthode de gestion de projet contrairement à mes derniers projets
                scolaires où elle était tout le temps appliquée.
                <br/><br/>
                Je reconnais quand même que <b>mon expérience reste limitée</b> de par le manque de diversité et de complexité des environnements de travail dans lesquels j'ai pu l'appliquer. 
                La plupart de mes projets se sont déroulés dans des environnements où l'équipe ne dépassait jamais plus de cinq collaborateurs.
                `,

            }, {
                element: "Evolution",
                content: `
                    De par mon utilisation de cette compétence je suis désormais <b>convaincu de son efficacité</b>. 
                    C'est pour cette raison que je suis déterminé à continuer d'utiliser cette méthodologie pour mes futurs projets que je réaliserai à l'aide d'autre collaborateurs. 
                    C'est pour moi l'approche de gestion de projet la plus adaptée pour s'adapter et mener à bien des projet de développement de logiciels et d'applications.
                    <br/><br/>
                    Je souhaite donc <b>appliquer Scrum dans mes projets de groupe</b> mais aussi approfondir ma maîtrise de cette méthodologie. 
                    Cela va inclure de maitriser une meilleure utilisation des outils et techniques pour gérer des sprints
                    et une réflexion sur la manière dont les principes Agile peuvent être utilisés pour répondre au mieux aux attentes de chaque projet.
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
                La compétence de gestion du temps et d'organisation est la capacité d'<b>optimiser ses journées de travail</b> pour atteindre les objectifs fixés. 
                On y retrouve la planification efficace des tâches ainsi que l'adaptation flexible aux imprévus tout en respectant les délais.
                Une bonne gestion du temps permet d'améliorer la productivité et l'efficacité au travail et aussi de réduire le stress en évitant la surcharge et les situations de dernier moment.
                                `,

            }, {
                element: "Contexte d’utilisation",
                content: `
                    Durant mes études, c'est la compétence en emploi du temps et en organisation qui a été
                    <b>un élément central de mon succès</b> dans la réalisation de projets scolaires. 
                    J'ai très vite compris
                    l'importance de planifier mon agenda pour pourvoir m'adapter et m'organiser face à la charge de travail générée par de multiples projets. 
                    J'ai adopté <b>des outils de
                    gestion du temps</b> comme les calendriers numériques et les listes de tâches avec notamment Notion, qui
                    m’a aidé à visualiser mes objectifs professionnels et à les accomplir en les faisant coahbiter avec mes
                    activités personnelles. 
                    Lors de mes études, l'efficacité de ma méthode de travail a été <b>reconnue par mes
                    professeurs</b> qui m'ont souvent félicité de ma capacité à livrer des travaux de qualité dans les délais impartis
                    tout en étant impliqué à cent pourcent dans mes projets de groupe.
                <br/><br/>
                    C'est quand je suis entré dans le monde de l'entreprise qu'il y a eu une évolution significative dans ma maîtrise de la
                    gestion du temps et de l'organisation. En entreprise j'ai été confronté à des tâches plus complexes et à
                    des attentes plus élevées en termes de productivité et d'efficacité. 
                    C'est à ce moment que j'ai donc pu améliorer
                    ma capacité à me <b>définir des objectifs quotidiens</b> en fonction des priorités de l'entreprise. 
                    J'ai aussi compris et appris à faire face à l'imprévisible en améliorant mon <b>adaptabilité</b>. 
                    J'ai donc
                    commencé à utiliser des méthodes d'organisation plus avancées comme par exemple la technique <b>Pomodoro</b> pour
                    gérer mon temps de travail et les pauses et aussi des outils de gestion de projet en ligne tels que Jira
                    ou Trello en collaboration avec mes collègues pour suivre l'avancement des tâches.
                    Définir des objectifs quotidiens m'a permis de rester concentré et motivé en voyant clairement ce que je devais
                    réaliser chaque jour. 
                    C'est de cette manière que j'ai pu répondre aux attentes de mes supérieurs <b>mais souvent les dépasser</b>, en livrant des
                    résultats de qualité dans des délais serrés.
                <br/><br/>
                    En plus de mes responsabilités professionnelles le développement de mon application <a>YourNight</a>
                    pendant mon temps libre m'a permis d'encore plus développer ma capacité à gérer mon temps. 
                    Ce projet personnel que j'ai mené en parallèle de mon activité professionnelle a nécessité une
                    <b>planification</b> des tâches pour équilibrer le travail sur l'application mes obligations
                    professionnelles et mon temps libre. 
                    J'ai dû faire des choix sur la manière de répartir
                    mon temps en faisant attention à consacrer suffisament de temps au développement de YourNight sans
                    déranger sur les moments passés avec ma famille et mes amis. 
                    Ça a impliqué de travailler sur
                    l'application le soir et les week-ends tout en de gardant <b>un équilibre sain</b> pour ne
                    pas m'isoler. 
                    Il y a quand même eu des moments où la passion pour mon projet a emporté sur le
                    reste ceui m'a conduit à des légères périodes d'isolement.                 
                `,

            }, {
                element: "Regard critique",
                content: `
                    Ma compétence en gestion du temps et organisation est quelque chose que <b>je maîtrise bien</b>.
                    J'ai appris à <b>distinguer les priorités</b> à planifier efficacement mon emploi du temps et à m'adapter aux
                    imprévus tout en conservant un équilibre que je pense sain entre ma vie professionnelle et vie personnelle. 
                    Cependant je suis quand même conscient que la gestion du temps est une compétence qui peut toujours être améliorée surtout en
                    ce qui concerne <b>la prévention de l'isolement</b> lors de périodes de travail intense.
                <br/><br/>
                    C'est pour cette raison que j'accorde de l'importance à continuer
                    à travailler sur ma capacité à maintenir un équilibre sain à déléguer des tâches lorsque je peux le faire (c'est quelque chose en laquelle j'ai encore du mal aujourd'hui)
                    et à
                    me donner des pauses pour éviter l'épuisement.
                `,

            }, {
                element: "Evolution",
                content: `
                    Mon objectif sur le long terme est de parvenir au meilleur équilibre pour moi entre productivité
                    et vie personnelle en allouant du temps pour le repos pour éviter le
                    surmenage. 
                    C'est d'ailleurs pour cette raison que j'incorpore aujourd'hui des séances de sport dans mes journées à travers la musculation ou la boxe pour vider mon esprit et éviter toute surcharge mentale.
                <br/><br/>
                    Je suis également ouvert à apprendre de nouvelles stratégies de gestion du temps auprès des personnes qui m'entourent
                    ou à travers du contenu en ligne. Sur le long terme suis déterminé à continuer le développement de cette compétence pour devenir le plus efficace possible dans la
                    gestion de mes projets et responsabilités.            
                `,

            }, {
                element: "Réalisations liées",
                content: `YourNight, PREMIS DM, ISIS, Mat’ Moi Ca, Hypotech`
            }
        ]
    },
]