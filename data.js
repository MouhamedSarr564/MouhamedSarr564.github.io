window.DATA={
 "PROFIL": {
  "nom": "SARR Mouhamed",
  "titre": "Master 2 Géomatique · Recherche d'alternance / de stage",
  "accroche": "Étudiant en Master 2 Géomatique, spécialisé en analyse spatiale, cartographie et télédétection.",
  "bio": [
   "Compétences en SIG et en traitement de données géographiques, avec un intérêt pour la modélisation spatiale et la programmation.",
   "Rigueur, organisation et efficacité opérationnelle acquises en environnement professionnel exigeant."
  ],
  "infos": [
   [
    "Localisation",
    "Marseille (13003)"
   ],
   [
    "Email",
    "mouhamedsarr0606@gmail.com"
   ],
   [
    "Téléphone",
    "+33 767 71 70 72"
   ],
   [
    "Recherche",
    "Alternance / stage"
   ]
  ],
  "parcours": [
   [
    "En cours",
    "Master 2 Géomatique et modélisation spatiale – Aix-Marseille Université"
   ],
   [
    "2025 – 2026",
    "Master 1 Géomatique et modélisation spatiale – Aix-Marseille Université"
   ],
   [
    "2025",
    "Licence Géographie et aménagement – Aix-Marseille Université"
   ]
  ]
 },
 "COMPETENCES": [
  [
   "SIG et données",
   [
    [
     "Analyse spatiale et SIG",
     100
    ],
    [
     "Cartographie et gestion de données géographiques",
     80
    ],
    [
     "Télédétection et analyse raster",
     80
    ],
    [
     "Programmation et traitement de données",
     80
    ]
   ]
  ],
  [
   "Outils",
   [
    [
     "Google Colab",
     80
    ],
    [
     "Python",
     60
    ],
    [
     "ArcGIS",
     40
    ],
    [
     "FME",
     40
    ],
    [
     "R Studio",
     40
    ]
   ]
  ],
  [
   "Savoir-être",
   [
    [
     "Rigueur et organisation",
     100
    ],
    [
     "Travail en équipe",
     100
    ],
    [
     "Gestion du stress et des priorités",
     80
    ],
    [
     "Capacité d'adaptation",
     80
    ],
    [
     "Communication",
     80
    ]
   ]
  ]
 ],
 "CV": {
  "experience": [
   [
    "Sept. 2023 – en cours",
    "Équipier polyvalent",
    "McDonald's",
    [
     "Travail en équipe dans un environnement rapide et structuré.",
     "Gestion des priorités et respect des délais en forte affluence.",
     "Rigueur dans l'exécution des tâches et respect des procédures.",
     "Gestion des flux (commandes, clients) avec organisation et efficacité.",
     "Compétences transférables : organisation, réactivité, fiabilité."
    ]
   ],
   [
    "Juin – sept. 2023",
    "Stagiaire en géographie et cartographie",
    "Mairie de Dangalma",
    [
     "Réalisation et mise à jour de documents cartographiques pour des opérations de lotissement.",
     "Délimitation et représentation cartographique des parcelles.",
     "Collecte, organisation et exploitation de données géographiques.",
     "Production de cartes d'appui à l'aménagement du territoire communal.",
     "Localisation et identification des parcelles."
    ]
   ]
  ],
  "formation": [
   [
    "En cours",
    "Master 2 Géomatique et modélisation spatiale",
    "Aix-Marseille Université"
   ],
   [
    "2025 – 2026",
    "Master 1 Géomatique et modélisation spatiale",
    "Aix-Marseille Université"
   ],
   [
    "2025",
    "Licence Géographie et aménagement",
    "Aix-Marseille Université"
   ],
   [
    "2020",
    "Baccalauréat L2",
    "Dangalma, Sénégal"
   ]
  ],
  "langues": [
   [
    "Français",
    "●●●●●"
   ],
   [
    "Anglais",
    "●●●○○"
   ],
   [
    "Arabe",
    "●○○○○"
   ]
  ],
  "atouts": [
   "Analyse spatiale et SIG",
   "Cartographie",
   "Télédétection",
   "Python",
   "FME / ArcGIS"
  ]
 },
 "PROJETS": [
  {
   "id": "c1",
   "cat": "carte",
   "titre": "Istres : répartition du bâti, des plantations et de la végétation",
   "type": "Cartographie thématique",
   "annee": "2025",
   "outils": [
    "BD TOPO",
    "BD FORÊT",
    "Grille 100 / 200 m"
   ],
   "resume": "Densité du bâti et des plantations sur la commune d'Istres, en mailles de 100 m et 200 m.",
   "blocs": [
    [
     "Contexte",
     "décrire la distribution du bâti et des plantations sur la commune d'Istres."
    ],
    [
     "Méthode",
     "données BD TOPO (Géoservices) et BD FORÊT, comptage des objets par maille régulière de 100 m puis de 200 m, projection Lambert-93 (EPSG:2154)."
    ],
    [
     "Lecture",
     "le bâti se concentre dans le centre urbain au sud-est, avec un second noyau au nord ; les plantations occupent surtout le nord-ouest et le centre, tandis que la végétation se concentre plutôt à l'est et au sud. Comparer deux tailles de maille montre comment la lecture de la densité change avec l'échelle."
    ]
   ],
   "cles": [
    [
     "Sud-est",
     "noyau urbain dense, près de l'étang de Berre"
    ],
    [
     "Entressen",
     "second pôle bâti, isolé au nord"
    ],
    [
     "> 50 %",
     "du territoire en landes, herbes et prairies"
    ],
    [
     "> 40 %",
     "de la surface agricole en cultures de type PPH"
    ]
   ],
   "rtitre": "",
   "resultats": [
    "Bâti : l'urbanisation est très polarisée au sud-est, près des étangs. Le noyau ancien et dense ressort en maille de 100 m ; en 200 m apparaissent un centre structurant et un pôle secondaire isolé au nord (Entressen), signe d'une urbanisation hiérarchisée.",
    "Les extensions récentes ont des densités intermédiaires ; les grandes zones peu bâties correspondent aux milieux naturels, agricoles et humides qui limitent l'étalement.",
    "Effet d'échelle : la grille fine restitue la trame urbaine historique, la grille large montre la logique d'organisation d'ensemble.",
    "Végétation : les plus fortes densités sont en périphérie (sud, est, quelques secteurs au nord-ouest), les plus faibles au centre. Il existe une relation inverse entre densité du bâti et densité de végétation.",
    "Les formations herbacées et les landes dominent largement (plus de la moitié du territoire) ; pinèdes d'Alep, chênaies et peuplements mixtes sont plus fragmentés.",
    "Cultures : la plupart des mailles ne comptent que 0 à 2 plantations ; un pôle agricole se détache au nord-ouest. Le type PPH représente plus de 40 % de la surface agricole, devant SPH ; les cultures spécialisées sont concentrées dans quelques secteurs.",
    "Conclusion : une approche multi-échelle montre une commune polarisée autour de son noyau lacustre, avec un paysage méditerranéen ouvert et fragmenté."
   ],
   "imgs": [
    [
     "bati",
     "Répartition du bâti à Istres, mailles de 100 m et 200 m"
    ],
    [
     "culture",
     "Répartition des plantations à Istres, mailles de 100 m et 200 m"
    ],
    [
     "vegbat",
     "Répartition de la végétation à Istres, mailles de 100 m et 200 m (BD FORÊT)"
    ],
    [
     "loc_istres",
     "Localisation de la commune d'Istres"
    ]
   ],
   "docs": [
    [
     "assets/docs/Incendies_Bouches-du-Rhone_Istres_SARR_Mouhamed.pdf",
     "Rapport complet (PDF)"
    ]
   ]
  },
  {
   "id": "c2",
   "cat": "carte",
   "titre": "Connectivité du réseau écologique de la Métropole Aix-Marseille-Provence",
   "type": "Analyse spatiale",
   "annee": "2026",
   "outils": [
    "Graphab 3.0.6",
    "Sentinel-2",
    "Indice dPC"
   ],
   "resume": "Contribution des nœuds et des liens à la connectivité du réseau écologique, scénarios S1, S2 et S3, avec occupation du sol et comparaison.",
   "blocs": [
    [
     "Contexte",
     "évaluer la connectivité du réseau écologique sur l'aire de la Métropole Aix-Marseille-Provence (AAMP)."
    ],
    [
     "Méthode",
     "analyse en graphe avec Graphab 3.0.6 sur l'occupation du sol ESRI Sentinel-2 (2025) ; l'indice dPC hiérarchise les taches (nœuds) et les liens, comparés entre trois scénarios d'espèces : forestières spécialistes (S1), généralistes des milieux semi-ouverts (S2) et à large capacité de dispersion (S3)."
    ],
    [
     "Lecture",
     "dans S1, un nœud décisif à l'est du centre concentre de nombreux liens, avec un lien critique vers le nord-ouest. Dans S3, la répartition change : deux nœuds critiques apparaissent, au nord et au centre. La carte de comparaison S1 / S3 montre la réduction de la fragmentation écologique quand on passe des milieux boisés à plusieurs habitats. Ces cartes sont issues du mémoire de Master 1."
    ]
   ],
   "cles": [
    [
     "+315 %",
     "probabilité de connectivité avec les cultures (S3 vs S1)"
    ],
    [
     "+117 %",
     "avec milieux herbacés et végétation inondée (S2)"
    ],
    [
     "−62 %",
     "de composantes isolées en S3 (1 384 → 525)"
    ],
    [
     "3 à 10 ha",
     "micro-taches jouant un rôle de relais"
    ]
   ],
   "rtitre": "",
   "resultats": [
    "Le choix des objets paysagers est le paramètre le plus déterminant : la probabilité de connectivité (PC) passe de 0,029 en S1 (boisements seuls) à 0,063 en S2 (+117 %) puis 0,121 en S3 (+315 %).",
    "La surface d'habitat connectée (EC) passe de 124 988 ha en S1 à 184 184 ha en S2 (+47 %) et 254 635 ha en S3, soit plus du double.",
    "Le nombre de composantes isolées diminue de 1 384 (S1) à 1 099 (S2, −21 %) puis 525 (S3, −62 %) : garrigues, pelouses et cultures jouent un rôle de transit entre les massifs boisés.",
    "Robustesse au coût du bâti : la PC varie de 0,06 % seulement entre un coût de 50 et de 500 ; c'est la distribution des boisements qui structure le réseau.",
    "Effet de la distance de dispersion : modéré sur la PC, majeur sur la fragmentation (−32 % de composantes entre 1 000 et 10 000 m). 3 000 m constitue un seuil de cohérence pour les espèces à portée moyenne.",
    "La connectivité est très concentrée : en S1, une seule tache de 116 845 ha porte 88,6 % du dPC ; en S3, la tache dominante n'en porte plus que 80,6 % et un second pôle apparaît au nord, dans la plaine agricole du Vaucluse.",
    "Corridors critiques : en S1, un lien relie le massif central au nord-ouest ; en S3, un corridor nord-sud entre le Vaucluse et les Bouches-du-Rhône devient prioritaire et dépasse les PLUi communaux.",
    "Stepping stones : des micro-taches de 3 à 10 ha, avec une contribution individuelle quasi nulle (< 0,001 % du dPC), assurent des connexions irremplaçables entre composantes du réseau.",
    "Hypothèses : la première (les objets paysagers fins comptent) est validée ; la seconde (une échelle de dispersion cohérente) l'est partiellement, car l'échelle pertinente dépend du profil des espèces.",
    "Recommandations : protéger le massif forestier central, préserver le corridor nord-sud par une OAP du SCoT, identifier les micro-taches à fort rôle de relais par croisement avec le cadastre et les PLUi.",
    "Limites : coûts de résistance théoriques et non calibrés, résolution de 10 m, connectivité structurelle et non fonctionnelle."
   ],
   "imgs": [
    [
     "occup",
     "Occupation du sol dans l'aire d'influence de la Métropole (ESRI, 2025)"
    ],
    [
     "aamp",
     "Localisation : sphère d'influence fonctionnelle de la Métropole Aix-Marseille-Provence"
    ],
    [
     "s1g",
     "Graphe paysager S1 (espèces forestières spécialistes)"
    ],
    [
     "s2g",
     "Graphe paysager S2 (espèces généralistes des milieux semi-ouverts)"
    ],
    [
     "s3g",
     "Graphe paysager S3 (espèces à large spectre de dispersion)"
    ],
    [
     "s1vs3",
     "Réduction de la fragmentation écologique entre S1 (milieux boisés) et S3 (multi-habitats)"
    ],
    [
     "dpc1",
     "Contribution des nœuds et liens à la connectivité (dPC), scénario S1"
    ],
    [
     "dpc3",
     "Contribution des nœuds et liens à la connectivité (dPC), scénario S3"
    ],
    [
     "paca",
     "Situation de la métropole dans la région"
    ]
   ],
   "docs": [
    [
     "assets/docs/Memoire_M1_SARR_Mouhamed.pdf",
     "Mémoire de Master 1 (PDF)"
    ]
   ]
  },
  {
   "id": "c3",
   "cat": "carte",
   "titre": "Feux de végétation dans les Bouches-du-Rhône, 2020–2024",
   "type": "Analyse spatiale et statistique",
   "annee": "2025",
   "outils": [
    "BDIFF",
    "Landsat 8-9",
    "IGN"
   ],
   "resume": "Nombre, taille et surface brûlée des incendies, par année, par mois et par commune.",
   "blocs": [
    [
     "Contexte",
     "suivre les feux de végétation dans les Bouches-du-Rhône entre 2020 et 2024, à partir de la base BDIFF."
    ],
    [
     "Méthode",
     "statistiques (nombre, taille moyenne et surface brûlée par année et par mois), carte de la surface brûlée par commune, analyse des causes, et localisation d'un feu (La Bastidonne) à partir d'images Landsat 8-9, croisée avec les types de végétation (IGN)."
    ],
    [
     "Lecture",
     "2022 est l'année la plus marquée, avec plus de 400 incendies et environ 1 700 ha brûlés, devant 2020. Les feux se concentrent en juillet et août, et un petit nombre de communes concentre l'essentiel des surfaces brûlées. Les causes sont presque toutes humaines : 45,6 % des incendies sont involontaires (particuliers), 24,6 % relèvent de la malveillance et 2,9 % seulement sont naturels."
    ]
   ],
   "cles": [
    [
     "≈ 430",
     "incendies en 2022, pic de la période 2020–2024"
    ],
    [
     "≈ 1 730 ha",
     "brûlés en 2022 (1 480 ha en 2020, 30 ha en 2024)"
    ],
    [
     "45,6 %",
     "des feux : actions involontaires de particuliers"
    ],
    [
     "2,9 %",
     "seulement d'origine naturelle"
    ]
   ],
   "rtitre": "",
   "resultats": [
    "2022 est l'année critique : pic de fréquence (environ 425 incendies), taille moyenne d'environ 40 000 m² et environ 1 730 ha brûlés. 2020 compte moins de feux (240) mais de plus grands (60 000 m² en moyenne, 1 480 ha).",
    "2024 est exceptionnellement calme : 225 incendies, environ 1 000 m² en moyenne et 30 ha brûlés. La courbe cumulée monte lentement en 2020–2021 puis accélère en 2022 : une saison extrême pèse sur tout le bilan.",
    "Saisonnalité nette : juillet et août concentrent le plus de départs, avec plus de 100 feux en juillet 2022 ; l'hiver (décembre à février) est très peu touché.",
    "Causes : actions involontaires de particuliers 45,6 %, malveillance 24,6 %, causes accidentelles ou techniques 19 %, travaux 7,9 %, naturelles 2,9 %. Plus de 90 % des feux sont d'origine humaine, donc évitables (SDIS 13).",
    "Fréquence et gravité ne coïncident pas : Martigues, Aix-en-Provence et Marseille comptent le plus de départs ; Graveson et Mouriès, peu de départs mais de très grandes surfaces brûlées. Martigues cumule les deux : c'est un point chaud.",
    "Feu de la Bastidonne (24 juillet 2017) : environ 1 275 ha, sur La Bastidonne, Pertuis, Mirabeau et La Tour-d'Aigues. Sécheresse, mistral et végétation continue et inflammable (landes ligneuses, forêts de feuillus et mixtes) ont favorisé la propagation."
   ],
   "imgs": [
    [
     "carte_feu",
     "Surface brûlée par commune, 2020 à 2024 (BDIFF)"
    ],
    [
     "bastidonne",
     "Localisation du feu de la Bastidonne (Landsat 8-9)"
    ],
    [
     "vegpct",
     "Part des types de végétation par commune autour du feu (IGN)"
    ],
    [
     "fig12",
     "Figures 1 et 2 : nombre d'incendies et taille moyenne par année"
    ],
    [
     "fig34",
     "Figures 3 et 4 : surface brûlée par année et cumulée"
    ],
    [
     "fig5",
     "Figure 5 : nombre d'incendies par mois et par année"
    ],
    [
     "causes",
     "Figures 6 et 7 : causes des incendies et évolution par année"
    ]
   ],
   "docs": [
    [
     "assets/docs/Incendies_Bouches-du-Rhone_Istres_SARR_Mouhamed.pdf",
     "Rapport complet (PDF)"
    ]
   ]
  },
  {
   "id": "c4",
   "cat": "carte",
   "titre": "Qualité de l'air et ZFE de Marseille dans la Métropole",
   "type": "Analyse de séries temporelles",
   "annee": "2016–2025",
   "outils": [
    "NO₂ · PM10 · PM2.5 · O₃",
    "Avant / après 2021",
    "KDE"
   ],
   "resume": "Évolution des polluants dans la ZFE de Marseille par rapport aux communes hors ZFE, et analyse spatiale à l'échelle de la métropole.",
   "blocs": [
    [
     "Contexte",
     "mesurer l'évolution des polluants atmosphériques dans la ZFE de Marseille, créée en 2021, par rapport aux communes hors ZFE."
    ],
    [
     "Méthode",
     "séries annuelles 2016–2025 de NO₂, PM10, PM2.5 et O₃ comparées aux seuils de référence de l'OMS ; comparaison avant (2016–2020) et après (2021–2025) par diagrammes en boîte ; cartes des moyennes par commune, relation distance–NO₂ et densité des points de mesure (KDE)."
    ],
    [
     "Lecture",
     "la ZFE a un effet mesurable sur le NO₂ et le PM2.5 à Marseille, mais pas sur le PM10 ni sur l'ozone (détails dans les résultats ci-dessous)."
    ]
   ],
   "cles": [
    [
     "−17,4 %",
     "NO₂ à Marseille après la ZFE (p = 0,016)"
    ],
    [
     "−21,1 %",
     "PM2.5 à Marseille (p = 0,048, effet COVID possible)"
    ],
    [
     "≈ 33 µg/m³",
     "NO₂ moyen à Marseille, le plus élevé de la métropole"
    ],
    [
     "−0,27",
     "µg/m³ de NO₂ par km d'éloignement de la ZFE"
    ]
   ],
   "rtitre": "",
   "resultats": [
    "NO₂ : à Marseille, la moyenne passe d'environ 41 µg/m³ (2017) à environ 29 µg/m³ (2025), soit −29 %, avec une baisse qui s'accélère après 2021 (33 → 27 µg/m³ en 2024). Hors ZFE, la baisse est plus modérée depuis un niveau plus bas (22 → 14 µg/m³).",
    "Test de Mann-Whitney (Marseille, 2016–2020 contre 2021–2025) : NO₂ −17,4 % (p = 0,0159, significatif) ; PM2.5 −21,1 % (p = 0,0476, significatif) ; PM10 −11,8 % (p = 0,0754, non significatif) ; O₃ +0,1 % (p = 0,50, aucun effet).",
    "PM2.5 : la baisse de 18 à 10 µg/m³ a lieu entre 2016 et 2020, avant la ZFE, ce qui suggère un effet des restrictions de mobilité liées au COVID ; ensuite le niveau se stabilise autour du seuil OMS de 10 µg/m³.",
    "PM10 : entre 23 et 31 µg/m³ à Marseille, au-dessus du seuil OMS de 20 µg/m³ jusqu'en 2024 (environ 21). Les sources sont multiples (industrie notamment), avec un double foyer : Marseille et le nord-ouest industriel.",
    "Ozone : stable entre 54 et 67 µg/m³, très en dessous de la cible de 120 µg/m³, sans effet visible de la ZFE : c'est un polluant secondaire, formé par réactions photochimiques.",
    "Spatial : Marseille est l'épicentre du NO₂ de la métropole, et les cartes de densité (KDE) montrent que le périmètre de la ZFE couvre bien ce foyer. Le NO₂ diminue avec la distance à la ZFE.",
    "Conclusion : l'hypothèse de départ est partiellement validée. La ZFE a un effet mesurable sur le NO₂ et le PM2.5, les deux polluants liés au trafic, mais pas sur le PM10 ni sur l'ozone.",
    "Limites : la ZFE ne couvre qu'une partie du cœur urbain alors que la pollution déborde de son périmètre ; la diffusion vers les communes périphériques n'est pas démontrable avec les données disponibles."
   ],
   "imgs": [
    [
     "evo",
     "Évolution annuelle des polluants, ZFE Marseille et communes hors ZFE, 2016–2025"
    ],
    [
     "box",
     "Comparaison NO₂ et PM10, avant et après 2021"
    ],
    [
     "polluatm",
     "Pollution moyenne 2016–2025 (NO₂ et PM10) par commune, Métropole Aix-Marseille-Provence"
    ],
    [
     "relation",
     "Relation entre distance à la ZFE et NO₂, classement des communes"
    ],
    [
     "zdf1",
     "Densité spatiale des points de mesure de NO₂ (KDE)"
    ],
    [
     "zdf2",
     "Densité spatiale des points de mesure de PM10 (KDE)"
    ],
    [
     "zdf3",
     "Densité spatiale des points de mesure de PM2.5 (KDE)"
    ]
   ],
   "docs": [
    [
     "assets/docs/ZFE_Marseille_qualite_air_SARR_Mouhamed.pdf",
     "Rapport complet (PDF)"
    ],
    [
     "assets/docs/Notebook_ZFE_Marseille_SARR_Mouhamed.ipynb",
     "Notebook Python (.ipynb)"
    ]
   ]
  },
  {
   "id": "c6",
   "cat": "carte",
   "titre": "Cartographie du bassin versant du fleuve Sénégal",
   "type": "Projet personnel de cartographie",
   "annee": "2026",
   "outils": [
    "QGIS",
    "HydroBASINS",
    "Copernicus DEM GLO-30",
    "ESA WorldCover 2021",
    "WorldClim 2.1"
   ],
   "resume": "Six cartes thématiques : localisation, relief, hydrographie, occupation du sol, précipitations et altitude des sous-bassins.",
   "blocs": [
    [
     "Contexte",
     "projet personnel de cartographie du bassin versant du fleuve Sénégal, qui s'étend sur la Guinée, le Mali, le Sénégal et la Mauritanie. Six cartes thématiques décrivent son milieu physique et son occupation du sol."
    ],
    [
     "Méthode",
     "réalisation sous QGIS à partir de la limite du bassin et des sous-bassins (HydroBASINS, niveau 6), du réseau et des plans d'eau (HydroRIVERS, HydroLAKES), du relief (Copernicus DEM GLO-30, avec ombrage), de l'occupation du sol (ESA WorldCover 2021 rééchantillonnée à 100 m), des précipitations (WorldClim 2.1, normales 1970–2000) et des barrages (Global Dam Watch)."
    ],
    [
     "Choix cartographiques",
     "projection Africa Albers Equal Area (ESRI:102022), qui conserve les surfaces ; statistiques zonales par sous-bassin ; classes en quantiles pour l'altitude ; mêmes éléments sur chaque carte (encart de situation, légende, échelle, nord, sources)."
    ]
   ],
   "cles": [
    [
     "512 mm",
     "de pluie annuelle moyenne sur le bassin (69 à 1 837 mm)"
    ],
    [
     "59",
     "sous-bassins de niveau 6"
    ],
    [
     "8 à 796 m",
     "altitude moyenne des sous-bassins (moyenne : 210 m)"
    ],
    [
     "4 pays",
     "Guinée, Mali, Sénégal, Mauritanie"
    ]
   ],
   "rtitre": "Lecture des cartes",
   "resultats": [
    "Gradient de précipitations nord–sud : moins de 200 mm par an au nord (Mauritanie) et plus de 1 500 mm dans le massif guinéen. La pluie annuelle moyenne sur le bassin est de 512 mm, avec des valeurs de 69 à 1 837 mm selon les zones.",
    "Relief : les plus hautes terres sont à l'extrême sud, dans le massif du Fouta-Djalon, en Guinée, où naît le fleuve (sous-bassins jusqu'à 796 m d'altitude moyenne). La basse vallée et le delta, à l'ouest, sont sous 50 m. L'altitude moyenne des 59 sous-bassins est de 210 m.",
    "Hydrographie : le fleuve Sénégal (Bafing–Sénégal) descend du massif guinéen, traverse le Mali puis longe la frontière entre le Sénégal et la Mauritanie jusqu'à l'Atlantique, près de Saint-Louis. Quatre barrages sont cartographiés : Manantali, Félou, Foum Gleita et Diama.",
    "Occupation du sol : les prairies dominent ; les sols nus et la végétation clairsemée occupent le nord, côté mauritanien ; les arbres se concentrent dans le sud, vers la haute vallée ; les arbustes couvrent l'ouest du bassin, côté sénégalais ; les cultures se regroupent au sud-est (Mali) et le long de la vallée.",
    "Lien entre les cartes : l'occupation du sol suit globalement le gradient de pluie, des sols nus au nord, sous les isohyètes de 200 à 400 mm, aux zones boisées là où les précipitations dépassent 1 000 mm.",
    "À garder en tête : les statistiques de pluie sont calculées sur les pixels, sans pondération par la surface ; les villes sont placées par coordonnées approximatives ; l'occupation du sol (2021) et les précipitations (1970–2000) ne datent pas de la même période."
   ],
   "imgs": [
    [
     "bs_loc",
     "Carte 1 : localisation du bassin versant du fleuve Sénégal"
    ],
    [
     "bs_relief",
     "Carte 2 : relief du bassin versant (MNT Copernicus GLO-30, ombrage)"
    ],
    [
     "bs_hydro",
     "Carte 3 : hydrographie, plans d'eau et barrages"
    ],
    [
     "bs_sol",
     "Carte 4 : occupation du sol (ESA WorldCover 2021, 100 m)"
    ],
    [
     "bs_pluie",
     "Carte 5 : précipitations moyennes annuelles, normales 1970–2000"
    ],
    [
     "bs_alt",
     "Carte 6 : altitude moyenne par sous-bassin (59 sous-bassins de niveau 6)"
    ]
   ],
   "docs": []
  },
  {
   "id": "c7",
   "cat": "carte",
   "titre": "Cartographie de la végétation urbaine de Bordeaux",
   "type": "Projet personnel de cartographie",
   "annee": "2026",
   "outils": [
    "QGIS",
    "MNH LiDAR HD (IGN)",
    "BD TOPO",
    "OpenStreetMap",
    "INSEE",
    "Zone de desserte"
   ],
   "resume": "Canopée, hauteur de la végétation, espaces verts par IRIS et par habitant, et accessibilité à pied.",
   "blocs": [
    [
     "Contexte",
     "projet personnel de cartographie de la végétation urbaine de la commune de Bordeaux : où se trouve la canopée, quelle hauteur elle atteint, combien d'espaces verts compte chaque IRIS et chaque habitant, et qui peut y accéder à pied."
    ],
    [
     "Méthode",
     "canopée calculée à 1 m de résolution à partir du MNH LiDAR HD (IGN), avec un seuil de 3 m de hauteur et les bâtiments de la BD TOPO exclus ; statistiques zonales par IRIS ; espaces verts d'OpenStreetMap ; population de l'INSEE (base infracommunale) répartie au prorata de la surface de chaque IRIS ; zone de desserte à 300 m sous QGIS, avec des points d'accès tous les 50 m sur le contour des parcs."
    ],
    [
     "Choix cartographiques",
     "projection RGF93 / Lambert-93 (EPSG:2154), classes en quantiles pour les cartes par IRIS, et mêmes éléments sur chaque carte (nord, échelle, légende, encart de situation, sources)."
    ]
   ],
   "cles": [
    [
     "32,8 %",
     "des habitants à moins de 300 m d'un espace vert (87 061 sur 265 328)"
    ],
    [
     "10,0 %",
     "taux médian d'espaces verts par IRIS (de 0,2 à 144,5 %)"
    ],
    [
     "10,7 m²",
     "d'espaces verts par habitant, valeur médiane par IRIS"
    ],
    [
     "≈ 75 m",
     "hauteur maximale relevée dans les données LiDAR"
    ]
   ],
   "rtitre": "Lecture des cartes",
   "resultats": [
    "Canopée : la végétation de plus de 3 m se concentre dans les grands parcs et au nord de la commune, et forme une trame fine dans les quartiers résidentiels de l'ouest. Elle est plus clairsemée dans le centre dense.",
    "Hauteur : la végétation de plus de 20 m reste localisée (alignements le long des voies et du fleuve, grands parcs). La hauteur maximale relevée est d'environ 75 m, ce qui indique que des objets hauts qui ne sont pas des arbres (ponts, grues) subsistent dans les données.",
    "Taux d'espaces verts par IRIS : sur 86 IRIS renseignés (sur 88), il va de 0,2 % à 144,5 % pour une médiane de 10,0 % : la moitié des IRIS sont sous ce seuil. Les plus grands IRIS du nord ont les taux les plus élevés.",
    "Espaces verts par habitant : la médiane est de 10,7 m² par habitant, avec des écarts énormes (de 0,1 à 1 567,3 m²), entre des IRIS denses et des IRIS peu peuplés dotés de grands espaces verts.",
    "Accessibilité : environ 32,8 % des habitants (87 061 sur 265 328) vivent à moins de 300 m de marche d'un espace vert, donc plus des deux tiers n'y ont pas accès à cette distance.",
    "Les cartes se complètent : avoir beaucoup de végétation dans un IRIS ne garantit pas l'accès à pied. Les grands IRIS du nord, aux taux les plus forts, n'ont que 25 à 50 % de leurs habitants à moins de 300 m, tandis que plusieurs IRIS du centre, du sud et de la frange ouest sont dans la classe 0–25 %.",
    "À garder en tête : un taux de 144,5 % dépasse 100 % et mérite d'être vérifié ; la population est répartie au prorata de la surface de chaque IRIS (hypothèse d'une répartition homogène) ; la canopée inclut parfois des objets hauts qui ne sont pas des arbres."
   ],
   "imgs": [
    [
     "bx_can",
     "Canopée de Bordeaux (végétation de plus de 3 m, bâtiments exclus)"
    ],
    [
     "bx_haut",
     "Hauteur de la végétation à Bordeaux (3 à plus de 20 m)"
    ],
    [
     "bx_iris1",
     "Taux d'espaces verts par IRIS (version 1)"
    ],
    [
     "bx_iris2",
     "Taux d'espaces verts par IRIS (version 2)"
    ],
    [
     "bx_hab",
     "Espaces verts par habitant (m² par habitant, par IRIS)"
    ],
    [
     "bx_acc",
     "Accessibilité aux espaces verts : part des habitants à moins de 300 m de marche"
    ]
   ],
   "docs": []
  },
  {
   "id": "t1",
   "cat": "travail",
   "titre": "Effets des choix d'objets paysagers et d'échelles de modélisation sur la connectivité écologique de la trame verte : une approche par graphe paysagers sur l'aire d'influence de la Métropole Aix-Marseille Provence",
   "type": "Mémoire de Master 1",
   "annee": "2025–2026",
   "outils": [
    "Graphab 3.0.6",
    "ESRI Sentinel-2 (10 m)",
    "Graphes paysagers",
    "Espèces virtuelles",
    "dPC"
   ],
   "resume": "Master 1 Géomatique et Modélisation Spatiale, sous la direction de F. Lombard.",
   "blocs": [
    [
     "Problématique",
     "dans quelle mesure les choix d'objets paysagers et d'échelles de modélisation influencent-ils la structure des réseaux écologiques à l'échelle locale, et dans quelle mesure des entités fines (milieux herbacés semi-naturels, ripisylves, micro-taches boisées) sont-elles sous-estimées dans la modélisation et la planification de la trame verte ?"
    ],
    [
     "Méthode",
     "théorie des graphes paysagers avec Graphab 3.0.6 sur l'occupation du sol ESRI Sentinel-2 (10 m, 2025), sur l'aire d'influence fonctionnelle de la Métropole Aix-Marseille-Provence ; trois scénarios d'espèces virtuelles (spécialiste forestière, généraliste semi-ouverte, large spectre de dispersion) ; métriques PC, IIC, EC, Nc et dPC ; analyse de sensibilité (coût du bâti 50, 100 et 500 ; distance de dispersion 1 000, 3 000 et 10 000 m), soit 27 graphes."
    ],
    [
     "Résultats",
     "la probabilité de connectivité est multipliée par plus de 4 entre le scénario forestier et le scénario incluant les cultures (+315 %) ; les milieux herbacés et la végétation inondée la doublent à eux seuls (+117 %). Des micro-taches de 3 à 10 ha jouent un rôle de relais (stepping stones) malgré leur faible surface. Les résultats sont robustes au coût du bâti (variation < 0,1 %) et plus sensibles à la distance de dispersion."
    ]
   ],
   "cles": [
    [
     "+315 %",
     "probabilité de connectivité avec les cultures (S3 vs S1)"
    ],
    [
     "+117 %",
     "avec milieux herbacés et végétation inondée (S2)"
    ],
    [
     "−62 %",
     "de composantes isolées en S3 (1 384 → 525)"
    ],
    [
     "3 à 10 ha",
     "micro-taches jouant un rôle de relais"
    ]
   ],
   "rtitre": "",
   "resultats": [
    "Le choix des objets paysagers est le paramètre le plus déterminant : la probabilité de connectivité (PC) passe de 0,029 en S1 (boisements seuls) à 0,063 en S2 (+117 %) puis 0,121 en S3 (+315 %).",
    "La surface d'habitat connectée (EC) passe de 124 988 ha en S1 à 184 184 ha en S2 (+47 %) et 254 635 ha en S3, soit plus du double.",
    "Le nombre de composantes isolées diminue de 1 384 (S1) à 1 099 (S2, −21 %) puis 525 (S3, −62 %) : garrigues, pelouses et cultures jouent un rôle de transit entre les massifs boisés.",
    "Robustesse au coût du bâti : la PC varie de 0,06 % seulement entre un coût de 50 et de 500 ; c'est la distribution des boisements qui structure le réseau.",
    "Effet de la distance de dispersion : modéré sur la PC, majeur sur la fragmentation (−32 % de composantes entre 1 000 et 10 000 m). 3 000 m constitue un seuil de cohérence pour les espèces à portée moyenne.",
    "La connectivité est très concentrée : en S1, une seule tache de 116 845 ha porte 88,6 % du dPC ; en S3, la tache dominante n'en porte plus que 80,6 % et un second pôle apparaît au nord, dans la plaine agricole du Vaucluse.",
    "Corridors critiques : en S1, un lien relie le massif central au nord-ouest ; en S3, un corridor nord-sud entre le Vaucluse et les Bouches-du-Rhône devient prioritaire et dépasse les PLUi communaux.",
    "Stepping stones : des micro-taches de 3 à 10 ha, avec une contribution individuelle quasi nulle (< 0,001 % du dPC), assurent des connexions irremplaçables entre composantes du réseau.",
    "Hypothèses : la première (les objets paysagers fins comptent) est validée ; la seconde (une échelle de dispersion cohérente) l'est partiellement, car l'échelle pertinente dépend du profil des espèces.",
    "Recommandations : protéger le massif forestier central, préserver le corridor nord-sud par une OAP du SCoT, identifier les micro-taches à fort rôle de relais par croisement avec le cadastre et les PLUi.",
    "Limites : coûts de résistance théoriques et non calibrés, résolution de 10 m, connectivité structurelle et non fonctionnelle."
   ],
   "imgs": [
    [
     "aamp",
     "Figure 1 : carte de localisation de la zone d'étude"
    ],
    [
     "occup",
     "Figure 2 : carte d'occupation du sol ESRI Sentinel-2"
    ],
    [
     "s1g",
     "Figure 3 : graphe paysager scénario 1 (espèce spécialiste forestière)"
    ],
    [
     "s2g",
     "Figure 4 : graphe paysager scénario 2 (espèces généralistes des milieux semi-ouverts)"
    ],
    [
     "s3g",
     "Figure 5 : graphe paysager scénario 3 (espèce à large spectre de dispersion)"
    ],
    [
     "dpc1",
     "Figure 6 : contribution des nœuds et des liens à la connectivité globale (dPC), scénario 1"
    ],
    [
     "dpc3",
     "Figure 7 : contribution des nœuds et des liens à la connectivité globale (dPC), scénario 3"
    ]
   ],
   "docs": [
    [
     "assets/docs/Memoire_M1_SARR_Mouhamed.pdf",
     "Mémoire de Master 1 (PDF)"
    ]
   ]
  },
  {
   "id": "t2",
   "cat": "travail",
   "titre": "01 — Analyse spatiale de la ZFE de Marseille et pollution atmosphérique",
   "type": "Projet de Master 1",
   "annee": "2025–2026",
   "outils": [
    "Python",
    "GeoPandas",
    "SciPy",
    "Matplotlib",
    "Plotly",
    "Folium",
    "Contextily"
   ],
   "resume": "Évolution de la pollution atmosphérique dans la Métropole Aix-Marseille-Provence, 2016–2025.",
   "blocs": [
    [
     "",
     "Projet réalisé en Master 1. Étude de l'évolution de la pollution atmosphérique dans la Métropole Aix-Marseille-Provence sur 2016–2025, avec Python, GeoPandas, statistiques et cartographie interactive."
    ],
    [
     "Données",
     "communes AMP, périmètre ZFE, données de pollution."
    ],
    [
     "Méthodes",
     "préparation des données, harmonisation des systèmes de coordonnées, jointures spatiales, évolution annuelle, comparaison statistique avant/après la ZFE, densité, buffers et distance à la ZFE."
    ]
   ],
   "cles": [
    [
     "−17,4 %",
     "NO₂ à Marseille après la ZFE (p = 0,016)"
    ],
    [
     "−21,1 %",
     "PM2.5 à Marseille (p = 0,048, effet COVID possible)"
    ],
    [
     "≈ 33 µg/m³",
     "NO₂ moyen à Marseille, le plus élevé de la métropole"
    ],
    [
     "−0,27",
     "µg/m³ de NO₂ par km d'éloignement de la ZFE"
    ]
   ],
   "rtitre": "",
   "resultats": [
    "NO₂ : à Marseille, la moyenne passe d'environ 41 µg/m³ (2017) à environ 29 µg/m³ (2025), soit −29 %, avec une baisse qui s'accélère après 2021 (33 → 27 µg/m³ en 2024). Hors ZFE, la baisse est plus modérée depuis un niveau plus bas (22 → 14 µg/m³).",
    "Test de Mann-Whitney (Marseille, 2016–2020 contre 2021–2025) : NO₂ −17,4 % (p = 0,0159, significatif) ; PM2.5 −21,1 % (p = 0,0476, significatif) ; PM10 −11,8 % (p = 0,0754, non significatif) ; O₃ +0,1 % (p = 0,50, aucun effet).",
    "PM2.5 : la baisse de 18 à 10 µg/m³ a lieu entre 2016 et 2020, avant la ZFE, ce qui suggère un effet des restrictions de mobilité liées au COVID ; ensuite le niveau se stabilise autour du seuil OMS de 10 µg/m³.",
    "PM10 : entre 23 et 31 µg/m³ à Marseille, au-dessus du seuil OMS de 20 µg/m³ jusqu'en 2024 (environ 21). Les sources sont multiples (industrie notamment), avec un double foyer : Marseille et le nord-ouest industriel.",
    "Ozone : stable entre 54 et 67 µg/m³, très en dessous de la cible de 120 µg/m³, sans effet visible de la ZFE : c'est un polluant secondaire, formé par réactions photochimiques.",
    "Spatial : Marseille est l'épicentre du NO₂ de la métropole, et les cartes de densité (KDE) montrent que le périmètre de la ZFE couvre bien ce foyer. Le NO₂ diminue avec la distance à la ZFE.",
    "Conclusion : l'hypothèse de départ est partiellement validée. La ZFE a un effet mesurable sur le NO₂ et le PM2.5, les deux polluants liés au trafic, mais pas sur le PM10 ni sur l'ozone.",
    "Limites : la ZFE ne couvre qu'une partie du cœur urbain alors que la pollution déborde de son périmètre ; la diffusion vers les communes périphériques n'est pas démontrable avec les données disponibles."
   ],
   "imgs": [
    [
     "evo",
     "Évolution annuelle des polluants, ZFE Marseille et communes hors ZFE, 2016–2025"
    ],
    [
     "polluatm",
     "Pollution moyenne 2016–2025 (NO₂ et PM10) par commune"
    ]
   ],
   "docs": [
    [
     "assets/docs/ZFE_Marseille_qualite_air_SARR_Mouhamed.pdf",
     "Rapport complet (PDF)"
    ],
    [
     "assets/docs/Notebook_ZFE_Marseille_SARR_Mouhamed.ipynb",
     "Notebook Python (.ipynb)"
    ]
   ]
  },
  {
   "id": "t3",
   "cat": "travail",
   "titre": "02 — Approche multi-échelles de l'occupation du sol – Salon-de-Provence",
   "type": "Projet de Master 1",
   "annee": "2025–2026",
   "outils": [
    "QGIS",
    "BD TOPO",
    "BD Forêt",
    "RPG",
    "ZNIEFF"
   ],
   "resume": "Végétation, agriculture et structure urbaine dans les Bouches-du-Rhône, avec une étude locale de Salon-de-Provence.",
   "blocs": [
    [
     "",
     "Projet réalisé en Master 1. Analyse de la végétation, de l'agriculture et de la structure urbaine dans les Bouches-du-Rhône, avec une étude locale de Salon-de-Provence."
    ],
    [
     "Données",
     "BD TOPO, BD Forêt, RPG, ZNIEFF."
    ],
    [
     "Méthodes",
     "analyses départementale et communale, mailles de 100 m et 200 m, analyse de la végétation, des espaces agricoles et de la structure urbaine, statistiques et cartographie."
    ]
   ],
   "cles": [],
   "rtitre": "",
   "resultats": [
    "Végétation départementale : forte hétérogénéité, avec les plus grandes surfaces à l'ouest et au sud-est (Alpilles, Sainte-Baume, Côte Bleue). Les landes ligneuses dominent, devant les forêts de conifères et les forêts ouvertes.",
    "Communes les plus végétalisées : Arles, Marseille, Saintes-Maries-de-la-Mer et Aix-en-Provence. La surface communale joue, mais n'explique pas tout : les grands ensembles naturels protégés comptent.",
    "Salon-de-Provence se distingue du département par une part plus forte de haies et de vergers, et moins de landes ligneuses et de forêts de feuillus (figure 4 du dossier).",
    "Salon à l'échelle fine : le centre urbain est peu végétalisé ; les plus fortes densités sont à la périphérie (nord, est et ouest), dans des espaces naturels et agricoles continus. La maille de 200 m lisse les contrastes de la maille de 100 m.",
    "Agriculture départementale : Arles domine (environ 45 000 ha), devant Saint-Martin-de-Crau et les Saintes-Maries-de-la-Mer. Les cultures fourragères et céréalières (SPH, SPL, PPH) dépassent chacune 25 000 ha, et le riz plus de 11 000 ha.",
    "Agriculture à Salon : le type PPH domine (environ 1 500 ha), loin devant SPL et SPH ; les cultures pérennes sont présentes en moindre proportion. L'agriculture se concentre à l'est et au nord-est.",
    "Bâti : forte concentration au centre urbain de Salon, puis décroissance progressive vers les marges (zones pavillonnaires diffuses, puis espaces agricoles ou naturels), selon un modèle de croissance concentrique."
   ],
   "imgs": [],
   "docs": [
    [
     "assets/docs/Salon-de-Provence_occupation_du_sol_SARR_Mouhamed.pdf",
     "Rapport complet (PDF)"
    ]
   ]
  },
  {
   "id": "t4",
   "cat": "travail",
   "titre": "03 — Analyse spatiale des incendies – Bouches-du-Rhône et Istres",
   "type": "Projet de Master 1",
   "annee": "2025–2026",
   "outils": [
    "QGIS",
    "BDIFF",
    "Landsat 8-9",
    "BD TOPO"
   ],
   "resume": "Analyse spatiale multi-échelle d'un territoire : Bouches-du-Rhône et étude locale de la commune d'Istres.",
   "blocs": [
    [
     "",
     "Statistiques des incendies dans les Bouches-du-Rhône de 2020 à 2024 : nombre et taille moyenne par année, surface brûlée, nombre par mois, causes et leur évolution, communes les plus touchées, étude de cas du feu de la Bastidonne."
    ],
    [
     "",
     "Étude de l'occupation du sol de la commune d'Istres : bâti, plantations et végétation en grilles de 100 m et 200 m."
    ],
    [
     "Données",
     "BDIFF, Landsat 8-9, BD TOPO, BD Forêt."
    ]
   ],
   "cles": [
    [
     "≈ 430",
     "incendies en 2022, pic de la période 2020–2024"
    ],
    [
     "≈ 1 730 ha",
     "brûlés en 2022 (1 480 ha en 2020, 30 ha en 2024)"
    ],
    [
     "45,6 %",
     "des feux : actions involontaires de particuliers"
    ],
    [
     "2,9 %",
     "seulement d'origine naturelle"
    ]
   ],
   "rtitre": "",
   "resultats": [
    "2022 est l'année critique : pic de fréquence (environ 425 incendies), taille moyenne d'environ 40 000 m² et environ 1 730 ha brûlés. 2020 compte moins de feux (240) mais de plus grands (60 000 m² en moyenne, 1 480 ha).",
    "2024 est exceptionnellement calme : 225 incendies, environ 1 000 m² en moyenne et 30 ha brûlés. La courbe cumulée monte lentement en 2020–2021 puis accélère en 2022 : une saison extrême pèse sur tout le bilan.",
    "Saisonnalité nette : juillet et août concentrent le plus de départs, avec plus de 100 feux en juillet 2022 ; l'hiver (décembre à février) est très peu touché.",
    "Causes : actions involontaires de particuliers 45,6 %, malveillance 24,6 %, causes accidentelles ou techniques 19 %, travaux 7,9 %, naturelles 2,9 %. Plus de 90 % des feux sont d'origine humaine, donc évitables (SDIS 13).",
    "Fréquence et gravité ne coïncident pas : Martigues, Aix-en-Provence et Marseille comptent le plus de départs ; Graveson et Mouriès, peu de départs mais de très grandes surfaces brûlées. Martigues cumule les deux : c'est un point chaud.",
    "Feu de la Bastidonne (24 juillet 2017) : environ 1 275 ha, sur La Bastidonne, Pertuis, Mirabeau et La Tour-d'Aigues. Sécheresse, mistral et végétation continue et inflammable (landes ligneuses, forêts de feuillus et mixtes) ont favorisé la propagation.",
    "Bâti : l'urbanisation est très polarisée au sud-est, près des étangs. Le noyau ancien et dense ressort en maille de 100 m ; en 200 m apparaissent un centre structurant et un pôle secondaire isolé au nord (Entressen), signe d'une urbanisation hiérarchisée.",
    "Les extensions récentes ont des densités intermédiaires ; les grandes zones peu bâties correspondent aux milieux naturels, agricoles et humides qui limitent l'étalement.",
    "Effet d'échelle : la grille fine restitue la trame urbaine historique, la grille large montre la logique d'organisation d'ensemble.",
    "Végétation : les plus fortes densités sont en périphérie (sud, est, quelques secteurs au nord-ouest), les plus faibles au centre. Il existe une relation inverse entre densité du bâti et densité de végétation.",
    "Les formations herbacées et les landes dominent largement (plus de la moitié du territoire) ; pinèdes d'Alep, chênaies et peuplements mixtes sont plus fragmentés.",
    "Cultures : la plupart des mailles ne comptent que 0 à 2 plantations ; un pôle agricole se détache au nord-ouest. Le type PPH représente plus de 40 % de la surface agricole, devant SPH ; les cultures spécialisées sont concentrées dans quelques secteurs.",
    "Conclusion : une approche multi-échelle montre une commune polarisée autour de son noyau lacustre, avec un paysage méditerranéen ouvert et fragmenté."
   ],
   "imgs": [
    [
     "carte_feu",
     "Surface brûlée par commune, 2020 à 2024 (BDIFF)"
    ],
    [
     "fig12",
     "Nombre d'incendies et taille moyenne par année"
    ],
    [
     "bati",
     "Répartition du bâti à Istres, mailles de 100 m et 200 m"
    ]
   ],
   "docs": [
    [
     "assets/docs/Incendies_Bouches-du-Rhone_Istres_SARR_Mouhamed.pdf",
     "Rapport complet (PDF)"
    ]
   ]
  },
  {
   "id": "t5",
   "cat": "travail",
   "titre": "04 — Télédétection hyperspectrale : végétation urbaine et bâti à Toulouse",
   "type": "Travail de télédétection",
   "annee": "",
   "outils": [
    "ENVI",
    "HySpex (408 bandes)",
    "ACP / MNF",
    "NDVI",
    "SVM",
    "MLP",
    "Maximum de vraisemblance"
   ],
   "resume": "Cartographier la végétation urbaine puis extraire le bâti à partir d'images hyperspectrales.",
   "blocs": [
    [
     "Contexte",
     "exploiter des images hyperspectrales (des centaines de bandes étroites entre 0,4 et 2,5 µm) pour distinguer des types de végétation, puis extraire les bâtiments du centre urbain de Toulouse."
    ],
    [
     "Méthode",
     "prétraitement (masque des zones sans données, composition en vraies couleurs, réduction de dimension par ACP et MNF), indices comme le NDVI, puis classifications K-means, SVM (noyau RBF), réseau de neurones MLP et maximum de vraisemblance, sous ENVI."
    ],
    [
     "Données",
     "image aérienne HySpex de 408 bandes (414 à 2 503 nm) à 2 m de résolution, en réflectance de surface, projection UTM 31N."
    ]
   ],
   "cles": [
    [
     "98,1 %",
     "de précision globale pour l'extraction du bâti (MLP)"
    ],
    [
     "κ = 0,923",
     "coefficient Kappa du bâti"
    ],
    [
     "408 bandes",
     "HySpex, 2 m, 414–2 503 nm"
    ],
    [
     "11,3 %",
     "d'erreur de commission pour la classe bâti"
    ]
   ],
   "rtitre": "",
   "resultats": [
    "Végétation (partie I) : la carte SVM place la végétation le long des avenues arborées, du rond-point et du parc linéaire bordant le canal, là où la canopée est visible sur l'image de référence. Le bâti couvre presque en continu les îlots et les chaussées, avec très peu de pixels de végétation dans les îlots denses.",
    "Les trois classes de végétation séparent la canopée dense de la végétation plus basse, éparse ou stressée, en cohérence avec le gradient du NDVI. Cette évaluation est visuelle : sans matrice de confusion, aucune précision chiffrée n'est possible pour cette partie.",
    "Bâtiments (partie II), MLP : la classification binaire bâti / non-bâti atteint 98,1 % de précision globale et un Kappa de 0,923. Les contours des îlots et des bâtiments sont fidèles à la composition en vraies couleurs.",
    "Par classe : le non-bâti est très bien identifié (commission 0,2 %, omission 1,9 %) ; le bâti est presque entièrement détecté (omission 1,4 %), mais avec 11,3 % de commission, surtout à cause de la confusion entre toits, routes et surfaces minérales, qui crée un effet de « grain ».",
    "Maximum de vraisemblance : contours plus compacts et moins fragmentés que le MLP, effet de grain moins marqué. Les deux méthodes confondent bâti, routes et surfaces imperméables dans les zones denses : la limite vient de l'information des composantes ACP/MNF plus que de l'algorithme.",
    "Perspective : ajouter des bandes SWIR ciblées ou de l'information de texture pour mieux séparer toits et chaussées."
   ],
   "imgs": [
    [
     "hy_svm_tool",
     "Outil de classification SVM sous ENVI (noyau RBF)"
    ],
    [
     "hy_km_tool",
     "Outil de classification non supervisée K-means sous ENVI"
    ],
    [
     "hy_km",
     "Classification K-means : vue d'ensemble et détail"
    ],
    [
     "hy_ndvi",
     "Résultat du NDVI"
    ],
    [
     "hy_svmwin",
     "Classification SVM sous ENVI (classes Végétation 1, 2, 3, îlot, bâti)"
    ],
    [
     "hy_ref",
     "Détail de la classification superposé à l'image optique de référence"
    ],
    [
     "hy_svm",
     "Carte finale de la classification SVM"
    ],
    [
     "hy_rgb2",
     "Composition en vraies couleurs avant et après masquage des zones sans données (R = bande 69, V = bande 41, B = bande 18)"
    ],
    [
     "hy_pcamnf",
     "A : composante 1 de la MNF ; B : composante 1 de l'ACP"
    ],
    [
     "hy_mlp_tool",
     "Paramètres du réseau de neurones MLP sous ENVI"
    ],
    [
     "hy_mlp",
     "Extraction du bâti par réseau de neurones MLP (en rouge), comparée à la composition en vraies couleurs"
    ],
    [
     "hy_max_tool",
     "Paramètres du maximum de vraisemblance (4 classes, probabilités a priori de 0,25)"
    ],
    [
     "hy_max",
     "Extraction du bâti par maximum de vraisemblance"
    ]
   ],
   "docs": [
    [
     "assets/docs/Teledetection_hyperspectrale_Toulouse_SARR_Mouhamed.pdf",
     "Rapport complet (PDF)"
    ],
    [
     "assets/docs/Teledetection_hyperspectrale_Toulouse_SARR_Mouhamed.docx",
     "Version Word (.docx)"
    ]
   ]
  },
  {
   "id": "t6",
   "cat": "travail",
   "titre": "05 — Analyse Space Syntax comparative de six villages",
   "type": "Analyse de la morphologie urbaine",
   "annee": "",
   "outils": [
    "Space Syntax",
    "Cartes axiales",
    "Intégration (HH)",
    "RRA",
    "Profondeur moyenne"
   ],
   "resume": "Comparer la structure spatiale de six villages de formes très différentes.",
   "blocs": [
    [
     "Contexte",
     "comparer, avec la Space Syntax, six villages de formes et d'époques très différentes : Keerbergen, La Carolina, Cumbernauld, Nördlingen, Saint-Nectaire et Sułoszowa."
    ],
    [
     "Méthode",
     "cartes axiales colorées selon l'intégration (du rouge, très intégré, au bleu, très profond), et lecture des tables d'attributs : choix, choix normalisé, intégration (HH), RA, RRA et profondeur moyenne."
    ],
    [
     "Question",
     "l'important n'est pas qu'un cœur existe, mais s'il est intégré dans un tissu maillé ou s'il termine des axes unidimensionnels."
    ]
   ],
   "cles": [
    [
     "6",
     "villages comparés"
    ],
    [
     "0,133",
     "intégration moyenne la plus élevée (Keerbergen)"
    ],
    [
     "22,14",
     "RRA moyen le plus élevé (Saint-Nectaire)"
    ],
    [
     "0,993",
     "choix normalisé maximal (Saint-Nectaire)"
    ]
   ],
   "rtitre": "",
   "resultats": [
    "Keerbergen (banlieue pavillonnaire peu dense) : meilleure intégration moyenne (0,133), RRA le plus bas (7,93) et profondeur moyenne la plus faible (76,16) : le système le mieux connecté, malgré ses nombreuses impasses.",
    "La Carolina (ville coloniale planifiée en grille) : cœur très intégré, mais transition abrupte vers de longues routes rurales. Intégration 0,096 (deuxième), RRA 12,14 avec un maximum de 36,81 pour les extrémités.",
    "Cumbernauld (ville nouvelle moderniste en superblocs) : choix normalisé le plus faible (0,019), intégration 0,076, profondeur 159,33. Les artères concentrent les flux, mais les quartiers, repliés sur eux-mêmes, restent compartimentés.",
    "Nördlingen (ville médiévale radioconcentrique) : anneau d'intégration très net, intégration 0,083, RRA 12,68, profondeur 140,64. Le plan historique reste efficace pour répartir les accès.",
    "Saint-Nectaire (village de vallée en ruban) : intégration la plus faible (0,047), RRA (22,14) et profondeur moyenne (203,62) les plus élevés, choix normalisé de 0,993 : presque tout le trafic passe par un seul axe.",
    "Sułoszowa (village-rue) : choix normalisé 0,069, RRA 19,83 et profondeur 196,95, deuxièmes valeurs les plus élevées : une seule colonne vertébrale, avec un réseau secondaire peu perméable.",
    "Synthèse : Keerbergen et Nördlingen ont le meilleur profil (cœur compact et gradient progressif dans un tissu maillé) ; La Carolina et Cumbernauld ont un cœur organisé mais un tissu connecteur pauvre ; Saint-Nectaire et Sułoszowa n'ont presque pas de cœur."
   ],
   "imgs": [
    [
     "ss_keer",
     "Keerbergen : carte axiale d'intégration"
    ],
    [
     "ss_carol",
     "La Carolina : carte axiale d'intégration"
    ],
    [
     "ss_cumb",
     "Cumbernauld : carte axiale d'intégration"
    ],
    [
     "ss_nord",
     "Nördlingen : carte axiale d'intégration"
    ],
    [
     "ss_nect",
     "Saint-Nectaire : carte axiale d'intégration"
    ],
    [
     "ss_sulo",
     "Sułoszowa : carte axiale d'intégration"
    ]
   ],
   "docs": [
    [
     "assets/docs/Analyse_Space_Syntax_SARR_Mouhamed.pdf",
     "Rapport complet (PDF)"
    ]
   ]
  }
 ]
};
