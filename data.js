// TODO: add y axis label to chart
// TODO: katrai tabulai pielikt punktu pie katra npk skatila.
export const macibas = [
    {
        id: 0,
        macibasNosaukums: "fizika",
        darbi: [
            {
                id: 1,
                nosaukums: "Blīvuma noteikšana Nr. 1.",
                components: [
                    {
                        type: "Text",
                        props: {
                            text: [
                                "Ir zināms, ka no viena un tā paša materiāla var izgatavot dažādas formas ķermeņus.",
                                "Problēma: vai vielas blīvums ir atkarīgs no ķermeņa formas?"
                            ]
                        }   
                    },
                    {
                        type: "Title",
                        children: "Hipotēze"
                    },
                    {
                        type: "Text",
                        children: "Blīvums nav atkarīgs no ķermeņa formas."
                    },
                    {
                        type: "Title",
                        children: "Darba uzdevumi"
                    },
                    {
                        type: "OList",
                        props: {
                            data: [
                                "Noteikt regulāras formas ķermeņa tilpumu un blīvumu, izmantojot svarus un bīdmēru. a) Noteikt regulāras formas ķermeņa tilpuma absolūto un relatīvo kļūdu, izmantojot ievietošanas paņēmienu. b) Noteikt regulāras formas ķermeņa absolūto un relatīvo kļūdu.",
                                "Noteikt neregulāras formas ķermeņa blīvumu, izmantojot hidrotatiskās svēršanas metodi. a) Noteikt ķermeņa blīvuma absolūto un relatīvo kļūdu."
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Darba piederumi"
                    },
                    {
                        type: "UList",
                        props: {
                            data: [
                                "Regulāras formas ķermenis",
                                "Bīdmērs (iedaļas vērtība `0.1cm`, mērapjoms `30.0cm`)",
                                "Svari (iedaļas vērtība `0.1g`, mērapjoms `1000.0g`)" ,
                                "5x detaļas",
                                "Dinamometrs (iedeļas vērtība `0.02N`, mērapjoms `2.0N`)",
                                "Diegs"
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Paskaidrojums"
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "Regulāras formas ķermeņu blīvumu `rho` aprēķina pēc formulas `rho=m/V`, kur `m` - ķermeņa masa, bet `V` - tilpums. Taisnstūra paralēlskaldnim tilpumu aprēķina pēc formulas `V=abc`, kur `a` - garums, `b` - platums un `c` - augstums. Ķermeņa masas noteikšanai izmanto svarus.",
                                "Lai aprēķināu neregulāras formas ķermeņu blīvumu, var izmantot hidrostatiskās svēršanas metodi.",
                                "`F_1=mg` - ķermeņa svars gaisā. `F_2=mg-F_4` - ķermeņa svars ūdenī.",
                                "`F_1=gm=rhoVg`, `rho` - ķermeņa blīvums, `V` - ķermeņa tilpums. `F_2=mg-F_A=rhoVg=rho_0Vg=(rho-rho_0)Vg`, kur `rho_0` - ūdens blīvums.",
                                "Tā kā: `F_1/F_2=(rhoVg)/((rho-rho_0)Vg)=rho/(rho-rho_0)`, tad ķermeņa blīvums: `rho=(F_1rho_0)/(F_1-F_2)`",
                                " ",
                                "Norādījumi:",
                                "1. Diegu izmantot, lai piestiprinātu stikla ķermeni dinamometram (neregulāras formas ķermenis).",
                                "2. Blīvumu noteikt pieciem dažādām viena materiāla ķermeņiem."
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "1. Regulāras formas ķermeņa blīvums."
                    },
                    {
                        type: "UList",
                        props: {
                            data: [
                                "Atkarīgais(-ie) lielums(-i): blīvums `[(g)/(cm^3)]`",
                                "Netkarīgais(-ie) lielums(-i): tilpums `[cm^3]`, masa `[g]`",
                                "Nemainīgais(-ie) lielums(-i): gravitācijas spēks `(g)`",
                            ]
                        }
                    },
                    {
                        type: "Title2",
                        children: "Mērījumu tabula 1."
                    },
                    {
                        type: "Table",
                        props: {
                            data: [
                                ["`m+-Deltam, g`", "94.1`+-`0.1"],
                                ["`a+-Deltaa, cm`", "4.8`+-`0.1"],
                                ["`b+-Deltab, cm`", "4.1`+-`0.1"],
                                ["`c+-Deltac, cm`", "7.9`+-`0.1"],
                            ]
                        }
                    },
                    {
                        type: "Title2",
                        children: "Aprēķini"
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "Ķermeņa tilpuma `V` aprēķināšana:",
                                "`V=abc=4.8*4.1*7.9=155.5cm^3`",
                                "Ķermeņa tilpuma absolūtā un relatīvā kļūda.",
                                "`r=(Deltaa)/a+(Deltab)/b+(Deltac)/c=0.1/4.8+0.1/4.1+0.1/7.9=0.058=5.8%`",
                                "`DeltaV=5%*V=5/100*155.5=7.8cm^3`",
                                "Rezultāts: `V=(155.5+-7.8)cm^3`, `r=5.8%`",
                                "Ķermeņa blīvuma `rho` aprēķināšana:",
                                "`rho=m/V=94.1/155.5=0.605g/(cm^3)`",
                                "Ķermeņa blīuma absolūtā un relatīvā kļūda",
                                "`r=(Deltam)/m+(DeltaV)/V=0.1/94.1+7.8/155.5=0.051=5.1%`",
                                "`Deltarho=5.1%*rho=5.1/100*0.605=0.031g/(cm^3)`",
                                "Rezultāts: `rho=(0.605+-0.031)g/(cm^3)`, `r=5.1%`"
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "2. Hidrostatiskās svēršanas metode."
                    },
                    {
                        type: "UList",
                        props: {
                            data: [
                                "Atkarīgais(-ie) lielums(-i): blīvums `[(g)/(cm^3)]`, spēks `[N]`",
                                "Netkarīgais(-ie) lielums(-i): masa `[g]`",
                                "Nemainīgais(-ie) lielums(-i): gravitācijas spēks `(g)`, ūdens blīvums `(rho_(H_2O))`",
                            ]
                        }
                    },
                    {
                        type: "Title2",
                        children: "Mērījumu tabula 2."
                    },
                    {
                        type: "Table",
                        props: {
                            data: [
                                ["Npk.", 1,2,3,4,5],
                                ["`F_1+-DeltaF_1, N`", "0.84`+-`0.02", "0.40", "0.36", "0.30", "0.28"],
                                ["`F_2+-DeltaF_2, N`", "0.48`+-`0.02", "0.24", "0.22", "0.18", "0.16"],
                                ["`rho_0, (kg)/m^3`", "1000"],
                                ["'`rho, (kg)/m^3`", "(nums[2][i]*nums[4][1]/(nums[2][i]-nums[3][i])).toFixed(0)"],
                                ["*`rho_(vid.), (kg)/m^3`", "(sums[5]/(nums[5].length-1)).toFixed(0)"],
                                ["'`Deltarho, (kg)/m^3`", "Math.abs(nums[5][i]-nums[6][1])"],
                                ["'`(Deltarho)^2, (kg^2)/m^6`", "(nums[5][i]-nums[6][1])**2"],
                            ]
                        }
                    },
                    {
                        type: "Title2",
                        children: "Aprēķini"
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "`rho=(F_(1_1)rho_0)/(F_(1_1)-F_(2_1))=(0.84*1000)/(0.84-0.48)=2333(kg)`",
                                "`rho_(vid.)=1/n*sum_(i=1)^nrho_i=1/5*sum_(i=1)^5rho_i=2447(kg)/m^3`",
                                "`Deltarho_1=|rho_1-rho_(vid.)|=|2333-2447|=114(kg)/m^3`",
                                "`(Deltarho)_1^2=(-114)^2=12996(kg^2)/m^6`",
                                "`Deltarho=tsqrt((sumDeltarho_i^2)/(n(n-1)))=2.776*48.47=134.6(kg)/m^3`",
                                "`r=(Deltarho)/rho_(vid.)=134.6/2447=0.055=5.5%`",
                                "Rezultāts: `rho=(2447+-137)(kg)/m^3`, `r=5.5%`"
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Rezultātu analīze"
                    },
                    {
                        type: "Text",
                        children: "Rezultāti ir pagūti ticami. `r<50%` izpildas abos gadījumos, kas apzīmē tos ticamus. `r` abos eksperimentos bija līdzīgs, bet 1. eksperimentā tā bija mazāka. Izlasot šo rakstu: https://matmatch.com/learn/property/density-of-wood, var spriest, ka izmērĪtais tilpums `(V)` bija patiess, jo rakstā ir rakstīts, ka koka blīvums ir `~0.65`. Iegūtais blīvums `(0.605)` ir salīdzinoši līdzīgs, protams, blīvums arī ir atkarīgs no koka veida, tādēļ ir atkarīga arī koka suga. Ņemot vērā arī eskperimenta vienkāršumu un formulas iemācīšanos jau pamatskolā, kļūdas pieļaušana eksperimenta procesā būtu grūta."
                    },
                    {
                        type: "Title",
                        children: "Eksperimenta izvērtēšana"
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "Eksperimentu bija viegli veikt, jo tas bija vienkāršs salīdzinot ar citiem. Veinīgais, kas bija ierobežojums bija rēķināšanas daudzums.",
                                "Bija daudz jārēķina ar roku, kas 2. eksperimentā ved pie daudz kļūdām. Šo nevar uzlabot ar rēķināmo daudzumu, jo jau tā ir maz rezultātu gadījūmi jārēķina, bet var uzlabot ar kādas programmas ieteikšanu, kuru var izmantot lai ievadot noteiktās vērtības varēs redzēt rezultātus, piemēram: https://www.calculator.net/triangle-calculator.html (priekš trijstūriem). Universāli šo var izdarīt ar 'Excel' tabulām vai tieši šim gadījumam izmantojot blīvuma kalkulatoru: https://www.calculatorsoup.com/calculators/physics/density.php, bet daudzi to neizmanto, jo neiedomājās vai nezin. Skolēniem var ieteikt šādu rīku izmantošanu lai atvieglotu dzīvi. "
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Secinājumi"
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "Redzams, ka hipotēze ir apstiprinājusies. To var apstiprināt ar datiem. Protams, teorētiski var redzēt arī, ka pēc blīvuma formulas `(rho=m/V)`, kur tuvākais formas ietekmei ir `V`, bet ja formu maina, tilpums nemainās tiklīdz kamēr lielums nepieaug. To var arī pierādīt ar Arhimēda spēku. Mēs praktiski vēl nezinām ja blīvuma vērtības ir ļoti lielas, piemēram, kas notiekas ar melniem carumiem un to formu maiņu. Spriežot pēc ši materiāla: https://www.youtube.com/watch?v=w0q4zNQIOjA melniem caurumiem ir ļoti liels blīvums `(4*10^14 g/(cm^3))` un par tiem ir maz zināms, toties mainot to formu mainīsies telpsiskais laiks, kurš var teorētiski izveidot 'tārpu caurumu', kas veidos ātrāku pārvietošanos par gaismas ātrumu, tātad hipotēze pašlaik tikai pastāv objektiem, kuri nesasniedz melno caurumu blīvumu."
                            ]
                        }
                    }
                ]
            },
            {
                id: 2,
                nosaukums: "Savas jaudas noteikšana. Nr. 2",
                components: [
                    {
                        type: "Text",
                        children: "Uzdevums: Nosaki savu attīstīto jaudu, kāpjot pa kāpnēm lēni, ātrāk un ļoti ātri."
                    },
                    {
                        type: "Title",
                        children: "Hipotēze"
                    },
                    {
                        type: "Text",
                        children: "Pieaugot laikam, pamazinās jauda."
                    },
                    {
                        type: "Title",
                        children: "Lielumi"
                    },
                    {
                        type: "UList",
                        props: {
                            data: [
                                "Neatkarīgais: Laiks `(t)`",
                                "Atkarīgais: Jauda `(P)`",
                                "Nemainīgie: Cilvēka masa `(m)`, Kāpņu augstums `(h)`",
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Darba piederumi"
                    },
                    {
                        type: "UList",
                        props: {
                            data: [
                                "Mērlente (iedeļas vērtība `0.001m`, mērapjoms `3m`)",
                                "Hronometrs (iedeļas vērtība `0.01s`)",
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Darba gaita"
                    },
                    {
                        type: "OList",
                        props: {
                            data: [
                                "Ar svaru palīdzību noteikt cilvēka masu `kg`.",
                                "Izmērīt kāpņu augstumu `h`.",
                                "Pārvietojoties no sākumpunkta līdz galapunktam nomērīt laiku  `(t)`.",
                                "Uz papīra noteikto laiku `(t)` pierakstīt, ievērojot pareizo mērvienību un ievērojot, ka laiks ir bāzes-60 skaitlis!",
                                "Aprēķināt jaudu `(P)`, izmantojot formulu: `P=(mgh)/t`.",
                                "Sekot 2. punktam katru 5. reizi un katru reizi sekot 3.-5.",
                                "Aprēķināt vidējo jaudu `P_(vid.)`!",
                                "Grafiski attēlot vidējās pieliktās jaudas atkarību no vidējā uzkāpšanas laika no katras tabulas!"
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Iegūto datu reģistrēšana un apstrāde",
                    },
                    {
                        type: "Title2",
                        children: "(Kāpt pa 1 kāpnei)",
                    },
                    {
                        type: "Table",
                        props: {
                            data: [
                                ["Npk.", 1,2,3,4,5],
                                ["`m, kg`", "66"],
                                ["`h, m`", "2.38"],
                                ["`t, s`", "6.25", "6.50", "6.53", "6.88", "6.06"],
                                ["'`P, W`", "((nums[2][1]*nums[3][1]*10)/nums[4][i]).toFixed(2)"],
                                ["*`P_(vid.), W`", "(sums[5]/(nums[5].length-1)).toFixed(2)"],
                            ]
                        }
                    },
                    {
                        type: "Title2",
                        children: "(Kāpt pa 2 kāpnēm)",
                    },
                    {
                        type: "Table",
                        props: {
                            data: [
                                ["Npk.", 1,2,3,4,5],
                                ["`m, kg`", "66"],
                                ["`h, m`", "2.38"],
                                ["`t, s`", "2.72", "2.47", "2.59", "2.66", "2.44"],
                                ["'`P, W`", "((nums[2][1]*nums[3][1]*10)/nums[4][i]).toFixed(2)"],
                                ["*`P_(vid.), W`", "(sums[5]/(nums[5].length-1)).toFixed(2)"],
                            ]
                        }
                    },
                    {
                        type: "Title2",
                        children: "(Kāpt pa 3 kāpnēm)",
                    },
                    {
                        type: "Table",
                        props: {
                            data: [
                                ["Npk.", 1,2,3,4,5],
                                ["`m, kg`", "66"],
                                ["`h, m`", "2.38"],
                                ["`t, s`",  "1.53", "1.41", "1.46", "1.41", "1.53"],
                                ["'`P, W`", "((nums[2][1]*nums[3][1]*10)/nums[4][i]).toFixed(2)"],
                                ["*`P_(vid.), W`", "(sums[5]/(nums[5].length-1)).toFixed(2)"],
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Vidējā laika atkarība no vidējās jaudas"
                    },
                    {
                        type: "Chart",
                        props: {
                            info: {
                                title: "Vidējā laika atkarība no vidējās jaudas",
                                x: "t, s", 
                                y: "P, W"
                            },
                            data: [
                                ["Laiks uzkāpšanas", 0,1.47, 2.58, 6.44],
                                ["Pieliktā jauda", 0,1071.46, 610.85, 244.21],
                            ]
                        }
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "Aprēķinu piemēri:",
                                "`P_(1_1)=(mgh)/t_(1_1)=(66*10*2.38)/6.25=251.33W`",
                                "`(P_(vid.))_1=1/nsum_(i=1)^nP_(1_i)=1/5*sum_(i=1)^5P_(1_i)=244.21W`",
                                "`(DeltaP)_(1_1)=P_(1_1)-(P_(vid.))_1=251.33-244.21=7.12W`",
                                "`DeltaP_1=1/nsum_(i=1)^nDeltaP_(1_i)=1/5*sum_(i=1)^5DeltaP_(1_i)=8.84W`",
                                "`R_1=(DeltaP_1)/(P_(vid.))_1=8.84/244.21=0.036=3.6%`"
                            ]
                        }
                    },
                    {
                        type: "Title2",
                        children: "Rezultāti"
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "`P_1+-DeltaP_1=(244.21+-8.84) W, R=3.6%`",
                                "`P_2+-DeltaP_2=(610.85+-23.21) W, R=3.8%`",
                                "`P_3+-DeltaP_3=(1071.46+-35.83) W, R=3.3%`",
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Secinājumi"
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "1. Kurā gadījumā ir attīstīta lielāka jauda? Pamato.",
                                "Lielāka jauda ir attīstīta, kad laiks ir mazāks. To var apskatīt ari formulā `P=(mgh)/t`, kur var redzēt, ka pamazinot `t`, palielinās `1/t`. Dēļ šī secinājuma var apstiprināt tabulā rakstīto, ka vismazākam laikam ir vislielākā jauda.",
                                "2. Salīdzini savu jaudi ar tabulā (https://ibb.co/QP3tF0C) dotajām vērtībām no cilvēka darbības veida.",
                                "Interesanti, ka strādājot fizisku darbu līdzas kāpņu kāpšanai, bet ātrā pārvietošanās ar lieliem soļiem ir jaudīgāks nekā skrienot pa kāpnēm ar 1 pakāpiena atstarpi. Vidēji ātra kāpņu kāpšana līdzas arī ātrai soļošanai, drusku pārspēj to. Iegūtā jauda ir drusku lielāka par tabulā minētajām jaudām saistītām ar kāpnēm, kas var radīties no paātrinātas kustības.",
                                "3. Secinājumi.",
                                "Tabulā var redzēt, ka hipotēze apstiprinās un, ka jauda ir lielāka, jo laiks ir mazāks. Skrienot jauda ir liela, kas ved uz nogurumu, bet ejot nogurums nav tik liels, jo jauda nav tik liela, dēļ tā, ka distance tika veikta lēnāk nekā skrienot. Tabulā nav pilnīgi dilstoša līnija, bet tas ir tikai dēļ fakta, ka tika izmantoti tikai 3 mērījumi un apskatot ļoti maza laika vērtību varētu redzēt, ka jauda būs ļoti liela. To var arī redzēt formlulā `P=(mgh)/t`, kur kā jau minēju iepriekš, `t` pamazinoties, palielinās `1/t`. Šis tika praktiski pierādīts ar mazām `t` vērtībam 2008. gadā: https://www.popsci.com/science/article/2013-07/physics-record-breaking-run/. Te var apskatīt, ka pasaules rekordā skriešanā, tika pielietoti `2619W`, kurā protams bija iesaistītas mazas `t` vērtības."
                            ]
                        }
                    }
                ]
            },
            {
                id: 5,
                nosaukums: "Slīdes berzes spēks. Slīdes berzes koeficients. Nr.5",
                components: [
                    {
                        type: "Title",
                        children: "Hipotēze"
                    },
                    {
                        type: "Text",
                        children: "Palielinoties klucīša masa, palielinās arī berzes spēks."
                    },
                    {
                        type: "Title",
                        children: "Darba uzdevumi"
                    },
                    {
                        type: "OList",
                        props: {
                            data: [
                                "Noteikt klucīša berzes spēka atkarību no klucīša smaguma spēka.",
                                "Iegūto atkarību attēlot grafiski.",
                                "Noteikt klucīša slīdes berzes koeficientu.",
                                "Noteikt slīdes berzes keoficientu, izmantojot slīpo plakni",
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Darba piederumi"
                    },
                    {
                        type: "UList",
                        props: {
                            data: [
                                "Lineāls `(+-0.1cm)`","Hronometrs `(+-0.01s)`", "Dinamometrs `(+-0.05N)`", "Dēlis", "Klucis", "Atsvari"
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Lielumi"
                    },
                    {
                        type: "UList",
                        props: {
                            data: [
                                "Neatkarīgais: `m [kg]`",
                                "Atkarīgais: `F_b [N]`",
                                "Nemainīgais: `mu`"
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Teorētiskais pamatojums"
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "Sakarā ar to, ka palielinās masa `[kg]`, palielinās arī `mg` (masa * brīvās krišanas paātrinājums). Zinot, ka `F_r=mg` un `F_b=muF_r=mumgcosalpha`, kur `mu` - berzes koeficients ir nemainīgs un `g` - gravitācijas spēks uz zemes ir `const`, `m` - masa.",
                                // "`F_b = ({const})*m*({const})*({const})`",
                                // "Var secināt, ka `F_b` ir atkarīgs no `m`, jeb- klucīša berzes spēks atkarīgs no masas."
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Tabula Nr. 1. Slīdes berzes spēka mērīšana."
                    },
                    {
                        type: "Table",
                        props: {
                            data: [
                                ["Npk.", 1,2,3,4,5,6,7],
                                ["`mg+-Deltamg, N`", "0.58`+-`0.01", "1.60", "2.60", "3.60", "4.60", "5.60", "6.60"],
                                ["`F_b +- DeltaF_b, N`", "0.23`+-`0.01", "0.72", "1.27", "1.82", "2.38", "2.92", "3.46"],
                                ["'`mu`", "(nums[3][i]/nums[2][i]).toFixed(2)"],
                                ["*`mu_(vid.)`", "(sums[4]/(nums[1].length-1)).toFixed(2)"]
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Kluča berzes spēks atkarībā no smaguma spēka"
                    },
                    {
                        type: "Chart",
                        props: {
                            info: {
                                title: "Kluča berzes spēks attīecībā pret smaguma spēķu",
                                x: "mg, N", 
                                y: "F₈, N"
                            },
                            data: [
                                ["Berzes spēks", 0, 0.23, 0.72, 1.27, 1.82, 2.38, 2.92, 3.46],
                                ["Smaguma spēks", 0, 0.58, 1.60, 2.60, 3.60, 4.60, 5.60, 6.60],
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Tabula Nr. 2. Slīpā plakne."
                    },
                    {
                        type: "Table",
                        props: {
                            data: [
                                ["Npk.", 1,2,3,4,5],
                                ["`h +-Deltah, cm`", "25.0`+-`0.1", "26.0", "28.0", "29.0", "29.5"],
                                ["'`l +-Deltal, cm`", "'50.0'+(i==1?'`+-`0.1':'')"],
                                ["'`tgalpha`", "(nums[2][i]/Math.sqrt(nums[3][i]**2-nums[2][i]**2)).toFixed(2)"],
                                ["'`mu`", "(nums[4][i]).toFixed(2)"]
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Aprēķinu piemēri:"
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "`mu=F_b/(mg)=0.23/0.58=0.40`", 
                                "`mu_(vid.)=1/n*sum_(i=1)^nmu_i=(0.58+0.61+0.68+0.71+0.73)/5=0.662`",
                                "`tgalpha=h/sqrt(l^2-h^2)=25.0/sqrt(50.0^2-25.0^2)=0.58`",
                                "`Deltamu_1=mu_(vid.)-mu_1=0.66-0.58=0.08`"
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Rezultāti:"
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "`(mu_(vid.)+-Deltamu)=0.66+-0.08`",
                                "`r=0.08/0.662*100%=12%`"
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Secinājumi un darba analīze"
                    },
                    {
                        type: "Title",
                        children: "Rezultātu analīze"
                    },
                    {
                        type: "Text",
                        children: "Spirežot pēc `r`, rezultāts ir sanācis ticams dēļ būšanas zem `50%`, kā arī balstoties uz mājaslapu: https://www.engineeringtoolbox.com/friction-coefficients-d_778.html, kur ir redzams, ka `mu` priekš koka pret koku ir `0.25` līdz `0.50` un pēc manas tabulas `mu_(vid.)=0.49`, tātad mērīšana tika veikta bez kļūdām, kas, manuprāt, veido rezultātus dabūtus no slīpās plaknes ticamus, jo tie tika identiski veikti ar iepriekš minētajiem, kuri pēc internetu resursu salīdzināšanas bija ticami."
                    },
                    {
                        type: "Title",
                        children: "Eksperimenta izvērtēšana"
                    },
                    {
                        type: "Text",
                        children: "Trūkumi bija maz, bet tie bija sekojoši: "
                    },
                    {
                        type: "UList",
                        props: {
                            data: [
                                "Dēļa garums bija par mazu, lai varētu precīzi saprast rezultātus, kas tika rādīti uz dinanometra. Dēli varētu pagarināt vai iegādāties jaunu dēli.",
                                "Dinomametra vērtības strauji lēkāja, ko varētu uzlabot ar elektriskā dinamometra ieviešanu, toties vajadzīgais budžets būtu samērā liels, tātad var veikt pirmo uzlabojumu, lai precīzāk varētu 'noķert' ar acīm pareizo vērtību. Toties, šis uz maziem lielumiem nebija ļoti ierobežojoši.",
                                "Klučiem dažiem bija nolauzti gali, kas veda pie ļoti straujas kritiskās domāšanas par jautājumu 'Kā lai pievienot klučus pie dēļa?', šo varētu viegli izlabot ar jaunu kluču vai tā galiņu iegādāšanos."
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Secinājumi"
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "Hipotēze apstiprinājās. Kamēr palielinās klucīša masa, palielinās arī berzes spēks. Pēc grafika var arī redzēt šo parādību, jo līnija, kas attēlo, ka `F_b` no `mg` attiecība ir augoša, kas arī atbilst hipotēzei. Protams visprecīzāk būtu šo apskatīt arī ar ļoti lieliem svariem, bet dēļ skolas apstākļiem un pieeijamiem līdzekļiem, to nebija iespējams izdarīt. Protams sakāra ar lielām `m` vērtībam nav praktiski nekas zināms, tikai teorētiski, tāpēc ir iespēja, ka hipotēze ļoti lielās `m` vērtības būs nepatiesa.",
                                "Kaut vai vēršoties par šō jautājumu dziļāk, uzzināju, ka lielām `m` vērtībam, kas līdzās melnajam caurumam, vēl nav zināms pat teorētiski precīzs dinamiskais berzes spēks apkārt esošajam melnajam caurumam. Info par šō rindkopu atrodams sekojoši: https://arxiv.org/abs/1108.1163"
                            ]
                        }
                    },
                ]
            },
            {
                id: 6,
                nosaukums: "Slīpas plaknes lietderības koeficienta noteikšana. Nr. 6",
                components: [
                    {
                        type: "Text",
                        props: {
                            text: [
                                "Ir zināms, ka cilvēki izgudroja un izmanto dažādus vienkāršos mehānismus, piemēram, slīpo plakni.",
                                "Problēma: vai slīpas plaknes lietderības koeficients ir atkarīgs no plaknes slīpuma lenķa?"
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Hipotēze"
                    },
                    {
                        type: "Text",
                        children: "Pieaugot leņķim `(alpha)`, pieaugs arī lietderības keoficients `(eta)`."
                    },
                    {
                        type: "Title",
                        children: "Darba uzdevumi"
                    },
                    {
                        type: "OList",
                        props: {
                            data: [
                                "Noteikt slīpās plaknes lietderības koeficientu, dažādiem slīpuma leņķiem, un salīdzināt ar teorētiski aprēķināto.",
                                "Grafiski attēlot slīpās plaknes lietderības koeficientu atkarībā no plaknes slīpuma leņķa `eta=eta(alpha)` un salīdzināt ar teorētisko līkni `eta_0=eta_0(alpha)`. Abas līknes konstruēt vienā koordinātu plaknē. Vienam `eta` aprēķināt absolūto un relatīvo kļūdu."
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Darba piederumi"
                    },
                    {
                        type: "UList",
                        props: {
                            data: [
                                "Statīvs ar piederumiem",
                                "Dēlīs",
                                "Klucis",
                                "Atsvari",
                                "Transportieris `(+-1°)`",
                                "Dinamometrs `(+- 0.05N)`",
                                "Lineāls `(+- 1cm)`"
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Paskaidrojums"
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "Ja ķermeni vienmērīgi velk augšup pa slīpo plakni, tad vilcējspēka `F_v` darbs ir `A=F_vl`, bet ķermeņa potenciālās enerģijas izmaiņa `DeltaW_p=mgh`, kur `m` - ķermeņa masa. To ievērojot, izsaka slīpās plaknes lietderības koeficientu `eta=(mgh)/(F_vl)`.",
                                "Ķermeni vienmērīgi pārvietojot augšup, `F_v=mg(sinalpha+mucosalpha)` un `eta_0=(mgh)/(mg(sinalpha+mucosalpha)l)`. Tā kā `h/l=sinalpha`, tad `eta_0=sinalpha/(sinalpha+mucosalpha)=1/(1+muctg(alpha))`"
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Norādījumi."
                    },
                    {
                        type: "OList",
                        props: {
                            data: [
                                "Izveidot slīpo plakni, dēlīti iestiprinot statīvā.",
                                "Ar dinamometru noteikt klucīša un atsvara kopējo smaguma spēku `mg` (izmantot visus atsvarus).",
                                "Novietot klucīti ar atsvaru uz slīpās plaknes un ar dinamometru vienmērīgi vilkt augšup klucīti. Izmērīt vilcējspēku `F_v`, slīpās plaknes augstumu `h`, garumu `l` un slīpuma leņķi `alpha`.",
                                "Mērījumus atkārtot, mainot plaknes slīpuma leņķi `alpha`.",
                                "Attēlot grafiski lietderības koeficenta `eta` atkarību no plaknes slīpuma leņķa `alpha`.",
                                "Noteikt slīdes berzes koeficientu `mu` klucītim attiecībā pret dēlīti.",
                                "Izvēlētajām slīpuma leņķa `alpha` vērtībām aprēķināt teorētisko slīpas plaknes lietderības koeficientu `eta_0`. (`mu` vietā izmantot `mu_(vid.)`)."
                            ]
                        }
                    },
                    {
                        type: "UList",
                        props: {
                            data: [
                                "Atkarīgas(-ie) lielums(-i): `eta`",
                                "Netkarīgas(-ie) lielums(-i): `h;alpha°;F_v`",
                                "Nemainīgais(-ie) lielums(-i): `mg; l`",
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Mērījumu un rezultātu tabula 1."
                    },
                    {
                        type: "Table",
                        props: {
                            data: [
                                ["Npk.", 1,2,3,4,5,6,7,8,9,10],
                                ["`alpha+-Deltaalpha, °`", "9.2`+-`0.1", "11.5", "13.3", "15.7", "18.1", "19.9", "25.5", "28.0", "40.6", "55.1"],
                                ["`mg+-Deltamg, N`", "1.70`+-`0.05"],
                                ["`F_v+-DeltaF_v, N`", "0.80`+-`0.05", "1.00", "1.10", "1.20", "1.30", "1.40", "1.50", "1.60", "1.90", "2.30"],
                                ["`h+-Deltah, m`", "0.080`+-`0.001", "0.100", "0.115", "0.135", "0.155", "0.170", "0.215", "0.235", "0.325", "0.410"],
                                ["`l+-Deltal, m`", "0.500`+-`0.001"],
                                ["'`eta`", "((nums[3][1]*nums[5][i])/(nums[6][1]*nums[4][i])).toFixed(3)"],
                                ["'`eta_0`", "(1/(1+0.5/(Math.tan(nums[2][i]/180*Math.PI)))).toFixed(3)"],

                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Lietderības koeficients atkarībā no plaknes slīpuma leņķa `eta=eta(alpha)` salīdzināts ar `eta_0(alpha)`"
                    },
                    {
                        type: "Chart",
                        props: {
                            info: {
                                title: "Lietderības koeficients atkarībā no plaknes slīpuma leņķa salīdzināts ar teorētisko lietderības koeficientu",
                                x: "α, °", 
                                y: ""
                            },
                            data: [
                                ["Slīpuma leņķis", 0, "9.2", "11.5", "13.3", "15.7", "18.1", "19.9", "25.5", "28.0", "40.6", "55.1"],
                                ["Lietderības koeficients", 0, 0.340, 0.340, 0.355, 0.383, 0.405, 0.413, 0.487, 0.499, 0.582, 0.606],
                                ["Teorētiskais lietderības koeficients", 0, 0.245, 0.289, 0.321, 0.360, 0.395, 0.420, 0.488, 0.515, 0.632, 0.741],
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Mērījumu un rezultātu tabula 2. (slīdes berzes koeficienta noteikšana)"
                    },
                    {
                        type: "Table",
                        props: {
                            data: [
                                ["Npk.", 1,2,3,4,5],
                                ["`mg+-Deltamg, N`", "0.60`+-`0.05", "1.60", "2.60", "3.60", "4.60"],
                                ["`F_v+-DeltaF_v, N`", "0.30`+-`0.05", "0.75", "1.50", "1.70", "2.10"],
                                ["'`mu`", "(nums[3][i]/nums[2][i]).toFixed(2)"],
                                ["*`mu_(vid.)`", "(sums[4]/(nums[3].length-1)).toFixed(2)"],
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Aprēķiņu piemēri."
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "`eta=((mg)_1h_1)/(F_(v_1)l_1)=(0.17*0.08)/(0.8*0.5)=0.340`",
                                "`eta_0=1/(1+mu_(vid.)ctg(alpha))=1/(1+0.5*6.17)=0.245`",
                                "`mu=F_(v_1)/(mg)_1=0.3/(0.06*10)=0.50`",
                                "`mu`(absolūtā un relatīvā kļūda)`eta=(mgh)/(F_v)l; (Deltaeta)/eta=(Delta(mg))/(mg)+(Deltah)/h+(DeltaF_v)/F_v+(Deltal)/l=>`",
                                "`(Deltaeta)/0.34=0.05/1.70+0.001/0.08+0.05/0.8+0.001/0.5=>`",
                                "`Deltaeta=0.34*0.106=0.036`",
                                "`r=(Deltaeta)/eta_(vid.)=0.036/0.441=0.081=8.1%`",
                                "Rezultāts: `eta=(0.340+-0.081), r=8.1%`"
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Secinājumi un darba anlaīze"
                    },
                    {
                        type: "Title",
                        children: "Rezultātu analīze"
                    },
                    {
                        type: "Text",
                        children: "Rezultāti bija ticami, jo `r<50%` un pēc grāmatas resursiem var secināt, ka tā tik tiešām ir, ka rezultāti iznāca patiesi. Grafiski attēlojot teorētisko un izmērīto var redzēt, ka tie ir salīdzinoši vienādi, bet galveinais vienādi mainas."
                    },
                    {
                        type: "Title",
                        children: "Eksperimenta izvērtēšana"
                    },
                    {
                        type: "Text",
                        children: "Pamāta bija tikai viens trūkums (Parasti trūkums arī ir dēļa garums, bet, manuprāt, ja dēlis būtu ļoit liels, tad ar skaitļiem būtu grūti strādāt, bet dēļa garums nav optimāls mērīšanai): "
                    },
                    {
                        type: "UList",
                        props: {
                            data: [
                                "Leņķa noteikšana: lenķi bija ļoti neērti noteikt un kopēji apmulsoši. Ar pirmo piegājienu mana grupa nepareizi noteica leņķus un bija viss jāsāk no jauna, dēļ tā, ka mēs pie nepareizā punktā pielikām transportieri un tas mūsu leņķus veidoja neticami lielus. Tas protams divkāršoja mūsu pavadīto laiku pie lielumu mērīšanas un atstāja mazāk lai pabeigtu darbu. Vienīgais, kā uzlabot šo ir iemācīt audzēkņiem pareizi transportieru izmantot, kaut vai no kļūdām ir labi bieži vien mācīties.",
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Secinājumi"
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "Grafiski var ļoti labi redzēt, ka tikmēr kamēŗ pieaug leņķis `alpha`, sekojoši arī pieaug lietderības keoficients `eta`, tātad hipotēze pilnīgi apstirpinās un pētāmā problēma ir atrisināta veiksmīgi un patiesi. Bet šis neturpināsies visu laiku, ja apskatīt: ",
                                "`eta_0=1/(1+muctgalpha)`, kamēr `0<alpha<=pi/2`, tikmēr `ctgalphainR^+`, kas nozīmē, ka `eta_0inR^+`, bet tad, kad `alpha>pi/2`, tad `ctgalphainR^- => ctgalphainR^-`, kas nozīmē, ka `eta_0inR^-`",
                                "Pēc šī spriestā var secināt, ka hipotēze apstiprinās tikai `0<=alpha<pi/2`.",
                                "Protams šis ir tikai ja pieņem `muinR^+`, bet pēc šī raksta: https://physicsworld.com/a/negative-friction-surprises-researchers/, negatīvs slīdes berzes koeficients ir iespējams, bet ļoti specifiskos apstākļos, kuri pēc manas saprašanas netika piepildīti."
                            ]
                        }
                    },
                ]
            },
            {
                id: 7,
                nosaukums: "Diega jeb matemātiskais svārsts. Nr. 7",
                components: [
                    {
                        type: "Title",
                        children: "Darba uzdevumi"
                    },
                    {
                        type: "OList",
                        props: {
                            data: [
                                "Noteikt svārsta svārstību periodu atkarībā no svārsta garuma.",
                                "Iegūto atkarību attēlot grafiski.",
                                "Noteikt Zemes smaguma spēka paātrinājumu (`g`).",
                                "Grafiski attēlot svārstību perioda kvadrāta atkarību no svārsta garuma `T^2=f(l)`, lai veiktu grafika linearizāciju."
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Hipotēze"
                    },
                    {
                        type: "Text",
                        children: "Palielinot svārsta garumu, palielināsies svārstības periods."
                    },
                    {
                        type: "Title",
                        children: "Lielumi"
                    },
                    {
                        type: "UList",
                        props: {
                            data: [
                                "Neatkarīgais: Garums `(l)`",
                                "Atkarīgais: Laiks `(t)`, Diega periods `(T)`",
                                "Konstantais: Brīvās krišanas paātrinājums `(g)`",
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Darba piederumi"
                    },
                    {
                        type: "UList",
                        props: {
                            data: [
                                "Lineāls (iedeļas vērtība `0.1cm`, mērapjoms `100cm`)",
                                "Hronometrs (iedeļas vērtība `0.01s`)",
                                "Bumbiņa",
                                "Statīvs",
                                "Striķis",
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Teorētiskais pamatojums"
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "Diega svārsta jeb matemātiskā svārsta svārstību periods ir atkarīgs tikai no svārsta garuma `l` un brīvās krišanas paātrinājuma `g`. Svārstību periodu aprēķina pēc formulas: ",
                                "`T=2pisqrt(l/g)`. tātad lai nopteiktu `g`, var pārveidot vienādojumu par; `g=l((2pi)/T)^2`."
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Mērskaitļu tabula un aprēķina piemērs"
                    },
                    {
                        type: "Table",
                        props: {
                            data: [
                                ["Npk.", 1,2,3,4,5,6,7,8,9,10],
                                ["`n`", "10"],
                                ["`l+-Deltal, cm`", "15.5`+-`0.1", "21.0", "24.5", "27.0", "30.0", "33.0", "36.0", "39.0", "42.0", "45.0"],
                                ["`t+-Deltat, s`", "8.03`+-`0.01", "9.57", "10.25", "10.94", "11.44", "11.91", "12.32", "12.64", "13.21", "13.60"],
                                ["'`T, s`", "(nums[4][i]/nums[2][1]).toFixed(3)"],
                                ["'`T^2, s^2`", "(nums[5][i]**2).toFixed(3)"],
                                ["'`g, m/s^2`", "(0.01*nums[3][i]*(2*Math.PI/nums[5][i])**2).toFixed(2)"],
                                ["*`g_(vid.)+-Deltag, m/s^2`", "(sums[7]/(nums[7].length-1)).toFixed(2)+'`+-`'+0.22"],
                            ]
                        }
                    },
                    {
                        type: "Title2",
                        children: "Svārstību periods atkarībā no svārsta garuma"
                    },
                    {
                        type: "Chart",
                        props: {
                            info: {
                                title: "Svārstību periods atkarībā no svārsta garuma",
                                x: "l, m", 
                                y: "T, s"
                            },
                            data: [
                                ["Svārsta garums", 0, "15.5", "21.0", "24.5", "27.0", "30.0", "33.0", "36.0", "39.0", "42.0", "45.0"],
                                ["Svārstību periods", 0, 0.803, 0.957, 1.025, 1.094, 1.144, 1.191, 1.232, 1.264, 1.321, 1.360],
                            ]
                        }
                    },
                    {
                        type: "Title2",
                        children: "Svārstību periods kavdrātā atkarībā no svārsta garuma `T^2=F(l)`"
                    },
                    {
                        type: "Chart",
                        props: {
                            info: {
                                title: "Svārstību periods kavdrātā atkarībā no svārsta garuma `T^2=F(l)a",
                                x: "l, m", 
                                y: "T², s²"
                            },
                            data: [
                                ["Svārsta garums", 0, "15.5", "21.0", "24.5", "27.0", "30.0", "33.0", "36.0", "39.0", "42.0", "45.0"],
                                ["Svārstību periods kvadrātā", 0, 0.645, 0.916, 1.051, 1.197, 1.309, 1.418, 1.518, 1.598, 1.745, 1.850],
                            ]
                        }
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "Aprēķina piemērs",
                                "`T_1=t_1/n=8.03/10=0.803s`",
                                "`T_1^2=0.803*0.803=0.645s^2`",
                                "`g=l((2pi)/T)^2=0.155*((2*3.14)/0.803)^2=9.49m/s^2`",
                                "`g_(vid.)=1/n*sum_(i=1)^ng_i=1/10*sum_(i=1)^10g_i=9.30m/s^2`",
                                "`Deltag_1=|g_(vid.)-g_1|=|9.30-9.49|=0.19m/s^2`",
                                "`Deltag=1/n*sum_(i=1)^nDeltag_i=1/10*sum_(i=1)^10Deltag_i=0.22m/s^2`",
                                "`r=(Deltag)/g_(vid.)=0.22/9.30=0.024=2.4%`"
                            ]
                        }
                    },
                    {
                        type: "Title2",
                        children: "Rezultāti"
                    },
                    {
                        type: "Text",
                        children: "`g+-Deltag=(9.30+-0.22)m/s^2; r=2.4%`"
                    },
                    {
                        type: "Title",
                        children: "Secinājumi un darba analīze"
                    },
                    {
                        type: "Title",
                        children: "Rezultātu analīze"
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "Dēļ `r<50%`, rezultāti ir ticami sanākuši un salīdzinot ar interneta resursiem:",
                                "https://en.wikipedia.org/wiki/Gravitational_acceleration",
                                "Var sekojoši redzēt tabulā, ka zemes `g` vertība ir `9.81m/s^2`, kur man sanāca, `g` vērtīa `9.30m/s^2`, kas Kairā būtu salīzinoši tuvu `(g=9.79m/s^2)`."
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Eksperimenta izvērtēšana"
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "Eksperimentā nebija daudz trūkumu, bet liels trūkums bija koncentrācja pie svārstību skaita noteikšanas. Rīki ar kuriem vajadzēja mērīt bija labi. Lai uzlabotu koncentrēšanos, ir atkarīgs no cilvēka paša un vai viņš to grib.",
                                "Lai uzlabotu cilvēka koncentrācijas laiku ir ieteicams meditēt un lasīt grāmatas, sekojot šim rakstam: https://healthcaremba.gwu.edu/blog/how-to-increase-attention-span/"
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Secinājumi"
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "Hipotēze ir apstiprinājusies, to var saredzēt grafikā un tabulā. Kamēŗ aug garums, tikmēr pieaug arī periods. Tas arī apstiprinās teorētiski pēc formulas `T=2pisqrt(l/g)`, kur var redzēt, ka `l` attiecīgi maina `T`, ņemot pie tam vērā, ka `pi` un `g` ir konstantas vērtības mūsu apstākļos uz zemes. Toties melnajā carumā `(gapprox10^10)`, `sqrt(l/g)`, pat `l` ļoti lieliem lielumiem daudz nemainīs momentu, tātad teorētiski hipotēze priekš cilvēka acs būtu grūti saskatāma uz melnā cauruma, savukārt uz zemes viegli saskatāma.",
                            ]
                        }
                    }
                ]
            },
            {
                id: 8,
                nosaukums: "Atsperes stinguma koeficienta noteikšana. Nr. 8",
                components: [
                    {
                        type: "Title",
                        children: "Darba uzdevumi"
                    },
                    {
                        type: "OList",
                        props: {
                            data: [
                                "Noteikt atsperes pagarinājumu atkarībā no deformējošā spēka.",
                                "Iegūto atkarību attēlot grafiski `Deltal=f(F)`. Noteikt atsperes stinguma koeficientu.",
                                "Noskaidrot, kā mainās atsperes svārsta svārstību periods, ka maina svārsta masu. Iegūto atkarību attēlot grafiski. Veikt grafika linearizāciju.",
                                "Noteikt atsperes stinguma koeficientu, izmantojot svārstību vienādojumu. Salīdzināt iegūtos rezultātus."
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Darba piederumi"
                    },
                    {
                        type: "UList",
                        props: {
                            data: [
                                "Hronometrs `(+- 0.01s)`",
                                "Mērlente `(+- 0.01cm)`",
                                "10x 50g atsvari",
                                "Statīvs",
                                "Atspere"
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Hipotēze"
                    },
                    {
                        type: "Text",
                        children: "Stinguma koeficients paliks vienāds, svaukārt palielinot smaguma spēku palielināsies pagarinājums."
                    },
                    {
                        type: "Title",
                        children: "Lielumi"
                    },
                    {
                        type: "UList",
                        props: {
                            data: [
                                "Neatkarīgais: Atsvaru masa `[g]`",
                                "Atkarīgas: Atsperes pagarinājums `[cm]`",
                                "Nemainīgais: Stinguma koeficients"
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Teorētiskais pamatojums"
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "Deformējot atsperi, tajā rodas elastības spēks, kas kompensē pielikto spēku. Elastīgām deformācijām pēc Huka likuma: ",
                                "`F_(el)=kDeltal`, `k` - stinguma koeficients `[N/m]`; `Deltal` - pagarinājums `[m]`",
                                "Tā kā `F_(el)=mg`, tad atsperes stinguma koeficients `k=(mg)/(Deltal)`.",
                                "Atsperes svārstam svārstību periods `T=2pisqrt(m/k)`.",
                                "No šīs izteiksmes atpseres stinguma koeficients `k=m((2pi)/T)^2`."
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Mērskaitļu tabula un aprēķinu piemērs"
                    },
                    {
                        type: "Text",
                        children: "Huka likums"
                    },
                    {
                        type: "Table",
                        props: {
                            data: [
                                ["Npk.", 1,2,3,4,5,6],
                                ["`l_0, cm`", "16.6"],
                                ["`mg, N`", "0.5", "1.0", "1.5", "2.0", "2.5", "3.0"],
                                ["`l, cm`", "19.6", "22.8", "26.3", "28.9", "32.3", "35.1"],
                                ["'`Deltal. cm`", "(nums[4][i]-nums[2][1]).toFixed(1)"],
                                ["'`k, N/m`", "(nums[3][i]/nums[5][i]*100).toFixed(3)"],
                                ["*`k_(vid.)+-Deltak, N/m`", "(sums[6]/(data[0].length-1)).toFixed(3)+'`+-`'+0.387"],

                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Aprēķinu piemēri"
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "`(mg)_1=0.05*10=0.5N`",
                                "`Deltal_1=19.6-16.6=3.0cm`",
                                "`k=(mg)_1/(Deltal_1)=0.5/0.03=16.667`",
                                "`k_(vid.)=1/n*sum_(i=1)^nk_i=1/6*sum_(i=1)^6k_i=16.377`",
                                "`Deltak_1=|k_(vid.)-k_1|=|16.377-16.667|=0.290`",
                                "`Deltak=1/n*sum_(i=1)^nDeltak_i=1/6*sum_(i=1)^6Deltak_i=0.387`"
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "`(Deltal)` atkarībā no deformējošā spēka `(F)`"
                    },
                    {
                        type: "Chart",
                        props: {
                            info: {
                                title: "Pagarinājumu atkarībā no deformējošā spēka",
                                x: "F, N", 
                                y: ""
                            },
                            data: [
                                ["Deformējošais spēks", 0, 0.5, 1, 1.5, 2, 2.5, 3],
                                ["Pagarinājums", 0, 3.0, 6.2, 9.7, 12.3, 15.7, 18.5]
                            ]
                        }
                    },
                    {
                        type: "Text",
                        children: "Atsperes svārsta tabula"
                    },
                    {
                        type: "Table",
                        props: {
                            data: [
                                ["Npk.", 1, 2, 3, 4, 5, 6],
                                ["`m, kg`", "0.05", "0.10", "0.15", "0.20", "0.25", "0.30"],
                                ["`n`", "10"],
                                ["`t+-Deltat, s`", "3.57`+-0.01`", "4.72", "6.00", "6.60", "7.52", "8.44"],
                                ["'`T, s`", "(nums[4][i]/nums[3][1]).toFixed(3)"],
                                ["'`k, N/m`", "(nums[2][i]*(2*Math.PI/nums[5][i])**2).toFixed(3)"],
                                ["*`k_(vid.)+-Deltak, N/m`", "(sums[6]/(nums[6].length-1)).toFixed(3)+'`+-`0.790'"],
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Aprēķina piemēri"
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "`T_1=t_1/n=3.57/10=0.357`",
                                "`k_1=m_1((2pi)/T_1)^2=0.05*((2pi)/0.357)^2=15.488`",
                                "`k_(vid.)=1/n*sum_(i=1)^nk_i=1/6*sum_(i=1)^6k_i=16.977`"
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Svārsta periods `(T)` atkarībā no masas `(m)`"
                    },
                    {
                        type: "Chart",
                        props: {
                            info: {
                                title: "Svārsta periods `(T)` atkarībā no masas `(m)`",
                                x: "T, s", 
                                y: "m, kg"
                            },
                            data: [
                                ["Masa", 0, "0.05", "0.10", "0.15", "0.20", "0.25", "0.30"],
                                ["Svārsta periods", 0, 0.357, 0.472, 0.600, 0.660, 0.752, 0.844]
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Rezultāti"
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "`k_1+-Deltak_1=(16.377+-0.387)N/s; R=(Deltak_1)/k_1=0.387/16.377=0.023=2.3%`",
                                "`k_2+-Deltak_2=(16.977+-0.790)N/s; R=(Deltak_2)/k_2=0.79/16.977=0.047=4.7%`",
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Secinājumi un darba analīze"
                    },
                    {
                        type: "Title",
                        children: "Rezultātu analīze"
                    },
                    {
                        type: "Text",
                        props: {
                            text: [
                                "Skatoties pēc relatīvās kļūdas, kura ir zem `50%`, var spriest, ka rezultāti ir ticami- `2.3%` un `4.7%`. Rezultātiem izmantotās formulas liekas arī ir pareizi atvasinātas, var redzēt https://www.uzdevumi.lv/p/fizika/10-klase/mehaniskas-svarstibas-un-vilni-6921/re-93d233dd-1c9b-4d53-a84e-ac536289a1e6. Kā arī spriežot pēc grafika, tā izskats ir gandrīz precīzi vienāds ar izskatu te (ņemts no uzdevumi.lv): https://resources.cdn.uzdevumi.lv/1a62c097-d297-4de5-ae8e-55ab47e433aa/1.3.svg. Huka likums likās ticamāks, jo `r` bija gandrīz divas reizes mazāks. Protams izmantojot atsperes svārstu rēķināšanā piedalījās vairāk skaitļi, bet Huka likumā piedalījās vairāk praktiskā daļa, kura nav tik atkarīga no cilvēka koncentrācijas un reakcijas laika.",
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Eksperimenta izvērtēšana"
                    },
                    {
                        type: "Text",
                        children: "Tehnoloģija un rīki tieši šajā pētnieciskajā darbā nav trūkums. Protams, tas nenozīmē, ka ierobežojumu vispār nav, ja nebūtu, tad relatīvā kļūda nebūtu tik liela. Ierobežojums eksperimenta laikā bija tieši mērot `T` vērtību, jo bija jākoncentrējas uz vienu lietu, kas atkārtojas 10 reizes. Daudziem pusaudžiem ir grūti koncentrēties precīzi 10 reizes. Lai uzlabotu šo, vajag gribas spēku pašam cilvēkam, spriežot pēc ši raksta: https://healthcaremba.gwu.edu/blog/how-to-increase-attention-span/, labākie veidi kopēji ir lasīt grāmatas vai meditēt."
                    },
                    {
                        type: "Title",
                        children: "Secinājumi"
                    },
                    {
                        type: "Text",
                        children: "Hipotēze apstiprinās, smaguma spēka dēļ, pagarunājums palielinājās, bet stinguma koeficients palika vienmērīgs `(~17)`. Kā jau visur, mes nēesam pārliecināti, kas notiekas, ja paliena `mg` uz melno caurumu izmēriem. Toties šim es pēc ilgas meklēšanas arī atradu rakstu (nav tieši par melniem caurumiem): https://physics.princeton.edu/~mcdonald/examples/stiffness.pdf."
                    }
                ]
            }
        ]
    },
]