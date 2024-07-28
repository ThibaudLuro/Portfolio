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