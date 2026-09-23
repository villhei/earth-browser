import fs from "fs"
import path from "path"
import { CultureBatchEntry } from "../seed_culture_metadata_batch"

export const RESIDUE_OCEANIA_CULTURES: CultureBatchEntry[] = [
  {
    "slug": "northern-territory-colony",
    "name": "Northern Territory (British Colony)",
    "name_fi": "Pohjoisterritorio (brittiläinen siirtokunta)",
    "native_name": "Northern Territory of South Australia / Northern Territory",
    "alternate_names": [
      "Northern Territory (UK)",
      "Northern Territory"
    ],
    "culture_group": "Oceania",
    "lineage_id": "aus",
    "historical_period": "British Colonial Northern Territory",
    "year_start": 1863,
    "year_end": 1911,
    "period_label": "1863 CE – 1911 CE",
    "period_label_fi": "1863 jaa. – 1911 jaa.",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/History_of_the_Northern_Territory",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Pohjoisterritorio",
    "wikidata_id": "Q3235",
    "summary_en": "Colonial jurisdiction established across northern Australia annexed to South Australia in 1863 and later transferred to the Commonwealth of Australia in 1911, centered on Palmerston (Darwin).",
    "summary_fi": "Pohjoisen Australian siirtomaa-alue, joka liitettiin Etelä-Australiaan vuonna 1863 ja luovutettiin Australian liittovaltiolle vuonna 1911 keskuksenaan Palmerston (Darwin).",
    "capital": "Palmerston (Darwin)",
    "feature_name_matches": [
      "Northern Territory (UK)"
    ]
  },
  {
    "slug": "colony-of-queensland",
    "name": "Colony of Queensland",
    "name_fi": "Queenslandin siirtokunta",
    "native_name": "Colony of Queensland",
    "alternate_names": [
      "Queensland (UK)",
      "Colony of Queensland",
      "Queensland"
    ],
    "culture_group": "Oceania",
    "lineage_id": "aus",
    "historical_period": "British Crown Colony of Queensland",
    "year_start": 1859,
    "year_end": 1901,
    "period_label": "1859 CE – 1901 CE",
    "period_label_fi": "1859 jaa. – 1901 jaa.",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Colony_of_Queensland",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Queensland",
    "wikidata_id": "Q36074",
    "summary_en": "British self-governing crown colony separated from New South Wales by Queen Victoria's royal letters patent in 1859, federating as a founding Australian state in 1901.",
    "summary_fi": "Britannian itsehallinnollinen kruununsiirtokunta Koillis-Australiassa, joka erotettiin Uudesta Etelä-Walesista kuningatar Viktorian kirjeellä 1859 ja perusti liittovaltion 1901.",
    "capital": "Brisbane",
    "feature_name_matches": [
      "Queensland (UK)"
    ]
  },
  {
    "slug": "province-of-south-australia",
    "name": "Province of South Australia",
    "name_fi": "Etelä-Australian siirtokunta",
    "native_name": "Province of South Australia",
    "alternate_names": [
      "South Australia (UK)",
      "Province of South Australia",
      "Colony of South Australia"
    ],
    "culture_group": "Oceania",
    "lineage_id": "aus",
    "historical_period": "British Planned Free Colony of South Australia",
    "year_start": 1836,
    "year_end": 1901,
    "period_label": "1836 CE – 1901 CE",
    "period_label_fi": "1836 jaa. – 1901 jaa.",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Province_of_South_Australia",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Etel%C3%A4-Australia",
    "wikidata_id": "Q35715",
    "summary_en": "British planned free-settler colony established under the South Australia Act 1834 without convict transportation, pioneer in civil liberties and female suffrage before Australian federation.",
    "summary_fi": "Britannian suunnitelmallinen vapaiden siirtolaisten provinssi, joka perustettiin ilman vankisiirtolaisuutta ja tunnettiin varhaisesta naisten äänioikeudesta ennen liittovaltiota 1901.",
    "capital": "Adelaide",
    "feature_name_matches": [
      "South Australia (UK)"
    ]
  },
  {
    "slug": "colony-of-victoria",
    "name": "Colony of Victoria",
    "name_fi": "Victorian siirtokunta",
    "native_name": "Colony of Victoria",
    "alternate_names": [
      "Victoria (UK)",
      "Colony of Victoria",
      "Victoria"
    ],
    "culture_group": "Oceania",
    "lineage_id": "aus",
    "historical_period": "British Victorian Gold Rush Colony",
    "year_start": 1851,
    "year_end": 1901,
    "period_label": "1851 CE – 1901 CE",
    "period_label_fi": "1851 jaa. – 1901 jaa.",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Colony_of_Victoria",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Victoria_(Australia)",
    "wikidata_id": "Q36687",
    "summary_en": "British self-governing crown colony separated from New South Wales in 1851, propelled into worldwide economic prominence by the Victorian Gold Rush of the 1850s.",
    "summary_fi": "Britannian kruununsiirtokunta Kaakkois-Australiassa, joka erosi Uudesta Etelä-Walesista vuonna 1851 ja kasvoi nopeasti 1850-luvun valtavan kultaryntäyksen ansiosta.",
    "capital": "Melbourne",
    "feature_name_matches": [
      "Victoria (UK)"
    ]
  },
  {
    "slug": "colony-of-western-australia",
    "name": "Colony of Western Australia",
    "name_fi": "Länsi-Australian siirtokunta",
    "native_name": "Swan River Colony / Colony of Western Australia",
    "alternate_names": [
      "Western Australia (UK)",
      "Colony of Western Australia",
      "Swan River Colony"
    ],
    "culture_group": "Oceania",
    "lineage_id": "aus",
    "historical_period": "British Colony of Western Australia",
    "year_start": 1829,
    "year_end": 1901,
    "period_label": "1829 CE – 1901 CE",
    "period_label_fi": "1829 jaa. – 1901 jaa.",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Swan_River_Colony",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/L%C3%A4nsi-Australia",
    "wikidata_id": "Q3206",
    "summary_en": "British settlement founded at the Swan River in 1829 claiming the western third of the continent, later transformed into a crown colony and joining the Australian Commonwealth in 1901.",
    "summary_fi": "Brittiläinen siirtokunta Swan-joen varrella vuodesta 1829, joka kattoi maanosan läntisen kolmanneksen ja liittyi Australian liittovaltioon 1901.",
    "capital": "Perth",
    "feature_name_matches": [
      "Western Australia (UK)"
    ]
  },
  {
    "slug": "gilbert-and-ellice-islands-colony",
    "name": "Gilbert and Ellice Islands",
    "name_fi": "Gilbert- ja Ellicesaaret",
    "native_name": "Gilbert and Ellice Islands Colony",
    "alternate_names": [
      "Gilbert and Ellice Islands",
      "Gilbert and Ellice Islands Colony"
    ],
    "culture_group": "Oceania",
    "lineage_id": "gbr",
    "historical_period": "British Western Pacific Colonial Crown Territory",
    "year_start": 1892,
    "year_end": 1976,
    "period_label": "1892 CE – 1976 CE",
    "period_label_fi": "1892 jaa. – 1976 jaa.",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Gilbert_and_Ellice_Islands",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Gilbert-_ja_Ellicesuaret",
    "wikidata_id": "Q1050859",
    "summary_en": "British protectorate and later crown colony in Micronesia and Polynesia spanning the Gilbert and Ellice archipelagoes, which later gained independence as Kiribati and Tuvalu.",
    "summary_fi": "Britannian protektoraatti ja kruununsiirtokunta Mikronesiassa ja Polynesiassa, joka myöhemmin itsenäistyi Kiribatin ja Tuvalun valtioina.",
    "capital": "Tarawa / Ocean Island (Banaba)",
    "feature_name_matches": [
      "Gilbert and Ellice Islands"
    ]
  },
  {
    "slug": "guam-territory",
    "name": "Territory of Guam",
    "name_fi": "Guamin territorio",
    "native_name": "Guåhan / Territory of Guam",
    "alternate_names": [
      "Guam",
      "Territory of Guam",
      "Guåhan"
    ],
    "culture_group": "Oceania",
    "lineage_id": "usa",
    "historical_period": "United States Naval & Island Territory",
    "year_start": 1898,
    "year_end": 2026,
    "period_label": "1898 CE – Present",
    "period_label_fi": "1898 jaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Guam",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Guam",
    "wikidata_id": "Q16635",
    "summary_en": "Largest and southernmost island of the Marianas in Micronesia, home to the Chamorro people, ceded by Spain to the United States following the Spanish-American War in 1898.",
    "summary_fi": "Mariaanien suurin ja eteläisin saari Mikronesiassa, tšamorrojen kotimaa, jonka Espanja luovutti Yhdysvalloille Espanjan ja Yhdysvaltain sodan jälkeen 1898.",
    "capital": "Hagåtña",
    "feature_name_matches": [
      "Guam"
    ]
  },
  {
    "slug": "saipan-mandate",
    "name": "Saipan (South Seas Mandate)",
    "name_fi": "Saipan (Etelämeren mandaattialue)",
    "native_name": "Saipan / 彩帆島 (Nan'yo Cho)",
    "alternate_names": [
      "Saipan",
      "Saipan Island",
      "South Seas Mandate Saipan"
    ],
    "culture_group": "Oceania",
    "lineage_id": "jpn",
    "historical_period": "League of Nations Japanese South Seas Mandate",
    "year_start": 1919,
    "year_end": 1944,
    "period_label": "1919 CE – 1944 CE",
    "period_label_fi": "1919 jaa. – 1944 jaa.",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Saipan",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Saipan",
    "wikidata_id": "Q153724",
    "summary_en": "Administrative center of the Japanese South Seas Mandate (Nan'yo Cho) in the Northern Mariana Islands between the World Wars, marked by sugar plantations and heavily fortified prior to the 1944 Battle of Saipan.",
    "summary_fi": "Japanin Etelämeren mandaattialueen (Nan'yo Cho) hallinnollinen keskus Pohjois-Mariaaneilla maailmansotien välisenä aikana, jossa harjoitettiin laajaa sokerintuotantoa ennen vuoden 1944 Saipanin taistelua.",
    "capital": "Garapan",
    "feature_name_matches": [
      "Saipan"
    ]
  },
  {
    "slug": "alawa-people",
    "name": "Alawa People",
    "name_fi": "Alawa-kansa",
    "native_name": "Alawa",
    "alternate_names": [
      "Alawa",
      "Alawa people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Alawa_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q4708893",
    "summary_en": "The Alawa people are an Indigenous Australian people from Arnhem Land in the Northern Territory of Australia. The suburb of Alawa in the Darwin's north, is named in their honour. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 15.9°S, 134.4°E.",
    "summary_fi": "Alawa-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 15.9°S, 134.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Alawa"
    ]
  },
  {
    "slug": "alyawarre-people",
    "name": "Alyawarre People",
    "name_fi": "Alyawarre-kansa",
    "native_name": "Alyawarre",
    "alternate_names": [
      "Alyawarre"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Alyawarre",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q450252",
    "summary_en": "The Alyawarre, also spelt Alyawarr and also known as the Iliaura, are an Aboriginal Australian people, or language group, from the Northern Territory. The Alyawarre are made up of roughly 1,200 associated peoples and actively engage in local traditions such as awelye painting. Their traditional country encompasses Central Australia, Northern Territory, centered near 22.1°S, 135.6°E.",
    "summary_fi": "Alyawarre-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Keski-Australian aavikkoalueella Pohjoisterritoriossa (koordinaateissa noin 22.1°S, 135.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Australian Desert estates",
    "feature_name_matches": [
      "Alyawarre"
    ]
  },
  {
    "slug": "amangu-people",
    "name": "Amangu People",
    "name_fi": "Amangu-kansa",
    "native_name": "Amangu",
    "alternate_names": [
      "Amangu"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Amangu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q10407289",
    "summary_en": "The Amangu are an indigenous Yamatji people of the mid-western region of Western Australia. Their traditional country encompasses Southwest Western Australia (Noongar country), centered near 29.5°S, 115.6°E.",
    "summary_fi": "Amangu-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Lounais-Australian Noongar-mailla (koordinaateissa noin 29.5°S, 115.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Southwest WA traditional lands",
    "feature_name_matches": [
      "Amangu"
    ]
  },
  {
    "slug": "amarak-people",
    "name": "Amarak People",
    "name_fi": "Amarak-kansa",
    "native_name": "Amarak",
    "alternate_names": [
      "Amarak",
      "Amurdak"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Amurdak",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q4740131",
    "summary_en": "The Amurdak, people, also written Amarak and Ngamarak, are an Indigenous Australian people of the Cobourg Peninsula in the Northern Territory. The Amurdak people traditionally inhabited the coastal regions and hinterlands of the Cobourg Peninsula, including parts of the Garig Gunak Barlu National Park. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 11.9°S, 132.8°E.",
    "summary_fi": "Amarak-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 11.9°S, 132.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Amarak"
    ]
  },
  {
    "slug": "anmatyerre-people",
    "name": "Anmatyerre People",
    "name_fi": "Anmatyerre-kansa",
    "native_name": "Anmatyerre",
    "alternate_names": [
      "Anmatyerre",
      "Anmatyerr"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Anmatyerr",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q557936",
    "summary_en": "The Anmatyerr are an Aboriginal Australian people of the Northern Territory, who speak one of the Upper Arrernte languages. Their traditional country encompasses Central Australia, Northern Territory, centered near 22.5°S, 132.9°E.",
    "summary_fi": "Anmatyerre-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Keski-Australian aavikkoalueella Pohjoisterritoriossa (koordinaateissa noin 22.5°S, 132.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Australian Desert estates",
    "feature_name_matches": [
      "Anmatyerre"
    ]
  },
  {
    "slug": "antakarinja-people",
    "name": "Antakarinja People",
    "name_fi": "Antakarinja-kansa",
    "native_name": "Antakarinja",
    "alternate_names": [
      "Antakarinja",
      "Antakirinja people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Antakirinja_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48805897",
    "summary_en": "The Antakirinja, otherwise spelt Antakarinya, and alternatively spoken of as the Ngonde, are an indigenous Australian people of South Australia. Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 27.5°S, 134.1°E.",
    "summary_fi": "Antakarinja-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 27.5°S, 134.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Antakarinja"
    ]
  },
  {
    "slug": "ballardong-people",
    "name": "Ballardong People",
    "name_fi": "Ballardong-kansa",
    "native_name": "Ballardong",
    "alternate_names": [
      "Ballardong"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ballardong",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q22893418",
    "summary_en": "Ballardong are an indigenous Noongar people of the south western area of Western Australia. Their traditional country encompasses Southwest Western Australia (Noongar country), centered near 31.3°S, 117.3°E.",
    "summary_fi": "Ballardong-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Lounais-Australian Noongar-mailla (koordinaateissa noin 31.3°S, 117.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Southwest WA traditional lands",
    "feature_name_matches": [
      "Ballardong"
    ]
  },
  {
    "slug": "bilinara-people",
    "name": "Bilinara People",
    "name_fi": "Bilinara-kansa",
    "native_name": "Bilinara",
    "alternate_names": [
      "Bilinara",
      "Bilinarra"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Bilinarra",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48796947",
    "summary_en": "The Bilinarra, also spelt Bilingara and Bilinara, are an Aboriginal Australian people of the Northern Territory. Their traditional country encompasses Victoria River & Daly River region, Northern Territory, centered near 17.0°S, 130.8°E.",
    "summary_fi": "Bilinara-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoria- ja Daly-jokien laaksossa Pohjoisterritoriossa (koordinaateissa noin 17.0°S, 130.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victoria River / Daly River basin",
    "feature_name_matches": [
      "Bilinara"
    ]
  },
  {
    "slug": "bukurnidja-people",
    "name": "Bukurnidja People",
    "name_fi": "Bukurnidja-kansa",
    "native_name": "Bukurnidja",
    "alternate_names": [
      "Bukurnidja",
      "Bugurnidja language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Bugurnidja_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q16848784",
    "summary_en": "Bugurnidja is an Australian Aboriginal language of Arnhem Land in northern Australia. Almost nothing is known of it; apparently Nicholas Evans collected some data from a single speaker, and this showed similarities to Ngomburr. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 12.7°S, 132.8°E.",
    "summary_fi": "Bukurnidja-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 12.7°S, 132.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Bukurnidja"
    ]
  },
  {
    "slug": "dangbon-people",
    "name": "Dangbon People",
    "name_fi": "Dangbon-kansa",
    "native_name": "Dangbon",
    "alternate_names": [
      "Dangbon",
      "Dalabon language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Dalabon_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q3913790",
    "summary_en": "Dalabon is a Gunwinyguan language of Arnhem Land, Australia. It is a severely endangered language, with perhaps as one or two fluent speakers remaining as of 2025. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 12.6°S, 134.2°E.",
    "summary_fi": "Dangbon-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 12.6°S, 134.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Dangbon"
    ]
  },
  {
    "slug": "doolboong-miriwoong-people",
    "name": "Doolboong/Miriwoong People",
    "name_fi": "Doolboong/Miriwoong-kansa",
    "native_name": "Doolboong/Miriwoong",
    "alternate_names": [
      "Doolboong/Miriwoong",
      "Duulngari"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Duulngari",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48800832",
    "summary_en": "The Doolboong, also known as Duulngari, were an Aboriginal Australian people of the Northern Territory and northeast Western Australia. Their traditional country encompasses Kimberley region, Western Australia, centered near 15.7°S, 129.0°E.",
    "summary_fi": "Doolboong/Miriwoong-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Kimberleyn alueella Länsi-Australiassa (koordinaateissa noin 15.7°S, 129.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Kimberley traditional estates",
    "feature_name_matches": [
      "Doolboong/Miriwoong"
    ]
  },
  {
    "slug": "kariyarra-people",
    "name": "Kariyarra People",
    "name_fi": "Kariyarra-kansa",
    "native_name": "Kariyarra",
    "alternate_names": [
      "Kariyarra",
      "Kariera people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kariera_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q28219777",
    "summary_en": "The Kariera or Karieri people were an Aboriginal Australian people of the Pilbara, who once lived around the coastal and inland area around and east of Port Hedland. Their traditional country encompasses Pilbara region, Western Australia, centered near 21.0°S, 118.4°E.",
    "summary_fi": "Kariyarra-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pilbaran alueella Länsi-Australiassa (koordinaateissa noin 21.0°S, 118.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Pilbara traditional country",
    "feature_name_matches": [
      "Kariyarra"
    ]
  },
  {
    "slug": "kaytej-people",
    "name": "Kaytej People",
    "name_fi": "Kaytej-kansa",
    "native_name": "Kaytej",
    "alternate_names": [
      "Kaytej",
      "Kaytetye language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kaytetye_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q6380709",
    "summary_en": "Kaytetye is an Australian Aboriginal language primarily spoken in the Northern Territory north of Alice Springs by the Kaytetye people, who live around Barrow Creek and Tennant Creek. It belongs to the Arandic subgroup of the Pama-Nyungan languages and is related to Alyawarra, which is one of the Upper Arrernte dialects. Their traditional country encompasses Central Australia, Northern Territory, centered near 21.3°S, 134.2°E.",
    "summary_fi": "Kaytej-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Keski-Australian aavikkoalueella Pohjoisterritoriossa (koordinaateissa noin 21.3°S, 134.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Australian Desert estates",
    "feature_name_matches": [
      "Kaytej"
    ]
  },
  {
    "slug": "kija-people",
    "name": "Kija People",
    "name_fi": "Kija-kansa",
    "native_name": "Kija",
    "alternate_names": [
      "Kija",
      "Gija people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Gija_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q17051198",
    "summary_en": "Gija, also spelt Gidja and Kija, alternatively known as the Lungga, refers to Aboriginal Australians from the East Kimberley area of Western Australia, about 200 kilometres (120 mi) south of Kununurra. In the late 19th century pastoralists were fiercely resisted by Gija people, many of whom now live around localities such as Halls Creek and Warmun. Their traditional country encompasses Kimberley region, Western Australia, centered near 17.2°S, 128.2°E.",
    "summary_fi": "Kija-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Kimberleyn alueella Länsi-Australiassa (koordinaateissa noin 17.2°S, 128.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Kimberley traditional estates",
    "feature_name_matches": [
      "Kija"
    ]
  },
  {
    "slug": "kokatha-people",
    "name": "Kokatha People",
    "name_fi": "Kokatha-kansa",
    "native_name": "Kokatha",
    "alternate_names": [
      "Kokatha"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kokatha",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q6426567",
    "summary_en": "The Kokatha, also known as the Kokatha Mula, are an Aboriginal Australian people of the state of South Australia. They speak the Kokatha language, close to or a dialect of the Western Desert language. Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 29.6°S, 133.3°E.",
    "summary_fi": "Kokatha-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 29.6°S, 133.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Kokatha"
    ]
  },
  {
    "slug": "konbudj-people",
    "name": "Konbudj People",
    "name_fi": "Konbudj-kansa",
    "native_name": "Konbudj",
    "alternate_names": [
      "Konbudj",
      "Končulj Agreement"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kon%C4%8Dulj_Agreement",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q115813343",
    "summary_en": "The Končulj Agreement is a colloquial name for two statements, the Basic UÇPMB statement signed about the Insurgency in the Preševo Valley, signed by the Liberation Army of Preševo, Medveđa and Bujanovac (UÇPMB) and the Statement on conditional amnesty for members of the UÇPMB, signed by the Republic of Serbia within FR Yugoslavia in 2001. The Končulj Agreement is the first agreement related to Preševo, Medveđa, and Bujanovac. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 12.6°S, 132.3°E.",
    "summary_fi": "Konbudj-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 12.6°S, 132.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Konbudj"
    ]
  },
  {
    "slug": "kukatja-people",
    "name": "Kukatja People",
    "name_fi": "Kukatja-kansa",
    "native_name": "Kukatja",
    "alternate_names": [
      "Kukatja",
      "Kukatja (Western Australia)"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kukatja_(Western_Australia)",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48799692",
    "summary_en": "The Kukatja people, also written Gugadja, are an Aboriginal Australian people of the Kimberley region of Western Australia. Their traditional country encompasses Great Sandy Desert & Tanami Desert, Western Australia / NT, centered near 20.6°S, 127.0°E.",
    "summary_fi": "Kukatja-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Ison Hiekka-aavikon ja Tanamin aavikon alueella (koordinaateissa noin 20.6°S, 127.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Western Desert / Tanami estates",
    "feature_name_matches": [
      "Kukatja"
    ]
  },
  {
    "slug": "kundjey-mi-people",
    "name": "Kundjey'mi People",
    "name_fi": "Kundjey'mi-kansa",
    "native_name": "Kundjey'mi",
    "alternate_names": [
      "Kundjey'mi",
      "Kundjey’mi",
      "Bininj"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Bininj",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q28225105",
    "summary_en": "The Bininj are an Aboriginal Australian people of Western Arnhem land in the Northern Territory. The sub-groups of Bininj are sometimes referred to by the various language dialects spoken in the region, that is, the group of dialects known as Bininj Kunwok; so the people may be named the Kunwinjku, Kuninjku, Kundjeyhmi (Gundjeihmi), Manyallaluk Mayali, Kundedjnjenghmi and Kune groups. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 12.4°S, 132.8°E.",
    "summary_fi": "Kundjey'mi-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 12.4°S, 132.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Kundjey’mi"
    ]
  },
  {
    "slug": "kurrama-people",
    "name": "Kurrama People",
    "name_fi": "Kurrama-kansa",
    "native_name": "Kurrama",
    "alternate_names": [
      "Kurrama",
      "Kurrama people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kurrama_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q6446495",
    "summary_en": "The Kurrama people, also known as the Puutu Kunti Kurrama people, are an Aboriginal Australian people from the Pilbara region of Western Australia. Their traditional country encompasses Pilbara region, Western Australia, centered near 22.1°S, 116.7°E.",
    "summary_fi": "Kurrama-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pilbaran alueella Länsi-Australiassa (koordinaateissa noin 22.1°S, 116.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Pilbara traditional country",
    "feature_name_matches": [
      "Kurrama"
    ]
  },
  {
    "slug": "kuwarra-people",
    "name": "Kuwarra People",
    "name_fi": "Kuwarra-kansa",
    "native_name": "Kuwarra",
    "alternate_names": [
      "Kuwarra",
      "Koara"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Koara",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q6424226",
    "summary_en": "The Koara people, more recently spelt Kuwarra, are an Aboriginal Australian people living in the Kuwarra Western Desert region of Western Australia. In its fullest extent it would constitute portions of land in the Pilbara, Mid West, and Goldfields-Esperance regions of Western Australia. Their traditional country encompasses Gibson Desert & Western Desert, Western Australia, centered near 28.1°S, 120.3°E.",
    "summary_fi": "Kuwarra-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Gibsoninaavikon ja läntisen aavikon alueella Länsi-Australiassa (koordinaateissa noin 28.1°S, 120.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gibson Desert / Western Desert estates",
    "feature_name_matches": [
      "Kuwarra"
    ]
  },
  {
    "slug": "kuwema-people",
    "name": "Kuwema People",
    "name_fi": "Kuwema-kansa",
    "native_name": "Kuwema",
    "alternate_names": [
      "Kuwema",
      "Kuwait"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kuwait",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q817",
    "summary_en": "Kuwait, officially the State of Kuwait, is a country in West Asia. With a coastline of approximately 500 km (311 mi), it is situated at the head of the Persian Gulf in the northeastern edge of the Arabian Peninsula, bordering Iraq to the north and Saudi Arabia to the south. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 13.5°S, 130.3°E.",
    "summary_fi": "Kuwema-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 13.5°S, 130.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Kuwema"
    ]
  },
  {
    "slug": "kwini-people",
    "name": "Kwini People",
    "name_fi": "Kwini-kansa",
    "native_name": "Kwini",
    "alternate_names": [
      "Kwini",
      "Yeidji"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yeidji",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48797821",
    "summary_en": "The Yeidji, also spelt Yiiji and other variants, commonly known as Gwini or Kwini, are an Aboriginal Australian people of the Kimberley area of Western Australia, who also self-identify as Balanggarra. Their traditional country encompasses Kimberley region, Western Australia, centered near 14.6°S, 127.5°E.",
    "summary_fi": "Kwini-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Kimberleyn alueella Länsi-Australiassa (koordinaateissa noin 14.6°S, 127.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Kimberley traditional estates",
    "feature_name_matches": [
      "Kwini"
    ]
  },
  {
    "slug": "larrakia-people",
    "name": "Larrakia People",
    "name_fi": "Larrakia-kansa",
    "native_name": "Larrakia",
    "alternate_names": [
      "Larrakia",
      "Larrakia people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Larrakia_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q6489790",
    "summary_en": "The Larrakia people are a group of Aboriginal Australian people in and around Darwin in the Northern Territory. The Larrakia, who refer to themselves as \"Saltwater People\", have a vibrant traditional society based on a close relationship with the sea and trade with neighbouring groups such as the Tiwi, Wadjiginy and Djerimanga. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 12.6°S, 131.1°E.",
    "summary_fi": "Larrakia-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 12.6°S, 131.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Larrakia"
    ]
  },
  {
    "slug": "limilngan-people",
    "name": "Limilngan People",
    "name_fi": "Limilngan-kansa",
    "native_name": "Limilngan",
    "alternate_names": [
      "Limilngan"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Limilngan",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q55630777",
    "summary_en": "The Limilngan, also known by the exonym Minitja and Buneidja, are an Aboriginal Australian people of the Northern Territory. Earlier ethnologists such as Norman Tindale referred to the group as Puneitja or variants of that spelling. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 12.7°S, 131.9°E.",
    "summary_fi": "Limilngan-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 12.7°S, 131.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Limilngan"
    ]
  },
  {
    "slug": "luritja-people",
    "name": "Luritja People",
    "name_fi": "Luritja-kansa",
    "native_name": "Luritja",
    "alternate_names": [
      "Luritja"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Luritja",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q55616272",
    "summary_en": "The Luritja or Loritja people, also known as Kukatja or Kukatja-Luritja, are an Aboriginal Australian people of the Northern Territory. Their traditional lands are immediately west of the River Derwent, that forms a frontier with the Arrernte people, with their lands covering some 27,000 square kilometres (10,300 mi2). Their traditional country encompasses Central Australia, Northern Territory, centered near 24.7°S, 131.9°E.",
    "summary_fi": "Luritja-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Keski-Australian aavikkoalueella Pohjoisterritoriossa (koordinaateissa noin 24.7°S, 131.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Australian Desert estates",
    "feature_name_matches": [
      "Luritja"
    ]
  },
  {
    "slug": "malak-malak-people",
    "name": "Malak malak People",
    "name_fi": "Malak malak-kansa",
    "native_name": "Malak malak",
    "alternate_names": [
      "Malak malak",
      "Malak-Malak language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Malak-Malak_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q6741120",
    "summary_en": "Malak-Malak, also known as Ngolak-Wonga (Nguluwongga), is an Australian Aboriginal language spoken by the Mulluk-Mulluk people. Malak-Malak is nearly extinct, with children growing up speaking Kriol or English instead. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 13.7°S, 130.8°E.",
    "summary_fi": "Malak malak-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 13.7°S, 130.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Malak malak"
    ]
  },
  {
    "slug": "malkana-people",
    "name": "Malkana People",
    "name_fi": "Malkana-kansa",
    "native_name": "Malkana",
    "alternate_names": [
      "Malkana"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Malkana",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q6743863",
    "summary_en": "The Malkana are a Muslim ethnic group found in the states of Uttar Pradesh and Bihar of India. Their traditional country encompasses Gibson Desert & Western Desert, Western Australia, centered near 26.2°S, 114.5°E.",
    "summary_fi": "Malkana-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Gibsoninaavikon ja läntisen aavikon alueella Länsi-Australiassa (koordinaateissa noin 26.2°S, 114.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gibson Desert / Western Desert estates",
    "feature_name_matches": [
      "Malkana"
    ]
  },
  {
    "slug": "mandjindja-people",
    "name": "Mandjindja People",
    "name_fi": "Mandjindja-kansa",
    "native_name": "Mandjindja",
    "alternate_names": [
      "Mandjindja"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mandjindja",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48801298",
    "summary_en": "The Mandjindja, Mantjintjarra or Manytjilytjarra are an Aboriginal Australian people of Western Australia belonging to the Western Desert cultural bloc. Their traditional country encompasses Gibson Desert & Western Desert, Western Australia, centered near 27.4°S, 125.8°E.",
    "summary_fi": "Mandjindja-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Gibsoninaavikon ja läntisen aavikon alueella Länsi-Australiassa (koordinaateissa noin 27.4°S, 125.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gibson Desert / Western Desert estates",
    "feature_name_matches": [
      "Mandjindja"
    ]
  },
  {
    "slug": "mangala-people",
    "name": "Mangala People",
    "name_fi": "Mangala-kansa",
    "native_name": "Mangala",
    "alternate_names": [
      "Mangala",
      "Mangarla"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mangarla",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q28219766",
    "summary_en": "The Mangarla, or Mangala, are an Aboriginal Australian people of Western Australia. The Mangarla people traditionally lived in the north-western area of the Great Sandy Desert, west of the Karajarri people, east of the Walmajarri, with the Juwaliny and Yulparija to the south. Their traditional country encompasses Great Sandy Desert & Tanami Desert, Western Australia / NT, centered near 19.5°S, 124.1°E.",
    "summary_fi": "Mangala-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Ison Hiekka-aavikon ja Tanamin aavikon alueella (koordinaateissa noin 19.5°S, 124.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Western Desert / Tanami estates",
    "feature_name_matches": [
      "Mangala"
    ]
  },
  {
    "slug": "mangarayi-people",
    "name": "Mangarayi People",
    "name_fi": "Mangarayi-kansa",
    "native_name": "Mangarayi",
    "alternate_names": [
      "Mangarayi"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mangarayi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48783531",
    "summary_en": "The Mangarayi, also written Mangarai, were an Indigenous Australian people of the Northern Territory. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 14.7°S, 133.7°E.",
    "summary_fi": "Mangarayi-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 14.7°S, 133.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Mangarayi"
    ]
  },
  {
    "slug": "maranunggu-people",
    "name": "Maranunggu People",
    "name_fi": "Maranunggu-kansa",
    "native_name": "Maranunggu",
    "alternate_names": [
      "Maranunggu",
      "Marranunggu"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Marranunggu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q28224608",
    "summary_en": "The Marranunggu are an Aboriginal Australian people and language group, of the Northern Territory. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 13.7°S, 130.2°E.",
    "summary_fi": "Maranunggu-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 13.7°S, 130.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Maranunggu"
    ]
  },
  {
    "slug": "mardu-people",
    "name": "Mardu People",
    "name_fi": "Mardu-kansa",
    "native_name": "Mardu",
    "alternate_names": [
      "Mardu",
      "Martu people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Martu_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q1693045",
    "summary_en": "The Martu or Mardu are a grouping of several Aboriginal Australian peoples in the Western Desert cultural bloc. Their traditional country encompasses Great Sandy Desert & Tanami Desert, Western Australia / NT, centered near 23.4°S, 124.1°E.",
    "summary_fi": "Mardu-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Ison Hiekka-aavikon ja Tanamin aavikon alueella (koordinaateissa noin 23.4°S, 124.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Western Desert / Tanami estates",
    "feature_name_matches": [
      "Mardu"
    ]
  },
  {
    "slug": "marramaninjsji-people",
    "name": "Marramaninjsji People",
    "name_fi": "Marramaninjsji-kansa",
    "native_name": "Marramaninjsji",
    "alternate_names": [
      "Marramaninjsji",
      "Marrithiyel language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Marrithiyel_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q6773014",
    "summary_en": "Marrithiyel, also known as Berringen, is an Australian Aboriginal language spoken by the Marrithiyal people. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 14.0°S, 130.3°E.",
    "summary_fi": "Marramaninjsji-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 14.0°S, 130.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Marramaninjsji"
    ]
  },
  {
    "slug": "marringarr-people",
    "name": "Marringarr People",
    "name_fi": "Marringarr-kansa",
    "native_name": "Marringarr",
    "alternate_names": [
      "Marringarr",
      "Marri Ngarr"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Marri_Ngarr",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48815567",
    "summary_en": "The Marri Ngarr, also spelt Maringar, Murrinnga, Muringa or Maringa are an Aboriginal people of the Northern Territory. Their traditional country encompasses Victoria River & Daly River region, Northern Territory, centered near 14.2°S, 129.7°E.",
    "summary_fi": "Marringarr-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoria- ja Daly-jokien laaksossa Pohjoisterritoriossa (koordinaateissa noin 14.2°S, 129.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victoria River / Daly River basin",
    "feature_name_matches": [
      "Marringarr"
    ]
  },
  {
    "slug": "marrithiyel-people",
    "name": "Marrithiyel People",
    "name_fi": "Marrithiyel-kansa",
    "native_name": "Marrithiyel",
    "alternate_names": [
      "Marrithiyel",
      "Marrithiyel language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Marrithiyel_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q6773014",
    "summary_en": "Marrithiyel, also known as Berringen, is an Australian Aboriginal language spoken by the Marrithiyal people. Their traditional country encompasses Victoria River & Daly River region, Northern Territory, centered near 13.8°S, 129.9°E.",
    "summary_fi": "Marrithiyel-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoria- ja Daly-jokien laaksossa Pohjoisterritoriossa (koordinaateissa noin 13.8°S, 129.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victoria River / Daly River basin",
    "feature_name_matches": [
      "Marrithiyel"
    ]
  },
  {
    "slug": "martuthunira-people",
    "name": "Martuthunira People",
    "name_fi": "Martuthunira-kansa",
    "native_name": "Martuthunira",
    "alternate_names": [
      "Martuthunira",
      "Mardudunera people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mardudunera_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q39088677",
    "summary_en": "The Mardudunera, more accurately, Martuthunira, are an Aboriginal Australian people in the Pilbara region of Western Australia. Their traditional country encompasses Pilbara region, Western Australia, centered near 21.1°S, 116.7°E.",
    "summary_fi": "Martuthunira-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pilbaran alueella Länsi-Australiassa (koordinaateissa noin 21.1°S, 116.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Pilbara traditional country",
    "feature_name_matches": [
      "Martuthunira"
    ]
  },
  {
    "slug": "maung-people",
    "name": "Maung People",
    "name_fi": "Maung-kansa",
    "native_name": "Maung",
    "alternate_names": [
      "Maung",
      "Maung people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Maung_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q28225101",
    "summary_en": "The Maung people, or Warruwi, are an Aboriginal Australian people living on the Goulburn Islands, in the Arafura Sea off the coast of the Northern Territory. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 11.8°S, 133.2°E.",
    "summary_fi": "Maung-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 11.8°S, 133.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Maung"
    ]
  },
  {
    "slug": "mbukarla-people",
    "name": "Mbukarla People",
    "name_fi": "Mbukarla-kansa",
    "native_name": "Mbukarla",
    "alternate_names": [
      "Mbukarla",
      "Umbugarla language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Umbugarla_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q2980392",
    "summary_en": "Umbugarla or Mbukarla is a possible Australian language isolate once spoken by three people in Arnhem Land, northern Australia as of 1981, and is now extinct. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 13.0°S, 132.8°E.",
    "summary_fi": "Mbukarla-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 13.0°S, 132.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Mbukarla"
    ]
  },
  {
    "slug": "mirning-people",
    "name": "Mirning People",
    "name_fi": "Mirning-kansa",
    "native_name": "Mirning",
    "alternate_names": [
      "Mirning"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mirning",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q16210895",
    "summary_en": "The Mirning, also known as the Ngandatha, are an Aboriginal Australian people whose traditional lands lay on the coastal region of the Great Australian Bight extending from Western Australia into south-west South Australia. Their traditional country encompasses Goldfields and Great Victoria Desert, Western Australia, centered near 31.7°S, 126.8°E.",
    "summary_fi": "Mirning-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Kultakenttien ja Ison Victorian aavikon alueella Länsi-Australiassa (koordinaateissa noin 31.7°S, 126.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Goldfields / Great Victoria Desert estates",
    "feature_name_matches": [
      "Mirning"
    ]
  },
  {
    "slug": "miwa-people",
    "name": "Miwa People",
    "name_fi": "Miwa-kansa",
    "native_name": "Miwa",
    "alternate_names": [
      "Miwa",
      "Miwa people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Miwa_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48797686",
    "summary_en": "The Miwa are an Aboriginal Australian people of the Kimberley region of Western Australia. Their traditional country encompasses Kimberley region, Western Australia, centered near 14.2°S, 127.0°E.",
    "summary_fi": "Miwa-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Kimberleyn alueella Länsi-Australiassa (koordinaateissa noin 14.2°S, 127.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Kimberley traditional estates",
    "feature_name_matches": [
      "Miwa"
    ]
  },
  {
    "slug": "mudburra-people",
    "name": "Mudburra People",
    "name_fi": "Mudburra-kansa",
    "native_name": "Mudburra",
    "alternate_names": [
      "Mudburra"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mudburra",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q55624041",
    "summary_en": "The Mudburra, also spelt Mudbara and other variants, are an Aboriginal Australian people of the Northern Territory. Their traditional country encompasses Victoria River & Daly River region, Northern Territory, centered near 17.0°S, 132.4°E.",
    "summary_fi": "Mudburra-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoria- ja Daly-jokien laaksossa Pohjoisterritoriossa (koordinaateissa noin 17.0°S, 132.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victoria River / Daly River basin",
    "feature_name_matches": [
      "Mudburra"
    ]
  },
  {
    "slug": "murrinh-patha-people",
    "name": "Murrinh-patha People",
    "name_fi": "Murrinh-patha-kansa",
    "native_name": "Murrinh-patha",
    "alternate_names": [
      "Murrinh-patha",
      "Murrinh-patha language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Murrinh-patha_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q2980398",
    "summary_en": "Murrinh-patha, called Garama by the Jaminjung, is an Australian Aboriginal language spoken by over 2,000 people, most of whom live in Wadeye in the Northern Territory, where it is the dominant language of the community. It is spoken by the Murrinh-Patha people, as well as several other peoples whose languages are extinct or nearly so, including the Mati Ke and Marri-Djabin. Their traditional country encompasses Victoria River & Daly River region, Northern Territory, centered near 14.5°S, 129.9°E.",
    "summary_fi": "Murrinh-patha-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoria- ja Daly-jokien laaksossa Pohjoisterritoriossa (koordinaateissa noin 14.5°S, 129.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victoria River / Daly River basin",
    "feature_name_matches": [
      "Murrinh-patha"
    ]
  },
  {
    "slug": "nakako-people",
    "name": "Nakako People",
    "name_fi": "Nakako-kansa",
    "native_name": "Nakako",
    "alternate_names": [
      "Nakako"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nakako",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48801295",
    "summary_en": "The Nakako are an Aboriginal Australian people of Western and Southern Australia. Their traditional country encompasses Gibson Desert & Western Desert, Western Australia, centered near 27.2°S, 128.2°E.",
    "summary_fi": "Nakako-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Gibsoninaavikon ja läntisen aavikon alueella Länsi-Australiassa (koordinaateissa noin 27.2°S, 128.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gibson Desert / Western Desert estates",
    "feature_name_matches": [
      "Nakako"
    ]
  },
  {
    "slug": "nana-people",
    "name": "Nana People",
    "name_fi": "Nana-kansa",
    "native_name": "Nana",
    "alternate_names": [
      "Nana",
      "Western Desert language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Western_Desert_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q4536460",
    "summary_en": "The Western Desert language, or Wati, is a dialect cluster of Australian Aboriginal languages in the Pama–Nyungan family. Their traditional country encompasses Gibson Desert & Western Desert, Western Australia, centered near 27.0°S, 121.9°E.",
    "summary_fi": "Nana-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Gibsoninaavikon ja läntisen aavikon alueella Länsi-Australiassa (koordinaateissa noin 27.0°S, 121.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gibson Desert / Western Desert estates",
    "feature_name_matches": [
      "Nana"
    ]
  },
  {
    "slug": "ngaanyatjarra-people",
    "name": "Ngaanyatjarra People",
    "name_fi": "Ngaanyatjarra-kansa",
    "native_name": "Ngaanyatjarra",
    "alternate_names": [
      "Ngaanyatjarra"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngaanyatjarra",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q5767417",
    "summary_en": "The Ngaanyatjarra, also known as the Nana, are an Indigenous Australian cultural group of Western Australia. They are located in the Goldfields-Esperance region, as well as Northern Territory. Their traditional country encompasses Gibson Desert & Western Desert, Western Australia, centered near 25.8°S, 124.5°E.",
    "summary_fi": "Ngaanyatjarra-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Gibsoninaavikon ja läntisen aavikon alueella Länsi-Australiassa (koordinaateissa noin 25.8°S, 124.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gibson Desert / Western Desert estates",
    "feature_name_matches": [
      "Ngaanyatjarra"
    ]
  },
  {
    "slug": "ngalakan-people",
    "name": "Ngalakan People",
    "name_fi": "Ngalakan-kansa",
    "native_name": "Ngalakan",
    "alternate_names": [
      "Ngalakan",
      "Ngalakgan"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngalakgan",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48782990",
    "summary_en": "The Ngalakgan are an indigenous Australian people of the Northern Territory. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 14.4°S, 134.1°E.",
    "summary_fi": "Ngalakan-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 14.4°S, 134.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Ngalakan"
    ]
  },
  {
    "slug": "ngalawangka-people",
    "name": "Ngalawangka People",
    "name_fi": "Ngalawangka-kansa",
    "native_name": "Ngalawangka",
    "alternate_names": [
      "Ngalawangka",
      "Ngarlawangga"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngarlawangga",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48803623",
    "summary_en": "The Ngarlawongga, or more properly Ngarla, were an Aboriginal Australian people of the inland Mid West region of Western Australia. They are not to be confused with the Ngarla who live on the coast. Their traditional country encompasses Gibson Desert & Western Desert, Western Australia, centered near 24.3°S, 119.3°E.",
    "summary_fi": "Ngalawangka-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Gibsoninaavikon ja läntisen aavikon alueella Länsi-Australiassa (koordinaateissa noin 24.3°S, 119.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gibson Desert / Western Desert estates",
    "feature_name_matches": [
      "Ngalawangka"
    ]
  },
  {
    "slug": "ngalea-people",
    "name": "Ngalea People",
    "name_fi": "Ngalea-kansa",
    "native_name": "Ngalea",
    "alternate_names": [
      "Ngalea",
      "Alain Ngalani"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Alain_Ngalani",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q4705692",
    "summary_en": "Alain Ngalani is a Cameroonian and Hongkonger retired mixed martial artist and Muay Thai kickboxer who most recently fought for ONE Championship, where he competed in the Heavyweight division. Their traditional country encompasses Goldfields and Great Victoria Desert, Western Australia, centered near 29.2°S, 129.0°E.",
    "summary_fi": "Ngalea-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Kultakenttien ja Ison Victorian aavikon alueella Länsi-Australiassa (koordinaateissa noin 29.2°S, 129.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Goldfields / Great Victoria Desert estates",
    "feature_name_matches": [
      "Ngalea"
    ]
  },
  {
    "slug": "ngaliwuru-people",
    "name": "Ngaliwuru People",
    "name_fi": "Ngaliwuru-kansa",
    "native_name": "Ngaliwuru",
    "alternate_names": [
      "Ngaliwuru",
      "Ngaliwurru people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngaliwurru_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48796938",
    "summary_en": "The Ngaliwurru are an indigenous Australian people of the Northern Territory. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 15.9°S, 130.9°E.",
    "summary_fi": "Ngaliwuru-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 15.9°S, 130.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Ngaliwuru"
    ]
  },
  {
    "slug": "ngalkbun-people",
    "name": "Ngalkbun People",
    "name_fi": "Ngalkbun-kansa",
    "native_name": "Ngalkbun",
    "alternate_names": [
      "Ngalkbun",
      "Dalabon language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Dalabon_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q3913790",
    "summary_en": "Dalabon is a Gunwinyguan language of Arnhem Land, Australia. It is a severely endangered language, with perhaps as one or two fluent speakers remaining as of 2025. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 13.5°S, 134.8°E.",
    "summary_fi": "Ngalkbun-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 13.5°S, 134.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Ngalkbun"
    ]
  },
  {
    "slug": "ngan-gikurunggurr-people",
    "name": "Ngan'gikurunggurr People",
    "name_fi": "Ngan'gikurunggurr-kansa",
    "native_name": "Ngan'gikurunggurr",
    "alternate_names": [
      "Ngan'gikurunggurr",
      "Ngan’gikurunggurr",
      "Ngan'gi language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngan'gi_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q3298041",
    "summary_en": "Ngan'gi, formerly known as Ngan'gityemerri, and also known as Ngan'gikurunggurr, Moil/Moyle, Tyemeri/Tyemerri, Marityemeri, and Nordaniman, is an Australian Aboriginal language spoken in the Daly River region of Australiaʼs Northern Territory. There are three mutually intelligible dialects, with the two sister dialects known as Ngen'giwumirri and Ngan'gimerri. Their traditional country encompasses Victoria River & Daly River region, Northern Territory, centered near 14.3°S, 129.9°E.",
    "summary_fi": "Ngan'gikurunggurr-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoria- ja Daly-jokien laaksossa Pohjoisterritoriossa (koordinaateissa noin 14.3°S, 129.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victoria River / Daly River basin",
    "feature_name_matches": [
      "Ngan’gikurunggurr"
    ]
  },
  {
    "slug": "ngan-giwumirri-people",
    "name": "Ngan'giwumirri People",
    "name_fi": "Ngan'giwumirri-kansa",
    "native_name": "Ngan'giwumirri",
    "alternate_names": [
      "Ngan'giwumirri",
      "Ngan’giwumirri",
      "Ngan'gimerri"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngan'gimerri",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q28224574",
    "summary_en": "The Ngan'gimerri, also spelt Nangiomeri, Nanggumiri, and other variants, are an Aboriginal Australian people of the Daly River area in the Northern Territory. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 14.2°S, 130.5°E.",
    "summary_fi": "Ngan'giwumirri-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 14.2°S, 130.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Ngan’giwumirri"
    ]
  },
  {
    "slug": "ngarinman-people",
    "name": "Ngarinman People",
    "name_fi": "Ngarinman-kansa",
    "native_name": "Ngarinman",
    "alternate_names": [
      "Ngarinman"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngarinman",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48800854",
    "summary_en": "The Ngarinman or Ngarinyman people are an Aboriginal Australian people of the Northern Territory who spoke the Ngarinyman language. Their traditional country encompasses Victoria River & Daly River region, Northern Territory, centered near 16.3°S, 130.1°E.",
    "summary_fi": "Ngarinman-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoria- ja Daly-jokien laaksossa Pohjoisterritoriossa (koordinaateissa noin 16.3°S, 130.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victoria River / Daly River basin",
    "feature_name_matches": [
      "Ngarinman"
    ]
  },
  {
    "slug": "ngarinyin-people",
    "name": "Ngarinyin People",
    "name_fi": "Ngarinyin-kansa",
    "native_name": "Ngarinyin",
    "alternate_names": [
      "Ngarinyin"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngarinyin",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q39088778",
    "summary_en": "The Ngarinyin or Ngarinjin are an Aboriginal Australian people of the Kimberley region of Western Australia. Their language, Ngarinyin, is also known as Ungarinyin. Their traditional country encompasses Kimberley region, Western Australia, centered near 15.7°S, 126.9°E.",
    "summary_fi": "Ngarinyin-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Kimberleyn alueella Länsi-Australiassa (koordinaateissa noin 15.7°S, 126.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Kimberley traditional estates",
    "feature_name_matches": [
      "Ngarinyin"
    ]
  },
  {
    "slug": "ngarla-people",
    "name": "Ngarla People",
    "name_fi": "Ngarla-kansa",
    "native_name": "Ngarla",
    "alternate_names": [
      "Ngarla"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngarla",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48799525",
    "summary_en": "The Ngarla are an Aboriginal Australian people of the Pilbara region of Western Australia. Their traditional country encompasses Pilbara region, Western Australia, centered near 20.2°S, 119.4°E.",
    "summary_fi": "Ngarla-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pilbaran alueella Länsi-Australiassa (koordinaateissa noin 20.2°S, 119.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Pilbara traditional country",
    "feature_name_matches": [
      "Ngarla"
    ]
  },
  {
    "slug": "ngarluma-people",
    "name": "Ngarluma People",
    "name_fi": "Ngarluma-kansa",
    "native_name": "Ngarluma",
    "alternate_names": [
      "Ngarluma"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngarluma",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q28219832",
    "summary_en": "The Ngarluma are an Indigenous Australian people of the western Pilbara area of northwest Australia. They are coastal dwellers of the area around Roebourne and Karratha, excluding Millstream. Their traditional country encompasses Pilbara region, Western Australia, centered near 20.9°S, 117.4°E.",
    "summary_fi": "Ngarluma-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pilbaran alueella Länsi-Australiassa (koordinaateissa noin 20.9°S, 117.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Pilbara traditional country",
    "feature_name_matches": [
      "Ngarluma"
    ]
  },
  {
    "slug": "ngarti-people",
    "name": "Ngarti People",
    "name_fi": "Ngarti-kansa",
    "native_name": "Ngarti",
    "alternate_names": [
      "Ngarti",
      "Ngardi"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngardi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48801057",
    "summary_en": "The Ngardi, also spelled Ngarti, are an Aboriginal Australian people of the Northern Territory and Western Australia. Their traditional country encompasses Central Australia, Northern Territory, centered near 20.3°S, 129.0°E.",
    "summary_fi": "Ngarti-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Keski-Australian aavikkoalueella Pohjoisterritoriossa (koordinaateissa noin 20.3°S, 129.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Australian Desert estates",
    "feature_name_matches": [
      "Ngarti"
    ]
  },
  {
    "slug": "ngatatjara-people",
    "name": "Ngatatjara People",
    "name_fi": "Ngatatjara-kansa",
    "native_name": "Ngatatjara",
    "alternate_names": [
      "Ngatatjara",
      "Ngaatjatjarra people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngaatjatjarra_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48801245",
    "summary_en": "The Ngaatjatjarra are an Indigenous Australian people of Western Australia, with communities located in the north eastern part of the Goldfields-Esperance region. Their traditional country encompasses Gibson Desert & Western Desert, Western Australia, centered near 25.3°S, 127.4°E.",
    "summary_fi": "Ngatatjara-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Gibsoninaavikon ja läntisen aavikon alueella Länsi-Australiassa (koordinaateissa noin 25.3°S, 127.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gibson Desert / Western Desert estates",
    "feature_name_matches": [
      "Ngatatjara"
    ]
  },
  {
    "slug": "ngatjumay-people",
    "name": "Ngatjumay People",
    "name_fi": "Ngatjumay-kansa",
    "native_name": "Ngatjumay",
    "alternate_names": [
      "Ngatjumay",
      "Ngadjunmaya language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngadjunmaya_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q7021846",
    "summary_en": "Ngadjunmaya, correctly known as Ngadjumaya, is a Pama–Nyungan language of Western Australia that is located in the Goldfields-Esperance region. Their traditional country encompasses Goldfields and Great Victoria Desert, Western Australia, centered near 32.2°S, 123.7°E.",
    "summary_fi": "Ngatjumay-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Kultakenttien ja Ison Victorian aavikon alueella Länsi-Australiassa (koordinaateissa noin 32.2°S, 123.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Goldfields / Great Victoria Desert estates",
    "feature_name_matches": [
      "Ngatjumay"
    ]
  },
  {
    "slug": "ngombur-people",
    "name": "Ngombur People",
    "name_fi": "Ngombur-kansa",
    "native_name": "Ngombur",
    "alternate_names": [
      "Ngombur",
      "Ngomburr"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngomburr",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q55625158",
    "summary_en": "The Ngormburr, also known as Murumburr and other variants, are an Aboriginal Australian people of the Northern Territory. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 12.9°S, 132.5°E.",
    "summary_fi": "Ngombur-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 12.9°S, 132.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Ngombur"
    ]
  },
  {
    "slug": "ngumbarl-people",
    "name": "Ngumbarl People",
    "name_fi": "Ngumbarl-kansa",
    "native_name": "Ngumbarl",
    "alternate_names": [
      "Ngumbarl",
      "Ngumbarl people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngumbarl_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48802628",
    "summary_en": "The Ngumbarl are an Aboriginal Australian people of Western Australia. Their traditional country encompasses Kimberley region, Western Australia, centered near 17.6°S, 122.5°E.",
    "summary_fi": "Ngumbarl-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Kimberleyn alueella Länsi-Australiassa (koordinaateissa noin 17.6°S, 122.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Kimberley traditional estates",
    "feature_name_matches": [
      "Ngumbarl"
    ]
  },
  {
    "slug": "nhanta-people",
    "name": "Nhanta People",
    "name_fi": "Nhanta-kansa",
    "native_name": "Nhanta",
    "alternate_names": [
      "Nhanta",
      "Nhanda language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nhanda_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q3339380",
    "summary_en": "Nhanda, also rendered Nanda, Nhanta and Nhandi, is an Australian Aboriginal language from the Midwest region of Western Australia, between Geraldton and the Murchison River, from the coast to about 20 kilometres inland. The language is now spoken, or semi-spoken, by only a few people. Their traditional country encompasses Gibson Desert & Western Desert, Western Australia, centered near 27.5°S, 114.5°E.",
    "summary_fi": "Nhanta-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Gibsoninaavikon ja läntisen aavikon alueella Länsi-Australiassa (koordinaateissa noin 27.5°S, 114.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gibson Desert / Western Desert estates",
    "feature_name_matches": [
      "Nhanta"
    ]
  },
  {
    "slug": "nhuwala-people",
    "name": "Nhuwala People",
    "name_fi": "Nhuwala-kansa",
    "native_name": "Nhuwala",
    "alternate_names": [
      "Nhuwala"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nhuwala",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48780371",
    "summary_en": "The Nhuwala are an Aboriginal Australian people of the Pilbara region of Western Australia. Their traditional country encompasses Pilbara region, Western Australia, centered near 21.7°S, 115.6°E.",
    "summary_fi": "Nhuwala-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pilbaran alueella Länsi-Australiassa (koordinaateissa noin 21.7°S, 115.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Pilbara traditional country",
    "feature_name_matches": [
      "Nhuwala"
    ]
  },
  {
    "slug": "nimanburu-people",
    "name": "Nimanburu People",
    "name_fi": "Nimanburu-kansa",
    "native_name": "Nimanburu",
    "alternate_names": [
      "Nimanburu",
      "Nimanburru"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nimanburru",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48799389",
    "summary_en": "The Nimanburu were an Aboriginal Australian people of the Kimberley region of Western Australia. Their traditional country encompasses Kimberley region, Western Australia, centered near 17.5°S, 123.1°E.",
    "summary_fi": "Nimanburu-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Kimberleyn alueella Länsi-Australiassa (koordinaateissa noin 17.5°S, 123.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Kimberley traditional estates",
    "feature_name_matches": [
      "Nimanburu"
    ]
  },
  {
    "slug": "nungali-people",
    "name": "Nungali People",
    "name_fi": "Nungali-kansa",
    "native_name": "Nungali",
    "alternate_names": [
      "Nungali"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nungali",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48796909",
    "summary_en": "The Nangali, otherwise known as the Ilngali, are an Indigenous Australian people of the Northern Territory. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 15.5°S, 130.9°E.",
    "summary_fi": "Nungali-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 15.5°S, 130.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Nungali"
    ]
  },
  {
    "slug": "nyaki-nyaki-people",
    "name": "Nyaki-nyaki People",
    "name_fi": "Nyaki-nyaki-kansa",
    "native_name": "Nyaki-nyaki",
    "alternate_names": [
      "Nyaki-nyaki",
      "Kalaamaya language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kalaamaya_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q6349988",
    "summary_en": "Kalaamaya, also spelled Karlamay, is a Pama–Nyungan language of Western Australia. It is poorly attested, but appears to be a close relative of Noongar. Their traditional country encompasses Southwest Western Australia (Noongar country), centered near 32.1°S, 118.8°E.",
    "summary_fi": "Nyaki-nyaki-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Lounais-Australian Noongar-mailla (koordinaateissa noin 32.1°S, 118.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Southwest WA traditional lands",
    "feature_name_matches": [
      "Nyaki-nyaki"
    ]
  },
  {
    "slug": "nyamal-people",
    "name": "Nyamal People",
    "name_fi": "Nyamal-kansa",
    "native_name": "Nyamal",
    "alternate_names": [
      "Nyamal"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nyamal",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q28220115",
    "summary_en": "The Nyamal are an Indigenous Australian people of the Pilbara area of north-western Western Australia. Their traditional country encompasses Pilbara region, Western Australia, centered near 21.2°S, 119.9°E.",
    "summary_fi": "Nyamal-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pilbaran alueella Länsi-Australiassa (koordinaateissa noin 21.2°S, 119.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Pilbara traditional country",
    "feature_name_matches": [
      "Nyamal"
    ]
  },
  {
    "slug": "nyanganyatjara-people",
    "name": "Nyanganyatjara People",
    "name_fi": "Nyanganyatjara-kansa",
    "native_name": "Nyanganyatjara",
    "alternate_names": [
      "Nyanganyatjara",
      "Western Desert language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Western_Desert_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q4536460",
    "summary_en": "The Western Desert language, or Wati, is a dialect cluster of Australian Aboriginal languages in the Pama–Nyungan family. Their traditional country encompasses Goldfields and Great Victoria Desert, Western Australia, centered near 29.3°S, 125.5°E.",
    "summary_fi": "Nyanganyatjara-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Kultakenttien ja Ison Victorian aavikon alueella Länsi-Australiassa (koordinaateissa noin 29.3°S, 125.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Goldfields / Great Victoria Desert estates",
    "feature_name_matches": [
      "Nyanganyatjara"
    ]
  },
  {
    "slug": "nyangumarda-people",
    "name": "Nyangumarda People",
    "name_fi": "Nyangumarda-kansa",
    "native_name": "Nyangumarda",
    "alternate_names": [
      "Nyangumarda",
      "Nyangumarta people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nyangumarta_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q7070890",
    "summary_en": "The Nyangumarta people, also written Njaŋumada, Njangamada, Njanjamarta and other variations, are a nation of Aboriginal Australians from the northwestern coast of Western Australia. According to Norman Tindale, they are divided into two distinct branches, the Kundal and the Iparuka. Their traditional country encompasses Great Sandy Desert & Tanami Desert, Western Australia / NT, centered near 20.6°S, 122.1°E.",
    "summary_fi": "Nyangumarda-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Ison Hiekka-aavikon ja Tanamin aavikon alueella (koordinaateissa noin 20.6°S, 122.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Western Desert / Tanami estates",
    "feature_name_matches": [
      "Nyangumarda"
    ]
  },
  {
    "slug": "nyikina-people",
    "name": "Nyikina People",
    "name_fi": "Nyikina-kansa",
    "native_name": "Nyikina",
    "alternate_names": [
      "Nyikina",
      "Nyigina"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nyigina",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q7071108",
    "summary_en": "The Nyikina people are an Aboriginal Australian people of the Kimberley region of Western Australia. Their traditional country encompasses Kimberley region, Western Australia, centered near 18.0°S, 124.3°E.",
    "summary_fi": "Nyikina-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Kimberleyn alueella Länsi-Australiassa (koordinaateissa noin 18.0°S, 124.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Kimberley traditional estates",
    "feature_name_matches": [
      "Nyikina"
    ]
  },
  {
    "slug": "nyul-nyul-people",
    "name": "Nyul Nyul People",
    "name_fi": "Nyul Nyul-kansa",
    "native_name": "Nyul Nyul",
    "alternate_names": [
      "Nyul Nyul",
      "Nyulnyul people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nyulnyul_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48802653",
    "summary_en": "The Nyulnyul, also spelt Nyul Nyul, Njolnjol, Nyolnyol and other variants, are an Aboriginal Australian people of the Kimberley region of Western Australia. Their traditional country encompasses Kimberley region, Western Australia, centered near 16.9°S, 122.8°E.",
    "summary_fi": "Nyul Nyul-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Kimberleyn alueella Länsi-Australiassa (koordinaateissa noin 16.9°S, 122.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Kimberley traditional estates",
    "feature_name_matches": [
      "Nyul Nyul"
    ]
  },
  {
    "slug": "palyku-people",
    "name": "Palyku People",
    "name_fi": "Palyku-kansa",
    "native_name": "Palyku",
    "alternate_names": [
      "Palyku",
      "Bailgu"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Bailgu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48797661",
    "summary_en": "The Bailgu are an Aboriginal Australian people of the Pilbara region of Western Australia. Their traditional country encompasses Pilbara region, Western Australia, centered near 22.6°S, 120.3°E.",
    "summary_fi": "Palyku-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pilbaran alueella Länsi-Australiassa (koordinaateissa noin 22.6°S, 120.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Pilbara traditional country",
    "feature_name_matches": [
      "Palyku"
    ]
  },
  {
    "slug": "payungu-people",
    "name": "Payungu People",
    "name_fi": "Payungu-kansa",
    "native_name": "Payungu",
    "alternate_names": [
      "Payungu",
      "Baiyungu"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Baiyungu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48800565",
    "summary_en": "The Baiyungu are an Aboriginal Australian people of the Gascoyne region of Western Australia. Their traditional country encompasses Pilbara region, Western Australia, centered near 23.4°S, 114.2°E.",
    "summary_fi": "Payungu-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pilbaran alueella Länsi-Australiassa (koordinaateissa noin 23.4°S, 114.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Pilbara traditional country",
    "feature_name_matches": [
      "Payungu"
    ]
  },
  {
    "slug": "pitjantjatjara-people",
    "name": "Pitjantjatjara People",
    "name_fi": "Pitjantjatjara-kansa",
    "native_name": "Pitjantjatjara",
    "alternate_names": [
      "Pitjantjatjara"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pitjantjatjara",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q1375066",
    "summary_en": "The Pitjantjatjara are an Aboriginal Australian people, originating from the Central Australian desert near Uluru, Australia. They are closely related to the Yankunytjatjara and Ngaanyatjarra people. Their traditional country encompasses Central Australia, Northern Territory, centered near 26.0°S, 129.9°E.",
    "summary_fi": "Pitjantjatjara-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Keski-Australian aavikkoalueella Pohjoisterritoriossa (koordinaateissa noin 26.0°S, 129.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Australian Desert estates",
    "feature_name_matches": [
      "Pitjantjatjara"
    ]
  },
  {
    "slug": "punuba-people",
    "name": "Punuba People",
    "name_fi": "Punuba-kansa",
    "native_name": "Punuba",
    "alternate_names": [
      "Punuba",
      "Bunuba"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Bunuba",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q16209713",
    "summary_en": "The Bunuba are a group of Indigenous Australians and are one of the traditional owners of the southern West Kimberley, in Western Australia. Many now live in and around the town of Fitzroy Crossing. Their traditional country encompasses Kimberley region, Western Australia, centered near 17.8°S, 125.8°E.",
    "summary_fi": "Punuba-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Kimberleyn alueella Länsi-Australiassa (koordinaateissa noin 17.8°S, 125.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Kimberley traditional estates",
    "feature_name_matches": [
      "Punuba"
    ]
  },
  {
    "slug": "purduna-people",
    "name": "Purduna People",
    "name_fi": "Purduna-kansa",
    "native_name": "Purduna",
    "alternate_names": [
      "Purduna",
      "Burduna language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Burduna_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q4998313",
    "summary_en": "Burduna (Purduna) is an Aboriginal language that was traditionally spoken in the region between the Ashburton and Gascoyne Rivers in the Pilbara region of Western Australia. It belongs to the Kanyara group of languages, which also includes Binigura/Pinikura, Thalanyji, and Bayungu. Their traditional country encompasses Pilbara region, Western Australia, centered near 23.3°S, 115.2°E.",
    "summary_fi": "Purduna-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pilbaran alueella Länsi-Australiassa (koordinaateissa noin 23.3°S, 115.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Pilbara traditional country",
    "feature_name_matches": [
      "Purduna"
    ]
  },
  {
    "slug": "rembarnga-people",
    "name": "Rembarnga People",
    "name_fi": "Rembarnga-kansa",
    "native_name": "Rembarnga",
    "alternate_names": [
      "Rembarnga",
      "Rembarrnga language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Rembarrnga_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q7311553",
    "summary_en": "Rembarrnga (Rembarunga) is an Australian Aboriginal language. It is one of the Northern Non-Pama–Nyungan languages, spoken in the Roper River region of the Northern Territory. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 12.9°S, 134.5°E.",
    "summary_fi": "Rembarnga-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 12.9°S, 134.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Rembarnga"
    ]
  },
  {
    "slug": "thalanyji-people",
    "name": "Thalanyji People",
    "name_fi": "Thalanyji-kansa",
    "native_name": "Thalanyji",
    "alternate_names": [
      "Thalanyji"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Thalanyji",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48796546",
    "summary_en": "The Thalanyji, also spelt Thalandji, Dhalandji, and other variations, are an Aboriginal Australian people in the Pilbara region of Western Australia. Their traditional country encompasses Pilbara region, Western Australia, centered near 22.4°S, 114.7°E.",
    "summary_fi": "Thalanyji-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pilbaran alueella Länsi-Australiassa (koordinaateissa noin 22.4°S, 114.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Pilbara traditional country",
    "feature_name_matches": [
      "Thalanyji"
    ]
  },
  {
    "slug": "tharrgari-people",
    "name": "Tharrgari People",
    "name_fi": "Tharrgari-kansa",
    "native_name": "Tharrgari",
    "alternate_names": [
      "Tharrgari",
      "Tharrkari"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tharrkari",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q39091058",
    "summary_en": "The Tharrkari, also referred to as the Targari, are an Aboriginal Australian people of the Gascoyne region of Western Australia. Their traditional country encompasses Gibson Desert & Western Desert, Western Australia, centered near 24.2°S, 115.3°E.",
    "summary_fi": "Tharrgari-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Gibsoninaavikon ja läntisen aavikon alueella Länsi-Australiassa (koordinaateissa noin 24.2°S, 115.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gibson Desert / Western Desert estates",
    "feature_name_matches": [
      "Tharrgari"
    ]
  },
  {
    "slug": "thiin-people",
    "name": "Thiin People",
    "name_fi": "Thiin-kansa",
    "native_name": "Thiin",
    "alternate_names": [
      "Thiin",
      "Tenma people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tenma_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48800227",
    "summary_en": "The Tenma or Thiin were an Aboriginal Australian people of the Pilbara region of Western Australia. They speak the Thiinma language. Their traditional country encompasses Pilbara region, Western Australia, centered near 23.8°S, 116.7°E.",
    "summary_fi": "Thiin-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pilbaran alueella Länsi-Australiassa (koordinaateissa noin 23.8°S, 116.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Pilbara traditional country",
    "feature_name_matches": [
      "Thiin"
    ]
  },
  {
    "slug": "tjalkanti-people",
    "name": "Tjalkanti People",
    "name_fi": "Tjalkanti-kansa",
    "native_name": "Tjalkanti",
    "alternate_names": [
      "Tjalkanti",
      "Talkative Man"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Talkative_Man",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q7679718",
    "summary_en": "Talkative Man is a novel by R. Narayan first published in 1986 by Heinemann. Their traditional country encompasses Gibson Desert & Western Desert, Western Australia, centered near 27.6°S, 123.2°E.",
    "summary_fi": "Tjalkanti-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Gibsoninaavikon ja läntisen aavikon alueella Länsi-Australiassa (koordinaateissa noin 27.6°S, 123.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gibson Desert / Western Desert estates",
    "feature_name_matches": [
      "Tjalkanti"
    ]
  },
  {
    "slug": "tjerratj-people",
    "name": "Tjerratj People",
    "name_fi": "Tjerratj-kansa",
    "native_name": "Tjerratj",
    "alternate_names": [
      "Tjerratj",
      "Terra Jolé"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Terra_Jol%C3%A9",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q18340461",
    "summary_en": "Terra Jolé Odmark is an American reality television personality known for Little Women: LA and its spinoffs and Dancing with the Stars. She stands at 4 ft 2 in (127 cm) as a person with dwarfism. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 13.4°S, 130.4°E.",
    "summary_fi": "Tjerratj-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 13.4°S, 130.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Tjerratj"
    ]
  },
  {
    "slug": "tjupany-people",
    "name": "Tjupany People",
    "name_fi": "Tjupany-kansa",
    "native_name": "Tjupany",
    "alternate_names": [
      "Tjupany",
      "Tjupan dialect"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tjupan_dialect",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q63311956",
    "summary_en": "Tjupan (Tjupany) is one of the Wati languages of the large Pama–Nyungan family of Australia. It is sometimes counted as a dialect of the Western Desert Language, but is classified as a distinct language by Bowern. Their traditional country encompasses Gibson Desert & Western Desert, Western Australia, centered near 27.0°S, 119.6°E.",
    "summary_fi": "Tjupany-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Gibsoninaavikon ja läntisen aavikon alueella Länsi-Australiassa (koordinaateissa noin 27.0°S, 119.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gibson Desert / Western Desert estates",
    "feature_name_matches": [
      "Tjupany"
    ]
  },
  {
    "slug": "umida-people",
    "name": "Umida People",
    "name_fi": "Umida-kansa",
    "native_name": "Umida",
    "alternate_names": [
      "Umida",
      "Umiida"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Umiida",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q39090787",
    "summary_en": "The Umiida, also written Umida and Umede, were an Aboriginal Australian people of the Kimberley region of north Western Australia. Their traditional country encompasses Kimberley region, Western Australia, centered near 16.7°S, 124.2°E.",
    "summary_fi": "Umida-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Kimberleyn alueella Länsi-Australiassa (koordinaateissa noin 16.7°S, 124.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Kimberley traditional estates",
    "feature_name_matches": [
      "Umida"
    ]
  },
  {
    "slug": "unggarangi-people",
    "name": "Unggarangi People",
    "name_fi": "Unggarangi-kansa",
    "native_name": "Unggarangi",
    "alternate_names": [
      "Unggarangi",
      "Unggarrangu"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Unggarrangu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48797851",
    "summary_en": "The Unggarranggu, also traditionally transcribed as Ongkarango, are an Aboriginal Australian people of the Kimberley region of Western Australia. Their traditional country encompasses Kimberley region, Western Australia, centered near 16.7°S, 123.8°E.",
    "summary_fi": "Unggarangi-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Kimberleyn alueella Länsi-Australiassa (koordinaateissa noin 16.7°S, 123.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Kimberley traditional estates",
    "feature_name_matches": [
      "Unggarangi"
    ]
  },
  {
    "slug": "unggumi-people",
    "name": "Unggumi People",
    "name_fi": "Unggumi-kansa",
    "native_name": "Unggumi",
    "alternate_names": [
      "Unggumi"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Unggumi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48799200",
    "summary_en": "The Unggumi, also written Ongkomi, are an Aboriginal Australian people of the Kimberley region of Western Australia. Their traditional country encompasses Kimberley region, Western Australia, centered near 17.0°S, 125.0°E.",
    "summary_fi": "Unggumi-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Kimberleyn alueella Länsi-Australiassa (koordinaateissa noin 17.0°S, 125.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Kimberley traditional estates",
    "feature_name_matches": [
      "Unggumi"
    ]
  },
  {
    "slug": "wagiman-people",
    "name": "Wagiman People",
    "name_fi": "Wagiman-kansa",
    "native_name": "Wagiman",
    "alternate_names": [
      "Wagiman"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wagiman",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q55637326",
    "summary_en": "The Wagiman, also spelt Wagoman, Wagaman, Wogeman, and other variants, are an Aboriginal Australian people of the Northern Territory. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 14.1°S, 131.4°E.",
    "summary_fi": "Wagiman-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 14.1°S, 131.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Wagiman"
    ]
  },
  {
    "slug": "wajuk-people",
    "name": "Wajuk People",
    "name_fi": "Wajuk-kansa",
    "native_name": "Wajuk",
    "alternate_names": [
      "Wajuk",
      "Noongar language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Noongar_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q7049771",
    "summary_en": "Noongar, also Nyungar, is an Australian Aboriginal language or dialect continuum, spoken by some members of the Noongar community and others. It is taught actively in Australia, including at schools, universities and through public broadcasting. Their traditional country encompasses Southwest Western Australia (Noongar country), centered near 32.0°S, 116.2°E.",
    "summary_fi": "Wajuk-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Lounais-Australian Noongar-mailla (koordinaateissa noin 32.0°S, 116.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Southwest WA traditional lands",
    "feature_name_matches": [
      "Wajuk"
    ]
  },
  {
    "slug": "walmatjarri-people",
    "name": "Walmatjarri People",
    "name_fi": "Walmatjarri-kansa",
    "native_name": "Walmatjarri",
    "alternate_names": [
      "Walmatjarri",
      "Walmadjari"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Walmadjari",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48799654",
    "summary_en": "The Walmadjari (Walmajarri) people, also known as Tjiwaling and Wanaseka, are an Aboriginal Australian people of the Kimberley region of Western Australia. Their traditional country encompasses Great Sandy Desert & Tanami Desert, Western Australia / NT, centered near 19.4°S, 125.8°E.",
    "summary_fi": "Walmatjarri-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Ison Hiekka-aavikon ja Tanamin aavikon alueella (koordinaateissa noin 19.4°S, 125.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Western Desert / Tanami estates",
    "feature_name_matches": [
      "Walmatjarri"
    ]
  },
  {
    "slug": "wangkathaa-people",
    "name": "Wangkathaa People",
    "name_fi": "Wangkathaa-kansa",
    "native_name": "Wangkathaa",
    "alternate_names": [
      "Wangkathaa",
      "Wangkatha"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wangkatha",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q7967790",
    "summary_en": "Wangkatha, otherwise written Wongatha, Wongutha, Wangkatja, Wongi or Wangai, is a language and the identity of eight Aboriginal Australian peoples of the Eastern Goldfields region. The Wangkatja language groups cover the following towns: Coolgardie, Kalgoorlie, Menzies, Leonora and Laverton; these towns encompass the North-eastern Goldfields region of Western Australia. Their traditional country encompasses Goldfields and Great Victoria Desert, Western Australia, centered near 30.0°S, 122.1°E.",
    "summary_fi": "Wangkathaa-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Kultakenttien ja Ison Victorian aavikon alueella Länsi-Australiassa (koordinaateissa noin 30.0°S, 122.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Goldfields / Great Victoria Desert estates",
    "feature_name_matches": [
      "Wangkathaa"
    ]
  },
  {
    "slug": "wardaman-people",
    "name": "Wardaman People",
    "name_fi": "Wardaman-kansa",
    "native_name": "Wardaman",
    "alternate_names": [
      "Wardaman",
      "Wardaman people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wardaman_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q7969102",
    "summary_en": "The Wardaman people are a small group of Aboriginal Australians living about 145 kilometres (90 mi) South-West of Katherine, on Menngen Aboriginal Land Trust in the Northern Territory of Australia. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 15.4°S, 131.8°E.",
    "summary_fi": "Wardaman-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 15.4°S, 131.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Wardaman"
    ]
  },
  {
    "slug": "wardandi-people",
    "name": "Wardandi People",
    "name_fi": "Wardandi-kansa",
    "native_name": "Wardandi",
    "alternate_names": [
      "Wardandi"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wardandi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q39090882",
    "summary_en": "The Wadandi, also spelt Wardandi and other variants, are an Aboriginal people of south-western Western Australia, one of fourteen language groups of the Noongar peoples. Their traditional country encompasses Southwest Western Australia (Noongar country), centered near 33.9°S, 115.4°E.",
    "summary_fi": "Wardandi-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Lounais-Australian Noongar-mailla (koordinaateissa noin 33.9°S, 115.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Southwest WA traditional lands",
    "feature_name_matches": [
      "Wardandi"
    ]
  },
  {
    "slug": "warlmanpa-people",
    "name": "Warlmanpa People",
    "name_fi": "Warlmanpa-kansa",
    "native_name": "Warlmanpa",
    "alternate_names": [
      "Warlmanpa"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Warlmanpa",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q55637422",
    "summary_en": "The Warlmanpa are an Indigenous Australian people of the Northern Territory. Their traditional country encompasses Indigenous Australia, centered near 18.5°S, 132.5°E.",
    "summary_fi": "Warlmanpa-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Australian alkuperäismailla (koordinaateissa noin 18.5°S, 132.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Traditional country",
    "feature_name_matches": [
      "Warlmanpa"
    ]
  },
  {
    "slug": "warlpiri-people",
    "name": "Warlpiri People",
    "name_fi": "Warlpiri-kansa",
    "native_name": "Warlpiri",
    "alternate_names": [
      "Warlpiri",
      "Warlpiri people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Warlpiri_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q4989843",
    "summary_en": "The Warlpiri, sometimes referred to as Yapa, are a group of Aboriginal Australians defined by their Warlpiri language, although not all still speak it. There are 5,000–6,000 Warlpiri, living mostly in a few towns and settlements scattered through their traditional land in the Northern Territory, north and west of Alice Springs (Mparntwe). Their traditional country encompasses Central Australia, Northern Territory, centered near 20.4°S, 131.6°E.",
    "summary_fi": "Warlpiri-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Keski-Australian aavikkoalueella Pohjoisterritoriossa (koordinaateissa noin 20.4°S, 131.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Australian Desert estates",
    "feature_name_matches": [
      "Warlpiri"
    ]
  },
  {
    "slug": "warray-people",
    "name": "Warray People",
    "name_fi": "Warray-kansa",
    "native_name": "Warray",
    "alternate_names": [
      "Warray",
      "Awarai"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Awarai",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48782629",
    "summary_en": "The Awarai (Warray) are an indigenous Australian people of the Northern Territory. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 13.5°S, 132.2°E.",
    "summary_fi": "Warray-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 13.5°S, 132.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Warray"
    ]
  },
  {
    "slug": "warriyangga-people",
    "name": "Warriyangga People",
    "name_fi": "Warriyangga-kansa",
    "native_name": "Warriyangga",
    "alternate_names": [
      "Warriyangga"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Warriyangga",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48800211",
    "summary_en": "The Wariangga, also written Warriyangka, are an Aboriginal Australian people of the Gascoyne region in Western Australia. Their traditional country encompasses Gibson Desert & Western Desert, Western Australia, centered near 24.6°S, 115.9°E.",
    "summary_fi": "Warriyangga-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Gibsoninaavikon ja läntisen aavikon alueella Länsi-Australiassa (koordinaateissa noin 24.6°S, 115.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gibson Desert / Western Desert estates",
    "feature_name_matches": [
      "Warriyangga"
    ]
  },
  {
    "slug": "warumungu-people",
    "name": "Warumungu People",
    "name_fi": "Warumungu-kansa",
    "native_name": "Warumungu",
    "alternate_names": [
      "Warumungu"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Warumungu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q3245102",
    "summary_en": "The Warumungu are a group of Aboriginal Australians of the Northern Territory. Today, Warumungu are mainly concentrated in the region of Tennant Creek and Alice Springs. Their traditional country encompasses Central Australia, Northern Territory, centered near 19.5°S, 134.0°E.",
    "summary_fi": "Warumungu-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Keski-Australian aavikkoalueella Pohjoisterritoriossa (koordinaateissa noin 19.5°S, 134.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Australian Desert estates",
    "feature_name_matches": [
      "Warumungu"
    ]
  },
  {
    "slug": "warwa-people",
    "name": "Warwa People",
    "name_fi": "Warwa-kansa",
    "native_name": "Warwa",
    "alternate_names": [
      "Warwa",
      "Warrwa"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Warrwa",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48799176",
    "summary_en": "The Warrwa, also spelt Warwa, are an Aboriginal Australian people of the Kimberley region of Western Australia. Their traditional country encompasses Kimberley region, Western Australia, centered near 17.1°S, 124.2°E.",
    "summary_fi": "Warwa-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Kimberleyn alueella Länsi-Australiassa (koordinaateissa noin 17.1°S, 124.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Kimberley traditional estates",
    "feature_name_matches": [
      "Warwa"
    ]
  },
  {
    "slug": "watjarri-people",
    "name": "Watjarri People",
    "name_fi": "Watjarri-kansa",
    "native_name": "Watjarri",
    "alternate_names": [
      "Watjarri",
      "Wajarri"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wajarri",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q39091101",
    "summary_en": "The Wajarri people, also spelt Wadjari, Wadjarri, Watjarri, and other variations, are an Aboriginal Australian people whose traditional lands are in the Mid West region of Western Australia. Their traditional country encompasses Gibson Desert & Western Desert, Western Australia, centered near 26.3°S, 116.7°E.",
    "summary_fi": "Watjarri-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Gibsoninaavikon ja läntisen aavikon alueella Länsi-Australiassa (koordinaateissa noin 26.3°S, 116.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gibson Desert / Western Desert estates",
    "feature_name_matches": [
      "Watjarri"
    ]
  },
  {
    "slug": "wawula-people",
    "name": "Wawula People",
    "name_fi": "Wawula-kansa",
    "native_name": "Wawula",
    "alternate_names": [
      "Wawula",
      "Western Desert language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Western_Desert_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q4536460",
    "summary_en": "The Western Desert language, or Wati, is a dialect cluster of Australian Aboriginal languages in the Pama–Nyungan family. Their traditional country encompasses Gibson Desert & Western Desert, Western Australia, centered near 24.8°S, 121.1°E.",
    "summary_fi": "Wawula-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Gibsoninaavikon ja läntisen aavikon alueella Länsi-Australiassa (koordinaateissa noin 24.8°S, 121.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gibson Desert / Western Desert estates",
    "feature_name_matches": [
      "Wawula"
    ]
  },
  {
    "slug": "wiilman-people",
    "name": "Wiilman People",
    "name_fi": "Wiilman-kansa",
    "native_name": "Wiilman",
    "alternate_names": [
      "Wiilman"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wiilman",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q39090910",
    "summary_en": "The Wiilman people are an Aboriginal Australian people of the Noongar group, from the Wheatbelt, Great Southern and South West regions of Western Australia. Variant spellings of the name include Wilman, Wirlomin, Wilmen and Wheelman. Their traditional country encompasses Southwest Western Australia (Noongar country), centered near 32.9°S, 116.9°E.",
    "summary_fi": "Wiilman-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Lounais-Australian Noongar-mailla (koordinaateissa noin 32.9°S, 116.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Southwest WA traditional lands",
    "feature_name_matches": [
      "Wiilman"
    ]
  },
  {
    "slug": "wirangu-people",
    "name": "Wirangu People",
    "name_fi": "Wirangu-kansa",
    "native_name": "Wirangu",
    "alternate_names": [
      "Wirangu",
      "Wirangu people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wirangu_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48815936",
    "summary_en": "The Wirangu are an Aboriginal Australian people of the Western coastal region of South Australia. Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 31.6°S, 133.5°E.",
    "summary_fi": "Wirangu-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 31.6°S, 133.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Wirangu"
    ]
  },
  {
    "slug": "woolna-people",
    "name": "Woolna People",
    "name_fi": "Woolna-kansa",
    "native_name": "Woolna",
    "alternate_names": [
      "Woolna",
      "Djerimanga"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Djerimanga",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48782619",
    "summary_en": "The Djerimanga are an Indigenous Australian people of the Northern Territory. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 12.6°S, 131.4°E.",
    "summary_fi": "Woolna-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 12.6°S, 131.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Woolna"
    ]
  },
  {
    "slug": "worla-people",
    "name": "Worla People",
    "name_fi": "Worla-kansa",
    "native_name": "Worla",
    "alternate_names": [
      "Worla"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Worla",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48799213",
    "summary_en": "The Wurla, also written Ola, or Waladjangarri, are an Aboriginal Australian people of the Kimberley region of Western Australia. Their traditional country encompasses Kimberley region, Western Australia, centered near 16.8°S, 126.9°E.",
    "summary_fi": "Worla-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Kimberleyn alueella Länsi-Australiassa (koordinaateissa noin 16.8°S, 126.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Kimberley traditional estates",
    "feature_name_matches": [
      "Worla"
    ]
  },
  {
    "slug": "worora-people",
    "name": "Worora People",
    "name_fi": "Worora-kansa",
    "native_name": "Worora",
    "alternate_names": [
      "Worora",
      "Worrorra"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Worrorra",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q28128832",
    "summary_en": "The Worrorra, also written Worora, are an Aboriginal Australian people of the Kimberley area of north-western Australia. Their traditional country encompasses Kimberley region, Western Australia, centered near 15.8°S, 125.1°E.",
    "summary_fi": "Worora-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Kimberleyn alueella Länsi-Australiassa (koordinaateissa noin 15.8°S, 125.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Kimberley traditional estates",
    "feature_name_matches": [
      "Worora"
    ]
  },
  {
    "slug": "wudjari-people",
    "name": "Wudjari People",
    "name_fi": "Wudjari-kansa",
    "native_name": "Wudjari",
    "alternate_names": [
      "Wudjari"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wudjari",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q62107406",
    "summary_en": "The Wudjari are an Aboriginal Australian people of the Noongar cultural group of the southern region of Western Australia. Their traditional country encompasses Goldfields and Great Victoria Desert, Western Australia, centered near 33.6°S, 121.3°E.",
    "summary_fi": "Wudjari-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Kultakenttien ja Ison Victorian aavikon alueella Länsi-Australiassa (koordinaateissa noin 33.6°S, 121.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Goldfields / Great Victoria Desert estates",
    "feature_name_matches": [
      "Wudjari"
    ]
  },
  {
    "slug": "wunambul-people",
    "name": "Wunambul People",
    "name_fi": "Wunambul-kansa",
    "native_name": "Wunambul",
    "alternate_names": [
      "Wunambul",
      "Wunambal language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wunambal_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q3913805",
    "summary_en": "The Wunambal language, also known as Northern Worrorran, Gamberre, or Gambera, is a moribund Australian Aboriginal language of Western Australia. It has several dialects, including Yiiji, Gunin, Miwa, and Wilawila. Their traditional country encompasses Kimberley region, Western Australia, centered near 15.1°S, 125.5°E.",
    "summary_fi": "Wunambul-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Kimberleyn alueella Länsi-Australiassa (koordinaateissa noin 15.1°S, 125.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Kimberley traditional estates",
    "feature_name_matches": [
      "Wunambul"
    ]
  },
  {
    "slug": "wuningangk-people",
    "name": "Wuningangk People",
    "name_fi": "Wuningangk-kansa",
    "native_name": "Wuningangk",
    "alternate_names": [
      "Wuningangk",
      "W. Chingang Konyak"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/W._Chingang_Konyak",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q131105689",
    "summary_en": "Chingang Konyak is an Indian politician from Nagaland. He is an MLA from the Wakching Assembly constituency, which is reserved for Scheduled Tribe community, in Mon district. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 13.1°S, 133.2°E.",
    "summary_fi": "Wuningangk-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 13.1°S, 133.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Wuningangk"
    ]
  },
  {
    "slug": "yangman-people",
    "name": "Yangman People",
    "name_fi": "Yangman-kansa",
    "native_name": "Yangman",
    "alternate_names": [
      "Yangman"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yangman",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48796868",
    "summary_en": "The Yangman were an indigenous Australian people of the Northern Territory. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 15.6°S, 133.0°E.",
    "summary_fi": "Yangman-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 15.6°S, 133.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Yangman"
    ]
  },
  {
    "slug": "yankuntjatjara-people",
    "name": "Yankuntjatjara People",
    "name_fi": "Yankuntjatjara-kansa",
    "native_name": "Yankuntjatjara",
    "alternate_names": [
      "Yankuntjatjara",
      "Yankunytjatjara"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yankunytjatjara",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48805138",
    "summary_en": "The Yankunytjatjara people, also written Yankuntjatjarra, Jangkundjara, and other variants, are an Aboriginal Australian people of the state of South Australia. Their traditional country encompasses Central Australia, Northern Territory, centered near 27.0°S, 132.0°E.",
    "summary_fi": "Yankuntjatjara-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Keski-Australian aavikkoalueella Pohjoisterritoriossa (koordinaateissa noin 27.0°S, 132.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Australian Desert estates",
    "feature_name_matches": [
      "Yankuntjatjara"
    ]
  },
  {
    "slug": "yawuru-people",
    "name": "Yawuru People",
    "name_fi": "Yawuru-kansa",
    "native_name": "Yawuru",
    "alternate_names": [
      "Yawuru"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yawuru",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q8050480",
    "summary_en": "The Yawuru, also spelt Jawuru, are an Aboriginal Australian people of the Kimberley region of Western Australia. Their traditional country encompasses Kimberley region, Western Australia, centered near 18.1°S, 122.7°E.",
    "summary_fi": "Yawuru-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Kimberleyn alueella Länsi-Australiassa (koordinaateissa noin 18.1°S, 122.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Kimberley traditional estates",
    "feature_name_matches": [
      "Yawuru"
    ]
  },
  {
    "slug": "yindjibarndi-people",
    "name": "Yindjibarndi People",
    "name_fi": "Yindjibarndi-kansa",
    "native_name": "Yindjibarndi",
    "alternate_names": [
      "Yindjibarndi",
      "Yindjibarndi people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yindjibarndi_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q28220112",
    "summary_en": "The Yindjibarndi are an Aboriginal Australian people of the Pilbara region of Western Australia. They form the majority of Aboriginal people around Roebourne. Their traditional country encompasses Pilbara region, Western Australia, centered near 21.7°S, 117.9°E.",
    "summary_fi": "Yindjibarndi-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pilbaran alueella Länsi-Australiassa (koordinaateissa noin 21.7°S, 117.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Pilbara traditional country",
    "feature_name_matches": [
      "Yindjibarndi"
    ]
  },
  {
    "slug": "yinggarda-people",
    "name": "Yinggarda People",
    "name_fi": "Yinggarda-kansa",
    "native_name": "Yinggarda",
    "alternate_names": [
      "Yinggarda",
      "Yinggarda language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yinggarda_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q3913777",
    "summary_en": "The Yinggarda language is an Australian Aboriginal language. It is an endangered language, but efforts at language revival are being made. Their traditional country encompasses Gibson Desert & Western Desert, Western Australia, centered near 25.2°S, 114.8°E.",
    "summary_fi": "Yinggarda-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Gibsoninaavikon ja läntisen aavikon alueella Länsi-Australiassa (koordinaateissa noin 25.2°S, 114.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gibson Desert / Western Desert estates",
    "feature_name_matches": [
      "Yinggarda"
    ]
  },
  {
    "slug": "yinhawangka-people",
    "name": "Yinhawangka People",
    "name_fi": "Yinhawangka-kansa",
    "native_name": "Yinhawangka",
    "alternate_names": [
      "Yinhawangka",
      "Inawongga"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Inawongga",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48803613",
    "summary_en": "The Yinhawangka are an Aboriginal Australian people of the Pilbara region of Western Australia. Their traditional country encompasses Pilbara region, Western Australia, centered near 23.4°S, 117.8°E.",
    "summary_fi": "Yinhawangka-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pilbaran alueella Länsi-Australiassa (koordinaateissa noin 23.4°S, 117.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Pilbara traditional country",
    "feature_name_matches": [
      "Yinhawangka"
    ]
  },
  {
    "slug": "yuat-people",
    "name": "Yuat People",
    "name_fi": "Yuat-kansa",
    "native_name": "Yuat",
    "alternate_names": [
      "Yuat",
      "Yued"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yued",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q24189166",
    "summary_en": "Yued is a region inhabited by the Yued people, one of the fourteen groups of Noongar Aboriginal Australians who have lived in the South West corner of Western Australia for approximately 40,000 years. Their traditional country encompasses Southwest Western Australia (Noongar country), centered near 30.6°S, 115.8°E.",
    "summary_fi": "Yuat-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Lounais-Australian Noongar-mailla (koordinaateissa noin 30.6°S, 115.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Southwest WA traditional lands",
    "feature_name_matches": [
      "Yuat"
    ]
  },
  {
    "slug": "yulparitja-people",
    "name": "Yulparitja People",
    "name_fi": "Yulparitja-kansa",
    "native_name": "Yulparitja",
    "alternate_names": [
      "Yulparitja",
      "Nangatara"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nangatara",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q39088779",
    "summary_en": "The Nangatara are an Aboriginal Australian people of Western Australia. Their traditional country encompasses Great Sandy Desert & Tanami Desert, Western Australia / NT, centered near 21.4°S, 124.7°E.",
    "summary_fi": "Yulparitja-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Ison Hiekka-aavikon ja Tanamin aavikon alueella (koordinaateissa noin 21.4°S, 124.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Western Desert / Tanami estates",
    "feature_name_matches": [
      "Yulparitja"
    ]
  },
  {
    "slug": "agwarmin-people",
    "name": "Agwarmin People",
    "name_fi": "Agwarmin-kansa",
    "native_name": "Agwarmin",
    "alternate_names": [
      "Agwarmin",
      "Agwari, Jalore"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Agwari%2C_Jalore",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q18109424",
    "summary_en": "Agwari is a village in Ahore tehsil of Jalore district of Rajasthan State in India. The village is situated 14 km east of the Ahore beside 2 km of NH 325. Their traditional country encompasses North & Central Queensland interior, centered near 18.0°S, 144.0°E.",
    "summary_fi": "Agwarmin-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 18.0°S, 144.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Agwarmin"
    ]
  },
  {
    "slug": "andegerebenha-people",
    "name": "Andegerebenha People",
    "name_fi": "Andegerebenha-kansa",
    "native_name": "Andegerebenha",
    "alternate_names": [
      "Andegerebenha",
      "Andegerebinha dialect"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Andegerebinha_dialect",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q3508123",
    "summary_en": "The Andegerebinha language, also known as Andegerebenha, Andigibinha, Antekerrepenhe and Antekerrepinhe, is an Australian Aboriginal language of the Northern Territory, specifically of the Upper Arrernte language group. It was spoken around the Hay River and Pituri Creek area. Their traditional country encompasses Central Australia, Northern Territory, centered near 22.6°S, 137.6°E.",
    "summary_fi": "Andegerebenha-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Keski-Australian aavikkoalueella Pohjoisterritoriossa (koordinaateissa noin 22.6°S, 137.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Australian Desert estates",
    "feature_name_matches": [
      "Andegerebenha"
    ]
  },
  {
    "slug": "andyamathanha-people",
    "name": "Andyamathanha People",
    "name_fi": "Andyamathanha-kansa",
    "native_name": "Andyamathanha",
    "alternate_names": [
      "Andyamathanha",
      "Adnyamathanha language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Adnyamathanha_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q2225391",
    "summary_en": "The Adnyamathanha language, also known as yura ngarwala natively and Kuyani, also known as Guyani and other variants, are two closely related Australian Aboriginal languages. They are traditional languages of the Adnyamathanha of and the Kuyani peoples, of the Flinders Ranges and to the west of the Flinders respectively, in South Australia. Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 30.8°S, 139.2°E.",
    "summary_fi": "Andyamathanha-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 30.8°S, 139.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Andyamathanha"
    ]
  },
  {
    "slug": "anggamudi-people",
    "name": "Anggamudi People",
    "name_fi": "Anggamudi-kansa",
    "native_name": "Anggamudi",
    "alternate_names": [
      "Anggamudi",
      "Anamudi"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Anamudi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q485550",
    "summary_en": "Anamudi is a mountain located in Ernakulam district and Idukki district of the Indian state of Kerala. With an elevation of 2,695 m (8,842 ft), it is the highest peak in the Western Ghats and in South India. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 11.5°S, 142.4°E.",
    "summary_fi": "Anggamudi-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 11.5°S, 142.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Anggamudi"
    ]
  },
  {
    "slug": "anguthimri-people",
    "name": "Anguthimri People",
    "name_fi": "Anguthimri-kansa",
    "native_name": "Anguthimri",
    "alternate_names": [
      "Anguthimri",
      "Anguthimri language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Anguthimri_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q4764288",
    "summary_en": "Anguthimri is an extinct Paman language formerly spoken on the Cape York Peninsula of Queensland, Australia, by the Anguthimri people who lived in the area from the mouth of the Mission River north to Pennefather River and west to Duyfken Point. It is unknown when it became extinct. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 12.4°S, 141.9°E.",
    "summary_fi": "Anguthimri-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 12.4°S, 141.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Anguthimri"
    ]
  },
  {
    "slug": "arabana-people",
    "name": "Arabana People",
    "name_fi": "Arabana-kansa",
    "native_name": "Arabana",
    "alternate_names": [
      "Arabana",
      "Arabana people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Arabana_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48802192",
    "summary_en": "The Arabana, also known as the Ngarabana, are an Aboriginal Australian people of South Australia. Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 28.5°S, 135.8°E.",
    "summary_fi": "Arabana-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 28.5°S, 135.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Arabana"
    ]
  },
  {
    "slug": "awabakal-people",
    "name": "Awabakal People",
    "name_fi": "Awabakal-kansa",
    "native_name": "Awabakal",
    "alternate_names": [
      "Awabakal"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Awabakal",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q2874654",
    "summary_en": "The Awabakal people, are a group of Indigenous Australians and their descendants from eastern Australia who speak the Awabakal language. Their traditional territory consists of the coastal area of New South Wales located between what is now known as the Hunter River and the Gosford region. Their traditional country encompasses Eastern New South Wales (coastal and tableland country), centered near 33.0°S, 151.6°E.",
    "summary_fi": "Awabakal-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itäisen Uuden Etelä-Walesin rannikolla ja ylängöillä (koordinaateissa noin 33.0°S, 151.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern New South Wales traditional lands",
    "feature_name_matches": [
      "Awabakal"
    ]
  },
  {
    "slug": "awngthim-people",
    "name": "Awngthim People",
    "name_fi": "Awngthim-kansa",
    "native_name": "Awngthim",
    "alternate_names": [
      "Awngthim",
      "Awngthim language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Awngthim_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q4830109",
    "summary_en": "Awngthim is an extinct Australian Aboriginal language formerly spoken in Cape York in Queensland, Australia by the Winduwinda people. The Awngthim language region includes the areas around Weipa and the Cook Shire. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 12.7°S, 142.0°E.",
    "summary_fi": "Awngthim-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 12.7°S, 142.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Awngthim"
    ]
  },
  {
    "slug": "badtjala-people",
    "name": "Badtjala People",
    "name_fi": "Badtjala-kansa",
    "native_name": "Badtjala",
    "alternate_names": [
      "Badtjala",
      "Butchulla"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Butchulla",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q25385188",
    "summary_en": "The Butchulla, also written Butchella, Badjala, Badjula, Badjela, Bajellah, Badtjala and Budjilla, are an Aboriginal Australian people of K'gari, Queensland, and a small area of the nearby mainland of southern Queensland. Their traditional country encompasses Coastal and Eastern Queensland, centered near 25.8°S, 152.8°E.",
    "summary_fi": "Badtjala-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 25.8°S, 152.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Badtjala"
    ]
  },
  {
    "slug": "bakanh-people",
    "name": "Bakanh People",
    "name_fi": "Bakanh-kansa",
    "native_name": "Bakanh",
    "alternate_names": [
      "Bakanh",
      "Pakanha language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pakanha_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q954916",
    "summary_en": "Pakanha (Bakanha), or Ayabakan, is a nearly extinct Paman language spoken on the Cape York Peninsula of Queensland, Australia. In 1981, there were 10 speakers of the language, originally spoken by the aboriginal Pakanha people in the central part of the Cape York Peninsula. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 14.6°S, 142.7°E.",
    "summary_fi": "Bakanh-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 14.6°S, 142.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Bakanh"
    ]
  },
  {
    "slug": "bandjigali-people",
    "name": "Bandjigali People",
    "name_fi": "Bandjigali-kansa",
    "native_name": "Bandjigali",
    "alternate_names": [
      "Bandjigali",
      "Paakantyi"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Paakantyi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q16211292",
    "summary_en": "The Paakantyi, or Barkindji or Barkandji, are Australian Aboriginal people who live along the Darling River, known to them as the Baaka, in Far West New South Wales, Australia. Their traditional country encompasses Inland New South Wales (Murray-Darling Basin), centered near 30.5°S, 142.5°E.",
    "summary_fi": "Bandjigali-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Uuden Etelä-Walesin sisämaassa Murray-Darling-joen valuma-alueella (koordinaateissa noin 30.5°S, 142.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Murray-Darling Basin traditional country",
    "feature_name_matches": [
      "Bandjigali"
    ]
  },
  {
    "slug": "banggarla-people",
    "name": "Banggarla People",
    "name_fi": "Banggarla-kansa",
    "native_name": "Banggarla",
    "alternate_names": [
      "Banggarla",
      "Barngarla people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Barngarla_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q7139341",
    "summary_en": "The Barngarla are an Indigenous people of South Australia and the traditional owners of much of Eyre Peninsula. Their language, Barngarla is a Yura language and part of a revival effort by the University of Adelaide. Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 32.5°S, 136.4°E.",
    "summary_fi": "Banggarla-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 32.5°S, 136.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Banggarla"
    ]
  },
  {
    "slug": "baraba-baraba-people",
    "name": "Baraba Baraba People",
    "name_fi": "Baraba Baraba-kansa",
    "native_name": "Baraba Baraba",
    "alternate_names": [
      "Baraba Baraba",
      "Barababaraba dialect"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Barababaraba_dialect",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q4858065",
    "summary_en": "Barababaraba (Baraba-Baraba), or Baraparapa, is an extinct Indigenous Australian language once spoken along the southern tributaries of the Murrumbidgee River, Victoria and New South Wales. It was a dialect of Wemba–Wemba. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 35.7°S, 144.3°E.",
    "summary_fi": "Baraba Baraba-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 35.7°S, 144.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Baraba Baraba"
    ]
  },
  {
    "slug": "baradha-people",
    "name": "Baradha People",
    "name_fi": "Baradha-kansa",
    "native_name": "Baradha",
    "alternate_names": [
      "Baradha",
      "Barada people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Barada_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48796474",
    "summary_en": "The Barada people are an Aboriginal Australian people of Central Queensland not far inland from the east coast. Tindale gives Thar-ar-ra-burra and Toolginburra as alternative names. Their traditional country encompasses Coastal and Eastern Queensland, centered near 22.0°S, 149.0°E.",
    "summary_fi": "Baradha-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 22.0°S, 149.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Baradha"
    ]
  },
  {
    "slug": "barindji-people",
    "name": "Barindji People",
    "name_fi": "Barindji-kansa",
    "native_name": "Barindji",
    "alternate_names": [
      "Barindji"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Barindji",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q29325695",
    "summary_en": "The Barindji, also written Parrintyi, are an indigenous Australian people of the state of New South Wales. They are to be distinguished from the Paaruntyi, who spoke a similar language but whom they called the spitting people. Their traditional country encompasses Inland New South Wales (Murray-Darling Basin), centered near 32.7°S, 143.5°E.",
    "summary_fi": "Barindji-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Uuden Etelä-Walesin sisämaassa Murray-Darling-joen valuma-alueella (koordinaateissa noin 32.7°S, 143.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Murray-Darling Basin traditional country",
    "feature_name_matches": [
      "Barindji"
    ]
  },
  {
    "slug": "barkindji-people",
    "name": "Barkindji People",
    "name_fi": "Barkindji-kansa",
    "native_name": "Barkindji",
    "alternate_names": [
      "Barkindji",
      "Paakantyi"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Paakantyi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q16211292",
    "summary_en": "The Paakantyi, or Barkindji or Barkandji, are Australian Aboriginal people who live along the Darling River, known to them as the Baaka, in Far West New South Wales, Australia. Their traditional country encompasses Inland New South Wales (Murray-Darling Basin), centered near 32.8°S, 142.3°E.",
    "summary_fi": "Barkindji-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Uuden Etelä-Walesin sisämaassa Murray-Darling-joen valuma-alueella (koordinaateissa noin 32.8°S, 142.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Murray-Darling Basin traditional country",
    "feature_name_matches": [
      "Barkindji"
    ]
  },
  {
    "slug": "barna-people",
    "name": "Barna People",
    "name_fi": "Barna-kansa",
    "native_name": "Barna",
    "alternate_names": [
      "Barna",
      "Baranha people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Baranha_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q30602825",
    "summary_en": "The Baranha or Barna, also known as Barada Barna, are an Australian Aboriginal people of northern Queensland. Their traditional country encompasses Coastal and Eastern Queensland, centered near 22.2°S, 148.2°E.",
    "summary_fi": "Barna-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 22.2°S, 148.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Barna"
    ]
  },
  {
    "slug": "barranbinya-people",
    "name": "Barranbinya People",
    "name_fi": "Barranbinya-kansa",
    "native_name": "Barranbinya",
    "alternate_names": [
      "Barranbinya"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Barranbinya",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48790537",
    "summary_en": "The Barranbinya, also written Baranbinja and other variants, are an Aboriginal Australian people of New South Wales. Their traditional country encompasses Inland New South Wales (Murray-Darling Basin), centered near 29.9°S, 146.3°E.",
    "summary_fi": "Barranbinya-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Uuden Etelä-Walesin sisämaassa Murray-Darling-joen valuma-alueella (koordinaateissa noin 29.9°S, 146.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Murray-Darling Basin traditional country",
    "feature_name_matches": [
      "Barranbinya"
    ]
  },
  {
    "slug": "barundji-people",
    "name": "Barundji People",
    "name_fi": "Barundji-kansa",
    "native_name": "Barundji",
    "alternate_names": [
      "Barundji",
      "Paaruntyi"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Paaruntyi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q55628297",
    "summary_en": "The Paaruntyi are an indigenous Australian people of the state of New South Wales. They are not to be confused with the Parrintyi. Their traditional country encompasses Inland New South Wales (Murray-Darling Basin), centered near 30.1°S, 144.1°E.",
    "summary_fi": "Barundji-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Uuden Etelä-Walesin sisämaassa Murray-Darling-joen valuma-alueella (koordinaateissa noin 30.1°S, 144.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Murray-Darling Basin traditional country",
    "feature_name_matches": [
      "Barundji"
    ]
  },
  {
    "slug": "barunggam-people",
    "name": "Barunggam People",
    "name_fi": "Barunggam-kansa",
    "native_name": "Barunggam",
    "alternate_names": [
      "Barunggam",
      "Baruŋgam"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Baru%C5%8Bgam",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48791727",
    "summary_en": "The Baruŋgam are an Aboriginal Australian people of Southeast Queensland. Their traditional country encompasses Coastal and Eastern Queensland, centered near 26.7°S, 150.6°E.",
    "summary_fi": "Barunggam-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 26.7°S, 150.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Barunggam"
    ]
  },
  {
    "slug": "bayali-people",
    "name": "Bayali People",
    "name_fi": "Bayali-kansa",
    "native_name": "Bayali",
    "alternate_names": [
      "Bayali",
      "Bayali language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Bayali_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q4874263",
    "summary_en": "Bayali is an Australian Aboriginal language of Queensland in Australia, formerly spoken in the Rockhampton and Gladstone areas. It is considered extinct, but a project is under way to revive the language. Their traditional country encompasses Coastal and Eastern Queensland, centered near 23.9°S, 150.8°E.",
    "summary_fi": "Bayali-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 23.9°S, 150.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Bayali"
    ]
  },
  {
    "slug": "bidjara-people",
    "name": "Bidjara People",
    "name_fi": "Bidjara-kansa",
    "native_name": "Bidjara",
    "alternate_names": [
      "Bidjara",
      "Bidjara language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Bidjara_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q4904194",
    "summary_en": "Bidjara, also spelt Bidyara or Pitjara, is an Australian Aboriginal language. In 1980, it was spoken by 20 elders in Queensland between the towns of Tambo and Augathella, or the Warrego and Langlo Rivers. Their traditional country encompasses Coastal and Eastern Queensland, centered near 25.4°S, 146.8°E.",
    "summary_fi": "Bidjara-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 25.4°S, 146.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Bidjara"
    ]
  },
  {
    "slug": "bidwell-people",
    "name": "Bidwell People",
    "name_fi": "Bidwell-kansa",
    "native_name": "Bidwell",
    "alternate_names": [
      "Bidwell",
      "John Bidwell"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/John_Bidwell",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q1699334",
    "summary_en": "John Bidwell, known in Spanish as Don Juan Bidwell, was an American pioneer, politician, and soldier. Bidwell is known as the founder of the city of Chico, California. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 37.4°S, 149.1°E.",
    "summary_fi": "Bidwell-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 37.4°S, 149.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Bidwell"
    ]
  },
  {
    "slug": "bigambul-people",
    "name": "Bigambul People",
    "name_fi": "Bigambul-kansa",
    "native_name": "Bigambul",
    "alternate_names": [
      "Bigambul"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Bigambul",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q4906776",
    "summary_en": "The Bigambul people are an Aboriginal Australian people of the Northern Tablelands and Border Rivers regions of New South Wales and Queensland. Their traditional country encompasses Coastal and Eastern Queensland, centered near 28.1°S, 149.9°E.",
    "summary_fi": "Bigambul-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 28.1°S, 149.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Bigambul"
    ]
  },
  {
    "slug": "binbinga-people",
    "name": "Binbinga People",
    "name_fi": "Binbinga-kansa",
    "native_name": "Binbinga",
    "alternate_names": [
      "Binbinga"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Binbinga",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q16209668",
    "summary_en": "The Binbinga, also pronounced Binbinka, are an Indigenous Australian people of the Northern Territory of Australia. Their traditional country encompasses Gulf Country & Barkly Tableland, NT / Queensland border, centered near 16.4°S, 136.0°E.",
    "summary_fi": "Binbinga-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Carpentarianlahden rannikkoseudulla ja Barklyn ylängöllä (koordinaateissa noin 16.4°S, 136.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gulf Country & Barkly Tableland estates",
    "feature_name_matches": [
      "Binbinga"
    ]
  },
  {
    "slug": "bindjali-people",
    "name": "Bindjali People",
    "name_fi": "Bindjali-kansa",
    "native_name": "Bindjali",
    "alternate_names": [
      "Bindjali",
      "Bodaruwitj"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Bodaruwitj",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q39088007",
    "summary_en": "The Bodaruwitj, also rendered Bedaruwidj or Potaruwutj, and referred to in some early sources as the Tatiara, are an Aboriginal Australian people from the southeast of the state of South Australia. David Horton believed they were the group his sources referred to as the Bindjali people. Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 36.6°S, 140.6°E.",
    "summary_fi": "Bindjali-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 36.6°S, 140.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Bindjali"
    ]
  },
  {
    "slug": "biri-people",
    "name": "Biri People",
    "name_fi": "Biri-kansa",
    "native_name": "Biri",
    "alternate_names": [
      "Biri",
      "Birri Gubba"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Birri_Gubba",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q39088185",
    "summary_en": "The Birri Gubba people, formerly known as Biria, are an Aboriginal Australian people of the state of Queensland. Their traditional country encompasses Coastal and Eastern Queensland, centered near 20.7°S, 147.9°E.",
    "summary_fi": "Biri-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 20.7°S, 147.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Biri"
    ]
  },
  {
    "slug": "biripi-people",
    "name": "Biripi People",
    "name_fi": "Biripi-kansa",
    "native_name": "Biripi",
    "alternate_names": [
      "Biripi",
      "Birrbay"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Birrbay",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q39090749",
    "summary_en": "The Birrbay people, also spelt Birpai, Biripi, Birippi and variant spellings, are an Aboriginal Australian people of New South Wales. They share a dialect continuum with the Worimi people. Their traditional country encompasses Eastern New South Wales (coastal and tableland country), centered near 31.6°S, 152.1°E.",
    "summary_fi": "Biripi-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itäisen Uuden Etelä-Walesin rannikolla ja ylängöillä (koordinaateissa noin 31.6°S, 152.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern New South Wales traditional lands",
    "feature_name_matches": [
      "Biripi"
    ]
  },
  {
    "slug": "birria-people",
    "name": "Birria People",
    "name_fi": "Birria-kansa",
    "native_name": "Birria",
    "alternate_names": [
      "Birria"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Birria",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q4916959",
    "summary_en": "Birria is a regional variation of barbacoa from western Mexico, mainly made with goat, beef or lamb. The meat is marinated in an adobo made of vinegar, dried chiles, garlic, and herbs and spices before being cooked in a broth. Their traditional country encompasses Channel Country & Lake Eyre Basin, Southwest Queensland, centered near 25.5°S, 142.6°E.",
    "summary_fi": "Birria-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Channel Countryn ja Eyre-järven valuma-alueella Lounais-Queenslandissa (koordinaateissa noin 25.5°S, 142.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Channel Country traditional lands",
    "feature_name_matches": [
      "Birria"
    ]
  },
  {
    "slug": "boonwurrung-people",
    "name": "Boonwurrung People",
    "name_fi": "Boonwurrung-kansa",
    "native_name": "Boonwurrung",
    "alternate_names": [
      "Boonwurrung",
      "Bunurong"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Bunurong",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q1010028",
    "summary_en": "The Bunurong, also spelt Bun wurrung or Boonwurrung, are an Aboriginal people of the Kulin nation, who are the traditional owners of the land from the Werribee River to Wilsons Promontory in the Australian state of Victoria. Their territory includes part of what is now the city and suburbs of Melbourne. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 38.5°S, 145.9°E.",
    "summary_fi": "Boonwurrung-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 38.5°S, 145.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Boonwurrung"
    ]
  },
  {
    "slug": "buandig-people",
    "name": "Buandig People",
    "name_fi": "Buandig-kansa",
    "native_name": "Buandig",
    "alternate_names": [
      "Buandig",
      "Bungandidj people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Bungandidj_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q4997617",
    "summary_en": "The Bungandidj people are an Aboriginal Australian people from the Mount Gambier region in south-eastern South Australia, and also in western Victoria. Their language is the Bungandidj language. Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 37.6°S, 140.3°E.",
    "summary_fi": "Buandig-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 37.6°S, 140.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Buandig"
    ]
  },
  {
    "slug": "budjari-people",
    "name": "Budjari People",
    "name_fi": "Budjari-kansa",
    "native_name": "Budjari",
    "alternate_names": [
      "Budjari",
      "Badjiri"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Badjiri",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q25185004",
    "summary_en": "The Badjiri people, also written Budjari or Badyidi, are an Australian Aboriginal people of just north of the Paroo River, close to the southern border of Queensland. Their traditional country encompasses Channel Country & Lake Eyre Basin, Southwest Queensland, centered near 28.5°S, 144.2°E.",
    "summary_fi": "Budjari-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Channel Countryn ja Eyre-järven valuma-alueella Lounais-Queenslandissa (koordinaateissa noin 28.5°S, 144.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Channel Country traditional lands",
    "feature_name_matches": [
      "Budjari"
    ]
  },
  {
    "slug": "bularnu-people",
    "name": "Bularnu People",
    "name_fi": "Bularnu-kansa",
    "native_name": "Bularnu",
    "alternate_names": [
      "Bularnu",
      "Yindjilandji"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yindjilandji",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q10723541",
    "summary_en": "The Yindjilandji are an Indigenous Australian people of the Northern Territory. Their traditional country encompasses Central Australia, Northern Territory, centered near 21.1°S, 137.9°E.",
    "summary_fi": "Bularnu-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Keski-Australian aavikkoalueella Pohjoisterritoriossa (koordinaateissa noin 21.1°S, 137.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Australian Desert estates",
    "feature_name_matches": [
      "Bularnu"
    ]
  },
  {
    "slug": "bundjalung-people",
    "name": "Bundjalung People",
    "name_fi": "Bundjalung-kansa",
    "native_name": "Bundjalung",
    "alternate_names": [
      "Bundjalung",
      "Bundjalung people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Bundjalung_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48767841",
    "summary_en": "The Bundjalung people, also spelled Bunjalung, Badjalang and Bandjalang, are Aboriginal Australians who are the original custodians of a region from around Grafton in northern coastal New South Wales to Beaudesert in south-east Queensland. The region is located approximately 550 kilometres (340 mi) northeast of Sydney and 100 kilometres (62 mi) south of Brisbane that now includes the Bundjalung National Park. Their traditional country encompasses Coastal and Eastern Queensland, centered near 28.6°S, 152.7°E.",
    "summary_fi": "Bundjalung-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 28.6°S, 152.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Bundjalung"
    ]
  },
  {
    "slug": "burarra-people",
    "name": "Burarra People",
    "name_fi": "Burarra-kansa",
    "native_name": "Burarra",
    "alternate_names": [
      "Burarra",
      "Burarra people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Burarra_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q4998122",
    "summary_en": "The Burarra people, also referred to as the Gidjingali, are an Aboriginal Australian people in and around Maningrida, in the heart of Arnhem Land in the Northern Territory. Opinions have differed as to whether the two names represent different tribal realities, with the Gidjingali treated as the same as, or as a subgroup of the Burarra, or as an independent tribal grouping. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 12.1°S, 134.7°E.",
    "summary_fi": "Burarra-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 12.1°S, 134.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Burarra"
    ]
  },
  {
    "slug": "dadi-dadi-people",
    "name": "Dadi Dadi People",
    "name_fi": "Dadi Dadi-kansa",
    "native_name": "Dadi Dadi",
    "alternate_names": [
      "Dadi Dadi"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Dadi_Dadi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q28224583",
    "summary_en": "The Dadi Dadi or Tatitati are an Australian Aboriginal people whose traditional lands are located along the southern banks of the Murray River in Victoria, Australia. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 34.7°S, 143.2°E.",
    "summary_fi": "Dadi Dadi-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 34.7°S, 143.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Dadi Dadi"
    ]
  },
  {
    "slug": "dainggatti-people",
    "name": "Dainggatti People",
    "name_fi": "Dainggatti-kansa",
    "native_name": "Dainggatti",
    "alternate_names": [
      "Dainggatti",
      "Dan Gattis"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Dan_Gattis",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q5213547",
    "summary_en": "Dan Gattis is an Attorney and Rancher living in Central Texas. He was a Republican member of the Texas House of Representatives, formerly representing the 20th District from 2003 to 2011. Their traditional country encompasses Eastern New South Wales (coastal and tableland country), centered near 30.9°S, 152.4°E.",
    "summary_fi": "Dainggatti-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itäisen Uuden Etelä-Walesin rannikolla ja ylängöillä (koordinaateissa noin 30.9°S, 152.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern New South Wales traditional lands",
    "feature_name_matches": [
      "Dainggatti"
    ]
  },
  {
    "slug": "danggali-people",
    "name": "Danggali People",
    "name_fi": "Danggali-kansa",
    "native_name": "Danggali",
    "alternate_names": [
      "Danggali",
      "Thangkaali"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Thangkaali",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48806494",
    "summary_en": "The Thangkaali (Danggali) are an indigenous Australian people of the state of South Australia. Their traditional country encompasses Inland New South Wales (Murray-Darling Basin), centered near 32.5°S, 141.7°E.",
    "summary_fi": "Danggali-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Uuden Etelä-Walesin sisämaassa Murray-Darling-joen valuma-alueella (koordinaateissa noin 32.5°S, 141.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Murray-Darling Basin traditional country",
    "feature_name_matches": [
      "Danggali"
    ]
  },
  {
    "slug": "darkinung-people",
    "name": "Darkinung People",
    "name_fi": "Darkinung-kansa",
    "native_name": "Darkinung",
    "alternate_names": [
      "Darkinung",
      "Darkinyung people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Darkinyung_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q28428516",
    "summary_en": "The Darkinyung are an indigenous Australian people of New South Wales. Their traditional country encompasses Eastern New South Wales (coastal and tableland country), centered near 33.0°S, 150.6°E.",
    "summary_fi": "Darkinung-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itäisen Uuden Etelä-Walesin rannikolla ja ylängöillä (koordinaateissa noin 33.0°S, 150.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern New South Wales traditional lands",
    "feature_name_matches": [
      "Darkinung"
    ]
  },
  {
    "slug": "darumbal-people",
    "name": "Darumbal People",
    "name_fi": "Darumbal-kansa",
    "native_name": "Darumbal",
    "alternate_names": [
      "Darumbal"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Darumbal",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q5225799",
    "summary_en": "The Darumbal people, also spelt Darambal and Dharumbal, are the Aboriginal Australian people who have traditionally occupied Central Queensland, speaking dialects of the Darumbal language. and the terms are sometimes used interchangeably. Their traditional country encompasses Coastal and Eastern Queensland, centered near 23.1°S, 149.9°E.",
    "summary_fi": "Darumbal-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 23.1°S, 149.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Darumbal"
    ]
  },
  {
    "slug": "dharawala-people",
    "name": "Dharawala People",
    "name_fi": "Dharawala-kansa",
    "native_name": "Dharawala",
    "alternate_names": [
      "Dharawala",
      "Wadjalang"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wadjalang",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48785086",
    "summary_en": "The Wadjalang, also known as the Dharawala, were an indigenous Australian people of Queensland. Their traditional country encompasses Indigenous Australia, centered near 25.4°S, 145.1°E.",
    "summary_fi": "Dharawala-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Australian alkuperäismailla (koordinaateissa noin 25.4°S, 145.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Traditional country",
    "feature_name_matches": [
      "Dharawala"
    ]
  },
  {
    "slug": "dharug-people",
    "name": "Dharug People",
    "name_fi": "Dharug-kansa",
    "native_name": "Dharug",
    "alternate_names": [
      "Dharug"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Dharug",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q1166813",
    "summary_en": "The Dharug or Darug people, are a nation of Aboriginal Australian clans, who share ties of kinship, country and culture. In pre-colonial times, they lived as hunters in the region of current day Sydney. Their traditional country encompasses Eastern New South Wales (coastal and tableland country), centered near 33.8°S, 150.3°E.",
    "summary_fi": "Dharug-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itäisen Uuden Etelä-Walesin rannikolla ja ylängöillä (koordinaateissa noin 33.8°S, 150.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern New South Wales traditional lands",
    "feature_name_matches": [
      "Dharug"
    ]
  },
  {
    "slug": "dhirari-people",
    "name": "Dhirari People",
    "name_fi": "Dhirari-kansa",
    "native_name": "Dhirari",
    "alternate_names": [
      "Dhirari"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Dhirari",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q55635929",
    "summary_en": "The Dhirari were an indigenous Australian people of the Far North of South Australia. They are not to be confused with the Diyari people, though the Dirari/Dhirari language was a dialect of the Diyari language. Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 28.6°S, 137.7°E.",
    "summary_fi": "Dhirari-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 28.6°S, 137.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Dhirari"
    ]
  },
  {
    "slug": "dieri-people",
    "name": "Dieri People",
    "name_fi": "Dieri-kansa",
    "native_name": "Dieri",
    "alternate_names": [
      "Dieri",
      "Diyari"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Diyari",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q928016",
    "summary_en": "The Dieri, alternatively transcribed as Diyari, is an Indigenous Australian group of the South Australian desert originating in and around the delta of Cooper Creek to the east of Lake Eyre. Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 28.3°S, 139.1°E.",
    "summary_fi": "Dieri-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 28.3°S, 139.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Dieri"
    ]
  },
  {
    "slug": "dja-dja-wurrung-people",
    "name": "Dja Dja Wurrung People",
    "name_fi": "Dja Dja Wurrung-kansa",
    "native_name": "Dja Dja Wurrung",
    "alternate_names": [
      "Dja Dja Wurrung",
      "Djadjawurrung"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Djadjawurrung",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q1231961",
    "summary_en": "The Djadjawurrung or Dja Dja Wurrung, also known as the Djaara or Jajowrong people and Loddon River tribe, are an Aboriginal Australian people who are the traditional owners of lands including the water catchment areas of the Loddon and Avoca rivers in the Bendigo region of central Victoria, Australia. They are part of the Kulin alliance of Aboriginal Victorian peoples. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 36.7°S, 143.9°E.",
    "summary_fi": "Dja Dja Wurrung-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 36.7°S, 143.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Dja Dja Wurrung"
    ]
  },
  {
    "slug": "djabuganjdji-people",
    "name": "Djabuganjdji People",
    "name_fi": "Djabuganjdji-kansa",
    "native_name": "Djabuganjdji",
    "alternate_names": [
      "Djabuganjdji",
      "Djabugay language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Djabugay_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q2591320",
    "summary_en": "Djabugay is an endangered Australian Aboriginal language spoken by the Djabugay people with 81 native speakers at the 2021 census. The Djabugay language region includes Far North Queensland, particularly around the Kuranda Range and Barron River catchment, and the landscape within the local government boundaries of the Cairns Regional Council. Their traditional country encompasses North & Central Queensland interior, centered near 16.9°S, 145.5°E.",
    "summary_fi": "Djabuganjdji-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 16.9°S, 145.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Djabuganjdji"
    ]
  },
  {
    "slug": "djabwurung-people",
    "name": "Djabwurung People",
    "name_fi": "Djabwurung-kansa",
    "native_name": "Djabwurung",
    "alternate_names": [
      "Djabwurung",
      "Djabwurrung language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Djabwurrung_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q5285187",
    "summary_en": "Djab Wurrung is the extinct Aboriginal Australian language of the Djab Wurrung people of central Victoria. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 37.5°S, 142.7°E.",
    "summary_fi": "Djabwurung-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 37.5°S, 142.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Djabwurung"
    ]
  },
  {
    "slug": "djargurdwurung-people",
    "name": "Djargurdwurung People",
    "name_fi": "Djargurdwurung-kansa",
    "native_name": "Djargurdwurung",
    "alternate_names": [
      "Djargurdwurung",
      "Djargurd Wurrong"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Djargurd_Wurrong",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q5285246",
    "summary_en": "The Djargurd Wurrong are Aboriginal Australian people of the Western district of the State of Victoria, and traditionally occupied the territory between Mount Emu Creek and Lake Corangamite. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 38.2°S, 143.3°E.",
    "summary_fi": "Djargurdwurung-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 38.2°S, 143.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Djargurdwurung"
    ]
  },
  {
    "slug": "djirbalngan-people",
    "name": "Djirbalngan People",
    "name_fi": "Djirbalngan-kansa",
    "native_name": "Djirbalngan",
    "alternate_names": [
      "Djirbalngan",
      "Dyirbal people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Dyirbal_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q28224505",
    "summary_en": "The Dyirbal, also called Jirrbal, are an Aboriginal Australian people living in northern Queensland, both one tribe and a group of related contiguous peoples included under that label as the Dyirbal tribes. They live on the upper Murray river of the Atherton Tableland. Their traditional country encompasses North & Central Queensland interior, centered near 17.7°S, 145.6°E.",
    "summary_fi": "Djirbalngan-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 17.7°S, 145.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Djirbalngan"
    ]
  },
  {
    "slug": "dyungungoo-gubbi-gubbi-people",
    "name": "Dyungungoo (Gubbi Gubbi) People",
    "name_fi": "Dyungungoo (Gubbi Gubbi)-kansa",
    "native_name": "Dyungungoo (Gubbi Gubbi)",
    "alternate_names": [
      "Dyungungoo (Gubbi Gubbi)",
      "Kabi Kabi people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kabi_Kabi_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q3191655",
    "summary_en": "The Kabi Kabi people, also spelt Gubbi Gubbi, Gabi Gabi, and other variants, are an Aboriginal Australian people native to South Eastern Queensland. During the Australian frontier wars of the 19th century, there were several mass killings of Kabi Kabi people by settlers. Their traditional country encompasses Coastal and Eastern Queensland, centered near 26.1°S, 152.5°E.",
    "summary_fi": "Dyungungoo (Gubbi Gubbi)-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 26.1°S, 152.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Dyungungoo (Gubbi Gubbi)"
    ]
  },
  {
    "slug": "gabalbara-people",
    "name": "Gabalbara People",
    "name_fi": "Gabalbara-kansa",
    "native_name": "Gabalbara",
    "alternate_names": [
      "Gabalbara",
      "Gabala Radar Station"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Gabala_Radar_Station",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q6786497",
    "summary_en": "Gabala Radar Station was a Daryal-type bistatic passive electronically scanned array early warning radar, built by the Soviet Union in the Qabala district of the Azerbaijan SSR in 1985. It was operated by the Russian Aerospace Defence Forces and closed at the end of 2012. Their traditional country encompasses Coastal and Eastern Queensland, centered near 23.0°S, 148.6°E.",
    "summary_fi": "Gabalbara-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 23.0°S, 148.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Gabalbara"
    ]
  },
  {
    "slug": "gadubanud-people",
    "name": "Gadubanud People",
    "name_fi": "Gadubanud-kansa",
    "native_name": "Gadubanud",
    "alternate_names": [
      "Gadubanud"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Gadubanud",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q1317329",
    "summary_en": "The Gadubanud (Katubanut), also known as the Pallidurgbarran, Yarro waetch, King Parrot people or Cape Otway tribe (Tindale), are an Aboriginal Australian people of the state of Victoria. Their territory encompasses the rainforest plateau and rugged coastline of Cape Otway. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 38.6°S, 143.7°E.",
    "summary_fi": "Gadubanud-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 38.6°S, 143.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Gadubanud"
    ]
  },
  {
    "slug": "gananggalinda-people",
    "name": "Gananggalinda People",
    "name_fi": "Gananggalinda-kansa",
    "native_name": "Gananggalinda",
    "alternate_names": [
      "Gananggalinda",
      "Yangkaal"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yangkaal",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48815322",
    "summary_en": "The Yangkaal, also spelt Yanggal, are an Aboriginal Australian people of area of the Gulf of Carpentaria in the state of Queensland. Their traditional country encompasses Gulf Country & Barkly Tableland, NT / Queensland border, centered near 17.0°S, 139.0°E.",
    "summary_fi": "Gananggalinda-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Carpentarianlahden rannikkoseudulla ja Barklyn ylängöllä (koordinaateissa noin 17.0°S, 139.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gulf Country & Barkly Tableland estates",
    "feature_name_matches": [
      "Gananggalinda"
    ]
  },
  {
    "slug": "ganggalida-people",
    "name": "Ganggalida People",
    "name_fi": "Ganggalida-kansa",
    "native_name": "Ganggalida",
    "alternate_names": [
      "Ganggalida",
      "Yukulta"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yukulta",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48815345",
    "summary_en": "The Yukulta people, also spelt Jokula, Jukula, and other variants, and also known as Ganggalidda or Gangalidda, are an Aboriginal Australian people of the state of Queensland. Their traditional country encompasses Gulf Country & Barkly Tableland, NT / Queensland border, centered near 17.4°S, 138.6°E.",
    "summary_fi": "Ganggalida-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Carpentarianlahden rannikkoseudulla ja Barklyn ylängöllä (koordinaateissa noin 17.4°S, 138.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gulf Country & Barkly Tableland estates",
    "feature_name_matches": [
      "Ganggalida"
    ]
  },
  {
    "slug": "gangulu-people",
    "name": "Gangulu People",
    "name_fi": "Gangulu-kansa",
    "native_name": "Gangulu",
    "alternate_names": [
      "Gangulu"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Gangulu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q6362916",
    "summary_en": "The Gangulu people, also written Kangulu, Kaangooloo, Ghungalu and other variations, are an Aboriginal Australian people from the Woorabinda, Duaringa and Mount Morgan area in Queensland, Australia. Their traditional country encompasses Coastal and Eastern Queensland, centered near 24.0°S, 150.1°E.",
    "summary_fi": "Gangulu-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 24.0°S, 150.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Gangulu"
    ]
  },
  {
    "slug": "garawa-people",
    "name": "Garawa People",
    "name_fi": "Garawa-kansa",
    "native_name": "Garawa",
    "alternate_names": [
      "Garawa",
      "Garrwa language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Garrwa_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q2524022",
    "summary_en": "Garrwa, also spelt Garawa, Gaarwa, or Karawa and also known as Leearrawa, is an Australian Aboriginal language spoken by the Garrwa people of a northern region of the Northern Territory of Australia. Their traditional country encompasses Gulf Country & Barkly Tableland, NT / Queensland border, centered near 16.9°S, 137.4°E.",
    "summary_fi": "Garawa-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Carpentarianlahden rannikkoseudulla ja Barklyn ylängöllä (koordinaateissa noin 16.9°S, 137.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gulf Country & Barkly Tableland estates",
    "feature_name_matches": [
      "Garawa"
    ]
  },
  {
    "slug": "garingbal-people",
    "name": "Garingbal People",
    "name_fi": "Garingbal-kansa",
    "native_name": "Garingbal",
    "alternate_names": [
      "Garingbal",
      "Biri language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Biri_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q138662681",
    "summary_en": "Biri is a language traditionally spoken in an area between Mackay and Townsville of Queensland by the Birri Gubba people. Several grammatical descriptions of Biri were written before the language was silenced, but has been undergoing revival by the community for some years. Their traditional country encompasses Coastal and Eastern Queensland, centered near 24.7°S, 148.6°E.",
    "summary_fi": "Garingbal-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 24.7°S, 148.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Garingbal"
    ]
  },
  {
    "slug": "gayiri-people",
    "name": "Gayiri People",
    "name_fi": "Gayiri-kansa",
    "native_name": "Gayiri",
    "alternate_names": [
      "Gayiri"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Gayiri",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48810594",
    "summary_en": "The Gayiri, people, also spelt or known as Kairi, Kararya, Kari, Khararya and Kaira, Bimurraburra, Gahrarja, Gara Gara, Ara Ara, and Kara Kara, are an Aboriginal Australian people of the state of Queensland. Their traditional country encompasses Coastal and Eastern Queensland, centered near 23.9°S, 147.9°E.",
    "summary_fi": "Gayiri-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 23.9°S, 147.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Gayiri"
    ]
  },
  {
    "slug": "geawegal-people",
    "name": "Geawegal People",
    "name_fi": "Geawegal-kansa",
    "native_name": "Geawegal",
    "alternate_names": [
      "Geawegal"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Geawegal",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q29325035",
    "summary_en": "Geawegal is the name for an Australian Aboriginal people who were recorded as inhabiting an area of the Hunter Valley in eastern New South Wales, north of Sydney. This identification has been recently questioned by Jim Wafer of Newcastle University, who also reconstructs the original name as Kayawaykal. Their traditional country encompasses Eastern New South Wales (coastal and tableland country), centered near 32.1°S, 150.7°E.",
    "summary_fi": "Geawegal-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itäisen Uuden Etelä-Walesin rannikolla ja ylängöillä (koordinaateissa noin 32.1°S, 150.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern New South Wales traditional lands",
    "feature_name_matches": [
      "Geawegal"
    ]
  },
  {
    "slug": "giraiwurung-people",
    "name": "Giraiwurung People",
    "name_fi": "Giraiwurung-kansa",
    "native_name": "Giraiwurung",
    "alternate_names": [
      "Giraiwurung",
      "Dhauwurd Wurrung language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Dhauwurd_Wurrung_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q6448731",
    "summary_en": "Dhauwurd Wurrung is a term used for a group of languages spoken by various groups of the Gunditjmara people of the Western District of Victoria, Australia. Keerray Woorroong is regarded by some as a separate language, by others as a dialect. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 38.2°S, 142.8°E.",
    "summary_fi": "Giraiwurung-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 38.2°S, 142.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Giraiwurung"
    ]
  },
  {
    "slug": "giya-people",
    "name": "Giya People",
    "name_fi": "Giya-kansa",
    "native_name": "Giya",
    "alternate_names": [
      "Giya",
      "Gia people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Gia_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q39088179",
    "summary_en": "The Gia people, also known as Giya, Kia, Bumbarra, and variants, are an Aboriginal Australian people of the state of Queensland. Little is known of them. Their traditional country encompasses Coastal and Eastern Queensland, centered near 20.5°S, 148.5°E.",
    "summary_fi": "Giya-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 20.5°S, 148.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Giya"
    ]
  },
  {
    "slug": "gulidjan-people",
    "name": "Gulidjan People",
    "name_fi": "Gulidjan-kansa",
    "native_name": "Gulidjan",
    "alternate_names": [
      "Gulidjan"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Gulidjan",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q5617663",
    "summary_en": "The Gulidjan people, also known as the Kolakngat, or Colac tribe, are an Aboriginal Australian tribe whose traditional lands cover the Lake Colac region of the state of Victoria, Australia. They occupied the grasslands, woodlands, volcanic plains and lakes region east of Lake Corangamite, west of the Barwon River and north of the Otway Ranges. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 38.3°S, 143.7°E.",
    "summary_fi": "Gulidjan-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 38.3°S, 143.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Gulidjan"
    ]
  },
  {
    "slug": "gumbainggir-people",
    "name": "Gumbainggir People",
    "name_fi": "Gumbainggir-kansa",
    "native_name": "Gumbainggir",
    "alternate_names": [
      "Gumbainggir",
      "Gumbaynggirr"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Gumbaynggirr",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q3120790",
    "summary_en": "The Gumbaynggirr people, also rendered Kumbainggar, Gumbangeri and other variant spellings, are an Aboriginal Australian people of the Mid North Coast of New South Wales. Gumbathagang was a probable clan or sub-group. Their traditional country encompasses Eastern New South Wales (coastal and tableland country), centered near 30.0°S, 152.3°E.",
    "summary_fi": "Gumbainggir-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itäisen Uuden Etelä-Walesin rannikolla ja ylängöillä (koordinaateissa noin 30.0°S, 152.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern New South Wales traditional lands",
    "feature_name_matches": [
      "Gumbainggir"
    ]
  },
  {
    "slug": "gunditjmara-people",
    "name": "Gunditjmara People",
    "name_fi": "Gunditjmara-kansa",
    "native_name": "Gunditjmara",
    "alternate_names": [
      "Gunditjmara"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Gunditjmara",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q1554625",
    "summary_en": "The Gunditjmara or Gunditjamara, also known as Dhauwurd Wurrung, are an Aboriginal people of southwestern Victoria in Australia. They are the Traditional Owners of the areas now encompassing Warrnambool, Port Fairy, Woolsthorpe and Portland. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 38.0°S, 142.0°E.",
    "summary_fi": "Gunditjmara-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 38.0°S, 142.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Gunditjmara"
    ]
  },
  {
    "slug": "gundungurra-people",
    "name": "Gundungurra People",
    "name_fi": "Gundungurra-kansa",
    "native_name": "Gundungurra",
    "alternate_names": [
      "Gundungurra",
      "Gandangara"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Gandangara",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q3120839",
    "summary_en": "The Gandangara people, also spelled Gundungara, Gandangarra, Gundungurra and other variations, are an Aboriginal Australian people in south-eastern New South Wales, Australia. Their traditional lands include present day Goulburn, Wollondilly Shire, The Blue Mountains and the Southern Highlands. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 34.6°S, 149.6°E.",
    "summary_fi": "Gundungurra-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 34.6°S, 149.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Gundungurra"
    ]
  },
  {
    "slug": "gungabula-people",
    "name": "Gungabula People",
    "name_fi": "Gungabula-kansa",
    "native_name": "Gungabula",
    "alternate_names": [
      "Gungabula",
      "Kongabula"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kongabula",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48818097",
    "summary_en": "The Kongabula were an indigenous Australian people of the state of Queensland. Their traditional country encompasses Coastal and Eastern Queensland, centered near 25.7°S, 148.8°E.",
    "summary_fi": "Gungabula-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 25.7°S, 148.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Gungabula"
    ]
  },
  {
    "slug": "gunggari-people",
    "name": "Gunggari People",
    "name_fi": "Gunggari-kansa",
    "native_name": "Gunggari",
    "alternate_names": [
      "Gunggari",
      "Gunggari people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Gunggari_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48779708",
    "summary_en": "The Gunggari are an Aboriginal Australian tribe of southern Queensland. The traditional land of the Gunggari centres on the Maranoa River and overlaps with the land of the surrounding Mandandanji, Kooma, Kunja, Margany, Dharawala, Bidjara and Nguri peoples. Their traditional country encompasses Coastal and Eastern Queensland, centered near 26.2°S, 147.7°E.",
    "summary_fi": "Gunggari-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 26.2°S, 147.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Gunggari"
    ]
  },
  {
    "slug": "gunindiri-people",
    "name": "Gunindiri People",
    "name_fi": "Gunindiri-kansa",
    "native_name": "Gunindiri",
    "alternate_names": [
      "Gunindiri"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Gunindiri",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48815466",
    "summary_en": "The Gunindiri are an indigenous Australian people of the Northern Territory. Their traditional country encompasses Gulf Country & Barkly Tableland, NT / Queensland border, centered near 17.4°S, 136.2°E.",
    "summary_fi": "Gunindiri-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Carpentarianlahden rannikkoseudulla ja Barklyn ylängöllä (koordinaateissa noin 17.4°S, 136.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gulf Country & Barkly Tableland estates",
    "feature_name_matches": [
      "Gunindiri"
    ]
  },
  {
    "slug": "gunu-people",
    "name": "Gunu People",
    "name_fi": "Gunu-kansa",
    "native_name": "Gunu",
    "alternate_names": [
      "Gunu",
      "Gunu language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Gunu_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q36358",
    "summary_en": "The Gunu language is a Southern Bantoid language of Cameroon. Their traditional country encompasses Inland New South Wales (Murray-Darling Basin), centered near 29.6°S, 145.4°E.",
    "summary_fi": "Gunu-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Uuden Etelä-Walesin sisämaassa Murray-Darling-joen valuma-alueella (koordinaateissa noin 29.6°S, 145.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Murray-Darling Basin traditional country",
    "feature_name_matches": [
      "Gunu"
    ]
  },
  {
    "slug": "gureng-gureng-people",
    "name": "Gureng Gureng People",
    "name_fi": "Gureng Gureng-kansa",
    "native_name": "Gureng Gureng",
    "alternate_names": [
      "Gureng Gureng",
      "Goreng Goreng"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Goreng_Goreng",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q5586165",
    "summary_en": "The Gooreng Gooreng, also known Kooreng Gooreng, are an inland freshwater Australian Aboriginal people of Queensland, and also a language group. The Goreng Goreng area is between Central West Queensland in the north around Boyne Valley, extending westerly as far as the Great Dividing Range along the Dawes, Auburn, Nogo and Callide Ranges to meet the Wulli Wulli and Ghunghulu to their immediate west over the Great Dividing Range. Their traditional country encompasses Coastal and Eastern Queensland, centered near 24.9°S, 151.5°E.",
    "summary_fi": "Gureng Gureng-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 24.9°S, 151.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Gureng Gureng"
    ]
  },
  {
    "slug": "guringai-people",
    "name": "Guringai People",
    "name_fi": "Guringai-kansa",
    "native_name": "Guringai",
    "alternate_names": [
      "Guringai",
      "Kuringgai"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kuringgai",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q1555191",
    "summary_en": "Kuringgai (,) is an ethnonym misapplied to an Indigenous Australian people who once occupied the territory between the southern borders of the Gamilaraay and the area around Sydney, and a historical people with its own distinctive language, located in part of that territory. Their traditional country encompasses Eastern New South Wales (coastal and tableland country), centered near 33.5°S, 151.2°E.",
    "summary_fi": "Guringai-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itäisen Uuden Etelä-Walesin rannikolla ja ylängöillä (koordinaateissa noin 33.5°S, 151.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern New South Wales traditional lands",
    "feature_name_matches": [
      "Guringai"
    ]
  },
  {
    "slug": "guugu-yimidhirr-people",
    "name": "Guugu-Yimidhirr People",
    "name_fi": "Guugu-Yimidhirr-kansa",
    "native_name": "Guugu-Yimidhirr",
    "alternate_names": [
      "Guugu-Yimidhirr",
      "Guugu Yimithirr language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Guugu_Yimithirr_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q56543",
    "summary_en": "Guugu Yimithirr, also rendered Guugu Yimidhirr, Guguyimidjir, and many other spellings, is an Australian Aboriginal language, the traditional language of the Guugu Yimithirr people of Far North Queensland. It belongs to the Pama-Nyungan language family. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 15.5°S, 144.9°E.",
    "summary_fi": "Guugu-Yimidhirr-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 15.5°S, 144.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Guugu-Yimidhirr"
    ]
  },
  {
    "slug": "guwa-people",
    "name": "Guwa People",
    "name_fi": "Guwa-kansa",
    "native_name": "Guwa",
    "alternate_names": [
      "Guwa",
      "Guwa language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Guwa_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q5621992",
    "summary_en": "Guwa, also spelt Goa, Koa, and other variants, is an extinct and nearly unattested Australian Aboriginal language of Queensland spoken by the Koa people. It was apparently close to Yanda. Their traditional country encompasses North & Central Queensland interior, centered near 22.2°S, 142.2°E.",
    "summary_fi": "Guwa-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 22.2°S, 142.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Guwa"
    ]
  },
  {
    "slug": "guwinmal-people",
    "name": "Guwinmal People",
    "name_fi": "Guwinmal-kansa",
    "native_name": "Guwinmal",
    "alternate_names": [
      "Guwinmal",
      "Koinmerburra people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Koinmerburra_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q39088198",
    "summary_en": "The Koinmerburra people, also known as Koinjmal, Guwinmal, Kungmal and other variants, are an Aboriginal Australian people of the state of Queensland. They are the traditional owners of an area which includes part of the Great Barrier Reef. Their traditional country encompasses Coastal and Eastern Queensland, centered near 22.2°S, 149.4°E.",
    "summary_fi": "Guwinmal-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 22.2°S, 149.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Guwinmal"
    ]
  },
  {
    "slug": "iningai-people",
    "name": "Iningai People",
    "name_fi": "Iningai-kansa",
    "native_name": "Iningai",
    "alternate_names": [
      "Iningai"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Iningai",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48815031",
    "summary_en": "The Iningai (Yiningayi) are an indigenous Australian people of the present-day Longreach Region in the state of Queensland. Their traditional country encompasses North & Central Queensland interior, centered near 23.4°S, 144.8°E.",
    "summary_fi": "Iningai-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 23.4°S, 144.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Iningai"
    ]
  },
  {
    "slug": "jaitmatang-people",
    "name": "Jaitmatang People",
    "name_fi": "Jaitmatang-kansa",
    "native_name": "Jaitmatang",
    "alternate_names": [
      "Jaitmatang",
      "Yaithmathang"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yaithmathang",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q39087884",
    "summary_en": "The Jaitmatang, also spelled Yaithmathang, and referred to as Omeo, are an Indigenous Australian people of the State of Victoria. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 36.7°S, 147.8°E.",
    "summary_fi": "Jaitmatang-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 36.7°S, 147.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Jaitmatang"
    ]
  },
  {
    "slug": "jardwadjali-people",
    "name": "Jardwadjali People",
    "name_fi": "Jardwadjali-kansa",
    "native_name": "Jardwadjali",
    "alternate_names": [
      "Jardwadjali"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Jardwadjali",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q1683456",
    "summary_en": "The Jardwadjali (Yartwatjali), also known as the Jaadwa, are an Aboriginal Australian people of the state of Victoria, whose traditional lands occupy the lands in the upper Wimmera River watershed east to Gariwerd (Grampians) and west to Lake Bringalbert. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 37.0°S, 142.2°E.",
    "summary_fi": "Jardwadjali-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 37.0°S, 142.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Jardwadjali"
    ]
  },
  {
    "slug": "kaantju-people",
    "name": "Kaantju People",
    "name_fi": "Kaantju-kansa",
    "native_name": "Kaantju",
    "alternate_names": [
      "Kaantju"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kaantju",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q28224503",
    "summary_en": "The Kaantju people are an Aboriginal Australian people of the Cape York Peninsula in north Queensland. They live in the area around the present-day town of Coen. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 13.6°S, 143.1°E.",
    "summary_fi": "Kaantju-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 13.6°S, 143.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Kaantju"
    ]
  },
  {
    "slug": "kalkadoon-people",
    "name": "Kalkadoon People",
    "name_fi": "Kalkadoon-kansa",
    "native_name": "Kalkadoon",
    "alternate_names": [
      "Kalkadoon",
      "Kalkatungu"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kalkatungu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q1722342",
    "summary_en": "The Kalkadoon are descendants of an Indigenous Australian tribe living in the Mount Isa region of Queensland. Their ancestral tribe has been called \"the elite of the Aboriginal warriors of Queensland\". Their traditional country encompasses North & Central Queensland interior, centered near 21.1°S, 139.8°E.",
    "summary_fi": "Kalkadoon-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 21.1°S, 139.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Kalkadoon"
    ]
  },
  {
    "slug": "kamilaroi-people",
    "name": "Kamilaroi People",
    "name_fi": "Kamilaroi-kansa",
    "native_name": "Kamilaroi",
    "alternate_names": [
      "Kamilaroi",
      "Gamilaraay"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Gamilaraay",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q175823",
    "summary_en": "The Gamilaroi, also known as Gomeroi, Kamilaroi, Kamillaroi, Gomilaroy and other variations, are an Aboriginal Australian people whose lands extend from New South Wales to southern Queensland. They form one of the four largest Indigenous nations in Australia. Their traditional country encompasses Eastern New South Wales (coastal and tableland country), centered near 30.3°S, 149.6°E.",
    "summary_fi": "Kamilaroi-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itäisen Uuden Etelä-Walesin rannikolla ja ylängöillä (koordinaateissa noin 30.3°S, 149.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern New South Wales traditional lands",
    "feature_name_matches": [
      "Kamilaroi"
    ]
  },
  {
    "slug": "karangura-people",
    "name": "Karangura People",
    "name_fi": "Karangura-kansa",
    "native_name": "Karangura",
    "alternate_names": [
      "Karangura"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Karangura",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q55615689",
    "summary_en": "The Karangura were an indigenous Australian people of far north west South Australia. Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 26.3°S, 138.5°E.",
    "summary_fi": "Karangura-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 26.3°S, 138.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Karangura"
    ]
  },
  {
    "slug": "karenggapa-people",
    "name": "Karenggapa People",
    "name_fi": "Karenggapa-kansa",
    "native_name": "Karenggapa",
    "alternate_names": [
      "Karenggapa"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Karenggapa",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48806915",
    "summary_en": "The Karenggapa are an Aboriginal Australian people of New South Wales. Their traditional country encompasses Inland New South Wales (Murray-Darling Basin), centered near 29.1°S, 142.7°E.",
    "summary_fi": "Karenggapa-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Uuden Etelä-Walesin sisämaassa Murray-Darling-joen valuma-alueella (koordinaateissa noin 29.1°S, 142.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Murray-Darling Basin traditional country",
    "feature_name_matches": [
      "Karenggapa"
    ]
  },
  {
    "slug": "karuwali-people",
    "name": "Karuwali People",
    "name_fi": "Karuwali-kansa",
    "native_name": "Karuwali",
    "alternate_names": [
      "Karuwali"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Karuwali",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48811930",
    "summary_en": "The Karuwali are an Aboriginal Australian people of the state of Queensland. Their traditional country encompasses Channel Country & Lake Eyre Basin, Southwest Queensland, centered near 25.1°S, 141.3°E.",
    "summary_fi": "Karuwali-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Channel Countryn ja Eyre-järven valuma-alueella Lounais-Queenslandissa (koordinaateissa noin 25.1°S, 141.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Channel Country traditional lands",
    "feature_name_matches": [
      "Karuwali"
    ]
  },
  {
    "slug": "kaurna-pangkarra-people",
    "name": "Kaurna Pangkarra People",
    "name_fi": "Kaurna Pangkarra-kansa",
    "native_name": "Kaurna Pangkarra",
    "alternate_names": [
      "Kaurna Pangkarra"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kaurna_Pangkarra",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q132155",
    "summary_en": "Indigenous Australian people and language group whose traditional country is situated in South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges) (centered near 34.4°S, 138.4°E). As custodians of an ancient cultural tradition spanning tens of thousands of years, they maintain profound ancestral connections, complex kinship structures, and Dreamtime songline traditions.",
    "summary_fi": "Kaurna Pangkarra-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 34.4°S, 138.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Kaurna Pangkarra"
    ]
  },
  {
    "slug": "koknar-people",
    "name": "Koknar People",
    "name_fi": "Koknar-kansa",
    "native_name": "Koknar",
    "alternate_names": [
      "Koknar",
      "Kok-Nar language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kok-Nar_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q6426526",
    "summary_en": "Kok Narr (Kok-Nar) is an extinct Paman language of the Cape York Peninsula, Queensland, Australia. Their traditional country encompasses North & Central Queensland interior, centered near 16.3°S, 141.6°E.",
    "summary_fi": "Koknar-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 16.3°S, 141.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Koknar"
    ]
  },
  {
    "slug": "koko-bera-people",
    "name": "Koko-bera People",
    "name_fi": "Koko-bera-kansa",
    "native_name": "Koko-bera",
    "alternate_names": [
      "Koko-bera",
      "Koko-Bera language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Koko-Bera_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q6426699",
    "summary_en": "Gugubera, or Kok-Kaper, is a Paman language of the Cape York Peninsula, Queensland, in Australia. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 15.6°S, 141.6°E.",
    "summary_fi": "Koko-bera-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 15.6°S, 141.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Koko-bera"
    ]
  },
  {
    "slug": "kokomini-people",
    "name": "Kokomini People",
    "name_fi": "Kokomini-kansa",
    "native_name": "Kokomini",
    "alternate_names": [
      "Kokomini"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kokomini",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48818005",
    "summary_en": "The Kokomini (Gugumini) are reported to have been an indigenous Australian people of the state of Queensland, though some indications suggest the term may refer to a loose confederation of tribal groups. Their traditional country encompasses North & Central Queensland interior, centered near 16.3°S, 143.3°E.",
    "summary_fi": "Kokomini-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 16.3°S, 143.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Kokomini"
    ]
  },
  {
    "slug": "kokowarra-people",
    "name": "Kokowarra People",
    "name_fi": "Kokowarra-kansa",
    "native_name": "Kokowarra",
    "alternate_names": [
      "Kokowarra",
      "Kokowalandja"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kokowalandja",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48818039",
    "summary_en": "The Kokowalandja were an indigenous Australian people of northern Queensland. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 15.4°S, 144.2°E.",
    "summary_fi": "Kokowarra-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 15.4°S, 144.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Kokowarra"
    ]
  },
  {
    "slug": "kooma-people",
    "name": "Kooma People",
    "name_fi": "Kooma-kansa",
    "native_name": "Kooma",
    "alternate_names": [
      "Kooma"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kooma",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q6430648",
    "summary_en": "The Kooma are a contemporary aggregation of Indigenous Australian peoples descending from tribes living in the border region of Queensland and New South Wales. They are descendants of the Koamu. Their traditional country encompasses Coastal and Eastern Queensland, centered near 28.0°S, 147.1°E.",
    "summary_fi": "Kooma-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 28.0°S, 147.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Kooma"
    ]
  },
  {
    "slug": "kukatj-people",
    "name": "Kukatj People",
    "name_fi": "Kukatj-kansa",
    "native_name": "Kukatj",
    "alternate_names": [
      "Kukatj"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kukatj",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48818098",
    "summary_en": "The Kukatj are an Aboriginal Australian people of the Cape York Peninsula in the state of Queensland. They are to be distinguished from the Kukatja of Western Australia and the Luritja of the Northern Territory, who have also historically been known as Kukatja. Their traditional country encompasses North & Central Queensland interior, centered near 18.2°S, 140.4°E.",
    "summary_fi": "Kukatj-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 18.2°S, 140.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Kukatj"
    ]
  },
  {
    "slug": "kuku-yalanji-people",
    "name": "Kuku-yalanji People",
    "name_fi": "Kuku-yalanji-kansa",
    "native_name": "Kuku-yalanji",
    "alternate_names": [
      "Kuku-yalanji",
      "Kuku Yalanji"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kuku_Yalanji",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q6442586",
    "summary_en": "The Kuku Yalanji, also known as Gugu-Yalanji, Kuku Yalandji or Kokojelandji, are an Aboriginal Australian people originating from the rainforest regions of Far North Queensland. Their traditional country encompasses North & Central Queensland interior, centered near 16.4°S, 144.6°E.",
    "summary_fi": "Kuku-yalanji-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 16.4°S, 144.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Kuku-yalanji"
    ]
  },
  {
    "slug": "kullilla-people",
    "name": "Kullilla People",
    "name_fi": "Kullilla-kansa",
    "native_name": "Kullilla",
    "alternate_names": [
      "Kullilla",
      "Kulliyyah of Architecture and Environmental Design"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kulliyyah_of_Architecture_and_Environmental_Design",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q6443134",
    "summary_en": "The Kulliyyah of Architecture and Environmental Design (KAED) is the architecture or 'built environment' faculty of International Islamic University Malaysia (IIUM). Established on 1 June 1996 to fill the need for Islamic professionals in the built environment, it is the eleventh Kulliyyah built in the university, and the third science-based faculty after Kulliyyah of Medicine and Kulliyyah of Engineering. Their traditional country encompasses Channel Country & Lake Eyre Basin, Southwest Queensland, centered near 28.3°S, 143.0°E.",
    "summary_fi": "Kullilla-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Channel Countryn ja Eyre-järven valuma-alueella Lounais-Queenslandissa (koordinaateissa noin 28.3°S, 143.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Channel Country traditional lands",
    "feature_name_matches": [
      "Kullilla"
    ]
  },
  {
    "slug": "kunja-people",
    "name": "Kunja People",
    "name_fi": "Kunja-kansa",
    "native_name": "Kunja",
    "alternate_names": [
      "Kunja",
      "Kunja people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kunja_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q47633645",
    "summary_en": "The Kunja people are an Indigenous Australian people of southwest Queensland. Their traditional country encompasses Inland New South Wales (Murray-Darling Basin), centered near 28.2°S, 145.4°E.",
    "summary_fi": "Kunja-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Uuden Etelä-Walesin sisämaassa Murray-Darling-joen valuma-alueella (koordinaateissa noin 28.2°S, 145.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Murray-Darling Basin traditional country",
    "feature_name_matches": [
      "Kunja"
    ]
  },
  {
    "slug": "kunjen-people",
    "name": "Kunjen People",
    "name_fi": "Kunjen-kansa",
    "native_name": "Kunjen",
    "alternate_names": [
      "Kunjen",
      "Kunjen language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kunjen_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q3200468",
    "summary_en": "Kunjen, or Uw, is a Paman language spoken on the Cape York Peninsula of Queensland, Australia, by the Uw Oykangand, Olkola, and related Aboriginal Australian peoples. It is closely related to Kuuk Thaayorre, and perhaps Kuuk Yak. Their traditional country encompasses North & Central Queensland interior, centered near 16.1°S, 142.3°E.",
    "summary_fi": "Kunjen-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 16.1°S, 142.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Kunjen"
    ]
  },
  {
    "slug": "kureinji-people",
    "name": "Kureinji People",
    "name_fi": "Kureinji-kansa",
    "native_name": "Kureinji",
    "alternate_names": [
      "Kureinji"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kureinji",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q28224577",
    "summary_en": "The Kureinji, otherwise known as the Keramin, are an Aboriginal group whose traditional lands are located in south-west New South Wales, Australia, along the north side of the Murray River, roughly between today's settlements of Euston and Wentworth. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 34.2°S, 142.6°E.",
    "summary_fi": "Kureinji-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 34.2°S, 142.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Kureinji"
    ]
  },
  {
    "slug": "kurnai-people",
    "name": "Kurnai People",
    "name_fi": "Kurnai-kansa",
    "native_name": "Kurnai",
    "alternate_names": [
      "Kurnai",
      "Gunaikurnai people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Gunaikurnai_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q1793131",
    "summary_en": "The Kurnai people constitute an Aboriginal Australian nation of south-east Australia. They are the Traditional Custodians of most of present-day Gippsland and much of the southern slopes of the Victorian Alps. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 37.9°S, 147.5°E.",
    "summary_fi": "Kurnai-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 37.9°S, 147.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Kurnai"
    ]
  },
  {
    "slug": "kurtjar-people",
    "name": "Kurtjar People",
    "name_fi": "Kurtjar-kansa",
    "native_name": "Kurtjar",
    "alternate_names": [
      "Kurtjar",
      "Kunggara"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kunggara",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q47634195",
    "summary_en": "The Kunggara, also known as Kuritjara, are an indigenous Australian people of the southern Cape York Peninsula in Queensland. Their traditional country encompasses North & Central Queensland interior, centered near 17.2°S, 142.0°E.",
    "summary_fi": "Kurtjar-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 17.2°S, 142.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Kurtjar"
    ]
  },
  {
    "slug": "kuthant-people",
    "name": "Kuthant People",
    "name_fi": "Kuthant-kansa",
    "native_name": "Kuthant",
    "alternate_names": [
      "Kuthant",
      "Gkuthaarn language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Gkuthaarn_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q6448417",
    "summary_en": "Gkuthaarn, also rendered Kuthant, Kutanda and other variant spellings, is an extinct Paman language of the Cape York Peninsula, Queensland, Australia. It also known as Karundi/Garandi, but the Garandi language may be a separate dialect. Their traditional country encompasses North & Central Queensland interior, centered near 17.6°S, 140.9°E.",
    "summary_fi": "Kuthant-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 17.6°S, 140.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Kuthant"
    ]
  },
  {
    "slug": "kuuku-yani-people",
    "name": "Kuuku-yani People",
    "name_fi": "Kuuku-yani-kansa",
    "native_name": "Kuuku-yani",
    "alternate_names": [
      "Kuuku-yani",
      "Umpila language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Umpila_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q12953954",
    "summary_en": "Umpila, also known as Ompeila, Ompela, Oom-billa, or Koko-umpilo, is an Aboriginal Australian language, or dialect cluster, of the Cape York Peninsula in northern Queensland. It is spoken by about 100 Aboriginal people, many of them elderly. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 13.9°S, 143.4°E.",
    "summary_fi": "Kuuku-yani-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 13.9°S, 143.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Kuuku-yani"
    ]
  },
  {
    "slug": "kuuku-ya-u-people",
    "name": "Kuuku-ya'u People",
    "name_fi": "Kuuku-ya'u-kansa",
    "native_name": "Kuuku-ya'u",
    "alternate_names": [
      "Kuuku-ya'u",
      "Kuuku-ya’u",
      "Pakadji"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pakadji",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q29027059",
    "summary_en": "The Pakadji people, also known by the southern tribal exonym as the Koko Yao, are an Aboriginal Australian group of Cape York Peninsula in northern Queensland. The ethnonym Koko Yaʼo is said literally to mean \" talk, speech\" (koko/kuku) 'this way' (yaʼo), though this has been questioned. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 12.7°S, 143.1°E.",
    "summary_fi": "Kuuku-ya'u-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 12.7°S, 143.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Kuuku-ya’u"
    ]
  },
  {
    "slug": "kuungkari-people",
    "name": "Kuungkari People",
    "name_fi": "Kuungkari-kansa",
    "native_name": "Kuungkari",
    "alternate_names": [
      "Kuungkari"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kuungkari",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q39090957",
    "summary_en": "The Kuungkari are an indigenous Australian people of Queensland. They are to be distinguished from the Kunggari. Their traditional country encompasses Channel Country & Lake Eyre Basin, Southwest Queensland, centered near 24.5°S, 144.3°E.",
    "summary_fi": "Kuungkari-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Channel Countryn ja Eyre-järven valuma-alueella Lounais-Queenslandissa (koordinaateissa noin 24.5°S, 144.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Channel Country traditional lands",
    "feature_name_matches": [
      "Kuungkari"
    ]
  },
  {
    "slug": "kuyani-people",
    "name": "Kuyani People",
    "name_fi": "Kuyani-kansa",
    "native_name": "Kuyani",
    "alternate_names": [
      "Kuyani"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Kuyani",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48806156",
    "summary_en": "The Kuyani people, also written Guyani and other variants, and also known as the Nganitjidi, are an Aboriginal Australian people of the state of South Australia who speak the Kuyani language. Their traditional lands are to the west of the Flinders Ranges. Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 30.6°S, 138.0°E.",
    "summary_fi": "Kuyani-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 30.6°S, 138.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Kuyani"
    ]
  },
  {
    "slug": "lamalama-people",
    "name": "Lamalama People",
    "name_fi": "Lamalama-kansa",
    "native_name": "Lamalama",
    "alternate_names": [
      "Lamalama",
      "Lama Lama people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Lama_Lama_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q29324694",
    "summary_en": "The Lama Lama, also spelt Lamalama, are a contemporary Aboriginal Australian people of the eastern Cape York Peninsula in northern Queensland. The term was formerly used as one of the ethnonyms associated with a distinct tribe or clan group, the Bakanambia. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 14.6°S, 143.8°E.",
    "summary_fi": "Lamalama-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 14.6°S, 143.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Lamalama"
    ]
  },
  {
    "slug": "latje-latje-people",
    "name": "Latje Latje People",
    "name_fi": "Latje Latje-kansa",
    "native_name": "Latje Latje",
    "alternate_names": [
      "Latje Latje",
      "Latji Latji"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Latji_Latji",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q30682039",
    "summary_en": "The Latjilatji, sometimes spelt Latji Latji or Latje Latje are an Indigenous Australian people of the state of Victoria, Australia. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 34.5°S, 142.0°E.",
    "summary_fi": "Latje Latje-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 34.5°S, 142.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Latje Latje"
    ]
  },
  {
    "slug": "luthigh-people",
    "name": "Luthigh People",
    "name_fi": "Luthigh-kansa",
    "native_name": "Luthigh",
    "alternate_names": [
      "Luthigh"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Luthigh",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48782174",
    "summary_en": "The Lotiga, also known as the Okara, were an Indigenous Australian people of the Cape York Peninsula of North Queensland. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 12.6°S, 142.3°E.",
    "summary_fi": "Luthigh-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 12.6°S, 142.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Luthigh"
    ]
  },
  {
    "slug": "madi-madi-people",
    "name": "Madi Madi People",
    "name_fi": "Madi Madi-kansa",
    "native_name": "Madi Madi",
    "alternate_names": [
      "Madi Madi",
      "Muthi Muthi"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Muthi_Muthi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q19875967",
    "summary_en": "The Muthi Muthi people are an indigenous Australian people whose traditional lands are located in the Northern Riverina and Far West regions of New South Wales. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 34.2°S, 143.6°E.",
    "summary_fi": "Madi Madi-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 34.2°S, 143.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Madi Madi"
    ]
  },
  {
    "slug": "maiawali-people",
    "name": "Maiawali People",
    "name_fi": "Maiawali-kansa",
    "native_name": "Maiawali",
    "alternate_names": [
      "Maiawali"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Maiawali",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q47633254",
    "summary_en": "The Maiawali, other wise known as the Mayuli, are an Indigenous Australian people of the state of Queensland. Their traditional country encompasses North & Central Queensland interior, centered near 23.4°S, 141.9°E.",
    "summary_fi": "Maiawali-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 23.4°S, 141.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Maiawali"
    ]
  },
  {
    "slug": "malyangaba-people",
    "name": "Malyangaba People",
    "name_fi": "Malyangaba-kansa",
    "native_name": "Malyangaba",
    "alternate_names": [
      "Malyangaba",
      "Yarli language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yarli_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q8049359",
    "summary_en": "Yarli (Yardli) was a dialect cluster of Australian Aboriginal languages spoken in northwestern New South Wales and into Northeastern South Australia individually Malyangapa (Maljangapa), Yardliyawara, and Wadikali. Bowern (2002) notes Karenggapa as part of the area, but there is little data. Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 30.9°S, 140.6°E.",
    "summary_fi": "Malyangaba-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 30.9°S, 140.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Malyangaba"
    ]
  },
  {
    "slug": "mara-people",
    "name": "Mara People",
    "name_fi": "Mara-kansa",
    "native_name": "Mara",
    "alternate_names": [
      "Mara",
      "Mara people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mara_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q6754529",
    "summary_en": "The Mara, also historically known as Lakher, are an ethnic group native to Mizoram, India, and Chin State, Myanmar. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 15.1°S, 135.2°E.",
    "summary_fi": "Mara-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 15.1°S, 135.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Mara"
    ]
  },
  {
    "slug": "margany-people",
    "name": "Margany People",
    "name_fi": "Margany-kansa",
    "native_name": "Margany",
    "alternate_names": [
      "Margany",
      "Maranganji"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Maranganji",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48808628",
    "summary_en": "The Maranganji are an Aboriginal Australian tribe from southwest Queensland. Their traditional country encompasses Channel Country & Lake Eyre Basin, Southwest Queensland, centered near 27.2°S, 144.3°E.",
    "summary_fi": "Margany-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Channel Countryn ja Eyre-järven valuma-alueella Lounais-Queenslandissa (koordinaateissa noin 27.2°S, 144.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Channel Country traditional lands",
    "feature_name_matches": [
      "Margany"
    ]
  },
  {
    "slug": "mayi-kulan-people",
    "name": "Mayi-Kulan People",
    "name_fi": "Mayi-Kulan-kansa",
    "native_name": "Mayi-Kulan",
    "alternate_names": [
      "Mayi-Kulan",
      "Maikulan"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Maikulan",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48810044",
    "summary_en": "The Maikulan were an indigenous Australian people of the state of Queensland. They have sometimes been confused with the Maithakari. Their traditional country encompasses North & Central Queensland interior, centered near 18.4°S, 141.4°E.",
    "summary_fi": "Mayi-Kulan-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 18.4°S, 141.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Mayi-Kulan"
    ]
  },
  {
    "slug": "mayi-kutuna-people",
    "name": "Mayi-Kutuna People",
    "name_fi": "Mayi-Kutuna-kansa",
    "native_name": "Mayi-Kutuna",
    "alternate_names": [
      "Mayi-Kutuna",
      "Mayi-Kutuna people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mayi-Kutuna_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48810113",
    "summary_en": "The Mayi-Kutuna, also spelt Mayaguduna and Maikudunu, are an Aboriginal Australian people of the Cape York Peninsula in the state of Queensland, whose language has become extinct. Their traditional country encompasses North & Central Queensland interior, centered near 19.0°S, 139.7°E.",
    "summary_fi": "Mayi-Kutuna-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 19.0°S, 139.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Mayi-Kutuna"
    ]
  },
  {
    "slug": "mayi-thakurti-people",
    "name": "Mayi-Thakurti People",
    "name_fi": "Mayi-Thakurti-kansa",
    "native_name": "Mayi-Thakurti",
    "alternate_names": [
      "Mayi-Thakurti",
      "Maithakari"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Maithakari",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48810052",
    "summary_en": "The Maikathari (Mayi-Thakurti) were an Aboriginal Australian people of the state of Queensland. Their traditional country encompasses North & Central Queensland interior, centered near 20.1°S, 140.7°E.",
    "summary_fi": "Mayi-Thakurti-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 20.1°S, 140.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Mayi-Thakurti"
    ]
  },
  {
    "slug": "mbabaram-people",
    "name": "Mbabaram People",
    "name_fi": "Mbabaram-kansa",
    "native_name": "Mbabaram",
    "alternate_names": [
      "Mbabaram",
      "Mbabaram people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mbabaram_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q28225080",
    "summary_en": "Mbabaram or Mbabaɽam, also (M)Barbaram, often referred to as the Barbaram people, are an Indigenous Australian people, originally living in Queensland in the rainforests of the Atherton Tableland. Their traditional country encompasses North & Central Queensland interior, centered near 17.5°S, 145.0°E.",
    "summary_fi": "Mbabaram-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 17.5°S, 145.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Mbabaram"
    ]
  },
  {
    "slug": "mbara-people",
    "name": "Mbara People",
    "name_fi": "Mbara-kansa",
    "native_name": "Mbara",
    "alternate_names": [
      "Mbara",
      "Mbara people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mbara_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48808954",
    "summary_en": "The Mbara, also known as Kumbulmara, Mitjamba, Midjamba and Kumbulara, are or were an Aboriginal Australian people of the present-day state of Queensland. They spoke the Pama–Nyungan Mbara language. Their traditional country encompasses North & Central Queensland interior, centered near 20.0°S, 143.4°E.",
    "summary_fi": "Mbara-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 20.0°S, 143.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Mbara"
    ]
  },
  {
    "slug": "mbeiwum-people",
    "name": "Mbeiwum People",
    "name_fi": "Mbeiwum-kansa",
    "native_name": "Mbeiwum",
    "alternate_names": [
      "Mbeiwum",
      "Mbiywom language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mbiywom_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q6799701",
    "summary_en": "Mbiywom (Mbeiwum) is an extinct Australian Aboriginal language formerly spoken by the Mbiywom people around the areas of Cape York and Cook Shire in Far North Queensland. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 13.0°S, 142.2°E.",
    "summary_fi": "Mbeiwum-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 13.0°S, 142.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Mbeiwum"
    ]
  },
  {
    "slug": "meru-people",
    "name": "Meru People",
    "name_fi": "Meru-kansa",
    "native_name": "Meru",
    "alternate_names": [
      "Meru",
      "Meru people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Meru_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q1290677",
    "summary_en": "The Meru or Amîîrú are a Bantu ethnic group that inhabit the Meru region of Kenya. The region is situated on the fertile lands of the north and eastern slopes of Mount Kenya in the former Eastern Province. Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 34.2°S, 140.5°E.",
    "summary_fi": "Meru-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 34.2°S, 140.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Meru"
    ]
  },
  {
    "slug": "mingin-people",
    "name": "Mingin People",
    "name_fi": "Mingin-kansa",
    "native_name": "Mingin",
    "alternate_names": [
      "Mingin",
      "Mingin people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mingin_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48816909",
    "summary_en": "The Mingin, also known as the Mingginda, are an Aboriginal Australian people of the state of Queensland, who lived in the Gulf Country east of Moonlight Creek and the Yukulta / Ganggalidda people in the southern Gulf of Carpentaria. Their traditional country encompasses North & Central Queensland interior, centered near 17.8°S, 139.6°E.",
    "summary_fi": "Mingin-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 17.8°S, 139.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Mingin"
    ]
  },
  {
    "slug": "mithaka-people",
    "name": "Mithaka People",
    "name_fi": "Mithaka-kansa",
    "native_name": "Mithaka",
    "alternate_names": [
      "Mithaka",
      "Mithaka language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mithaka_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q56325199",
    "summary_en": "Mithaka is an extinct Australian Aboriginal language in the Barcoo Shire of Western Queensland spoken by the Mitaka people. Their traditional country encompasses Channel Country & Lake Eyre Basin, Southwest Queensland, centered near 25.0°S, 140.1°E.",
    "summary_fi": "Mithaka-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Channel Countryn ja Eyre-järven valuma-alueella Lounais-Queenslandissa (koordinaateissa noin 25.0°S, 140.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Channel Country traditional lands",
    "feature_name_matches": [
      "Mithaka"
    ]
  },
  {
    "slug": "miyan-people",
    "name": "Miyan People",
    "name_fi": "Miyan-kansa",
    "native_name": "Miyan",
    "alternate_names": [
      "Miyan",
      "Miyan people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Miyan_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48811258",
    "summary_en": "The Miyan, or Mian, were an Indigenous people of the state of the Australian state of Queensland. Their traditional country encompasses Coastal and Eastern Queensland, centered near 22.0°S, 146.3°E.",
    "summary_fi": "Miyan-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 22.0°S, 146.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Miyan"
    ]
  },
  {
    "slug": "mpalitjanh-people",
    "name": "Mpalitjanh People",
    "name_fi": "Mpalitjanh-kansa",
    "native_name": "Mpalitjanh",
    "alternate_names": [
      "Mpalitjanh",
      "Mpalitjanh dialect"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mpalitjanh_dialect",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q6928192",
    "summary_en": "Mpalityan (Mpalitjanh) is an Australian language once spoken in the Cape York Peninsula of Queensland. It and Luthigh are dialects of a single language. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 12.3°S, 142.6°E.",
    "summary_fi": "Mpalitjanh-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 12.3°S, 142.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Mpalitjanh"
    ]
  },
  {
    "slug": "mutumui-people",
    "name": "Mutumui People",
    "name_fi": "Mutumui-kansa",
    "native_name": "Mutumui",
    "alternate_names": [
      "Mutumui"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mutumui",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q39091154",
    "summary_en": "The Mutumui were an indigenous Australian people of northern Queensland. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 14.7°S, 144.4°E.",
    "summary_fi": "Mutumui-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 14.7°S, 144.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Mutumui"
    ]
  },
  {
    "slug": "nakara-people",
    "name": "Nakara People",
    "name_fi": "Nakara-kansa",
    "native_name": "Nakara",
    "alternate_names": [
      "Nakara",
      "Nagara people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nagara_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48780739",
    "summary_en": "The Nagara, also written Nakara, are an indigenous Australian people of Arnhem Land in the Northern Territory. They speak the Nakkara language. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 12.1°S, 134.6°E.",
    "summary_fi": "Nakara-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 12.1°S, 134.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Nakara"
    ]
  },
  {
    "slug": "narangga-people",
    "name": "Narangga People",
    "name_fi": "Narangga-kansa",
    "native_name": "Narangga",
    "alternate_names": [
      "Narangga",
      "Narungga"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Narungga",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q579597",
    "summary_en": "The Narungga people, also spelt Narangga, are a group of Aboriginal Australians whose traditional lands are located throughout Yorke Peninsula, South Australia. Their traditional language, one of the Yura-Thura grouping, is Narungga. Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 34.4°S, 137.8°E.",
    "summary_fi": "Narangga-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 34.4°S, 137.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Narangga"
    ]
  },
  {
    "slug": "nari-nari-people",
    "name": "Nari Nari People",
    "name_fi": "Nari Nari-kansa",
    "native_name": "Nari Nari",
    "alternate_names": [
      "Nari Nari",
      "Nari-Nari"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nari-Nari",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q6965901",
    "summary_en": "The Nari-Nari are an Indigenous Australian group in the Riverina region of New South Wales, Australia. The Nari-Nari are believed by historians to have formed in the Balranald area on the lower Murrumbidgee River, from the amalgamation of a number of groups in neighbouring areas such as the Wiradjuri and the Watiwati. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 34.4°S, 144.3°E.",
    "summary_fi": "Nari Nari-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 34.4°S, 144.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Nari Nari"
    ]
  },
  {
    "slug": "nawu-people",
    "name": "Nawu People",
    "name_fi": "Nawu-kansa",
    "native_name": "Nawu",
    "alternate_names": [
      "Nawu",
      "Nauo people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nauo_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48815841",
    "summary_en": "The Nauo people, also spelt Nawu and Nhawu, are an Aboriginal Australian people of the south-western Eyre Peninsula in South Australia. The Nauo language became extinct by the twentieth century, but efforts are being made to revive it. Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 33.7°S, 135.6°E.",
    "summary_fi": "Nawu-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 33.7°S, 135.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Nawu"
    ]
  },
  {
    "slug": "ngadjuri-people",
    "name": "Ngadjuri People",
    "name_fi": "Ngadjuri-kansa",
    "native_name": "Ngadjuri",
    "alternate_names": [
      "Ngadjuri"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngadjuri",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q3339258",
    "summary_en": "The Ngadjuri people are a group of Aboriginal Australian people whose traditional lands lie in the mid north of South Australia with a territory extending from Gawler in the south to Orroroo in the Flinders Ranges in the north. Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 33.4°S, 138.7°E.",
    "summary_fi": "Ngadjuri-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 33.4°S, 138.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Ngadjuri"
    ]
  },
  {
    "slug": "ngambri-people",
    "name": "Ngambri People",
    "name_fi": "Ngambri-kansa",
    "native_name": "Ngambri",
    "alternate_names": [
      "Ngambri"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngambri",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q7021935",
    "summary_en": "The Ngambri, also known as Kamberri, are an Aboriginal clan or group who claim traditional ownership of the Australian Capital Territory area, but their connection to the land is contested. One reason for this is that Canberra, where Ngambri claims are made, lay close to the tribal boundaries that separated the Ngarigo from the Ngunnawal people. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 35.5°S, 149.0°E.",
    "summary_fi": "Ngambri-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 35.5°S, 149.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Ngambri"
    ]
  },
  {
    "slug": "ngamini-people",
    "name": "Ngamini People",
    "name_fi": "Ngamini-kansa",
    "native_name": "Ngamini",
    "alternate_names": [
      "Ngamini",
      "Ngameni"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngameni",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q16113843",
    "summary_en": "The Ngameni are an indigenous Australian people of South Australia who once spoke the Ngameni language. Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 26.8°S, 139.2°E.",
    "summary_fi": "Ngamini-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 26.8°S, 139.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Ngamini"
    ]
  },
  {
    "slug": "ngandi-people",
    "name": "Ngandi People",
    "name_fi": "Ngandi-kansa",
    "native_name": "Ngandi",
    "alternate_names": [
      "Ngandi"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngandi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48780494",
    "summary_en": "The Ngandi were an indigenous Australian people of the Northern Territory. The Ngandji are another tribe, and the two are not to be confused. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 14.1°S, 135.2°E.",
    "summary_fi": "Ngandi-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 14.1°S, 135.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Ngandi"
    ]
  },
  {
    "slug": "ngandji-people",
    "name": "Ngandji People",
    "name_fi": "Ngandji-kansa",
    "native_name": "Ngandji",
    "alternate_names": [
      "Ngandji",
      "Gudanji"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Gudanji",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q55613048",
    "summary_en": "The Gudanji, otherwise known as the Kotandji or Ngandji, are an indigenous Australian people of the Northern Territory. Their traditional country encompasses Gulf Country & Barkly Tableland, NT / Queensland border, centered near 17.0°S, 135.4°E.",
    "summary_fi": "Ngandji-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Carpentarianlahden rannikkoseudulla ja Barklyn ylängöllä (koordinaateissa noin 17.0°S, 135.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gulf Country & Barkly Tableland estates",
    "feature_name_matches": [
      "Ngandji"
    ]
  },
  {
    "slug": "nganyaywana-people",
    "name": "Nganyaywana People",
    "name_fi": "Nganyaywana-kansa",
    "native_name": "Nganyaywana",
    "alternate_names": [
      "Nganyaywana",
      "Anewan language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Anewan_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q3913800",
    "summary_en": "Anaiwan (Anēwan) is an Australian Aboriginal language of New South Wales. Since 2017, there has been a revival program underway to bring the language back. Their traditional country encompasses Eastern New South Wales (coastal and tableland country), centered near 30.5°S, 151.5°E.",
    "summary_fi": "Nganyaywana-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itäisen Uuden Etelä-Walesin rannikolla ja ylängöillä (koordinaateissa noin 30.5°S, 151.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern New South Wales traditional lands",
    "feature_name_matches": [
      "Nganyaywana"
    ]
  },
  {
    "slug": "ngarabal-people",
    "name": "Ngarabal People",
    "name_fi": "Ngarabal-kansa",
    "native_name": "Ngarabal",
    "alternate_names": [
      "Ngarabal",
      "Ngarbal"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngarbal",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q7022057",
    "summary_en": "The Ngarabal are an Aboriginal people of the area from Ashford, Tenterfield and Glen Innes in northern New South Wales, Australia. Their traditional country encompasses Coastal and Eastern Queensland, centered near 28.6°S, 151.4°E.",
    "summary_fi": "Ngarabal-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 28.6°S, 151.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Ngarabal"
    ]
  },
  {
    "slug": "ngargad-people",
    "name": "Ngargad People",
    "name_fi": "Ngargad-kansa",
    "native_name": "Ngargad",
    "alternate_names": [
      "Ngargad",
      "Ngarkat"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngarkat",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48774280",
    "summary_en": "The Ngarkat is a recorded title of a tribal group from South Australia. The Ngarkat lands had linked the mallee peoples of Victoria and South Australia to the river peoples of the Murray River Murraylands. Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 35.4°S, 140.4°E.",
    "summary_fi": "Ngargad-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 35.4°S, 140.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Ngargad"
    ]
  },
  {
    "slug": "ngarigo-people",
    "name": "Ngarigo People",
    "name_fi": "Ngarigo-kansa",
    "native_name": "Ngarigo",
    "alternate_names": [
      "Ngarigo"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngarigo",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q3339282",
    "summary_en": "The Ngarigo people are Aboriginal Australian people of southeast New South Wales, whose traditional lands also extend around the present border with Victoria. They are named for their language, Ngarigo, which in the 19th century was said to be spoken by the Nyamudy people. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 36.1°S, 148.7°E.",
    "summary_fi": "Ngarigo-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 36.1°S, 148.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Ngarigo"
    ]
  },
  {
    "slug": "ngarrindjeri-people",
    "name": "Ngarrindjeri People",
    "name_fi": "Ngarrindjeri-kansa",
    "native_name": "Ngarrindjeri",
    "alternate_names": [
      "Ngarrindjeri"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngarrindjeri",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q370543",
    "summary_en": "The Ngarrindjeri people are the traditional Aboriginal Australian people of the lower Murray River, eastern Fleurieu Peninsula, and the Coorong of the southern-central area of the state of South Australia. The term Ngarrindjeri means \"belonging to men\", and refers to a \"tribal constellation\". Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 36.2°S, 139.8°E.",
    "summary_fi": "Ngarrindjeri-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 36.2°S, 139.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Ngarrindjeri"
    ]
  },
  {
    "slug": "ngawun-people",
    "name": "Ngawun People",
    "name_fi": "Ngawun-kansa",
    "native_name": "Ngawun",
    "alternate_names": [
      "Ngawun",
      "Ngaun"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngaun",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48808977",
    "summary_en": "The Ngaun were an indigenous Australian people of the state of Queensland. Their traditional country encompasses North & Central Queensland interior, centered near 19.9°S, 142.0°E.",
    "summary_fi": "Ngawun-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 19.9°S, 142.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Ngawun"
    ]
  },
  {
    "slug": "nguburinji-people",
    "name": "Nguburinji People",
    "name_fi": "Nguburinji-kansa",
    "native_name": "Nguburinji",
    "alternate_names": [
      "Nguburinji"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nguburinji",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q28224440",
    "summary_en": "The Nguburinji people, also written Ngoborindi, Oborindi and other variations, are an Aboriginal Australian people whose traditional lands lie in northwest Queensland. Their traditional country encompasses Gulf Country & Barkly Tableland, NT / Queensland border, centered near 18.6°S, 138.7°E.",
    "summary_fi": "Nguburinji-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Carpentarianlahden rannikkoseudulla ja Barklyn ylängöllä (koordinaateissa noin 18.6°S, 138.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gulf Country & Barkly Tableland estates",
    "feature_name_matches": [
      "Nguburinji"
    ]
  },
  {
    "slug": "nguri-people",
    "name": "Nguri People",
    "name_fi": "Nguri-kansa",
    "native_name": "Nguri",
    "alternate_names": [
      "Nguri",
      "Nguri people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nguri_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q55625160",
    "summary_en": "The Nguri are an indigenous Australian people of southern Queensland. Their traditional country encompasses Coastal and Eastern Queensland, centered near 25.6°S, 147.8°E.",
    "summary_fi": "Nguri-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 25.6°S, 147.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Nguri"
    ]
  },
  {
    "slug": "ngurraiillam-people",
    "name": "Ngurraiillam People",
    "name_fi": "Ngurraiillam-kansa",
    "native_name": "Ngurraiillam",
    "alternate_names": [
      "Ngurraiillam",
      "Ngurelban people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngurelban_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q39087802",
    "summary_en": "The Ngurelban, also written as Ngurai-illamwurrung, Ngurraiillam, Noorilim and Orilim, are an Aboriginal Australian people of the state of Victoria. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 36.4°S, 145.2°E.",
    "summary_fi": "Ngurraiillam-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 36.4°S, 145.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Ngurraiillam"
    ]
  },
  {
    "slug": "nukunu-people",
    "name": "Nukunu People",
    "name_fi": "Nukunu-kansa",
    "native_name": "Nukunu",
    "alternate_names": [
      "Nukunu"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nukunu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q7068903",
    "summary_en": "Nukunu are an Aboriginal Australian people of South Australia, living around the Spencer Gulf area. In the years after British colonisation of South Australia, the area was developed to contain the cities of Port Pirie and Port Augusta. Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 32.8°S, 138.2°E.",
    "summary_fi": "Nukunu-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 32.8°S, 138.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Nukunu"
    ]
  },
  {
    "slug": "nunggubuyu-people",
    "name": "Nunggubuyu People",
    "name_fi": "Nunggubuyu-kansa",
    "native_name": "Nunggubuyu",
    "alternate_names": [
      "Nunggubuyu",
      "Nunggubuyu people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nunggubuyu_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q28943038",
    "summary_en": "The Nunggubuyu are an Aboriginal Australian people of eastern Arnhem Land in the Northern Territory. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 14.1°S, 135.7°E.",
    "summary_fi": "Nunggubuyu-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 14.1°S, 135.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Nunggubuyu"
    ]
  },
  {
    "slug": "nyawaygi-people",
    "name": "Nyawaygi People",
    "name_fi": "Nyawaygi-kansa",
    "native_name": "Nyawaygi",
    "alternate_names": [
      "Nyawaygi",
      "Nyawigi"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Nyawigi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q28225067",
    "summary_en": "The Nyawigi people, also spelt Nyawaygi, Nywaigi, or Nawagi, are an Aboriginal Australian people whose original country was around Halifax Bay in Far North Queensland. Their traditional country encompasses Coastal and Eastern Queensland, centered near 19.0°S, 146.1°E.",
    "summary_fi": "Nyawaygi-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 19.0°S, 146.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Nyawaygi"
    ]
  },
  {
    "slug": "peramangk-people",
    "name": "Peramangk People",
    "name_fi": "Peramangk-kansa",
    "native_name": "Peramangk",
    "alternate_names": [
      "Peramangk"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Peramangk",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q7166908",
    "summary_en": "The Peramangk are an Aboriginal Australian people whose lands traditionally comprise the Adelaide Hills, as well as lands to the west of the Murray River in mid Murraylands and through to the northern part of the Fleurieu Peninsula in the Australian state of South Australia. Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 34.9°S, 139.0°E.",
    "summary_fi": "Peramangk-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 34.9°S, 139.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Peramangk"
    ]
  },
  {
    "slug": "pirlatapa-people",
    "name": "Pirlatapa People",
    "name_fi": "Pirlatapa-kansa",
    "native_name": "Pirlatapa",
    "alternate_names": [
      "Pirlatapa",
      "Pilatapa"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pilatapa",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48807738",
    "summary_en": "The Pilatapa were an Indigenous people of South Australia, now extinct. Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 29.5°S, 140.3°E.",
    "summary_fi": "Pirlatapa-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 29.5°S, 140.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Pirlatapa"
    ]
  },
  {
    "slug": "pitta-pitta-people",
    "name": "Pitta-Pitta People",
    "name_fi": "Pitta-Pitta-kansa",
    "native_name": "Pitta-Pitta",
    "alternate_names": [
      "Pitta-Pitta",
      "Pitta Pitta language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pitta_Pitta_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q6433116",
    "summary_en": "Pitta Pitta is an extinct Australian Aboriginal language. It was spoken around Boulia, Queensland. Their traditional country encompasses North & Central Queensland interior, centered near 23.3°S, 139.7°E.",
    "summary_fi": "Pitta-Pitta-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 23.3°S, 139.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Pitta-Pitta"
    ]
  },
  {
    "slug": "takalak-people",
    "name": "Takalak People",
    "name_fi": "Takalak-kansa",
    "native_name": "Takalak",
    "alternate_names": [
      "Takalak",
      "Tagalag people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tagalag_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q7675136",
    "summary_en": "The Tagalag are an Indigenous Australian tribe of Northern Queensland. Their traditional country encompasses North & Central Queensland interior, centered near 18.1°S, 143.1°E.",
    "summary_fi": "Takalak-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 18.1°S, 143.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Takalak"
    ]
  },
  {
    "slug": "taungurung-people",
    "name": "Taungurung People",
    "name_fi": "Taungurung-kansa",
    "native_name": "Taungurung",
    "alternate_names": [
      "Taungurung"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Taungurung",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q1667388",
    "summary_en": "The Taungurung people, also spelled Daungwurrung, are an Indigenous Australian people who are one of the Kulin nations in present-day Victoria, Australia. They consist of nine clans whose traditional language is the Taungurung language. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 36.8°S, 145.3°E.",
    "summary_fi": "Taungurung-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 36.8°S, 145.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Taungurung"
    ]
  },
  {
    "slug": "teppathiggi-people",
    "name": "Teppathiggi People",
    "name_fi": "Teppathiggi-kansa",
    "native_name": "Teppathiggi",
    "alternate_names": [
      "Teppathiggi",
      "Tepiti"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tepiti",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48780866",
    "summary_en": "The Tepiti (Debidigh) or Teppathiggi were an Aboriginal Australian tribe of Queensland. They may be the same as the Lotiga (Luthigh). Their traditional country encompasses Cape York Peninsula, Queensland, centered near 12.1°S, 142.0°E.",
    "summary_fi": "Teppathiggi-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 12.1°S, 142.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Teppathiggi"
    ]
  },
  {
    "slug": "thaayorre-people",
    "name": "Thaayorre People",
    "name_fi": "Thaayorre-kansa",
    "native_name": "Thaayorre",
    "alternate_names": [
      "Thaayorre"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Thaayorre",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q7708820",
    "summary_en": "The Thaayorre, or Kuuk Thaayore, are an Australian people living on the southwestern part of the Cape York Peninsula, Queensland in Australia, primarily in the settlement Pormpuraaw, having its foundation in the Edward River Mission. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 14.8°S, 141.8°E.",
    "summary_fi": "Thaayorre-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 14.8°S, 141.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Thaayorre"
    ]
  },
  {
    "slug": "tharawal-people",
    "name": "Tharawal People",
    "name_fi": "Tharawal-kansa",
    "native_name": "Tharawal",
    "alternate_names": [
      "Tharawal",
      "Dharawal"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Dharawal",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q7710757",
    "summary_en": "Dharawal is a term referring to the groups of Aboriginal Australian people who shared the Dharawal language. Traditionally, they lived in defined hunter–fisher–gatherer family groups or clans with ties of kinship, along the coastal area through what is now the Wollongong, Port Kembla, and Nowra regions of New South Wales. Their traditional country encompasses Eastern New South Wales (coastal and tableland country), centered near 34.5°S, 150.7°E.",
    "summary_fi": "Tharawal-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itäisen Uuden Etelä-Walesin rannikolla ja ylängöillä (koordinaateissa noin 34.5°S, 150.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern New South Wales traditional lands",
    "feature_name_matches": [
      "Tharawal"
    ]
  },
  {
    "slug": "thul-garrie-waja-bindal-people",
    "name": "Thul Garrie Waja (Bindal) People",
    "name_fi": "Thul Garrie Waja (Bindal)-kansa",
    "native_name": "Thul Garrie Waja (Bindal)",
    "alternate_names": [
      "Thul Garrie Waja (Bindal)",
      "Bindal people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Bindal_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48817173",
    "summary_en": "The Bindal are the Aboriginal Australian people whose ancestors originally possessed, occupied, used and enjoyed approximately 2600 km2 of coastal country from the mouth of the Burdekin River north to Cape Cleveland, inland to Leichhardt Range, in the state of Queensland. Their traditional country encompasses Coastal and Eastern Queensland, centered near 19.6°S, 147.1°E.",
    "summary_fi": "Thul Garrie Waja (Bindal)-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 19.6°S, 147.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Thul Garrie Waja (Bindal)"
    ]
  },
  {
    "slug": "tjungundji-people",
    "name": "Tjungundji People",
    "name_fi": "Tjungundji-kansa",
    "native_name": "Tjungundji",
    "alternate_names": [
      "Tjungundji"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Tjungundji",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q29324713",
    "summary_en": "The Tjungundji or Tjongkandji are an Indigenous Australian people of central and western Cape York Peninsula in northern Queensland. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 12.0°S, 141.9°E.",
    "summary_fi": "Tjungundji-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 12.0°S, 141.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Tjungundji"
    ]
  },
  {
    "slug": "turrbal-people",
    "name": "Turrbal People",
    "name_fi": "Turrbal-kansa",
    "native_name": "Turrbal",
    "alternate_names": [
      "Turrbal"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Turrbal",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q7856348",
    "summary_en": "The Turrbal are an Aboriginal Australian people from the area now known as Brisbane. The boundaries of their traditional territory are unclear and linguists are divided over whether they spoke a separate language or a dialect of the Yuggera language. Their traditional country encompasses Coastal and Eastern Queensland, centered near 27.4°S, 152.9°E.",
    "summary_fi": "Turrbal-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 27.4°S, 152.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Turrbal"
    ]
  },
  {
    "slug": "umbindhamu-people",
    "name": "Umbindhamu People",
    "name_fi": "Umbindhamu-kansa",
    "native_name": "Umbindhamu",
    "alternate_names": [
      "Umbindhamu",
      "Umpithamu"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Umpithamu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q29324719",
    "summary_en": "The Umpithamu, also once known to ethnographers as the Koko Ompindamo, are a contemporary Aboriginal Australian people of the eastern Cape York Peninsula in northern Queensland. Norman Tindale, transcribing their ethnonym Umpithamu as Umbindhamu, referred to them as a horde of the Barungguan. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 14.2°S, 143.5°E.",
    "summary_fi": "Umbindhamu-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 14.2°S, 143.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Umbindhamu"
    ]
  },
  {
    "slug": "umpila-people",
    "name": "Umpila People",
    "name_fi": "Umpila-kansa",
    "native_name": "Umpila",
    "alternate_names": [
      "Umpila"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Umpila",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48772046",
    "summary_en": "The Umpila people are an Aboriginal Australian people of the eastern Cape York Peninsula in northern Queensland. The majority of the remnant of the Umpila now live in Lockhart. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 13.6°S, 143.4°E.",
    "summary_fi": "Umpila-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 13.6°S, 143.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Umpila"
    ]
  },
  {
    "slug": "uutaalnganu-people",
    "name": "Uutaalnganu People",
    "name_fi": "Uutaalnganu-kansa",
    "native_name": "Uutaalnganu",
    "alternate_names": [
      "Uutaalnganu"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Uutaalnganu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q29305707",
    "summary_en": "The Uutaalnganu people, also known as Night Island Kawadji, are an Aboriginal Australian group of Cape York Peninsula in northern Queensland. The name is also used collectively for several peoples in this area, such as the Pontunj / Jangkonj (Yanganyu), whose language is unconfirmed. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 13.2°S, 143.3°E.",
    "summary_fi": "Uutaalnganu-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 13.2°S, 143.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Uutaalnganu"
    ]
  },
  {
    "slug": "waanyi-people",
    "name": "Waanyi People",
    "name_fi": "Waanyi-kansa",
    "native_name": "Waanyi",
    "alternate_names": [
      "Waanyi"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Waanyi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q28224441",
    "summary_en": "The Waanyi people, also spelt Wanyi, Wanji, or Waanji, are an Aboriginal Australian people from south of the Gulf of Carpentaria in Queensland and the Northern Territory. Their traditional country encompasses Gulf Country & Barkly Tableland, NT / Queensland border, centered near 17.8°S, 137.5°E.",
    "summary_fi": "Waanyi-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Carpentarianlahden rannikkoseudulla ja Barklyn ylängöllä (koordinaateissa noin 17.8°S, 137.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gulf Country & Barkly Tableland estates",
    "feature_name_matches": [
      "Waanyi"
    ]
  },
  {
    "slug": "wadi-wadi-people",
    "name": "Wadi Wadi People",
    "name_fi": "Wadi Wadi-kansa",
    "native_name": "Wadi Wadi",
    "alternate_names": [
      "Wadi Wadi",
      "Wadi Wadi dialect"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wadi_Wadi_dialect",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q7959249",
    "summary_en": "Wadi-Wadi is an extinct Indigenous Australian language once spoken in Victoria and New South Wales. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 35.0°S, 143.6°E.",
    "summary_fi": "Wadi Wadi-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 35.0°S, 143.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Wadi Wadi"
    ]
  },
  {
    "slug": "wadigali-people",
    "name": "Wadigali People",
    "name_fi": "Wadigali-kansa",
    "native_name": "Wadigali",
    "alternate_names": [
      "Wadigali",
      "Yarli language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yarli_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q8049359",
    "summary_en": "Yarli (Yardli) was a dialect cluster of Australian Aboriginal languages spoken in northwestern New South Wales and into Northeastern South Australia individually Malyangapa (Maljangapa), Yardliyawara, and Wadikali. Bowern (2002) notes Karenggapa as part of the area, but there is little data. Their traditional country encompasses Inland New South Wales (Murray-Darling Basin), centered near 29.4°S, 141.6°E.",
    "summary_fi": "Wadigali-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Uuden Etelä-Walesin sisämaassa Murray-Darling-joen valuma-alueella (koordinaateissa noin 29.4°S, 141.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Murray-Darling Basin traditional country",
    "feature_name_matches": [
      "Wadigali"
    ]
  },
  {
    "slug": "wadjigu-people",
    "name": "Wadjigu People",
    "name_fi": "Wadjigu-kansa",
    "native_name": "Wadjigu",
    "alternate_names": [
      "Wadjigu",
      "Wadjigu people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wadjigu_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48784991",
    "summary_en": "The Wadjiga people, also known as Wadja, Maudalgo, Wadjainggo, and other variants, were an Aboriginal Australian people of inland eastern Queensland. Their traditional country encompasses Coastal and Eastern Queensland, centered near 24.5°S, 149.4°E.",
    "summary_fi": "Wadjigu-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 24.5°S, 149.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Wadjigu"
    ]
  },
  {
    "slug": "wailwan-people",
    "name": "Wailwan People",
    "name_fi": "Wailwan-kansa",
    "native_name": "Wailwan",
    "alternate_names": [
      "Wailwan",
      "Wayilwan"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wayilwan",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48779739",
    "summary_en": "The Wayilwan are an Aboriginal Australian people of the state of New South Wales. They are a clan of the Ngiyambaa (nee-yam-bar) nation. Their traditional country encompasses Inland New South Wales (Murray-Darling Basin), centered near 30.9°S, 148.0°E.",
    "summary_fi": "Wailwan-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Uuden Etelä-Walesin sisämaassa Murray-Darling-joen valuma-alueella (koordinaateissa noin 30.9°S, 148.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Murray-Darling Basin traditional country",
    "feature_name_matches": [
      "Wailwan"
    ]
  },
  {
    "slug": "waka-waka-people",
    "name": "Waka Waka People",
    "name_fi": "Waka Waka-kansa",
    "native_name": "Waka Waka",
    "alternate_names": [
      "Waka Waka",
      "Waka Waka (This Time for Africa)"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Waka_Waka_(This_Time_for_Africa)",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q155894",
    "summary_en": "\"Waka Waka (This Time for Africa)\" is a song by Colombian singer Shakira, featuring the South African band Freshlyground. Co-written by Shakira and John Hill, it was released on 7 May 2010 by Epic Records as the official song of the 2010 FIFA World Cup, which was held in South Africa. Their traditional country encompasses Coastal and Eastern Queensland, centered near 26.2°S, 151.7°E.",
    "summary_fi": "Waka Waka-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 26.2°S, 151.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Waka Waka"
    ]
  },
  {
    "slug": "wakabunga-people",
    "name": "Wakabunga People",
    "name_fi": "Wakabunga-kansa",
    "native_name": "Wakabunga",
    "alternate_names": [
      "Wakabunga"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wakabunga",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48785048",
    "summary_en": "The Wakabunga are an indigenous Australian people of the state of Queensland. Their traditional country encompasses Gulf Country & Barkly Tableland, NT / Queensland border, centered near 19.4°S, 138.5°E.",
    "summary_fi": "Wakabunga-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Carpentarianlahden rannikkoseudulla ja Barklyn ylängöllä (koordinaateissa noin 19.4°S, 138.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gulf Country & Barkly Tableland estates",
    "feature_name_matches": [
      "Wakabunga"
    ]
  },
  {
    "slug": "wakaya-people",
    "name": "Wakaya People",
    "name_fi": "Wakaya-kansa",
    "native_name": "Wakaya",
    "alternate_names": [
      "Wakaya",
      "Wakaya people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wakaya_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48797008",
    "summary_en": "The Wakaya are an Aboriginal Australian people of the Northern Territory. Their traditional country encompasses Central Australia, Northern Territory, centered near 19.7°S, 136.7°E.",
    "summary_fi": "Wakaya-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Keski-Australian aavikkoalueella Pohjoisterritoriossa (koordinaateissa noin 19.7°S, 136.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Australian Desert estates",
    "feature_name_matches": [
      "Wakaya"
    ]
  },
  {
    "slug": "walangama-people",
    "name": "Walangama People",
    "name_fi": "Walangama-kansa",
    "native_name": "Walangama",
    "alternate_names": [
      "Walangama"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Walangama",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48847223",
    "summary_en": "The Walangama were an indigenous Australian people of the state of Queensland. Their traditional country encompasses North & Central Queensland interior, centered near 18.1°S, 142.0°E.",
    "summary_fi": "Walangama-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 18.1°S, 142.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Walangama"
    ]
  },
  {
    "slug": "wambaya-people",
    "name": "Wambaya People",
    "name_fi": "Wambaya-kansa",
    "native_name": "Wambaya",
    "alternate_names": [
      "Wambaya",
      "Wambaya people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wambaya_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q55637370",
    "summary_en": "The Wambaya people, also spelt Umbaia, Wombaia and other variants, are an Aboriginal Australian people of the southern Barkly Tableland of the Northern Territory. Their language is the Wambaya language. Their traditional country encompasses Gulf Country & Barkly Tableland, NT / Queensland border, centered near 18.2°S, 136.1°E.",
    "summary_fi": "Wambaya-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Carpentarianlahden rannikkoseudulla ja Barklyn ylängöllä (koordinaateissa noin 18.2°S, 136.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gulf Country & Barkly Tableland estates",
    "feature_name_matches": [
      "Wambaya"
    ]
  },
  {
    "slug": "wandjiwalgu-people",
    "name": "Wandjiwalgu People",
    "name_fi": "Wandjiwalgu-kansa",
    "native_name": "Wandjiwalgu",
    "alternate_names": [
      "Wandjiwalgu",
      "Wanjiwalku"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wanjiwalku",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q55637395",
    "summary_en": "The Wanjiwalku were an indigenous Australian people of the state of New South Wales. Their traditional country encompasses Inland New South Wales (Murray-Darling Basin), centered near 31.1°S, 142.8°E.",
    "summary_fi": "Wandjiwalgu-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Uuden Etelä-Walesin sisämaassa Murray-Darling-joen valuma-alueella (koordinaateissa noin 31.1°S, 142.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Murray-Darling Basin traditional country",
    "feature_name_matches": [
      "Wandjiwalgu"
    ]
  },
  {
    "slug": "wangan-people",
    "name": "Wangan People",
    "name_fi": "Wangan-kansa",
    "native_name": "Wangan",
    "alternate_names": [
      "Wangan",
      "Wangan people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wangan_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q29325982",
    "summary_en": "The Wangan are an Aboriginal Australian people of the Isaac Region of Central Queensland. Their traditional country encompasses Coastal and Eastern Queensland, centered near 22.9°S, 147.6°E.",
    "summary_fi": "Wangan-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 22.9°S, 147.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Wangan"
    ]
  },
  {
    "slug": "wangkamana-people",
    "name": "Wangkamana People",
    "name_fi": "Wangkamana-kansa",
    "native_name": "Wangkamana",
    "alternate_names": [
      "Wangkamana",
      "Wanggamala"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wanggamala",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48807089",
    "summary_en": "The Wanggamala people, also spelt Wangkamahdla, Wangkamadla, Wangkamanha, Wangkamana, Wonkamala, Wongkamala, Wonkamudla, and other variants, are an Aboriginal Australian people of the Northern Territory and Queensland. Their traditional country encompasses Channel Country & Lake Eyre Basin, Southwest Queensland, centered near 24.1°S, 138.8°E.",
    "summary_fi": "Wangkamana-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Channel Countryn ja Eyre-järven valuma-alueella Lounais-Queenslandissa (koordinaateissa noin 24.1°S, 138.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Channel Country traditional lands",
    "feature_name_matches": [
      "Wangkamana"
    ]
  },
  {
    "slug": "wangkangurru-people",
    "name": "Wangkangurru People",
    "name_fi": "Wangkangurru-kansa",
    "native_name": "Wangkangurru",
    "alternate_names": [
      "Wangkangurru"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wangkangurru",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48807082",
    "summary_en": "The Wangkangurru, also written Wongkanguru and Wangkanguru, are an Aboriginal Australian people of the Simpson Desert area in the state of South Australia. They also refer to themselves as Nharla. Their traditional country encompasses Central Australia, Northern Territory, centered near 26.3°S, 137.1°E.",
    "summary_fi": "Wangkangurru-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Keski-Australian aavikkoalueella Pohjoisterritoriossa (koordinaateissa noin 26.3°S, 137.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Australian Desert estates",
    "feature_name_matches": [
      "Wangkangurru"
    ]
  },
  {
    "slug": "wangkumara-people",
    "name": "Wangkumara People",
    "name_fi": "Wangkumara-kansa",
    "native_name": "Wangkumara",
    "alternate_names": [
      "Wangkumara",
      "Wanggumara"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wanggumara",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48808196",
    "summary_en": "The Wanggumara, also spelt Wangkumara, Wongkumara, Wangkumarra, and other variants, are an Aboriginal people of the state of Queensland, Australia. Their traditional country encompasses Channel Country & Lake Eyre Basin, Southwest Queensland, centered near 27.0°S, 142.7°E.",
    "summary_fi": "Wangkumara-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Channel Countryn ja Eyre-järven valuma-alueella Lounais-Queenslandissa (koordinaateissa noin 27.0°S, 142.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Channel Country traditional lands",
    "feature_name_matches": [
      "Wangkumara"
    ]
  },
  {
    "slug": "wargamaygan-people",
    "name": "Wargamaygan People",
    "name_fi": "Wargamaygan-kansa",
    "native_name": "Wargamaygan",
    "alternate_names": [
      "Wargamaygan",
      "Warrgamay"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Warrgamay",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48809346",
    "summary_en": "The Warrgamay people, also spelt Warakamai, are an Aboriginal Australian people of the state of Queensland. Their traditional country encompasses North & Central Queensland interior, centered near 18.3°S, 145.7°E.",
    "summary_fi": "Wargamaygan-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 18.3°S, 145.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Wargamaygan"
    ]
  },
  {
    "slug": "warluwarra-people",
    "name": "Warluwarra People",
    "name_fi": "Warluwarra-kansa",
    "native_name": "Warluwarra",
    "alternate_names": [
      "Warluwarra",
      "Warluwarra language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Warluwarra_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q3913761",
    "summary_en": "Warluwarra is an extinct Australian Aboriginal language of Queensland. Waluwarra is the traditional language region in the local government area of Shire of Boulia, including Walgra Station and Wolga, from Roxborough Downs north to Carandotta Station and Urandangi on the Georgina River, on Moonah Creek to Rochedale, south-east of Pituri Creek. Their traditional country encompasses Gulf Country & Barkly Tableland, NT / Queensland border, centered near 21.6°S, 138.6°E.",
    "summary_fi": "Warluwarra-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Carpentarianlahden rannikkoseudulla ja Barklyn ylängöllä (koordinaateissa noin 21.6°S, 138.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gulf Country & Barkly Tableland estates",
    "feature_name_matches": [
      "Warluwarra"
    ]
  },
  {
    "slug": "wathaurong-people",
    "name": "Wathaurong People",
    "name_fi": "Wathaurong-kansa",
    "native_name": "Wathaurong",
    "alternate_names": [
      "Wathaurong",
      "Wadawurrung"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wadawurrung",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q1241391",
    "summary_en": "The Wadawurrung nation, also called the Wathaurong, or Wathaurung, are an Aboriginal Australian people living in the area near Melbourne, Geelong, and the Bellarine Peninsula in the state of Victoria. They are part of the Kulin alliance. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 37.8°S, 143.8°E.",
    "summary_fi": "Wathaurong-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 37.8°S, 143.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Wathaurong"
    ]
  },
  {
    "slug": "waveroo-people",
    "name": "Waveroo People",
    "name_fi": "Waveroo-kansa",
    "native_name": "Waveroo",
    "alternate_names": [
      "Waveroo",
      "Pallanganmiddang people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Pallanganmiddang_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q65065806",
    "summary_en": "The Pallanganmiddang, otherwise known as the Waveroo or Waywurru, were an Indigenous Australian people of North-eastern Victoria, in the state of Victoria, Australia. Recent scholarship has suggested that In Norman Tindale's classic study his references to a Djilamatang tribe and their language arguably refer in good part to the Pallanganmiddang. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 36.5°S, 146.7°E.",
    "summary_fi": "Waveroo-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 36.5°S, 146.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Waveroo"
    ]
  },
  {
    "slug": "wemba-wemba-people",
    "name": "Wemba Wemba People",
    "name_fi": "Wemba Wemba-kansa",
    "native_name": "Wemba Wemba",
    "alternate_names": [
      "Wemba Wemba",
      "Wemba-Wemba"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wemba-Wemba",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q16211886",
    "summary_en": "The Wemba-Wemba are an Aboriginal Australian people in north-Western Victoria and south-western New South Wales, Australia, including in the Mallee and the Riverina regions. They are also known as the Wamba-Wamba. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 35.2°S, 144.1°E.",
    "summary_fi": "Wemba Wemba-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 35.2°S, 144.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Wemba Wemba"
    ]
  },
  {
    "slug": "wergaia-people",
    "name": "Wergaia People",
    "name_fi": "Wergaia-kansa",
    "native_name": "Wergaia",
    "alternate_names": [
      "Wergaia"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wergaia",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q62098205",
    "summary_en": "The Wergaia or Werrigia people are an Aboriginal Australian group in the Mallee and Wimmera regions of north-Western Victoria, made up of a number of clans. The people were also known as the Maligundidj which means the people belonging to the mali (mallee) eucalypt bushland which covers much of their territory. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 35.7°S, 142.3°E.",
    "summary_fi": "Wergaia-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 35.7°S, 142.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Wergaia"
    ]
  },
  {
    "slug": "wik-people",
    "name": "Wik People",
    "name_fi": "Wik-kansa",
    "native_name": "Wik",
    "alternate_names": [
      "Wik",
      "Wik peoples"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wik_peoples",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q7999806",
    "summary_en": "The Wik peoples are an Indigenous Australian group of people from an extensive zone on western Cape York Peninsula in northern Queensland, speaking several different languages. They are from the coastal flood plains bounding the Gulf of Carpentaria lying between Pormpuraaw and Weipa, and inland the forested country drained by the Archer, Kendall and Holroyd rivers. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 13.8°S, 142.2°E.",
    "summary_fi": "Wik-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 13.8°S, 142.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Wik"
    ]
  },
  {
    "slug": "wiljali-people",
    "name": "Wiljali People",
    "name_fi": "Wiljali-kansa",
    "native_name": "Wiljali",
    "alternate_names": [
      "Wiljali",
      "Wilyakali"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wilyakali",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q16211926",
    "summary_en": "The Wilyakali or Wiljaali are an Aboriginal Australian people of around the Darling River basin in Far West of New South Wales, as well as west of the state border, into South Australia. Their traditional lands centred on the towns of Broken Hill and Silverton and surrounding country. Their traditional country encompasses Inland New South Wales (Murray-Darling Basin), centered near 32.0°S, 141.0°E.",
    "summary_fi": "Wiljali-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Uuden Etelä-Walesin sisämaassa Murray-Darling-joen valuma-alueella (koordinaateissa noin 32.0°S, 141.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Murray-Darling Basin traditional country",
    "feature_name_matches": [
      "Wiljali"
    ]
  },
  {
    "slug": "winda-winda-people",
    "name": "Winda Winda People",
    "name_fi": "Winda Winda-kansa",
    "native_name": "Winda Winda",
    "alternate_names": [
      "Winda Winda",
      "Silver sweep"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Silver_sweep",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q2611007",
    "summary_en": "The silver sweep, also known as the false pompano, sweep, trumps or windawindawi, is a species of marine ray-finned fish from the subfamily Scorpidinae of the sea chub family Kyphosidae. It is native to the southwestern Pacific Ocean from Australia to New Zealand. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 13.2°S, 141.8°E.",
    "summary_fi": "Winda Winda-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 13.2°S, 141.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Winda Winda"
    ]
  },
  {
    "slug": "wiradjuri-people",
    "name": "Wiradjuri People",
    "name_fi": "Wiradjuri-kansa",
    "native_name": "Wiradjuri",
    "alternate_names": [
      "Wiradjuri"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wiradjuri",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q957298",
    "summary_en": "The Wiradjuri people are a group of Aboriginal Australian people from central New South Wales, united by common descent through kinship and shared traditions. They survived as skilled hunter-fisher-gatherers, in family groups or clans, and many still use knowledge of hunting and gathering techniques as part of their customary life. Their traditional country encompasses Inland New South Wales (Murray-Darling Basin), centered near 34.0°S, 147.2°E.",
    "summary_fi": "Wiradjuri-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Uuden Etelä-Walesin sisämaassa Murray-Darling-joen valuma-alueella (koordinaateissa noin 34.0°S, 147.2°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Murray-Darling Basin traditional country",
    "feature_name_matches": [
      "Wiradjuri"
    ]
  },
  {
    "slug": "wongaibon-people",
    "name": "Wongaibon People",
    "name_fi": "Wongaibon-kansa",
    "native_name": "Wongaibon",
    "alternate_names": [
      "Wongaibon",
      "Wangaaypuwan"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wangaaypuwan",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q24190280",
    "summary_en": "The Wangaaypuwan, also known as the Wongaibon or Ngiyampaa Wangaaypuwan, are an Aboriginal Australian people who traditionally lived between Nyngan, the headwaters of Bogan Creek, and on Tigers Camp and Boggy Cowal creeks and west to Ivanhoe, New South Wales. They are a clan of the Ngiyampaa nation. Their traditional country encompasses Inland New South Wales (Murray-Darling Basin), centered near 31.5°S, 146.0°E.",
    "summary_fi": "Wongaibon-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Uuden Etelä-Walesin sisämaassa Murray-Darling-joen valuma-alueella (koordinaateissa noin 31.5°S, 146.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Murray-Darling Basin traditional country",
    "feature_name_matches": [
      "Wongaibon"
    ]
  },
  {
    "slug": "wonnarua-people",
    "name": "Wonnarua People",
    "name_fi": "Wonnarua-kansa",
    "native_name": "Wonnarua",
    "alternate_names": [
      "Wonnarua"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wonnarua",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q3569807",
    "summary_en": "The Wonnarua people, otherwise written Wanarruwa, are a group of Aboriginal Australian people united by strong ties of kinship, and who survived in family groups or clans scattered along the inland area of what is now known as the Upper Hunter Valley, New South Wales, Australia. Their creation spirit is Baiami, also known as Koin, the creator of all things and the Keeper of the Valley. Their traditional country encompasses Eastern New South Wales (coastal and tableland country), centered near 32.6°S, 150.8°E.",
    "summary_fi": "Wonnarua-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itäisen Uuden Etelä-Walesin rannikolla ja ylängöillä (koordinaateissa noin 32.6°S, 150.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern New South Wales traditional lands",
    "feature_name_matches": [
      "Wonnarua"
    ]
  },
  {
    "slug": "worimi-people",
    "name": "Worimi People",
    "name_fi": "Worimi-kansa",
    "native_name": "Worimi",
    "alternate_names": [
      "Worimi"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Worimi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q8034515",
    "summary_en": "The Worimi people are Aboriginal Australians from the eastern Port Stephens and Great Lakes regions of coastal New South Wales, Australia. Before contact with European settlers, their country extended from Port Stephens in the south to Forster/Tuncurry in the north and as far west as Gloucester. Their traditional country encompasses Eastern New South Wales (coastal and tableland country), centered near 32.4°S, 152.0°E.",
    "summary_fi": "Worimi-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itäisen Uuden Etelä-Walesin rannikolla ja ylängöillä (koordinaateissa noin 32.4°S, 152.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern New South Wales traditional lands",
    "feature_name_matches": [
      "Worimi"
    ]
  },
  {
    "slug": "wuli-wuli-people",
    "name": "Wuli-wuli People",
    "name_fi": "Wuli-wuli-kansa",
    "native_name": "Wuli-wuli",
    "alternate_names": [
      "Wuli-wuli",
      "Wulli Wulli dialect"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wulli_Wulli_dialect",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q8039208",
    "summary_en": "Wuliwuli is an extinct Australian Aboriginal language of the Pama–Nyungan language family formerly spoken by the Wulli Wulli people in Queensland, Australia. Wuliwuli is regarded as a dialect of Wakka Wakka. Their traditional country encompasses Coastal and Eastern Queensland, centered near 25.3°S, 150.4°E.",
    "summary_fi": "Wuli-wuli-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 25.3°S, 150.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Wuli-wuli"
    ]
  },
  {
    "slug": "wunumara-people",
    "name": "Wunumara People",
    "name_fi": "Wunumara-kansa",
    "native_name": "Wunumara",
    "alternate_names": [
      "Wunumara",
      "Ngawun language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Ngawun_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q3915711",
    "summary_en": "Ngawun is an extinct Mayi language once spoken on the Cape York Peninsula of Queensland, Australia, by the Wunumara and Ngawun peoples. The last speaker of the language was Cherry O'Keefe who died of pneumonia on 24 August 1977. Their traditional country encompasses North & Central Queensland interior, centered near 21.0°S, 141.8°E.",
    "summary_fi": "Wunumara-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 21.0°S, 141.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Wunumara"
    ]
  },
  {
    "slug": "wurundjeri-people",
    "name": "Wurundjeri People",
    "name_fi": "Wurundjeri-kansa",
    "native_name": "Wurundjeri",
    "alternate_names": [
      "Wurundjeri"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wurundjeri",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q1492906",
    "summary_en": "The Wurundjeri people are an Aboriginal people of the Woiwurrung language group, in the Kulin nation. Together with the Boonwurrung people they are the traditional owners of the Yarra River Valley, covering much of the present location of Melbourne, or, in their language, Naarm. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 37.8°S, 145.4°E.",
    "summary_fi": "Wurundjeri-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 37.8°S, 145.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Wurundjeri"
    ]
  },
  {
    "slug": "wuthathi-people",
    "name": "Wuthathi People",
    "name_fi": "Wuthathi-kansa",
    "native_name": "Wuthathi",
    "alternate_names": [
      "Wuthathi"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Wuthathi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q96415622",
    "summary_en": "The Wuthathi, also known as the Mutjati, are an Aboriginal Australian people of the state of Queensland. Anthropologist Norman Tindale distinguished the Mutjati from the Otati, whereas AIATSIS treats the two ethnonyms as variants related to the one ethnic group, the Wuthathi. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 12.0°S, 142.9°E.",
    "summary_fi": "Wuthathi-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 12.0°S, 142.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Wuthathi"
    ]
  },
  {
    "slug": "yadhaigana-people",
    "name": "Yadhaigana People",
    "name_fi": "Yadhaigana-kansa",
    "native_name": "Yadhaigana",
    "alternate_names": [
      "Yadhaigana",
      "Yadhaykenu"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yadhaykenu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q29325993",
    "summary_en": "The Yadhaykenu, otherwise known as the Jathaikana or Yadhaigana, are an Aboriginal Australian tribe of northern Queensland. The name appears to be an exonym from the Western and Central Torres Strait yadaigal \"talkers, chatterers, people who speak a lot\". Their traditional country encompasses Cape York Peninsula, Queensland, centered near 11.4°S, 142.7°E.",
    "summary_fi": "Yadhaigana-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 11.4°S, 142.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Yadhaigana"
    ]
  },
  {
    "slug": "yagalingu-people",
    "name": "Yagalingu People",
    "name_fi": "Yagalingu-kansa",
    "native_name": "Yagalingu",
    "alternate_names": [
      "Yagalingu"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yagalingu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48815239",
    "summary_en": "The Yagalingu are an Aboriginal Australian people of the state of Queensland. Their language may have been a dialect of Bidjara. Their traditional country encompasses Coastal and Eastern Queensland, centered near 23.2°S, 146.7°E.",
    "summary_fi": "Yagalingu-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 23.2°S, 146.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Yagalingu"
    ]
  },
  {
    "slug": "yalarrnga-people",
    "name": "Yalarrnga People",
    "name_fi": "Yalarrnga-kansa",
    "native_name": "Yalarrnga",
    "alternate_names": [
      "Yalarrnga",
      "Yalarnnga language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yalarnnga_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q3915686",
    "summary_en": "Yalarnnga is an extinct Australian Aboriginal language of the Pama–Nyungan language family, that may be related to the Kalkatungu language. It was formerly spoken by the Yalarnnga people in areas near the Gulf of Carpentaria the towns of Dajarra and Cloncurry in far northwestern Queensland. Their traditional country encompasses North & Central Queensland interior, centered near 21.8°S, 139.8°E.",
    "summary_fi": "Yalarrnga-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 21.8°S, 139.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Yalarrnga"
    ]
  },
  {
    "slug": "yambina-people",
    "name": "Yambina People",
    "name_fi": "Yambina-kansa",
    "native_name": "Yambina",
    "alternate_names": [
      "Yambina"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yambina",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48815244",
    "summary_en": "The Yambina were an Aboriginal Australian people of the state of Queensland, whose traditional lands lie inland (westwards) some distance from Mackay. Their traditional country encompasses Coastal and Eastern Queensland, centered near 22.1°S, 147.3°E.",
    "summary_fi": "Yambina-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 22.1°S, 147.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Yambina"
    ]
  },
  {
    "slug": "yanda-people",
    "name": "Yanda People",
    "name_fi": "Yanda-kansa",
    "native_name": "Yanda",
    "alternate_names": [
      "Yanda",
      "Yanda people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yanda_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48814088",
    "summary_en": "The Yanda were an indigenous Australian people of the state of Queensland. Their traditional country encompasses North & Central Queensland interior, centered near 22.1°S, 140.6°E.",
    "summary_fi": "Yanda-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 22.1°S, 140.6°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Yanda"
    ]
  },
  {
    "slug": "yandruwandha-people",
    "name": "Yandruwandha People",
    "name_fi": "Yandruwandha-kansa",
    "native_name": "Yandruwandha",
    "alternate_names": [
      "Yandruwandha",
      "Yandruwandha people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yandruwandha_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q28224663",
    "summary_en": "The Yandruwandha, alternatively known as Jandruwanta, are an Aboriginal Australian people living in the Lakes area of South Australia, south of Cooper Creek and west of the Wangkumara people. Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 28.2°S, 140.9°E.",
    "summary_fi": "Yandruwandha-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 28.2°S, 140.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Yandruwandha"
    ]
  },
  {
    "slug": "yanga-people",
    "name": "Yanga People",
    "name_fi": "Yanga-kansa",
    "native_name": "Yanga",
    "alternate_names": [
      "Yanga",
      "Yanga people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yanga_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48815229",
    "summary_en": "The Yanga people, also spelt Jangaa, Janggal, Janga, and Yangaa, are an Aboriginal Australian people of the state of Queensland. They may be the same as the Yukulta / Ganggalida / Nyangga group. Their traditional country encompasses North & Central Queensland interior, centered near 19.0°S, 143.3°E.",
    "summary_fi": "Yanga-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 19.0°S, 143.3°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Yanga"
    ]
  },
  {
    "slug": "yangga-people",
    "name": "Yangga People",
    "name_fi": "Yangga-kansa",
    "native_name": "Yangga",
    "alternate_names": [
      "Yangga"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yangga",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48815234",
    "summary_en": "The Yangga, also spelt Jangga, are an Aboriginal Australian people of the state of Queensland. They are not to be confused with the Yanga people. Their traditional country encompasses Coastal and Eastern Queensland, centered near 21.1°S, 147.1°E.",
    "summary_fi": "Yangga-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 21.1°S, 147.1°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Yangga"
    ]
  },
  {
    "slug": "yanyuwa-people",
    "name": "Yanyuwa People",
    "name_fi": "Yanyuwa-kansa",
    "native_name": "Yanyuwa",
    "alternate_names": [
      "Yanyuwa",
      "Yanyuwa people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yanyuwa_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q28224451",
    "summary_en": "The Yanyuwa people, also spelt Yanuwa, Yanyula and other variations, are an Aboriginal Australian people of the Northern Territory who live in the coastal region inclusive of and opposite to the Sir Edward Pellew Group of Islands in the southern Gulf of Carpentaria. They self-identify as a saltwater people. Their traditional country encompasses Gulf Country & Barkly Tableland, NT / Queensland border, centered near 16.1°S, 136.9°E.",
    "summary_fi": "Yanyuwa-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Carpentarianlahden rannikkoseudulla ja Barklyn ylängöllä (koordinaateissa noin 16.1°S, 136.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Gulf Country & Barkly Tableland estates",
    "feature_name_matches": [
      "Yanyuwa"
    ]
  },
  {
    "slug": "yarluyandi-people",
    "name": "Yarluyandi People",
    "name_fi": "Yarluyandi-kansa",
    "native_name": "Yarluyandi",
    "alternate_names": [
      "Yarluyandi"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yarluyandi",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q55638054",
    "summary_en": "The Yarluyandi, also known as Jeljendi, are an Aboriginal Australian people of north-eastern South Australia. Their traditional country encompasses Channel Country & Lake Eyre Basin, Southwest Queensland, centered near 25.8°S, 139.7°E.",
    "summary_fi": "Yarluyandi-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Channel Countryn ja Eyre-järven valuma-alueella Lounais-Queenslandissa (koordinaateissa noin 25.8°S, 139.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Channel Country traditional lands",
    "feature_name_matches": [
      "Yarluyandi"
    ]
  },
  {
    "slug": "yawarawarka-people",
    "name": "Yawarawarka People",
    "name_fi": "Yawarawarka-kansa",
    "native_name": "Yawarawarka",
    "alternate_names": [
      "Yawarawarka",
      "Yawarrawarrka"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yawarrawarrka",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48807894",
    "summary_en": "The Yawarrawarrka were an in Indigenous people of South Australia. Their traditional country encompasses South Australia (Eyre Peninsula, Lake Eyre, Flinders Ranges), centered near 26.9°S, 141.0°E.",
    "summary_fi": "Yawarawarka-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Etelä-Australian alueella (Eyren niemimaa, Eyre-järven allas ja Flinders Ranges) (koordinaateissa noin 26.9°S, 141.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "South Australian traditional country",
    "feature_name_matches": [
      "Yawarawarka"
    ]
  },
  {
    "slug": "yidinjdji-people",
    "name": "Yidinjdji People",
    "name_fi": "Yidinjdji-kansa",
    "native_name": "Yidinjdji",
    "alternate_names": [
      "Yidinjdji",
      "Yidiny language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yidiny_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q3053283",
    "summary_en": "Yidiny is a nearly extinct Australian Aboriginal language, spoken by the Yidinji people of north-east Queensland. Its traditional language region is within the local government areas of Cairns Region and Tablelands Region, in such localities as Cairns, Gordonvale, and the Mulgrave River, and the southern part of the Atherton Tableland including Atherton and Kairi. Their traditional country encompasses North & Central Queensland interior, centered near 17.2°S, 145.7°E.",
    "summary_fi": "Yidinjdji-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 17.2°S, 145.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Yidinjdji"
    ]
  },
  {
    "slug": "yilba-people",
    "name": "Yilba People",
    "name_fi": "Yilba-kansa",
    "native_name": "Yilba",
    "alternate_names": [
      "Yilba"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yilba",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48815001",
    "summary_en": "The Yilba, also written Ilba and Jilba, are or were an Aboriginal Australian people of the present-day state of Queensland. Their traditional country encompasses North & Central Queensland interior, centered near 21.1°S, 146.0°E.",
    "summary_fi": "Yilba-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 21.1°S, 146.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Yilba"
    ]
  },
  {
    "slug": "yiman-people",
    "name": "Yiman People",
    "name_fi": "Yiman-kansa",
    "native_name": "Yiman",
    "alternate_names": [
      "Yiman",
      "Yiman people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yiman_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q28224701",
    "summary_en": "The Yiman, also known as Yeeman, Eoman or Jiman, and by themselves in modern times as Iman, are an Aboriginal Australian people living in the Upper Dawson River region around Taroom of eastern Central Queensland. Their traditional country encompasses Coastal and Eastern Queensland, centered near 25.6°S, 149.5°E.",
    "summary_fi": "Yiman-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 25.6°S, 149.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Yiman"
    ]
  },
  {
    "slug": "yinwum-people",
    "name": "Yinwum People",
    "name_fi": "Yinwum-kansa",
    "native_name": "Yinwum",
    "alternate_names": [
      "Yinwum"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yinwum",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48785135",
    "summary_en": "The Yinwum, also written Jinwum, were an indigenous Australian people of the Cape York Peninsula of Queensland. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 12.8°S, 142.8°E.",
    "summary_fi": "Yinwum-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 12.8°S, 142.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Yinwum"
    ]
  },
  {
    "slug": "yir-yoront-people",
    "name": "Yir Yoront People",
    "name_fi": "Yir Yoront-kansa",
    "native_name": "Yir Yoront",
    "alternate_names": [
      "Yir Yoront",
      "Yir-Yoront"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yir-Yoront",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q8053813",
    "summary_en": "The Yir-Yoront, also known as the Yir Yiront, are an Indigenous Australian people of the Cape York Peninsula now living mostly in Kowanyama  but also in Lirrqar/Pormpuraaw, both towns outside their traditional lands. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 15.3°S, 141.7°E.",
    "summary_fi": "Yir Yoront-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 15.3°S, 141.7°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Yir Yoront"
    ]
  },
  {
    "slug": "yirandali-people",
    "name": "Yirandali People",
    "name_fi": "Yirandali-kansa",
    "native_name": "Yirandali",
    "alternate_names": [
      "Yirandali",
      "Yirandhali"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yirandhali",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48815026",
    "summary_en": "The Yirandhali are an indigenous Australian people, who lived in the area of the present day Shire of Flinders in the state of Queensland. Their traditional country encompasses North & Central Queensland interior, centered near 21.4°S, 144.4°E.",
    "summary_fi": "Yirandali-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Pohjois- ja Keski-Queenslandin sisämaassa (koordinaateissa noin 21.4°S, 144.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Central Queensland traditional lands",
    "feature_name_matches": [
      "Yirandali"
    ]
  },
  {
    "slug": "yitha-yitha-people",
    "name": "Yitha Yitha People",
    "name_fi": "Yitha Yitha-kansa",
    "native_name": "Yitha Yitha",
    "alternate_names": [
      "Yitha Yitha",
      "Jitajita"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Jitajita",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q30681633",
    "summary_en": "The Jitajita, otherwise spelt Yitayita, are an indigenous Australian people of southern New South Wales. Their traditional country encompasses Inland New South Wales (Murray-Darling Basin), centered near 33.6°S, 144.4°E.",
    "summary_fi": "Yitha Yitha-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Uuden Etelä-Walesin sisämaassa Murray-Darling-joen valuma-alueella (koordinaateissa noin 33.6°S, 144.4°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Murray-Darling Basin traditional country",
    "feature_name_matches": [
      "Yitha Yitha"
    ]
  },
  {
    "slug": "yolngu-people",
    "name": "Yolngu People",
    "name_fi": "Yolngu-kansa",
    "native_name": "Yolngu",
    "alternate_names": [
      "Yolngu",
      "Yolŋu"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yol%C5%8Bu",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q374277",
    "summary_en": "The Yolŋu or Yolngu are an aggregation of Aboriginal Australian people inhabiting north-eastern Arnhem Land in the Northern Territory of Australia. Yolŋu means \"person\" in the Yolŋu languages. Their traditional country encompasses Arnhem Land and Top End, Northern Territory, centered near 12.9°S, 135.8°E.",
    "summary_fi": "Yolngu-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Arnheminmaalla ja Top Endin alueella Pohjoisterritoriossa (koordinaateissa noin 12.9°S, 135.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Arnhem Land / Top End estates",
    "feature_name_matches": [
      "Yolngu"
    ]
  },
  {
    "slug": "yorta-yorta-people",
    "name": "Yorta Yorta People",
    "name_fi": "Yorta Yorta-kansa",
    "native_name": "Yorta Yorta",
    "alternate_names": [
      "Yorta Yorta"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yorta_Yorta",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q8055853",
    "summary_en": "The Yorta Yorta, also known as Jotijota, are an Aboriginal Australian people who have traditionally inhabited the area surrounding the junction of the Goulburn and Murray Rivers in present-day north-eastern Victoria and southern New South Wales. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 35.7°S, 145.0°E.",
    "summary_fi": "Yorta Yorta-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 35.7°S, 145.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Yorta Yorta"
    ]
  },
  {
    "slug": "yugambeh-people",
    "name": "Yugambeh People",
    "name_fi": "Yugambeh-kansa",
    "native_name": "Yugambeh",
    "alternate_names": [
      "Yugambeh",
      "Yugambeh people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yugambeh_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q24189583",
    "summary_en": "The Yugambeh, also known as the Minyangbal, or Nganduwal, are an Aboriginal Australian people of South East Queensland and the Northern Rivers of New South Wales, their territory lies between the Logan and Tweed rivers. A term for an Aboriginal of the Yugambeh tribe is Mibunn, which is derived from the word for the wedge-tailed eagle. Their traditional country encompasses Coastal and Eastern Queensland, centered near 28.1°S, 153.0°E.",
    "summary_fi": "Yugambeh-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 28.1°S, 153.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Yugambeh"
    ]
  },
  {
    "slug": "yuggera-people",
    "name": "Yuggera People",
    "name_fi": "Yuggera-kansa",
    "native_name": "Yuggera",
    "alternate_names": [
      "Yuggera",
      "Jagera people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Jagera_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q2415617",
    "summary_en": "The Jagera people, also written Yagarr, Yaggera, Yuggera, Yagara, Yugara and other variants, are the Australian First Nations people who speak the Yugara language. The Yagara / Yugara Language Group includes the Jagera, Yuggera People. Their traditional country encompasses Coastal and Eastern Queensland, centered near 27.4°S, 152.5°E.",
    "summary_fi": "Yuggera-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 27.4°S, 152.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Yuggera"
    ]
  },
  {
    "slug": "yuin-people",
    "name": "Yuin People",
    "name_fi": "Yuin-kansa",
    "native_name": "Yuin",
    "alternate_names": [
      "Yuin"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Yuin",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q2601713",
    "summary_en": "The Yuin nation, also spelt Djuwin, is a group of Australian Aboriginal peoples from the South Coast of New South Wales. All Yuin people share ancestors who spoke, as their first language, one or more of the Yuin language dialects. Their traditional country encompasses Victoria (Kulin Nation and southeastern river country), centered near 36.0°S, 149.8°E.",
    "summary_fi": "Yuin-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Victoriassa ja kaakkoisten jokien perinnealueilla (koordinaateissa noin 36.0°S, 149.8°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Victorian traditional estates",
    "feature_name_matches": [
      "Yuin"
    ]
  },
  {
    "slug": "yupangathi-people",
    "name": "Yupangathi People",
    "name_fi": "Yupangathi-kansa",
    "native_name": "Yupangathi",
    "alternate_names": [
      "Yupangathi",
      "Anguthimri language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Anguthimri_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q4764288",
    "summary_en": "Anguthimri is an extinct Paman language formerly spoken on the Cape York Peninsula of Queensland, Australia, by the Anguthimri people who lived in the area from the mouth of the Mission River north to Pennefather River and west to Duyfken Point. It is unknown when it became extinct. Their traditional country encompasses Cape York Peninsula, Queensland, centered near 12.1°S, 141.9°E.",
    "summary_fi": "Yupangathi-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Cape Yorkin niemimaalla Queenslandissa (koordinaateissa noin 12.1°S, 141.9°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Cape York Peninsula traditional country",
    "feature_name_matches": [
      "Yupangathi"
    ]
  },
  {
    "slug": "yuru-people",
    "name": "Yuru People",
    "name_fi": "Yuru-kansa",
    "native_name": "Yuru",
    "alternate_names": [
      "Yuru",
      "Juru people"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Juru_people",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q48817532",
    "summary_en": "The Juru people, also known as Yuru, are a group of Aboriginal people of the state of Queensland, Australia. Their traditional country encompasses Coastal and Eastern Queensland, centered near 19.9°S, 147.5°E.",
    "summary_fi": "Yuru-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 19.9°S, 147.5°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Yuru"
    ]
  },
  {
    "slug": "yuwi-people",
    "name": "Yuwi People",
    "name_fi": "Yuwi-kansa",
    "native_name": "Yuwi",
    "alternate_names": [
      "Yuwi",
      "Biri language"
    ],
    "culture_group": "Oceania",
    "lineage_id": "australia-indigenous",
    "historical_period": "Indigenous Australian Nation & Language Group",
    "year_start": -40000,
    "year_end": 2026,
    "period_label": "40,000 BCE – Present",
    "period_label_fi": "40 000 eaa. – nykyaika",
    "wikipedia_url_en": "https://en.wikipedia.org/wiki/Biri_language",
    "wikipedia_url_fi": "https://fi.wikipedia.org/wiki/Australian_aboriginaalit",
    "wikidata_id": "Q138662681",
    "summary_en": "Biri is a language traditionally spoken in an area between Mackay and Townsville of Queensland by the Birri Gubba people. Several grammatical descriptions of Biri were written before the language was silenced, but has been undergoing revival by the community for some years. Their traditional country encompasses Coastal and Eastern Queensland, centered near 21.3°S, 149.0°E.",
    "summary_fi": "Yuwi-kansa on Australian aboriginaalikansa, jonka perinteiset maat sijaitsevat Itä-Queenslandin rannikolla ja sisämaassa (koordinaateissa noin 21.3°S, 149.0°E). Heidän kulttuurinsa perustuu kymmeniä tuhansia vuosia jatkuneeseen perinteeseen, syvään maayhteyteen, monimutkaiseen sukulaisuusjärjestelmään ja uniajan laululinjoihin.",
    "capital": "Eastern Queensland coastal estates",
    "feature_name_matches": [
      "Yuwi"
    ]
  }
]

// Verification check: ensure all 339 residue entities in Oceania are matched
const residueData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../data-sources/residue/oceania.json"), "utf-8")
)
const matchedNames = new Set(RESIDUE_OCEANIA_CULTURES.flatMap((c) => c.feature_name_matches))

console.log(`Checking coverage against ${residueData.entities.length} Oceania residue entities...`)
const missing = residueData.entities.filter((e: any) => !matchedNames.has(e.name))

if (missing.length > 0) {
  console.error("Missing coverage for Oceania residue entities:", missing.map((m: any) => m.name))
  process.exit(1)
} else {
  console.log(`✓ 100% of ${residueData.entities.length} Oceania residue entities are matched!`)
}

// Write output batch file
const outPath = path.resolve(__dirname, "../../data-sources/batches/residue-oceania.json")
fs.writeFileSync(outPath, JSON.stringify(RESIDUE_OCEANIA_CULTURES, null, 2), "utf-8")
console.log(`✓ Wrote ${RESIDUE_OCEANIA_CULTURES.length} culture entries to ${outPath}`)
