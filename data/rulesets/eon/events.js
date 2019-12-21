const {
  createSkillEffect,
  createStatEffect,
  createExpertiseEffect,
  createChoiceStatEffect
} = require("../../../lib/effectCreator");

module.exports = [
  { rubrik: "Färder & äventyr" },
  {
    rubrik: "Allvarlig olycka",
    beskrivning:
      "Rollpersonen har varit med om en allvarlig olycka och kroppen har blivit sargad och bär märken efter det som skett. Det kan röra sig om brutna ben, eldskador eller bettskador från ett vilt djur.",
    effekt:
      "Välj: –2 Styrka, Tålighet, Rörlighet eller Uppfattning. Välj: +1T6 Vilja, Psyke, Visdom eller Utstrålning",
    tabell: "Färder & äventyr",
    nummer: 1,
    choices: [
      createChoiceStatEffect(
        ["Styrka", "Tålighet", "Rörlighet", "Uppfattning"],
        -2
      ),
      createChoiceStatEffect(
        ["Vilja", "Psyke", "Visdom", "Utstrålning"],
        "+1T6"
      )
    ]
  },
  {
    rubrik: "Andningsteknik",
    beskrivning:
      "Rollpersonen har lärt sig olika tekniker för att kontrollera andningen och kan till och med spela död under en kortare tid.",
    effekt:
      "Expertisen Spela död 4T6. Ignorerar efterverkningen Omtöcknad och får en bonus på +3T6 när det gäller att hålla andan eller uthärda syrebrist, exempelvis vid dykning eller strypning",
    tabell: "Färder & äventyr",
    nummer: 2
  },
  {
    rubrik: "Ansamlad kunskap",
    beskrivning: "Personen har lärt sig en hel del under sina resor.",
    effekt: "2 poäng Expertiser",
    tabell: "Färder & äventyr",
    nummer: 3
  },
  {
    rubrik: "Bakhåll",
    beskrivning:
      "Rollpersonen har kunskapen om hur man förbereder ett bakhåll men även hur man undviker ett.",
    effekt: "+1 Uppfattning. Lättlärd i Gömma, Krigföring och Spåra",
    tabell: "Färder & äventyr",
    nummer: 4
  },
  {
    rubrik: "Balansens mästare",
    beskrivning:
      "Rollpersonen har mycket god balans och kan gå på slak lina, klättra efter smala fasader och har en förmåga att alltid landa på fötter.",
    effekt:
      "+2 Rörlighet, +1 Uppfattning. Kännetecknet Balanssinne 4T6. Ignorerar efterverkningen Faller då denne genast kommer upp på fötter igen.",
    tabell: "Färder & äventyr",
    nummer: 5
  },
  {
    rubrik: "Barn",
    beskrivning:
      "Personen är förälder. Kanske bor denne fortfarande med sin partner och barnet eller så är barnet hemma medan personen är på sina färder.",
    effekt:
      "+2 Vilja. Slå två gånger på bakgrundstabellen och välj en som visar vem personen fick barnet med. Bestäm dessutom en lämplig ålder på barnet",
    tabell: "Färder & äventyr",
    nummer: 6
  },
  {
    rubrik: "Begravning",
    beskrivning:
      "Rollpersonen har varit med och begravt en av sina närmaste vänner. Detta var en gripande händelse som satt sina spår.",
    effekt:
      "Expertisen Begravningsriter 4T6. 4 valfria enheter som denne lärt sig av den döde vännen",
    tabell: "Färder & äventyr",
    nummer: 7
  },
  {
    rubrik: "Bevittnat massaker",
    beskrivning:
      "Rollpersonen har bevittnat en blodig massaker där en mängd personer blivit dräpta. Detta kan vara inkvisitionen som gått fram och straffat kättare, stråtrövare som plundrat en by eller ett regelrätt slag. Detta har satt sina spår i personen och denne har blivit något mer kylig och innesluten.",
    effekt: "2 Avtrubbningskryss för våld",
    tabell: "Färder & äventyr",
    nummer: 8
  },
  {
    rubrik: "Bosättning i vildmarken",
    beskrivning:
      "Rollpersonen känner till en mindre bosättning som ligger långt ifrån civilisationen och har spenderat en kortare tid där.",
    effekt:
      "Lättlärd i Jakt & fiske. 2 enheter Sociala färdigheter, 2 enheter Vildmarksfärdigheter. Rollpersonen kan introducera bosättningen under en vildmarksfärd om de behöver tid att återhämta sig, införskaffa proviant och kanske läka skador",
    tabell: "Färder & äventyr",
    nummer: 9
  },
  {
    rubrik: "Bragd",
    beskrivning:
      "Rollpersonen har utfört en bragd som är vida känd. Folk känner igen rollpersonen och många talar gott om denne. Vad som hände och om det över huvud taget ligger någon sanning i det hela är upp till spelaren.",
    effekt: "2 valfria enheter. 1 poäng Expertiser kopplat till bragden",
    tabell: "Färder & äventyr",
    nummer: 10
  },
  {
    rubrik: "Drabbad av pest",
    beskrivning:
      "Rollpersonen har drabbats av pest men är otroligt nog friskare nu.",
    effekt: "+1 Tålighet. Kännetecknet Sjukligt utseende 4T6",
    tabell: "Färder & äventyr",
    nummer: 11
  },
  {
    rubrik: "Dresserat djur",
    beskrivning:
      "Rollpersonen har ett dresserat djur i sin ägo. Detta kan vara något alldagligt som en korp eller hund eller något mer exotiskt såsom en blodflygare, varg eller frostuggla. Djuret är mycket tillgivet rollpersonen och kan förstå enklare kommandon.",
    effekt:
      "+2 Vilja. Expertisen Djurträning 4T6. 4 enheter Vildmarksfärdigheter",
    tabell: "Färder & äventyr",
    nummer: 12
  },
  {
    rubrik: "Dryckesvisor",
    beskrivning:
      "Personen har lärt sig ett flertal dryckesvisor efter kvällarna runt lägerelden samt hur man stjälper i sig stora mängder vin och mjöd och fortfarande står på benen.",
    effekt: "Lättlärd i Sång & musik. Expertisen Supa 4T6",
    tabell: "Färder & äventyr",
    nummer: 13
  },
  {
    rubrik: "Dräpt ett monster",
    beskrivning:
      "Rollpersonen har dräpt ett monster genom list, utan att behöva dra vapen.",
    effekt: "3 enheter Rörelsefärdigheter, 3 enheter Vildmarksfärdigheter",
    tabell: "Färder & äventyr",
    nummer: 14
  },
  {
    rubrik: "En oväntad resa",
    beskrivning:
      "Rollpersonen har deltagit i en expedition för att undersöka en historisk plats.",
    effekt: "4 enheter Vildmarksfärdigheter. Lättlärd i Historia",
    tabell: "Färder & äventyr",
    nummer: 15
  },
  {
    rubrik: "Ett med naturen",
    beskrivning:
      "Rollpersonen är ett med naturen och litar många gånger till sin intuition på sina färder i vildmarken. Förutom att rollpersonen sällan går vilse eller drabbas av missöden har denne även ett skarpt sinne och är mycket kvick.",
    effekt: "+2 Psyke. 2 enheter Vildmarksfärdigheter",
    tabell: "Färder & äventyr",
    nummer: 16
  },
  {
    rubrik: "Exceptionellt föremål",
    beskrivning:
      "Personen har kommit över ett exceptionellt föremål av något slag. Det kan vara i stort sett vad som helst, ett musikinstrument, dyrkar, kirurgiska instrument, ett rep eller liknande, dock inte ett vapen.",
    effekt:
      "Välj en passande färdighet som varken är Undvika, en Stridsfärdighet eller Mystikfärdighet. Till denna färdighet ger föremålet +1T6 i bonus när man använder det till vad det är menat för",
    tabell: "Färder & äventyr",
    nummer: 17
  },
  {
    rubrik: "Exceptionell vildmarksutrustning",
    beskrivning:
      "Rollpersonen har kommit över exceptionell vildmarksutrustning. Den innehåller allt som behövs för att överleva längre tider i vildmarken, exempelvis ett tält för två personer, kokkärl och kedja, en stor vattensäck, ett par lyktor, en kortbåge och en jaktkniv.",
    effekt:
      "3 enheter Vildmarksfärdigheter. Utrustningen ger bonus +1T6 på slag med Vildmarksvana",
    tabell: "Färder & äventyr",
    nummer: 18
  },
  {
    rubrik: "Fel tid på fel plats",
    beskrivning:
      "Rollpersonen har varit vid fel tid och på fel plats. Välj ett av följande alternativ: Pryglad, Tid som straffånge, eller Skeppsbrott.",
    effekt:
      "Pryglad: +2 Tålighet. 1 Avtrubbningskryss för utsatthet. Tid som straffånge:  Lättlärd i Skumraskaffärer. 2 enheter Stridsfärdigheter. Skeppsbrott: 4 enheter Vildmarksfärdigheter.",
    tabell: "Färder & äventyr",
    nummer: 19
  },
  {
    rubrik: "Kvicktänkt",
    beskrivning:
      "Rollpersonen är mycket kvicktänkt och kan allt som oftast komma på en bra lösning på brådskande problem.",
    effekt: "+2 Psyke. Expertisen Flyktvägar 4T6",
    tabell: "Färder & äventyr",
    nummer: 20
  },
  {
    rubrik: "Flytt från monster",
    beskrivning:
      "Rollpersonen har flytt från ett monster som visade sig vara mycket farligare än vad rollpersonen först hade trott.",
    effekt: "Expertisen Monsterkunskap 4T6. 3 enheter Rörelsefärdigheter",
    tabell: "Färder & äventyr",
    nummer: 21
  },
  {
    rubrik: "Främling i fara",
    beskrivning:
      "Rollpersonen har kommit i en situation där en främling varit i stor fara. Det kan ha varit en person som fastnat i ett brinnande hus, någon som håller på att drunkna eller blir misshandlad av en uppretad folkmassa. Att försöka rädda främlingen innebar stor fara och spelaren får välja om denne undsatt främlingen eller ej.",
    effekt:
      "Undsatt främlingen: –1 Rörlighet på grund av en skada som rollpersonen ådrog sig. Slå två gånger på bakgrundstabellen och välj en som visar vem främlingen är. Rollpersonen får välja en av de två enhetsgrupperna, detta är sådant som rollpersonen lärt sig av främlingen. Lämnat främlingen: 1 poäng Expertiser då rollpersonen spenderat tiden med andra saker",
    tabell: "Färder & äventyr",
    nummer: 22
  },
  {
    rubrik: "Fångad av vildar",
    beskrivning:
      "Personen har under en av sina resor blivit infångad av primitiva vildar. Detta kan vara allt från inavlade bönder, en kamoriansk stam eller liknande.",
    effekt: "2 Språkenheter. 1 Avtrubbningskryss för utsatthet",
    tabell: "Färder & äventyr",
    nummer: 23
  },
  {
    rubrik: "Färdats över haven",
    beskrivning:
      "Rollpersonen har färdats över många hav och lärt sig mycket på sina resor.",
    effekt:
      "Lättlärd i Sjömannaskap. 2 enheter Kunskapsfärdigheter. 2 Språkenheter",
    tabell: "Färder & äventyr",
    nummer: 24
  },
  {
    rubrik: "Färd genom Skugglandet",
    beskrivning:
      "Personen har blivit indragen i det mystiska Skugglandet då denne var i civilisationens utkanter. Detta har på något sätt märkt personen och denne var inte densamme när denne kom ut därifrån.",
    effekt: "+2 i valfritt grundattribut, 1 poäng Kännetecken.",
    tabell: "Färder & äventyr",
    nummer: 25
  },
  {
    rubrik: "Följe med underhållare",
    beskrivning:
      "Under en tid följde rollpersonen med ett följe med vandrande underhållare där denne lärde sig deras värv.",
    effekt: "Lättlärd i Dansa samt Sång & musik",
    tabell: "Färder & äventyr",
    nummer: 26
  },
  {
    rubrik: "Följer sitt hjärta",
    beskrivning:
      "Rollpersonen har märkt att denne mår som bäst när denne följer sitt hjärta.",
    effekt:
      "Får igen ytterligare 1 Fokus varje gång rollpersonen får igen Fokus på grund av ett karaktärsdrag",
    tabell: "Färder & äventyr",
    nummer: 27
  },
  {
    rubrik: "Föremål från forntida rike",
    beskrivning:
      "Rollpersonen har under sina äventyr kommit över ett mycket legendariskt föremål.",
    effekt:
      "Föremålet är värt 4T6×100 silver för en samlare och ger +1T6 på slag där den kommer till användning. Så länge rollpersonen har det i sin ägo ger den dessutom +1T6 på alla slag i sociala konflikter som är mot personer som är intresserade av historia eller kultur",
    tabell: "Färder & äventyr",
    nummer: 28
  },
  {
    rubrik: "Förhållande med person av främmande folkslag",
    beskrivning:
      "Rollpersonen har haft ett förhållande med en person av ett folkslag annat än sitt eget. Kanske är det en alv, kamorian, adasier, zhan eller liknande.",
    effekt:
      "Lättlärd i Kulturkännedom. 1 poäng Expertiser som visar vad rollpersonen har lärt sig av sin partner. 2 Språkenheter för folkslagets språk",
    tabell: "Färder & äventyr",
    nummer: 29
  },
  {
    rubrik: "God hörsel",
    beskrivning: "Rollpersonen har mycket god hörsel.",
    effekt: "+1T6 Vaksamhet. Kännetecknet God hörsel 4T6",
    tabell: "Färder & äventyr",
    nummer: 30
  },
  {
    rubrik: "Gravt misslyckande",
    beskrivning:
      "Rollpersonen har begått ett gravt misslyckande. Denne har försökt göra något som misslyckats katastrofalt. Kanske har denne lett ett skepp på grund, råkat förgifta en vän, bränt ned familjens gård eller avslöjat en hemlighet. Detta misslyckande är känt i rollpersonens kretsar och det talas bakom dennes rygg.",
    effekt:
      "1 poäng Expertiser som på något sätt kopplat till misslyckandet. 1 Avtrubbningskryss för utsatthet",
    tabell: "Färder & äventyr",
    nummer: 31
  },
  {
    rubrik: "Gömställe",
    beskrivning:
      "Rollpersonen har ett gömställe som denne och dennes vänner kan söka skydd i. Detta kan vara allt från ett ensligt bergskloster till en krypta, en lönngång in bakom en bokhylla i ett slott eller en stuga djupt in i skogen. Rollpersonen är mycket rädd om att avslöja stället och är därför mycket vaksam.",
    effekt:
      "+2 Uppfattning. Lättlärd i Speja. Rollpersonen kan etablera gömstället i spel när denna finner det lämpligt",
    tabell: "Färder & äventyr",
    nummer: 32
  },
  {
    rubrik: "Havssjäl",
    beskrivning:
      "Rollpersonen trivs på sjöar och hav. Ett skepps knarrande skrov och vågornas skvalpningar gör att denne kan slappna av och känna sig som hemma.",
    effekt:
      "Lättlärd i Simma och Sjömannaskap. Ytterligare 2 Fokus återfås i början av varje spelmöte när rollpersonen befinner sig på ett skepp eller så pass nära havet att denne kan höra vågornas brus",
    tabell: "Färder & äventyr",
    nummer: 33
  },
  {
    rubrik: "Hemlig identitet",
    beskrivning:
      "Rollpersonen har egentligen en annan bakgrund och ett annat namn men har tvingats fly och ta sig an en ny identitet för att komma undan de som letar efter denne. Varför rollpersonen tvingats fly är upp till spelaren och spelledaren.",
    effekt:
      "Slå två gånger på bakgrundstabellen och välj en som visar den andra bakgrunden. Rollpersonen får välja en av färdighetsgrupperna från denna bakgrund",
    tabell: "Färder & äventyr",
    nummer: 34
  },
  {
    rubrik: "Hittat kropp",
    beskrivning:
      "Rollpersonen har hittat liket av en död person. Personen kan antingen ha plundrat kroppen på allt den har eller försökt återföra den till dess anhöriga.",
    effekt:
      "Plundrat: 2T6×10 silver. 2 enheter Rörelsefärdigheter. Återfört: 4T6+50 silver. 3 enheter Sociala färdigheter",
    tabell: "Färder & äventyr",
    nummer: 35
  },
  {
    rubrik: "Hjälpt befolkning",
    beskrivning:
      "Rollpersonen har hjälpt befolkningen i en stadsdel eller by på något sätt. Detta kan vara en fråga om pengar, beskydd eller bara givit dem upprättelse. Befolkningen är mycket tacksam och alla ser på rollpersonen med varma hjärtan och denne är alltid välkommen till dem.",
    effekt:
      "Exceptionellt föremål i gåva. Om det är ett vapen så ökar dess skada med +1T6, om det är en rustning så ökar samtliga Pansarvärden med +3, om det är ett föremål så ger det +1T6 bonus till en färdighet när det används (ej till Undvika, Stridsfärdigheter eller Mystikfärdigheter)",
    tabell: "Färder & äventyr",
    nummer: 36
  },
  {
    rubrik: "Händig",
    beskrivning:
      "Rollpersonen tycker om att hålla händerna sysselsatta samtidigt som denne låter hjärnan arbeta.",
    effekt: "+2 Rörlighet. Expertisen Lappa & laga 4T6. 2 poäng Hantverk",
    tabell: "Färder & äventyr",
    nummer: 37
  },
  {
    rubrik: "Ihärdig",
    beskrivning:
      "Rollpersonen ger inte upp. Även i de största motgångar så kan denne kämpa vidare.",
    effekt: "+1T6 Vilja. Lättlärd i Vildmarksvana",
    tabell: "Färder & äventyr",
    nummer: 38
  },
  {
    rubrik: "Infångad och torterad",
    beskrivning:
      "Personen har blivit infångad och torterad och bär fortfarande ärr på sin kropp över detta. Exakt varför och av vilka är upp till spelaren och spelledaren.",
    effekt: "1 Avtrubbningskryss för utsatthet. +2 Livskraft vid Chockslag",
    tabell: "Färder & äventyr",
    nummer: 39
  },
  {
    rubrik: "Infört en tradition",
    beskrivning:
      "Rollpersonen har infört en tradition som blivit spridd i ett område. Rollpersonen är mycket populär och ses som traditionens grundare.",
    effekt:
      "+2 Utstrålning. Rollpersonen får 4T6 i en valfri Expertis som på något sätt är kopplad till traditionen",
    tabell: "Färder & äventyr",
    nummer: 40
  },
  {
    rubrik: "Kartsamling",
    beskrivning:
      "Rollpersonen har en stor kartsamling över de flesta civiliserade områden som denne kan konsultera på sina resor.",
    effekt:
      "+2 Visdom. Lättlärd i Geografi. Rollpersonen får även bonus +1T6 om denne kan använda kartorna för att planera resor och liknande",
    tabell: "Färder & äventyr",
    nummer: 41
  },
  {
    rubrik: "Klättrare",
    beskrivning:
      "Personen är mycket skicklig på att klättra och kan snabbt ta sig upp för både träd, rep och murar. Dessutom har personen tränat upp sin fysik.",
    effekt: "+2 Styrka, +2 Rörlighet. Lättlärd i Klättra",
    tabell: "Färder & äventyr",
    nummer: 42
  },
  {
    rubrik: "Koordinerad",
    beskrivning:
      "Rollpersonen har en naturlig fallenhet för snabbhet och koordination.",
    effekt:
      "När rollpersonen använder Fokus för att ge bonus till en Rörelsefärdighet så får denne ytterligare +1T6 bonus",
    tabell: "Färder & äventyr",
    nummer: 43
  },
  {
    rubrik: "Kärnfrisk",
    beskrivning:
      "Rollpersonen blir så gott som aldrig sjuk och är också mycket uthållig.",
    effekt: "+2 Tålighet. +1T6 Livskraft vid Infektionsslag",
    tabell: "Färder & äventyr",
    nummer: 44
  },
  {
    rubrik: "Levt i annat land",
    beskrivning:
      "Personen har spenderat en del tid i ett annat land och har lärt sig språket samt kulturen.",
    effekt: "3 enheter Kunskapsfärdigheter. 2 Språkenheter",
    tabell: "Färder & äventyr",
    nummer: 45
  },
  {
    rubrik: "Levt i exil",
    beskrivning:
      "Rollpersonen har levt i exil för att undkomma krav på hämnd för ett brott denne inte begått.",
    effekt: "3 enheter Vildmarksfärdigheter. 1 Språkenhet",
    tabell: "Färder & äventyr",
    nummer: 46
  },
  {
    rubrik: "List",
    beskrivning:
      "Rollpersonen har använt sin list för att ta sig över till synes övermäktiga hinder ute i vildmarken. Med knapp utrustning lyckas rollpersonen nästan alltid komma på något sätt att lösa problemet.",
    effekt: "+2 Psyke. 3 enheter Vildmarksfärdigheter",
    tabell: "Färder & äventyr",
    nummer: 47
  },
  {
    rubrik: "Lokalsinne",
    beskrivning: "Rollpersonen har ett mycket gott lokalsinne.",
    effekt: "Lättlärd i Orientering. Expertisen Grottsystem 4T6",
    tabell: "Färder & äventyr",
    nummer: 48
  },
  {
    rubrik: "Lurat döden",
    beskrivning:
      "Rollpersonen har varit nära att dö. Det kan antingen röra sig om en olycka såsom att denne höll på att drunkna eller brinna inne eller kanske att denne skulle bli dräpt men undkom med blotta förskräckelsen. Rollpersonen lärde sig dock att med självkontroll och ett kyligt sinne kan man klara sig från även de mest farliga situationer.",
    effekt: "1 Avtrubbningskryss för våld. +1T6 Självkontroll vid Skräck",
    tabell: "Färder & äventyr",
    nummer: 49
  },
  {
    rubrik: "Lång expedition",
    beskrivning: "Rollpersonen har deltagit i en lång expedition.",
    effekt: "4 enheter Vildmarksfärdigheter",
    tabell: "Färder & äventyr",
    nummer: 50
  },
  {
    rubrik: "Mörkersyn",
    beskrivning:
      "Rollpersonen kan se i kompakt mörker i exempelvis grottor eller tunnlar. När mörkersynen aktiveras skimrar personens ögon i rött, dock inte tillräckligt för att lysa upp rummet.",
    effekt: "+3 Uppfattning. Rollpersonen får kännetecknet Mörkersyn 4T6.",
    tabell: "Färder & äventyr",
    nummer: 51
  },
  {
    rubrik: "Möte med det övernaturliga",
    beskrivning:
      "Rollpersonen har mött något övernaturligt väsen, kanske en demon eller en talande vandöd. Hur rollpersonen flydde från väsendet minns ej denne.",
    effekt: "2 Avtrubbningskryss för övernaturligt",
    tabell: "Färder & äventyr",
    nummer: 52
  },
  {
    rubrik: "Namnet förevigat",
    beskrivning:
      "Rollpersonen har fått en plats, ett skepp, en väg, naturformation eller något liknande uppkallat efter sig. Exakt hur detta kommer sig får spelaren och spelledaren bestämma.",
    effekt:
      "+2 i valfritt grundattribut. Lättlärd i valfri Kunskapsfärdighet eller Vildmarksfärdighet",
    tabell: "Färder & äventyr",
    nummer: 53
  },
  {
    rubrik: "Nattsyn",
    beskrivning:
      "Personen ser mycket bra under ljussvaga förhållanden och kan navigera sig fram i mörker (dock inte totalt mörker) utan svårigheter.",
    effekt: "+3 i Uppfattning. Rollpersonen får kännetecknet Nattsyn 4T6",
    tabell: "Färder & äventyr",
    nummer: 54
  },
  {
    rubrik: "Omvändande händelse",
    beskrivning:
      "Rollpersonen har varit med om en omvändande händelse och få som kände rollpersonen förr skulle ens tro att detta är samme person. En pacifist har blivit våldsam, en lögnare hederlig, en kysk blivit vilt sexuellt utlevande.",
    effekt:
      "Rollpersonen får välja ett primärt karaktärsdrag som denne tidigare hade och sedan förklara hur detta försvann och ersattes med det nya. 4 valfria enheter som ska placeras på färdigheter knutna till det gamla karaktärsdraget",
    tabell: "Färder & äventyr",
    nummer: 55
  },
  {
    rubrik: "Onaturlig storm",
    beskrivning:
      "Rollpersonen har hamnat mitt i ett oväder som var laddat av magisk kraft och slet sönder barriärerna mellan världar och fjärran sfärer. När sedan rollpersonen kom ut från stormen har magisk kraft haft mycket svårt att bita på denne.",
    effekt:
      "Inga mystiska verk kan ha rollpersonen som direkt mål, oavsett magnitud. Dock påverkas rollpersonen indirekt av verk som lagts på ett område. Svårlärd i alla Mystikfärdigheter",
    tabell: "Färder & äventyr",
    nummer: 56
  },
  {
    rubrik: "Ordnar sin egen mat",
    beskrivning:
      "Rollpersonen har mer än en gång tvingats ordna sin egen mat och har blivit något av en expert att hitta ätbara saker och tillaga dessa på bästa möjliga sätt.",
    effekt: "Lättlärd i Naturlära och Jakt & fiske. Hantverket Kock 4T6",
    tabell: "Färder & äventyr",
    nummer: 57
  },
  {
    rubrik: "Orädd",
    beskrivning:
      "Rollpersonen är nästintill totalt orädd. Denne kan stirra skräcken i vitögat och skratta åt den. Detta kanske beror på dumdristig naivitet, extrem viljestyrka eller ren och skär dödsdrift.",
    effekt: "+3T6 Självkontroll vid Skräck",
    tabell: "Färder & äventyr",
    nummer: 58
  },
  {
    rubrik: "Plundringsgods",
    beskrivning:
      "Rollpersonen har kommit över plundringsgods genom att stjäla det av plundrarna på en av sina många resor. Dock var godset inte till någon användning för rollpersonen så denne har istället fått fokusera på att få grejerna sålda.",
    effekt: "Lättlärd i Smyga. Expertisen Kränga 4T6",
    tabell: "Färder & äventyr",
    nummer: 59
  },
  {
    rubrik: "Publikfriare",
    beskrivning:
      "Personen har under en tid livnärt sig med att spela musik, berätta sagor och gyckla. Att stå på en scen och få ta emot publikens jubel är bland det bästa denne vet.",
    effekt:
      "3 enheter Sociala färdigheter och rollpersonen återfår dessutom 1 Fokus varje gång denne uppträder inför publik",
    tabell: "Färder & äventyr",
    nummer: 60
  },
  {
    rubrik: "På fiendemark",
    beskrivning:
      "Rollpersonen har under en längre tid vistats på fiendemark. Detta kan vara i form av en expedition ut i det otyglade Kamor, som spion, legosoldat eller på en långvarig kampanj. Rollpersonen lärde sig en del om den främmande kulturen.",
    effekt: "+2 Visdom. 4 enheter Kunskapsfärdigheter. 2 Språkenheter",
    tabell: "Färder & äventyr",
    nummer: 61
  },
  {
    rubrik: "Resa över Mundana",
    beskrivning:
      "Rollpersonen har företagit en resa som fört denne till ett flertal av Mundanas länder. Resan har mest troligt tagit några års tid och under denna tid har rollpersonen hunnit uppleva främmande kulturer, spännande möten och dramatiska äventyr. ",
    effekt:
      "Lättlärd i Kulturkännedom. 3 enheter Vildmarksfärdigheter, 3 enheter Kunskapsfärdigheter. Rollpersonen har dock dragit på sig en underlig sjukdom eller blivit skadad i ett överfall eller olycka. Välj: –2 Styrka, Tålighet eller Rörlighet. ",
    tabell: "Färder & äventyr",
    nummer: 62
  },
  {
    rubrik: "Riddjur med ekipage",
    beskrivning:
      "Rollpersonen äger av någon anledning en fyrhjulig vagn och två starka hästar. Dessa är trogna rollpersonen och har följt med på de flesta av dennes senare äventyr.",
    effekt: "Lättlärd i Köra vagn. 2 enheter Vildmarksfärdigheter",
    tabell: "Färder & äventyr",
    nummer: 63
  },
  {
    rubrik: "Rikligt belönad",
    beskrivning:
      "Rollpersonen har blivit rikligt belönad men mycket av pengarna har spenderats på tavernor och spelhålor.",
    effekt:
      "2 enheter Sociala färdigheter. Lättlärd i Spel & dobbel. En smärre del återstår av belöningen och startbelopp ökar med 2T6×10 silver",
    tabell: "Färder & äventyr",
    nummer: 64
  },
  {
    rubrik: "Rätt tid på rätt plats",
    beskrivning:
      "Rollpersonen har varit på rätt tid vid rätt plats. Välj ett av följande alternativ. Hittat skatt, Upptäckt sammansvärjning eller Utfört hjältedåd.",
    effekt:
      "Hittat skatt: 2 enheter Vildmarksfärdigheter. 1T6×500 silver. Upptäckt sammansvärjning: +1 Uppfattning, 2 enheter Sociala färdigheter. Utfört hjältedåd: 4 enheter Stridsfärdigheter. Slå två gånger på bakgrundstabellen och välj en som visar en person som rollpersonen räddat.",
    tabell: "Färder & äventyr",
    nummer: 65
  },
  {
    rubrik: "Sedd som hjälte",
    beskrivning:
      "Rollpersonen är sedd som hjälte i trakten och är mycket uppskattad av de flesta, de lite mer avundsjuka undantagna.",
    effekt: "+2 Utstrålning. 2 enheter Sociala färdigheter",
    tabell: "Färder & äventyr",
    nummer: 66
  },
  {
    rubrik: "Skarpsynt",
    beskrivning: "Rollpersonen har mycket skarp blick.",
    effekt: "+1T6 Uppfattning. Lättlärd i Genomsöka",
    tabell: "Färder & äventyr",
    nummer: 67
  },
  {
    rubrik: "Skicklig hantverkare",
    beskrivning:
      "Rollpersonen har en fallenhet för hantverk och tycker om att arbeta med händerna.",
    effekt: "4 poäng Hantverk",
    tabell: "Färder & äventyr",
    nummer: 68
  },
  {
    rubrik: "Skicklig simmare",
    beskrivning:
      "Personen är som en fisk i vattnet och kan simma snabbt och långt. Dessutom har personen ökat upp sin fysik.",
    effekt: "+1 Styrka, +2 Tålighet. Lättlärd i Simma",
    tabell: "Färder & äventyr",
    nummer: 69
  },
  {
    rubrik: "Räddat ädling",
    beskrivning:
      "Rollpersonen har under en av sina färder räddat en ung ädling från stor fara. Rollpersonen har fått en riklig belöning och levt ett liv i lyx en tid.",
    effekt:
      "Lättlärd i Hovliv. 2 enheter Sociala färdigheter. Startbelopp ökar med 3T6×10 silver",
    tabell: "Färder & äventyr",
    nummer: 70
  },
  {
    rubrik: "Sans och vett",
    beskrivning:
      "Rollpersonen har under sina resor blivit allmänbildad och lärt sig både ett och annat.",
    effekt: "+1T6 Visdom. 3 valfria enheter",
    tabell: "Färder & äventyr",
    nummer: 71
  },
  {
    rubrik: "Sjökort",
    beskrivning:
      "Rollpersonen har tillbringat en tid på havet och har kommit över en samling sjökort som denne lärt sig använda. Dessa används för att navigera i ett valt område.",
    effekt:
      "+2 Visdom. Lättlärd i Navigation och Sjömannaskap. Rollpersonen får även bonus +1T6 om denne kan använda sjökorten för att planera havsresor och liknande",
    tabell: "Färder & äventyr",
    nummer: 72
  },
  {
    rubrik: "Skicklig jägare",
    beskrivning:
      "Rollpersonen är en skicklig jägare och vet precis var man finner småvilt, hur man plundrar bon på ägg eller bara hittar ätbara rötter.",
    effekt: "+1 Uppfattning. Lättlärd i Genomsöka och Jakt & fiske",
    tabell: "Färder & äventyr",
    nummer: 73
  },
  {
    rubrik: "Skrockfull",
    beskrivning:
      "Rollpersonen har sett mycket och blivit skrockfull efter alla sina färder. Denne tenderar att be vid vägkors och kapell, korsa sig när någon märker den mörkes namn och passa sig för platser som har onda omen över sig.",
    effekt: "+2 Uppfattning. Lättlärd i Ockultism",
    tabell: "Färder & äventyr",
    nummer: 74
  },
  {
    rubrik: "Skuld till väsen",
    beskrivning:
      "Personen står i skuld till ett väsen som denne mött under sina resor. Detta kan vara en demon, en sagitaur, ett skogsrå eller något liknande.",
    effekt: "2 enheter Kunskapsfärdigheter, 2 enheter Vildmarksfärdigheter",
    tabell: "Färder & äventyr",
    nummer: 75
  },
  {
    rubrik: "Skumma krogar",
    beskrivning:
      "Rollpersonen känner väl till skumma krogar och är antingen där för att släcka sin törst eller leta arbete. Det dricks en hel del och blir mycket spelande.",
    effekt: "Lättlärd i Slagsmål och Spel & dobbel. Expertisen Supa 4T6",
    tabell: "Färder & äventyr",
    nummer: 76
  },
  {
    rubrik: "Snabb",
    beskrivning: "Personen rör sig snabbt och smidigt.",
    effekt: "Lättlärd i Hoppa. 2 enheter Rörelsefärdigheter. +1T6 Förflyttning",
    tabell: "Färder & äventyr",
    nummer: 77
  },
  {
    rubrik: "Snabb och smidig",
    beskrivning:
      "Rollpersonen är snabb, smidig, gänglig och har en akrobatisk och slank kropp.",
    effekt: "–2 Styrka, +2 Rörlighet, +2 Reaktion, +2 Förflyttning",
    tabell: "Färder & äventyr",
    nummer: 78
  },
  {
    rubrik: "Sover djupt",
    beskrivning:
      "Rollpersonen sover mycket djupt och har en förmåga att kunna somna var som helst och är mycket svår att väcka. Det kräver att man skakar denne, skriker högt eller ger ordentligt med örfilar eller kastar en hink vatten över denne. Fördelen med denna djupa sömn är att rollpersonen vaknar utvilad och pigg även efter de mest miserabla förhållanden.",
    effekt:
      "Rollpersonen blir endast väckt av någon om denne aktivt försöker väcka rollpersonen, och trots detta får rollpersonen tidigast agera 3 stridsrundor senare. Den djupa sömnen gör dock att rollpersonen får igen ytterligare 2 Fokus i början av varje spelmöte",
    tabell: "Färder & äventyr",
    nummer: 79
  },
  {
    rubrik: "Splittrat ett äktenskap",
    beskrivning:
      "Rollpersonen har på ett eller annat sätt lyckats splittra ett äktenskap. Det kan vara på grund av otrohet, att denne dragit upp massor med hemligheter till ytan eller att rollpersonen bara sagt olämpliga saker under själva vigseln som fått allt att falla samman. Båda familjerna är ogillande inställd till rollpersonen och denne har tvingats hålla sig undan från dem.",
    effekt: "2 enheter Rörelsefärdigheter, 2 enheter Vildmarksfärdigheter",
    tabell: "Färder & äventyr",
    nummer: 80
  },
  {
    rubrik: "Stor kartsamling",
    beskrivning: "Rollpersonen har en stor samling kartor i sin ägo.",
    effekt:
      "Kartorna ger rollpersonen +1T6 på alla Geografi- eller Orienteringsslag när dessa kan användas. Hantverket Kartritare 4T6",
    tabell: "Färder & äventyr",
    nummer: 81
  },
  {
    rubrik: "Stor upptäckt",
    beskrivning:
      "Personen har gjort en stor upptäckt som gjort denne känd i hela riket (i alla fall bland de lärda och bildade). Detta kan röra sig om att personen funnit en ruinstad, en artefakt, en ny viktig handelsled, vad som hände med en försvunnen expedition eller liknande.",
    effekt:
      "Välj mellan 4 enheter Kunskapsfärdigheter, 4 enheter Sociala färdigheter eller 4 enheter Vildmarksfärdigheter. Startbelopp ökar med 2T6×10 silver.",
    tabell: "Färder & äventyr",
    nummer: 82
  },
  {
    rubrik: "Sånger och sagor",
    beskrivning:
      "Rollpersonen har under sina resor samlat på sig en mängd sånger och sagor.",
    effekt: "+2 Utstrålning. Lättlärd i Sång & musik och Berättarkonst",
    tabell: "Färder & äventyr",
    nummer: 83
  },
  {
    rubrik: "Talangfull",
    beskrivning:
      "Rollpersonen har ett flertal talanger inom vitt skilda områden.",
    effekt:
      "Lättlärd i en Kunskapsfärdighet, en Rörelsefärdighet, en Social färdighet samt en Vildmarksfärdighet.",
    tabell: "Färder & äventyr",
    nummer: 84
  },
  {
    rubrik: "Trofé",
    beskrivning:
      "Rollpersonen har kommit över en ståtlig trofé. Det kan vara en tand från ett monster, en missgärningsmans avhuggna huvud eller något liknande.",
    effekt: "4 valfria enheter som förklarar hur rollpersonen kom över trofén",
    tabell: "Färder & äventyr",
    nummer: 85
  },
  {
    rubrik: "Tur",
    beskrivning: "Rollpersonen har en naturlig tur.",
    effekt:
      "En gång per spelmöte kan spelaren slå om ett valfritt färdighetsslag som denne just misslyckats med eller om denne blivit missnöjd över resultatet",
    tabell: "Färder & äventyr",
    nummer: 86
  },
  {
    rubrik: "Udda beteende",
    beskrivning:
      "Rollpersonen har anammat ett udda beteende. Detta kan bero på fruktansvärda saker som denne upplevt eller att rollpersonen fått ett slag mot huvudet. Efter händelsen så stod inte allt rätt till.",
    effekt:
      "Rollpersonen får en Tvångshandling. Välj mellan 4 enheter Rörelsefärdigheter och 4 enheter Vildmarksfärdigheter som på något sätt är kopplade till denna tvångshandling",
    tabell: "Färder & äventyr",
    nummer: 87
  },
  {
    rubrik: "Uppmärksam",
    beskrivning: "Rollpersonen är mycket uppmärksam.",
    effekt: "+1T6 Uppfattning. Lättlärd i Speja",
    tabell: "Färder & äventyr",
    nummer: 88
  },
  {
    rubrik: "Utforskat bortglömd plats",
    beskrivning:
      "Rollpersonen har via skrifter och sägner funnit en bortglömd plats som denne utforskat. Det kan vara en tempelruin, ett gravkummel eller något liknande. Även om rollpersonen inte fann mycket av värde så skänkte det ändå erfarenhet och kunnande.",
    effekt: "4 enheter Rörelsefärdigheter",
    tabell: "Färder & äventyr",
    nummer: 89
  },
  {
    rubrik: "Vandrare",
    beskrivning:
      "Personen är en uthållig vandrare och kan gå långt och snabbt utan att bli utmattad.",
    effekt: "+2 Tålighet, +2 Rörlighet. Lättlärd i Marsch",
    tabell: "Färder & äventyr",
    nummer: 90
  },
  {
    rubrik: "Vig",
    beskrivning: "Rollpersonen är mycket vig.",
    effekt: "+2 Rörlighet. Lättlärd i Hoppa",
    tabell: "Färder & äventyr",
    nummer: 91
  },
  {
    rubrik: "Vildmarkens röst",
    beskrivning:
      "Rollpersonen har en naturlig fallenhet för att koncentrera sig, lyssna till sitt inre och lita till sin intuition.",
    effekt:
      "När rollpersonen använder Fokus för att ge bonus till en Vildmarksfärdighet så får denne ytterligare +1T6 bonus",
    tabell: "Färder & äventyr",
    nummer: 92
  },
  {
    rubrik: "Vildmarksliv",
    beskrivning: "Personen har överlevt en lång tid i vildmarken.",
    effekt: "Lättlärd i alla Vildmarksfärdigheter",
    tabell: "Färder & äventyr",
    nummer: 93
  },
  {
    rubrik: "Vägvisare",
    beskrivning:
      "Rollpersonen har umgåtts mycket med en vägvisare som lärt ut ett och annat.",
    effekt: "Lättlärd i Orientering. 4 enheter Vildmarksfärdigheter",
    tabell: "Färder & äventyr",
    nummer: 94
  },
  {
    rubrik: "Vän med värdshusvärd",
    beskrivning:
      "Rollpersonen har blivit mycket god vän med en värdshusvärd och får bo på dennes värdshus gratis och slipper betala för mat och dryck. Kanske har rollpersonen hjälpt värdshusvärden med något eller så äger denne en del av verksamheten.",
    effekt:
      "Lättlärd i Charm. 2 enheter Sociala färdigheter. Rollpersonen kan etablera värdshuset då det passar i spel",
    tabell: "Färder & äventyr",
    nummer: 95
  },
  {
    rubrik: "Återförenat ett älskande par",
    beskrivning:
      "Rollpersonen har lyckats återföra ett älskande par. Kanske blev den ena kidnappad, bortrövad eller gift mot sin vilja eller så skildes de åt av krig, skeppsbrott eller någon annan dramatisk händelse. Rollpersonen ansträngde sig dock för att återförena de unga tu.",
    effekt:
      "Slå två gånger på bakgrundstabellen och välj en som visar den sociala sfär där paret hör hemma. Rollpersonen får välja en av färdighetsgrupperna från denna bakgrund",
    tabell: "Färder & äventyr",
    nummer: 96
  },
  {
    rubrik: "Älskare",
    beskrivning:
      "Rollpersonen har en älskare eller älskarinna som denne har en kärleksrelation med. Detta är något som sker i hemlighet på grund av rollpersonens eller partnerns situation.",
    effekt:
      "Slå två gånger på bakgrundstabellen och välj en som visar vem älskaren är. Rollpersonen har lärt sig en del av sin partner och får därför välja en av färdighetsgrupperna som är knuten till dennes bakgrund.",
    tabell: "Färder & äventyr",
    nummer: 97
  },
  {
    rubrik: "Överlevt förföljelser",
    beskrivning:
      "Rollpersonen har klarat livhanken när dennes vänner och familjemedlemmar dödats eller försvunnit. Kanske tillhör familjen en hatad släkt eller så tros de vara medlemmar i en förbjuden kyrka.",
    effekt: "Lättlärd i Gömma. Expertisen Vädja 4T6",
    tabell: "Färder & äventyr",
    nummer: 98
  },
  {
    rubrik: "Övernaturlig kroppskontroll",
    beskrivning:
      "Rollpersonen har en otrolig kontroll över sin kropp och känner varje muskel ut i fingerspetsarna. Varje rörelse är till synes perfekt.",
    effekt: "Lättlärd i alla Rörelsefärdigheter",
    tabell: "Färder & äventyr",
    nummer: 99
  },
  {
    rubrik: "Händelserikt liv",
    beskrivning: "Rollpersonen har haft ett händelserikt liv.",
    effekt:
      "1 extra slag på valfri händelsetabell och slå dessutom om detta slag",
    tabell: "Färder & äventyr",
    nummer: 100
  }
];
