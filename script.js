	var app = angular.module('myApp', ['ngRoute', 'pascalprecht.translate']);

	// configure our routes
	app.config(function($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})
			
			.when('/images', {
				templateUrl : 'pages/images.html',
				controller  : 'imageController'
			})
			
			.when('/inspection', {
				templateUrl : 'pages/inspection.html',
				controller  : 'inspectionController'
			})
			
			.when('/links', {
				templateUrl : 'pages/links.html',
				controller  : 'linksController'
			})
			.otherwise({
			redirectTo: '/home'
			});
	});

	
	// This is for the multilang site
app.config(function ($translateProvider) {
  $translateProvider.translations('en', {
    btn_lang_en: 'Francais',
    home: 'Home',
    about: 'About',
	inspection: 'Inspection',
    images: 'Pictures',
	contact: 'Contact',
	links: 'Links',
	close: 'Close',
	
	home_about: '100% bilingual. Errors and omissions insurance. Available 7 days a week. The most comprehensive report in the industry, complete with pictures, printed on site in the language of your choice.',
	home_professionnal: 'The most comprehensive report in the industry, complete with pictures, printed on site in the language of your choice.',
	home_noteasy: 'It\'s not always easy chosing the house you will live in. Get some profesionnal help to make the best choice.',
	home_btn_extra: 'Extra information',
	home_img_1: 'Want to know how the inspection goes?',
	home_img_1_1: 'The inspection, the report and the cost',
	home_img_2: 'John Horner, home inspector',
	home_img_2_1: 'Get to know the owner and inspector',
	home_img_2_2: 'Learn more',
	home_img_3: 'Curious to see what it looks like?',
	home_img_3_1: 'Look through a library of images',
	home_themost: 'The most comprehensive report in the industry, complete with pictures, printed on site in the language of your choice.',
	home_list_1: 'Pre-delivery inspections',
	home_list_2: 'Pre-purchase inspections',
	home_list_3: 'Pre-sale inspections',
	home_list_4: 'After-sale inspections',
	home_registered: 'Registered provider:',
	home_list_5: 'Brookfield Global Relocations',
	home_list_6: 'Canadian Forces Appreciation Program',
	home_list_7: 'Thermal Imaging',
	home_list_8: 'WETT Certified',
	home_proud: 'Proudly performing non alarmist and unbiased inspections for over 8 years.',
	
	about_header: 'John Horner, owner and home inspector',
	about_para: 'Buying a house is an exciting experience. However, it is also a challenging one. Before making a decision regarding one of the biggest financial investments of your life, it is essential that you understand the condition of a particular home.In order to protect your investment, professional home inspector; John will not only inform you about the condition of the home, but will also give you tips and instruction on how to maintain your home over the years.',
	about_learnmore: 'Learn more',
	about_exp: 'Completely insured for errors and omissions. Over 9 years experience in the Home Inspection Industry.',
	
	inspection_header: 'J.H. Inspections; inspection procedure',
	inspection_para_1: 'I strongly encourage your participation during the inspection. A typical visual home inspection requires approximately 2 to 3 hours to complete. Therefore, be certain to put enough time aside so as not to be rushed. It is good practice to turn off cell phones during the inspection as there will be a lot of information and you should have as little distraction as possible. It is OK to have family and friends participate in the inspection as long as this does not hamper in the smooth flow of the inspection.',
	inspection_para_2: 'At the agreed upon time and date, we will meet at the property to be inspected.',
	inspection_para_3: 'I will start by a quick description of the inspection process in order to put you at ease with the procedures and ask you to read and sign the inspection agreement.',
	inspection_para_4: 'We will start with the exterior of the home and garage, and then we will move into the interior of the house, where we will begin by verifying the attic, and working our way down to the basement.',
	inspection_para_5: 'Throughout the inspection I will be discussing with you the different components of the house and offer recommendations / solutions on any problems we may encounter along the way. I will also point out the positive aspects of the home and provide you with valuable information on how to maintain your new home over the years.',
	inspection_para_6: 'Once we have completed the verbal portion of the inspection, I will print a report on site so you can review the inspection at your leisure in a timely fashion. If you require an electronic copy of the report, please bring a USB key with you to the inspection or simply email me at a later date and I can send you the report electronically.',
	inspection_para_7: 'Remember to ask as many questions as needed to obtain the fullest understanding of the home and its features.',
	inspection_para_8: 'With J.H. Inspections you can be certain to have an enjoyable, informative and professional experience.',
	inspection_header_2: 'J.H. Inspections; inspection report',
	inspection_para_2_1: 'You will be presented with a personalized binder which includes:',
	inspection_para_2_2: 'The inspector\'s code of ethics; The inspection agreement and The Inspection Industry’s Standards of Practice (CAHPI) CANADIAN ASSOCIATION OF HOME & PROPERTY INSPECTORS',
	inspection_para_2_3: 'Detailed report',
	inspection_para_2_4: 'including pictures',
	inspection_para_2_5: 'description of each system of the home',
	inspection_para_2_6: 'describing problems and solutions',
	inspection_para_2_7: 'enumerating any repairs required',
	inspection_para_2_8: 'an executive summary is included at the end of the report',
	inspection_para_2_9: 'A seasonal maintenance check list helping you maintain the home over the years',
	inspection_para_2_10: 'A cost guide to help estimate the costs of repairs, renovations, upgrades, etc.',
	inspection_para_2_11: 'These estimates reflect the average basic costs for materials, supplies, installation and labor costs in Canada. Costs may vary depending on regions, upgrades, disposal fees, material costs, complexity of the work, contractor’s fees, etc. We strongly recommend that before budgeting for or undertaking any renovations, repairs, etc., that you obtain a minimum of three written quotes from separate, reputable, licensed contractors for validation.',
	
	images_header: 'Image Gallery',
	images_1: 'In the course of a typical home inspection I will be looking at over 1,800 separate components. The following photos are a very small sampling of what I encounter on any given day. Have a look at the pictures and see whether you would have spotted any problems if you would have been looking at any of these homes. I have extensive experience in identifying problems, I will always address your concerns and offer solutions, cost estimates, etc..',
	images_2: 'It is important to seal all areas where water may infiltrate the structure.',
	images_3: 'Is this flat roof performing properly?',
	images_4: 'Why is their so much ice buildup? What are the repercussions? Solutions to correct?',
	images_5: 'Is water being controlled correctly?',
	images_6: 'Is this wired correctly?',
	images_7: 'What other damages may exist underneath?',
	images_8: 'Is this indicative of a wet basement?',
	images_9: 'Is this chimney flue safe to use?',
	images_10: 'Does the clay tile require replacement? What are the options?',
	images_11: 'Signs of a leaky roof?',
	images_12: 'How much life left in these shingles?',
	images_13: 'What is missing from this sump installation?',
	images_14: 'What type pipes are these?',
	images_14_1: 'Your insurance company will want to know.',
	images_15: 'Does this chimney cap meet current standards?',
	images_16: 'What could have caused these gaps in the soffit?',
	images_17: 'Is this sink properly vented?',
	images_18: 'How did he get in?',
	images_19: 'How efficient is this furnace?',
	images_20: 'Are the posts properly attached to the beam?',
	images_21: 'Is the chimney installed correctly?',
	images_22: 'Do these windows require being replaced?',
	images_23: 'What could possibly go wrong here?',
	images_24: 'Any structural issues apparent?',
	images_25: 'Should this range hood be vented to the exterior?',
	images_26: 'Stone foundations; how well do they perform?',
	images_27: 'Are these live wires properly abandoned?',
	images_28: 'Is it OK to vent my gas fireplace into the attic?',
	
	contact_header: 'Contact information',
	contact_1: 'To obtain a quote or to book an inspection, please contact John at:',
	contact_2: '(613) 850-0583 or by email at ',
	contact_3: 'john@jhinspections.ca',
	contact_4: 'METHOD OF PREFERENCE IS BY TELEPHONE IF I AM IN THE MIDDLE OF A INSPECTION, OUT OF CONSIDERATION FOR MY CLIENTS I WILL NOT ANSWER THE PHONE SO PLEASE LEAVE A MESSAGE AND I WILL RETURN YOUR CALL IN A TIMELY FASHION',
	contact_5: 'If you are communicating via email please supply the following information:',
	contact_6: 'Full name',
	contact_7: 'Telephone number',
	contact_8: 'Type of house: Single family, semi-detached, townhouse, bungalow etc.',
	contact_9: 'Age of house',
	contact_10: 'How many bedrooms, bathrooms',
	contact_11: 'Finished basement?',
	contact_12: 'Is there a garage: attached or detached',
	contact_13: 'I can also be reached by mail',
	contact_14: 'Not recommended for bookings but if required mail can be sent to the following address:',
	contact_15: '1309 Carling Ave., P.O. Box 35075',
	contact_16: 'Ottawa, ON',
	contact_17: 'K1Z 1A2',
	
	links_header: 'Home Inspection Associations',
	links_1: 'National Home Inspector Certification Council',
	links_2: 'Ontario Association of Home Inspectors',
	links_3: 'The Quebec Association of Home Inspectors',
	links_4: 'WETT - Wood Energy Technology Transfer Inc',
	links_5: 'Government Agencies',
	links_6: 'Canada Mortgage and Housing Corporation',
	links_7: 'Health Canada',
	links_8: 'The Heritage Canada Foundation',
	links_9: 'Canadian Centre for Occupational Health and Safety',
	links_10: 'Brookfield Global Relocation Services',
	links_11: 'We can bill directly',
	links_12: 'CF Appreciation Program Ex-Military personnel',
	links_13: 'We offer disconts',
	links_14: 'Tarion Warranty Corporation (Ontario)',
	links_15: 'Bennett Property Shop Realty, Brokerage',
	
	jhhomeinspections: 'J.H. Home Inspections'
  });
  $translateProvider.translations('fr', {
    btn_lang_en: 'English',
    home: 'Page d\'accueil',
    about: 'À propos',
	inspection: 'Inspection',
    images: 'Images',
	contact: 'Contact',
	links: 'Liens',
	close: 'Fermer',
	
	
	home_about: '100% bilingue. Assurance erreurs et omissions. Disponible 7 jours semaine. Le rapport le plus compréhensif de l’industrie, complet avec photos, imprimé sur les lieux dans la langue de votre choix.',
	home_professionnal: 'Le rapport le plus compréhensif de l’industrie, complet avec photos, imprimé sur les lieux dans la langue de votre choix.',
	home_noteasy: 'Il n\'est pas toujours évident de choisir la maison dans laquelle vous vivrez. Obtenir de l\'aide professionnelle vous aidera à faire le meilleur choix.',
	home_btn_extra: 'Information supplémentaire',
	home_img_1: 'Vous voulez savoir comment l\'inspection va?',
	home_img_1_1: 'L\'inspection, le rapport et le coût',
	home_img_2: 'John Horner, inspecteur de maison',
	home_img_2_1: 'Apprenez à connaître le propriétaire et l\'inspecteur',
	home_img_2_2: 'En savoir plus',
	home_img_3: 'Curieux de voir à quoi ça ressemble ?',
	home_img_3_1: 'Regardez à travers une bibliothèque d\'images',
	home_themost: 'Le rapport le plus compréhensif de l’industrie, complet avec photos, imprimé sur les lieux dans la langue de votre choix.',
	home_list_1: 'Inspections pré-livraison',
	home_list_2: 'Inspections pré-achat',
	home_list_3: 'Inspections pré-vente',
	home_list_4: 'Inspections après-vente',
	home_registered: 'Fournisseur enregistré :',
	home_list_5: 'Brookfield Global Relocations',
	home_list_6: 'Canadian Forces Appreciation Program',
	home_list_7: 'Imagerie thermique',
	home_list_8: 'Certifié WETT',
	home_proud: 'Fier de fournir des inspections non-alarmistes et des évaluations impartiales pour plus de 8 ans.',
	
	about_header: 'John Horner, propriétaire et inspecteur',
	about_para: 'Acheter une maison est une expérience excitante. Par contre, c\'est également une épreuve intimidante et audacieuse. Il est donc essentiel de connaître la condition particulière de la résidence avant de prendre une décision sur l’un des plus gros investissements financiers de votre vie. Afin de protéger votre investissement. L\'inspecteur professionel, John, ne fait pas simplement vous informer sur la condition de la maison, mais va aussi vous fournir des instructions sur l\'entretien d\'une maison.',
	about_learnmore: 'En savoir plus',
	about_exp: 'Complètement assuré pour les erreurs et les omissions. Plus de 8 ans d\'expérience dans l\'industrie de l\'inspection en bâtiments.',
	
	inspection_header: 'J.H. Inspections; procédure d\'inspection',
	inspection_para_1: 'Je vous encourage de participer au cours de l\'inspection. Typiquement, une inspection visuelle d\'habitation prend de 2 à 3 heures à compléter, alors faites en sorte de mettre suffisament de temps de côté afin de ne pas être pressé.',
	inspection_para_2: 'À la date et l\'heure convenue, nous nous rencontrerons à la propriété qui doit être inspectée.',
	inspection_para_3: 'Afin de vous mettre à l\'aise, nous commencerons avec une description du processus de l\'inspection et je vous demanderez de signer l\'entente.',
	inspection_para_4: 'Nous allons commencer par l\'extérieur de la maison et le garage, puis nous allons passer à l\'intérieur de la maison, où nous allons commencer par vérifier le grenier, et ainsi de travailler notre chemin vers le sous-sol.',
	inspection_para_5: 'Tout au long de l\'inspection, je vais discuter avec vous à propos des différentes composantes de la maison et j\'offrirai  des recommandations / solutions sur des problèmes que nous pouvons rencontrer durant l\'inspection. Je vais aussi souligner les aspects positifs de la maison et vous fournir des informations précieuses sur la façon de maintenir votre nouvelle maison au fil des années.',
	inspection_para_6: 'Une fois que nous aurons terminé la partie verbale de l\'inspection, je vais imprimer un rapport sur ​​le site afin que vous puissiez examiner l\'inspection à votre guise en temps opportun. Si vous avez besoin d\'une copie électronique du rapport, s\'il vous plaît apporter une clé USB avec vous à l\'inspection ou simplement écrivez-moi à une date ultérieure.',
	inspection_para_7: 'Ne vous gênez pas à poser toutes les questions nécessaires afin que vous puissiez obtenir une compréhension aussi complète que possible sur la résidence.',
	inspection_para_8: 'Avec J.H. Inspections, vous pouvez être assuré d\'avoir un  moment agréable, instructif ainsi qu\'une  expérience professionnelle.',
	inspection_header_2: 'J.H. Inspections; rapport d\'inspection',
	inspection_para_2_1: 'Vous serez présenté avec un cartable personnalisé incluant :',
	inspection_para_2_2: 'L\'entente de l\'inspection; Le code de déontologie de l\'inspecteur et La norme de pratique de l\'industrie (ACIBI) ASSOCIATION CANADIENNE DES INSPECTEURS DE BIENS IMMOBILIERS',
	inspection_para_2_3: 'Le rapport détaillé',
	inspection_para_2_4: 'les images',
	inspection_para_2_5: 'description de chaque système de la maison',
	inspection_para_2_6: 'décrire les problèmes et solutions',
	inspection_para_2_7: 'énumération des réparations requises',
	inspection_para_2_8: 'un rapport sommaire y est aussi inséré à la fin du rapport',
	inspection_para_2_9: 'Une liste de contrôle de l’entretien saisonnier vous aidant à protéger votre investissement au cours des années',
	inspection_para_2_10: 'Un guide d’estimation des coûts vous aidant à calculer les frais approximatifs des réparations, des mises à jour, etc.',
	inspection_para_2_11: 'Ces estimations reflètent les coûts de base moyenne pour les matériaux, les fournitures, l\'installation et le coût du travail au Canada. Les coûts peuvent varier en fonction des régions, mises à niveau, les frais d’élimination, les coûts des matériaux, complexité du travail, les honoraires d’entrepreneurs, etc. Nous recommandons fortement que, avant budgétisation ou d\'entreprendre des travaux de rénovation, de réparation, etc., que vous obtenez un minimum de trois citations écrites de bonne réputation, d\'entrepreneurs indépendants agréés pour la validation.',
	
	images_header: 'Galerie d\'images',
	images_1: 'Au cours d\'une inspection de maison typique, je regarde plus de 1800 composantes séparées. Les photos suivantes présentent un très petit échantillon de ce que je rencontre sur une base régulière. Jetez un coup d\'oeil sur les photos et voyez si vous repérez des problèmes. Je possède beaucoup d\'expérience dans le domaine. C\'est pourquoi je répondrai à toutes vos préoccupations et ferai ainsi des propositions de solutions, des estimations de coûts, etc ..',
	images_2: 'Il est important de sceller toutes les zones où l\'eau peut infiltrer la structure.',
	images_3: 'Est-ce que ce toit plat performe correctement?',
	images_4: 'Pourquoi y a-t-il tant d\'accumulation de glace? Quelles sont les répercussions? Solutions pour corriger?',
	images_5: 'Est-ce que l\'eau est contrôlée correctement?',
	images_6: 'Est-ce bien connecté?',
	images_7: 'Quels autres dommages peuvent exister en-dessous?',
	images_8: 'Est-ce le signe d\'un sous-sol humide?',
	images_9: 'Cette cheminée est-elle sécuritaire à utiliser?',
	images_10: 'Est-ce que la tuile d\'argile nécessite d’être remplacée? Quelles sont les options?',
	images_11: 'Quels sont les signes qu’un toit fuit?',
	images_12: 'Quelle est l’espérance de vie pour ces bardeaux?',
	images_13: 'Qu\'est ce qui manque à cette installation?',
	images_14: 'Quel est ce type de tuyau?',
	images_14_1: 'Votre compagnie d\'assurance voudra savoir.',
	images_15: 'Est-ce que la cheminée répond aux normes actuelles?',
	images_16: 'Qu’est-ce qui aurait pu causer ces lacunes?',
	images_17: 'Est-ce que ce puit est ventilé correctement?',
	images_18: 'Comment est-il rentré?',
	images_19: 'Quelle est l\'efficacité de cette fournaise?',
	images_20: 'Est-ce bien attaché?',
	images_21: 'Est-ce que la cheminée est installée correctement?',
	images_22: 'Est-ce que ces fenêtres ont besoin d\'être remplacées?',
	images_23: 'Qu\'est-ce qui pourrait mal tourner ici?',
	images_24: 'Y a-t-il des problèmes de structure apparents?',
	images_25: 'Cette hotte devrait-elle être ventilée vers l’extérieur?',
	images_26: 'Les fondations en pierres performent-elles bien?',
	images_27: 'Est-ce que les câbles sont branchés correctement?',
	images_28: 'Est-ce correct d’évacuer mon foyer au gaz dans le grenier?',
	
	contact_header: 'Coordonnées',
	contact_1: 'Pour obtenir une estimation ou pour réserver une inspection, S.V.P. contactez John au:',
	contact_2: '(613) 850-0583 ou par courriel ',
	contact_3: 'john@jhinspections.ca',
	contact_4: 'LE TÉLÉPHONE EST LA MÉTHODE PAR PRÉFÉRENCE PAR RESPECT ENVERS MES CLIENTS, SI JE SUIS EN TRAIN DE FAIRE UNE INSPECTION JE NE RÉPONDERAI PAS LE TÉLÉPHONE ALORS S.V.P. LAISSEZ UN MESSAGE ET JE VOUS RAPPELLERAI DANS LE PLUS BREF DÉLAI',
	contact_5: 'Si vous communiquez par courriel s\'il vous plaît fournir les informations suivantes :',
	contact_6: 'Nom complet',
	contact_7: 'Numéro de téléphone',
	contact_8: 'Type de maison : Maison unifamiliale , jumelée , maison , bungalow , etc.',
	contact_9: 'Âge de la maison',
	contact_10: 'Combien de chambres, salles de bains',
	contact_11: 'Sous-sol terminé?',
	contact_12: 'Y a-t-il un garage: attaché ou détaché',
	contact_13: 'Je peux aussi être contacté par la poste.',
	contact_14: 'Non recommandé pour les réservations, mais si requis, peut être envoyé à l\'adresse suivante :',
	contact_15: '1309 Carling Ave., P.O. Box 35075',
	contact_16: 'Ottawa, ON',
	contact_17: 'K1Z 1A2',
	
	links_header: 'Association d\'inspection de maison',
	links_1: 'National Home Inspector Certification Council',
	links_2: 'Ontario Association of Home Inspectors',
	links_3: 'Association des inspecteurs en bâtiments du Québec',
	links_4: 'WETT - Wood Energy Technology Transfer Inc',
	links_5: 'Organismes gouvernementaux',
	links_6: 'Société canadienne d\'hypothèques et de logement',
	links_7: 'Santé Canada',
	links_8: 'The Heritage Canada Foundation',
	links_9: 'Centre canadien d\'hygiène et de sécurité au travail',
	links_10: 'Répertoire des tiers fournisseurs de service',
	links_11: 'Nous pouvons facturer directement',
	links_12: 'Programme de reconnaissance des FC',
	links_13: 'Nous offrons des rabais',
	links_14: 'Tarion Warranty Corporation (Ontario)',
	links_15: 'Bennett Property Shop Realty, Brokerage',
	
	jhhomeinspections: 'J.H. Inspection de maison'
	
  });
  $translateProvider.preferredLanguage('en');
  $translateProvider.useSanitizeValueStrategy('escape');
});

// This is for the lang switch
app.controller('langController', function ($scope, $translate) {
  $scope.changeLanguage = function (lang) {
    $translate.use(lang);
  };
  
});

app.controller('langController', ['$translate', '$scope', function ($translate, $scope) {
    $scope.toggleLang = function () {
        $translate.use() === 'en'? $translate.use('fr') : $translate.use('en');
    };
}]);


	app.controller('CollapseDemoCtrl', function ($scope) {
  $scope.isCollapsed = false;
});

	app.controller('mainController', function($scope) {
	});

	app.controller('aboutController', function($scope) {
	});

	app.controller('contactController', function($scope) {
	});
	
	app.controller('imageController', function($scope) {
	});
	
	app.controller('inspectionController', function($scope) {
	});
	
	app.controller('linksController', function($scope) {
	});