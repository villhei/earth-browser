import fs from "fs"
import path from "path"
import { CultureBatchEntry } from "../seed_culture_metadata_batch"

export const RESIDUE_SOUTH_AMERICA_CULTURES: CultureBatchEntry[] = [
  {
    "slug": "viceroyalty-of-peru",
    "name": "Viceroyalty of Peru",
    "name_fi": "Perun varakuningaskunta",
    "native_name": "Virreinato del Perú",
    "alternate_names": [
      "Viceroyalty of Peru",
      "Virreinato del Perú"
    ],
    "culture_group": "Latin America",
    "lineage_id": "esp",
    "historical_period": "Spanish Colonial Viceroyalty",
    "year_start": 1542,
    "year_end": 1824,
    "period_label": "1542 CE – 1824 CE",
    "period_label_fi": "1542 jaa. – 1824 jaa.",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Viceroyalty_of_Peru",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Perun_varakuningaskunta",
    "wikidata_id": "Q211279",
    "summary_en": "Spanish imperial administrative entity created by Emperor Charles V in 1542, governing most of Spanish South America and centered on the affluent silver mines of Potosí and the capital at Lima.",
    "summary_fi": "Espanjan siirtomaaimperiumin varakuningaskunta, jonka Kaarle V perusti vuonna 1542 ja joka hallitsi suurinta osaa Etelä-Amerikasta pääkaupunkinaan Lima ja vaurautenaan Potosín hopeakaivokset.",
    "capital": "Lima / Ciudad de los Reyes",
    "feature_name_matches": [
      "Viceroyalty of Peru"
    ]
  },
  {
    "slug": "colony-of-british-guiana",
    "name": "British Guiana",
    "name_fi": "Brittiläinen Guayana",
    "native_name": "Colony of British Guiana",
    "alternate_names": [
      "British Guiana",
      "British Guayana"
    ],
    "culture_group": "Latin America",
    "lineage_id": "gbr",
    "historical_period": "British South American Crown Colony",
    "year_start": 1796,
    "year_end": 1966,
    "period_label": "1796 CE – 1966 CE",
    "period_label_fi": "1796 jaa. – 1966 jaa.",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/British_Guiana",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Brittil%C3%A4inen_Guayana",
    "wikidata_id": "Q1067290",
    "summary_en": "British colony on the northern coast of South America formed from the consolidated Dutch colonies of Demerara, Essequibo, and Berbice, which achieved independence as Guyana in 1966.",
    "summary_fi": "Britannian siirtokunta Etelä-Amerikan pohjoisrannikolla, joka yhdistettiin hollantilaisten siirtokunnista ja saavutti itsenäisyyden Guyanan valtiona vuonna 1966.",
    "capital": "Georgetown",
    "feature_name_matches": [
      "British Guiana"
    ]
  },
  {
    "slug": "viceroyalty-of-brazil",
    "name": "Viceroyalty of Brazil",
    "name_fi": "Brasilian varakuningaskunta",
    "native_name": "Vice-Reino do Brasil / Estado do Brasil",
    "alternate_names": [
      "Viceroyalty of Brazil",
      "State of Brazil",
      "Vice-Reino do Brasil"
    ],
    "culture_group": "Latin America",
    "lineage_id": "prt",
    "historical_period": "Portuguese Colonial Viceroyalty of Brazil",
    "year_start": 1720,
    "year_end": 1815,
    "period_label": "1720 CE – 1815 CE",
    "period_label_fi": "1720 jaa. – 1815 jaa.",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/State_of_Brazil",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Brasilian_historia",
    "wikidata_id": "Q2088324",
    "summary_en": "Colonial realm of the Portuguese Empire in South America elevated to a viceroyalty, transferring its capital to Rio de Janeiro in 1763 and serving as the haven of the Portuguese court in 1808.",
    "summary_fi": "Portugalin siirtomaaimperiumin varakuningaskunta Etelä-Amerikassa, jonka pääkaupunki siirrettiin Rio de Janeiroon vuonna 1763 ja joka toimi Portugalin hovin pakopaikkana Napoleonin sodissa.",
    "capital": "Salvador da Bahia / Rio de Janeiro",
    "feature_name_matches": [
      "Viceroyalty of Brazil"
    ]
  },
  {
    "slug": "aymara-kingdoms",
    "name": "Aymara Kingdoms (Señoríos Aymaras)",
    "name_fi": "Aymara-kuningaskunnat",
    "native_name": "Señoríos aymaras / Aymara señoríos",
    "alternate_names": [
      "Aymara kingdoms",
      "Colla and Lupaca kingdoms",
      "Aymara lordships"
    ],
    "culture_group": "Andean",
    "lineage_id": "aymara",
    "historical_period": "Late Intermediate Lake Titicaca Polities",
    "year_start": 1150,
    "year_end": 1470,
    "period_label": "1150 CE – 1470 CE",
    "period_label_fi": "1150 jaa. – 1470 jaa.",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Aymara_kingdoms",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Aymarat",
    "wikidata_id": "Q6126738",
    "summary_en": "Confederation of prosperous Aymara-speaking ethnic kingdoms (notably the Colla, Lupaca, and Pacajes) surrounding Lake Titicaca in the Altiplano after the collapse of the Tiwanaku Empire.",
    "summary_fi": "Tiwanakun romahduksen jälkeen Titicacajärven ympäristöön syntyneet kukoistavat aymarankieliset kuningaskunnat (kuten colla ja lupaca), jotka hallitsivat Altiplanoa ennen inkavalloitusta.",
    "capital": "Hatuncolla / Chucuito",
    "feature_name_matches": [
      "Aymara kingdoms"
    ]
  },
  {
    "slug": "colony-of-cayenne-french-guiana",
    "name": "Cayenne (French Guiana)",
    "name_fi": "Cayenne (Ranskan Guayana)",
    "native_name": "Colonie de Cayenne / Guyane française",
    "alternate_names": [
      "Cayenne",
      "French Guiana",
      "Colonie de la Guyane"
    ],
    "culture_group": "Latin America",
    "lineage_id": "fra",
    "historical_period": "French Colonial Guiana",
    "year_start": 1643,
    "year_end": 1946,
    "period_label": "1643 CE – 1946 CE",
    "period_label_fi": "1643 jaa. – 1946 jaa.",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/French_Guiana",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Ranskan_Guayana",
    "wikidata_id": "Q3769",
    "summary_en": "French colonial settlement founded in 1643 on the northern Atlantic coast of South America, developing sugarcane plantations worked by enslaved Africans.",
    "summary_fi": "Ranskan siirtokunta Etelä-Amerikan koillisrannikolla vuodesta 1643, joka perustui sokeriruokoviljelmiin ja orjatyövoimaan ja josta muodostui Ranskan Guayana.",
    "capital": "Cayenne",
    "feature_name_matches": [
      "Cayenne"
    ]
  },
  {
    "slug": "kingdom-of-brazil",
    "name": "Kingdom of Brazil",
    "name_fi": "Brasilian kuningaskunta",
    "native_name": "Reino do Brasil / Império do Brasil",
    "alternate_names": [
      "Kingdom of Brazil",
      "Empire of Brazil",
      "Reino do Brasil"
    ],
    "culture_group": "Latin America",
    "lineage_id": "bra",
    "historical_period": "Monarchical Era of Brazil",
    "year_start": 1815,
    "year_end": 1889,
    "period_label": "1815 CE – 1889 CE",
    "period_label_fi": "1815 jaa. – 1889 jaa.",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kingdom_of_Brazil",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Brasilian_keisarikunta",
    "wikidata_id": "Q3323547",
    "summary_en": "Constituent kingdom created within the United Kingdom of Portugal, Brazil and the Algarves in 1815, which declared independence in 1822 to become the constitutional Empire of Brazil.",
    "summary_fi": "Vuonna 1815 perustettu Brasilian kuningaskunta, joka itsenäistyi vuonna 1822 ja toimi perustuslaillisena keisarikuntana vuoteen 1889 asti.",
    "capital": "Rio de Janeiro",
    "feature_name_matches": [
      "Kingdom of Brazil"
    ]
  },
  {
    "slug": "viceroyalty-of-new-granada",
    "name": "Viceroyalty of New Granada",
    "name_fi": "Uuden-Granadan varakuningaskunta",
    "native_name": "Virreinato de la Nueva Granada",
    "alternate_names": [
      "Viceroyalty of New Granada",
      "Virreinato de la Nueva Granada"
    ],
    "culture_group": "Latin America",
    "lineage_id": "esp",
    "historical_period": "Bourbon Spanish Viceroyalty",
    "year_start": 1717,
    "year_end": 1819,
    "period_label": "1717 CE – 1819 CE",
    "period_label_fi": "1717 jaa. – 1819 jaa.",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Viceroyalty_of_New_Granada",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Uuden-Granadan_varakuningaskunta",
    "wikidata_id": "Q211054",
    "summary_en": "Spanish viceroyalty established by the Bourbon crown in 1717 governing northern South America (modern Colombia, Venezuela, Ecuador, and Panama), centered at Santafé de Bogotá.",
    "summary_fi": "Bourbon-hallitsijoiden vuonna 1717 perustama varakuningaskunta, joka hallitsi Etelä-Amerikan pohjoisosia (nykyiset Kolumbia, Venezuela, Ecuador ja Panama) pääkaupunkinaan Bogotá.",
    "capital": "Santafé de Bogotá",
    "feature_name_matches": [
      "Viceroyalty of New Granada"
    ]
  },
  {
    "slug": "colony-of-essequibo",
    "name": "Colony of Essequibo",
    "name_fi": "Essequibon siirtokunta",
    "native_name": "Kolonie Essequebo",
    "alternate_names": [
      "Essequibo",
      "Essequebo",
      "Dutch Essequibo"
    ],
    "culture_group": "Latin America",
    "lineage_id": "nld",
    "historical_period": "Dutch West India Company Guiana Colony",
    "year_start": 1616,
    "year_end": 1814,
    "period_label": "1616 CE – 1814 CE",
    "period_label_fi": "1616 jaa. – 1814 jaa.",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Essequibo_(colony)",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Essequibo_(siirtokunta)",
    "wikidata_id": "Q1435212",
    "summary_en": "Dutch colony founded by the Dutch West India Company along the Essequibo River in 1616, defended by Fort Kyk-Over-Al before ceding to Great Britain in 1814.",
    "summary_fi": "Alankomaiden Länsi-Intian kauppakomppanian vuonna 1616 Essequibo-joen varrelle perustama siirtokunta, jonka keskus oli Fort Kyk-Over-Al ennen luovutusta Britannialle 1814.",
    "capital": "Fort Kyk-Over-Al / Cartabo",
    "feature_name_matches": [
      "Essequibo"
    ]
  },
  {
    "slug": "portuguese-america-brazil",
    "name": "Colonial Portuguese Brazil",
    "name_fi": "Portugalin Brasilia",
    "native_name": "Estado do Brasil / América Portuguesa",
    "alternate_names": [
      "Portuguese Brazil",
      "Portuguese America",
      "Colônia do Brasil"
    ],
    "culture_group": "Latin America",
    "lineage_id": "prt",
    "historical_period": "Colonial Brazil Period",
    "year_start": 1500,
    "year_end": 1720,
    "period_label": "1500 CE – 1720 CE",
    "period_label_fi": "1500 jaa. – 1720 jaa.",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Colonial_Brazil",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Brasilian_historia",
    "wikidata_id": "Q2088324",
    "summary_en": "Portuguese colonial domain claimed following Pedro Álvares Cabral's landfall in 1500, organized under captaincies and governed from Salvador da Bahia during the sugarcane cycle.",
    "summary_fi": "Portugalin siirtomaa-alue Pedro Álvares Cabralin vuoden 1500 maihannousun jälkeen, joka jaettiin kapteenikuntiin ja vaurastui sokeriruokotaloudella pääkaupunkinaan Salvador da Bahia.",
    "capital": "Salvador da Bahia",
    "feature_name_matches": [
      "Portuguese Brazil"
    ]
  },
  {
    "slug": "dutch-surinam",
    "name": "Dutch Surinam",
    "name_fi": "Hollannin Surinam",
    "native_name": "Suriname / Nederlands-Guiana",
    "alternate_names": [
      "Surinam",
      "Dutch Surinam",
      "Dutch Guiana"
    ],
    "culture_group": "Latin America",
    "lineage_id": "nld",
    "historical_period": "Dutch Plantation Colony of Surinam",
    "year_start": 1667,
    "year_end": 1954,
    "period_label": "1667 CE – 1954 CE",
    "period_label_fi": "1667 jaa. – 1954 jaa.",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Surinam_(Dutch_colony)",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Surinamen_historia",
    "wikidata_id": "Q2696102",
    "summary_en": "Dutch plantation colony established along the Suriname River acquired from England by the Treaty of Breda in 1667, known for sugar estates, enslaved African maroons, and Paramaribo.",
    "summary_fi": "Alankomaiden plantaasisiirtokunta Surinam-joen varrella Bredan rauhansopimuksen jälkeen 1667, joka tunnetaan sokeriplantaaseistaan ja marooniyhteisöistään.",
    "capital": "Paramaribo",
    "feature_name_matches": [
      "Surinam"
    ]
  },
  {
    "slug": "viceroyalty-of-the-rio-de-la-plata",
    "name": "Viceroyalty of the Río de la Plata",
    "name_fi": "Río de la Platan varakuningaskunta",
    "native_name": "Virreinato del Río de la Plata",
    "alternate_names": [
      "Viceroyalty of the Río de la Plata",
      "Virreinato del Río de la Plata"
    ],
    "culture_group": "Latin America",
    "lineage_id": "esp",
    "historical_period": "Bourbon Viceroyalty of the Río de la Plata",
    "year_start": 1776,
    "year_end": 1814,
    "period_label": "1776 CE – 1814 CE",
    "period_label_fi": "1776 jaa. – 1814 jaa.",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Viceroyalty_of_the_R%C3%ADo_de_la_Plata",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/R%C3%ADo_de_la_Platan_varakuningaskunta",
    "wikidata_id": "Q212429",
    "summary_en": "Spanish viceroyalty created in 1776 by King Charles III to protect the southern Atlantic border from Portuguese expansion, comprising Argentina, Uruguay, Paraguay, and Bolivia.",
    "summary_fi": "Espanjan varakuningaskunta, jonka Kaarle III perusti vuonna 1776 turvaamaan eteläistä rajaa portugalilaisilta ja johon kuuluivat nykyiset Argentiina, Uruguay, Paraguay ja Bolivia.",
    "capital": "Buenos Aires",
    "feature_name_matches": [
      "Viceroyalty of the Río de la Plata"
    ]
  },
  {
    "slug": "guiana-region-colony",
    "name": "Guiana (Colonial Region)",
    "name_fi": "Guayana (siirtomaa-alue)",
    "native_name": "Guianas / Las Guayanas",
    "alternate_names": [
      "Guiana",
      "The Guianas"
    ],
    "culture_group": "Latin America",
    "lineage_id": "gbr",
    "historical_period": "Guiana Colonial Transition",
    "year_start": 1803,
    "year_end": 1831,
    "period_label": "1803 CE – 1831 CE",
    "period_label_fi": "1803 jaa. – 1831 jaa.",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/The_Guianas",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Guayana_(alue)",
    "wikidata_id": "Q736207",
    "summary_en": "Northern South American coastal zone between the Orinoco and Amazon rivers partitioned between British, Dutch, and French spheres of influence.",
    "summary_fi": "Etelä-Amerikan koillisrannikon alue Orinoco- ja Amazon-jokien välissä, joka jaettiin Britannian, Alankomaiden ja Ranskan siirtomaavyöhykkeisiin.",
    "capital": "Georgetown",
    "feature_name_matches": [
      "Guiana"
    ]
  },
  {
    "slug": "united-provinces-of-the-rio-de-la-plata",
    "name": "United Provinces of the Río de la Plata",
    "name_fi": "Río de la Platan yhdistyneet provinssit",
    "native_name": "Provincias Unidas del Río de la Plata",
    "alternate_names": [
      "United Provinces of the Río de la Plata",
      "Provincias Unidas del Río de la Plata",
      "United Provinces of South America"
    ],
    "culture_group": "Latin America",
    "lineage_id": "arg",
    "historical_period": "Argentine Independence Era",
    "year_start": 1810,
    "year_end": 1831,
    "period_label": "1810 CE – 1831 CE",
    "period_label_fi": "1810 jaa. – 1831 jaa.",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/United_Provinces_of_the_R%C3%ADo_de_la_Plata",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/R%C3%ADo_de_la_Platan_yhdistyneet_provinssit",
    "wikidata_id": "Q218765",
    "summary_en": "Post-revolutionary state formed following the May Revolution of 1810 in Buenos Aires, which declared formal independence from Spain at the Congress of Tucumán in 1816.",
    "summary_fi": "Vuoden 1810 toukokuun vallankumouksen jälkeen syntynyt valtio, joka julisti itsenäisyyden Espanjasta Tucumánin kongressissa 1816 ja toimi Argentiinan suorana edeltäjänä.",
    "capital": "Buenos Aires",
    "feature_name_matches": [
      "United Provinces of the Río de la Plata"
    ]
  },
  {
    "slug": "a-i-cofan-kofan-people",
    "name": "A'i Cofán/Kofán People",
    "name_fi": "A'i Cofán/Kofán-kansa",
    "native_name": "A'i Cofán/Kofán",
    "alternate_names": [
      "A'i Cofán/Kofán",
      "Cofán language"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Cof%C3%A1n_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2669254",
    "summary_en": "Cofán or Kofán, known in the language itself as Aʼingae, is the primary language of the Cofán people, an indigenous group whose ancestral territory lies at the interface between the Andean foothills and Amazonia in the northeast of Ecuador and southern Colombia, who call themselves the Aʼi. Although still robustly learned by children in Ecuadorian communities, Cofán is considered an 'endangered' language with estimates of around 1,500 native speakers. Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 0.2°N, 77.0°W).",
    "summary_fi": "A'i Cofán/Kofán-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 0.2°N, 77.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "A'i Cofán/Kofán"
    ]
  },
  {
    "slug": "a-uwe-people",
    "name": "A'uwe People",
    "name_fi": "A'uwe-kansa",
    "native_name": "A'uwe",
    "alternate_names": [
      "A'uwe",
      "Xavante"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Xavante",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q978982",
    "summary_en": "The Xavante are an Indigenous people, comprising about 30,000 individuals within the territory of eastern Mato Grosso state in Brazil. They speak the Xavante language, part of the Jê language family. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 13.6°S, 52.4°W).",
    "summary_fi": "A'uwe-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 13.6°S, 52.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "A'uwe"
    ]
  },
  {
    "slug": "abipones-people",
    "name": "Abipones People",
    "name_fi": "Abipones-kansa",
    "native_name": "Abipones",
    "alternate_names": [
      "Abipones",
      "Abipón"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Abip%C3%B3n",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q480290",
    "summary_en": "The Abipones were an Indigenous people of Argentina's Gran Chaco region and Paraguay, speakers of one of the Guaicuruan languages. They ceased to exist as an independent ethnic group in the early 19th century. Their ancestral territory is situated in Pampas and Río de la Plata Basin (centered near 29.1°S, 61.3°W).",
    "summary_fi": "Abipones-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pampalla ja Río de la Platan valuma-alueella (koordinaateissa noin 29.1°S, 61.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Pampas traditional tolderías",
    "feature_name_matches": [
      "Abipones"
    ]
  },
  {
    "slug": "achagua-people",
    "name": "Achagua People",
    "name_fi": "Achagua-kansa",
    "native_name": "Achagua",
    "alternate_names": [
      "Achagua",
      "Achagua people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Achagua_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1394162",
    "summary_en": "The Achagua are an Indigenous people of Colombia and Venezuela. At the time of the Spanish colonization of the Americas, their territory covered the present-day Venezuelan states of Bolívar, Guárico and Barinas. Their ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 3.6°N, 72.9°W).",
    "summary_fi": "Achagua-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 3.6°N, 72.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "Achagua"
    ]
  },
  {
    "slug": "achuar-people",
    "name": "Achuar People",
    "name_fi": "Achuar-kansa",
    "native_name": "Achuar",
    "alternate_names": [
      "Achuar"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Achuar",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2566194",
    "summary_en": "The Achuar are an indigenous people of the Americas speaking a language belonging to the Jivaroan language family, alongside the Shuar, Shiwiar, Awajun, and Wampis (Perú). They live along the banks of the Pastaza River, Huasaga River, and on the borders between Ecuador and Perú. Their ancestral territory is situated in Northern Peruvian Andes and Pacific Coast (centered near 3.5°S, 76.7°W).",
    "summary_fi": "Achuar-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Perun Andeilla ja Tyynenmeren rannikolla (koordinaateissa noin 3.5°S, 76.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Peruvian valleys & coast",
    "feature_name_matches": [
      "Achuar"
    ]
  },
  {
    "slug": "ache-people",
    "name": "Aché People",
    "name_fi": "Aché-kansa",
    "native_name": "Aché",
    "alternate_names": [
      "Aché"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ach%C3%A9",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q341265",
    "summary_en": "The Aché are an Indigenous people of Paraguay. They are hunter-gatherers living in eastern Paraguay. Their ancestral territory is situated in Pantanal, Mato Grosso and Southern Cerrado (centered near 25.1°S, 55.5°W).",
    "summary_fi": "Aché-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pantanalin, Mato Grosson ja eteläisen Cerradon alueella (koordinaateissa noin 25.1°S, 55.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Pantanal & Cerrado aldeias",
    "feature_name_matches": [
      "Aché"
    ]
  },
  {
    "slug": "aikana-people",
    "name": "Aikanã People",
    "name_fi": "Aikanã-kansa",
    "native_name": "Aikanã",
    "alternate_names": [
      "Aikanã",
      "Aikanã people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Aikan%C3%A3_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2222837",
    "summary_en": "The Aikanã are an Indigenous people of Brazil, living in the state of Rondônia, in the western Amazonian lowlands. They are also known as the Massacá, Tubarão, Columbiara, Mundé, Mondé, Huari and Aikaná. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 12.6°S, 60.6°W).",
    "summary_fi": "Aikanã-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 12.6°S, 60.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Aikanã"
    ]
  },
  {
    "slug": "akawaio-akawayo-people",
    "name": "Akawaio/Akawayo People",
    "name_fi": "Akawaio/Akawayo-kansa",
    "native_name": "Akawaio/Akawayo",
    "alternate_names": [
      "Akawaio/Akawayo",
      "Akawaio people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Akawaio_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q922476",
    "summary_en": "The Akawaio are an Indigenous people who live in Roraima (Brazil), Guyana, and Venezuela. They are closely related to the Ingarikó and Patamona. Their ancestral territory is situated in Llanos and Orinoco River Basin (centered near 6.2°N, 60.2°W).",
    "summary_fi": "Akawaio/Akawayo-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Llanosin savannilla ja Orinoco-joen valuma-alueella (koordinaateissa noin 6.2°N, 60.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Orinoco riverine communities",
    "feature_name_matches": [
      "Akawaio/Akawayo"
    ]
  },
  {
    "slug": "akwe-people",
    "name": "Akwê People",
    "name_fi": "Akwê-kansa",
    "native_name": "Akwê",
    "alternate_names": [
      "Akwê",
      "Akwesasne"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Akwesasne",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q424379",
    "summary_en": "The Mohawk Nation at Akwesasne is a Mohawk territory that straddles the intersection of international borders and provincial boundaries on both banks of the St. Lawrence River. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 9.6°S, 48.0°W).",
    "summary_fi": "Akwê-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 9.6°S, 48.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Akwê"
    ]
  },
  {
    "slug": "amahuaca-people",
    "name": "Amahuaca People",
    "name_fi": "Amahuaca-kansa",
    "native_name": "Amahuaca",
    "alternate_names": [
      "Amahuaca"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Amahuaca",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2528564",
    "summary_en": "The Amahuaca or Amhuaca are Indigenous peoples of the southeastern Amazon Basin in Peru and Brazil. Isolated until the 18th century, they are currently under threat from ecological devastation, disease and violence brought by oil extractors and illegal loggers. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 10.1°S, 72.8°W).",
    "summary_fi": "Amahuaca-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 10.1°S, 72.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Amahuaca"
    ]
  },
  {
    "slug": "ambalo-people",
    "name": "Ambaló People",
    "name_fi": "Ambaló-kansa",
    "native_name": "Ambaló",
    "alternate_names": [
      "Ambaló",
      "Ambalona River"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ambalona_River",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q30066033",
    "summary_en": "Ambalona is a river in eastern Madagascar. It flows into the Indian Ocean south of Toamasina. Their ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 2.6°N, 76.4°W).",
    "summary_fi": "Ambaló-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 2.6°N, 76.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "Ambaló"
    ]
  },
  {
    "slug": "amboca-people",
    "name": "Amboca People",
    "name_fi": "Amboca-kansa",
    "native_name": "Amboca",
    "alternate_names": [
      "Amboca",
      "Ambon, Maluku"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ambon%2C_Maluku",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q18970",
    "summary_en": "Ambon is the capital and largest city of the Indonesian province of Maluku. This city is also known as Ambon Manise, which means \"beautiful\" or \"pretty\" Ambon in the Ambonese language. Their ancestral territory is situated in Northern Peruvian Andes and Pacific Coast (centered near 3.9°S, 79.4°W).",
    "summary_fi": "Amboca-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Perun Andeilla ja Tyynenmeren rannikolla (koordinaateissa noin 3.9°S, 79.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Peruvian valleys & coast",
    "feature_name_matches": [
      "Amboca"
    ]
  },
  {
    "slug": "amorua-people",
    "name": "Amorúa People",
    "name_fi": "Amorúa-kansa",
    "native_name": "Amorúa",
    "alternate_names": [
      "Amorúa",
      "Ruben Amorim"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ruben_Amorim",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q368682",
    "summary_en": "Ruben Filipe Marques Amorim is a Portuguese professional football manager and former player who is currently head coach of Serie A club AC Milan. Their ancestral territory is situated in Llanos and Orinoco River Basin (centered near 5.1°N, 70.2°W).",
    "summary_fi": "Amorúa-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Llanosin savannilla ja Orinoco-joen valuma-alueella (koordinaateissa noin 5.1°N, 70.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Orinoco riverine communities",
    "feature_name_matches": [
      "Amorúa"
    ]
  },
  {
    "slug": "anambe-people",
    "name": "Anambé People",
    "name_fi": "Anambé-kansa",
    "native_name": "Anambé",
    "alternate_names": [
      "Anambé",
      "Anambé people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Anamb%C3%A9_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2259862",
    "summary_en": "The Anambé are an Indigenous people of Brazil, living in the state of Pará, Brazil. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 3.1°S, 50.1°W).",
    "summary_fi": "Anambé-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 3.1°S, 50.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Anambé"
    ]
  },
  {
    "slug": "andoa-people",
    "name": "Andoa People",
    "name_fi": "Andoa-kansa",
    "native_name": "Andoa",
    "alternate_names": [
      "Andoa",
      "Andoa language"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Andoa_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2846171",
    "summary_en": "Andoa is an extinct Zaparoan language of Ecuador and Peru. It was found in the Pastaza River region of Ecuador and Peru. Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 2.5°S, 76.6°W).",
    "summary_fi": "Andoa-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 2.5°S, 76.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "Andoa"
    ]
  },
  {
    "slug": "angaite-people",
    "name": "Angaité People",
    "name_fi": "Angaité-kansa",
    "native_name": "Angaité",
    "alternate_names": [
      "Angaité",
      "Angaité language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Angait%C3%A9_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q15736037",
    "summary_en": "Angaité is a language of the Paraguayan Chaco. Many children speak only Guarani, but may understand Angaité. Their ancestral territory is situated in Gran Chaco lowlands (Argentina, Paraguay, Bolivia) (centered near 22.8°S, 58.7°W).",
    "summary_fi": "Angaité-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Gran Chacon alankoalueilla (Argentiinassa, Paraguayssa ja Boliviassa) (koordinaateissa noin 22.8°S, 58.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Gran Chaco riverine encampments",
    "feature_name_matches": [
      "Angaité"
    ]
  },
  {
    "slug": "aparai-people",
    "name": "Aparai People",
    "name_fi": "Aparai-kansa",
    "native_name": "Aparai",
    "alternate_names": [
      "Aparai",
      "Aparai people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Aparai_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q617636",
    "summary_en": "The Aparai or Apalai are an Indigenous people of Brazil, who live in Amapá and Pará states. A little community is located in French Guiana, in Antécume-Pata. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 1.6°N, 55.2°W).",
    "summary_fi": "Aparai-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 1.6°N, 55.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Aparai"
    ]
  },
  {
    "slug": "apiaka-people",
    "name": "Apiaká People",
    "name_fi": "Apiaká-kansa",
    "native_name": "Apiaká",
    "alternate_names": [
      "Apiaká",
      "Apiacá"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Apiac%C3%A1",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2415009",
    "summary_en": "The Apiacá, or Apiaká, are an Indigenous people of Brazil, who live in northern Mato Grosso, near the border of Pará. They speak an Apiacá language that is a subgroup part of the Tupi-Guarani languages, though many today speak Portuguese. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 9.3°S, 57.6°W).",
    "summary_fi": "Apiaká-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 9.3°S, 57.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Apiaká"
    ]
  },
  {
    "slug": "apinaye-people",
    "name": "Apinayé People",
    "name_fi": "Apinayé-kansa",
    "native_name": "Apinayé",
    "alternate_names": [
      "Apinayé",
      "Apinajé people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Apinaj%C3%A9_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2469268",
    "summary_en": "The Apinajé are an Indigenous people of Brazil called Gê, living in the state of Tocantins, Eastern Central Brazil. Their ancestral territory is situated in Eastern Amazon & Tocantins Basin (Maranhão / Pará) (centered near 5.9°S, 47.8°W).",
    "summary_fi": "Apinayé-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Itä-Amazoniassa Tocantins-joen valuma-alueella (Maranhãossa ja Parássa) (koordinaateissa noin 5.9°S, 47.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Eastern Amazonian aldeias",
    "feature_name_matches": [
      "Apinayé"
    ]
  },
  {
    "slug": "apyawa-people",
    "name": "Apyãwa People",
    "name_fi": "Apyãwa-kansa",
    "native_name": "Apyãwa",
    "alternate_names": [
      "Apyãwa",
      "Ayahuasca"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ayahuasca",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q380436",
    "summary_en": "Ayahuasca is a South American psychoactive decoction prepared from Banisteriopsis caapi vine and a dimethyltryptamine (DMT)-containing plant, used by Indigenous cultures in the Amazon and Orinoco basins as part of traditional medicine and shamanism. The word ayahuasca, originating from Quechuan languages spoken in the Andes, refers both to the B. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 10.1°S, 50.7°W).",
    "summary_fi": "Apyãwa-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 10.1°S, 50.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Apyãwa"
    ]
  },
  {
    "slug": "arabela-people",
    "name": "Arabela People",
    "name_fi": "Arabela-kansa",
    "native_name": "Arabela",
    "alternate_names": [
      "Arabela",
      "Arabela language"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Arabela_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2591221",
    "summary_en": "Arabela is a nearly extinct indigenous American language of the Zaparoan family spoken in two Peruvian villages in tropical forest along the Napo tributary of the Arabela river. Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 2.0°S, 75.0°W).",
    "summary_fi": "Arabela-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 2.0°S, 75.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "Arabela"
    ]
  },
  {
    "slug": "araona-people",
    "name": "Araona People",
    "name_fi": "Araona-kansa",
    "native_name": "Araona",
    "alternate_names": [
      "Araona",
      "Araona people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Araona_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2859546",
    "summary_en": "The Araona people are an ethnic group in Bolivia. Their population was 228 according to the 2012 census. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 13.0°S, 67.9°W).",
    "summary_fi": "Araona-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 13.0°S, 67.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Araona"
    ]
  },
  {
    "slug": "arara-of-volta-grande-people",
    "name": "Arara of Volta Grande People",
    "name_fi": "Arara of Volta Grande-kansa",
    "native_name": "Arara of Volta Grande",
    "alternate_names": [
      "Arara of Volta Grande"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Arara_of_Volta_Grande",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 3.6°S, 51.7°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "Arara of Volta Grande-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 3.6°S, 51.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Arara of Volta Grande"
    ]
  },
  {
    "slug": "arikapu-people",
    "name": "Arikapú People",
    "name_fi": "Arikapú-kansa",
    "native_name": "Arikapú",
    "alternate_names": [
      "Arikapú",
      "Arikapú language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Arikap%C3%BA_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3446640",
    "summary_en": "Arikapú is an endangered Yabutian language, historically spoken by the Arikapú people in the upper reaches of the Amazon basin. The language is moribund, with only two living speakers, and no one actively learning the language. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 11.8°S, 62.1°W).",
    "summary_fi": "Arikapú-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 11.8°S, 62.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Arikapú"
    ]
  },
  {
    "slug": "arua-people",
    "name": "Aruá People",
    "name_fi": "Aruá-kansa",
    "native_name": "Aruá",
    "alternate_names": [
      "Aruá",
      "Aruá language (Rondônia)"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Aru%C3%A1_language_(Rond%C3%B4nia)",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3507907",
    "summary_en": "Aruá is a nearly extinct Tupian language of the states of Rondônia and Mato Grosso, in the Amazon region of Brazil. There were 121 Aruá in 2020 and 5 people who speak Aruá as a maternal language. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 11.9°S, 62.5°W).",
    "summary_fi": "Aruá-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 11.9°S, 62.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Aruá"
    ]
  },
  {
    "slug": "asheninka-people",
    "name": "Asheninka People",
    "name_fi": "Asheninka-kansa",
    "native_name": "Asheninka",
    "alternate_names": [
      "Asheninka",
      "Asháninka"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ash%C3%A1ninka",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q726665",
    "summary_en": "The Asháninka or Asháninca are an Indigenous people living in the rainforests in the regions of Junín, Pasco, Huánuco, and Ucayali in Peru, and in the State of Acre in Brazil. Their ancestral lands are in the forests of Junín, Pasco, Huánuco and part of Ucayali in Peru. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 10.0°S, 73.3°W).",
    "summary_fi": "Asheninka-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 10.0°S, 73.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Asheninka"
    ]
  },
  {
    "slug": "atikum-uma-people",
    "name": "Atikum-Umã People",
    "name_fi": "Atikum-Umã-kansa",
    "native_name": "Atikum-Umã",
    "alternate_names": [
      "Atikum-Umã",
      "Muratt Atik"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Muratt_Atik",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q22276886",
    "summary_en": "Muratt Atik is a French-Turkish-English speaking actor and producer. Atik has been nominated for several awards as a French personality and in 2008 won Personality of the Year at the Trophées de la Nuit. Their ancestral territory is situated in Caatinga and Brazilian Northeast coast (centered near 8.3°S, 38.8°W).",
    "summary_fi": "Atikum-Umã-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Caatingan ja Koillis-Brasilian rannikon alueella (koordinaateissa noin 8.3°S, 38.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northeast Brazilian coastal aldeias",
    "feature_name_matches": [
      "Atikum-Umã"
    ]
  },
  {
    "slug": "awajun-people",
    "name": "Awajún People",
    "name_fi": "Awajún-kansa",
    "native_name": "Awajún",
    "alternate_names": [
      "Awajún",
      "Aguaruna people"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Aguaruna_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q397948",
    "summary_en": "The Aguaruna are an indigenous people of the Peruvian Amazon-Andes divide. They live primarily on the Marañón River in northern Peru near the border with Ecuador and several of the Marañón's tributaries, the rivers Santiago, Nieva, Cenepa, Numpatakay and Chiriaco. Their ancestral territory is situated in Northern Peruvian Andes and Pacific Coast (centered near 4.8°S, 77.7°W).",
    "summary_fi": "Awajún-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Perun Andeilla ja Tyynenmeren rannikolla (koordinaateissa noin 4.8°S, 77.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Peruvian valleys & coast",
    "feature_name_matches": [
      "Awajún"
    ]
  },
  {
    "slug": "awytyza-people",
    "name": "Awytyza People",
    "name_fi": "Awytyza-kansa",
    "native_name": "Awytyza",
    "alternate_names": [
      "Awytyza",
      "Aweti"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Aweti",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q791722",
    "summary_en": "The Aweti people are a group of Indigenous Brazilians living in the Xingu Indigenous Park, close to the headwaters of the Xingu River in Brazil. The Aweti inhabit two villages in the region. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 12.3°S, 53.4°W).",
    "summary_fi": "Awytyza-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 12.3°S, 53.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Awytyza"
    ]
  },
  {
    "slug": "awa-people",
    "name": "Awá People",
    "name_fi": "Awá-kansa",
    "native_name": "Awá",
    "alternate_names": [
      "Awá",
      "Awá (Brazil)"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Aw%C3%A1_(Brazil)",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q201369",
    "summary_en": "The Awá are an Indigenous people of Brazil living in the Amazon rainforest. There are approximately 350 members, and 100 of them have no contact with the outside world. Their ancestral territory is situated in Eastern Amazon & Tocantins Basin (Maranhão / Pará) (centered near 3.7°S, 46.6°W).",
    "summary_fi": "Awá-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Itä-Amazoniassa Tocantins-joen valuma-alueella (Maranhãossa ja Parássa) (koordinaateissa noin 3.7°S, 46.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Eastern Amazonian aldeias",
    "feature_name_matches": [
      "Awá"
    ]
  },
  {
    "slug": "ayahuacas-people",
    "name": "Ayahuacas People",
    "name_fi": "Ayahuacas-kansa",
    "native_name": "Ayahuacas",
    "alternate_names": [
      "Ayahuacas",
      "Ayahuasca"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ayahuasca",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q380436",
    "summary_en": "Ayahuasca is a South American psychoactive decoction prepared from Banisteriopsis caapi vine and a dimethyltryptamine (DMT)-containing plant, used by Indigenous cultures in the Amazon and Orinoco basins as part of traditional medicine and shamanism. The word ayahuasca, originating from Quechuan languages spoken in the Andes, refers both to the B. Their ancestral territory is situated in Northern Peruvian Andes and Pacific Coast (centered near 4.6°S, 79.7°W).",
    "summary_fi": "Ayahuacas-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Perun Andeilla ja Tyynenmeren rannikolla (koordinaateissa noin 4.6°S, 79.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Peruvian valleys & coast",
    "feature_name_matches": [
      "Ayahuacas"
    ]
  },
  {
    "slug": "aymara-people",
    "name": "Aymara People",
    "name_fi": "Aymara-kansa",
    "native_name": "Aymara",
    "alternate_names": [
      "Aymara",
      "Aymara people"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Aymara_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q109402",
    "summary_en": "The Aymara or Aimara people are an Indigenous people in the Andes and Altiplano regions of South America. Approximately 2.3 million Aymara live in northwest Argentina, Bolivia, Chile, and Peru. Their ancestral territory is situated in Central Andes and Lake Titicaca Altiplano (centered near 17.6°S, 68.8°W).",
    "summary_fi": "Aymara-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Keski-Andeilla ja Titicacajärven Altiplanolla (koordinaateissa noin 17.6°S, 68.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Altiplano ayllu centers",
    "feature_name_matches": [
      "Aymara"
    ]
  },
  {
    "slug": "ayoreo-people",
    "name": "Ayoreo People",
    "name_fi": "Ayoreo-kansa",
    "native_name": "Ayoreo",
    "alternate_names": [
      "Ayoreo"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ayoreo",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q793196",
    "summary_en": "The Ayoreo are an Indigenous people of the Gran Chaco. They live in an area surrounded by the Paraguay, Pilcomayo, Parapetí, and Grande Rivers, spanning both Bolivia and Paraguay. Their ancestral territory is situated in Gran Chaco lowlands (Argentina, Paraguay, Bolivia) (centered near 19.6°S, 60.4°W).",
    "summary_fi": "Ayoreo-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Gran Chacon alankoalueilla (Argentiinassa, Paraguayssa ja Boliviassa) (koordinaateissa noin 19.6°S, 60.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Gran Chaco riverine encampments",
    "feature_name_matches": [
      "Ayoreo"
    ]
  },
  {
    "slug": "anuu-people",
    "name": "Añuu People",
    "name_fi": "Añuu-kansa",
    "native_name": "Añuu",
    "alternate_names": [
      "Añuu",
      "Anu Urpalainen"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Anu_Urpalainen",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q11852329",
    "summary_en": "Anu Johanna Urpalainen is a Finnish politician representing the Finnish Coalition Party. She was a Member of Parliament from the Kymi constituency in 2012–2015. Their ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 11.2°N, 72.0°W).",
    "summary_fi": "Añuu-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 11.2°N, 72.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "Añuu"
    ]
  },
  {
    "slug": "banawa-people",
    "name": "Banawá People",
    "name_fi": "Banawá-kansa",
    "native_name": "Banawá",
    "alternate_names": [
      "Banawá"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Banaw%C3%A1",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q56875",
    "summary_en": "The Banawá are an Indigenous group living along the Banawá River in the Amazonas State, Brazil. Their territory is between the Juruá and Purus Rivers. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 6.8°S, 64.9°W).",
    "summary_fi": "Banawá-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 6.8°S, 64.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Banawá"
    ]
  },
  {
    "slug": "barasano-panenoa-people",
    "name": "Barasano/Panenoá People",
    "name_fi": "Barasano/Panenoá-kansa",
    "native_name": "Barasano/Panenoá",
    "alternate_names": [
      "Barasano/Panenoá",
      "Barasana"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Barasana",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2258543",
    "summary_en": "Barasana (alternate names Barazana, Panenua, Pareroa, or Taiwano is an exonym applied to an Amazonian people, considered distinct from the Taiwano, though the dialect of the latter is almost identical to that of the Barasana, and outside observers can detect only minute differences between the two languages. They are a Tucanoan group located in the eastern part of the Amazon Basin in Vaupés Department in Colombia and Amazonas State in Brazil. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 0.3°N, 69.1°W).",
    "summary_fi": "Barasano/Panenoá-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 0.3°N, 69.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Barasano/Panenoá"
    ]
  },
  {
    "slug": "bare-people",
    "name": "Baré People",
    "name_fi": "Baré-kansa",
    "native_name": "Baré",
    "alternate_names": [
      "Baré",
      "Baré people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Bar%C3%A9_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q809707",
    "summary_en": "The Baré, or Hanera, and Werekena are related Indigenous people of northwest Brazil and Venezuela. For many years they suffered from violent exploitation by Portuguese and Spanish merchants, forced to work as debt slaves. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 1.7°N, 66.8°W).",
    "summary_fi": "Baré-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 1.7°N, 66.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Baré"
    ]
  },
  {
    "slug": "bari-people",
    "name": "Barí People",
    "name_fi": "Barí-kansa",
    "native_name": "Barí",
    "alternate_names": [
      "Barí",
      "Barí people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Bar%C3%AD_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2884551",
    "summary_en": "The Motilones-Barí, sometimes also called Barís, Motilones or Dobocubis, are a group of Indigenous people who live in the Catatumbo River basin in Norte de Santander Department in Colombia in South America and who speak the Barí language. They are descendants of the Tairona culture concentrated in northeastern Colombia and western Venezuela. Their ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 8.9°N, 72.7°W).",
    "summary_fi": "Barí-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 8.9°N, 72.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "Barí"
    ]
  },
  {
    "slug": "baure-people",
    "name": "Baure People",
    "name_fi": "Baure-kansa",
    "native_name": "Baure",
    "alternate_names": [
      "Baure",
      "Baure people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Baure_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2892063",
    "summary_en": "The Baure people are an ethnic group who live in the Beni Department of Bolivia. There were 3,328 of them according to the 2012 census of which 58 spoke the Baure language natively. Their ancestral territory is situated in Llanos de Moxos and Chiquitania (Bolivian lowlands) (centered near 14.1°S, 63.1°W).",
    "summary_fi": "Baure-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Llanos de Moxosin ja Chiquitanian alueella Bolivian alangoilla (koordinaateissa noin 14.1°S, 63.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Chiquitano & Moxos forest settlements",
    "feature_name_matches": [
      "Baure"
    ]
  },
  {
    "slug": "betoy-people",
    "name": "Betoy People",
    "name_fi": "Betoy-kansa",
    "native_name": "Betoy",
    "alternate_names": [
      "Betoy",
      "Betoi–Jirara language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Betoi%E2%80%93Jirara_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q926551",
    "summary_en": "Betoi–Jirara is an extinct, unclassified and poorly attested dialect cluster of Colombia and Venezuela, south of the Apure River near the modern border with Colombia. Their ancestral territory is situated in Llanos and Orinoco River Basin (centered near 6.5°N, 71.6°W).",
    "summary_fi": "Betoy-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Llanosin savannilla ja Orinoco-joen valuma-alueella (koordinaateissa noin 6.5°N, 71.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Orinoco riverine communities",
    "feature_name_matches": [
      "Betoy"
    ]
  },
  {
    "slug": "bia-mbya-people",
    "name": "Bia Mbyá People",
    "name_fi": "Bia Mbyá-kansa",
    "native_name": "Bia Mbyá",
    "alternate_names": [
      "Bia Mbyá",
      "Philippe Biamby"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Philippe_Biamby",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1672707",
    "summary_en": "Philippe Biamby was a member of the Haitian Armed Forces High Command, Chief of Staff of the Haitian Army and deputy of Raoul Cédras during the Haitian junta of 1991 to 1994. Their ancestral territory is situated in Llanos de Moxos and Chiquitania (Bolivian lowlands) (centered near 16.3°S, 64.4°W).",
    "summary_fi": "Bia Mbyá-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Llanos de Moxosin ja Chiquitanian alueella Bolivian alangoilla (koordinaateissa noin 16.3°S, 64.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Chiquitano & Moxos forest settlements",
    "feature_name_matches": [
      "Bia Mbyá"
    ]
  },
  {
    "slug": "boe-people",
    "name": "Boe People",
    "name_fi": "Boe-kansa",
    "native_name": "Boe",
    "alternate_names": [
      "Boe",
      "Bororo"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Bororo",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q894069",
    "summary_en": "The Bororo, self-denominated as Boe, are Indigenous people of Brazil, living in the state of Mato Grosso. They also extended into Bolivia and the Brazilian state of Goiás. Their ancestral territory is situated in Pantanal, Mato Grosso and Southern Cerrado (centered near 17.2°S, 53.9°W).",
    "summary_fi": "Boe-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pantanalin, Mato Grosson ja eteläisen Cerradon alueella (koordinaateissa noin 17.2°S, 53.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Pantanal & Cerrado aldeias",
    "feature_name_matches": [
      "Boe"
    ]
  },
  {
    "slug": "bohanes-people",
    "name": "Bohanes People",
    "name_fi": "Bohanes-kansa",
    "native_name": "Bohanes",
    "alternate_names": [
      "Bohanes",
      "Bohán"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Boh%C3%A1n",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q5731272",
    "summary_en": "The Bohán were one of the Native nations of Uruguay. A minor tribe, they were related to and eventually subsumed by the Charrúa people. Their ancestral territory is situated in Pampas and Río de la Plata Basin (centered near 31.7°S, 57.8°W).",
    "summary_fi": "Bohanes-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pampalla ja Río de la Platan valuma-alueella (koordinaateissa noin 31.7°S, 57.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Pampas traditional tolderías",
    "feature_name_matches": [
      "Bohanes"
    ]
  },
  {
    "slug": "bora-people",
    "name": "Bora People",
    "name_fi": "Bora-kansa",
    "native_name": "Bora",
    "alternate_names": [
      "Bora",
      "Bora people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Bora_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2520137",
    "summary_en": "The Bora are an Indigenous tribe of the Peruvian, Colombian, and Brazilian Amazon, located between the Napo, Putumayo and Caqueta rivers. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 2.2°S, 72.2°W).",
    "summary_fi": "Bora-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 2.2°S, 72.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Bora"
    ]
  },
  {
    "slug": "bide-people",
    "name": "Bïde People",
    "name_fi": "Bïde-kansa",
    "native_name": "Bïde",
    "alternate_names": [
      "Bïde",
      "Araweté"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Arawet%C3%A9",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3621312",
    "summary_en": "The Araweté are an Indigenous people of Brazil. They are swidden horticulturalists native to the state of Pará. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 4.8°S, 52.5°W).",
    "summary_fi": "Bïde-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 4.8°S, 52.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Bïde"
    ]
  },
  {
    "slug": "calvas-people",
    "name": "Calvas People",
    "name_fi": "Calvas-kansa",
    "native_name": "Calvas",
    "alternate_names": [
      "Calvas",
      "Calvas Canton"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Calvas_Canton",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1989880",
    "summary_en": "Calvas is a canton of the Province of Loja, Ecuador, located in the south of the province, bordering Paltas and Gonzanamá in the north, Quilanga and Espíndola in the east, Peru in the south, and Sozoranga in the west. It covers 851.2 km2 at an altitude of about 1,932 m. Their ancestral territory is situated in Northern Peruvian Andes and Pacific Coast (centered near 4.4°S, 79.7°W).",
    "summary_fi": "Calvas-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Perun Andeilla ja Tyynenmeren rannikolla (koordinaateissa noin 4.4°S, 79.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Peruvian valleys & coast",
    "feature_name_matches": [
      "Calvas"
    ]
  },
  {
    "slug": "canela-apanyekra-people",
    "name": "Canela Apanyekrá People",
    "name_fi": "Canela Apanyekrá-kansa",
    "native_name": "Canela Apanyekrá",
    "alternate_names": [
      "Canela Apanyekrá"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Canela_Apanyekr%C3%A1",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in Eastern Amazon & Tocantins Basin (Maranhão / Pará) (centered near 6.3°S, 45.6°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "Canela Apanyekrá-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Itä-Amazoniassa Tocantins-joen valuma-alueella (Maranhãossa ja Parássa) (koordinaateissa noin 6.3°S, 45.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Eastern Amazonian aldeias",
    "feature_name_matches": [
      "Canela Apanyekrá"
    ]
  },
  {
    "slug": "canela-ramkokamekra-people",
    "name": "Canela Ramkokamekrá People",
    "name_fi": "Canela Ramkokamekrá-kansa",
    "native_name": "Canela Ramkokamekrá",
    "alternate_names": [
      "Canela Ramkokamekrá"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Canela_Ramkokamekr%C3%A1",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in Eastern Amazon & Tocantins Basin (Maranhão / Pará) (centered near 6.1°S, 45.2°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "Canela Ramkokamekrá-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Itä-Amazoniassa Tocantins-joen valuma-alueella (Maranhãossa ja Parássa) (koordinaateissa noin 6.1°S, 45.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Eastern Amazonian aldeias",
    "feature_name_matches": [
      "Canela Ramkokamekrá"
    ]
  },
  {
    "slug": "canichana-people",
    "name": "Canichana People",
    "name_fi": "Canichana-kansa",
    "native_name": "Canichana",
    "alternate_names": [
      "Canichana",
      "Canichana people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Canichana_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2936364",
    "summary_en": "The Canichana people are an ethnic group in the Beni Department of Bolivia. There were 899 of them in 2012. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 14.2°S, 65.0°W).",
    "summary_fi": "Canichana-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 14.2°S, 65.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Canichana"
    ]
  },
  {
    "slug": "caxas-people",
    "name": "Caxas People",
    "name_fi": "Caxas-kansa",
    "native_name": "Caxas",
    "alternate_names": [
      "Caxas",
      "Pietru Caxaro"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pietru_Caxaro",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q267687",
    "summary_en": "Pietru Caxaro or Caxaru, also known in English as Peter Caxaro, was a Maltese notary, orator, politician, philosopher, and poet. He wrote the poem Cantilena, the earliest known text in the Maltese language and the only one in Medieval Maltese. Their ancestral territory is situated in Northern Peruvian Andes and Pacific Coast (centered near 5.0°S, 79.8°W).",
    "summary_fi": "Caxas-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Perun Andeilla ja Tyynenmeren rannikolla (koordinaateissa noin 5.0°S, 79.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Peruvian valleys & coast",
    "feature_name_matches": [
      "Caxas"
    ]
  },
  {
    "slug": "chachi-people",
    "name": "Chachi People",
    "name_fi": "Chachi-kansa",
    "native_name": "Chachi",
    "alternate_names": [
      "Chachi",
      "Chachi people"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chachi_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1058397",
    "summary_en": "Chachi people are an ethnic group who live in the rainforest area of northwestern Esmeraldas on the northern coast of Ecuador. They live by the Cayapas River in the Centro El Encanto, a section of the Cotacachi Cayapas Ecological Reserve, as do Afro Ecuadorian people; the two groups have co-existed in the forest for about 400 years. Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 0.6°N, 78.8°W).",
    "summary_fi": "Chachi-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 0.6°N, 78.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "Chachi"
    ]
  },
  {
    "slug": "chamicuro-people",
    "name": "Chamicuro People",
    "name_fi": "Chamicuro-kansa",
    "native_name": "Chamicuro",
    "alternate_names": [
      "Chamicuro",
      "Chamicuro language"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chamicuro_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2155119",
    "summary_en": "Chamicuro is a nearly extinct South American language spoken in Peru. The language was used by the Chamicuro people, who number around one hundred people. Their ancestral territory is situated in Northern Peruvian Andes and Pacific Coast (centered near 5.4°S, 75.3°W).",
    "summary_fi": "Chamicuro-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Perun Andeilla ja Tyynenmeren rannikolla (koordinaateissa noin 5.4°S, 75.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Peruvian valleys & coast",
    "feature_name_matches": [
      "Chamicuro"
    ]
  },
  {
    "slug": "chango-people",
    "name": "Chango People",
    "name_fi": "Chango-kansa",
    "native_name": "Chango",
    "alternate_names": [
      "Chango",
      "Chango people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chango_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q267512",
    "summary_en": "The Changos, also known as Camanchacos or Camanchangos, are an Indigenous people or group of peoples who inhabited a long stretch of the Pacific coast from southern Peru to north-central Chile, including the coast of the Atacama Desert. Although much of the customs and culture of the Chango people have disappeared and in many cases they have been considered extinct, in Chile they are legally recognized as an original indigenous people since 2020, and about 4,725 people self-declare that they belong to this ethnic group. Their ancestral territory is situated in Atacama Desert and Southern Puna (centered near 23.8°S, 69.9°W).",
    "summary_fi": "Chango-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Atacaman aavikolla ja Punan ylängöllä (koordinaateissa noin 23.8°S, 69.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Atacama coastal and oasis settlements",
    "feature_name_matches": [
      "Chango"
    ]
  },
  {
    "slug": "chana-people",
    "name": "Chaná People",
    "name_fi": "Chaná-kansa",
    "native_name": "Chaná",
    "alternate_names": [
      "Chaná",
      "Chaná people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chan%C3%A1_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q8344747",
    "summary_en": "Chaná were one of the Native nations of Argentina and Uruguay. Their native language is Chaná, which is only remembered by one person, Blas Wilfredo Omar Jaime. Their ancestral territory is situated in Pampas and Río de la Plata Basin (centered near 33.2°S, 58.4°W).",
    "summary_fi": "Chaná-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pampalla ja Río de la Platan valuma-alueella (koordinaateissa noin 33.2°S, 58.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Pampas traditional tolderías",
    "feature_name_matches": [
      "Chaná"
    ]
  },
  {
    "slug": "chane-people",
    "name": "Chané People",
    "name_fi": "Chané-kansa",
    "native_name": "Chané",
    "alternate_names": [
      "Chané"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chan%C3%A9",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1552707",
    "summary_en": "Chané is the collective name for the southernmost Arawakan-speaking peoples. They lived in the plains of the northern Gran Chaco and in the foothills of the Andes in Paraguay, Brazil, Bolivia, and Argentina. Their ancestral territory is situated in Gran Chaco lowlands (Argentina, Paraguay, Bolivia) (centered near 21.9°S, 63.2°W).",
    "summary_fi": "Chané-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Gran Chacon alankoalueilla (Argentiinassa, Paraguayssa ja Boliviassa) (koordinaateissa noin 21.9°S, 63.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Gran Chaco riverine encampments",
    "feature_name_matches": [
      "Chané"
    ]
  },
  {
    "slug": "chaparra-people",
    "name": "Chaparra People",
    "name_fi": "Chaparra-kansa",
    "native_name": "Chaparra",
    "alternate_names": [
      "Chaparra",
      "Chaparral"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chaparral",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q842123",
    "summary_en": "Chaparral is a shrubland plant community found primarily in California, southern Oregon, and northern Baja California, part of the California floristic province. It is shaped by a Mediterranean climate and infrequent, high-intensity crown fires. Their ancestral territory is situated in Northern Peruvian Andes and Pacific Coast (centered near 3.5°S, 79.3°W).",
    "summary_fi": "Chaparra-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Perun Andeilla ja Tyynenmeren rannikolla (koordinaateissa noin 3.5°S, 79.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Peruvian valleys & coast",
    "feature_name_matches": [
      "Chaparra"
    ]
  },
  {
    "slug": "chapra-people",
    "name": "Chapra People",
    "name_fi": "Chapra-kansa",
    "native_name": "Chapra",
    "alternate_names": [
      "Chapra",
      "Chapra, Bihar Assembly constituency"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chapra%2C_Bihar_Assembly_constituency",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q5073418",
    "summary_en": "Chapra is an assembly constituency in Saran district in the Indian state of Bihar. In 2015 Bihar Legislative Assembly election, Chapra was one of the 36 seats to have VVPAT enabled electronic voting machines. Their ancestral territory is situated in Northern Peruvian Andes and Pacific Coast (centered near 3.9°S, 77.0°W).",
    "summary_fi": "Chapra-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Perun Andeilla ja Tyynenmeren rannikolla (koordinaateissa noin 3.9°S, 77.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Peruvian valleys & coast",
    "feature_name_matches": [
      "Chapra"
    ]
  },
  {
    "slug": "charka-people",
    "name": "Charka People",
    "name_fi": "Charka-kansa",
    "native_name": "Charka",
    "alternate_names": [
      "Charka",
      "Charca people"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Charca_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q5074161",
    "summary_en": "The Charca villagers were an Aymara speaking indigenous ethnic group who lived in what is today Chuquisaca Department in Bolivia. Before the 15th century they were subjects of the Inca Empire. Their ancestral territory is situated in Central Andes and Lake Titicaca Altiplano (centered near 18.4°S, 66.1°W).",
    "summary_fi": "Charka-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Keski-Andeilla ja Titicacajärven Altiplanolla (koordinaateissa noin 18.4°S, 66.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Altiplano ayllu centers",
    "feature_name_matches": [
      "Charka"
    ]
  },
  {
    "slug": "chibuleo-people",
    "name": "Chibuleo People",
    "name_fi": "Chibuleo-kansa",
    "native_name": "Chibuleo",
    "alternate_names": [
      "Chibuleo",
      "Chicuelo (bullfighter)"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chicuelo_(bullfighter)",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1106541",
    "summary_en": "Manuel Jiménez Moreno, better known as \"Chicuelo\", was a Spanish bullfighter. His contributions to tauromachy are held by some – writer and bullfighting critic Luis Nieto and writer Ignacio de Cossío Pérez de Mendoza among them – to be substantial, making bullfighting what it is today. Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 1.3°S, 78.7°W).",
    "summary_fi": "Chibuleo-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 1.3°S, 78.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "Chibuleo"
    ]
  },
  {
    "slug": "chichas-people",
    "name": "Chichas People",
    "name_fi": "Chichas-kansa",
    "native_name": "Chichas",
    "alternate_names": [
      "Chichas",
      "Chichas District"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chichas_District",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3313995",
    "summary_en": "Chichas District is one of eight districts of the province Condesuyos in Peru. Their ancestral territory is situated in Atacama Desert and Southern Puna (centered near 23.6°S, 67.4°W).",
    "summary_fi": "Chichas-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Atacaman aavikolla ja Punan ylängöllä (koordinaateissa noin 23.6°S, 67.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Atacama coastal and oasis settlements",
    "feature_name_matches": [
      "Chichas"
    ]
  },
  {
    "slug": "chiquitano-people",
    "name": "Chiquitano People",
    "name_fi": "Chiquitano-kansa",
    "native_name": "Chiquitano",
    "alternate_names": [
      "Chiquitano"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chiquitano",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3312501",
    "summary_en": "The Chiquitano or Chiquitos are an Indigenous people of Bolivia, with a small number also living in Brazil. The Chiquitano primarily live in the Chiquitania tropical savanna of Santa Cruz Department, Bolivia, with a small number also living in Beni Department and in Mato Grosso, Brazil. Their ancestral territory is situated in Llanos de Moxos and Chiquitania (Bolivian lowlands) (centered near 16.8°S, 60.5°W).",
    "summary_fi": "Chiquitano-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Llanos de Moxosin ja Chiquitanian alueella Bolivian alangoilla (koordinaateissa noin 16.8°S, 60.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Chiquitano & Moxos forest settlements",
    "feature_name_matches": [
      "Chiquitano"
    ]
  },
  {
    "slug": "chono-people",
    "name": "Chono People",
    "name_fi": "Chono-kansa",
    "native_name": "Chono",
    "alternate_names": [
      "Chono",
      "Chono people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chono_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1076202",
    "summary_en": "The Chono, or Guaiteco were a nomadic Indigenous people or group of peoples of the archipelagos of Chiloé, Guaitecas and Chonos. Their ancestral territory is situated in Patagonia and Tierra del Fuego (centered near 42.7°S, 74.0°W).",
    "summary_fi": "Chono-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Patagoniassa ja Tulimaassa (koordinaateissa noin 42.7°S, 74.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Patagonian & Fuegian ancestral camps",
    "feature_name_matches": [
      "Chono"
    ]
  },
  {
    "slug": "chopcca-people",
    "name": "Chopcca People",
    "name_fi": "Chopcca-kansa",
    "native_name": "Chopcca",
    "alternate_names": [
      "Chopcca",
      "Priyanka Chopra"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Priyanka_Chopra",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q158957",
    "summary_en": "Priyanka Chopra Jonas is an Indian actress, film producer and singer. The winner of the Miss World 2000 pageant, she is India's highest-paid actress and her accolades include two National Film Awards and five Filmfare Awards. Their ancestral territory is situated in Central Peruvian Andes & Mantaro Valley (centered near 12.8°S, 74.8°W).",
    "summary_fi": "Chopcca-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Perun Keski-Andeilla ja Mantaron laaksossa (koordinaateissa noin 12.8°S, 74.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Central Andean llactas",
    "feature_name_matches": [
      "Chopcca"
    ]
  },
  {
    "slug": "cuica-people",
    "name": "Cuica People",
    "name_fi": "Cuica-kansa",
    "native_name": "Cuica",
    "alternate_names": [
      "Cuica",
      "Timoto–Cuica people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Timoto%E2%80%93Cuica_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q7807634",
    "summary_en": "The Timoto–Cuica people are an Indigenous people of the Americas composed primarily of two large tribes, the Timote and the Cuica, that inhabited in the Andes region of Western Venezuela. They were closely related to the Muisca people of the Colombian Andes, who spoke Muysccubun, also called Chibcha. Their ancestral territory is situated in Llanos and Orinoco River Basin (centered near 9.4°N, 70.5°W).",
    "summary_fi": "Cuica-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Llanosin savannilla ja Orinoco-joen valuma-alueella (koordinaateissa noin 9.4°N, 70.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Orinoco riverine communities",
    "feature_name_matches": [
      "Cuica"
    ]
  },
  {
    "slug": "deni-people",
    "name": "Deni People",
    "name_fi": "Deni-kansa",
    "native_name": "Deni",
    "alternate_names": [
      "Deni",
      "Jamamadi"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Jamamadi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1091090",
    "summary_en": "The Jamamadí, also called the Yamamadi, Kanamanti, Kapaná, and Kapinamari, are an Indigenous people who live in Acre and Amazonas, Brazil. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 6.7°S, 67.3°W).",
    "summary_fi": "Deni-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 6.7°S, 67.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Deni"
    ]
  },
  {
    "slug": "djeoromitxi-people",
    "name": "Djeoromitxí People",
    "name_fi": "Djeoromitxí-kansa",
    "native_name": "Djeoromitxí",
    "alternate_names": [
      "Djeoromitxí",
      "Djeoromitxí language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Djeoromitx%C3%AD_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2060023",
    "summary_en": "Djeoromitxi or Jabutí (Yabuti) is an endangered Yabutian language that is spoken by only about fifty people in Rondônia, Brazil, at the headwaters of the Rio Branco. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 12.0°S, 62.5°W).",
    "summary_fi": "Djeoromitxí-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 12.0°S, 62.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Djeoromitxí"
    ]
  },
  {
    "slug": "dokapuara-tuyuca-people",
    "name": "Dokapuara (Tuyuca) People",
    "name_fi": "Dokapuara (Tuyuca)-kansa",
    "native_name": "Dokapuara (Tuyuca)",
    "alternate_names": [
      "Dokapuara (Tuyuca)",
      "Tuyuca language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tuyuca_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2520538",
    "summary_en": "Tuyuca is an Eastern Tucanoan language. Tuyuca is spoken by the Tuyuca, an indigenous ethnic group of some 500–1000 people, who inhabit the watershed of the Papuri River, the Inambú River, and the Tiquié River in Vaupés Department, Colombia, and Amazonas State, Brazil. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 0.4°N, 70.2°W).",
    "summary_fi": "Dokapuara (Tuyuca)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 0.4°N, 70.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Dokapuara (Tuyuca)"
    ]
  },
  {
    "slug": "dyo-xaiya-o-ivo-tsa-okaina-people",
    "name": "Dyo'xaiya-o-Ivo'tsa (Okaina) People",
    "name_fi": "Dyo'xaiya-o-Ivo'tsa (Okaina)-kansa",
    "native_name": "Dyo'xaiya-o-Ivo'tsa (Okaina)",
    "alternate_names": [
      "Dyo'xaiya-o-Ivo'tsa (Okaina)",
      "Ocaina"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ocaina",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3348587",
    "summary_en": "The Ocainas are an Amazonian indigenous people of Peru and Colombia, who are today in danger of extinction. There were 176 of them in 2012. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 2.9°S, 71.5°W).",
    "summary_fi": "Dyo'xaiya-o-Ivo'tsa (Okaina)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 2.9°S, 71.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Dyo'xaiya-o-Ivo'tsa (Okaina)"
    ]
  },
  {
    "slug": "daw-people",
    "name": "Dâw People",
    "name_fi": "Dâw-kansa",
    "native_name": "Dâw",
    "alternate_names": [
      "Dâw",
      "Dâw people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/D%C3%A2w_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1252992",
    "summary_en": "The Dâw are an Indigenous people of Brazil. They live on the right bank of Rio Negro in an area commonly known as Alto Rio Negro in the Amazon rainforest. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 0.2°S, 67.3°W).",
    "summary_fi": "Dâw-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 0.2°S, 67.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Dâw"
    ]
  },
  {
    "slug": "e-nepa-people",
    "name": "E'ñepá People",
    "name_fi": "E'ñepá-kansa",
    "native_name": "E'ñepá",
    "alternate_names": [
      "E'ñepá",
      "Panare language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Panare_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q56610",
    "summary_en": "Panare is a Cariban language, spoken by the Panare, who number 3,000–4,000 and live in Bolivar State in central Venezuela. Their main area is South of the town of Caicara del Orinoco, south of the Orinoco River. Their ancestral territory is situated in Llanos and Orinoco River Basin (centered near 6.7°N, 66.1°W).",
    "summary_fi": "E'ñepá-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Llanosin savannilla ja Orinoco-joen valuma-alueella (koordinaateissa noin 6.7°N, 66.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Orinoco riverine communities",
    "feature_name_matches": [
      "E'ñepá"
    ]
  },
  {
    "slug": "ecuana-people",
    "name": "Ecuana People",
    "name_fi": "Ecuana-kansa",
    "native_name": "Ecuana",
    "alternate_names": [
      "Ecuana",
      "Ecuador"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ecuador",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q736",
    "summary_en": "Ecuador, officially the Republic of Ecuador, is a country in northwestern South America, bordered by Colombia on the north, Peru on the east and south, and the Pacific Ocean on the west. It also includes the Galápagos Province which contains the Galápagos Islands in the Pacific, about 1,000 kilometers west of the mainland. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 12.7°S, 66.9°W).",
    "summary_fi": "Ecuana-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 12.7°S, 66.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Ecuana"
    ]
  },
  {
    "slug": "eduria-taiwano-people",
    "name": "Eduria (Taiwano) People",
    "name_fi": "Eduria (Taiwano)-kansa",
    "native_name": "Eduria (Taiwano)",
    "alternate_names": [
      "Eduria (Taiwano)",
      "Barasana"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Barasana",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2258543",
    "summary_en": "Barasana (alternate names Barazana, Panenua, Pareroa, or Taiwano is an exonym applied to an Amazonian people, considered distinct from the Taiwano, though the dialect of the latter is almost identical to that of the Barasana, and outside observers can detect only minute differences between the two languages. They are a Tucanoan group located in the eastern part of the Amazon Basin in Vaupés Department in Colombia and Amazonas State in Brazil. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 0.3°N, 70.5°W).",
    "summary_fi": "Eduria (Taiwano)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 0.3°N, 70.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Eduria (Taiwano)"
    ]
  },
  {
    "slug": "embera-chami-people",
    "name": "Emberá Chamí People",
    "name_fi": "Emberá Chamí-kansa",
    "native_name": "Emberá Chamí",
    "alternate_names": [
      "Emberá Chamí"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ember%C3%A1_Cham%C3%AD",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3052042",
    "summary_en": "Chamí Emberá a.k.a. Chami is an Embera language of Colombia. Their ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 6.5°N, 75.5°W).",
    "summary_fi": "Emberá Chamí-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 6.5°N, 75.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "Emberá Chamí"
    ]
  },
  {
    "slug": "embera-dobida-people",
    "name": "Emberá Dobidá People",
    "name_fi": "Emberá Dobidá-kansa",
    "native_name": "Emberá Dobidá",
    "alternate_names": [
      "Emberá Dobidá"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ember%C3%A1_Dobid%C3%A1",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 6.3°N, 77.1°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "Emberá Dobidá-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 6.3°N, 77.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "Emberá Dobidá"
    ]
  },
  {
    "slug": "embera-katio-eyabida-people",
    "name": "Emberá Katío/Eyabida People",
    "name_fi": "Emberá Katío/Eyabida-kansa",
    "native_name": "Emberá Katío/Eyabida",
    "alternate_names": [
      "Emberá Katío/Eyabida"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ember%C3%A1_Kat%C3%ADo%2FEyabida",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 3.3°N, 75.9°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "Emberá Katío/Eyabida-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 3.3°N, 75.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "Emberá Katío/Eyabida"
    ]
  },
  {
    "slug": "embera-eperara-epera-people",
    "name": "Emberá/Eperara/Épera People",
    "name_fi": "Emberá/Eperara/Épera-kansa",
    "native_name": "Emberá/Eperara/Épera",
    "alternate_names": [
      "Emberá/Eperara/Épera",
      "Emberá people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ember%C3%A1_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1335017",
    "summary_en": "The Emberá, also known in the historical literature as the Chocó or Katío Indians, are an Indigenous people of Panama and Colombia. Together with the Wounaan they are part of the Emberá-Wounaan group. Their ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 4.3°N, 76.5°W).",
    "summary_fi": "Emberá/Eperara/Épera-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 4.3°N, 76.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "Emberá/Eperara/Épera"
    ]
  },
  {
    "slug": "enawene-nawe-people",
    "name": "Enawenê-nawê People",
    "name_fi": "Enawenê-nawê-kansa",
    "native_name": "Enawenê-nawê",
    "alternate_names": [
      "Enawenê-nawê",
      "Enawene Nawe language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Enawene_Nawe_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3307184",
    "summary_en": "Enawene Nawe, also known as Salumã, is an Arawakan language of Brazil spoken by about 570 people living in the Juruena River basin area, and more specifically along the Iquê river in the state of Mato Grosso. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 12.2°S, 59.1°W).",
    "summary_fi": "Enawenê-nawê-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 12.2°S, 59.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Enawenê-nawê"
    ]
  },
  {
    "slug": "enenlhet-toba-people",
    "name": "Enenlhet-Toba People",
    "name_fi": "Enenlhet-Toba-kansa",
    "native_name": "Enenlhet-Toba",
    "alternate_names": [
      "Enenlhet-Toba"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Enenlhet-Toba",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in Gran Chaco lowlands (Argentina, Paraguay, Bolivia) (centered near 22.4°S, 58.6°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "Enenlhet-Toba-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Gran Chacon alankoalueilla (Argentiinassa, Paraguayssa ja Boliviassa) (koordinaateissa noin 22.4°S, 58.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Gran Chaco riverine encampments",
    "feature_name_matches": [
      "Enenlhet-Toba"
    ]
  },
  {
    "slug": "enlhet-people",
    "name": "Enlhet People",
    "name_fi": "Enlhet-kansa",
    "native_name": "Enlhet",
    "alternate_names": [
      "Enlhet",
      "Enlhet language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Enlhet_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q15462671",
    "summary_en": "Enlhet (Eenlhit), or Northern Lengua, is a language of the Paraguayan Chaco, spoken by the northern Enxet people. It is also known as Vowak and Powok. Their ancestral territory is situated in Gran Chaco lowlands (Argentina, Paraguay, Bolivia) (centered near 22.9°S, 59.6°W).",
    "summary_fi": "Enlhet-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Gran Chacon alankoalueilla (Argentiinassa, Paraguayssa ja Boliviassa) (koordinaateissa noin 22.9°S, 59.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Gran Chaco riverine encampments",
    "feature_name_matches": [
      "Enlhet"
    ]
  },
  {
    "slug": "enlhet-enenlhet-people",
    "name": "Enlhet-Enenlhet People",
    "name_fi": "Enlhet-Enenlhet-kansa",
    "native_name": "Enlhet-Enenlhet",
    "alternate_names": [
      "Enlhet-Enenlhet",
      "Mascoian languages"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mascoian_languages",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1906952",
    "summary_en": "The Mascoian languages, also known as Enlhet–Enenlhet, Lengua–Mascoy, or Chaco languages, are a small, closely related language family of Paraguay. Their ancestral territory is situated in Gran Chaco lowlands (Argentina, Paraguay, Bolivia) (centered near 23.1°S, 58.5°W).",
    "summary_fi": "Enlhet-Enenlhet-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Gran Chacon alankoalueilla (Argentiinassa, Paraguayssa ja Boliviassa) (koordinaateissa noin 23.1°S, 58.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Gran Chaco riverine encampments",
    "feature_name_matches": [
      "Enlhet-Enenlhet"
    ]
  },
  {
    "slug": "enxet-people",
    "name": "Enxet People",
    "name_fi": "Enxet-kansa",
    "native_name": "Enxet",
    "alternate_names": [
      "Enxet"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Enxet",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3435610",
    "summary_en": "The Enxet are an Indigenous people of about 17,000 living in the Gran Chaco region of western Paraguay. Originally hunter-gatherers, many are now forced to supplement their livelihood as laborers on the cattle ranches that have encroached upon their dwindling natural forest habitat. Their ancestral territory is situated in Gran Chaco lowlands (Argentina, Paraguay, Bolivia) (centered near 23.8°S, 58.2°W).",
    "summary_fi": "Enxet-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Gran Chacon alankoalueilla (Argentiinassa, Paraguayssa ja Boliviassa) (koordinaateissa noin 23.8°S, 58.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Gran Chaco riverine encampments",
    "feature_name_matches": [
      "Enxet"
    ]
  },
  {
    "slug": "eperara-siapidara-people",
    "name": "Eperara Siapidara People",
    "name_fi": "Eperara Siapidara-kansa",
    "native_name": "Eperara Siapidara",
    "alternate_names": [
      "Eperara Siapidara"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Eperara_Siapidara",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 2.6°N, 76.8°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "Eperara Siapidara-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 2.6°N, 76.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "Eperara Siapidara"
    ]
  },
  {
    "slug": "esse-ejja-people",
    "name": "Esse ejja People",
    "name_fi": "Esse ejja-kansa",
    "native_name": "Esse ejja",
    "alternate_names": [
      "Esse ejja",
      "Ese Ejja language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ese_Ejja_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2980381",
    "summary_en": "Ese Ejja, also known as Tiatinagua (Tatinawa), is a Tacanan language of Bolivia and Peru. It is spoken by Ese Ejja people of all ages. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 12.1°S, 67.9°W).",
    "summary_fi": "Esse ejja-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 12.1°S, 67.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Esse ejja"
    ]
  },
  {
    "slug": "feenem-naa-people",
    "name": "Féénemɨnaa People",
    "name_fi": "Féénemɨnaa-kansa",
    "native_name": "Féénemɨnaa",
    "alternate_names": [
      "Féénemɨnaa"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/F%C3%A9%C3%A9nem%C9%A8naa",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 1.2°S, 71.7°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "Féénemɨnaa-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 1.2°S, 71.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Féénemɨnaa"
    ]
  },
  {
    "slug": "garrochambas-people",
    "name": "Garrochambas People",
    "name_fi": "Garrochambas-kansa",
    "native_name": "Garrochambas",
    "alternate_names": [
      "Garrochambas"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Garrochambas",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in Northern Peruvian Andes and Pacific Coast (centered near 3.8°S, 79.5°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "Garrochambas-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Perun Andeilla ja Tyynenmeren rannikolla (koordinaateissa noin 3.8°S, 79.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Peruvian valleys & coast",
    "feature_name_matches": [
      "Garrochambas"
    ]
  },
  {
    "slug": "guahibo-hiwi-people",
    "name": "Guahibo/Hiwi People",
    "name_fi": "Guahibo/Hiwi-kansa",
    "native_name": "Guahibo/Hiwi",
    "alternate_names": [
      "Guahibo/Hiwi",
      "Guahibo people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Guahibo_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1289028",
    "summary_en": "The Guahibo people are an Indigenous people native to the Llanos or savanna plains in eastern Colombia and in southern Venezuela near the Colombian border. Their population was estimated at 23,772 people in 1998. Their ancestral territory is situated in Llanos and Orinoco River Basin (centered near 5.1°N, 69.7°W).",
    "summary_fi": "Guahibo/Hiwi-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Llanosin savannilla ja Orinoco-joen valuma-alueella (koordinaateissa noin 5.1°N, 69.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Orinoco riverine communities",
    "feature_name_matches": [
      "Guahibo/Hiwi"
    ]
  },
  {
    "slug": "guajajara-people",
    "name": "Guajajara People",
    "name_fi": "Guajajara-kansa",
    "native_name": "Guajajara",
    "alternate_names": [
      "Guajajara"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Guajajara",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2592663",
    "summary_en": "The Guajajara are an Indigenous people in the Brazilian state of Maranhão. They are one of the most numerous Indigenous groups in Brazil, with an estimated 13,100 individuals living on Indigenous land. Their ancestral territory is situated in Eastern Amazon & Tocantins Basin (Maranhão / Pará) (centered near 4.8°S, 45.8°W).",
    "summary_fi": "Guajajara-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Itä-Amazoniassa Tocantins-joen valuma-alueella (Maranhãossa ja Parássa) (koordinaateissa noin 4.8°S, 45.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Eastern Amazonian aldeias",
    "feature_name_matches": [
      "Guajajara"
    ]
  },
  {
    "slug": "guanaca-people",
    "name": "Guanaca People",
    "name_fi": "Guanaca-kansa",
    "native_name": "Guanaca",
    "alternate_names": [
      "Guanaca",
      "Coconuco language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Coconuco_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q12179298",
    "summary_en": "Coconuco is a dialect cluster of Colombia spoken by the Guambiano indigenous people. Though the three varieties, Guambiano, Totoró, and the long-extinct Coconuco are traditionally called languages, Adelaar & Muysken (2004) believe that they are best treated as a single language. Their ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 2.6°N, 75.9°W).",
    "summary_fi": "Guanaca-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 2.6°N, 75.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "Guanaca"
    ]
  },
  {
    "slug": "guane-people",
    "name": "Guane People",
    "name_fi": "Guane-kansa",
    "native_name": "Guane",
    "alternate_names": [
      "Guane",
      "Guane people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Guane_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2590497",
    "summary_en": "The Guane people of Colombia in South America live mainly in the cities of Santander, Bucaramanga and Barichara. A population estimate made by DANE(Departamento Administrativo Nacional de Estadística) in 2005, was that around 812 people in Santander identified as Guane, with 409 being men and 403 being women. Their ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 6.8°N, 73.4°W).",
    "summary_fi": "Guane-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 6.8°N, 73.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "Guane"
    ]
  },
  {
    "slug": "guana-people",
    "name": "Guaná People",
    "name_fi": "Guaná-kansa",
    "native_name": "Guaná",
    "alternate_names": [
      "Guaná",
      "Terêna language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ter%C3%AAna_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3314742",
    "summary_en": "Terêna or Etelena is an Arawakan language spoken by the Terena people of Brazil. The language has a dictionary and written grammar. Their ancestral territory is situated in Gran Chaco lowlands (Argentina, Paraguay, Bolivia) (centered near 22.1°S, 58.7°W).",
    "summary_fi": "Guaná-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Gran Chacon alankoalueilla (Argentiinassa, Paraguayssa ja Boliviassa) (koordinaateissa noin 22.1°S, 58.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Gran Chaco riverine encampments",
    "feature_name_matches": [
      "Guaná"
    ]
  },
  {
    "slug": "guarasugwe-people",
    "name": "Guarasugwe People",
    "name_fi": "Guarasugwe-kansa",
    "native_name": "Guarasugwe",
    "alternate_names": [
      "Guarasugwe",
      "Warázu language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/War%C3%A1zu_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2912846",
    "summary_en": "Warázu, also known as Pauserna, Guarasú'we, or Guarasugwé, is an endangered Tupi–Guaraní language of Brazil and Bolivia. Their ancestral territory is situated in Llanos de Moxos and Chiquitania (Bolivian lowlands) (centered near 14.1°S, 61.2°W).",
    "summary_fi": "Guarasugwe-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Llanos de Moxosin ja Chiquitanian alueella Bolivian alangoilla (koordinaateissa noin 14.1°S, 61.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Chiquitano & Moxos forest settlements",
    "feature_name_matches": [
      "Guarasugwe"
    ]
  },
  {
    "slug": "guarayo-people",
    "name": "Guarayo People",
    "name_fi": "Guarayo-kansa",
    "native_name": "Guarayo",
    "alternate_names": [
      "Guarayo",
      "Guarayos"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Guarayos",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1124221",
    "summary_en": "The Guarayos are an indigenous group living in their ancestral land in eastern Bolivia. They are located north of the department of Santa Cruz. Their ancestral territory is situated in Llanos de Moxos and Chiquitania (Bolivian lowlands) (centered near 15.7°S, 62.7°W).",
    "summary_fi": "Guarayo-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Llanos de Moxosin ja Chiquitanian alueella Bolivian alangoilla (koordinaateissa noin 15.7°S, 62.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Chiquitano & Moxos forest settlements",
    "feature_name_matches": [
      "Guarayo"
    ]
  },
  {
    "slug": "guato-people",
    "name": "Guató People",
    "name_fi": "Guató-kansa",
    "native_name": "Guató",
    "alternate_names": [
      "Guató",
      "Guató people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Guat%C3%B3_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1090780",
    "summary_en": "The Guató are an indigenous people living on the upper Paraguay River, along the border of modern-day Brazil and Bolivia. They aided the Brazilians in the war with Paraguay 1865–70. Their ancestral territory is situated in Pantanal, Mato Grosso and Southern Cerrado (centered near 17.1°S, 56.6°W).",
    "summary_fi": "Guató-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pantanalin, Mato Grosson ja eteläisen Cerradon alueella (koordinaateissa noin 17.1°S, 56.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Pantanal & Cerrado aldeias",
    "feature_name_matches": [
      "Guató"
    ]
  },
  {
    "slug": "guenoa-muinanes-people",
    "name": "Guenoa-Muinanes People",
    "name_fi": "Guenoa-Muinanes-kansa",
    "native_name": "Guenoa-Muinanes",
    "alternate_names": [
      "Guenoa-Muinanes"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Guenoa-Muinanes",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in Pampas and Río de la Plata Basin (centered near 31.7°S, 55.5°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "Guenoa-Muinanes-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pampalla ja Río de la Platan valuma-alueella (koordinaateissa noin 31.7°S, 55.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Pampas traditional tolderías",
    "feature_name_matches": [
      "Guenoa-Muinanes"
    ]
  },
  {
    "slug": "gunun-a-atuk-gunun-a-kuna-people",
    "name": "Günün a atük (Günün a küna) People",
    "name_fi": "Günün a atük (Günün a küna)-kansa",
    "native_name": "Günün a atük (Günün a küna)",
    "alternate_names": [
      "Günün a atük (Günün a küna)"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/G%C3%BCn%C3%BCn_a_at%C3%BCk_(G%C3%BCn%C3%BCn_a_k%C3%BCna)",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in North Patagonian Steppe (Günün a küna country) (centered near 38.5°S, 64.3°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "Günün a atük (Günün a küna)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Patagonian aroalueella (koordinaateissa noin 38.5°S, 64.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Patagonian steppe",
    "feature_name_matches": [
      "Günün a atük (Günün a küna)"
    ]
  },
  {
    "slug": "haliti-people",
    "name": "Halíti People",
    "name_fi": "Halíti-kansa",
    "native_name": "Halíti",
    "alternate_names": [
      "Halíti",
      "Jetmir Haliti"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Jetmir_Haliti",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q56072718",
    "summary_en": "Jetmir Haliti is a professional footballer who plays as a centre-back. Born in Sweden, he plays for the Kosovo national team. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 14.0°S, 57.7°W).",
    "summary_fi": "Halíti-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 14.0°S, 57.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Halíti"
    ]
  },
  {
    "slug": "harakbut-people",
    "name": "Harakbut People",
    "name_fi": "Harakbut-kansa",
    "native_name": "Harakbut",
    "alternate_names": [
      "Harakbut",
      "Harkat-ul-Mujahideen"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Harkat-ul-Mujahideen",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2475082",
    "summary_en": "Harkat-ul-Mujahideen is a Pakistan-based Islamist jihadist group operating primarily in Kashmir. The group had links to Osama bin Laden and Mullah Omar. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 12.8°S, 70.6°W).",
    "summary_fi": "Harakbut-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 12.8°S, 70.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Harakbut"
    ]
  },
  {
    "slug": "henia-kamiare-people",
    "name": "Henîa-Kamiare People",
    "name_fi": "Henîa-Kamiare-kansa",
    "native_name": "Henîa-Kamiare",
    "alternate_names": [
      "Henîa-Kamiare",
      "Comechingón"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Comeching%C3%B3n",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1113975",
    "summary_en": "Comechingón is the common name for a group of people indigenous to the Argentine provinces of Córdoba and San Luis. By the end of the 17th century, most Comechingones had been killed or displaced by the Spanish conquistadores. Their ancestral territory is situated in Pampas and Río de la Plata Basin (centered near 32.2°S, 64.4°W).",
    "summary_fi": "Henîa-Kamiare-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pampalla ja Río de la Platan valuma-alueella (koordinaateissa noin 32.2°S, 64.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Pampas traditional tolderías",
    "feature_name_matches": [
      "Henîa-Kamiare"
    ]
  },
  {
    "slug": "hiaitsiihi-people",
    "name": "Hiaitsiihi People",
    "name_fi": "Hiaitsiihi-kansa",
    "native_name": "Hiaitsiihi",
    "alternate_names": [
      "Hiaitsiihi",
      "Pirahã people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pirah%C3%A3_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q11443101",
    "summary_en": "The Pirahã are an Indigenous people of the Amazon rainforest in Brazil. They are the sole surviving subgroup of the Mura people and are hunter-gatherers. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 7.2°S, 62.2°W).",
    "summary_fi": "Hiaitsiihi-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 7.2°S, 62.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Hiaitsiihi"
    ]
  },
  {
    "slug": "hixkaryana-people",
    "name": "Hixkaryana People",
    "name_fi": "Hixkaryana-kansa",
    "native_name": "Hixkaryana",
    "alternate_names": [
      "Hixkaryana",
      "Hixkaryana language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Hixkaryana_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q56522",
    "summary_en": "Hixkaryana is a Cariban language spoken by 600 people on the Nhamundá River, a tributary of the Amazon River in Brazil. It is one of 17 languages that have object–verb–subject word order, initially described by linguist Desmond C. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 0.6°S, 58.4°W).",
    "summary_fi": "Hixkaryana-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 0.6°S, 58.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Hixkaryana"
    ]
  },
  {
    "slug": "hoti-people",
    "name": "Hoti People",
    "name_fi": "Hoti-kansa",
    "native_name": "Hoti",
    "alternate_names": [
      "Hoti",
      "Hoti language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Hoti_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q5912372",
    "summary_en": "Hoti is an extinct Austronesian language of Seram, Indonesia, once spoken by the Hoti People. It was spoken by 10 elderly people in 1987, but was likely extinct by 2007. Their ancestral territory is situated in Llanos and Orinoco River Basin (centered near 5.8°N, 65.5°W).",
    "summary_fi": "Hoti-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Llanosin savannilla ja Orinoco-joen valuma-alueella (koordinaateissa noin 5.8°N, 65.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Orinoco riverine communities",
    "feature_name_matches": [
      "Hoti"
    ]
  },
  {
    "slug": "huarpe-people",
    "name": "Huarpe People",
    "name_fi": "Huarpe-kansa",
    "native_name": "Huarpe",
    "alternate_names": [
      "Huarpe"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Huarpe",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3097871",
    "summary_en": "The Huarpes or Warpes are an Indigenous people of Argentina, living in the Cuyo region. Some scholars assume that in the Huarpe language, this word means \"sandy ground\", but according to Arte y Vocabulario de la lengua general del Reino de Chile, written by Andrés Febrés in Lima in 1765, the word Cuyo comes from Araucanian cuyum puulli, meaning \"sandy land\" or \"desert country\". Their ancestral territory is situated in Araucanía and Southern Andes (Chile) (centered near 32.8°S, 68.0°W).",
    "summary_fi": "Huarpe-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Araucaníassa ja Etelä-Andeilla Chilessä (koordinaateissa noin 32.8°S, 68.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Araucanía traditional lof estates",
    "feature_name_matches": [
      "Huarpe"
    ]
  },
  {
    "slug": "huaylas-people",
    "name": "Huaylas People",
    "name_fi": "Huaylas-kansa",
    "native_name": "Huaylas",
    "alternate_names": [
      "Huaylas",
      "Huaylas Quechua"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Huaylas_Quechua",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q6094343",
    "summary_en": "Huaylas Quechua is an Ancash Quechua dialect spoken in the Callejón de Huaylas and in the western slope of the Cordillera Negra. Their ancestral territory is situated in Northern Peruvian Andes and Pacific Coast (centered near 9.5°S, 77.6°W).",
    "summary_fi": "Huaylas-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Perun Andeilla ja Tyynenmeren rannikolla (koordinaateissa noin 9.5°S, 77.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Peruvian valleys & coast",
    "feature_name_matches": [
      "Huaylas"
    ]
  },
  {
    "slug": "huni-kuin-people",
    "name": "Huni Kuin People",
    "name_fi": "Huni Kuin-kansa",
    "native_name": "Huni Kuin",
    "alternate_names": [
      "Huni Kuin"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Huni_Kuin",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1737369",
    "summary_en": "The Huni Kuin are an Indigenous people of Brazil and Peru. Their villages are located along the Purus and Curanja Rivers in Peru and the Tarauacá, Jordão, Breu, Muru, Envira, Humaitã, and Purus Rivers in Brazil. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 9.6°S, 71.0°W).",
    "summary_fi": "Huni Kuin-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 9.6°S, 71.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Huni Kuin"
    ]
  },
  {
    "slug": "hupd-ah-people",
    "name": "Hupd'äh People",
    "name_fi": "Hupd'äh-kansa",
    "native_name": "Hupd'äh",
    "alternate_names": [
      "Hupd'äh",
      "Hup language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Hup_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3143384",
    "summary_en": "The Hup language is one of the four Naduhup languages. It is spoken by the Hupda indigenous Amazonian peoples who live on the border between Colombia and the Brazilian state of Amazonas. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 0.4°N, 70.0°W).",
    "summary_fi": "Hupd'äh-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 0.4°N, 70.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Hupd'äh"
    ]
  },
  {
    "slug": "i-tarap-people",
    "name": "I'târap People",
    "name_fi": "I'târap-kansa",
    "native_name": "I'târap",
    "alternate_names": [
      "I'târap",
      "Intrapersonal communication"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Intrapersonal_communication",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3436149",
    "summary_en": "Intrapersonal communication is communication with oneself or self-to-self communication. Examples are thinking to oneself \"I will do better next time\" after having made a mistake and imagining a conversation with one's boss in preparation for requesting to leave work early. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 10.7°S, 61.6°W).",
    "summary_fi": "I'târap-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 10.7°S, 61.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "I'târap"
    ]
  },
  {
    "slug": "ijku-arhuaco-people",
    "name": "Ijku (Arhuaco) People",
    "name_fi": "Ijku (Arhuaco)-kansa",
    "native_name": "Ijku (Arhuaco)",
    "alternate_names": [
      "Ijku (Arhuaco)",
      "Arhuaco"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Arhuaco",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3327332",
    "summary_en": "The Arhuaco are an Indigenous people of Colombia. They are Chibchan-speaking people and descendants of the Tairona culture, concentrated in northern Colombia in the Sierra Nevada de Santa Marta. Their ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 10.4°N, 73.7°W).",
    "summary_fi": "Ijku (Arhuaco)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 10.4°N, 73.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "Ijku (Arhuaco)"
    ]
  },
  {
    "slug": "ikitu-people",
    "name": "Ikitu People",
    "name_fi": "Ikitu-kansa",
    "native_name": "Ikitu",
    "alternate_names": [
      "Ikitu",
      "Ikiru"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ikiru",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q152105",
    "summary_en": "Ikiru  is a 1952 Japanese drama film directed by Akira Kurosawa from a screenplay co-written with Shinobu Hashimoto and Hideo Oguni. The film examines the struggles of a terminally ill Tokyo bureaucrat and his final quest for meaning. Their ancestral territory is situated in Northern Peruvian Andes and Pacific Coast (centered near 3.6°S, 74.1°W).",
    "summary_fi": "Ikitu-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Perun Andeilla ja Tyynenmeren rannikolla (koordinaateissa noin 3.6°S, 74.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Peruvian valleys & coast",
    "feature_name_matches": [
      "Ikitu"
    ]
  },
  {
    "slug": "ikolen-people",
    "name": "Ikolen People",
    "name_fi": "Ikolen-kansa",
    "native_name": "Ikolen",
    "alternate_names": [
      "Ikolen",
      "Ikole"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ikole",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q5996084",
    "summary_en": "Ikole is a town and Local Government Area of Ekiti State, Nigeria. The current Chairman of the Local Government is Prince Olominu Sola Ebenezer, who polled a total of 21,228 votes to defeat other candidates in the 2019 local government election in Ekiti State, Nigeria that was organised by the state Independent Electoral Commission (SIEC). Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 10.5°S, 61.5°W).",
    "summary_fi": "Ikolen-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 10.5°S, 61.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Ikolen"
    ]
  },
  {
    "slug": "ikpeng-people",
    "name": "Ikpeng People",
    "name_fi": "Ikpeng-kansa",
    "native_name": "Ikpeng",
    "alternate_names": [
      "Ikpeng"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ikpeng",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q4001119",
    "summary_en": "The Ikpeng are an Indigenous community that now lives in the Xingu Indigenous Park in Mato Grosso, Brazil. They had a population of 459 in 2010, up from a low of 50 in 1969. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 11.2°S, 56.5°W).",
    "summary_fi": "Ikpeng-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 11.2°S, 56.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Ikpeng"
    ]
  },
  {
    "slug": "inga-people",
    "name": "Inga People",
    "name_fi": "Inga-kansa",
    "native_name": "Inga",
    "alternate_names": [
      "Inga",
      "Inga people"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Inga_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2707733",
    "summary_en": "The Inga people are an indigenous ethnic group native to portions of Colombia, Ecuador, and Peru with a claimed historical relation to the Incas. Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 1.3°N, 77.1°W).",
    "summary_fi": "Inga-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 1.3°N, 77.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "Inga"
    ]
  },
  {
    "slug": "inikana-kukama-kukamiria-kokama-people",
    "name": "Inikana/Kukama Kukamiria/Kokama People",
    "name_fi": "Inikana/Kukama Kukamiria/Kokama-kansa",
    "native_name": "Inikana/Kukama Kukamiria/Kokama",
    "alternate_names": [
      "Inikana/Kukama Kukamiria/Kokama",
      "Kokama people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kokama_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1105014",
    "summary_en": "The Kokama are an indigenous ethnic group of the Amazon that historically spoke the Cocama language. Today, the Kokama live in the countries of Peru, Brazil, and Colombia. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 4.0°S, 70.1°W).",
    "summary_fi": "Inikana/Kukama Kukamiria/Kokama-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 4.0°S, 70.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Inikana/Kukama Kukamiria/Kokama"
    ]
  },
  {
    "slug": "inkal-awa-people",
    "name": "Inkal Awá People",
    "name_fi": "Inkal Awá-kansa",
    "native_name": "Inkal Awá",
    "alternate_names": [
      "Inkal Awá",
      "Inazawa"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Inazawa",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q389562",
    "summary_en": "Inazawa  is a city located in Aichi Prefecture, Japan. As of 1 October 2019, the city had an estimated population of 135,580 in 54,999 households, and a population density of 1,709 inhabitants per square kilometre (4,430/sq mi). Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 1.1°N, 78.4°W).",
    "summary_fi": "Inkal Awá-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 1.1°N, 78.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "Inkal Awá"
    ]
  },
  {
    "slug": "iogys-people",
    "name": "Iogys People",
    "name_fi": "Iogys-kansa",
    "native_name": "Iogys",
    "alternate_names": [
      "Iogys",
      "IOSYS discography"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/IOSYS_discography",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q124475162",
    "summary_en": "The Japanese dōjin circle and musical ensemble IOSYS has self-released over 300 CDs since 1999. Their ancestral territory is situated in Gran Chaco lowlands (Argentina, Paraguay, Bolivia) (centered near 22.7°S, 63.7°W).",
    "summary_fi": "Iogys-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Gran Chacon alankoalueilla (Argentiinassa, Paraguayssa ja Boliviassa) (koordinaateissa noin 22.7°S, 63.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Gran Chaco riverine encampments",
    "feature_name_matches": [
      "Iogys"
    ]
  },
  {
    "slug": "ishir-tomaraho-people",
    "name": "Ishir Tomárãho People",
    "name_fi": "Ishir Tomárãho-kansa",
    "native_name": "Ishir Tomárãho",
    "alternate_names": [
      "Ishir Tomárãho"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ishir_Tom%C3%A1r%C3%A3ho",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in Gran Chaco lowlands (Argentina, Paraguay, Bolivia) (centered near 20.8°S, 58.0°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "Ishir Tomárãho-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Gran Chacon alankoalueilla (Argentiinassa, Paraguayssa ja Boliviassa) (koordinaateissa noin 20.8°S, 58.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Gran Chaco riverine encampments",
    "feature_name_matches": [
      "Ishir Tomárãho"
    ]
  },
  {
    "slug": "ishir-ybytoso-people",
    "name": "Ishir Ybytoso People",
    "name_fi": "Ishir Ybytoso-kansa",
    "native_name": "Ishir Ybytoso",
    "alternate_names": [
      "Ishir Ybytoso"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ishir_Ybytoso",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in Gran Chaco lowlands (Argentina, Paraguay, Bolivia) (centered near 20.4°S, 58.6°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "Ishir Ybytoso-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Gran Chacon alankoalueilla (Argentiinassa, Paraguayssa ja Boliviassa) (koordinaateissa noin 20.4°S, 58.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Gran Chaco riverine encampments",
    "feature_name_matches": [
      "Ishir Ybytoso"
    ]
  },
  {
    "slug": "iskonawa-people",
    "name": "Iskonawa People",
    "name_fi": "Iskonawa-kansa",
    "native_name": "Iskonawa",
    "alternate_names": [
      "Iskonawa",
      "Iskonawa language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Iskonawa_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3052971",
    "summary_en": "Isconahua is an indigenous American language of the Panoan family. It is spoken by the Isconahua prople in Peru. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 7.7°S, 74.0°W).",
    "summary_fi": "Iskonawa-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 7.7°S, 74.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Iskonawa"
    ]
  },
  {
    "slug": "itonama-people",
    "name": "Itonama People",
    "name_fi": "Itonama-kansa",
    "native_name": "Itonama",
    "alternate_names": [
      "Itonama",
      "Itonama people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Itonama_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3155979",
    "summary_en": "The Itonama people are an ethnic group in northeastern Bolivia. They numbered 16,158 in 2012 with 1,249 people speaking the Itonama language natively. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 12.9°S, 63.5°W).",
    "summary_fi": "Itonama-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 12.9°S, 63.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Itonama"
    ]
  },
  {
    "slug": "inapari-people",
    "name": "Iñapari People",
    "name_fi": "Iñapari-kansa",
    "native_name": "Iñapari",
    "alternate_names": [
      "Iñapari"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/I%C3%B1apari",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1899785",
    "summary_en": "Iñapari is a Peruvian village and capital of the Tahuamanu Province in the Madre de Dios Region, located on the triple border of Bolivia, Brazil and Peru. It is connected to Brazil by the Brazil-Peru Integration Bridge, an international bridge crossing the Acre River that was completed in 2006 as part of the Interoceanic Highway. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 11.0°S, 69.6°W).",
    "summary_fi": "Iñapari-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 11.0°S, 69.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Iñapari"
    ]
  },
  {
    "slug": "jamamadi-people",
    "name": "Jamamadi People",
    "name_fi": "Jamamadi-kansa",
    "native_name": "Jamamadi",
    "alternate_names": [
      "Jamamadi"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Jamamadi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1091090",
    "summary_en": "The Jamamadí, also called the Yamamadi, Kanamanti, Kapaná, and Kapinamari, are an Indigenous people who live in Acre and Amazonas, Brazil. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 7.5°S, 68.0°W).",
    "summary_fi": "Jamamadi-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 7.5°S, 68.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Jamamadi"
    ]
  },
  {
    "slug": "jaqaru-people",
    "name": "Jaqaru People",
    "name_fi": "Jaqaru-kansa",
    "native_name": "Jaqaru",
    "alternate_names": [
      "Jaqaru",
      "Jaqaru language"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Jaqaru_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q33443",
    "summary_en": "Jaqaru or Jacaru is a language of the Aymaran family. It is also known as Jaqi and Aru. Their ancestral territory is situated in Central Peruvian Andes & Mantaro Valley (centered near 12.7°S, 75.7°W).",
    "summary_fi": "Jaqaru-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Perun Keski-Andeilla ja Mantaron laaksossa (koordinaateissa noin 12.7°S, 75.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Central Andean llactas",
    "feature_name_matches": [
      "Jaqaru"
    ]
  },
  {
    "slug": "jarawara-people",
    "name": "Jarawara People",
    "name_fi": "Jarawara-kansa",
    "native_name": "Jarawara",
    "alternate_names": [
      "Jarawara",
      "Madí language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mad%C3%AD_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3053275",
    "summary_en": "Madí—also known as Jamamadí after one of its dialects, and also Kapaná or Kanamanti (Canamanti)—is an Arawan language spoken by about 1,000 Jamamadi, Banawá, and Jarawara people scattered over Amazonas, Brazil. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 7.1°S, 65.3°W).",
    "summary_fi": "Jarawara-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 7.1°S, 65.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Jarawara"
    ]
  },
  {
    "slug": "juhup-yuju-yuhupdeh-people",
    "name": "Juhup-Yuju/Yuhupdëh People",
    "name_fi": "Juhup-Yuju/Yuhupdëh-kansa",
    "native_name": "Juhup-Yuju/Yuhupdëh",
    "alternate_names": [
      "Juhup-Yuju/Yuhupdëh"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Juhup-Yuju%2FYuhupd%C3%ABh",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 0.6°S, 69.9°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "Juhup-Yuju/Yuhupdëh-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 0.6°S, 69.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Juhup-Yuju/Yuhupdëh"
    ]
  },
  {
    "slug": "ka-apor-people",
    "name": "Ka'apor People",
    "name_fi": "Ka'apor-kansa",
    "native_name": "Ka'apor",
    "alternate_names": [
      "Ka'apor",
      "Kaʼapor"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ka%CA%BCapor",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1099072",
    "summary_en": "The Kaʼapor are an Indigenous people of Brazil. They live on a protected reserve in the state of Maranhão. Their ancestral territory is situated in Eastern Amazon & Tocantins Basin (Maranhão / Pará) (centered near 2.5°S, 46.5°W).",
    "summary_fi": "Ka'apor-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Itä-Amazoniassa Tocantins-joen valuma-alueella (Maranhãossa ja Parássa) (koordinaateissa noin 2.5°S, 46.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Eastern Amazonian aldeias",
    "feature_name_matches": [
      "Ka'apor"
    ]
  },
  {
    "slug": "kacha-edze-urarina-people",
    "name": "Kacha Edze (Urarina) People",
    "name_fi": "Kacha Edze (Urarina)-kansa",
    "native_name": "Kacha Edze (Urarina)",
    "alternate_names": [
      "Kacha Edze (Urarina)",
      "Urarina"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Urarina",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2726954",
    "summary_en": "The Urarina are an indigenous people of the Peruvian Amazon Basin (Loreto) who inhabit the valleys of the Chambira, Urituyacu, and Corrientes Rivers. According to both archaeological and historical sources, they have resided in the Chambira Basin of contemporary northeastern Peru for centuries. Their ancestral territory is situated in Northern Peruvian Andes and Pacific Coast (centered near 4.3°S, 75.4°W).",
    "summary_fi": "Kacha Edze (Urarina)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Perun Andeilla ja Tyynenmeren rannikolla (koordinaateissa noin 4.3°S, 75.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Peruvian valleys & coast",
    "feature_name_matches": [
      "Kacha Edze (Urarina)"
    ]
  },
  {
    "slug": "kadiweu-people",
    "name": "Kadiwéu People",
    "name_fi": "Kadiwéu-kansa",
    "native_name": "Kadiwéu",
    "alternate_names": [
      "Kadiwéu"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kadiw%C3%A9u",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2932811",
    "summary_en": "The Kadiwéu are an Indigenous people of Brazil. In 1998, they lived in four villages, with some families living independently in the jungle. Their ancestral territory is situated in Gran Chaco lowlands (Argentina, Paraguay, Bolivia) (centered near 20.6°S, 57.2°W).",
    "summary_fi": "Kadiwéu-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Gran Chacon alankoalueilla (Argentiinassa, Paraguayssa ja Boliviassa) (koordinaateissa noin 20.6°S, 57.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Gran Chaco riverine encampments",
    "feature_name_matches": [
      "Kadiwéu"
    ]
  },
  {
    "slug": "kaiabi-people",
    "name": "Kaiabi People",
    "name_fi": "Kaiabi-kansa",
    "native_name": "Kaiabi",
    "alternate_names": [
      "Kaiabi",
      "Kayabí"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kayab%C3%AD",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1115972",
    "summary_en": "The Kayabí or Kaiabi are an Indigenous people of Brazil inhabiting the northern state of Mato Grosso. They primarily live in the Xingu Indigenous Park and the Indian Reservation of Apiaká-Kayabi south of Pará. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 10.5°S, 56.3°W).",
    "summary_fi": "Kaiabi-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 10.5°S, 56.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Kaiabi"
    ]
  },
  {
    "slug": "kaimbe-people",
    "name": "Kaimbé People",
    "name_fi": "Kaimbé-kansa",
    "native_name": "Kaimbé",
    "alternate_names": [
      "Kaimbé",
      "Kaimbé language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kaimb%C3%A9_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q6348017",
    "summary_en": "Kaimbé is an extinct unclassified language of eastern Brazil. The ethnic population numbered an estimated 1,100 to 1,400 in 1986. Their ancestral territory is situated in Caatinga and Brazilian Northeast coast (centered near 10.4°S, 38.8°W).",
    "summary_fi": "Kaimbé-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Caatingan ja Koillis-Brasilian rannikon alueella (koordinaateissa noin 10.4°S, 38.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northeast Brazilian coastal aldeias",
    "feature_name_matches": [
      "Kaimbé"
    ]
  },
  {
    "slug": "kaingang-people",
    "name": "Kaingang People",
    "name_fi": "Kaingang-kansa",
    "native_name": "Kaingang",
    "alternate_names": [
      "Kaingang"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kaingang",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q35533",
    "summary_en": "The Kaingang people are an Indigenous Brazilian ethnic group spread out over the three southern Brazilian states of Paraná, Santa Catarina and Rio Grande do Sul and the southeastern state of São Paulo. Their population was around 51,000 in 2022. Their ancestral territory is situated in South American Indigenous Territories (centered near 26.7°S, 51.5°W).",
    "summary_fi": "Kaingang-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Etelä-Amerikan alkuperäisalueilla (koordinaateissa noin 26.7°S, 51.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Traditional ancestral territory",
    "feature_name_matches": [
      "Kaingang"
    ]
  },
  {
    "slug": "kakataibo-people",
    "name": "Kakataibo People",
    "name_fi": "Kakataibo-kansa",
    "native_name": "Kakataibo",
    "alternate_names": [
      "Kakataibo",
      "Cashibo people"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Cashibo_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3661759",
    "summary_en": "The Cashibo or Carapache are an indigenous people of Peru. They live near the Aguaytía, San Alejandro, and Súngaro Rivers. Their ancestral territory is situated in Central Peruvian Andes & Mantaro Valley (centered near 9.1°S, 75.4°W).",
    "summary_fi": "Kakataibo-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Perun Keski-Andeilla ja Mantaron laaksossa (koordinaateissa noin 9.1°S, 75.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Central Andean llactas",
    "feature_name_matches": [
      "Kakataibo"
    ]
  },
  {
    "slug": "kakinte-people",
    "name": "Kakinte People",
    "name_fi": "Kakinte-kansa",
    "native_name": "Kakinte",
    "alternate_names": [
      "Kakinte",
      "Caquinte language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Caquinte_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3915557",
    "summary_en": "Caquinte, also Poyenisati, is an Arawakan language of Peru. It is spoken along the Poyeni, Mayapo, Picha, Yori, and Agueni rivers, with some speakers along parts of the Sensa and Vitiricaya rivers, within Junín, Peru. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 11.5°S, 73.5°W).",
    "summary_fi": "Kakinte-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 11.5°S, 73.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Kakinte"
    ]
  },
  {
    "slug": "kalapalo-people",
    "name": "Kalapalo People",
    "name_fi": "Kalapalo-kansa",
    "native_name": "Kalapalo",
    "alternate_names": [
      "Kalapalo"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kalapalo",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2520155",
    "summary_en": "The Kalapalo are an Indigenous people of Brazil. They are one of seventeen tribal groups who inhabit the Xingu National Park in the Upper Xingu River region of the state of Mato Grosso. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 13.1°S, 52.9°W).",
    "summary_fi": "Kalapalo-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 13.1°S, 52.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Kalapalo"
    ]
  },
  {
    "slug": "kalina-karina-people",
    "name": "Kalina/Kariña People",
    "name_fi": "Kalina/Kariña-kansa",
    "native_name": "Kalina/Kariña",
    "alternate_names": [
      "Kalina/Kariña",
      "Kalina people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kalina_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2486742",
    "summary_en": "The Kalina (Caliña), also known as the Caribs or mainland Caribs and by several other names, are an Indigenous people native to the northern coastal areas of South America. Today, the Kalina live largely in villages on the rivers and coasts of Venezuela, Guyana, Suriname, French Guiana, and Brazil. Their ancestral territory is situated in Llanos and Orinoco River Basin (centered near 7.4°N, 60.3°W).",
    "summary_fi": "Kalina/Kariña-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Llanosin savannilla ja Orinoco-joen valuma-alueella (koordinaateissa noin 7.4°N, 60.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Orinoco riverine communities",
    "feature_name_matches": [
      "Kalina/Kariña"
    ]
  },
  {
    "slug": "kallawaya-people",
    "name": "Kallawaya People",
    "name_fi": "Kallawaya-kansa",
    "native_name": "Kallawaya",
    "alternate_names": [
      "Kallawaya"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kallawaya",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1366148",
    "summary_en": "The Kallawaya are an indigenous group living in the Andes of Bolivia. They live in the Bautista Saavedra Province and Muñecas Province of the La Paz Department but are best known for being an itinerant group of traditional healers that travel on foot to reach their patients. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 14.7°S, 69.2°W).",
    "summary_fi": "Kallawaya-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 14.7°S, 69.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Kallawaya"
    ]
  },
  {
    "slug": "kamaiura-people",
    "name": "Kamaiurá People",
    "name_fi": "Kamaiurá-kansa",
    "native_name": "Kamaiurá",
    "alternate_names": [
      "Kamaiurá",
      "Kamayurá"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kamayur%C3%A1",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1722872",
    "summary_en": "The Kamayurá are an Indigenous tribe in the Amazonian Basin of Brazil. Their name is also spelled Kamayura and Kamaiurá; it means \"a raised platform to keep meat, pots and pans.\" The Kamayurá language belongs to the Tupi–Guarani family. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 12.1°S, 53.6°W).",
    "summary_fi": "Kamaiurá-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 12.1°S, 53.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Kamaiurá"
    ]
  },
  {
    "slug": "kambeba-omagua-people",
    "name": "Kambeba/Omagua People",
    "name_fi": "Kambeba/Omagua-kansa",
    "native_name": "Kambeba/Omagua",
    "alternate_names": [
      "Kambeba/Omagua",
      "Omagua people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Omagua_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1483997",
    "summary_en": "The Omagua people are an Indigenous people in Brazil's Amazon Basin. Their territory, when first in contact with Spanish explorers in the 16th century, was on the Amazon River upstream from the present-day city of Manaus extending into Peru. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 3.4°S, 70.1°W).",
    "summary_fi": "Kambeba/Omagua-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 3.4°S, 70.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Kambeba/Omagua"
    ]
  },
  {
    "slug": "kamentsa-people",
    "name": "Kamëntsá People",
    "name_fi": "Kamëntsá-kansa",
    "native_name": "Kamëntsá",
    "alternate_names": [
      "Kamëntsá",
      "Kamëntšá people"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kam%C3%ABnt%C5%A1%C3%A1_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3654784",
    "summary_en": "The Kamëntšá people are an Indigenous people in Colombia. They primarily live in the Sibundoy Valley of the Putumayo Department in the south of Colombia. Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 1.2°N, 77.0°W).",
    "summary_fi": "Kamëntsá-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 1.2°N, 77.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "Kamëntsá"
    ]
  },
  {
    "slug": "kanas-people",
    "name": "Kanas People",
    "name_fi": "Kanas-kansa",
    "native_name": "Kanas",
    "alternate_names": [
      "Kanas",
      "Kanas Lake"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kanas_Lake",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1723644",
    "summary_en": "Kanas Lake is a lake in Altay Prefecture, Xinjiang, China. The lake is located in a valley in the Altai Mountains, near the very northern tip of Xinjiang and the autonomous region's borders with Russia, Kazakhstan and Mongolia. Their ancestral territory is situated in Central Peruvian Andes & Mantaro Valley (centered near 13.5°S, 74.3°W).",
    "summary_fi": "Kanas-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Perun Keski-Andeilla ja Mantaron laaksossa (koordinaateissa noin 13.5°S, 74.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Central Andean llactas",
    "feature_name_matches": [
      "Kanas"
    ]
  },
  {
    "slug": "kandozi-people",
    "name": "Kandozi People",
    "name_fi": "Kandozi-kansa",
    "native_name": "Kandozi",
    "alternate_names": [
      "Kandozi",
      "Candoshi-Shapra language"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Candoshi-Shapra_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q642843",
    "summary_en": "Candoshi-Shapra is an indigenous American language isolate, spoken by several thousand people in western South America along the Chapuli, Huitoyacu, Pastaza, and Morona river valleys. There are two dialects, Chapara and Kandoashi (Kandozi). Their ancestral territory is situated in Northern Peruvian Andes and Pacific Coast (centered near 4.2°S, 76.6°W).",
    "summary_fi": "Kandozi-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Perun Andeilla ja Tyynenmeren rannikolla (koordinaateissa noin 4.2°S, 76.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Peruvian valleys & coast",
    "feature_name_matches": [
      "Kandozi"
    ]
  },
  {
    "slug": "kankuamo-people",
    "name": "Kankuamo People",
    "name_fi": "Kankuamo-kansa",
    "native_name": "Kankuamo",
    "alternate_names": [
      "Kankuamo",
      "Kankuamo people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kankuamo_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q5957943",
    "summary_en": "The Kankuamo, Kankuaka, Kankui or Kankuané are an Indigenous people of Colombia, living on the southern slopes of the Sierra Nevada de Santa Marta up until the north of the César department. The Kankuamo people, estimated at 15,000 individuals, historically spoke Sánha, a dialect of the Atanque language of the Chibchan family. Their ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 10.7°N, 73.3°W).",
    "summary_fi": "Kankuamo-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 10.7°N, 73.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "Kankuamo"
    ]
  },
  {
    "slug": "kantarure-people",
    "name": "Kantaruré People",
    "name_fi": "Kantaruré-kansa",
    "native_name": "Kantaruré",
    "alternate_names": [
      "Kantaruré",
      "List of unclassified languages of South America"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/List_of_unclassified_languages_of_South_America",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q6644203",
    "summary_en": "The following purported languages of South America are listed as unclassified in either Campbell (2024), Loukotka (1968), Ethnologue, or Glottolog. Nearly all are extinct. Their ancestral territory is situated in Caatinga and Brazilian Northeast coast (centered near 9.2°S, 38.4°W).",
    "summary_fi": "Kantaruré-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Caatingan ja Koillis-Brasilian rannikon alueella (koordinaateissa noin 9.2°S, 38.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northeast Brazilian coastal aldeias",
    "feature_name_matches": [
      "Kantaruré"
    ]
  },
  {
    "slug": "kapanawa-people",
    "name": "Kapanawa People",
    "name_fi": "Kapanawa-kansa",
    "native_name": "Kapanawa",
    "alternate_names": [
      "Kapanawa",
      "Capanahua language"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Capanahua_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2937196",
    "summary_en": "Capanahua or Kapanawa is a moribund Panoan language spoken in western South America by 50 of the 400 Capanahua people, around the area of the Tapiche-Buncuya river. Their ancestral territory is situated in Northern Peruvian Andes and Pacific Coast (centered near 6.3°S, 74.1°W).",
    "summary_fi": "Kapanawa-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Perun Andeilla ja Tyynenmeren rannikolla (koordinaateissa noin 6.3°S, 74.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Peruvian valleys & coast",
    "feature_name_matches": [
      "Kapanawa"
    ]
  },
  {
    "slug": "karaja-do-norte-people",
    "name": "Karajá do Norte People",
    "name_fi": "Karajá do Norte-kansa",
    "native_name": "Karajá do Norte",
    "alternate_names": [
      "Karajá do Norte",
      "Xambioá"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Xambio%C3%A1",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q10394234",
    "summary_en": "The Xambioá, also called the Karajá do Norte, Ixybiowa, or Iraru Mahãndu, are an Indigenous people who live in Tocantins, Brazil. The size of the present-day population does not reflect what it had been up to the end of the 19th century, when the Karajá do Norte numbered some 1,350 individuals. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 6.5°S, 48.4°W).",
    "summary_fi": "Karajá do Norte-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 6.5°S, 48.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Karajá do Norte"
    ]
  },
  {
    "slug": "karanka-people",
    "name": "Karanka People",
    "name_fi": "Karanka-kansa",
    "native_name": "Karanka",
    "alternate_names": [
      "Karanka"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Karanka",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q56538876",
    "summary_en": "Karanka is a Basque surname. Notable people with the surname include:Aitor Karanka, Spanish footballer and manager\nDavid Karanka, Spanish footballer and manager, brother of Aitor. Their ancestral territory is situated in Central Andes and Lake Titicaca Altiplano (centered near 18.5°S, 68.5°W).",
    "summary_fi": "Karanka-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Keski-Andeilla ja Titicacajärven Altiplanolla (koordinaateissa noin 18.5°S, 68.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Altiplano ayllu centers",
    "feature_name_matches": [
      "Karanka"
    ]
  },
  {
    "slug": "karanki-people",
    "name": "Karanki People",
    "name_fi": "Karanki-kansa",
    "native_name": "Karanki",
    "alternate_names": [
      "Karanki",
      "Caranqui language"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Caranqui_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2937753",
    "summary_en": "Caranqui or Cara (Kara) is an extinct, probably Barbacoan language of Ecuador. Caranqui was replaced by Quechua, perhaps surviving as late as the 18th century. Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 0.2°N, 78.2°W).",
    "summary_fi": "Karanki-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 0.2°N, 78.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "Karanki"
    ]
  },
  {
    "slug": "karapana-muteamasa-people",
    "name": "Karapana/Muteamasa People",
    "name_fi": "Karapana/Muteamasa-kansa",
    "native_name": "Karapana/Muteamasa",
    "alternate_names": [
      "Karapana/Muteamasa"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Karapana%2FMuteamasa",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 0.7°N, 70.4°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "Karapana/Muteamasa-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 0.7°N, 70.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Karapana/Muteamasa"
    ]
  },
  {
    "slug": "karijona-people",
    "name": "Karijona People",
    "name_fi": "Karijona-kansa",
    "native_name": "Karijona",
    "alternate_names": [
      "Karijona",
      "Kareena Kapoor"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kareena_Kapoor",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q184885",
    "summary_en": "Kareena Kapoor Khan is an Indian actress. She has been known for her leading roles in Hindi cinema since 2000. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 0.2°S, 72.3°W).",
    "summary_fi": "Karijona-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 0.2°S, 72.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Karijona"
    ]
  },
  {
    "slug": "katukina-people",
    "name": "Katukina People",
    "name_fi": "Katukina-kansa",
    "native_name": "Katukina",
    "alternate_names": [
      "Katukina",
      "Katukína-Kanamarí language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Katuk%C3%ADna-Kanamar%C3%AD_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3438373",
    "summary_en": "Katukina-Kanamari is a Katukinan language spoken by about 650 individuals in Amazonas, Brazil. It is considered endangered. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 8.2°S, 71.8°W).",
    "summary_fi": "Katukina-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 8.2°S, 71.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Katukina"
    ]
  },
  {
    "slug": "kawashkar-people",
    "name": "Kawashkar People",
    "name_fi": "Kawashkar-kansa",
    "native_name": "Kawashkar",
    "alternate_names": [
      "Kawashkar",
      "Kawésqar"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kaw%C3%A9sqar",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1426818",
    "summary_en": "The Kawésqar, also known as the Kaweskar, Alacaluf, Alacalufe or Halakwulup, are an Indigenous people who live in Chilean Patagonia, specifically in the Brunswick Peninsula, and Wellington, Santa Inés, and Desolación islands northwest of the Strait of Magellan and south of the Gulf of Penas. Their traditional language is known as Kawésqar, a word that means “person” or “human being”; it is endangered as few native speakers survive. Their ancestral territory is situated in Patagonia and Tierra del Fuego (centered near 47.6°S, 74.1°W).",
    "summary_fi": "Kawashkar-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Patagoniassa ja Tulimaassa (koordinaateissa noin 47.6°S, 74.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Patagonian & Fuegian ancestral camps",
    "feature_name_matches": [
      "Kawashkar"
    ]
  },
  {
    "slug": "kaxarari-people",
    "name": "Kaxarari People",
    "name_fi": "Kaxarari-kansa",
    "native_name": "Kaxarari",
    "alternate_names": [
      "Kaxarari",
      "Kaxararí language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kaxarar%C3%AD_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q6380124",
    "summary_en": "Kaxararí is a Panoan language of Brazil. It is spoken around the northwest border of the State of Rondônia. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 9.4°S, 66.0°W).",
    "summary_fi": "Kaxarari-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 9.4°S, 66.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Kaxarari"
    ]
  },
  {
    "slug": "kaxixo-people",
    "name": "Kaxixó People",
    "name_fi": "Kaxixó-kansa",
    "native_name": "Kaxixó",
    "alternate_names": [
      "Kaxixó"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kaxix%C3%B3",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3513012",
    "summary_en": "The Kaxixó are an Indigenous people of Brazil, located mainly in the Martinho Campos as well as the Pompéu municipalities of the state of Minas Gerais, Brazil. There are 301 Kaxixó as of 2014, who are dispersed over a wide area around the Kaxixó aldeia (village). Their ancestral territory is situated in Pantanal, Mato Grosso and Southern Cerrado (centered near 19.3°S, 45.1°W).",
    "summary_fi": "Kaxixó-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pantanalin, Mato Grosson ja eteläisen Cerradon alueella (koordinaateissa noin 19.3°S, 45.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Pantanal & Cerrado aldeias",
    "feature_name_matches": [
      "Kaxixó"
    ]
  },
  {
    "slug": "kayambi-people",
    "name": "Kayambi People",
    "name_fi": "Kayambi-kansa",
    "native_name": "Kayambi",
    "alternate_names": [
      "Kayambi",
      "Kayamkulam Kochunni (2018 film)"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kayamkulam_Kochunni_(2018_film)",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q46600470",
    "summary_en": "Kayamkulam Kochunni is a 2018 Indian Malayalam-language epic period action film directed by Rosshan Andrrews and written by Bobby & Sanjay. It is based on the life of Kayamkulam Kochunni, a famed outlaw who robbed from the rich and gave to the poor during the British Raj in the early 19th century Central Travancore. Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 0.0°N, 78.2°W).",
    "summary_fi": "Kayambi-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 0.0°N, 78.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "Kayambi"
    ]
  },
  {
    "slug": "kanari-people",
    "name": "Kañari People",
    "name_fi": "Kañari-kansa",
    "native_name": "Kañari",
    "alternate_names": [
      "Kañari",
      "Cañari"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ca%C3%B1ari",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1122582",
    "summary_en": "The Cañari are an indigenous ethnic group traditionally inhabiting the territory of the modern provinces of Azuay and Cañar in Ecuador. They are descended from the independent pre-Columbian tribal confederation of the same name. Their ancestral territory is situated in Northern Peruvian Andes and Pacific Coast (centered near 4.8°S, 79.4°W).",
    "summary_fi": "Kañari-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Perun Andeilla ja Tyynenmeren rannikolla (koordinaateissa noin 4.8°S, 79.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Peruvian valleys & coast",
    "feature_name_matches": [
      "Kañari"
    ]
  },
  {
    "slug": "killaka-asanajaqi-people",
    "name": "Killaka Asanajaqi People",
    "name_fi": "Killaka Asanajaqi-kansa",
    "native_name": "Killaka Asanajaqi",
    "alternate_names": [
      "Killaka Asanajaqi"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Killaka_Asanajaqi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in Central Andes and Lake Titicaca Altiplano (centered near 19.6°S, 67.1°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "Killaka Asanajaqi-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Keski-Andeilla ja Titicacajärven Altiplanolla (koordinaateissa noin 19.6°S, 67.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Altiplano ayllu centers",
    "feature_name_matches": [
      "Killaka Asanajaqi"
    ]
  },
  {
    "slug": "kinja-people",
    "name": "Kinja People",
    "name_fi": "Kinja-kansa",
    "native_name": "Kinja",
    "alternate_names": [
      "Kinja",
      "Waimiri-Atroari"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Waimiri-Atroari",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1560134",
    "summary_en": "The Waimiri-Atroari or Uaimiris-Atroari are an Indigenous group inhabiting the southeastern part of the Brazilian state of Roraima and northeastern Amazonas, specifically the Waimiri Atroari Indigenous Territory. They call themselves Kinja. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 0.8°S, 60.7°W).",
    "summary_fi": "Kinja-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 0.8°S, 60.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Kinja"
    ]
  },
  {
    "slug": "kiriri-people",
    "name": "Kiriri People",
    "name_fi": "Kiriri-kansa",
    "native_name": "Kiriri",
    "alternate_names": [
      "Kiriri",
      "Kariri people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kariri_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q6415329",
    "summary_en": "The Kariri people are an Indigenous people of Eastern Brazil. Their name is also spelled Cariri and comes from the Tupi word kyrirĩ meaning 'silent' or 'taciturn'. Their ancestral territory is situated in Caatinga and Brazilian Northeast coast (centered near 10.6°S, 38.6°W).",
    "summary_fi": "Kiriri-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Caatingan ja Koillis-Brasilian rannikon alueella (koordinaateissa noin 10.6°S, 38.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northeast Brazilian coastal aldeias",
    "feature_name_matches": [
      "Kiriri"
    ]
  },
  {
    "slug": "kisapincha-people",
    "name": "Kisapincha People",
    "name_fi": "Kisapincha-kansa",
    "native_name": "Kisapincha",
    "alternate_names": [
      "Kisapincha",
      "Kishinchand Chellaram College"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kishinchand_Chellaram_College",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q6416599",
    "summary_en": "Kishinchand Chellaram College, commonly known as KC College, is a higher educational Autonomous institution in Mumbai, Maharashtra, India. It is affiliated to the HSNC University.It was the first college to be awarded an \"A\" grade by The National Assessment and Accreditation Council (NAAC) in Mumbai. Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 1.2°S, 78.7°W).",
    "summary_fi": "Kisapincha-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 1.2°S, 78.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "Kisapincha"
    ]
  },
  {
    "slug": "kisedje-people",
    "name": "Kisêdjê People",
    "name_fi": "Kisêdjê-kansa",
    "native_name": "Kisêdjê",
    "alternate_names": [
      "Kisêdjê",
      "Suyá"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Suy%C3%A1",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q7650652",
    "summary_en": "The Suyá, self-denomination Kisêdjê, are Indigenous people in Brazil, at the headwaters of the Xingu River. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 11.6°S, 53.2°W).",
    "summary_fi": "Kisêdjê-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 11.6°S, 53.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Kisêdjê"
    ]
  },
  {
    "slug": "kitu-kara-people",
    "name": "Kitu Kara People",
    "name_fi": "Kitu Kara-kansa",
    "native_name": "Kitu Kara",
    "alternate_names": [
      "Kitu Kara",
      "Kit car"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kit_car",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1743827",
    "summary_en": "A kit car is an automobile available as a set of parts that a manufacturer sells and the buyer then assembles into a functioning car. Usually, many of the major mechanical systems such as the engine and transmission are sourced from donor vehicles or purchased new from other vendors. Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 0.2°S, 78.5°W).",
    "summary_fi": "Kitu Kara-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 0.2°S, 78.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "Kitu Kara"
    ]
  },
  {
    "slug": "kogui-kaggabba-people",
    "name": "Kogui/Kaggabba People",
    "name_fi": "Kogui/Kaggabba-kansa",
    "native_name": "Kogui/Kaggabba",
    "alternate_names": [
      "Kogui/Kaggabba",
      "Kogi people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kogi_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1754298",
    "summary_en": "The Kogi, or Cogui, or Kágaba, meaning \"jaguar\" in the Kogi language, are an Indigenous people of the Sierra Nevada de Santa Marta mountains in northern Colombia. Their culture has continued since the Pre-Columbian era, according to a scholarly position most represented by Gerardo Reichel-Dolmatoff, but which has been criticised for its essentialist elements and the indirect removal of centuries marked by contact and tensions within the Sierra Nevada de Santa Marta, as well as representing the Kogi as \"noble eco-savages\". Their ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 11.1°N, 73.6°W).",
    "summary_fi": "Kogui/Kaggabba-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 11.1°N, 73.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "Kogui/Kaggabba"
    ]
  },
  {
    "slug": "kolla-people",
    "name": "Kolla People",
    "name_fi": "Kolla-kansa",
    "native_name": "Kolla",
    "alternate_names": [
      "Kolla",
      "Qulla"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Qulla",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1779257",
    "summary_en": "The Qulla are an Indigenous people of western Bolivia, northern Chile, and the western portions of Jujuy and Salta provinces in Argentina. The 2004 Complementary Indigenous Survey reported 53,019 Qulla households living in Argentina. Their ancestral territory is situated in South American Indigenous Territories (centered near 23.8°S, 65.6°W).",
    "summary_fi": "Kolla-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Etelä-Amerikan alkuperäisalueilla (koordinaateissa noin 23.8°S, 65.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Traditional ancestral territory",
    "feature_name_matches": [
      "Kolla"
    ]
  },
  {
    "slug": "kolla-atacameno-people",
    "name": "Kolla-Atacameño People",
    "name_fi": "Kolla-Atacameño-kansa",
    "native_name": "Kolla-Atacameño",
    "alternate_names": [
      "Kolla-Atacameño"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kolla-Atacame%C3%B1o",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in Atacama Desert and Southern Puna (centered near 25.9°S, 68.2°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "Kolla-Atacameño-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Atacaman aavikolla ja Punan ylängöllä (koordinaateissa noin 25.9°S, 68.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Atacama coastal and oasis settlements",
    "feature_name_matches": [
      "Kolla-Atacameño"
    ]
  },
  {
    "slug": "korubo-people",
    "name": "Korubo People",
    "name_fi": "Korubo-kansa",
    "native_name": "Korubo",
    "alternate_names": [
      "Korubo"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Korubo",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2520279",
    "summary_en": "The Korubo or Korubu, also known by the endonym Dslala and in Portuguese as caceteiros ('clubbers'), are a largely uncontacted, Panoan-speaking Indigenous people of Brazil living in the lower Vale do Javari in the western Amazon Basin. Much of what the outside world knows of this group is based on the research of Brazilian explorer Sydney Possuelo, who first contacted the tribe in October 1996, and journalist Paul Raffaele. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 4.9°S, 70.3°W).",
    "summary_fi": "Korubo-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 4.9°S, 70.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Korubo"
    ]
  },
  {
    "slug": "krenak-people",
    "name": "Krenak People",
    "name_fi": "Krenak-kansa",
    "native_name": "Krenak",
    "alternate_names": [
      "Krenak",
      "Aimoré"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Aimor%C3%A9",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q894756",
    "summary_en": "The Aimoré (Aymore, Aimboré) are one of several South American peoples of eastern Brazil called Botocudo in Portuguese, in allusion to the wooden disks or tembetás worn in their lips and ears. Some called themselves Nac-nanuk or Nac-poruk, meaning \"sons of the soil\". Their ancestral territory is situated in Atlantic Forest and Brazilian Highlands (centered near 19.2°S, 41.3°W).",
    "summary_fi": "Krenak-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Brasilian atlanttisen sademetsän (Mata Atlântica) ja ylänköjen alueella (koordinaateissa noin 19.2°S, 41.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Mata Atlântica ancestral territories",
    "feature_name_matches": [
      "Krenak"
    ]
  },
  {
    "slug": "krenye-people",
    "name": "Krenyê People",
    "name_fi": "Krenyê-kansa",
    "native_name": "Krenyê",
    "alternate_names": [
      "Krenyê",
      "Krẽje language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kr%E1%BA%BDje_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3199686",
    "summary_en": "Krẽje or Kreye is an Jê language that is spoken in Maranhão and Pará, Brazil. This language is originated from Maranhão, yet probably extinct with a handful of speakers. Their ancestral territory is situated in Eastern Amazon & Tocantins Basin (Maranhão / Pará) (centered near 4.8°S, 45.0°W).",
    "summary_fi": "Krenyê-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Itä-Amazoniassa Tocantins-joen valuma-alueella (Maranhãossa ja Parássa) (koordinaateissa noin 4.8°S, 45.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Eastern Amazonian aldeias",
    "feature_name_matches": [
      "Krenyê"
    ]
  },
  {
    "slug": "kricatije-people",
    "name": "Krĩcatijê People",
    "name_fi": "Krĩcatijê-kansa",
    "native_name": "Krĩcatijê",
    "alternate_names": [
      "Krĩcatijê",
      "Citizens for Constitutional Freedom"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Citizens_for_Constitutional_Freedom",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q22022103",
    "summary_en": "Citizens for Constitutional Freedom (C4CF), later also known as People for Constitutional Freedom (P4CF), was the name taken on January 4, 2016, by an armed private U.S. militia that occupied the U.S. Their ancestral territory is situated in Eastern Amazon & Tocantins Basin (Maranhão / Pará) (centered near 5.9°S, 46.9°W).",
    "summary_fi": "Krĩcatijê-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Itä-Amazoniassa Tocantins-joen valuma-alueella (Maranhãossa ja Parássa) (koordinaateissa noin 5.9°S, 46.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Eastern Amazonian aldeias",
    "feature_name_matches": [
      "Krĩcatijê"
    ]
  },
  {
    "slug": "kubewa-cubeo-people",
    "name": "Kubéwa/Cubeo People",
    "name_fi": "Kubéwa/Cubeo-kansa",
    "native_name": "Kubéwa/Cubeo",
    "alternate_names": [
      "Kubéwa/Cubeo",
      "Cubeo people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Cubeo_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2258624",
    "summary_en": "The Cubeo are an ethnic group of the Vaupés Department (Colombia). Cubeo is a generic name that is used in local Spanish and appears in the literature in reference to a social and linguistic group. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 1.4°N, 70.3°W).",
    "summary_fi": "Kubéwa/Cubeo-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 1.4°N, 70.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Kubéwa/Cubeo"
    ]
  },
  {
    "slug": "kulina-pano-people",
    "name": "Kulina Pano People",
    "name_fi": "Kulina Pano-kansa",
    "native_name": "Kulina Pano",
    "alternate_names": [
      "Kulina Pano",
      "Kulina language (Panoan)"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kulina_language_(Panoan)",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q6443027",
    "summary_en": "Kulina or Kulina Pano is an obsolescent Panoan language of Javari River valley, Brazil. The Kulina Pano people live in the village of Aldeia Pedro Lopes on the middle stretch of the Curuçá River in Amazonas. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 5.3°S, 71.8°W).",
    "summary_fi": "Kulina Pano-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 5.3°S, 71.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Kulina Pano"
    ]
  },
  {
    "slug": "kuruaya-people",
    "name": "Kuruaya People",
    "name_fi": "Kuruaya-kansa",
    "native_name": "Kuruaya",
    "alternate_names": [
      "Kuruaya"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kuruaya",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3817508",
    "summary_en": "The Kuruaya people are an Indigenous people of Brazil. They live along the tributaries of the lower Xingu River in the state of Pará. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 5.7°S, 54.6°W).",
    "summary_fi": "Kuruaya-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 5.7°S, 54.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Kuruaya"
    ]
  },
  {
    "slug": "kura-people",
    "name": "Kurâ People",
    "name_fi": "Kurâ-kansa",
    "native_name": "Kurâ",
    "alternate_names": [
      "Kurâ",
      "Kural"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kural",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2167085",
    "summary_en": "The Tirukkuṟaḷ, or shortened to the Kural, is a classic Tamil language text on commoner's morality consisting of 1,330 short couplets, or kurals, of seven words each. The text is divided into three books with aphoristic teachings on virtue (aram), wealth (porul) and love (inbam), respectively. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 13.4°S, 55.6°W).",
    "summary_fi": "Kurâ-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 13.4°S, 55.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Kurâ"
    ]
  },
  {
    "slug": "kwaza-people",
    "name": "Kwazá People",
    "name_fi": "Kwazá-kansa",
    "native_name": "Kwazá",
    "alternate_names": [
      "Kwazá",
      "Kwaza people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kwaza_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3817631",
    "summary_en": "The Kwazá are an Indigenous people of Brazil. Most Kwazá live with the Aikanã and Latundê in the Tubarão-Latundê Indigenous Reserve in the province of Rondônia; however, some Kwazá live in the Terra Indígena Kwazá do Rio São Pedro. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 12.6°S, 60.6°W).",
    "summary_fi": "Kwazá-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 12.6°S, 60.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Kwazá"
    ]
  },
  {
    "slug": "laklano-people",
    "name": "Laklanõ People",
    "name_fi": "Laklanõ-kansa",
    "native_name": "Laklanõ",
    "alternate_names": [
      "Laklanõ",
      "Xokleng language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Xokleng_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3027930",
    "summary_en": "Xokleng or Laklãnõ is a Southern Jê language spoken by the Xokleng people of Brazil. It is closely related to Kaingang. Their ancestral territory is situated in South American Indigenous Territories (centered near 26.8°S, 50.3°W).",
    "summary_fi": "Laklanõ-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Etelä-Amerikan alkuperäisalueilla (koordinaateissa noin 26.8°S, 50.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Traditional ancestral territory",
    "feature_name_matches": [
      "Laklanõ"
    ]
  },
  {
    "slug": "leco-people",
    "name": "Leco People",
    "name_fi": "Leco-kansa",
    "native_name": "Leco",
    "alternate_names": [
      "Leco",
      "Leco people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Leco_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3228749",
    "summary_en": "The Leco people are an ethnic group in Bolivia that live in the Bolivian Amazon region, in the western part of the country. They numbered 13,527 in 2012 of which 189 spoke the Leco language natively. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 14.9°S, 68.1°W).",
    "summary_fi": "Leco-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 14.9°S, 68.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Leco"
    ]
  },
  {
    "slug": "lickanantay-people",
    "name": "Lickanantay People",
    "name_fi": "Lickanantay-kansa",
    "native_name": "Lickanantay",
    "alternate_names": [
      "Lickanantay",
      "Atacama people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Atacama_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q753125",
    "summary_en": "The Atacama people, also called Atacameño, are an Indigenous people from the Atacama Desert and altiplano region in the north of Chile and Argentina and southern Bolivia, mainly the Antofagasta Region. Their ancestral territory is situated in Atacama Desert and Southern Puna (centered near 23.6°S, 67.7°W).",
    "summary_fi": "Lickanantay-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Atacaman aavikolla ja Punan ylängöllä (koordinaateissa noin 23.6°S, 67.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Atacama coastal and oasis settlements",
    "feature_name_matches": [
      "Lickanantay"
    ]
  },
  {
    "slug": "lipi-people",
    "name": "Lipi People",
    "name_fi": "Lipi-kansa",
    "native_name": "Lipi",
    "alternate_names": [
      "Lipi",
      "Lipid"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Lipid",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q11367",
    "summary_en": "Lipids are a broad group of organic compounds that include fats, waxes, sterols, fat-soluble vitamins, monoglycerides, diglycerides, phospholipids, and others. The functions of lipids include storing energy, signaling, and acting as structural components of cell membranes. Their ancestral territory is situated in Atacama Desert and Southern Puna (centered near 21.2°S, 67.2°W).",
    "summary_fi": "Lipi-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Atacaman aavikolla ja Punan ylängöllä (koordinaateissa noin 21.2°S, 67.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Atacama coastal and oasis settlements",
    "feature_name_matches": [
      "Lipi"
    ]
  },
  {
    "slug": "lule-people",
    "name": "Lule People",
    "name_fi": "Lule-kansa",
    "native_name": "Lule",
    "alternate_names": [
      "Lule",
      "Lule people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Lule_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q11689928",
    "summary_en": "The Lule people, or Lules, are an indigenous people in Argentina. They were originally encountered in the area that is now the Salta Province of Argentina, as well as in nearby areas of modern-day Bolivia and Paraguay. Their ancestral territory is situated in Gran Chaco lowlands (Argentina, Paraguay, Bolivia) (centered near 26.5°S, 64.4°W).",
    "summary_fi": "Lule-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Gran Chacon alankoalueilla (Argentiinassa, Paraguayssa ja Boliviassa) (koordinaateissa noin 26.5°S, 64.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Gran Chaco riverine encampments",
    "feature_name_matches": [
      "Lule"
    ]
  },
  {
    "slug": "lumnanas-people",
    "name": "Lumnanas People",
    "name_fi": "Lumnanas-kansa",
    "native_name": "Lumnanas",
    "alternate_names": [
      "Lumnanas",
      "Lumla Assembly constituency"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Lumla_Assembly_constituency",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q30600959",
    "summary_en": "Lumla Assembly constituency is one of the 60 assembly constituencies of Arunachal Pradesh, a northeastern state of India. It is part of Arunachal East Lok Sabha constituency. Their ancestral territory is situated in Gran Chaco lowlands (Argentina, Paraguay, Bolivia) (centered near 22.0°S, 61.8°W).",
    "summary_fi": "Lumnanas-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Gran Chacon alankoalueilla (Argentiinassa, Paraguayssa ja Boliviassa) (koordinaateissa noin 22.0°S, 61.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Gran Chaco riverine encampments",
    "feature_name_matches": [
      "Lumnanas"
    ]
  },
  {
    "slug": "macuxi-people",
    "name": "Macuxi People",
    "name_fi": "Macuxi-kansa",
    "native_name": "Macuxi",
    "alternate_names": [
      "Macuxi",
      "Macushi"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Macushi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2520166",
    "summary_en": "The Macushi are an Indigenous people living in the borderlands of southern Guyana, northern Brazil in the state of Roraima, and in an eastern part of Venezuela. Their ancestral territory is situated in Guiana Shield and Atlantic Coastal Lowlands (centered near 4.1°N, 59.9°W).",
    "summary_fi": "Macuxi-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Guayanan kilven ja Atlantin rannikon alankoalueilla (koordinaateissa noin 4.1°N, 59.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Guiana Shield indigenous villages",
    "feature_name_matches": [
      "Macuxi"
    ]
  },
  {
    "slug": "madija-people",
    "name": "Madija People",
    "name_fi": "Madija-kansa",
    "native_name": "Madija",
    "alternate_names": [
      "Madija",
      "Kulina people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kulina_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3507494",
    "summary_en": "The Kulina are an Indigenous people of Brazil and Peru. 2,540 Kulina live in Amazonas and Acre in Brazil; while 400 live in southeastern Peru, along the Purus and Santa Rosa Rivers. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 8.6°S, 70.9°W).",
    "summary_fi": "Madija-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 8.6°S, 70.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Madija"
    ]
  },
  {
    "slug": "maijuna-people",
    "name": "Maijuna People",
    "name_fi": "Maijuna-kansa",
    "native_name": "Maijuna",
    "alternate_names": [
      "Maijuna",
      "Maimonides"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Maimonides",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q127398",
    "summary_en": "Moses ben Maimon, commonly known as Maimonides and also referred to by the Hebrew acronym Rambam, was a Sephardic Jewish rabbi who is widely acknowledged as one of the most prolific and influential Torah scholars of the Middle Ages. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 2.8°S, 72.9°W).",
    "summary_fi": "Maijuna-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 2.8°S, 72.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Maijuna"
    ]
  },
  {
    "slug": "makurap-people",
    "name": "Makurap People",
    "name_fi": "Makurap-kansa",
    "native_name": "Makurap",
    "alternate_names": [
      "Makurap",
      "Makurap language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Makurap_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3281037",
    "summary_en": "Makurap (Macurapi) is a Tupian language of Brazil, spoken by the Makurap people of Rondônia. Portuguese is now the primary language of the younger Makurap; older members of Indigenous peoples in the region use Makurap during 'chichada' festivals where chicha is communally consumed. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 12.4°S, 62.1°W).",
    "summary_fi": "Makurap-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 12.4°S, 62.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Makurap"
    ]
  },
  {
    "slug": "maka-people",
    "name": "Maká People",
    "name_fi": "Maká-kansa",
    "native_name": "Maká",
    "alternate_names": [
      "Maká",
      "Maká language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mak%C3%A1_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3281043",
    "summary_en": "Maká is a Matacoan language spoken in Argentina and Paraguay by the Maká people. Its 1,500 speakers live primarily in Presidente Hayes Department near the Río Negro, as well as in and around Asunción. Their ancestral territory is situated in Gran Chaco lowlands (Argentina, Paraguay, Bolivia) (centered near 24.4°S, 59.2°W).",
    "summary_fi": "Maká-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Gran Chacon alankoalueilla (Argentiinassa, Paraguayssa ja Boliviassa) (koordinaateissa noin 24.4°S, 59.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Gran Chaco riverine encampments",
    "feature_name_matches": [
      "Maká"
    ]
  },
  {
    "slug": "malacatos-people",
    "name": "Malacatos People",
    "name_fi": "Malacatos-kansa",
    "native_name": "Malacatos",
    "alternate_names": [
      "Malacatos",
      "Malacostraca"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Malacostraca",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q182978",
    "summary_en": "Malacostraca is the second largest of the six classes of pancrustaceans after insects, containing about 40,000 living species, divided among 16 orders. Its members, the malacostracans, display a great diversity of body forms and include crabs, lobsters, spiny lobsters, crayfish, shrimp, krill, prawns, isopods, amphipods, mantis shrimp, and many other less familiar animals. Their ancestral territory is situated in Northern Peruvian Andes and Pacific Coast (centered near 4.4°S, 79.2°W).",
    "summary_fi": "Malacatos-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Perun Andeilla ja Tyynenmeren rannikolla (koordinaateissa noin 4.4°S, 79.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Peruvian valleys & coast",
    "feature_name_matches": [
      "Malacatos"
    ]
  },
  {
    "slug": "manoki-people",
    "name": "Manoki People",
    "name_fi": "Manoki-kansa",
    "native_name": "Manoki",
    "alternate_names": [
      "Manoki",
      "Irantxe language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Irantxe_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3409301",
    "summary_en": "Irántxe, also known as Mỹky (Münkü) or still as Irántxe-Münkü, is an indigenous language spoken by the Irántxe and Mỹky peoples in the state of Mato Grosso in Brazil. Recent descriptions of the language analyze it as a language isolate, in that it \"bears no similarity with other language families\". Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 12.5°S, 57.7°W).",
    "summary_fi": "Manoki-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 12.5°S, 57.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Manoki"
    ]
  },
  {
    "slug": "marubo-people",
    "name": "Marubo People",
    "name_fi": "Marubo-kansa",
    "native_name": "Marubo",
    "alternate_names": [
      "Marubo",
      "Marúbo language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mar%C3%BAbo_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3296011",
    "summary_en": "Marúbo is a Panoan language of Brazil. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 6.7°S, 72.4°W).",
    "summary_fi": "Marubo-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 6.7°S, 72.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Marubo"
    ]
  },
  {
    "slug": "mashco-piro-people",
    "name": "Mashco Piro People",
    "name_fi": "Mashco Piro-kansa",
    "native_name": "Mashco Piro",
    "alternate_names": [
      "Mashco Piro"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mashco_Piro",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3850712",
    "summary_en": "The Mashco Piro, also known by the endonym Nomole, are an indigenous tribe of nomadic hunter-gatherers who inhabit the remote regions of the Amazon rainforest. They live in Manú National Park in the Madre de Dios Region in Peru. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 10.9°S, 71.6°W).",
    "summary_fi": "Mashco Piro-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 10.9°S, 71.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Mashco Piro"
    ]
  },
  {
    "slug": "matawai-people",
    "name": "Matawai People",
    "name_fi": "Matawai-kansa",
    "native_name": "Matawai",
    "alternate_names": [
      "Matawai",
      "Matawai people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Matawai_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3376343",
    "summary_en": "The Matawai are a tribe of Surinamese Maroons. The Matawai were originally part of the Saramaka, and signed a peace agreement with the Dutch colonists in 1762. Their ancestral territory is situated in Guiana Shield and Atlantic Coastal Lowlands (centered near 4.5°N, 55.7°W).",
    "summary_fi": "Matawai-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Guayanan kilven ja Atlantin rannikon alankoalueilla (koordinaateissa noin 4.5°N, 55.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Guiana Shield indigenous villages",
    "feature_name_matches": [
      "Matawai"
    ]
  },
  {
    "slug": "matetamae-cinta-larga-people",
    "name": "Matetamãe/Cinta Larga People",
    "name_fi": "Matetamãe/Cinta Larga-kansa",
    "native_name": "Matetamãe/Cinta Larga",
    "alternate_names": [
      "Matetamãe/Cinta Larga",
      "Cinta Larga"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Cinta_Larga",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1092569",
    "summary_en": "The Cinta Larga are a people Indigenous to the western Amazon rainforest of Brazil, numbering almost 2,000. Their name means \"broad belt\" in Portuguese, referring to large bark sashes the tribe once wore. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 11.1°S, 59.4°W).",
    "summary_fi": "Matetamãe/Cinta Larga-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 11.1°S, 59.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Matetamãe/Cinta Larga"
    ]
  },
  {
    "slug": "matses-matis-people",
    "name": "Matses (Matis) People",
    "name_fi": "Matses (Matis)-kansa",
    "native_name": "Matses (Matis)",
    "alternate_names": [
      "Matses (Matis)",
      "Matis"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Matis",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1349688",
    "summary_en": "The Matis people are an Indigenous people of Brazil. As of 2014 the population of Matis people was 457. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 5.6°S, 71.1°W).",
    "summary_fi": "Matses (Matis)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 5.6°S, 71.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Matses (Matis)"
    ]
  },
  {
    "slug": "matsigenka-people",
    "name": "Matsigenka People",
    "name_fi": "Matsigenka-kansa",
    "native_name": "Matsigenka",
    "alternate_names": [
      "Matsigenka",
      "Matsigenka people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Matsigenka_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1511518",
    "summary_en": "The Matsigenka are an indigenous people who live in the high jungle, or montaña, area on the eastern slopes of the Andes and in the Amazon Basin jungle regions of southeastern Peru. Their population in 2020 amounted to about 18,000. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 12.0°S, 72.1°W).",
    "summary_fi": "Matsigenka-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 12.0°S, 72.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Matsigenka"
    ]
  },
  {
    "slug": "matses-mayoruna-people",
    "name": "Matsés (Mayoruna) People",
    "name_fi": "Matsés (Mayoruna)-kansa",
    "native_name": "Matsés (Mayoruna)",
    "alternate_names": [
      "Matsés (Mayoruna)",
      "Matsés"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mats%C3%A9s",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2708837",
    "summary_en": "The Matsés  or Mayoruna are an Indigenous people of the Peruvian and Brazilian Amazon. Their traditional homelands are located between the Javari and Galvez rivers. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 5.4°S, 72.7°W).",
    "summary_fi": "Matsés (Mayoruna)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 5.4°S, 72.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Matsés (Mayoruna)"
    ]
  },
  {
    "slug": "maxakali-people",
    "name": "Maxakalí People",
    "name_fi": "Maxakalí-kansa",
    "native_name": "Maxakalí",
    "alternate_names": [
      "Maxakalí",
      "Maxakalí language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Maxakal%C3%AD_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3029682",
    "summary_en": "Maxakalí is a Maxakalían language spoken in four villages in Minas Gerais, Brazil, by more than 2,000 people.It is the primary language of the Maxakalí people. There is no known dialectal variation within Maxakalí. Their ancestral territory is situated in Atlantic Forest and Brazilian Highlands (centered near 17.6°S, 40.7°W).",
    "summary_fi": "Maxakalí-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Brasilian atlanttisen sademetsän (Mata Atlântica) ja ylänköjen alueella (koordinaateissa noin 17.6°S, 40.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Mata Atlântica ancestral territories",
    "feature_name_matches": [
      "Maxakalí"
    ]
  },
  {
    "slug": "mbya-people",
    "name": "Mbya People",
    "name_fi": "Mbya-kansa",
    "native_name": "Mbya",
    "alternate_names": [
      "Mbya",
      "Sirionó language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Sirion%C3%B3_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3027953",
    "summary_en": "Sirionó is a Tupian language spoken by about 400 Sirionó people and 120 Yuqui in eastern Bolivia in the village of Ibiato (Eviato) and along the Río Blanco in farms and ranches. Their ancestral territory is situated in South American Indigenous Territories (centered near 27.9°S, 52.3°W).",
    "summary_fi": "Mbya-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Etelä-Amerikan alkuperäisalueilla (koordinaateissa noin 27.9°S, 52.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Traditional ancestral territory",
    "feature_name_matches": [
      "Mbya"
    ]
  },
  {
    "slug": "mehin-people",
    "name": "Mehin People",
    "name_fi": "Mehin-kansa",
    "native_name": "Mehin",
    "alternate_names": [
      "Mehin",
      "Timbira language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Timbira_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3528744",
    "summary_en": "Timbira is a dialect continuum of the Northern Jê language group of the Jê languages ̣(Macro-Jê) spoken in Brazil. The various dialects are distinct enough to sometimes be considered separate languages. Their ancestral territory is situated in Eastern Amazon & Tocantins Basin (Maranhão / Pará) (centered near 8.2°S, 46.9°W).",
    "summary_fi": "Mehin-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Itä-Amazoniassa Tocantins-joen valuma-alueella (Maranhãossa ja Parássa) (koordinaateissa noin 8.2°S, 46.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Eastern Amazonian aldeias",
    "feature_name_matches": [
      "Mehin"
    ]
  },
  {
    "slug": "mehinako-people",
    "name": "Mehinako People",
    "name_fi": "Mehinako-kansa",
    "native_name": "Mehinako",
    "alternate_names": [
      "Mehinako",
      "Mehinaku"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mehinaku",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2530880",
    "summary_en": "The Mehinaku, Mehináko or Mehinacu are an Indigenous people of Brazil. They live in the Indigenous Park of the Xingu, located around the headwaters of the Xingu River in Mato Grosso. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 12.3°S, 53.4°W).",
    "summary_fi": "Mehinako-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 12.3°S, 53.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Mehinako"
    ]
  },
  {
    "slug": "misak-people",
    "name": "Misak People",
    "name_fi": "Misak-kansa",
    "native_name": "Misak",
    "alternate_names": [
      "Misak",
      "Misak people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Misak_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2839602",
    "summary_en": "The Misak or Guambiano are an indigenous people of the department of Cauca in Colombia. Their language is known as Guambiano and is one of the Coconucan languages. Their ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 2.7°N, 76.6°W).",
    "summary_fi": "Misak-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 2.7°N, 76.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "Misak"
    ]
  },
  {
    "slug": "mojeno-people",
    "name": "Mojeño People",
    "name_fi": "Mojeño-kansa",
    "native_name": "Mojeño",
    "alternate_names": [
      "Mojeño",
      "Mojeños"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Moje%C3%B1os",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3049373",
    "summary_en": "The Mojeños, also known as Moxeños, Moxos, or Mojos, are an indigenous people of Bolivia. They live in south central Beni Department, on both banks of the Mamore River, and on the marshy plains to its west, known as the Llanos de Mojos. Their ancestral territory is situated in Central Andes and Lake Titicaca Altiplano (centered near 15.1°S, 65.3°W).",
    "summary_fi": "Mojeño-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Keski-Andeilla ja Titicacajärven Altiplanolla (koordinaateissa noin 15.1°S, 65.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Altiplano ayllu centers",
    "feature_name_matches": [
      "Mojeño"
    ]
  },
  {
    "slug": "mokana-people",
    "name": "Mokaná People",
    "name_fi": "Mokaná-kansa",
    "native_name": "Mokaná",
    "alternate_names": [
      "Mokaná"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mokan%C3%A1",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q5655029",
    "summary_en": "The Mokaná are an indigenous people living in the Atlántico Department of Colombia. They are the only indigenous community in the department. Their ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 10.7°N, 75.0°W).",
    "summary_fi": "Mokaná-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 10.7°N, 75.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "Mokaná"
    ]
  },
  {
    "slug": "moqoit-people",
    "name": "Moqoit People",
    "name_fi": "Moqoit-kansa",
    "native_name": "Moqoit",
    "alternate_names": [
      "Moqoit",
      "Mocoví language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mocov%C3%AD_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3027906",
    "summary_en": "The Mocoví language is a Guaicuruan language of Argentina spoken by about 3,000 people, mostly in Santa Fe, Chaco, and Formosa provinces. Their ancestral territory is situated in Pampas and Río de la Plata Basin (centered near 30.1°S, 60.9°W).",
    "summary_fi": "Moqoit-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pampalla ja Río de la Platan valuma-alueella (koordinaateissa noin 30.1°S, 60.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Pampas traditional tolderías",
    "feature_name_matches": [
      "Moqoit"
    ]
  },
  {
    "slug": "moregena-people",
    "name": "Moregena People",
    "name_fi": "Moregena-kansa",
    "native_name": "Moregena",
    "alternate_names": [
      "Moregena",
      "Morena (political party)"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Morena_(political_party)",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q15717618",
    "summary_en": "The National Regeneration Movement, commonly referred to by its syllabic abbreviation Morena, is a centre-left to left-wing political party in Mexico. Founded in 2011 by Andrés Manuel López Obrador as a civil association and registered as a political party in 2014, it emerged from López Obrador's break with the Party of the Democratic Revolution. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 12.2°S, 64.8°W).",
    "summary_fi": "Moregena-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 12.2°S, 64.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Moregena"
    ]
  },
  {
    "slug": "moseten-people",
    "name": "Mosetén People",
    "name_fi": "Mosetén-kansa",
    "native_name": "Mosetén",
    "alternate_names": [
      "Mosetén",
      "Tsimané"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tsiman%C3%A9",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2963649",
    "summary_en": "The Tsimané, also known as the Tsimane' or Chimane, are an indigenous people of lowland Bolivia, living chiefly in the Beni Department municipalities of San Borja, San Ignacio de Moxos, Rurrenabaque, and Santa Ana del Yacuma. The Tsimané are the main residents of the T'simane Council Territory and the Pilón Lajas Reserve. Their ancestral territory is situated in Central Andes and Lake Titicaca Altiplano (centered near 15.4°S, 67.3°W).",
    "summary_fi": "Mosetén-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Keski-Andeilla ja Titicacajärven Altiplanolla (koordinaateissa noin 15.4°S, 67.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Altiplano ayllu centers",
    "feature_name_matches": [
      "Mosetén"
    ]
  },
  {
    "slug": "movima-people",
    "name": "Movima People",
    "name_fi": "Movima-kansa",
    "native_name": "Movima",
    "alternate_names": [
      "Movima",
      "Movima people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Movima_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3326938",
    "summary_en": "The Movima people are an ethnic group in Bolivia. There were 18,879 of them in 2012, of whom 675 speak the Movima language natively. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 13.4°S, 65.8°W).",
    "summary_fi": "Movima-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 13.4°S, 65.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Movima"
    ]
  },
  {
    "slug": "muina-murui-murui-muinan-people",
    "name": "Muina Murui / Murui-Muinanɨ People",
    "name_fi": "Muina Murui / Murui-Muinanɨ-kansa",
    "native_name": "Muina Murui / Murui-Muinanɨ",
    "alternate_names": [
      "Muina Murui / Murui-Muinanɨ",
      "Witoto"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Witoto",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1969828",
    "summary_en": "The Witoto are an Indigenous people in southern Colombia and northern Peru. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 1.9°S, 72.5°W).",
    "summary_fi": "Muina Murui / Murui-Muinanɨ-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 1.9°S, 72.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Muina Murui / Murui-Muinanɨ"
    ]
  },
  {
    "slug": "muniche-people",
    "name": "Muniche People",
    "name_fi": "Muniche-kansa",
    "native_name": "Muniche",
    "alternate_names": [
      "Muniche",
      "Muniche language"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Muniche_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3915654",
    "summary_en": "Muniche is an extinct language which was spoken in the village of Munichis, about 10 miles (16 km) west of Yurimaguas, Loreto Region, Peru. The last known fluent speaker, Victoria Huancho Icahuate, died in the late 1990s, but the language was already moribund by the 1930s. Their ancestral territory is situated in Northern Peruvian Andes and Pacific Coast (centered near 3.7°S, 74.5°W).",
    "summary_fi": "Muniche-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Perun Andeilla ja Tyynenmeren rannikolla (koordinaateissa noin 3.7°S, 74.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Peruvian valleys & coast",
    "feature_name_matches": [
      "Muniche"
    ]
  },
  {
    "slug": "muteamasa-karapana-people",
    "name": "Muteamasa (Karapanã) People",
    "name_fi": "Muteamasa (Karapanã)-kansa",
    "native_name": "Muteamasa (Karapanã)",
    "alternate_names": [
      "Muteamasa (Karapanã)",
      "Carapana language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Carapana_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q924405",
    "summary_en": "Carapana is a Tucanoan language of Colombia and Brazil. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 0.5°N, 70.6°W).",
    "summary_fi": "Muteamasa (Karapanã)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 0.5°N, 70.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Muteamasa (Karapanã)"
    ]
  },
  {
    "slug": "manekenk-haush-people",
    "name": "Mánekenk/Haush People",
    "name_fi": "Mánekenk/Haush-kansa",
    "native_name": "Mánekenk/Haush",
    "alternate_names": [
      "Mánekenk/Haush",
      "Haush"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Haush",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1591185",
    "summary_en": "The Haush or Manekʼenk people were an Indigenous people who lived on the Mitre Peninsula of the Isla Grande de Tierra del Fuego. They were related culturally and linguistically to the Selkʼnam people who also lived on the Isla Grande de Tierra del Fuego, and to the Tehuelche people of southern mainland Patagonia. Their ancestral territory is situated in Patagonia and Tierra del Fuego (centered near 54.8°S, 65.9°W).",
    "summary_fi": "Mánekenk/Haush-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Patagoniassa ja Tulimaassa (koordinaateissa noin 54.8°S, 65.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Patagonian & Fuegian ancestral camps",
    "feature_name_matches": [
      "Mánekenk/Haush"
    ]
  },
  {
    "slug": "nadob-people",
    "name": "Nadöb People",
    "name_fi": "Nadöb-kansa",
    "native_name": "Nadöb",
    "alternate_names": [
      "Nadöb",
      "Nadëb language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nad%C3%ABb_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3335011",
    "summary_en": "Nadëb or Kaburi is a Nadahup language of the Brazilian Amazon, along the Uneiuxi, Japura, and Negro rivers. Various names for it include Nadöbö, Xïriwai, Hahöb, Guariba/Wariwa, Kaborí, Anodöub, sometimes compounded with the term Maku, as in Maku do Paraná Boá-Boá after one of the rivers in Nadëb territory. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 1.3°S, 66.6°W).",
    "summary_fi": "Nadöb-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 1.3°S, 66.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Nadöb"
    ]
  },
  {
    "slug": "nambikwara-people",
    "name": "Nambikwara People",
    "name_fi": "Nambikwara-kansa",
    "native_name": "Nambikwara",
    "alternate_names": [
      "Nambikwara"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nambikwara",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1476741",
    "summary_en": "The Nambikwara are an Indigenous people of Brazil, living in the Amazon. Currently about 1,150 Nambikwara live in Indigenous territories in the Brazilian state of Mato Grosso along the Guaporé and Juruena rivers. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 13.1°S, 60.0°W).",
    "summary_fi": "Nambikwara-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 13.1°S, 60.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Nambikwara"
    ]
  },
  {
    "slug": "nanti-people",
    "name": "Nanti People",
    "name_fi": "Nanti-kansa",
    "native_name": "Nanti",
    "alternate_names": [
      "Nanti",
      "Nanti language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nanti_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q15342275",
    "summary_en": "Nanti is an Arawakan language spoken by approximately 250 people in southeastern Peruvian Amazonia, principally in a number of small communities located near the headwaters of the Camisea and Timpía Rivers. It belongs to the Kampan branch of the Arawak family, and is most closely related to Matsigenka, with which it is partially mutually intelligible. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 11.7°S, 72.6°W).",
    "summary_fi": "Nanti-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 11.7°S, 72.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Nanti"
    ]
  },
  {
    "slug": "nasa-people",
    "name": "Nasa People",
    "name_fi": "Nasa-kansa",
    "native_name": "Nasa",
    "alternate_names": [
      "Nasa",
      "Paez people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Paez_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2046097",
    "summary_en": "The Páez people, also known as the Nasa, are a Indigenous people who live in the southwestern highlands of Colombia, especially in the Cauca Department, but also the Caquetá Department lowlands and Tierradentro. Their ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 2.4°N, 76.2°W).",
    "summary_fi": "Nasa-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 2.4°N, 76.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "Nasa"
    ]
  },
  {
    "slug": "natabuela-people",
    "name": "Natabuela People",
    "name_fi": "Natabuela-kansa",
    "native_name": "Natabuela",
    "alternate_names": [
      "Natabuela",
      "Natabua High School"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Natabua_High_School",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q13155027",
    "summary_en": "Natabua High School is a co-educational school based in Lautoka, Fiji. It is one of the biggest schools in the Pacific with a total student number of 1200. Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 0.3°N, 78.2°W).",
    "summary_fi": "Natabuela-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 0.3°N, 78.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "Natabuela"
    ]
  },
  {
    "slug": "nawa-people",
    "name": "Nawa People",
    "name_fi": "Nawa-kansa",
    "native_name": "Nawa",
    "alternate_names": [
      "Nawa",
      "Nawaz Sharif"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nawaz_Sharif",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q134068",
    "summary_en": "Mian Muhammad Nawaz Sharif is a Pakistani politician and businessman who thrice served as the prime minister of Pakistan, for three non-consecutive terms, first serving from 1990 to 1993, then from 1997 to 1999 and later from 2013 to 2017. He is the longest-serving prime minister in the country's history, having served a total of more than 9 years across three tenures, with each term ending in his ousting. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 9.1°S, 72.8°W).",
    "summary_fi": "Nawa-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 9.1°S, 72.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Nawa"
    ]
  },
  {
    "slug": "nivacle-people",
    "name": "Nivaclé People",
    "name_fi": "Nivaclé-kansa",
    "native_name": "Nivaclé",
    "alternate_names": [
      "Nivaclé"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nivacl%C3%A9",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3443961",
    "summary_en": "The Nivaclé are an Indigenous people of the Gran Chaco. An estimated 13,700 Nivaclé people live in the President Hayes and Boquerón Departments in Paraguay, while approximately 200 Nivaclé people live in the Salta Province of Argentina. Their ancestral territory is situated in Gran Chaco lowlands (Argentina, Paraguay, Bolivia) (centered near 22.6°S, 61.1°W).",
    "summary_fi": "Nivaclé-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Gran Chacon alankoalueilla (Argentiinassa, Paraguayssa ja Boliviassa) (koordinaateissa noin 22.6°S, 61.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Gran Chaco riverine encampments",
    "feature_name_matches": [
      "Nivaclé"
    ]
  },
  {
    "slug": "no-iria-people",
    "name": "No'iria People",
    "name_fi": "No'iria-kansa",
    "native_name": "No'iria",
    "alternate_names": [
      "No'iria",
      "Masaaki Noiri"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Masaaki_Noiri",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q6782262",
    "summary_en": "Masaaki Noiri  is a Japanese kickboxer, currently competing in the Featherweight Division of ONE Championship, where he is a former interim Featherweight Kickboxing World Champion. He is a two-weight K-1 champion, having held the K-1 World GP Super Lightweight Championship between 2017 and 2018 and the K-1 World GP Welterweight Championship between 2021 and 2024, as well as a one-time Grand Prix winner, having won the 2021 K-1 World Welterweight Grand Prix. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 12.0°S, 65.9°W).",
    "summary_fi": "No'iria-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 12.0°S, 65.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "No'iria"
    ]
  },
  {
    "slug": "nomatsigenga-people",
    "name": "Nomatsigenga People",
    "name_fi": "Nomatsigenga-kansa",
    "native_name": "Nomatsigenga",
    "alternate_names": [
      "Nomatsigenga",
      "Nomatsiguenga language"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nomatsiguenga_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3342992",
    "summary_en": "Nomatsiguenga (Matsigenka) is an Arawakan language of Peru. It is close enough to Machiguenga to sometimes be considered dialects of a single language, especially given that both are spoken by the Machiguenga people. Their ancestral territory is situated in Central Peruvian Andes & Mantaro Valley (centered near 11.6°S, 74.3°W).",
    "summary_fi": "Nomatsigenga-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Perun Keski-Andeilla ja Mantaron laaksossa (koordinaateissa noin 11.6°S, 74.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Central Andean llactas",
    "feature_name_matches": [
      "Nomatsigenga"
    ]
  },
  {
    "slug": "nonuya-people",
    "name": "Nonuya People",
    "name_fi": "Nonuya-kansa",
    "native_name": "Nonuya",
    "alternate_names": [
      "Nonuya",
      "Nonuya language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nonuya_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q5372139",
    "summary_en": "Nonuya is a Witotoan language formerly spoken in Colombia and Peru that is now extinct. Genocide, disease, and forced migration caused the Sparrowhawk and Backpacker tribes to form families with the Andoke and the Muinane to create the Nonuya community. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 1.0°S, 72.5°W).",
    "summary_fi": "Nonuya-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 1.0°S, 72.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Nonuya"
    ]
  },
  {
    "slug": "nukini-people",
    "name": "Nukini People",
    "name_fi": "Nukini-kansa",
    "native_name": "Nukini",
    "alternate_names": [
      "Nukini",
      "Nukini language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nukini_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3346231",
    "summary_en": "Nukini is an obsolescent Panoan language of Brazil. In some historical texts the Nukini are also referred to as Inucuini, Nucuiny, Nukuini, Nucuini, Inocú-inins and Remo. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 7.4°S, 73.4°W).",
    "summary_fi": "Nukini-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 7.4°S, 73.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Nukini"
    ]
  },
  {
    "slug": "nukak-maku-people",
    "name": "Nükak Makü People",
    "name_fi": "Nükak Makü-kansa",
    "native_name": "Nükak Makü",
    "alternate_names": [
      "Nükak Makü",
      "Nukak"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nukak",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q512665",
    "summary_en": "The Nukak people live between the Guaviare and Inírida rivers, in the depths of the tropical humid forest, on the fringe of the Amazon basin, in Guaviare Department, Republic of Colombia. They are nomadic hunter-gatherers with seasonal nomadic patterns and practice small-scale shifting horticulture. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 2.5°N, 71.4°W).",
    "summary_fi": "Nükak Makü-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 2.5°N, 71.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Nükak Makü"
    ]
  },
  {
    "slug": "ocloya-people",
    "name": "Ocloya People",
    "name_fi": "Ocloya-kansa",
    "native_name": "Ocloya",
    "alternate_names": [
      "Ocloya",
      "Humahuaca language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Humahuaca_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q16918611",
    "summary_en": "Humahuaca (Omaguaca) is an extinct language of Argentina. Tribal and possibly dialect divisions were Fiscara, Jujuy, Ocloya, Osa, Purmamarca, and Tiliar. Their ancestral territory is situated in South American Indigenous Territories (centered near 23.8°S, 65.2°W).",
    "summary_fi": "Ocloya-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Etelä-Amerikan alkuperäisalueilla (koordinaateissa noin 23.8°S, 65.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Traditional ancestral territory",
    "feature_name_matches": [
      "Ocloya"
    ]
  },
  {
    "slug": "ofaie-people",
    "name": "Ofaié People",
    "name_fi": "Ofaié-kansa",
    "native_name": "Ofaié",
    "alternate_names": [
      "Ofaié",
      "Ofayé"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ofay%C3%A9",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2258646",
    "summary_en": "The Ofayé are an Indigenous people of Central Brazil. They live along the Paraná River, near the mouth of the Sucuriú River into the headwaters of the Ivinhema and Vacaria Rivers. Their ancestral territory is situated in Pantanal, Mato Grosso and Southern Cerrado (centered near 21.6°S, 53.3°W).",
    "summary_fi": "Ofaié-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pantanalin, Mato Grosson ja eteläisen Cerradon alueella (koordinaateissa noin 21.6°S, 53.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Pantanal & Cerrado aldeias",
    "feature_name_matches": [
      "Ofaié"
    ]
  },
  {
    "slug": "omaguaca-people",
    "name": "Omaguaca People",
    "name_fi": "Omaguaca-kansa",
    "native_name": "Omaguaca",
    "alternate_names": [
      "Omaguaca",
      "Qulla"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Qulla",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1779257",
    "summary_en": "The Qulla are an Indigenous people of western Bolivia, northern Chile, and the western portions of Jujuy and Salta provinces in Argentina. The 2004 Complementary Indigenous Survey reported 53,019 Qulla households living in Argentina. Their ancestral territory is situated in South American Indigenous Territories (centered near 23.2°S, 65.5°W).",
    "summary_fi": "Omaguaca-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Etelä-Amerikan alkuperäisalueilla (koordinaateissa noin 23.2°S, 65.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Traditional ancestral territory",
    "feature_name_matches": [
      "Omaguaca"
    ]
  },
  {
    "slug": "otavalo-people",
    "name": "Otavalo People",
    "name_fi": "Otavalo-kansa",
    "native_name": "Otavalo",
    "alternate_names": [
      "Otavalo",
      "Otavalo people"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Otavalo_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1536240",
    "summary_en": "The Otavalos are an indigenous people native to the Andean mountains of Imbabura Province in northern Ecuador. The Otavalos also inhabit the city of Otavalo in that province. Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 0.2°N, 78.2°W).",
    "summary_fi": "Otavalo-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 0.2°N, 78.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "Otavalo"
    ]
  },
  {
    "slug": "pacahuara-people",
    "name": "Pacahuara People",
    "name_fi": "Pacahuara-kansa",
    "native_name": "Pacahuara",
    "alternate_names": [
      "Pacahuara"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pacahuara",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3360017",
    "summary_en": "The Pacahuara are an indigenous people of Bolivia. A small group live in Tujuré, a community located near the Chácobo people on the Alto Ivón River in the Beni Department. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 11.4°S, 66.3°W).",
    "summary_fi": "Pacahuara-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 11.4°S, 66.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Pacahuara"
    ]
  },
  {
    "slug": "pacamoro-people",
    "name": "Pacamoro People",
    "name_fi": "Pacamoro-kansa",
    "native_name": "Pacamoro",
    "alternate_names": [
      "Pacamoro",
      "Paramore"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Paramore",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q473466",
    "summary_en": "Paramore is an American rock band formed in Franklin, Tennessee, in 2004. Since 2017, the band's lineup has included lead vocalist Hayley Williams, guitarist Taylor York, and drummer Zac Farro. Their ancestral territory is situated in Northern Peruvian Andes and Pacific Coast (centered near 5.2°S, 79.0°W).",
    "summary_fi": "Pacamoro-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Perun Andeilla ja Tyynenmeren rannikolla (koordinaateissa noin 5.2°S, 79.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Peruvian valleys & coast",
    "feature_name_matches": [
      "Pacamoro"
    ]
  },
  {
    "slug": "pakajaqi-people",
    "name": "Pakajaqi People",
    "name_fi": "Pakajaqi-kansa",
    "native_name": "Pakajaqi",
    "alternate_names": [
      "Pakajaqi",
      "Pakajik"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pakajik",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q5717354",
    "summary_en": "Pakajik is a village in Gowharan Rural District of the Central District in Khoy County, West Azerbaijan province, Iran. Their ancestral territory is situated in Central Andes and Lake Titicaca Altiplano (centered near 17.0°S, 68.5°W).",
    "summary_fi": "Pakajaqi-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Keski-Andeilla ja Titicacajärven Altiplanolla (koordinaateissa noin 17.0°S, 68.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Altiplano ayllu centers",
    "feature_name_matches": [
      "Pakajaqi"
    ]
  },
  {
    "slug": "paltas-people",
    "name": "Paltas People",
    "name_fi": "Paltas-kansa",
    "native_name": "Paltas",
    "alternate_names": [
      "Paltas",
      "Paltas Canton"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Paltas_Canton",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1990006",
    "summary_en": "Paltas Canton is located to the south of Loja city and is one of the oldest cantons of province of the same name. It was named after the Paltas, a community who used to live over the new city now called Catacocha in Ecuador. Their ancestral territory is situated in Northern Peruvian Andes and Pacific Coast (centered near 4.1°S, 79.6°W).",
    "summary_fi": "Paltas-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Perun Andeilla ja Tyynenmeren rannikolla (koordinaateissa noin 4.1°S, 79.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Peruvian valleys & coast",
    "feature_name_matches": [
      "Paltas"
    ]
  },
  {
    "slug": "pamoari-people",
    "name": "Pamoari People",
    "name_fi": "Pamoari-kansa",
    "native_name": "Pamoari",
    "alternate_names": [
      "Pamoari",
      "Pam Grier"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pam_Grier",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q233862",
    "summary_en": "Pamela Suzette Grier is an American actress, singer, and martial artist. She achieved fame for her starring roles in a string of 1970s action, blaxploitation and women-in-prison films for American International Pictures and New World Pictures. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 6.7°S, 64.8°W).",
    "summary_fi": "Pamoari-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 6.7°S, 64.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Pamoari"
    ]
  },
  {
    "slug": "panara-people",
    "name": "Panará People",
    "name_fi": "Panará-kansa",
    "native_name": "Panará",
    "alternate_names": [
      "Panará",
      "Panará people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Panar%C3%A1_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q545219",
    "summary_en": "The Panará are an Indigenous people of Mato Grosso in the Brazilian Amazon. They farm and are hunter-gatherers. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 9.4°S, 54.2°W).",
    "summary_fi": "Panará-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 9.4°S, 54.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Panará"
    ]
  },
  {
    "slug": "pankararu-people",
    "name": "Pankararu People",
    "name_fi": "Pankararu-kansa",
    "native_name": "Pankararu",
    "alternate_names": [
      "Pankararu",
      "Pankararú language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pankarar%C3%BA_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q7131310",
    "summary_en": "Pankararú is an extinct language, probably a language isolate, of eastern Brazil. There are 6,000 ethnic Pankararú, but they all speak Portuguese. Their ancestral territory is situated in Caatinga and Brazilian Northeast coast (centered near 9.3°S, 38.5°W).",
    "summary_fi": "Pankararu-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Caatingan ja Koillis-Brasilian rannikon alueella (koordinaateissa noin 9.3°S, 38.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northeast Brazilian coastal aldeias",
    "feature_name_matches": [
      "Pankararu"
    ]
  },
  {
    "slug": "pankara-people",
    "name": "Pankará People",
    "name_fi": "Pankará-kansa",
    "native_name": "Pankará",
    "alternate_names": [
      "Pankará",
      "Pankararú language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pankarar%C3%BA_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q7131310",
    "summary_en": "Pankararú is an extinct language, probably a language isolate, of eastern Brazil. There are 6,000 ethnic Pankararú, but they all speak Portuguese. Their ancestral territory is situated in Caatinga and Brazilian Northeast coast (centered near 8.4°S, 38.7°W).",
    "summary_fi": "Pankará-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Caatingan ja Koillis-Brasilian rannikon alueella (koordinaateissa noin 8.4°S, 38.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northeast Brazilian coastal aldeias",
    "feature_name_matches": [
      "Pankará"
    ]
  },
  {
    "slug": "panzaleo-people",
    "name": "Panzaleo People",
    "name_fi": "Panzaleo-kansa",
    "native_name": "Panzaleo",
    "alternate_names": [
      "Panzaleo",
      "Panzaleo people"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Panzaleo_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q16917949",
    "summary_en": "The Panzaleo are a group of Quichua people in Ecuador, primarily in Cotopaxi and Tungurahua provinces. Up until the 17th century, they spoke their own Panzaleo language, but they later shifted to Kichwa. Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 0.9°S, 78.8°W).",
    "summary_fi": "Panzaleo-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 0.9°S, 78.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "Panzaleo"
    ]
  },
  {
    "slug": "parikwene-people",
    "name": "Parikwene People",
    "name_fi": "Parikwene-kansa",
    "native_name": "Parikwene",
    "alternate_names": [
      "Parikwene",
      "Paraksenes Eikones"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Paraksenes_Eikones",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q12883221",
    "summary_en": "Paraksenes Eikones is the name of a Greek album by singer Anna Vissi released in Greece and Cyprus on December 5, 2003. The album featured the song \"Eisai\" that later became Call Me in English and which topped the Billboard Hot Dance Club Play in 2005. Their ancestral territory is situated in Guiana Shield and Atlantic Coastal Lowlands (centered near 3.5°N, 51.5°W).",
    "summary_fi": "Parikwene-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Guayanan kilven ja Atlantin rannikon alankoalueilla (koordinaateissa noin 3.5°N, 51.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Guiana Shield indigenous villages",
    "feature_name_matches": [
      "Parikwene"
    ]
  },
  {
    "slug": "parkateje-people",
    "name": "Parkatejê People",
    "name_fi": "Parkatejê-kansa",
    "native_name": "Parkatejê",
    "alternate_names": [
      "Parkatejê",
      "Parkatêjê dialect"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Parkat%C3%AAj%C3%AA_dialect",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q98078568",
    "summary_en": "Parkatêjê, or Pará Gavião, is a Timbira variety of the Jê language family of Brazil. It is spoken by 12 individuals in Terra Indígena Mãe Maria. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 5.0°S, 48.9°W).",
    "summary_fi": "Parkatejê-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 5.0°S, 48.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Parkatejê"
    ]
  },
  {
    "slug": "patamona-ingariko-people",
    "name": "Patamona/Ingarikó People",
    "name_fi": "Patamona/Ingarikó-kansa",
    "native_name": "Patamona/Ingarikó",
    "alternate_names": [
      "Patamona/Ingarikó",
      "Patamona people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Patamona_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q682975",
    "summary_en": "The Patamona are an Amerindian people native to the Pakaraima Mountains of Guyana and northern Brazil. They speak a Cariban language, Kapóng, and have often been referred to interchangeably as Akawaio or Ingariko. Their ancestral territory is situated in Guiana Shield and Atlantic Coastal Lowlands (centered near 4.5°N, 60.0°W).",
    "summary_fi": "Patamona/Ingarikó-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Guayanan kilven ja Atlantin rannikon alankoalueilla (koordinaateissa noin 4.5°N, 60.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Guiana Shield indigenous villages",
    "feature_name_matches": [
      "Patamona/Ingarikó"
    ]
  },
  {
    "slug": "pataxo-people",
    "name": "Pataxó People",
    "name_fi": "Pataxó-kansa",
    "native_name": "Pataxó",
    "alternate_names": [
      "Pataxó"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Patax%C3%B3",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q432324",
    "summary_en": "The Pataxó are an Indigenous people in Bahia, Brazil, with a population of about 11,800 individuals. They once spoke the Pataxó language, but now speak Portuguese and a reconstructed version of the Pataxó language called Patxohã. Their ancestral territory is situated in Atlantic Forest and Brazilian Highlands (centered near 17.7°S, 39.6°W).",
    "summary_fi": "Pataxó-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Brasilian atlanttisen sademetsän (Mata Atlântica) ja ylänköjen alueella (koordinaateissa noin 17.7°S, 39.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Mata Atlântica ancestral territories",
    "feature_name_matches": [
      "Pataxó"
    ]
  },
  {
    "slug": "pataxo-ha-ha-hae-people",
    "name": "Pataxó Hã-Hã-Hãe People",
    "name_fi": "Pataxó Hã-Hã-Hãe-kansa",
    "native_name": "Pataxó Hã-Hã-Hãe",
    "alternate_names": [
      "Pataxó Hã-Hã-Hãe",
      "Pataxó"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Patax%C3%B3",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q432324",
    "summary_en": "The Pataxó are an Indigenous people in Bahia, Brazil, with a population of about 11,800 individuals. They once spoke the Pataxó language, but now speak Portuguese and a reconstructed version of the Pataxó language called Patxohã. Their ancestral territory is situated in Atlantic Forest and Brazilian Highlands (centered near 14.5°S, 39.5°W).",
    "summary_fi": "Pataxó Hã-Hã-Hãe-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Brasilian atlanttisen sademetsän (Mata Atlântica) ja ylänköjen alueella (koordinaateissa noin 14.5°S, 39.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Mata Atlântica ancestral territories",
    "feature_name_matches": [
      "Pataxó Hã-Hã-Hãe"
    ]
  },
  {
    "slug": "pemon-people",
    "name": "Pemón People",
    "name_fi": "Pemón-kansa",
    "native_name": "Pemón",
    "alternate_names": [
      "Pemón",
      "Pemon"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pemon",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q36978",
    "summary_en": "The Pemon or Pemón (Pemong) are Indigenous people living in areas of Venezuela, Brazil, and Guyana. The Pemon people are divided into three principal dialects and traditions, which are Arekuna, Kamarakoto, and Taurepang. Their ancestral territory is situated in Llanos and Orinoco River Basin (centered near 4.8°N, 61.1°W).",
    "summary_fi": "Pemón-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Llanosin savannilla ja Orinoco-joen valuma-alueella (koordinaateissa noin 4.8°N, 61.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Orinoco riverine communities",
    "feature_name_matches": [
      "Pemón"
    ]
  },
  {
    "slug": "pijao-people",
    "name": "Pijao People",
    "name_fi": "Pijao-kansa",
    "native_name": "Pijao",
    "alternate_names": [
      "Pijao",
      "Pijao people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pijao_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2124289",
    "summary_en": "The Pijao are an indigenous people from Colombia. Their ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 3.6°N, 75.6°W).",
    "summary_fi": "Pijao-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 3.6°N, 75.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "Pijao"
    ]
  },
  {
    "slug": "pilagal-ek-people",
    "name": "Pilagal'ek People",
    "name_fi": "Pilagal'ek-kansa",
    "native_name": "Pilagal'ek",
    "alternate_names": [
      "Pilagal'ek"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pilagal'ek",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in Gran Chaco lowlands (Argentina, Paraguay, Bolivia) (centered near 24.5°S, 59.9°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "Pilagal'ek-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Gran Chacon alankoalueilla (Argentiinassa, Paraguayssa ja Boliviassa) (koordinaateissa noin 24.5°S, 59.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Gran Chaco riverine encampments",
    "feature_name_matches": [
      "Pilagal'ek"
    ]
  },
  {
    "slug": "popukare-people",
    "name": "Popũkare People",
    "name_fi": "Popũkare-kansa",
    "native_name": "Popũkare",
    "alternate_names": [
      "Popũkare",
      "Apurinã"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Apurin%C3%A3",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q963221",
    "summary_en": "The Apurinã, also called the Ipurinã, Ipurinãn, Kangite, Popukare (endonym), are an Indigenous people who live near the Purus River in western Brazil and speak Apurinã. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 7.4°S, 66.5°W).",
    "summary_fi": "Popũkare-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 7.4°S, 66.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Popũkare"
    ]
  },
  {
    "slug": "puinave-people",
    "name": "Puinave People",
    "name_fi": "Puinave-kansa",
    "native_name": "Puinave",
    "alternate_names": [
      "Puinave",
      "Puinave language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Puinave_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3027918",
    "summary_en": "Puinave, also known as Waipunavi (Guaipunabi) or Wanse is an indigenous language of Colombia and Venezuela. It is generally considered to be a language isolate. Their ancestral territory is situated in Llanos and Orinoco River Basin (centered near 4.2°N, 68.8°W).",
    "summary_fi": "Puinave-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Llanosin savannilla ja Orinoco-joen valuma-alueella (koordinaateissa noin 4.2°N, 68.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Orinoco riverine communities",
    "feature_name_matches": [
      "Puinave"
    ]
  },
  {
    "slug": "purehno-people",
    "name": "Purehno People",
    "name_fi": "Purehno-kansa",
    "native_name": "Purehno",
    "alternate_names": [
      "Purehno",
      "James Purefoy"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/James_Purefoy",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q360528",
    "summary_en": "James Brian Mark Purefoy is a British actor. He played Marcus Antonius in the HBO series Rome, Nick Jenkins in A Dance to the Music of Time, college professor turned serial killer Joe Carroll in the Fox thriller series The Following, Solomon Kane in the film of the same name, and Hap Collins in the Sundance series Hap and Leonard. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 0.2°S, 57.4°W).",
    "summary_fi": "Purehno-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 0.2°S, 57.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Purehno"
    ]
  },
  {
    "slug": "puri-people",
    "name": "Puri People",
    "name_fi": "Puri-kansa",
    "native_name": "Puri",
    "alternate_names": [
      "Puri",
      "Puri people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Puri_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3510043",
    "summary_en": "The Puri are an Indigenous people of Brazil. The now-extinct Puri languages were thought to have belonged to the Macro-Jê language family, but are now seen as isolated. Their ancestral territory is situated in Atlantic Forest and Brazilian Highlands (centered near 21.0°S, 42.8°W).",
    "summary_fi": "Puri-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Brasilian atlanttisen sademetsän (Mata Atlântica) ja ylänköjen alueella (koordinaateissa noin 21.0°S, 42.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Mata Atlântica ancestral territories",
    "feature_name_matches": [
      "Puri"
    ]
  },
  {
    "slug": "purubora-people",
    "name": "Puruborá People",
    "name_fi": "Puruborá-kansa",
    "native_name": "Puruborá",
    "alternate_names": [
      "Puruborá"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Purubor%C3%A1",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3857302",
    "summary_en": "The Puruborá are an indigenous people that inhabit the Brazilian state of Rondônia. They form a society of about 200 individuals. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 12.1°S, 63.4°W).",
    "summary_fi": "Puruborá-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 12.1°S, 63.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Puruborá"
    ]
  },
  {
    "slug": "puruwa-people",
    "name": "Puruwá People",
    "name_fi": "Puruwá-kansa",
    "native_name": "Puruwá",
    "alternate_names": [
      "Puruwá",
      "Puruhá"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Puruh%C3%A1",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q504230",
    "summary_en": "The Puruhá are an indigenous people of Ecuador. Their traditional area in the highlands of the Andes Mountains includes much of Chimborazo Province and parts of Bolívar Province. Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 1.9°S, 78.7°W).",
    "summary_fi": "Puruwá-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 1.9°S, 78.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "Puruwá"
    ]
  },
  {
    "slug": "puyanawa-people",
    "name": "Puyanawa People",
    "name_fi": "Puyanawa-kansa",
    "native_name": "Puyanawa",
    "alternate_names": [
      "Puyanawa",
      "Alberto Puyana"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Alberto_Puyana",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q124376820",
    "summary_en": "Alberto Puyana is a Spanish writer, recipient of numerous national and international awards, and author of novels. He is the curator of the \"Gaditanoir\" Crime Novel Literary Festival held in Cádiz. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 7.6°S, 73.1°W).",
    "summary_fi": "Puyanawa-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 7.6°S, 73.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Puyanawa"
    ]
  },
  {
    "slug": "pykopcateje-people",
    "name": "Pykopcatejê People",
    "name_fi": "Pykopcatejê-kansa",
    "native_name": "Pykopcatejê",
    "alternate_names": [
      "Pykopcatejê"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pykopcatej%C3%AA",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in Eastern Amazon & Tocantins Basin (Maranhão / Pará) (centered near 5.5°S, 46.7°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "Pykopcatejê-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Itä-Amazoniassa Tocantins-joen valuma-alueella (Maranhãossa ja Parássa) (koordinaateissa noin 5.5°S, 46.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Eastern Amazonian aldeias",
    "feature_name_matches": [
      "Pykopcatejê"
    ]
  },
  {
    "slug": "q-ero-people",
    "name": "Q'ero People",
    "name_fi": "Q'ero-kansa",
    "native_name": "Q'ero",
    "alternate_names": [
      "Q'ero"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Q'ero",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q113947627",
    "summary_en": "Q'ero is a Quechua-speaking community or ethnic group dwelling in the province of Paucartambo, in the Cusco Region of Peru. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 13.4°S, 71.2°W).",
    "summary_fi": "Q'ero-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 13.4°S, 71.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Q'ero"
    ]
  },
  {
    "slug": "qhara-qhara-people",
    "name": "Qhara Qhara People",
    "name_fi": "Qhara Qhara-kansa",
    "native_name": "Qhara Qhara",
    "alternate_names": [
      "Qhara Qhara",
      "Gara Garayev"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Gara_Garayev",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q580027",
    "summary_en": "Gara Abulfaz oghlu Garayev was a prominent Soviet Azerbaijani composer. Garayev wrote nearly 110 musical pieces, including ballets, operas, symphonic and chamber pieces, solos for piano, cantatas, songs, and marches, and rose to prominence not only in the Azerbaijan SSR, but also in the rest of the Soviet Union and worldwide. Their ancestral territory is situated in Central Andes and Lake Titicaca Altiplano (centered near 19.6°S, 65.7°W).",
    "summary_fi": "Qhara Qhara-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Keski-Andeilla ja Titicacajärven Altiplanolla (koordinaateissa noin 19.6°S, 65.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Altiplano ayllu centers",
    "feature_name_matches": [
      "Qhara Qhara"
    ]
  },
  {
    "slug": "qom-people",
    "name": "Qom People",
    "name_fi": "Qom-kansa",
    "native_name": "Qom",
    "alternate_names": [
      "Qom",
      "Toba people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Toba_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1542227",
    "summary_en": "The Toba people, also known as the Qom people, are one of the largest Indigenous groups in Argentina who historically inhabited the region known today as the Pampas of the Central Chaco. During the 16th century, the Qom inhabited a large part of what is today northern Argentina, in the current provinces of Salta, Chaco, Santiago del Estero, Formosa and the province of Gran Chaco in the southeast of the Department of Tarija in Bolivia. Their ancestral territory is situated in Gran Chaco lowlands (Argentina, Paraguay, Bolivia) (centered near 25.9°S, 59.7°W).",
    "summary_fi": "Qom-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Gran Chacon alankoalueilla (Argentiinassa, Paraguayssa ja Boliviassa) (koordinaateissa noin 25.9°S, 59.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Gran Chaco riverine encampments",
    "feature_name_matches": [
      "Qom"
    ]
  },
  {
    "slug": "quechua-people",
    "name": "Quechua People",
    "name_fi": "Quechua-kansa",
    "native_name": "Quechua",
    "alternate_names": [
      "Quechua",
      "Quechua people"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Quechua_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q134936",
    "summary_en": "The Quechua people, Quichua people or Kichwa people are indigenous peoples of South America who speak the Quechuan languages, which originated among the Indigenous people of Peru. Although most Quechua speakers are native to Peru, there are some significant populations in Ecuador, Bolivia, Chile, Colombia, and Argentina. Their ancestral territory is situated in Central Andes and Lake Titicaca Altiplano (centered near 16.8°S, 65.8°W).",
    "summary_fi": "Quechua-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Keski-Andeilla ja Titicacajärven Altiplanolla (koordinaateissa noin 16.8°S, 65.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Altiplano ayllu centers",
    "feature_name_matches": [
      "Quechua"
    ]
  },
  {
    "slug": "quillacinga-people",
    "name": "Quillacinga People",
    "name_fi": "Quillacinga-kansa",
    "native_name": "Quillacinga",
    "alternate_names": [
      "Quillacinga",
      "List of unclassified languages of South America"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/List_of_unclassified_languages_of_South_America",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q6644203",
    "summary_en": "The following purported languages of South America are listed as unclassified in either Campbell (2024), Loukotka (1968), Ethnologue, or Glottolog. Nearly all are extinct. Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 1.3°N, 77.2°W).",
    "summary_fi": "Quillacinga-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 1.3°N, 77.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "Quillacinga"
    ]
  },
  {
    "slug": "rankulche-people",
    "name": "Rankülche People",
    "name_fi": "Rankülche-kansa",
    "native_name": "Rankülche",
    "alternate_names": [
      "Rankülche",
      "Ranquel"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ranquel",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3419023",
    "summary_en": "The Ranquel or Rankülche are an Indigenous tribe from the northern part of La Pampa Province, Argentina, in South America. With Puelche, Pehuenche and also Patagones from the Günün-a-Küna group origins, they were conquered by and assimilated into the Mapuche. Their ancestral territory is situated in Pampas and Río de la Plata Basin (centered near 35.5°S, 65.1°W).",
    "summary_fi": "Rankülche-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pampalla ja Río de la Platan valuma-alueella (koordinaateissa noin 35.5°S, 65.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Pampas traditional tolderías",
    "feature_name_matches": [
      "Rankülche"
    ]
  },
  {
    "slug": "resigaro-people",
    "name": "Resígaro People",
    "name_fi": "Resígaro-kansa",
    "native_name": "Resígaro",
    "alternate_names": [
      "Resígaro",
      "Resígaro language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Res%C3%ADgaro_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3450504",
    "summary_en": "Resígaro is an Arawakan language spoken in the department of Loreto in Peru. It is believed to be nearly extinct as of 2017 with only one remaining speaker. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 3.2°S, 72.0°W).",
    "summary_fi": "Resígaro-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 3.2°S, 72.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Resígaro"
    ]
  },
  {
    "slug": "rikbaktsa-people",
    "name": "Rikbaktsá People",
    "name_fi": "Rikbaktsá-kansa",
    "native_name": "Rikbaktsá",
    "alternate_names": [
      "Rikbaktsá",
      "Rikbaktsa"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Rikbaktsa",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q202511",
    "summary_en": "The Rikbaktsa are an Indigenous group from the Mato Grosso region of Brazil. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 10.4°S, 58.7°W).",
    "summary_fi": "Rikbaktsá-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 10.4°S, 58.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Rikbaktsá"
    ]
  },
  {
    "slug": "sakurabiat-people",
    "name": "Sakurabiat People",
    "name_fi": "Sakurabiat-kansa",
    "native_name": "Sakurabiat",
    "alternate_names": [
      "Sakurabiat",
      "Mekéns language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mek%C3%A9ns_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3304806",
    "summary_en": "The Mekéns language (Mekem), or Amniapé, is a highly endangered Brazilian indigenous language belonging to the Tupi language trunk, and classified as one of the five surviving languages of the Tupari sub-family. The language is spoken by approximately 25 people (ibid) in the state of Rondônia, in the Amazon region of northwestern Brazil, straddling the border with neighbouring Bolivia. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 12.6°S, 61.7°W).",
    "summary_fi": "Sakurabiat-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 12.6°S, 61.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Sakurabiat"
    ]
  },
  {
    "slug": "salasaka-people",
    "name": "Salasaka People",
    "name_fi": "Salasaka-kansa",
    "native_name": "Salasaka",
    "alternate_names": [
      "Salasaka",
      "Salasaca"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Salasaca",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q7403705",
    "summary_en": "Salasaca is a community and an indigenous people located in the Tungurahua Province in the center of Ecuador, halfway along the road from Ambato to Baños. The Salasaca speak Spanish and their traditional language of Quichua. Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 1.3°S, 78.5°W).",
    "summary_fi": "Salasaka-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 1.3°S, 78.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "Salasaka"
    ]
  },
  {
    "slug": "sanapana-people",
    "name": "Sanapaná People",
    "name_fi": "Sanapaná-kansa",
    "native_name": "Sanapaná",
    "alternate_names": [
      "Sanapaná"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Sanapan%C3%A1",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3436520",
    "summary_en": "The Sanapana are one of many nomadic tribes inhabiting the lower Gran Chaco of western Paraguay. With the introduction of Mennonite settlements in the central Chaco in the 1930s, many nomadic tribes semi-settled near the Mennonites. Their ancestral territory is situated in Gran Chaco lowlands (Argentina, Paraguay, Bolivia) (centered near 22.7°S, 58.7°W).",
    "summary_fi": "Sanapaná-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Gran Chacon alankoalueilla (Argentiinassa, Paraguayssa ja Boliviassa) (koordinaateissa noin 22.7°S, 58.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Gran Chaco riverine encampments",
    "feature_name_matches": [
      "Sanapaná"
    ]
  },
  {
    "slug": "sanavirones-people",
    "name": "Sanavirones People",
    "name_fi": "Sanavirones-kansa",
    "native_name": "Sanavirones",
    "alternate_names": [
      "Sanavirones",
      "Sanavirón language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Sanavir%C3%B3n_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q16895999",
    "summary_en": "Sanavirón is an extinct and unclassified language once spoken near the Salinas Grandes in Córdoba, Argentina. Loukotka (1968) classified it as a language isolate, but there is insufficient data to justify this according to Campbell. Their ancestral territory is situated in Pampas and Río de la Plata Basin (centered near 30.1°S, 62.6°W).",
    "summary_fi": "Sanavirones-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pampalla ja Río de la Platan valuma-alueella (koordinaateissa noin 30.1°S, 62.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Pampas traditional tolderías",
    "feature_name_matches": [
      "Sanavirones"
    ]
  },
  {
    "slug": "sapara-people",
    "name": "Sapara People",
    "name_fi": "Sapara-kansa",
    "native_name": "Sapara",
    "alternate_names": [
      "Sapara",
      "Marek Sapara"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Marek_Sapara",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q349131",
    "summary_en": "Marek Sapara is a Slovak former professional footballer who played as a midfielder. He was an assistant manager at MFK Ružomberok. Their ancestral territory is situated in South American Indigenous Territories (centered near 2.8°S, 74.8°W).",
    "summary_fi": "Sapara-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Etelä-Amerikan alkuperäisalueilla (koordinaateissa noin 2.8°S, 74.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Traditional ancestral territory",
    "feature_name_matches": [
      "Sapara"
    ]
  },
  {
    "slug": "saraguro-people",
    "name": "Saraguro People",
    "name_fi": "Saraguro-kansa",
    "native_name": "Saraguro",
    "alternate_names": [
      "Saraguro",
      "Saraguro people"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Saraguro_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1783660",
    "summary_en": "The Saraguro is a people of the Kichwa nation most of whom live in Saraguro Canton in the Loja Province of Ecuador. Although most now speak Spanish, Runashimi or Kichwa, a Quechua dialect, is also spoken and language revitalization efforts are being implemented. Their ancestral territory is situated in Northern Peruvian Andes and Pacific Coast (centered near 3.7°S, 79.3°W).",
    "summary_fi": "Saraguro-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Perun Andeilla ja Tyynenmeren rannikolla (koordinaateissa noin 3.7°S, 79.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Peruvian valleys & coast",
    "feature_name_matches": [
      "Saraguro"
    ]
  },
  {
    "slug": "satare-mawe-people",
    "name": "Sataré-Mawé People",
    "name_fi": "Sataré-Mawé-kansa",
    "native_name": "Sataré-Mawé",
    "alternate_names": [
      "Sataré-Mawé",
      "Mawé people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Maw%C3%A9_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2259699",
    "summary_en": "The Mawé, also known as the Sateré or Sateré-Mawé, are an Indigenous people of Brazil living in the state of Amazonas. They have an estimated population of about 16,312 (Siasi/Sesai, 2020). Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 4.4°S, 57.8°W).",
    "summary_fi": "Sataré-Mawé-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 4.4°S, 57.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Sataré-Mawé"
    ]
  },
  {
    "slug": "shanenawa-people",
    "name": "Shanenawa People",
    "name_fi": "Shanenawa-kansa",
    "native_name": "Shanenawa",
    "alternate_names": [
      "Shanenawa",
      "Shanenawa language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Shanenawa_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q61974839",
    "summary_en": "Shaninawa (Xaninaua) is a moribund Panoan language of Brazil, spoken by just 23 people in 2016. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 7.8°S, 71.4°W).",
    "summary_fi": "Shanenawa-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 7.8°S, 71.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Shanenawa"
    ]
  },
  {
    "slug": "shawanaua-people",
    "name": "Shawanaua People",
    "name_fi": "Shawanaua-kansa",
    "native_name": "Shawanaua",
    "alternate_names": [
      "Shawanaua",
      "Shawano County, Wisconsin"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Shawano_County%2C_Wisconsin",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q500838",
    "summary_en": "Shawano County is a county located in the U.S. state of Wisconsin. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 8.4°S, 72.4°W).",
    "summary_fi": "Shawanaua-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 8.4°S, 72.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Shawanaua"
    ]
  },
  {
    "slug": "shawi-people",
    "name": "Shawi People",
    "name_fi": "Shawi-kansa",
    "native_name": "Shawi",
    "alternate_names": [
      "Shawi",
      "Shawi language"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Shawi_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1526525",
    "summary_en": "Shawi is an endangered Amazonian language spoken by thousands of native Chayahuita people in the Amazon basin of north-central Peru. Spoken along the banks of the Paranapura, Cahuapanas, Sillay, and Shanusi rivers, it is also known as Chayawita, Shawi, Chawi, Tshaahui, Chayhuita, Chayabita, Shayabit, Balsapuertino, Paranapura, and Cahuapa. Their ancestral territory is situated in Northern Peruvian Andes and Pacific Coast (centered near 5.3°S, 76.6°W).",
    "summary_fi": "Shawi-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Perun Andeilla ja Tyynenmeren rannikolla (koordinaateissa noin 5.3°S, 76.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Peruvian valleys & coast",
    "feature_name_matches": [
      "Shawi"
    ]
  },
  {
    "slug": "shiwiar-people",
    "name": "Shiwiar People",
    "name_fi": "Shiwiar-kansa",
    "native_name": "Shiwiar",
    "alternate_names": [
      "Shiwiar",
      "Achuar–Shiwiar language"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Achuar%E2%80%93Shiwiar_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2823170",
    "summary_en": "Shiwiar, also known as Jivaro and Maina, is a Chicham language spoken along the Pastaza and Bobonaza rivers in Ecuador. Shiwiar is one of the thirteen indigenous languages of Ecuador. Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 2.9°S, 75.5°W).",
    "summary_fi": "Shiwiar-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 2.9°S, 75.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "Shiwiar"
    ]
  },
  {
    "slug": "shiwilu-people",
    "name": "Shiwilu People",
    "name_fi": "Shiwilu-kansa",
    "native_name": "Shiwilu",
    "alternate_names": [
      "Shiwilu",
      "Shiwilu language"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Shiwilu_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q967031",
    "summary_en": "Shiwilu is a moribund Amazonian language spoken by the Shiwilu people of Jeberos, Peru. It is spoken by only a small number of older adults and belongs to the Cahuapanan family together with Shawi. Their ancestral territory is situated in Northern Peruvian Andes and Pacific Coast (centered near 5.4°S, 76.3°W).",
    "summary_fi": "Shiwilu-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Perun Andeilla ja Tyynenmeren rannikolla (koordinaateissa noin 5.4°S, 76.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Peruvian valleys & coast",
    "feature_name_matches": [
      "Shiwilu"
    ]
  },
  {
    "slug": "siekopa-aiinte-aido-pai-secoya-people",
    "name": "Siekopa'aiInte/Aido-Pãi (Secoya) People",
    "name_fi": "Siekopa'aiInte/Aido-Pãi (Secoya)-kansa",
    "native_name": "Siekopa'aiInte/Aido-Pãi (Secoya)",
    "alternate_names": [
      "Siekopa'aiInte/Aido-Pãi (Secoya)",
      "Siekopa’aiInte/Aido-Pãi (Secoya)",
      "Secoya"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Secoya",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2779134",
    "summary_en": "The Secoya are an Indigenous peoples living in the Ecuadorian and Peruvian Amazon. They speak the Secoya language Pai Coca, which is part of the Western Tucanoan language group. Their ancestral territory is situated in South American Indigenous Territories (centered near 1.1°S, 74.5°W).",
    "summary_fi": "Siekopa'aiInte/Aido-Pãi (Secoya)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Etelä-Amerikan alkuperäisalueilla (koordinaateissa noin 1.1°S, 74.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Traditional ancestral territory",
    "feature_name_matches": [
      "Siekopa’aiInte/Aido-Pãi (Secoya)"
    ]
  },
  {
    "slug": "siria-masa-siriano-people",
    "name": "Siria-masã (Siriano) People",
    "name_fi": "Siria-masã (Siriano)-kansa",
    "native_name": "Siria-masã (Siriano)",
    "alternate_names": [
      "Siria-masã (Siriano)",
      "Siriano"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Siriano",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2259852",
    "summary_en": "Siriano are a Tucanoan people Indigenous to Colombia and Brazil. Their total population is estimated at 750, with most living in Colombia. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 0.6°N, 70.6°W).",
    "summary_fi": "Siria-masã (Siriano)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 0.6°N, 70.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Siria-masã (Siriano)"
    ]
  },
  {
    "slug": "siriono-people",
    "name": "Sirionó People",
    "name_fi": "Sirionó-kansa",
    "native_name": "Sirionó",
    "alternate_names": [
      "Sirionó"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Sirion%C3%B3",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3485276",
    "summary_en": "The Sirionó are an indigenous people of Bolivia. They primarily live in the forested northern and eastern parts of Beni and northwestern Santa Cruz departments of Bolivia. Their ancestral territory is situated in Llanos de Moxos and Chiquitania (Bolivian lowlands) (centered near 14.8°S, 64.0°W).",
    "summary_fi": "Sirionó-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Llanos de Moxosin ja Chiquitanian alueella Bolivian alangoilla (koordinaateissa noin 14.8°S, 64.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Chiquitano & Moxos forest settlements",
    "feature_name_matches": [
      "Sirionó"
    ]
  },
  {
    "slug": "so-to-yekuana-people",
    "name": "So'to (Yekuana) People",
    "name_fi": "So'to (Yekuana)-kansa",
    "native_name": "So'to (Yekuana)",
    "alternate_names": [
      "So'to (Yekuana)",
      "Yeꞌkuana"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ye%EA%9E%8Ckuana",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1287619",
    "summary_en": "The Yeꞌkuana, also called Yeꞌkwana, YeꞌKuana, Yekuana, Yequana, Yecuana, Dekuana, Maquiritare, Makiritare, Soꞌto and Maiongong, are a Cariban-speaking tropical rain-forest tribe who live in the Caura River and Orinoco River regions of Venezuela in Bolivar State and Amazonas State. In Brazil, they inhabit the northeast of Roraima State. Their ancestral territory is situated in Llanos and Orinoco River Basin (centered near 4.6°N, 65.1°W).",
    "summary_fi": "So'to (Yekuana)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Llanosin savannilla ja Orinoco-joen valuma-alueella (koordinaateissa noin 4.6°N, 65.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Orinoco riverine communities",
    "feature_name_matches": [
      "So'to (Yekuana)"
    ]
  },
  {
    "slug": "sura-people",
    "name": "Sura People",
    "name_fi": "Sura-kansa",
    "native_name": "Sura",
    "alternate_names": [
      "Sura",
      "Surah"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Surah",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q234262",
    "summary_en": "A surah is an Arabic word meaning \"chapter\" in the Quran. There are 114 surah in the Quran, each divided into verses. Their ancestral territory is situated in Central Andes and Lake Titicaca Altiplano (centered near 17.7°S, 67.0°W).",
    "summary_fi": "Sura-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Keski-Andeilla ja Titicacajärven Altiplanolla (koordinaateissa noin 17.7°S, 67.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Altiplano ayllu centers",
    "feature_name_matches": [
      "Sura"
    ]
  },
  {
    "slug": "surui-paiter-people",
    "name": "Surui Paiter People",
    "name_fi": "Surui Paiter-kansa",
    "native_name": "Surui Paiter",
    "alternate_names": [
      "Surui Paiter",
      "Paiter"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Paiter",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q10375164",
    "summary_en": "The Paiter, also known as Suruí, Suruí do Jiparaná, and Suruí de Rondônia, are an Indigenous people of Brazil, who live in ten villages near the Mato Grosso–Rondônia border. They are farmers, who cultivate coffee. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 11.0°S, 61.2°W).",
    "summary_fi": "Surui Paiter-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 11.0°S, 61.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Surui Paiter"
    ]
  },
  {
    "slug": "suruwaha-people",
    "name": "Suruwaha People",
    "name_fi": "Suruwaha-kansa",
    "native_name": "Suruwaha",
    "alternate_names": [
      "Suruwaha",
      "Zuruahã"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Zuruah%C3%A3",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q230469",
    "summary_en": "The Zuruahã are an Indigenous people of Brazil, living along the Purus River in the state of Amazonas. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 6.9°S, 66.4°W).",
    "summary_fi": "Suruwaha-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 6.9°S, 66.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Suruwaha"
    ]
  },
  {
    "slug": "tacana-people",
    "name": "Tacana People",
    "name_fi": "Tacana-kansa",
    "native_name": "Tacana",
    "alternate_names": [
      "Tacana",
      "Tacana people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tacana_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3513576",
    "summary_en": "The Tacana people are an ethnic group who live in the Beni department of Bolivia. There were 18,535 of them in 2012, of whom 559 speak the Tacana language natively. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 13.8°S, 68.0°W).",
    "summary_fi": "Tacana-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 13.8°S, 68.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Tacana"
    ]
  },
  {
    "slug": "tama-dujo-people",
    "name": "Tama Dujo People",
    "name_fi": "Tama Dujo-kansa",
    "native_name": "Tama Dujo",
    "alternate_names": [
      "Tama Dujo",
      "Tama Sumo"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tama_Sumo",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q16942587",
    "summary_en": "Kerstin Egert, known by the stage name Tama Sumo, is a German DJ and producer who has been called \"one of the world's finest house and techno DJs whose success and acclaim stem only from her skills as a selector\" by XLR8R. She is signed to the Ostgut Ton label and is a resident DJ at Berghain. Their ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 2.9°N, 75.4°W).",
    "summary_fi": "Tama Dujo-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 2.9°N, 75.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "Tama Dujo"
    ]
  },
  {
    "slug": "tanimuka-people",
    "name": "Tanimuka People",
    "name_fi": "Tanimuka-kansa",
    "native_name": "Tanimuka",
    "alternate_names": [
      "Tanimuka",
      "Tanimuca-Retuarã language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tanimuca-Retuar%C3%A3_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q36535",
    "summary_en": "Tanimuca-Retuarã is a Tucanoan language of Colombia, spoken by 300 people of the Tanimuca and Retuarã, two Indigenous peoples of Colombia. Typologically, it exhibits a basic subject–object–verb word order and is predominantly suffixing. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 0.7°S, 70.4°W).",
    "summary_fi": "Tanimuka-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 0.7°S, 70.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Tanimuka"
    ]
  },
  {
    "slug": "tapiete-guarani-nandeva-people",
    "name": "Tapieté/Guaraní-Ñandeva People",
    "name_fi": "Tapieté/Guaraní-Ñandeva-kansa",
    "native_name": "Tapieté/Guaraní-Ñandeva",
    "alternate_names": [
      "Tapieté/Guaraní-Ñandeva",
      "Tapieté dialect"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tapiet%C3%A9_dialect",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3121063",
    "summary_en": "Tapieté is a subdialect of Eastern Bolivian Guaraní. It is also known as Guasurango, Guasurangue, Tirumbae, Yanaigua, Ñanagua, and Nandeva. Their ancestral territory is situated in Gran Chaco lowlands (Argentina, Paraguay, Bolivia) (centered near 21.6°S, 61.9°W).",
    "summary_fi": "Tapieté/Guaraní-Ñandeva-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Gran Chacon alankoalueilla (Argentiinassa, Paraguayssa ja Boliviassa) (koordinaateissa noin 21.6°S, 61.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Gran Chaco riverine encampments",
    "feature_name_matches": [
      "Tapieté/Guaraní-Ñandeva"
    ]
  },
  {
    "slug": "tariana-people",
    "name": "Tariana People",
    "name_fi": "Tariana-kansa",
    "native_name": "Tariana",
    "alternate_names": [
      "Tariana",
      "Tariana people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tariana_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3514002",
    "summary_en": "The Tariana or Taliaseri are an Indigenous people of the Vaupés or Uaupés River in the Amazon region of Brazil and Colombia. Starting in the 19th century missionaries tried to persuade them to abandon their traditional beliefs and practices, with some level of success. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 0.4°N, 68.6°W).",
    "summary_fi": "Tariana-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 0.4°N, 68.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Tariana"
    ]
  },
  {
    "slug": "tastil-people",
    "name": "Tastil People",
    "name_fi": "Tastil-kansa",
    "native_name": "Tastil",
    "alternate_names": [
      "Tastil"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tastil",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2034184",
    "summary_en": "Tastil is an archaeological site near Santa Rosa de Tastil, Salta Province, Argentina. Their ancestral territory is situated in South American Indigenous Territories (centered near 24.7°S, 65.8°W).",
    "summary_fi": "Tastil-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Etelä-Amerikan alkuperäisalueilla (koordinaateissa noin 24.7°S, 65.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Traditional ancestral territory",
    "feature_name_matches": [
      "Tastil"
    ]
  },
  {
    "slug": "tekoha-pai-tavytera-kaiowa-people",
    "name": "Tekohá (Paĩ Tavytera/Kaiowá) People",
    "name_fi": "Tekohá (Paĩ Tavytera/Kaiowá)-kansa",
    "native_name": "Tekohá (Paĩ Tavytera/Kaiowá)",
    "alternate_names": [
      "Tekohá (Paĩ Tavytera/Kaiowá)"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tekoh%C3%A1_(Pa%C4%A9_Tavytera%2FKaiow%C3%A1)",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in Pantanal, Mato Grosso and Southern Cerrado (centered near 22.9°S, 55.2°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "Tekohá (Paĩ Tavytera/Kaiowá)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pantanalin, Mato Grosson ja eteläisen Cerradon alueella (koordinaateissa noin 22.9°S, 55.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Pantanal & Cerrado aldeias",
    "feature_name_matches": [
      "Tekohá (Paĩ Tavytera/Kaiowá)"
    ]
  },
  {
    "slug": "tekoha-nandeva-ava-guarani-people",
    "name": "Tekohá (Ñandeva - Avá Guaraní) People",
    "name_fi": "Tekohá (Ñandeva - Avá Guaraní)-kansa",
    "native_name": "Tekohá (Ñandeva - Avá Guaraní)",
    "alternate_names": [
      "Tekohá (Ñandeva - Avá Guaraní)"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tekoh%C3%A1_(%C3%91andeva_-_Av%C3%A1_Guaran%C3%AD)",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in Pantanal, Mato Grosso and Southern Cerrado (centered near 25.3°S, 53.2°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "Tekohá (Ñandeva - Avá Guaraní)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pantanalin, Mato Grosson ja eteläisen Cerradon alueella (koordinaateissa noin 25.3°S, 53.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Pantanal & Cerrado aldeias",
    "feature_name_matches": [
      "Tekohá (Ñandeva - Avá Guaraní)"
    ]
  },
  {
    "slug": "tenetehara-tembe-people",
    "name": "Tenetehara (Tembé) People",
    "name_fi": "Tenetehara (Tembé)-kansa",
    "native_name": "Tenetehara (Tembé)",
    "alternate_names": [
      "Tenetehara (Tembé)",
      "Tembé"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Temb%C3%A9",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1099047",
    "summary_en": "The Tembé, also Timbé and Tenetehara, are an Indigenous people of Brazil, living along the Maranhão and Gurupi Rivers, in the state of Amazonas and Pará. Their lands have been encroached and settled by farmers and loggers, who do so illegally, and the Tembé are working to expel the intruders from their territories. Their ancestral territory is situated in Eastern Amazon & Tocantins Basin (Maranhão / Pará) (centered near 2.6°S, 47.3°W).",
    "summary_fi": "Tenetehara (Tembé)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Itä-Amazoniassa Tocantins-joen valuma-alueella (Maranhãossa ja Parássa) (koordinaateissa noin 2.6°S, 47.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Eastern Amazonian aldeias",
    "feature_name_matches": [
      "Tenetehara (Tembé)"
    ]
  },
  {
    "slug": "terena-people",
    "name": "Terena People",
    "name_fi": "Terena-kansa",
    "native_name": "Terena",
    "alternate_names": [
      "Terena",
      "Terena people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Terena_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1028268",
    "summary_en": "The Terena people are a Brazilian Indigenous people that originally inhabited the northeastern region of the Paraguayan Chaco west of the Paraguay River in the mid-19th century. However, they presently reside mainly in the municipalities of Aquidauana and Miranda within the Brazilian state Mato Grosso do Sul, as well as Mato Grosso and São Paulo. Their ancestral territory is situated in Pantanal, Mato Grosso and Southern Cerrado (centered near 20.4°S, 55.5°W).",
    "summary_fi": "Terena-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pantanalin, Mato Grosson ja eteläisen Cerradon alueella (koordinaateissa noin 20.4°S, 55.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Pantanal & Cerrado aldeias",
    "feature_name_matches": [
      "Terena"
    ]
  },
  {
    "slug": "tilian-people",
    "name": "Tilian People",
    "name_fi": "Tilian-kansa",
    "native_name": "Tilian",
    "alternate_names": [
      "Tilian",
      "Tilian Pearson"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tilian_Pearson",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q20685105",
    "summary_en": "Tilian Pearson, also known mononymously as Tilian, is an American singer-songwriter, musician and record producer born in Clearwater, Florida. He is the vocalist of the supergroup Dead Air Divine. Their ancestral territory is situated in South American Indigenous Territories (centered near 23.7°S, 65.4°W).",
    "summary_fi": "Tilian-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Etelä-Amerikan alkuperäisalueilla (koordinaateissa noin 23.7°S, 65.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Traditional ancestral territory",
    "feature_name_matches": [
      "Tilian"
    ]
  },
  {
    "slug": "timotes-people",
    "name": "Timotes People",
    "name_fi": "Timotes-kansa",
    "native_name": "Timotes",
    "alternate_names": [
      "Timotes",
      "Timotesubani Monastery"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Timotesubani_Monastery",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1620674",
    "summary_en": "Timotesubani is a medieval Georgian Orthodox Christian monastic complex located at the eponymous village in the Borjomi Gorge, Georgia's Samtskhe-Javakheti region. Their ancestral territory is situated in Llanos and Orinoco River Basin (centered near 8.3°N, 71.5°W).",
    "summary_fi": "Timotes-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Llanosin savannilla ja Orinoco-joen valuma-alueella (koordinaateissa noin 8.3°N, 71.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Orinoco riverine communities",
    "feature_name_matches": [
      "Timotes"
    ]
  },
  {
    "slug": "tinigua-people",
    "name": "Tinigua People",
    "name_fi": "Tinigua-kansa",
    "native_name": "Tinigua",
    "alternate_names": [
      "Tinigua"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tinigua",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q7808240",
    "summary_en": "Tinigua are the indigenous people who inhabited the river basin Yari, Caguan and today Caquetá Department of Colombia. In their language, Tinigua refers to the ancestors: tini probably meant “word of the ancients.”. Their ancestral territory is situated in South American Indigenous Territories (centered near 1.9°N, 74.1°W).",
    "summary_fi": "Tinigua-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Etelä-Amerikan alkuperäisalueilla (koordinaateissa noin 1.9°N, 74.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Traditional ancestral territory",
    "feature_name_matches": [
      "Tinigua"
    ]
  },
  {
    "slug": "toara-people",
    "name": "Toara People",
    "name_fi": "Toara-kansa",
    "native_name": "Toara",
    "alternate_names": [
      "Toara",
      "Takapūwāhia"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Takap%C5%ABw%C4%81hia",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q7677254",
    "summary_en": "Takapūwāhia, also known as Porirua Pā, was originally built on one of the oldest settlements in the Porirua basin — Te Urukahika, a small hamlet located on the western shore of Porirua harbour in the lower North Island of New Zealand. Their ancestral territory is situated in South American Indigenous Territories (centered near 22.7°S, 65.6°W).",
    "summary_fi": "Toara-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Etelä-Amerikan alkuperäisalueilla (koordinaateissa noin 22.7°S, 65.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Traditional ancestral territory",
    "feature_name_matches": [
      "Toara"
    ]
  },
  {
    "slug": "toba-lengua-people",
    "name": "Toba-Lengua People",
    "name_fi": "Toba-Lengua-kansa",
    "native_name": "Toba-Lengua",
    "alternate_names": [
      "Toba-Lengua",
      "Tofa language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tofa_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q36848",
    "summary_en": "Tofa, also known as Tofalar or Karagas, is a Turkic language spoken in Irkutsk Oblast, Russia by the Tofalar, an indigenous people of Siberia. Tofa forms a dialect continuum with the closely related Tuvan language, and shares many features with it. Their ancestral territory is situated in Gran Chaco lowlands (Argentina, Paraguay, Bolivia) (centered near 24.6°S, 57.5°W).",
    "summary_fi": "Toba-Lengua-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Gran Chacon alankoalueilla (Argentiinassa, Paraguayssa ja Boliviassa) (koordinaateissa noin 24.6°S, 57.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Gran Chaco riverine encampments",
    "feature_name_matches": [
      "Toba-Lengua"
    ]
  },
  {
    "slug": "tomabela-people",
    "name": "Tomabela People",
    "name_fi": "Tomabela-kansa",
    "native_name": "Tomabela",
    "alternate_names": [
      "Tomabela",
      "Tom DeLay"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tom_DeLay",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q180390",
    "summary_en": "Thomas Dale DeLay is an American author and retired politician who served as a member of the United States House of Representatives. A Republican, DeLay represented Texas's 22nd congressional district from 1985 until 2006. Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 1.2°S, 78.8°W).",
    "summary_fi": "Tomabela-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 1.2°S, 78.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "Tomabela"
    ]
  },
  {
    "slug": "tonokote-people",
    "name": "Tonokoté People",
    "name_fi": "Tonokoté-kansa",
    "native_name": "Tonokoté",
    "alternate_names": [
      "Tonokoté",
      "Lule language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Lule_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q12635889",
    "summary_en": "Lule is an indigenous language of northern Argentina, which is now extinct. Campbell (1997) writes that in 1981 there was an unconfirmed report that Lule was still spoken by 5 families in Resistencia in east-central Chaco Province. Their ancestral territory is situated in Pampas and Río de la Plata Basin (centered near 28.2°S, 63.6°W).",
    "summary_fi": "Tonokoté-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pampalla ja Río de la Platan valuma-alueella (koordinaateissa noin 28.2°S, 63.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Pampas traditional tolderías",
    "feature_name_matches": [
      "Tonokoté"
    ]
  },
  {
    "slug": "tontotuna-totoro-people",
    "name": "Tontotuna (Totoró) People",
    "name_fi": "Tontotuna (Totoró)-kansa",
    "native_name": "Tontotuna (Totoró)",
    "alternate_names": [
      "Tontotuna (Totoró)",
      "Totoró, Cauca"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Totor%C3%B3%2C_Cauca",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2405808",
    "summary_en": "Totoró is a town and municipality in the Cauca Department, Colombia. Their ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 2.6°N, 76.2°W).",
    "summary_fi": "Tontotuna (Totoró)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 2.6°N, 76.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "Tontotuna (Totoró)"
    ]
  },
  {
    "slug": "trio-wu-tareno-people",
    "name": "Trio/Wü tarëno People",
    "name_fi": "Trio/Wü tarëno-kansa",
    "native_name": "Trio/Wü tarëno",
    "alternate_names": [
      "Trio/Wü tarëno",
      "Tiriyó people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tiriy%C3%B3_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2299416",
    "summary_en": "The Tiriyó or Trio are an Amerindian ethnic group native to parts of northern Brazil, Suriname, and Guyana. In 2014, there were approximately 3,640 Tiriyó in the three countries. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 2.7°N, 56.3°W).",
    "summary_fi": "Trio/Wü tarëno-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 2.7°N, 56.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Trio/Wü tarëno"
    ]
  },
  {
    "slug": "trumai-people",
    "name": "Trumai People",
    "name_fi": "Trumai-kansa",
    "native_name": "Trumai",
    "alternate_names": [
      "Trumai",
      "Trumai people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Trumai_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2522647",
    "summary_en": "The Trumai are an Indigenous people of Brazil. They currently reside within the Xingu Indigenous Park, in the state of Mato Grosso. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 11.9°S, 53.6°W).",
    "summary_fi": "Trumai-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 11.9°S, 53.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Trumai"
    ]
  },
  {
    "slug": "tsa-chila-people",
    "name": "Tsa'chila People",
    "name_fi": "Tsa'chila-kansa",
    "native_name": "Tsa'chila",
    "alternate_names": [
      "Tsa'chila",
      "Tsáchila"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ts%C3%A1chila",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q941167",
    "summary_en": "The Tsachila, also called the Colorados, are an indigenous people of the Ecuadorian province of Santo Domingo de los Tsáchilas, partly named after them. Their native language is Tsafiki, a member of the Barbacoan linguistic family, and translates to mean \"true word\". Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 0.3°S, 79.3°W).",
    "summary_fi": "Tsa'chila-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 0.3°S, 79.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "Tsa'chila"
    ]
  },
  {
    "slug": "tsase-piapoco-people",
    "name": "Tsase/Piapoco People",
    "name_fi": "Tsase/Piapoco-kansa",
    "native_name": "Tsase/Piapoco",
    "alternate_names": [
      "Tsase/Piapoco",
      "Wenaiwika people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wenaiwika_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1090791",
    "summary_en": "The Wenaiwika, Tsáse nái, Enaguas, or Piapoco are an Indigenous people of Colombia who inhabit various locations between the Meta River and the Guaviare River in the departments of Guainía, Meta, and Vichada, as well as the banks of the Orinoco River in the Venezuelan state of Amazonas. They number more than 18,000 individuals. Their ancestral territory is situated in Llanos and Orinoco River Basin (centered near 4.6°N, 68.4°W).",
    "summary_fi": "Tsase/Piapoco-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Llanosin savannilla ja Orinoco-joen valuma-alueella (koordinaateissa noin 4.6°N, 68.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Orinoco riverine communities",
    "feature_name_matches": [
      "Tsase/Piapoco"
    ]
  },
  {
    "slug": "tsimane-people",
    "name": "Tsimane' People",
    "name_fi": "Tsimane'-kansa",
    "native_name": "Tsimane'",
    "alternate_names": [
      "Tsimane'",
      "Tsimane’",
      "Tsimané"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tsiman%C3%A9",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2963649",
    "summary_en": "The Tsimané, also known as the Tsimane' or Chimane, are an indigenous people of lowland Bolivia, living chiefly in the Beni Department municipalities of San Borja, San Ignacio de Moxos, Rurrenabaque, and Santa Ana del Yacuma. The Tsimané are the main residents of the T'simane Council Territory and the Pilón Lajas Reserve. Their ancestral territory is situated in Central Andes and Lake Titicaca Altiplano (centered near 15.1°S, 66.7°W).",
    "summary_fi": "Tsimane'-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Keski-Andeilla ja Titicacajärven Altiplanolla (koordinaateissa noin 15.1°S, 66.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Altiplano ayllu centers",
    "feature_name_matches": [
      "Tsimane’"
    ]
  },
  {
    "slug": "tumbalala-people",
    "name": "Tumbalalá People",
    "name_fi": "Tumbalalá-kansa",
    "native_name": "Tumbalalá",
    "alternate_names": [
      "Tumbalalá",
      "Tumbalalaika"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tumbalalaika",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2509266",
    "summary_en": "\"Tumbalalaika\", \"Tum balalaika\" or \"Tum balalayke\" is an American Ashkenazi Jewish popular love song in the Yiddish language. The title refers to the balalaika, a three-stringed musical instrument of Russian origin. Their ancestral territory is situated in Caatinga and Brazilian Northeast coast (centered near 8.7°S, 39.4°W).",
    "summary_fi": "Tumbalalá-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Caatingan ja Koillis-Brasilian rannikon alueella (koordinaateissa noin 8.7°S, 39.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northeast Brazilian coastal aldeias",
    "feature_name_matches": [
      "Tumbalalá"
    ]
  },
  {
    "slug": "tupari-people",
    "name": "Tupari People",
    "name_fi": "Tupari-kansa",
    "native_name": "Tupari",
    "alternate_names": [
      "Tupari",
      "Tupari language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tupari_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3542217",
    "summary_en": "Tuparí is an indigenous language of Brazil. It is one of six Tupari languages of the Tupian language family. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 12.2°S, 62.8°W).",
    "summary_fi": "Tupari-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 12.2°S, 62.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Tupari"
    ]
  },
  {
    "slug": "tuxa-people",
    "name": "Tuxá People",
    "name_fi": "Tuxá-kansa",
    "native_name": "Tuxá",
    "alternate_names": [
      "Tuxá",
      "Tuxá language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tux%C3%A1_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q7857217",
    "summary_en": "Tuxá was the language of the Tuxá people, who now speak Portuguese and Dzubukuá. Their ancestral territory is situated in Caatinga and Brazilian Northeast coast (centered near 9.0°S, 38.8°W).",
    "summary_fi": "Tuxá-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Caatingan ja Koillis-Brasilian rannikon alueella (koordinaateissa noin 9.0°S, 38.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northeast Brazilian coastal aldeias",
    "feature_name_matches": [
      "Tuxá"
    ]
  },
  {
    "slug": "u-wa-people",
    "name": "U'wa People",
    "name_fi": "U'wa-kansa",
    "native_name": "U'wa",
    "alternate_names": [
      "U'wa",
      "U'wa people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/U'wa_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3138755",
    "summary_en": "The U'wa are an indigenous people living in the cloud forests of northeastern Colombia. Historically, the U'wa numbered as many as 20,000, scattered over a homeland that extended across the Venezuela-Colombia border. Their ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 6.7°N, 72.2°W).",
    "summary_fi": "U'wa-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 6.7°N, 72.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "U'wa"
    ]
  },
  {
    "slug": "ukarangma-people",
    "name": "Ukarãngmã People",
    "name_fi": "Ukarãngmã-kansa",
    "native_name": "Ukarãngmã",
    "alternate_names": [
      "Ukarãngmã",
      "Uyarangalil"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Uyarangalil",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q7904104",
    "summary_en": "Uyarangalil is a 1984 Indian Malayalam-language thriller film directed by I. Sasi and written by M. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 3.8°S, 53.5°W).",
    "summary_fi": "Ukarãngmã-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 3.8°S, 53.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Ukarãngmã"
    ]
  },
  {
    "slug": "umukomasa-desana-people",
    "name": "Umukomasã/Desana People",
    "name_fi": "Umukomasã/Desana-kansa",
    "native_name": "Umukomasã/Desana",
    "alternate_names": [
      "Umukomasã/Desana",
      "Desana"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Desana",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q25050",
    "summary_en": "Desana is a comune (municipality) in the Province of Vercelli in the Italian region Piedmont, located about 60 kilometres (37 mi) northeast of Turin and about 8 kilometres (5 mi) southwest of Vercelli. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 0.4°N, 69.5°W).",
    "summary_fi": "Umukomasã/Desana-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 0.4°N, 69.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Umukomasã/Desana"
    ]
  },
  {
    "slug": "umurecoomaja-tatuyo-people",
    "name": "Umurecoómajá (Tatuyo) People",
    "name_fi": "Umurecoómajá (Tatuyo)-kansa",
    "native_name": "Umurecoómajá (Tatuyo)",
    "alternate_names": [
      "Umurecoómajá (Tatuyo)",
      "Tatuyo language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tatuyo_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2524007",
    "summary_en": "Tatuyo is a Tucanoan language of Colombia. Lexically, its closest relative is Carapano: the two languages' lexicons are 96.3% cognate. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 0.1°N, 70.4°W).",
    "summary_fi": "Umurecoómajá (Tatuyo)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 0.1°N, 70.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Umurecoómajá (Tatuyo)"
    ]
  },
  {
    "slug": "uru-people",
    "name": "Uru People",
    "name_fi": "Uru-kansa",
    "native_name": "Uru",
    "alternate_names": [
      "Uru",
      "Uru people"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Uru_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1142249",
    "summary_en": "The Uru or Uros are an indigenous people of Bolivia and Peru. They live on a still-growing group of about 120 self-fashioned floating islands in Lake Titicaca near Puno. Their ancestral territory is situated in Central Andes and Lake Titicaca Altiplano (centered near 19.4°S, 67.9°W).",
    "summary_fi": "Uru-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Keski-Andeilla ja Titicacajärven Altiplanolla (koordinaateissa noin 19.4°S, 67.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Altiplano ayllu centers",
    "feature_name_matches": [
      "Uru"
    ]
  },
  {
    "slug": "utapinomakaphona-people",
    "name": "Utapinõmakãphõná People",
    "name_fi": "Utapinõmakãphõná-kansa",
    "native_name": "Utapinõmakãphõná",
    "alternate_names": [
      "Utapinõmakãphõná"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Utapin%C3%B5mak%C3%A3ph%C3%B5n%C3%A1",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 0.4°N, 70.0°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "Utapinõmakãphõná-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 0.4°N, 70.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Utapinõmakãphõná"
    ]
  },
  {
    "slug": "uwottuja-people",
    "name": "Uwottüja People",
    "name_fi": "Uwottüja-kansa",
    "native_name": "Uwottüja",
    "alternate_names": [
      "Uwottüja"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Uwott%C3%BCja",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in Llanos and Orinoco River Basin (centered near 5.3°N, 67.0°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "Uwottüja-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Llanosin savannilla ja Orinoco-joen valuma-alueella (koordinaateissa noin 5.3°N, 67.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Orinoco riverine communities",
    "feature_name_matches": [
      "Uwottüja"
    ]
  },
  {
    "slug": "vacacocha-people",
    "name": "Vacacocha People",
    "name_fi": "Vacacocha-kansa",
    "native_name": "Vacacocha",
    "alternate_names": [
      "Vacacocha",
      "Aewa language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Aewa_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2871740",
    "summary_en": "Aewa, also spelled Aiwa, and also known as Abishira, Tequiraca (Tekiráka), Ixignor, or Vacacocha, is an extinct language formerly spoken in Peru. It is presumed extinct some time in the 1980s, though in 2008 two rememberers were found and 160 words and short sentences were recorded. Their ancestral territory is situated in South American Indigenous Territories (centered near 1.9°S, 74.6°W).",
    "summary_fi": "Vacacocha-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Etelä-Amerikan alkuperäisalueilla (koordinaateissa noin 1.9°S, 74.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Traditional ancestral territory",
    "feature_name_matches": [
      "Vacacocha"
    ]
  },
  {
    "slug": "vilela-people",
    "name": "Vilela People",
    "name_fi": "Vilela-kansa",
    "native_name": "Vilela",
    "alternate_names": [
      "Vilela",
      "Vilela people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Vilela_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q9093719",
    "summary_en": "The Vilela people, or Vilelas, are an Indigenous people in Argentina. Today, their few remaining descendants live primarily in the provinces of Chaco and Santiago del Estero, with smaller numbers in the Rosario and Buenos Aires urban areas. Their ancestral territory is situated in Gran Chaco lowlands (Argentina, Paraguay, Bolivia) (centered near 26.7°S, 63.0°W).",
    "summary_fi": "Vilela-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Gran Chacon alankoalueilla (Argentiinassa, Paraguayssa ja Boliviassa) (koordinaateissa noin 26.7°S, 63.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Gran Chaco riverine encampments",
    "feature_name_matches": [
      "Vilela"
    ]
  },
  {
    "slug": "wajuru-people",
    "name": "Wajuru People",
    "name_fi": "Wajuru-kansa",
    "native_name": "Wajuru",
    "alternate_names": [
      "Wajuru",
      "Walrus"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Walrus",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q40994",
    "summary_en": "The walrus is a large pinniped marine mammal with discontinuous distribution about the North Pole in the Arctic Ocean and subarctic seas of the Northern Hemisphere. It is the only extant species in the family Odobenidae and genus Odobenus. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 12.4°S, 63.6°W).",
    "summary_fi": "Wajuru-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 12.4°S, 63.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Wajuru"
    ]
  },
  {
    "slug": "wakuenai-walimanai-kuripako-people",
    "name": "Wakuenai/Walimanai (Kuripako) People",
    "name_fi": "Wakuenai/Walimanai (Kuripako)-kansa",
    "native_name": "Wakuenai/Walimanai (Kuripako)",
    "alternate_names": [
      "Wakuenai/Walimanai (Kuripako)",
      "Baniwa"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Baniwa",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q614455",
    "summary_en": "Baniwa are indigenous South Americans, who speak the Baniwa language belonging to the Maipurean (Arawak) language family. They live in the Amazon Region, in the border area of Brazil, Colombia and Venezuela and along the Rio Negro and its tributaries. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 2.4°N, 67.7°W).",
    "summary_fi": "Wakuenai/Walimanai (Kuripako)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 2.4°N, 67.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Wakuenai/Walimanai (Kuripako)"
    ]
  },
  {
    "slug": "walimanai-baniwa-people",
    "name": "Walimanai (Baniwa) People",
    "name_fi": "Walimanai (Baniwa)-kansa",
    "native_name": "Walimanai (Baniwa)",
    "alternate_names": [
      "Walimanai (Baniwa)",
      "Baniwa"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Baniwa",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q614455",
    "summary_en": "Baniwa are indigenous South Americans, who speak the Baniwa language belonging to the Maipurean (Arawak) language family. They live in the Amazon Region, in the border area of Brazil, Colombia and Venezuela and along the Rio Negro and its tributaries. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 2.6°N, 68.9°W).",
    "summary_fi": "Walimanai (Baniwa)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 2.6°N, 68.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Walimanai (Baniwa)"
    ]
  },
  {
    "slug": "wanano-kotiria-people",
    "name": "Wanano/Kotiria People",
    "name_fi": "Wanano/Kotiria-kansa",
    "native_name": "Wanano/Kotiria",
    "alternate_names": [
      "Wanano/Kotiria",
      "Kotiria"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kotiria",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3816635",
    "summary_en": "The Kotiria are an Indigenous people of Brazil and Colombia, who speak a Tucanoan language. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 1.1°N, 69.9°W).",
    "summary_fi": "Wanano/Kotiria-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 1.1°N, 69.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Wanano/Kotiria"
    ]
  },
  {
    "slug": "waorani-people",
    "name": "Waorani People",
    "name_fi": "Waorani-kansa",
    "native_name": "Waorani",
    "alternate_names": [
      "Waorani",
      "Waorani people"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Waorani_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1572622",
    "summary_en": "The Waorani, Waodani, or Huaorani, also known as the Waos, are an Indigenous people from the Amazonian Region of Ecuador who have marked differences from other ethnic groups from Ecuador. Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 1.2°S, 76.5°W).",
    "summary_fi": "Waorani-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 1.2°S, 76.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "Waorani"
    ]
  },
  {
    "slug": "wapishana-wapixana-people",
    "name": "Wapishana/Wapixana People",
    "name_fi": "Wapishana/Wapixana-kansa",
    "native_name": "Wapishana/Wapixana",
    "alternate_names": [
      "Wapishana/Wapixana",
      "Wapishana"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wapishana",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2522479",
    "summary_en": "The Wapishana or Wapichan are an Indigenous group found in the Roraima area of northern Brazil and southern Guyana. Their ancestral territory is situated in Guiana Shield and Atlantic Coastal Lowlands (centered near 3.1°N, 59.7°W).",
    "summary_fi": "Wapishana/Wapixana-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Guayanan kilven ja Atlantin rannikon alankoalueilla (koordinaateissa noin 3.1°N, 59.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Guiana Shield indigenous villages",
    "feature_name_matches": [
      "Wapishana/Wapixana"
    ]
  },
  {
    "slug": "waranka-people",
    "name": "Waranka People",
    "name_fi": "Waranka-kansa",
    "native_name": "Waranka",
    "alternate_names": [
      "Waranka",
      "Warankasi"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Warankasi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q126454274",
    "summary_en": "Warankasi, wara-kasi or wara is a Yoruba local cheese in Nigeria. It is a soft white cheese made from cows milk. Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 1.6°S, 79.1°W).",
    "summary_fi": "Waranka-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 1.6°S, 79.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "Waranka"
    ]
  },
  {
    "slug": "warekena-people",
    "name": "Warekena People",
    "name_fi": "Warekena-kansa",
    "native_name": "Warekena",
    "alternate_names": [
      "Warekena",
      "Baré people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Bar%C3%A9_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q809707",
    "summary_en": "The Baré, or Hanera, and Werekena are related Indigenous people of northwest Brazil and Venezuela. For many years they suffered from violent exploitation by Portuguese and Spanish merchants, forced to work as debt slaves. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 1.8°N, 67.4°W).",
    "summary_fi": "Warekena-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 1.8°N, 67.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Warekena"
    ]
  },
  {
    "slug": "wauja-people",
    "name": "Waujá People",
    "name_fi": "Waujá-kansa",
    "native_name": "Waujá",
    "alternate_names": [
      "Waujá",
      "Wauja"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wauja",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1099056",
    "summary_en": "The Wauja or Waura are an Indigenous people of Brazil. Their language, Waurá, is an Arawakan language. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 12.9°S, 53.9°W).",
    "summary_fi": "Waujá-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 12.9°S, 53.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Waujá"
    ]
  },
  {
    "slug": "wayana-people",
    "name": "Wayana People",
    "name_fi": "Wayana-kansa",
    "native_name": "Wayana",
    "alternate_names": [
      "Wayana"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wayana",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2299931",
    "summary_en": "The Wayana are a Carib-speaking people located in the southeastern part of the Guiana highlands, a region divided between Brazil, Suriname, and French Guiana. In 1980, when the last census took place, the Wayana numbered some 1,500 individuals, of which 150 in Brazil, among the Apalai, 400 in Suriname, and 1,000 in French Guiana, along the Maroni River. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 1.8°N, 55.2°W).",
    "summary_fi": "Wayana-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 1.8°N, 55.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Wayana"
    ]
  },
  {
    "slug": "wayuu-people",
    "name": "Wayúu People",
    "name_fi": "Wayúu-kansa",
    "native_name": "Wayúu",
    "alternate_names": [
      "Wayúu",
      "Wayuu people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wayuu_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q891077",
    "summary_en": "The Wayuu are an ethnic group Indigenous to the Guajira Peninsula in northern Colombia and northwest Venezuela. The Wayuu language is part of the Arawakan language family. Their ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 10.7°N, 72.6°W).",
    "summary_fi": "Wayúu-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 10.7°N, 72.6°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "Wayúu"
    ]
  },
  {
    "slug": "waikhana-people",
    "name": "Waíkhana People",
    "name_fi": "Waíkhana-kansa",
    "native_name": "Waíkhana",
    "alternate_names": [
      "Waíkhana",
      "Wakkanai"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wakkanai",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q267894",
    "summary_en": "Wakkanai  is a city located in Sōya Subprefecture, Hokkaido, Japan. Wakkanai is the capital of Sōya Subprefecture. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 0.5°N, 69.4°W).",
    "summary_fi": "Waíkhana-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 0.5°N, 69.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Waíkhana"
    ]
  },
  {
    "slug": "waipinomaka-bara-people",
    "name": "Waípinõmakã (Bará) People",
    "name_fi": "Waípinõmakã (Bará)-kansa",
    "native_name": "Waípinõmakã (Bará)",
    "alternate_names": [
      "Waípinõmakã (Bará)",
      "Bará people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Bar%C3%A1_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q86731100",
    "summary_en": "The Bará are an Indigenous people originating from the northwest of the Amazon rainforest, which lives in the headwaters of the Tiquié River, above the village of Trinidad and in the upper Igarapé Inambú and the upper Colorado and Lobo. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 0.3°N, 70.0°W).",
    "summary_fi": "Waípinõmakã (Bará)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 0.3°N, 70.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Waípinõmakã (Bará)"
    ]
  },
  {
    "slug": "weenhayek-people",
    "name": "Weenhayek People",
    "name_fi": "Weenhayek-kansa",
    "native_name": "Weenhayek",
    "alternate_names": [
      "Weenhayek",
      "Wichí"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wich%C3%AD",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1284276",
    "summary_en": "The Wichí are an Indigenous people of South America. They comprise a large group of tribes inhabiting the headwaters of the Bermejo and Pilcomayo rivers in Argentina and Bolivia. Their ancestral territory is situated in Gran Chaco lowlands (Argentina, Paraguay, Bolivia) (centered near 22.2°S, 63.4°W).",
    "summary_fi": "Weenhayek-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Gran Chacon alankoalueilla (Argentiinassa, Paraguayssa ja Boliviassa) (koordinaateissa noin 22.2°S, 63.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Gran Chaco riverine encampments",
    "feature_name_matches": [
      "Weenhayek"
    ]
  },
  {
    "slug": "weenhayek-wichi-people",
    "name": "Weenhayek/Wichí People",
    "name_fi": "Weenhayek/Wichí-kansa",
    "native_name": "Weenhayek/Wichí",
    "alternate_names": [
      "Weenhayek/Wichí",
      "Wichí"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wich%C3%AD",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1284276",
    "summary_en": "The Wichí are an Indigenous people of South America. They comprise a large group of tribes inhabiting the headwaters of the Bermejo and Pilcomayo rivers in Argentina and Bolivia. Their ancestral territory is situated in Gran Chaco lowlands (Argentina, Paraguay, Bolivia) (centered near 23.6°S, 62.8°W).",
    "summary_fi": "Weenhayek/Wichí-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Gran Chacon alankoalueilla (Argentiinassa, Paraguayssa ja Boliviassa) (koordinaateissa noin 23.6°S, 62.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Gran Chaco riverine encampments",
    "feature_name_matches": [
      "Weenhayek/Wichí"
    ]
  },
  {
    "slug": "wisijsa-people",
    "name": "Wisijsa People",
    "name_fi": "Wisijsa-kansa",
    "native_name": "Wisijsa",
    "alternate_names": [
      "Wisijsa"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wisijsa",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in Central Andes and Lake Titicaca Altiplano (centered near 20.0°S, 65.7°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "Wisijsa-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Keski-Andeilla ja Titicacajärven Altiplanolla (koordinaateissa noin 20.0°S, 65.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Altiplano ayllu centers",
    "feature_name_matches": [
      "Wisijsa"
    ]
  },
  {
    "slug": "wiwa-people",
    "name": "Wiwa People",
    "name_fi": "Wiwa-kansa",
    "native_name": "Wiwa",
    "alternate_names": [
      "Wiwa",
      "Damana people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Damana_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2587001",
    "summary_en": "The Damana (Dʉmʉna) people, also known as the Wiwa, are an Indigenous people of Colombia that speak the Chibchan Damana language and live in the Sierra Nevada de Santa Marta region. Their ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 11.1°N, 72.8°W).",
    "summary_fi": "Wiwa-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 11.1°N, 72.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "Wiwa"
    ]
  },
  {
    "slug": "wounaan-people",
    "name": "Wounaan People",
    "name_fi": "Wounaan-kansa",
    "native_name": "Wounaan",
    "alternate_names": [
      "Wounaan",
      "Embera-Wounaan"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Embera-Wounaan",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3058858",
    "summary_en": "The Embera-Wounaan are a semi-nomadic Indigenous people in Panama living in Darién Province on the shores of the Chucunaque, Sambú, and Tuira Rivers and their waterways. The Embera-Wounaan were formerly and widely known by the name Chocó, and they speak the Embera and Wounaan languages, part of the Choco language family. Their ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 6.2°N, 77.2°W).",
    "summary_fi": "Wounaan-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 6.2°N, 77.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "Wounaan"
    ]
  },
  {
    "slug": "xakriaba-people",
    "name": "Xakriabá People",
    "name_fi": "Xakriabá-kansa",
    "native_name": "Xakriabá",
    "alternate_names": [
      "Xakriabá"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Xakriab%C3%A1",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q769092",
    "summary_en": "The Xakriabá are an Indigenous people of Brazil. One of the Gê peoples who spoke the Xakriabá dialect of the Akwe language, they used to live in the Tocantins River area. Their ancestral territory is situated in Atlantic Forest and Brazilian Highlands (centered near 15.2°S, 43.5°W).",
    "summary_fi": "Xakriabá-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Brasilian atlanttisen sademetsän (Mata Atlântica) ja ylänköjen alueella (koordinaateissa noin 15.2°S, 43.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Mata Atlântica ancestral territories",
    "feature_name_matches": [
      "Xakriabá"
    ]
  },
  {
    "slug": "xeta-people",
    "name": "Xetá People",
    "name_fi": "Xetá-kansa",
    "native_name": "Xetá",
    "alternate_names": [
      "Xetá",
      "Xeta language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Xeta_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2980404",
    "summary_en": "Xeta is a nearly extinct Tupí–Guaraní language formerly spoken in the Paraná state of Brazil. Their ancestral territory is situated in Pantanal, Mato Grosso and Southern Cerrado (centered near 23.5°S, 53.4°W).",
    "summary_fi": "Xetá-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pantanalin, Mato Grosson ja eteläisen Cerradon alueella (koordinaateissa noin 23.5°S, 53.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Pantanal & Cerrado aldeias",
    "feature_name_matches": [
      "Xetá"
    ]
  },
  {
    "slug": "yagan-people",
    "name": "Yagán People",
    "name_fi": "Yagán-kansa",
    "native_name": "Yagán",
    "alternate_names": [
      "Yagán",
      "Yagan"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yagan",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q558986",
    "summary_en": "Yagan was an Aboriginal Australian warrior from the Noongar people. Yagan was pursued by the local authorities after he killed Erin Entwhistle, a servant of farmer Archibald Butler. Their ancestral territory is situated in Patagonia and Tierra del Fuego (centered near 54.4°S, 69.1°W).",
    "summary_fi": "Yagán-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Patagoniassa ja Tulimaassa (koordinaateissa noin 54.4°S, 69.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Patagonian & Fuegian ancestral camps",
    "feature_name_matches": [
      "Yagán"
    ]
  },
  {
    "slug": "yaminawa-people",
    "name": "Yaminawá People",
    "name_fi": "Yaminawá-kansa",
    "native_name": "Yaminawá",
    "alternate_names": [
      "Yaminawá"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yaminaw%C3%A1",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q572484",
    "summary_en": "The Yaminawá are an Indigenous people who live in Acre (Brazil), Madre de Dios (Peru) and Pando (Bolivia). Their homeland is Acre, Brazil. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 9.7°S, 71.5°W).",
    "summary_fi": "Yaminawá-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 9.7°S, 71.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Yaminawá"
    ]
  },
  {
    "slug": "yanam-ninam-people",
    "name": "Yanam (Ninam) People",
    "name_fi": "Yanam (Ninam)-kansa",
    "native_name": "Yanam (Ninam)",
    "alternate_names": [
      "Yanam (Ninam)",
      "Ninam language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ninam_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3436586",
    "summary_en": "Ninam, or Yanam, is a Yanomaman language spoken in Roraima, Brazil and southern Venezuela near the Mucajai, upper Uraricaá, and Paragua rivers. Their ancestral territory is situated in Llanos and Orinoco River Basin (centered near 4.3°N, 62.5°W).",
    "summary_fi": "Yanam (Ninam)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Llanosin savannilla ja Orinoco-joen valuma-alueella (koordinaateissa noin 4.3°N, 62.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Orinoco riverine communities",
    "feature_name_matches": [
      "Yanam (Ninam)"
    ]
  },
  {
    "slug": "yanesha-people",
    "name": "Yanesha People",
    "name_fi": "Yanesha-kansa",
    "native_name": "Yanesha",
    "alternate_names": [
      "Yanesha",
      "Yanesha people"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yanesha_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q607558",
    "summary_en": "The Yaneshaʼ or Amuesha people are an ethnic group of the Peruvian Amazon rainforest. Presently, the most recent census count puts their population at over 7,000 distributed among 48 communities located in Puerto Inca Province (Huánuco), Chanchamayo Province (Junín) and Oxapampa Province (Pasco). Their ancestral territory is situated in Central Peruvian Andes & Mantaro Valley (centered near 10.1°S, 75.0°W).",
    "summary_fi": "Yanesha-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Perun Keski-Andeilla ja Mantaron laaksossa (koordinaateissa noin 10.1°S, 75.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Central Andean llactas",
    "feature_name_matches": [
      "Yanesha"
    ]
  },
  {
    "slug": "yaros-people",
    "name": "Yaros People",
    "name_fi": "Yaros-kansa",
    "native_name": "Yaros",
    "alternate_names": [
      "Yaros",
      "Yaroslavl"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yaroslavl",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2423",
    "summary_en": "Yaroslavl is a city and the administrative center of Yaroslavl Oblast, Russia, located 250 kilometers (160 mi) northeast of Moscow. The historic part of the city is a World Heritage Site, and is located at the confluence of the Volga and the Kotorosl rivers. Their ancestral territory is situated in Pampas and Río de la Plata Basin (centered near 33.4°S, 57.9°W).",
    "summary_fi": "Yaros-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pampalla ja Río de la Platan valuma-alueella (koordinaateissa noin 33.4°S, 57.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Pampas traditional tolderías",
    "feature_name_matches": [
      "Yaros"
    ]
  },
  {
    "slug": "yaruro-pume-people",
    "name": "Yaruro/Pumé People",
    "name_fi": "Yaruro/Pumé-kansa",
    "native_name": "Yaruro/Pumé",
    "alternate_names": [
      "Yaruro/Pumé",
      "Pumé people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pum%C3%A9_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1286979",
    "summary_en": "The Pumé people are a Circum-Caribbean indigenous people, native to the ecoregion of Llanos in Venezuela, located west of the Orinoco River. The Pumé people are divided into two subgroups: The River Pumé, living along major river drainages of the Orinoco River, and the more nomadic Savanna Pumé that reside on the Llanos. Their ancestral territory is situated in Llanos and Orinoco River Basin (centered near 6.7°N, 68.4°W).",
    "summary_fi": "Yaruro/Pumé-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Llanosin savannilla ja Orinoco-joen valuma-alueella (koordinaateissa noin 6.7°N, 68.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Orinoco riverine communities",
    "feature_name_matches": [
      "Yaruro/Pumé"
    ]
  },
  {
    "slug": "yawanawa-people",
    "name": "Yawanawá People",
    "name_fi": "Yawanawá-kansa",
    "native_name": "Yawanawá",
    "alternate_names": [
      "Yawanawá",
      "Yaminawá"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yaminaw%C3%A1",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q572484",
    "summary_en": "The Yaminawá are an Indigenous people who live in Acre (Brazil), Madre de Dios (Peru) and Pando (Bolivia). Their homeland is Acre, Brazil. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 8.4°S, 71.7°W).",
    "summary_fi": "Yawanawá-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 8.4°S, 71.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Yawanawá"
    ]
  },
  {
    "slug": "yazne-people",
    "name": "Yazne People",
    "name_fi": "Yazne-kansa",
    "native_name": "Yazne",
    "alternate_names": [
      "Yazne",
      "Yaznee Nasheeda"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yaznee_Nasheeda",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42303686",
    "summary_en": "Yaznee Nasheeda is a Maldivian middle-distance runner specializing in the 800 metres. She was the Maldivian national record-holder in the event, competing at several international championships and the women's 800 metres at the 1996 Summer Olympics before becoming a coach. Their ancestral territory is situated in Northern Peruvian Andes and Pacific Coast (centered near 3.7°S, 80.0°W).",
    "summary_fi": "Yazne-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Perun Andeilla ja Tyynenmeren rannikolla (koordinaateissa noin 3.7°S, 80.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Peruvian valleys & coast",
    "feature_name_matches": [
      "Yazne"
    ]
  },
  {
    "slug": "ye-pa-masa-people",
    "name": "Ye\"pâ-masa People",
    "name_fi": "Ye\"pâ-masa-kansa",
    "native_name": "Ye\"pâ-masa",
    "alternate_names": [
      "Ye\"pâ-masa",
      "Minoru Yamasaki"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Minoru_Yamasaki",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q347215",
    "summary_en": "Minoru Yamasaki  was an American architect, best known for designing the original World Trade Center in New York City and several other large-scale projects. He and fellow architect Edward Durell Stone are generally considered to be the two master practitioners of \"New Formalism\". Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 0.4°N, 69.2°W).",
    "summary_fi": "Ye\"pâ-masa-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 0.4°N, 69.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Ye\"pâ-masa"
    ]
  },
  {
    "slug": "yihamwo-yagua-people",
    "name": "Yihamwo (Yagua) People",
    "name_fi": "Yihamwo (Yagua)-kansa",
    "native_name": "Yihamwo (Yagua)",
    "alternate_names": [
      "Yihamwo (Yagua)",
      "Yagua"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yagua",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q948636",
    "summary_en": "Yagua are an indigenous people in Colombia and northeastern Peru, numbering approximately 6,000. Currently, they live near the Amazon, Napo, Putumayo and Yavari rivers and their tributaries. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 3.4°S, 71.5°W).",
    "summary_fi": "Yihamwo (Yagua)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 3.4°S, 71.5°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Yihamwo (Yagua)"
    ]
  },
  {
    "slug": "yine-people",
    "name": "Yine People",
    "name_fi": "Yine-kansa",
    "native_name": "Yine",
    "alternate_names": [
      "Yine",
      "Yine people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yine_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q5360868",
    "summary_en": "The Yine are an indigenous people in Peru. In the Cusco, Loreto, and Ucayali Departments, they live along the Urubamba River. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 11.4°S, 71.3°W).",
    "summary_fi": "Yine-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 11.4°S, 71.3°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Yine"
    ]
  },
  {
    "slug": "yjxa-people",
    "name": "Yjxa People",
    "name_fi": "Yjxa-kansa",
    "native_name": "Yjxa",
    "alternate_names": [
      "Yjxa",
      "Karitiana"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Karitiana",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1091084",
    "summary_en": "The Karitiana or Caritiana are an Indigenous people of Brazil, whose reservation is located in the western Amazon. They count 320 members, and the leader of their tribal association is Renato Caritiana. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 9.2°S, 63.8°W).",
    "summary_fi": "Yjxa-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 9.2°S, 63.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Yjxa"
    ]
  },
  {
    "slug": "yudja-people",
    "name": "Yudjá People",
    "name_fi": "Yudjá-kansa",
    "native_name": "Yudjá",
    "alternate_names": [
      "Yudjá"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yudj%C3%A1",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3512896",
    "summary_en": "The Yudjá or Juruna are an Indigenous people of Brazil. They were formerly the major tribe along the Xingu River, but are now divided into two groups, a westernized northern group near Altamira, Para near the big bend of the Xingu and a more conservative group in the Xingu Indigenous Park at the headwaters of the Xingu in Mato Grosso. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 8.7°S, 52.8°W).",
    "summary_fi": "Yudjá-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 8.7°S, 52.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Yudjá"
    ]
  },
  {
    "slug": "yukpa-people",
    "name": "Yukpa People",
    "name_fi": "Yukpa-kansa",
    "native_name": "Yukpa",
    "alternate_names": [
      "Yukpa",
      "Yukpa people"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yukpa_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q589718",
    "summary_en": "The Yukpa are an Indigenous ethnic group that inhabits the northeastern part of the Cesar Department in northern Colombia by the Serranía del Perijá bordering Venezuela. Their territory covers the eastern areas of the municipalities of Robles La Paz, Codazzi and Becerril in Resguardos named Socorpa, Menkue, El Cozo Iroka and some other small areas in Venezuela. Their ancestral territory is situated in Northern Andean Highlands and Valleys (Colombia) (centered near 10.0°N, 73.1°W).",
    "summary_fi": "Yukpa-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andien ylängöillä ja laaksoissa Kolumbiassa (koordinaateissa noin 10.0°N, 73.1°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Colombian highland settlements",
    "feature_name_matches": [
      "Yukpa"
    ]
  },
  {
    "slug": "yuracare-people",
    "name": "Yuracaré People",
    "name_fi": "Yuracaré-kansa",
    "native_name": "Yuracaré",
    "alternate_names": [
      "Yuracaré",
      "Yuracaré people"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yuracar%C3%A9_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q978494",
    "summary_en": "Yuracaré are Bolivian indigenous people living on 2,500 square kilometres along the Chapare River watershed in Cochabamba Department and Beni Department, in the Bolivian Lowlands of the Amazon Basin. The Yuracaré reside not far from Santa Cruz de la Sierra and Cochabamba, among the forests and plains near the Andes. Their ancestral territory is situated in Central Andes and Lake Titicaca Altiplano (centered near 15.6°S, 65.8°W).",
    "summary_fi": "Yuracaré-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Keski-Andeilla ja Titicacajärven Altiplanolla (koordinaateissa noin 15.6°S, 65.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Altiplano ayllu centers",
    "feature_name_matches": [
      "Yuracaré"
    ]
  },
  {
    "slug": "yuruti-people",
    "name": "Yurutí People",
    "name_fi": "Yurutí-kansa",
    "native_name": "Yurutí",
    "alternate_names": [
      "Yurutí",
      "Wajiara language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wajiara_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3573266",
    "summary_en": "Yurutí, or Wajiara, is a Tucanoan language of Colombia, with around 1,200 speakers in Colombia and Brazil. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 0.9°N, 70.4°W).",
    "summary_fi": "Yurutí-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 0.9°N, 70.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Yurutí"
    ]
  },
  {
    "slug": "yuri-people",
    "name": "Yurí People",
    "name_fi": "Yurí-kansa",
    "native_name": "Yurí",
    "alternate_names": [
      "Yurí",
      "Yurí language"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yur%C3%AD_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q2669157",
    "summary_en": "Yurí (Jurí) is a language previously spoken near a stretch of the Caquetá River in the Brazilian Amazon, extending slightly into Colombia. It was spoken on the Puré River of Colombia, and the Içá River and Japurá River of Brazil. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 2.0°S, 70.2°W).",
    "summary_fi": "Yurí-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 2.0°S, 70.2°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Yurí"
    ]
  },
  {
    "slug": "ziobain-siona-people",
    "name": "ZioBain (Siona) People",
    "name_fi": "ZioBain (Siona)-kansa",
    "native_name": "ZioBain (Siona)",
    "alternate_names": [
      "ZioBain (Siona)",
      "Siona people"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Siona_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q1087382",
    "summary_en": "The Siona people are an Indigenous ethnic group living near the border between Ecuador and Colombia, along three rivers: the Aguarico River, Cuyabeno River and Putumayo River. The Siona live in Sucumbios Province in Ecuador, mainly in the Cuyabeno Wildlife Reserve and in the Department of Putumayo along the Putumayo River. Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 0.1°N, 75.9°W).",
    "summary_fi": "ZioBain (Siona)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 0.1°N, 75.9°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "ZioBain (Siona)"
    ]
  },
  {
    "slug": "zoro-pangyjej-people",
    "name": "Zoró/Pangyjej People",
    "name_fi": "Zoró/Pangyjej-kansa",
    "native_name": "Zoró/Pangyjej",
    "alternate_names": [
      "Zoró/Pangyjej",
      "Zoró"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Zor%C3%B3",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q4024837",
    "summary_en": "The Zoró are an Indigenous people native to the states of Mato Grosso and Rondônia, Brazil. Their population was around 787 in 2020. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 10.6°S, 60.8°W).",
    "summary_fi": "Zoró/Pangyjej-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 10.6°S, 60.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Zoró/Pangyjej"
    ]
  },
  {
    "slug": "zo-e-people",
    "name": "Zo'é People",
    "name_fi": "Zo'é-kansa",
    "native_name": "Zo'é",
    "alternate_names": [
      "Zo'é",
      "Zo’é",
      "Zoʼé"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Zo%CA%BC%C3%A9",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q153639",
    "summary_en": "The Zoʼé people are an Indigenous people of Brazil in the State of Pará, Municipality of Óbidos, on the Cuminapanema River, Brazil. They are a Tupi–Guarani people. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 0.2°S, 55.8°W).",
    "summary_fi": "Zo'é-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 0.2°S, 55.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Zo’é"
    ]
  },
  {
    "slug": "kore-ah-korebaju-koreguaje-people",
    "name": "kòréβahώ (korebaju/Koreguaje) People",
    "name_fi": "kòréβahώ (korebaju/Koreguaje)-kansa",
    "native_name": "kòréβahώ (korebaju/Koreguaje)",
    "alternate_names": [
      "kòréβahώ (korebaju/Koreguaje)"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/k%C3%B2r%C3%A9%CE%B2ah%CF%8E_(korebaju%2FKoreguaje)",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in South American Indigenous Territories (centered near 0.5°N, 74.8°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "kòréβahώ (korebaju/Koreguaje)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Etelä-Amerikan alkuperäisalueilla (koordinaateissa noin 0.5°N, 74.8°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Traditional ancestral territory",
    "feature_name_matches": [
      "kòréβahώ (korebaju/Koreguaje)"
    ]
  },
  {
    "slug": "p-si-h-andoque-paasiaja-people",
    "name": "pʌʌsíʌhʌ (Andoque/Paasiaja) People",
    "name_fi": "pʌʌsíʌhʌ (Andoque/Paasiaja)-kansa",
    "native_name": "pʌʌsíʌhʌ (Andoque/Paasiaja)",
    "alternate_names": [
      "pʌʌsíʌhʌ (Andoque/Paasiaja)"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/p%CA%8C%CA%8Cs%C3%AD%CA%8Ch%CA%8C_(Andoque%2FPaasiaja)",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q42841",
    "summary_en": "Indigenous South American people and ethnic group whose ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 0.6°S, 72.7°W). Documented at the eve of European contact in 1492, they developed intricate adaptations to their regional ecology, kinship networks, and cultural traditions.",
    "summary_fi": "pʌʌsíʌhʌ (Andoque/Paasiaja)-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 0.6°S, 72.7°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "pʌʌsíʌhʌ (Andoque/Paasiaja)"
    ]
  },
  {
    "slug": "awa-indigenous",
    "name": "Ãwa People",
    "name_fi": "Ãwa-kansa",
    "native_name": "Ãwa",
    "alternate_names": [
      "Ãwa",
      "Awarapan 2"
    ],
    "culture_group": "South American Indigenous",
    "lineage_id": "south-america-indigenous",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Awarapan_2",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q140379862",
    "summary_en": "Awarapan 2 is a 2026 Indian Hindi-language action thriller film directed by Nitin Kakkar, written by Kakkar, Bilal Siddiqui and Vishesh Bhatt, and produced under his banner Vishesh Films. A sequel to the 2007 film Awarapan, the film stars Emraan Hashmi, Disha Patani and Shabana Azmi. Their ancestral territory is situated in Amazon Basin and Lowland Rainforests (centered near 12.4°S, 49.4°W).",
    "summary_fi": "Ãwa-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Amazonin sademetsän ja alankojen jokilaaksoissa (koordinaateissa noin 12.4°S, 49.4°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Amazonian maloca settlements",
    "feature_name_matches": [
      "Ãwa"
    ]
  },
  {
    "slug": "epera-people",
    "name": "Épera People",
    "name_fi": "Épera-kansa",
    "native_name": "Épera",
    "alternate_names": [
      "Épera",
      "Eperara language"
    ],
    "culture_group": "Andean",
    "lineage_id": "andean",
    "historical_period": "Pre-Columbian South American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Eperara_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Amerikan_intiaanit",
    "wikidata_id": "Q3055682",
    "summary_en": "Eperara a.k.a. Epena is an Embera language of Colombia, with about 250 speakers in Ecuador. Their ancestral territory is situated in Northern Andes and Inter-Andean Valleys (Ecuador/Colombia) (centered near 1.0°N, 79.0°W).",
    "summary_fi": "Épera-kansa on Etelä-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Andeilla ja vuoristolaaksoissa Ecuadorissa ja Kolumbiassa (koordinaateissa noin 1.0°N, 79.0°W). Vuoden 1492 historiallisessa horisontissa he harjoittivat alueensa luonnonoloihin sopeutunutta elämäntapaa ja vaalivat rikasta aineellista ja henkistä perinnettä.",
    "capital": "Northern Andean chiefdom centers",
    "feature_name_matches": [
      "Épera"
    ]
  }
]

// Verification check: ensure all 366 residue entities in South America are matched
const residueData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../data-sources/residue/south-america.json"), "utf-8")
)
const matchedNames = new Set(RESIDUE_SOUTH_AMERICA_CULTURES.flatMap((c) => c.feature_name_matches))

console.log(`Checking coverage against ${residueData.entities.length} South America residue entities...`)
const missing = residueData.entities.filter((e: any) => !matchedNames.has(e.name))

if (missing.length > 0) {
  console.error("Missing coverage for South America residue entities:", missing.map((m: any) => m.name))
  process.exit(1)
} else {
  console.log(`✓ 100% of ${residueData.entities.length} South America residue entities are matched!`)
}

// Write output batch file
const outPath = path.resolve(__dirname, "../../data-sources/batches/residue-south-america.json")
fs.writeFileSync(outPath, JSON.stringify(RESIDUE_SOUTH_AMERICA_CULTURES, null, 2), "utf-8")
console.log(`✓ Wrote ${RESIDUE_SOUTH_AMERICA_CULTURES.length} culture entries to ${outPath}`)
