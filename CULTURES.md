# Catalog of Cultures, Civilizations & Polities

This catalog compiles all **3000** distinct historical, archaeological, and indigenous cultural entities extracted directly from the **Earth Browser** PostGIS database (`world` database, `era_features` table).

Across all **54 historical eras** (123,000 BCE – 2010 CE), the database contains **17,563 total feature entries** categorized into **39 cultural groups**.

A complete machine-readable dataset is also available in [`data-sources/cultures.json`](data-sources/cultures.json).

## Table of Contents

1. [Summary by Cultural Group](#summary-by-cultural-group)
- [Historical Culture (1655 entities)](#historical-culture)
- [North American Indigenous (274 entities)](#north-american-indigenous)
- [Oceania (71 entities)](#oceania)
- [Caribbean (35 entities)](#caribbean)
- [Southeast Asia (50 entities)](#southeast-asia)
- [West Africa (37 entities)](#west-africa)
- [East Asia (70 entities)](#east-asia)
- [South Asia (85 entities)](#south-asia)
- [East Africa (44 entities)](#east-africa)
- [Southern Europe (38 entities)](#southern-europe)
- [Western Europe (53 entities)](#western-europe)
- [Middle East (35 entities)](#middle-east)
- [Arctic & Subarctic (44 entities)](#arctic-subarctic)
- [Central Asia (71 entities)](#central-asia)
- [Central Europe (45 entities)](#central-europe)
- [North Africa (31 entities)](#north-africa)
- [Latin America (15 entities)](#latin-america)
- [South American Indigenous (37 entities)](#south-american-indigenous)
- [Southern Africa (27 entities)](#southern-africa)
- [Mesoamerican (56 entities)](#mesoamerican)
- [Andean (34 entities)](#andean)
- [Nordic (13 entities)](#nordic)
- [Central Africa (16 entities)](#central-africa)
- [Prehistoric & Archaeological (17 entities)](#prehistoric-archaeological)
- [Central America (7 entities)](#central-america)
- [Baltic (14 entities)](#baltic)
- [Balkans (18 entities)](#balkans)
- [Ancient Near East (21 entities)](#ancient-near-east)
- [Finno-Ugric (7 entities)](#finno-ugric)
- [Greco-Roman (17 entities)](#greco-roman)
- [Slavic (16 entities)](#slavic)
- [North America (3 entities)](#north-america)
- [Eastern Europe (5 entities)](#eastern-europe)
- [Caucasus (3 entities)](#caucasus)
- [Iranian (14 entities)](#iranian)
- [Islamic Caliphates (12 entities)](#islamic-caliphates)
- [Western & Central Europe (6 entities)](#western-central-europe)
- [Mediterranean (3 entities)](#mediterranean)
- [Unclaimed Wilderness (1 entities)](#unclaimed-wilderness)

---

## Summary by Cultural Group

| Cultural Group | Unique Entities | Total Era Records | Date Span |
| :--- | :---: | :---: | :--- |
| [**Historical Culture**](#historical-culture) | 1655 | 4111 | 5 000 BCE – 2010 CE |
| [**North American Indigenous**](#north-american-indigenous) | 274 | 704 | 2 000 BCE – 1800 CE |
| [**Oceania**](#oceania) | 71 | 600 | 10 000 BCE – 2010 CE |
| [**Caribbean**](#caribbean) | 35 | 315 | 1 500 BCE – 2010 CE |
| [**Southeast Asia**](#southeast-asia) | 50 | 298 | 2 000 BCE – 2010 CE |
| [**West Africa**](#west-africa) | 37 | 294 | 8 000 BCE – 2010 CE |
| [**East Asia**](#east-asia) | 70 | 290 | 10 000 BCE – 2010 CE |
| [**South Asia**](#south-asia) | 85 | 290 | 5 000 BCE – 2010 CE |
| [**East Africa**](#east-africa) | 44 | 266 | 4 000 BCE – 2010 CE |
| [**Southern Europe**](#southern-europe) | 38 | 247 | 500 BCE – 2010 CE |
| [**Western Europe**](#western-europe) | 53 | 241 | 1 500 BCE – 2010 CE |
| [**Middle East**](#middle-east) | 35 | 233 | 1 500 BCE – 2010 CE |
| [**Arctic & Subarctic**](#arctic-subarctic) | 44 | 225 | 10 000 BCE – 1800 CE |
| [**Central Asia**](#central-asia) | 71 | 218 | 5 000 BCE – 2010 CE |
| [**Central Europe**](#central-europe) | 45 | 185 | 700 BCE – 2010 CE |
| [**North Africa**](#north-africa) | 31 | 176 | 4 000 BCE – 2010 CE |
| [**Latin America**](#latin-america) | 15 | 163 | 1715 CE – 2010 CE |
| [**South American Indigenous**](#south-american-indigenous) | 37 | 159 | 1 500 BCE – 1878 CE |
| [**Southern Africa**](#southern-africa) | 27 | 155 | 10 000 BCE – 2010 CE |
| [**Mesoamerican**](#mesoamerican) | 56 | 138 | 2 000 BCE – 1815 CE |
| [**Andean**](#andean) | 34 | 136 | 5 000 BCE – 1800 CE |
| [**Nordic**](#nordic) | 13 | 115 | 200 BCE – 2010 CE |
| [**Central Africa**](#central-africa) | 16 | 90 | 1492 CE – 2010 CE |
| [**Prehistoric & Archaeological**](#prehistoric-archaeological) | 17 | 85 | 123 000 BCE – 1878 CE |
| [**Central America**](#central-america) | 7 | 84 | 1650 CE – 2010 CE |
| [**Baltic**](#baltic) | 14 | 82 | 5 000 BCE – 2010 CE |
| [**Balkans**](#balkans) | 18 | 62 | 1 500 BCE – 2010 CE |
| [**Ancient Near East**](#ancient-near-east) | 21 | 59 | 5 000 BCE – 1800 CE |
| [**Finno-Ugric**](#finno-ugric) | 7 | 56 | 2 000 BCE – 1530 CE |
| [**Greco-Roman**](#greco-roman) | 17 | 54 | 4 000 BCE – 1400 CE |
| [**Slavic**](#slavic) | 16 | 52 | 900 CE – 2010 CE |
| [**North America**](#north-america) | 3 | 39 | 1783 CE – 2010 CE |
| [**Eastern Europe**](#eastern-europe) | 5 | 38 | 700 BCE – 2010 CE |
| [**Caucasus**](#caucasus) | 3 | 36 | 323 BCE – 2010 CE |
| [**Iranian**](#iranian) | 14 | 32 | 1 500 BCE – 1715 CE |
| [**Islamic Caliphates**](#islamic-caliphates) | 12 | 28 | 700 CE – 1900 CE |
| [**Western & Central Europe**](#western-central-europe) | 6 | 20 | 5 000 BCE – 100 CE |
| [**Mediterranean**](#mediterranean) | 3 | 19 | 500 BCE – 2010 CE |
| [**Unclaimed Wilderness**](#unclaimed-wilderness) | 1 | 2 | 1945 CE – 1960 CE |

---

## <a id="historical-culture"></a>Historical Culture

* **Unique Entities**: 1655
* **Total Appearances**: 4111
* **Historical Span**: 5 000 BCE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **'Amuwu** | 'Amuwu | 1492 CE | 1 |
| **?** | ? | 200 BCE | 1 |
| **A'i Cofán/Kofán** | A'i Cofán/Kofán | 1492 CE | 1 |
| **A'uwe** | A'uwe | 1492 CE | 1 |
| **Aaniiih** | Aaniiih | 1530 CE – 1600 CE | 2 |
| **Abdelouadides** | Abdelouadides | 1279 CE | 1 |
| **Abipones** | Abipones | 1492 CE | 1 |
| **Abitibiwinni Aki** | Abitibiwinni Aki | 1492 CE | 1 |
| **Abnaki** | Abnaki | 1530 CE – 1600 CE | 2 |
| **Acadian Peninsula (UK)** | Acadian Peninsula (UK) | 1783 CE – 1800 CE | 2 |
| **Acaxea** | Acaxea | 1530 CE – 1600 CE | 2 |
| **Accomack** | Accomack | 1492 CE | 1 |
| **Accra** | Accra | 1900 CE | 1 |
| **Achagua** | Achagua | 1492 CE | 1 |
| **Achires** | Achires | 1492 CE | 1 |
| **Achuar** | Achuar | 1492 CE | 1 |
| **Aché** | Aché | 1492 CE | 1 |
| **Achí** | Achí | 1492 CE | 1 |
| **Africa** | Africa | 1783 CE – 1800 CE | 2 |
| **Aghlabid Emirate** | Aghlabid Emirate | 800 CE – 900 CE | 2 |
| **Agwarmin** | Agwarmin | 1600 CE – 1800 CE | 6 |
| **Ahantchuyuk** | Ahantchuyuk | 1492 CE | 1 |
| **Ahtna Nenn’** | Ahtna Nenn’ | 1492 CE | 1 |
| **Aikanã** | Aikanã | 1492 CE | 1 |
| **Air** | Air | 1715 CE – 1800 CE | 3 |
| **Ais** | Ais | 1492 CE | 1 |
| **Akaitcho** | Akaitcho | 1492 CE | 1 |
| **Akatziri** | Akatziri | 400 CE | 1 |
| **Akawaio/Akawayo** | Akawaio/Akawayo | 1492 CE | 1 |
| **Akokisa** | Akokisa | 1492 CE | 1 |
| **Akwê** | Akwê | 1492 CE | 1 |
| **Alabama** | Alabama | 1530 CE – 1715 CE | 5 |
| **Alamans** | Alamans | 400 CE | 1 |
| **Alawa** | Alawa | 1600 CE – 1815 CE | 7 |
| **Alazapas** | Alazapas | 1492 CE | 1 |
| **Algiers** | Algiers | 1650 CE – 1815 CE | 5 |
| **Alyawarre** | Alyawarre | 1600 CE – 1815 CE | 7 |
| **Amahuaca** | Amahuaca | 1492 CE | 1 |
| **Amangu** | Amangu | 1600 CE – 1815 CE | 7 |
| **Amarak** | Amarak | 1600 CE – 1815 CE | 7 |
| **Ambaló** | Ambaló | 1492 CE | 1 |
| **Amboca** | Amboca | 1492 CE | 1 |
| **Ambur** | Ambur | 1783 CE – 1800 CE | 2 |
| **Amorúa** | Amorúa | 1492 CE | 1 |
| **Amuq D** | Amuq D | 5 000 BCE | 1 |
| **Anambé** | Anambé | 1492 CE | 1 |
| **Andean states and chiefdoms** | Andean states and chiefdoms | 1279 CE – 1400 CE | 3 |
| **Andegerebenha** | Andegerebenha | 1600 CE – 1800 CE | 6 |
| **Andoa** | Andoa | 1492 CE | 1 |
| **Andyamathanha** | Andyamathanha | 1600 CE – 1800 CE | 6 |
| **Angaité** | Angaité | 1492 CE | 1 |
| **Angevin Empire** | Angevin Empire | 1200 CE | 1 |
| **Anggamudi** | Anggamudi | 1600 CE – 1800 CE | 6 |
| **Anglo-Egyptian Sudan** | Anglo-Egyptian Sudan | 1914 CE | 1 |
| **Anguthimri** | Anguthimri | 1600 CE – 1800 CE | 6 |
| **Anhalt** | Anhalt | 1783 CE – 1815 CE | 6 |
| **Anishinabewaki ᐊᓂᔑᓈᐯᐗᑭ** | Anishinabewaki ᐊᓂᔑᓈᐯᐗᑭ | 1492 CE | 1 |
| **Anmatyerre** | Anmatyerre | 1600 CE – 1815 CE | 7 |
| **Antakarinja** | Antakarinja | 1600 CE – 1815 CE | 7 |
| **Aparai** | Aparai | 1492 CE | 1 |
| **Apiaká** | Apiaká | 1492 CE | 1 |
| **Apinayé** | Apinayé | 1492 CE | 1 |
| **Appamattuck** | Appamattuck | 1492 CE | 1 |
| **Apyãwa** | Apyãwa | 1492 CE | 1 |
| **Arabana** | Arabana | 1600 CE – 1800 CE | 6 |
| **Arabela** | Arabela | 1492 CE | 1 |
| **Arabia** | Arabia | 1878 CE – 1900 CE | 3 |
| **Arabia (Nejd)** | Arabia (Nejd) | 1914 CE | 2 |
| **Araona** | Araona | 1492 CE | 1 |
| **Arara of Volta Grande** | Arara of Volta Grande | 1492 CE | 1 |
| **Arikapú** | Arikapú | 1492 CE | 1 |
| **Arma** | Arma | 1715 CE | 1 |
| **Arosaguntacook** | Arosaguntacook | 1492 CE | 1 |
| **Arran** | Arran | 1000 CE – 1100 CE | 2 |
| **Arrohatec** | Arrohatec | 1492 CE | 1 |
| **Artsakh** | Artsakh | 1100 CE | 1 |
| **Aruá** | Aruá | 1492 CE | 1 |
| **Aseniwuche Winewak (Rocky Mountain)** | Aseniwuche Winewak (Rocky Mountain) | 1492 CE | 1 |
| **Asheninka** | Asheninka | 1492 CE | 1 |
| **Assam** | Assam | 1783 CE – 1815 CE | 2 |
| **Assiniboin** | Assiniboin | 1530 CE – 1715 CE | 5 |
| **Atfalati** | Atfalati | 1492 CE | 1 |
| **Athabascan** | Athabascan | 1600 CE – 1783 CE | 5 |
| **Atikum-Umã** | Atikum-Umã | 1492 CE | 1 |
| **Ato trading confederacy** | Ato trading confederacy | 1878 CE – 1900 CE | 3 |
| **Atropatene** | Atropatene | 323 BCE – 300 BCE | 2 |
| **Atsugewi** | Atsugewi | 1492 CE | 1 |
| **Aucocisco** | Aucocisco | 1492 CE | 1 |
| **Aures** | Aures | 700 CE | 1 |
| **Awabakal** | Awabakal | 1600 CE – 1800 CE | 6 |
| **Awajún** | Awajún | 1492 CE | 1 |
| **Awaswas** | Awaswas | 1492 CE | 1 |
| **Awngthim** | Awngthim | 1600 CE – 1800 CE | 6 |
| **Awsa** | Awsa | 1650 CE – 1800 CE | 5 |
| **Awytyza** | Awytyza | 1492 CE | 1 |
| **Awá** | Awá | 1492 CE | 1 |
| **Ayahuacas** | Ayahuacas | 1492 CE | 1 |
| **Aymara** | Aymara | 1492 CE | 1 |
| **Aymara kingdoms** | Aymara kingdoms | 1279 CE – 1400 CE | 3 |
| **Ayoreo** | Ayoreo | 1492 CE | 1 |
| **Añuu** | Añuu | 1492 CE | 1 |
| **Badtjala** | Badtjala | 1600 CE – 1800 CE | 6 |
| **Bagan** | Bagan | 1200 CE | 1 |
| **Bagirmi** | Bagirmi | 1530 CE – 1800 CE | 5 |
| **Bahawalpur** | Bahawalpur | 1800 CE | 1 |
| **Bakanh** | Bakanh | 1600 CE – 1800 CE | 6 |
| **Ballardong** | Ballardong | 1600 CE – 1815 CE | 7 |
| **Balts** | Balts | 700 CE | 1 |
| **Banas** | Banas | 900 CE | 1 |
| **Banawá** | Banawá | 1492 CE | 1 |
| **Bandjigali** | Bandjigali | 1600 CE – 1800 CE | 6 |
| **Banggarla** | Banggarla | 1600 CE – 1800 CE | 6 |
| **Baraba Baraba** | Baraba Baraba | 1600 CE – 1800 CE | 6 |
| **Baradha** | Baradha | 1600 CE – 1800 CE | 6 |
| **Barasano/Panenoá** | Barasano/Panenoá | 1492 CE | 1 |
| **Barghawata** | Barghawata | 700 CE | 1 |
| **Barindji** | Barindji | 1600 CE – 1800 CE | 6 |
| **Barkindji** | Barkindji | 1600 CE – 1800 CE | 6 |
| **Barna** | Barna | 1600 CE – 1800 CE | 6 |
| **Barotse** | Barotse | 1878 CE – 1900 CE | 3 |
| **Barranbinya** | Barranbinya | 1600 CE – 1800 CE | 6 |
| **Barundji** | Barundji | 1600 CE – 1800 CE | 6 |
| **Barunggam** | Barunggam | 1600 CE – 1800 CE | 6 |
| **Baré** | Baré | 1492 CE | 1 |
| **Barí** | Barí | 1492 CE | 1 |
| **Bashkirs** | Bashkirs | 800 CE | 1 |
| **Basques** | Basques | 500 CE | 1 |
| **Batavian Republic** | Batavian Republic | 1800 CE | 1 |
| **Batsil Winik' Otik (Tzotzil)** | Batsil Winik' Otik (Tzotzil) | 1492 CE | 1 |
| **Baure** | Baure | 1492 CE | 1 |
| **Bayali** | Bayali | 1600 CE – 1800 CE | 6 |
| **Beaver** | Beaver | 1492 CE | 2 |
| **Bega** | Bega | 700 CE | 1 |
| **Beja people** | Beja people | 900 CE | 1 |
| **Bella** | Bella | 1500 CE | 1 |
| **Bengal** | Bengal | 1492 CE – 1783 CE | 5 |
| **Betoy** | Betoy | 1492 CE | 1 |
| **Beylik of Aydin** | Beylik of Aydin | 1400 CE | 1 |
| **Bia Mbyá** | Bia Mbyá | 1492 CE | 1 |
| **Bidai** | Bidai | 1492 CE | 1 |
| **Bidjara** | Bidjara | 1600 CE – 1800 CE | 6 |
| **Bidwell** | Bidwell | 1600 CE – 1800 CE | 6 |
| **Bigambul** | Bigambul | 1600 CE – 1800 CE | 6 |
| **Biloxi** | Biloxi | 1492 CE – 1600 CE | 3 |
| **Binbinga** | Binbinga | 1600 CE – 1800 CE | 6 |
| **Bindjali** | Bindjali | 1600 CE – 1800 CE | 6 |
| **Biri** | Biri | 1600 CE – 1800 CE | 6 |
| **Biripi** | Biripi | 1600 CE – 1800 CE | 6 |
| **Birria** | Birria | 1600 CE – 1800 CE | 6 |
| **Bithynia** | Bithynia | 300 BCE | 1 |
| **Boe** | Boe | 1492 CE | 1 |
| **Boethuk** | Boethuk | 1000 CE – 1200 CE | 3 |
| **Bohanes** | Bohanes | 1492 CE | 1 |
| **Boonwurrung** | Boonwurrung | 1600 CE – 1800 CE | 6 |
| **Bora** | Bora | 1492 CE | 1 |
| **Borgu States** | Borgu States | 1878 CE – 1900 CE | 3 |
| **Bostos** | Bostos | 1492 CE | 1 |
| **Bremen** | Bremen | 1715 CE – 1815 CE | 4 |
| **Bribri** | Bribri | 1492 CE | 1 |
| **British American colonies** | British American colonies | 1715 CE | 1 |
| **British East Africa** | British East Africa | 1914 CE | 1 |
| **British East India Company** | British East India Company | 1815 CE | 1 |
| **British Guiana** | British Guiana | 1783 CE – 1900 CE | 5 |
| **British Protectorate** | British Protectorate | 1914 CE | 1 |
| **British Raj** | British Raj | 1878 CE – 1938 CE | 7 |
| **Brothertown** | Brothertown | 1492 CE | 1 |
| **Broërec** | Broërec | 600 CE – 700 CE | 2 |
| **Brunka** | Brunka | 1492 CE | 1 |
| **Brunswick** | Brunswick | 1783 CE – 1815 CE | 6 |
| **Buandig** | Buandig | 1600 CE – 1800 CE | 6 |
| **Budjari** | Budjari | 1600 CE – 1800 CE | 6 |
| **Buglé and Ngäbé** | Buglé and Ngäbé | 1492 CE | 1 |
| **Bukurnidja** | Bukurnidja | 1600 CE – 1815 CE | 7 |
| **Bularnu** | Bularnu | 1600 CE – 1800 CE | 6 |
| **Bulgars** | Bulgars | 600 CE – 900 CE | 4 |
| **Bundelkhand** | Bundelkhand | 1800 CE | 1 |
| **Bundjalung** | Bundjalung | 1600 CE – 1800 CE | 6 |
| **Burarra** | Burarra | 1600 CE – 1800 CE | 6 |
| **Burgandy** | Burgandy | 1000 CE – 1200 CE | 3 |
| **Buwayhid Emirates** | Buwayhid Emirates | 1000 CE – 1200 CE | 2 |
| **Byelarus** | Byelarus | 1994 CE – 2010 CE | 3 |
| **Bïde** | Bïde | 1492 CE | 1 |
| **Cahita** | Cahita | 1492 CE | 1 |
| **Cahitas** | Cahitas | 1530 CE – 1600 CE | 2 |
| **Cahto** | Cahto | 1492 CE | 1 |
| **Cahulia** | Cahulia | 1530 CE – 1600 CE | 2 |
| **Calabar** | Calabar | 1878 CE – 1900 CE | 3 |
| **Caldwell** | Caldwell | 1492 CE | 1 |
| **Calicuas** | Calicuas | 1492 CE | 1 |
| **Calvas** | Calvas | 1492 CE | 1 |
| **Canela Apanyekrá** | Canela Apanyekrá | 1492 CE | 1 |
| **Canela Ramkokamekrá** | Canela Ramkokamekrá | 1492 CE | 1 |
| **Canichana** | Canichana | 1492 CE | 1 |
| **Cantia** | Cantia | 600 CE – 700 CE | 2 |
| **Cape Colony** | Cape Colony | 1715 CE – 1900 CE | 7 |
| **Cape Fear** | Cape Fear | 1492 CE | 1 |
| **Carcross/Tagish First Nation (BC)** | Carcross/Tagish First Nation (BC) | 1492 CE | 1 |
| **Carcross/Tagish First Nation (Yukon)** | Carcross/Tagish First Nation (Yukon) | 1492 CE | 1 |
| **Carnatic** | Carnatic | 1783 CE – 1800 CE | 2 |
| **Cascades** | Cascades | 1492 CE | 1 |
| **Castilla** | Castilla | 1000 CE – 1200 CE | 3 |
| **Caxas** | Caxas | 1492 CE | 1 |
| **Caxcan** | Caxcan | 1492 CE | 1 |
| **Caxcane** | Caxcane | 1530 CE – 1600 CE | 2 |
| **Cayenne** | Cayenne | 1650 CE – 1715 CE | 3 |
| **Cayuse** | Cayuse | 1530 CE – 1715 CE | 5 |
| **Ch'orti'** | Ch'orti' | 1492 CE | 1 |
| **Chachi** | Chachi | 1492 CE | 1 |
| **Chafan** | Chafan | 1492 CE | 1 |
| **ChalAt’i’lo t’sikAti (Chalat’)** | ChalAt’i’lo t’sikAti (Chalat’) | 1492 CE | 1 |
| **Chalon** | Chalon | 1492 CE | 1 |
| **Chamicuro** | Chamicuro | 1492 CE | 1 |
| **Chandellas** | Chandellas | 1100 CE | 1 |
| **Chango** | Chango | 1492 CE | 1 |
| **Chankas** | Chankas | 1492 CE | 1 |
| **Chaná** | Chaná | 1492 CE | 1 |
| **Chané** | Chané | 1492 CE | 1 |
| **Chaparra** | Chaparra | 1492 CE | 1 |
| **Chapra** | Chapra | 1492 CE | 1 |
| **Charka** | Charka | 1492 CE | 1 |
| **Chatot** | Chatot | 1530 CE – 1600 CE | 2 |
| **Chauhans** | Chauhans | 600 CE – 1100 CE | 6 |
| **Chelan** | Chelan | 1492 CE | 1 |
| **Chelmia** | Chelmia | 900 CE | 1 |
| **Chemapho** | Chemapho | 1492 CE | 1 |
| **Chen-La** | Chen-La | 600 CE – 800 CE | 3 |
| **Chepenefa** | Chepenefa | 1492 CE | 1 |
| **Chesapeake** | Chesapeake | 1492 CE | 1 |
| **Chiapaneco** | Chiapaneco | 1492 CE | 1 |
| **Chibuleo** | Chibuleo | 1492 CE | 1 |
| **Chichas** | Chichas | 1492 CE | 1 |
| **Chicora** | Chicora | 1492 CE | 1 |
| **Chilula** | Chilula | 1492 CE | 1 |
| **Chimacum** | Chimacum | 1492 CE | 1 |
| **Chimariko (territory)** | Chimariko (territory) | 1492 CE | 1 |
| **Chiquitano** | Chiquitano | 1492 CE | 1 |
| **Chiso** | Chiso | 1492 CE | 1 |
| **Chisos** | Chisos | 1530 CE – 1600 CE | 2 |
| **Chit-dee-ni (Chetco)** | Chit-dee-ni (Chetco) | 1492 CE | 1 |
| **Chitimacha** | Chitimacha | 1492 CE | 1 |
| **Chochenyo** | Chochenyo | 1492 CE | 1 |
| **Cholulteca** | Cholulteca | 1492 CE | 1 |
| **Chono** | Chono | 1492 CE | 1 |
| **Chontal de Guerrero – Tuxteco** | Chontal de Guerrero – Tuxteco | 1492 CE | 1 |
| **Chopcca** | Chopcca | 1492 CE | 1 |
| **Chowanoke** | Chowanoke | 1492 CE | 1 |
| **Chtimacha** | Chtimacha | 1530 CE – 1715 CE | 5 |
| **Chuds** | Chuds | 900 CE – 1000 CE | 2 |
| **Chukchansi** | Chukchansi | 1492 CE | 1 |
| **Chūzan** | Chūzan | 1400 CE | 1 |
| **Ciguayo** | Ciguayo | 1492 CE | 1 |
| **Circars** | Circars | 1800 CE | 1 |
| **Clackamas** | Clackamas | 1492 CE | 1 |
| **Clatskanie** | Clatskanie | 1492 CE | 1 |
| **Clatsop** | Clatsop | 1492 CE | 1 |
| **Coahuiltec** | Coahuiltec | 1530 CE – 1600 CE | 2 |
| **Coahuiltecan** | Coahuiltecan | 1492 CE | 1 |
| **Coast Yuki** | Coast Yuki | 1492 CE | 1 |
| **Coca** | Coca | 1492 CE | 1 |
| **Cochimí** | Cochimí | 1492 CE – 1600 CE | 3 |
| **Coharie** | Coharie | 1492 CE | 1 |
| **Colville** | Colville | 1492 CE | 1 |
| **Comca’ac (Seri)** | Comca’ac (Seri) | 1492 CE | 1 |
| **Comté de Toulouse** | Comté de Toulouse | 1200 CE | 1 |
| **Confederated Tribes of Warm Springs** | Confederated Tribes of Warm Springs | 1492 CE | 1 |
| **Confederated Villages of Lisjan** | Confederated Villages of Lisjan | 1492 CE | 1 |
| **Congaree** | Congaree | 1492 CE | 1 |
| **Conoy** | Conoy | 1530 CE – 1600 CE | 2 |
| **Copuces** | Copuces | 1492 CE | 1 |
| **Coqs** | Coqs | 1500 CE | 1 |
| **Coree** | Coree | 1492 CE | 1 |
| **Corsica** | Corsica | 1000 CE – 1400 CE | 6 |
| **Costanoan** | Costanoan | 1530 CE – 1600 CE | 2 |
| **Cotonou** | Cotonou | 1878 CE – 1900 CE | 3 |
| **Cowlitz** | Cowlitz | 1492 CE | 1 |
| **Crete** | Crete | 300 BCE | 1 |
| **Croatan** | Croatan | 1492 CE | 1 |
| **Cuica** | Cuica | 1492 CE | 1 |
| **Cuicuilco** | Cuicuilco | 1492 CE | 1 |
| **Cuitlatec** | Cuitlatec | 1492 CE | 1 |
| **Cupeño** | Cupeño | 1492 CE | 1 |
| **Cusabo** | Cusabo | 1530 CE – 1600 CE | 4 |
| **Cushites** | Cushites | 900 CE | 1 |
| **Cuttatawomen** | Cuttatawomen | 1492 CE | 1 |
| **Cuxhaven** | Cuxhaven | 1783 CE – 1815 CE | 3 |
| **Cyraneica (UK Lybia)** | Cyraneica (UK Lybia) | 1945 CE | 1 |
| **Cyrenaica** | Cyrenaica | 1715 CE – 1815 CE | 4 |
| **Dadi Dadi** | Dadi Dadi | 1600 CE – 1800 CE | 6 |
| **Dainggatti** | Dainggatti | 1600 CE – 1800 CE | 6 |
| **Dakeł Keyoh (ᑕᗸᒡ ᗲᘏᑋ)** | Dakeł Keyoh (ᑕᗸᒡ ᗲᘏᑋ) | 1492 CE | 1 |
| **Danes** | Danes | 600 CE – 900 CE | 6 |
| **Dangbon** | Dangbon | 1600 CE – 1815 CE | 7 |
| **Danggali** | Danggali | 1600 CE – 1800 CE | 6 |
| **Danube Bulgars** | Danube Bulgars | 700 CE | 1 |
| **Danzig** | Danzig | 1930 CE | 1 |
| **Darkinung** | Darkinung | 1600 CE – 1800 CE | 6 |
| **Darumbal** | Darumbal | 1600 CE – 1800 CE | 6 |
| **Dau Nom Wintu** | Dau Nom Wintu | 1492 CE | 1 |
| **Dau Pom Wintu** | Dau Pom Wintu | 1492 CE | 1 |
| **Deg Xit'an Ngan' (Deg Xit'an)** | Deg Xit'an Ngan' (Deg Xit'an) | 1492 CE | 1 |
| **Delagoa Bay** | Delagoa Bay | 1650 CE – 1815 CE | 6 |
| **Dena'ina Ełnena** | Dena'ina Ełnena | 1492 CE | 1 |
| **Dendi Kingdom** | Dendi Kingdom | 1878 CE – 1880 CE | 2 |
| **Denendeh (Dënësųłinë́ Nëné)** | Denendeh (Dënësųłinë́ Nëné) | 1492 CE | 1 |
| **Deni** | Deni | 1492 CE | 1 |
| **Derbent** | Derbent | 1100 CE | 1 |
| **Dharawala** | Dharawala | 1600 CE – 1800 CE | 6 |
| **Dharug** | Dharug | 1600 CE – 1800 CE | 6 |
| **Dhirari** | Dhirari | 1600 CE – 1800 CE | 6 |
| **Dieri** | Dieri | 1600 CE – 1800 CE | 6 |
| **Ditidaht** | Ditidaht | 1492 CE | 1 |
| **Dja Dja Wurrung** | Dja Dja Wurrung | 1600 CE – 1800 CE | 6 |
| **Djabuganjdji** | Djabuganjdji | 1600 CE – 1800 CE | 6 |
| **Djabwurung** | Djabwurung | 1600 CE – 1800 CE | 6 |
| **Djargurdwurung** | Djargurdwurung | 1600 CE – 1800 CE | 6 |
| **Djeoromitxí** | Djeoromitxí | 1492 CE | 1 |
| **Djirbalngan** | Djirbalngan | 1600 CE – 1800 CE | 6 |
| **Dodecanese Islands** | Dodecanese Islands | 1930 CE | 1 |
| **Doeg** | Doeg | 1492 CE | 1 |
| **Dokapuara (Tuyuca)** | Dokapuara (Tuyuca) | 1492 CE | 1 |
| **Dominion of Newfoundland** | Dominion of Newfoundland | 1920 CE – 1938 CE | 3 |
| **Doolboong/Miriwoong** | Doolboong/Miriwoong | 1600 CE – 1815 CE | 7 |
| **Duchy of Benevento** | Duchy of Benevento | 1000 CE – 1200 CE | 3 |
| **Duchy of Swabia** | Duchy of Swabia | 1000 CE | 1 |
| **Dumnonia** | Dumnonia | 600 CE – 700 CE | 2 |
| **Durdzuks** | Durdzuks | 1100 CE | 1 |
| **Duwamish** | Duwamish | 1492 CE | 1 |
| **Dyo'xaiya-o-Ivo'tsa (Okaina)** | Dyo'xaiya-o-Ivo'tsa (Okaina) | 1492 CE | 1 |
| **Dyungungoo (Gubbi Gubbi)** | Dyungungoo (Gubbi Gubbi) | 1600 CE – 1800 CE | 6 |
| **Dâw** | Dâw | 1492 CE | 1 |
| **Dënéndeh** | Dënéndeh | 1492 CE | 1 |
| **E'ñepá** | E'ñepá | 1492 CE | 1 |
| **East Francia** | East Francia | 900 CE | 1 |
| **East Getaes** | East Getaes | 700 CE | 1 |
| **East Java** | East Java | 1000 CE – 1200 CE | 3 |
| **Eastern Mono/Monache** | Eastern Mono/Monache | 1492 CE | 1 |
| **Eastern Nehântick** | Eastern Nehântick | 1492 CE | 1 |
| **Ecuana** | Ecuana | 1492 CE | 1 |
| **Eeyou Istchee** | Eeyou Istchee | 1492 CE | 1 |
| **El Pom Wintu** | El Pom Wintu | 1492 CE | 1 |
| **Emberá** | Emberá | 1492 CE | 1 |
| **Emberá Chamí** | Emberá Chamí | 1492 CE | 1 |
| **Emberá Dobidá** | Emberá Dobidá | 1492 CE | 1 |
| **Emberá Katío/Eyabida** | Emberá Katío/Eyabida | 1492 CE | 1 |
| **Emberá/Eperara/Épera** | Emberá/Eperara/Épera | 1492 CE | 1 |
| **Emirate of Bin Shal'an** | Emirate of Bin Shal'an | 1920 CE – 1938 CE | 3 |
| **Emirate of Córdoba** | Emirate of Córdoba | 800 CE – 900 CE | 2 |
| **Emirate of Tiflis** | Emirate of Tiflis | 1100 CE | 1 |
| **Enawenê-nawê** | Enawenê-nawê | 1492 CE | 1 |
| **Enenlhet-Toba** | Enenlhet-Toba | 1492 CE | 1 |
| **Enets** | Enets | 1530 CE – 1600 CE | 2 |
| **English territory** | English territory | 1279 CE – 1400 CE | 3 |
| **Enlhet** | Enlhet | 1492 CE | 1 |
| **Enlhet-Enenlhet** | Enlhet-Enenlhet | 1492 CE | 1 |
| **Eno** | Eno | 1492 CE | 1 |
| **Entiat** | Entiat | 1492 CE | 1 |
| **Enxet** | Enxet | 1492 CE | 1 |
| **Eperara Siapidara** | Eperara Siapidara | 1492 CE | 1 |
| **Erie** | Erie | 1492 CE – 1715 CE | 6 |
| **Esketemculeucw (Esk'etemc)** | Esketemculeucw (Esk'etemc) | 1492 CE | 1 |
| **Esse ejja** | Esse ejja | 1492 CE | 1 |
| **Esselen** | Esselen | 1492 CE | 1 |
| **Essequibo** | Essequibo | 1650 CE – 1700 CE | 2 |
| **Essex** | Essex | 800 CE – 900 CE | 2 |
| **Ests** | Ests | 800 CE | 1 |
| **Far Eastern SSR** | Far Eastern SSR | 1920 CE – 1930 CE | 2 |
| **Fernandeño Tataviam** | Fernandeño Tataviam | 1492 CE | 1 |
| **Fezzan (Frech Lybia)** | Fezzan (Frech Lybia) | 1945 CE | 1 |
| **Finnmark** | Finnmark | 1600 CE – 1800 CE | 4 |
| **Finns** | Finns | 800 CE | 1 |
| **Fivizzano** | Fivizzano | 1650 CE – 1815 CE | 6 |
| **Florida** | Florida | 1650 CE – 1700 CE | 2 |
| **Fox** | Fox | 1530 CE – 1715 CE | 5 |
| **Franche-Comté** | Franche-Comté | 1650 CE – 1700 CE | 2 |
| **Futa Jalon** | Futa Jalon | 1878 CE – 1900 CE | 3 |
| **Féénemɨnaa** | Féénemɨnaa | 1492 CE | 1 |
| **Gabalbara** | Gabalbara | 1600 CE – 1800 CE | 6 |
| **Gadubanud** | Gadubanud | 1600 CE – 1800 CE | 6 |
| **Gambia, The** | Gambia, The | 1914 CE – 2010 CE | 9 |
| **Gananggalinda** | Gananggalinda | 1600 CE – 1800 CE | 6 |
| **Gandhāra** | Gandhāra | 500 BCE | 1 |
| **Ganggalida** | Ganggalida | 1600 CE – 1800 CE | 6 |
| **Gangulu** | Gangulu | 1600 CE – 1800 CE | 6 |
| **Garawa** | Garawa | 1600 CE – 1800 CE | 6 |
| **Garingbal** | Garingbal | 1600 CE – 1800 CE | 6 |
| **Garrochambas** | Garrochambas | 1492 CE | 1 |
| **Garífuna** | Garífuna | 1492 CE | 1 |
| **Gayiri** | Gayiri | 1600 CE – 1800 CE | 6 |
| **Geats** | Geats | 400 CE | 1 |
| **Geawegal** | Geawegal | 1600 CE – 1800 CE | 6 |
| **Geneva** | Geneva | 1700 CE – 1783 CE | 3 |
| **Georgian Kingdom** | Georgian Kingdom | 700 CE | 1 |
| **Gepids** | Gepids | 400 CE | 1 |
| **German E. Africa (Tanganyika)** | German E. Africa (Tanganyika) | 1914 CE | 1 |
| **German South-West Africa** | German South-West Africa | 1914 CE | 1 |
| **Gharra** | Gharra | 1530 CE – 1700 CE | 4 |
| **Ghaznavid Emirate** | Ghaznavid Emirate | 1000 CE – 1200 CE | 3 |
| **Gilbert and Ellice Islands** | Gilbert and Ellice Islands | 1938 CE | 1 |
| **Giraiwurung** | Giraiwurung | 1600 CE – 1800 CE | 6 |
| **Gitanyow Lax’yip** | Gitanyow Lax’yip | 1492 CE | 1 |
| **Gitga’at** | Gitga’at | 1492 CE | 1 |
| **Gitga’at Lax Yuup** | Gitga’at Lax Yuup | 1492 CE | 1 |
| **Giya** | Giya | 1600 CE – 1800 CE | 6 |
| **Goa** | Goa | 1783 CE – 1815 CE | 3 |
| **Goghtn** | Goghtn | 1100 CE | 1 |
| **Golkonda** | Golkonda | 1492 CE – 1650 CE | 5 |
| **Gondwana** | Gondwana | 1492 CE | 1 |
| **Gooty** | Gooty | 1783 CE – 1800 CE | 2 |
| **Granada** | Granada | 1279 CE – 1400 CE | 3 |
| **Graton Rancheria** | Graton Rancheria | 1492 CE | 1 |
| **Griqualand West** | Griqualand West | 1878 CE – 1900 CE | 3 |
| **Guacata** | Guacata | 1492 CE | 1 |
| **Guachimis** | Guachimis | 1530 CE – 1600 CE | 2 |
| **Guahibo/Hiwi** | Guahibo/Hiwi | 1492 CE | 1 |
| **Guajajara** | Guajajara | 1492 CE | 1 |
| **Guam** | Guam | 1938 CE | 1 |
| **Guamar / Pecchichitane** | Guamar / Pecchichitane | 1530 CE – 1600 CE | 2 |
| **Guamares** | Guamares | 1492 CE | 1 |
| **Guanaca** | Guanaca | 1492 CE | 1 |
| **Guanahatabey** | Guanahatabey | 1492 CE | 1 |
| **Guanahatabeyes** | Guanahatabeyes | 1000 CE – 1400 CE | 6 |
| **Guane** | Guane | 1492 CE | 1 |
| **Guaná** | Guaná | 1492 CE | 1 |
| **Guarasugwe** | Guarasugwe | 1492 CE | 1 |
| **Guarayo** | Guarayo | 1492 CE | 1 |
| **Guarijío/Guarijó** | Guarijío/Guarijó | 1492 CE | 1 |
| **Guasaves/Tamazulas** | Guasaves/Tamazulas | 1492 CE | 1 |
| **Guató** | Guató | 1492 CE | 1 |
| **Guaycura** | Guaycura | 1492 CE | 1 |
| **Guenoa-Muinanes** | Guenoa-Muinanes | 1492 CE | 1 |
| **Guiana** | Guiana | 1815 CE | 1 |
| **Gulidjan** | Gulidjan | 1600 CE – 1800 CE | 6 |
| **Gumbainggir** | Gumbainggir | 1600 CE – 1800 CE | 6 |
| **Gunditjmara** | Gunditjmara | 1600 CE – 1800 CE | 6 |
| **Gundungurra** | Gundungurra | 1600 CE – 1800 CE | 6 |
| **Gungabula** | Gungabula | 1600 CE – 1800 CE | 6 |
| **Gunggari** | Gunggari | 1600 CE – 1800 CE | 6 |
| **Gunindiri** | Gunindiri | 1600 CE – 1800 CE | 6 |
| **Gunu** | Gunu | 1600 CE – 1800 CE | 6 |
| **Gureng Gureng** | Gureng Gureng | 1600 CE – 1800 CE | 6 |
| **Guringai** | Guringai | 1600 CE – 1800 CE | 6 |
| **Guta** | Guta | 600 CE – 700 CE | 2 |
| **Guugu-Yimidhirr** | Guugu-Yimidhirr | 1600 CE – 1800 CE | 6 |
| **Guwa** | Guwa | 1600 CE – 1800 CE | 6 |
| **Guwinmal** | Guwinmal | 1600 CE – 1800 CE | 6 |
| **Gwa’Sala-‘Nakwaxda’xw** | Gwa’Sala-‘Nakwaxda’xw | 1492 CE | 1 |
| **Gwitch'in Settlement Region** | Gwitch'in Settlement Region | 1492 CE | 1 |
| **Günün a atük (Günün a küna)** | Günün a atük (Günün a küna) | 1492 CE | 1 |
| **Ha Shuta Enima (Mazateco)** | Ha Shuta Enima (Mazateco) | 1492 CE | 1 |
| **Hach Winik (Lacandon)** | Hach Winik (Lacandon) | 1492 CE | 1 |
| **Hail** | Hail | 1920 CE – 1938 CE | 3 |
| **Halalt** | Halalt | 1492 CE | 1 |
| **Halíti** | Halíti | 1492 CE | 1 |
| **Hamburg** | Hamburg | 1715 CE – 1815 CE | 4 |
| **Hammonassets** | Hammonassets | 1492 CE | 1 |
| **Han** | Han | 1 BCE – 200 CE | 3 |
| **Han Zhao** | Han Zhao | 300 CE | 1 |
| **Harakbut** | Harakbut | 1492 CE | 1 |
| **Harapunchai** | Harapunchai | 1200 CE | 1 |
| **Haripunjaya** | Haripunjaya | 1000 CE | 1 |
| **Hatteras** | Hatteras | 1492 CE | 1 |
| **Hejaz** | Hejaz | 600 CE – 1938 CE | 5 |
| **Helvetic Republic** | Helvetic Republic | 1800 CE | 1 |
| **Henîa-Kamiare** | Henîa-Kamiare | 1492 CE | 1 |
| **Heruli** | Heruli | 200 CE – 300 CE | 2 |
| **Hesquiaht** | Hesquiaht | 1492 CE | 1 |
| **Hi Ui (Pame/Chichimeco Jonaz)** | Hi Ui (Pame/Chichimeco Jonaz) | 1492 CE | 1 |
| **Hia-Ced O'odham** | Hia-Ced O'odham | 1492 CE | 1 |
| **Hiaitsiihi** | Hiaitsiihi | 1492 CE | 1 |
| **Hindu Shahis** | Hindu Shahis | 900 CE | 1 |
| **Hindu states** | Hindu states | 700 CE – 900 CE | 4 |
| **Hitchiti** | Hitchiti | 1530 CE – 1600 CE | 2 |
| **Hixkaryana** | Hixkaryana | 1492 CE | 1 |
| **Hohenzollern** | Hohenzollern | 1715 CE – 1815 CE | 4 |
| **Hokuzan** | Hokuzan | 1400 CE | 1 |
| **Holikachuk** | Holikachuk | 1492 CE | 1 |
| **Holstein** | Holstein | 1783 CE – 1815 CE | 3 |
| **Homalco** | Homalco | 1492 CE | 1 |
| **Hoopa** | Hoopa | 1492 CE | 1 |
| **Hoopa (Reservation)** | Hoopa (Reservation) | 1492 CE | 1 |
| **Hoti** | Hoti | 1492 CE | 1 |
| **Houma** | Houma | 1492 CE – 1700 CE | 5 |
| **Huarpe** | Huarpe | 1492 CE | 1 |
| **Huaylas** | Huaylas | 1492 CE | 1 |
| **Huetar** | Huetar | 1492 CE | 1 |
| **Hul Kuhk’u** | Hul Kuhk’u | 1492 CE | 1 |
| **Hul'qumi'num Treaty Group** | Hul'qumi'num Treaty Group | 1492 CE | 1 |
| **Huni Kuin** | Huni Kuin | 1492 CE | 1 |
| **Hunkpapa** | Hunkpapa | 1492 CE | 1 |
| **Hunnic Empire** | Hunnic Empire | 400 CE | 1 |
| **Hupd'äh** | Hupd'äh | 1492 CE | 1 |
| **Huu-ay-aht** | Huu-ay-aht | 1492 CE | 1 |
| **Hän** | Hän | 1492 CE | 1 |
| **Hñähñu (Otomí)** | Hñähñu (Otomí) | 1492 CE | 1 |
| **Hövsgöl Nuur** | Hövsgöl Nuur | 100 BCE | 1 |
| **I'târap** | I'târap | 1492 CE | 1 |
| **Ibadan** | Ibadan | 1878 CE – 1900 CE | 3 |
| **Ibadites** | Ibadites | 1200 CE | 1 |
| **Ijku (Arhuaco)** | Ijku (Arhuaco) | 1492 CE | 1 |
| **Ikitu** | Ikitu | 1492 CE | 1 |
| **Ikolen** | Ikolen | 1492 CE | 1 |
| **Ikpeng** | Ikpeng | 1492 CE | 1 |
| **Imbangala** | Imbangala | 1815 CE | 1 |
| **In-SHUCK-ch** | In-SHUCK-ch | 1492 CE | 1 |
| **Ineseño** | Ineseño | 1492 CE | 1 |
| **Inga** | Inga | 1492 CE | 1 |
| **Inikana/Kukama Kukamiria/Kokama** | Inikana/Kukama Kukamiria/Kokama | 1492 CE | 1 |
| **Iningai** | Iningai | 1600 CE – 1800 CE | 6 |
| **Inkal Awá** | Inkal Awá | 1492 CE | 1 |
| **Inuvialuit** | Inuvialuit | 1492 CE | 1 |
| **Iogys** | Iogys | 1492 CE | 1 |
| **Irlanda** | Irlanda | 800 CE – 900 CE | 2 |
| **Iron Age chieftainships** | Iron Age chieftainships | 200 BCE | 1 |
| **Iron Age megalith cultures** | Iron Age megalith cultures | 500 BCE | 1 |
| **Irritilas** | Irritilas | 1530 CE – 1600 CE | 2 |
| **Irritilas/Lagunero** | Irritilas/Lagunero | 1492 CE | 1 |
| **Ishir Tomárãho** | Ishir Tomárãho | 1492 CE | 1 |
| **Ishir Ybytoso** | Ishir Ybytoso | 1492 CE | 1 |
| **Iskonawa** | Iskonawa | 1492 CE | 1 |
| **Islamic and Hindu states** | Islamic and Hindu states | 1530 CE – 1650 CE | 4 |
| **Islamic states** | Islamic states | 1500 CE | 3 |
| **Itazipco** | Itazipco | 1492 CE | 1 |
| **Itonama** | Itonama | 1492 CE | 1 |
| **Ixil** | Ixil | 1492 CE | 1 |
| **Iñapari** | Iñapari | 1492 CE | 1 |
| **Jaitmatang** | Jaitmatang | 1600 CE – 1800 CE | 6 |
| **Jamamadi** | Jamamadi | 1492 CE | 1 |
| **Janabres** | Janabres | 1530 CE – 1600 CE | 2 |
| **Janos** | Janos | 1492 CE | 1 |
| **Jaqaru** | Jaqaru | 1492 CE | 1 |
| **Jarawara** | Jarawara | 1492 CE | 1 |
| **Jardwadjali** | Jardwadjali | 1600 CE – 1800 CE | 6 |
| **Jeaga** | Jeaga | 1492 CE | 1 |
| **Jin** | Jin | 300 CE – 400 CE | 2 |
| **Jin Empire** | Jin Empire | 500 CE | 1 |
| **Jiwere** | Jiwere | 1492 CE | 1 |
| **Jococobas** | Jococobas | 1492 CE | 1 |
| **Juhup-Yuju/Yuhupdëh** | Juhup-Yuju/Yuhupdëh | 1492 CE | 1 |
| **Julimes** | Julimes | 1492 CE | 1 |
| **Jumanos** | Jumanos | 1492 CE | 1 |
| **Ka'apor** | Ka'apor | 1492 CE | 1 |
| **Ka:’yu:’k’t’h’/Che:k’tles7et’h’** | Ka:’yu:’k’t’h’/Che:k’tles7et’h’ | 1492 CE | 1 |
| **Kaantju** | Kaantju | 1600 CE – 1800 CE | 6 |
| **Kaarta** | Kaarta | 1783 CE – 1815 CE | 3 |
| **Kacha Edze (Urarina)** | Kacha Edze (Urarina) | 1492 CE | 1 |
| **Kadiwéu** | Kadiwéu | 1492 CE | 1 |
| **Kaiabi** | Kaiabi | 1492 CE | 1 |
| **Kaimbé** | Kaimbé | 1492 CE | 1 |
| **Kaingang** | Kaingang | 1492 CE | 1 |
| **Kakataibo** | Kakataibo | 1492 CE | 1 |
| **Kakheti-Hereti** | Kakheti-Hereti | 1100 CE | 1 |
| **Kakinte** | Kakinte | 1492 CE | 1 |
| **Kalapalo** | Kalapalo | 1492 CE | 1 |
| **Kalapuya** | Kalapuya | 1492 CE – 1715 CE | 6 |
| **Kali** | Kali | 1715 CE | 1 |
| **Kalina/Kariña** | Kalina/Kariña | 1492 CE | 1 |
| **Kalkadoon** | Kalkadoon | 1600 CE – 1800 CE | 6 |
| **Kallawaya** | Kallawaya | 1492 CE | 1 |
| **Kamaiurá** | Kamaiurá | 1492 CE | 1 |
| **Kamarupa** | Kamarupa | 600 CE – 1200 CE | 2 |
| **Kambeba/Omagua** | Kambeba/Omagua | 1492 CE | 1 |
| **Kamerun** | Kamerun | 1914 CE | 1 |
| **Kamia** | Kamia | 1530 CE – 1600 CE | 2 |
| **Kamilaroi** | Kamilaroi | 1600 CE – 1800 CE | 6 |
| **Kamëntsá** | Kamëntsá | 1492 CE | 1 |
| **Kanas** | Kanas | 1492 CE | 1 |
| **Kanauj** | Kanauj | 600 CE – 700 CE | 2 |
| **Kandozi** | Kandozi | 1492 CE | 1 |
| **Kankuamo** | Kankuamo | 1492 CE | 1 |
| **Kantaruré** | Kantaruré | 1492 CE | 1 |
| **Kapanawa** | Kapanawa | 1492 CE | 1 |
| **Kara Khitai Khaganate** | Kara Khitai Khaganate | 1200 CE | 1 |
| **Karajá do Norte** | Karajá do Norte | 1492 CE | 1 |
| **Karakalpaks** | Karakalpaks | 1100 CE | 1 |
| **Karangura** | Karangura | 1600 CE – 1800 CE | 6 |
| **Karanka** | Karanka | 1492 CE | 1 |
| **Karankawa** | Karankawa | 1492 CE – 1600 CE | 4 |
| **Karanki** | Karanki | 1492 CE | 1 |
| **Karapana/Muteamasa** | Karapana/Muteamasa | 1492 CE | 1 |
| **Karelians** | Karelians | 800 CE – 1000 CE | 2 |
| **Karenggapa** | Karenggapa | 1600 CE – 1800 CE | 6 |
| **Karijona** | Karijona | 1492 CE | 1 |
| **Kariyarra** | Kariyarra | 1600 CE – 1815 CE | 7 |
| **Karkhanids** | Karkhanids | 1100 CE | 1 |
| **Karkin** | Karkin | 1492 CE | 1 |
| **Karuwali** | Karuwali | 1600 CE – 1800 CE | 6 |
| **Kashaya** | Kashaya | 1492 CE | 1 |
| **Kashtik** | Kashtik | 1492 CE | 1 |
| **Kathlamet** | Kathlamet | 1492 CE | 1 |
| **Katukina** | Katukina | 1492 CE | 1 |
| **Kaurna Pangkarra** | Kaurna Pangkarra | 1600 CE – 1800 CE | 6 |
| **Kauwets'a:ka** | Kauwets'a:ka | 1492 CE | 1 |
| **Kawahsu** | Kawahsu | 1530 CE – 1715 CE | 5 |
| **Kawaiisu** | Kawaiisu | 1492 CE | 1 |
| **Kawashkar** | Kawashkar | 1492 CE | 1 |
| **Kaxarari** | Kaxarari | 1492 CE | 1 |
| **Kaxixó** | Kaxixó | 1492 CE | 1 |
| **Kayambi** | Kayambi | 1492 CE | 1 |
| **Kaytej** | Kaytej | 1600 CE – 1815 CE | 7 |
| **Kañari** | Kañari | 1492 CE | 1 |
| **Kecoughtan** | Kecoughtan | 1492 CE | 1 |
| **Kelly Lake Metis Settlement Society** | Kelly Lake Metis Settlement Society | 1492 CE | 1 |
| **Kent** | Kent | 800 CE – 900 CE | 2 |
| **Ket Chonhab’ Kob’a (Chuj)** | Ket Chonhab’ Kob’a (Chuj) | 1492 CE | 1 |
| **Keyauwee** | Keyauwee | 1492 CE | 1 |
| **Khanty** | Khanty | 1530 CE | 1 |
| **Khundzi** | Khundzi | 1100 CE | 1 |
| **Khwarazmian dynasty** | Khwarazmian dynasty | 1200 CE | 1 |
| **KiKiallus** | KiKiallus | 1492 CE | 1 |
| **Kija** | Kija | 1600 CE – 1815 CE | 7 |
| **Kijkitat** | Kijkitat | 1530 CE – 1600 CE | 2 |
| **Kiliwa** | Kiliwa | 1492 CE | 1 |
| **Killaka Asanajaqi** | Killaka Asanajaqi | 1492 CE | 1 |
| **Kingdom of Antigonus** | Kingdom of Antigonus | 300 BCE | 1 |
| **Kingdom of Brazil** | Kingdom of Brazil | 1878 CE – 1900 CE | 3 |
| **Kingdom of Georgia** | Kingdom of Georgia | 1000 CE – 1100 CE | 2 |
| **Kingdom of Kapisa** | Kingdom of Kapisa | 700 CE | 1 |
| **Kingdom of Kassander** | Kingdom of Kassander | 300 BCE | 1 |
| **Kingdom of Lysimachus** | Kingdom of Lysimachus | 300 BCE | 1 |
| **Kingdom of Sind** | Kingdom of Sind | 700 CE | 1 |
| **Kingdom of Sukhotai** | Kingdom of Sukhotai | 1100 CE | 1 |
| **Kingdom of Zunbil** | Kingdom of Zunbil | 700 CE | 1 |
| **Kinja** | Kinja | 1492 CE | 1 |
| **Kiriri** | Kiriri | 1492 CE | 1 |
| **Kisapincha** | Kisapincha | 1492 CE | 1 |
| **Kiskiack** | Kiskiack | 1492 CE | 1 |
| **Kisêdjê** | Kisêdjê | 1492 CE | 1 |
| **Kitanemuk** | Kitanemuk | 1492 CE | 1 |
| **Kitasoo/Xai'xais** | Kitasoo/Xai'xais | 1492 CE | 1 |
| **Kitselas** | Kitselas | 1492 CE | 1 |
| **Kitsumkalum** | Kitsumkalum | 1492 CE | 1 |
| **Kitsé Cha’tnio (Chatino)** | Kitsé Cha’tnio (Chatino) | 1492 CE | 1 |
| **Kitu Kara** | Kitu Kara | 1492 CE | 1 |
| **Kizh** | Kizh | 1492 CE | 1 |
| **Kl'bal Pom Wintu** | Kl'bal Pom Wintu | 1492 CE | 1 |
| **Klachuris** | Klachuris | 1100 CE | 1 |
| **Klahoose** | Klahoose | 1492 CE | 1 |
| **Kluane** | Kluane | 1492 CE | 1 |
| **Knucati** | Knucati | 1530 CE – 1600 CE | 2 |
| **Koasati (Coushatta)** | Koasati (Coushatta) | 1492 CE | 1 |
| **Kogui/Kaggabba** | Kogui/Kaggabba | 1492 CE | 1 |
| **Kojomk'awi (Konkow)** | Kojomk'awi (Konkow) | 1492 CE | 1 |
| **Kokatha** | Kokatha | 1600 CE – 1815 CE | 7 |
| **Koknar** | Koknar | 1600 CE – 1800 CE | 6 |
| **Koko-bera** | Koko-bera | 1600 CE – 1800 CE | 6 |
| **Kokomini** | Kokomini | 1600 CE – 1800 CE | 6 |
| **Kokowarra** | Kokowarra | 1600 CE – 1800 CE | 6 |
| **Kolla** | Kolla | 1492 CE | 1 |
| **Kolla-Atacameño** | Kolla-Atacameño | 1492 CE | 1 |
| **Komi** | Komi | 1530 CE | 1 |
| **Konbudj** | Konbudj | 1600 CE – 1815 CE | 7 |
| **Kong** | Kong | 1900 CE | 1 |
| **Kong Empire** | Kong Empire | 1783 CE – 1880 CE | 4 |
| **Konnaack** | Konnaack | 1492 CE | 1 |
| **Konomihu** | Konomihu | 1492 CE | 1 |
| **Kooma** | Kooma | 1600 CE – 1800 CE | 6 |
| **Korubo** | Korubo | 1492 CE | 1 |
| **Koyukon** | Koyukon | 1492 CE | 1 |
| **Krenak** | Krenak | 1492 CE | 1 |
| **Krenyê** | Krenyê | 1492 CE | 1 |
| **Kriol** | Kriol | 1492 CE | 1 |
| **Kryvichs** | Kryvichs | 700 CE | 1 |
| **Krĩcatijê** | Krĩcatijê | 1492 CE | 1 |
| **Ktunaxa ɁamakɁis** | Ktunaxa ɁamakɁis | 1492 CE | 1 |
| **Kubéwa/Cubeo** | Kubéwa/Cubeo | 1492 CE | 1 |
| **Kukatj** | Kukatj | 1600 CE – 1800 CE | 6 |
| **Kukatja** | Kukatja | 1600 CE – 1815 CE | 7 |
| **Kuku-yalanji** | Kuku-yalanji | 1600 CE – 1800 CE | 6 |
| **Kulina Pano** | Kulina Pano | 1492 CE | 1 |
| **Kullilla** | Kullilla | 1600 CE – 1800 CE | 6 |
| **Kumeyaay** | Kumeyaay | 1492 CE | 1 |
| **Kundjey’mi** | Kundjey’mi | 1600 CE – 1815 CE | 7 |
| **Kunja** | Kunja | 1600 CE – 1800 CE | 6 |
| **Kunjen** | Kunjen | 1600 CE – 1800 CE | 6 |
| **Kureinji** | Kureinji | 1600 CE – 1800 CE | 6 |
| **Kuril Islands** | Kuril Islands | 1800 CE – 1815 CE | 2 |
| **Kurnai** | Kurnai | 1600 CE – 1800 CE | 6 |
| **Kurrama** | Kurrama | 1600 CE – 1815 CE | 7 |
| **Kurs** | Kurs | 1000 CE | 1 |
| **Kurtjar** | Kurtjar | 1600 CE – 1800 CE | 6 |
| **Kuruaya** | Kuruaya | 1492 CE | 1 |
| **Kurykans** | Kurykans | 500 CE | 1 |
| **Kurâ** | Kurâ | 1492 CE | 1 |
| **Kushites** | Kushites | 700 CE | 1 |
| **Kusso** | Kusso | 1492 CE | 1 |
| **Kuthant** | Kuthant | 1600 CE – 1800 CE | 6 |
| **Kuuku-yani** | Kuuku-yani | 1600 CE – 1800 CE | 6 |
| **Kuuku-ya’u** | Kuuku-ya’u | 1600 CE – 1800 CE | 6 |
| **Kuungkari** | Kuungkari | 1600 CE – 1800 CE | 6 |
| **Kuuvuan KaNianiq** | Kuuvuan KaNianiq | 1492 CE | 1 |
| **Kuwarra** | Kuwarra | 1600 CE – 1815 CE | 7 |
| **Kuwema** | Kuwema | 1600 CE – 1815 CE | 7 |
| **Kuyam** | Kuyam | 1492 CE | 1 |
| **Kuyani** | Kuyani | 1600 CE – 1800 CE | 6 |
| **Kwanlin Dün** | Kwanlin Dün | 1492 CE | 1 |
| **Kwantlen** | Kwantlen | 1492 CE | 1 |
| **Kwarezm** | Kwarezm | 700 CE | 1 |
| **Kwazá** | Kwazá | 1492 CE | 1 |
| **Kwikwetlem** | Kwikwetlem | 1492 CE | 1 |
| **Kwini** | Kwini | 1600 CE – 1815 CE | 7 |
| **Kyivan Rus** | Kyivan Rus | 900 CE – 1000 CE | 2 |
| **K’asho Got’ine** | K’asho Got’ine | 1492 CE | 1 |
| **K’áálǫ Got’ine** | K’áálǫ Got’ine | 1492 CE | 1 |
| **K’ómoks** | K’ómoks | 1492 CE | 1 |
| **Lagos** | Lagos | 1878 CE – 1900 CE | 3 |
| **Lagunero** | Lagunero | 1530 CE – 1600 CE | 2 |
| **Lahore** | Lahore | 1783 CE | 1 |
| **Lake Segozerskoye** | Lake Segozerskoye | 700 CE | 1 |
| **Lake Vygozero** | Lake Vygozero | 700 CE | 1 |
| **Laklanõ** | Laklanõ | 1492 CE | 1 |
| **Lamalama** | Lamalama | 1600 CE – 1800 CE | 6 |
| **Lambakannas** | Lambakannas | 900 CE | 1 |
| **Laotian states** | Laotian states | 1650 CE – 1715 CE | 3 |
| **Larrakia** | Larrakia | 1600 CE – 1815 CE | 7 |
| **Lassik** | Lassik | 1492 CE | 1 |
| **Latje Latje** | Latje Latje | 1600 CE – 1800 CE | 6 |
| **Leco** | Leco | 1492 CE | 1 |
| **Leks** | Leks | 1100 CE | 1 |
| **Lhaq’temish (Lummi)** | Lhaq’temish (Lummi) | 1492 CE | 1 |
| **Lheidli T'enneh** | Lheidli T'enneh | 1492 CE | 1 |
| **Lickanantay** | Lickanantay | 1492 CE | 1 |
| **Lil'wat** | Lil'wat | 1492 CE | 1 |
| **Limilngan** | Limilngan | 1600 CE – 1815 CE | 7 |
| **Lipi** | Lipi | 1492 CE | 1 |
| **Lippe-Detmold** | Lippe-Detmold | 1783 CE – 1815 CE | 3 |
| **Lopburi Kingdom** | Lopburi Kingdom | 1100 CE | 1 |
| **Louisiana** | Louisiana | 1715 CE | 1 |
| **Lozi** | Lozi | 1783 CE – 1900 CE | 8 |
| **Lucca** | Lucca | 1650 CE – 1815 CE | 6 |
| **Luckiamute** | Luckiamute | 1492 CE | 1 |
| **Luiseno** | Luiseno | 1530 CE – 1600 CE | 2 |
| **Luisiana** | Luisiana | 1783 CE – 1800 CE | 2 |
| **Lule** | Lule | 1492 CE | 1 |
| **Lumbee** | Lumbee | 1492 CE | 1 |
| **Lumnanas** | Lumnanas | 1492 CE | 1 |
| **Luritja** | Luritja | 1600 CE – 1815 CE | 7 |
| **Luthigh** | Luthigh | 1600 CE – 1800 CE | 6 |
| **Luva** | Luva | 1279 CE – 1300 CE | 2 |
| **Lübeck** | Lübeck | 1715 CE – 1815 CE | 4 |
| **Macorix** | Macorix | 1492 CE | 1 |
| **Macuxi** | Macuxi | 1492 CE | 1 |
| **Madi Madi** | Madi Madi | 1600 CE – 1800 CE | 6 |
| **Madija** | Madija | 1492 CE | 1 |
| **Madras** | Madras | 1783 CE – 1800 CE | 2 |
| **Magyars** | Magyars | 700 CE – 1000 CE | 4 |
| **Mahican** | Mahican | 1530 CE – 1600 CE | 2 |
| **Mahra** | Mahra | 1530 CE – 1700 CE | 4 |
| **Mahratta states** | Mahratta states | 1783 CE | 1 |
| **Maiawali** | Maiawali | 1600 CE – 1800 CE | 6 |
| **Maijuna** | Maijuna | 1492 CE | 1 |
| **Maiou** | Maiou | 1530 CE – 1715 CE | 5 |
| **Makurap** | Makurap | 1492 CE | 1 |
| **Maká** | Maká | 1492 CE | 1 |
| **Malabar** | Malabar | 1783 CE – 1800 CE | 2 |
| **Malacatos** | Malacatos | 1492 CE | 1 |
| **Malagasy** | Malagasy | 800 CE – 900 CE | 2 |
| **Malak malak** | Malak malak | 1600 CE – 1815 CE | 7 |
| **Malkana** | Malkana | 1600 CE – 1815 CE | 7 |
| **Malyangaba** | Malyangaba | 1600 CE – 1800 CE | 6 |
| **Malécu** | Malécu | 1492 CE | 1 |
| **Manahoac** | Manahoac | 1492 CE | 1 |
| **Mandatory Palestine (GB)** | Mandatory Palestine (GB) | 1920 CE – 1938 CE | 3 |
| **Mandes** | Mandes | 900 CE | 1 |
| **Mandjindja** | Mandjindja | 1600 CE – 1815 CE | 7 |
| **Mangala** | Mangala | 1600 CE – 1815 CE | 7 |
| **Mangarayi** | Mangarayi | 1600 CE – 1815 CE | 7 |
| **Manoki** | Manoki | 1492 CE | 1 |
| **Mara** | Mara | 1600 CE – 1800 CE | 6 |
| **Maranunggu** | Maranunggu | 1600 CE – 1815 CE | 7 |
| **Maratines** | Maratines | 1530 CE – 1600 CE | 2 |
| **Mardu** | Mardu | 1600 CE – 1815 CE | 7 |
| **Margany** | Margany | 1600 CE – 1800 CE | 6 |
| **Marramaninjsji** | Marramaninjsji | 1600 CE – 1815 CE | 7 |
| **Marringarr** | Marringarr | 1600 CE – 1815 CE | 7 |
| **Marrithiyel** | Marrithiyel | 1600 CE – 1815 CE | 7 |
| **Martuthunira** | Martuthunira | 1600 CE – 1815 CE | 7 |
| **Marubo** | Marubo | 1492 CE | 1 |
| **Mascat** | Mascat | 1 BCE | 1 |
| **Mashco Piro** | Mashco Piro | 1492 CE | 1 |
| **Maskat** | Maskat | 1100 CE | 1 |
| **Massa** | Massa | 1650 CE – 1815 CE | 6 |
| **Massa-adchu-es-et (Massachusett)** | Massa-adchu-es-et (Massachusett) | 1492 CE | 1 |
| **Massachusett** | Massachusett | 1530 CE – 1600 CE | 2 |
| **Massachusetts Bay** | Massachusetts Bay | 1650 CE – 1700 CE | 2 |
| **Massacoes** | Massacoes | 1492 CE | 1 |
| **Massawomeck** | Massawomeck | 1492 CE | 1 |
| **Matagalpa/Cacaopera** | Matagalpa/Cacaopera | 1492 CE | 1 |
| **Matawai** | Matawai | 1492 CE | 1 |
| **Matecumbe** | Matecumbe | 1492 CE | 1 |
| **Matetamãe/Cinta Larga** | Matetamãe/Cinta Larga | 1492 CE | 1 |
| **Matlatzinco/Tlahuica/Ocuiltec** | Matlatzinco/Tlahuica/Ocuiltec | 1492 CE | 1 |
| **Matlatzinco/matlatzinteca** | Matlatzinco/matlatzinteca | 1492 CE | 1 |
| **Matses (Matis)** | Matses (Matis) | 1492 CE | 1 |
| **Matsigenka** | Matsigenka | 1492 CE | 1 |
| **Matsés (Mayoruna)** | Matsés (Mayoruna) | 1492 CE | 1 |
| **Mattamuskeet** | Mattamuskeet | 1492 CE | 1 |
| **Mattole** | Mattole | 1492 CE | 1 |
| **Maung** | Maung | 1600 CE – 1815 CE | 7 |
| **Mauri** | Mauri | 700 CE | 1 |
| **Maxakalí** | Maxakalí | 1492 CE | 1 |
| **Mayi-Kulan** | Mayi-Kulan | 1600 CE – 1800 CE | 6 |
| **Mayi-Kutuna** | Mayi-Kutuna | 1600 CE – 1800 CE | 6 |
| **Mayi-Thakurti** | Mayi-Thakurti | 1600 CE – 1800 CE | 6 |
| **Mazahua** | Mazahua | 1492 CE | 1 |
| **Mazun** | Mazun | 600 CE – 700 CE | 2 |
| **Mbabaram** | Mbabaram | 1600 CE – 1800 CE | 6 |
| **Mbailundu** | Mbailundu | 1878 CE – 1900 CE | 3 |
| **Mbara** | Mbara | 1600 CE – 1800 CE | 6 |
| **Mbeiwum** | Mbeiwum | 1600 CE – 1800 CE | 6 |
| **Mbukarla** | Mbukarla | 1600 CE – 1815 CE | 7 |
| **Mbya** | Mbya | 1492 CE | 1 |
| **Mdewakanton** | Mdewakanton | 1492 CE | 1 |
| **Mechoopda** | Mechoopda | 1492 CE | 1 |
| **Mecklenburg-Schwerin** | Mecklenburg-Schwerin | 1783 CE – 1815 CE | 3 |
| **Mecklenburg-Strelitz** | Mecklenburg-Strelitz | 1783 CE – 1815 CE | 3 |
| **Meherrin** | Meherrin | 1492 CE | 1 |
| **Mehin** | Mehin | 1492 CE | 1 |
| **Mehinako** | Mehinako | 1492 CE | 1 |
| **Menomini** | Menomini | 1530 CE – 1715 CE | 5 |
| **Mercia** | Mercia | 800 CE – 900 CE | 2 |
| **Merinides** | Merinides | 1279 CE | 1 |
| **Meru** | Meru | 1600 CE – 1800 CE | 6 |
| **Mesoamerican city-states and chiefdoms** | Mesoamerican city-states and chiefdoms | 800 CE – 1200 CE | 5 |
| **Mesopotamia (GB)** | Mesopotamia (GB) | 1920 CE – 1938 CE | 3 |
| **Methow** | Methow | 1492 CE | 1 |
| **Meškwahki·aša·hina (Fox)** | Meškwahki·aša·hina (Fox) | 1492 CE | 1 |
| **Me̱'pha̱a̱ (Tlapaneco)** | Me̱'pha̱a̱ (Tlapaneco) | 1492 CE | 1 |
| **Miccosukee** | Miccosukee | 1492 CE | 1 |
| **Michif Piyii (Métis)** | Michif Piyii (Métis) | 1492 CE | 1 |
| **Micqanaqa’n** | Micqanaqa’n | 1492 CE | 1 |
| **Middag Kingdom** | Middag Kingdom | 1650 CE – 1700 CE | 2 |
| **Miller** | Miller | 100 BCE – 500 CE | 7 |
| **Mirambo Unyanyembe Ukimbu** | Mirambo Unyanyembe Ukimbu | 1878 CE – 1900 CE | 3 |
| **Mirning** | Mirning | 1600 CE – 1815 CE | 7 |
| **Misak** | Misak | 1492 CE | 1 |
| **Mississauga** | Mississauga | 1492 CE | 1 |
| **Mississaugas of the Credit First Nation** | Mississaugas of the Credit First Nation | 1492 CE | 1 |
| **Missouri** | Missouri | 1530 CE – 1715 CE | 5 |
| **Mithaka** | Mithaka | 1600 CE – 1800 CE | 6 |
| **Miwa** | Miwa | 1600 CE – 1815 CE | 7 |
| **Miwkoʔ Waaliʔ** | Miwkoʔ Waaliʔ | 1492 CE | 1 |
| **Miyan** | Miyan | 1600 CE – 1800 CE | 6 |
| **Mnicoujou** | Mnicoujou | 1492 CE | 1 |
| **Mochó** | Mochó | 1492 CE | 1 |
| **Modena** | Modena | 1650 CE – 1815 CE | 6 |
| **Mohican** | Mohican | 1492 CE | 1 |
| **Mojeño** | Mojeño | 1492 CE | 1 |
| **Mokaná** | Mokaná | 1492 CE | 1 |
| **Molalla** | Molalla | 1492 CE | 1 |
| **Mon States** | Mon States | 900 CE | 1 |
| **Mon state** | Mon state | 800 CE – 1200 CE | 3 |
| **Monacan** | Monacan | 1492 CE | 1 |
| **Moneton** | Moneton | 1492 CE | 1 |
| **Monqui** | Monqui | 1492 CE | 1 |
| **Montana** | Montana | 1530 CE – 1600 CE | 2 |
| **Mopan** | Mopan | 1492 CE | 1 |
| **Moqoit** | Moqoit | 1492 CE | 1 |
| **Moratok** | Moratok | 1492 CE | 1 |
| **Moraughtacund** | Moraughtacund | 1492 CE | 1 |
| **Mordvinians** | Mordvinians | 800 CE | 1 |
| **Moregena** | Moregena | 1492 CE | 1 |
| **Moses/Columbia** | Moses/Columbia | 1492 CE | 1 |
| **Mosetén** | Mosetén | 1492 CE | 1 |
| **Mosquito Coast** | Mosquito Coast | 1715 CE | 1 |
| **Mount Tabor Indian Community** | Mount Tabor Indian Community | 1492 CE | 1 |
| **Mountain Métis** | Mountain Métis | 1492 CE | 1 |
| **Movima** | Movima | 1492 CE | 1 |
| **Mpalitjanh** | Mpalitjanh | 1600 CE – 1800 CE | 6 |
| **Muckleshoot** | Muckleshoot | 1492 CE | 1 |
| **Mudburra** | Mudburra | 1600 CE – 1815 CE | 7 |
| **Muina Murui / Murui-Muinanɨ** | Muina Murui / Murui-Muinanɨ | 1492 CE | 1 |
| **Multan** | Multan | 900 CE – 1783 CE | 2 |
| **Multnomah** | Multnomah | 1492 CE | 1 |
| **Muniche** | Muniche | 1492 CE | 1 |
| **Murrinh-patha** | Murrinh-patha | 1600 CE – 1815 CE | 7 |
| **Musgamagw Dzawada'enuxw** | Musgamagw Dzawada'enuxw | 1492 CE | 1 |
| **Muskogee** | Muskogee | 1530 CE – 1600 CE | 2 |
| **Muteamasa (Karapanã)** | Muteamasa (Karapanã) | 1492 CE | 1 |
| **Mutumui** | Mutumui | 1600 CE – 1800 CE | 6 |
| **Muwekma** | Muwekma | 1492 CE | 1 |
| **Myaamia** | Myaamia | 1492 CE | 1 |
| **Mánekenk/Haush** | Mánekenk/Haush | 1492 CE | 1 |
| **NWT Métis Nation** | NWT Métis Nation | 1492 CE | 1 |
| **Na-cho Nyak Dun** | Na-cho Nyak Dun | 1492 CE | 1 |
| **Nabatean Kingdom** | Nabatean Kingdom | 300 BCE – 100 CE | 5 |
| **Nacotchtank (Anacostan)** | Nacotchtank (Anacostan) | 1492 CE | 1 |
| **Nadleh Whut'en** | Nadleh Whut'en | 1492 CE | 1 |
| **Nadöb** | Nadöb | 1492 CE | 1 |
| **Nakako** | Nakako | 1600 CE – 1815 CE | 7 |
| **Nakara** | Nakara | 1600 CE – 1800 CE | 6 |
| **Namazga** | Namazga | 5 000 BCE – 2 000 BCE | 4 |
| **Nambikwara** | Nambikwara | 1492 CE | 1 |
| **Nan Chao** | Nan Chao | 800 CE – 1200 CE | 5 |
| **Nan-Zhao** | Nan-Zhao | 700 CE | 1 |
| **Nana** | Nana | 1600 CE – 1815 CE | 7 |
| **Nandtaughtacund** | Nandtaughtacund | 1492 CE | 1 |
| **Naniaho** | Naniaho | 1530 CE – 1600 CE | 2 |
| **Nanrantsouak** | Nanrantsouak | 1492 CE | 1 |
| **Nansemond** | Nansemond | 1492 CE | 1 |
| **Nanti** | Nanti | 1492 CE | 1 |
| **Nanzan** | Nanzan | 1400 CE | 1 |
| **Nari Nari** | Nari Nari | 1600 CE – 1800 CE | 6 |
| **Nasa** | Nasa | 1492 CE | 1 |
| **Nassau** | Nassau | 1815 CE | 1 |
| **Natabuela** | Natabuela | 1492 CE | 1 |
| **Natal** | Natal | 1878 CE – 1900 CE | 3 |
| **Natchez** | Natchez | 1492 CE – 1700 CE | 6 |
| **Natchitoches** | Natchitoches | 1492 CE | 1 |
| **Nauset** | Nauset | 1492 CE | 1 |
| **Navaho** | Navaho | 1530 CE – 1600 CE | 2 |
| **Nawa** | Nawa | 1492 CE | 1 |
| **Nawu** | Nawu | 1600 CE – 1800 CE | 6 |
| **Nayarit** | Nayarit | 1530 CE – 1600 CE | 2 |
| **Ndebele** | Ndebele | 1878 CE – 1900 CE | 3 |
| **Nehalem** | Nehalem | 1492 CE | 1 |
| **Nejd** | Nejd | 1783 CE – 1815 CE | 3 |
| **Nemay** | Nemay | 5 000 BCE | 1 |
| **Nenets** | Nenets | 1530 CE | 1 |
| **Nespelem** | Nespelem | 1492 CE | 1 |
| **Nestucca** | Nestucca | 1492 CE | 1 |
| **Neusiok** | Neusiok | 1492 CE | 1 |
| **Neustria** | Neustria | 600 CE – 700 CE | 2 |
| **New Amsterdam** | New Amsterdam | 1650 CE – 1700 CE | 2 |
| **New River Shasta** | New River Shasta | 1492 CE | 1 |
| **Ngaanyatjarra** | Ngaanyatjarra | 1600 CE – 1815 CE | 7 |
| **Ngadjuri** | Ngadjuri | 1600 CE – 1800 CE | 6 |
| **Ngalakan** | Ngalakan | 1600 CE – 1815 CE | 7 |
| **Ngalawangka** | Ngalawangka | 1600 CE – 1815 CE | 7 |
| **Ngalea** | Ngalea | 1600 CE – 1815 CE | 7 |
| **Ngaliwuru** | Ngaliwuru | 1600 CE – 1815 CE | 7 |
| **Ngalkbun** | Ngalkbun | 1600 CE – 1815 CE | 7 |
| **Ngambri** | Ngambri | 1600 CE – 1800 CE | 6 |
| **Ngamini** | Ngamini | 1600 CE – 1800 CE | 6 |
| **Nganasan** | Nganasan | 1530 CE – 1600 CE | 2 |
| **Ngandi** | Ngandi | 1600 CE – 1800 CE | 6 |
| **Ngandji** | Ngandji | 1600 CE – 1800 CE | 6 |
| **Nganyaywana** | Nganyaywana | 1600 CE – 1800 CE | 6 |
| **Ngan’gikurunggurr** | Ngan’gikurunggurr | 1600 CE – 1815 CE | 7 |
| **Ngan’giwumirri** | Ngan’giwumirri | 1600 CE – 1815 CE | 7 |
| **Ngarabal** | Ngarabal | 1600 CE – 1800 CE | 6 |
| **Ngargad** | Ngargad | 1600 CE – 1800 CE | 6 |
| **Ngarigo** | Ngarigo | 1600 CE – 1800 CE | 6 |
| **Ngarinman** | Ngarinman | 1600 CE – 1815 CE | 7 |
| **Ngarinyin** | Ngarinyin | 1600 CE – 1815 CE | 7 |
| **Ngarla** | Ngarla | 1600 CE – 1815 CE | 7 |
| **Ngarluma** | Ngarluma | 1600 CE – 1815 CE | 7 |
| **Ngarrindjeri** | Ngarrindjeri | 1600 CE – 1800 CE | 6 |
| **Ngarti** | Ngarti | 1600 CE – 1815 CE | 7 |
| **Ngatatjara** | Ngatatjara | 1600 CE – 1815 CE | 7 |
| **Ngatjumay** | Ngatjumay | 1600 CE – 1815 CE | 7 |
| **Ngawun** | Ngawun | 1600 CE – 1800 CE | 6 |
| **Ngi-iva (Popoloca)** | Ngi-iva (Popoloca) | 1492 CE | 1 |
| **Ngombur** | Ngombur | 1600 CE – 1815 CE | 7 |
| **Nguburinji** | Nguburinji | 1600 CE – 1800 CE | 6 |
| **Ngumbarl** | Ngumbarl | 1600 CE – 1815 CE | 7 |
| **Nguni** | Nguni | 1878 CE – 1900 CE | 3 |
| **Nguri** | Nguri | 1600 CE – 1800 CE | 6 |
| **Ngurraiillam** | Ngurraiillam | 1600 CE – 1800 CE | 6 |
| **Ngwato** | Ngwato | 1878 CE – 1900 CE | 3 |
| **Nhanta** | Nhanta | 1600 CE – 1815 CE | 7 |
| **Nhuwala** | Nhuwala | 1600 CE – 1815 CE | 7 |
| **Nimanburu** | Nimanburu | 1600 CE – 1815 CE | 7 |
| **Ninticoy** | Ninticoy | 1530 CE – 1600 CE | 2 |
| **Nipmuc** | Nipmuc | 1492 CE | 1 |
| **Nisenan** | Nisenan | 1492 CE | 1 |
| **Nisg̱a'a** | Nisg̱a'a | 1492 CE | 1 |
| **Nisqually** | Nisqually | 1492 CE | 1 |
| **Nitaskinan (Atikamekw / Nehirowisi Aski)** | Nitaskinan (Atikamekw / Nehirowisi Aski) | 1492 CE | 1 |
| **Nivaclé** | Nivaclé | 1492 CE | 1 |
| **Niúachi** | Niúachi | 1492 CE | 1 |
| **Nkore** | Nkore | 1815 CE | 1 |
| **No'iria** | No'iria | 1492 CE | 1 |
| **Nom Sus Wintu** | Nom Sus Wintu | 1492 CE | 1 |
| **Nom Ti Pom Wintu** | Nom Ti Pom Wintu | 1492 CE | 1 |
| **Nomatsigenga** | Nomatsigenga | 1492 CE | 1 |
| **Nomlaki** | Nomlaki | 1492 CE | 1 |
| **Nongatl** | Nongatl | 1492 CE | 1 |
| **Nonuya** | Nonuya | 1492 CE | 1 |
| **Nor Rel Muk Wintu** | Nor Rel Muk Wintu | 1492 CE | 1 |
| **Northern Liang** | Northern Liang | 400 CE | 1 |
| **Northern Territory (UK)** | Northern Territory (UK) | 1878 CE – 1900 CE | 3 |
| **Northern Yuki** | Northern Yuki | 1492 CE | 1 |
| **Northmen** | Northmen | 800 CE | 2 |
| **Northumbria** | Northumbria | 800 CE – 900 CE | 2 |
| **Nukini** | Nukini | 1492 CE | 1 |
| **Nukunu** | Nukunu | 1600 CE – 1800 CE | 6 |
| **Nunatsiavut** | Nunatsiavut | 1492 CE | 1 |
| **NunatuKavut** | NunatuKavut | 1492 CE | 1 |
| **Nunavik** | Nunavik | 1492 CE | 1 |
| **Nungali** | Nungali | 1600 CE – 1815 CE | 7 |
| **Nunggubuyu** | Nunggubuyu | 1600 CE – 1800 CE | 6 |
| **Nuwhaha** | Nuwhaha | 1492 CE | 1 |
| **Nuxwsa'7aq (Nooksack)** | Nuxwsa'7aq (Nooksack) | 1492 CE | 1 |
| **Nyaki-nyaki** | Nyaki-nyaki | 1600 CE – 1815 CE | 7 |
| **Nyamal** | Nyamal | 1600 CE – 1815 CE | 7 |
| **Nyanganyatjara** | Nyanganyatjara | 1600 CE – 1815 CE | 7 |
| **Nyangumarda** | Nyangumarda | 1600 CE – 1815 CE | 7 |
| **Nyawaygi** | Nyawaygi | 1600 CE – 1800 CE | 6 |
| **Nyikina** | Nyikina | 1600 CE – 1815 CE | 7 |
| **Nyul Nyul** | Nyul Nyul | 1600 CE – 1815 CE | 7 |
| **Nyvukagmit (Naukan)** | Nyvukagmit (Naukan) | 1492 CE | 1 |
| **Nükak Makü** | Nükak Makü | 1492 CE | 1 |
| **Nüwüwü (Chemehuevi)** | Nüwüwü (Chemehuevi) | 1492 CE | 1 |
| **Nłeʔkepmx Tmíxʷ (Nlaka'pamux)** | Nłeʔkepmx Tmíxʷ (Nlaka'pamux) | 1492 CE | 1 |
| **O'odham Jeweḍ** | O'odham Jeweḍ | 1492 CE | 1 |
| **O-ga-xpa Ma-zhoⁿ (O-ga-xpa)** | O-ga-xpa Ma-zhoⁿ (O-ga-xpa) | 1492 CE | 1 |
| **Obispeño** | Obispeño | 1492 CE | 1 |
| **Obiwa** | Obiwa | 1530 CE – 1700 CE | 4 |
| **Occaneechi** | Occaneechi | 1492 CE | 1 |
| **Occohannock** | Occohannock | 1492 CE | 1 |
| **Ocloya** | Ocloya | 1492 CE | 1 |
| **Odawa** | Odawa | 1492 CE | 1 |
| **Ofaié** | Ofaié | 1492 CE | 1 |
| **Oglala** | Oglala | 1492 CE | 1 |
| **Ohlone** | Ohlone | 1492 CE | 1 |
| **Okwanuchu** | Okwanuchu | 1492 CE | 1 |
| **Oldenburg** | Oldenburg | 1715 CE – 1815 CE | 7 |
| **Omaguaca** | Omaguaca | 1492 CE | 1 |
| **Onawmanient** | Onawmanient | 1492 CE | 1 |
| **Oohenumpa** | Oohenumpa | 1492 CE | 1 |
| **Opelousas** | Opelousas | 1492 CE | 1 |
| **Opiscopank** | Opiscopank | 1492 CE | 1 |
| **Opobo** | Opobo | 1878 CE – 1900 CE | 3 |
| **Orange Free State** | Orange Free State | 1878 CE – 1900 CE | 3 |
| **Otavalo** | Otavalo | 1492 CE | 1 |
| **Other Rus Principalities** | Other Rus Principalities | 1200 CE | 1 |
| **Oto** | Oto | 1530 CE – 1715 CE | 5 |
| **Otomies** | Otomies | 1530 CE – 1600 CE | 2 |
| **Oudh** | Oudh | 1783 CE – 1815 CE | 3 |
| **Ovimbundu** | Ovimbundu | 1878 CE – 1900 CE | 3 |
| **Oxus** | Oxus | 2 000 BCE | 1 |
| **Očhéthi Šakówiŋ** | Očhéthi Šakówiŋ | 1492 CE | 1 |
| **O’ de püt/Angpøn (Zoque)** | O’ de püt/Angpøn (Zoque) | 1492 CE | 1 |
| **Pacahuara** | Pacahuara | 1492 CE | 1 |
| **Pacamoro** | Pacamoro | 1492 CE | 1 |
| **Pacaxes** | Pacaxes | 1492 CE | 1 |
| **Pacheedaht** | Pacheedaht | 1492 CE | 1 |
| **Paipai (Akwa'ala)** | Paipai (Akwa'ala) | 1492 CE | 1 |
| **Pakajaqi** | Pakajaqi | 1492 CE | 1 |
| **Palouse** | Palouse | 1492 CE | 1 |
| **Paltas** | Paltas | 1492 CE | 1 |
| **Palyku** | Palyku | 1600 CE – 1815 CE | 7 |
| **Pamoari** | Pamoari | 1492 CE | 1 |
| **Panará** | Panará | 1492 CE | 1 |
| **Pankararu** | Pankararu | 1492 CE | 1 |
| **Pankará** | Pankará | 1492 CE | 1 |
| **Panzaleo** | Panzaleo | 1492 CE | 1 |
| **Papago** | Papago | 1530 CE – 1600 CE | 2 |
| **Paramas** | Paramas | 1100 CE | 1 |
| **Parikwene** | Parikwene | 1492 CE | 1 |
| **Parkatejê** | Parkatejê | 1492 CE | 1 |
| **Parma** | Parma | 1650 CE – 1815 CE | 6 |
| **Pascua Yaqui** | Pascua Yaqui | 1492 CE | 1 |
| **Patamona/Ingarikó** | Patamona/Ingarikó | 1492 CE | 1 |
| **Patawomeck** | Patawomeck | 1492 CE | 1 |
| **Pataxó** | Pataxó | 1492 CE | 1 |
| **Pataxó Hã-Hã-Hãe** | Pataxó Hã-Hã-Hãe | 1492 CE | 1 |
| **Patwin** | Patwin | 1492 CE – 1600 CE | 3 |
| **Paugussett** | Paugussett | 1492 CE | 1 |
| **Pawtucket** | Pawtucket | 1492 CE | 1 |
| **Payungu** | Payungu | 1600 CE – 1815 CE | 7 |
| **Pech** | Pech | 1492 CE | 1 |
| **Pee Dee** | Pee Dee | 1492 CE | 1 |
| **Pemón** | Pemón | 1492 CE | 1 |
| **Pennacook** | Pennacook | 1492 CE – 1600 CE | 3 |
| **Pentucket** | Pentucket | 1492 CE | 1 |
| **Peoria** | Peoria | 1492 CE | 1 |
| **Pequawket** | Pequawket | 1492 CE | 1 |
| **Pequonnock** | Pequonnock | 1492 CE | 1 |
| **Peramangk** | Peramangk | 1600 CE – 1800 CE | 6 |
| **Pericú** | Pericú | 1492 CE | 1 |
| **Permians** | Permians | 800 CE | 1 |
| **Perquimans** | Perquimans | 1492 CE | 1 |
| **Pescado** | Pescado | 1492 CE | 1 |
| **Peshemegs** | Peshemegs | 1000 CE | 2 |
| **Petun** | Petun | 1492 CE | 1 |
| **Pewa** | Pewa | 1530 CE – 1600 CE | 2 |
| **Pijao** | Pijao | 1492 CE | 1 |
| **Pilagal'ek** | Pilagal'ek | 1492 CE | 1 |
| **Pirlatapa** | Pirlatapa | 1600 CE – 1800 CE | 6 |
| **Pisones** | Pisones | 1530 CE – 1600 CE | 2 |
| **Pissaseck** | Pissaseck | 1492 CE | 1 |
| **Pit River** | Pit River | 1492 CE | 1 |
| **Pitjantjatjara** | Pitjantjatjara | 1600 CE – 1815 CE | 7 |
| **Pitta-Pitta** | Pitta-Pitta | 1600 CE – 1800 CE | 6 |
| **Pocomoke** | Pocomoke | 1492 CE | 1 |
| **Pocumtuc** | Pocumtuc | 1492 CE | 1 |
| **Pocumtuk** | Pocumtuk | 1530 CE – 1600 CE | 2 |
| **Podunks** | Podunks | 1492 CE | 1 |
| **Point Peninsula** | Point Peninsula | 100 BCE – 500 CE | 7 |
| **Pokanoket** | Pokanoket | 1492 CE | 1 |
| **Polanes** | Polanes | 700 CE | 1 |
| **Polyanians** | Polyanians | 900 CE | 1 |
| **Pomerania** | Pomerania | 1000 CE | 1 |
| **Pontremoli** | Pontremoli | 1650 CE – 1815 CE | 6 |
| **Popeloutchom (Amah Mutsun)** | Popeloutchom (Amah Mutsun) | 1492 CE | 1 |
| **Popoluca (mixe-zoque)** | Popoluca (mixe-zoque) | 1492 CE | 1 |
| **Popti'** | Popti' | 1492 CE | 1 |
| **Popũkare** | Popũkare | 1492 CE | 1 |
| **Poqomam** | Poqomam | 1492 CE | 1 |
| **Poqomchi’** | Poqomchi’ | 1492 CE | 1 |
| **Poquonook** | Poquonook | 1492 CE | 1 |
| **Porter** | Porter | 100 BCE – 500 CE | 7 |
| **Portuguese Brazil** | Portuguese Brazil | 1650 CE – 1700 CE | 2 |
| **Portuguese East Africa** | Portuguese East Africa | 1650 CE – 1900 CE | 7 |
| **Poteskeet** | Poteskeet | 1492 CE | 1 |
| **Principality of Galicia-Volhynia** | Principality of Galicia-Volhynia | 1200 CE | 1 |
| **Principality of Kyiv** | Principality of Kyiv | 1200 CE | 1 |
| **Principality of Polotsk** | Principality of Polotsk | 1100 CE | 1 |
| **Proto-Slavs** | Proto-Slavs | 700 CE | 1 |
| **Puinave** | Puinave | 1492 CE | 1 |
| **Punuba** | Punuba | 1600 CE – 1815 CE | 7 |
| **Purduna** | Purduna | 1600 CE – 1815 CE | 7 |
| **Purehno** | Purehno | 1492 CE | 1 |
| **Puri** | Puri | 1492 CE | 1 |
| **Puruborá** | Puruborá | 1492 CE | 1 |
| **Puruwá** | Puruwá | 1492 CE | 1 |
| **Puyallup** | Puyallup | 1492 CE | 1 |
| **Puyanawa** | Puyanawa | 1492 CE | 1 |
| **Pykopcatejê** | Pykopcatejê | 1492 CE | 1 |
| **Q'anjob'al** | Q'anjob'al | 1492 CE | 1 |
| **Q'ero** | Q'ero | 1492 CE | 1 |
| **Qayqayt** | Qayqayt | 1492 CE | 1 |
| **Qhara Qhara** | Qhara Qhara | 1492 CE | 1 |
| **Qom** | Qom | 1492 CE | 1 |
| **Quatsino** | Quatsino | 1492 CE | 1 |
| **Quazaq Khanate** | Quazaq Khanate | 1530 CE – 1715 CE | 5 |
| **Quebec** | Quebec | 1783 CE – 1800 CE | 2 |
| **Quechua** | Quechua | 1492 CE | 1 |
| **Queensland (UK)** | Queensland (UK) | 1878 CE – 1900 CE | 3 |
| **Queets** | Queets | 1492 CE | 1 |
| **Quillacinga** | Quillacinga | 1492 CE | 1 |
| **Quiyoughcohannock** | Quiyoughcohannock | 1492 CE | 1 |
| **Quw'utsun** | Quw'utsun | 1492 CE | 1 |
| **Qwû'lh-hwai-pûm (Klickitat)** | Qwû'lh-hwai-pûm (Klickitat) | 1492 CE | 1 |
| **Rabih az-Zubayr** | Rabih az-Zubayr | 1878 CE – 1880 CE | 2 |
| **Rajastan** | Rajastan | 1492 CE – 1500 CE | 2 |
| **Rama** | Rama | 1492 CE | 1 |
| **Ramaytush** | Ramaytush | 1492 CE | 1 |
| **Rankülche** | Rankülche | 1492 CE | 1 |
| **Rappahannock** | Rappahannock | 1492 CE | 1 |
| **Rarámuri (Tarahumara-Guarijio)** | Rarámuri (Tarahumara-Guarijio) | 1492 CE | 1 |
| **Rayados (Borrados)** | Rayados (Borrados) | 1492 CE | 1 |
| **Raška** | Raška | 1300 CE | 1 |
| **Rembarnga** | Rembarnga | 1600 CE – 1815 CE | 7 |
| **Republic of Kraków** | Republic of Kraków | 1815 CE | 1 |
| **Resígaro** | Resígaro | 1492 CE | 1 |
| **Rift Valley States** | Rift Valley States | 1783 CE – 1800 CE | 2 |
| **Rikbaktsá** | Rikbaktsá | 1492 CE | 1 |
| **Rio De Oro** | Rio De Oro | 1914 CE – 1938 CE | 4 |
| **Riro** | Riro | 1530 CE – 1600 CE | 2 |
| **Roanoke** | Roanoke | 1492 CE | 1 |
| **Ruanruan** | Ruanruan | 400 CE – 500 CE | 2 |
| **Rumsen** | Rumsen | 1492 CE | 1 |
| **Runixa Ngiigua (Chocho)** | Runixa Ngiigua (Chocho) | 1492 CE | 1 |
| **Rupert's Land** | Rupert's Land | 1715 CE – 1800 CE | 3 |
| **Rus' Khaganate** | Rus' Khaganate | 800 CE | 1 |
| **S'Klallam** | S'Klallam | 1492 CE | 1 |
| **Saar Protectorate** | Saar Protectorate | 1945 CE | 1 |
| **Sabirs** | Sabirs | 700 CE | 1 |
| **Sacapultec** | Sacapultec | 1492 CE | 1 |
| **Sahtú Got’ine** | Sahtú Got’ine | 1492 CE | 1 |
| **Saipan** | Saipan | 1938 CE | 1 |
| **Sakhalin (RU)** | Sakhalin (RU) | 1914 CE | 1 |
| **Sakurabiat** | Sakurabiat | 1492 CE | 1 |
| **Salasaka** | Salasaka | 1492 CE | 1 |
| **Salinan** | Salinan | 1492 CE | 1 |
| **Salmon River** | Salmon River | 1492 CE | 1 |
| **Saluda** | Saluda | 1492 CE | 1 |
| **Samoyèdes** | Samoyèdes | 700 CE | 1 |
| **Sana** | Sana | 1492 CE | 1 |
| **Sanapaná** | Sanapaná | 1492 CE | 1 |
| **Sanavirones** | Sanavirones | 1492 CE | 1 |
| **Santee** | Santee | 1492 CE – 1700 CE | 5 |
| **Santiam** | Santiam | 1492 CE | 1 |
| **Sapara** | Sapara | 1492 CE | 1 |
| **Sappony** | Sappony | 1492 CE | 1 |
| **Saraguro** | Saraguro | 1492 CE | 1 |
| **Sataré-Mawé** | Sataré-Mawé | 1492 CE | 1 |
| **Saugeen Complex** | Saugeen Complex | 100 BCE – 500 CE | 7 |
| **Saunan** | Saunan | 1530 CE – 1600 CE | 2 |
| **Saura** | Saura | 1492 CE | 1 |
| **Saylan** | Saylan | 1530 CE – 1600 CE | 2 |
| **Schaumburg-Lippe** | Schaumburg-Lippe | 1783 CE – 1815 CE | 3 |
| **Schitsu’umsh (Coeur d’Alene)** | Schitsu’umsh (Coeur d’Alene) | 1492 CE | 1 |
| **Schleswig** | Schleswig | 1815 CE | 1 |
| **Secotan** | Secotan | 1492 CE | 1 |
| **Segu** | Segu | 1715 CE – 1800 CE | 3 |
| **Sekakawon** | Sekakawon | 1492 CE | 1 |
| **Semiahmoo** | Semiahmoo | 1492 CE | 1 |
| **Semites** | Semites | 4 000 BCE – 2 000 BCE | 3 |
| **Senas** | Senas | 1000 CE – 1100 CE | 2 |
| **Serano** | Serano | 1530 CE – 1715 CE | 5 |
| **Severians** | Severians | 700 CE | 1 |
| **Sewee** | Sewee | 1492 CE | 1 |
| **Shakori** | Shakori | 1492 CE | 1 |
| **Shan states** | Shan states | 1530 CE – 1715 CE | 5 |
| **Shanenawa** | Shanenawa | 1492 CE | 1 |
| **Shaskanka** | Shaskanka | 600 CE | 1 |
| **Shasta** | Shasta | 1492 CE | 1 |
| **Shawanaua** | Shawanaua | 1492 CE | 1 |
| **Shawi** | Shawi | 1492 CE | 1 |
| **Shigom** | Shigom | 1492 CE | 1 |
| **Shirvan** | Shirvan | 1000 CE – 1100 CE | 2 |
| **Shita Got’ine** | Shita Got’ine | 1492 CE | 1 |
| **Shiwiar** | Shiwiar | 1492 CE | 1 |
| **Shiwilu** | Shiwilu | 1492 CE | 1 |
| **Shmuwich (Barbareño)** | Shmuwich (Barbareño) | 1492 CE | 1 |
| **Shona** | Shona | 1878 CE – 1900 CE | 3 |
| **Shoshoni** | Shoshoni | 1530 CE – 1715 CE | 5 |
| **Shíshálh** | Shíshálh | 1492 CE | 1 |
| **Sicangu** | Sicangu | 1492 CE | 1 |
| **Siekopa’aiInte/Aido-Pãi (Secoya)** | Siekopa’aiInte/Aido-Pãi (Secoya) | 1492 CE | 1 |
| **Sihapsa** | Sihapsa | 1492 CE | 1 |
| **Sind** | Sind | 1492 CE – 1783 CE | 2 |
| **Sinhalese kingdom** | Sinhalese kingdom | 1279 CE – 1400 CE | 3 |
| **Sinhalese kingdoms** | Sinhalese kingdoms | 800 CE – 1500 CE | 3 |
| **Sinkyone** | Sinkyone | 1492 CE | 1 |
| **Siria-masã (Siriano)** | Siria-masã (Siriano) | 1492 CE | 1 |
| **Sirionó** | Sirionó | 1492 CE | 1 |
| **Sisseton** | Sisseton | 1492 CE | 1 |
| **Sissipahaw** | Sissipahaw | 1492 CE | 1 |
| **Siuslaw** | Siuslaw | 1492 CE | 1 |
| **Skagit** | Skagit | 1492 CE | 1 |
| **Skilloot** | Skilloot | 1492 CE | 1 |
| **Skirii** | Skirii | 400 CE | 1 |
| **Skwxwú7mesh-ulh Temíx̱w (Squamish)** | Skwxwú7mesh-ulh Temíx̱w (Squamish) | 1492 CE | 1 |
| **Skykomish** | Skykomish | 1492 CE | 1 |
| **Slavs** | Slavs | 600 CE – 700 CE | 2 |
| **Slijuala Xanuc (Chontal)** | Slijuala Xanuc (Chontal) | 1492 CE | 1 |
| **Snohomish** | Snohomish | 1492 CE | 1 |
| **Snuneymuxw** | Snuneymuxw | 1492 CE | 1 |
| **So'to (Yekuana)** | So'to (Yekuana) | 1492 CE | 1 |
| **Sobaipuri** | Sobaipuri | 1492 CE | 1 |
| **Somi Se'k (Esto’k Gna)** | Somi Se'k (Esto’k Gna) | 1492 CE | 1 |
| **Somvamsis** | Somvamsis | 900 CE | 1 |
| **Soomra Emirate** | Soomra Emirate | 1100 CE | 1 |
| **Sotho** | Sotho | 1783 CE – 1815 CE | 3 |
| **South Australia (UK)** | South Australia (UK) | 1878 CE – 1900 CE | 3 |
| **South Carolina** | South Carolina | 1650 CE – 1715 CE | 3 |
| **Southern Cameroon** | Southern Cameroon | 1945 CE | 1 |
| **Southern Rhodesia** | Southern Rhodesia | 1938 CE | 1 |
| **Spanish Sahara** | Spanish Sahara | 1914 CE – 1938 CE | 4 |
| **Squaxin** | Squaxin | 1492 CE | 1 |
| **Steilacoom** | Steilacoom | 1492 CE | 1 |
| **Stellat'en** | Stellat'en | 1492 CE | 1 |
| **Stillaguamish** | Stillaguamish | 1492 CE | 1 |
| **Stoney** | Stoney | 1492 CE | 1 |
| **Stz'uminus** | Stz'uminus | 1492 CE | 1 |
| **St̓át̓imc Tmicw (St'at'imc)** | St̓át̓imc Tmicw (St'at'imc) | 1492 CE | 1 |
| **Subtiaba** | Subtiaba | 1492 CE | 1 |
| **Sugaree** | Sugaree | 1492 CE | 1 |
| **Sui Empire** | Sui Empire | 600 CE – 700 CE | 2 |
| **Sultanate of Damagaram** | Sultanate of Damagaram | 1878 CE – 1880 CE | 2 |
| **Sultanate of Utetera** | Sultanate of Utetera | 1878 CE – 1900 CE | 3 |
| **Sumas** | Sumas | 1492 CE | 1 |
| **Suquamish** | Suquamish | 1492 CE | 1 |
| **Sura** | Sura | 1492 CE | 1 |
| **Surinam** | Surinam | 1650 CE – 1700 CE | 2 |
| **Surui Paiter** | Surui Paiter | 1492 CE | 1 |
| **Suruwaha** | Suruwaha | 1492 CE | 1 |
| **Susquehanna** | Susquehanna | 1530 CE – 1600 CE | 2 |
| **Swabia** | Swabia | 1800 CE | 1 |
| **Swedes** | Swedes | 400 CE – 700 CE | 4 |
| **Swinomish** | Swinomish | 1492 CE | 1 |
| **Syunik** | Syunik | 1100 CE | 1 |
| **S’ólh Téméxw (Stó:lō)** | S’ólh Téméxw (Stó:lō) | 1492 CE | 1 |
| **Ta'an Kwäch'än** | Ta'an Kwäch'än | 1492 CE | 1 |
| **Tacana** | Tacana | 1492 CE | 1 |
| **Tagish** | Tagish | 1492 CE | 1 |
| **Tagé Cho Hudän (Little Salmon/Carmacks)** | Tagé Cho Hudän (Little Salmon/Carmacks) | 1492 CE | 1 |
| **Tahues** | Tahues | 1492 CE | 1 |
| **Takalak** | Takalak | 1600 CE – 1800 CE | 6 |
| **Takelma** | Takelma | 1492 CE | 1 |
| **Takla** | Takla | 1492 CE | 1 |
| **Takrur** | Takrur | 1000 CE – 1200 CE | 3 |
| **Tama Dujo** | Tama Dujo | 1492 CE | 1 |
| **Tamalipueca** | Tamalipueca | 1530 CE – 1600 CE | 2 |
| **Tamaulipeco tribes** | Tamaulipeco tribes | 1492 CE | 1 |
| **Tamien Nation** | Tamien Nation | 1492 CE | 1 |
| **Tampachoa (Mansos)** | Tampachoa (Mansos) | 1492 CE | 1 |
| **Tanacross** | Tanacross | 1492 CE | 1 |
| **Tanana** | Tanana | 1492 CE | 1 |
| **Tancalba** | Tancalba | 1530 CE – 1600 CE | 2 |
| **Tanimuka** | Tanimuka | 1492 CE | 1 |
| **Tano** | Tano | 1530 CE – 1700 CE | 4 |
| **Tanzania, United Republic of** | Tanzania, United Republic of | 1920 CE – 2010 CE | 8 |
| **Tapachulteco (mixe-zoque)** | Tapachulteco (mixe-zoque) | 1492 CE | 1 |
| **Tapieté/Guaraní-Ñandeva** | Tapieté/Guaraní-Ñandeva | 1492 CE | 1 |
| **Tariana** | Tariana | 1492 CE | 1 |
| **Tashir** | Tashir | 1100 CE | 1 |
| **Tastil** | Tastil | 1492 CE | 1 |
| **Taungurung** | Taungurung | 1600 CE – 1800 CE | 6 |
| **Tawahka** | Tawahka | 1492 CE | 1 |
| **Tawakoni** | Tawakoni | 1492 CE | 1 |
| **Tecuexe** | Tecuexe | 1492 CE – 1600 CE | 3 |
| **Teke** | Teke | 1878 CE – 1900 CE | 3 |
| **Tekohá (Paĩ Tavytera/Kaiowá)** | Tekohá (Paĩ Tavytera/Kaiowá) | 1492 CE | 1 |
| **Tekohá (Ñandeva - Avá Guaraní)** | Tekohá (Ñandeva - Avá Guaraní) | 1492 CE | 1 |
| **Tekrur** | Tekrur | 1715 CE | 1 |
| **Tenetehara (Tembé)** | Tenetehara (Tembé) | 1492 CE | 1 |
| **Tenimo** | Tenimo | 1530 CE – 1715 CE | 5 |
| **Tenino** | Tenino | 1492 CE | 1 |
| **Tepehua** | Tepehua | 1492 CE | 1 |
| **Tepehuane** | Tepehuane | 1530 CE – 1600 CE | 2 |
| **Tepehuán** | Tepehuán | 1492 CE | 1 |
| **Teppathiggi** | Teppathiggi | 1600 CE – 1800 CE | 6 |
| **Tequesta** | Tequesta | 1492 CE | 1 |
| **Terena** | Terena | 1492 CE | 1 |
| **Teton** | Teton | 1530 CE – 1715 CE | 5 |
| **Te’mexw Treaty Association** | Te’mexw Treaty Association | 1492 CE | 1 |
| **Thaayorre** | Thaayorre | 1600 CE – 1800 CE | 6 |
| **Thalanyji** | Thalanyji | 1600 CE – 1815 CE | 7 |
| **Tharawal** | Tharawal | 1600 CE – 1800 CE | 6 |
| **Tharrgari** | Tharrgari | 1600 CE – 1815 CE | 7 |
| **Thiin** | Thiin | 1600 CE – 1815 CE | 7 |
| **Thompson** | Thompson | 1530 CE – 1600 CE | 2 |
| **Thul Garrie Waja (Bindal)** | Thul Garrie Waja (Bindal) | 1600 CE – 1800 CE | 6 |
| **Thuringia** | Thuringia | 1783 CE – 1815 CE | 7 |
| **Tigua** | Tigua | 1492 CE | 1 |
| **Tilian** | Tilian | 1492 CE | 1 |
| **Timotes** | Timotes | 1492 CE | 1 |
| **Tinigua** | Tinigua | 1492 CE | 1 |
| **Tjalkanti** | Tjalkanti | 1600 CE – 1815 CE | 7 |
| **Tjer-di/Teribe Broram** | Tjer-di/Teribe Broram | 1492 CE | 1 |
| **Tjerratj** | Tjerratj | 1600 CE – 1815 CE | 7 |
| **Tjungundji** | Tjungundji | 1600 CE – 1800 CE | 6 |
| **Tjupany** | Tjupany | 1600 CE – 1815 CE | 7 |
| **Tlinoit** | Tlinoit | 1500 CE | 1 |
| **Toara** | Toara | 1492 CE | 1 |
| **Toba Wei** | Toba Wei | 500 CE | 1 |
| **Toba-Lengua** | Toba-Lengua | 1492 CE | 1 |
| **Toboso** | Toboso | 1530 CE – 1600 CE | 2 |
| **Tobosos** | Tobosos | 1492 CE | 1 |
| **Tocobaga** | Tocobaga | 1492 CE | 1 |
| **Togoland** | Togoland | 1914 CE | 1 |
| **Tohono O'odham** | Tohono O'odham | 1492 CE | 1 |
| **Tojolwinik’otik (Tojolabal)** | Tojolwinik’otik (Tojolabal) | 1492 CE | 1 |
| **Tolowa Dee-ni’** | Tolowa Dee-ni’ | 1492 CE | 1 |
| **Tolupan** | Tolupan | 1492 CE | 1 |
| **Tomabela** | Tomabela | 1492 CE | 1 |
| **Tonokoté** | Tonokoté | 1492 CE | 1 |
| **Tontotuna (Totoró)** | Tontotuna (Totoró) | 1492 CE | 1 |
| **Toquaht** | Toquaht | 1492 CE | 1 |
| **Totorames** | Totorames | 1492 CE | 1 |
| **Touareg** | Touareg | 1279 CE | 1 |
| **Transvaal** | Transvaal | 1878 CE – 1900 CE | 3 |
| **Trebizond** | Trebizond | 1279 CE – 1400 CE | 3 |
| **Trio/Wü tarëno** | Trio/Wü tarëno | 1492 CE | 1 |
| **Trumai** | Trumai | 1492 CE | 1 |
| **Tr’ondëk Hwëch’in** | Tr’ondëk Hwëch’in | 1492 CE | 1 |
| **Tsa'chila** | Tsa'chila | 1492 CE | 1 |
| **Tsankupi** | Tsankupi | 1492 CE | 1 |
| **Tsase/Piapoco** | Tsase/Piapoco | 1492 CE | 1 |
| **Tseshaht** | Tseshaht | 1492 CE | 1 |
| **Tse’khene** | Tse’khene | 1492 CE | 1 |
| **Tsimane’** | Tsimane’ | 1492 CE | 1 |
| **Tsnungwe** | Tsnungwe | 1492 CE | 2 |
| **Tsuu T'ina** | Tsuu T'ina | 1492 CE | 1 |
| **Tŝilhqot’in Nen** | Tŝilhqot’in Nen | 1492 CE | 1 |
| **Ts’uubaa-asatx** | Ts’uubaa-asatx | 1492 CE | 1 |
| **Tufan Empire** | Tufan Empire | 700 CE | 2 |
| **Tulalip** | Tulalip | 1492 CE | 1 |
| **Tumbalalá** | Tumbalalá | 1492 CE | 1 |
| **Tungus** | Tungus | 200 BCE – 900 CE | 4 |
| **Tungusic Tribes** | Tungusic Tribes | 1200 CE | 1 |
| **Tunica** | Tunica | 1492 CE – 1715 CE | 6 |
| **Tunis** | Tunis | 1650 CE – 1815 CE | 5 |
| **Tunxis** | Tunxis | 1492 CE | 1 |
| **Tupari** | Tupari | 1492 CE | 1 |
| **Turan** | Turan | 1815 CE | 1 |
| **Turingians** | Turingians | 500 CE | 1 |
| **Turkish Cypriot-administered area** | Turkish Cypriot-administered area | 1994 CE – 2010 CE | 3 |
| **Turks and Caicos Islands** | Turks and Caicos Islands | 1783 CE – 2010 CE | 8 |
| **Turrbal** | Turrbal | 1600 CE – 1800 CE | 6 |
| **Tutelo** | Tutelo | 1492 CE – 1600 CE | 3 |
| **Tututni** | Tututni | 1492 CE | 1 |
| **Tuxá** | Tuxá | 1492 CE | 1 |
| **Tz'utujil** | Tz'utujil | 1492 CE | 1 |
| **Tzjon Non/ Tzo'tyio (Amuzgo)** | Tzjon Non/ Tzo'tyio (Amuzgo) | 1492 CE | 1 |
| **Tübatulabal** | Tübatulabal | 1492 CE | 1 |
| **Tłı̨chǫ Ndè** | Tłı̨chǫ Ndè | 1492 CE | 1 |
| **U'wa** | U'wa | 1492 CE | 1 |
| **Uchucklesaht** | Uchucklesaht | 1492 CE | 1 |
| **Ucluelet** | Ucluelet | 1492 CE | 1 |
| **Ukarãngmã** | Ukarãngmã | 1492 CE | 1 |
| **Ulwas** | Ulwas | 1492 CE | 1 |
| **Umbindhamu** | Umbindhamu | 1600 CE – 1800 CE | 6 |
| **Umida** | Umida | 1600 CE – 1815 CE | 7 |
| **Umpila** | Umpila | 1600 CE – 1800 CE | 6 |
| **Umukomasã/Desana** | Umukomasã/Desana | 1492 CE | 1 |
| **Umurecoómajá (Tatuyo)** | Umurecoómajá (Tatuyo) | 1492 CE | 1 |
| **Unggarangi** | Unggarangi | 1600 CE – 1815 CE | 7 |
| **Unggumi** | Unggumi | 1600 CE – 1815 CE | 7 |
| **Union of South Africa** | Union of South Africa | 1920 CE – 1938 CE | 3 |
| **United Provinces of the Río de la Plata** | United Provinces of the Río de la Plata | 1815 CE | 1 |
| **Upper Kuskokwim** | Upper Kuskokwim | 1492 CE | 1 |
| **Upper Tanana** | Upper Tanana | 1492 CE | 1 |
| **Uru** | Uru | 1492 CE | 1 |
| **Uspantec** | Uspantec | 1492 CE | 1 |
| **Utapinõmakãphõná** | Utapinõmakãphõná | 1492 CE | 1 |
| **Uutaalnganu** | Uutaalnganu | 1600 CE – 1800 CE | 6 |
| **Uwottüja** | Uwottüja | 1492 CE | 1 |
| **Vacacocha** | Vacacocha | 1492 CE | 1 |
| **Vallabhi** | Vallabhi | 800 CE – 900 CE | 2 |
| **Vanyumé** | Vanyumé | 1492 CE | 1 |
| **Vasconia** | Vasconia | 600 CE – 700 CE | 2 |
| **Vazimba** | Vazimba | 600 CE – 700 CE | 2 |
| **Venetia** | Venetia | 1783 CE – 1815 CE | 3 |
| **Vengi** | Vengi | 900 CE | 1 |
| **Veps** | Veps | 800 CE | 1 |
| **Veracruz civilization** | Veracruz civilization | 500 CE – 700 CE | 3 |
| **Viceroyalty of Brazil** | Viceroyalty of Brazil | 1715 CE – 1815 CE | 4 |
| **Viceroyalty of New Granada** | Viceroyalty of New Granada | 1783 CE – 1815 CE | 3 |
| **Viceroyalty of Peru** | Viceroyalty of Peru | 1650 CE – 1815 CE | 6 |
| **Viceroyalty of the Río de la Plata** | Viceroyalty of the Río de la Plata | 1783 CE – 1800 CE | 2 |
| **Victoria (UK)** | Victoria (UK) | 1878 CE – 1900 CE | 3 |
| **Vilela** | Vilela | 1492 CE | 1 |
| **Virgin Islands (Danemark)** | Virgin Islands (Danemark) | 1715 CE | 1 |
| **Virgin Islands (UK)** | Virgin Islands (UK) | 1715 CE | 1 |
| **Virginia** | Virginia | 1650 CE – 1700 CE | 2 |
| **Vishnu-Kundins** | Vishnu-Kundins | 500 CE | 1 |
| **Vuntut Gwitchin** | Vuntut Gwitchin | 1492 CE | 1 |
| **Waanyi** | Waanyi | 1600 CE – 1800 CE | 6 |
| **Wabanaki (Dawnland Confederacy)** | Wabanaki (Dawnland Confederacy) | 1492 CE | 1 |
| **Waccamaw (Woccon)** | Waccamaw (Woccon) | 1492 CE | 1 |
| **Waco** | Waco | 1492 CE | 1 |
| **Wadi Wadi** | Wadi Wadi | 1600 CE – 1800 CE | 6 |
| **Wadigali** | Wadigali | 1600 CE – 1800 CE | 6 |
| **Wadjigu** | Wadjigu | 1600 CE – 1800 CE | 6 |
| **Wagiman** | Wagiman | 1600 CE – 1815 CE | 7 |
| **Wahkiakum** | Wahkiakum | 1492 CE | 1 |
| **Wahpekute** | Wahpekute | 1492 CE | 1 |
| **Wahpeton** | Wahpeton | 1492 CE | 1 |
| **Wailwan** | Wailwan | 1600 CE – 1800 CE | 6 |
| **Wajuk** | Wajuk | 1600 CE – 1815 CE | 7 |
| **Wajuru** | Wajuru | 1492 CE | 1 |
| **Waka Waka** | Waka Waka | 1600 CE – 1800 CE | 6 |
| **Wakabunga** | Wakabunga | 1600 CE – 1800 CE | 6 |
| **Wakaya** | Wakaya | 1600 CE – 1800 CE | 6 |
| **Wakuenai/Walimanai (Kuripako)** | Wakuenai/Walimanai (Kuripako) | 1492 CE | 1 |
| **Walangama** | Walangama | 1600 CE – 1800 CE | 6 |
| **Walapai** | Walapai | 1530 CE – 1600 CE | 2 |
| **Walbis Bay** | Walbis Bay | 1938 CE | 1 |
| **Waldeck** | Waldeck | 1783 CE – 1815 CE | 3 |
| **Walimanai (Baniwa)** | Walimanai (Baniwa) | 1492 CE | 1 |
| **Walmatjarri** | Walmatjarri | 1600 CE – 1815 CE | 7 |
| **Wambaya** | Wambaya | 1600 CE – 1800 CE | 6 |
| **Wanano/Kotiria** | Wanano/Kotiria | 1492 CE | 1 |
| **Wanapum** | Wanapum | 1492 CE | 1 |
| **Wandjiwalgu** | Wandjiwalgu | 1600 CE – 1800 CE | 6 |
| **Wangan** | Wangan | 1600 CE – 1800 CE | 6 |
| **Wangkamana** | Wangkamana | 1600 CE – 1800 CE | 6 |
| **Wangkangurru** | Wangkangurru | 1600 CE – 1800 CE | 6 |
| **Wangkathaa** | Wangkathaa | 1600 CE – 1815 CE | 7 |
| **Wangkumara** | Wangkumara | 1600 CE – 1800 CE | 6 |
| **Wangunks** | Wangunks | 1492 CE | 1 |
| **Waorani** | Waorani | 1492 CE | 1 |
| **Wapishana/Wapixana** | Wapishana/Wapixana | 1492 CE | 1 |
| **Wappinger** | Wappinger | 1492 CE | 1 |
| **Wappo** | Wappo | 1492 CE | 1 |
| **Wappynger** | Wappynger | 1530 CE – 1600 CE | 2 |
| **Waranka** | Waranka | 1492 CE | 1 |
| **Wardaman** | Wardaman | 1600 CE – 1815 CE | 7 |
| **Wardandi** | Wardandi | 1600 CE – 1815 CE | 7 |
| **Warekena** | Warekena | 1492 CE | 1 |
| **Wargamaygan** | Wargamaygan | 1600 CE – 1800 CE | 6 |
| **Warlmanpa** | Warlmanpa | 1600 CE – 1815 CE | 7 |
| **Warlpiri** | Warlpiri | 1600 CE – 1815 CE | 7 |
| **Warluwarra** | Warluwarra | 1600 CE – 1800 CE | 6 |
| **Warraskoyack** | Warraskoyack | 1492 CE | 1 |
| **Warray** | Warray | 1600 CE – 1815 CE | 7 |
| **Warriyangga** | Warriyangga | 1600 CE – 1815 CE | 7 |
| **Warsenis** | Warsenis | 700 CE | 1 |
| **Warumungu** | Warumungu | 1600 CE – 1815 CE | 7 |
| **Warwa** | Warwa | 1600 CE – 1815 CE | 7 |
| **Wasco and Wishram** | Wasco and Wishram | 1492 CE | 1 |
| **Wateree** | Wateree | 1492 CE | 1 |
| **Wathaurong** | Wathaurong | 1600 CE – 1800 CE | 6 |
| **Watjarri** | Watjarri | 1600 CE – 1815 CE | 7 |
| **Waujá** | Waujá | 1492 CE | 1 |
| **Waveroo** | Waveroo | 1600 CE – 1800 CE | 6 |
| **Wawula** | Wawula | 1600 CE – 1815 CE | 7 |
| **Waxhaw** | Waxhaw | 1492 CE | 1 |
| **Wayana** | Wayana | 1492 CE | 1 |
| **Waymaq** | Waymaq | 1492 CE | 1 |
| **Wayúu** | Wayúu | 1492 CE | 1 |
| **Waíkhana** | Waíkhana | 1492 CE | 1 |
| **Waípinõmakã (Bará)** | Waípinõmakã (Bará) | 1492 CE | 1 |
| **We Wai Kai** | We Wai Kai | 1492 CE | 1 |
| **We Wai Kum** | We Wai Kum | 1492 CE | 1 |
| **Weenhayek** | Weenhayek | 1492 CE | 1 |
| **Weenhayek/Wichí** | Weenhayek/Wichí | 1492 CE | 1 |
| **Wemba Wemba** | Wemba Wemba | 1600 CE – 1800 CE | 6 |
| **Wendake-Nionwentsïo** | Wendake-Nionwentsïo | 1492 CE | 1 |
| **Wenrohronon** | Wenrohronon | 1492 CE | 1 |
| **Wergaia** | Wergaia | 1600 CE – 1800 CE | 6 |
| **Werowocomoco** | Werowocomoco | 1492 CE | 1 |
| **Wessex** | Wessex | 800 CE – 900 CE | 2 |
| **West Francia** | West Francia | 900 CE | 1 |
| **West Getaes** | West Getaes | 700 CE | 1 |
| **Western Australia (UK)** | Western Australia (UK) | 1878 CE – 1900 CE | 3 |
| **Western Mono/Monache** | Western Mono/Monache | 1492 CE | 1 |
| **Western Nehântick** | Western Nehântick | 1492 CE | 1 |
| **Westo** | Westo | 1492 CE | 1 |
| **Wet'suwet'en Yintikh** | Wet'suwet'en Yintikh | 1492 CE | 1 |
| **Wetzlar** | Wetzlar | 1815 CE | 1 |
| **Weyanock** | Weyanock | 1492 CE | 1 |
| **Whilkut** | Whilkut | 1492 CE | 1 |
| **White River-Kluane** | White River-Kluane | 1492 CE | 1 |
| **Wicocomico** | Wicocomico | 1492 CE | 1 |
| **Wiilman** | Wiilman | 1600 CE – 1815 CE | 7 |
| **Wik** | Wik | 1600 CE – 1800 CE | 6 |
| **Wiljali** | Wiljali | 1600 CE – 1800 CE | 6 |
| **Willapa** | Willapa | 1492 CE | 1 |
| **Winaq Qo’ (Mam)** | Winaq Qo’ (Mam) | 1492 CE | 1 |
| **Winda Winda** | Winda Winda | 1600 CE – 1800 CE | 6 |
| **Winebago** | Winebago | 1530 CE – 1715 CE | 5 |
| **Winefelly** | Winefelly | 1492 CE | 1 |
| **Winik Atel (Tzeltal)** | Winik Atel (Tzeltal) | 1492 CE | 1 |
| **Winikon bä lojon/Xk’ukwits/Ajlumob/Otulob (Ch'ol)** | Winikon bä lojon/Xk’ukwits/Ajlumob/Otulob (Ch'ol) | 1492 CE | 1 |
| **Winnimem Wintu** | Winnimem Wintu | 1492 CE | 1 |
| **Wintʰu• Po•m (Northern Wintu)** | Wintʰu• Po•m (Northern Wintu) | 1492 CE | 1 |
| **Winyah** | Winyah | 1492 CE | 1 |
| **Wiradjuri** | Wiradjuri | 1600 CE – 1800 CE | 6 |
| **Wirangu** | Wirangu | 1600 CE – 1815 CE | 7 |
| **Wisijsa** | Wisijsa | 1492 CE | 1 |
| **Wiwa** | Wiwa | 1492 CE | 1 |
| **Wixárika (Huichol)** | Wixárika (Huichol) | 1492 CE | 1 |
| **Wiyot** | Wiyot | 1492 CE | 1 |
| **Wongaibon** | Wongaibon | 1600 CE – 1800 CE | 6 |
| **Wonnarua** | Wonnarua | 1600 CE – 1800 CE | 6 |
| **Woolna** | Woolna | 1600 CE – 1815 CE | 7 |
| **Worimi** | Worimi | 1600 CE – 1800 CE | 6 |
| **Worla** | Worla | 1600 CE – 1815 CE | 7 |
| **Worora** | Worora | 1600 CE – 1815 CE | 7 |
| **Wounaan** | Wounaan | 1492 CE | 1 |
| **Wudjari** | Wudjari | 1600 CE – 1815 CE | 7 |
| **Wuikinuxv (Oweekeno)** | Wuikinuxv (Oweekeno) | 1492 CE | 1 |
| **Wuli-wuli** | Wuli-wuli | 1600 CE – 1800 CE | 6 |
| **Wunambul** | Wunambul | 1600 CE – 1815 CE | 7 |
| **Wuningangk** | Wuningangk | 1600 CE – 1815 CE | 7 |
| **Wunumara** | Wunumara | 1600 CE – 1800 CE | 6 |
| **Wurundjeri** | Wurundjeri | 1600 CE – 1800 CE | 6 |
| **Wuthathi** | Wuthathi | 1600 CE – 1800 CE | 6 |
| **Xakriabá** | Xakriabá | 1492 CE | 1 |
| **Xecora** | Xecora | 1530 CE – 1600 CE | 2 |
| **Xetá** | Xetá | 1492 CE | 1 |
| **Xinjiang** | Xinjiang | 1914 CE – 1945 CE | 5 |
| **Xixia** | Xixia | 1000 CE – 1200 CE | 3 |
| **Xixime** | Xixime | 1492 CE | 1 |
| **Yadhaigana** | Yadhaigana | 1600 CE – 1800 CE | 6 |
| **Yagalingu** | Yagalingu | 1600 CE – 1800 CE | 6 |
| **Yagán** | Yagán | 1492 CE | 1 |
| **Yahooskin** | Yahooskin | 1492 CE | 1 |
| **Yaka** | Yaka | 1878 CE – 1900 CE | 3 |
| **Yakima** | Yakima | 1530 CE – 1715 CE | 5 |
| **Yakina** | Yakina | 1492 CE | 1 |
| **Yalarrnga** | Yalarrnga | 1600 CE – 1800 CE | 6 |
| **Yamassee** | Yamassee | 1492 CE | 1 |
| **Yamayeka (Yamaye)** | Yamayeka (Yamaye) | 1492 CE | 1 |
| **Yambina** | Yambina | 1600 CE – 1800 CE | 6 |
| **Yamhill** | Yamhill | 1492 CE | 1 |
| **Yaminawá** | Yaminawá | 1492 CE | 1 |
| **Yana** | Yana | 1492 CE | 1 |
| **Yanam (Ninam)** | Yanam (Ninam) | 1492 CE | 1 |
| **Yanda** | Yanda | 1600 CE – 1800 CE | 6 |
| **Yandruwandha** | Yandruwandha | 1600 CE – 1800 CE | 6 |
| **Yanesha** | Yanesha | 1492 CE | 1 |
| **Yanga** | Yanga | 1600 CE – 1800 CE | 6 |
| **Yangga** | Yangga | 1600 CE – 1800 CE | 6 |
| **Yangman** | Yangman | 1600 CE – 1815 CE | 7 |
| **Yankontai** | Yankontai | 1530 CE – 1715 CE | 5 |
| **Yankton** | Yankton | 1492 CE – 1715 CE | 6 |
| **Yanktonai** | Yanktonai | 1492 CE | 1 |
| **Yankuntjatjara** | Yankuntjatjara | 1600 CE – 1815 CE | 7 |
| **Yanyuwa** | Yanyuwa | 1600 CE – 1800 CE | 6 |
| **Yarluyandi** | Yarluyandi | 1600 CE – 1800 CE | 6 |
| **Yaros** | Yaros | 1492 CE | 1 |
| **Yaruro/Pumé** | Yaruro/Pumé | 1492 CE | 1 |
| **Yawanawá** | Yawanawá | 1492 CE | 1 |
| **Yawarawarka** | Yawarawarka | 1600 CE – 1800 CE | 6 |
| **Yawuru** | Yawuru | 1600 CE – 1815 CE | 7 |
| **Yazne** | Yazne | 1492 CE | 1 |
| **Ye"pâ-masa** | Ye"pâ-masa | 1492 CE | 1 |
| **Yeke** | Yeke | 1878 CE – 1900 CE | 3 |
| **Yekooche** | Yekooche | 1492 CE | 1 |
| **Yeopim** | Yeopim | 1492 CE | 1 |
| **Yidinjdji** | Yidinjdji | 1600 CE – 1800 CE | 6 |
| **Yihamwo (Yagua)** | Yihamwo (Yagua) | 1492 CE | 1 |
| **Yilba** | Yilba | 1600 CE – 1800 CE | 6 |
| **Yiman** | Yiman | 1600 CE – 1800 CE | 6 |
| **Yindjibarndi** | Yindjibarndi | 1600 CE – 1815 CE | 7 |
| **Yine** | Yine | 1492 CE | 1 |
| **Yinggarda** | Yinggarda | 1600 CE – 1815 CE | 7 |
| **Yinhawangka** | Yinhawangka | 1600 CE – 1815 CE | 7 |
| **Yinwum** | Yinwum | 1600 CE – 1800 CE | 6 |
| **Yir Yoront** | Yir Yoront | 1600 CE – 1800 CE | 6 |
| **Yirandali** | Yirandali | 1600 CE – 1800 CE | 6 |
| **Yitha Yitha** | Yitha Yitha | 1600 CE – 1800 CE | 6 |
| **Yjxa** | Yjxa | 1492 CE | 1 |
| **Yoeme (Yaqui)** | Yoeme (Yaqui) | 1492 CE | 1 |
| **Yoko T’aan (Chontal)** | Yoko T’aan (Chontal) | 1492 CE | 1 |
| **Yoli (Concho)** | Yoli (Concho) | 1492 CE | 1 |
| **Yolngu** | Yolngu | 1600 CE – 1800 CE | 6 |
| **Yoncalla** | Yoncalla | 1492 CE | 1 |
| **Yoreme (Mayo)** | Yoreme (Mayo) | 1492 CE | 1 |
| **Yorta Yorta** | Yorta Yorta | 1600 CE – 1800 CE | 6 |
| **Youghtanund** | Youghtanund | 1492 CE | 1 |
| **Yuat** | Yuat | 1600 CE – 1815 CE | 7 |
| **Yudjá** | Yudjá | 1492 CE | 1 |
| **Yueban** | Yueban | 100 CE – 400 CE | 4 |
| **Yugambeh** | Yugambeh | 1600 CE – 1800 CE | 6 |
| **Yuggera** | Yuggera | 1600 CE – 1800 CE | 6 |
| **Yugoslavia** | Yugoslavia | 1920 CE – 1960 CE | 5 |
| **Yuhaviatam/Maarenga’yam (Serrano)** | Yuhaviatam/Maarenga’yam (Serrano) | 1492 CE | 1 |
| **Yuin** | Yuin | 1600 CE – 1800 CE | 6 |
| **Yukagir** | Yukagir | 1530 CE – 1600 CE | 2 |
| **Yukpa** | Yukpa | 1492 CE | 1 |
| **Yulparitja** | Yulparitja | 1600 CE – 1815 CE | 7 |
| **Yuma** | Yuma | 1530 CE – 1600 CE | 2 |
| **Yupangathi** | Yupangathi | 1600 CE – 1800 CE | 6 |
| **Yuracaré** | Yuracaré | 1492 CE | 1 |
| **Yuru** | Yuru | 1600 CE – 1800 CE | 6 |
| **Yurutí** | Yurutí | 1492 CE | 1 |
| **Yurí** | Yurí | 1492 CE | 1 |
| **Yuwi** | Yuwi | 1600 CE – 1800 CE | 6 |
| **Zacateco** | Zacateco | 1492 CE | 1 |
| **Zacatecs** | Zacatecs | 1530 CE – 1600 CE | 2 |
| **ZioBain (Siona)** | ZioBain (Siona) | 1492 CE | 1 |
| **Zoró/Pangyjej** | Zoró/Pangyjej | 1492 CE | 1 |
| **Zo’é** | Zo’é | 1492 CE | 1 |
| **city-states** | city-states | 4 000 BCE – 2 000 BCE | 3 |
| **ditidaqiic̓aq disib̓aʔk (Ditidaht)** | ditidaqiic̓aq disib̓aʔk (Ditidaht) | 1492 CE | 1 |
| **kòréβahώ (korebaju/Koreguaje)** | kòréβahώ (korebaju/Koreguaje) | 1492 CE | 1 |
| **minor Hindu and Buddhist kingdoms** | minor Hindu and Buddhist kingdoms | 1300 CE – 1400 CE | 2 |
| **minor Hindu and Buddhist states** | minor Hindu and Buddhist states | 800 CE – 1200 CE | 9 |
| **minor states** | minor states | 200 BCE – 100 BCE | 2 |
| **minor states under Indian influence** | minor states under Indian influence | 600 CE – 700 CE | 4 |
| **np̓əšqʷáw̓səxʷ (Wenatchi)** | np̓əšqʷáw̓səxʷ (Wenatchi) | 1492 CE | 1 |
| **pʌʌsíʌhʌ (Andoque/Paasiaja)** | pʌʌsíʌhʌ (Andoque/Paasiaja) | 1492 CE | 1 |
| **sc̓əwaθenaɁɬ təməxʷ (Tsawwassen)** | sc̓əwaθenaɁɬ təməxʷ (Tsawwassen) | 1492 CE | 1 |
| **sdukʷalbixʷ (Snoqualmie)** | sdukʷalbixʷ (Snoqualmie) | 1492 CE | 1 |
| **snʕickstx tmxʷúlaʔxʷ (Sinixt)** | snʕickstx tmxʷúlaʔxʷ (Sinixt) | 1492 CE | 1 |
| **sq̓əc̓iy̓aɁɬ təməxʷ (Katzie)** | sq̓əc̓iy̓aɁɬ təməxʷ (Katzie) | 1492 CE | 1 |
| **səl̓ilwətaɁɬ təməxʷ (Tsleil-Waututh)** | səl̓ilwətaɁɬ təməxʷ (Tsleil-Waututh) | 1492 CE | 1 |
| **Á,LEṈENEȻ ȽTE (W̱SÁNEĆ)** | Á,LEṈENEȻ ȽTE (W̱SÁNEĆ) | 1492 CE | 1 |
| **Ãwa** | Ãwa | 1492 CE | 1 |
| **Älsé (Alsea)** | Älsé (Alsea) | 1492 CE | 1 |
| **Épera** | Épera | 1492 CE | 1 |
| **Ópata (Tegüima-Eudebe-Hoba)** | Ópata (Tegüima-Eudebe-Hoba) | 1492 CE | 1 |
| **šxʷməθkʷəy̓əmaɁɬ təməxʷ (Musqueam)** | šxʷməθkʷəy̓əmaɁɬ təməxʷ (Musqueam) | 1492 CE | 1 |
| **ƛaʔuukʷiʔatḥ (Tla-o-qui-aht)** | ƛaʔuukʷiʔatḥ (Tla-o-qui-aht) | 1492 CE | 1 |
| **ɬaʔamɩn gɩǰɛ (Tla'amin/Sliammon)** | ɬaʔamɩn gɩǰɛ (Tla'amin/Sliammon) | 1492 CE | 1 |
| **ᒋᑦ ᐊᔅᒋᓄᐤ St'aschinuw (Naskapi)** | ᒋᑦ ᐊᔅᒋᓄᐤ St'aschinuw (Naskapi) | 1492 CE | 1 |

[↑ Back to top](#table-of-contents)

---

## <a id="north-american-indigenous"></a>North American Indigenous

* **Unique Entities**: 274
* **Total Appearances**: 704
* **Historical Span**: 2 000 BCE – 1800 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Abenaki / Abénaquis** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Achumawi** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Acjachemen (Juaneño)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Adena** | Mound Builder & Woodland Traditions | 1492 CE | 1 |
| **Adena Culture** | Mound Builder & Woodland Traditions | 500 BCE – 200 BCE | 5 |
| **Akimel O'odham (Upper Pima)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Algonquin** | Eastern Woodlands First Nations | 1500 CE | 1 |
| **Anasazi** | Southwest & California Indigenous Nations | 800 CE – 900 CE | 2 |
| **Apache** | Southwest & California Indigenous Nations | 1500 CE – 1600 CE | 5 |
| **Apalachee** | Eastern Woodlands First Nations | 1530 CE – 1600 CE | 2 |
| **Apalachees** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Apsaalooké (Crow)** | Great Plains Indigenous Nations | 1492 CE | 1 |
| **Arapaho** | Great Plains Indigenous Nations | 1492 CE – 1715 CE | 6 |
| **Archaic Amerindian hunter-gatherers** | Archaic Amerindian Hunter-Gatherers | 2 000 BCE | 1 |
| **Arikara** | Great Plains Indigenous Nations | 1530 CE – 1715 CE | 5 |
| **Assiniboine** | Great Plains Indigenous Nations | 1492 CE | 1 |
| **Atakapa** | Eastern Woodlands First Nations | 1530 CE – 1715 CE | 7 |
| **Atakapa Ishak Chawasha** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Atakapa-Ishak** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Attiwonderonk (Neutral)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Beaver Lake Cree** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Big Stone Cree** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Blackfoot** | Great Plains Indigenous Nations | 1530 CE – 1715 CE | 5 |
| **Bodéwadmiakiwen (Potawatomi)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Caddo** | Great Plains Indigenous Nations | 1492 CE – 1715 CE | 6 |
| **Cahuilla** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Caloosahatchee culture** | Mound Builder & Woodland Traditions | 500 CE – 1600 CE | 13 |
| **Calusa** | Eastern Woodlands First Nations | 1492 CE – 1500 CE | 2 |
| **Catawba** | Eastern Woodlands First Nations | 1492 CE – 1700 CE | 7 |
| **Cayuse, Umatilla and Walla Walla** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Central Pomo** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Chahta Yakni (Choctaw)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Chehalis** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Cheraw** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Cheroenhaka (Nottoway)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Cherokee** | Eastern Woodlands First Nations | 1500 CE – 1715 CE | 6 |
| **Cherokee (Oklahoma)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Cheyenne** | Great Plains Indigenous Nations | 1492 CE – 1715 CE | 7 |
| **Cheyenne-Arapaho (Oklahoma)** | Great Plains Indigenous Nations | 1492 CE | 1 |
| **Chickahominy** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Chickasaw** | Eastern Woodlands First Nations | 1530 CE – 1600 CE | 2 |
| **Chickasaw (Oklahoma)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Chikashsha Yaki (Chickasaw)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Chinook** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Chiricahua** | Southwest & California Indigenous Nations | 1530 CE – 1600 CE | 2 |
| **Chiricahua Apache** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Choctaw** | Eastern Woodlands First Nations | 1530 CE – 1600 CE | 2 |
| **Choctaw (Oklahoma)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Chumash** | Southwest & California Indigenous Nations | 1492 CE – 1600 CE | 3 |
| **Coast Salish** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Comanche** | Great Plains Indigenous Nations | 1500 CE – 1715 CE | 6 |
| **Confederated Tribes of Grand Ronde** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Confederated Tribes of Siletz Indians** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Coos, Lower Umpqua, Siuslaw** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Copena** | Mound Builder & Woodland Traditions | 100 BCE – 500 CE | 7 |
| **Coquille** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Couture Complex** | Mound Builder & Woodland Traditions | 100 BCE – 500 CE | 7 |
| **Cow Creek Umpqua** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Cree** | Eastern Woodlands First Nations | 1492 CE – 1700 CE | 5 |
| **Crow** | Great Plains Indigenous Nations | 1500 CE – 1715 CE | 6 |
| **Delaware** | Eastern Woodlands First Nations | 1500 CE – 1600 CE | 3 |
| **Desert hunter-gatherers** | Southwest & California Indigenous Nations | 1 500 BCE – 1500 CE | 26 |
| **Diné Bikéyah** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Eastern North American hunter-gatherers** | Eastern Woodlands First Nations | 1 500 BCE – 1400 CE | 20 |
| **Eastern Pomo** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Eastern Shawnee (Oklahoma)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Eastern Shoshone** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Flathead** | Pacific Northwest & Plateau First Nations | 1530 CE – 1600 CE | 2 |
| **Fourche Maline Culture** | Mound Builder & Woodland Traditions | 100 BCE – 500 CE | 7 |
| **Gitxaała** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Glades Culture** | Mound Builder & Woodland Traditions | 500 BCE – 400 CE | 11 |
| **Goodall Focus** | Mound Builder & Woodland Traditions | 100 BCE – 500 CE | 7 |
| **Goshute** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Gros Ventre** | Great Plains Indigenous Nations | 1650 CE – 1715 CE | 3 |
| **Haida Gwaii** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Hanis Coos** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Havasu Baaja (Havasupai)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Havasupai** | Southwest & California Indigenous Nations | 1530 CE – 1600 CE | 2 |
| **Heiltsuk** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Ho-de-no-sau-nee-ga (Haudenosaunee)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Hohokam** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Hoocąk (Ho-Chunk)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Hopewell** | Mound Builder & Woodland Traditions | 1492 CE | 1 |
| **Hopewell Culture** | Mound Builder & Woodland Traditions | 100 BCE – 500 CE | 7 |
| **Hopi** | Southwest & California Indigenous Nations | 1500 CE | 1 |
| **Hopie** | Southwest & California Indigenous Nations | 1530 CE – 1700 CE | 4 |
| **Hopitutskwa** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Hualapai** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Hupacasath** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Huron** | Eastern Woodlands First Nations | 1500 CE | 1 |
| **Illinois** | Eastern Woodlands First Nations | 1530 CE – 1715 CE | 5 |
| **Iowa** | Eastern Woodlands First Nations | 1492 CE – 1715 CE | 6 |
| **Iowa (Oklahoma)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Iroquois** | Eastern Woodlands First Nations | 1500 CE – 1715 CE | 6 |
| **Isle de Jean Charles Biloxi-Chitimacha-Choctaw** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Jicarilla** | Southwest & California Indigenous Nations | 1530 CE – 1700 CE | 4 |
| **Jicarilla Apache** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Kalispel** | Pacific Northwest & Plateau First Nations | 1492 CE – 1715 CE | 6 |
| **Kanienʼkehá꞉ka (Mohawk)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Kansa** | Great Plains Indigenous Nations | 1530 CE – 1715 CE | 5 |
| **Karuk** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Kaw (Oklahoma)** | Great Plains Indigenous Nations | 1492 CE | 2 |
| **Kickapoo (Oklahoma)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Kiikaapoi (Kickapoo)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Kiowa** | Great Plains Indigenous Nations | 1530 CE – 1715 CE | 5 |
| **Kiowa-Comanche-Apache (Oklahoma)** | Great Plains Indigenous Nations | 1492 CE | 1 |
| **Klamath** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Kwakwaka'wakw** | Pacific Northwest & Plateau First Nations | 1530 CE – 1600 CE | 2 |
| **Kwakwaka’wakw** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Laurel complex** | Mound Builder & Woodland Traditions | 100 BCE – 500 CE | 7 |
| **Lemhi-Shoshone** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Lingít Aaní (Tlingit)** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Lipan** | Southwest & California Indigenous Nations | 1530 CE – 1700 CE | 4 |
| **Lower Chinook** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Lower Tohono O’odham (Lower Pima)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Lənape Haki-nk (Lenni-Lenape)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Makah** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Mandan** | Great Plains Indigenous Nations | 1530 CE – 1715 CE | 5 |
| **Mandan, Hidatsa, and Arikara** | Great Plains Indigenous Nations | 1492 CE | 1 |
| **Mandandanji** | Great Plains Indigenous Nations | 1600 CE – 1800 CE | 6 |
| **Marksville Culture** | Mound Builder & Woodland Traditions | 100 BCE – 500 CE | 7 |
| **Mattaponi** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Me-Wuk (Bay Miwok)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Me-Wuk (Central Sierra Miwok)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Me-Wuk (Coast Miwok)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Me-Wuk (Lake Miwok)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Me-Wuk (Northern Sierra Miwok)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Me-Wuk (Southern Sierra Miwok)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Menominee** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Mescalero** | Southwest & California Indigenous Nations | 1530 CE – 1700 CE | 4 |
| **Mescalero Apache** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Mi'kma'ki** | Eastern Woodlands First Nations | 1492 CE – 1715 CE | 8 |
| **Miami** | Eastern Woodlands First Nations | 1530 CE – 1715 CE | 5 |
| **Miami (Oklahoma)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Mill Creek Culture** | Mound Builder & Woodland Traditions | 100 BCE – 500 CE | 7 |
| **Miluk Coos** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Miwok** | Southwest & California Indigenous Nations | 1530 CE – 1715 CE | 5 |
| **Modoc** | Pacific Northwest & Plateau First Nations | 1492 CE – 1715 CE | 6 |
| **Modoc (Oklahoma)** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Mogollon** | Southwest & California Indigenous Nations | 800 CE – 900 CE | 2 |
| **Mohawk (Kalapuya)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Mohegan** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Moose Cree** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Mountain Maidu** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Munsee Lenape** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Muscogee (Oklahoma)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Mvskoke (Muscogee / Creek)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Narragansett** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Navajo** | Southwest & California Indigenous Nations | 1500 CE | 1 |
| **Ndee/Nnēē: (Western Apache)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Ndé Kónitsąąíí Gokíyaa (Lipan Apache)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Nentego (Nanticoke)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Newe (Western Shoshone)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Nez Perce** | Pacific Northwest & Plateau First Nations | 1500 CE – 1715 CE | 6 |
| **Niitsítpiis-stahkoii ᖹᐟᒧᐧᐨᑯᐧ ᓴᐦᖾᐟ (Blackfoot / Niitsítapi ᖹᐟᒧᐧᒣᑯ)** | Great Plains Indigenous Nations | 1492 CE | 1 |
| **Nimiipuu (Nez Perce)** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **North American Pacific foraging, hunting and fishing peoples** | Pacific Northwest & Plateau First Nations | 1 500 BCE – 1500 CE | 26 |
| **Northeastern Pomo** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Northern Paiute** | Southwest & California Indigenous Nations | 1530 CE – 1715 CE | 5 |
| **Northern Pomo** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Numu (Northern Paiute)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Nuwuvi (Southern Paiute)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Nuxalk** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Núu-agha-tʉvʉ-pʉ̱ (Ute)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Nʉmʉnʉʉ (Comanche)** | Great Plains Indigenous Nations | 1492 CE | 1 |
| **Odǫhwęja:deˀ (Cayuga)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Okanagan** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Omaha** | Great Plains Indigenous Nations | 1530 CE – 1715 CE | 5 |
| **Omàmìwininìwag (Algonquin)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Onundagaonoga (Onondaga)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Onöndowa'ga:' (Seneca)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Onʌyote'a•ka (Oneida)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Oro Win/Oro Towati’** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Osage** | Great Plains Indigenous Nations | 1530 CE – 1715 CE | 5 |
| **Osage (Oklahoma)** | Great Plains Indigenous Nations | 1492 CE | 1 |
| **Ottawa (Oklahoma)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Pamlico (Pomouik)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Pamunkey** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Passamaquoddy** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Pawnee** | Great Plains Indigenous Nations | 1530 CE – 1715 CE | 5 |
| **Pawnee (Oklahoma)** | Great Plains Indigenous Nations | 1492 CE | 2 |
| **Payómkawichum (Luiseño)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Pequot** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Piipaash (Maricopa)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Pima** | Southwest & California Indigenous Nations | 1530 CE – 1600 CE | 2 |
| **Pipa Aha Macav (Mojave)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Piscataway** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Plain bison hunters** | Great Plains Indigenous Nations | 1 500 BCE – 1500 CE | 26 |
| **Plains Miwok** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Plateau fichers and hunter gatherers** | Pacific Northwest & Plateau First Nations | 1 500 BCE – 1530 CE | 27 |
| **Pomo** | Southwest & California Indigenous Nations | 1500 CE – 1715 CE | 6 |
| **Ponca** | Great Plains Indigenous Nations | 1492 CE – 1715 CE | 6 |
| **Ponca (Oklahoma)** | Great Plains Indigenous Nations | 1492 CE | 1 |
| **Potawatomi** | Eastern Woodlands First Nations | 1530 CE – 1715 CE | 5 |
| **Potawatomi-Shawnee (Oklahoma)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Poverty point culture** | Mound Builder & Woodland Traditions | 1 500 BCE – 500 CE | 2 |
| **Powhatan** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Pueblos** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Pâri (Pawnee)** | Great Plains Indigenous Nations | 1492 CE | 1 |
| **Quapaw** | Great Plains Indigenous Nations | 1530 CE – 1715 CE | 5 |
| **Quechan (Kwatsáan)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Quileute** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Quinault** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Quinnipiac** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Quuiich (Lower Umpqua)** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Resighini Rancheria (Yurok)** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Salish & Kootenai Tribes** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Salish Kootenai (Flathead)** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Sauk Suiattle** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Sauk and Meskwaki** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Secwepemcúl'ecw (Secwépemc)** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Seminole** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Seminole (Oklahoma)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Seminole Tribe of Florida (Big Cypress Reservation)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Seminole Tribe of Florida (Brighton Reservation)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Seminole Tribe of Florida (Hollywood Reservation)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Seminole Tribe of Florida (Immokalee Reservation)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Seminole Tribe of Florida (Tampa Reservation)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Seneca-Cayuga (Oklahoma)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Shawandasse Tula (Shawanwaki/Shawnee)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Shawnee** | Eastern Woodlands First Nations | 1530 CE – 1715 CE | 5 |
| **Shiwinna (Zuni)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Shoshone-Bannock** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Sicaog (Saukiog)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Siletz** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Skaruhreh/Tuscarora (North Carolina)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Southeastern Pomo** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Southern Paiute** | Southwest & California Indigenous Nations | 1530 CE – 1715 CE | 5 |
| **Southern Pomo** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Spokane** | Pacific Northwest & Plateau First Nations | 1492 CE – 1600 CE | 3 |
| **Sturgeon Lake Cree** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Susquehannock** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Swift Creek Culture** | Mound Builder & Woodland Traditions | 100 BCE – 500 CE | 9 |
| **Syilx tmixʷ (Okanagan)** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **S’atsoyaha (Yuchi)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Taku River Tlingit** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Taos Pueblo** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Tillamook** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Timucua** | Eastern Woodlands First Nations | 1492 CE – 1600 CE | 3 |
| **Tongva** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Tonkawa** | Great Plains Indigenous Nations | 1492 CE – 1715 CE | 6 |
| **Tonkawa (Oklahoma)** | Great Plains Indigenous Nations | 1492 CE | 1 |
| **Ts'msyen La̱xyuup (Tsimshian)** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Tuscarora** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Twana/Skokomish** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Umatilla** | Pacific Northwest & Plateau First Nations | 1530 CE – 1715 CE | 5 |
| **Umoⁿhoⁿ (Omaha)** | Great Plains Indigenous Nations | 1492 CE | 1 |
| **Ute** | Southwest & California Indigenous Nations | 1530 CE – 1715 CE | 5 |
| **Wailaki** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Washtáge Moⁿzháⁿ (Kaw / Kansa)** | Great Plains Indigenous Nations | 1492 CE | 1 |
| **Wašišiw Ɂítdeʔ (Washoe)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **White Mountain Apache** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Wichita** | Great Plains Indigenous Nations | 1492 CE – 1715 CE | 6 |
| **Wichita-Caddo-Delaware (Oklahoma)** | Great Plains Indigenous Nations | 1492 CE | 1 |
| **Wolastoqiyik Wahsipekuk (Maliseet)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Woodland Cree** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Wyandot (Anderdon)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Wyandotte (Oklahoma)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Wôpanâak (Wampanoag)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **Xawiƚƚ kwñchawaay (Cocopah)** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Yakama** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Yavapai** | Southwest & California Indigenous Nations | 1530 CE – 1700 CE | 4 |
| **Yavapaiv Apache** | Southwest & California Indigenous Nations | 1492 CE | 1 |
| **Yokuts** | Southwest & California Indigenous Nations | 1492 CE – 1715 CE | 6 |
| **Yuchi** | Eastern Woodlands First Nations | 1530 CE – 1700 CE | 4 |
| **Yurok** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **Zuni** | Southwest & California Indigenous Nations | 1530 CE – 1600 CE | 2 |
| **[Gáuigú (Kiowa)** | Great Plains Indigenous Nations | 1492 CE | 1 |
| **nuučaan̓uuɫɁatḥ nism̓a (Nuu-chah-nulth)** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **oθaakiiwaki‧hina‧ki (Sauk)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **x̣àʼisla w̓áwís (Haisla)** | Pacific Northwest & Plateau First Nations | 1492 CE | 1 |
| **ᏣᎳᎫᏪᏘᏱ Tsalaguwetiyi (Cherokee, East)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **ᓀᐦᐃᔭᐤ ᐊᐢᑭᕀ Nêhiyaw-Askiy (Plains Cree)** | Eastern Woodlands First Nations | 1492 CE | 1 |
| **𐓏𐒰𐓓𐒰𐓓𐒷  𐒼𐓂𐓊𐒻  𐓆𐒻𐒿𐒷  𐓀𐒰^𐓓𐒰^(Osage)** | Great Plains Indigenous Nations | 1492 CE | 1 |

[↑ Back to top](#table-of-contents)

---

## <a id="oceania"></a>Oceania

* **Unique Entities**: 71
* **Total Appearances**: 600
* **Historical Span**: 10 000 BCE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Aboriginal Tasmanians** | Australian & Tasmanian Aboriginal Peoples | 10 000 BCE – 1800 CE | 7 |
| **Aboriginal tribes** | Australian & Tasmanian Aboriginal Peoples | 10 000 BCE – 3 000 BCE | 5 |
| **American Samoa** | American Samoa | 1878 CE – 2010 CE | 16 |
| **Armorica** | Polynesian Realms & Voyagers | 500 CE | 1 |
| **Arrernte** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Australia** | Australia | 1914 CE – 2010 CE | 9 |
| **Australian aboriginal hunter-gatherers** | Australian & Tasmanian Aboriginal Peoples | 2 000 BCE – 1815 CE | 36 |
| **Austronesians** | Polynesian Realms & Voyagers | 10 000 BCE – 400 BCE | 11 |
| **Badimaya** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Banjima** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Bardi** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Bibbulman** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Dakapeng culture** | Dapenkeng & Proto-Austronesian Cultures | 2 000 BCE | 1 |
| **Dapenkeng culture** | Dapenkeng & Proto-Austronesian Cultures | 5 000 BCE – 3 000 BCE | 3 |
| **Eora** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1800 CE | 6 |
| **Fiji** | Fiji | 1878 CE – 2010 CE | 46 |
| **First Samori Empire** | Polynesian Realms & Voyagers | 1900 CE | 1 |
| **Gagudju** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Gamberre** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Gooniyandi** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Goreng** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Gugu-Badhun** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1800 CE | 6 |
| **Gunbalang** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Gungurugoni** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Gunibidji** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Gunwinggu** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Gurindji** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Iwaidja** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Jabirrjabirr** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Jaburrara** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Jaminjung** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Jaru** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Jawoyn** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Jingili** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Jiwarli** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Jukun** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Jurruru** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Kadjerong** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Kalaako/Malpa** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Kaniyang** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Karajarri** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Karangpurru** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Kingdom of Hawaii** | Kingdom of Hawaii | 1815 CE – 1900 CE | 4 |
| **Kō Hawaiʻi Paeʻāina (Hawaiian Kingdom)** | Polynesian Realms & Voyagers | 1492 CE | 1 |
| **M?ori** | Polynesian Realms & Voyagers | 1878 CE | 1 |
| **Maori** | Polynesian Realms & Voyagers | 1279 CE – 1815 CE | 9 |
| **Maoris** | Polynesian Realms & Voyagers | 1530 CE – 1600 CE | 2 |
| **Mayi-Yapi** | Micronesian Realms | 1600 CE – 1800 CE | 6 |
| **Mebêngôkre (Kayapó)** | Micronesian Realms | 1492 CE | 1 |
| **Māori** | Polynesian Realms & Voyagers | 1783 CE – 1900 CE | 4 |
| **New Caledonia** | New Caledonia | 1938 CE | 1 |
| **New Hebrides** | Vanuatu | 1938 CE | 1 |
| **New Zealand** | New Zealand | 1914 CE – 2010 CE | 9 |
| **Niue** | Niue | 1878 CE – 2010 CE | 12 |
| **Papua New Guinea** | Papua New Guinea | 1492 CE – 2010 CE | 16 |
| **Papuan** | Papuan Highland Agriculturalists | 200 BCE | 1 |
| **Papuan neolithic farmers** | Papuan Highland Agriculturalists | 1 500 BCE – 400 BCE | 5 |
| **Papuans** | Melanesian Realms | 800 CE – 1815 CE | 8 |
| **Pinikura** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Pinjarup** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |
| **Polynesians** | Polynesian Realms & Voyagers | 1000 CE – 1880 CE | 31 |
| **Rapa Nui** | Polynesian Realms & Voyagers | 1900 CE – 2010 CE | 10 |
| **Samoa** | Samoa | 1878 CE – 2010 CE | 13 |
| **Second Samori Empire** | Polynesian Realms & Voyagers | 1900 CE | 1 |
| **Taiwanese Tribes** | Dapenkeng & Proto-Austronesian Cultures | 1200 CE | 1 |
| **Tasmanian hunter-gatherers** | Australian & Tasmanian Aboriginal Peoples | 2 000 BCE – 1715 CE | 32 |
| **Tonga** | Tonga | 1878 CE – 2010 CE | 26 |
| **Tuʻi Tonga Empire** | Tuʻi Tonga Empire | 500 CE – 1815 CE | 18 |
| **Wallis and Futuna Islands** | Wallis and Futuna Islands | 1878 CE – 2010 CE | 13 |
| **WiYaPeMiAk (Weapemeoc-Yeopim)** | Micronesian Realms | 1492 CE | 2 |
| **Yiiji** | Australian & Tasmanian Aboriginal Peoples | 1600 CE – 1815 CE | 7 |

[↑ Back to top](#table-of-contents)

---

## <a id="caribbean"></a>Caribbean

* **Unique Entities**: 35
* **Total Appearances**: 315
* **Historical Span**: 1 500 BCE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Anguilla** | Anguilla | 1715 CE – 2010 CE | 15 |
| **Antigua and Barbuda** | Antigua and Barbuda | 1715 CE – 2010 CE | 13 |
| **Arawaks** | Caribbean Indigenous Peoples | 800 CE – 1300 CE | 7 |
| **Bahamas** | Bahamas | 1783 CE – 2010 CE | 8 |
| **Barbados** | Barbados | 1815 CE – 2010 CE | 9 |
| **Barbados (UK)** | Barbados | 1715 CE | 1 |
| **Boriken Taino** | Caribbean Indigenous Peoples | 1492 CE | 1 |
| **Caribbean hunter-gatherers** | Caribbean Indigenous Peoples | 1 500 BCE – 1650 CE | 31 |
| **Ciboney** | Caribbean Indigenous Peoples | 800 CE – 900 CE | 2 |
| **Cuba** | Cuba | 1914 CE – 2010 CE | 9 |
| **Cuba (Spain)** | Cuba | 1530 CE – 1715 CE | 5 |
| **Dominica** | Dominica | 1715 CE – 2010 CE | 15 |
| **Dominican Republic** | Dominican Republic | 1878 CE – 2010 CE | 12 |
| **Grenada** | Grenada | 1715 CE – 2010 CE | 10 |
| **Guadeloupe** | Guadeloupe | 1715 CE – 2010 CE | 13 |
| **Haiti** | Haiti | 1715 CE – 2010 CE | 14 |
| **Jamaica** | Jamaica | 1920 CE – 2010 CE | 7 |
| **Jamaica (UK)** | Jamaica | 1715 CE – 1945 CE | 2 |
| **Kalinago** | Caribbean Indigenous Peoples | 1400 CE | 1 |
| **Kalinago (Island Carib)** | Caribbean Indigenous Peoples | 1492 CE | 1 |
| **Lokono (Arawak)** | Caribbean Indigenous Peoples | 1492 CE | 1 |
| **Martinique** | Martinique | 1715 CE – 2010 CE | 9 |
| **Martinique (France)** | Martinique | 1945 CE | 1 |
| **Montserrat** | Montserrat | 1715 CE – 2010 CE | 13 |
| **Netherlands Antilles** | Netherlands Antilles | 1715 CE – 2010 CE | 15 |
| **Puerto Rico** | Puerto Rico | 1914 CE – 2010 CE | 9 |
| **Saint Barthelemy** | Saint Barthelemy | 1715 CE – 2010 CE | 15 |
| **Saint Kitts and Nevis** | Saint Kitts and Nevis | 1815 CE – 2010 CE | 12 |
| **Saint Kitts and Nevis (UK)** | Saint Kitts and Nevis | 1715 CE | 1 |
| **Saint Lucia** | Saint Lucia | 1715 CE – 2010 CE | 10 |
| **Saint Martin** | Saint Martin | 1715 CE – 2010 CE | 15 |
| **Saint Vincent and the Grenadines** | Saint Vincent and the Grenadines | 1715 CE – 2010 CE | 10 |
| **Taino** | Caribbean Indigenous Peoples | 1000 CE – 1492 CE | 7 |
| **Trinidad** | Trinidad and Tobago | 1715 CE – 2010 CE | 10 |
| **United States Virgin Islands** | United States Virgin Islands | 1878 CE – 2010 CE | 11 |

[↑ Back to top](#table-of-contents)

---

## <a id="southeast-asia"></a>Southeast Asia

* **Unique Entities**: 50
* **Total Appearances**: 298
* **Historical Span**: 2 000 BCE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Aceh** | Maritime Southeast Asia (Nusantara) | 1279 CE – 1600 CE | 7 |
| **Annam** | Vietnamese Dynasties & Champa | 1000 CE – 1945 CE | 7 |
| **Arakan** | Burmese Kingdoms | 200 BCE – 1815 CE | 12 |
| **Arakan (Indian princely state)** | Burmese Kingdoms | 1700 CE – 1715 CE | 2 |
| **Austro-Asiatic rice cultures** | Austroasiatic Agricultural Traditions | 2 000 BCE – 400 BCE | 5 |
| **Ava** | Burmese Kingdoms | 1650 CE – 1715 CE | 3 |
| **Ayutthaya** | Ayutthaya Kingdom (Siam) | 1400 CE – 1715 CE | 10 |
| **Brunei** | Brunei | 1650 CE – 2010 CE | 18 |
| **Burma** | Myanmar | 1783 CE – 2010 CE | 8 |
| **Burmese** | Burmese Kingdoms | 1 500 BCE – 700 BCE | 3 |
| **Burmese kingdoms** | Burmese Kingdoms | 1492 CE – 1600 CE | 4 |
| **Cambodia** | Cambodia | 1492 CE – 2010 CE | 16 |
| **Champa** | Vietnamese Dynasties & Champa | 500 CE – 1500 CE | 12 |
| **Champa City States** | Vietnamese Dynasties & Champa | 1200 CE | 1 |
| **Dutch East Indies** | Maritime Southeast Asia (Nusantara) | 1650 CE – 1938 CE | 10 |
| **Dvaravati** | Siamese & Tai Kingdoms | 600 CE – 1000 CE | 4 |
| **Funan** | Khmer Empire | 500 CE – 600 CE | 2 |
| **Indonesia** | Indonesia | 1945 CE – 2010 CE | 6 |
| **Kediri** | Maritime Southeast Asia (Nusantara) | 1279 CE – 1400 CE | 3 |
| **Khmer Empire** | Khmer Empire (Angkor) | 900 CE – 1400 CE | 7 |
| **Kingdom of Pagan** | Burmese Kingdoms | 1000 CE | 1 |
| **Kungarakany** | Burmese Kingdoms | 1600 CE – 1815 CE | 7 |
| **Lan Na** | Siamese & Tai Kingdoms | 1600 CE – 1715 CE | 4 |
| **Laos** | Laos | 1492 CE – 2010 CE | 11 |
| **Lavo** | Siamese & Tai Kingdoms | 500 CE | 1 |
| **Malacca** | Maritime Southeast Asia (Nusantara) | 1492 CE – 1600 CE | 4 |
| **Malay** | Maritime Southeast Asia (Nusantara) | 800 CE – 900 CE | 2 |
| **Malaya** | Maritime Southeast Asia (Nusantara) | 1650 CE – 1914 CE | 10 |
| **Malays** | Maritime Southeast Asia (Nusantara) | 200 BCE – 1200 CE | 2 |
| **Malaysia** | Malaysia | 1920 CE – 2010 CE | 8 |
| **Malaysian Islamic states** | Maritime Southeast Asia (Nusantara) | 1492 CE – 1600 CE | 4 |
| **Mataram** | Maritime Southeast Asia (Nusantara) | 600 CE – 900 CE | 4 |
| **Minang** | Maritime Southeast Asia (Nusantara) | 1600 CE – 1815 CE | 14 |
| **Mon-Khmer** | Austroasiatic Agricultural Traditions | 200 BCE | 1 |
| **Pagan** | Burmese Kingdoms | 900 CE – 1400 CE | 4 |
| **Pegu** | Burmese Kingdoms | 1492 CE – 1600 CE | 4 |
| **Philippines** | Philippines | 1492 CE – 2010 CE | 20 |
| **Proto-Thai cultures** | Siamese & Tai Kingdoms | 400 BCE | 1 |
| **Pyu state** | Burmese Kingdoms | 800 CE – 1200 CE | 3 |
| **Rattanakosin Kingdom** | Siamese & Tai Kingdoms | 1783 CE – 1930 CE | 9 |
| **Siam** | Thailand | 1800 CE – 1938 CE | 2 |
| **Slavonic tribes** | Siamese & Tai Kingdoms | 800 CE | 1 |
| **Srivijaya Empire** | Maritime Southeast Asia (Nusantara) | 800 CE – 1400 CE | 8 |
| **Sukhothai** | Siamese & Tai Kingdoms | 1279 CE – 1400 CE | 5 |
| **Thai** | Siamese & Tai Kingdoms | 2 000 BCE – 200 BCE | 2 |
| **Thai Kingdoms** | Siamese & Tai Kingdoms | 600 CE – 700 CE | 2 |
| **Thailand** | Thailand | 1945 CE – 2010 CE | 5 |
| **Tonkin** | Vietnamese Dynasties & Champa | 1945 CE | 1 |
| **Vietnam** | Vietnam | 1960 CE – 2010 CE | 4 |
| **Đại Việt** | Đại Việt | 1100 CE – 1800 CE | 14 |

[↑ Back to top](#table-of-contents)

---

## <a id="west-africa"></a>West Africa

* **Unique Entities**: 37
* **Total Appearances**: 294
* **Historical Span**: 8 000 BCE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Akan** | Gulf of Guinea Kingdoms | 1492 CE – 1700 CE | 6 |
| **Asante** | Gulf of Guinea Kingdoms | 1715 CE – 1900 CE | 7 |
| **Bantu** | Sub-Saharan Agricultural Traditions | 8 000 BCE – 2 000 BCE | 5 |
| **Bantu peoples** | Sub-Saharan Agricultural Traditions | 800 CE – 1500 CE | 10 |
| **Benin** | Benin | 1279 CE – 2010 CE | 17 |
| **Burkina Faso** | Burkina Faso | 1945 CE – 2010 CE | 5 |
| **Dahomey** | Benin | 1783 CE – 1900 CE | 5 |
| **Empire of Ghana** | Sahelian & Western Sudanese Empires | 300 CE – 700 CE | 5 |
| **Fante** | Gulf of Guinea Kingdoms | 1815 CE | 1 |
| **Fulani Empire** | Sahelian & Western Sudanese Empires | 1815 CE | 1 |
| **Gambia** | Gambia | 1878 CE – 1900 CE | 3 |
| **Ghana** | Ghana | 800 CE – 2010 CE | 11 |
| **Gold Coast** | Ghana | 1914 CE – 1945 CE | 3 |
| **Gold Coast (GB)** | Ghana | 1878 CE – 1880 CE | 2 |
| **Guinea** | Guinea | 1945 CE – 2010 CE | 5 |
| **Guinea-Bissau** | Guinea-Bissau | 1920 CE – 2010 CE | 7 |
| **Guinea-Bissau (Portugal)** | Guinea-Bissau | 1945 CE | 1 |
| **Hausa States** | Sahelian & Western Sudanese Empires | 1492 CE – 1800 CE | 9 |
| **Ivory Coast** | Ivory Coast | 1878 CE – 2010 CE | 8 |
| **Kanem** | Sahelian & Western Sudanese Empires | 800 CE – 1200 CE | 5 |
| **Kanem-Bornu** | Sahelian & Western Sudanese Empires | 1279 CE – 1900 CE | 16 |
| **Liberia** | Liberia | 1878 CE – 2010 CE | 12 |
| **Mali** | Mali | 1000 CE – 2010 CE | 16 |
| **Mossi States** | Sahelian & Western Sudanese Empires | 1492 CE – 1900 CE | 13 |
| **Niger** | Niger | 1945 CE – 2010 CE | 5 |
| **Nigeria** | Nigeria | 1914 CE – 2010 CE | 9 |
| **Oyo** | Gulf of Guinea Kingdoms | 1492 CE – 1900 CE | 13 |
| **Portuguese Guinea** | Guinea-Bissau | 1650 CE – 1914 CE | 10 |
| **Senegal** | Senegal | 1530 CE – 2010 CE | 14 |
| **Senegal (FR)** | Senegal | 1878 CE – 1880 CE | 2 |
| **Sierra Leone** | Sierra Leone | 1815 CE – 2010 CE | 13 |
| **Songhai** | Sahelian & Western Sudanese Empires | 1492 CE – 1800 CE | 9 |
| **Togo** | Togo | 1920 CE – 2010 CE | 8 |
| **Wadai** | Sahelian & Western Sudanese Empires | 1530 CE – 1800 CE | 7 |
| **Wadai Empire** | Sahelian & Western Sudanese Empires | 1878 CE – 1880 CE | 2 |
| **Wassoulou Empire** | Sahelian & Western Sudanese Empires | 1878 CE – 1880 CE | 2 |
| **West African cereal farmers** | Sub-Saharan Agricultural Traditions | 1 500 BCE – 1500 CE | 27 |

[↑ Back to top](#table-of-contents)

---

## <a id="east-asia"></a>East Asia

* **Unique Entities**: 70
* **Total Appearances**: 290
* **Historical Span**: 10 000 BCE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Ainu** | Ainu Peoples | 5 000 BCE – 1700 CE | 30 |
| **Ainus** | Ainu Peoples | 1279 CE – 1500 CE | 6 |
| **Balhae** | Korean Dynasties | 900 CE | 1 |
| **Bedouins** | Japanese Dynasties & Kingdoms | 900 CE | 1 |
| **Bilinara** | Japanese Dynasties & Kingdoms | 1600 CE – 1815 CE | 7 |
| **China** | China | 1945 CE – 2010 CE | 5 |
| **Chinantla (Tsa ju jmí’)** | Imperial Chinese Dynasties | 1492 CE | 1 |
| **Chinese Warlords** | Imperial Chinese Dynasties | 1920 CE – 1930 CE | 2 |
| **Chinese warlords** | Imperial Chinese Dynasties | 1938 CE | 1 |
| **Cochin China** | Imperial Chinese Dynasties | 1783 CE – 1945 CE | 7 |
| **Dutch Formosa** | Imperial Chinese Dynasties | 1650 CE – 1700 CE | 2 |
| **Eduria (Taiwano)** | Imperial Chinese Dynasties | 1492 CE | 1 |
| **Empire of Japan** | Japanese Dynasties & Kingdoms | 1914 CE – 1938 CE | 4 |
| **French Indo-China** | Imperial Chinese Dynasties | 1920 CE – 1938 CE | 3 |
| **French Indochina** | Imperial Chinese Dynasties | 1878 CE – 1914 CE | 4 |
| **Gaya** | Korean Dynasties | 100 CE – 400 CE | 4 |
| **Gojoseon** | Korean Dynasties | 400 BCE | 1 |
| **Goryeo** | Korean Dynasties | 1200 CE | 1 |
| **Hainan** | Imperial Chinese Dynasties | 1 BCE – 1400 CE | 14 |
| **Han Empire** | Han Dynasty | 200 BCE – 100 BCE | 2 |
| **Hong Kong** | Hong Kong | 1650 CE – 2010 CE | 18 |
| **Imperial Japan** | Japanese Dynasties & Kingdoms | 1878 CE – 1900 CE | 3 |
| **Imperial Japan (Fujiwara)** | Japanese Dynasties & Kingdoms | 1000 CE – 1200 CE | 3 |
| **Japan** | Japan | 800 CE – 2010 CE | 10 |
| **Japan (USA)** | Japan | 1945 CE | 1 |
| **Japan (Warring States)** | Japan | 1530 CE – 1600 CE | 2 |
| **Jōmon** | Jōmon Prehistoric Culture | 10 000 BCE – 2 000 BCE | 6 |
| **Kanara** | Japanese Dynasties & Kingdoms | 1800 CE | 1 |
| **Khitans** | Imperial Chinese Dynasties | 900 CE | 1 |
| **Koguryo** | Korean Dynasties | 1 BCE – 700 CE | 9 |
| **Korea** | South Korea | 1000 CE – 1900 CE | 15 |
| **Korea (USA)** | South Korea | 1945 CE | 1 |
| **Korea (USSR)** | South Korea | 1945 CE | 1 |
| **Korea, Democratic People's Republic of** | Korean Dynasties | 1960 CE – 2010 CE | 4 |
| **Korea, Republic of** | Korean Dynasties | 1960 CE – 2010 CE | 4 |
| **Koreans** | Korean Dynasties | 2 000 BCE | 1 |
| **Kushan Empire** | Imperial Chinese Dynasties | 100 BCE – 100 CE | 2 |
| **Late Jomon culture** | Jōmon Prehistoric Culture | 1 500 BCE – 400 BCE | 5 |
| **Liao** | Imperial Chinese Dynasties | 1000 CE – 1200 CE | 3 |
| **Macedon and Hellenic League** | Japanese Dynasties & Kingdoms | 200 BCE | 1 |
| **Manchu Empire** | Qing Dynasty | 1650 CE – 1914 CE | 9 |
| **Manchuria** | Imperial Chinese Dynasties | 1920 CE – 1945 CE | 3 |
| **Min-Yue** | Imperial Chinese Dynasties | 200 BCE – 100 BCE | 2 |
| **Ming Chinese Empire** | Ming Dynasty | 1500 CE – 1600 CE | 3 |
| **Ming Empire** | Ming Dynasty | 1492 CE | 1 |
| **Mingin** | Imperial Chinese Dynasties | 1600 CE – 1800 CE | 6 |
| **Nan-Yue** | Imperial Chinese Dynasties | 200 BCE – 100 BCE | 2 |
| **Narangga** | Japanese Dynasties & Kingdoms | 1600 CE – 1800 CE | 6 |
| **Paekche** | Korean Dynasties | 100 CE – 700 CE | 9 |
| **Paleo-Koreans** | Korean Dynasties | 1 500 BCE – 700 BCE | 3 |
| **Parhae** | Korean Dynasties | 800 CE | 1 |
| **Post-Ming Warlords** | Imperial Chinese Dynasties | 1650 CE – 1700 CE | 2 |
| **Qin** | Imperial Chinese Dynasties | 323 BCE – 300 BCE | 2 |
| **Qing Empire** | Imperial Chinese Dynasties | 1783 CE – 1800 CE | 2 |
| **Santo Domingo (Spain)** | Imperial Chinese Dynasties | 1715 CE | 1 |
| **Shogun Japan (Kamakura)** | Japanese Dynasties & Kingdoms | 1279 CE – 1400 CE | 3 |
| **Silia** | Korean Dynasties | 800 CE | 1 |
| **Silla** | Korean Dynasties | 1 BCE – 900 CE | 9 |
| **Sinic** | Imperial Chinese Dynasties | 1 500 BCE – 700 BCE | 3 |
| **Sixteen Kingdoms** | Imperial Chinese Dynasties | 400 CE | 1 |
| **Song Empire** | Song Dynasty | 1000 CE – 1200 CE | 3 |
| **Taiwan** | Taiwan | 1492 CE – 2010 CE | 9 |
| **Tang Empire** | Tang Dynasty | 800 CE – 900 CE | 2 |
| **Wu** | Imperial Chinese Dynasties | 1 500 BCE – 700 BCE | 3 |
| **Xia** | Imperial Chinese Dynasties | 2 000 BCE | 1 |
| **Yamato** | Japanese Dynasties & Kingdoms | 500 CE – 900 CE | 4 |
| **Yayoi** | Japanese Dynasties & Kingdoms | 400 BCE – 100 CE | 2 |
| **Yue** | Imperial Chinese Dynasties | 323 BCE – 300 BCE | 2 |
| **Zhoa** | Imperial Chinese Dynasties | 1 500 BCE – 700 BCE | 3 |
| **Zhou states** | Imperial Chinese Dynasties | 500 BCE – 300 BCE | 4 |

[↑ Back to top](#table-of-contents)

---

## <a id="south-asia"></a>South Asia

* **Unique Entities**: 85
* **Total Appearances**: 290
* **Historical Span**: 5 000 BCE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Ahmadnagar** | Delhi & Deccan Sultanates | 1492 CE – 1650 CE | 5 |
| **Avanti** | Vedic & Early Indian Kingdoms | 500 BCE | 1 |
| **Bahmani Kingdom** | Delhi & Deccan Sultanates | 1500 CE | 1 |
| **Bangladesh** | Bangladesh | 1945 CE – 2010 CE | 4 |
| **Berar** | Delhi & Deccan Sultanates | 1492 CE | 1 |
| **Bhutan** | Bhutan | 1200 CE – 2010 CE | 19 |
| **Bidar** | Delhi & Deccan Sultanates | 1492 CE – 1650 CE | 5 |
| **Bijapur** | Delhi & Deccan Sultanates | 1492 CE – 1650 CE | 5 |
| **Ceylon** | Sri Lanka | 1650 CE – 1938 CE | 12 |
| **Ceylon (Dutch)** | Sri Lanka | 1650 CE – 1800 CE | 5 |
| **Chalukya Empire** | Southern & Deccan Indian Kingdoms | 1000 CE | 1 |
| **Chalukyas** | Southern & Deccan Indian Kingdoms | 600 CE – 700 CE | 2 |
| **Cheras** | Southern & Deccan Indian Kingdoms | 500 CE – 700 CE | 2 |
| **Chola** | Southern & Deccan Indian Kingdoms | 200 CE | 1 |
| **Chola Empire** | Southern & Deccan Indian Kingdoms | 1000 CE – 1400 CE | 5 |
| **Cholas** | Southern & Deccan Indian Kingdoms | 500 CE – 1100 CE | 4 |
| **Cochin** | Indian Kingdoms & Princely States | 1783 CE – 1800 CE | 2 |
| **Dravidians** | Southern & Deccan Indian Kingdoms | 5 000 BCE – 700 BCE | 7 |
| **Gandhara grave culture** | Vedic & Early Indian Kingdoms | 1 000 BCE | 1 |
| **Golconda** | Delhi & Deccan Sultanates | 1783 CE | 1 |
| **Gujarat** | Indian Kingdoms & Princely States | 1492 CE | 1 |
| **Gupta Empire** | Gupta Empire | 300 CE – 500 CE | 3 |
| **Gurjara Pratihara** | Medieval Indian Kingdoms | 800 CE – 900 CE | 2 |
| **Hindu kingdoms** | Indian Kingdoms & Princely States | 500 BCE – 1715 CE | 19 |
| **Hindu kingdoms and republics** | Indian Kingdoms & Princely States | 323 BCE – 300 BCE | 3 |
| **India** | India | 1783 CE – 2010 CE | 8 |
| **Indus valley civilization** | Vedic & Early Indian Kingdoms | 4 000 BCE – 2 000 BCE | 3 |
| **Kadambas** | Southern & Deccan Indian Kingdoms | 500 CE | 1 |
| **Kalinga** | Mauryan & Classical Indian Empires | 1 BCE – 1000 CE | 6 |
| **Kandy** | Sri Lankan & Sinhalese Kingdoms | 1650 CE – 1800 CE | 6 |
| **Kashmir and Ladakh** | Indian Kingdoms & Princely States | 1279 CE – 1400 CE | 3 |
| **Kasi** | Vedic & Early Indian Kingdoms | 500 BCE | 1 |
| **Kingdom of Kashmir** | Indian Kingdoms & Princely States | 700 CE | 1 |
| **Kosala** | Vedic & Early Indian Kingdoms | 500 BCE | 1 |
| **Kuru** | Vedic & Early Indian Kingdoms | 500 BCE | 1 |
| **Kushan Principalities** | Gupta & Classical Indian Empires | 500 CE | 1 |
| **Magadha** | Vedic & Early Indian Kingdoms | 500 BCE – 200 CE | 6 |
| **Maitraka Kingdom** | Gupta & Classical Indian Empires | 700 CE | 1 |
| **Malla** | Vedic & Early Indian Kingdoms | 500 BCE | 1 |
| **Maratha** | Maratha Empire | 1715 CE | 1 |
| **Maratha Confederacy** | Maratha Empire | 1783 CE – 1815 CE | 3 |
| **Mauryan Empire** | Mauryan Empire | 300 BCE – 100 BCE | 3 |
| **Mughal Empire** | Mughal Empire | 1530 CE – 1715 CE | 5 |
| **Mysore** | Indian Kingdoms & Princely States | 1783 CE – 1800 CE | 2 |
| **Mysore (Indian princely state)** | Indian Kingdoms & Princely States | 1815 CE | 1 |
| **Nepal** | Nepal | 1200 CE – 2010 CE | 18 |
| **Nizam's Dominions** | Indian Kingdoms & Princely States | 1800 CE | 1 |
| **Orissa** | Indian Kingdoms & Princely States | 1000 CE – 1600 CE | 8 |
| **Otoe-Missouri (Oklahoma)** | Indian Kingdoms & Princely States | 1492 CE | 1 |
| **Otoe-Missouria (Oklahoma)** | Indian Kingdoms & Princely States | 1492 CE | 1 |
| **Pakistan** | Pakistan | 1945 CE – 2010 CE | 5 |
| **Palas** | Medieval Indian Kingdoms | 700 CE – 1100 CE | 9 |
| **Pallava** | Southern & Deccan Indian Kingdoms | 900 CE | 1 |
| **Pallava state** | Southern & Deccan Indian Kingdoms | 800 CE | 1 |
| **Pallavas** | Southern & Deccan Indian Kingdoms | 500 CE – 700 CE | 3 |
| **Pancala** | Vedic & Early Indian Kingdoms | 500 BCE | 1 |
| **Pandya state** | Southern & Deccan Indian Kingdoms | 800 CE – 1400 CE | 5 |
| **Pandyas** | Southern & Deccan Indian Kingdoms | 500 CE – 700 CE | 2 |
| **Peoria (Oklahoma)** | Indian Kingdoms & Princely States | 1492 CE | 1 |
| **Pratiharas** | Medieval Indian Kingdoms | 1000 CE – 1100 CE | 2 |
| **Punjab** | Indian Kingdoms & Princely States | 1492 CE | 1 |
| **Rajput Clans and Small States** | Medieval Indian Kingdoms | 800 CE | 1 |
| **Rajput kingdoms** | Medieval Indian Kingdoms | 1000 CE – 1200 CE | 2 |
| **Rajputana** | Medieval Indian Kingdoms | 1530 CE – 1600 CE | 2 |
| **Rajputs** | Medieval Indian Kingdoms | 1800 CE | 1 |
| **Rashtrakuta** | Southern & Deccan Indian Kingdoms | 900 CE | 1 |
| **Rashtrakuta state** | Southern & Deccan Indian Kingdoms | 800 CE | 1 |
| **Sac and Fox (Oklahoma)** | Indian Kingdoms & Princely States | 1492 CE | 1 |
| **Satavahanihara** | Southern & Deccan Indian Kingdoms | 1 BCE – 400 CE | 5 |
| **Sikhs** | Sikh Empire | 1800 CE | 1 |
| **Sikkim (Indian princely state)** | Himalayan Kingdoms | 1815 CE | 1 |
| **Simhala** | Sri Lankan & Sinhalese Kingdoms | 500 BCE – 700 CE | 14 |
| **Sindh** | Indian Kingdoms & Princely States | 900 CE – 1800 CE | 2 |
| **Solankis** | Medieval Indian Kingdoms | 1100 CE | 1 |
| **Sri Lanka** | Sri Lanka | 1945 CE – 2010 CE | 5 |
| **Sultanate of Delhi** | Delhi & Deccan Sultanates | 1200 CE – 1500 CE | 6 |
| **Surasena** | Vedic & Early Indian Kingdoms | 500 BCE | 1 |
| **Travancore** | Indian Kingdoms & Princely States | 1783 CE – 1815 CE | 3 |
| **Vakataka** | Gupta & Classical Indian Empires | 500 CE | 1 |
| **Vatsa** | Vedic & Early Indian Kingdoms | 500 BCE | 1 |
| **Vedic Aryans** | Vedic & Early Indian Kingdoms | 1 500 BCE – 700 BCE | 3 |
| **Vijayanagara** | Southern & Deccan Indian Kingdoms | 1492 CE – 1650 CE | 5 |
| **Western Chalukyas** | Southern & Deccan Indian Kingdoms | 1100 CE | 1 |
| **Western Gangas** | Southern & Deccan Indian Kingdoms | 500 CE – 700 CE | 2 |
| **minor Hindu kingdoms** | Indian Kingdoms & Princely States | 1279 CE – 1300 CE | 2 |

[↑ Back to top](#table-of-contents)

---

## <a id="east-africa"></a>East Africa

* **Unique Entities**: 44
* **Total Appearances**: 266
* **Historical Span**: 4 000 BCE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Abyssinia** | Ethiopia | 1914 CE | 1 |
| **Adal** | Somali & Horn Sultanates | 1492 CE – 1600 CE | 4 |
| **Alwa** | Nubian Kingdoms | 600 CE – 1500 CE | 12 |
| **Axum** | Ethiopian Realm | 1 BCE – 900 CE | 10 |
| **Blemmyes** | Nubian Kingdoms | 500 BCE – 700 CE | 14 |
| **British Somaliland** | Somali & Horn Sultanates | 1914 CE – 1945 CE | 5 |
| **Buganda** | Great Lakes & Swahili Kingdoms | 1815 CE – 1900 CE | 4 |
| **Bunyoro** | Great Lakes & Swahili Kingdoms | 1815 CE – 1900 CE | 4 |
| **Burundi** | Burundi | 1815 CE – 2010 CE | 12 |
| **Damot** | Ethiopian Realm | 300 BCE | 1 |
| **Darfur** | Great Lakes & Swahili Kingdoms | 1530 CE – 1800 CE | 7 |
| **Djibouti** | Djibouti | 1914 CE – 2010 CE | 6 |
| **Eritrea** | Eritrea | 1914 CE – 2010 CE | 8 |
| **Eritrea (Italy)** | Eritrea | 1938 CE | 1 |
| **Ethiopia** | Ethiopia | 1279 CE – 2010 CE | 24 |
| **Ethiopia (Italy)** | Ethiopia | 1938 CE | 1 |
| **Ethiopian Highland Peoples** | Ethiopian Highlands Traditions | 700 CE | 1 |
| **Ethiopian highland farmers** | Ethiopian Highlands Traditions | 1 500 BCE – 323 BCE | 6 |
| **French Somaliland** | Djibouti | 1920 CE – 1938 CE | 3 |
| **Funj** | Great Lakes & Swahili Kingdoms | 1492 CE – 1800 CE | 4 |
| **Futa Toro** | Great Lakes & Swahili Kingdoms | 1878 CE – 1900 CE | 3 |
| **Ifat** | Somali & Horn Sultanates | 1200 CE | 1 |
| **Imerina** | Kingdom of Madagascar (Merina) | 1878 CE – 1900 CE | 3 |
| **Italian Somaliland** | Somali & Horn Sultanates | 1914 CE – 1938 CE | 4 |
| **Kenya** | Kenya | 1920 CE – 2010 CE | 8 |
| **Kerma** | Nubian Kingdoms | 4 000 BCE – 2 000 BCE | 3 |
| **Kush** | Nubian Kingdoms | 1 500 BCE – 400 BCE | 4 |
| **Madagascar** | Madagascar | 1000 CE – 2010 CE | 22 |
| **Madagascar (France)** | Madagascar | 1914 CE – 1945 CE | 5 |
| **Makkura** | Nubian Kingdoms | 500 CE – 1400 CE | 11 |
| **Merina Kingdom** | Kingdom of Madagascar (Merina) | 1000 CE – 1815 CE | 16 |
| **Meroe** | Nubian Kingdoms | 500 BCE – 400 CE | 10 |
| **Nobatia** | Nubian Kingdoms | 600 CE – 700 CE | 2 |
| **Oromo** | Ethiopian Realm | 1530 CE – 1800 CE | 7 |
| **Rwanda** | Rwanda | 1815 CE – 2010 CE | 9 |
| **Rwanda (Belgium)** | Rwanda | 1920 CE – 1938 CE | 3 |
| **Shoa** | Ethiopian Realm | 1279 CE – 1400 CE | 3 |
| **Shoalwater Bay** | Nubian Kingdoms | 1492 CE | 1 |
| **Somalia** | Somalia | 1815 CE – 2010 CE | 6 |
| **Sultanate of Zanzibar** | Great Lakes & Swahili Kingdoms | 1880 CE – 1900 CE | 2 |
| **Sultinate of Zanzibar** | Great Lakes & Swahili Kingdoms | 1878 CE | 1 |
| **Toromona** | Ethiopian Realm | 1492 CE | 1 |
| **Uganda** | Uganda | 1914 CE – 2010 CE | 9 |
| **Zanzibar** | Tanzania | 1715 CE – 1815 CE | 4 |

[↑ Back to top](#table-of-contents)

---

## <a id="southern-europe"></a>Southern Europe

* **Unique Entities**: 38
* **Total Appearances**: 247
* **Historical Span**: 500 BCE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Andorra** | Andorra | 1938 CE – 2010 CE | 6 |
| **Aragón** | Spanish Kingdoms | 1000 CE – 1500 CE | 8 |
| **Asturias** | Spanish Kingdoms | 800 CE – 900 CE | 2 |
| **Boihaenum** | Ancient European & Mediterranean Civilizations | 1 BCE – 200 CE | 3 |
| **Boii** | Ancient European & Mediterranean Civilizations | 500 BCE – 400 BCE | 2 |
| **Castile** | Spanish Kingdoms | 1279 CE – 1400 CE | 3 |
| **Castille** | Spanish Kingdoms | 1492 CE – 1500 CE | 2 |
| **Dumonii** | Ancient European & Mediterranean Civilizations | 1 BCE – 400 CE | 5 |
| **Emirate of Sicily** | Italian States | 900 CE – 1000 CE | 2 |
| **Etrurians** | Ancient European & Mediterranean Civilizations | 500 BCE – 400 BCE | 2 |
| **Florence** | Italian States | 1530 CE – 1600 CE | 2 |
| **Florida (Spain)** | Spanish Kingdoms | 1715 CE | 1 |
| **Genoa** | Italian States | 1530 CE – 1715 CE | 5 |
| **Greece** | Greece | 1878 CE – 2010 CE | 19 |
| **Hispaniola (Spain)** | Spanish Kingdoms | 1530 CE – 1700 CE | 4 |
| **Italy** | Italy | 1878 CE – 2010 CE | 20 |
| **Kingdom of Italy** | Italian States | 1914 CE | 1 |
| **Kingdom of Sardinia** | Italian States | 1783 CE – 1815 CE | 5 |
| **Kingdom of the Two Sicilies** | Italian States | 1783 CE – 1815 CE | 3 |
| **León** | Spanish Kingdoms | 1000 CE – 1200 CE | 3 |
| **Malta** | Malta | 1878 CE – 2010 CE | 7 |
| **Milan** | Italian States | 1530 CE – 1715 CE | 5 |
| **Naples** | Italian States | 1530 CE – 1715 CE | 5 |
| **Navarre** | Spanish Kingdoms | 1000 CE – 1500 CE | 8 |
| **Papal States** | Papal States | 800 CE – 1815 CE | 16 |
| **Portugal** | Portugal | 1200 CE – 2010 CE | 26 |
| **Sabines** | Ancient European & Mediterranean Civilizations | 323 BCE | 1 |
| **Sabini** | Ancient European & Mediterranean Civilizations | 500 BCE – 400 BCE | 2 |
| **Samnites** | Ancient European & Mediterranean Civilizations | 500 BCE – 400 BCE | 2 |
| **San Marino** | San Marino | 1815 CE | 1 |
| **Sardinia** | Italian States | 1000 CE – 1715 CE | 11 |
| **Sardinia-Piedmont** | Italian States | 1650 CE – 1715 CE | 3 |
| **Savoy** | Italian States | 1530 CE – 1600 CE | 2 |
| **Sicily** | Italian States | 1279 CE – 1715 CE | 9 |
| **Spain** | Spain | 1530 CE – 2010 CE | 24 |
| **Tuscany** | Italian States | 1650 CE – 1815 CE | 6 |
| **Venice** | Republic of Venice | 1000 CE – 1715 CE | 13 |
| **Viceroyalty of New Spain** | Spanish Kingdoms | 1530 CE – 1815 CE | 8 |

[↑ Back to top](#table-of-contents)

---

## <a id="western-europe"></a>Western Europe

* **Unique Entities**: 53
* **Total Appearances**: 241
* **Historical Span**: 1 500 BCE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Anglo-Saxons** | Germanic & Migration Kingdoms | 500 CE | 1 |
| **Belgium** | Belgium | 1878 CE – 2010 CE | 12 |
| **Britany** | Celtic Nations & Kingdoms | 800 CE – 1530 CE | 11 |
| **Burgundians** | Germanic & Migration Kingdoms | 400 CE – 500 CE | 2 |
| **Carolingian Empire** | Germanic & Migration Kingdoms | 800 CE – 900 CE | 4 |
| **Celtiberians** | Celtic Nations & Kingdoms | 1 500 BCE – 700 BCE | 3 |
| **Celtic kingdoms** | Celtic Nations & Kingdoms | 800 CE – 1200 CE | 5 |
| **Celts** | Celtic Nations & Kingdoms | 400 BCE – 100 BCE | 5 |
| **Dutch Brazil** | Low Countries | 1650 CE – 1700 CE | 2 |
| **Dutch Guiana** | Low Countries | 1878 CE – 1900 CE | 3 |
| **Dutch Guinea** | Low Countries | 1945 CE | 1 |
| **Dutch Republic** | Low Countries | 1600 CE – 1715 CE | 4 |
| **Dutch settlements** | Low Countries | 1783 CE – 1800 CE | 2 |
| **England** | United Kingdom | 1000 CE – 1500 CE | 4 |
| **England and Ireland** | Celtic Nations & Kingdoms | 1530 CE – 1700 CE | 6 |
| **France** | France | 1279 CE – 2010 CE | 28 |
| **Frankish Kingdom** | Germanic & Migration Kingdoms | 600 CE – 700 CE | 3 |
| **Franks** | Germanic & Migration Kingdoms | 400 CE – 500 CE | 4 |
| **French Cameroons** | Kingdom of France | 1920 CE – 1938 CE | 3 |
| **French Equatorial Africa** | Kingdom of France | 1914 CE – 1938 CE | 4 |
| **French West Africa** | Kingdom of France | 1914 CE – 1938 CE | 4 |
| **Frisians** | Germanic & Migration Kingdoms | 600 CE – 700 CE | 2 |
| **Germanic tribes** | Germanic & Migration Kingdoms | 400 BCE | 1 |
| **Goths** | Germanic & Migration Kingdoms | 700 CE | 1 |
| **Hallstatt culture** | Hallstatt & La Tène Celtic Traditions | 400 BCE | 1 |
| **Ireland** | Ireland | 1938 CE – 2010 CE | 6 |
| **Kingdom of France** | Kingdom of France | 1000 CE – 1200 CE | 4 |
| **Kingdom of Ireland** | Celtic Nations & Kingdoms | 1715 CE – 1800 CE | 3 |
| **La Tène culture** | Hallstatt & La Tène Celtic Traditions | 700 BCE | 1 |
| **Lombard duchies** | Germanic & Migration Kingdoms | 800 CE – 900 CE | 2 |
| **Lombard principalities** | Germanic & Migration Kingdoms | 600 CE – 700 CE | 3 |
| **Lombardy** | Germanic & Migration Kingdoms | 1650 CE – 1815 CE | 6 |
| **Luxembourg** | Luxembourg | 1650 CE – 2010 CE | 18 |
| **Netherlands** | Netherlands | 1715 CE – 2010 CE | 14 |
| **Netherlands Indies** | Low Countries | 1878 CE – 1914 CE | 4 |
| **New France** | Kingdom of France | 1650 CE – 1700 CE | 2 |
| **New South Wales** | Celtic Nations & Kingdoms | 1815 CE | 1 |
| **New South Wales (UK)** | Celtic Nations & Kingdoms | 1878 CE – 1900 CE | 3 |
| **Ostrogoths** | Germanic & Migration Kingdoms | 400 CE – 600 CE | 6 |
| **Penobscot** | Celtic Nations & Kingdoms | 1492 CE | 1 |
| **Picts** | Celtic Nations & Kingdoms | 800 CE – 900 CE | 2 |
| **Saxons** | Germanic & Migration Kingdoms | 500 CE – 700 CE | 3 |
| **Saxony** | Germanic & Migration Kingdoms | 1783 CE – 1815 CE | 3 |
| **Scotland** | United Kingdom | 1000 CE – 1700 CE | 12 |
| **Scots** | Celtic Nations & Kingdoms | 800 CE – 900 CE | 2 |
| **Suebi** | Germanic & Migration Kingdoms | 500 CE | 1 |
| **Swedes and Goths** | Germanic & Migration Kingdoms | 800 CE – 900 CE | 2 |
| **United Kingdom** | United Kingdom | 1715 CE – 2010 CE | 12 |
| **United Kingdom of Great Britain and Ireland** | Celtic Nations & Kingdoms | 1815 CE – 1930 CE | 7 |
| **Vandals** | Germanic & Migration Kingdoms | 500 CE | 1 |
| **Visigothic Kingdom** | Germanic & Migration Kingdoms | 600 CE – 700 CE | 2 |
| **Visigoths** | Germanic & Migration Kingdoms | 400 CE – 500 CE | 2 |
| **Welsh** | Celtic Nations & Kingdoms | 800 CE – 900 CE | 2 |

[↑ Back to top](#table-of-contents)

---

## <a id="middle-east"></a>Middle East

* **Unique Entities**: 35
* **Total Appearances**: 233
* **Historical Span**: 1 500 BCE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Arabian pastoral nomads** | Arabian & Gulf Emirates | 1 500 BCE – 700 BCE | 3 |
| **Arabs** | Arabian & Gulf Emirates | 200 BCE – 1500 CE | 3 |
| **Eastern Roman Empire** | Arabian & Gulf Emirates | 400 CE – 700 CE | 4 |
| **Emirate of the White Sheep Turks** | Arabian & Gulf Emirates | 1492 CE – 1500 CE | 2 |
| **Hadramaut** | Arabian & Gulf Emirates | 323 BCE – 1700 CE | 21 |
| **Himyarite Kingdom** | Arabian & Gulf Emirates | 1 BCE – 500 CE | 6 |
| **Iran** | Iran | 1920 CE – 2010 CE | 8 |
| **Iraq** | Iraq | 1945 CE – 2010 CE | 5 |
| **Islamic city-states** | Arabian & Gulf Emirates | 1000 CE – 1600 CE | 10 |
| **Israel** | Israel | 1938 CE – 2010 CE | 6 |
| **Jordan** | Jordan | 1938 CE – 2010 CE | 6 |
| **Kuwait** | Kuwait | 1914 CE – 2010 CE | 7 |
| **Lebanon** | Lebanon | 1945 CE – 2010 CE | 5 |
| **Maan** | Arabian & Gulf Emirates | 200 BCE – 100 BCE | 2 |
| **Muscat** | Arabian & Gulf Emirates | 1000 CE – 1500 CE | 8 |
| **Muscat and Oman** | Arabian & Gulf Emirates | 1920 CE – 1938 CE | 3 |
| **Oman** | Oman | 1530 CE – 2010 CE | 16 |
| **Oman (British Raj)** | Oman | 1938 CE | 1 |
| **Ottoman Empire** | Ottoman Empire | 1400 CE – 1914 CE | 21 |
| **Ottoman Sultanate** | Arabian & Gulf Emirates | 1920 CE | 1 |
| **Persia** | Iran | 400 CE – 1914 CE | 8 |
| **Qataban** | Arabian & Gulf Emirates | 323 BCE – 100 BCE | 4 |
| **Qatar** | Qatar | 1878 CE – 2010 CE | 13 |
| **Republic of Turkey** | Turkey | 1930 CE | 1 |
| **Roman Republic** | Arabian & Gulf Emirates | 400 BCE – 100 BCE | 4 |
| **Saba** | Arabian & Gulf Emirates | 1 500 BCE – 100 BCE | 8 |
| **Saudi Arabia** | Saudi Arabia | 1938 CE – 2010 CE | 6 |
| **Seljuk Empire** | Ottoman & Seljuk Empires | 1100 CE | 1 |
| **Syria** | Syria | 1945 CE – 2010 CE | 5 |
| **Syria (France)** | Syria | 1920 CE – 1938 CE | 4 |
| **Trucial Oman** | Arabian & Gulf Emirates | 1878 CE – 1938 CE | 7 |
| **Turkey** | Turkey | 1930 CE – 2010 CE | 8 |
| **United Arab Emirates** | United Arab Emirates | 1945 CE – 2010 CE | 5 |
| **Yemen** | Yemen | 1000 CE – 2010 CE | 20 |
| **Yemen (UK)** | Yemen | 1938 CE | 1 |

[↑ Back to top](#table-of-contents)

---

## <a id="arctic-subarctic"></a>Arctic & Subarctic

* **Unique Entities**: 44
* **Total Appearances**: 225
* **Historical Span**: 10 000 BCE – 1800 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Acho Dene Koe** | Subarctic Indigenous Peoples | 1492 CE | 1 |
| **Alutiiq (Sugpiaq)** | Arctic & Circumpolar Peoples | 1492 CE | 1 |
| **Arctic marine mammal hunters** | Arctic & Circumpolar Peoples | 2 000 BCE – 1200 CE | 23 |
| **Athabaskan** | Subarctic Indigenous Peoples | 800 CE – 1650 CE | 12 |
| **Beothuk** | Subarctic Indigenous Peoples | 800 CE – 1600 CE | 9 |
| **Champagne & Aishihik** | Subarctic Indigenous Peoples | 1492 CE | 1 |
| **Chukchi** | Paleo-Siberian Peoples | 1530 CE – 1700 CE | 4 |
| **Dehcho Dene** | Subarctic Indigenous Peoples | 1492 CE | 1 |
| **Dene Tha'** | Subarctic Indigenous Peoples | 1492 CE | 1 |
| **Dorset** | Arctic & Circumpolar Peoples | 500 CE – 1400 CE | 9 |
| **Eyak** | Arctic & Circumpolar Peoples | 1492 CE | 1 |
| **Eyaq** | Arctic & Circumpolar Peoples | 1530 CE – 1800 CE | 7 |
| **Gwich'in Nành** | Subarctic Indigenous Peoples | 1492 CE | 1 |
| **Innu** | Subarctic Indigenous Peoples | 800 CE – 1500 CE | 9 |
| **Inuit** | Arctic & Circumpolar Peoples | 1492 CE | 1 |
| **Inupiaq** | Arctic & Circumpolar Peoples | 1530 CE – 1800 CE | 7 |
| **Inupiat** | Arctic & Circumpolar Peoples | 1492 CE | 1 |
| **Itelmen** | Paleo-Siberian Peoples | 1530 CE – 1700 CE | 4 |
| **Kaska Dena Kayeh** | Subarctic Indigenous Peoples | 1492 CE | 1 |
| **Kaskaskia** | Subarctic Indigenous Peoples | 1492 CE | 1 |
| **Koryaks** | Paleo-Siberian Peoples | 1530 CE – 1700 CE | 4 |
| **Montagnais Innu** | Subarctic Indigenous Peoples | 1530 CE – 1715 CE | 5 |
| **Naskapi Innu** | Subarctic Indigenous Peoples | 1530 CE – 1715 CE | 5 |
| **Nitassinan (Innu)** | Subarctic Indigenous Peoples | 1492 CE | 1 |
| **Okhotsk culture** | Okhotsk Maritime Culture | 10 000 BCE – 8 000 BCE | 2 |
| **Paleo-Inuit** | Arctic & Circumpolar Peoples | 500 BCE – 400 CE | 7 |
| **Paleo-Siberian hunter-gatherers** | Paleo-Siberian Peoples | 2 000 BCE – 1200 CE | 23 |
| **Sahtu** | Subarctic Indigenous Peoples | 1700 CE – 1715 CE | 2 |
| **Sahtu Dene and Metis** | Subarctic Indigenous Peoples | 1492 CE | 1 |
| **Siberians** | Paleo-Siberian Peoples | 1279 CE – 1500 CE | 5 |
| **Siginygmit (Sireniki) Yupik** | Arctic & Circumpolar Peoples | 1492 CE | 1 |
| **Sivuqaq (St. Lawrence Island) Yupik** | Arctic & Circumpolar Peoples | 1492 CE | 1 |
| **Subarctic forest hunter-gatherers** | Subarctic Indigenous Peoples | 1 500 BCE – 1715 CE | 32 |
| **Suspiaq** | Arctic & Circumpolar Peoples | 1530 CE – 1800 CE | 7 |
| **T'atsaot'ine** | Subarctic Indigenous Peoples | 1530 CE – 1800 CE | 7 |
| **Teslin Tlingit Council (BC)** | Subarctic Indigenous Peoples | 1492 CE | 1 |
| **Teslin Tlingit Council (Yukon)** | Subarctic Indigenous Peoples | 1492 CE | 1 |
| **Tetlit Gwich’in** | Subarctic Indigenous Peoples | 1492 CE | 1 |
| **Thule** | Arctic & Circumpolar Peoples | 800 CE – 1500 CE | 13 |
| **Tāłtān Konelīne (Tahltan)** | Subarctic Indigenous Peoples | 1492 CE | 1 |
| **Unangam Tanangin (Unangax̂ /Aleut)** | Arctic & Circumpolar Peoples | 1492 CE | 1 |
| **Ungazigmit (Chaplino) Yupik** | Arctic & Circumpolar Peoples | 1492 CE | 1 |
| **Yup'ik & Cup'ik** | Arctic & Circumpolar Peoples | 1530 CE – 1800 CE | 7 |
| **Yup’ik/Cup’ik** | Arctic & Circumpolar Peoples | 1492 CE | 1 |

[↑ Back to top](#table-of-contents)

---

## <a id="central-asia"></a>Central Asia

* **Unique Entities**: 71
* **Total Appearances**: 218
* **Historical Span**: 5 000 BCE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Afanasevo** | Eurasian Steppe Pastoral Traditions | 3 000 BCE – 2 000 BCE | 2 |
| **Afghanistan** | Afghanistan | 1783 CE – 2010 CE | 15 |
| **Alans** | Ancient Steppe Nomadic Confederations | 100 CE – 1100 CE | 5 |
| **Andronovo** | Eurasian Steppe Pastoral Traditions | 2 000 BCE | 1 |
| **Astrakhan Khanate** | Mongol & Post-Mongol Khanates | 1530 CE | 1 |
| **Avars** | Turkic & Steppe Khaganates | 600 CE – 900 CE | 4 |
| **Blue Horde** | Mongol & Post-Mongol Khanates | 1400 CE | 1 |
| **Bokhara Khanate** | Mongol & Post-Mongol Khanates | 1878 CE – 1880 CE | 2 |
| **Bukara Khanate** | Mongol & Post-Mongol Khanates | 1530 CE | 1 |
| **Bulgar Khanate** | Turkic & Steppe Khaganates | 1000 CE – 1400 CE | 6 |
| **Catacomb culture** | Eurasian Steppe Pastoral Traditions | 2 000 BCE | 1 |
| **Caucasian Alans** | Ancient Steppe Nomadic Confederations | 400 CE | 1 |
| **Chagatai Khanate** | Chagatai Khanate | 1279 CE – 1500 CE | 5 |
| **Cimerians** | Ancient Steppe Nomadic Confederations | 1 500 BCE – 700 BCE | 6 |
| **Crimean Khanate** | Mongol & Post-Mongol Khanates | 1492 CE – 1600 CE | 4 |
| **Cuman Khanates** | Turkic & Steppe Khaganates | 1200 CE | 1 |
| **Cuman-Kipchak confederation** | Turkic & Steppe Khaganates | 1100 CE | 1 |
| **Donghu tribes** | Proto-Altaic & Eastern Steppe Pastoralists | 400 BCE | 1 |
| **Golden Horde** | Golden Horde | 1492 CE – 1500 CE | 2 |
| **Great Khanate** | Mongol Empire (Yuan) | 1279 CE – 1400 CE | 3 |
| **Göktürks** | Turkic & Steppe Khaganates | 600 CE – 700 CE | 2 |
| **Huns** | Ancient Steppe Nomadic Confederations | 700 CE | 1 |
| **Ilkhanate** | Ilkhanate | 1279 CE – 1300 CE | 2 |
| **Karasuk culture** | Karasuk Culture (Siberian & Central Asian Bronze Age) | 1 500 BCE – 700 BCE | 3 |
| **Karluks** | Turkic & Steppe Khaganates | 700 CE – 900 CE | 2 |
| **Kazakhstan** | Kazakhstan | 1994 CE – 2010 CE | 3 |
| **Kazan Khanate** | Mongol & Post-Mongol Khanates | 1530 CE | 1 |
| **Kelteminar** | Eurasian Steppe Pastoral Traditions | 5 000 BCE | 1 |
| **Kelteminar culture** | Eurasian Steppe Pastoral Traditions | 5 000 BCE | 1 |
| **Khanate of Sibir** | Mongol & Post-Mongol Khanates | 1492 CE – 1530 CE | 3 |
| **Khanate of the Golden Horde** | Golden Horde | 1279 CE – 1300 CE | 2 |
| **Khazars** | Turkic & Steppe Khaganates | 600 CE – 1000 CE | 5 |
| **Khiva Khanate** | Mongol & Post-Mongol Khanates | 1530 CE – 1715 CE | 5 |
| **Kimek-Kipchak khaganate** | Turkic & Steppe Khaganates | 1000 CE | 1 |
| **Kyrgyzstan** | Kyrgyzstan | 1994 CE – 2010 CE | 3 |
| **Mongol Empire** | Mongol & Post-Mongol Khanates | 1200 CE | 1 |
| **Mongolia** | Mongolia | 1914 CE – 2010 CE | 9 |
| **Mongols** | Mongol & Post-Mongol Khanates | 1100 CE | 1 |
| **Nogai Horde** | Mongol & Post-Mongol Khanates | 1530 CE – 1715 CE | 5 |
| **Oghuz** | Turkic & Steppe Khaganates | 1100 CE | 1 |
| **Oghuz Turks** | Turkic & Steppe Khaganates | 900 CE | 1 |
| **Oirat Confederation** | Mongol & Post-Mongol Khanates | 1492 CE – 1500 CE | 2 |
| **Pechenegs** | Turkic & Steppe Khaganates | 900 CE | 1 |
| **Proto-Altaic pastoralists** | Proto-Altaic & Eastern Steppe Pastoralists | 1 500 BCE – 400 BCE | 5 |
| **Proto-Scythian culture** | Ancient Steppe Nomadic Confederations | 700 BCE | 1 |
| **Proto-Tibetan cultures** | Tibetan Realm | 400 BCE | 1 |
| **Saces** | Ancient Steppe Nomadic Confederations | 100 BCE | 1 |
| **Saka Kingdom** | Ancient Steppe Nomadic Confederations | 1 BCE – 300 CE | 4 |
| **Sarmates** | Ancient Steppe Nomadic Confederations | 100 BCE | 1 |
| **Scythians** | Ancient Steppe Nomadic Confederations | 400 BCE – 100 CE | 4 |
| **Sintashta** | Eurasian Steppe Pastoral Traditions | 2 000 BCE | 1 |
| **Southern Xiongnu** | Ancient Steppe Nomadic Confederations | 100 CE – 200 CE | 2 |
| **Tajikistan** | Tajikistan | 1994 CE – 2010 CE | 3 |
| **Tibet** | Tibetan Realm | 1000 CE – 1960 CE | 19 |
| **Tibetan Empire** | Tibetan Realm | 800 CE – 900 CE | 2 |
| **Tibetans** | Tibetan Realm | 1 500 BCE – 700 BCE | 3 |
| **Tibeto-Burmanese** | Tibetan Realm | 2 000 BCE | 1 |
| **Timurid Emirates** | Mongol & Post-Mongol Khanates | 1492 CE – 1500 CE | 2 |
| **Timurid Empire** | Mongol & Post-Mongol Khanates | 1400 CE | 1 |
| **Turcik tribes** | Turkic & Steppe Khaganates | 200 BCE | 1 |
| **Turkmenistan** | Turkmenistan | 1994 CE – 2010 CE | 3 |
| **Uyghurs** | Turkic & Steppe Khaganates | 700 CE – 900 CE | 3 |
| **Uzbekistan** | Uzbekistan | 1994 CE – 2010 CE | 3 |
| **Volga Bulgars** | Turkic & Steppe Khaganates | 800 CE – 1200 CE | 5 |
| **Western Gokturk Khaganate** | Turkic & Steppe Khaganates | 700 CE | 2 |
| **White Horde** | Mongol & Post-Mongol Khanates | 1400 CE – 1500 CE | 3 |
| **Xiongnu** | Ancient Steppe Nomadic Confederations | 400 BCE – 1 BCE | 4 |
| **Yamnaya culture** | Eurasian Steppe Pastoral Traditions | 3 000 BCE | 1 |
| **Yuezhi** | Ancient Steppe Nomadic Confederations | 200 BCE | 1 |
| **Zhangzhung Kingdom** | Tibetan Realm | 400 BCE – 100 BCE | 5 |
| **central Asian khanates** | Mongol & Post-Mongol Khanates | 1530 CE – 1900 CE | 17 |

[↑ Back to top](#table-of-contents)

---

## <a id="central-europe"></a>Central Europe

* **Unique Entities**: 45
* **Total Appearances**: 185
* **Historical Span**: 700 BCE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Austria** | Austria | 1920 CE – 2010 CE | 7 |
| **Austria Hungary** | Austro-Hungarian Realm | 1878 CE – 1900 CE | 3 |
| **Austrian Empire** | Austro-Hungarian Realm | 1650 CE – 1815 CE | 7 |
| **Austrian Netherlands** | Austro-Hungarian Realm | 1715 CE – 1800 CE | 3 |
| **Austro-Hungarian Empire** | Austro-Hungarian Empire | 1914 CE | 1 |
| **Baden** | German States | 1715 CE – 1815 CE | 4 |
| **Bavaria** | German States | 1783 CE – 1815 CE | 4 |
| **Brandenburg** | Kingdom of Prussia & Orders | 1715 CE | 1 |
| **Czech Republic** | Czech Republic | 1994 CE – 2010 CE | 3 |
| **Czechoslovakia** | Kingdom of Bohemia | 1920 CE – 1960 CE | 5 |
| **Czechs** | Kingdom of Bohemia | 700 CE – 800 CE | 2 |
| **East Germany** | German States | 1960 CE | 1 |
| **East Prussia** | Kingdom of Prussia & Orders | 1920 CE – 1930 CE | 2 |
| **Electoral Hesse** | German States | 1815 CE | 1 |
| **German Empire** | German Empire | 1914 CE | 1 |
| **Germany** | Germany | 1878 CE – 2010 CE | 11 |
| **Germany (France)** | Germany | 1945 CE | 1 |
| **Germany (Soviet)** | Germany | 1945 CE | 1 |
| **Germany (UK)** | Germany | 1945 CE | 1 |
| **Germany (USA)** | Germany | 1945 CE | 1 |
| **Grand Duchy of Hesse** | German States | 1815 CE | 2 |
| **Great Moravia** | Kingdom of Bohemia | 900 CE | 1 |
| **Habsburg Netherlands** | Austro-Hungarian Realm | 1530 CE – 1600 CE | 2 |
| **Hanover** | German States | 1715 CE – 1815 CE | 5 |
| **Holy Roman Empire** | Holy Roman Empire | 1000 CE – 1715 CE | 16 |
| **Hungary** | Hungary | 1100 CE – 2010 CE | 12 |
| **Imperial Hungary** | Austro-Hungarian Realm | 1492 CE – 1500 CE | 2 |
| **Kingdom of Hungary** | Austro-Hungarian Realm | 1400 CE | 1 |
| **Liechtenstein** | Liechtenstein | 1994 CE – 2010 CE | 3 |
| **Lusatian culture** | Lusatian Culture (Central European Bronze/Iron Age) | 700 BCE | 1 |
| **Milano (Austria)** | Austro-Hungarian Realm | 1783 CE | 1 |
| **Moravians** | Kingdom of Bohemia | 700 CE | 1 |
| **Palatinate** | German States | 1815 CE | 1 |
| **Poland** | Poland | 1000 CE – 2010 CE | 14 |
| **Poland-Lithuania** | Polish-Lithuanian Commonwealth | 1400 CE – 1600 CE | 5 |
| **Polish–Lithuanian Commonwealth** | Polish-Lithuanian Realm | 1650 CE – 1715 CE | 3 |
| **Prussia** | Kingdom of Prussia | 1530 CE – 1815 CE | 14 |
| **Prussians** | Kingdom of Prussia & Orders | 1000 CE – 1100 CE | 2 |
| **Republic of the Seven Zenden** | Swiss Confederacy | 1530 CE – 1783 CE | 6 |
| **Slovakia** | Slovakia | 1994 CE – 2010 CE | 3 |
| **Swiss Confederation** | Switzerland | 1492 CE – 1783 CE | 8 |
| **Switzerland** | Switzerland | 1815 CE – 2010 CE | 13 |
| **Teutonic Knights** | State of the Teutonic Order | 1279 CE – 1500 CE | 5 |
| **West Germany** | German States | 1960 CE | 1 |
| **Württemberg** | German States | 1783 CE – 1815 CE | 3 |

[↑ Back to top](#table-of-contents)

---

## <a id="north-africa"></a>North Africa

* **Unique Entities**: 31
* **Total Appearances**: 176
* **Historical Span**: 4 000 BCE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Algeria** | Algeria | 1900 CE – 2010 CE | 9 |
| **Algeria (FR)** | Algeria | 1878 CE – 1880 CE | 2 |
| **Algeria (France)** | Algeria | 1938 CE | 1 |
| **Almoravid dynasty** | Maghrebi Sultanates | 1100 CE | 1 |
| **Berber Tribes** | Berber & Saharan Peoples | 1200 CE | 1 |
| **Berbers** | Berber & Saharan Peoples | 1 500 BCE – 900 CE | 4 |
| **Egypt** | Egypt | 4 000 BCE – 2010 CE | 21 |
| **Guanches** | Guanches (Canary Islands) | 1 500 BCE – 1815 CE | 34 |
| **Harer (Egypt)** | Egyptian Civilization | 1878 CE – 1900 CE | 3 |
| **Kingdom of Gala** | Berber & Saharan Peoples | 200 BCE | 1 |
| **Kingdom of Syphax** | Berber & Saharan Peoples | 200 BCE | 1 |
| **Libya** | Libya | 1914 CE – 2010 CE | 6 |
| **Libya (IT)** | Libya | 1920 CE – 1930 CE | 2 |
| **Mamluke Sultanate** | Mamluk & Ayyubid Sultanates | 1279 CE – 1500 CE | 5 |
| **Mauretania** | Berber & Saharan Peoples | 200 BCE – 100 BCE | 2 |
| **Mauritania** | Mauritania | 1945 CE – 2010 CE | 5 |
| **Morocco** | Morocco | 1300 CE – 2010 CE | 19 |
| **Morocco (France)** | Morocco | 1938 CE | 1 |
| **Numidia** | Berber & Saharan Peoples | 100 BCE | 1 |
| **Ptolemaic Kingdom** | Egyptian Civilization | 300 BCE – 100 BCE | 3 |
| **Saharan Nomadic Tribes** | Berber & Saharan Peoples | 700 CE | 1 |
| **Saharan pastoral nomads** | Berber & Saharan Peoples | 2 000 BCE – 200 BCE | 19 |
| **Spanish Morocco** | Maghrebi Sultanates | 1914 CE | 1 |
| **Sudan** | Sudan | 1920 CE – 2010 CE | 8 |
| **Tripolitana (UK Lybia)** | Maghrebi Sultanates | 1945 CE | 1 |
| **Tripolitania** | Maghrebi Sultanates | 1715 CE – 1815 CE | 4 |
| **Tuareg Nomadic Tribes** | Berber & Saharan Peoples | 1200 CE | 2 |
| **Tuaregs** | Berber & Saharan Peoples | 900 CE | 1 |
| **Tunisia** | Tunisia | 1900 CE – 2010 CE | 10 |
| **Watassid Morocco** | Maghrebi Sultanates | 1530 CE – 1600 CE | 2 |
| **Western Sahara** | Western Sahara | 1945 CE – 2010 CE | 5 |

[↑ Back to top](#table-of-contents)

---

## <a id="latin-america"></a>Latin America

* **Unique Entities**: 15
* **Total Appearances**: 163
* **Historical Span**: 1715 CE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Argentina** | Argentina | 1878 CE – 2010 CE | 12 |
| **Bolivia** | Bolivia | 1878 CE – 2010 CE | 12 |
| **Brazil** | Brazil | 1914 CE – 2010 CE | 9 |
| **Chile** | Chile | 1878 CE – 2010 CE | 12 |
| **Colombia** | Colombia | 1878 CE – 2010 CE | 12 |
| **Ecuador** | Ecuador | 1878 CE – 2010 CE | 12 |
| **French Guiana** | French Guiana | 1878 CE – 2010 CE | 12 |
| **Guyana** | Guyana | 1914 CE – 2010 CE | 9 |
| **Guyana (Netherlands)** | Guyana | 1715 CE | 1 |
| **Mexico** | Mexico | 1878 CE – 2010 CE | 12 |
| **Paraguay** | Paraguay | 1783 CE – 2010 CE | 15 |
| **Peru** | Peru | 1878 CE – 2010 CE | 12 |
| **Suriname** | Suriname | 1914 CE – 2010 CE | 9 |
| **Uruguay** | Uruguay | 1878 CE – 2010 CE | 12 |
| **Venezuela** | Venezuela | 1878 CE – 2010 CE | 12 |

[↑ Back to top](#table-of-contents)

---

## <a id="south-american-indigenous"></a>South American Indigenous

* **Unique Entities**: 37
* **Total Appearances**: 159
* **Historical Span**: 1 500 BCE – 1878 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Ahé (Kawahib)** | Amazonian & Tropical Lowland Peoples | 1492 CE | 1 |
| **Amazon hunter-gatherers** | Amazonian & Tropical Lowland Peoples | 1 500 BCE – 1783 CE | 32 |
| **Ashaninka** | Amazonian & Tropical Lowland Peoples | 1492 CE | 1 |
| **Awaeté** | Amazonian & Tropical Lowland Peoples | 1492 CE | 1 |
| **Awaeté (Asurini of the Xingu)** | Amazonian & Tropical Lowland Peoples | 1492 CE | 1 |
| **Aónikenk (Tehuelche)** | Southern Cone & Pampas Peoples | 1492 CE | 1 |
| **Cabiyari/Kawiyarí** | Amazonian & Tropical Lowland Peoples | 1492 CE | 1 |
| **Charrúa** | Southern Cone & Pampas Peoples | 1492 CE | 1 |
| **Da’naxda’xw Awaetlatla** | Amazonian & Tropical Lowland Peoples | 1492 CE | 1 |
| **Diaguita** | Southern Cone & Pampas Peoples | 1492 CE | 1 |
| **Envuga (Kawahib)** | Amazonian & Tropical Lowland Peoples | 1492 CE | 1 |
| **Juma (Kawahib)** | Amazonian & Tropical Lowland Peoples | 1492 CE | 1 |
| **Jupaú (Kawahib)** | Amazonian & Tropical Lowland Peoples | 1492 CE | 1 |
| **Kawahib (Jiahui)** | Amazonian & Tropical Lowland Peoples | 1492 CE | 1 |
| **Kawahib (Parintintin)** | Amazonian & Tropical Lowland Peoples | 1492 CE | 1 |
| **Kawahib (Tenharim)** | Amazonian & Tropical Lowland Peoples | 1492 CE | 1 |
| **Magüta/Ticuna** | Amazonian & Tropical Lowland Peoples | 1492 CE | 1 |
| **Manioc farmers** | Amazonian & Tropical Lowland Peoples | 1 500 BCE – 100 BCE | 9 |
| **Mapuche** | Southern Cone & Pampas Peoples | 1878 CE | 1 |
| **Miranha** | Amazonian & Tropical Lowland Peoples | 1492 CE | 1 |
| **Pampas cultures** | Southern Cone & Pampas Peoples | 1 500 BCE – 1878 CE | 35 |
| **Paspahegh** | Amazonian & Tropical Lowland Peoples | 1492 CE | 1 |
| **Pintupi** | Amazonian & Tropical Lowland Peoples | 1600 CE – 1815 CE | 7 |
| **Savanna hunter-gatherers** | Amazonian & Tropical Lowland Peoples | 1 500 BCE – 1783 CE | 32 |
| **Selk'nam** | Southern Cone & Pampas Peoples | 1492 CE | 1 |
| **Selkirk** | Southern Cone & Pampas Peoples | 1492 CE | 1 |
| **Shipibo-Konibo** | Amazonian & Tropical Lowland Peoples | 1492 CE | 1 |
| **Shuar** | Amazonian & Tropical Lowland Peoples | 1279 CE – 1815 CE | 12 |
| **Shuar-Wampis** | Amazonian & Tropical Lowland Peoples | 1492 CE | 1 |
| **Tekohá (Guarani)** | Amazonian & Tropical Lowland Peoples | 1492 CE | 1 |
| **Tupinambá** | Amazonian & Tropical Lowland Peoples | 1492 CE | 1 |
| **Tupis** | Amazonian & Tropical Lowland Peoples | 800 CE – 900 CE | 2 |
| **Waiwai** | Amazonian & Tropical Lowland Peoples | 1492 CE | 1 |
| **Wallmapu (Mapuche)** | Southern Cone & Pampas Peoples | 1492 CE | 1 |
| **Warao** | Amazonian & Tropical Lowland Peoples | 1492 CE | 1 |
| **Yanomami** | Amazonian & Tropical Lowland Peoples | 1492 CE | 1 |
| **Yeba-masã** | Amazonian & Tropical Lowland Peoples | 1492 CE | 1 |

[↑ Back to top](#table-of-contents)

---

## <a id="southern-africa"></a>Southern Africa

* **Unique Entities**: 27
* **Total Appearances**: 155
* **Historical Span**: 10 000 BCE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Angola** | Angola | 1815 CE – 2010 CE | 9 |
| **Angola (Portugal)** | Angola | 1878 CE – 1945 CE | 4 |
| **Basutoland** | Lesotho | 1878 CE – 1900 CE | 3 |
| **Botswana** | Botswana | 1914 CE – 2010 CE | 9 |
| **Gitx̱san Lax̱yip** | Khoisan Peoples | 1492 CE | 1 |
| **Great Zimbabwe** | Southern African Kingdoms | 1000 CE – 1400 CE | 6 |
| **Khoisan** | Khoisan Peoples | 10 000 BCE – 1500 CE | 34 |
| **Lesotho** | Lesotho | 1914 CE – 2010 CE | 9 |
| **Malawi** | Malawi | 1914 CE – 2010 CE | 8 |
| **Mozambique** | Mozambique | 1878 CE – 2010 CE | 9 |
| **Mozambique (Portugal)** | Mozambique | 1938 CE – 1945 CE | 2 |
| **Mwenemutapa** | Southern African Kingdoms | 1492 CE – 1600 CE | 4 |
| **Nahua ( Morelos, Puebla, Tlaxcala, Veracruz, Hidalgo, San Luis Potosi)** | Khoisan Peoples | 1492 CE | 1 |
| **Namibia** | Namibia | 1945 CE – 2010 CE | 5 |
| **Northern Rhodesia** | Zambia | 1938 CE – 1945 CE | 2 |
| **Nyasaland** | Malawi | 1945 CE | 1 |
| **Rhodesia** | Zimbabwe | 1914 CE – 1945 CE | 2 |
| **Rozwi** | Southern African Kingdoms | 1650 CE – 1800 CE | 5 |
| **San Carlos Apache** | Khoisan Peoples | 1492 CE | 1 |
| **San Poil** | Khoisan Peoples | 1492 CE | 1 |
| **South Africa** | South Africa | 1914 CE – 2010 CE | 6 |
| **Swaziland** | Swaziland | 1878 CE – 2010 CE | 12 |
| **Xhosa** | Southern African Kingdoms | 1783 CE – 1815 CE | 3 |
| **Zambia** | Zambia | 1920 CE – 2010 CE | 6 |
| **Zimbabwe** | Zimbabwe | 1920 CE – 2010 CE | 6 |
| **Zulu** | Southern African Kingdoms | 1783 CE – 1815 CE | 3 |
| **Zululand** | Southern African Kingdoms | 1878 CE – 1900 CE | 3 |

[↑ Back to top](#table-of-contents)

---

## <a id="mesoamerican"></a>Mesoamerican

* **Unique Entities**: 56
* **Total Appearances**: 138
* **Historical Span**: 2 000 BCE – 1815 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Ayuukjä'äy (Mixe)** | Mesoamerican & Central American Indigenous States | 1492 CE | 1 |
| **Aztec Empire** | Aztec Empire (Triple Alliance) | 1500 CE | 1 |
| **Ben 'Zaa/Binnizá/Mén Diiste/Bene Xhon (Zapoteco)** | Zapotec Civilization | 1492 CE | 1 |
| **Chitonahua/Murunahua** | Aztec Empire (Triple Alliance) | 1492 CE | 1 |
| **Chorotega** | Mesoamerican & Central American Indigenous States | 1492 CE | 1 |
| **Coyutecos (Nahua)** | Aztec Empire (Triple Alliance) | 1492 CE | 1 |
| **Guachichil** | Mesoamerican & Central American Indigenous States | 1492 CE | 1 |
| **Guachichiles** | Mesoamerican & Central American Indigenous States | 1530 CE – 1600 CE | 2 |
| **Guna Yala** | Mesoamerican & Central American Indigenous States | 1492 CE | 1 |
| **Guna of Madugandí** | Mesoamerican & Central American Indigenous States | 1492 CE | 1 |
| **Guna of Wargandí** | Mesoamerican & Central American Indigenous States | 1492 CE | 1 |
| **Gunadule (Kuna-Tule)** | Mesoamerican & Central American Indigenous States | 1492 CE | 1 |
| **Huasteco/Teenek** | Mesoamerican & Central American Indigenous States | 1492 CE | 1 |
| **Ikoots/Kunajts/Ikoojts (Huave)** | Mesoamerican & Central American Indigenous States | 1492 CE | 1 |
| **K'iche'** | Maya Civilization | 1492 CE | 1 |
| **Kalaamaya** | Maya Civilization | 1600 CE – 1815 CE | 7 |
| **Kamejeya (Yukuna)** | Mesoamerican & Central American Indigenous States | 1492 CE | 1 |
| **Kaqchikel** | Maya Civilization | 1492 CE | 1 |
| **Lenca** | Mesoamerican & Central American Indigenous States | 1492 CE | 1 |
| **Maize farmers** | Mesoamerican Agricultural Traditions | 1 500 BCE – 200 BCE | 7 |
| **Marinahua** | Aztec Empire (Triple Alliance) | 1492 CE | 1 |
| **Maya** | Maya Civilization | 1600 CE – 1815 CE | 7 |
| **Maya Yucateco** | Maya Civilization | 1492 CE | 1 |
| **Maya chiefdoms and states** | Maya Civilization | 323 BCE – 400 CE | 9 |
| **Maya city-states** | Maya Civilization | 800 CE – 1500 CE | 9 |
| **Maya states** | Maya Civilization | 500 CE – 700 CE | 3 |
| **Mayaimi** | Maya Civilization | 1492 CE | 1 |
| **Mayangna** | Maya Civilization | 1492 CE | 1 |
| **Mayas** | Maya Civilization | 1530 CE – 1600 CE | 2 |
| **Mesoamerican hunter-gatherers and maïze farmers** | Mesoamerican Agricultural Traditions | 2 000 BCE | 1 |
| **Mexicanero (Nahuas)** | Aztec Empire (Triple Alliance) | 1492 CE | 1 |
| **Mexihcah (Triple Alliance)** | Aztec Empire (Triple Alliance) | 1492 CE | 1 |
| **Miskito** | Mesoamerican & Central American Indigenous States | 1492 CE | 1 |
| **Mixtec Empire** | Mixtec Civilization | 1279 CE – 1500 CE | 4 |
| **Mixtecs** | Mixtec Civilization | 800 CE – 900 CE | 2 |
| **Monte Albán** | Zapotec Civilization | 323 BCE – 700 CE | 12 |
| **Nahua** | Aztec Empire (Triple Alliance) | 1492 CE | 2 |
| **Nahua (Guerrero)** | Aztec Empire (Triple Alliance) | 1492 CE | 1 |
| **Nahua (Mexico)** | Aztec Empire (Triple Alliance) | 1492 CE | 1 |
| **Nahua (Michoacan)** | Aztec Empire (Triple Alliance) | 1492 CE | 1 |
| **Nahuas** | Aztec Empire (Triple Alliance) | 1492 CE | 1 |
| **Ngunawal** | Mesoamerican & Central American Indigenous States | 1600 CE – 1800 CE | 6 |
| **Nicarao/Nahoa** | Mesoamerican & Central American Indigenous States | 1492 CE | 1 |
| **Náayerite (Cora)** | Mesoamerican & Central American Indigenous States | 1492 CE | 1 |
| **Olmec** | Olmec Civilization | 1 500 BCE – 400 BCE | 5 |
| **P’urhépecha** | Purépecha Empire | 1492 CE | 1 |
| **Q'eqchi'** | Maya Civilization | 1492 CE | 1 |
| **Sharanahua** | Aztec Empire (Triple Alliance) | 1492 CE | 1 |
| **Teotihuacan** | Teotihuacan Civilization | 323 BCE – 700 CE | 12 |
| **Tokugawa shogunate** | Mesoamerican & Central American Indigenous States | 1650 CE – 1715 CE | 3 |
| **Toltec Empire** | Toltec Civilization | 800 CE – 1200 CE | 5 |
| **Totonac** | Mesoamerican & Central American Indigenous States | 1492 CE | 1 |
| **Totonaco** | Mesoamerican & Central American Indigenous States | 1492 CE | 1 |
| **Zapotec** | Zapotec Civilization | 400 BCE | 1 |
| **Zapotec Empire** | Zapotec Civilization | 1279 CE – 1400 CE | 3 |
| **Ñuu Savi (Mixtecapan)** | Mixtec Civilization | 1492 CE | 1 |

[↑ Back to top](#table-of-contents)

---

## <a id="andean"></a>Andean

* **Unique Entities**: 34
* **Total Appearances**: 136
* **Historical Span**: 5 000 BCE – 1800 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Andean hunter-gatherers** | Andean Civilizations & Inca | 1 500 BCE – 1783 CE | 32 |
| **Cayubaba** | Andean Civilizations & Inca | 1492 CE | 1 |
| **Chavin** | Andean Civilizations & Inca | 1 000 BCE – 100 BCE | 8 |
| **Chimú** | Andean Civilizations & Inca | 1492 CE | 1 |
| **Chimú Empire** | Andean Civilizations & Inca | 1000 CE – 1400 CE | 6 |
| **Chinchoros** | Andean Civilizations & Inca | 1 500 BCE – 500 BCE | 4 |
| **Chinchorro culture** | Andean Civilizations & Inca | 2 000 BCE | 1 |
| **Chorrera** | Andean Civilizations & Inca | 1 500 BCE – 100 BCE | 9 |
| **El Paraiso** | Andean Civilizations & Inca | 1 500 BCE – 500 BCE | 4 |
| **Huancas** | Andean Civilizations & Inca | 1492 CE | 1 |
| **Huari Empire** | Andean Civilizations & Inca | 600 CE – 1200 CE | 7 |
| **Inca Empire** | Inca Empire (Tawantinsuyu) | 1500 CE – 1600 CE | 3 |
| **Kichwa** | Andean Civilizations & Inca | 1492 CE | 1 |
| **Kichwa (Amazónico)** | Andean Civilizations & Inca | 1492 CE | 1 |
| **Kichwa Lamista** | Andean Civilizations & Inca | 1492 CE | 1 |
| **Kichwa Santarrosino** | Andean Civilizations & Inca | 1492 CE | 1 |
| **Kichwa del Río Napo** | Andean Civilizations & Inca | 1492 CE | 1 |
| **Kichwa del Río Pastaza** | Andean Civilizations & Inca | 1492 CE | 1 |
| **Kichwa del Río Tigre** | Andean Civilizations & Inca | 1492 CE | 1 |
| **Manteño-Huancavilca** | Andean Civilizations & Inca | 1492 CE | 1 |
| **Moche** | Andean Civilizations & Inca | 1 BCE – 700 CE | 8 |
| **Muisca** | Chibcha & Northern Andean Civilizations | 1492 CE | 1 |
| **Muruwari** | Andean Civilizations & Inca | 1600 CE – 1800 CE | 6 |
| **Nazca** | Andean Civilizations & Inca | 100 BCE – 500 CE | 7 |
| **Norte Chico** | Andean Civilizations & Inca | 5 000 BCE – 2 000 BCE | 4 |
| **Paracas** | Andean Civilizations & Inca | 400 BCE – 200 BCE | 4 |
| **Pasto** | Chibcha & Northern Andean Civilizations | 1492 CE | 1 |
| **Tiahuanaco Empire** | Andean Civilizations & Inca | 600 CE – 1200 CE | 7 |
| **Valdivia** | Andean Civilizations & Inca | 5 000 BCE – 2 000 BCE | 4 |
| **Wankarani** | Andean Civilizations & Inca | 400 BCE – 100 BCE | 5 |
| **Wari** | Andean Civilizations & Inca | 1492 CE | 1 |
| **Wari’** | Andean Civilizations & Inca | 1492 CE | 1 |
| **Xinca** | Andean Civilizations & Inca | 1492 CE | 1 |
| **Zenú** | Chibcha & Northern Andean Civilizations | 1492 CE | 1 |

[↑ Back to top](#table-of-contents)

---

## <a id="nordic"></a>Nordic

* **Unique Entities**: 13
* **Total Appearances**: 115
* **Historical Span**: 200 BCE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Denmark** | Denmark | 1100 CE – 2010 CE | 17 |
| **Denmark-Norway** | Nordic Realms | 1000 CE – 1800 CE | 10 |
| **Finland** | Finland | 1914 CE – 2010 CE | 9 |
| **Greenland** | Greenland | 1878 CE – 2010 CE | 7 |
| **Iceland** | Iceland | 1878 CE – 2010 CE | 11 |
| **Icelandic Commonwealth** | Nordic Realms | 1000 CE – 1100 CE | 2 |
| **Kalmar Union** | Nordic Realms | 1400 CE – 1500 CE | 2 |
| **Kingdom of Norway** | Norway | 900 CE | 1 |
| **Norsemen** | Nordic Realms | 200 BCE | 1 |
| **Norway** | Norway | 1100 CE – 2010 CE | 13 |
| **Suomi** | Finland | 1000 CE | 1 |
| **Sweden** | Sweden | 1000 CE – 2010 CE | 37 |
| **Sweden–Norway** | Nordic Realms | 1815 CE – 1900 CE | 4 |

[↑ Back to top](#table-of-contents)

---

## <a id="central-africa"></a>Central Africa

* **Unique Entities**: 16
* **Total Appearances**: 90
* **Historical Span**: 1492 CE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Belgian Congo** | Central African Kingdoms | 1914 CE – 1938 CE | 2 |
| **Cameroon** | Cameroon | 1945 CE – 2010 CE | 5 |
| **Central African Republic** | Central African Republic | 1945 CE – 2010 CE | 5 |
| **Chad** | Chad | 1945 CE – 2010 CE | 5 |
| **Congo** | Congo | 1492 CE – 2010 CE | 18 |
| **Congo (France)** | Congo | 1938 CE | 1 |
| **Equatorial Guinea** | Equatorial Guinea | 1914 CE – 2010 CE | 9 |
| **Gabon** | Gabon | 1878 CE – 2010 CE | 8 |
| **Kazembe** | Central African Kingdoms | 1815 CE | 1 |
| **Kuba** | Central African Kingdoms | 1878 CE – 1900 CE | 3 |
| **Luba** | Central African Kingdoms | 1530 CE – 1900 CE | 10 |
| **Lunda** | Central African Kingdoms | 1530 CE – 1900 CE | 11 |
| **Ndongo** | Central African Kingdoms | 1492 CE – 1500 CE | 2 |
| **Spanish Guinea** | Equatorial Guinea | 1878 CE – 1900 CE | 3 |
| **Zaire** | Dem. Rep. Congo | 1945 CE – 2010 CE | 5 |
| **Zaire (Belgium)** | Dem. Rep. Congo | 1920 CE – 1930 CE | 2 |

[↑ Back to top](#table-of-contents)

---

## <a id="prehistoric-archaeological"></a>Prehistoric & Archaeological

* **Unique Entities**: 17
* **Total Appearances**: 85
* **Historical Span**: 123 000 BCE – 1878 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Alluvial Lowland Mesolithic Hunter-Foragers** | Alluvial Lowland Mesolithic Hunter-Foragers | 10 000 BCE – 8 000 BCE | 2 |
| **Coastal and Woodland Mesolithic Hunter-Foragers** | Coastal & Woodland Mesolithic Hunter-Foragers | 10 000 BCE – 8 000 BCE | 2 |
| **Dimini** | Neolithic Farming Traditions | 5 000 BCE | 1 |
| **Ghassul** | Neolithic Farming Traditions | 5 000 BCE | 1 |
| **Highland Mesolithic Hunter-Foragers** | Highland Mesolithic Hunter-Foragers | 10 000 BCE – 8 000 BCE | 4 |
| **Homo erectus** | Homo erectus Populations | 123 000 BCE | 1 |
| **Homo heidelbergensis** | Homo heidelbergensis Populations | 123 000 BCE | 1 |
| **Hunters-gatherers** | Mesolithic Hunter-Foragers | 10 000 BCE – 2 000 BCE | 5 |
| **La Almagra culture** | Neolithic Farming Traditions | 5 000 BCE | 1 |
| **Levantine Corridor (Neolithic Farmers)** | Levantine Corridor (Early Neolithic Farmers) | 10 000 BCE – 8 000 BCE | 2 |
| **Naquada I** | Neolithic Farming Traditions | 5 000 BCE | 1 |
| **Neanderthal** | Neanderthal Populations | 123 000 BCE | 2 |
| **Neolithic Farmers** | Neolithic Farming Traditions | 10 000 BCE – 8 000 BCE | 2 |
| **Patagonian shellfish and marine mammal hunters** | Coastal Shellfish Gatherers | 1 500 BCE – 1878 CE | 35 |
| **Shellfish gatherers** | Coastal Shellfish Gatherers | 1 500 BCE – 800 CE | 18 |
| **Stentinello culture** | Neolithic Farming Traditions | 5 000 BCE | 1 |
| **Steppe Mesolithic Hunter-Foragers** | Steppe Mesolithic Hunter-Foragers | 10 000 BCE – 8 000 BCE | 6 |

[↑ Back to top](#table-of-contents)

---

## <a id="central-america"></a>Central America

* **Unique Entities**: 7
* **Total Appearances**: 84
* **Historical Span**: 1650 CE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Belize** | Belize | 1650 CE – 2010 CE | 15 |
| **Costa Rica** | Costa Rica | 1878 CE – 2010 CE | 12 |
| **El Salvador** | El Salvador | 1878 CE – 2010 CE | 12 |
| **Guatemala** | Guatemala | 1878 CE – 2010 CE | 12 |
| **Honduras** | Honduras | 1878 CE – 2010 CE | 12 |
| **Nicaragua** | Nicaragua | 1878 CE – 2010 CE | 12 |
| **Panama** | Panama | 1914 CE – 2010 CE | 9 |

[↑ Back to top](#table-of-contents)

---

## <a id="baltic"></a>Baltic

* **Unique Entities**: 14
* **Total Appearances**: 82
* **Historical Span**: 5 000 BCE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Baltic tribes** | Baltic Peoples & States | 800 CE – 1000 CE | 3 |
| **Brushed Pottery culture** | Baltic & Pomeranian Archaeological Cultures | 500 BCE – 100 CE | 8 |
| **Curonians** | Baltic Peoples & States | 500 BCE – 100 CE | 8 |
| **Early combware** | Baltic & Pomeranian Archaeological Cultures | 5 000 BCE | 1 |
| **Eastern Masurian culture** | Baltic & Pomeranian Archaeological Cultures | 500 BCE – 100 CE | 8 |
| **Estonia** | Estonia | 1920 CE – 2010 CE | 6 |
| **Latvia** | Latvia | 1920 CE – 2010 CE | 6 |
| **Lithuania** | Lithuania | 1279 CE – 2010 CE | 8 |
| **Narva** | Baltic & Pomeranian Archaeological Cultures | 5 000 BCE | 1 |
| **Plain-Pottery culture** | Baltic & Pomeranian Archaeological Cultures | 500 BCE – 100 CE | 8 |
| **Pomeranian culture** | Baltic & Pomeranian Archaeological Cultures | 500 BCE – 100 CE | 8 |
| **Sambian-Nothangian culture** | Baltic & Pomeranian Archaeological Cultures | 500 BCE – 100 CE | 8 |
| **Volga-Kamm** | Baltic & Pomeranian Archaeological Cultures | 5 000 BCE | 1 |
| **Western Masurian culture** | Baltic & Pomeranian Archaeological Cultures | 500 BCE – 100 CE | 8 |

[↑ Back to top](#table-of-contents)

---

## <a id="balkans"></a>Balkans

* **Unique Entities**: 18
* **Total Appearances**: 62
* **Historical Span**: 1 500 BCE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Albania** | Albania | 1914 CE – 2010 CE | 9 |
| **Bosnia** | Bosnia and Herzegovina | 1400 CE | 1 |
| **Bosnia and Herzegovina** | Bosnia and Herzegovina | 1994 CE – 2010 CE | 3 |
| **Bosnia-Herzegovina** | Balkan Kingdoms & Principalities | 1878 CE – 1900 CE | 3 |
| **Caucasian Albania** | Balkan Kingdoms & Principalities | 700 CE | 1 |
| **Croatia** | Croatia | 1000 CE – 2010 CE | 6 |
| **Croatian kingdom** | Balkan Kingdoms & Principalities | 900 CE | 1 |
| **Dacia** | Ancient Balkan Kingdoms & Peoples | 1 BCE – 100 CE | 2 |
| **Dacians** | Ancient Balkan Kingdoms & Peoples | 100 BCE | 1 |
| **Dardania** | Ancient Balkan Kingdoms & Peoples | 200 BCE | 1 |
| **Illyrians** | Ancient Balkan Kingdoms & Peoples | 1 500 BCE – 500 BCE | 4 |
| **Macedonia** | Macedonia | 1994 CE – 2010 CE | 3 |
| **Montenegro** | Montenegro | 1715 CE – 2010 CE | 8 |
| **Odrysian Kingdom** | Ancient Balkan Kingdoms & Peoples | 1 BCE | 1 |
| **Principality of Wallachia** | Balkan Kingdoms & Principalities | 1400 CE | 1 |
| **Serbia** | Serbia | 900 CE – 2010 CE | 11 |
| **Slovenia** | Slovenia | 1994 CE – 2010 CE | 3 |
| **Thrace** | Ancient Balkan Kingdoms & Peoples | 1 500 BCE – 700 BCE | 3 |

[↑ Back to top](#table-of-contents)

---

## <a id="ancient-near-east"></a>Ancient Near East

* **Unique Entities**: 21
* **Total Appearances**: 59
* **Historical Span**: 5 000 BCE – 1800 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Anatolian tribes** | Anatolian & Caucasian Kingdoms | 2 000 BCE | 1 |
| **Arameans** | Ancient Levantine Civilizations | 1 500 BCE – 700 BCE | 3 |
| **Assyria** | Mesopotamian Civilizations | 1 500 BCE – 700 BCE | 3 |
| **Babylonia** | Mesopotamian Civilizations | 1 500 BCE – 700 BCE | 3 |
| **Canaan** | Ancient Levantine Civilizations | 2 000 BCE | 1 |
| **Cappadocia** | Anatolian & Caucasian Kingdoms | 323 BCE – 300 BCE | 2 |
| **Chelamela** | Mesopotamian Civilizations | 1492 CE | 1 |
| **Colchis** | Anatolian & Caucasian Kingdoms | 323 BCE – 300 BCE | 2 |
| **Elam** | Mesopotamian Civilizations | 5 000 BCE – 700 BCE | 7 |
| **Hittites** | Anatolian & Caucasian Kingdoms | 2 000 BCE – 700 BCE | 4 |
| **Hurrian Kingdoms** | Mesopotamian Civilizations | 5 000 BCE – 2 000 BCE | 4 |
| **Judea** | Ancient Levantine Civilizations | 1 BCE | 1 |
| **Kingdom of David and Solomon** | Ancient Levantine Civilizations | 1 500 BCE – 700 BCE | 3 |
| **Mari** | Mesopotamian Civilizations | 800 CE | 1 |
| **Mundurukânia (Wuy jugu)** | Mesopotamian Civilizations | 1492 CE | 1 |
| **Phrygians** | Anatolian & Caucasian Kingdoms | 1 500 BCE – 700 BCE | 3 |
| **Ubaid** | Mesopotamian Civilizations | 5 000 BCE | 1 |
| **Ur** | Mesopotamian Civilizations | 4 000 BCE – 2 000 BCE | 3 |
| **Urartu** | Anatolian & Caucasian Kingdoms | 1 500 BCE – 700 BCE | 3 |
| **Wulgurukaba** | Mesopotamian Civilizations | 1600 CE – 1800 CE | 6 |
| **state societies and Aramaean kingdoms** | Ancient Levantine Civilizations | 1 500 BCE – 700 BCE | 6 |

[↑ Back to top](#table-of-contents)

---

## <a id="finno-ugric"></a>Finno-Ugric

* **Unique Entities**: 7
* **Total Appearances**: 56
* **Historical Span**: 2 000 BCE – 1530 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Finno-Ugric taiga hunter-gatherers** | Finno-Ugric Taiga Peoples | 2 000 BCE – 1200 CE | 26 |
| **Pisamira** | Finno-Ugric Taiga Peoples | 1492 CE | 1 |
| **Saami** | Finno-Ugric Taiga Peoples | 1 500 BCE – 700 CE | 16 |
| **Sami** | Finno-Ugric Taiga Peoples | 900 CE | 1 |
| **Samis** | Finno-Ugric Taiga Peoples | 1000 CE – 1300 CE | 2 |
| **Samish** | Finno-Ugric Taiga Peoples | 1492 CE | 1 |
| **Sámi** | Finno-Ugric Taiga Peoples | 200 CE – 1530 CE | 9 |

[↑ Back to top](#table-of-contents)

---

## <a id="greco-roman"></a>Greco-Roman

* **Unique Entities**: 17
* **Total Appearances**: 54
* **Historical Span**: 4 000 BCE – 1400 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Bosporan Kingdom** | Macedonian & Hellenistic Empires | 323 BCE – 100 BCE | 4 |
| **Bosporian Kingdom** | Macedonian & Hellenistic Empires | 1 BCE – 200 CE | 3 |
| **Byzantine Empire** | Byzantine Empire (Eastern Roman Empire) | 800 CE – 1400 CE | 9 |
| **Cycladic** | Ancient Greece | 4 000 BCE – 2 000 BCE | 3 |
| **Empire of Alexander** | Macedonian & Hellenistic Empires | 323 BCE | 1 |
| **Greek city-states** | Ancient Greece | 1 500 BCE – 300 BCE | 11 |
| **Greek colonies** | Ancient Greece | 400 BCE | 3 |
| **Minoan** | Ancient Greece | 4 000 BCE – 2 000 BCE | 3 |
| **Pergamon** | Macedonian & Hellenistic Empires | 200 BCE | 1 |
| **Roman Empire** | Roman Empire | 1 BCE – 200 CE | 3 |
| **Rome** | Roman Empire | 500 BCE – 200 BCE | 3 |
| **Rome (Constantinus)** | Roman Empire | 300 CE | 1 |
| **Rome (Diocletianus)** | Roman Empire | 300 CE | 1 |
| **Rome (Galerius)** | Roman Empire | 300 CE | 1 |
| **Rome (Maximian)** | Roman Empire | 300 CE | 1 |
| **Seleucid Kingdom** | Macedonian & Hellenistic Empires | 300 BCE – 100 BCE | 3 |
| **Western Roman Empire** | Western Roman Empire | 400 CE – 500 CE | 3 |

[↑ Back to top](#table-of-contents)

---

## <a id="slavic"></a>Slavic

* **Unique Entities**: 16
* **Total Appearances**: 52
* **Historical Span**: 900 CE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Grand Duchy of Moscow** | Grand Duchy of Moscow (Muscovy) | 1300 CE – 1500 CE | 3 |
| **Kievan Rus** | Kievan Rus' | 1100 CE | 2 |
| **Novgorod** | Russian & Slavic States | 1279 CE – 1400 CE | 3 |
| **Novgorod-Seversky** | Russian & Slavic States | 1500 CE | 1 |
| **Principality of Novgorod** | Russian & Slavic States | 1200 CE | 1 |
| **Principality of Vladimir-Suzdal** | Russian & Slavic States | 1200 CE | 1 |
| **Pskov** | Russian & Slavic States | 1492 CE – 1500 CE | 2 |
| **Russia** | Russia | 1994 CE – 2010 CE | 5 |
| **Russian Empire** | Russian Empire | 1783 CE – 1914 CE | 12 |
| **Ryazan** | Russian & Slavic States | 1279 CE – 1500 CE | 4 |
| **Slavic tribes** | Russian & Slavic States | 900 CE | 1 |
| **South Russia** | Russian & Slavic States | 1920 CE | 1 |
| **Tsardom of Muscovy** | Tsardom of Russia | 1530 CE – 1715 CE | 6 |
| **USSR** | USSR | 1920 CE – 1960 CE | 4 |
| **Ukraine** | Ukraine | 1920 CE – 2010 CE | 4 |
| **White Russia** | Russian & Slavic States | 1920 CE – 1930 CE | 2 |

[↑ Back to top](#table-of-contents)

---

## <a id="north-america"></a>North America

* **Unique Entities**: 3
* **Total Appearances**: 39
* **Historical Span**: 1783 CE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Canada** | Canada | 1815 CE – 2010 CE | 13 |
| **United States** | United States | 1815 CE – 2010 CE | 21 |
| **United States of America** | United States | 1783 CE – 1900 CE | 5 |

[↑ Back to top](#table-of-contents)

---

## <a id="eastern-europe"></a>Eastern Europe

* **Unique Entities**: 5
* **Total Appearances**: 38
* **Historical Span**: 700 BCE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Bulgaria** | Bulgaria | 1878 CE – 2010 CE | 12 |
| **Chernoles culture** | Chernoles Culture (Forest-Steppe Iron Age) | 700 BCE | 1 |
| **Milograd culture** | Milograd Culture (Dnieper-Pripet Early Iron Age) | 700 BCE – 100 CE | 9 |
| **Moldova** | Moldova | 1400 CE – 2010 CE | 4 |
| **Romania** | Romania | 1878 CE – 2010 CE | 12 |

[↑ Back to top](#table-of-contents)

---

## <a id="caucasus"></a>Caucasus

* **Unique Entities**: 3
* **Total Appearances**: 36
* **Historical Span**: 323 BCE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Armenia** | Armenia | 323 BCE – 2010 CE | 17 |
| **Azerbaijan** | Azerbaijan | 1914 CE – 2010 CE | 6 |
| **Georgia** | Georgia | 1000 CE – 2010 CE | 13 |

[↑ Back to top](#table-of-contents)

---

## <a id="iranian"></a>Iranian

* **Unique Entities**: 14
* **Total Appearances**: 32
* **Historical Span**: 1 500 BCE – 1715 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Achaemenid Empire** | Achaemenid Empire | 500 BCE – 400 BCE | 2 |
| **Azandes** | Persian & Iranian Empires | 900 CE | 1 |
| **Bactria** | Persian & Iranian Empires | 200 BCE | 1 |
| **Buyid Emirate** | Persian & Iranian Empires | 1000 CE | 1 |
| **Buyid dynasty** | Persian & Iranian Empires | 1200 CE | 1 |
| **Iranian pastoralists** | Persian & Iranian Empires | 1 500 BCE – 700 BCE | 3 |
| **Parthia** | Persian & Iranian Empires | 200 BCE – 100 BCE | 2 |
| **Parthian Empire** | Persian & Iranian Empires | 1 BCE – 300 CE | 4 |
| **Safavid Empire** | Safavid Empire | 1530 CE – 1715 CE | 5 |
| **Saffarids** | Persian & Iranian Empires | 900 CE | 1 |
| **Samanid Empire** | Persian & Iranian Empires | 900 CE | 1 |
| **Sasanian Empire** | Sasanian Empire | 500 CE – 700 CE | 3 |
| **Sasanian dependencies** | Persian & Iranian Empires | 600 CE – 700 CE | 2 |
| **Suren Kingdom** | Persian & Iranian Empires | 1 BCE – 400 CE | 5 |

[↑ Back to top](#table-of-contents)

---

## <a id="islamic-caliphates"></a>Islamic Caliphates

* **Unique Entities**: 12
* **Total Appearances**: 28
* **Historical Span**: 700 CE – 1900 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Abbasid Caliphate** | Abbasid Caliphate | 800 CE – 900 CE | 2 |
| **Almohad Caliphate** | Islamic Caliphates | 1200 CE | 1 |
| **Caliphate of Córdoba** | Islamic Caliphates | 1000 CE | 1 |
| **Fatimid Caliphate** | Fatimid Caliphate | 1000 CE – 1200 CE | 3 |
| **Hafsid Caliphate** | Islamic Caliphates | 1279 CE – 1500 CE | 5 |
| **Idrisid Caliphate** | Islamic Caliphates | 800 CE – 900 CE | 2 |
| **Seljuk Caliphate** | Islamic Caliphates | 1279 CE – 1400 CE | 3 |
| **Sokoto Caliphate** | Islamic Caliphates | 1878 CE – 1900 CE | 3 |
| **Tukular Caliphate** | Islamic Caliphates | 1878 CE – 1900 CE | 3 |
| **Umayyad Caliphate** | Umayyad Caliphate | 700 CE | 1 |
| **Wattasid Caliphate** | Islamic Caliphates | 1492 CE – 1500 CE | 2 |
| **Zayyanid Caliphate** | Islamic Caliphates | 1492 CE – 1500 CE | 2 |

[↑ Back to top](#table-of-contents)

---

## <a id="western-central-europe"></a>Western & Central Europe

* **Unique Entities**: 6
* **Total Appearances**: 20
* **Historical Span**: 5 000 BCE – 100 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Beaker** | Bell Beaker & Corded Ware Traditions | 2 000 BCE | 1 |
| **Bell-shaped burials culture** | Bell Beaker & Corded Ware Traditions | 500 BCE – 100 CE | 8 |
| **Funnel-Beaker** | Bell Beaker & Corded Ware Traditions | 5 000 BCE | 1 |
| **N. European Bronze Age cultures** | Nordic & Urnfield Bronze Age Cultures | 1 500 BCE – 700 BCE | 5 |
| **Urnfield cultures** | Nordic & Urnfield Bronze Age Cultures | 1 500 BCE – 700 BCE | 4 |
| **Únětice** | Nordic & Urnfield Bronze Age Cultures | 2 000 BCE | 1 |

[↑ Back to top](#table-of-contents)

---

## <a id="mediterranean"></a>Mediterranean

* **Unique Entities**: 3
* **Total Appearances**: 19
* **Historical Span**: 500 BCE – 2010 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Carthage** | Carthaginian Empire | 200 BCE | 1 |
| **Carthaginian Empire** | Carthage | 500 BCE – 300 BCE | 4 |
| **Cyprus** | Cyprus | 800 CE – 2010 CE | 14 |

[↑ Back to top](#table-of-contents)

---

## <a id="unclaimed-wilderness"></a>Unclaimed Wilderness

* **Unique Entities**: 1
* **Total Appearances**: 2
* **Historical Span**: 1945 CE – 1960 CE

| Entity / Culture Name | Canonical Historical Lineage | Active Era Range | Eras (Count) |
| :--- | :--- | :--- | :---: |
| **Antarctica** | Antarctica | 1945 CE – 1960 CE | 2 |

[↑ Back to top](#table-of-contents)

---

