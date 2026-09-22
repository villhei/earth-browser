import type { Era } from "../types/index"
import { Language } from "./types"

export interface LocalizedEraData {
  name: { en: string; fi: string }
  year_label: { en: string; fi: string }
  description: { en: string; fi: string }
}

export const ERA_TRANSLATIONS: Record<string, LocalizedEraData> = {
  "world-bc123000": {
    name: {
      en: "123,000 BCE - Eemian Interglacial & Early Humans",
      fi: "123 000 eaa. - Eem-interglasiaali ja varhaiset ihmiset",
    },
    year_label: { en: "123,000 BCE", fi: "123 000 eaa." },
    description: {
      en: "Eemian interglacial period; early anatomically modern humans and Neanderthal hunter-gatherer ranges.",
      fi: "Eem-interglasiaalikausi; varhaisten anatomisesti nykyihmisten ja neandertalinihmisten metsästäjä-keräilijäalueet.",
    },
  },
  "world-bc10000": {
    name: {
      en: "10,000 BCE - Dawn of the Holocene",
      fi: "10 000 eaa. - Holoseenin sarastus",
    },
    year_label: { en: "10,000 BCE", fi: "10 000 eaa." },
    description: {
      en: "End of the Last Glacial Period; emergence of early agriculture and sedentary hunter-gatherer communities in the Fertile Crescent.",
      fi: "Viimeisimmän jääkauden päättyminen; maanviljelyn ensiaskeleet ja varhaiset kyläyhteisöt Hedelmällisen puolikuun alueella.",
    },
  },
  "world-bc8000": {
    name: {
      en: "8000 BCE - Early Neolithic Era",
      fi: "8000 eaa. - Varhainen neoliittinen kausi",
    },
    year_label: { en: "8000 BCE", fi: "8000 eaa." },
    description: {
      en: "Early agricultural settlements expand across the Near East, Anatolia (Göbekli Tepe, Çatalhöyük), and East Asia.",
      fi: "Varhaiset maanviljelysasutukset leviävät Lähi-idässä, Anatoliassa (Göbekli Tepe, Çatalhöyük) ja Itä-Aasiassa.",
    },
  },
  "world-bc5000": {
    name: {
      en: "5000 BCE - Chalcolithic & Ubaid Period",
      fi: "5000 eaa. - Kalkoliittinen kausi ja Ubaid",
    },
    year_label: { en: "5000 BCE", fi: "5000 eaa." },
    description: {
      en: "Ubaid period in Mesopotamia, early farming cultures in the Nile Valley, Yangshao culture in China, and Vinča culture in Europe.",
      fi: "Ubaid-kausi Mesopotamiassa, varhaiset maanviljelyskulttuurit Niilin laaksossa, Yangshao-kulttuuri Kiinassa ja Vinča-kulttuuri Kaakkois-Euroopassa.",
    },
  },
  "world-bc4000": {
    name: {
      en: "4000 BCE - Early Bronze Age & Urban Genesis",
      fi: "4000 eaa. - Varhainen pronssikausi ja kaupunkien synty",
    },
    year_label: { en: "4000 BCE", fi: "4000 eaa." },
    description: {
      en: "First cities arise in Sumer (Uruk period); predynastic Egypt and Kurgan cultures spread across the Eurasian steppe.",
      fi: "Ensimmäiset kaupungit syntyvät Sumerissa (Uruk-kausi); esidynastinen Egypti ja kurgaanikulttuurit levittäytyvät Euraasian aroilla.",
    },
  },
  "world-bc3000": {
    name: {
      en: "3000 BCE - Early Dynastic & Sumerian Cities",
      fi: "3000 eaa. - Varhaisdynastinen kausi ja Sumerin kaupungit",
    },
    year_label: { en: "3000 BCE", fi: "3000 eaa." },
    description: {
      en: "Unification of Egypt under the First Dynasty, Sumerian Early Dynastic city-states, and the rise of the Indus Valley Civilization.",
      fi: "Egyptin yhdistyminen ensimmäisen dynastian aikana, Sumerin varhaisdynastiset kaupunkivaltiot ja Indus-sivilisaation nousu.",
    },
  },
  "world-bc2000": {
    name: {
      en: "2000 BCE - Middle Bronze Age & Minoan Crete",
      fi: "2000 eaa. - Keskipronssikausi ja minolainen Kreeta",
    },
    year_label: { en: "2000 BCE", fi: "2000 eaa." },
    description: {
      en: "Middle Kingdom Egypt, Ur III Sumerian Renaissance, Minoan civilization in Crete, and Xia/Erlitou China.",
      fi: "Egyptin keskivaltakunta, Ur III:n sumerilainen renessanssi, minolainen kulttuuri Kreetalla ja Xia/Erlitou Kiinassa.",
    },
  },
  "world-bc1500": {
    name: {
      en: "1500 BCE - Late Bronze Age Empires",
      fi: "1500 eaa. - Myöhäispronssikauden valtakunnat",
    },
    year_label: { en: "1500 BCE", fi: "1500 eaa." },
    description: {
      en: "New Kingdom Egyptian Empire, Hittite Empire in Anatolia, Mycenaean Greece, and Shang Dynasty in China.",
      fi: "Egyptin uusi valtakunta, heettiläisten valtakunta Anatoliassa, mykeneläinen Kreikka ja Shang-dynastia Kiinassa.",
    },
  },
  "world-bc1000": {
    name: {
      en: "1000 BCE - Early Iron Age",
      fi: "1000 eaa. - Varhainen rautakausi",
    },
    year_label: { en: "1000 BCE", fi: "1000 eaa." },
    description: {
      en: "Bronze Age collapse aftermath, Kingdom of Israel under David & Solomon, early Western Zhou Dynasty in China.",
      fi: "Pronssikauden romahduksen jälkeinen aika, Israelin kuningaskunta Daavidin ja Salomon aikana ja varhainen Länsi-Zhou Kiinassa.",
    },
  },
  "world-bc700": {
    name: {
      en: "700 BCE - Neo-Assyrian Empire & Archaic Greece",
      fi: "700 eaa. - Uus-Assyrian valtakunta ja arkaainen Kreikka",
    },
    year_label: { en: "700 BCE", fi: "700 eaa." },
    description: {
      en: "Neo-Assyrian Empire at its peak; Spring and Autumn period in China; rise of Archaic Greek poleis and Nubian 25th Dynasty.",
      fi: "Uus-Assyrian valtakunta huipussaan; Kevättä ja syksyä -kausi Kiinassa; kreikkalaisten polisten nousu ja Nubian 25. dynastia.",
    },
  },
  "world-bc500": {
    name: {
      en: "500 BCE - Classical Antiquity & Persian Zenith",
      fi: "500 eaa. - Klassinen antiikki ja Persian kukoistus",
    },
    year_label: { en: "500 BCE", fi: "500 eaa." },
    description: {
      en: "Achaemenid Persian Empire at its zenith, Golden Age of Classical Greece, and early Roman Republic.",
      fi: "Akhaimenidien Persian valtakunnan huippukausi, klassisen Kreikan kultakausi ja varhainen Rooman tasavalta.",
    },
  },
  "world-bc400": {
    name: {
      en: "400 BCE - Late Classical & Warring States",
      fi: "400 eaa. - Myöhäisklassinen aika ja Taistelevat läänitysvaltiot",
    },
    year_label: { en: "400 BCE", fi: "400 eaa." },
    description: {
      en: "Peloponnesian War aftermath in Greece; Warring States era in China; Mahajanapadas and rise of Magadha in India.",
      fi: "Peloponnesolaissodan jälkimainingit Kreikassa; Taistelevien läänitysvaltioiden aikakausi Kiinassa ja Magadhan nousu Intiassa.",
    },
  },
  "world-bc323": {
    name: {
      en: "323 BCE - Hellenistic Kingdoms & Alexander",
      fi: "323 eaa. - Hellenistiset kuningaskunnat ja Aleksanteri Suuri",
    },
    year_label: { en: "323 BCE", fi: "323 eaa." },
    description: {
      en: "Death of Alexander the Great and division of his empire into Diadochi kingdoms (Ptolemaic, Seleucid, Antigonid); Mauryan expansion.",
      fi: "Aleksanteri Suuren kuolema ja valtakunnan jakautuminen diadokkivaltakuntiin (Ptolemaiokset, Seleukidit, Antigonidit); Maurya-laajentuminen.",
    },
  },
  "world-bc300": {
    name: {
      en: "300 BCE - Mauryan Empire & Hellenistic World",
      fi: "300 eaa. - Maurya-valtakunta ja hellenistinen maailma",
    },
    year_label: { en: "300 BCE", fi: "300 eaa." },
    description: {
      en: "Mauryan Empire under Chandragupta Maurya and Ashoka dominates South Asia; Qin state prepares for Chinese unification.",
      fi: "Maurya-valtakunta Chandraguptan ja Ašokan johdolla hallitsee Etelä-Aasiaa; Qin-valtio valmistelee Kiinan yhdistämistä.",
    },
  },
  "world-bc200": {
    name: {
      en: "200 BCE - Han & Roman Expansion",
      fi: "200 eaa. - Han-dynastian ja Rooman laajentuminen",
    },
    year_label: { en: "200 BCE", fi: "200 eaa." },
    description: {
      en: "Establishment of the Han Dynasty in China; Rome defeats Carthage in the Second Punic War and begins Mediterranean hegemony.",
      fi: "Han-dynastian perustaminen Kiinassa; Rooma kukistaa Karthagon toisessa puunilaissodassa ja vakiinnuttaa hegemoniapuolensa Välimerellä.",
    },
  },
  "world-bc100": {
    name: {
      en: "100 BCE - Late Roman Republic & Han Silk Road",
      fi: "100 eaa. - Myöhäinen Rooman tasavalta ja Silkkitie",
    },
    year_label: { en: "100 BCE", fi: "100 eaa." },
    description: {
      en: "Han Dynasty opens the Silk Road under Emperor Wu; Late Roman Republic expands into Gaul and the Levant.",
      fi: "Keisari Wu avaa Silkkitien Kiinasta Länteen; myöhäinen Rooman tasavalta laajenee Galliaan ja Levantiin.",
    },
  },
  "world-bc1": {
    name: {
      en: "1 BCE - Augustan Roman Empire",
      fi: "1 eaa. - Augustinuksen Rooman keisarikunta",
    },
    year_label: { en: "1 BCE", fi: "1 eaa." },
    description: {
      en: "Augustus establishes the Roman Principate; Pax Romana begins; Western Han Dynasty nears its transition to the Xin dynasty.",
      fi: "Augustus perustaa Rooman keisarikunnan (principatus); Pax Romana alkaa; Läntinen Han-dynastia lähestyy siirtymää Xin-kauteen.",
    },
  },
  "world-100": {
    name: {
      en: "100 CE - Trajan & High Roman Empire",
      fi: "100 jaa. - Trajanus ja Rooman kukoistuskausi",
    },
    year_label: { en: "100 CE", fi: "100 jaa." },
    description: {
      en: "Roman Empire reaches its territorial zenith under Trajan; Eastern Han Dynasty; Kushan Empire dominates Central and South Asia.",
      fi: "Rooman valtakunta saavuttaa suurimman maantieteellisen laajuutensa Trajanuksen aikana; Itäinen Han ja Kushana-valtakunta Aasiassa.",
    },
  },
  "world-200": {
    name: {
      en: "200 CE - Severan Rome & Three Kingdoms Prelude",
      fi: "200 jaa. - Severusten Rooma ja Kolmen kuningaskunnan esinäytös",
    },
    year_label: { en: "200 CE", fi: "200 jaa." },
    description: {
      en: "Severan Dynasty in Rome; decline of the Han Dynasty leading into the Three Kingdoms period in China.",
      fi: "Severusten dynastia Roomassa; Han-dynastian luhistuminen ja Kolmen kuningaskunnan aikakauden alku Kiinassa.",
    },
  },
  "world-300": {
    name: {
      en: "300 CE - Tetrarchy & Gupta Foundation",
      fi: "300 jaa. - Tetrarkia ja Gupta-valtakunnan perustaminen",
    },
    year_label: { en: "300 CE", fi: "300 jaa." },
    description: {
      en: "Diocletian restores order through the Tetrarchy; rise of the Gupta Empire in India; Jin Dynasty in China.",
      fi: "Diocletianus vakauttaa valtakunnan tetrarkialla; Gupta-valtakunnan nousu Intiassa; Jin-dynastia Kiinassa.",
    },
  },
  "world-400": {
    name: {
      en: "400 CE - Late Antiquity & Migrations",
      fi: "400 jaa. - Myöhäisantiikki ja kansainvaellusaika",
    },
    year_label: { en: "400 CE", fi: "400 jaa." },
    description: {
      en: "Partition of the Roman Empire into Western and Eastern halves; Germanic and Hunnic migrations shake Europe; Gupta golden age.",
      fi: "Rooman jako Länsi- ja Itä-Roomaan; germaanien ja hunnien kansainvaellukset muokkaavat Eurooppaa; Guptien kultakausi Intiassa.",
    },
  },
  "world-500": {
    name: {
      en: "500 CE - Post-Roman Kingdoms & Northern/Southern Dynasties",
      fi: "500 jaa. - Rooman jälkeiset kuningaskunnat ja Pohjoiset ja eteläiset dynastiat",
    },
    year_label: { en: "500 CE", fi: "500 jaa." },
    description: {
      en: "Fall of the Western Roman Empire gives rise to Ostrogothic, Visigothic, and Frankish kingdoms; Northern and Southern Dynasties in China.",
      fi: "Länsi-Rooman kukistuttua syntyvät itägoottien, länsigoottien ja frankkien kuningaskunnat; Kiinassa Pohjoiset ja eteläiset dynastiat.",
    },
  },
  "world-600": {
    name: {
      en: "600 CE - Early Middle Ages & Sui Unification",
      fi: "600 jaa. - Varhaiskeskiaika ja Sui-dynastian yhdistyminen",
    },
    year_label: { en: "600 CE", fi: "600 jaa." },
    description: {
      en: "Byzantine-Sasanian wars on the eve of the Islamic expansion; Sui dynasty reunifies China followed by early Tang.",
      fi: "Bysantin ja sassanidien suursota islamin levittäytymisen aattona; Sui-dynastia yhdistää Kiinan ennen Tang-kautta.",
    },
  },
  "world-700": {
    name: {
      en: "700 CE - Umayyad Caliphate & Tang Golden Age",
      fi: "700 jaa. - Umaijadien kalifaatti ja Tang-dynastian kultakausi",
    },
    year_label: { en: "700 CE", fi: "700 jaa." },
    description: {
      en: "Umayyad Caliphate stretches from Iberia to India; Tang Dynasty reaches cosmopolitan zenith in Chang'an.",
      fi: "Umaijadien kalifaatti ulottuu Iberian niemimaalta Intiaan; Tang-dynastian kukoistava kosmopoliittinen kultakausi Chang'anissa.",
    },
  },
  "world-800": {
    name: {
      en: "800 CE - Carolingian & Abbasid Golden Age",
      fi: "800 jaa. - Karolingien ja abbasidien kultakausi",
    },
    year_label: { en: "800 CE", fi: "800 jaa." },
    description: {
      en: "Charlemagne crowned Holy Roman Emperor; Abbasid Golden Age under Harun al-Rashid in Baghdad; Tibetan Empire expands.",
      fi: "Kaarle Suuri kruunataan keisariksi; abbasidien kultakausi Harun al-Rašidin Bagdadissa; Tiibetin valtakunnan laajentuminen.",
    },
  },
  "world-900": {
    name: {
      en: "900 CE - Five Dynasties & Norse Expansion",
      fi: "900 jaa. - Viisi dynastiaa ja viikinkien laajentuminen",
    },
    year_label: { en: "900 CE", fi: "900 jaa." },
    description: {
      en: "Fragmented post-Carolingian Europe; Viking explorations across the North Atlantic; Five Dynasties and Ten Kingdoms in China.",
      fi: "Hajanaistunut karolingien jälkeinen Eurooppa; viikinkien tutkimusretket Pohjois-Atlantilla; Viisi dynastiaa ja kymmenen kuningaskuntaa Kiinassa.",
    },
  },
  "world-1000": {
    name: {
      en: "1000 CE - High Middle Ages & Song Dynasty",
      fi: "1000 jaa. - Sydänkeskiaika ja Song-dynastia",
    },
    year_label: { en: "1000 CE", fi: "1000 jaa." },
    description: {
      en: "Millennium era: Song Dynasty in China, Fatimid Caliphate, Kievan Rus' Christianization, Chola dynasty expands in South India.",
      fi: "Vuosituhannen vaihde: Song-dynastia Kiinassa, fatimidien kalifaatti, Kiovan Venäjän kääntyminen kristinuskoon ja Chola-dynastia Etelä-Intiassa.",
    },
  },
  "world-1100": {
    name: {
      en: "1100 CE - Crusader States & Great Seljuks",
      fi: "1100 jaa. - Ristiretkivaltiot ja Suur-Seldžukit",
    },
    year_label: { en: "1100 CE", fi: "1100 jaa." },
    description: {
      en: "First Crusade establishes Outremer; Great Seljuk Empire dominates the Middle East; Liao and Northern Song in China.",
      fi: "Ensimmäinen ristiretki perustaa ristiretkivaltiot Levantiin; Suur-Seldžukit hallitsevat Lähi-itää; Liao ja Pohjoinen Song Kiinassa.",
    },
  },
  "world-1200": {
    name: {
      en: "1200 CE - Eve of the Mongol Invasions",
      fi: "1200 jaa. - Mongolivaltakunnan valloitusten aattona",
    },
    year_label: { en: "1200 CE", fi: "1200 jaa." },
    description: {
      en: "Fourth Crusade sacks Constantinople; Ayyubid Sultanate founded by Saladin; Genghis Khan prepares to unify the steppe tribes.",
      fi: "Neljäs ristiretki valloittaa Konstantinopolin; Saladdinin perustama aijubidien sulttaanikunta; Tšingis-kaani valmistelee aroheimojen yhdistämistä.",
    },
  },
  "world-1279": {
    name: {
      en: "1279 CE - Mongol Empire & Yuan Dynasty",
      fi: "1279 jaa. - Mongolivaltakunta ja Yuan-dynastia",
    },
    year_label: { en: "1279 CE", fi: "1279 jaa." },
    description: {
      en: "Kublai Khan completes the conquest of Song China and founds the Yuan Dynasty; Pax Mongolica spans Afro-Eurasia.",
      fi: "Kublai-kaani saattaa Song-Kiinan valloituksen päätökseen ja perustaa Yuan-dynastian; Pax Mongolica yhdistää Euraasian kauppatiet.",
    },
  },
  "world-1300": {
    name: {
      en: "1300 CE - Four Mongol Khanates & Ottoman Genesis",
      fi: "1300 jaa. - Neljä mongolikaanikuntaa ja Osmanivaltakunnan synty",
    },
    year_label: { en: "1300 CE", fi: "1300 jaa." },
    description: {
      en: "Mongol Empire partitions into Golden Horde, Ilkhanate, Chagatai, and Yuan; Osman I begins Ottoman expansion in Anatolia.",
      fi: "Mongolivaltakunta jakaantuu Kultaiseen ordaan, Il-kaanikuntaan, Tšagatai-kaanikuntaan ja Yuaniin; Osman I aloittaa laajentumisen Anatoliassa.",
    },
  },
  "world-1400": {
    name: {
      en: "1400 CE - Timurid Empire & Early Ming",
      fi: "1400 jaa. - Timuridien valtakunta ja varhainen Ming-dynastia",
    },
    year_label: { en: "1400 CE", fi: "1400 jaa." },
    description: {
      en: "Timur (Tamerlane) carves a vast conquest across Persia and Central Asia; Ming Dynasty rules China; Hundred Years' War in Europe.",
      fi: "Timur Lenk valloittaa laajoja alueita Persiassa ja Keski-Aasiassa; Ming-dynastia hallitsee Kiinaa; satavuotinen sota Euroopassa.",
    },
  },
  "world-1492": {
    name: {
      en: "1492 CE - Age of Discovery",
      fi: "1492 jaa. - Löytöretkien aikakausi",
    },
    year_label: { en: "1492 CE", fi: "1492 jaa." },
    description: {
      en: "Columbus reaches the Americas; Spanish Reconquista completed with the fall of Granada; Renaissance flourishes in Italy.",
      fi: "Kolumbus saapuu Amerikkaan; Espanjan reconquista päättyy Granadan valtaukseen; renessanssi kukoistaa Italiassa.",
    },
  },
  "world-1500": {
    name: {
      en: "1500 CE - Global Maritime Networks",
      fi: "1500 jaa. - Globaalit merireitit ja kauppaverkostot",
    },
    year_label: { en: "1500 CE", fi: "1500 jaa." },
    description: {
      en: "Portuguese establish oceanic spice trade route to India (Vasco da Gama); rise of the Safavid Empire in Iran.",
      fi: "Portugali luo valtamerireitin Intiaan maustekauppaa varten (Vasco da Gama); safavidien valtakunnan nousu Iranissa.",
    },
  },
  "world-1530": {
    name: {
      en: "1530 CE - Reformation & Global Empires",
      fi: "1530 jaa. - Uskonpuhdistus ja maailmanvallat",
    },
    year_label: { en: "1530 CE", fi: "1530 jaa." },
    description: {
      en: "Charles V presides over Habsburg global dominions; Protestant Reformation spreads; Spanish conquests of Aztec and Inca empires.",
      fi: "Kaarle V hallitsee Habsburgien maailmanlaajuista valtakuntaa; protestanttinen uskonpuhdistus leviää; atsteekkien ja inkojen valloitus.",
    },
  },
  "world-1600": {
    name: {
      en: "1600 CE - Tokugawa Shogunate & East India Companies",
      fi: "1600 jaa. - Tokugawa-shōgunaatti ja Itä-Intian kauppakomppaniat",
    },
    year_label: { en: "1600 CE", fi: "1600 jaa." },
    description: {
      en: "Battle of Sekigahara establishes the Tokugawa Shogunate; English and Dutch East India Companies formed; Mughal zenith under Akbar.",
      fi: "Sekigaharan taistelu perustaa Tokugawa-shōgunaatin Japanissa; Englannin ja Hollannin Itä-Intian kauppakomppaniat syntyvät; suurmogulien kukoistus Akbarin johdolla.",
    },
  },
  "world-1650": {
    name: {
      en: "1650 CE - Peace of Westphalia",
      fi: "1650 jaa. - Westfalenin rauha",
    },
    year_label: { en: "1650 CE", fi: "1650 jaa." },
    description: {
      en: "Peace of Westphalia (1648) establishes sovereign nation-state diplomacy; Qing Dynasty consolidates control over China.",
      fi: "Westfalenin rauha (1648) luo suvereenien valtioiden kansainvälisen järjestelmän; Qing-dynastia vakiinnuttaa valtansa Kiinassa.",
    },
  },
  "world-1700": {
    name: {
      en: "1700 CE - Great Northern War & War of Spanish Succession",
      fi: "1700 jaa. - Suuri Pohjan sota ja Espanjan perimyssota",
    },
    year_label: { en: "1700 CE", fi: "1700 jaa." },
    description: {
      en: "Peter the Great modernizes Russia; Great Northern War begins against Sweden; War of the Spanish Succession looms.",
      fi: "Pietari Suuri uudistaa Venäjää; Suuri Pohjan sota Ruotsia vastaan alkaa; Espanjan perimyssota häämöttää.",
    },
  },
  "world-1715": {
    name: {
      en: "1715 CE - Age of Enlightenment",
      fi: "1715 jaa. - Valistusaika",
    },
    year_label: { en: "1715 CE", fi: "1715 jaa." },
    description: {
      en: "Death of Louis XIV of France; Enlightenment philosophy flourishes; British commercial and colonial hegemony expands.",
      fi: "Ludvig XIV:n kuolema; valistusfilosofian nousu; Ison-Britannian kaupallinen ja siirtomaavalta vahvistuu.",
    },
  },
  "world-1783": {
    name: {
      en: "1783 CE - American Independence",
      fi: "1783 jaa. - Yhdysvaltain itsenäisyys",
    },
    year_label: { en: "1783 CE", fi: "1783 jaa." },
    description: {
      en: "Treaty of Paris recognizes United States independence; Catherine the Great annexes Crimea; eve of the French Revolution.",
      fi: "Pariisin rauha tunnustaa Yhdysvaltain itsenäisyyden; Katariina Suuri liittää Krimin Venäjään; Ranskan vallankumouksen aatto.",
    },
  },
  "world-1800": {
    name: {
      en: "1800 CE - Napoleonic Era & Global Shifts",
      fi: "1800 jaa. - Napoleonin aikakausi ja globaalit murrokset",
    },
    year_label: { en: "1800 CE", fi: "1800 jaa." },
    description: {
      en: "Napoleon rises to power in France; early Industrial Revolution transforms Britain; Qing Dynasty at peak geographic expanse.",
      fi: "Napoleon nousee valtaan Ranskassa; varhainen teollinen vallankumous muuttaa Britanniaa; Qing-Kiina laajimmillaan.",
    },
  },
  "world-1815": {
    name: {
      en: "1815 CE - Congress of Vienna",
      fi: "1815 jaa. - Wienin kongressi",
    },
    year_label: { en: "1815 CE", fi: "1815 jaa." },
    description: {
      en: "Defeat of Napoleon and Congress of Vienna reorders European balance of power; Spanish American wars of independence.",
      fi: "Napoleonin kukistuminen ja Wienin kongressin luoma Euroopan voimatasapaino; Espanjan Amerikan siirtomaiden itsenäisyyssodat.",
    },
  },
  "world-1878": {
    name: {
      en: "1878 CE - Congress of Berlin & Eve of the War of the Pacific",
      fi: "1878 jaa. - Berliinin kongressi ja Tyynenmeren sodan aatto",
    },
    year_label: { en: "1878 CE", fi: "1878 jaa." },
    description: {
      en: "Congress of Berlin reorganizes the Balkans after the Russo-Turkish War; Meiji Restoration modernizes Japan.",
      fi: "Berliinin kongressi järjestelee Balkanin rajat Venäjän-Turkin sodan jälkeen; Meiji-uudistukset modernisoivat Japanin.",
    },
  },
  "world-1880": {
    name: {
      en: "1880 CE - High Imperialism",
      fi: "1880 jaa. - Korkeaimperialismin aikakausi",
    },
    year_label: { en: "1880 CE", fi: "1880 jaa." },
    description: {
      en: "Scramble for Africa begins; Second Industrial Revolution accelerates; consolidation of European colonial empires.",
      fi: "Afrikan jako alkaa; toinen teollinen vallankumous kiihtyy; eurooppalaisten siirtomaaimperiumien vakiintuminen.",
    },
  },
  "world-1900": {
    name: {
      en: "1900 CE - Turn of the Century",
      fi: "1900 jaa. - Vuosisadan vaihde",
    },
    year_label: { en: "1900 CE", fi: "1900 jaa." },
    description: {
      en: "Boxer Rebellion in China; Boer War in South Africa; global railway and telegraph networks interconnect continents.",
      fi: "Boksarikapina Kiinassa; buurisota Etelä-Afrikassa; mannertenväliset rautatie- ja lennätinverkostot yhdistävät maailmaa.",
    },
  },
  "world-1914": {
    name: {
      en: "1914 CE - Outbreak of World War I",
      fi: "1914 jaa. - Ensimmäisen maailmansodan syttyminen",
    },
    year_label: { en: "1914 CE", fi: "1914 jaa." },
    description: {
      en: "Assassination of Archduke Franz Ferdinand triggers World War I, ending the Belle Époque.",
      fi: "Frans Ferdinandin salamurha sytyttää ensimmäisen maailmansodan päättäen Belle Époque -aikakauden.",
    },
  },
  "world-1920": {
    name: {
      en: "1920 CE - Interwar & League of Nations",
      fi: "1920 jaa. - Sotien välinen aika ja Kansainliitto",
    },
    year_label: { en: "1920 CE", fi: "1920 jaa." },
    description: {
      en: "Treaty of Versailles creates new nations in Central and Eastern Europe; League of Nations established; Russian Civil War.",
      fi: "Versailles'n rauha synnyttää uusia valtioita Keski- ja Itä-Eurooppaan; Kansainliitto perustetaan; Venäjän sisällissota.",
    },
  },
  "world-1930": {
    name: {
      en: "1930 CE - Great Depression & Rising Autocracies",
      fi: "1930 jaa. - Suuri lama ja autoritaaristen valtioiden nousu",
    },
    year_label: { en: "1930 CE", fi: "1930 jaa." },
    description: {
      en: "Global economic shockwaves of the Great Depression; rise of fascism and authoritarian regimes in Europe and Asia.",
      fi: "Suuren laman maailmanlaajuiset taloussokit; fasismin ja autoritaaristen järjestelmien nousu Euroopassa ja Aasiassa.",
    },
  },
  "world-1938": {
    name: {
      en: "1938 CE - Eve of World War II",
      fi: "1938 jaa. - Toisen maailmansodan aatto",
    },
    year_label: { en: "1938 CE", fi: "1938 jaa." },
    description: {
      en: "Munich Agreement and annexation of Austria and Sudetenland; Second Sino-Japanese War intensifies in East Asia.",
      fi: "Münchenin sopimus sekä Itävallan ja Sudeettialueiden liittäminen Saksaan; Kiinan-Japanin toinen sota kiihtyy.",
    },
  },
  "world-1945": {
    name: {
      en: "1945 CE - Post-World War II",
      fi: "1945 jaa. - Toisen maailmansodan loppu ja uusi maailmanjärjestys",
    },
    year_label: { en: "1945 CE", fi: "1945 jaa." },
    description: {
      en: "Allied victory in World War II; founding of the United Nations; partition of Germany; dawn of the Nuclear Age and Cold War.",
      fi: "Liittoutuneiden voitto toisessa maailmansodassa; Yhdistyneiden kansakuntien perustaminen; Saksan jako; atomiaika ja kylmä sota alkavat.",
    },
  },
  "world-1960": {
    name: {
      en: "1960 CE - Year of Africa & Cold War Zenith",
      fi: "1960 jaa. - Afrikan vuosi ja kylmän sodan kiihtyminen",
    },
    year_label: { en: "1960 CE", fi: "1960 jaa." },
    description: {
      en: "Decolonization wave: 17 African nations gain independence; Space Race and nuclear deterrence between superpowers.",
      fi: "Dekolonisaation aalto: 17 Afrikan valtiota itsenäistyy; avaruuskilpa ja ydinpelote suurvaltojen välillä.",
    },
  },
  "world-1994": {
    name: {
      en: "1994 CE - Post-Cold War World",
      fi: "1994 jaa. - Kylmän sodan jälkeinen maailma",
    },
    year_label: { en: "1994 CE", fi: "1994 jaa." },
    description: {
      en: "Dissolution of the Soviet Union; end of apartheid in South Africa; Maastricht Treaty creates the European Union.",
      fi: "Neuvostoliiton hajoaminen; apartheidin päättyminen Etelä-Afrikassa; Maastrichtin sopimus perustaa Euroopan unionin.",
    },
  },
  "world-2000": {
    name: {
      en: "2000 CE - Turn of the Millennium",
      fi: "2000 jaa. - Vuosituhannen vaihde",
    },
    year_label: { en: "2000 CE", fi: "2000 jaa." },
    description: {
      en: "Dawn of the 21st century; digital globalization; introduction of the Euro currency; expanding internet adoption.",
      fi: "2000-luvun alku; digitaalinen globalisaatio; eurovaluutan käyttöönotto ja internetin nopea leviäminen.",
    },
  },
  "world-2010": {
    name: {
      en: "2010 CE - Contemporary Era",
      fi: "2010 jaa. - Nykyaika",
    },
    year_label: { en: "2010 CE", fi: "2010 jaa." },
    description: {
      en: "Smartphone revolution, emerging multipolar geopolitics, interconnected global markets, and climate awareness.",
      fi: "Älypuhelinvallankumous, moninapainen maailmanpolitiikka, globaalisti yhteen kietoutuneet markkinat ja ilmastotietoisuus.",
    },
  },
}

/**
 * Returns an era localized for the given language.
 */
export function getLocalizedEra(era: Era, language: Language): Era {
  if (language === "en") {
    return era
  }

  // If era already has explicit Finnish fields
  if (era.name_fi || era.year_label_fi || era.description_fi) {
    return {
      ...era,
      name: era.name_fi || era.name,
      year_label: era.year_label_fi || era.year_label,
      description: era.description_fi || era.description,
    }
  }

  const trans = ERA_TRANSLATIONS[era.slug]
  if (!trans) {
    return era
  }

  return {
    ...era,
    name: trans.name.fi || era.name,
    year_label: trans.year_label.fi || era.year_label,
    description: trans.description.fi || era.description,
  }
}
