var rowThree = document.querySelector('.rowThree');
var modalLegals = document.querySelector('.legals');
var typed =document.getElementById("typed");
var header = document.querySelector('header');
var mainGame = document.querySelector('.mainGame');
var Input = document.querySelector('#Input');
var overlay = document.querySelector('#overlay');
var countFound = document.querySelector('.countFound');
var result = document.querySelector('.result');
var afterGame = document.querySelector('.afterGame');
var modalDesc = document.querySelector('#modalDesc');
var langageDesc = document.querySelector('#langageDesc');
var titleModal = document.querySelector('.titleModal');
var modalImg = document.querySelector('.rowTwo > img');
var modalLanguage = document.querySelector('#modalLanguage');
var launchSave= document.querySelector('#launchSave');
var listLanguageFound = document.querySelector('#modalLanguage > ul');
var classError = ['error1','error2','error3'];
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Semicolon', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var checkCountRotate = 0;
var countForPercent;
var score = 0;
var erreur = 0;
var found = [];
var foundPos = 0;
var check;
var testWidth = 50;
var errorCountTest = 1;
let loader = 
`<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="C'est l'histoire d'un développeur web et de 12 futurs développeurs web qui
     se sont mis en tête de faire rayonner l'ACS de Lons le Saunier">
    <link rel="stylesheet" href="style.css">
    <title>popCode</title>
</head>
<body>
    <header>
        <h1 class="formateur papermaker starcraft">Alain</h1>
    </header>
    <section>
        <div class="exploratrice satisfactory jeanine">Pauline</div>
        <div class="EldenLord VTTiste">Julien</div>
        <div>Bernard</div>
        <div>Tiana</div>
        <div class="nature travail">Chris</div>
        <div>Jorge</div>
        <div>Hamza</div>
        <div>Karolos</div>
        <div>Vincent</div>
        <div class="theRat">Natan</div>
        <div class ="satisfactory organise automatise">Léo</div>
        <div class="civilization satisfactory weeb">Antoine</div>
    </section>
    <footer>
        <span id="en flammes">nos ordinateurs</span>
    </footer>
    <script src="app.js"></script>
</body>
</html> 
`;
var minInput = Input.textContent.toLowerCase();
const guessing = [{name:"HTML", percent:""},{name:"CSS", percent:""},{name:"JavaScript", percent:""},{name:"SQL", percent:""},{name:"Python", percent:""},{name:"Java", percent:""},{name:"Bash", percent:""},{name:"PowerShell", percent:""},{name:"C#", percent:""},{name:"PHP", percent:""},{name:"C++", percent:""},{name:"TypeScript", percent:""},{name:"C", percent:""},{name:"Ruby", percent:""},{name:"Go", percent:""},{name:"Assembly", percent:""},{name:"Swift", percent:""},{name:"Kotlin", percent:""},{name:"R", percent:""},{name:"VBA", percent:""},{name:"Objective-C", percent:""},{name:"Scala", percent:""},{name:"Rust", percent:""},{name:"Dart", percent:""},{name:"Elixir", percent:""},{name:"Clojure", percent:""},{name:"WebAssembly", percent:""}];
const guessingMin = [];
const modalContentArray = [
    {name: 'HTML', description: "Le HyperText Markup Language, généralement abrégé HTML ou, dans sa dernière version, HTML5, est le langage de balisage conçu pour représenter les pages web.Ce langage permet : d’écrire de l’hypertexte, d’où son nom,de structurer sémantiquement la page,de mettre en forme le contenu,de créer des formulaires de saisie, d’inclure des ressources multimédias dont des images, des vidéos, et des programmes informatiques,de créer des documents interopérables avec des équipements très variés de manière conforme aux exigences de l’accessibilité du web. Il est souvent utilisé conjointement avec le langage de programmation JavaScript et des feuilles de style en cascade (CSS). HTML est inspiré du Standard Generalized Markup Language (SGML). Il s'agit d'un format ouvert.", img: 'HTML.svg',alt:'Logo HTML'},
    {name: 'CSS', description: "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML. Les standards définissant CSS sont publiés par le World Wide Web Consortium (W3C). Introduit au milieu des années 1990, CSS devient couramment utilisé dans la conception de sites web et bien pris en charge par les navigateurs web dans les années 2000.", img: 'CSS.svg',alt:'Logo CSS'},
    {name: 'JavaScript', description: "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives et à ce titre est une partie essentielle des applications web. Avec les langages HTML et CSS, JavaScript est au cœur des langages utilisés par les développeurs web. Une grande majorité des sites web l'utilisent, et la majorité des navigateurs web disposent d'un moteur JavaScript pour l'interpréter.JavaScript est aussi employé pour les serveurs Web avec l'utilisation (par exemple) de Node.js ou de Deno.JavaScript a été créé en 1995 par Brendan Eich et intégré au navigateur web Netscape Navigator 2.0. L'implémentation concurrente de JavaScript par Microsoft dans Internet Explorer jusqu'à sa version 9 se nommait JScript, tandis que celle d'Adobe Systems se nommait ActionScript. JavaScript a été standardisé sous le nom d'ECMAScript en juin 1997 par Ecma International dans le standard ECMA-262. La version en vigueur de ce standard depuis juin 2022 est la 13e édition.C'est un langage orienté objet à prototype : les bases du langage et ses principales interfaces sont fournies par des objets. Cependant, à la différence d'un langage orienté objets, les objets de base ne sont pas des instances de classes. En outre, les fonctions sont des objets de première classe. Le langage supporte le paradigme objet, impératif et fonctionnel.JavaScript est le langage possédant le plus large écosystème grâce à son gestionnaire de dépendances npm, avec environ 500 000 paquets en août 2017.", img: 'JavaScript.svg',alt:'Logo JavaScript'},
    {name: 'SQL', description: "SQL (sigle de Structured Query Language, en français langage de requête structurée) est un langage informatique normalisé servant à exploiter des bases de données relationnelles. La partie langage de manipulation des données de SQL permet de rechercher, d'ajouter, de modifier ou de supprimer des données dans les bases de données relationnelles.Outre le langage de manipulation des données  :le langage de définition des données permet de créer et de modifier l'organisation des données dans la base de données,le langage de contrôle de transaction permet de commencer et de terminer des transactions,le langage de contrôle des données permet d'autoriser ou d'interdire l'accès à certaines données à certaines personnes.Créé en 1974, normalisé depuis 1986, le langage est reconnu par la grande majorité des systèmes de gestion de bases de données relationnelles (abrégé SGBDR) du marché.SQL fait partie de la même famille que les langages ALPHA (dont il est le descendant), SQUARE, QUEL (intégré à Ingres) ou QBE (Zloof). Il a été appelé SEQUEL à sa naissance, mais ce nom a été changé en SQL du fait que SEQUEL était une marque déposée de l'avionneur Hawker-Siddeley.", img: 'SQL.svg',alt:'Logo SQL'},
    {name: 'Python', description: "Python (prononcé /pi.tɔ̃/) est un langage de programmation interprété, multi-paradigme et multiplateformes. Il favorise la programmation impérative structurée, fonctionnelle et orientée objet. Il est doté d'un typage dynamique fort, d'une gestion automatique de la mémoire par ramasse-miettes et d'un système de gestion d'exceptions ; il est ainsi similaire à Perl, Ruby, Scheme, Smalltalk et Tcl.Le langage Python est placé sous une licence libre proche de la licence BSD et fonctionne sur la plupart des plates-formes informatiques, des smartphones aux ordinateurs centraux, de Windows à Unix avec notamment GNU/Linux en passant par macOS, ou encore Android, iOS, et peut aussi être traduit en Java ou .NET. Il est conçu pour optimiser la productivité des programmeurs en offrant des outils de haut niveau et une syntaxe simple à utiliser.Il est également apprécié par certains pédagogues qui y trouvent un langage où la syntaxe, clairement séparée des mécanismes de bas niveau, permet une initiation aisée aux concepts de base de la programmation.", img: 'Python.png',alt:'Logo Python'},
    {name: 'Java', description: "Java est une technique informatique développée initialement par Sun Microsystems puis acquise par Oracle à la suite du rachat de l'entreprise. Défini à l'origine comme un langage de programmation, Java a évolué pour devenir un ensemble cohérent d'éléments techniques et non techniques. Ainsi, la technologie Java regroupe :Des standards (la plate-forme Java) définis sous forme de spécification par le Java Community Process (JCP), en trois éditions :Java SE (standard edition),Java EE (enterprise edition), s'appuyant sur Java SE,Java ME (micro edition), indépendante des deux précédentes ;Des logiciels (langages informatiques, bibliothèques, frameworks, serveurs d'application, outils d'aide au développement), dont :Des implémentations (concurrentes) de ces spécifications,Un écosystème d'autres logiciels s'appuyant sur tout ou partie de ces standards, voire leur faisant concurrence ;Des communautés d'entreprises, organisations à but non lucratif (fondations, Java User Groups, universités) et indépendants, membres ou non du JCP, possédant tout ou partie des marques, brevets, parts de marché liés à la technologie Java.Java est un des termes les plus connus du monde de l'informatique et de l'Internet. Sa notoriété est telle que Sun, avant d'être acheté par Oracle Corporation, a décidé de l'utiliser pour son symbole boursier au Nasdaq, symbole qui était SUNW à l'origine, et est devenu JAVA.Java est utilisé dans une grande variété de plates-formes depuis les systèmes embarqués et les téléphones mobiles, les ordinateurs individuels, les serveurs, les applications d’entreprise, les superordinateurs, etc.", img: 'Java.svg',alt:'Logo Java'},
    {name: 'Bash', description: "Bash (acronyme de Bourne-Again shell) est un interpréteur en ligne de commande de type script. C'est le shell Unix du projet GNU.Fondé sur le Bourne shell, Bash lui apporte de nombreuses améliorations, provenant notamment du Korn shell et du C shell. Bash est un logiciel libre publié sous licence publique générale GNU. Il est l'interprète par défaut sur de nombreux Unix libres, notamment sur les systèmes GNU/Linux. C'était aussi le shell par défaut de Mac OS X, remplacé avec macOS Catalina (10.15) par zsh. Il a été d'abord porté sous Microsoft Windows par le projet Cygwin, et depuis Windows 10 constitue une option à part entière du système d'exploitation, nommée Windows Subsystem for Linux.", img: 'Bash.png',alt:'Logo Bash'},
    {name: 'PowerShell', description: "Windows PowerShell, anciennement Microsoft Command Shell (MSH), nom de code Monad, est une suite logicielle développée par Microsoft qui intègre une interface en ligne de commande, un langage de script nommé PowerShell ainsi qu'un kit de développement. Il est inclus dans Windows 7, Windows 8.1, Windows 10 et Windows 11 (y compris les versions grand public) et s'appuie sur le framework Microsoft .NET.", img: 'PowerShell.png',alt:'Logo PowerShell'},
    {name: 'C#', description: "C# (C sharp [siː.ʃɑːp] en anglais britannique) est un langage de programmation orientée objet, commercialisé par Microsoft depuis 2002 et destiné à développer sur la plateforme Microsoft .NET.Il est dérivé du C++ et très proche du Java dont il reprend la syntaxe générale ainsi que les concepts, y ajoutant des notions telles que la surcharge des opérateurs, les indexeurs et les délégués. Il est utilisé notamment pour développer des applications web sur la plateforme ASP.NET.", img: 'Csharp.svg',alt:'Logo C#'},
    {name: 'PHP', description: "PHP: Hypertext Preprocessor, plus connu sous son sigle PHP (sigle auto-référentiel), est un langage de programmation libre, principalement utilisé pour produire des pages Web dynamiques via un serveur HTTP, mais pouvant également fonctionner comme n'importe quel langage interprété de façon locale. PHP est un langage impératif orienté objet.PHP a permis de créer un grand nombre de sites web célèbres, comme Facebook et Wikipédia. Il est considéré comme une des bases de la création de sites web dits dynamiques mais également des applications web.", img: 'PHP.svg',alt:'Logo PHP'},
    {name: 'C++', description: "C++ est un langage de programmation compilé permettant la programmation sous de multiples paradigmes, dont la programmation procédurale, la programmation orientée objet et la programmation générique. Ses bonnes performances, et sa compatibilité avec le C en font un des langages de programmation les plus utilisés dans les applications où la performance est critique.Créé initialement par Bjarne Stroustrup dans les années 1980, le langage C++ est aujourd'hui normalisé par l'ISO. Sa première normalisation date de 1998 (ISO/CEI 14882:1998), ensuite amendée par l'erratum technique de 2003 (ISO/CEI 14882:2003). Une importante mise à jour a été ratifiée et publiée par l'ISO en septembre 2011 sous le nom de ISO/IEC 14882:2011, ou C++11. Depuis, des mises à jour sont publiées régulièrement : en 2014 (ISO/CEI 14882:2014, ou C++14), en 2017 (ISO/CEI 14882:2017, ou C++17) puis en 2020 (ISO/IEC 14882:2020, ou C++20).", img: 'C++.svg',alt:'Logo C++'},
    {name: 'TypeScript', description: "TypeScript est un langage de programmation libre et open source développé par Microsoft qui a pour but d'améliorer et de sécuriser la production de code JavaScript. Il s'agit d'un sur-ensemble syntaxique strict de JavaScript (c'est-à-dire que tout code JavaScript correct peut être utilisé avec TypeScript). Le code TypeScript est transcompilé en JavaScript, et peut ainsi être interprété par n'importe quel navigateur web ou moteur JavaScript. TypeScript a été cocréé par Anders Hejlsberg, principal inventeur de C#.TypeScript permet un typage statique optionnel des variables et des fonctions, la création de classes et d'interfaces, l'import de modules, tout en conservant l'approche non-contraignante de JavaScript. Il supporte la spécification ECMAScript 6.TypeScript prend en charge les fichiers de définition qui peuvent contenir des informations sur le type des bibliothèques JavaScript existantes, tout comme les fichiers d'en-tête C++ peuvent décrire la structure des fichiers objets existants. Cela permet à d'autres programmes d'utiliser les valeurs définies dans les fichiers comme s'il s'agissait d'entités TypeScript de type statique. Il existe des fichiers d'en-tête tiers pour les bibliothèques populaires telles que jQuery et D3.js. Des en-têtes TypeScript pour les modules de base Node.js sont également disponibles, permettant le développement de programmes Node.js dans TypeScript.Le compilateur TypeScript est lui-même écrit en TypeScript et compilé en JavaScript. Il est sous licence Apache License 2.0. TypeScript est inclus en tant que langage de programmation de première classe dans Microsoft Visual Studio 2013 Update 2 et versions ultérieures, à côté de C# et d'autres langages Microsoft. Une extension officielle permet également à Visual Studio 2012 de prendre en charge TypeScript. Anders Hejlsberg, architecte principal de C# et créateur de Delphi et Turbo Pascal, a travaillé sur le développement de TypeScript.", img: 'Typescript.svg',alt:'Logo Typescript'},
    {name: 'C', description: "C est un langage de programmation impératif généraliste, de bas niveau. Inventé au début des années 1970 pour réécrire Unix, C est devenu un des langages les plus utilisés, encore de nos jours. De nombreux langages plus modernes comme C++, C#, Java et PHP ou JavaScript ont repris une syntaxe similaire au C et reprennent en partie sa logique. C offre au développeur une marge de contrôle importante sur la machine (notamment sur la gestion de la mémoire) et est de ce fait utilisé pour réaliser les « fondations » (compilateurs, interpréteurs…) de ces langages plus modernes.", img: 'C.svg',alt:'Logo C'},
    {name: 'Ruby', description: "Ruby est un langage de programmation libre. Il est interprété, orienté objet et multi-paradigme. Le langage a été standardisé au Japon en 2011 (JIS X 3017:2011), et en 2012 par l'Organisation internationale de normalisation (ISO 30170:2012).", img: 'Ruby.svg',alt:'Logo Ruby'},
    {name: 'Go', description: "Go est un langage de programmation compilé et concurrent inspiré de C et Pascal. Ce langage a été développé par Google à partir d’un concept initial de Robert Griesemer (en), Rob Pike et Ken Thompson. Go possède deux implémentations : la première utilise gc, le compilateur Go ; la seconde utilise gccgo, « frontend » GCC écrit en C++. Go est écrit en C en utilisant yacc et GNU Bison pour l’analyse syntaxique jusqu’à la version 1.4, et en Go lui-même pour les versions suivantes (1.5).Logo de Google GoMascotte de Google Go.Un objectif de Go est donné par Rob Pike, l’un de ses trois créateurs, qui dit à propos des développeurs inexpérimentés : « Ils ne sont pas capables de comprendre un langage brillant, mais nous voulons les amener à réaliser de bons programmes. Ainsi, le langage que nous leur donnons doit être facile à comprendre et facile à adopter »Go veut faciliter et accélérer la programmation à grande échelle : en raison de sa simplicité, il est donc concevable de l’utiliser aussi bien pour écrire des applications, des scripts ou de grands systèmes. Cette simplicité est nécessaire aussi pour assurer la maintenance et l’évolution des programmes sur plusieurs générations de développeurs.S’il vise aussi la rapidité d’exécution, indispensable à la programmation système, il considère le multithreading comme le moyen le plus robuste d’assurer sur les processeurs actuels cette rapidité tout en rendant la maintenance facile par séparation de tâches simples exécutées indépendamment afin d’éviter de créer des « usines à gaz ». Cette conception permet également le fonctionnement sans réécriture sur des architectures multi-cœurs en exploitant immédiatement l’augmentation de puissance correspondante.", img: 'Go.svg',alt:'Logo Go'},
    {name: 'Assembly', description: "En programmation informatique , le langage d'assemblage (ou langage assembleur , ou code machine symbolique), est tout langage de programmation de bas niveau avec une très forte correspondance entre les instructions du langage et l' architecture. instructions du code machine . Le langage d'assemblage a généralement une déclaration par instruction machine (1: 1), mais les constantes, les commentaires , les directives d' assembleur , les étiquettes symboliques de, par exemple,les emplacements de mémoire , les registres et les macros sont généralement également pris en charge.", img: 'Assembly.svg',alt:'Logo Assembly'},
    {name: 'Swift', description: "Swift (langage d'Apple) est un langage de programmation objet compilé, multi-paradigmes, qui se veut simple, performant et sûr. Il est développé en open source.Le projet de développement de Swift est géré par Apple, qui en est également le principal contributeur ; mais de nombreux membres de la communauté Swift, ainsi que d'autres acteurs, tels que Google et IBM, participent également à son développement. Swift est officiellement supporté sur les systèmes d'exploitation Ubuntu, iOS, macOS, watchOS et tvOS. Un support non officiel (géré par la communauté) existe pour d'autres plateformes Linux, telles que Debian et Fedora.Un manuel officiel en anglais est disponible en ligne.Swift dispose d'une interopérabilité avec le langage C ainsi qu'avec l'Objective-C sur les plateformes d'Apple.Le compilateur de Swift utilise LLVM pour la génération du code machine.", img: 'Swift.png',alt:'Logo Swift'},
    {name: 'Kotlin', description: "Kotlin est un langage de programmation orienté objet et fonctionnel, avec un typage statique qui permet de compiler pour la machine virtuelle Java, JavaScript, et vers plusieurs plateformes en natif (grâce à LLVM). Son développement provient principalement d'une équipe de programmeurs chez JetBrains basée à Saint-Pétersbourg en Russie (son nom vient de l'île de Kotline, près de St. Pétersbourg).Google annonce pendant la conférence Google I/O 2017 que Kotlin devient le second langage de programmation officiellement pris en charge par Android après Java. Le 8 mai 2019, toujours lors de la conférence Google I/O, Kotlin devient officiellement le langage de programmation voulu et recommandé par le géant américain Google pour le développement des applications Android.Pivotal Software annonce le 4 janvier 2017 le support officiel de Kotlin sur la cinquième version du Framework Spring.", img: 'Kotlin.svg',alt:'Logo Kotlin'},
    {name: 'R', description: "R est un langage de programmation et un logiciel libre destiné aux statistiques et à la science des données soutenu par la R Foundation for Statistical Computing. Il fait partie de la liste des paquets GNU et est écrit en C, Fortran et R.GNU R est un logiciel libre distribué selon les termes de la licence GNU GPL. Le site officiel fournit des binaires pour Linux, Windows et macOS, et des portages existent pour d'autres systèmes d'exploitation.Le langage R est largement utilisé par les statisticiens, les data miners, data scientists pour le développement de logiciels statistiques et l'analyse des données.En janvier 2022, R est classé 12e dans l'index TIOBE qui mesure la popularité des langages de programmation.", img: 'R.png',alt:'Logo R'},
    {name: 'VBA', description: "Visual Basic for Applications (VBA) est une implémentation de Microsoft Visual Basic qui est intégrée dans toutes les applications de Microsoft Office, dans quelques autres applications Microsoft comme Visio et au moins partiellement dans quelques autres applications comme AutoCAD, WordPerfect, MicroStation, Solidworks ou encore ArcGIS. Il remplace et étend les capacités des langages macro spécifiques aux plus anciennes applications comme le langage WordBasic intégré à une ancienne version du logiciel Word, et peut être utilisé pour contrôler la quasi-totalité de l'IHM des applications hôtes, ce qui inclut la possibilité de manipuler les fonctionnalités de l'interface utilisateur comme les menus, et de personnaliser les boîtes de dialogue et les formulaires utilisateurs.Comme son nom l'indique, VBA est très lié à Visual Basic (les syntaxes et concepts des deux langages se ressemblent), mais ne peut normalement qu'exécuter du code dans une application hôte Microsoft Office (et non pas d'une application autonome, il requiert donc une licence de la suite bureautique Microsoft). Il peut cependant être utilisé pour contrôler une application à partir d'une autre (par exemple, créer automatiquement un document Word à partir de données Excel). Le code ainsi exécuté est stocké dans des instances de documents, on l'appelle également macro.VBA est fonctionnellement riche et extrêmement flexible, mais il possède d'importantes limitations, comme son support limité des fonctions de rappel (callbacks), ainsi qu'une gestion des erreurs archaïque, utilisation de handlers d'erreurs en lieu et place d'un mécanisme d'exceptions.Même si ces limitations rendent ce langage très peu utilisé par les développeurs informaticiens soucieux d'utiliser des outils avant tout performants, sa simplicité et sa facilité d'accès ont séduit certaines professions, notamment dans la finance.", img: 'VBA.jpg',alt:'Logo VBA'},
    {name: 'Objective-C', description: "Objective-C est un langage de programmation orienté objet réflexif. C'est une extension du C ANSI, comme le C++, mais qui se distingue de ce dernier par sa distribution dynamique des messages, son typage faible ou fort, son typage dynamique et son chargement dynamique. Contrairement au C++, il ne permet pas l'héritage multiple mais il existe toutefois des moyens de combiner les avantages de C++ et d'Objective-C.Aujourd'hui, il est principalement utilisé dans les systèmes d'exploitation d'Apple : macOS et son dérivé iOS, basés sur la bibliothèque de classes Cocoa mais il existe aussi une bibliothèque de classes libre GNUstep sous GNU/Linux. Cocoa et GNUstep sont les successeurs de l'API OpenStep, utilisée dans les systèmes d'exploitation NeXTSTEP (à l'origine de macOS) et son pendant libre OPENSTEP.", img: 'Objective-c.svg',alt:'Logo Objective-C'},
    {name: 'Scala', description: "Scala est un langage de programmation multi-paradigme conçu à l'École polytechnique fédérale de Lausanne (EPFL) pour exprimer les modèles de programmation courants dans une forme concise et élégante. Son nom vient de l'anglais Scalable language qui signifie à peu près « langage adaptable » ou « langage qui peut être mis à l'échelle ». Il peut en effet être vu comme un métalangage.Scala intègre les paradigmes de programmation orientée objet et de programmation fonctionnelle, avec un typage statique. Il concilie ainsi ces deux paradigmes habituellement opposés (à de rares exceptions près, telle que le langage OCaml) et offre au développeur la possibilité de choisir le paradigme le plus approprié à son problème.Il est prévu pour être compilé en bytecode Java (exécutable sur la JVM), ou .NET. Seule la plateforme Java est supportée officiellement par l'EPFL.Si on souhaite l'utiliser exclusivement avec la JVM, il est alors possible d'utiliser les bibliothèques écrites en Java de façon complètement transparente. Ainsi, Scala bénéficie de la maturité et de la diversité des bibliothèques qui ont fait la force de Java depuis une dizaine d'années. De plus, il est possible d'invoquer du code écrit en Scala à partir de programmes écrits en Java ce qui facilite la transition de Java à Scala.Les développeurs habitués à un seul paradigme (par exemple ceux ayant utilisé principalement Java qui, lui, repose sur la programmation orientée objet) peuvent trouver ce langage déroutant et difficile car il nécessite l'apprentissage de concepts différents si on veut pouvoir exploiter tout son potentiel. Néanmoins, il est tout à fait possible de l'utiliser dans un premier temps comme remplaçant de Java, en profitant alors de sa syntaxe épurée, puis d'utiliser les différents « nouveaux » concepts au fur et à mesure de leur apprentissage.", img: 'Scala.svg',alt:'Logo Scala'},
    {name: 'Rust', description: "Rust est un langage de programmation compilé multi-paradigme conçu et développé par Mozilla Research depuis 2010. Il a été conçu pour être « un langage fiable, concurrent, pratique » supportant les styles de programmation purement fonctionnel, modèle d'acteur, procédural, ainsi qu'orienté objet sous certains aspects.En 2020, ses domaines de prédilection sont la programmation système, les applications en ligne de commande, les applications Web via WebAssembly, les services réseaux et les systèmes embarqués.Du fait de la politique de Mozilla, Rust est entièrement développé de façon ouverte (les ingénieurs de Mozilla Research publient leurs idées et les décisions prises lors des réunions) et sollicite les remarques et contributions de la communauté. La conception du langage est graduellement améliorée au travers des retours de l'équipe travaillant sur le moteur de rendu Servo et de façon pragmatique lors de l'écriture du compilateur. Bien que le projet soit financé par Mozilla, la majorité des contributions proviennent de la communauté.", img: 'Rust.png',alt:'Logo Rust'},
    {name: 'Dart', description: "Dart est un langage de programmation optimisé pour les applications sur plusieurs plateformes. Il est développé par Google et est utilisé pour créer des applications mobiles, de bureau, de serveur et web.Dart est un langage orienté objet à ramasse-miettes avec une syntaxe de type C++. Dart peut se compiler en code natif ou en JavaScript. Il prend en charge les interfaces, les mixins,les classes abstraites, les génériques réifiés et l'inférence de type.", img: 'Dart.svg',alt:'Logo Dart'},
    {name: 'Elixir', description: "Elixir est un langage de programmation multi-paradigme fonctionnant sur la machine virtuelle Erlang (BEAM). Il est créé en 2011 par le développeur José Valim, personnalité du monde Ruby et l'un des premiers contributeurs au framework de programmation Ruby on Rails. Il intègre les paradigmes de programmation fonctionnelle, programmation concurrente et programmation orientée processus (en), et supporte la métaprogrammation via un système de macros et le polymorphisme via un système dit de protocoles.", img: 'Elixir.png',alt:'Logo Elixir'},
    {name: 'Clojure', description: "Clojure est un langage de programmation fonctionnel compilé, multi-plateforme et destiné à la création de programmes sûrs et facilement distribuables. C’est un dialecte de Lisp. Il transpile vers du bytecode Java, du code JavaScript et du bytecode .NET. Clojure est donc disponible sur la JVM, le CLR, les navigateurs et Node.js.", img: 'Clojure.svg',alt:'Logo Clojure'},
    {name: 'WebAssembly', description: "WebAssembly, abrégé wasm, est un standard du World Wide Web pour le développement d’applications. Il est conçu pour compléter JavaScript avec des performances supérieures. Le standard consiste en un bytecode, sa représentation textuelle et un environnement d'exécution dans un bac à sable compatible avec JavaScript. Il peut être exécuté dans un navigateur Web et en dehors. WebAssembly est standardisé dans le cadre du World Wide Web Consortium.Comme WebAssembly ne spécifie qu'un langage de bas niveau, le bytecode est généralement produit en compilant un langage de plus haut niveau. Parmi les premiers langages supportés figurent Rust avec le projet/module (crate) wasm-bindgen ainsi que le C et C++, compilés avec Emscripten (basé sur LLVM). De nombreux autres langages de programmation possèdent aujourd'hui un compilateur WebAssembly, parmi lesquels : C#, Go, Java, Lua, Python ou Ruby.Les navigateurs Web compilent le bytecode wasm dans le langage machine de l'hôte sur lequel ils sont utilisés avant de l'exécuter.", img: 'WebAssembly.svg',alt:'Logo WebAssembly'},
]
const str1 = '';
const str2 = '';
const levenshteinDistance = (str1 = '', str2 = '') => {
   const track = Array(str2.length + 1).fill(null).map(() =>
   Array(str1.length + 1).fill(null));
   for (let i = 0; i <= str1.length; i += 1) {
      track[0][i] = i;
   }
   for (let j = 0; j <= str2.length; j += 1) {
      track[j][0] = j;
   }
   for (let j = 1; j <= str2.length; j += 1) {
      for (let i = 1; i <= str1.length; i += 1) {
         const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
         track[j][i] = Math.min(
            track[j][i - 1] + 1, // deletion
            track[j - 1][i] + 1, // insertion
            track[j - 1][i - 1] + indicator, // substitution
         );
      }
   }
   return track[str2.length][str1.length];
};
function typingText(text, speed) {
    let i = 0;
    var timer = setInterval(function () {
        if (i < text.length) {
            typed.textContent += text.charAt(i);
            i++;
        } else {
            typed.classList.add('fade')
            clearInterval(timer);
            setTimeout(() => {
                typed.remove();
            }, 1000);
        }
    }, speed);
}
function checkScore() {
    if (score === guessing.length - 1) {
        clearTimeout();
        setTimeout(() => {
            result.textContent = 'Vous avez gagné !';
            afterGame.classList.add('fadeIn');
            afterGame.classList.remove('none');
            setTimeout(() => {
                mainGame.classList.add('none');
            }, 1000);
            localStorage.removeItem('found');
            localStorage.removeItem('score');
            localStorage.removeItem('error');
            return;
        }, 5000);
    }
    else{
        Input.textContent = '';
        score++;
        localStorage.setItem('score', score);
        countFound.textContent = score;
    }
}
function removenone(){
    overlay.classList.remove('none');
}
function none(){
    overlay.classList.add('none');
}
function checkAlreadyGuess(target){
    for (let a = 0; a < found.length; a++) {
        if (found[a] === target) {
            return true;
        }
    }
    return false;
}
function contentModal(target){
    for (let i = 0; i < modalContentArray.length; i++) {
        if (modalContentArray[i].name === target) {
            titleModal.textContent = modalContentArray[i].name;
            langageDesc.textContent = modalContentArray[i].description;
            modalImg.src = 'assets/img/' + modalContentArray[i].img;
            modalImg.alt = modalContentArray[i].alt;
            break;  
        }
    }
}
for (let a = 0; a < guessing.length; a++) {
    guessingMin[a] = guessing[a].name.toLowerCase();
    countForPercent = 0;
    for (let b = 0; b < guessing[a].name.length; b++) {
        countForPercent++;
    }
    countForPercent = Math.ceil((countForPercent/100)*80);
    guessing[a].percent = guessing[a].name.length - countForPercent;
}
typingText(loader, 0);
zoom({
    active: "zoom-active", // Class added to container when it is zoomed
    transition: "zoom-transition", // Class added to images when they are being animated, class is removed after animation is finished
    visible: "visible", // Class added to images after they are loaded,
    zoom: "zoom" // Image container class
  }, {
    scaleDefault: 2, // Used on doubleclick, doubletap and resize
    scaleDifference: 0.5, // Used on wheel zoom
    scaleMax: 10, // Maximum zoom
    scaleMin: 1, // Minimum zoom
    scrollDisable: true, // Disable page scrolling when zooming an image
    transitionDuration: 200, // This should correspond with zoom-transition transition duration
    doubleclickDelay: 300 // // Delay between clicks - used when scripts decides if user performed doubleclick or not
});
document.querySelector('#launchGame').addEventListener('click', function () {
    header.classList.add('none');
    mainGame.classList.remove('none');
    localStorage.removeItem('found');
    localStorage.removeItem('score');
    localStorage.removeItem('error');
    found = [];
    listLanguageFound.innerHTML = found;
})
overlay.addEventListener('click', function(){
    if (Input.textContent ==='') {
        none();
    }
});
window.addEventListener('keydown', function checking(e) {
    if (modalLegals.classList.contains('none') === false) {
        return;
    }
    if (mainGame.classList.contains('none')) {
        return;
    }
    if (modalDesc.classList.contains('none') === false) {
        modalDesc.classList.add('none');
    }
    if (modalLanguage.classList.contains('none') === false) {
        modalLanguage.classList.add('none');
    }
    if (Input.textContent !== '') {
        if (e.code === "Enter"){
            clearTimeout();
            minInput = Input.textContent.toLowerCase();
            checkCountRotate = 0;
            for (let i = 0; i < guessing.length; i++) {
                if (levenshteinDistance(minInput, guessingMin[i]) <= guessing[i].percent) {
                    if (countForPercent >= guessing[i].percent){
                        check = checkAlreadyGuess(guessing[i].name);
                        if (check === true) {
                            overlay.classList.add('none');
                            Input.textContent = '';
                            return;
                        }
                        checkScore();
                        contentModal(guessing[i].name);
                        if (rowThree.classList.contains('none') === true) {
                            rowThree.classList.remove('none');
                        }
                        overlay.classList.add('none');
                        modalDesc.classList.remove('none');
                        listLanguageFound.innerHTML = listLanguageFound.innerHTML+ "<li id='"+ guessing[i].name +"'>" + guessing[i].name + "</li>";
                        found.push(guessing[i].name);
                        localStorage.setItem('found', JSON.stringify(found));
                        if (document.querySelector('#checkBoxClosing').checked === true) {
                            setTimeout(() => {
                                modalDesc.classList.add('none');
                            }, 2000);
                        }
                    return;
                    }
                }
                checkCountRotate++;
            }
            if (checkCountRotate === guessing.length) {
                    switch(erreur){
                        case 0:
                            Input.textContent = '';
                            erreur++;
                            document.querySelector('.error1').classList.add('lightBlue');
                            localStorage.setItem('error', erreur);
                            break;
                        case 1:
                            Input.textContent = '';
                            erreur++;
                            document.querySelector('.error2').classList.add('lightBlue');
                            localStorage.setItem('error', erreur);
                            break;
                        case 2:
                            Input.textContent = '';
                            erreur++;
                            document.querySelector('.error3').classList.add('lightBlue');
                            result.innerHTML = "Vous avez perdu ! <br> Vous avez trouvé "+score+" langages présents dans l'image";
                            afterGame.classList.add('fadeIn');
                            afterGame.classList.remove('none');
                            setTimeout(() => {
                                mainGame.classList.add('none');
                            }, 1000);
                            break;
                    }
                    overlay.classList.add('none');
                    return;
            }
        }
        if (e.code ==='Backspace'){
            Input.textContent = Input.textContent.slice(0, -1);
            return;
        }    
    }
    for (let z = 0; z < letters.length; z++) {
        if (e.code === "Key"+letters[z] || e.code === letters[z] || e.key === '-' || e.key ==='#' || e.key === '+') {
            if(overlay.classList[0] === 'none'){
            clearTimeout()
            removenone();
            }
            document.querySelector('#Input').textContent += e.key
            return;
        }
    }
})
document.querySelector('.relaunch').addEventListener('click', function(){
    score = 0;
    erreur = 0;
    found = [];
    countFound.textContent = score;
    for (let z = 0; z < classError.length; z++) {
        document.querySelector('.'+classError[z]).classList.remove('lightBlue');
    }
    afterGame.classList.add('none');
    header.classList.remove('none');
    if (modalDesc.classList.contains('none') === false) {
        modalDesc.classList.add('none');
    }
    titleModal.textContent = '';
    langageDesc.textContent = '';
    modalImg.src = '';
    modalImg.alt = '';
})
document.querySelector('.closeModal').addEventListener('click', function(){
    modalDesc.classList.add('none');
})
document.querySelector('.languageFound').addEventListener('click',function(){
    modalLanguage.classList.remove('none');
})
modalLanguage.addEventListener('click',function(e){
    if (e.target.id === 'modalLanguage') {
        modalLanguage.classList.add('none');
    }else{
        modalLanguage.classList.add('none');
        contentModal(e.target.id);
        modalDesc.classList.remove('none');
        rowThree.classList.add('none');
    }
});
mainGame.addEventListener('wheel', function(e){
    document.querySelector('.fill').style.height = 10*document.querySelector('#bgMainGame').dataset.scale+'%';
});
document.querySelector('.legalsButton').addEventListener('click', function(){
    modalLegals.classList.remove('none');
});
modalLegals.addEventListener('click', function(){
    modalLegals.classList.add('none');
});
if (parseInt(localStorage.getItem('error')) < 2 || parseInt(localStorage.getItem('score')) < guessing.length) {
    launchSave.addEventListener('click', function(){
        score = parseInt(localStorage.getItem('score'));
        erreur = parseInt(localStorage.getItem('error'));
        found = JSON.parse(localStorage.getItem('found'));
        for (let i = 0; i < found.length; i++) {
            listLanguageFound.innerHTML = listLanguageFound.innerHTML+ '<li>' + found[i] + '</li>';
        }
        countFound.textContent = score;
        switch(erreur){
            case 1:
                document.querySelector('.error1').classList.add('lightBlue');
                break;
            case 2:
                document.querySelector('.error2').classList.add('lightBlue');
                break;
        }
        header.classList.add('none');
        mainGame.classList.remove('none');
    })
}
else{
    launchSave.classList.add('none');
}  
fetch('assets/js/legals.json').then(responce => responce.json().then(responce => {
    document.querySelector('.legalsTitle').insertAdjacentHTML('beforeend', responce.title)
    document.querySelector('.legals > div').insertAdjacentHTML('beforeend', responce.content)
}))