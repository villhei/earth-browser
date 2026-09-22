import fs from "fs"
import path from "path"
import { CultureBatchEntry } from "./seed_culture_metadata_batch"

export const RESIDUE_NORTH_AMERICA_2_CULTURES: CultureBatchEntry[] = [
  {
    "slug": "abenaki-confederacy-wabanaki",
    "name": "Abenaki Nation (Wabanaki)",
    "name_fi": "Abenaki-kansa (Wabanaki)",
    "native_name": "Wabanaki / Alnôbak",
    "alternate_names": [
      "Abnaki",
      "Abenaki",
      "Wabanaki"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Wabanaki Eastern Algonquian Confederacy",
    "year_start": 1000,
    "year_end": 2026,
    "period_label": "1000 CE – Present",
    "period_label_fi": "1000 jaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Abenaki",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Abenakit",
    "wikidata_id": "Q262075",
    "summary_en": "Native American Algonquian nation of northern New England, the Maritime Provinces, and Quebec, prominent members of the Wabanaki Confederacy who defended their homeland during colonial border wars.",
    "summary_fi": "Uuden-Englannin pohjoisosien, Kanadan itäisten rannikkoprovinssien ja Quebecin algonkiinikansa, joka oli Wabanaki-liittokunnan keskeinen jäsen siirtomaasotien aikana.",
    "capital": "Odanak / Wôlinak",
    "feature_name_matches": [
      "Abnaki"
    ]
  },
  {
    "slug": "cahuilla-people-nation",
    "name": "Cahuilla People",
    "name_fi": "Cahuilla-kansa",
    "native_name": "Ivílyuatam / Cahuilla",
    "alternate_names": [
      "Cahulia",
      "Cahuilla"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Coachella Valley Indigenous Nation",
    "year_start": 500,
    "year_end": 2026,
    "period_label": "500 CE – Present",
    "period_label_fi": "500 jaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Cahuilla",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Cahuillat",
    "wikidata_id": "Q1025785",
    "summary_en": "Indigenous nation of inland Southern California situated across the Coachella Valley, San Jacinto Mountains, and Anza-Borrego desert, known for mesquite bean processing and basketry.",
    "summary_fi": "Etelä-Kalifornian sisämaan alkuperäiskansa Coachella Valleyn ja San Jacinton vuoriston alueella, joka tunnetaan mesquite-sadonkorjuustaan ja korinpontoperinteestään.",
    "capital": "Coachella Valley estates",
    "feature_name_matches": [
      "Cahulia"
    ]
  },
  {
    "slug": "costanoan-ohlone-people",
    "name": "Costanoan (Ohlone) People",
    "name_fi": "Costanoan-kansa (Ohlone)",
    "native_name": "Ohlone / Costanoan",
    "alternate_names": [
      "Costanoan",
      "Ohlone"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "San Francisco Bay Indigenous Horizon",
    "year_start": 500,
    "year_end": 2026,
    "period_label": "500 CE – Present",
    "period_label_fi": "500 jaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ohlone",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Ohlonet",
    "wikidata_id": "Q1417088",
    "summary_en": "Indigenous people of the San Francisco Bay Area, Santa Clara Valley, and Monterey Bay who developed diverse shellmound settlements and oak woodland management prior to Spanish Franciscan missionization.",
    "summary_fi": "San Franciscon lahden, Santa Claran laakson ja Montereyn lahden alkuperäiskansa, joka asutti rannikkoseutuja ja simpukkakumpuja ennen espanjalaisten lähetysasemien perustamista.",
    "capital": "San Francisco & Monterey Bay",
    "feature_name_matches": [
      "Costanoan"
    ]
  },
  {
    "slug": "kamia-kumeyaay-people",
    "name": "Kamia (Kumeyaay) People",
    "name_fi": "Kamia-kansa (Kumeyaay)",
    "native_name": "Kumeyaay / Kamia",
    "alternate_names": [
      "Kamia",
      "Kumeyaay",
      "Tipai-Ipai"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Baja & San Diego Indigenous Nation",
    "year_start": 1000,
    "year_end": 2026,
    "period_label": "1000 CE – Present",
    "period_label_fi": "1000 jaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kumeyaay",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Kumeyaay",
    "wikidata_id": "Q1791993",
    "summary_en": "Yuman-speaking indigenous people of the border region of southern California and Baja California, traditionally organized into bands across the coastal plains, inland mountains, and Colorado Desert.",
    "summary_fi": "Etelä-Kalifornian ja Baja Californian rajaseudun juma-kielinen alkuperäiskansa, jonka perinnealue ulottuu San Diegon rannikolta Colorado-aavikolle.",
    "capital": "San Diego & Colorado Desert",
    "feature_name_matches": [
      "Kamia"
    ]
  },
  {
    "slug": "luiseno-payomkawichum-people",
    "name": "Luiseño (Payómkawichum) People",
    "name_fi": "Luiseño-kansa (Payómkawichum)",
    "native_name": "Payómkawichum / Luiseño",
    "alternate_names": [
      "Luiseno",
      "Payómkawichum",
      "Luiseño"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Southern California Coastal Indigenous Nation",
    "year_start": 500,
    "year_end": 2026,
    "period_label": "500 CE – Present",
    "period_label_fi": "500 jaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Luise%C3%B1o",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Luise%C3%B1ot",
    "wikidata_id": "Q1287661",
    "summary_en": "Indigenous nation of coastal Southern California in northern San Diego and southern Riverside counties, taking their mission name from Mission San Luis Rey de Francia.",
    "summary_fi": "Etelä-Kalifornian rannikon alkuperäiskansa San Diegon ja Riversiden piirikunnissa, joka nimettiin espanjalaisten San Luis Reyn lähetysaseman mukaan.",
    "capital": "San Luis Rey River valley",
    "feature_name_matches": [
      "Luiseno"
    ]
  },
  {
    "slug": "navaho-dine-nation",
    "name": "Navajo Nation (Diné)",
    "name_fi": "Navajo-kansa (Diné)",
    "native_name": "Diné / Diné Bikéyah",
    "alternate_names": [
      "Navaho",
      "Navajo",
      "Diné"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "pueblo",
    "historical_period": "Southwestern Athabaskan Nation",
    "year_start": 1100,
    "year_end": 2026,
    "period_label": "1100 CE – Present",
    "period_label_fi": "1100 jaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Navajo",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Navajot",
    "wikidata_id": "Q83162",
    "summary_en": "Southern Athabaskan indigenous nation of the American Southwest inhabiting Diné Bikéyah across Arizona, New Mexico, and Utah, famed for silversmithing, woven blankets, and hogan dwellings.",
    "summary_fi": "Pohjois-Amerikan lounaisosien etelä-athabascalainen kansa Arizonassa, New Mexicossa ja Utahissa, joka tunnetaan hopeasepän taidoistaan, villakudonnaisistaan ja koodinpuhujistaan.",
    "capital": "Window Rock / Tségháhoodzání",
    "feature_name_matches": [
      "Navaho"
    ]
  },
  {
    "slug": "papago-tohono-oodham-people",
    "name": "Tohono O'odham (Papago)",
    "name_fi": "Tohono O'odham -kansa (Papago)",
    "native_name": "Tohono O'odham",
    "alternate_names": [
      "Papago",
      "Tohono O'odham"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southwest-indigenous",
    "historical_period": "Sonoran Desert Indigenous Nation",
    "year_start": 1000,
    "year_end": 2026,
    "period_label": "1000 CE – Present",
    "period_label_fi": "1000 jaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tohono_O%27odham",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Tohono_o%27odhamit",
    "wikidata_id": "Q1417531",
    "summary_en": "Indigenous nation of the Sonoran Desert in southern Arizona and northwestern Sonora, renowned for saguaro cactus fruit harvesting, dryland canal farming, and the Akimel O'odham heritage.",
    "summary_fi": "Sonoran aavikon alkuperäiskansa eteläisessä Arizonassa ja luoteisessa Meksikossa, joka tunnetaan saguaro-kaktushedelmien sadonkorjuusta ja kuivan maan viljelystä.",
    "capital": "Sells (Arizona) / Baboquivari Peak",
    "feature_name_matches": [
      "Papago"
    ]
  },
  {
    "slug": "bella-coola-nuxalk-people",
    "name": "Bella Coola (Nuxalk) People",
    "name_fi": "Bella Coola -kansa (Nuxalk)",
    "native_name": "Nuxalk / Bella Coola",
    "alternate_names": [
      "Bella",
      "Bella Coola",
      "Nuxalk"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Central Coast Salishan Maritime Nation",
    "year_start": 1000,
    "year_end": 2026,
    "period_label": "1000 CE – Present",
    "period_label_fi": "1000 jaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nuxalk",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Nuxalk",
    "wikidata_id": "Q1357608",
    "summary_en": "Salishan-speaking maritime nation of the Central Coast of British Columbia, isolated from other Coast Salish nations by Athabaskan and Wakashan groups, famed for dramatic petroglyphs and cedar architecture.",
    "summary_fi": "Brittiläisen Kolumbian keskisen rannikon sališinkielinen alkuperäiskansa, joka tunnetaan taidokkaista kalliopiirroksistaan, setripuukanootteistaan ja lohenkalastuksestaan.",
    "capital": "Bella Coola Valley",
    "feature_name_matches": [
      "Bella"
    ]
  },
  {
    "slug": "thirteen-british-american-colonies",
    "name": "Thirteen British American Colonies",
    "name_fi": "Kolmetoista siirtokuntaa",
    "native_name": "Thirteen Colonies / British America",
    "alternate_names": [
      "British American colonies",
      "Thirteen Colonies"
    ],
    "culture_group": "North America Post-Colonial",
    "lineage_id": "gbr",
    "historical_period": "British Colonial America",
    "year_start": 1607,
    "year_end": 1776,
    "period_label": "1607 CE – 1776 CE",
    "period_label_fi": "1607 jaa. – 1776 jaa.",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Thirteen_Colonies",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Kolmetoista_siirtokuntaa",
    "wikidata_id": "Q174780",
    "summary_en": "Group of British colonies on the Atlantic coast of North America established between 1607 and 1732 that declared independence in 1776 to form the United States of America.",
    "summary_fi": "Britannian kolmetoista kruununsiirtokuntaa Pohjois-Amerikan Atlantin rannikolla, jotka julistautuivat itsenäisiksi vuonna 1776 muodostaen Yhdysvallat.",
    "capital": "Philadelphia / Williamsburg / Boston",
    "feature_name_matches": [
      "British American colonies"
    ]
  },
  {
    "slug": "coquille-people-nation",
    "name": "Coquille People",
    "name_fi": "Coquille-kansa",
    "native_name": "Nu-wha-ha / Coquille",
    "alternate_names": [
      "Coqs",
      "Coquille"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Southern Oregon Coast Indigenous Nation",
    "year_start": 1000,
    "year_end": 2026,
    "period_label": "1000 CE – Present",
    "period_label_fi": "1000 jaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Coquille_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Coquillet",
    "wikidata_id": "Q1287702",
    "summary_en": "Native American people of southwestern Oregon whose traditional homelands span the Coquille River watershed and Coos Bay, harvesting tidal estuaries, lamprey, and cedar resources.",
    "summary_fi": "Lounais-Oregonin rannikon alkuperäiskansa Coquille-joen valuma-alueella, joka harjoitti lohen- ja nahkiaisenpyyntiä ja setripuun hyödyntämistä.",
    "capital": "Coquille River valley",
    "feature_name_matches": [
      "Coqs"
    ]
  },
  {
    "slug": "french-louisiana-colony",
    "name": "French Louisiana (La Louisiane)",
    "name_fi": "Ranskan Louisiana",
    "native_name": "La Louisiane / Louisiane française",
    "alternate_names": [
      "Louisiana",
      "La Louisiane",
      "French Louisiana"
    ],
    "culture_group": "North America Post-Colonial",
    "lineage_id": "fra",
    "historical_period": "New France Mississippi Basin Colony",
    "year_start": 1682,
    "year_end": 1803,
    "period_label": "1682 CE – 1803 CE",
    "period_label_fi": "1682 jaa. – 1803 jaa.",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Louisiana_(New_France)",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Ranskan_Louisiana",
    "wikidata_id": "Q218552",
    "summary_en": "Administrative district of New France encompassing the Mississippi River drainage basin claimed by Cavelier de La Salle in 1682, centered on New Orleans before the Louisiana Purchase of 1803.",
    "summary_fi": "Uuden Ranskan laaja hallintoalue Mississippin valuma-alueella vuodesta 1682, jonka keskus oli New Orleans ennen alueen myyntiä Yhdysvalloille vuonna 1803.",
    "capital": "New Orleans / Biloxi",
    "feature_name_matches": [
      "Louisiana"
    ]
  },
  {
    "slug": "mosquito-coast-protectorate",
    "name": "Mosquito Coast (Miskito Kingdom)",
    "name_fi": "Moskiittorannikko (Miskito-kuningaskunta)",
    "native_name": "Costa de Mosquitos / Miskito Nation",
    "alternate_names": [
      "Mosquito Coast",
      "Miskito Kingdom"
    ],
    "culture_group": "Caribbean",
    "lineage_id": "gbr",
    "historical_period": "British-Allied Miskito Kingdom",
    "year_start": 1638,
    "year_end": 1894,
    "period_label": "1638 CE – 1894 CE",
    "period_label_fi": "1638 jaa. – 1894 jaa.",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mosquito_Coast",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Moskiittorannikko",
    "wikidata_id": "Q742398",
    "summary_en": "Historic kingdom and British protectorate along the eastern Caribbean coast of Nicaragua and Honduras, ruled by Miskito kings in alliance with English traders and buccaneers.",
    "summary_fi": "Historiallinen kuningaskunta ja Britannian protektoraatti Nicaraguan ja Hondurasin Karibian-puoleisella rannikolla, jota hallitsivat miskitokuninkaat liitossa brittien kanssa.",
    "capital": "Bluefields",
    "feature_name_matches": [
      "Mosquito Coast"
    ]
  },
  {
    "slug": "tlingit-people-nation",
    "name": "Tlingit Nation (Lingít Aaní)",
    "name_fi": "Tlingit-kansa (Lingít)",
    "native_name": "Lingít / Lingít Aaní",
    "alternate_names": [
      "Tlinoit",
      "Tlingit",
      "Lingít"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pacific Northwest Coastal Indigenous Nation",
    "year_start": 1000,
    "year_end": 2026,
    "period_label": "1000 CE – Present",
    "period_label_fi": "1000 jaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tlingit",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Tlingitit",
    "wikidata_id": "Q268595",
    "summary_en": "Indigenous seafaring nation of the Pacific Northwest Coast in Southeast Alaska and British Columbia, renowned for complex matrilineal clans, totem poles, potlatches, and Chilkat weaving.",
    "summary_fi": "Tyynenmeren luoteisrannikon ja Kaakkois-Alaskan merenkulkijakansa, joka tunnetaan toteemipaaluistaan, potlatch-juhlistaan, klaanijärjestelmästään ja chilkat-kudonnasta.",
    "capital": "Sitka / Juneau estates",
    "feature_name_matches": [
      "Tlinoit"
    ]
  },
  {
    "slug": "danish-west-indies-colony",
    "name": "Danish West Indies",
    "name_fi": "Tanskan Länsi-Intia",
    "native_name": "Dansk Vestindien",
    "alternate_names": [
      "Virgin Islands (Danemark)",
      "Danish West Indies",
      "Dansk Vestindien"
    ],
    "culture_group": "Caribbean",
    "lineage_id": "dnk",
    "historical_period": "Danish Caribbean Sugar Colony",
    "year_start": 1672,
    "year_end": 1917,
    "period_label": "1672 CE – 1917 CE",
    "period_label_fi": "1672 jaa. – 1917 jaa.",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Danish_West_Indies",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Tanskan_L%C3%A4nsi-Intia",
    "wikidata_id": "Q687799",
    "summary_en": "Danish colony in the Caribbean comprising Saint Thomas, Saint John, and Saint Croix, known for sugar plantations worked by enslaved Africans until purchased by the United States in 1917.",
    "summary_fi": "Tanskan siirtokunta Karibialla (Saint Thomas, Saint John ja Saint Croix), joka vaurastui sokeriruokoplantaaseilla ennen myyntiään Yhdysvalloille vuonna 1917.",
    "capital": "Charlotte Amalie (Saint Thomas)",
    "feature_name_matches": [
      "Virgin Islands (Danemark)"
    ]
  },
  {
    "slug": "british-virgin-islands-colony",
    "name": "British Virgin Islands",
    "name_fi": "Brittiläiset Neitsytsaaret",
    "native_name": "British Virgin Islands",
    "alternate_names": [
      "Virgin Islands (UK)",
      "British Virgin Islands"
    ],
    "culture_group": "Caribbean",
    "lineage_id": "gbr",
    "historical_period": "British Leeward Islands Colony",
    "year_start": 1672,
    "year_end": 2026,
    "period_label": "1672 CE – Present",
    "period_label_fi": "1672 jaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/British_Virgin_Islands",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Brittil%C3%A4iset_Neitsytsaaret",
    "wikidata_id": "Q25305",
    "summary_en": "British overseas territory in the northeastern Caribbean comprising Tortola, Virgin Gorda, Anegada, and Jost Van Dyke, conquered from the Dutch in 1672.",
    "summary_fi": "Britannian merentakainen alue Koillis-Karibialla, joka valloitettiin hollantilaisilta vuonna 1672 ja koostuu Tortolasta, Virgin Gordasta ja lähisaarista.",
    "capital": "Road Town (Tortola)",
    "feature_name_matches": [
      "Virgin Islands (UK)"
    ]
  },
  {
    "slug": "antarctica-international-territory",
    "name": "Antarctica (International Territory)",
    "name_fi": "Etelämanner (kansainvälinen alue)",
    "native_name": "Antarctica / Antártida",
    "alternate_names": [
      "Antarctica",
      "Antarctic Treaty System"
    ],
    "culture_group": "Prehistoric & Archaeological",
    "lineage_id": "polar",
    "historical_period": "Antarctic Exploration & Treaty Era",
    "year_start": 1820,
    "year_end": 2026,
    "period_label": "1820 CE – Present",
    "period_label_fi": "1820 jaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Antarctica",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4manner",
    "wikidata_id": "Q51",
    "summary_en": "Earth's southernmost continent, governed internationally under the Antarctic Treaty of 1959 which preserves the continent exclusively for scientific research and bans military activity.",
    "summary_fi": "Maapallon eteläisin manner, jota hallinnoidaan vuoden 1959 Antarktiksen sopimuksen alaisena ja joka on varattu yksinomaan rauhanomaiseen tieteelliseen tutkimukseen.",
    "capital": "Amundsen-Scott South Pole Station",
    "feature_name_matches": [
      "Antarctica"
    ]
  },
  {
    "slug": "amuwu-people",
    "name": "'Amuwu People",
    "name_fi": "'Amuwu-kansa",
    "native_name": "'Amuwu",
    "alternate_names": [
      "'Amuwu",
      "Amuda people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Amuda_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q96371992",
    "summary_en": "The Amuda people, also known as the Idzem people, are a subgroup of the Orring ethnic group in the southeastern Nigeria state of Ebonyi. It includes four major clans: Ojolokpa, Buolung, Buora and Anmosho. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 34.8°N, 120.5°W).",
    "summary_fi": "'Amuwu-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 34.8°N, 120.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "'Amuwu"
    ]
  },
  {
    "slug": "abitibiwinni-aki-people",
    "name": "Abitibiwinni Aki People",
    "name_fi": "Abitibiwinni Aki-kansa",
    "native_name": "Abitibiwinni Aki",
    "alternate_names": [
      "Abitibiwinni Aki"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Abitibiwinni_Aki",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Subarctic Eastern Canada (Innu, Naskapi & Cree Lands) (centered near 49.4°N, 79.7°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Abitibiwinni Aki-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Itä-Kanadan subarktisella havumetsävyöhykkeellä (koordinaateissa noin 49.4°N, 79.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Subarctic forest encampments",
    "feature_name_matches": [
      "Abitibiwinni Aki"
    ]
  },
  {
    "slug": "accomack-people",
    "name": "Accomack People",
    "name_fi": "Accomack-kansa",
    "native_name": "Accomack",
    "alternate_names": [
      "Accomack",
      "Accomac people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Accomac_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q49299",
    "summary_en": "The Accomac people were a historic Native American tribe in Accomack and Northampton counties in Virginia. They were loosely affiliated with the Powhatan Confederacy. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 37.4°N, 75.9°W).",
    "summary_fi": "Accomack-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 37.4°N, 75.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Accomack"
    ]
  },
  {
    "slug": "achires-people",
    "name": "Achires People",
    "name_fi": "Achires-kansa",
    "native_name": "Achires",
    "alternate_names": [
      "Achires",
      "List of extinct Uto-Aztecan languages"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/List_of_extinct_Uto-Aztecan_languages",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q18154494",
    "summary_en": "A large number of languages known only from brief mentions are thought to have been Uto-Aztecan languages, but became extinct without being documented. The following list is based on Campbell (1997:133–135).Acaxee (Aiage): closely related to Tahue, a Cahitan language, linked with Tebaca and Sabaibo. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 24.9°N, 107.9°W).",
    "summary_fi": "Achires-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 24.9°N, 107.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Achires"
    ]
  },
  {
    "slug": "achi-people",
    "name": "Achí People",
    "name_fi": "Achí-kansa",
    "native_name": "Achí",
    "alternate_names": [
      "Achí",
      "Rabinal Achí"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Rabinal_Ach%C3%AD",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1896961",
    "summary_en": "The Rabinal Achí is a Maya theatrical play written in the Kʼicheʼ language and performed annually in Rabinal, Baja Verapaz, Guatemala. Its original name is Xajoj Tun, meaning \"Dance of the Tun\" instrument also known as wooden drum. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 15.1°N, 90.4°W).",
    "summary_fi": "Achí-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 15.1°N, 90.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Achí"
    ]
  },
  {
    "slug": "ahantchuyuk-people",
    "name": "Ahantchuyuk People",
    "name_fi": "Ahantchuyuk-kansa",
    "native_name": "Ahantchuyuk",
    "alternate_names": [
      "Ahantchuyuk",
      "Kalapuya"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kalapuya",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1269663",
    "summary_en": "The Kalapuya or Kʼalapʰuya are a Native American people, which had eight independent groups speaking three mutually intelligible dialects. The Kalapuya tribes' traditional homelands were the Willamette Valley of present-day western Oregon in the United States, an area bounded by the Cascade Range to the east, the Oregon Coast Range at the west, the Columbia River at the north, to the Calapooya Mountains of the Umpqua River at the south. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 45.1°N, 122.9°W).",
    "summary_fi": "Ahantchuyuk-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 45.1°N, 122.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Ahantchuyuk"
    ]
  },
  {
    "slug": "ahtna-nenn-people",
    "name": "Ahtna Nenn' People",
    "name_fi": "Ahtna Nenn'-kansa",
    "native_name": "Ahtna Nenn'",
    "alternate_names": [
      "Ahtna Nenn'",
      "Ahtna Nenn’",
      "Ahtna"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ahtna",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q46826",
    "summary_en": "The Ahtna are an Alaska Native Athabaskan people of the Athabaskan-speaking ethnolinguistic group. The people's homeland called Atna Nenn', is located in the Copper River area of southern Alaska, and the name Ahtna derives from the local name for the Copper River. Their ancestral country encompasses Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 62.2°N, 145.5°W).",
    "summary_fi": "Ahtna Nenn'-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 62.2°N, 145.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Ahtna Nenn’"
    ]
  },
  {
    "slug": "ais-people",
    "name": "Ais People",
    "name_fi": "Ais-kansa",
    "native_name": "Ais",
    "alternate_names": [
      "Ais",
      "Ais people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ais_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q49305",
    "summary_en": "The Ais or Ays were a Native American people of eastern Florida. Their territory included coastal areas and islands from approximately Cape Canaveral to the Indian River. Their ancestral country encompasses Florida Peninsula Indigenous Country (centered near 27.8°N, 80.7°W).",
    "summary_fi": "Ais-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Floridan niemimaalla ja rannikkovesillä (koordinaateissa noin 27.8°N, 80.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Florida coastal and riverine towns",
    "feature_name_matches": [
      "Ais"
    ]
  },
  {
    "slug": "akaitcho-people",
    "name": "Akaitcho People",
    "name_fi": "Akaitcho-kansa",
    "native_name": "Akaitcho",
    "alternate_names": [
      "Akaitcho"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Akaitcho",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q415320",
    "summary_en": "Akaitcho was a Copper Indian, and Chief of the Yellowknives. His territory included the region from the eastern portion of the Great Slave Lake, in the Northwest Territories, Canada, to the Coppermine River, in Nunavut. Their ancestral country encompasses Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 63.1°N, 108.6°W).",
    "summary_fi": "Akaitcho-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 63.1°N, 108.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Akaitcho"
    ]
  },
  {
    "slug": "akokisa-people",
    "name": "Akokisa People",
    "name_fi": "Akokisa-kansa",
    "native_name": "Akokisa",
    "alternate_names": [
      "Akokisa"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Akokisa",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1561062",
    "summary_en": "The Akokisa were an Indigenous tribe who lived on the upper Texan coast. They were a band of the Atakapa ethnolinguistic group, constituting the westernmost division of the Atakapan people. Their ancestral country encompasses Gulf Coast & Mississippi Delta (centered near 29.8°N, 94.7°W).",
    "summary_fi": "Akokisa-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Meksikonlahden rannikolla ja Mississippin suistossa (koordinaateissa noin 29.8°N, 94.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Gulf coastal settlements",
    "feature_name_matches": [
      "Akokisa"
    ]
  },
  {
    "slug": "alazapas-people",
    "name": "Alazapas People",
    "name_fi": "Alazapas-kansa",
    "native_name": "Alazapas",
    "alternate_names": [
      "Alazapas"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Alazapas",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 26.9°N, 100.1°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Alazapas-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 26.9°N, 100.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Alazapas"
    ]
  },
  {
    "slug": "anishinabewaki-people",
    "name": "Anishinabewaki People",
    "name_fi": "Anishinabewaki-kansa",
    "native_name": "Anishinabewaki",
    "alternate_names": [
      "Anishinabewaki",
      "Anishinabewaki ᐊᓂᔑᓈᐯᐗᑭ",
      "Anishinaabe"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Anishinaabe",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1956640",
    "summary_en": "The Anishinaabe are a group of culturally related Indigenous peoples in the Great Lakes region of Canada and the United States. They include the Ojibwe, Odawa, Potawatomi, Mississaugas, Nipissing, and Algonquin peoples. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 47.7°N, 80.5°W).",
    "summary_fi": "Anishinabewaki-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 47.7°N, 80.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Anishinabewaki ᐊᓂᔑᓈᐯᐗᑭ"
    ]
  },
  {
    "slug": "appamattuck-people",
    "name": "Appamattuck People",
    "name_fi": "Appamattuck-kansa",
    "native_name": "Appamattuck",
    "alternate_names": [
      "Appamattuck",
      "Appomattoc"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Appomattoc",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q49307",
    "summary_en": "The Appomattoc were a historic tribe of Virginia Indians speaking an Algonquian language, and residing along the lower Appomattox River, in the area of what is now Petersburg, Colonial Heights, Chesterfield and Dinwiddie Counties in present-day southeast Virginia. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 37.1°N, 77.4°W).",
    "summary_fi": "Appamattuck-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 37.1°N, 77.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Appamattuck"
    ]
  },
  {
    "slug": "arosaguntacook-people",
    "name": "Arosaguntacook People",
    "name_fi": "Arosaguntacook-kansa",
    "native_name": "Arosaguntacook",
    "alternate_names": [
      "Arosaguntacook",
      "Androscoggin people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Androscoggin_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q465864",
    "summary_en": "The Androscoggin were an Abenaki people and an Indigenous people of the Northeastern Woodlands. They historically lived along the Androscoggin River in what are now the U.S. Their ancestral country encompasses Wabanaki and Maritime Northeast (centered near 45.0°N, 70.9°W).",
    "summary_fi": "Arosaguntacook-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Wabanakin ja merellisen koillisen rannikkoalueilla (koordinaateissa noin 45.0°N, 70.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Maritime traditional encampments",
    "feature_name_matches": [
      "Arosaguntacook"
    ]
  },
  {
    "slug": "rocky-mountain-people",
    "name": "Rocky Mountain People",
    "name_fi": "Rocky Mountain-kansa",
    "native_name": "Aseniwuche Winewak (Rocky Mountain)",
    "alternate_names": [
      "Aseniwuche Winewak (Rocky Mountain)",
      "Rocky Mountain",
      "Rocky Mountains"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Rocky_Mountains",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q5463",
    "summary_en": "The Rocky Mountains, also known as the Rockies, are a major mountain range and the largest mountain system in North America. The Rocky Mountains stretch 3,000 mi (4,800 km) in a straight-line distance from the northernmost part of Western Canada, to New Mexico in the Southwestern United States. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 53.9°N, 118.7°W).",
    "summary_fi": "Aseniwuche Winewak (Rocky Mountain)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 53.9°N, 118.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Aseniwuche Winewak (Rocky Mountain)"
    ]
  },
  {
    "slug": "atfalati-people",
    "name": "Atfalati People",
    "name_fi": "Atfalati-kansa",
    "native_name": "Atfalati",
    "alternate_names": [
      "Atfalati"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Atfalati",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1256969",
    "summary_en": "The Atfalati, also known as the Tualatin or Wapato Lake Indians are a tribe of the Kalapuya Native Americans who originally inhabited and continue to steward some 24 villages on the Tualatin Plains in the northwest part of the U.S. state of Oregon; the Atfalati also live in the hills around Forest Grove, along Wapato Lake and the north fork of the Yamhill River, and into areas of Southern Portland. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 45.5°N, 123.0°W).",
    "summary_fi": "Atfalati-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 45.5°N, 123.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Atfalati"
    ]
  },
  {
    "slug": "atsugewi-people",
    "name": "Atsugewi People",
    "name_fi": "Atsugewi-kansa",
    "native_name": "Atsugewi",
    "alternate_names": [
      "Atsugewi"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Atsugewi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q757788",
    "summary_en": "The Atsugewi are Native Americans residing in northeastern California, United States. Their traditional lands are near Mount Shasta, specifically the Pit River drainage on Burney, Hat, and Dixie Valley or Horse Creeks. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 40.8°N, 121.1°W).",
    "summary_fi": "Atsugewi-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 40.8°N, 121.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Atsugewi"
    ]
  },
  {
    "slug": "aucocisco-people",
    "name": "Aucocisco People",
    "name_fi": "Aucocisco-kansa",
    "native_name": "Aucocisco",
    "alternate_names": [
      "Aucocisco"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Aucocisco",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Northeastern Woodlands and Great Lakes Basin (centered near 43.7°N, 70.3°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Aucocisco-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 43.7°N, 70.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Aucocisco"
    ]
  },
  {
    "slug": "awaswas-people",
    "name": "Awaswas People",
    "name_fi": "Awaswas-kansa",
    "native_name": "Awaswas",
    "alternate_names": [
      "Awaswas"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Awaswas",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1257159",
    "summary_en": "The Awaswas, also known as the Santa Cruz people, were a group of the Indigenous peoples of California in North America, with subgroups historically numbering about 600 to 1,400. Academic research suggests that their ancestors had lived within the Santa Cruz Mountains region for approximately 12,000 years. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 37.1°N, 122.1°W).",
    "summary_fi": "Awaswas-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 37.1°N, 122.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Awaswas"
    ]
  },
  {
    "slug": "tzotzil-people",
    "name": "Tzotzil People",
    "name_fi": "Tzotzil-kansa",
    "native_name": "Batsil Winik' Otik (Tzotzil)",
    "alternate_names": [
      "Batsil Winik' Otik (Tzotzil)",
      "Tzotzil"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tzotzil",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q387073",
    "summary_en": "The Tzotzil are an Indigenous Maya people of the central highlands of Chiapas, Mexico. As of 2000, they numbered about 298,000. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 16.8°N, 92.7°W).",
    "summary_fi": "Batsil Winik' Otik (Tzotzil)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 16.8°N, 92.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Batsil Winik' Otik (Tzotzil)"
    ]
  },
  {
    "slug": "bidai-people",
    "name": "Bidai People",
    "name_fi": "Bidai-kansa",
    "native_name": "Bidai",
    "alternate_names": [
      "Bidai"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "plains-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Bidai",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q4903991",
    "summary_en": "The Bidai, who referred to themselves as the Quasmigdo, were a tribe of American Indians from eastern Texas. Their ancestral country encompasses Great Plains (Plains Indigenous Territory) (centered near 30.8°N, 95.2°W).",
    "summary_fi": "Bidai-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Suurten tasankojen (Great Plains) perinnealueilla (koordinaateissa noin 30.8°N, 95.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Plains ancestral encampments",
    "feature_name_matches": [
      "Bidai"
    ]
  },
  {
    "slug": "bostos-people",
    "name": "Bostos People",
    "name_fi": "Bostos-kansa",
    "native_name": "Bostos",
    "alternate_names": [
      "Bostos",
      "Bontoc people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Bontoc_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q4093365",
    "summary_en": "The Bontoc ethnolinguistic group can be found in the central and eastern portions of Mountain Province, on the island of Luzon in the Philippines. They formerly practiced head-hunting and had distinctive body tattoos. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 10.7°N, 84.6°W).",
    "summary_fi": "Bostos-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 10.7°N, 84.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Bostos"
    ]
  },
  {
    "slug": "bribri-people",
    "name": "Bribri People",
    "name_fi": "Bribri-kansa",
    "native_name": "Bribri",
    "alternate_names": [
      "Bribri",
      "Bribri people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Bribri_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q913374",
    "summary_en": "The Bribri are an Indigenous people in eastern Costa Rica and northern Panama. Today, most Bribri people speak the Bribri language or Spanish. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 9.5°N, 83.1°W).",
    "summary_fi": "Bribri-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 9.5°N, 83.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Bribri"
    ]
  },
  {
    "slug": "brothertown-people",
    "name": "Brothertown People",
    "name_fi": "Brothertown-kansa",
    "native_name": "Brothertown",
    "alternate_names": [
      "Brothertown",
      "Brothertown, Wisconsin"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Brothertown%2C_Wisconsin",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q372649",
    "summary_en": "Brothertown is a town in Calumet County in the U.S. state of Wisconsin. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 44.0°N, 88.3°W).",
    "summary_fi": "Brothertown-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 44.0°N, 88.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Brothertown"
    ]
  },
  {
    "slug": "brunka-people",
    "name": "Brunka People",
    "name_fi": "Brunka-kansa",
    "native_name": "Brunka",
    "alternate_names": [
      "Brunka",
      "Brunei People's Party"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Brunei_People's_Party",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q4721260",
    "summary_en": "The Brunei People's Party (BPR), also known as the Parti Rakyat Brunei (PRB), was a political party in Brunei that was later banned. It won the district council elections in 1962, but disputes with the Sultan and the British authorities led to the failed Brunei revolt. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 9.2°N, 83.4°W).",
    "summary_fi": "Brunka-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 9.2°N, 83.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Brunka"
    ]
  },
  {
    "slug": "bugle-and-ngabe-people",
    "name": "Buglé and Ngäbé People",
    "name_fi": "Buglé and Ngäbé-kansa",
    "native_name": "Buglé and Ngäbé",
    "alternate_names": [
      "Buglé and Ngäbé"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Bugl%C3%A9_and_Ng%C3%A4b%C3%A9",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Mesoamerica (Maya Region & Central America) (centered near 8.6°N, 81.7°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Buglé and Ngäbé-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 8.6°N, 81.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Buglé and Ngäbé"
    ]
  },
  {
    "slug": "cahita-people",
    "name": "Cahita People",
    "name_fi": "Cahita-kansa",
    "native_name": "Cahita",
    "alternate_names": [
      "Cahita",
      "Cáhita"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/C%C3%A1hita",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q358250",
    "summary_en": "Cáhita or Cahíta is an umbrella term for several Indigenous peoples of Mexico in the West Coast states of Sonora and Sinaloa. The term includes the Yaqui, Mayo, and Tehueco peoples. Their ancestral country encompasses Aridoamerica and Sonoran Desert (Northern Mexico & Borderlands) (centered near 26.3°N, 108.6°W).",
    "summary_fi": "Cahita-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Aridoamerikassa ja Sonoran aavikolla Pohjois-Meksikon rajaseudulla (koordinaateissa noin 26.3°N, 108.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Sonoran rancherías and oasis settlements",
    "feature_name_matches": [
      "Cahita"
    ]
  },
  {
    "slug": "cahto-people",
    "name": "Cahto People",
    "name_fi": "Cahto-kansa",
    "native_name": "Cahto",
    "alternate_names": [
      "Cahto"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Cahto",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q4300220",
    "summary_en": "The Cahto are an Indigenous Californian group of Native Americans. Today most descendants are enrolled as the federally recognized tribe, the Cahto Indian Tribe of the Laytonville Rancheria, and a small group of Cahto are enrolled in the Round Valley Indian Tribes of the Round Valley Reservation. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 39.8°N, 123.7°W).",
    "summary_fi": "Cahto-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 39.8°N, 123.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Cahto"
    ]
  },
  {
    "slug": "caldwell-people",
    "name": "Caldwell People",
    "name_fi": "Caldwell-kansa",
    "native_name": "Caldwell",
    "alternate_names": [
      "Caldwell",
      "Kentavious Caldwell-Pope"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kentavious_Caldwell-Pope",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q13562909",
    "summary_en": "Kentavious Tannell Caldwell-Pope, also known by his initials KCP, is an American professional basketball player for the Philadelphia 76ers of the National Basketball Association (NBA). He was named a McDonald's All-American as one of the top high school basketball players in the class of 2011. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 42.0°N, 82.8°W).",
    "summary_fi": "Caldwell-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 42.0°N, 82.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Caldwell"
    ]
  },
  {
    "slug": "calicuas-people",
    "name": "Calicuas People",
    "name_fi": "Calicuas-kansa",
    "native_name": "Calicuas",
    "alternate_names": [
      "Calicuas"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Calicuas",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Northeastern Woodlands and Great Lakes Basin (centered near 38.7°N, 80.4°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Calicuas-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 38.7°N, 80.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Calicuas"
    ]
  },
  {
    "slug": "cape-fear-people",
    "name": "Cape Fear People",
    "name_fi": "Cape Fear-kansa",
    "native_name": "Cape Fear",
    "alternate_names": [
      "Cape Fear",
      "Cape Fear Indians"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Cape_Fear_Indians",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q55209",
    "summary_en": "The Cape Fear Indians were a small, coastal tribe of Native Americans who lived on the Cape Fear River in North Carolina. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 34.0°N, 78.3°W).",
    "summary_fi": "Cape Fear-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 34.0°N, 78.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Cape Fear"
    ]
  },
  {
    "slug": "bc-people",
    "name": "BC People",
    "name_fi": "BC-kansa",
    "native_name": "Carcross/Tagish First Nation (BC)",
    "alternate_names": [
      "Carcross/Tagish First Nation (BC)",
      "BC",
      "Carcross/Tagish First Nation"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Carcross%2FTagish_First_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q930650",
    "summary_en": "The Carcross/Tagish First Nation is a First Nation native to the Canadian territory of Yukon. Its original population centres were Carcross and Tagish, and Squanga, although many of its citizens also live in Whitehorse. Their ancestral country encompasses Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 59.6°N, 134.6°W).",
    "summary_fi": "Carcross/Tagish First Nation (BC)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 59.6°N, 134.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Carcross/Tagish First Nation (BC)"
    ]
  },
  {
    "slug": "yukon-people",
    "name": "Yukon People",
    "name_fi": "Yukon-kansa",
    "native_name": "Carcross/Tagish First Nation (Yukon)",
    "alternate_names": [
      "Carcross/Tagish First Nation (Yukon)",
      "Yukon"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yukon",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2009",
    "summary_en": "Yukon is a territory of Canada, bordering British Columbia to the south, the Northwest Territories to the east, the Beaufort Sea to the north, and the U.S. state of Alaska to the west. Their ancestral country encompasses Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 60.3°N, 135.0°W).",
    "summary_fi": "Carcross/Tagish First Nation (Yukon)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 60.3°N, 135.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Carcross/Tagish First Nation (Yukon)"
    ]
  },
  {
    "slug": "cascades-people",
    "name": "Cascades People",
    "name_fi": "Cascades-kansa",
    "native_name": "Cascades",
    "alternate_names": [
      "Cascades",
      "Watlala"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Watlala",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2274277",
    "summary_en": "The Watlala are a group of Chinookan-speaking Native Americans. They inhabited the meadows of Sams Walker Day Use Site, near Skamania, Washington, and St. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 45.5°N, 122.1°W).",
    "summary_fi": "Cascades-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 45.5°N, 122.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Cascades"
    ]
  },
  {
    "slug": "caxcan-people",
    "name": "Caxcan People",
    "name_fi": "Caxcan-kansa",
    "native_name": "Caxcan",
    "alternate_names": [
      "Caxcan"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Caxcan",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q5055256",
    "summary_en": "The Caxcan are an ethnic group who are Indigenous to western and north-central Mexico, particularly the regions corresponding to modern-day Zacatecas, southern Durango, Jalisco, Colima, Aguascalientes, Nayarit. The Caxcan language is most often described as an ancient variant of Nahuatl and is a member of the Uto-Aztecan language family. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 21.6°N, 103.2°W).",
    "summary_fi": "Caxcan-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 21.6°N, 103.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Caxcan"
    ]
  },
  {
    "slug": "ch-orti-people",
    "name": "Ch'orti' People",
    "name_fi": "Ch'orti'-kansa",
    "native_name": "Ch'orti'",
    "alternate_names": [
      "Ch'orti'",
      "Chʼortiʼ people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ch%CA%BCorti%CA%BC_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1076608",
    "summary_en": "The Chʼortiʼ people are one of the Indigenous Maya peoples, who primarily reside in communities and towns of northeastern Guatemala, northwestern Honduras, and northern El Salvador. Their indigenous language, also known as Chʼortiʼ, is a survival of Classic Maya language, the language of the inscriptions in Copan. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 14.7°N, 89.2°W).",
    "summary_fi": "Ch'orti'-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 14.7°N, 89.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Ch'orti'"
    ]
  },
  {
    "slug": "chafan-people",
    "name": "Chafan People",
    "name_fi": "Chafan-kansa",
    "native_name": "Chafan",
    "alternate_names": [
      "Chafan",
      "Chaga people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chaga_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q920233",
    "summary_en": "The Chaga or Chagga are a Bantu ethnic group from Kilimanjaro Region of Tanzania. They are the third-largest ethnic group in Tanzania. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 44.2°N, 123.0°W).",
    "summary_fi": "Chafan-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 44.2°N, 123.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Chafan"
    ]
  },
  {
    "slug": "chalat-people",
    "name": "Chalat' People",
    "name_fi": "Chalat'-kansa",
    "native_name": "ChalAt'i'lo t'sikAti (Chalat')",
    "alternate_names": [
      "ChalAt'i'lo t'sikAti (Chalat')",
      "ChalAt’i’lo t’sikAti (Chalat’)",
      "Chalat'",
      "Chaga people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chaga_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q920233",
    "summary_en": "The Chaga or Chagga are a Bantu ethnic group from Kilimanjaro Region of Tanzania. They are the third-largest ethnic group in Tanzania. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 47.8°N, 124.1°W).",
    "summary_fi": "ChalAt'i'lo t'sikAti (Chalat')-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 47.8°N, 124.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "ChalAt’i’lo t’sikAti (Chalat’)"
    ]
  },
  {
    "slug": "chalon-people",
    "name": "Chalon People",
    "name_fi": "Chalon-kansa",
    "native_name": "Chalon",
    "alternate_names": [
      "Chalon",
      "Chalon people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chalon_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2947996",
    "summary_en": "The Chalon people are one of eight divisions of the Ohlone (Costanoan) people of Native Americans who lived in Northern California. Chalon is also the name of their spoken language, which is listed as one of the Ohlone languages of the Utian family. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 36.5°N, 121.0°W).",
    "summary_fi": "Chalon-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 36.5°N, 121.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Chalon"
    ]
  },
  {
    "slug": "chelan-people",
    "name": "Chelan People",
    "name_fi": "Chelan-kansa",
    "native_name": "Chelan",
    "alternate_names": [
      "Chelan",
      "Chelan people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chelan_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1069037",
    "summary_en": "The Chelan are an Interior Salish people speaking the Wenatchi dialect, though separate from that tribe. The name derives from the traditional Wenatchi name Tsi-Laan meaning \"deep water\". Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 48.2°N, 120.5°W).",
    "summary_fi": "Chelan-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 48.2°N, 120.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Chelan"
    ]
  },
  {
    "slug": "chemapho-people",
    "name": "Chemapho People",
    "name_fi": "Chemapho-kansa",
    "native_name": "Chemapho",
    "alternate_names": [
      "Chemapho"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chemapho",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 44.5°N, 123.4°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Chemapho-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 44.5°N, 123.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Chemapho"
    ]
  },
  {
    "slug": "chepenefa-people",
    "name": "Chepenefa People",
    "name_fi": "Chepenefa-kansa",
    "native_name": "Chepenefa",
    "alternate_names": [
      "Chepenefa"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chepenefa",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 44.7°N, 123.4°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Chepenefa-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 44.7°N, 123.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Chepenefa"
    ]
  },
  {
    "slug": "chesapeake-people",
    "name": "Chesapeake People",
    "name_fi": "Chesapeake-kansa",
    "native_name": "Chesapeake",
    "alternate_names": [
      "Chesapeake",
      "Chesapeake people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chesapeake_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3445752",
    "summary_en": "The Chesepian (Chesapeake) were a Native American tribe who lived near present-day South Hampton Roads in the U.S. state of Virginia. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 36.7°N, 76.2°W).",
    "summary_fi": "Chesapeake-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 36.7°N, 76.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Chesapeake"
    ]
  },
  {
    "slug": "chiapaneco-people",
    "name": "Chiapaneco People",
    "name_fi": "Chiapaneco-kansa",
    "native_name": "Chiapaneco",
    "alternate_names": [
      "Chiapaneco",
      "Chiapas"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chiapas",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q60123",
    "summary_en": "Chiapas, officially the Free and Sovereign State of Chiapas, is one of the states that make up the 32 federal entities of Mexico. It comprises 124 municipalities as of September 2017 and its capital and largest city is Tuxtla Gutiérrez. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 16.6°N, 93.0°W).",
    "summary_fi": "Chiapaneco-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 16.6°N, 93.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Chiapaneco"
    ]
  },
  {
    "slug": "chicora-people",
    "name": "Chicora People",
    "name_fi": "Chicora-kansa",
    "native_name": "Chicora",
    "alternate_names": [
      "Chicora"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chicora",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q5096494",
    "summary_en": "Chicora was a legendary Native American kingdom or tribe sought during the 16th century by various European explorers in present-day South Carolina. The legend originated after Spanish slave traders captured a Native American they called Francisco de Chicora in 1521; afterward, they came to treat Francisco's home country as a land of abundant wealth and natural resources. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 33.6°N, 79.2°W).",
    "summary_fi": "Chicora-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 33.6°N, 79.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Chicora"
    ]
  },
  {
    "slug": "chilula-people",
    "name": "Chilula People",
    "name_fi": "Chilula-kansa",
    "native_name": "Chilula",
    "alternate_names": [
      "Chilula"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chilula",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q5099254",
    "summary_en": "The Chilula were a Pacific Coast Athabaskan tribe speaking a dialect similar to the Hupa to the east and Whilkut to the south, who inhabited the area on or near Lower Redwood Creek, in Northern California. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 41.1°N, 123.9°W).",
    "summary_fi": "Chilula-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 41.1°N, 123.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Chilula"
    ]
  },
  {
    "slug": "chimacum-people",
    "name": "Chimacum People",
    "name_fi": "Chimacum-kansa",
    "native_name": "Chimacum",
    "alternate_names": [
      "Chimacum",
      "Chimacum, Washington"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chimacum%2C_Washington",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3474386",
    "summary_en": "Chimacum is an unincorporated community in Jefferson County, Washington, United States, located in the center of the primary agricultural area of the eastern Olympic Peninsula. As of the 2020 census, Chimacum is not listed as a CDP despite being a prominent population center in the area. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 47.9°N, 122.8°W).",
    "summary_fi": "Chimacum-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 47.9°N, 122.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Chimacum"
    ]
  },
  {
    "slug": "territory-people",
    "name": "territory People",
    "name_fi": "territory-kansa",
    "native_name": "Chimariko (territory)",
    "alternate_names": [
      "Chimariko (territory)",
      "territory",
      "Territory"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Territory",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q183366",
    "summary_en": "A territory is an area of land, sea, or space, belonging or connected to a particular country, person, or animal. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 40.8°N, 123.3°W).",
    "summary_fi": "Chimariko (territory)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 40.8°N, 123.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Chimariko (territory)"
    ]
  },
  {
    "slug": "chiso-people",
    "name": "Chiso People",
    "name_fi": "Chiso-kansa",
    "native_name": "Chiso",
    "alternate_names": [
      "Chiso"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chiso",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q11405838",
    "summary_en": "Chiso Co., Ltd. is the oldest textile producer in the world. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 28.9°N, 103.3°W).",
    "summary_fi": "Chiso-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 28.9°N, 103.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Chiso"
    ]
  },
  {
    "slug": "chetco-people",
    "name": "Chetco People",
    "name_fi": "Chetco-kansa",
    "native_name": "Chit-dee-ni (Chetco)",
    "alternate_names": [
      "Chit-dee-ni (Chetco)",
      "Chetco",
      "Chetco people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chetco_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q20828",
    "summary_en": "The Chetco are a tribe of Native Americans who originally lived along the lower Chetco River and Winchuck River in Curry County in the U.S. state of Oregon. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 42.1°N, 124.2°W).",
    "summary_fi": "Chit-dee-ni (Chetco)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 42.1°N, 124.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Chit-dee-ni (Chetco)"
    ]
  },
  {
    "slug": "chitimacha-people",
    "name": "Chitimacha People",
    "name_fi": "Chitimacha-kansa",
    "native_name": "Chitimacha",
    "alternate_names": [
      "Chitimacha"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chitimacha",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q56188",
    "summary_en": "The Chitimacha are an Indigenous people of the Southeastern Woodlands in Louisiana. They are a federally recognized tribe, the Chitimacha Tribe of Louisiana. Their ancestral country encompasses Gulf Coast & Mississippi Delta (centered near 29.6°N, 90.7°W).",
    "summary_fi": "Chitimacha-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Meksikonlahden rannikolla ja Mississippin suistossa (koordinaateissa noin 29.6°N, 90.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Gulf coastal settlements",
    "feature_name_matches": [
      "Chitimacha"
    ]
  },
  {
    "slug": "chochenyo-people",
    "name": "Chochenyo People",
    "name_fi": "Chochenyo-kansa",
    "native_name": "Chochenyo",
    "alternate_names": [
      "Chochenyo"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chochenyo",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2964255",
    "summary_en": "The Chochenyo are one of the divisions of the Ohlone, an Indigenous people of Northern California. The Chochenyo resided on the east side of the San Francisco Bay, primarily in what is now Alameda County, and also Contra Costa County, from the Berkeley Hills inland to the western Diablo Range. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 37.7°N, 122.0°W).",
    "summary_fi": "Chochenyo-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 37.7°N, 122.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Chochenyo"
    ]
  },
  {
    "slug": "cholulteca-people",
    "name": "Cholulteca People",
    "name_fi": "Cholulteca-kansa",
    "native_name": "Cholulteca",
    "alternate_names": [
      "Cholulteca",
      "Choluteca, Choluteca"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Choluteca%2C_Choluteca",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1773148",
    "summary_en": "Choluteca is a municipality and the capital city of the Honduran department of the same name. Situated in southern Honduras between El Salvador and Nicaragua, the city is generally considered the regional centre of southern Honduras and is a major transit point on the Pan-American Highway. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 19.0°N, 98.3°W).",
    "summary_fi": "Cholulteca-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 19.0°N, 98.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Cholulteca"
    ]
  },
  {
    "slug": "chontal-de-guerrero-tuxteco-people",
    "name": "Chontal de Guerrero – Tuxteco People",
    "name_fi": "Chontal de Guerrero – Tuxteco-kansa",
    "native_name": "Chontal de Guerrero – Tuxteco",
    "alternate_names": [
      "Chontal de Guerrero – Tuxteco"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chontal_de_Guerrero_%E2%80%93_Tuxteco",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 18.5°N, 99.9°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Chontal de Guerrero – Tuxteco-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 18.5°N, 99.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Chontal de Guerrero – Tuxteco"
    ]
  },
  {
    "slug": "chowanoke-people",
    "name": "Chowanoke People",
    "name_fi": "Chowanoke-kansa",
    "native_name": "Chowanoke",
    "alternate_names": [
      "Chowanoke",
      "Chowanoc"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chowanoc",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1076799",
    "summary_en": "The Chowanoc, also Chowanoke, were an Algonquian-speaking Native American tribe who historically lived near the Chowan River in North Carolina. At the time of the first English contact in 1580s, they were a large and influential tribe and remained so through the mid-17th century. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 36.3°N, 77.1°W).",
    "summary_fi": "Chowanoke-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 36.3°N, 77.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Chowanoke"
    ]
  },
  {
    "slug": "chukchansi-people",
    "name": "Chukchansi People",
    "name_fi": "Chukchansi-kansa",
    "native_name": "Chukchansi",
    "alternate_names": [
      "Chukchansi",
      "Yokuts"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yokuts",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2585783",
    "summary_en": "The Yokuts are an Indigenous people of California who live in the Central Valley. They are often divided into Foothill Yokuts, Northern Valley Yokuts, and Southern Valley Yokuts. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 37.3°N, 119.8°W).",
    "summary_fi": "Chukchansi-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 37.3°N, 119.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Chukchansi"
    ]
  },
  {
    "slug": "ciguayo-people",
    "name": "Ciguayo People",
    "name_fi": "Ciguayo-kansa",
    "native_name": "Ciguayo",
    "alternate_names": [
      "Ciguayo",
      "Ciguayos"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ciguayos",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q5119242",
    "summary_en": "The Ciguayos were a group of Indigenous people who inhabited the Samaná Peninsula and its adjoining regions in the present-day Dominican Republic. The Ciguayos appear to have predated the agricultural Taíno who inhabited much of the island. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 19.3°N, 69.9°W).",
    "summary_fi": "Ciguayo-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 19.3°N, 69.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Ciguayo"
    ]
  },
  {
    "slug": "clackamas-people",
    "name": "Clackamas People",
    "name_fi": "Clackamas-kansa",
    "native_name": "Clackamas",
    "alternate_names": [
      "Clackamas",
      "Clackamas people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Clackamas_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2043044",
    "summary_en": "The Clackamas Indians are a band of Chinook Native Americans who historically lived along the Clackamas River in the northern Willamette Valley, Oregon. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 45.4°N, 122.4°W).",
    "summary_fi": "Clackamas-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 45.4°N, 122.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Clackamas"
    ]
  },
  {
    "slug": "clatskanie-people",
    "name": "Clatskanie People",
    "name_fi": "Clatskanie-kansa",
    "native_name": "Clatskanie",
    "alternate_names": [
      "Clatskanie",
      "Clatskanie, Oregon"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Clatskanie%2C_Oregon",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q332856",
    "summary_en": "Clatskanie is a city in Columbia County, Oregon, United States. It was named for the Tlatskanai Native American tribe, and the Clatskanie River which flows through the town and empties into the Columbia River about four miles to the north. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 45.9°N, 123.4°W).",
    "summary_fi": "Clatskanie-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 45.9°N, 123.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Clatskanie"
    ]
  },
  {
    "slug": "clatsop-people",
    "name": "Clatsop People",
    "name_fi": "Clatsop-kansa",
    "native_name": "Clatsop",
    "alternate_names": [
      "Clatsop"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Clatsop",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q576523",
    "summary_en": "The Clatsop are a Chinookan-speaking Indigenous people of the Pacific Northwest of the United States. In the early 19th century they inhabited an area of the northwestern coast of present-day Oregon from the mouth of the Columbia River south to Tillamook Head, Oregon. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 46.0°N, 123.8°W).",
    "summary_fi": "Clatsop-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 46.0°N, 123.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Clatsop"
    ]
  },
  {
    "slug": "coahuiltecan-people",
    "name": "Coahuiltecan People",
    "name_fi": "Coahuiltecan-kansa",
    "native_name": "Coahuiltecan",
    "alternate_names": [
      "Coahuiltecan"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Coahuiltecan",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1104182",
    "summary_en": "The Coahuiltecans were a diverse grouping of various Indigenous peoples of Aridoamerica who lived in present-day northeastern Mexico and southern Texas. They once spoke a variety of possibly unrelated languages known as the Coahuiltecan languages. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 27.8°N, 100.2°W).",
    "summary_fi": "Coahuiltecan-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 27.8°N, 100.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Coahuiltecan"
    ]
  },
  {
    "slug": "coast-yuki-people",
    "name": "Coast Yuki People",
    "name_fi": "Coast Yuki-kansa",
    "native_name": "Coast Yuki",
    "alternate_names": [
      "Coast Yuki",
      "Northern Yukian language"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Northern_Yukian_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36993",
    "summary_en": "Northern Yukian, also known as Ukomnoʼm, is an extinct language of California, formerly spoken by the Yuki people. The Yuki are the original inhabitants of the Eel River area and the Round Valley Reservation of northern California. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 39.7°N, 123.7°W).",
    "summary_fi": "Coast Yuki-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 39.7°N, 123.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Coast Yuki"
    ]
  },
  {
    "slug": "coca-people",
    "name": "Coca People",
    "name_fi": "Coca-kansa",
    "native_name": "Coca",
    "alternate_names": [
      "Coca",
      "Coca people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Coca_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q5139113",
    "summary_en": "The Coca people are an Indigenous people of Mexico who inhabit parts of the state of Jalisco, particularly around Lake Chapala, such as the small town of Mezcala in the municipality of Poncitlán. Swanton considered the Coca to be a branch of the Caxcan alongside the Tecuexe and the Caxcan proper. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 20.3°N, 103.2°W).",
    "summary_fi": "Coca-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 20.3°N, 103.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Coca"
    ]
  },
  {
    "slug": "coharie-people",
    "name": "Coharie People",
    "name_fi": "Coharie-kansa",
    "native_name": "Coharie",
    "alternate_names": [
      "Coharie",
      "Coharie Intra-tribal Council, Inc."
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Coharie_Intra-tribal_Council%2C_Inc.",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q113649157",
    "summary_en": "The Coharie Intra-tribal Council, Inc., is a state-recognized tribe in North Carolina. The headquarters are in Clinton, North Carolina. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 35.1°N, 78.4°W).",
    "summary_fi": "Coharie-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 35.1°N, 78.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Coharie"
    ]
  },
  {
    "slug": "colville-people",
    "name": "Colville People",
    "name_fi": "Colville-kansa",
    "native_name": "Colville",
    "alternate_names": [
      "Colville",
      "Colville people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Colville_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q695067",
    "summary_en": "The Colville people are an Interior Salish people and an Indigenous people of the Northwest Plateau. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 48.4°N, 118.2°W).",
    "summary_fi": "Colville-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 48.4°N, 118.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Colville"
    ]
  },
  {
    "slug": "seri-people",
    "name": "Seri People",
    "name_fi": "Seri-kansa",
    "native_name": "Comca'ac (Seri)",
    "alternate_names": [
      "Comca'ac (Seri)",
      "Comca’ac (Seri)",
      "Seri",
      "Seri people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Seri_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1263088",
    "summary_en": "The Seri or Comcaac people are an indigenous group of the Mexican state of Sonora. The majority reside on the Seri communal property, in the towns of Punta Chueca and El Desemboque on the mainland coast of the Gulf of California. Their ancestral country encompasses Aridoamerica and Sonoran Desert (Northern Mexico & Borderlands) (centered near 29.3°N, 111.8°W).",
    "summary_fi": "Comca'ac (Seri)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Aridoamerikassa ja Sonoran aavikolla Pohjois-Meksikon rajaseudulla (koordinaateissa noin 29.3°N, 111.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Sonoran rancherías and oasis settlements",
    "feature_name_matches": [
      "Comca’ac (Seri)"
    ]
  },
  {
    "slug": "confederated-tribes-of-warm-springs-people",
    "name": "Confederated Tribes of Warm Springs People",
    "name_fi": "Confederated Tribes of Warm Springs-kansa",
    "native_name": "Confederated Tribes of Warm Springs",
    "alternate_names": [
      "Confederated Tribes of Warm Springs"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Confederated_Tribes_of_Warm_Springs",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3538941",
    "summary_en": "The Confederated Tribes of Warm Springs is a federally recognized Native American tribe made of three tribes who put together a confederation. They live on and govern the Warm Springs Indian Reservation in the U.S. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 44.8°N, 120.0°W).",
    "summary_fi": "Confederated Tribes of Warm Springs-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 44.8°N, 120.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Confederated Tribes of Warm Springs"
    ]
  },
  {
    "slug": "confederated-villages-of-lisjan-people",
    "name": "Confederated Villages of Lisjan People",
    "name_fi": "Confederated Villages of Lisjan-kansa",
    "native_name": "Confederated Villages of Lisjan",
    "alternate_names": [
      "Confederated Villages of Lisjan"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Confederated_Villages_of_Lisjan",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in California Indigenous Country (Pacific Coast & Central Valley) (centered near 37.8°N, 121.8°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Confederated Villages of Lisjan-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 37.8°N, 121.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Confederated Villages of Lisjan"
    ]
  },
  {
    "slug": "congaree-people",
    "name": "Congaree People",
    "name_fi": "Congaree-kansa",
    "native_name": "Congaree",
    "alternate_names": [
      "Congaree",
      "Congaree people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Congaree_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q846133",
    "summary_en": "The Congaree were a historic Indigenous people of the Southeastern Woodlands who once lived within what is now central South Carolina, along the Congaree and Santee rivers, above and below the confluence of the Wateree River. The Congaree joined the Catawba people in company of the Wateree several years after temporarily migrating to the Waccamaw River in 1732. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 33.8°N, 81.0°W).",
    "summary_fi": "Congaree-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 33.8°N, 81.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Congaree"
    ]
  },
  {
    "slug": "copuces-people",
    "name": "Copuces People",
    "name_fi": "Copuces-kansa",
    "native_name": "Copuces",
    "alternate_names": [
      "Copuces"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Copuces",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 21.7°N, 100.8°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Copuces-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 21.7°N, 100.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Copuces"
    ]
  },
  {
    "slug": "coree-people",
    "name": "Coree People",
    "name_fi": "Coree-kansa",
    "native_name": "Coree",
    "alternate_names": [
      "Coree"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Coree",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q426724",
    "summary_en": "The Coree were a small Native American tribe, who once occupied a coastal area south of the Neuse River in southeastern North Carolina in the area now covered by Carteret and Craven counties. Scholars are unsure of what language they spoke, but the coastal areas were mostly populated by Iroquoian-speaking and Algonquian-speaking peoples. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 34.6°N, 77.6°W).",
    "summary_fi": "Coree-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 34.6°N, 77.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Coree"
    ]
  },
  {
    "slug": "cowlitz-people",
    "name": "Cowlitz People",
    "name_fi": "Cowlitz-kansa",
    "native_name": "Cowlitz",
    "alternate_names": [
      "Cowlitz",
      "Cowlitz people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Cowlitz_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1138224",
    "summary_en": "The term Cowlitz people covers two culturally and linguistically distinct indigenous peoples of the Pacific Northwest; the Lower Cowlitz or Cowlitz proper, and the Upper Cowlitz / Cowlitz Klickitat or Taitnapam. Lower Cowlitz refers to a southwestern Coast Salish people, which today are enrolled in the federally recognized tribes: Cowlitz Indian Tribe, Quinault Indian Nation, and Confederated Tribes of the Chehalis Reservation. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 46.3°N, 122.4°W).",
    "summary_fi": "Cowlitz-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 46.3°N, 122.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Cowlitz"
    ]
  },
  {
    "slug": "croatan-people",
    "name": "Croatan People",
    "name_fi": "Croatan-kansa",
    "native_name": "Croatan",
    "alternate_names": [
      "Croatan"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Croatan",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q16209536",
    "summary_en": "The Croatan, also known as Hatteras, were a small Native American ethnic group living in the coastal areas of what is now North Carolina. They might have been a branch of the larger Roanoke people or allied with them. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 35.8°N, 75.8°W).",
    "summary_fi": "Croatan-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 35.8°N, 75.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Croatan"
    ]
  },
  {
    "slug": "cuicuilco-people",
    "name": "Cuicuilco People",
    "name_fi": "Cuicuilco-kansa",
    "native_name": "Cuicuilco",
    "alternate_names": [
      "Cuicuilco"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Cuicuilco",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1143307",
    "summary_en": "Cuicuilco is an archaeological site located on the southern shore of Lake Texcoco in the southeastern Valley of Mexico, in what is today the borough of Tlalpan in Mexico City. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 19.3°N, 99.2°W).",
    "summary_fi": "Cuicuilco-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 19.3°N, 99.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Cuicuilco"
    ]
  },
  {
    "slug": "cuitlatec-people",
    "name": "Cuitlatec People",
    "name_fi": "Cuitlatec-kansa",
    "native_name": "Cuitlatec",
    "alternate_names": [
      "Cuitlatec",
      "Cuitlatec people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Cuitlatec_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q5192813",
    "summary_en": "The Cuitlatec were an Indigenous people of Mexico. They lived in the Río Balsas and Costa Grande regions of Guerrero state in Mexico's Pacific coast region, and this territory was called Cuitlatecapan in Nahuatl. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 17.8°N, 100.9°W).",
    "summary_fi": "Cuitlatec-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 17.8°N, 100.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Cuitlatec"
    ]
  },
  {
    "slug": "cupeno-people",
    "name": "Cupeño People",
    "name_fi": "Cupeño-kansa",
    "native_name": "Cupeño",
    "alternate_names": [
      "Cupeño"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Cupe%C3%B1o",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1257154",
    "summary_en": "The Cupeño are a Native American tribe of Southern California. Their ancestral country encompasses Southern California & Inland Indigenous Lands (centered near 33.3°N, 116.6°W).",
    "summary_fi": "Cupeño-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 33.3°N, 116.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southern California ancestral villages",
    "feature_name_matches": [
      "Cupeño"
    ]
  },
  {
    "slug": "cuttatawomen-people",
    "name": "Cuttatawomen People",
    "name_fi": "Cuttatawomen-kansa",
    "native_name": "Cuttatawomen",
    "alternate_names": [
      "Cuttatawomen"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Cuttatawomen",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Northeastern Woodlands and Great Lakes Basin (centered near 38.2°N, 77.1°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Cuttatawomen-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 38.2°N, 77.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Cuttatawomen"
    ]
  },
  {
    "slug": "dakelh-carrier-people",
    "name": "Dakelh (Carrier) People",
    "name_fi": "Dakelh-kansa (Carrier)",
    "native_name": "Dakelh / Dakeł Keyoh",
    "alternate_names": [
      "Dakelh",
      "Carrier",
      "Dakeł Keyoh",
      "Dakeł Keyoh (ᑕᗸᒡ ᗲᘏᑋ)"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Dakelh",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q573715",
    "summary_en": "Northern Athabaskan indigenous people of the Central Interior of British Columbia, who call themselves Dakelh meaning 'people who travel by boat', traditionally organized into clans with matrilineal hunting territories.",
    "summary_fi": "Brittiläisen Kolumbian sisämaan pohjois-athabascalainen kansa, joka tunnettiin aiemmin nimellä carrier ja joka harjoitti lohenkalastusta ja majavanmetsästystä setripuisilla vesiteillä.",
    "capital": "Fraser Lake / Stuart Lake villages",
    "feature_name_matches": [
      "Dakeł Keyoh (ᑕᗸᒡ ᗲᘏᑋ)"
    ]
  },
  {
    "slug": "dau-nom-wintu-people",
    "name": "Dau Nom Wintu People",
    "name_fi": "Dau Nom Wintu-kansa",
    "native_name": "Dau Nom Wintu",
    "alternate_names": [
      "Dau Nom Wintu"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Dau_Nom_Wintu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in California Indigenous Country (Pacific Coast & Central Valley) (centered near 40.4°N, 122.6°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Dau Nom Wintu-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 40.4°N, 122.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Dau Nom Wintu"
    ]
  },
  {
    "slug": "dau-pom-wintu-people",
    "name": "Dau Pom Wintu People",
    "name_fi": "Dau Pom Wintu-kansa",
    "native_name": "Dau Pom Wintu",
    "alternate_names": [
      "Dau Pom Wintu"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Dau_Pom_Wintu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in California Indigenous Country (Pacific Coast & Central Valley) (centered near 40.5°N, 122.3°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Dau Pom Wintu-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 40.5°N, 122.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Dau Pom Wintu"
    ]
  },
  {
    "slug": "deg-xit-an-people",
    "name": "Deg Xit'an People",
    "name_fi": "Deg Xit'an-kansa",
    "native_name": "Deg Xit'an Ngan' (Deg Xit'an)",
    "alternate_names": [
      "Deg Xit'an Ngan' (Deg Xit'an)",
      "Deg Xit'an",
      "Deg Xitʼan"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Deg_Xit%CA%BCan",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1182780",
    "summary_en": "Deg Xitʼan is a group of Athabaskan peoples in Alaska. Their native language is called Deg Xinag. Their ancestral country encompasses Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 62.5°N, 159.3°W).",
    "summary_fi": "Deg Xit'an Ngan' (Deg Xit'an)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 62.5°N, 159.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Deg Xit'an Ngan' (Deg Xit'an)"
    ]
  },
  {
    "slug": "dena-ina-e-nena-people",
    "name": "Dena'ina Ełnena People",
    "name_fi": "Dena'ina Ełnena-kansa",
    "native_name": "Dena'ina Ełnena",
    "alternate_names": [
      "Dena'ina Ełnena"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Dena'ina_E%C5%82nena",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 61.3°N, 153.5°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Dena'ina Ełnena-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 61.3°N, 153.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Dena'ina Ełnena"
    ]
  },
  {
    "slug": "denesu-ine-nene-people",
    "name": "Dënësųłinë́ Nëné People",
    "name_fi": "Dënësųłinë́ Nëné-kansa",
    "native_name": "Denendeh (Dënësųłinë́ Nëné)",
    "alternate_names": [
      "Denendeh (Dënësųłinë́ Nëné)",
      "Dënësųłinë́ Nëné",
      "Northwest Territories"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Northwest_Territories",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2007",
    "summary_en": "The Northwest Territories is a territory of Canada. At a land area of approximately 1,127,711.92 square kilometres (435,412.01 sq mi) and a 2026 estimated population of 45,808, it is the second-largest and second-most populous of the three territories in Northern Canada. Their ancestral country encompasses Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 59.9°N, 105.5°W).",
    "summary_fi": "Denendeh (Dënësųłinë́ Nëné)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 59.9°N, 105.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Denendeh (Dënësųłinë́ Nëné)"
    ]
  },
  {
    "slug": "ditidaht-people",
    "name": "Ditidaht People",
    "name_fi": "Ditidaht-kansa",
    "native_name": "Ditidaht",
    "alternate_names": [
      "Ditidaht",
      "Ditidaht First Nation"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ditidaht_First_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1230294",
    "summary_en": "The Ditidaht First Nation is a First Nations band government on southern Vancouver Island in British Columbia, Canada. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 48.9°N, 124.5°W).",
    "summary_fi": "Ditidaht-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 48.9°N, 124.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Ditidaht"
    ]
  },
  {
    "slug": "doeg-people",
    "name": "Doeg People",
    "name_fi": "Doeg-kansa",
    "native_name": "Doeg",
    "alternate_names": [
      "Doeg",
      "Doeg people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Doeg_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q5288074",
    "summary_en": "The Doeg were a Native American people who lived in Virginia. They spoke an Algonquian language and may have been a branch of the Nanticoke tribe, historically based on the Eastern Shore of Maryland. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 38.7°N, 77.3°W).",
    "summary_fi": "Doeg-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 38.7°N, 77.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Doeg"
    ]
  },
  {
    "slug": "duwamish-people",
    "name": "Duwamish People",
    "name_fi": "Duwamish-kansa",
    "native_name": "Duwamish",
    "alternate_names": [
      "Duwamish",
      "Duwamish people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Duwamish_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q491721",
    "summary_en": "The Duwamish are a Lushootseed-speaking Southern Coast Salish people in western Washington, and the Indigenous people of metropolitan Seattle. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 47.6°N, 122.2°W).",
    "summary_fi": "Duwamish-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 47.6°N, 122.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Duwamish"
    ]
  },
  {
    "slug": "denendeh-people",
    "name": "Dënéndeh People",
    "name_fi": "Dënéndeh-kansa",
    "native_name": "Dënéndeh",
    "alternate_names": [
      "Dënéndeh",
      "Spanish Ombudsman"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Spanish_Ombudsman",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3043121",
    "summary_en": "The Spanish Ombudsman or Defender of the People (Spanish: Defensor del Pueblo) is the ombudsman of the Cortes Generales responsible for defending the fundamental rights and public liberties of citizens by supervising the activity of public administrations. Their ancestral country encompasses Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 59.8°N, 117.1°W).",
    "summary_fi": "Dënéndeh-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 59.8°N, 117.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Dënéndeh"
    ]
  },
  {
    "slug": "eastern-mono-monache-people",
    "name": "Eastern Mono/Monache People",
    "name_fi": "Eastern Mono/Monache-kansa",
    "native_name": "Eastern Mono/Monache",
    "alternate_names": [
      "Eastern Mono/Monache"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Eastern_Mono%2FMonache",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in California Indigenous Country (Pacific Coast & Central Valley) (centered near 37.3°N, 118.5°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Eastern Mono/Monache-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 37.3°N, 118.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Eastern Mono/Monache"
    ]
  },
  {
    "slug": "eastern-nehantick-people",
    "name": "Eastern Nehântick People",
    "name_fi": "Eastern Nehântick-kansa",
    "native_name": "Eastern Nehântick",
    "alternate_names": [
      "Eastern Nehântick"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Eastern_Neh%C3%A2ntick",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Northeastern Woodlands and Great Lakes Basin (centered near 41.4°N, 71.6°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Eastern Nehântick-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 41.4°N, 71.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Eastern Nehântick"
    ]
  },
  {
    "slug": "eeyou-istchee-people",
    "name": "Eeyou Istchee People",
    "name_fi": "Eeyou Istchee-kansa",
    "native_name": "Eeyou Istchee",
    "alternate_names": [
      "Eeyou Istchee"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Eeyou_Istchee",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q669673",
    "summary_en": "Eeyou Istchee\nis a territory equivalent to a regional county municipality (TE) of Quebec that is represented by the Grand Council of the Crees. On July 24, 2012, the Quebec government signed an accord with the Cree Nation that resulted in the abolition of the neighbouring municipality of Baie-James and the creation of the new Eeyou Istchee James Bay Regional Government, providing for the residents of neighbouring Jamésie TE and Eeyou Istchee to jointly govern the territory formerly governed by the municipality of Baie-James. Their ancestral country encompasses Subarctic Eastern Canada (Innu, Naskapi & Cree Lands) (centered near 52.4°N, 74.3°W).",
    "summary_fi": "Eeyou Istchee-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Itä-Kanadan subarktisella havumetsävyöhykkeellä (koordinaateissa noin 52.4°N, 74.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Subarctic forest encampments",
    "feature_name_matches": [
      "Eeyou Istchee"
    ]
  },
  {
    "slug": "el-pom-wintu-people",
    "name": "El Pom Wintu People",
    "name_fi": "El Pom Wintu-kansa",
    "native_name": "El Pom Wintu",
    "alternate_names": [
      "El Pom Wintu"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/El_Pom_Wintu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in California Indigenous Country (Pacific Coast & Central Valley) (centered near 40.6°N, 122.4°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "El Pom Wintu-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 40.6°N, 122.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "El Pom Wintu"
    ]
  },
  {
    "slug": "embera-people",
    "name": "Emberá People",
    "name_fi": "Emberá-kansa",
    "native_name": "Emberá",
    "alternate_names": [
      "Emberá",
      "Emberá people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ember%C3%A1_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1335017",
    "summary_en": "The Emberá, also known in the historical literature as the Chocó or Katío Indians, are an Indigenous people of Panama and Colombia. Together with the Wounaan they are part of the Emberá-Wounaan group. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 8.1°N, 77.8°W).",
    "summary_fi": "Emberá-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 8.1°N, 77.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Emberá"
    ]
  },
  {
    "slug": "eno-people",
    "name": "Eno People",
    "name_fi": "Eno-kansa",
    "native_name": "Eno",
    "alternate_names": [
      "Eno",
      "Eno people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Eno_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q5379255",
    "summary_en": "The Eno or Enoke, also called Stuckenock, was an American Indian tribe located in North Carolina during the 17th and 18th centuries that was later absorbed into the Catawba tribe in South Carolina along with various other smaller tribal bands. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 36.1°N, 79.5°W).",
    "summary_fi": "Eno-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 36.1°N, 79.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Eno"
    ]
  },
  {
    "slug": "entiat-people",
    "name": "Entiat People",
    "name_fi": "Entiat-kansa",
    "native_name": "Entiat",
    "alternate_names": [
      "Entiat",
      "Entiat people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Entiat_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1344906",
    "summary_en": "The Entiat are a Native American band of Interior Salish peoples in eastern Washington State. Historically, they lived around the Columbia River to the Cascade Mountains along the drainage system of the Entiat River. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 47.9°N, 120.5°W).",
    "summary_fi": "Entiat-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 47.9°N, 120.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Entiat"
    ]
  },
  {
    "slug": "esk-etemc-people",
    "name": "Esk'etemc People",
    "name_fi": "Esk'etemc-kansa",
    "native_name": "Esketemculeucw (Esk'etemc)",
    "alternate_names": [
      "Esketemculeucw (Esk'etemc)",
      "Esk'etemc"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Esk'etemc",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 51.5°N, 123.0°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Esketemculeucw (Esk'etemc)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 51.5°N, 123.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Esketemculeucw (Esk'etemc)"
    ]
  },
  {
    "slug": "esselen-people",
    "name": "Esselen People",
    "name_fi": "Esselen-kansa",
    "native_name": "Esselen",
    "alternate_names": [
      "Esselen"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Esselen",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q56701",
    "summary_en": "The Esselen are a Native American people belonging to a linguistic group in the hypothetical Hokan language family, who are Indigenous to the Santa Lucia Mountains of a region south of the Big Sur River in California. Prior to Spanish imperialization, they lived seasonally on the coast and inland, surviving off the plentiful seafood during the summer and acorns and wildlife during the rest of the year. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 36.3°N, 121.5°W).",
    "summary_fi": "Esselen-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 36.3°N, 121.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Esselen"
    ]
  },
  {
    "slug": "fernandeno-tataviam-people",
    "name": "Fernandeño Tataviam People",
    "name_fi": "Fernandeño Tataviam-kansa",
    "native_name": "Fernandeño Tataviam",
    "alternate_names": [
      "Fernandeño Tataviam"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Fernande%C3%B1o_Tataviam",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in California Indigenous Country (Pacific Coast & Central Valley) (centered near 34.4°N, 118.3°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Fernandeño Tataviam-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 34.4°N, 118.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Fernandeño Tataviam"
    ]
  },
  {
    "slug": "garifuna-people",
    "name": "Garífuna People",
    "name_fi": "Garífuna-kansa",
    "native_name": "Garífuna",
    "alternate_names": [
      "Garífuna",
      "Garifuna"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Garifuna",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q863927",
    "summary_en": "The Garifuna people are an Afro-Indigenous people of mixed free African and Amerindian ancestry who originated in the Caribbean island of Saint Vincent and traditionally speak Garifuna, an Arawakan language. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 14.0°N, 84.3°W).",
    "summary_fi": "Garífuna-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 14.0°N, 84.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Garífuna"
    ]
  },
  {
    "slug": "gitanyow-lax-yip-people",
    "name": "Gitanyow Lax'yip People",
    "name_fi": "Gitanyow Lax'yip-kansa",
    "native_name": "Gitanyow Lax'yip",
    "alternate_names": [
      "Gitanyow Lax'yip",
      "Gitanyow Lax’yip",
      "Gitanyow"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Gitanyow",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q5565059",
    "summary_en": "Gitanyow is an Indian reserve community of the Gitxsan people, located on the Kitwanga River 8 km south of Kitwancool Lake, at the confluence of Kitwancool Creek. The community is located on Gitanyow Indian Reserve No. Their ancestral country encompasses Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 55.8°N, 129.1°W).",
    "summary_fi": "Gitanyow Lax'yip-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 55.8°N, 129.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Gitanyow Lax’yip"
    ]
  },
  {
    "slug": "gitga-at-people",
    "name": "Gitga'at People",
    "name_fi": "Gitga'at-kansa",
    "native_name": "Gitga'at",
    "alternate_names": [
      "Gitga'at",
      "Gitga’at",
      "Gitgaʼat people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Gitga%CA%BCat_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q5565079",
    "summary_en": "The Gitgaʼat are one of the 14 tribes of the Tsimshian nation in British Columbia, Canada, and inhabit the village of Hartley Bay, British Columbia, the name of which in the Tsimshian language is Txałgiu. The name Gitgaʼata in the Tsimshian language means 'people of the cane'. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 53.8°N, 129.1°W).",
    "summary_fi": "Gitga'at-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 53.8°N, 129.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Gitga’at"
    ]
  },
  {
    "slug": "gitga-at-lax-yuup-people",
    "name": "Gitga'at Lax Yuup People",
    "name_fi": "Gitga'at Lax Yuup-kansa",
    "native_name": "Gitga'at Lax Yuup",
    "alternate_names": [
      "Gitga'at Lax Yuup",
      "Gitga’at Lax Yuup",
      "Gitgaʼat people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Gitga%CA%BCat_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q5565079",
    "summary_en": "The Gitgaʼat are one of the 14 tribes of the Tsimshian nation in British Columbia, Canada, and inhabit the village of Hartley Bay, British Columbia, the name of which in the Tsimshian language is Txałgiu. The name Gitgaʼata in the Tsimshian language means 'people of the cane'. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 53.8°N, 129.1°W).",
    "summary_fi": "Gitga'at Lax Yuup-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 53.8°N, 129.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Gitga’at Lax Yuup"
    ]
  },
  {
    "slug": "graton-rancheria-people",
    "name": "Graton Rancheria People",
    "name_fi": "Graton Rancheria-kansa",
    "native_name": "Graton Rancheria",
    "alternate_names": [
      "Graton Rancheria"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Graton_Rancheria",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q14682063",
    "summary_en": "The Graton Rancheria was a 15.45-acre (62,500 m2) property in the coastal hills of northern California, about two miles (3 km) northwest of Sebastopol. The site is about 1.5 miles (2.4 km) southwest of the hamlet of Graton, population 1,815 in 2000. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 38.4°N, 122.8°W).",
    "summary_fi": "Graton Rancheria-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 38.4°N, 122.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Graton Rancheria"
    ]
  },
  {
    "slug": "guacata-people",
    "name": "Guacata People",
    "name_fi": "Guacata-kansa",
    "native_name": "Guacata",
    "alternate_names": [
      "Guacata",
      "Guaianá people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Guaian%C3%A1_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q10292356",
    "summary_en": "The Guaianás, also known as Guaianases and Guaianã, were a South American indigenous ethnicity that lived in an area ranging from the modern day city of São Paulo to Uruguay, dying out at some point in the late 17th century. Their ancestral country encompasses Florida Peninsula Indigenous Country (centered near 26.9°N, 80.5°W).",
    "summary_fi": "Guacata-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Floridan niemimaalla ja rannikkovesillä (koordinaateissa noin 26.9°N, 80.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Florida coastal and riverine towns",
    "feature_name_matches": [
      "Guacata"
    ]
  },
  {
    "slug": "guamares-people",
    "name": "Guamares People",
    "name_fi": "Guamares-kansa",
    "native_name": "Guamares",
    "alternate_names": [
      "Guamares",
      "Guamare"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Guamare",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1258619",
    "summary_en": "The Guamare people were an indigenous people of Mexico, who were established mostly in Guanajuato and at the border of Jalisco. They were part of the Chichimecas, a group of a nomadic hunter-gatherer culture and called themselves Children of the Wind, living religiously from the natural land. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 21.4°N, 101.3°W).",
    "summary_fi": "Guamares-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 21.4°N, 101.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Guamares"
    ]
  },
  {
    "slug": "guanahatabey-people",
    "name": "Guanahatabey People",
    "name_fi": "Guanahatabey-kansa",
    "native_name": "Guanahatabey",
    "alternate_names": [
      "Guanahatabey"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "north-america-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Guanahatabey",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3118725",
    "summary_en": "The Guanahatabey were an Indigenous people of western Cuba at the time of European contact. Archaeological and historical studies suggest the Guanahatabey were archaic hunter-gatherers with a distinct language and culture from their neighbors, the Taíno. Their ancestral country encompasses North American Indigenous Country (centered near 22.4°N, 83.8°W).",
    "summary_fi": "Guanahatabey-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Amerikan alkuperäisalueilla (koordinaateissa noin 22.4°N, 83.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional ancestral territory",
    "feature_name_matches": [
      "Guanahatabey"
    ]
  },
  {
    "slug": "guarijio-guarijo-people",
    "name": "Guarijío/Guarijó People",
    "name_fi": "Guarijío/Guarijó-kansa",
    "native_name": "Guarijío/Guarijó",
    "alternate_names": [
      "Guarijío/Guarijó"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Guarij%C3%ADo%2FGuarij%C3%B3",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Aridoamerica and Sonoran Desert (Northern Mexico & Borderlands) (centered near 27.9°N, 108.7°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Guarijío/Guarijó-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Aridoamerikassa ja Sonoran aavikolla Pohjois-Meksikon rajaseudulla (koordinaateissa noin 27.9°N, 108.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Sonoran rancherías and oasis settlements",
    "feature_name_matches": [
      "Guarijío/Guarijó"
    ]
  },
  {
    "slug": "guasaves-tamazulas-people",
    "name": "Guasaves/Tamazulas People",
    "name_fi": "Guasaves/Tamazulas-kansa",
    "native_name": "Guasaves/Tamazulas",
    "alternate_names": [
      "Guasaves/Tamazulas"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Guasaves%2FTamazulas",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Aridoamerica and Sonoran Desert (Northern Mexico & Borderlands) (centered near 25.6°N, 108.6°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Guasaves/Tamazulas-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Aridoamerikassa ja Sonoran aavikolla Pohjois-Meksikon rajaseudulla (koordinaateissa noin 25.6°N, 108.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Sonoran rancherías and oasis settlements",
    "feature_name_matches": [
      "Guasaves/Tamazulas"
    ]
  },
  {
    "slug": "guaycura-people",
    "name": "Guaycura People",
    "name_fi": "Guaycura-kansa",
    "native_name": "Guaycura",
    "alternate_names": [
      "Guaycura",
      "Guaycura people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Guaycura_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2472844",
    "summary_en": "The Guaycura were a native people of Baja California Sur, Mexico, occupying an area extending south from near Loreto to Todos Santos. They contested the area around La Paz with the Pericú. Their ancestral country encompasses Aridoamerica and Sonoran Desert (Northern Mexico & Borderlands) (centered near 24.6°N, 111.3°W).",
    "summary_fi": "Guaycura-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Aridoamerikassa ja Sonoran aavikolla Pohjois-Meksikon rajaseudulla (koordinaateissa noin 24.6°N, 111.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Sonoran rancherías and oasis settlements",
    "feature_name_matches": [
      "Guaycura"
    ]
  },
  {
    "slug": "gwa-sala-nakwaxda-xw-people",
    "name": "Gwa'Sala-'Nakwaxda'xw People",
    "name_fi": "Gwa'Sala-'Nakwaxda'xw-kansa",
    "native_name": "Gwa'Sala-'Nakwaxda'xw",
    "alternate_names": [
      "Gwa'Sala-'Nakwaxda'xw",
      "Gwa’Sala-‘Nakwaxda’xw"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Gwa'Sala-'Nakwaxda'xw",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 51.3°N, 127.1°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Gwa'Sala-'Nakwaxda'xw-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 51.3°N, 127.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Gwa’Sala-‘Nakwaxda’xw"
    ]
  },
  {
    "slug": "gwitch-in-settlement-region-people",
    "name": "Gwitch'in Settlement Region People",
    "name_fi": "Gwitch'in Settlement Region-kansa",
    "native_name": "Gwitch'in Settlement Region",
    "alternate_names": [
      "Gwitch'in Settlement Region"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Gwitch'in_Settlement_Region",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 66.4°N, 134.5°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Gwitch'in Settlement Region-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 66.4°N, 134.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Gwitch'in Settlement Region"
    ]
  },
  {
    "slug": "mazateco-people",
    "name": "Mazateco People",
    "name_fi": "Mazateco-kansa",
    "native_name": "Ha Shuta Enima (Mazateco)",
    "alternate_names": [
      "Ha Shuta Enima (Mazateco)",
      "Mazateco",
      "Mazatecan languages"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mazatecan_languages",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36230",
    "summary_en": "The Mazatecan languages are a group of closely related indigenous languages spoken by some 200,000 people in the area known as the Sierra Mazateca, which is in the northern part of the state of Oaxaca in southern Mexico, as well as in adjacent areas of the states of Puebla and Veracruz. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 18.3°N, 96.5°W).",
    "summary_fi": "Ha Shuta Enima (Mazateco)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 18.3°N, 96.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Ha Shuta Enima (Mazateco)"
    ]
  },
  {
    "slug": "lacandon-people",
    "name": "Lacandon People",
    "name_fi": "Lacandon-kansa",
    "native_name": "Hach Winik (Lacandon)",
    "alternate_names": [
      "Hach Winik (Lacandon)",
      "Lacandon",
      "Lacandon people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Lacandon_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1355029",
    "summary_en": "The Lacandon are one of the Maya peoples who live in the jungles of the Mexican state of Chiapas, near the southern border with Guatemala. Their homeland, the Lacandon Jungle, lies along the Mexican side of the Usumacinta River and its tributaries. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 16.6°N, 91.1°W).",
    "summary_fi": "Hach Winik (Lacandon)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 16.6°N, 91.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Hach Winik (Lacandon)"
    ]
  },
  {
    "slug": "halalt-people",
    "name": "Halalt People",
    "name_fi": "Halalt-kansa",
    "native_name": "Halalt",
    "alternate_names": [
      "Halalt",
      "Halalt First Nation"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Halalt_First_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1570220",
    "summary_en": "Halalt First Nation' is a First Nations tribe located on a reservation on the Chemainus River in southeastern Vancouver Island, British Columbia, Canada. The Halalt were originally from the village xeláltxw once located in the Cowichan Valley, and likely moved to Willy Island, the largest of the Shoal Islands, in the early 19th century. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 48.8°N, 123.7°W).",
    "summary_fi": "Halalt-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 48.8°N, 123.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Halalt"
    ]
  },
  {
    "slug": "hammonassets-people",
    "name": "Hammonassets People",
    "name_fi": "Hammonassets-kansa",
    "native_name": "Hammonassets",
    "alternate_names": [
      "Hammonassets",
      "Hammonasset people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Hammonasset_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q16111434",
    "summary_en": "The Hammonasset people were a historical Indigenous people of the Northeastern Woodlands whose territory was along the west bank of the Connecticut River to the Hammonasset River in Connecticut. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 41.4°N, 72.6°W).",
    "summary_fi": "Hammonassets-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 41.4°N, 72.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Hammonassets"
    ]
  },
  {
    "slug": "hatteras-people",
    "name": "Hatteras People",
    "name_fi": "Hatteras-kansa",
    "native_name": "Hatteras",
    "alternate_names": [
      "Hatteras",
      "Croatan"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Croatan",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q16209536",
    "summary_en": "The Croatan, also known as Hatteras, were a small Native American ethnic group living in the coastal areas of what is now North Carolina. They might have been a branch of the larger Roanoke people or allied with them. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 35.4°N, 76.1°W).",
    "summary_fi": "Hatteras-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 35.4°N, 76.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Hatteras"
    ]
  },
  {
    "slug": "hesquiaht-people",
    "name": "Hesquiaht People",
    "name_fi": "Hesquiaht-kansa",
    "native_name": "Hesquiaht",
    "alternate_names": [
      "Hesquiaht"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Hesquiaht",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q16210821",
    "summary_en": "The Hesquiaht are one of the Nuu-chah-nulth peoples of the West Coast of Vancouver Island, British Columbia, Canada. Today the Hesquiaht are governed mostly by the Hesquiaht First Nation band government, though some are in the Tla-O-Qui-Aht First Nations, which also includes the Clayoquot and some of the Ahousaht. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 49.6°N, 126.4°W).",
    "summary_fi": "Hesquiaht-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 49.6°N, 126.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Hesquiaht"
    ]
  },
  {
    "slug": "pame-people",
    "name": "Pame People",
    "name_fi": "Pame-kansa",
    "native_name": "Hi Ui (Pame/Chichimeco Jonaz)",
    "alternate_names": [
      "Hi Ui (Pame/Chichimeco Jonaz)",
      "Pame",
      "Pame people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pame_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1864956",
    "summary_en": "The Pame are an Indigenous people of central Mexico primarily living in the state of San Luis Potosí. The northern Pame refer to themselves as the Xi'iuy, while the southern Pame call themselves Ñáhu or Nyaxu, and the Pame of Querétaro call themselves Re Nuye Eyyä. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 21.7°N, 99.8°W).",
    "summary_fi": "Hi Ui (Pame/Chichimeco Jonaz)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 21.7°N, 99.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Hi Ui (Pame/Chichimeco Jonaz)"
    ]
  },
  {
    "slug": "hia-ced-o-odham-people",
    "name": "Hia-Ced O'odham People",
    "name_fi": "Hia-Ced O'odham-kansa",
    "native_name": "Hia-Ced O'odham",
    "alternate_names": [
      "Hia-Ced O'odham",
      "Hia C-eḍ Oʼodham"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Hia_C-e%E1%B8%8D_O%CA%BCodham",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q5750473",
    "summary_en": "The Hia C-eḍ O'odham, also known as Areneños, are a Indigenous peoples of the Americas whose traditional homeland lies between the Ajo Range, the Gila River, the Colorado River, and the Gulf of California. They are unrecognized at both the state and federal level in the United States and Mexico, although the Tohono O'odham Nation has a committee for issues related to them and has land held in trust for them. Their ancestral country encompasses Aridoamerica and Sonoran Desert (Northern Mexico & Borderlands) (centered near 31.1°N, 112.7°W).",
    "summary_fi": "Hia-Ced O'odham-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Aridoamerikassa ja Sonoran aavikolla Pohjois-Meksikon rajaseudulla (koordinaateissa noin 31.1°N, 112.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Sonoran rancherías and oasis settlements",
    "feature_name_matches": [
      "Hia-Ced O'odham"
    ]
  },
  {
    "slug": "holikachuk-people",
    "name": "Holikachuk People",
    "name_fi": "Holikachuk-kansa",
    "native_name": "Holikachuk",
    "alternate_names": [
      "Holikachuk"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Holikachuk",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1467683",
    "summary_en": "Holikachuk are a Yupikized Alaska Native Athabaskan people of the Athabaskan-speaking ethnolinguistic group to western Alaska. Their native territory includes the area surrounding the middle and upper Innoko River. Their ancestral country encompasses Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 63.3°N, 158.1°W).",
    "summary_fi": "Holikachuk-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 63.3°N, 158.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Holikachuk"
    ]
  },
  {
    "slug": "homalco-people",
    "name": "Homalco People",
    "name_fi": "Homalco-kansa",
    "native_name": "Homalco",
    "alternate_names": [
      "Homalco",
      "Homalco First Nation"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Homalco_First_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1625839",
    "summary_en": "Homalco First Nation is a First Nations government located in Bute Inlet near the upper Sunshine Coast of British Columbia, Canada. The Homalco are also known, with their neighbours the Tla'amin and Klahoose and the K'ómoks First Nations of nearby parts of Vancouver Island, as the Mainland Comox. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 50.9°N, 124.6°W).",
    "summary_fi": "Homalco-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 50.9°N, 124.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Homalco"
    ]
  },
  {
    "slug": "hoopa-people",
    "name": "Hoopa People",
    "name_fi": "Hoopa-kansa",
    "native_name": "Hoopa",
    "alternate_names": [
      "Hoopa",
      "Hoa people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Hoa_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1193617",
    "summary_en": "The Hoa people, also known as Chinese Vietnamese, are an ethnic minority in Vietnam composed of citizens and nationals of full or partial Han Chinese ancestry. The term primarily refers to ethnic Chinese who migrated from southern Chinese provinces to Vietnam during the 18th century, although Chinese migration to the region dates back millennia. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 40.9°N, 123.6°W).",
    "summary_fi": "Hoopa-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 40.9°N, 123.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Hoopa"
    ]
  },
  {
    "slug": "reservation-people",
    "name": "Reservation People",
    "name_fi": "Reservation-kansa",
    "native_name": "Hoopa (Reservation)",
    "alternate_names": [
      "Hoopa (Reservation)",
      "Reservation"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Reservation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in California Indigenous Country (Pacific Coast & Central Valley) (centered near 41.1°N, 123.7°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Hoopa (Reservation)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 41.1°N, 123.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Hoopa (Reservation)"
    ]
  },
  {
    "slug": "huetar-people",
    "name": "Huetar People",
    "name_fi": "Huetar-kansa",
    "native_name": "Huetar",
    "alternate_names": [
      "Huetar",
      "Huetar people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Huetar_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1117594",
    "summary_en": "The Huetares are an important Indigenous group of Costa Rica, who in the mid-16th century lived in the center of what is now the country. They are also mentioned with the name of güetares or pacacuas. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 10.0°N, 84.3°W).",
    "summary_fi": "Huetar-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 10.0°N, 84.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Huetar"
    ]
  },
  {
    "slug": "hul-kuhk-u-people",
    "name": "Hul Kuhk'u People",
    "name_fi": "Hul Kuhk'u-kansa",
    "native_name": "Hul Kuhk'u",
    "alternate_names": [
      "Hul Kuhk'u",
      "Hul Kuhk’u"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Hul_Kuhk'u",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in California Indigenous Country (Pacific Coast & Central Valley) (centered near 35.0°N, 119.2°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Hul Kuhk'u-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 35.0°N, 119.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Hul Kuhk’u"
    ]
  },
  {
    "slug": "hul-qumi-num-treaty-group-people",
    "name": "Hul'qumi'num Treaty Group People",
    "name_fi": "Hul'qumi'num Treaty Group-kansa",
    "native_name": "Hul'qumi'num Treaty Group",
    "alternate_names": [
      "Hul'qumi'num Treaty Group",
      "Hulʼqumiʼnum Treaty Group"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Hul%CA%BCqumi%CA%BCnum_Treaty_Group",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q5935449",
    "summary_en": "The Hulʼqumiʼnum Treaty Group was founded in 1993 to negotiate a treaty with the Province of British Columbia and Government of Canada. The organization is based in Duncan, British Columbia. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 48.8°N, 124.1°W).",
    "summary_fi": "Hul'qumi'num Treaty Group-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 48.8°N, 124.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Hul'qumi'num Treaty Group"
    ]
  },
  {
    "slug": "hunkpapa-people",
    "name": "Hunkpapa People",
    "name_fi": "Hunkpapa-kansa",
    "native_name": "Hunkpapa",
    "alternate_names": [
      "Hunkpapa"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "plains-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Hunkpapa",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1520094",
    "summary_en": "The Hunkpapa are a Native American group, one of the seven council fires of the Lakota tribe. The name Húŋkpapȟa is a Lakota word, meaning 'Head of the Circle'. Their ancestral country encompasses Great Plains (Plains Indigenous Territory) (centered near 46.9°N, 102.5°W).",
    "summary_fi": "Hunkpapa-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Suurten tasankojen (Great Plains) perinnealueilla (koordinaateissa noin 46.9°N, 102.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Plains ancestral encampments",
    "feature_name_matches": [
      "Hunkpapa"
    ]
  },
  {
    "slug": "huu-ay-aht-people",
    "name": "Huu-ay-aht People",
    "name_fi": "Huu-ay-aht-kansa",
    "native_name": "Huu-ay-aht",
    "alternate_names": [
      "Huu-ay-aht",
      "Huu-ay-aht First Nations"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Huu-ay-aht_First_Nations",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1639359",
    "summary_en": "The Huu-ay-aht First Nations is a First Nations based on Pachena Bay about 300 km (190 mi) northwest of Victoria, British Columbia, on the west coast of Vancouver Island, in Canada. The traditional territories of the Huu-ay-aht make up the watershed of the Sarita River. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 48.9°N, 125.0°W).",
    "summary_fi": "Huu-ay-aht-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 48.9°N, 125.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Huu-ay-aht"
    ]
  },
  {
    "slug": "han-people",
    "name": "Hän People",
    "name_fi": "Hän-kansa",
    "native_name": "Hän",
    "alternate_names": [
      "Hän"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/H%C3%A4n",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q26862",
    "summary_en": "The Hän, Han or Hwëch'in / Han Hwech’in are a First Nations people of Canada and an Alaska Native Athabaskan people of the United States; they are part of the Athabaskan-speaking ethnolinguistic group. Their traditional lands centered on a heavily forested area around the Upper Yukon River, Klondike River (Tr'on'Dëk), Bonanza Creek and Sixtymile River and straddling what is now the Alaska-Yukon Territory border. Their ancestral country encompasses Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 64.8°N, 141.2°W).",
    "summary_fi": "Hän-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 64.8°N, 141.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Hän"
    ]
  },
  {
    "slug": "otomi-people",
    "name": "Otomí People",
    "name_fi": "Otomí-kansa",
    "native_name": "Hñähñu (Otomí)",
    "alternate_names": [
      "Hñähñu (Otomí)",
      "Otomí",
      "Otomi"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Otomi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1132647",
    "summary_en": "The Otomi are an Indigenous people of Mexico inhabiting the central Mexican Plateau (Altiplano) region. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 20.2°N, 99.1°W).",
    "summary_fi": "Hñähñu (Otomí)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 20.2°N, 99.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Hñähñu (Otomí)"
    ]
  },
  {
    "slug": "in-shuck-ch-people",
    "name": "In-SHUCK-ch People",
    "name_fi": "In-SHUCK-ch-kansa",
    "native_name": "In-SHUCK-ch",
    "alternate_names": [
      "In-SHUCK-ch",
      "In-SHUCK-ch Nation"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/In-SHUCK-ch_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1660556",
    "summary_en": "The In-SHUCK-ch Nation, also known as Lower Lillooet people, are a small First Nations tribal council on the lower Lillooet River south of Pemberton-Mount Currie in the Canadian province of British Columbia. The communities of the In-SHUCK-ch are of the St'at'imcets-speaking St'at'imc people, but in recent years seceded from the Lillooet Tribal Council to form their own organization. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 49.8°N, 122.3°W).",
    "summary_fi": "In-SHUCK-ch-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 49.8°N, 122.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "In-SHUCK-ch"
    ]
  },
  {
    "slug": "ineseno-people",
    "name": "Ineseño People",
    "name_fi": "Ineseño-kansa",
    "native_name": "Ineseño",
    "alternate_names": [
      "Ineseño",
      "Santa Ynez Band of Chumash Mission Indians"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Santa_Ynez_Band_of_Chumash_Mission_Indians",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q7419975",
    "summary_en": "The Santa Ynez Band of Chumash Mission Indians is a federally recognized tribe of Chumash, an Indigenous people of California, in Santa Barbara. Their name for themselves is Samala. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 34.7°N, 120.0°W).",
    "summary_fi": "Ineseño-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 34.7°N, 120.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Ineseño"
    ]
  },
  {
    "slug": "inuvialuit-people",
    "name": "Inuvialuit People",
    "name_fi": "Inuvialuit-kansa",
    "native_name": "Inuvialuit",
    "alternate_names": [
      "Inuvialuit"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Inuvialuit",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q4811101",
    "summary_en": "The Inuvialuit or Western Canadian Inuit are Inuit who live in the western Canadian Arctic region. They, like all other Inuit, are descendants of the Thule who migrated eastward from Alaska. Their ancestral country encompasses Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 71.7°N, 113.7°W).",
    "summary_fi": "Inuvialuit-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 71.7°N, 113.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Inuvialuit"
    ]
  },
  {
    "slug": "irritilas-lagunero-people",
    "name": "Irritilas/Lagunero People",
    "name_fi": "Irritilas/Lagunero-kansa",
    "native_name": "Irritilas/Lagunero",
    "alternate_names": [
      "Irritilas/Lagunero"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Irritilas%2FLagunero",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 26.1°N, 102.5°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Irritilas/Lagunero-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 26.1°N, 102.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Irritilas/Lagunero"
    ]
  },
  {
    "slug": "itazipco-people",
    "name": "Itazipco People",
    "name_fi": "Itazipco-kansa",
    "native_name": "Itazipco",
    "alternate_names": [
      "Itazipco",
      "Sans Arc"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "plains-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Sans_Arc",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1670848",
    "summary_en": "The Sans Arc or Itázipčho are one of the seven subdivision of the Lakota people. They primarily live in the Cheyenne River Indian Reservation in South Dakota. Their ancestral country encompasses Great Plains (Plains Indigenous Territory) (centered near 46.1°N, 102.5°W).",
    "summary_fi": "Itazipco-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Suurten tasankojen (Great Plains) perinnealueilla (koordinaateissa noin 46.1°N, 102.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Plains ancestral encampments",
    "feature_name_matches": [
      "Itazipco"
    ]
  },
  {
    "slug": "ixil-people",
    "name": "Ixil People",
    "name_fi": "Ixil-kansa",
    "native_name": "Ixil",
    "alternate_names": [
      "Ixil",
      "Ixil people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ixil_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1275920",
    "summary_en": "The Ixil are a Maya people located in the states of Campeche and Quintana Roo in Mexico and in the municipalities of Santa María Nebaj, San Gaspar Chajul, and San Juan Cotzal in the northern part of the Cuchumatanes mountains of the department of Quiché, Guatemala. These three municipalities are known as the Ixil Triangle and are the place of origin of the Ixil culture and where the majority of the population lives. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 15.6°N, 91.1°W).",
    "summary_fi": "Ixil-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 15.6°N, 91.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Ixil"
    ]
  },
  {
    "slug": "janos-people",
    "name": "Janos People",
    "name_fi": "Janos-kansa",
    "native_name": "Janos",
    "alternate_names": [
      "Janos",
      "Jabo people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Jabo_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q6110247",
    "summary_en": "Jabo is the self-designation of an ethnic group located in the southeastern part of the Republic of Liberia in West Africa. They have also sometimes referred to themselves as Gweabo\n or Nimiah tribe. Their ancestral country encompasses Aridoamerica and Sonoran Desert (Northern Mexico & Borderlands) (centered near 31.2°N, 108.2°W).",
    "summary_fi": "Janos-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Aridoamerikassa ja Sonoran aavikolla Pohjois-Meksikon rajaseudulla (koordinaateissa noin 31.2°N, 108.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Sonoran rancherías and oasis settlements",
    "feature_name_matches": [
      "Janos"
    ]
  },
  {
    "slug": "jeaga-people",
    "name": "Jeaga People",
    "name_fi": "Jeaga-kansa",
    "native_name": "Jeaga",
    "alternate_names": [
      "Jeaga",
      "Jebala people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Jebala_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q610512",
    "summary_en": "The Jebala people are a tribal confederation inhabiting an area in northwest Morocco from the town of Bab Berred to the west. The Jebala region thus occupies the western part of the Rif mountains. Their ancestral country encompasses Florida Peninsula Indigenous Country (centered near 26.8°N, 80.2°W).",
    "summary_fi": "Jeaga-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Floridan niemimaalla ja rannikkovesillä (koordinaateissa noin 26.8°N, 80.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Florida coastal and riverine towns",
    "feature_name_matches": [
      "Jeaga"
    ]
  },
  {
    "slug": "jiwere-people",
    "name": "Jiwere People",
    "name_fi": "Jiwere-kansa",
    "native_name": "Jiwere",
    "alternate_names": [
      "Jiwere"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "plains-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Jiwere",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Great Plains (Plains Indigenous Territory) (centered near 40.6°N, 95.9°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Jiwere-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Suurten tasankojen (Great Plains) perinnealueilla (koordinaateissa noin 40.6°N, 95.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Plains ancestral encampments",
    "feature_name_matches": [
      "Jiwere"
    ]
  },
  {
    "slug": "jococobas-people",
    "name": "Jococobas People",
    "name_fi": "Jococobas-kansa",
    "native_name": "Jococobas",
    "alternate_names": [
      "Jococobas"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Jococobas",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 29.1°N, 106.4°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Jococobas-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 29.1°N, 106.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Jococobas"
    ]
  },
  {
    "slug": "julimes-people",
    "name": "Julimes People",
    "name_fi": "Julimes-kansa",
    "native_name": "Julimes",
    "alternate_names": [
      "Julimes",
      "Julimes people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Julimes_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q130050960",
    "summary_en": "The Julimes people were a Native American people in the region of present-day Texas. They may have spoken a Concho or Jumano language. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 28.4°N, 105.4°W).",
    "summary_fi": "Julimes-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 28.4°N, 105.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Julimes"
    ]
  },
  {
    "slug": "jumanos-people",
    "name": "Jumanos People",
    "name_fi": "Jumanos-kansa",
    "native_name": "Jumanos",
    "alternate_names": [
      "Jumanos"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "plains-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Jumanos",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2359237",
    "summary_en": "The Jumanos were a tribe or several tribes, who inhabited a large area of western Texas, New Mexico, and northern Mexico, especially near the Junta de los Rios region with its large settled Indigenous population. They lived in the Big Bend area in the mountain and basin region. Their ancestral country encompasses Great Plains (Plains Indigenous Territory) (centered near 31.8°N, 99.7°W).",
    "summary_fi": "Jumanos-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Suurten tasankojen (Great Plains) perinnealueilla (koordinaateissa noin 31.8°N, 99.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Plains ancestral encampments",
    "feature_name_matches": [
      "Jumanos"
    ]
  },
  {
    "slug": "ka-yu-k-t-h-che-k-tles7et-h-people",
    "name": "Ka:'yu:'k't'h'/Che:k'tles7et'h' People",
    "name_fi": "Ka:'yu:'k't'h'/Che:k'tles7et'h'-kansa",
    "native_name": "Ka:'yu:'k't'h'/Che:k'tles7et'h'",
    "alternate_names": [
      "Ka:'yu:'k't'h'/Che:k'tles7et'h'",
      "Ka:’yu:’k’t’h’/Che:k’tles7et’h’"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ka%3A'yu%3A'k't'h'%2FChe%3Ak'tles7et'h'",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 50.2°N, 127.2°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Ka:'yu:'k't'h'/Che:k'tles7et'h'-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 50.2°N, 127.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Ka:’yu:’k’t’h’/Che:k’tles7et’h’"
    ]
  },
  {
    "slug": "karkin-people",
    "name": "Karkin People",
    "name_fi": "Karkin-kansa",
    "native_name": "Karkin",
    "alternate_names": [
      "Karkin",
      "Karkin people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Karkin_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q16242432",
    "summary_en": "The Karkin people are one of eight Ohlone peoples, Indigenous peoples of California. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 38.0°N, 122.2°W).",
    "summary_fi": "Karkin-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 38.0°N, 122.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Karkin"
    ]
  },
  {
    "slug": "kashaya-people",
    "name": "Kashaya People",
    "name_fi": "Kashaya-kansa",
    "native_name": "Kashaya",
    "alternate_names": [
      "Kashaya",
      "Kashaya language"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kashaya_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3193689",
    "summary_en": "Kashaya is the critically endangered language of the Kashia band of the Pomo people. The Pomoan languages have been classified as part of the Hokan language family. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 38.6°N, 123.2°W).",
    "summary_fi": "Kashaya-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 38.6°N, 123.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Kashaya"
    ]
  },
  {
    "slug": "kashtik-people",
    "name": "Kashtik People",
    "name_fi": "Kashtik-kansa",
    "native_name": "Kashtik",
    "alternate_names": [
      "Kashtik"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kashtik",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in California Indigenous Country (Pacific Coast & Central Valley) (centered near 34.9°N, 118.8°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Kashtik-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 34.9°N, 118.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Kashtik"
    ]
  },
  {
    "slug": "kathlamet-people",
    "name": "Kathlamet People",
    "name_fi": "Kathlamet-kansa",
    "native_name": "Kathlamet",
    "alternate_names": [
      "Kathlamet"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kathlamet",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2398834",
    "summary_en": "The Kathlamet people are a tribe of Native American people with a historic homeland along the Columbia River in what is today southwestern Washington state. The Kathlamet people originally spoke the Kathlamet language, a dialect or language of the Chinookan language family. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 46.1°N, 123.4°W).",
    "summary_fi": "Kathlamet-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 46.1°N, 123.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Kathlamet"
    ]
  },
  {
    "slug": "kauwets-a-ka-people",
    "name": "Kauwets'a:ka People",
    "name_fi": "Kauwets'a:ka-kansa",
    "native_name": "Kauwets'a:ka",
    "alternate_names": [
      "Kauwets'a:ka"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kauwets'a%3Aka",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 36.6°N, 77.9°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Kauwets'a:ka-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 36.6°N, 77.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Kauwets'a:ka"
    ]
  },
  {
    "slug": "kawaiisu-people",
    "name": "Kawaiisu People",
    "name_fi": "Kawaiisu-kansa",
    "native_name": "Kawaiisu",
    "alternate_names": [
      "Kawaiisu"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "great-basin-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kawaiisu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q4206785",
    "summary_en": "The Kawaiisu are an Indigenous peoples of California in the United States who live in the Tehachapi Valley and to the north across the Tehachapi Pass in the southern Sierra Nevada, toward Lake Isabella and Walker Pass. Their ancestral country encompasses Great Basin (Numic Traditional Lands) (centered near 35.7°N, 117.3°W).",
    "summary_fi": "Kawaiisu-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Great Basinin aavikko- ja vuoristoalueilla (koordinaateissa noin 35.7°N, 117.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Great Basin seasonal encampments",
    "feature_name_matches": [
      "Kawaiisu"
    ]
  },
  {
    "slug": "kecoughtan-people",
    "name": "Kecoughtan People",
    "name_fi": "Kecoughtan-kansa",
    "native_name": "Kecoughtan",
    "alternate_names": [
      "Kecoughtan",
      "Kecoughtan, Virginia"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kecoughtan%2C_Virginia",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q6382489",
    "summary_en": "In the seventeenth century, Kecoughtan was the name of the settlement now known as Hampton, Virginia. In the early twentieth century, it was also the name of a town nearby in Elizabeth City County. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 37.1°N, 76.4°W).",
    "summary_fi": "Kecoughtan-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 37.1°N, 76.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Kecoughtan"
    ]
  },
  {
    "slug": "kelly-lake-metis-settlement-society-people",
    "name": "Kelly Lake Metis Settlement Society People",
    "name_fi": "Kelly Lake Metis Settlement Society-kansa",
    "native_name": "Kelly Lake Metis Settlement Society",
    "alternate_names": [
      "Kelly Lake Metis Settlement Society"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kelly_Lake_Metis_Settlement_Society",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 54.8°N, 119.9°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Kelly Lake Metis Settlement Society-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 54.8°N, 119.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Kelly Lake Metis Settlement Society"
    ]
  },
  {
    "slug": "chuj-people",
    "name": "Chuj People",
    "name_fi": "Chuj-kansa",
    "native_name": "Ket Chonhab' Kob'a (Chuj)",
    "alternate_names": [
      "Ket Chonhab' Kob'a (Chuj)",
      "Ket Chonhab’ Kob’a (Chuj)",
      "Chuj",
      "Chuj people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chuj_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2804638",
    "summary_en": "The Chuj or Chuh are a Maya people, whose homeland is in Guatemala and Mexico. Population estimates vary between 30,000 and over 60,000. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 16.0°N, 91.7°W).",
    "summary_fi": "Ket Chonhab' Kob'a (Chuj)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 16.0°N, 91.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Ket Chonhab’ Kob’a (Chuj)"
    ]
  },
  {
    "slug": "keyauwee-people",
    "name": "Keyauwee People",
    "name_fi": "Keyauwee-kansa",
    "native_name": "Keyauwee",
    "alternate_names": [
      "Keyauwee"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Keyauwee",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q20310190",
    "summary_en": "The Keyauwee Indians were a small North Carolina tribe, native to the area of present-day Randolph County, North Carolina. The Keyauwee village was surrounded by palisades and cornfields about thirty miles northeast of the Yadkin River, near present-day High Point, North Carolina. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 36.0°N, 80.8°W).",
    "summary_fi": "Keyauwee-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 36.0°N, 80.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Keyauwee"
    ]
  },
  {
    "slug": "kikiallus-people",
    "name": "KiKiallus People",
    "name_fi": "KiKiallus-kansa",
    "native_name": "KiKiallus",
    "alternate_names": [
      "KiKiallus",
      "Kikiallus people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kikiallus_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1741201",
    "summary_en": "The Kikiallus people are a Lushootseed-speaking Coast Salish people Indigenous to parts of western Washington. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 48.3°N, 122.4°W).",
    "summary_fi": "KiKiallus-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 48.3°N, 122.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "KiKiallus"
    ]
  },
  {
    "slug": "kiliwa-people",
    "name": "Kiliwa People",
    "name_fi": "Kiliwa-kansa",
    "native_name": "Kiliwa",
    "alternate_names": [
      "Kiliwa",
      "Kiliwa people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kiliwa_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2664567",
    "summary_en": "The Kiliwa are an Indigenous people of Mexico living in northern Baja California. Historically they occupied a territory lying between the Cochimí on the south and the Paipai on the north, and extending from San Felipe on the Gulf of California to San Quintín on the Pacific coast. Their ancestral country encompasses Aridoamerica and Sonoran Desert (Northern Mexico & Borderlands) (centered near 31.0°N, 115.5°W).",
    "summary_fi": "Kiliwa-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Aridoamerikassa ja Sonoran aavikolla Pohjois-Meksikon rajaseudulla (koordinaateissa noin 31.0°N, 115.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Sonoran rancherías and oasis settlements",
    "feature_name_matches": [
      "Kiliwa"
    ]
  },
  {
    "slug": "kiskiack-people",
    "name": "Kiskiack People",
    "name_fi": "Kiskiack-kansa",
    "native_name": "Kiskiack",
    "alternate_names": [
      "Kiskiack"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kiskiack",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3508816",
    "summary_en": "Kiskiack was a Native American tribal group of the Powhatan Confederacy in what is present-day York County, Virginia. The name means \"Wide Land\" or \"Broad Place\" in the native language, one of the Virginia Algonquian languages. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 37.3°N, 76.7°W).",
    "summary_fi": "Kiskiack-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 37.3°N, 76.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Kiskiack"
    ]
  },
  {
    "slug": "kitanemuk-people",
    "name": "Kitanemuk People",
    "name_fi": "Kitanemuk-kansa",
    "native_name": "Kitanemuk",
    "alternate_names": [
      "Kitanemuk"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kitanemuk",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q6417841",
    "summary_en": "The Kitanemuk are an Indigenous people of California who historically lived in the Tehachapi Mountains and the Antelope Valley area of the western Mojave Desert of Southern California, United States. The Kitanemuk lived in what is now Kern County, California. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 35.1°N, 118.6°W).",
    "summary_fi": "Kitanemuk-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 35.1°N, 118.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Kitanemuk"
    ]
  },
  {
    "slug": "kitasoo-xai-xais-people",
    "name": "Kitasoo/Xai'xais People",
    "name_fi": "Kitasoo/Xai'xais-kansa",
    "native_name": "Kitasoo/Xai'xais",
    "alternate_names": [
      "Kitasoo/Xai'xais"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kitasoo%2FXai'xais",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 53.0°N, 128.2°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Kitasoo/Xai'xais-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 53.0°N, 128.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Kitasoo/Xai'xais"
    ]
  },
  {
    "slug": "kitselas-people",
    "name": "Kitselas People",
    "name_fi": "Kitselas-kansa",
    "native_name": "Kitselas",
    "alternate_names": [
      "Kitselas"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kitselas",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q6418335",
    "summary_en": "Kitselas are one of the 14 tribes of the Tsimshian nation of British Columbia, in northwestern Canada. The original name Gits'ilaasü means \"people of the canyon.\" The tribe is situated at Kitselas, British Columbia, at the upper end of Kitselas Canyon, which is on the Skeena River. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 54.3°N, 128.6°W).",
    "summary_fi": "Kitselas-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 54.3°N, 128.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Kitselas"
    ]
  },
  {
    "slug": "kitsumkalum-people",
    "name": "Kitsumkalum People",
    "name_fi": "Kitsumkalum-kansa",
    "native_name": "Kitsumkalum",
    "alternate_names": [
      "Kitsumkalum"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kitsumkalum",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3500854",
    "summary_en": "Kitsumkalum is one of the 14 tribes of the Tsimshian nation in British Columbia, Canada. Kitsumkalum and is also the name of one of their Indian Reserve just west of the city of Terrace, British Columbia, where the Kitsumkalum River flows into the Skeena River. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 54.5°N, 128.7°W).",
    "summary_fi": "Kitsumkalum-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 54.5°N, 128.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Kitsumkalum"
    ]
  },
  {
    "slug": "chatino-people",
    "name": "Chatino People",
    "name_fi": "Chatino-kansa",
    "native_name": "Kitsé Cha'tnio (Chatino)",
    "alternate_names": [
      "Kitsé Cha'tnio (Chatino)",
      "Kitsé Cha’tnio (Chatino)",
      "Chatino",
      "Chatinos"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chatinos",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1281425",
    "summary_en": "The Chatinos are an Indigenous people of Mexico. Chatino communities are located in the southeastern region of the state of Oaxaca in southern central Mexico. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 16.3°N, 97.3°W).",
    "summary_fi": "Kitsé Cha'tnio (Chatino)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 16.3°N, 97.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Kitsé Cha’tnio (Chatino)"
    ]
  },
  {
    "slug": "kizh-people",
    "name": "Kizh People",
    "name_fi": "Kizh-kansa",
    "native_name": "Kizh",
    "alternate_names": [
      "Kizh"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kizh",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q104843091",
    "summary_en": "The Kizh or Kit’c are an Indigenous people of California, the historically and ethnographically documented lineal descendants of the Mission Indians of San Gabriel. They belong to a group commonly known by the Spanish name Gabrieleño. Their ancestral country encompasses Southern California & Inland Indigenous Lands (centered near 33.9°N, 117.9°W).",
    "summary_fi": "Kizh-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 33.9°N, 117.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southern California ancestral villages",
    "feature_name_matches": [
      "Kizh"
    ]
  },
  {
    "slug": "kl-bal-pom-wintu-people",
    "name": "Kl'bal Pom Wintu People",
    "name_fi": "Kl'bal Pom Wintu-kansa",
    "native_name": "Kl'bal Pom Wintu",
    "alternate_names": [
      "Kl'bal Pom Wintu"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kl'bal_Pom_Wintu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in California Indigenous Country (Pacific Coast & Central Valley) (centered near 40.9°N, 122.5°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Kl'bal Pom Wintu-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 40.9°N, 122.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Kl'bal Pom Wintu"
    ]
  },
  {
    "slug": "klahoose-people",
    "name": "Klahoose People",
    "name_fi": "Klahoose-kansa",
    "native_name": "Klahoose",
    "alternate_names": [
      "Klahoose"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Klahoose",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q16212189",
    "summary_en": "The Klahoose are one of the three groups comprising the ʔayʔaǰuθəm Tla'amin or Mainland Comox. The other two divisions of this once-populous group are the Homalco (χʷɛmaɬku) and Tla'amin (ɬəʔamɛn) Nations. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 50.4°N, 124.4°W).",
    "summary_fi": "Klahoose-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 50.4°N, 124.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Klahoose"
    ]
  },
  {
    "slug": "kluane-people",
    "name": "Kluane People",
    "name_fi": "Kluane-kansa",
    "native_name": "Kluane",
    "alternate_names": [
      "Kluane"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kluane",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 61.6°N, 139.6°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Kluane-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 61.6°N, 139.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Kluane"
    ]
  },
  {
    "slug": "coushatta-people",
    "name": "Coushatta People",
    "name_fi": "Coushatta-kansa",
    "native_name": "Koasati (Coushatta)",
    "alternate_names": [
      "Koasati (Coushatta)",
      "Coushatta"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Coushatta",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q494699",
    "summary_en": "The Coushatta are a Muskogean-speaking Native American people now living primarily in the U.S. states of Louisiana, Oklahoma, and Texas. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 31.1°N, 93.9°W).",
    "summary_fi": "Koasati (Coushatta)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 31.1°N, 93.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Koasati (Coushatta)"
    ]
  },
  {
    "slug": "konkow-people",
    "name": "Konkow People",
    "name_fi": "Konkow-kansa",
    "native_name": "Kojomk'awi (Konkow)",
    "alternate_names": [
      "Kojomk'awi (Konkow)",
      "Konkow",
      "Maidu"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Maidu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2533493",
    "summary_en": "The Maidu are a Native American people of northern California. They reside in the central Sierra Nevada, in the watershed area of the Feather and American Rivers and in Humbug Valley. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 39.7°N, 121.5°W).",
    "summary_fi": "Kojomk'awi (Konkow)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 39.7°N, 121.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Kojomk'awi (Konkow)"
    ]
  },
  {
    "slug": "konnaack-people",
    "name": "Konnaack People",
    "name_fi": "Konnaack-kansa",
    "native_name": "Konnaack",
    "alternate_names": [
      "Konnaack"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Konnaack",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 46.2°N, 123.1°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Konnaack-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 46.2°N, 123.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Konnaack"
    ]
  },
  {
    "slug": "konomihu-people",
    "name": "Konomihu People",
    "name_fi": "Konomihu-kansa",
    "native_name": "Konomihu",
    "alternate_names": [
      "Konomihu",
      "Konomihu language"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Konomihu_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3198734",
    "summary_en": "Konomihu is an extinct Shastan language formerly spoken in northern California. There may have been only a few speakers even before contact, and they self-identified as Shasta by the turn of the 20th century. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 41.2°N, 123.2°W).",
    "summary_fi": "Konomihu-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 41.2°N, 123.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Konomihu"
    ]
  },
  {
    "slug": "koyukon-people",
    "name": "Koyukon People",
    "name_fi": "Koyukon-kansa",
    "native_name": "Koyukon",
    "alternate_names": [
      "Koyukon"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Koyukon",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1389123",
    "summary_en": "The Koyukon, Dinaa, or Denaa are an Alaska Native Athabascan people of the Athabascan-speaking ethnolinguistic group. Their traditional territory is along the Koyukuk and Yukon rivers where they subsisted for thousands of years by hunting and trapping. Their ancestral country encompasses Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 65.8°N, 153.5°W).",
    "summary_fi": "Koyukon-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 65.8°N, 153.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Koyukon"
    ]
  },
  {
    "slug": "kriol-people",
    "name": "Kriol People",
    "name_fi": "Kriol-kansa",
    "native_name": "Kriol",
    "alternate_names": [
      "Kriol",
      "Sierra Leone Creole people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Sierra_Leone_Creole_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2983498",
    "summary_en": "The Sierra Leone Creole people are an ethnic group of Sierra Leone. The Sierra Leone Creole people are descendants of freed African-American, Afro-Caribbean, and Liberated African slaves who settled in the Western Area of Sierra Leone between 1787 and about 1885. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 11.1°N, 84.1°W).",
    "summary_fi": "Kriol-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 11.1°N, 84.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Kriol"
    ]
  },
  {
    "slug": "ktunaxa-amak-is-people",
    "name": "Ktunaxa ɁamakɁis People",
    "name_fi": "Ktunaxa ɁamakɁis-kansa",
    "native_name": "Ktunaxa ɁamakɁis",
    "alternate_names": [
      "Ktunaxa ɁamakɁis"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ktunaxa_%C9%81amak%C9%81is",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 49.8°N, 115.6°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Ktunaxa ɁamakɁis-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 49.8°N, 115.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Ktunaxa ɁamakɁis"
    ]
  },
  {
    "slug": "kumeyaay-people",
    "name": "Kumeyaay People",
    "name_fi": "Kumeyaay-kansa",
    "native_name": "Kumeyaay",
    "alternate_names": [
      "Kumeyaay"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kumeyaay",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2143064",
    "summary_en": "The Kumeyaay, also known as 'Iipai-Tiipai or by the historical Spanish name Diegueño, is a tribe of Indigenous people who live at the northern border of Baja California in Mexico and the southern border of California in the United States. They are an Indigenous people of California. Their ancestral country encompasses Aridoamerica and Sonoran Desert (Northern Mexico & Borderlands) (centered near 32.4°N, 116.0°W).",
    "summary_fi": "Kumeyaay-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Aridoamerikassa ja Sonoran aavikolla Pohjois-Meksikon rajaseudulla (koordinaateissa noin 32.4°N, 116.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Sonoran rancherías and oasis settlements",
    "feature_name_matches": [
      "Kumeyaay"
    ]
  },
  {
    "slug": "kusso-people",
    "name": "Kusso People",
    "name_fi": "Kusso-kansa",
    "native_name": "Kusso",
    "alternate_names": [
      "Kusso",
      "Kusasi people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kusasi_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q641332",
    "summary_en": "The Kusasi, Kusaasi, or the Kusaal people, are an ethnic group primarily located in the Bawku Traditional Area (Kusaug) of Ghana's Upper East Region, with an estimated population of around 723,000. They are the second-largest ethnic group in Ghana's Northern sector and have a significant presence in southern Burkina Faso.The Kusasi speak the Kusaal language, a Gur language, and are considered indigenous to the eastern part of the Upper East Region. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 32.6°N, 80.7°W).",
    "summary_fi": "Kusso-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 32.6°N, 80.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Kusso"
    ]
  },
  {
    "slug": "kuuvuan-kanianiq-people",
    "name": "Kuuvuan KaNianiq People",
    "name_fi": "Kuuvuan KaNianiq-kansa",
    "native_name": "Kuuvuan KaNianiq",
    "alternate_names": [
      "Kuuvuan KaNianiq"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kuuvuan_KaNianiq",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 67.2°N, 154.6°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Kuuvuan KaNianiq-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 67.2°N, 154.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Kuuvuan KaNianiq"
    ]
  },
  {
    "slug": "kuyam-people",
    "name": "Kuyam People",
    "name_fi": "Kuyam-kansa",
    "native_name": "Kuyam",
    "alternate_names": [
      "Kuyam",
      "Kuy people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kuy_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q4444914",
    "summary_en": "The Kuy are an indigenous ethnic group of mainland Southeast Asia. The native lands of the Kuy range from the southern Khorat Plateau in northeast Thailand east to the banks of the Mekong River in southern Laos and south to north central Cambodia. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 35.1°N, 119.9°W).",
    "summary_fi": "Kuyam-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 35.1°N, 119.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Kuyam"
    ]
  },
  {
    "slug": "kwanlin-dun-people",
    "name": "Kwanlin Dün People",
    "name_fi": "Kwanlin Dün-kansa",
    "native_name": "Kwanlin Dün",
    "alternate_names": [
      "Kwanlin Dün"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kwanlin_D%C3%BCn",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 61.1°N, 135.0°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Kwanlin Dün-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 61.1°N, 135.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Kwanlin Dün"
    ]
  },
  {
    "slug": "kwantlen-people",
    "name": "Kwantlen People",
    "name_fi": "Kwantlen-kansa",
    "native_name": "Kwantlen",
    "alternate_names": [
      "Kwantlen",
      "Kwantlen First Nation"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kwantlen_First_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q6450195",
    "summary_en": "Kwantlen First Nation is a First Nations band government in British Columbia, Canada, located primarily on McMillan Island near Fort Langley. The Kwantlen people traditionally speak hən̓q̓əmin̓əm̓, the Downriver dialect of Halkomelem, one of the Salishan family languages. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 49.4°N, 122.1°W).",
    "summary_fi": "Kwantlen-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 49.4°N, 122.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Kwantlen"
    ]
  },
  {
    "slug": "kwikwetlem-people",
    "name": "Kwikwetlem People",
    "name_fi": "Kwikwetlem-kansa",
    "native_name": "Kwikwetlem",
    "alternate_names": [
      "Kwikwetlem",
      "Kwikwetlem First Nation"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kwikwetlem_First_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1432860",
    "summary_en": "Kwikwetlem First Nation, also known as Coquitlam Indian Band, is the band government of the Kwikwetlem, a Sto:lo people living in the Coquitlam area of British Columbia, Canada. They traditionally speak the Downriver dialect of hən̓q̓əmin̓əm̓, one of the Salishan family of languages. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 49.4°N, 122.7°W).",
    "summary_fi": "Kwikwetlem-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 49.4°N, 122.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Kwikwetlem"
    ]
  },
  {
    "slug": "k-asho-got-ine-people",
    "name": "K'asho Got'ine People",
    "name_fi": "K'asho Got'ine-kansa",
    "native_name": "K'asho Got'ine",
    "alternate_names": [
      "K'asho Got'ine",
      "K’asho Got’ine"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/K'asho_Got'ine",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 67.1°N, 128.8°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "K'asho Got'ine-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 67.1°N, 128.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "K’asho Got’ine"
    ]
  },
  {
    "slug": "k-aalo-got-ine-people",
    "name": "K'áálǫ Got'ine People",
    "name_fi": "K'áálǫ Got'ine-kansa",
    "native_name": "K'áálǫ Got'ine",
    "alternate_names": [
      "K'áálǫ Got'ine",
      "K’áálǫ Got’ine"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/K'%C3%A1%C3%A1l%C7%AB_Got'ine",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 65.3°N, 125.3°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "K'áálǫ Got'ine-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 65.3°N, 125.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "K’áálǫ Got’ine"
    ]
  },
  {
    "slug": "k-omoks-people",
    "name": "K'ómoks People",
    "name_fi": "K'ómoks-kansa",
    "native_name": "K'ómoks",
    "alternate_names": [
      "K'ómoks",
      "K’ómoks",
      "Kʼómoks"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/K%CA%BC%C3%B3moks",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1406599",
    "summary_en": "The Kʼómoks are a Coast Salish Indigenous people whose traditional territory is centered in the north-central Salish Sea and southern Johnstone Strait. They are characterized by a common language. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 49.7°N, 125.4°W).",
    "summary_fi": "K'ómoks-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 49.7°N, 125.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "K’ómoks"
    ]
  },
  {
    "slug": "lassik-people",
    "name": "Lassik People",
    "name_fi": "Lassik-kansa",
    "native_name": "Lassik",
    "alternate_names": [
      "Lassik",
      "Eel River Athapaskan peoples"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Eel_River_Athapaskan_peoples",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q4300644",
    "summary_en": "The Eel River Athapaskans include the Wailaki, Lassik, Nongatl, and Sinkyone (Sinkine) groups of Native Americans that traditionally live in present-day Mendocino, Trinity, and Humboldt counties on or near the Eel River and Van Duzen River of northwestern California. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 40.2°N, 123.4°W).",
    "summary_fi": "Lassik-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 40.2°N, 123.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Lassik"
    ]
  },
  {
    "slug": "lummi-people",
    "name": "Lummi People",
    "name_fi": "Lummi-kansa",
    "native_name": "Lhaq'temish (Lummi)",
    "alternate_names": [
      "Lhaq'temish (Lummi)",
      "Lhaq’temish (Lummi)",
      "Lummi",
      "Lummi people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Lummi_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q125701207",
    "summary_en": "The Lummi are a Central Coast Salish people Indigenous to western Washington, namely parts of the San Juan Islands and the mainland near what is now Bellingham, Washington. Lummi people today are enrolled in the Lummi Nation, which is located west of Bellingham. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 48.8°N, 122.5°W).",
    "summary_fi": "Lhaq'temish (Lummi)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 48.8°N, 122.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Lhaq’temish (Lummi)"
    ]
  },
  {
    "slug": "lheidli-t-enneh-people",
    "name": "Lheidli T'enneh People",
    "name_fi": "Lheidli T'enneh-kansa",
    "native_name": "Lheidli T'enneh",
    "alternate_names": [
      "Lheidli T'enneh",
      "Lheidli Tʼenneh Band"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Lheidli_T%CA%BCenneh_Band",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q17008032",
    "summary_en": "Lheidli Tʼenneh Band also known as the Lheidli Tʼenneh First Nation and historically known as the Fort George Indian Band is the First Nations band government for the Lheidli Tʼenneh, a subgroup of the Dakelh people whose traditional territory includes the City of Prince George, British Columbia. The name means \"The People from the confluence of the two rivers\" in the Carrier language referring to how the Nechako River enters the Fraser River at Prince George. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 53.7°N, 121.8°W).",
    "summary_fi": "Lheidli T'enneh-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 53.7°N, 121.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Lheidli T'enneh"
    ]
  },
  {
    "slug": "lil-wat-people",
    "name": "Lil'wat People",
    "name_fi": "Lil'wat-kansa",
    "native_name": "Lil'wat",
    "alternate_names": [
      "Lil'wat",
      "Lilʼwat First Nation"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Lil%CA%BCwat_First_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q6547392",
    "summary_en": "The Lilʼwat First Nation, a.k.a. the Lilʼwat Nation or the Mount Currie Indian Band, is a First Nation band government located in the southern Coast Mountains region of the Interior of the Canadian province of British Columbia. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 50.4°N, 122.9°W).",
    "summary_fi": "Lil'wat-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 50.4°N, 122.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Lil'wat"
    ]
  },
  {
    "slug": "luckiamute-people",
    "name": "Luckiamute People",
    "name_fi": "Luckiamute-kansa",
    "native_name": "Luckiamute",
    "alternate_names": [
      "Luckiamute"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Luckiamute",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 44.8°N, 123.4°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Luckiamute-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 44.8°N, 123.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Luckiamute"
    ]
  },
  {
    "slug": "lumbee-people",
    "name": "Lumbee People",
    "name_fi": "Lumbee-kansa",
    "native_name": "Lumbee",
    "alternate_names": [
      "Lumbee"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Lumbee",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1886046",
    "summary_en": "The Lumbee, also known as People of the Dark Water, are a mixed-race people group of the Americas, some of whom comprise the federally recognized Lumbee Tribe of North Carolina. Primarily located in Robeson County, North Carolina, the Lumbee claim to be descended from numerous Indigenous peoples of the Southeastern Woodlands who once inhabited the region and have been shown to have connections with other racial isolate groups, such as the Melungeons and Louisiana Redbones. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 35.6°N, 78.5°W).",
    "summary_fi": "Lumbee-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 35.6°N, 78.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Lumbee"
    ]
  },
  {
    "slug": "macorix-people",
    "name": "Macorix People",
    "name_fi": "Macorix-kansa",
    "native_name": "Macorix",
    "alternate_names": [
      "Macorix",
      "Indigenous peoples of the Caribbean"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Indigenous_peoples_of_the_Caribbean",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q4991716",
    "summary_en": "At the time of first contact between Europe and the Americas, the Indigenous peoples of the Caribbean included the Taíno of the northern Lesser Antilles and most of the Greater Antilles, including the Lucayans of the Bahamas and the Ciboney of Cuba; the Kalinago of the Lesser Antilles; the Ciguayo and Macorix of parts of Hispaniola; and the Guanahatabey of western Cuba. The Kalinago have maintained an identity as an Indigenous people, with a reserved territory in Dominica. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 19.1°N, 70.4°W).",
    "summary_fi": "Macorix-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 19.1°N, 70.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Macorix"
    ]
  },
  {
    "slug": "malecu-people",
    "name": "Malécu People",
    "name_fi": "Malécu-kansa",
    "native_name": "Malécu",
    "alternate_names": [
      "Malécu",
      "Maleku people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Maleku_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1162771",
    "summary_en": "The Maleku are an Indigenous people of Costa Rica located in the Guatuso Indigenous Reserve near the town of Guatuso. Historically they were also known as the Guatuso, the name used by Spanish settlers. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 10.7°N, 84.8°W).",
    "summary_fi": "Malécu-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 10.7°N, 84.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Malécu"
    ]
  },
  {
    "slug": "manahoac-people",
    "name": "Manahoac People",
    "name_fi": "Manahoac-kansa",
    "native_name": "Manahoac",
    "alternate_names": [
      "Manahoac"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Manahoac",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3513639",
    "summary_en": "The Manahoac, also recorded as Mahock, were an Indigenous people of the Northeastern Woodlands, who lived in northern Virginia at the time of European contact. They numbered approximately 1,000. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 38.6°N, 78.4°W).",
    "summary_fi": "Manahoac-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 38.6°N, 78.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Manahoac"
    ]
  },
  {
    "slug": "massachusett-people",
    "name": "Massachusett People",
    "name_fi": "Massachusett-kansa",
    "native_name": "Massa-adchu-es-et (Massachusett)",
    "alternate_names": [
      "Massa-adchu-es-et (Massachusett)",
      "Massachusett"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Massachusett",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q932241",
    "summary_en": "The Massachusett were an Indigenous tribe of the Northeastern Woodlands whose historic homeland encompassed much of present-day Greater Boston in eastern Massachusetts, particularly the watersheds of the Charles and Neponset rivers and the coast of Massachusetts Bay. The English name Massachusett derives from an Indigenous place-name commonly interpreted as referring to the Great Blue Hill. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 42.2°N, 71.1°W).",
    "summary_fi": "Massa-adchu-es-et (Massachusett)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 42.2°N, 71.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Massa-adchu-es-et (Massachusett)"
    ]
  },
  {
    "slug": "massacoes-people",
    "name": "Massacoes People",
    "name_fi": "Massacoes-kansa",
    "native_name": "Massacoes",
    "alternate_names": [
      "Massacoes"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Massacoes",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Northeastern Woodlands and Great Lakes Basin (centered near 41.9°N, 72.9°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Massacoes-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 41.9°N, 72.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Massacoes"
    ]
  },
  {
    "slug": "massawomeck-people",
    "name": "Massawomeck People",
    "name_fi": "Massawomeck-kansa",
    "native_name": "Massawomeck",
    "alternate_names": [
      "Massawomeck",
      "Massawomeck people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Massawomeck_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q104860819",
    "summary_en": "The Massawomeck were an Iroquoian people who lived in what is now western Maryland and eastern West Virginia during the early 17th century. Their territory encompassed the headwaters of the Monongahela, Youghiogheny and Potomac rivers. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 39.4°N, 79.0°W).",
    "summary_fi": "Massawomeck-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 39.4°N, 79.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Massawomeck"
    ]
  },
  {
    "slug": "matagalpa-cacaopera-people",
    "name": "Matagalpa/Cacaopera People",
    "name_fi": "Matagalpa/Cacaopera-kansa",
    "native_name": "Matagalpa/Cacaopera",
    "alternate_names": [
      "Matagalpa/Cacaopera"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Matagalpa%2FCacaopera",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Mesoamerica (Maya Region & Central America) (centered near 13.3°N, 85.7°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Matagalpa/Cacaopera-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 13.3°N, 85.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Matagalpa/Cacaopera"
    ]
  },
  {
    "slug": "matecumbe-people",
    "name": "Matecumbe People",
    "name_fi": "Matecumbe-kansa",
    "native_name": "Matecumbe",
    "alternate_names": [
      "Matecumbe"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Matecumbe",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q6786362",
    "summary_en": "Matecumbe is a neighborhood within the village of Islamorada in Monroe County, Florida, United States. It is located in the upper Florida Keys on the island of Upper Matecumbe Key. Their ancestral country encompasses Florida Peninsula Indigenous Country (centered near 25.2°N, 80.4°W).",
    "summary_fi": "Matecumbe-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Floridan niemimaalla ja rannikkovesillä (koordinaateissa noin 25.2°N, 80.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Florida coastal and riverine towns",
    "feature_name_matches": [
      "Matecumbe"
    ]
  },
  {
    "slug": "matlatzinco-tlahuica-ocuiltec-people",
    "name": "Matlatzinco/Tlahuica/Ocuiltec People",
    "name_fi": "Matlatzinco/Tlahuica/Ocuiltec-kansa",
    "native_name": "Matlatzinco/Tlahuica/Ocuiltec",
    "alternate_names": [
      "Matlatzinco/Tlahuica/Ocuiltec"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Matlatzinco%2FTlahuica%2FOcuiltec",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 18.8°N, 99.7°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Matlatzinco/Tlahuica/Ocuiltec-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 18.8°N, 99.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Matlatzinco/Tlahuica/Ocuiltec"
    ]
  },
  {
    "slug": "matlatzinco-matlatzinteca-people",
    "name": "Matlatzinco/matlatzinteca People",
    "name_fi": "Matlatzinco/matlatzinteca-kansa",
    "native_name": "Matlatzinco/matlatzinteca",
    "alternate_names": [
      "Matlatzinco/matlatzinteca"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Matlatzinco%2Fmatlatzinteca",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 19.8°N, 101.1°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Matlatzinco/matlatzinteca-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 19.8°N, 101.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Matlatzinco/matlatzinteca"
    ]
  },
  {
    "slug": "mattamuskeet-people",
    "name": "Mattamuskeet People",
    "name_fi": "Mattamuskeet-kansa",
    "native_name": "Mattamuskeet",
    "alternate_names": [
      "Mattamuskeet",
      "Lake Mattamuskeet"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Lake_Mattamuskeet",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q5969534",
    "summary_en": "Lake Mattamuskeet is the largest natural lake in North Carolina. It is a shallow coastal lake, averaging 2–3 ft feet in depth, and stretches 18 miles (29 km) long and 7 miles (11 km) wide. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 35.5°N, 76.3°W).",
    "summary_fi": "Mattamuskeet-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 35.5°N, 76.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Mattamuskeet"
    ]
  },
  {
    "slug": "mattole-people",
    "name": "Mattole People",
    "name_fi": "Mattole-kansa",
    "native_name": "Mattole",
    "alternate_names": [
      "Mattole"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mattole",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3525261",
    "summary_en": "The Mattole are an Indigenous people of California whose traditional territory was centered on the lower Mattole River in present-day Humboldt County, California. The neighboring Bear River people (Nekanni), whose territory was centered on the Bear River, were a separate people, although early ethnographers sometimes grouped them with the Mattole. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 40.3°N, 124.2°W).",
    "summary_fi": "Mattole-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 40.3°N, 124.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Mattole"
    ]
  },
  {
    "slug": "mdewakanton-people",
    "name": "Mdewakanton People",
    "name_fi": "Mdewakanton-kansa",
    "native_name": "Mdewakanton",
    "alternate_names": [
      "Mdewakanton"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "plains-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mdewakanton",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q444397",
    "summary_en": "The Mdewakanton or Mdewakantonwan are one of the sub-tribes of the Isanti (Santee) Dakota (Sioux). Their historic home is Mille Lacs Lake in central Minnesota. Their ancestral country encompasses Great Plains (Plains Indigenous Territory) (centered near 46.5°N, 95.7°W).",
    "summary_fi": "Mdewakanton-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Suurten tasankojen (Great Plains) perinnealueilla (koordinaateissa noin 46.5°N, 95.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Plains ancestral encampments",
    "feature_name_matches": [
      "Mdewakanton"
    ]
  },
  {
    "slug": "mechoopda-people",
    "name": "Mechoopda People",
    "name_fi": "Mechoopda-kansa",
    "native_name": "Mechoopda",
    "alternate_names": [
      "Mechoopda"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mechoopda",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q6804734",
    "summary_en": "The Mechoopda are a tribe of Maidu people, an Indigenous people of California. They are enrolled in the Mechoopda Indian Tribe of Chico Rancheria, a federally recognized tribe. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 39.6°N, 121.8°W).",
    "summary_fi": "Mechoopda-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 39.6°N, 121.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Mechoopda"
    ]
  },
  {
    "slug": "meherrin-people",
    "name": "Meherrin People",
    "name_fi": "Meherrin-kansa",
    "native_name": "Meherrin",
    "alternate_names": [
      "Meherrin"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Meherrin",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q844328",
    "summary_en": "The Meherrin people were an Indigenous people of the Northeastern Woodlands, who spoke an Iroquian language. They lived between the Piedmont and coastal plains at the border of Virginia and North Carolina. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 36.6°N, 77.9°W).",
    "summary_fi": "Meherrin-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 36.6°N, 77.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Meherrin"
    ]
  },
  {
    "slug": "methow-people",
    "name": "Methow People",
    "name_fi": "Methow-kansa",
    "native_name": "Methow",
    "alternate_names": [
      "Methow",
      "Methow people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Methow_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1593458",
    "summary_en": "The Methow are a Native American tribe that lived along the Methow River, a tributary of the Columbia River in northern Washington. They are an Interior Salish people and an Indigenous people of the Plateau. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 48.4°N, 120.2°W).",
    "summary_fi": "Methow-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 48.4°N, 120.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Methow"
    ]
  },
  {
    "slug": "fox-people",
    "name": "Fox People",
    "name_fi": "Fox-kansa",
    "native_name": "Meškwahki·aša·hina (Fox)",
    "alternate_names": [
      "Meškwahki·aša·hina (Fox)",
      "Fox",
      "Meskwaki"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Meskwaki",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1440169",
    "summary_en": "The Meskwaki, also known by the European exonyms Fox Indians or the Fox, are a Native American people. They have been closely linked to the Sauk (Sac) people of the same language family. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 42.0°N, 84.2°W).",
    "summary_fi": "Meškwahki·aša·hina (Fox)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 42.0°N, 84.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Meškwahki·aša·hina (Fox)"
    ]
  },
  {
    "slug": "tlapaneco-people",
    "name": "Tlapaneco People",
    "name_fi": "Tlapaneco-kansa",
    "native_name": "Me̱'pha̱a̱ (Tlapaneco)",
    "alternate_names": [
      "Me̱'pha̱a̱ (Tlapaneco)",
      "Tlapaneco",
      "Tlapanec language"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tlapanec_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36868",
    "summary_en": "Tlapanec, or Meꞌphaa, is an indigenous Mexican language spoken by more than 98,000 Tlapanec people in the state of Guerrero. Like other Oto-Manguean languages, it is tonal and has complex inflectional morphology. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 17.1°N, 98.9°W).",
    "summary_fi": "Me̱'pha̱a̱ (Tlapaneco)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 17.1°N, 98.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Me̱'pha̱a̱ (Tlapaneco)"
    ]
  },
  {
    "slug": "miccosukee-people",
    "name": "Miccosukee People",
    "name_fi": "Miccosukee-kansa",
    "native_name": "Miccosukee",
    "alternate_names": [
      "Miccosukee"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Miccosukee",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1778387",
    "summary_en": "The Miccosukee Tribe of Indians is a federally recognized Native American tribe in the U.S. state of Florida. Their ancestral country encompasses Florida Peninsula Indigenous Country (centered near 26.1°N, 80.8°W).",
    "summary_fi": "Miccosukee-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Floridan niemimaalla ja rannikkovesillä (koordinaateissa noin 26.1°N, 80.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Florida coastal and riverine towns",
    "feature_name_matches": [
      "Miccosukee"
    ]
  },
  {
    "slug": "metis-people",
    "name": "Métis People",
    "name_fi": "Métis-kansa",
    "native_name": "Michif Piyii (Métis)",
    "alternate_names": [
      "Michif Piyii (Métis)",
      "Métis"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/M%C3%A9tis",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q262457",
    "summary_en": "The Métis are a mixed-ancestry Indigenous people whose historical homelands include Canada's three Prairie Provinces extending into parts of Ontario, British Columbia, the Northwest Territories and the northwest United States. They have a shared history and culture, deriving from specific mixed European and Indigenous ancestry, which became distinct through ethnogenesis by the mid-18th century, during the early years of the North American fur trade. Their ancestral country encompasses Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 54.6°N, 106.9°W).",
    "summary_fi": "Michif Piyii (Métis)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 54.6°N, 106.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Michif Piyii (Métis)"
    ]
  },
  {
    "slug": "micqanaqa-n-people",
    "name": "Micqanaqa'n People",
    "name_fi": "Micqanaqa'n-kansa",
    "native_name": "Micqanaqa'n",
    "alternate_names": [
      "Micqanaqa'n",
      "Micqanaqa’n"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Micqanaqa'n",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in California Indigenous Country (Pacific Coast & Central Valley) (centered near 34.4°N, 119.1°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Micqanaqa'n-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 34.4°N, 119.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Micqanaqa’n"
    ]
  },
  {
    "slug": "mississauga-people",
    "name": "Mississauga People",
    "name_fi": "Mississauga-kansa",
    "native_name": "Mississauga",
    "alternate_names": [
      "Mississauga",
      "Mississaugas"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mississaugas",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q950097",
    "summary_en": "The Mississaugas are a group of First Nations peoples located in southern Ontario, Canada. They are a sub-group of the Ojibwe Nation. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 44.3°N, 79.0°W).",
    "summary_fi": "Mississauga-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 44.3°N, 79.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Mississauga"
    ]
  },
  {
    "slug": "mississaugas-of-the-credit-first-nation-people",
    "name": "Mississaugas of the Credit First Nation People",
    "name_fi": "Mississaugas of the Credit First Nation-kansa",
    "native_name": "Mississaugas of the Credit First Nation",
    "alternate_names": [
      "Mississaugas of the Credit First Nation"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mississaugas_of_the_Credit_First_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q6878995",
    "summary_en": "Mississaugas of the Credit First Nation is a First Nation of Mississaugas, an Ojibwe sub-group, in south-central Ontario, Canada. In April 2015, MCFN had an enrolled population of 2,330 people, 850 of whom lived on the reserve. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 43.5°N, 80.3°W).",
    "summary_fi": "Mississaugas of the Credit First Nation-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 43.5°N, 80.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Mississaugas of the Credit First Nation"
    ]
  },
  {
    "slug": "miwko-waali-people",
    "name": "Miwkoʔ Waaliʔ People",
    "name_fi": "Miwkoʔ Waaliʔ-kansa",
    "native_name": "Miwkoʔ Waaliʔ",
    "alternate_names": [
      "Miwkoʔ Waaliʔ"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Miwko%CA%94_Waali%CA%94",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in California Indigenous Country (Pacific Coast & Central Valley) (centered near 38.2°N, 121.3°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Miwkoʔ Waaliʔ-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 38.2°N, 121.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Miwkoʔ Waaliʔ"
    ]
  },
  {
    "slug": "mnicoujou-people",
    "name": "Mnicoujou People",
    "name_fi": "Mnicoujou-kansa",
    "native_name": "Mnicoujou",
    "alternate_names": [
      "Mnicoujou",
      "Miniconjou"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "plains-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Miniconjou",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1737293",
    "summary_en": "The Miniconjou are a Native American people constituting a subdivision of the Lakota people, who formerly inhabited an area in western present-day South Dakota from the Black Hills in to the Platte River. The contemporary population lives mostly in west-central South Dakota. Their ancestral country encompasses Great Plains (Plains Indigenous Territory) (centered near 44.3°N, 101.1°W).",
    "summary_fi": "Mnicoujou-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Suurten tasankojen (Great Plains) perinnealueilla (koordinaateissa noin 44.3°N, 101.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Plains ancestral encampments",
    "feature_name_matches": [
      "Mnicoujou"
    ]
  },
  {
    "slug": "mocho-people",
    "name": "Mochó People",
    "name_fi": "Mochó-kansa",
    "native_name": "Mochó",
    "alternate_names": [
      "Mochó",
      "Motozintlecos"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Motozintlecos",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q27688756",
    "summary_en": "The Motozintlecos or Mochós are an Indigenous people of Chiapas, Mexico. They speak the Mocho’ language, part of the western branch of Mayan languages. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 15.4°N, 92.2°W).",
    "summary_fi": "Mochó-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 15.4°N, 92.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Mochó"
    ]
  },
  {
    "slug": "mohican-people",
    "name": "Mohican People",
    "name_fi": "Mohican-kansa",
    "native_name": "Mohican",
    "alternate_names": [
      "Mohican",
      "Mohicans"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mohicans",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q776280",
    "summary_en": "The Mohicans or Mahicans are an Indigenous people of the Northeastern Woodlands who spoke an Eastern Algonquian language. Historically, they were based in Upstate New York. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 42.9°N, 73.6°W).",
    "summary_fi": "Mohican-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 42.9°N, 73.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Mohican"
    ]
  },
  {
    "slug": "molalla-people",
    "name": "Molalla People",
    "name_fi": "Molalla-kansa",
    "native_name": "Molalla",
    "alternate_names": [
      "Molalla",
      "Molala"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Molala",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3512882",
    "summary_en": "The Molala are a Native American people of Oregon that originally resided in the Western Cascades. There are few recorded sources about the Molala, the majority being unpublished manuscripts. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 43.9°N, 122.1°W).",
    "summary_fi": "Molalla-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 43.9°N, 122.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Molalla"
    ]
  },
  {
    "slug": "monacan-people",
    "name": "Monacan People",
    "name_fi": "Monacan-kansa",
    "native_name": "Monacan",
    "alternate_names": [
      "Monacan",
      "Monacan Indian Nation"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Monacan_Indian_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3513658",
    "summary_en": "The Monacan Indian Nation is a federally recognized tribe of Monacan people, an Indigenous people of the Northeastern Woodlands. It is also one of eleven Native American tribes recognized since the late 20th century by the U.S. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 37.7°N, 78.6°W).",
    "summary_fi": "Monacan-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 37.7°N, 78.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Monacan"
    ]
  },
  {
    "slug": "moneton-people",
    "name": "Moneton People",
    "name_fi": "Moneton-kansa",
    "native_name": "Moneton",
    "alternate_names": [
      "Moneton"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Moneton",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q6899035",
    "summary_en": "The Moneton were a historical Native American tribe from West Virginia. In the late 17th century, they lived in the Kanawha Valley near the Kanawha and New Rivers. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 37.4°N, 81.0°W).",
    "summary_fi": "Moneton-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 37.4°N, 81.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Moneton"
    ]
  },
  {
    "slug": "monqui-people",
    "name": "Monqui People",
    "name_fi": "Monqui-kansa",
    "native_name": "Monqui",
    "alternate_names": [
      "Monqui"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Monqui",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2063250",
    "summary_en": "The Monqui were indigenous peoples of Mexico, who lived in the vicinity of Loreto, Baja California Sur, Mexico, at the time of Spanish contact. Monqui territory included about 65 kilometres (40 mi) of coast along the Gulf of California and extended a few kilometers inland to where the Cochimi people lived. Their ancestral country encompasses Aridoamerica and Sonoran Desert (Northern Mexico & Borderlands) (centered near 25.8°N, 111.4°W).",
    "summary_fi": "Monqui-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Aridoamerikassa ja Sonoran aavikolla Pohjois-Meksikon rajaseudulla (koordinaateissa noin 25.8°N, 111.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Sonoran rancherías and oasis settlements",
    "feature_name_matches": [
      "Monqui"
    ]
  },
  {
    "slug": "mopan-people",
    "name": "Mopan People",
    "name_fi": "Mopan-kansa",
    "native_name": "Mopan",
    "alternate_names": [
      "Mopan",
      "Mopan people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mopan_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1496300",
    "summary_en": "The Mopan people are an Indigenous, sub-ethnic group of the Maya peoples. They are native to regions of Belize and Guatemala. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 16.4°N, 89.0°W).",
    "summary_fi": "Mopan-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 16.4°N, 89.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Mopan"
    ]
  },
  {
    "slug": "moratok-people",
    "name": "Moratok People",
    "name_fi": "Moratok-kansa",
    "native_name": "Moratok",
    "alternate_names": [
      "Moratok"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Moratok",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 35.9°N, 77.1°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Moratok-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 35.9°N, 77.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Moratok"
    ]
  },
  {
    "slug": "moraughtacund-people",
    "name": "Moraughtacund People",
    "name_fi": "Moraughtacund-kansa",
    "native_name": "Moraughtacund",
    "alternate_names": [
      "Moraughtacund"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Moraughtacund",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Northeastern Woodlands and Great Lakes Basin (centered near 37.8°N, 76.5°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Moraughtacund-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 37.8°N, 76.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Moraughtacund"
    ]
  },
  {
    "slug": "moses-columbia-people",
    "name": "Moses/Columbia People",
    "name_fi": "Moses/Columbia-kansa",
    "native_name": "Moses/Columbia",
    "alternate_names": [
      "Moses/Columbia"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Moses%2FColumbia",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 47.3°N, 119.4°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Moses/Columbia-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 47.3°N, 119.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Moses/Columbia"
    ]
  },
  {
    "slug": "mount-tabor-indian-community-people",
    "name": "Mount Tabor Indian Community People",
    "name_fi": "Mount Tabor Indian Community-kansa",
    "native_name": "Mount Tabor Indian Community",
    "alternate_names": [
      "Mount Tabor Indian Community"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "plains-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mount_Tabor_Indian_Community",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q48817352",
    "summary_en": "The Mount Tabor Indian Community is a cultural heritage group located in Rusk County, Texas. There was a historical Mount Tabor Indian Community dating from the 19th century. Their ancestral country encompasses Great Plains (Plains Indigenous Territory) (centered near 32.3°N, 95.1°W).",
    "summary_fi": "Mount Tabor Indian Community-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Suurten tasankojen (Great Plains) perinnealueilla (koordinaateissa noin 32.3°N, 95.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Plains ancestral encampments",
    "feature_name_matches": [
      "Mount Tabor Indian Community"
    ]
  },
  {
    "slug": "mountain-metis-people",
    "name": "Mountain Métis People",
    "name_fi": "Mountain Métis-kansa",
    "native_name": "Mountain Métis",
    "alternate_names": [
      "Mountain Métis",
      "Métis in Alberta"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/M%C3%A9tis_in_Alberta",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q6950150",
    "summary_en": "Alberta's Métis people are descendants of mixed First Nations/Indigenous peoples and White/European families. The Métis are considered an aboriginal group under Canada's Constitution Act, 1982. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 54.1°N, 118.8°W).",
    "summary_fi": "Mountain Métis-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 54.1°N, 118.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Mountain Métis"
    ]
  },
  {
    "slug": "muckleshoot-people",
    "name": "Muckleshoot People",
    "name_fi": "Muckleshoot-kansa",
    "native_name": "Muckleshoot",
    "alternate_names": [
      "Muckleshoot"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Muckleshoot",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q105035102",
    "summary_en": "The Muckleshoot Indian Tribe, also known as the Muckleshoot Tribe, is a federally-recognized tribe based in Auburn, Washington. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 47.4°N, 122.1°W).",
    "summary_fi": "Muckleshoot-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 47.4°N, 122.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Muckleshoot"
    ]
  },
  {
    "slug": "multnomah-people",
    "name": "Multnomah People",
    "name_fi": "Multnomah-kansa",
    "native_name": "Multnomah",
    "alternate_names": [
      "Multnomah",
      "Multnomah people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Multnomah_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q6471409",
    "summary_en": "The Multnomah are a tribe of Chinookan people who live in the area of Portland, Oregon, in the United States. Multnomah villages were located throughout the Portland basin and on both sides of the Columbia River. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 45.9°N, 122.9°W).",
    "summary_fi": "Multnomah-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 45.9°N, 122.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Multnomah"
    ]
  },
  {
    "slug": "musgamagw-dzawada-enuxw-people",
    "name": "Musgamagw Dzawada'enuxw People",
    "name_fi": "Musgamagw Dzawada'enuxw-kansa",
    "native_name": "Musgamagw Dzawada'enuxw",
    "alternate_names": [
      "Musgamagw Dzawada'enuxw"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Musgamagw_Dzawada'enuxw",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 51.1°N, 126.2°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Musgamagw Dzawada'enuxw-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 51.1°N, 126.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Musgamagw Dzawada'enuxw"
    ]
  },
  {
    "slug": "muwekma-people",
    "name": "Muwekma People",
    "name_fi": "Muwekma-kansa",
    "native_name": "Muwekma",
    "alternate_names": [
      "Muwekma",
      "Muwekma Ohlone Tribe"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Muwekma_Ohlone_Tribe",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q108275693",
    "summary_en": "The Muwekma Ohlone Tribe is an unrecognized American Indian organization, primarily composed of documented descendants of the Ohlone, an historic Indigenous people of California. The Muwekma Ohlone Tribe is the largest of several groups in the San Francisco Bay Area that identify as Ohlone tribes. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 37.6°N, 121.8°W).",
    "summary_fi": "Muwekma-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 37.6°N, 121.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Muwekma"
    ]
  },
  {
    "slug": "myaamia-people",
    "name": "Myaamia People",
    "name_fi": "Myaamia-kansa",
    "native_name": "Myaamia",
    "alternate_names": [
      "Myaamia",
      "Miami–Illinois language"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Miami%E2%80%93Illinois_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q56523",
    "summary_en": "Miami–Illinois or Mihtohseenian is an Indigenous Algonquian language that is spoken in the United States, historically in Illinois, Missouri, Indiana, western Ohio and adjacent areas along the Mississippi River by the Miami and Wea as well as the tribes of the Illinois Confederation, including the Kaskaskia, Peoria, Tamaroa, Cahokia, and possibly Mitchigamea. Although the last native speaker died in the 1960s, there has been an effort by the Myaamia (Miami) Nation of Oklahoma and the Miami Nation of Indians of the State of Indiana to revive the language and preserve their native heritage by teaching it to young and old members. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 41.0°N, 86.9°W).",
    "summary_fi": "Myaamia-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 41.0°N, 86.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Myaamia"
    ]
  },
  {
    "slug": "nwt-metis-nation-people",
    "name": "NWT Métis Nation People",
    "name_fi": "NWT Métis Nation-kansa",
    "native_name": "NWT Métis Nation",
    "alternate_names": [
      "NWT Métis Nation"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/NWT_M%C3%A9tis_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 62.5°N, 106.8°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "NWT Métis Nation-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 62.5°N, 106.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "NWT Métis Nation"
    ]
  },
  {
    "slug": "na-cho-nyak-dun-people",
    "name": "Na-cho Nyak Dun People",
    "name_fi": "Na-cho Nyak Dun-kansa",
    "native_name": "Na-cho Nyak Dun",
    "alternate_names": [
      "Na-cho Nyak Dun"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Na-cho_Nyak_Dun",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 65.2°N, 134.1°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Na-cho Nyak Dun-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 65.2°N, 134.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Na-cho Nyak Dun"
    ]
  },
  {
    "slug": "anacostan-people",
    "name": "Anacostan People",
    "name_fi": "Anacostan-kansa",
    "native_name": "Nacotchtank (Anacostan)",
    "alternate_names": [
      "Nacotchtank (Anacostan)",
      "Anacostan",
      "Nacotchtank"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nacotchtank",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q12637960",
    "summary_en": "The Nacotchtank, also Anacostine, were an Algonquian Indigenous people of the Northeastern Woodlands. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 38.9°N, 76.9°W).",
    "summary_fi": "Nacotchtank (Anacostan)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 38.9°N, 76.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Nacotchtank (Anacostan)"
    ]
  },
  {
    "slug": "nadleh-whut-en-people",
    "name": "Nadleh Whut'en People",
    "name_fi": "Nadleh Whut'en-kansa",
    "native_name": "Nadleh Whut'en",
    "alternate_names": [
      "Nadleh Whut'en",
      "Nadleh Whutʼen First Nation"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nadleh_Whut%CA%BCen_First_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q6957911",
    "summary_en": "Nadleh Whutʼen First Nation is a First Nations government of the Dakelh people, whose territory is located in the Central Interior of British Columbia, Canada, around the east end of Fraser Lake. The nation has seven reserves which Crown-Indigenous Relations and Northern Development Canada refer to as IR#1-9.. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 54.0°N, 124.9°W).",
    "summary_fi": "Nadleh Whut'en-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 54.0°N, 124.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Nadleh Whut'en"
    ]
  },
  {
    "slug": "nandtaughtacund-people",
    "name": "Nandtaughtacund People",
    "name_fi": "Nandtaughtacund-kansa",
    "native_name": "Nandtaughtacund",
    "alternate_names": [
      "Nandtaughtacund"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nandtaughtacund",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Northeastern Woodlands and Great Lakes Basin (centered near 38.1°N, 77.2°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Nandtaughtacund-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 38.1°N, 77.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Nandtaughtacund"
    ]
  },
  {
    "slug": "nanrantsouak-people",
    "name": "Nanrantsouak People",
    "name_fi": "Nanrantsouak-kansa",
    "native_name": "Nanrantsouak",
    "alternate_names": [
      "Nanrantsouak"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nanrantsouak",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Wabanaki and Maritime Northeast (centered near 45.3°N, 70.3°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Nanrantsouak-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Wabanakin ja merellisen koillisen rannikkoalueilla (koordinaateissa noin 45.3°N, 70.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Maritime traditional encampments",
    "feature_name_matches": [
      "Nanrantsouak"
    ]
  },
  {
    "slug": "nansemond-people",
    "name": "Nansemond People",
    "name_fi": "Nansemond-kansa",
    "native_name": "Nansemond",
    "alternate_names": [
      "Nansemond"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nansemond",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3502382",
    "summary_en": "The Nansemond are the Indigenous nation of the Nansemond River, a 20-mile-long tributary of the James River in Virginia. Nansemond people traditionally lived in settlements on both sides of the Nansemond River where they fished, harvested oysters, hunted, and farmed in fertile soil. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 36.8°N, 76.6°W).",
    "summary_fi": "Nansemond-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 36.8°N, 76.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Nansemond"
    ]
  },
  {
    "slug": "natchitoches-people",
    "name": "Natchitoches People",
    "name_fi": "Natchitoches-kansa",
    "native_name": "Natchitoches",
    "alternate_names": [
      "Natchitoches",
      "Natchitoches people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Natchitoches_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3336505",
    "summary_en": "The Natchitoches are a Native American tribe from northwestern Louisiana and Texas. They organized themselves in one of the three Caddo-speaking confederacies along with the Hasinai, and Kadohadacho. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 31.8°N, 93.1°W).",
    "summary_fi": "Natchitoches-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 31.8°N, 93.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Natchitoches"
    ]
  },
  {
    "slug": "nauset-people",
    "name": "Nauset People",
    "name_fi": "Nauset-kansa",
    "native_name": "Nauset",
    "alternate_names": [
      "Nauset"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nauset",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1813500",
    "summary_en": "The Nauset people, sometimes referred to as the Cape Cod Indians, were a Native American tribe who lived in Cape Cod, Massachusetts. They lived east of Bass River and lands occupied by their closely related neighbors, the Wampanoag. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 41.8°N, 70.0°W).",
    "summary_fi": "Nauset-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 41.8°N, 70.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Nauset"
    ]
  },
  {
    "slug": "nehalem-people",
    "name": "Nehalem People",
    "name_fi": "Nehalem-kansa",
    "native_name": "Nehalem",
    "alternate_names": [
      "Nehalem",
      "Tillamook people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tillamook_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q486643",
    "summary_en": "The Tillamook are a Native American tribe from coastal Oregon of the Salish linguistic group. The name \"Tillamook\" is a Chinook language term meaning \"people of [the village] Nekelim \", sometimes it is given as a Coast Salish term, meaning \"Land of Many Waters\". Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 45.8°N, 123.7°W).",
    "summary_fi": "Nehalem-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 45.8°N, 123.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Nehalem"
    ]
  },
  {
    "slug": "nespelem-people",
    "name": "Nespelem People",
    "name_fi": "Nespelem-kansa",
    "native_name": "Nespelem",
    "alternate_names": [
      "Nespelem",
      "Nespelem people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nespelem_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1978241",
    "summary_en": "The Nespelem people are a Native American people in eastern Washington. They are an Indigenous people of the Northwest Plateau. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 48.1°N, 119.1°W).",
    "summary_fi": "Nespelem-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 48.1°N, 119.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Nespelem"
    ]
  },
  {
    "slug": "nestucca-people",
    "name": "Nestucca People",
    "name_fi": "Nestucca-kansa",
    "native_name": "Nestucca",
    "alternate_names": [
      "Nestucca",
      "Tillamook people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tillamook_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q486643",
    "summary_en": "The Tillamook are a Native American tribe from coastal Oregon of the Salish linguistic group. The name \"Tillamook\" is a Chinook language term meaning \"people of [the village] Nekelim \", sometimes it is given as a Coast Salish term, meaning \"Land of Many Waters\". Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 45.2°N, 123.8°W).",
    "summary_fi": "Nestucca-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 45.2°N, 123.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Nestucca"
    ]
  },
  {
    "slug": "neusiok-people",
    "name": "Neusiok People",
    "name_fi": "Neusiok-kansa",
    "native_name": "Neusiok",
    "alternate_names": [
      "Neusiok"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Neusiok",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1981627",
    "summary_en": "The Neusiok were an Indigenous people of the Southeastern Woodlands in present-day North Carolina. They were also known as the Neuse Indians. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 34.9°N, 77.0°W).",
    "summary_fi": "Neusiok-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 34.9°N, 77.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Neusiok"
    ]
  },
  {
    "slug": "new-river-shasta-people",
    "name": "New River Shasta People",
    "name_fi": "New River Shasta-kansa",
    "native_name": "New River Shasta",
    "alternate_names": [
      "New River Shasta",
      "New River Shasta language"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/New_River_Shasta_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q7011254",
    "summary_en": "New River Shasta is an extinct Shastan language formerly spoken by the New River Shasta people in northern California. It may have had only 300 speakers before contact, and they soon went extinct; the language is attested in only a few short wordlists. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 41.2°N, 122.9°W).",
    "summary_fi": "New River Shasta-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 41.2°N, 122.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "New River Shasta"
    ]
  },
  {
    "slug": "popoloca-people",
    "name": "Popoloca People",
    "name_fi": "Popoloca-kansa",
    "native_name": "Ngi-iva (Popoloca)",
    "alternate_names": [
      "Ngi-iva (Popoloca)",
      "Popoloca",
      "Popoluca"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Popoluca",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1582227",
    "summary_en": "Popoluca is a Nahuatl term for various indigenous peoples of southeastern Veracruz and Puebla. Many of them speak languages of the Mixe–Zoque family. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 18.5°N, 97.7°W).",
    "summary_fi": "Ngi-iva (Popoloca)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 18.5°N, 97.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Ngi-iva (Popoloca)"
    ]
  },
  {
    "slug": "nipmuc-people",
    "name": "Nipmuc People",
    "name_fi": "Nipmuc-kansa",
    "native_name": "Nipmuc",
    "alternate_names": [
      "Nipmuc"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nipmuc",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q541788",
    "summary_en": "The Nipmuc or Nipmuck people are an Indigenous people of the Northeastern Woodlands, who historically spoke an Eastern Algonquian language, probably the Loup language. Their historic territory Nippenet, meaning 'the freshwater pond place', is in central Massachusetts and nearby parts of Connecticut and Rhode Island. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 42.2°N, 72.1°W).",
    "summary_fi": "Nipmuc-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 42.2°N, 72.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Nipmuc"
    ]
  },
  {
    "slug": "nisenan-people",
    "name": "Nisenan People",
    "name_fi": "Nisenan-kansa",
    "native_name": "Nisenan",
    "alternate_names": [
      "Nisenan"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nisenan",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q7040225",
    "summary_en": "The Nisenan are a group of Native Americans and an Indigenous people of California from the Yuba River and American River watersheds in Northern California and the California Central Valley. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 39.1°N, 121.0°W).",
    "summary_fi": "Nisenan-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 39.1°N, 121.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Nisenan"
    ]
  },
  {
    "slug": "nisga-a-people",
    "name": "Nisg̱a'a People",
    "name_fi": "Nisg̱a'a-kansa",
    "native_name": "Nisg̱a'a",
    "alternate_names": [
      "Nisg̱a'a",
      "Nisgaʼa"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nisga%CA%BCa",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1993509",
    "summary_en": "The Nisgaʼa, formerly spelled Nishga or Niska, are an Indigenous people in British Columbia, Canada. They reside in the Nass River valley of northwestern British Columbia. Their ancestral country encompasses Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 55.8°N, 129.3°W).",
    "summary_fi": "Nisg̱a'a-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 55.8°N, 129.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Nisg̱a'a"
    ]
  },
  {
    "slug": "nisqually-people",
    "name": "Nisqually People",
    "name_fi": "Nisqually-kansa",
    "native_name": "Nisqually",
    "alternate_names": [
      "Nisqually",
      "Nisqually people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nisqually_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1993608",
    "summary_en": "The Nisqually are a Lushootseed-speaking Native American tribe in western Washington state in the United States. They are a Southern Coast Salish people. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 46.9°N, 122.6°W).",
    "summary_fi": "Nisqually-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 46.9°N, 122.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Nisqually"
    ]
  },
  {
    "slug": "atikamekw-people",
    "name": "Atikamekw People",
    "name_fi": "Atikamekw-kansa",
    "native_name": "Nitaskinan (Atikamekw / Nehirowisi Aski)",
    "alternate_names": [
      "Nitaskinan (Atikamekw / Nehirowisi Aski)",
      "Atikamekw"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Atikamekw",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q491706",
    "summary_en": "The Atikamekw are an Indigenous people in Canada. Their historic territory, Nitaskinan, is in the upper Saint-Maurice River valley of Quebec. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 47.9°N, 74.0°W).",
    "summary_fi": "Nitaskinan (Atikamekw / Nehirowisi Aski)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 47.9°N, 74.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Nitaskinan (Atikamekw / Nehirowisi Aski)"
    ]
  },
  {
    "slug": "niuachi-people",
    "name": "Niúachi People",
    "name_fi": "Niúachi-kansa",
    "native_name": "Niúachi",
    "alternate_names": [
      "Niúachi",
      "Missouria"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Missouria",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1939219",
    "summary_en": "The Missouria or Missouri are a Native American tribe that originated in the Great Lakes region of what is now the United States before European contact. The tribe belongs to the Chiwere division of the Siouan-Cawtaban language family, together with the Ho-Chunk, Iowa, and Otoe. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 39.2°N, 93.3°W).",
    "summary_fi": "Niúachi-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 39.2°N, 93.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Niúachi"
    ]
  },
  {
    "slug": "nom-sus-wintu-people",
    "name": "Nom Sus Wintu People",
    "name_fi": "Nom Sus Wintu-kansa",
    "native_name": "Nom Sus Wintu",
    "alternate_names": [
      "Nom Sus Wintu"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nom_Sus_Wintu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in California Indigenous Country (Pacific Coast & Central Valley) (centered near 41.0°N, 122.8°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Nom Sus Wintu-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 41.0°N, 122.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Nom Sus Wintu"
    ]
  },
  {
    "slug": "nom-ti-pom-wintu-people",
    "name": "Nom Ti Pom Wintu People",
    "name_fi": "Nom Ti Pom Wintu-kansa",
    "native_name": "Nom Ti Pom Wintu",
    "alternate_names": [
      "Nom Ti Pom Wintu"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nom_Ti_Pom_Wintu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in California Indigenous Country (Pacific Coast & Central Valley) (centered near 41.2°N, 122.4°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Nom Ti Pom Wintu-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 41.2°N, 122.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Nom Ti Pom Wintu"
    ]
  },
  {
    "slug": "nomlaki-people",
    "name": "Nomlaki People",
    "name_fi": "Nomlaki-kansa",
    "native_name": "Nomlaki",
    "alternate_names": [
      "Nomlaki"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nomlaki",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q56813",
    "summary_en": "The Nomlaki are a Wintun people indigenous to what are now known as the Sacramento Valley and the Coast Range in Northern California. They were bordered by the Wintu (Wintun) in the north, the Yana in the northeast and east, the Konkow (Maiduan) in the east, the Patwin (Wintun) in the south, and the Yuki in the west. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 39.9°N, 122.5°W).",
    "summary_fi": "Nomlaki-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 39.9°N, 122.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Nomlaki"
    ]
  },
  {
    "slug": "nongatl-people",
    "name": "Nongatl People",
    "name_fi": "Nongatl-kansa",
    "native_name": "Nongatl",
    "alternate_names": [
      "Nongatl",
      "Eel River Athapaskan peoples"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Eel_River_Athapaskan_peoples",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q4300644",
    "summary_en": "The Eel River Athapaskans include the Wailaki, Lassik, Nongatl, and Sinkyone (Sinkine) groups of Native Americans that traditionally live in present-day Mendocino, Trinity, and Humboldt counties on or near the Eel River and Van Duzen River of northwestern California. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 40.5°N, 123.7°W).",
    "summary_fi": "Nongatl-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 40.5°N, 123.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Nongatl"
    ]
  },
  {
    "slug": "nor-rel-muk-wintu-people",
    "name": "Nor Rel Muk Wintu People",
    "name_fi": "Nor Rel Muk Wintu-kansa",
    "native_name": "Nor Rel Muk Wintu",
    "alternate_names": [
      "Nor Rel Muk Wintu"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nor_Rel_Muk_Wintu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in California Indigenous Country (Pacific Coast & Central Valley) (centered near 40.5°N, 123.0°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Nor Rel Muk Wintu-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 40.5°N, 123.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Nor Rel Muk Wintu"
    ]
  },
  {
    "slug": "northern-yuki-people",
    "name": "Northern Yuki People",
    "name_fi": "Northern Yuki-kansa",
    "native_name": "Northern Yuki",
    "alternate_names": [
      "Northern Yuki",
      "Northern Yukian language"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Northern_Yukian_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36993",
    "summary_en": "Northern Yukian, also known as Ukomnoʼm, is an extinct language of California, formerly spoken by the Yuki people. The Yuki are the original inhabitants of the Eel River area and the Round Valley Reservation of northern California. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 39.7°N, 123.2°W).",
    "summary_fi": "Northern Yuki-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 39.7°N, 123.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Northern Yuki"
    ]
  },
  {
    "slug": "nunatsiavut-people",
    "name": "Nunatsiavut People",
    "name_fi": "Nunatsiavut-kansa",
    "native_name": "Nunatsiavut",
    "alternate_names": [
      "Nunatsiavut"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nunatsiavut",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q636967",
    "summary_en": "Nunatsiavut is an autonomous area claimed by the Labradorimiut / Nunatsiavummiut in Newfoundland and Labrador, Canada. The settlement area includes territory in Labrador extending to the Quebec border. Their ancestral country encompasses Subarctic Eastern Canada (Innu, Naskapi & Cree Lands) (centered near 54.4°N, 59.6°W).",
    "summary_fi": "Nunatsiavut-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Itä-Kanadan subarktisella havumetsävyöhykkeellä (koordinaateissa noin 54.4°N, 59.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Subarctic forest encampments",
    "feature_name_matches": [
      "Nunatsiavut"
    ]
  },
  {
    "slug": "nunatukavut-people",
    "name": "NunatuKavut People",
    "name_fi": "NunatuKavut-kansa",
    "native_name": "NunatuKavut",
    "alternate_names": [
      "NunatuKavut",
      "NunatuKavummiut"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/NunatuKavummiut",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2153260",
    "summary_en": "NunatuKavummiut are an Indigenous collective who trace their descent from Inuit and European people in central to southern Labrador. They have also been called the Southern Inuit, Inuit-Métis and Labrador Métis. Their ancestral country encompasses Subarctic Eastern Canada (Innu, Naskapi & Cree Lands) (centered near 53.3°N, 63.6°W).",
    "summary_fi": "NunatuKavut-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Itä-Kanadan subarktisella havumetsävyöhykkeellä (koordinaateissa noin 53.3°N, 63.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Subarctic forest encampments",
    "feature_name_matches": [
      "NunatuKavut"
    ]
  },
  {
    "slug": "nunavik-people",
    "name": "Nunavik People",
    "name_fi": "Nunavik-kansa",
    "native_name": "Nunavik",
    "alternate_names": [
      "Nunavik"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nunavik",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1074865",
    "summary_en": "Nunavik is an area in Canada which comprises the northern third of the province of Quebec, part of the Nord-du-Québec region and nearly coterminous with Kativik. Covering a land area of 443,684.71 km2 (171,307.62 sq mi) north of the 55th parallel, it is the homeland of the Inuit of Quebec and part of the wider Inuit Nunangat. Their ancestral country encompasses Subarctic Eastern Canada (Innu, Naskapi & Cree Lands) (centered near 58.4°N, 73.1°W).",
    "summary_fi": "Nunavik-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Itä-Kanadan subarktisella havumetsävyöhykkeellä (koordinaateissa noin 58.4°N, 73.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Subarctic forest encampments",
    "feature_name_matches": [
      "Nunavik"
    ]
  },
  {
    "slug": "nuwhaha-people",
    "name": "Nuwhaha People",
    "name_fi": "Nuwhaha-kansa",
    "native_name": "Nuwhaha",
    "alternate_names": [
      "Nuwhaha"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nuwhaha",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q130240070",
    "summary_en": "The Nuwhaha were a historical Lushootseed-speaking people in the Skagit River valley of Washington. The Nuwhaha primarily lived along the Samish River, as well as the coastal areas between Bay View and Bellingham. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 48.6°N, 122.3°W).",
    "summary_fi": "Nuwhaha-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 48.6°N, 122.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Nuwhaha"
    ]
  },
  {
    "slug": "nooksack-people",
    "name": "Nooksack People",
    "name_fi": "Nooksack-kansa",
    "native_name": "Nuxwsa'7aq (Nooksack)",
    "alternate_names": [
      "Nuxwsa'7aq (Nooksack)",
      "Nooksack",
      "Nooksack people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nooksack_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1513642",
    "summary_en": "The Nooksack are an Indigenous people of the Pacific Northwest Coast. Today, the majority of them are federally recognized as the Nooksack Indian Tribe, located in the mainland northwest corner of Washington state along the Nooksack River near the small town of Deming, and 12 miles south of the Canadian border. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 48.8°N, 122.0°W).",
    "summary_fi": "Nuxwsa'7aq (Nooksack)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 48.8°N, 122.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Nuxwsa'7aq (Nooksack)"
    ]
  },
  {
    "slug": "chemehuevi-people",
    "name": "Chemehuevi People",
    "name_fi": "Chemehuevi-kansa",
    "native_name": "Nüwüwü (Chemehuevi)",
    "alternate_names": [
      "Nüwüwü (Chemehuevi)",
      "Chemehuevi"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chemehuevi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q283510",
    "summary_en": "The Chemehuevi are an Indigenous people of the Great Basin. They are the southernmost branch of Southern Paiute. Their ancestral country encompasses Southern California & Inland Indigenous Lands (centered near 34.9°N, 115.5°W).",
    "summary_fi": "Nüwüwü (Chemehuevi)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 34.9°N, 115.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southern California ancestral villages",
    "feature_name_matches": [
      "Nüwüwü (Chemehuevi)"
    ]
  },
  {
    "slug": "nlaka-pamux-people",
    "name": "Nlaka'pamux People",
    "name_fi": "Nlaka'pamux-kansa",
    "native_name": "Nłeʔkepmx Tmíxʷ (Nlaka'pamux)",
    "alternate_names": [
      "Nłeʔkepmx Tmíxʷ (Nlaka'pamux)",
      "Nlaka'pamux",
      "Nlakaʼpamux"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nlaka%CA%BCpamux",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1456870",
    "summary_en": "The Nlakaʼpamux or Nlakapamuk, also previously known as the Thompson, Thompson River Salish, Thompson Salish, Thompson River Indians or Thompson River people, and historically as the Klackarpun, Haukamaugh, Knife Indians, and Couteau Indians, are an Indigenous First Nations people of the Interior Salish language group in southern British Columbia. Their traditional territory includes parts of the North Cascades region of Washington. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 49.7°N, 120.8°W).",
    "summary_fi": "Nłeʔkepmx Tmíxʷ (Nlaka'pamux)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 49.7°N, 120.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Nłeʔkepmx Tmíxʷ (Nlaka'pamux)"
    ]
  },
  {
    "slug": "o-odham-jewed-people",
    "name": "O'odham Jeweḍ People",
    "name_fi": "O'odham Jeweḍ-kansa",
    "native_name": "O'odham Jeweḍ",
    "alternate_names": [
      "O'odham Jeweḍ",
      "Oʼodham"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/O%CA%BCodham",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2043383",
    "summary_en": "The Oʼodham, Upper Oʼodham, or Upper Pima are a group of Native American peoples including the Akimel Oʼodham, the Tohono Oʼodham, and the Hia C-eḍ Oʼodham. Their historical territory is in the Sonoran Desert in southern and central Arizona and northern Sonora, and they are united by a common heritage language, the Oʼodham language. Their ancestral country encompasses Aridoamerica and Sonoran Desert (Northern Mexico & Borderlands) (centered near 31.7°N, 112.0°W).",
    "summary_fi": "O'odham Jeweḍ-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Aridoamerikassa ja Sonoran aavikolla Pohjois-Meksikon rajaseudulla (koordinaateissa noin 31.7°N, 112.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Sonoran rancherías and oasis settlements",
    "feature_name_matches": [
      "O'odham Jeweḍ"
    ]
  },
  {
    "slug": "o-ga-xpa-people",
    "name": "O-ga-xpa People",
    "name_fi": "O-ga-xpa-kansa",
    "native_name": "O-ga-xpa Ma-zhoⁿ (O-ga-xpa)",
    "alternate_names": [
      "O-ga-xpa Ma-zhoⁿ (O-ga-xpa)",
      "O-ga-xpa"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/O-ga-xpa",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 35.5°N, 93.4°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "O-ga-xpa Ma-zhoⁿ (O-ga-xpa)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 35.5°N, 93.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "O-ga-xpa Ma-zhoⁿ (O-ga-xpa)"
    ]
  },
  {
    "slug": "obispeno-people",
    "name": "Obispeño People",
    "name_fi": "Obispeño-kansa",
    "native_name": "Obispeño",
    "alternate_names": [
      "Obispeño",
      "Obispeño language"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Obispe%C3%B1o_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1288385",
    "summary_en": "Obispeño is one of the extinct Chumash Native American languages previously spoken along the coastal areas of California. The primary source of documentation on the language is from the work of linguist J. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 35.3°N, 120.7°W).",
    "summary_fi": "Obispeño-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 35.3°N, 120.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Obispeño"
    ]
  },
  {
    "slug": "occaneechi-people",
    "name": "Occaneechi People",
    "name_fi": "Occaneechi-kansa",
    "native_name": "Occaneechi",
    "alternate_names": [
      "Occaneechi"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Occaneechi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3514801",
    "summary_en": "The Occaneechi are Indigenous peoples of the Northeastern Woodlands whose historical territory was in the Piedmont region of present-day North Carolina and Virginia. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 36.6°N, 78.5°W).",
    "summary_fi": "Occaneechi-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 36.6°N, 78.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Occaneechi"
    ]
  },
  {
    "slug": "occohannock-people",
    "name": "Occohannock People",
    "name_fi": "Occohannock-kansa",
    "native_name": "Occohannock",
    "alternate_names": [
      "Occohannock"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Occohannock",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Northeastern Woodlands and Great Lakes Basin (centered near 37.8°N, 75.7°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Occohannock-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 37.8°N, 75.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Occohannock"
    ]
  },
  {
    "slug": "odawa-people",
    "name": "Odawa People",
    "name_fi": "Odawa-kansa",
    "native_name": "Odawa",
    "alternate_names": [
      "Odawa"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Odawa",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q536116",
    "summary_en": "The Odawa are an Indigenous North American people who primarily inhabit land in the Eastern Woodlands region, now in jurisdictions of the northeastern United States and southeastern Canada. Their territory long preceded the creation of the current border between the two countries in the 18th and 19th centuries. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 44.3°N, 85.5°W).",
    "summary_fi": "Odawa-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 44.3°N, 85.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Odawa"
    ]
  },
  {
    "slug": "oglala-people",
    "name": "Oglala People",
    "name_fi": "Oglala-kansa",
    "native_name": "Oglala",
    "alternate_names": [
      "Oglala"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "plains-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Oglala",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q543386",
    "summary_en": "The Oglala are one of the seven subtribes of the Lakota people who, along with the Dakota, make up the Očhéthi Šakówiŋ. A majority of the Oglala live on the Pine Ridge Indian Reservation in South Dakota, the eighth-largest Native American reservation in the United States. Their ancestral country encompasses Great Plains (Plains Indigenous Territory) (centered near 41.7°N, 102.6°W).",
    "summary_fi": "Oglala-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Suurten tasankojen (Great Plains) perinnealueilla (koordinaateissa noin 41.7°N, 102.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Plains ancestral encampments",
    "feature_name_matches": [
      "Oglala"
    ]
  },
  {
    "slug": "ohlone-people",
    "name": "Ohlone People",
    "name_fi": "Ohlone-kansa",
    "native_name": "Ohlone",
    "alternate_names": [
      "Ohlone"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ohlone",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q598406",
    "summary_en": "The Ohlone, formerly known as Costanoans, are a Native American people of the Northern California coast. The Ohlone are believed to have displaced an earlier population of Hokan-speaking residents of the area. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 37.2°N, 121.8°W).",
    "summary_fi": "Ohlone-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 37.2°N, 121.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Ohlone"
    ]
  },
  {
    "slug": "okwanuchu-people",
    "name": "Okwanuchu People",
    "name_fi": "Okwanuchu-kansa",
    "native_name": "Okwanuchu",
    "alternate_names": [
      "Okwanuchu"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Okwanuchu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q7082791",
    "summary_en": "The Okwanuchu were one of a number of small Shastan-speaking tribes of Native Americans in Northern California, who were closely related to the adjacent larger Shasta tribe. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 41.2°N, 122.2°W).",
    "summary_fi": "Okwanuchu-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 41.2°N, 122.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Okwanuchu"
    ]
  },
  {
    "slug": "onawmanient-people",
    "name": "Onawmanient People",
    "name_fi": "Onawmanient-kansa",
    "native_name": "Onawmanient",
    "alternate_names": [
      "Onawmanient"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Onawmanient",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Northeastern Woodlands and Great Lakes Basin (centered near 38.1°N, 76.7°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Onawmanient-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 38.1°N, 76.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Onawmanient"
    ]
  },
  {
    "slug": "oohenumpa-people",
    "name": "Oohenumpa People",
    "name_fi": "Oohenumpa-kansa",
    "native_name": "Oohenumpa",
    "alternate_names": [
      "Oohenumpa"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "plains-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Oohenumpa",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Great Plains (Plains Indigenous Territory) (centered near 43.1°N, 101.4°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Oohenumpa-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Suurten tasankojen (Great Plains) perinnealueilla (koordinaateissa noin 43.1°N, 101.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Plains ancestral encampments",
    "feature_name_matches": [
      "Oohenumpa"
    ]
  },
  {
    "slug": "opelousas-people",
    "name": "Opelousas People",
    "name_fi": "Opelousas-kansa",
    "native_name": "Opelousas",
    "alternate_names": [
      "Opelousas",
      "Opelousas, Louisiana"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Opelousas%2C_Louisiana",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1154039",
    "summary_en": "Opelousas is a small city in and the parish seat of St. Landry Parish, Louisiana, United States. Their ancestral country encompasses Gulf Coast & Mississippi Delta (centered near 30.5°N, 92.1°W).",
    "summary_fi": "Opelousas-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Meksikonlahden rannikolla ja Mississippin suistossa (koordinaateissa noin 30.5°N, 92.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Gulf coastal settlements",
    "feature_name_matches": [
      "Opelousas"
    ]
  },
  {
    "slug": "opiscopank-people",
    "name": "Opiscopank People",
    "name_fi": "Opiscopank-kansa",
    "native_name": "Opiscopank",
    "alternate_names": [
      "Opiscopank"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Opiscopank",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Northeastern Woodlands and Great Lakes Basin (centered near 37.7°N, 76.8°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Opiscopank-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 37.7°N, 76.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Opiscopank"
    ]
  },
  {
    "slug": "ochethi-sakowi-people",
    "name": "Očhéthi Šakówiŋ People",
    "name_fi": "Očhéthi Šakówiŋ-kansa",
    "native_name": "Očhéthi Šakówiŋ",
    "alternate_names": [
      "Očhéthi Šakówiŋ"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "plains-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/O%C4%8Dh%C3%A9thi_%C5%A0ak%C3%B3wi%C5%8B",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Great Plains (Plains Indigenous Territory) (centered near 43.9°N, 98.7°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Očhéthi Šakówiŋ-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Suurten tasankojen (Great Plains) perinnealueilla (koordinaateissa noin 43.9°N, 98.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Plains ancestral encampments",
    "feature_name_matches": [
      "Očhéthi Šakówiŋ"
    ]
  },
  {
    "slug": "zoque-people",
    "name": "Zoque People",
    "name_fi": "Zoque-kansa",
    "native_name": "O' de püt/Angpøn (Zoque)",
    "alternate_names": [
      "O' de püt/Angpøn (Zoque)",
      "O’ de püt/Angpøn (Zoque)",
      "Zoque",
      "Zoque people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Zoque_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q509276",
    "summary_en": "The Zoque are an Indigenous people of Mexico who mainly live in northwestern Chiapas, and are also found in the Isthmus region of Oaxaca. They are related to the Mixe people of Oaxaca. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 17.2°N, 93.3°W).",
    "summary_fi": "O' de püt/Angpøn (Zoque)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 17.2°N, 93.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "O’ de püt/Angpøn (Zoque)"
    ]
  },
  {
    "slug": "pacaxes-people",
    "name": "Pacaxes People",
    "name_fi": "Pacaxes-kansa",
    "native_name": "Pacaxes",
    "alternate_names": [
      "Pacaxes"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pacaxes",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 25.5°N, 107.5°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Pacaxes-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 25.5°N, 107.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Pacaxes"
    ]
  },
  {
    "slug": "pacheedaht-people",
    "name": "Pacheedaht People",
    "name_fi": "Pacheedaht-kansa",
    "native_name": "Pacheedaht",
    "alternate_names": [
      "Pacheedaht"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pacheedaht",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 48.7°N, 124.3°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Pacheedaht-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 48.7°N, 124.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Pacheedaht"
    ]
  },
  {
    "slug": "akwa-ala-people",
    "name": "Akwa'ala People",
    "name_fi": "Akwa'ala-kansa",
    "native_name": "Paipai (Akwa'ala)",
    "alternate_names": [
      "Paipai (Akwa'ala)",
      "Akwa'ala",
      "Paipai people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Paipai_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2876746",
    "summary_en": "The Paipai are an Indigenous people of Mexico living in northern Baja California. Their traditional territory lies between the Kiliwa on the south and the Kumeyaay and Cocopa on the north, and extending from San Vicente near the Pacific coast nearly to the Colorado River's delta in the east. Their ancestral country encompasses Aridoamerica and Sonoran Desert (Northern Mexico & Borderlands) (centered near 31.5°N, 115.9°W).",
    "summary_fi": "Paipai (Akwa'ala)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Aridoamerikassa ja Sonoran aavikolla Pohjois-Meksikon rajaseudulla (koordinaateissa noin 31.5°N, 115.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Sonoran rancherías and oasis settlements",
    "feature_name_matches": [
      "Paipai (Akwa'ala)"
    ]
  },
  {
    "slug": "palouse-people",
    "name": "Palouse People",
    "name_fi": "Palouse-kansa",
    "native_name": "Palouse",
    "alternate_names": [
      "Palouse",
      "Palouse people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Palouse_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2526730",
    "summary_en": "The Palouse or Palus are a Sahaptin tribe and an Indigenous peoples of the Northwest Plateau living in Washington, Oregon, and Idaho. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 46.8°N, 118.1°W).",
    "summary_fi": "Palouse-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 46.8°N, 118.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Palouse"
    ]
  },
  {
    "slug": "pascua-yaqui-people",
    "name": "Pascua Yaqui People",
    "name_fi": "Pascua Yaqui-kansa",
    "native_name": "Pascua Yaqui",
    "alternate_names": [
      "Pascua Yaqui",
      "Pascua Yaqui Tribe"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pascua_Yaqui_Tribe",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q7141853",
    "summary_en": "The Pascua Yaqui Tribe of Arizona is a federally recognized tribe of Yaqui Native Americans in the state of Arizona. Their ancestral country encompasses Aridoamerica and Sonoran Desert (Northern Mexico & Borderlands) (centered near 32.1°N, 111.1°W).",
    "summary_fi": "Pascua Yaqui-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Aridoamerikassa ja Sonoran aavikolla Pohjois-Meksikon rajaseudulla (koordinaateissa noin 32.1°N, 111.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Sonoran rancherías and oasis settlements",
    "feature_name_matches": [
      "Pascua Yaqui"
    ]
  },
  {
    "slug": "patawomeck-people",
    "name": "Patawomeck People",
    "name_fi": "Patawomeck-kansa",
    "native_name": "Patawomeck",
    "alternate_names": [
      "Patawomeck"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Patawomeck",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1124697",
    "summary_en": "The Patawomeck are a Native American tribe based in Stafford County, Virginia, who historically lived on the south side the Potomac River. Patawomeck is another spelling of Potomac, which was a 17th-century town in present-day Stafford County, Virginia. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 38.3°N, 77.4°W).",
    "summary_fi": "Patawomeck-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 38.3°N, 77.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Patawomeck"
    ]
  },
  {
    "slug": "paugussett-people",
    "name": "Paugussett People",
    "name_fi": "Paugussett-kansa",
    "native_name": "Paugussett",
    "alternate_names": [
      "Paugussett",
      "Paugusset"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Paugusset",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q120264743",
    "summary_en": "The Paugusset are an Indigenous people of the Northeastern Woodlands in western Connecticut. Paugusset is also the name of their principal settlement in the 17th and 18th centuries. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 41.4°N, 73.3°W).",
    "summary_fi": "Paugussett-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 41.4°N, 73.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Paugussett"
    ]
  },
  {
    "slug": "pawtucket-people",
    "name": "Pawtucket People",
    "name_fi": "Pawtucket-kansa",
    "native_name": "Pawtucket",
    "alternate_names": [
      "Pawtucket",
      "Pennacook"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pennacook",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1761546",
    "summary_en": "The Pennacook, also known by the names Penacook and Pennacock, were Algonquian Indigenous people who lived in what is now Massachusetts, New Hampshire, and southern Maine. They were not a united tribe but a network of politically and culturally allied communities. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 42.6°N, 71.3°W).",
    "summary_fi": "Pawtucket-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 42.6°N, 71.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Pawtucket"
    ]
  },
  {
    "slug": "pech-people",
    "name": "Pech People",
    "name_fi": "Pech-kansa",
    "native_name": "Pech",
    "alternate_names": [
      "Pech",
      "Pech people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pech_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2065318",
    "summary_en": "The Pech people, previously known as the Paya, are an Indigenous ethnic group in north-eastern Honduras. According to a 2007 census conducted by Indigenous organisations, 6,024 people self-identified as being of Pech descent. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 14.9°N, 85.7°W).",
    "summary_fi": "Pech-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 14.9°N, 85.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Pech"
    ]
  },
  {
    "slug": "pee-dee-people",
    "name": "Pee Dee People",
    "name_fi": "Pee Dee-kansa",
    "native_name": "Pee Dee",
    "alternate_names": [
      "Pee Dee",
      "Pedee people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pedee_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q786039",
    "summary_en": "The Pedee people, also Pee Dee and Peedee, are a historic Indigenous people of the Southeastern Woodlands within the Carolinas. Historically, their population was concentrated in the Piedmont of present-day South Carolina. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 34.3°N, 79.7°W).",
    "summary_fi": "Pee Dee-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 34.3°N, 79.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Pee Dee"
    ]
  },
  {
    "slug": "pentucket-people",
    "name": "Pentucket People",
    "name_fi": "Pentucket-kansa",
    "native_name": "Pentucket",
    "alternate_names": [
      "Pentucket",
      "Pennacook"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pennacook",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1761546",
    "summary_en": "The Pennacook, also known by the names Penacook and Pennacock, were Algonquian Indigenous people who lived in what is now Massachusetts, New Hampshire, and southern Maine. They were not a united tribe but a network of politically and culturally allied communities. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 42.9°N, 71.0°W).",
    "summary_fi": "Pentucket-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 42.9°N, 71.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Pentucket"
    ]
  },
  {
    "slug": "peoria-people",
    "name": "Peoria People",
    "name_fi": "Peoria-kansa",
    "native_name": "Peoria",
    "alternate_names": [
      "Peoria",
      "Peoria people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Peoria_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2518090",
    "summary_en": "The Peoria are a Native American people. They are enrolled in the federally recognized Peoria Tribe of Indians of Oklahoma headquartered in Miami, Oklahoma. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 41.3°N, 87.1°W).",
    "summary_fi": "Peoria-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 41.3°N, 87.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Peoria"
    ]
  },
  {
    "slug": "pequawket-people",
    "name": "Pequawket People",
    "name_fi": "Pequawket-kansa",
    "native_name": "Pequawket",
    "alternate_names": [
      "Pequawket"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pequawket",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3375052",
    "summary_en": "The Pequawket were a Native American band of Abenaki people. In the 18th century, they lived in New Hampshire and Maine. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 43.9°N, 70.9°W).",
    "summary_fi": "Pequawket-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 43.9°N, 70.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Pequawket"
    ]
  },
  {
    "slug": "pequonnock-people",
    "name": "Pequonnock People",
    "name_fi": "Pequonnock-kansa",
    "native_name": "Pequonnock",
    "alternate_names": [
      "Pequonnock"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pequonnock",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Northeastern Woodlands and Great Lakes Basin (centered near 41.3°N, 73.3°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Pequonnock-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 41.3°N, 73.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Pequonnock"
    ]
  },
  {
    "slug": "pericu-people",
    "name": "Pericú People",
    "name_fi": "Pericú-kansa",
    "native_name": "Pericú",
    "alternate_names": [
      "Pericú",
      "Pericúes"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Peric%C3%BAes",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2061333",
    "summary_en": "The Pericúes or Pericú were an Indigenous people of Mexico. They lived in the Cape Region, the southernmost portion of Baja California Sur. Their ancestral country encompasses Aridoamerica and Sonoran Desert (Northern Mexico & Borderlands) (centered near 23.6°N, 110.0°W).",
    "summary_fi": "Pericú-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Aridoamerikassa ja Sonoran aavikolla Pohjois-Meksikon rajaseudulla (koordinaateissa noin 23.6°N, 110.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Sonoran rancherías and oasis settlements",
    "feature_name_matches": [
      "Pericú"
    ]
  },
  {
    "slug": "perquimans-people",
    "name": "Perquimans People",
    "name_fi": "Perquimans-kansa",
    "native_name": "Perquimans",
    "alternate_names": [
      "Perquimans",
      "Perquimans County, North Carolina"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Perquimans_County%2C_North_Carolina",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q201014",
    "summary_en": "Perquimans County is a county located in the U.S. state of North Carolina. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 36.2°N, 76.5°W).",
    "summary_fi": "Perquimans-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 36.2°N, 76.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Perquimans"
    ]
  },
  {
    "slug": "pescado-people",
    "name": "Pescado People",
    "name_fi": "Pescado-kansa",
    "native_name": "Pescado",
    "alternate_names": [
      "Pescado"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "north-america-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pescado",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in North American Indigenous Country (centered near 30.6°N, 105.8°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Pescado-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Amerikan alkuperäisalueilla (koordinaateissa noin 30.6°N, 105.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional ancestral territory",
    "feature_name_matches": [
      "Pescado"
    ]
  },
  {
    "slug": "petun-people",
    "name": "Petun People",
    "name_fi": "Petun-kansa",
    "native_name": "Petun",
    "alternate_names": [
      "Petun"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Petun",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q151804",
    "summary_en": "The Petun, also known as the Tobacco people or Tionontati, were an indigenous Iroquoian people of the woodlands of eastern North America. Their traditional homeland was south of Lake Huron's Georgian Bay, in what is today's Canadian province of Ontario. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 44.2°N, 80.2°W).",
    "summary_fi": "Petun-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 44.2°N, 80.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Petun"
    ]
  },
  {
    "slug": "pissaseck-people",
    "name": "Pissaseck People",
    "name_fi": "Pissaseck-kansa",
    "native_name": "Pissaseck",
    "alternate_names": [
      "Pissaseck"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pissaseck",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Northeastern Woodlands and Great Lakes Basin (centered near 38.0°N, 77.0°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Pissaseck-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 38.0°N, 77.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Pissaseck"
    ]
  },
  {
    "slug": "pit-river-people",
    "name": "Pit River People",
    "name_fi": "Pit River-kansa",
    "native_name": "Pit River",
    "alternate_names": [
      "Pit River"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pit_River",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1760800",
    "summary_en": "The Pit River is a major river draining from northeastern California into the state's Central Valley. The Pit, the Klamath and the Columbia are the only three rivers in the U.S. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 41.2°N, 121.1°W).",
    "summary_fi": "Pit River-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 41.2°N, 121.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Pit River"
    ]
  },
  {
    "slug": "pocomoke-people",
    "name": "Pocomoke People",
    "name_fi": "Pocomoke-kansa",
    "native_name": "Pocomoke",
    "alternate_names": [
      "Pocomoke",
      "Pocomoke people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pocomoke_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q7206513",
    "summary_en": "The Pocomoke people were an Indigenous people of the Northeastern Woodlands whose territory encompassed the rivers Pocomoke, Great Annemessex, Little Annemessex, and Manokin, the bays of Monie and Chincoteague, and the sounds of Pocomoke and Tangier in Maryland. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 38.2°N, 75.6°W).",
    "summary_fi": "Pocomoke-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 38.2°N, 75.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Pocomoke"
    ]
  },
  {
    "slug": "pocumtuc-people",
    "name": "Pocumtuc People",
    "name_fi": "Pocumtuc-kansa",
    "native_name": "Pocumtuc",
    "alternate_names": [
      "Pocumtuc",
      "Pocomtuc"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pocomtuc",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1789087",
    "summary_en": "The Pocomtuc were a Native American tribe historically inhabiting western areas of Massachusetts. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 42.3°N, 72.7°W).",
    "summary_fi": "Pocumtuc-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 42.3°N, 72.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Pocumtuc"
    ]
  },
  {
    "slug": "podunks-people",
    "name": "Podunks People",
    "name_fi": "Podunks-kansa",
    "native_name": "Podunks",
    "alternate_names": [
      "Podunks",
      "Podunk people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Podunk_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q7207182",
    "summary_en": "The Podunk were a Native American people who spoke an Algonquian Quiripi language and lived primarily in what is now known as Hartford County, Connecticut, United States. English colonists adopted use of a Nipmuc dialect word for the territory of this people. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 41.9°N, 72.5°W).",
    "summary_fi": "Podunks-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 41.9°N, 72.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Podunks"
    ]
  },
  {
    "slug": "pokanoket-people",
    "name": "Pokanoket People",
    "name_fi": "Pokanoket-kansa",
    "native_name": "Pokanoket",
    "alternate_names": [
      "Pokanoket"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pokanoket",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q151227",
    "summary_en": "The Pokanoket are a group of Wampanoag people and the village governed by Massasoit, chief sachem of the Wampanoag people. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 41.9°N, 71.1°W).",
    "summary_fi": "Pokanoket-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 41.9°N, 71.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Pokanoket"
    ]
  },
  {
    "slug": "amah-mutsun-people",
    "name": "Amah Mutsun People",
    "name_fi": "Amah Mutsun-kansa",
    "native_name": "Popeloutchom (Amah Mutsun)",
    "alternate_names": [
      "Popeloutchom (Amah Mutsun)",
      "Amah Mutsun",
      "Ohlone"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ohlone",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q598406",
    "summary_en": "The Ohlone, formerly known as Costanoans, are a Native American people of the Northern California coast. The Ohlone are believed to have displaced an earlier population of Hokan-speaking residents of the area. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 36.7°N, 121.2°W).",
    "summary_fi": "Popeloutchom (Amah Mutsun)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 36.7°N, 121.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Popeloutchom (Amah Mutsun)"
    ]
  },
  {
    "slug": "popti-people",
    "name": "Popti' People",
    "name_fi": "Popti'-kansa",
    "native_name": "Popti'",
    "alternate_names": [
      "Popti'",
      "Jakaltek people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Jakaltek_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2327182",
    "summary_en": "The Jakaltek people are a Maya people who lives alongside the border of the State of Chiapas in southern Mexico and the Department of Huehuetenango in northwestern Guatemala. Since pre-Columbian times they have lived alongside the modern Mexico-Guatemala border near the foothills of the Cuchumatán Mountains, mainly centered on the municipality of Jacaltenango. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 15.8°N, 91.6°W).",
    "summary_fi": "Popti'-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 15.8°N, 91.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Popti'"
    ]
  },
  {
    "slug": "poqomchi-people",
    "name": "Poqomchi' People",
    "name_fi": "Poqomchi'-kansa",
    "native_name": "Poqomchi'",
    "alternate_names": [
      "Poqomchi'",
      "Poqomchi’",
      "Poqomchiʼ people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Poqomchi%CA%BC_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2442920",
    "summary_en": "The Poqomchiʼ are a Maya people in Guatemala. Their indigenous language is also called Poqomchiʼ, and is related to the Quichean–Poqom branch. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 15.3°N, 90.3°W).",
    "summary_fi": "Poqomchi'-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 15.3°N, 90.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Poqomchi’"
    ]
  },
  {
    "slug": "poquonook-people",
    "name": "Poquonook People",
    "name_fi": "Poquonook-kansa",
    "native_name": "Poquonook",
    "alternate_names": [
      "Poquonook"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Poquonook",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Northeastern Woodlands and Great Lakes Basin (centered near 41.8°N, 72.7°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Poquonook-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 41.8°N, 72.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Poquonook"
    ]
  },
  {
    "slug": "poteskeet-people",
    "name": "Poteskeet People",
    "name_fi": "Poteskeet-kansa",
    "native_name": "Poteskeet",
    "alternate_names": [
      "Poteskeet",
      "Weapemeoc"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Weapemeoc",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1477889",
    "summary_en": "The Weapemeoc were a small Native American Algonquian speaking tribe from northeastern North Carolina. They lived on the north shore of Albemarle Sound. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 36.3°N, 76.0°W).",
    "summary_fi": "Poteskeet-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 36.3°N, 76.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Poteskeet"
    ]
  },
  {
    "slug": "puyallup-people",
    "name": "Puyallup People",
    "name_fi": "Puyallup-kansa",
    "native_name": "Puyallup",
    "alternate_names": [
      "Puyallup",
      "Puyallup people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Puyallup_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q125371774",
    "summary_en": "The Puyallup are a Lushootseed-speaking Southern Coast Salish people indigenous to the Puget Sound region of Washington state. They are primarily enrolled in and represented by the Puyallup Tribe of Indians, a federally-recognized Indian tribe located near Tacoma. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 47.1°N, 122.0°W).",
    "summary_fi": "Puyallup-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 47.1°N, 122.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Puyallup"
    ]
  },
  {
    "slug": "q-anjob-al-people",
    "name": "Q'anjob'al People",
    "name_fi": "Q'anjob'al-kansa",
    "native_name": "Q'anjob'al",
    "alternate_names": [
      "Q'anjob'al",
      "Qʼanjobʼal people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Q%CA%BCanjob%CA%BCal_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3435904",
    "summary_en": "The Qʼanjobʼal (Kanjobal) are a Maya people in Guatemala and their Indigenous language is also called Qʼanjobʼal. They are known for their resilience, as their culture significantly differs from that of other groups. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 15.8°N, 91.6°W).",
    "summary_fi": "Q'anjob'al-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 15.8°N, 91.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Q'anjob'al"
    ]
  },
  {
    "slug": "qayqayt-people",
    "name": "Qayqayt People",
    "name_fi": "Qayqayt-kansa",
    "native_name": "Qayqayt",
    "alternate_names": [
      "Qayqayt"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Qayqayt",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q113456490",
    "summary_en": "Qayqayt was the name of an indigenous community located in the Brownsville area of Surrey, British Columbia. The community was part of the Kwantlen and Musqueam First Nations. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 49.3°N, 122.9°W).",
    "summary_fi": "Qayqayt-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 49.3°N, 122.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Qayqayt"
    ]
  },
  {
    "slug": "quatsino-people",
    "name": "Quatsino People",
    "name_fi": "Quatsino-kansa",
    "native_name": "Quatsino",
    "alternate_names": [
      "Quatsino"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Quatsino",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q7269589",
    "summary_en": "Quatsino is a small hamlet of 91 people located on Quatsino Sound in Northern Vancouver Island, Canada only accessible by boat or float plane. Its nearest neighbour is Coal Harbour, to the east, about 20 minutes away by boat, and Port Alice, to the south, about 40 minutes away by boat. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 50.6°N, 127.8°W).",
    "summary_fi": "Quatsino-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 50.6°N, 127.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Quatsino"
    ]
  },
  {
    "slug": "queets-people",
    "name": "Queets People",
    "name_fi": "Queets-kansa",
    "native_name": "Queets",
    "alternate_names": [
      "Queets",
      "Queets, Washington"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Queets%2C_Washington",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3474843",
    "summary_en": "Queets is an unincorporated community and census-designated place (CDP) in Grays Harbor and Jefferson counties, Washington, United States. The population was 136 at the 2020 census, down from 174 at the 2010 census. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 47.7°N, 124.0°W).",
    "summary_fi": "Queets-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 47.7°N, 124.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Queets"
    ]
  },
  {
    "slug": "quiyoughcohannock-people",
    "name": "Quiyoughcohannock People",
    "name_fi": "Quiyoughcohannock-kansa",
    "native_name": "Quiyoughcohannock",
    "alternate_names": [
      "Quiyoughcohannock"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Quiyoughcohannock",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Northeastern Woodlands and Great Lakes Basin (centered near 37.2°N, 77.0°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Quiyoughcohannock-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 37.2°N, 77.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Quiyoughcohannock"
    ]
  },
  {
    "slug": "quw-utsun-people",
    "name": "Quw'utsun People",
    "name_fi": "Quw'utsun-kansa",
    "native_name": "Quw'utsun",
    "alternate_names": [
      "Quw'utsun",
      "Quamichan"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Quamichan",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1138201",
    "summary_en": "Quamichan is a traditional nation of the Coast Salish people, commonly referred to by the English adaptation of Quʼwutsun as the Cowichan Indians, or First Nations, of the Cowichan Valley on Vancouver Island, in the area near the city of Duncan, British Columbia and Salt Spring Island, British Columbia. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 48.9°N, 124.1°W).",
    "summary_fi": "Quw'utsun-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 48.9°N, 124.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Quw'utsun"
    ]
  },
  {
    "slug": "klickitat-people",
    "name": "Klickitat People",
    "name_fi": "Klickitat-kansa",
    "native_name": "Qwû'lh-hwai-pûm (Klickitat)",
    "alternate_names": [
      "Qwû'lh-hwai-pûm (Klickitat)",
      "Klickitat",
      "Klickitat people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Klickitat_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2450853",
    "summary_en": "The Klickitat are a Native American tribe of the Pacific Northwest. Today most Klickitat are enrolled in the federally recognized Confederated Tribes and Bands of the Yakama Nation; some are also part of the Confederated Tribes of the Grand Ronde Community of Oregon. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 46.3°N, 121.8°W).",
    "summary_fi": "Qwû'lh-hwai-pûm (Klickitat)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 46.3°N, 121.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Qwû'lh-hwai-pûm (Klickitat)"
    ]
  },
  {
    "slug": "rama-people",
    "name": "Rama People",
    "name_fi": "Rama-kansa",
    "native_name": "Rama",
    "alternate_names": [
      "Rama",
      "Rama people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Rama_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1440932",
    "summary_en": "The Rama are an Indigenous people living on the eastern coast of Nicaragua. Since the start of European colonization, the Rama population has declined as a result of disease, conflict, and loss of territory. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 11.1°N, 84.5°W).",
    "summary_fi": "Rama-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 11.1°N, 84.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Rama"
    ]
  },
  {
    "slug": "ramaytush-people",
    "name": "Ramaytush People",
    "name_fi": "Ramaytush-kansa",
    "native_name": "Ramaytush",
    "alternate_names": [
      "Ramaytush"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ramaytush",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3418386",
    "summary_en": "The Ramaytush or Rammay-tuš people are a linguistic subdivision of the Ohlone people of Northern California. The term Ramaytush was first applied to them in the 1970s, but the modern Ohlone people of the peninsula have claimed it as their ethnonym. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 37.5°N, 122.3°W).",
    "summary_fi": "Ramaytush-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 37.5°N, 122.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Ramaytush"
    ]
  },
  {
    "slug": "rappahannock-people",
    "name": "Rappahannock People",
    "name_fi": "Rappahannock-kansa",
    "native_name": "Rappahannock",
    "alternate_names": [
      "Rappahannock",
      "Rappahannock people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Rappahannock_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q7294310",
    "summary_en": "The Rappahannock Tribe are a federally recognized Native American tribe in Virginia and one of the eleven state-recognized tribes. They are made up of descendants of several small Algonquian-speaking tribes who merged in the late 17th century. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 37.9°N, 76.9°W).",
    "summary_fi": "Rappahannock-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 37.9°N, 76.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Rappahannock"
    ]
  },
  {
    "slug": "tarahumara-guarijio-people",
    "name": "Tarahumara-Guarijio People",
    "name_fi": "Tarahumara-Guarijio-kansa",
    "native_name": "Rarámuri (Tarahumara-Guarijio)",
    "alternate_names": [
      "Rarámuri (Tarahumara-Guarijio)",
      "Tarahumara-Guarijio",
      "Rarámuri"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Rar%C3%A1muri",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q429921",
    "summary_en": "The Rarámuri or Tarahumara are a group of Indigenous people of the Americas living in the state of Chihuahua in Mexico. They are renowned for their form of prayer that involves running for extended periods of time. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 27.8°N, 107.8°W).",
    "summary_fi": "Rarámuri (Tarahumara-Guarijio)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 27.8°N, 107.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Rarámuri (Tarahumara-Guarijio)"
    ]
  },
  {
    "slug": "borrados-people",
    "name": "Borrados People",
    "name_fi": "Borrados-kansa",
    "native_name": "Rayados (Borrados)",
    "alternate_names": [
      "Rayados (Borrados)",
      "Borrados",
      "C.F. Monterrey"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/C.F._Monterrey",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q768253",
    "summary_en": "Club de Fútbol Monterrey Rayados, A.C., simplified as CF Monterrey, and also known as Rayados de Monterrey, is a Mexican professional football club based in the Monterrey metropolitan area, Nuevo León. The club competes in Liga MX, the top division of Mexican football, and plays its home matches at Estadio BBVA. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 25.3°N, 98.5°W).",
    "summary_fi": "Rayados (Borrados)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 25.3°N, 98.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Rayados (Borrados)"
    ]
  },
  {
    "slug": "roanoke-people",
    "name": "Roanoke People",
    "name_fi": "Roanoke-kansa",
    "native_name": "Roanoke",
    "alternate_names": [
      "Roanoke",
      "Roanoke people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Roanoke_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1666992",
    "summary_en": "The Roanoke, also spelled Roanoac, were a Carolina Algonquian-speaking people whose territory comprised present-day Dare County, Roanoke Island, and part of the mainland at the time of English exploration and colonization. They were one of the numerous Carolina Algonquian tribes, which may have numbered 5,000 to 10,000 people in total in eastern North Carolina at the time of English encounter. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 35.8°N, 75.9°W).",
    "summary_fi": "Roanoke-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 35.8°N, 75.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Roanoke"
    ]
  },
  {
    "slug": "rumsen-people",
    "name": "Rumsen People",
    "name_fi": "Rumsen-kansa",
    "native_name": "Rumsen",
    "alternate_names": [
      "Rumsen",
      "Rumsen people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Rumsen_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q17091328",
    "summary_en": "The Rumsen are one of eight groups of the Ohlone, an Indigenous people of California. Their historical territory included coastal and inland areas within what is now Monterey County, California, including the Monterey Peninsula. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 36.5°N, 121.4°W).",
    "summary_fi": "Rumsen-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 36.5°N, 121.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Rumsen"
    ]
  },
  {
    "slug": "chocho-people",
    "name": "Chocho People",
    "name_fi": "Chocho-kansa",
    "native_name": "Runixa Ngiigua (Chocho)",
    "alternate_names": [
      "Runixa Ngiigua (Chocho)",
      "Chocho",
      "Chocho people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chocho_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1113140",
    "summary_en": "The Chochos are an Indigenous people of the Mexican state of Oaxaca. The Chocho name for themselves is Ngiwa. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 17.7°N, 97.3°W).",
    "summary_fi": "Runixa Ngiigua (Chocho)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 17.7°N, 97.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Runixa Ngiigua (Chocho)"
    ]
  },
  {
    "slug": "s-klallam-people",
    "name": "S'Klallam People",
    "name_fi": "S'Klallam-kansa",
    "native_name": "S'Klallam",
    "alternate_names": [
      "S'Klallam",
      "Klallam people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Klallam_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q958274",
    "summary_en": "The Klallam are a Coast Salish people Indigenous to the northern Olympic Peninsula. The language of the Klallam is the Klallam language, a language closely related to the North Straits Salish languages. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 47.8°N, 123.2°W).",
    "summary_fi": "S'Klallam-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 47.8°N, 123.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "S'Klallam"
    ]
  },
  {
    "slug": "sacapultec-people",
    "name": "Sacapultec People",
    "name_fi": "Sacapultec-kansa",
    "native_name": "Sacapultec",
    "alternate_names": [
      "Sacapultec",
      "Sakapultek language"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Sakapultek_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36412",
    "summary_en": "Sakapultek  or Sacapulteco is a Mayan language very closely related to Kʼicheʼ (Quiché). It is spoken by approximately 6,500 people in Sacapulas, El Quiché department and in Guatemala City. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 15.3°N, 91.1°W).",
    "summary_fi": "Sacapultec-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 15.3°N, 91.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Sacapultec"
    ]
  },
  {
    "slug": "sahtu-got-ine-people",
    "name": "Sahtú Got'ine People",
    "name_fi": "Sahtú Got'ine-kansa",
    "native_name": "Sahtú Got'ine",
    "alternate_names": [
      "Sahtú Got'ine",
      "Sahtú Got’ine"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Saht%C3%BA_Got'ine",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 65.5°N, 122.6°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Sahtú Got'ine-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 65.5°N, 122.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Sahtú Got’ine"
    ]
  },
  {
    "slug": "salinan-people",
    "name": "Salinan People",
    "name_fi": "Salinan-kansa",
    "native_name": "Salinan",
    "alternate_names": [
      "Salinan"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Salinan",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q7404641",
    "summary_en": "The Salinan are an Indigenous people of California whose ancestral territory is in the southern Salinas Valley and the Santa Lucia Range in the Central Coast of California. Their Salinan language was a linguistic isolate. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 35.8°N, 120.8°W).",
    "summary_fi": "Salinan-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 35.8°N, 120.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Salinan"
    ]
  },
  {
    "slug": "salmon-river-people",
    "name": "Salmon River People",
    "name_fi": "Salmon River-kansa",
    "native_name": "Salmon River",
    "alternate_names": [
      "Salmon River"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Salmon_River",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 45.0°N, 123.9°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Salmon River-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 45.0°N, 123.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Salmon River"
    ]
  },
  {
    "slug": "saluda-people",
    "name": "Saluda People",
    "name_fi": "Saluda-kansa",
    "native_name": "Saluda",
    "alternate_names": [
      "Saluda",
      "Saluan people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Saluan_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q12517250",
    "summary_en": "The Saluan people are an ethnic group inhabiting the region of Banggai Regency, Central Sulawesi, Indonesia. According to the 2016 population census, the Saluan population is approximately 200,000. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 34.6°N, 82.9°W).",
    "summary_fi": "Saluda-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 34.6°N, 82.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Saluda"
    ]
  },
  {
    "slug": "sana-people",
    "name": "Sana People",
    "name_fi": "Sana-kansa",
    "native_name": "Sana",
    "alternate_names": [
      "Sana",
      "Sana people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "plains-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Sana_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q130214001",
    "summary_en": "The Sana were a Indigenous people of the Southern Plains from South Texas. They settled on both the Brazos and Guadalupe Rivers in the 17th and 18th centuries. Their ancestral country encompasses Great Plains (Plains Indigenous Territory) (centered near 30.2°N, 96.4°W).",
    "summary_fi": "Sana-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Suurten tasankojen (Great Plains) perinnealueilla (koordinaateissa noin 30.2°N, 96.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Plains ancestral encampments",
    "feature_name_matches": [
      "Sana"
    ]
  },
  {
    "slug": "santiam-people",
    "name": "Santiam People",
    "name_fi": "Santiam-kansa",
    "native_name": "Santiam",
    "alternate_names": [
      "Santiam",
      "Santiam people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Santiam_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q7420409",
    "summary_en": "The Santiam people are an indigenous people of the Northwest Plateau, living in Oregon. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 44.7°N, 122.9°W).",
    "summary_fi": "Santiam-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 44.7°N, 122.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Santiam"
    ]
  },
  {
    "slug": "sappony-people",
    "name": "Sappony People",
    "name_fi": "Sappony-kansa",
    "native_name": "Sappony",
    "alternate_names": [
      "Sappony"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Sappony",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q111169411",
    "summary_en": "The Sappony are a state-recognized tribe in North Carolina, United States. They claim descent from the historic Saponi people, a Tutelo-speaking tribe who occupied the Piedmont of North Carolina and Virginia. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 36.7°N, 79.6°W).",
    "summary_fi": "Sappony-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 36.7°N, 79.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Sappony"
    ]
  },
  {
    "slug": "saura-people",
    "name": "Saura People",
    "name_fi": "Saura-kansa",
    "native_name": "Saura",
    "alternate_names": [
      "Saura",
      "Cheraw"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Cheraw",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q846124",
    "summary_en": "The Cheraw people, also known as the Saraw or Saura, were a tribe of Indigenous people of the Southeastern Woodlands, in the Piedmont region of North Carolina near the Sauratown Mountains, east of Pilot Mountain and north of the Yadkin River. They lived in villages near the Catawba River. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 36.5°N, 79.9°W).",
    "summary_fi": "Saura-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 36.5°N, 79.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Saura"
    ]
  },
  {
    "slug": "coeur-d-alene-people",
    "name": "Coeur d'Alene People",
    "name_fi": "Coeur d'Alene-kansa",
    "native_name": "Schitsu'umsh (Coeur d'Alene)",
    "alternate_names": [
      "Schitsu'umsh (Coeur d'Alene)",
      "Schitsu’umsh (Coeur d’Alene)",
      "Coeur d'Alene",
      "Coeur d'Alene people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Coeur_d'Alene_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q491755",
    "summary_en": "The Coeur d'Alene Tribe are a Native American tribe and one of five federally recognized tribes in the state of Idaho. The Coeur d'Alene have sovereign control of their Coeur d'Alene Reservation, which includes a significant portion of Lake Coeur d'Alene and its submerged lands. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 47.5°N, 116.2°W).",
    "summary_fi": "Schitsu'umsh (Coeur d'Alene)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 47.5°N, 116.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Schitsu’umsh (Coeur d’Alene)"
    ]
  },
  {
    "slug": "secotan-people",
    "name": "Secotan People",
    "name_fi": "Secotan-kansa",
    "native_name": "Secotan",
    "alternate_names": [
      "Secotan"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Secotan",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2263920",
    "summary_en": "The Secotans were one of several groups of Native Americans dominant in the Carolina sound region, between 1584 and 1590, with which English colonists had varying degrees of contact. Secotan villages included the Secotan, Aquascogoc, Dasamongueponke, Pomeiock (Pamlico) and Roanoac. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 35.7°N, 76.7°W).",
    "summary_fi": "Secotan-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 35.7°N, 76.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Secotan"
    ]
  },
  {
    "slug": "sekakawon-people",
    "name": "Sekakawon People",
    "name_fi": "Sekakawon-kansa",
    "native_name": "Sekakawon",
    "alternate_names": [
      "Sekakawon"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Sekakawon",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Northeastern Woodlands and Great Lakes Basin (centered near 37.9°N, 76.5°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Sekakawon-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 37.9°N, 76.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Sekakawon"
    ]
  },
  {
    "slug": "semiahmoo-people",
    "name": "Semiahmoo People",
    "name_fi": "Semiahmoo-kansa",
    "native_name": "Semiahmoo",
    "alternate_names": [
      "Semiahmoo",
      "Semiahmoo people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Semiahmoo_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q17018497",
    "summary_en": "The Semiahmoo people are a Coast Salish people who are Indigenous to southwestern British Columbia, Canada and northwestern Washington, United States. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 49.0°N, 122.7°W).",
    "summary_fi": "Semiahmoo-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 49.0°N, 122.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Semiahmoo"
    ]
  },
  {
    "slug": "shakori-people",
    "name": "Shakori People",
    "name_fi": "Shakori-kansa",
    "native_name": "Shakori",
    "alternate_names": [
      "Shakori",
      "Shakori people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Shakori_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2276596",
    "summary_en": "The Shakori people, also known as the Shoccoree, were an Indigenous people of the Southeastern Woodlands in the Piedmont region of present-day North Carolina. Originally a distinct tribal nation, by 1701 the Shakori, Eno, and Adshusheer confederated as the Shakori-Eno or Eno-Shakori and lived together in a single village along the Eno River, about fourteen miles east of the Occaneechi, near Hillsborough, North Carolina. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 36.1°N, 79.4°W).",
    "summary_fi": "Shakori-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 36.1°N, 79.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Shakori"
    ]
  },
  {
    "slug": "shasta-people",
    "name": "Shasta People",
    "name_fi": "Shasta-kansa",
    "native_name": "Shasta",
    "alternate_names": [
      "Shasta",
      "Shasta people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Shasta_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q491693",
    "summary_en": "The Shastan peoples are a group of linguistically related indigenous peoples from the Klamath Mountains in California and Oregon in the northwestern United States. They traditionally inhabited portions of several regional waterways, including the Klamath, Salmon, Sacramento and McCloud rivers. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 41.7°N, 122.6°W).",
    "summary_fi": "Shasta-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 41.7°N, 122.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Shasta"
    ]
  },
  {
    "slug": "shigom-people",
    "name": "Shigom People",
    "name_fi": "Shigom-kansa",
    "native_name": "Shigom",
    "alternate_names": [
      "Shigom",
      "Genet Sium"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Genet_Sium",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q100736932",
    "summary_en": "Genet Sium is an Eritrean writer, activist, and nurse. She was an active member of the Eritrean People's Liberation Front (EPLF) during the war for Eritrean independence from Ethiopia. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 39.1°N, 122.8°W).",
    "summary_fi": "Shigom-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 39.1°N, 122.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Shigom"
    ]
  },
  {
    "slug": "shita-got-ine-people",
    "name": "Shita Got'ine People",
    "name_fi": "Shita Got'ine-kansa",
    "native_name": "Shita Got'ine",
    "alternate_names": [
      "Shita Got'ine",
      "Shita Got’ine"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Shita_Got'ine",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 64.2°N, 128.5°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Shita Got'ine-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 64.2°N, 128.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Shita Got’ine"
    ]
  },
  {
    "slug": "barbareno-people",
    "name": "Barbareño People",
    "name_fi": "Barbareño-kansa",
    "native_name": "Shmuwich (Barbareño)",
    "alternate_names": [
      "Shmuwich (Barbareño)",
      "Barbareño",
      "Barbareño language"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Barbare%C3%B1o_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q56391",
    "summary_en": "Barbareño is a Chumashan language indigenous to the area in and around Santa Barbara, California. A dialect of the Barbareño language was also \"spoken at San Emigdio near Buena Vista Lake\" in the southern Central Valley. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 34.5°N, 119.7°W).",
    "summary_fi": "Shmuwich (Barbareño)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 34.5°N, 119.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Shmuwich (Barbareño)"
    ]
  },
  {
    "slug": "shishalh-people",
    "name": "Shíshálh People",
    "name_fi": "Shíshálh-kansa",
    "native_name": "Shíshálh",
    "alternate_names": [
      "Shíshálh",
      "Shíshálh Nation"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Sh%C3%ADsh%C3%A1lh_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q119509456",
    "summary_en": "The shíshálh Nation is a First Nation located on the Sunshine Coast of British Columbia, Canada. Their swiya comprises 515,000 hectares that stretches from xwesam in the southeast, to x̱enichen in the north, to kwekwenis in the southwest. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 49.9°N, 123.8°W).",
    "summary_fi": "Shíshálh-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 49.9°N, 123.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Shíshálh"
    ]
  },
  {
    "slug": "sicangu-people",
    "name": "Sicangu People",
    "name_fi": "Sicangu-kansa",
    "native_name": "Sicangu",
    "alternate_names": [
      "Sicangu"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "plains-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Sicangu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q992401",
    "summary_en": "The Sicangu are one of the seven oyates, nations or council fires, of Lakota people, an Indigenous people of the Northern Plains. Today, many Sicangu people are enrolled citizens of the Rosebud Sioux Tribe of the Rosebud Indian Reservation and Lower Brule Sioux Tribe of the Lower Brule Reservation in South Dakota. Their ancestral country encompasses Great Plains (Plains Indigenous Territory) (centered near 42.1°N, 101.8°W).",
    "summary_fi": "Sicangu-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Suurten tasankojen (Great Plains) perinnealueilla (koordinaateissa noin 42.1°N, 101.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Plains ancestral encampments",
    "feature_name_matches": [
      "Sicangu"
    ]
  },
  {
    "slug": "sihapsa-people",
    "name": "Sihapsa People",
    "name_fi": "Sihapsa-kansa",
    "native_name": "Sihapsa",
    "alternate_names": [
      "Sihapsa"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "plains-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Sihapsa",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Great Plains (Plains Indigenous Territory) (centered near 45.3°N, 101.7°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Sihapsa-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Suurten tasankojen (Great Plains) perinnealueilla (koordinaateissa noin 45.3°N, 101.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Plains ancestral encampments",
    "feature_name_matches": [
      "Sihapsa"
    ]
  },
  {
    "slug": "sinkyone-people",
    "name": "Sinkyone People",
    "name_fi": "Sinkyone-kansa",
    "native_name": "Sinkyone",
    "alternate_names": [
      "Sinkyone",
      "Wailaki language"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wailaki_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q20832",
    "summary_en": "Wailaki, also known as Eel River, is an extinct and revitalizing Athabaskan language spoken by the people of the Round Valley Reservation of northern California, one of four languages belonging to the California Athabaskan cluster of the Pacific Coast Athabaskan languages. Dialect clusters reflect the four Wailaki-speaking peoples, the Sinkyone, Wailaki, Nongatl, and Lassik, of the Eel River confederation. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 40.2°N, 124.0°W).",
    "summary_fi": "Sinkyone-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 40.2°N, 124.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Sinkyone"
    ]
  },
  {
    "slug": "sisseton-people",
    "name": "Sisseton People",
    "name_fi": "Sisseton-kansa",
    "native_name": "Sisseton",
    "alternate_names": [
      "Sisseton",
      "Dakota people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "plains-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Dakota_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q16148367",
    "summary_en": "The Dakota are a Native American tribe and First Nations band government in North America. They compose two of the three main subcultures of the Sioux people, and are typically divided into the Eastern Dakota and the Western Dakota. Their ancestral country encompasses Great Plains (Plains Indigenous Territory) (centered near 48.0°N, 95.5°W).",
    "summary_fi": "Sisseton-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Suurten tasankojen (Great Plains) perinnealueilla (koordinaateissa noin 48.0°N, 95.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Plains ancestral encampments",
    "feature_name_matches": [
      "Sisseton"
    ]
  },
  {
    "slug": "sissipahaw-people",
    "name": "Sissipahaw People",
    "name_fi": "Sissipahaw-kansa",
    "native_name": "Sissipahaw",
    "alternate_names": [
      "Sissipahaw"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Sissipahaw",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q7530960",
    "summary_en": "The Sissipahaw or Haw were a Native American tribe of North Carolina. Their settlements were generally located in the vicinity of modern-day Saxapahaw, North Carolina on the Haw River in Alamance County upstream from Cape Fear. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 36.0°N, 79.8°W).",
    "summary_fi": "Sissipahaw-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 36.0°N, 79.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Sissipahaw"
    ]
  },
  {
    "slug": "siuslaw-people",
    "name": "Siuslaw People",
    "name_fi": "Siuslaw-kansa",
    "native_name": "Siuslaw",
    "alternate_names": [
      "Siuslaw",
      "Siuslaw people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Siuslaw_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q56748",
    "summary_en": "The Siuslaw are an Indigenous people of the Pacific Northwest. Their autonym is sha’yuushtl’a. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 44.0°N, 123.9°W).",
    "summary_fi": "Siuslaw-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 44.0°N, 123.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Siuslaw"
    ]
  },
  {
    "slug": "skagit-people",
    "name": "Skagit People",
    "name_fi": "Skagit-kansa",
    "native_name": "Skagit",
    "alternate_names": [
      "Skagit",
      "Lushootseed"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Lushootseed",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q33658",
    "summary_en": "Lushootseed, historically known as Puget Salish, Puget Sound Salish, or Skagit-Nisqually, is a Central Coast Salish language of the Salishan language family. Lushootseed is the general name for the dialect continuum composed of two main dialects, Northern Lushootseed and Southern Lushootseed, which are further separated into smaller sub-dialects. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 48.4°N, 121.9°W).",
    "summary_fi": "Skagit-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 48.4°N, 121.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Skagit"
    ]
  },
  {
    "slug": "skilloot-people",
    "name": "Skilloot People",
    "name_fi": "Skilloot-kansa",
    "native_name": "Skilloot",
    "alternate_names": [
      "Skilloot"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Skilloot",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 46.1°N, 123.2°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Skilloot-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 46.1°N, 123.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Skilloot"
    ]
  },
  {
    "slug": "squamish-people",
    "name": "Squamish People",
    "name_fi": "Squamish-kansa",
    "native_name": "Skwxwú7mesh-ulh Temíx̱w (Squamish)",
    "alternate_names": [
      "Skwxwú7mesh-ulh Temíx̱w (Squamish)",
      "Squamish",
      "Squamish people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Squamish_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2034266",
    "summary_en": "The Squamish people are an Indigenous people of the Pacific Northwest Coast. Archaeological evidence shows they have lived in the area for more than a thousand years. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 49.9°N, 123.1°W).",
    "summary_fi": "Skwxwú7mesh-ulh Temíx̱w (Squamish)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 49.9°N, 123.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Skwxwú7mesh-ulh Temíx̱w (Squamish)"
    ]
  },
  {
    "slug": "skykomish-people",
    "name": "Skykomish People",
    "name_fi": "Skykomish-kansa",
    "native_name": "Skykomish",
    "alternate_names": [
      "Skykomish",
      "Skykomish people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Skykomish_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2293341",
    "summary_en": "The Skykomish are a Lushootseed-speaking Coast Salish people indigenous to the Skykomish Valley in the Cascade Mountains of Washington. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 47.8°N, 121.6°W).",
    "summary_fi": "Skykomish-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 47.8°N, 121.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Skykomish"
    ]
  },
  {
    "slug": "chontal-people",
    "name": "Chontal People",
    "name_fi": "Chontal-kansa",
    "native_name": "Slijuala Xanuc (Chontal)",
    "alternate_names": [
      "Slijuala Xanuc (Chontal)",
      "Chontal",
      "Chontal language"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chontal_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q55643760",
    "summary_en": "Chontal language may refer to:in Oaxaca,\none of the Tequistlatecan languages\nin Tabasco,\nthe Chontal Maya language\nin Guerrero,\nthe Guerrero Chontal language. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 16.2°N, 95.7°W).",
    "summary_fi": "Slijuala Xanuc (Chontal)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 16.2°N, 95.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Slijuala Xanuc (Chontal)"
    ]
  },
  {
    "slug": "snohomish-people",
    "name": "Snohomish People",
    "name_fi": "Snohomish-kansa",
    "native_name": "Snohomish",
    "alternate_names": [
      "Snohomish",
      "Snohomish people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Snohomish_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q941391",
    "summary_en": "The Snohomish people are a Lushootseed-speaking Southern Coast Salish people who are Indigenous to the Puget Sound region of Washington State. Most Snohomish are enrolled in the Tulalip Tribes of Washington and reside on the reservation or nearby, although others are enrolled in other tribes, and some are members of the non-recognized Snohomish Tribe of Indians. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 48.0°N, 122.2°W).",
    "summary_fi": "Snohomish-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 48.0°N, 122.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Snohomish"
    ]
  },
  {
    "slug": "snuneymuxw-people",
    "name": "Snuneymuxw People",
    "name_fi": "Snuneymuxw-kansa",
    "native_name": "Snuneymuxw",
    "alternate_names": [
      "Snuneymuxw",
      "Snuneymuxw First Nation"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Snuneymuxw_First_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q55624",
    "summary_en": "Snuneymuxw First Nation is located in and around the city of Nanaimo on east-central Vancouver Island, British Columbia, Canada. The nation previously had also occupied territory along the Fraser River, in British Columbia. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 49.1°N, 124.2°W).",
    "summary_fi": "Snuneymuxw-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 49.1°N, 124.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Snuneymuxw"
    ]
  },
  {
    "slug": "sobaipuri-people",
    "name": "Sobaipuri People",
    "name_fi": "Sobaipuri-kansa",
    "native_name": "Sobaipuri",
    "alternate_names": [
      "Sobaipuri"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Sobaipuri",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q675243",
    "summary_en": "The Sobaipuri were one of many Indigenous groups occupying Sonora and what is now Arizona at the time Europeans first entered the American Southwest. They were an O'odham group who occupied southern Arizona and northern Sonora in the 15th–19th centuries. Their ancestral country encompasses Aridoamerica and Sonoran Desert (Northern Mexico & Borderlands) (centered near 32.0°N, 110.6°W).",
    "summary_fi": "Sobaipuri-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Aridoamerikassa ja Sonoran aavikolla Pohjois-Meksikon rajaseudulla (koordinaateissa noin 32.0°N, 110.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Sonoran rancherías and oasis settlements",
    "feature_name_matches": [
      "Sobaipuri"
    ]
  },
  {
    "slug": "esto-k-gna-people",
    "name": "Esto'k Gna People",
    "name_fi": "Esto'k Gna-kansa",
    "native_name": "Somi Se'k (Esto'k Gna)",
    "alternate_names": [
      "Somi Se'k (Esto'k Gna)",
      "Somi Se'k (Esto’k Gna)",
      "Esto'k Gna"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Esto'k_Gna",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 26.5°N, 99.0°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Somi Se'k (Esto'k Gna)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 26.5°N, 99.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Somi Se'k (Esto’k Gna)"
    ]
  },
  {
    "slug": "squaxin-people",
    "name": "Squaxin People",
    "name_fi": "Squaxin-kansa",
    "native_name": "Squaxin",
    "alternate_names": [
      "Squaxin",
      "Squaxin Island Tribe"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Squaxin_Island_Tribe",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q780825",
    "summary_en": "The Squaxin Island Tribe is a federally recognized tribe located in Mason County, Washington. They are descended from several Southern Coast Salish peoples, including the Squaxin, Sahewamish, T'Peeksin, Squiaitl, Stechass, and Nusechatl. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 47.2°N, 123.0°W).",
    "summary_fi": "Squaxin-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 47.2°N, 123.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Squaxin"
    ]
  },
  {
    "slug": "steilacoom-people",
    "name": "Steilacoom People",
    "name_fi": "Steilacoom-kansa",
    "native_name": "Steilacoom",
    "alternate_names": [
      "Steilacoom",
      "Steilacoom people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Steilacoom_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1688616",
    "summary_en": "The Steilacoom people are Lushootseed-speaking Southern Coast Salish people, Indigenous to the southern Puget Sound region of Washington state. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 47.1°N, 122.5°W).",
    "summary_fi": "Steilacoom-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 47.1°N, 122.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Steilacoom"
    ]
  },
  {
    "slug": "stellat-en-people",
    "name": "Stellat'en People",
    "name_fi": "Stellat'en-kansa",
    "native_name": "Stellat'en",
    "alternate_names": [
      "Stellat'en"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Stellat'en",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 54.1°N, 125.6°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Stellat'en-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 54.1°N, 125.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Stellat'en"
    ]
  },
  {
    "slug": "stillaguamish-people",
    "name": "Stillaguamish People",
    "name_fi": "Stillaguamish-kansa",
    "native_name": "Stillaguamish",
    "alternate_names": [
      "Stillaguamish",
      "Stillaguamish people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Stillaguamish_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2349522",
    "summary_en": "The Stillaguamish people are a Southern Coast Salish people Indigenous to the Stillaguamish River valley in northwestern Washington State in the United States, near the city of Arlington, Washington. The Stillaguamish speak Northern Lushootseed, a Coast Salish language. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 48.1°N, 121.8°W).",
    "summary_fi": "Stillaguamish-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 48.1°N, 121.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Stillaguamish"
    ]
  },
  {
    "slug": "stoney-people",
    "name": "Stoney People",
    "name_fi": "Stoney-kansa",
    "native_name": "Stoney",
    "alternate_names": [
      "Stoney",
      "Nakoda people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nakoda_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q492150",
    "summary_en": "The Nakoda are an Indigenous people in Western Canada and the United States. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 52.4°N, 116.5°W).",
    "summary_fi": "Stoney-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 52.4°N, 116.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Stoney"
    ]
  },
  {
    "slug": "stz-uminus-people",
    "name": "Stz'uminus People",
    "name_fi": "Stz'uminus-kansa",
    "native_name": "Stz'uminus",
    "alternate_names": [
      "Stz'uminus"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Stz'uminus",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 48.9°N, 124.0°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Stz'uminus-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 48.9°N, 124.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Stz'uminus"
    ]
  },
  {
    "slug": "st-at-imc-people",
    "name": "St'at'imc People",
    "name_fi": "St'at'imc-kansa",
    "native_name": "St̓át̓imc Tmicw (St'at'imc)",
    "alternate_names": [
      "St̓át̓imc Tmicw (St'at'imc)",
      "St'at'imc",
      "Stʼatʼimc"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/St%CA%BCat%CA%BCimc",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q487749",
    "summary_en": "The Stʼatʼimc, also known as the Lillooet, are an Interior Salish people located in the southern Whale Mountains and Fraser Canyon region of the Interior of the Canadian province of British Columbia. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 50.3°N, 122.8°W).",
    "summary_fi": "St̓át̓imc Tmicw (St'at'imc)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 50.3°N, 122.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "St̓át̓imc Tmicw (St'at'imc)"
    ]
  },
  {
    "slug": "subtiaba-people",
    "name": "Subtiaba People",
    "name_fi": "Subtiaba-kansa",
    "native_name": "Subtiaba",
    "alternate_names": [
      "Subtiaba",
      "Subtiaba language"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Subtiaba_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3915405",
    "summary_en": "Subtiaba, also known as Maribio, is an extinct Oto-Manguean language which was spoken on the Pacific slope of Nicaragua, especially in the Subtiaba district of León. Edward Sapir established a connection between Subtiaba and Tlapanec. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 12.4°N, 86.8°W).",
    "summary_fi": "Subtiaba-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 12.4°N, 86.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Subtiaba"
    ]
  },
  {
    "slug": "sugaree-people",
    "name": "Sugaree People",
    "name_fi": "Sugaree-kansa",
    "native_name": "Sugaree",
    "alternate_names": [
      "Sugaree"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Sugaree",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q7634978",
    "summary_en": "\"Sugaree\" is a song with lyrics by long-time Grateful Dead lyricist Robert Hunter and music by guitarist Jerry Garcia. It was written for Jerry Garcia's first solo album Garcia, which was released in January 1972. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 35.2°N, 81.1°W).",
    "summary_fi": "Sugaree-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 35.2°N, 81.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Sugaree"
    ]
  },
  {
    "slug": "sumas-people",
    "name": "Sumas People",
    "name_fi": "Sumas-kansa",
    "native_name": "Sumas",
    "alternate_names": [
      "Sumas",
      "Sumas, Washington"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "north-america-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Sumas%2C_Washington",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1510124",
    "summary_en": "Sumas is a city in Whatcom County, Washington, United States. It had a population of 1,583 as of the 2020 census. Their ancestral country encompasses North American Indigenous Country (centered near 30.7°N, 106.4°W).",
    "summary_fi": "Sumas-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Amerikan alkuperäisalueilla (koordinaateissa noin 30.7°N, 106.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional ancestral territory",
    "feature_name_matches": [
      "Sumas"
    ]
  },
  {
    "slug": "suquamish-people",
    "name": "Suquamish People",
    "name_fi": "Suquamish-kansa",
    "native_name": "Suquamish",
    "alternate_names": [
      "Suquamish",
      "Suquamish people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Suquamish_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q135908057",
    "summary_en": "The Suquamish people are a Southern Coast Salish people Indigenous to western Washington state. Historically, the Suquamish dominated much of northeastern Kitsap Peninsula, with their main village, dxʷsəq̓ʷəb, being located at what is today Suquamish, Washington. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 47.7°N, 122.4°W).",
    "summary_fi": "Suquamish-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 47.7°N, 122.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Suquamish"
    ]
  },
  {
    "slug": "swinomish-people",
    "name": "Swinomish People",
    "name_fi": "Swinomish-kansa",
    "native_name": "Swinomish",
    "alternate_names": [
      "Swinomish",
      "Swinomish people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Swinomish_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q826869",
    "summary_en": "The Swinomish people are a Lushootseed-speaking people Indigenous to western Washington state. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 48.4°N, 122.4°W).",
    "summary_fi": "Swinomish-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 48.4°N, 122.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Swinomish"
    ]
  },
  {
    "slug": "sto-lo-people",
    "name": "Stó:lō People",
    "name_fi": "Stó:lō-kansa",
    "native_name": "S'ólh Téméxw (Stó:lō)",
    "alternate_names": [
      "S'ólh Téméxw (Stó:lō)",
      "S’ólh Téméxw (Stó:lō)",
      "Stó:lō",
      "Stó꞉lō"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/St%C3%B3%EA%9E%89l%C5%8D",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q821915",
    "summary_en": "The Stó꞉lō, alternately written as Sto꞉lo, Stó꞉lô, or Stó꞉lõ, historically as Staulo, Stalo or Stahlo, and historically known and commonly referred to in ethnographic literature as the Fraser River Indians or Lower Fraser Salish, are a group of First Nations peoples inhabiting the Fraser Valley and lower Fraser Canyon of British Columbia, Canada, part of the loose grouping of Coast Salish nations. Stó꞉lō is the Halqemeylem word for \"river\", so the Stó꞉lō are the river people. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 49.5°N, 122.1°W).",
    "summary_fi": "S'ólh Téméxw (Stó:lō)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 49.5°N, 122.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "S’ólh Téméxw (Stó:lō)"
    ]
  },
  {
    "slug": "ta-an-kwach-an-people",
    "name": "Ta'an Kwäch'än People",
    "name_fi": "Ta'an Kwäch'än-kansa",
    "native_name": "Ta'an Kwäch'än",
    "alternate_names": [
      "Ta'an Kwäch'än"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ta'an_Kw%C3%A4ch'%C3%A4n",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 61.1°N, 135.0°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Ta'an Kwäch'än-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 61.1°N, 135.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Ta'an Kwäch'än"
    ]
  },
  {
    "slug": "tagish-people",
    "name": "Tagish People",
    "name_fi": "Tagish-kansa",
    "native_name": "Tagish",
    "alternate_names": [
      "Tagish"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tagish",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q495767",
    "summary_en": "The Tagish or Tagish Khwáan are a First Nations people of the Athabaskan-speaking ethnolinguistic group that lived around Tagish Lake and Marsh Lake, in Yukon of Canada. The Tagish intermarried heavily with Tlingit from the coast and the Tagish language became extinct in 2008. Their ancestral country encompasses Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 60.0°N, 134.3°W).",
    "summary_fi": "Tagish-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 60.0°N, 134.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Tagish"
    ]
  },
  {
    "slug": "little-salmon-people",
    "name": "Little Salmon People",
    "name_fi": "Little Salmon-kansa",
    "native_name": "Tagé Cho Hudän (Little Salmon/Carmacks)",
    "alternate_names": [
      "Tagé Cho Hudän (Little Salmon/Carmacks)",
      "Little Salmon",
      "List of communities in Yukon"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/List_of_communities_in_Yukon",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1013978",
    "summary_en": "This is a list of communities in Yukon, Canada. Their ancestral country encompasses Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 61.8°N, 135.7°W).",
    "summary_fi": "Tagé Cho Hudän (Little Salmon/Carmacks)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 61.8°N, 135.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Tagé Cho Hudän (Little Salmon/Carmacks)"
    ]
  },
  {
    "slug": "tahues-people",
    "name": "Tahues People",
    "name_fi": "Tahues-kansa",
    "native_name": "Tahues",
    "alternate_names": [
      "Tahues",
      "It Takes People Like You"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/It_Takes_People_Like_You",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q6092065",
    "summary_en": "It Takes People Like You to Make People Like Me is an album by Buck Owens and his Buckaroos, released in 1968. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 24.8°N, 107.4°W).",
    "summary_fi": "Tahues-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 24.8°N, 107.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Tahues"
    ]
  },
  {
    "slug": "takelma-people",
    "name": "Takelma People",
    "name_fi": "Takelma-kansa",
    "native_name": "Takelma",
    "alternate_names": [
      "Takelma"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Takelma",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2508529",
    "summary_en": "The Takelma are a Native American people who originally lived in the Rogue Valley of interior southwestern Oregon. Most of their villages were sited along the Rogue River. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 42.4°N, 123.1°W).",
    "summary_fi": "Takelma-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 42.4°N, 123.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Takelma"
    ]
  },
  {
    "slug": "takla-people",
    "name": "Takla People",
    "name_fi": "Takla-kansa",
    "native_name": "Takla",
    "alternate_names": [
      "Takla",
      "Tama people"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tama_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3847982",
    "summary_en": "The Tama are an ethnic group living in eastern Chad and western Sudan. They speak Tama one of the early Yam sub clan in early Egypt, a Nilo-Saharan language. Their ancestral country encompasses Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 55.8°N, 125.2°W).",
    "summary_fi": "Takla-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 55.8°N, 125.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Takla"
    ]
  },
  {
    "slug": "tamaulipeco-tribes-people",
    "name": "Tamaulipeco tribes People",
    "name_fi": "Tamaulipeco tribes-kansa",
    "native_name": "Tamaulipeco tribes",
    "alternate_names": [
      "Tamaulipeco tribes"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tamaulipeco_tribes",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 24.0°N, 98.7°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Tamaulipeco tribes-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 24.0°N, 98.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Tamaulipeco tribes"
    ]
  },
  {
    "slug": "tamien-nation-people",
    "name": "Tamien Nation People",
    "name_fi": "Tamien Nation-kansa",
    "native_name": "Tamien Nation",
    "alternate_names": [
      "Tamien Nation"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tamien_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in California Indigenous Country (Pacific Coast & Central Valley) (centered near 37.3°N, 121.8°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Tamien Nation-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 37.3°N, 121.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Tamien Nation"
    ]
  },
  {
    "slug": "mansos-people",
    "name": "Mansos People",
    "name_fi": "Mansos-kansa",
    "native_name": "Tampachoa (Mansos)",
    "alternate_names": [
      "Tampachoa (Mansos)",
      "Mansos",
      "Manso people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "pueblo",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Manso_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q6751783",
    "summary_en": "The Manso are an Indigenous people of New Mexico. The Mansos were semi-nomadic hunter-gatherers who practiced little, if any, agriculture. Their ancestral country encompasses American Southwest (Pueblo and Athabaskan Country) (centered near 32.4°N, 107.0°W).",
    "summary_fi": "Tampachoa (Mansos)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Amerikan lounaisosissa pueblomailla ja kalliolaaksoissa (koordinaateissa noin 32.4°N, 107.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southwestern pueblo and ancestral communities",
    "feature_name_matches": [
      "Tampachoa (Mansos)"
    ]
  },
  {
    "slug": "tanacross-people",
    "name": "Tanacross People",
    "name_fi": "Tanacross-kansa",
    "native_name": "Tanacross",
    "alternate_names": [
      "Tanacross",
      "Tanana Athabaskans"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tanana_Athabaskans",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q4895596",
    "summary_en": "The Tanana Athabaskans, Tanana Athabascans, or Tanana Athapaskans are an Alaskan Athabaskan people from the Athabaskan-speaking ethnolinguistic group. They are the original inhabitants of the Tanana River drainage basin in east-central Alaska Interior, United States and a little part lived in Yukon, Canada. Their ancestral country encompasses Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 63.7°N, 143.9°W).",
    "summary_fi": "Tanacross-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 63.7°N, 143.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Tanacross"
    ]
  },
  {
    "slug": "tanana-people",
    "name": "Tanana People",
    "name_fi": "Tanana-kansa",
    "native_name": "Tanana",
    "alternate_names": [
      "Tanana",
      "Tanana Athabaskans"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tanana_Athabaskans",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q4895596",
    "summary_en": "The Tanana Athabaskans, Tanana Athabascans, or Tanana Athapaskans are an Alaskan Athabaskan people from the Athabaskan-speaking ethnolinguistic group. They are the original inhabitants of the Tanana River drainage basin in east-central Alaska Interior, United States and a little part lived in Yukon, Canada. Their ancestral country encompasses Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 64.4°N, 147.8°W).",
    "summary_fi": "Tanana-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 64.4°N, 147.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Tanana"
    ]
  },
  {
    "slug": "tawahka-people",
    "name": "Tawahka People",
    "name_fi": "Tawahka-kansa",
    "native_name": "Tawahka",
    "alternate_names": [
      "Tawahka",
      "Tawasa people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tawasa_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q12643374",
    "summary_en": "The Tawasa Indian Tribe, also known as the Alibamu Indian Tribe, was located near the Alabama River, in Autauga County, Alabama. The population of the tribe was known to be around 330 members, all living in or near what were known as the Tawasa and Autauga Towns. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 15.0°N, 85.0°W).",
    "summary_fi": "Tawahka-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 15.0°N, 85.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Tawahka"
    ]
  },
  {
    "slug": "tawakoni-people",
    "name": "Tawakoni People",
    "name_fi": "Tawakoni-kansa",
    "native_name": "Tawakoni",
    "alternate_names": [
      "Tawakoni"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "plains-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tawakoni",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q7689203",
    "summary_en": "The Tawakoni are a Southern Plains Native American tribe, closely related to the Wichitas. They historically spoke a Wichita language of the Caddoan language family. Their ancestral country encompasses Great Plains (Plains Indigenous Territory) (centered near 33.1°N, 96.7°W).",
    "summary_fi": "Tawakoni-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Suurten tasankojen (Great Plains) perinnealueilla (koordinaateissa noin 33.1°N, 96.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Plains ancestral encampments",
    "feature_name_matches": [
      "Tawakoni"
    ]
  },
  {
    "slug": "tenino-people",
    "name": "Tenino People",
    "name_fi": "Tenino-kansa",
    "native_name": "Tenino",
    "alternate_names": [
      "Tenino",
      "Tenino people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tenino_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3566326",
    "summary_en": "The Tenino people, commonly known today as the Warm Springs bands, are several Sahaptin Native American subtribes which historically occupied territory located in the North-Central portion of the American state of Oregon. The Tenino people included four localized subtribes — the Tygh or \"Upper Deschutes\" divided in Tayxɫáma, Tiɫxniɫáma and Mliɫáma, the Wyam (Wayámɫáma) (Wayámpam) or \"Lower Deschutes\", also known as \"Celilo Indians\", the Dalles Tenino or \"Tinainu (Tinaynuɫáma)\", also known as \"Tenino proper\"; and the Dock-Spus (Tukspush) (Takspasɫáma) or \"John Day.\". Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 45.0°N, 120.9°W).",
    "summary_fi": "Tenino-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 45.0°N, 120.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Tenino"
    ]
  },
  {
    "slug": "tepehua-people",
    "name": "Tepehua People",
    "name_fi": "Tepehua-kansa",
    "native_name": "Tepehua",
    "alternate_names": [
      "Tepehua",
      "Tepehuas"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tepehuas",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2706493",
    "summary_en": "The Tepehuas are an Indigenous people of Mexico who are based in Hidalgo, Veracruz, and Puebla. They speak Tepehua languages, which belong to the Totonacan language family. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 20.3°N, 97.8°W).",
    "summary_fi": "Tepehua-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 20.3°N, 97.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Tepehua"
    ]
  },
  {
    "slug": "tepehuan-people",
    "name": "Tepehuán People",
    "name_fi": "Tepehuán-kansa",
    "native_name": "Tepehuán",
    "alternate_names": [
      "Tepehuán"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tepehu%C3%A1n",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2025212",
    "summary_en": "The Tepehuán are an Indigenous people of Mexico. They live in Northwestern, Western, and some parts of North-Central Mexico. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 24.7°N, 105.0°W).",
    "summary_fi": "Tepehuán-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 24.7°N, 105.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Tepehuán"
    ]
  },
  {
    "slug": "tequesta-people",
    "name": "Tequesta People",
    "name_fi": "Tequesta-kansa",
    "native_name": "Tequesta",
    "alternate_names": [
      "Tequesta"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tequesta",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2501199",
    "summary_en": "The Tequesta, also Tekesta, Tegesta, Chequesta, Vizcaynos, were a Native American tribe on the Southeastern Atlantic coast of Florida. They had infrequent contact with Europeans and had largely migrated by the middle of the 18th century. Their ancestral country encompasses Florida Peninsula Indigenous Country (centered near 25.9°N, 80.3°W).",
    "summary_fi": "Tequesta-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Floridan niemimaalla ja rannikkovesillä (koordinaateissa noin 25.9°N, 80.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Florida coastal and riverine towns",
    "feature_name_matches": [
      "Tequesta"
    ]
  },
  {
    "slug": "te-mexw-treaty-association-people",
    "name": "Te'mexw Treaty Association People",
    "name_fi": "Te'mexw Treaty Association-kansa",
    "native_name": "Te'mexw Treaty Association",
    "alternate_names": [
      "Te'mexw Treaty Association",
      "Te’mexw Treaty Association"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Te'mexw_Treaty_Association",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q7690708",
    "summary_en": "The Te'mexw Treaty Association handles Treaty negotiations in the BC Treaty Process for a number of First Nations located in the northern Strait of Georgia of British Columbia. The members of the association are former signatories of the Douglas Treaties, a group of treaties signed in the 1850s. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 48.9°N, 124.2°W).",
    "summary_fi": "Te'mexw Treaty Association-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 48.9°N, 124.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Te’mexw Treaty Association"
    ]
  },
  {
    "slug": "tigua-people",
    "name": "Tigua People",
    "name_fi": "Tigua-kansa",
    "native_name": "Tigua",
    "alternate_names": [
      "Tigua",
      "Ysleta del Sur Pueblo"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "pueblo",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ysleta_del_Sur_Pueblo",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q940453",
    "summary_en": "Ysleta del Sur Pueblo or Tigua Pueblo is a Native American Pueblo and federally recognized tribe in the Ysleta section of El Paso, Texas. Its citizens are Southern Tiwa people who had been displaced from Spanish New Mexico from 1680 to 1681 during the Pueblo Revolt against the Spaniards. Their ancestral country encompasses American Southwest (Pueblo and Athabaskan Country) (centered near 31.6°N, 106.3°W).",
    "summary_fi": "Tigua-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Pohjois-Amerikan lounaisosissa pueblomailla ja kalliolaaksoissa (koordinaateissa noin 31.6°N, 106.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southwestern pueblo and ancestral communities",
    "feature_name_matches": [
      "Tigua"
    ]
  },
  {
    "slug": "tjer-di-teribe-broram-people",
    "name": "Tjer-di/Teribe Broram People",
    "name_fi": "Tjer-di/Teribe Broram-kansa",
    "native_name": "Tjer-di/Teribe Broram",
    "alternate_names": [
      "Tjer-di/Teribe Broram"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tjer-di%2FTeribe_Broram",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Mesoamerica (Maya Region & Central America) (centered near 9.0°N, 83.1°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Tjer-di/Teribe Broram-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 9.0°N, 83.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Tjer-di/Teribe Broram"
    ]
  },
  {
    "slug": "tobosos-people",
    "name": "Tobosos People",
    "name_fi": "Tobosos-kansa",
    "native_name": "Tobosos",
    "alternate_names": [
      "Tobosos",
      "Toboso people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Toboso_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q10751656",
    "summary_en": "The Toboso people were an Indigenous group of what is today the northern Bolsón de Mapimí region. They were associated with the Jumano and are sometimes identified as having been part of the Jumano people. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 27.3°N, 103.8°W).",
    "summary_fi": "Tobosos-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 27.3°N, 103.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Tobosos"
    ]
  },
  {
    "slug": "tocobaga-people",
    "name": "Tocobaga People",
    "name_fi": "Tocobaga-kansa",
    "native_name": "Tocobaga",
    "alternate_names": [
      "Tocobaga"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tocobaga",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3513333",
    "summary_en": "Tocobaga was the name of a chiefdom of Native Americans, its chief, and its principal town during the 16th century. The chiefdom was centered around the northern end of Old Tampa Bay, the arm of Tampa Bay that extends between the present-day city of Tampa and northern Pinellas County. Their ancestral country encompasses Florida Peninsula Indigenous Country (centered near 28.0°N, 82.1°W).",
    "summary_fi": "Tocobaga-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Floridan niemimaalla ja rannikkovesillä (koordinaateissa noin 28.0°N, 82.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Florida coastal and riverine towns",
    "feature_name_matches": [
      "Tocobaga"
    ]
  },
  {
    "slug": "tohono-o-odham-people",
    "name": "Tohono O'odham People",
    "name_fi": "Tohono O'odham-kansa",
    "native_name": "Tohono O'odham",
    "alternate_names": [
      "Tohono O'odham",
      "Tohono Oʼodham"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tohono_O%CA%BCodham",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1937531",
    "summary_en": "The Tohono O'odham are a Native American people of the Sonoran Desert, residing primarily in the U.S. state of Arizona and the northern Mexican state of Sonora. Their ancestral country encompasses Aridoamerica and Sonoran Desert (Northern Mexico & Borderlands) (centered near 31.2°N, 111.4°W).",
    "summary_fi": "Tohono O'odham-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Aridoamerikassa ja Sonoran aavikolla Pohjois-Meksikon rajaseudulla (koordinaateissa noin 31.2°N, 111.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Sonoran rancherías and oasis settlements",
    "feature_name_matches": [
      "Tohono O'odham"
    ]
  },
  {
    "slug": "tojolabal-people",
    "name": "Tojolabal People",
    "name_fi": "Tojolabal-kansa",
    "native_name": "Tojolwinik'otik (Tojolabal)",
    "alternate_names": [
      "Tojolwinik'otik (Tojolabal)",
      "Tojolwinik’otik (Tojolabal)",
      "Tojolabal",
      "Tojolabal people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tojolabal_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3514796",
    "summary_en": "The Tojolabal are a Maya people of the Mexican state of Chiapas. They traditionally speak the Tojolabal language. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 16.5°N, 91.8°W).",
    "summary_fi": "Tojolwinik'otik (Tojolabal)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 16.5°N, 91.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Tojolwinik’otik (Tojolabal)"
    ]
  },
  {
    "slug": "tolowa-dee-ni-people",
    "name": "Tolowa Dee-ni' People",
    "name_fi": "Tolowa Dee-ni'-kansa",
    "native_name": "Tolowa Dee-ni'",
    "alternate_names": [
      "Tolowa Dee-ni'",
      "Tolowa Dee-ni’"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tolowa_Dee-ni'",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 42.2°N, 123.6°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Tolowa Dee-ni'-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 42.2°N, 123.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Tolowa Dee-ni’"
    ]
  },
  {
    "slug": "tolupan-people",
    "name": "Tolupan People",
    "name_fi": "Tolupan-kansa",
    "native_name": "Tolupan",
    "alternate_names": [
      "Tolupan"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tolupan",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q202860",
    "summary_en": "The Tolupan or Jicaque people are an Indigenous ethnic group of Honduras, primarily inhabiting the northwest coast of Honduras and the community Montaña de La Flor in central Honduras. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 15.1°N, 87.1°W).",
    "summary_fi": "Tolupan-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 15.1°N, 87.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Tolupan"
    ]
  },
  {
    "slug": "toquaht-people",
    "name": "Toquaht People",
    "name_fi": "Toquaht-kansa",
    "native_name": "Toquaht",
    "alternate_names": [
      "Toquaht"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Toquaht",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 49.2°N, 125.3°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Toquaht-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 49.2°N, 125.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Toquaht"
    ]
  },
  {
    "slug": "totorames-people",
    "name": "Totorames People",
    "name_fi": "Totorames-kansa",
    "native_name": "Totorames",
    "alternate_names": [
      "Totorames"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Totorames",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 22.7°N, 105.4°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Totorames-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 22.7°N, 105.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Totorames"
    ]
  },
  {
    "slug": "tr-ondek-hwech-in-people",
    "name": "Tr'ondëk Hwëch'in People",
    "name_fi": "Tr'ondëk Hwëch'in-kansa",
    "native_name": "Tr'ondëk Hwëch'in",
    "alternate_names": [
      "Tr'ondëk Hwëch'in",
      "Tr’ondëk Hwëch’in",
      "Trʼondëk Hwëchʼin First Nation"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tr%CA%BCond%C3%ABk_Hw%C3%ABch%CA%BCin_First_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1468698",
    "summary_en": "The Trʼondëk Hwëchʼin is a First Nation band government located in the Canadian territory of Yukon. Its main population centre is Dawson City, Yukon. Their ancestral country encompasses Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 64.4°N, 139.0°W).",
    "summary_fi": "Tr'ondëk Hwëch'in-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 64.4°N, 139.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Tr’ondëk Hwëch’in"
    ]
  },
  {
    "slug": "tsankupi-people",
    "name": "Tsankupi People",
    "name_fi": "Tsankupi-kansa",
    "native_name": "Tsankupi",
    "alternate_names": [
      "Tsankupi"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tsankupi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 44.4°N, 123.0°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Tsankupi-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 44.4°N, 123.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Tsankupi"
    ]
  },
  {
    "slug": "tseshaht-people",
    "name": "Tseshaht People",
    "name_fi": "Tseshaht-kansa",
    "native_name": "Tseshaht",
    "alternate_names": [
      "Tseshaht",
      "Tseshaht First Nation"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tseshaht_First_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1610581",
    "summary_en": "Tseshaht First Nation is an amalgamation of many tribes up and down Alberni Inlet and in the Alberni Valley of central Vancouver Island in the Canadian province of British Columbia. They are a member of the Nuu-chah-nulth Tribal Council which includes all other Nuu-chah-nulth-aht peoples except the Pacheedaht First Nation. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 49.2°N, 124.9°W).",
    "summary_fi": "Tseshaht-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 49.2°N, 124.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Tseshaht"
    ]
  },
  {
    "slug": "tse-khene-people",
    "name": "Tse'khene People",
    "name_fi": "Tse'khene-kansa",
    "native_name": "Tse'khene",
    "alternate_names": [
      "Tse'khene",
      "Tse’khene",
      "Sekani"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Sekani",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1186518",
    "summary_en": "Sekani or Tseʼkhene are a First Nations people of the Athabaskan-speaking ethnolinguistic group in the northern interior of British Columbia. Their territory includes the Finlay and Parsnip River drainages of the Rocky Mountain Trench. Their ancestral country encompasses Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 56.0°N, 124.8°W).",
    "summary_fi": "Tse'khene-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 56.0°N, 124.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Tse’khene"
    ]
  },
  {
    "slug": "tsuu-t-ina-people",
    "name": "Tsuu T'ina People",
    "name_fi": "Tsuu T'ina-kansa",
    "native_name": "Tsuu T'ina",
    "alternate_names": [
      "Tsuu T'ina",
      "Tsuutʼina Nation"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tsuut%CA%BCina_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q123033",
    "summary_en": "The Tsuutʼina Nation, also spelled Tsuu Tʼina or Tsu Tʼina, is a First Nation band government in Alberta, Canada. The Tsuu T'ina Nation 145 reserve is located directly west of Calgary, with its eastern edge directly adjacent to the southwest city limits. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 51.4°N, 114.0°W).",
    "summary_fi": "Tsuu T'ina-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 51.4°N, 114.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Tsuu T'ina"
    ]
  },
  {
    "slug": "tsilhqot-in-nen-people",
    "name": "Tŝilhqot'in Nen People",
    "name_fi": "Tŝilhqot'in Nen-kansa",
    "native_name": "Tŝilhqot'in Nen",
    "alternate_names": [
      "Tŝilhqot'in Nen",
      "Tŝilhqot’in Nen"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ts%CC%82ilhqot'in_Nen",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 52.0°N, 124.0°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Tŝilhqot'in Nen-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 52.0°N, 124.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Tŝilhqot’in Nen"
    ]
  },
  {
    "slug": "ts-uubaa-asatx-people",
    "name": "Ts'uubaa-asatx People",
    "name_fi": "Ts'uubaa-asatx-kansa",
    "native_name": "Ts'uubaa-asatx",
    "alternate_names": [
      "Ts'uubaa-asatx",
      "Ts’uubaa-asatx"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ts'uubaa-asatx",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q6475524",
    "summary_en": "The Tsʼuubaa-asatx Nation, previously called Lake Cowichan First Nation, government and reserve is located in Lake Cowichan, British Columbia. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 48.9°N, 124.2°W).",
    "summary_fi": "Ts'uubaa-asatx-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 48.9°N, 124.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Ts’uubaa-asatx"
    ]
  },
  {
    "slug": "tulalip-people",
    "name": "Tulalip People",
    "name_fi": "Tulalip-kansa",
    "native_name": "Tulalip",
    "alternate_names": [
      "Tulalip",
      "Tulalip Tribes"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tulalip_Tribes",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1516298",
    "summary_en": "The Tulalip Tribes of Washington, formerly known as the Tulalip Tribes of the Tulalip Reservation, is a federally recognized tribe of Duwamish, Snohomish, Snoqualmie, Skagit, Suiattle, Samish, and Stillaguamish people. They are South and Central Coast Salish peoples of Indigenous peoples of the Pacific Northwest Coast. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 47.9°N, 121.7°W).",
    "summary_fi": "Tulalip-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 47.9°N, 121.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Tulalip"
    ]
  },
  {
    "slug": "tunxis-people",
    "name": "Tunxis People",
    "name_fi": "Tunxis-kansa",
    "native_name": "Tunxis",
    "alternate_names": [
      "Tunxis"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tunxis",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1453913",
    "summary_en": "The Tunxis were an Indigenous peoples of the Northeastern Woodlands from Connecticut. They were a tribe of Wappinger people who spoke an Eastern Algonquian language and are mainly known to history through their interactions with English settlers in New England. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 41.8°N, 72.8°W).",
    "summary_fi": "Tunxis-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 41.8°N, 72.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Tunxis"
    ]
  },
  {
    "slug": "tututni-people",
    "name": "Tututni People",
    "name_fi": "Tututni-kansa",
    "native_name": "Tututni",
    "alternate_names": [
      "Tututni"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tututni",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3205414",
    "summary_en": "The Tututni tribe is a historic Native American tribe, one of Lower Rogue River Athabascan tribes from southwestern Oregon who signed the 1855 Coast Treaty, and were removed to the Siletz Indian Reservation in Oregon. They traditionally lived along the Rogue River and its tributaries, near the Pacific Coast between the Coquille River on the north and Chetco River in the south. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 42.6°N, 124.3°W).",
    "summary_fi": "Tututni-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 42.6°N, 124.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Tututni"
    ]
  },
  {
    "slug": "tz-utujil-people",
    "name": "Tz'utujil People",
    "name_fi": "Tz'utujil-kansa",
    "native_name": "Tz'utujil",
    "alternate_names": [
      "Tz'utujil",
      "Tzʼutujil people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tz%CA%BCutujil_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2094820",
    "summary_en": "The Tzʼutujil are an Indigenous people, one of the 22 Maya ethnic groups that live in Guatemala. Together with the Xinca, Garífunas and the Ladinos, they make up the 25 ethnic groups in the country. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 14.4°N, 91.3°W).",
    "summary_fi": "Tz'utujil-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 14.4°N, 91.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Tz'utujil"
    ]
  },
  {
    "slug": "amuzgo-people",
    "name": "Amuzgo People",
    "name_fi": "Amuzgo-kansa",
    "native_name": "Tzjon Non/ Tzo'tyio (Amuzgo)",
    "alternate_names": [
      "Tzjon Non/ Tzo'tyio (Amuzgo)",
      "Amuzgo",
      "Amuzgos"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Amuzgos",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1288574",
    "summary_en": "The Amuzgos are an Indigenous people of Mexico. They primarily live in a region along the Guerrero/Oaxaca border, chiefly in and around four municipalities: Xochistlahuaca, Tlacoachistlahuaca and Ometepec in Guerrero, and San Pedro Amuzgos in Oaxaca. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 16.8°N, 98.3°W).",
    "summary_fi": "Tzjon Non/ Tzo'tyio (Amuzgo)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 16.8°N, 98.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Tzjon Non/ Tzo'tyio (Amuzgo)"
    ]
  },
  {
    "slug": "tubatulabal-people",
    "name": "Tübatulabal People",
    "name_fi": "Tübatulabal-kansa",
    "native_name": "Tübatulabal",
    "alternate_names": [
      "Tübatulabal"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/T%C3%BCbatulabal",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1566605",
    "summary_en": "The Tübatulabal are an indigenous people of Kern River Valley in the Sierra Nevada range of California, including part of the area that makes up Sequoia National Park in the modern day. They may have been the first people to make this area their permanent home. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 36.1°N, 118.3°W).",
    "summary_fi": "Tübatulabal-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 36.1°N, 118.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Tübatulabal"
    ]
  },
  {
    "slug": "t-cho-nde-people",
    "name": "Tłı̨chǫ Ndè People",
    "name_fi": "Tłı̨chǫ Ndè-kansa",
    "native_name": "Tłı̨chǫ Ndè",
    "alternate_names": [
      "Tłı̨chǫ Ndè",
      "Tłı̨chǫ"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/T%C5%82%C4%B1%CC%A8ch%C7%AB",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1186527",
    "summary_en": "The Tłı̨chǫ people, sometimes spelled Tlicho and also known as the Dogrib, are a Dene First Nations people of the Athabaskan-speaking ethnolinguistic group living in the Northwest Territories of Canada. Their ancestral country encompasses Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 64.1°N, 114.7°W).",
    "summary_fi": "Tłı̨chǫ Ndè-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 64.1°N, 114.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Tłı̨chǫ Ndè"
    ]
  },
  {
    "slug": "uchucklesaht-people",
    "name": "Uchucklesaht People",
    "name_fi": "Uchucklesaht-kansa",
    "native_name": "Uchucklesaht",
    "alternate_names": [
      "Uchucklesaht"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Uchucklesaht",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 49.0°N, 125.0°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Uchucklesaht-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 49.0°N, 125.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Uchucklesaht"
    ]
  },
  {
    "slug": "ucluelet-people",
    "name": "Ucluelet People",
    "name_fi": "Ucluelet-kansa",
    "native_name": "Ucluelet",
    "alternate_names": [
      "Ucluelet"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ucluelet",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q994047",
    "summary_en": "Ucluelet is a district municipality on the Ucluelet Peninsula, on the west coast of Vancouver Island in British Columbia, Canada. Ucluelet comes from Yuułuʔił which means \"people of the safe harbour\" in the indigenous Nuu-chah-nulth language and is the homeland of the Yuułuʔiłʔatḥ. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 49.1°N, 125.0°W).",
    "summary_fi": "Ucluelet-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 49.1°N, 125.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Ucluelet"
    ]
  },
  {
    "slug": "ulwas-people",
    "name": "Ulwas People",
    "name_fi": "Ulwas-kansa",
    "native_name": "Ulwas",
    "alternate_names": [
      "Ulwas",
      "U'wa people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/U'wa_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3138755",
    "summary_en": "The U'wa are an indigenous people living in the cloud forests of northeastern Colombia. Historically, the U'wa numbered as many as 20,000, scattered over a homeland that extended across the Venezuela-Colombia border. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 13.1°N, 84.1°W).",
    "summary_fi": "Ulwas-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 13.1°N, 84.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Ulwas"
    ]
  },
  {
    "slug": "upper-kuskokwim-people",
    "name": "Upper Kuskokwim People",
    "name_fi": "Upper Kuskokwim-kansa",
    "native_name": "Upper Kuskokwim",
    "alternate_names": [
      "Upper Kuskokwim",
      "Upper Kuskokwim people"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Upper_Kuskokwim_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q12635022",
    "summary_en": "The Upper Kuskokwim people or Upper Kuskokwim Athabaskans, Upper Kuskokwim Athabascans, and historically Kolchan, Goltsan, Tundra Kolosh, and McGrath Ingalik are an Alaskan Athabaskan people of the Athabaskan-speaking ethnolinguistic group. First delineation of this ethnolinguistic group was described by anthropologist Edward Howard Hosley in 1968, as Kolchan. Their ancestral country encompasses Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 62.9°N, 154.3°W).",
    "summary_fi": "Upper Kuskokwim-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 62.9°N, 154.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Upper Kuskokwim"
    ]
  },
  {
    "slug": "upper-tanana-people",
    "name": "Upper Tanana People",
    "name_fi": "Upper Tanana-kansa",
    "native_name": "Upper Tanana",
    "alternate_names": [
      "Upper Tanana",
      "Upper Tanana language"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Upper_Tanana_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q28281",
    "summary_en": "Upper Tanana is an endangered Athabaskan language spoken in eastern Interior Alaska, United States, mainly in the villages of Northway, Tetlin, and Tok, and adjacent areas of the Canadian territory of Yukon. In 2000 there were fewer than 100 speakers, and the language was no longer being acquired by children. Their ancestral country encompasses Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 62.7°N, 141.9°W).",
    "summary_fi": "Upper Tanana-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 62.7°N, 141.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Upper Tanana"
    ]
  },
  {
    "slug": "uspantec-people",
    "name": "Uspantec People",
    "name_fi": "Uspantec-kansa",
    "native_name": "Uspantec",
    "alternate_names": [
      "Uspantec",
      "Uspantek language"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Uspantek_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36728",
    "summary_en": "Uspantek is a Mayan language of Guatemala, closely related to Kʼicheʼ. It is spoken in the Uspantán and Playa Grande Ixcán municipios, in the Department El Quiché. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 15.4°N, 90.9°W).",
    "summary_fi": "Uspantec-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 15.4°N, 90.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Uspantec"
    ]
  },
  {
    "slug": "vanyume-people",
    "name": "Vanyumé People",
    "name_fi": "Vanyumé-kansa",
    "native_name": "Vanyumé",
    "alternate_names": [
      "Vanyumé"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Vanyum%C3%A9",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Southern California & Inland Indigenous Lands (centered near 34.8°N, 117.0°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Vanyumé-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 34.8°N, 117.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southern California ancestral villages",
    "feature_name_matches": [
      "Vanyumé"
    ]
  },
  {
    "slug": "vuntut-gwitchin-people",
    "name": "Vuntut Gwitchin People",
    "name_fi": "Vuntut Gwitchin-kansa",
    "native_name": "Vuntut Gwitchin",
    "alternate_names": [
      "Vuntut Gwitchin"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Vuntut_Gwitchin",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 66.2°N, 138.1°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Vuntut Gwitchin-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 66.2°N, 138.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "Vuntut Gwitchin"
    ]
  },
  {
    "slug": "dawnland-confederacy-people",
    "name": "Dawnland Confederacy People",
    "name_fi": "Dawnland Confederacy-kansa",
    "native_name": "Wabanaki (Dawnland Confederacy)",
    "alternate_names": [
      "Wabanaki (Dawnland Confederacy)",
      "Dawnland Confederacy",
      "Wabanaki Confederacy"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wabanaki_Confederacy",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1322019",
    "summary_en": "The Wabanaki Confederacy is a North American First Nations and Native American confederation of five principal Eastern Algonquian nations: the Abenaki, Mi'kmaq, Wolastoqiyik, Passamaquoddy (Peskotomuhkati), and Penobscot. Their ancestral country encompasses Wabanaki and Maritime Northeast (centered near 45.8°N, 68.9°W).",
    "summary_fi": "Wabanaki (Dawnland Confederacy)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Wabanakin ja merellisen koillisen rannikkoalueilla (koordinaateissa noin 45.8°N, 68.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Maritime traditional encampments",
    "feature_name_matches": [
      "Wabanaki (Dawnland Confederacy)"
    ]
  },
  {
    "slug": "woccon-people",
    "name": "Woccon People",
    "name_fi": "Woccon-kansa",
    "native_name": "Waccamaw (Woccon)",
    "alternate_names": [
      "Waccamaw (Woccon)",
      "Woccon",
      "Woccon language"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Woccon_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3569569",
    "summary_en": "Woccon was one of two attested Catawban languages of what is now the Eastern United States. It is attested only in a vocabulary of 143 words, printed in a 1709 compilation by English colonist John Lawson of Carolina. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 34.2°N, 78.9°W).",
    "summary_fi": "Waccamaw (Woccon)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 34.2°N, 78.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Waccamaw (Woccon)"
    ]
  },
  {
    "slug": "waco-people",
    "name": "Waco People",
    "name_fi": "Waco-kansa",
    "native_name": "Waco",
    "alternate_names": [
      "Waco",
      "Waco people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "plains-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Waco_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q7958867",
    "summary_en": "The Waco of the Wichita people are a Southern Plains Native American tribe that inhabited northeastern Texas. Today, they are enrolled members of the federally recognized Wichita and Affiliated Tribes, headquartered in Anadarko, Oklahoma. Their ancestral country encompasses Great Plains (Plains Indigenous Territory) (centered near 31.5°N, 97.2°W).",
    "summary_fi": "Waco-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Suurten tasankojen (Great Plains) perinnealueilla (koordinaateissa noin 31.5°N, 97.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Plains ancestral encampments",
    "feature_name_matches": [
      "Waco"
    ]
  },
  {
    "slug": "wahkiakum-people",
    "name": "Wahkiakum People",
    "name_fi": "Wahkiakum-kansa",
    "native_name": "Wahkiakum",
    "alternate_names": [
      "Wahkiakum",
      "Wahkiakum County, Washington"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wahkiakum_County%2C_Washington",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q484015",
    "summary_en": "Wahkiakum County is a county located in the U.S. state of Washington. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 46.3°N, 123.4°W).",
    "summary_fi": "Wahkiakum-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 46.3°N, 123.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Wahkiakum"
    ]
  },
  {
    "slug": "wahpekute-people",
    "name": "Wahpekute People",
    "name_fi": "Wahpekute-kansa",
    "native_name": "Wahpekute",
    "alternate_names": [
      "Wahpekute",
      "Dakota people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "plains-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Dakota_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q16148367",
    "summary_en": "The Dakota are a Native American tribe and First Nations band government in North America. They compose two of the three main subcultures of the Sioux people, and are typically divided into the Eastern Dakota and the Western Dakota. Their ancestral country encompasses Great Plains (Plains Indigenous Territory) (centered near 44.7°N, 94.2°W).",
    "summary_fi": "Wahpekute-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Suurten tasankojen (Great Plains) perinnealueilla (koordinaateissa noin 44.7°N, 94.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Plains ancestral encampments",
    "feature_name_matches": [
      "Wahpekute"
    ]
  },
  {
    "slug": "wahpeton-people",
    "name": "Wahpeton People",
    "name_fi": "Wahpeton-kansa",
    "native_name": "Wahpeton",
    "alternate_names": [
      "Wahpeton"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wahpeton",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Northeastern Woodlands and Great Lakes Basin (centered near 43.6°N, 93.3°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Wahpeton-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 43.6°N, 93.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Wahpeton"
    ]
  },
  {
    "slug": "wanapum-people",
    "name": "Wanapum People",
    "name_fi": "Wanapum-kansa",
    "native_name": "Wanapum",
    "alternate_names": [
      "Wanapum"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wanapum",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q3512367",
    "summary_en": "The Wanapum are a Sahaptin-speaking Native American people who live along the Columbia River in Washington state, United States, primarily in the area around Priest Rapids. About 60 Wanapum still live near the present day site of Priest Rapids Dam. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 46.7°N, 119.6°W).",
    "summary_fi": "Wanapum-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 46.7°N, 119.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Wanapum"
    ]
  },
  {
    "slug": "wangunks-people",
    "name": "Wangunks People",
    "name_fi": "Wangunks-kansa",
    "native_name": "Wangunks",
    "alternate_names": [
      "Wangunks",
      "Wangunk"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wangunk",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q24060836",
    "summary_en": "The Wangunk or Mattabesec refers to a collection of closely related Indigenous peoples of the Northeastern Woodlands all from central Connecticut. Many were members of the Wappinger, a Munsee-speaking confederacy. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 41.7°N, 72.6°W).",
    "summary_fi": "Wangunks-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 41.7°N, 72.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Wangunks"
    ]
  },
  {
    "slug": "wappinger-people",
    "name": "Wappinger People",
    "name_fi": "Wappinger-kansa",
    "native_name": "Wappinger",
    "alternate_names": [
      "Wappinger"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wappinger",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1811930",
    "summary_en": "The Wappinger were an Eastern Algonquian Munsee-speaking Native American people from what is now southern New York and western Connecticut. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 41.2°N, 73.5°W).",
    "summary_fi": "Wappinger-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 41.2°N, 73.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Wappinger"
    ]
  },
  {
    "slug": "wappo-people",
    "name": "Wappo People",
    "name_fi": "Wappo-kansa",
    "native_name": "Wappo",
    "alternate_names": [
      "Wappo"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wappo",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2031854",
    "summary_en": "The Wappo are an Indigenous people of northern California. Their traditional homelands are in Napa Valley, the south shore of Clear Lake, Alexander Valley, and Russian River valley. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 38.7°N, 122.6°W).",
    "summary_fi": "Wappo-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 38.7°N, 122.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Wappo"
    ]
  },
  {
    "slug": "warraskoyack-people",
    "name": "Warraskoyack People",
    "name_fi": "Warraskoyack-kansa",
    "native_name": "Warraskoyack",
    "alternate_names": [
      "Warraskoyack",
      "Warrosquyoake Shire"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Warrosquyoake_Shire",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q7970850",
    "summary_en": "Warrosquoake Shire was officially formed in 1634 in the Virginia colony, but had already been known as \"Warascoyack County\" before this. It was named for an Algonquian-speaking tribe that was part of the Powhatan Confederacy. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 37.0°N, 76.8°W).",
    "summary_fi": "Warraskoyack-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 37.0°N, 76.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Warraskoyack"
    ]
  },
  {
    "slug": "wasco-and-wishram-people",
    "name": "Wasco and Wishram People",
    "name_fi": "Wasco and Wishram-kansa",
    "native_name": "Wasco and Wishram",
    "alternate_names": [
      "Wasco and Wishram"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wasco_and_Wishram",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 45.5°N, 121.3°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Wasco and Wishram-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 45.5°N, 121.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Wasco and Wishram"
    ]
  },
  {
    "slug": "wateree-people",
    "name": "Wateree People",
    "name_fi": "Wateree-kansa",
    "native_name": "Wateree",
    "alternate_names": [
      "Wateree",
      "Wateree people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wateree_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q201711",
    "summary_en": "The Wateree were a Native American tribe in the interior of the present-day Carolinas. They probably belonged to the Siouan-Catawban language family. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 33.9°N, 80.4°W).",
    "summary_fi": "Wateree-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 33.9°N, 80.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Wateree"
    ]
  },
  {
    "slug": "waxhaw-people",
    "name": "Waxhaw People",
    "name_fi": "Waxhaw-kansa",
    "native_name": "Waxhaw",
    "alternate_names": [
      "Waxhaw",
      "Waxhaw people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Waxhaw_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q968360",
    "summary_en": "The Waxhaw people were a Native American tribe who historically lived in present-day counties of Lancaster, in South Carolina; and Union and Mecklenburg in North Carolina, around the area of present-day Charlotte. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 34.8°N, 80.6°W).",
    "summary_fi": "Waxhaw-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 34.8°N, 80.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Waxhaw"
    ]
  },
  {
    "slug": "waymaq-people",
    "name": "Waymaq People",
    "name_fi": "Waymaq-kansa",
    "native_name": "Waymaq",
    "alternate_names": [
      "Waymaq",
      "Warnman people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Warnman_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q39088720",
    "summary_en": "The Warnman, also spelt Wanman, are an Aboriginal Australian people of Western Australia's Pilbara region. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 41.2°N, 122.1°W).",
    "summary_fi": "Waymaq-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 41.2°N, 122.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Waymaq"
    ]
  },
  {
    "slug": "we-wai-kai-people",
    "name": "We Wai Kai People",
    "name_fi": "We Wai Kai-kansa",
    "native_name": "We Wai Kai",
    "alternate_names": [
      "We Wai Kai",
      "We Wai Kai Nation"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/We_Wai_Kai_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q7977815",
    "summary_en": "The We Wai Kai Nation, also known as the Cape Mudge First Nation, is the band government of the We Wai Kai subgroup of the Laich-kwil-tach group of the Kwakwaka'wakw peoples, based on Quadra Island offshore from Campbell River, British Columbia, Canada, which is on the east coast of Vancouver Island at the northern end of the Strait of Georgia. The Laich-kwil-tach include the Wei Wai Kum, who are organized as the Campbell River First Nation, and the Kwiakah Nation, whose traditional territory is in the Discovery Islands to the northeast of that city and on the adjoining mainland coast. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 49.9°N, 125.6°W).",
    "summary_fi": "We Wai Kai-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 49.9°N, 125.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "We Wai Kai"
    ]
  },
  {
    "slug": "we-wai-kum-people",
    "name": "We Wai Kum People",
    "name_fi": "We Wai Kum-kansa",
    "native_name": "We Wai Kum",
    "alternate_names": [
      "We Wai Kum",
      "Wei Wai Kum First Nation"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wei_Wai_Kum_First_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q5028135",
    "summary_en": "The Wei Wai Kum First Nation, also called Campbell River First Nation, are the band government of one of the component groups of the Laich-kwil-tach or Southern Kwakiutl subgroup of the Kwakwaka'wakw peoples, based at the city of Campbell River. They are part of the Hamatla Treaty Society. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 49.9°N, 125.5°W).",
    "summary_fi": "We Wai Kum-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 49.9°N, 125.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "We Wai Kum"
    ]
  },
  {
    "slug": "wendake-nionwentsio-people",
    "name": "Wendake-Nionwentsïo People",
    "name_fi": "Wendake-Nionwentsïo-kansa",
    "native_name": "Wendake-Nionwentsïo",
    "alternate_names": [
      "Wendake-Nionwentsïo"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wendake-Nionwents%C3%AFo",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Wabanaki and Maritime Northeast (centered near 45.9°N, 70.9°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Wendake-Nionwentsïo-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Wabanakin ja merellisen koillisen rannikkoalueilla (koordinaateissa noin 45.9°N, 70.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Maritime traditional encampments",
    "feature_name_matches": [
      "Wendake-Nionwentsïo"
    ]
  },
  {
    "slug": "wenrohronon-people",
    "name": "Wenrohronon People",
    "name_fi": "Wenrohronon-kansa",
    "native_name": "Wenrohronon",
    "alternate_names": [
      "Wenrohronon"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wenrohronon",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1356197",
    "summary_en": "The Wenrohronon or Wenro people were an Indigenous people of the Northeastern Woodlands, historically from what is now western New York. They were an Iroquoian people who are thought to have been closely related to the Neutral. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 43.1°N, 78.4°W).",
    "summary_fi": "Wenrohronon-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 43.1°N, 78.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Wenrohronon"
    ]
  },
  {
    "slug": "werowocomoco-people",
    "name": "Werowocomoco People",
    "name_fi": "Werowocomoco-kansa",
    "native_name": "Werowocomoco",
    "alternate_names": [
      "Werowocomoco"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Werowocomoco",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q301064",
    "summary_en": "Werowocomoco was a village that served as the headquarters of Chief Powhatan. The name Werowocomoco comes from the Powhatan werowans (weroance), meaning \"leader\" in English; and komakah (-comoco), \"settlement\". Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 37.4°N, 76.5°W).",
    "summary_fi": "Werowocomoco-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 37.4°N, 76.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Werowocomoco"
    ]
  },
  {
    "slug": "western-mono-monache-people",
    "name": "Western Mono/Monache People",
    "name_fi": "Western Mono/Monache-kansa",
    "native_name": "Western Mono/Monache",
    "alternate_names": [
      "Western Mono/Monache"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Western_Mono%2FMonache",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in California Indigenous Country (Pacific Coast & Central Valley) (centered near 37.5°N, 119.2°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Western Mono/Monache-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 37.5°N, 119.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Western Mono/Monache"
    ]
  },
  {
    "slug": "western-nehantick-people",
    "name": "Western Nehântick People",
    "name_fi": "Western Nehântick-kansa",
    "native_name": "Western Nehântick",
    "alternate_names": [
      "Western Nehântick"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Western_Neh%C3%A2ntick",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Northeastern Woodlands and Great Lakes Basin (centered near 41.4°N, 72.3°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Western Nehântick-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 41.4°N, 72.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Western Nehântick"
    ]
  },
  {
    "slug": "wet-suwet-en-yintikh-people",
    "name": "Wet'suwet'en Yintikh People",
    "name_fi": "Wet'suwet'en Yintikh-kansa",
    "native_name": "Wet'suwet'en Yintikh",
    "alternate_names": [
      "Wet'suwet'en Yintikh"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wet'suwet'en_Yintikh",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 54.3°N, 126.7°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Wet'suwet'en Yintikh-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 54.3°N, 126.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Wet'suwet'en Yintikh"
    ]
  },
  {
    "slug": "weyanock-people",
    "name": "Weyanock People",
    "name_fi": "Weyanock-kansa",
    "native_name": "Weyanock",
    "alternate_names": [
      "Weyanock",
      "Weyanoke people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Weyanoke_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q111940559",
    "summary_en": "The Weyanoke people were an Indigenous people of the Northeastern Woodlands. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 37.3°N, 77.2°W).",
    "summary_fi": "Weyanock-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 37.3°N, 77.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Weyanock"
    ]
  },
  {
    "slug": "whilkut-people",
    "name": "Whilkut People",
    "name_fi": "Whilkut-kansa",
    "native_name": "Whilkut",
    "alternate_names": [
      "Whilkut"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Whilkut",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q7993643",
    "summary_en": "The Whilkut also known as \"(Upper) Redwood Creek Indians\" or \"Mad River Indians\" were a Pacific Coast Athabaskan tribe speaking a dialect similar to the Hupa to the northeast and Chilula to the north, who inhabited the area on or near the Upper Redwood Creek and along the Mad River except near its mouth, up to Iaqua Butte, and some settlement in Grouse Creek in the Trinity River drainage in Northwestern California, before contact with Europeans. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 40.8°N, 123.9°W).",
    "summary_fi": "Whilkut-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 40.8°N, 123.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Whilkut"
    ]
  },
  {
    "slug": "white-river-kluane-people",
    "name": "White River-Kluane People",
    "name_fi": "White River-Kluane-kansa",
    "native_name": "White River-Kluane",
    "alternate_names": [
      "White River-Kluane"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/White_River-Kluane",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Subarctic Western Canada & Alaska (Dene & Athabaskan Lands) (centered near 61.6°N, 139.6°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "White River-Kluane-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Länsi-Kanadan ja Alaskan subarktisella havumetsäalueella (koordinaateissa noin 61.6°N, 139.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Northern boreal encampments",
    "feature_name_matches": [
      "White River-Kluane"
    ]
  },
  {
    "slug": "wicocomico-people",
    "name": "Wicocomico People",
    "name_fi": "Wicocomico-kansa",
    "native_name": "Wicocomico",
    "alternate_names": [
      "Wicocomico"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wicocomico",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q7998466",
    "summary_en": "The Wicocomico also spelled Wicomico or Wicacoan, were an Algonquian-speaking tribe who lived in Northumberland County, Virginia, at the head and slightly north of the Little Wicomico River. Their ancestral country encompasses Northeastern Woodlands and Great Lakes Basin (centered near 37.9°N, 76.3°W).",
    "summary_fi": "Wicocomico-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 37.9°N, 76.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Wicocomico"
    ]
  },
  {
    "slug": "willapa-people",
    "name": "Willapa People",
    "name_fi": "Willapa-kansa",
    "native_name": "Willapa",
    "alternate_names": [
      "Willapa",
      "Kwalhioqua–Clatskanie people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kwalhioqua%E2%80%93Clatskanie_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q8003346",
    "summary_en": "The Willapa or Willoopah, also known as Kwalhioqua / Kwalhiokwa, were a Northern Athapaskan-speaking people in southwestern Washington, United States. Their territory was the valley of the Willapa River and the prairie between the headwaters of the Chehalis and Cowlitz Rivers. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 46.6°N, 123.7°W).",
    "summary_fi": "Willapa-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 46.6°N, 123.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Willapa"
    ]
  },
  {
    "slug": "mam-people",
    "name": "Mam People",
    "name_fi": "Mam-kansa",
    "native_name": "Winaq Qo' (Mam)",
    "alternate_names": [
      "Winaq Qo' (Mam)",
      "Winaq Qo’ (Mam)",
      "Mam",
      "Mam people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mam_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2563726",
    "summary_en": "The Mam are an Indigenous Maya people in the western highlands of Guatemala and in south-western Mexico who speak the Mam language. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 15.2°N, 92.1°W).",
    "summary_fi": "Winaq Qo' (Mam)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 15.2°N, 92.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Winaq Qo’ (Mam)"
    ]
  },
  {
    "slug": "winefelly-people",
    "name": "Winefelly People",
    "name_fi": "Winefelly-kansa",
    "native_name": "Winefelly",
    "alternate_names": [
      "Winefelly"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Winefelly",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Pacific Northwest Coast & Columbia Plateau (centered near 43.9°N, 122.7°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Winefelly-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 43.9°N, 122.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Winefelly"
    ]
  },
  {
    "slug": "tzeltal-people",
    "name": "Tzeltal People",
    "name_fi": "Tzeltal-kansa",
    "native_name": "Winik Atel (Tzeltal)",
    "alternate_names": [
      "Winik Atel (Tzeltal)",
      "Tzeltal",
      "Tzeltal people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tzeltal_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q512355",
    "summary_en": "The Tzeltal are a Maya people of Mexico, who chiefly reside in the highlands of Chiapas. The Tzeltal language belongs to the Tzeltalan subgroup of Maya languages. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 16.8°N, 92.0°W).",
    "summary_fi": "Winik Atel (Tzeltal)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 16.8°N, 92.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Winik Atel (Tzeltal)"
    ]
  },
  {
    "slug": "ch-ol-people",
    "name": "Ch'ol People",
    "name_fi": "Ch'ol-kansa",
    "native_name": "Winikon bä lojon/Xk'ukwits/Ajlumob/Otulob (Ch'ol)",
    "alternate_names": [
      "Winikon bä lojon/Xk'ukwits/Ajlumob/Otulob (Ch'ol)",
      "Winikon bä lojon/Xk’ukwits/Ajlumob/Otulob (Ch'ol)",
      "Ch'ol",
      "Chʼol people"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ch%CA%BCol_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1274273",
    "summary_en": "The Chʼol are an Indigenous people of Mexico, mainly in the northern Chiapas highlands in the state of Chiapas. As one of the Maya peoples, their Indigenous language is from the Mayan language family, known also as Chʼol. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 17.5°N, 91.9°W).",
    "summary_fi": "Winikon bä lojon/Xk'ukwits/Ajlumob/Otulob (Ch'ol)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 17.5°N, 91.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Winikon bä lojon/Xk’ukwits/Ajlumob/Otulob (Ch'ol)"
    ]
  },
  {
    "slug": "winnimem-wintu-people",
    "name": "Winnimem Wintu People",
    "name_fi": "Winnimem Wintu-kansa",
    "native_name": "Winnimem Wintu",
    "alternate_names": [
      "Winnimem Wintu"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Winnimem_Wintu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in California Indigenous Country (Pacific Coast & Central Valley) (centered near 41.0°N, 122.2°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Winnimem Wintu-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 41.0°N, 122.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Winnimem Wintu"
    ]
  },
  {
    "slug": "northern-wintu-people",
    "name": "Northern Wintu People",
    "name_fi": "Northern Wintu-kansa",
    "native_name": "Wintʰu• Po•m (Northern Wintu)",
    "alternate_names": [
      "Wintʰu• Po•m (Northern Wintu)",
      "Northern Wintu",
      "Wintu language"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wintu_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q56754",
    "summary_en": "Wintu is a Wintuan language formerly spoken by the Wintu people of Northern California. It is the northernmost member of the Wintun family of languages. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 40.8°N, 122.6°W).",
    "summary_fi": "Wintʰu• Po•m (Northern Wintu)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 40.8°N, 122.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Wintʰu• Po•m (Northern Wintu)"
    ]
  },
  {
    "slug": "winyah-people",
    "name": "Winyah People",
    "name_fi": "Winyah-kansa",
    "native_name": "Winyah",
    "alternate_names": [
      "Winyah"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Winyah",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q8026655",
    "summary_en": "The Winyah are a historic Indigenous people of the Southeastern Woodlands within the Carolinas. Their traditional territory lay in the South Carolina Lowcountry, near Winyah Bay, the Black River, and the lower course of the Pee Dee River, in the present-day counties of Clarendon, Williamsburg, and Georgetown. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 33.4°N, 79.4°W).",
    "summary_fi": "Winyah-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 33.4°N, 79.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Winyah"
    ]
  },
  {
    "slug": "wiyot-people",
    "name": "Wiyot People",
    "name_fi": "Wiyot-kansa",
    "native_name": "Wiyot",
    "alternate_names": [
      "Wiyot"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wiyot",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2329815",
    "summary_en": "The Wiyot are an Indigenous people of California living near Humboldt Bay, California, and a small surrounding area. They are culturally similar to the Yurok people. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 40.7°N, 124.2°W).",
    "summary_fi": "Wiyot-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 40.7°N, 124.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Wiyot"
    ]
  },
  {
    "slug": "oweekeno-people",
    "name": "Oweekeno People",
    "name_fi": "Oweekeno-kansa",
    "native_name": "Wuikinuxv (Oweekeno)",
    "alternate_names": [
      "Wuikinuxv (Oweekeno)",
      "Oweekeno",
      "Wuikinuxv"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wuikinuxv",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q8039112",
    "summary_en": "The Wuikinuxv are an Indigenous First Nations people of the Central Coast region of the Canadian province of British Columbia, Canada, located around Rivers Inlet and Owikeno Lake, to the north of Queen Charlotte Strait. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 51.7°N, 126.6°W).",
    "summary_fi": "Wuikinuxv (Oweekeno)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 51.7°N, 126.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Wuikinuxv (Oweekeno)"
    ]
  },
  {
    "slug": "xixime-people",
    "name": "Xixime People",
    "name_fi": "Xixime-kansa",
    "native_name": "Xixime",
    "alternate_names": [
      "Xixime",
      "Xiximes"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Xiximes",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q597620",
    "summary_en": "The Xixime were an indigenous people who inhabited a portion of the Sierra Madre Occidental mountains in the present day states of Durango and Sinaloa, Mexico. The Xixime are noted for their reported practice of cannibalism and resistance to Spanish colonization in the form of the Xixime Rebellion of 1610. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 24.0°N, 106.0°W).",
    "summary_fi": "Xixime-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 24.0°N, 106.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Xixime"
    ]
  },
  {
    "slug": "yahooskin-people",
    "name": "Yahooskin People",
    "name_fi": "Yahooskin-kansa",
    "native_name": "Yahooskin",
    "alternate_names": [
      "Yahooskin",
      "Klamath people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Klamath_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q498844",
    "summary_en": "The Klamath people are a Native American tribe of the Plateau culture area in Southern Oregon and Northern California. Today Klamath people are enrolled in the federally recognized tribes:Klamath Tribes, Oregon\nQuartz Valley Indian Community, California. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 42.9°N, 120.5°W).",
    "summary_fi": "Yahooskin-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 42.9°N, 120.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Yahooskin"
    ]
  },
  {
    "slug": "yakina-people",
    "name": "Yakina People",
    "name_fi": "Yakina-kansa",
    "native_name": "Yakina",
    "alternate_names": [
      "Yakina"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yakina",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q19655430",
    "summary_en": "Yakina is a rural locality in Leninskoye Rural Settlement, Kudymkarsky District, Perm Krai, Russia. The population was 13 as of 2010. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 44.6°N, 123.9°W).",
    "summary_fi": "Yakina-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 44.6°N, 123.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Yakina"
    ]
  },
  {
    "slug": "yamassee-people",
    "name": "Yamassee People",
    "name_fi": "Yamassee-kansa",
    "native_name": "Yamassee",
    "alternate_names": [
      "Yamassee",
      "Yamasee"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yamasee",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2165898",
    "summary_en": "The Yamasee were a multiethnic confederation of Native Americans (Indians) consisting of the survivors of several chiefdoms in Georgia destroyed by disruptions caused by European explorers and settlers in the 16th and 17th centuries. First coming to the attention of the Spanish in 1663, the Yamasee initially lived near the sea coast from northern Florida to South Carolina. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 32.5°N, 81.1°W).",
    "summary_fi": "Yamassee-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 32.5°N, 81.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Yamassee"
    ]
  },
  {
    "slug": "yamaye-people",
    "name": "Yamaye People",
    "name_fi": "Yamaye-kansa",
    "native_name": "Yamayeka (Yamaye)",
    "alternate_names": [
      "Yamayeka (Yamaye)",
      "Yamaye",
      "Pre-Columbian Jamaica"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pre-Columbian_Jamaica",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q21070968",
    "summary_en": "Around 650 AD, Jamaica was settled by the people of the Ostionoid culture, who likely came from South America. Alligator Pond in Manchester Parish and Little River in St. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 18.2°N, 77.3°W).",
    "summary_fi": "Yamayeka (Yamaye)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 18.2°N, 77.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Yamayeka (Yamaye)"
    ]
  },
  {
    "slug": "yamhill-people",
    "name": "Yamhill People",
    "name_fi": "Yamhill-kansa",
    "native_name": "Yamhill",
    "alternate_names": [
      "Yamhill",
      "Kalapuya"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kalapuya",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1269663",
    "summary_en": "The Kalapuya or Kʼalapʰuya are a Native American people, which had eight independent groups speaking three mutually intelligible dialects. The Kalapuya tribes' traditional homelands were the Willamette Valley of present-day western Oregon in the United States, an area bounded by the Cascade Range to the east, the Oregon Coast Range at the west, the Columbia River at the north, to the Calapooya Mountains of the Umpqua River at the south. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 45.1°N, 123.4°W).",
    "summary_fi": "Yamhill-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 45.1°N, 123.4°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Yamhill"
    ]
  },
  {
    "slug": "yana-people",
    "name": "Yana People",
    "name_fi": "Yana-kansa",
    "native_name": "Yana",
    "alternate_names": [
      "Yana",
      "Yana people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yana_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1434198",
    "summary_en": "The Yana are a group of Native Americans indigenous to Northern California in the central Sierra Nevada, on the western side of the range. Their lands, prior to encroachment by white settlers, bordered the Pit and Feather Rivers. Their ancestral country encompasses California Indigenous Country (Pacific Coast & Central Valley) (centered near 40.4°N, 121.8°W).",
    "summary_fi": "Yana-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 40.4°N, 121.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Traditional village ranchería",
    "feature_name_matches": [
      "Yana"
    ]
  },
  {
    "slug": "yanktonai-people",
    "name": "Yanktonai People",
    "name_fi": "Yanktonai-kansa",
    "native_name": "Yanktonai",
    "alternate_names": [
      "Yanktonai",
      "Dakota people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "plains-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Dakota_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q16148367",
    "summary_en": "The Dakota are a Native American tribe and First Nations band government in North America. They compose two of the three main subcultures of the Sioux people, and are typically divided into the Eastern Dakota and the Western Dakota. Their ancestral country encompasses Great Plains (Plains Indigenous Territory) (centered near 46.6°N, 98.9°W).",
    "summary_fi": "Yanktonai-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Suurten tasankojen (Great Plains) perinnealueilla (koordinaateissa noin 46.6°N, 98.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Plains ancestral encampments",
    "feature_name_matches": [
      "Yanktonai"
    ]
  },
  {
    "slug": "yekooche-people",
    "name": "Yekooche People",
    "name_fi": "Yekooche-kansa",
    "native_name": "Yekooche",
    "alternate_names": [
      "Yekooche",
      "Yekooche First Nation"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yekooche_First_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q8051409",
    "summary_en": "Yekooche First Nation is a band government of the Dakelh people, located 75 kilometres (47 mi) northwest of Fort St. James, British Columbia at the north end of Stuart Lake on Yekooche reserves. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 54.8°N, 125.1°W).",
    "summary_fi": "Yekooche-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 54.8°N, 125.1°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Yekooche"
    ]
  },
  {
    "slug": "yeopim-people",
    "name": "Yeopim People",
    "name_fi": "Yeopim-kansa",
    "native_name": "Yeopim",
    "alternate_names": [
      "Yeopim",
      "Tlapanec people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southeast-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tlapanec_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2537385",
    "summary_en": "The Tlapanec, or Meꞌphaa, are an Indigenous people of Mexico native to the state of Guerrero. The Tlapanec language is a part of the Oto-Manguean language family, and is closely related to the now extinct Subtiaba language of Nicaragua. Their ancestral country encompasses Southeastern Woodlands (Muskogean & Iroquoian Territory) (centered near 36.3°N, 76.6°W).",
    "summary_fi": "Yeopim-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kaakkoisten metsämaiden ja jokilaaksojen alueella (koordinaateissa noin 36.3°N, 76.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southeastern town and mound center",
    "feature_name_matches": [
      "Yeopim"
    ]
  },
  {
    "slug": "yaqui-people",
    "name": "Yaqui People",
    "name_fi": "Yaqui-kansa",
    "native_name": "Yoeme (Yaqui)",
    "alternate_names": [
      "Yoeme (Yaqui)",
      "Yaqui"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yaqui",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q428575",
    "summary_en": "The Yaqui, Hiaki, or Yoeme, are an indigenous people of Mexico and of the United States, who speak the Yaqui language, an Uto-Aztecan language. Their ancestral country encompasses Aridoamerica and Sonoran Desert (Northern Mexico & Borderlands) (centered near 27.8°N, 109.9°W).",
    "summary_fi": "Yoeme (Yaqui)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Aridoamerikassa ja Sonoran aavikolla Pohjois-Meksikon rajaseudulla (koordinaateissa noin 27.8°N, 109.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Sonoran rancherías and oasis settlements",
    "feature_name_matches": [
      "Yoeme (Yaqui)"
    ]
  },
  {
    "slug": "chontal-indigenous",
    "name": "Chontal People",
    "name_fi": "Chontal-kansa",
    "native_name": "Yoko T'aan (Chontal)",
    "alternate_names": [
      "Yoko T'aan (Chontal)",
      "Yoko T’aan (Chontal)",
      "Chontal",
      "Chontal language"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "maya",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Chontal_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q55643760",
    "summary_en": "Chontal language may refer to:in Oaxaca,\none of the Tequistlatecan languages\nin Tabasco,\nthe Chontal Maya language\nin Guerrero,\nthe Guerrero Chontal language. Their ancestral country encompasses Mesoamerica (Maya Region & Central America) (centered near 18.2°N, 92.7°W).",
    "summary_fi": "Yoko T'aan (Chontal)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa mayojen ja Keski-Amerikan perinnealueilla (koordinaateissa noin 18.2°N, 92.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Mesoamerican city and ceremonial center",
    "feature_name_matches": [
      "Yoko T’aan (Chontal)"
    ]
  },
  {
    "slug": "concho-people",
    "name": "Concho People",
    "name_fi": "Concho-kansa",
    "native_name": "Yoli (Concho)",
    "alternate_names": [
      "Yoli (Concho)",
      "Concho",
      "List of extinct Uto-Aztecan languages"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/List_of_extinct_Uto-Aztecan_languages",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q18154494",
    "summary_en": "A large number of languages known only from brief mentions are thought to have been Uto-Aztecan languages, but became extinct without being documented. The following list is based on Campbell (1997:133–135).Acaxee (Aiage): closely related to Tahue, a Cahitan language, linked with Tebaca and Sabaibo. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 28.9°N, 105.6°W).",
    "summary_fi": "Yoli (Concho)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 28.9°N, 105.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Yoli (Concho)"
    ]
  },
  {
    "slug": "yoncalla-people",
    "name": "Yoncalla People",
    "name_fi": "Yoncalla-kansa",
    "native_name": "Yoncalla",
    "alternate_names": [
      "Yoncalla",
      "Yoncalla, Oregon"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yoncalla%2C_Oregon",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2314977",
    "summary_en": "Yoncalla is a city in Douglas County, Oregon, United States. The population was 1,047 at the 2010 census. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 43.7°N, 122.9°W).",
    "summary_fi": "Yoncalla-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 43.7°N, 122.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Yoncalla"
    ]
  },
  {
    "slug": "mayo-people",
    "name": "Mayo People",
    "name_fi": "Mayo-kansa",
    "native_name": "Yoreme (Mayo)",
    "alternate_names": [
      "Yoreme (Mayo)",
      "Mayo",
      "Mayo people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mayo_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q45162",
    "summary_en": "The Mayo or Yoreme are an Indigenous group in Mexico, living in southern Sonora, northern Sinaloa and small settlements in Durango. Their ancestral country encompasses Aridoamerica and Sonoran Desert (Northern Mexico & Borderlands) (centered near 26.6°N, 108.9°W).",
    "summary_fi": "Yoreme (Mayo)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Aridoamerikassa ja Sonoran aavikolla Pohjois-Meksikon rajaseudulla (koordinaateissa noin 26.6°N, 108.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Sonoran rancherías and oasis settlements",
    "feature_name_matches": [
      "Yoreme (Mayo)"
    ]
  },
  {
    "slug": "youghtanund-people",
    "name": "Youghtanund People",
    "name_fi": "Youghtanund-kansa",
    "native_name": "Youghtanund",
    "alternate_names": [
      "Youghtanund"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "eastern-woodlands",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Youghtanund",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q36747",
    "summary_en": "Indigenous North American nation and language group whose ancestral territory is situated in Northeastern Woodlands and Great Lakes Basin (centered near 37.7°N, 77.3°W). Documented at the eve of European contact in 1492, they maintained deep ecological relationships with their ancestral lands, elaborate kinship systems, and rich oral traditions.",
    "summary_fi": "Youghtanund-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Koillisten metsäalueiden ja Suurten järvien valuma-alueella (koordinaateissa noin 37.7°N, 77.3°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Woodland longhouse and council village",
    "feature_name_matches": [
      "Youghtanund"
    ]
  },
  {
    "slug": "serrano-people",
    "name": "Serrano People",
    "name_fi": "Serrano-kansa",
    "native_name": "Yuhaviatam/Maarenga'yam (Serrano)",
    "alternate_names": [
      "Yuhaviatam/Maarenga'yam (Serrano)",
      "Yuhaviatam/Maarenga’yam (Serrano)",
      "Serrano",
      "Serrano people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "california-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Serrano_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q617532",
    "summary_en": "The Serrano are an Indigenous people of California. Their autonyms are Taaqtam meaning \"people\", Maarrênga'yam meaning \"people from Morongo\", and Yuhaaviatam meaning \"people of the pines.\". Their ancestral country encompasses Southern California & Inland Indigenous Lands (centered near 34.6°N, 117.2°W).",
    "summary_fi": "Yuhaviatam/Maarenga'yam (Serrano)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Kalifornian rannikon ja jokilaaksojen perinnealueilla (koordinaateissa noin 34.6°N, 117.2°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Southern California ancestral villages",
    "feature_name_matches": [
      "Yuhaviatam/Maarenga’yam (Serrano)"
    ]
  },
  {
    "slug": "zacateco-people",
    "name": "Zacateco People",
    "name_fi": "Zacateco-kansa",
    "native_name": "Zacateco",
    "alternate_names": [
      "Zacateco"
    ],
    "culture_group": "Mesoamerican",
    "lineage_id": "mesoamerican",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Zacateco",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1270351",
    "summary_en": "The Zacatecos are an indigenous group, one of the peoples called Chichimecas by the Aztecs. They lived in most of what is now the state of Zacatecas and the northeastern part of Durango. Their ancestral country encompasses Mesoamerica (Central Mexican Highlands & Gulf Coast) (centered near 23.3°N, 103.5°W).",
    "summary_fi": "Zacateco-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Mesoamerikassa Keski-Meksikon ylängöillä ja Meksikonlahden rannikolla (koordinaateissa noin 23.3°N, 103.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Central Mexican altepetl or ceremonial hub",
    "feature_name_matches": [
      "Zacateco"
    ]
  },
  {
    "slug": "ditidaht-indigenous",
    "name": "Ditidaht People",
    "name_fi": "Ditidaht-kansa",
    "native_name": "ditidaqiic̓aq disib̓aʔk (Ditidaht)",
    "alternate_names": [
      "ditidaqiic̓aq disib̓aʔk (Ditidaht)",
      "Ditidaht",
      "Ditidaht First Nation"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ditidaht_First_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1230294",
    "summary_en": "The Ditidaht First Nation is a First Nations band government on southern Vancouver Island in British Columbia, Canada. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 48.9°N, 124.5°W).",
    "summary_fi": "ditidaqiic̓aq disib̓aʔk (Ditidaht)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 48.9°N, 124.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "ditidaqiic̓aq disib̓aʔk (Ditidaht)"
    ]
  },
  {
    "slug": "wenatchi-people",
    "name": "Wenatchi People",
    "name_fi": "Wenatchi-kansa",
    "native_name": "np̓əšqʷáw̓səxʷ (Wenatchi)",
    "alternate_names": [
      "np̓əšqʷáw̓səxʷ (Wenatchi)",
      "Wenatchi"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wenatchi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q934750",
    "summary_en": "The Wenatchi people or Šnp̍əšqʷáw̉šəxʷi / Np̓əšqʷáw̓səxʷ are Native Americans who originally lived near the confluence of the Columbia and Wenatchee Rivers in Central Washington state. Their language is Interior Salish. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 47.6°N, 120.7°W).",
    "summary_fi": "np̓əšqʷáw̓səxʷ (Wenatchi)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 47.6°N, 120.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "np̓əšqʷáw̓səxʷ (Wenatchi)"
    ]
  },
  {
    "slug": "tsawwassen-people",
    "name": "Tsawwassen People",
    "name_fi": "Tsawwassen-kansa",
    "native_name": "sc̓əwaθenaɁɬ təməxʷ (Tsawwassen)",
    "alternate_names": [
      "sc̓əwaθenaɁɬ təməxʷ (Tsawwassen)",
      "Tsawwassen"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tsawwassen",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q7849447",
    "summary_en": "Tsawwassen is a suburban, mostly residential community on a peninsula in the southwestern corner of the City of Delta in British Columbia, Canada. It provides the only road access to the American territory on the southern tip of the peninsula of the same name, the community of Point Roberts, Washington, via 56th Street. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 49.3°N, 122.7°W).",
    "summary_fi": "sc̓əwaθenaɁɬ təməxʷ (Tsawwassen)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 49.3°N, 122.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "sc̓əwaθenaɁɬ təməxʷ (Tsawwassen)"
    ]
  },
  {
    "slug": "snoqualmie-people",
    "name": "Snoqualmie People",
    "name_fi": "Snoqualmie-kansa",
    "native_name": "sdukʷalbixʷ (Snoqualmie)",
    "alternate_names": [
      "sdukʷalbixʷ (Snoqualmie)",
      "Snoqualmie",
      "Snoqualmie people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Snoqualmie_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q17020537",
    "summary_en": "The Snoqualmie people are a Lushootseed-speaking Southern Coast Salish people indigenous to the Snoqualmie Valley, located in east King and Snohomish counties in the state of Washington. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 47.6°N, 121.5°W).",
    "summary_fi": "sdukʷalbixʷ (Snoqualmie)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 47.6°N, 121.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "sdukʷalbixʷ (Snoqualmie)"
    ]
  },
  {
    "slug": "sinixt-people",
    "name": "Sinixt People",
    "name_fi": "Sinixt-kansa",
    "native_name": "snʕickstx tmxʷúlaʔxʷ (Sinixt)",
    "alternate_names": [
      "snʕickstx tmxʷúlaʔxʷ (Sinixt)",
      "Sinixt"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Sinixt",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1545880",
    "summary_en": "The Sinixt are a First Nations People. The Sinixt are descended from Indigenous peoples who have lived primarily in what are today known as the West Kootenay region of British Columbia in Canada and the adjacent regions of Eastern Washington in the United States for at least 10,000 years. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 50.7°N, 117.7°W).",
    "summary_fi": "snʕickstx tmxʷúlaʔxʷ (Sinixt)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 50.7°N, 117.7°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "snʕickstx tmxʷúlaʔxʷ (Sinixt)"
    ]
  },
  {
    "slug": "katzie-people",
    "name": "Katzie People",
    "name_fi": "Katzie-kansa",
    "native_name": "sq̓əc̓iy̓aɁɬ təməxʷ (Katzie)",
    "alternate_names": [
      "sq̓əc̓iy̓aɁɬ təməxʷ (Katzie)",
      "Katzie",
      "Katzie First Nation"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Katzie_First_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1736937",
    "summary_en": "Katzie First Nation is a First Nation whose traditional territory lies in the Lower Fraser Valley of British Columbia, Canada. According to their oral tradition, the Katzie people are the descendants of the Oeʼlecten and Swaneset communities, two of five established by the Creator in present-day Greater Vancouver. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 49.5°N, 122.5°W).",
    "summary_fi": "sq̓əc̓iy̓aɁɬ təməxʷ (Katzie)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 49.5°N, 122.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "sq̓əc̓iy̓aɁɬ təməxʷ (Katzie)"
    ]
  },
  {
    "slug": "tsleil-waututh-people",
    "name": "Tsleil-Waututh People",
    "name_fi": "Tsleil-Waututh-kansa",
    "native_name": "səl̓ilwətaɁɬ təməxʷ (Tsleil-Waututh)",
    "alternate_names": [
      "səl̓ilwətaɁɬ təməxʷ (Tsleil-Waututh)",
      "Tsleil-Waututh",
      "Tsleil-Waututh First Nation"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tsleil-Waututh_First_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1016901",
    "summary_en": "Tsleil-Waututh Nation, formerly known as the Burrard Indian Band or Burrard Inlet Indian Band, is a First Nations band government in the Canadian province of British Columbia. Tsleil-Waututh Nation (\"TWN\") are Coast Salish peoples who speak hən̓q̓əmin̓əm̓, the Downriver dialect of the Halkomelem language, and are closely related to but politically and culturally separate from the nearby nations of the Sḵwx̱wú7mesh (Squamish) and xʷməθkʷəy̓əm (Musqueam), with whose traditional territories some claims overlap. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 49.5°N, 123.0°W).",
    "summary_fi": "səl̓ilwətaɁɬ təməxʷ (Tsleil-Waututh)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 49.5°N, 123.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "səl̓ilwətaɁɬ təməxʷ (Tsleil-Waututh)"
    ]
  },
  {
    "slug": "wsanec-people",
    "name": "W̱SÁNEĆ People",
    "name_fi": "W̱SÁNEĆ-kansa",
    "native_name": "Á,LEṈENEȻ ȽTE (W̱SÁNEĆ)",
    "alternate_names": [
      "Á,LEṈENEȻ ȽTE (W̱SÁNEĆ)",
      "W̱SÁNEĆ",
      "Saanich people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Saanich_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q750920",
    "summary_en": "The Saanich people are a Central Coast Salish people indigenous to parts of British Columbia and western Washington state. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 48.8°N, 123.9°W).",
    "summary_fi": "Á,LEṈENEȻ ȽTE (W̱SÁNEĆ)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 48.8°N, 123.9°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Á,LEṈENEȻ ȽTE (W̱SÁNEĆ)"
    ]
  },
  {
    "slug": "alsea-people",
    "name": "Alsea People",
    "name_fi": "Alsea-kansa",
    "native_name": "Älsé (Alsea)",
    "alternate_names": [
      "Älsé (Alsea)",
      "Alsea"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Alsea",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q56716",
    "summary_en": "The Alsea are a Native American tribe of Western Oregon. They are, confederated with other Tribes on the Siletz Reservation, Oregon, and are members of the Confederated Tribes of Siletz. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 44.4°N, 123.8°W).",
    "summary_fi": "Älsé (Alsea)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 44.4°N, 123.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "Älsé (Alsea)"
    ]
  },
  {
    "slug": "teguima-eudebe-hoba-people",
    "name": "Tegüima-Eudebe-Hoba People",
    "name_fi": "Tegüima-Eudebe-Hoba-kansa",
    "native_name": "Ópata (Tegüima-Eudebe-Hoba)",
    "alternate_names": [
      "Ópata (Tegüima-Eudebe-Hoba)",
      "Tegüima-Eudebe-Hoba",
      "Opata people"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "southwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Opata_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1550826",
    "summary_en": "The Opata are an Indigenous people in Mexico. Opata territory, the \"Opatería\" in Spanish, encompasses the mountainous northeast and central part of the state of Sonora, extending to near the border with the United States. Their ancestral country encompasses Aridoamerica and Sonoran Desert (Northern Mexico & Borderlands) (centered near 30.0°N, 109.6°W).",
    "summary_fi": "Ópata (Tegüima-Eudebe-Hoba)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Aridoamerikassa ja Sonoran aavikolla Pohjois-Meksikon rajaseudulla (koordinaateissa noin 30.0°N, 109.6°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Sonoran rancherías and oasis settlements",
    "feature_name_matches": [
      "Ópata (Tegüima-Eudebe-Hoba)"
    ]
  },
  {
    "slug": "musqueam-people",
    "name": "Musqueam People",
    "name_fi": "Musqueam-kansa",
    "native_name": "šxʷməθkʷəy̓əmaɁɬ təməxʷ (Musqueam)",
    "alternate_names": [
      "šxʷməθkʷəy̓əmaɁɬ təməxʷ (Musqueam)",
      "Musqueam",
      "Musqueam First Nation"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Musqueam_First_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1955460",
    "summary_en": "The Musqueam Nation is a First Nation whose traditional territory encompasses the western half of what is now Greater Vancouver, in British Columbia, Canada. It is governed by a band council and is known officially as the Musqueam Indian Band under the Indian Act. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 49.4°N, 123.0°W).",
    "summary_fi": "šxʷməθkʷəy̓əmaɁɬ təməxʷ (Musqueam)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 49.4°N, 123.0°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "šxʷməθkʷəy̓əmaɁɬ təməxʷ (Musqueam)"
    ]
  },
  {
    "slug": "tla-o-qui-aht-people",
    "name": "Tla-o-qui-aht People",
    "name_fi": "Tla-o-qui-aht-kansa",
    "native_name": "ƛaʔuukʷiʔatḥ (Tla-o-qui-aht)",
    "alternate_names": [
      "ƛaʔuukʷiʔatḥ (Tla-o-qui-aht)",
      "Tla-o-qui-aht",
      "Tla-o-qui-aht First Nations"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tla-o-qui-aht_First_Nations",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q1565644",
    "summary_en": "The Tla-o-qui-aht First Nations are a Nuu-chah-nulth First Nation in Canada. They live on ten reserves along the Pacific Rim National Park Reserve on Vancouver Island, British Columbia. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 49.2°N, 125.5°W).",
    "summary_fi": "ƛaʔuukʷiʔatḥ (Tla-o-qui-aht)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 49.2°N, 125.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "ƛaʔuukʷiʔatḥ (Tla-o-qui-aht)"
    ]
  },
  {
    "slug": "tla-amin-people",
    "name": "Tla'amin People",
    "name_fi": "Tla'amin-kansa",
    "native_name": "ɬaʔamɩn gɩǰɛ (Tla'amin/Sliammon)",
    "alternate_names": [
      "ɬaʔamɩn gɩǰɛ (Tla'amin/Sliammon)",
      "Tla'amin",
      "Tlaʼamin Nation"
    ],
    "culture_group": "North American Indigenous",
    "lineage_id": "northwest-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tla%CA%BCamin_Nation",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q2294148",
    "summary_en": "Tlaʼamin First Nation, formerly Sliammon Indian Band or Sliammon First Nation, is a First Nations self governing nation whose lands and traditional territories are located on the upper Sunshine Coast in southwestern British Columbia, Canada. The Tlaʼamin are closely related to the Klahoose and Homalco peoples and have shared their adjoining territories; formerly all three as well as K'omoks were grouped collectively as the Mainland Comox due to their shared language. Their ancestral country encompasses Pacific Northwest Coast & Columbia Plateau (centered near 50.1°N, 124.5°W).",
    "summary_fi": "ɬaʔamɩn gɩǰɛ (Tla'amin/Sliammon)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Tyynenmeren luoteisrannikolla ja Columbian ylängöllä (koordinaateissa noin 50.1°N, 124.5°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Pacific Northwest plankhouse village",
    "feature_name_matches": [
      "ɬaʔamɩn gɩǰɛ (Tla'amin/Sliammon)"
    ]
  },
  {
    "slug": "naskapi-people",
    "name": "Naskapi People",
    "name_fi": "Naskapi-kansa",
    "native_name": "St'aschinuw (Naskapi)",
    "alternate_names": [
      "St'aschinuw (Naskapi)",
      "ᒋᑦ ᐊᔅᒋᓄᐤ St'aschinuw (Naskapi)",
      "Naskapi"
    ],
    "culture_group": "Arctic & Subarctic",
    "lineage_id": "subarctic-indigenous",
    "historical_period": "Pre-Columbian North American Indigenous Horizon",
    "year_start": -10000,
    "year_end": 2026,
    "period_label": "10,000 BCE – Present",
    "period_label_fi": "10 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Naskapi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjois-Amerikan_intiaanit",
    "wikidata_id": "Q495753",
    "summary_en": "The Naskapi are an Indigenous people of the Subarctic native to the historical region St'aschinuw, which was located in present day northern Quebec, neighbouring Nunavik. They are closely related to Innu People, who call their homeland Nitassinan. Their ancestral country encompasses Subarctic Eastern Canada (Innu, Naskapi & Cree Lands) (centered near 55.7°N, 67.8°W).",
    "summary_fi": "St'aschinuw (Naskapi)-kansa on Pohjois-Amerikan alkuperäiskansa, jonka perinteiset maat sijaitsevat alueella Itä-Kanadan subarktisella havumetsävyöhykkeellä (koordinaateissa noin 55.7°N, 67.8°W). Vuoden 1492 historiallisessa horisontissa he vaalivat vuosisatojen perinteitä, sukulaisuusverkostoja ja rikasta suullista tarinaperinnettä.",
    "capital": "Subarctic forest encampments",
    "feature_name_matches": [
      "ᒋᑦ ᐊᔅᒋᓄᐤ St'aschinuw (Naskapi)"
    ]
  }
]

// Verification check: ensure all 505 residue entities in North America are matched
const residueData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../data-sources/residue/north-america.json"), "utf-8")
)
const matchedNames = new Set(RESIDUE_NORTH_AMERICA_2_CULTURES.flatMap((c) => c.feature_name_matches))

console.log(`Checking coverage against ${residueData.entities.length} North America residue entities...`)
const missing = residueData.entities.filter((e: any) => !matchedNames.has(e.name))

if (missing.length > 0) {
  console.error("Missing coverage for North America residue entities:", missing.map((m: any) => m.name))
  process.exit(1)
} else {
  console.log(`✓ 100% of ${residueData.entities.length} North America residue entities are matched!`)
}

// Write output batch file
const outPath = path.resolve(__dirname, "../data-sources/batches/residue-north-america-2.json")
fs.writeFileSync(outPath, JSON.stringify(RESIDUE_NORTH_AMERICA_2_CULTURES, null, 2), "utf-8")
console.log(`✓ Wrote ${RESIDUE_NORTH_AMERICA_2_CULTURES.length} culture entries to ${outPath}`)
