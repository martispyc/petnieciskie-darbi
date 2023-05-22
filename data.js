export const macibas = [
  // TODO: change to macibas not macibass
  {
    id: 0,
    macibasNosaukums: "fizika",
    darbi: [
      {
        id: 1,
        nosaukums: "Universālās gāzu konstantes noteikšana Nr. 1",
        components: [
          {
            type: "Title",
            children: "Darba uzdevumi:",
          },
          {
            type: "OList",
            props: {
              data: [
                "Noteikt izsūknētā gaisa masu atkarībā no spiedienu starpības un iegūto atkarību attēlot grafiski `Deltam=f(Deltap)`",
                "Aprēķināt universālo gāzu konstanti `R`.",
                "Aprēķināt universālo gazu konstanti `R` no gāzes stavok|a vienādojuma. izmantojot Avogadro likumu.",
              ],
            },
          },
          {
            type: "Title",
            children: "Darba piederumi:",
          },
          {
            type: "Text",
            props: {
              text: [
                "kolba `(247.89 g)`; svari `(+-0.01g)`, `V_(text{kolbai})=1.1+-0.05L`",
              ],
            },
          },
          {
            type: "Title",
            children: "Darba teorētiskias pamatojums:",
          },
          {
            type: "Text",
            props: {
              text: [
                "`R=((p_1-p_2)VM)/((m_1-m_2)T)`",
                "Pumpējot gaisu ārā no kolbas, spiediens tajā samazinās. Tāpat arī gaisa daļiņas, atstājot kolbu, samazina tās kopējo masu.",
              ],
            },
          },
          {
            type: "Title",
            children: "Mērskaitļu tabula un aprēķina piemērs:",
          },
          {
            type: "Text",
            props: {
              text: [
                "Izsūknētās gaisa masas atkarība no spiedienu starpības kolbā.",
              ],
            },
          },
          {
            type: "Table",
            props: {
              data: [
                ["Npk.", 1, 2, 3, 4, 5, 6],
                [
                  "`(p_1-p_2)+-Deltap. Pa`",
                  "`0.10*9.8*10^4+-10`",
                  "`0.21*9.8*10^4`",
                  "`0.40*9.8*10^4`",
                  "`0.60*9.8*10^4`",
                  "`0.80*9.8*10^4`",
                  "`0.97*9.8*10^4`",
                ],
                [
                  "`m_1+-Deltam_1. g`",
                  "247.80`+-0.01`",
                  "247.80",
                  "247.80",
                  "247.80",
                  "247.80",
                  "247.80",
                ],
                [
                  "`m_2+-Deltam_2. g`",
                  "247.70`+-0.01`",
                  "247.60",
                  "247.43",
                  "247.00",
                  "246.80",
                  "246.60",
                ],
                ["'`(m_1-m_2). g`", "(nums[3][i]-nums[4][i]).toFixed(2)"],
                [
                  "`R, J/(K*mol)`",
                  "10.5973",
                  "11.1273",
                  "11.4565",
                  "7.948",
                  "8.4778",
                  "8.5661",
                ],
              ],
            },
          },
          {
            type: "Text",
            props: {
              text: [
                "Aprēķinu piemērs",
                "`R_1=((p_1-p_2)VM)/((m_1-m_2)T)=10.5973`",
              ],
            },
          },
          {
            type: "Title",
            children: "Grafiks",
          },

          {
            type: "Text",
            props: {
              text: [
                "Izsūknētā gaisa masa atkarībā no spiedienu starpība `Deltam=f(Deltap)`",
              ],
            },
          },
          {
            type: "Chart",
            props: {
              info: {
                title: "Izsūknētā gaisa masa atkarībā no spiedienu starpība",
                x: "Δp, Pa",
                y: "Δm, g",
              },
              data: [
                ["Spiediena starpība", 9800, 20580, 39200, 58800, 78400, 95060],
                ["Gaisa masa", 0.1, 0.2, 0.37, 0.8, 1.0, 1.2],
              ],
            },
          },
          {
            type: "Title",
            children: "Rezultāti",
          },
          {
            type: "Text",
            props: {
              text: ["`R=9.696+-1.263J/(mol*k)`", "`r=1.263/9.696=13.03%`"],
            },
          },
          {
            type: "Title",
            children: "Secinājumi un darba analīze",
          },
          {
            type: "Text",
            props: {
              text: [
                "Universālās gāzes koeficients ir neatkarīgs no spiediena, temperatūras un gāzes veida. Tas ir universāls mērogs, kas nodrošina vienotu mērvienību un salīdzināmību starp dažādām gāzēm.",
                "Universālās gāzes koeficients ir saistīts ar ideālo gāzu likumu, kas apraksta ideālās gāzes uzvedību, kurā starp spiedienu `(P)`, tilpumu `(V)` un temperatūru `(T)` ir lineāra saistība, kas tiek formulēta kā `PV = nRT`, kur `R` ir universālās gāzes konstante.",
                "Darba rezultātā tika iegūts, ka universālā gāzu konstamte ir `9,696+-1,1263 J/(mol*k)`. ",
                "Salīdzinot mūsu rezultātu ar teorijas materiālos https://www.fizmix.lv/formulas/2531  norādīto universālo gāzu konstanti, `R = 8,314 J/mol*k` var secināt, ka, ja ņem vērā precizitātes kļūdu, tad iegūtā vērtība ir tuvu, lai sakristu.",
                "Apskatot iegūtos datus jāņem vērā, ka darba relatīvā kļūda ir liela  `-13,03%`, kas nozīmē, ka eksperimenta laikā tika pieļautas kļūdas.",
                "Atsaucoties uz uzdevumi.lv tēmu par mērījumu precizitāti, secinām, ka kļūda ir ārpus vēlamā diapazona, kas ir `<3%`",
                "Lielākās problēmas sagādāja, tas, ka monometrs nebija digitāls, kas sagādaja mums(cilvēkiem) problēmas noteikt precīzas spiediena izmaiņas.",
              ],
            },
          },
        ],
      },
      {
        id: 2,
        nosaukums: "Sķidruma virsmas spraiguma koeficients Nr. 2",
        components: [
          {
            type: "Title",
            children: "Darba uzdevumi:",
          },
          {
            type: "OList",
            props: {
              data: ["Noteikt ūdens virsmas spraiguma koeficientu ar:"],
            },
          },
          {
            type: "Text",
            props: {
              text: [
                "a) stieplītes atraušanas metodi;",
                "b) kapilārās pacelšanās metodi;",
                "c) piliena atraušanās metodi.",
              ],
            },
          },
          {
            type: "Title",
            children: "Darba piederumi:",
          },
          {
            type: "Text",
            props: {
              text: [
                "stauīvs, lineāls `(100+0.05cm)`, stikla kapilārs, svari `(500g+-0.1g)`; caurspīdīgi trauki ūdenim, stieplītes `(l=3;6;7cm,)`",
              ],
            },
          },
          {
            type: "Title",
            children: "Darba shēma un darba teorētiskais pamatojums:",
          },
          {
            type: "Text",
            props: {
              text: [
                "Šķidruma virsmas spraiguma koeficientu var noteikt, izmantojot šādas metodes: stieplītes atraušanas metodi, šķidruma pacelšanu slapjo kapilārā un piliena atraušanas metodi. Šķidruma pacelšanas kapilārā gadījumā, ievietojot kapilāru ar diametru d traukā, šķidruma līnija kapilārā izmainās par augstumu h, kas ir augstāks nekā traukā. Šo attiecību var izteikt ar formulu `h = (sigma)/(mgphi)`, kas arī var tikt pārrakstīta kā `sigma = (phighd)/4`. Piliena atraušanas metode ietver piliena atdalīšanu no šķidruma, kad spēks mg, kas ir piliena masas reizēs ar gravitācijas paātrinājumu, ir vienāds ar sprieguma spēku F, kas darbojas pa caurulītes iekšējo apkārtmēru. Šeit `F = sigmal`, `l = πd`, un `sigma = (mg)/(πd)`. Stieplītes atraušanas metode ietver stieplītes atdalīšanu no šķidruma, kur spēks `F`, kas darbojas uz stieplīti, ir saistīts ar `sigma` ar izteiksmi `sigma = F/(2l)`.",
              ],
            },
          },
          {
            type: "Title",
            children: "Mērijumu tabula:",
          },
          {
            type: "Text",
            props: {
              text: ["Stieplītes atraušanas metode:"],
            },
          },
          {
            type: "Table",
            props: {
              data: [
                ["Npk.", 1, 2, 3, 4, 5, 6, 7],
                [
                  "`l, cm+-Deltal`",
                  "7.0`+-0.1`",
                  "7.0",
                  "6.0",
                  "6.0",
                  "6.0",
                  "3.0",
                  "3.0",
                ],
                [
                  "`F, mN+-Deltat`",
                  "7.5`+-0.5`",
                  "8.0",
                  "7.5",
                  "8.5",
                  "8.5",
                  "3.5",
                  "4.0",
                ],
                ["'`sigma, N/m`", "(nums[3][i]/nums[2][i]/20).toFixed(2)"],
                [
                  "*`sigma_(vid), N/m`",
                  "(sums[4]/(data[0].length-1)).toFixed(2)",
                ],
              ],
            },
          },

          {
            type: "Text",
            props: {
              text: ["Šķidruma pacelšanāš slapinošā kapilārā:"],
            },
          },
          {
            type: "Table",
            props: {
              data: [
                ["Npk.", 1, 2, 3, 4, 5, 6, 7],
                [
                  "`h, cm+-Deltah`",
                  "2.5`+-0.1`",
                  "2.8",
                  "2.6",
                  "2.1",
                  "3.0",
                  "2.4",
                  "2.7",
                ],
                [
                  "`d, mm+-Deltad`",
                  "1.36`+-0.05`",
                  "1.36",
                  "1.36",
                  "1.36",
                  "1.36",
                  "1.36",
                  "1.36",
                ],
                [
                  "'`sigma, N/m`",
                  "((nums[2][i]*nums[3][i]*997*9.8)/(100*1000*4)).toFixed(3)",
                ],
                [
                  "*`sigma_(vid), N/m`",
                  "(sums[4]/(data[0].length-1)).toFixed(3)",
                ],
              ],
            },
          },

          {
            type: "Text",
            props: {
              text: ["Piliena atraušanas metode:"],
            },
          },
          {
            type: "Table",
            props: {
              data: [
                ["Npk.", 1, 2, 3, 4, 5, 6, 7],
                [
                  "`m, g+-Deltam`",
                  "1.0`+-0.1`",
                  "1.6",
                  "1.3",
                  "1.1",
                  "1.5",
                  "2.5",
                  "2.1",
                ],
                ["`N`", "20`+-1`", "31", "21", "20", "30", "30", "40"],
                ["'`m_0, kg`", "(nums[2][i]/nums[3][i]/1000).toFixed(6)"],
                [
                  "`d, mm`",
                  "2.25`+-0.05`",
                  "2.25",
                  "2.25",
                  "2.25",
                  "2.25",
                  "2.25",
                  "2.25",
                ],
                [
                  "'`sigma, N/m`",
                  "((9.8*nums[4][i]*1000)/(2.25*10)).toFixed(3)",
                ],
                [
                  "*`sigma_(vid), N/m`",
                  "(sums[6]/(data[0].length-1)).toFixed(3)",
                ],
              ],
            },
          },
          {
            type: "Title",
            children: "Aprēķinu piemēri:",
          },
          {
            type: "Text",
            props: {
              text: [
                "`sigma=F/(2l)=0.0075/(2*0.07)=0.05`",
                "`sigma=(phighd)/4=(997*9.8*0.025*0.00136)/4=0.0083 N/m`",
                "`sigma=(m_0g)/(pid)=(0.05*10^(-3)*9.8)/(3.14*2.25)=0.022 N/m`",
                "`m_0=m/N=0.1/20=0.05*10^(-3) kg`",
              ],
            },
          },
          {
            type: "Title",
            children: "Rezultāts:",
          },
          {
            type: "Text",
            props: {
              text: [
                "`Deltasigma_1=2.447*sqrt((sum(sigma_i-sigma_(text{vid}))^2)/(n*(n-1)))=2.447*0.00285=0.00697 N/m`",
                "`Deltasigma_2=0.00895 N/m`",
                "`Deltasigma_3=0.00465 N/m`",
                "",
                "`sigma_(1_(text{vid}))+-Deltasigma_1=(0.0600+-0.0070) N/m`",
                "`sigma_(2_(text{vid}))+-Deltasigma_2=(0.0860+-0.0090) N/m`",
                "`sigma_(3_(text{vid}))+-Deltasigma_3=(0.0250+-0.0047) N/m`",
                "",
                "`r_1=(Deltasigma_1)/(sigma_(1_(text{vid})))=0.007/0.06=11.6%`",
                "`r_2=(Deltasigma_2)/(sigma_(2_(text{vid})))=0.009/0.086=10.4%`",
                "`r_3=(Deltasigma_3)/(sigma_(3_(text{vid})))=0.0047/0.025=18.8%`",
              ],
            },
          },
          {
            type: "Title",
            children: "Secinājumi un darba analīze:",
          },
          {
            type: "Text",
            props: {
              text: [
                "Visu metožu rezultāti ir ticami, jo relatīvā kļūda nevienā gadījumā nepārsniedz  `50%`.",
                "Novērojums:",
                "Var secināt, ka 2. eskperimentā gūtie dati rezultāti bija daudz mazāk ticami nekā pārejos, skatoties pec kļūdas lielumiem. Var secinat, ka 3. eksperimenta rezultati ir precīzāki. Balstoties uz internetā atrastiem datiem:",
                "https://www.siic.lu.lv/fiz/IT/F_11/default.aspx@tabid=3&id=301_4.html",
                "ūdens spraiguma koeficients ir `7,4 * 10 ^-2`, aplūkojot ūdens spraiguma vidējo lielumu 3.eksperimentā var secināt, ka abi atšķīrās tikai par `0.01`.",
                "Darbā ir vairāki trūkumi:",
                "pirmkārt cilvēku kļūda mērījumu noteikšanā, otrkārt izmantotās elektroierīces ir novecojušas, kas noved pie riska, ka ievāktie dati nav precīzi. Lai iegūtu precīzākus rezultātus vajadzētu izmantot mērierīces ar lielāku un precīzāku mērapjomu. Uzlabojumi: Eksperimentu var veikt datora simulācijā, piemērām programmā “Anylogic”, ko mums mācīja apgūt 10. klasē, vai arī izmantot jaunākas mērierīce, kas ir precīzākas un nenolietotas.",
                "Secinājums:",
                "ūdens spraiguma koeficient var iegūt ar vairākām metodēm piliena atraušanās metode, stieplītes atraušanas metode un kapilārās pacelšanās metode. No šīm visām vislabākā un efektīvākā bija piliena atraušanās metode, jo šai metodei sanāca mazāka relatīvā kļūda, kā arī vidējais ūdens spraiguma koeficients sakrita ar vistuvāko internetā (jau norādiju atsauci) pieejamo spraiguma koeficientu.",
              ],
            },
          },
        ],
      },
      {
        id: 3,
        nosaukums: "Klases telpas pētījums Nr. 3",
        components: [
          {
            type: "Text",
            props: {
              text: [
                "Fizikas stundu kopējais ilgums vidusskolā ir vairāk, nekā 15000 min.",
              ],
            },
          },
          {
            type: "Text",
            props: {
              text: ["Problēma: vai es visu zinu par fizikas kabineta telpu?"],
            },
          },
          {
            type: "Title",
            children: "Darba uzdevums: ",
          },
          {
            type: "Text",
            props: {
              text: [
                "(vienam netiešam mērījumam noteikt absolūto un relatīvo kļüdu, izmantojot ievietošanas metodi)",
              ],
            },
          },
          {
            type: "OList",
            props: {
              data: [
                "Noteikt klases telpas tilpumu `V`. `(V=9.885*5,611*4,118=231.84m^3)`",
                "Notelkt Klases telpas temperatūru `t`, gaisa spiedienu `p_(atm)` un relatīvo mitrumu `r`. `(t=21.5°, p_(atm)=1010hPa, r=62.5%)`",
                "Noteikt klases telpā absolüto mitrumu `rho` un `p`.",
                "Noteikt klases telpā gaisa masu `m_(gaiss)`.",
                "Noteikt klases telpā gaisa molekulu skaitu `N`.",
                "Noteikt klases telpā ūdens tvaika masu `m_(tvaiks)`.",
                "Noteikt klases telpā *skaņas līmeni* (fizikāls lielums). `60dB`",
                "Noteikt klases telpā *gaismas līmeni* (fizikāls lielums). `1270lux`",
              ],
            },
          },
          {
            type: "Text",
            props: {
              text: [
                "Darba piederumi: mobilais telefons, mērlente (iedaļas vērtība  `0.001m`, mērapjoms `20m`), termometrs (iedaļas vērtība `1°C`, mērapjoms `50°C`), psihrometrs (iedaļas vērtība `1%`, mērapjoms `100%`), tabulas no uzdevuma krajuma, barometrs (iedaļas vērtība `1kPa`, mērapjoms `1060mPa`), luksometrs (iedeļas vērtība `1lux`, mērapjoms `200 000lux`), skaņas līmeņamostājs (iedaļās ērtība `0.1dB`, mērapjoms `130dB`).",
              ],
            },
          },
          {
            type: "Title",
            children: "Paskaidrojums:",
          },
          {
            type: "OList",
            props: {
              data: [
                "Klases telpas tilpuma aprēķināšanai var izmantot formulu: `V = abc`",
                "Klases telpā gaisa temperatüru `t` var noteikt ar termometra palīdzību",
                "Klases telpā gaisa spiedienu `p_(atm)` var noteikt ar barometra vai mobilā telefona palīdzību",
                "Klases telpā gaisa relatīvo mitrumu `r` var noteikt ar psihrometra palidzibu",
                "Klases telpā gaisa absolūto mitrumu `rho` vai `p` var noteikt pêc formulām: `r=rho/(rho_(max))`. `100%vair=p/p_(max)*100%`, kur `rho_(max)` ūdens tvaika maksimālais blīvuims un `p_(max)` ūdens tvaika maskinālais parciālspiediens telpas temperatūrā",
                " Klases telpas gaisa masas `m` noteikšanai var izmantot formulu: `p_(atm)V=m_(gaiss)/M_(gaiss)*RT`, kur `M_(gaiss)=0.029kg/mol`, `R`-gāzes universālā konstante, `[T]=K`",
                "Gaisa molekulu skaita `N` klases telpā noteikšanai var izmantot formulu: `m_(gaiss)/M_(gaiss)=N/N_A`, kur `N_A`- Avogadro skaitlis",
                "Ūdens tvaika masu `m_(tvaiks)` klases telpā var noteikšanai izmanto formulu: `m_(tvaiks)=pV`",
              ],
            },
          },
          {
            type: "Title",
            children: "Brīdinājums:",
          },
          {
            type: "OList",
            props: {
              data: [
                "Darbu noformēt pēc saviem ieskatiem (norādīt visus punktus; norādīt, kādus lielumus mērījāt ar atbilstošiem apzīmējumiem).",
                "Atzīme iekļauj darba struktūru!!!",
              ],
            },
          },
          {
            type: "Title",
            children: "Mērījumi un rezultāti",
          },
          {
            type: "Text",
            props: {
              text: [
                "Klases izmērs: `V=abc=9.885*6.611*4.118=231.84m^3`",
                "Klases temperatūra: `t=21.5C°`",
                "Klases gaisa spiediens: `p_(atm)=1010hPa`",
                "Klases relatīvais mitrums: `r=62.5%`",
                "Klases absolūtais mitrums: `rho=0.625*0.023=0.014(kg)/m^3`",
                "Klases gaisa masa: `m_(gaiss)=(p_(text{atm})*V*M_(text{gaiss}))/(R*T)=(1010*231.84*0.029*100)/(8.314*294.65)=277.2kg`",
                "Klases gaisa molekulu skaits: `N=(N_A*m_(gaiss))/M_(gaiss)=(277.2/0.029)*6.022*10^23=5.76*10^26 text{molekulas}`",
                "Klases ūdens tvaika masa: `m_(tvaiks)=pV=0.014375*231.84=3.33kg`",
              ],
            },
          },
          {
            type: "Title",
            children: "Tabula",
          },
          {
            type: "Table",
            props: {
              data: [
                ["Npk.", "1.", "2.", "3.", "4.", "5."],
                [
                  "Skaņas līmenis, dB",
                  "82.2`+-0.1`",
                  "79.8",
                  "78.9",
                  "79.1",
                  "81.0",
                ],
                ["*Līmeņa vidējā vērtība, dB", "(sums[2]/5).toFixed(1)"],
                ["Apgaismojums, lx", "650`+-10`", "540", "600", "640", "700"],
                ["*Apgaismojuma vidējā vērtība, lx", "(sums[4]/5).toFixed(1)"],
              ],
            },
          },
          {
            type: "Title",
            children: "Secinājumi un darba analīze",
          },
          {
            type: "Text",
            props: {
              text: [
                "Siltuma analīze",
                "Siltuma analīze norāda, ka klasei ir siltuma bilance, kas ir atbilstoša komforta līmenim. Pēc ASHRAE (Amerikas Apkures, Ventilācijas un Kondicionēšanas Inženieru asociācijas) standartiem, siltuma bilancei jābūt starp `20` un `23°C`. Tā kā temperatūra klases telpā ir `21,5°C`, var teikt, ka temperatūra atbilst šiem standartiem.",

                "Gaisma",
                "Gaisma ir svarīgs faktors klases telpā. Pēc Starptautiskās Gaisma Asociācijas, iespējams, optimālais gaisma līmenis skolām ir no `300` līdz `500 lux`. Lai gan `1270 lux` pārsniedz ieteicamo līmeni, tas var palīdzēt palielināt skolēnu koncentrēšanās un produktivitātes līmeni.",

                "Skaņa",
                "Lai gan skaņas līmenis `60 dB` nav pārāk augsts, ir svarīgi atzīmēt, ka skaņas līmenis var atšķirties atkarībā no skolēnu aktivitātes un stundas laika. Ieteicamais skaņas līmenis skolām ir līdz `35 dB`. Skolotājam var būt vērts apsvērt skaņas absorbējošus materiālus, lai samazinātu skaņas līmeni klases telpā.",

                "Mitrums",
                "Pārāk augsts mitruma līmenis klases telpā var veicināt pelējuma un sēnīšu attīstību, kas var būt kaitīgi skolēnu veselībai. ASHRAE standarti nosaka mitruma līmeni klases telpā no 40 līdz 60%. Tādēļ, ja mitruma līmenis ir `62,5%`, ir vērts pārbaudīt ventilācijas sistēmu un iespējams, apsvērt klimatizācijas sistēmas uzstādīšanu.",

                "Secinājumi",
                "Secinājumiem izriet, ka fizikas laboratorijā ir nodrošināti piemēroti apstākļi, kas var veicināt labu skolēnu koncentrēšanos un produktivitāti laboratorijas darbā. Tomēr, ir vērts pārbaudīt un uzlabot skaņas un mitruma līmeņus, lai nodrošinātu ideālus apstākļus fizikas eksperimentiem un mācībām.",
              ],
            },
          },
        ],
      },
      {
        id: 4,
        nosaukums: "GĀZU LIKUMI (Boila-Mariotta likums) Nr. 4",
        components: [
          {
            type: "Title",
            children: "Darba uzdevums",
          },
          {
            type: "Text",
            props: {
              text: [
                "Noskaidrot, kāda sakarība pastāv starp gāzes spiedienu un tilpumu izotermiskajā procesā",
              ],
            },
          },
          {
            type: "Title",
            children: "Pētāmā problēma",
          },
          {
            type: "Text",
            props: {
              text: [
                "Kā tilpums ietekmē gāzes spiedienu? (Kāda sakarība pastāv starp gāzes spiedienu un tilpumu izometriskajā procesā)",
              ],
            },
          },
          {
            type: "Title",
            children: "Hipotēze",
          },
          {
            type: "Text",
            props: {
              text: [
                "Gāzes spiediens ir atkarīgs no tā tilpuma izometriskā procesā, kurā temperatūra paliek nemainīga.",
              ],
            },
          },
          {
            type: "Title",
            children: "Darba piederumi",
          },
          {
            type: "Text",
            props: {
              text: [
                "Spiediena sensors `(4atm+-0.0005atm)` f(GPS-BTA), datu uzkrājējs 'LOGGERPRO', šķirce `(60ml+-1ml)`",
              ],
            },
          },
          {
            type: "Title",
            children: "Iegūto datu reģistrēšana",
          },
          {
            type: "Text",
            props: {
              text: [
                "Spiediena sensora maksimārli pieļaujamais spiediens `210kPa`",
                "Gaisa tilpums un spiediens šļircē",
              ],
            },
          },
          {
            type: "Table",
            props: {
              data: [
                ["`V, ml`", "`p, kPa`", "`1/V, ml^(-1)`", "`p*V, Pa*ml`"],
                ["25.0`+-`1.0", "100.80`+-0.05`", "0.038`+-0.001`", "2652.63"],
                ["30.0", "84.23", "0.032", "2632.19"],
                ["35.0", "73.07", "0.027", "2706.30"],
                ["40.0", "64.68", "0.025", "2587.20"],
                ["45.0", "56.81", "0.021", "2705.24"],
                ["50.0", "52.10", "0.020", "2605.00"],
                ["60.0", "42.05", "0.018", "2336.11"],
                ["20.0", "121.72", "0.055", "2213.09"],
                ["15.0", "158.23", "0.066", "2397.42"],
                ["12.0", "154.52", "0.082", "1884.39"],
              ],
            },
          },
          {
            type: "Title",
            children: "Iegūto datu apstrāde",
          },
          {
            type: "Text",
            props: {
              text: [
                "`pV=100.80*1/0.038=2652.83 Pa*ml`",
                "`DeltapV_p=(p+Deltap)*V-pV=(100.9+0.05)*1/0.038-2632.19=24.34Pa*ml`",
                "`DeltapV_V=(V+DeltaV)*p-pV=(1/0.038+1)*100.8-2632.19=121.24Pa*ml`",
                "`DeltapV=sqrt(DeltapV_p^2+DeltapV_V^2)=sqrt(24.34^2+121.24^2)=123.65Pa*ml`",
                "`p*V=(2652.63+-123.65)Pa*ml`",
                "`r=(DeltapV)/(pV)=123.65/2652.63=0.0465=4.65%`",
              ],
            },
          },
          {
            type: "Title",
            children: "Spiediena atkarība no gāzes tilpuma",
          },
          {
            type: "Chart",
            props: {
              info: {
                title: "Spiediena atkarība no gāzes tilpuma",
                x: "V, ml",
                y: "p, kPa",
              },
              data: [
                [
                  "Tilpums",
                  12.3,
                  15.15,
                  18.18,
                  26.3,
                  31.25,
                  37.0,
                  40,
                  47.6,
                  50,
                  55.5,
                ],
                [
                  "Spiediens",
                  154.52,
                  158.23,
                  121.72,
                  100.8,
                  84.23,
                  73.07,
                  64.68,
                  56.81,
                  52.1,
                  42.05,
                ],
              ],
            },
          },
          {
            type: "Title",
            children: "Spiediena atkarība no tilpuma apgrieztā lieluma",
          },
          {
            type: "Chart",
            props: {
              info: {
                title: "Spiediena atkarība no tilpuma apgrieztā lieluma",
                x: "1/V ml^-1",
                y: "p, kPa",
              },
              data: [
                [
                  "Tilpuma apgrieztais lielums",
                  0.018,
                  0.02,
                  0.021,
                  0.025,
                  0.027,
                  0.032,
                  0.038,
                  0.055,
                  0.066,
                  0.082,
                ],
                [
                  "Spiediens",
                  42.05,
                  52.1,
                  56.81,
                  64.68,
                  73.07,
                  84.23,
                  100.8,
                  121.72,
                  158.23,
                  154.52,
                ],
              ],
            },
          },
          {
            type: "Title",
            children: "Rezultātu analīze un eksperimenta izvērtēšana.",
          },
          {
            type: "Text",
            props: {
              text: [
                "iegūtie dati rāda, ka gāzes spiediens un tilpums izometriskā procesā ir tieši proporcionāli (Boila_Mariotta likums). Tas ir, kad temperatūra or nemainīga, gāzes spiediens un tilpums ir atkarīgi tikai no to daudzuma, šajā faījumā, iegūtie  dati atbilst likumam, jo `p * V` produkts paliek nemainīgs visās eksperimenta situācijās (gandrīz konstanti). Rezultāti ir salīdzinami ar iepriešējām pētijumu atziņām par gāzes likumiem un atbilst Boila-likumam.",
                "Viena no galvenajām problēmām varētu būt neliels paraugu skaits, tikai 10 mērījumu veikšana var būt pārāk, maz lai iegūtie dati būtu pietiekami precīzi. Problēma ir arī ar to  ka ir ierobežojumi, kas ir saistīti ar aparātu precizitāti, piemēram, varētu būt problēmas ar termometra precizitāti, kas varētu ietekmēt gaisa temperatūras rādītājus. Var izmantot vairākus, dažādus termometrus, lai iegūtu precīzākus rezultātus.",
                "Nav ņemta vērā mitruma ietekme uz gaisa tilpumu un spiedienu, kas varetu ietekmēt iegūtos rezultātus. varētu ievērot stingrākus kontroles pasākumus, lai nodrošinātu, ka mitrums netiek ietekmēts/mainits eksperimenta laikā.",
                "Lai uzlabotu eksperimenta precizitāti un izvairītos no ierobežojumiem, varētu veikt vairākus mērījumus dažādos apstākļos. Izmantot precīzākus mērīšanas instrumemtus ar vēl mazākām iedaļas vārtībām. Eksperimenta rezultāti liecina, ka gāzes tilpums samazinās, ja spiediens pieaug, un otrādi - tilpums palielinās, ja spiediens samazinās.",
              ],
            },
          },
          {
            type: "Title",
            children: "Secinājumi.",
          },
          {
            type: "Text",
            props: {
              text: [
                "Mēs secinām, ka hipotēze ir apstiprinājusies, jo eksperimentā tika novērots, ka spiediena un tilpuma iezometriskajā procesā pastāv tieša proporcionalitāte starp gāzes spienienu un tilpumu, kas nozīmē, ka Boila - Mariotta likums ir spēkā gāzes spiediena un tilpuma izometriskajā procesā un tas apstiprinās eksperimentā.",
              ],
            },
          },
        ],
      },
      {
        id: 5,
        nosaukums: "Pretestības atkarība no temperatūras Nr. 5",
        components: [
          {
            type: "Title",
            children: "Hipotēze",
          },
          {
            type: "Text",
            props: {
              text: [
                "Pretestības izmaiņas ir atkarīgas no temperatūras un pretestības temperatūras koeficients var būt pozitīvs un negatīvs, atkarībā no materiāla īpašībām",
              ],
            },
          },
          {
            type: "Title",
            children: "Lielumi",
          },

          {
            type: "Text",
            props: {
              text: ["neatkarīgais temperatūra, atkarīgais pretestība"],
            },
          },

          {
            type: "Title",
            children: "Darba piederumi",
          },

          {
            type: "Text",
            props: {
              text: [
                "termometrs, statīvs, multimetrs, ūdens trauks, plītiņa, elektrolīzes mēģenes",
              ],
            },
          },
          {
            type: "Title",
            children: "Darba shēma un darba teorētiskais pamatojums:",
          },

          {
            type: "Text",
            props: {
              text: [
                "`R=R_0(1+at)`",
                "kur `R` - pretestība dotajos apstākļos, `R_0` - normālpretestība, `a` - pretestības termiskais koeficents koeficients, `t` - temperatūra",
              ],
            },
          },

          {
            type: "Title",
            children: "Mērijumu tabula",
          },
          {
            type: "Text",
            props: {
              text: ["Metāla stieple:"],
            },
          },
          {
            type: "Table",
            props: {
              data: [
                ["Npk.", "`T, C°`", "`R, Omega`"],
                ["1", "20`+-1`", "79.5`+-0.1`"],
                ["2", "22", "80.0"],
                ["3", "23", "80.5"],
                ["4", "25", "81.0"],
                ["5", "26", "81.5"],
                ["6", "30", "82.0"],
                ["7", "32", "82.5"],
                ["8", "33", "83.0"],
                ["9", "35", "83.5"],
                ["10", "37", "84.0"],
                ["11", "39", "84.5"],
                ["12", "41", "85.0"],
                ["13", "43", "85.5"],
              ],
            },
          },
          {
            type: "Text",
            props: {
              text: ["Termistors:"],
            },
          },

          {
            type: "Table",
            props: {
              data: [
                ["Npk.", "`T, C°`", "`R, Omega`"],
                ["1", "21`+-1`", "1257`+-1`"],
                ["2", "22", "1218"],
                ["3", "23", "1175"],
                ["4", "25", "1115"],
                ["5", "26", "1074"],
                ["6", "30", "1027"],
                ["7", "32", "979"],
                ["8", "33", "945"],
                ["9", "35", "918"],
                ["10", "37", "879"],
                ["11", "39", "840"],
                ["12", "41", "832"],
                ["13", "43", "815"],
              ],
            },
          },
          {
            type: "Title",
            children: "Grafiki",
          },
          {
            type: "Chart",
            props: {
              info: {
                title:
                  "Pretistības atkarība no temperatūras grafiks (metāla stieple)",
                x: "R, Ω",
                y: "T, C°",
              },
              data: [
                [
                  "Pretestība",
                  80.0,
                  80.5,
                  81.0,
                  81.5,
                  82.0,
                  82.5,
                  83.0,
                  83.5,
                  84.0,
                  84.5,
                  85.0,
                  85.5,
                ],
                [
                  "Temperatūra",
                  20,
                  22,
                  23,
                  25,
                  26,
                  30,
                  32,
                  33,
                  35,
                  37,
                  39,
                  41,
                  43,
                ],
              ],
            },
          },
          {
            type: "Chart",
            props: {
              info: {
                title:
                  "Pretistības atkarība no temperatūras grafiks (termistors)",
                x: "R, Ω",
                y: "T, C°",
              },
              data: [
                [
                  "Pretestība",
                  1257,
                  1218,
                  1175,
                  1115,
                  1074,
                  1027,
                  979,
                  945,
                  918,
                  879,
                  840,
                  832,
                  815,
                ],
                [
                  "Temperatūra",
                  21,
                  22,
                  23,
                  25,
                  26,
                  30,
                  32,
                  33,
                  35,
                  37,
                  39,
                  41,
                  43,
                ],
              ],
            },
          },

          {
            type: "Title",
            children: "Aprēķinu piemēri:",
          },

          {
            type: "Text",
            props: {
              text: [
                "`R_1=R_0(1+at) => 79.5=R_0(1+2) => R_0=79.5/3=26.5 Omega`",
                "`R_2=R_0(1+at) => 80=R_0(1+a*22)`",
                "`a_1=(R_1-R_0)/(R_0*t_1) => a_1=(79.5-26.5)/(26.5*20)=0.1 1/(C°)`",
                "",
                "`R_1=R_0(1+at) => 1257=R_0(1+2) => R_0=1257/3=419 Omega`",
                "`R_2=R_0(1+at) => 1218=R_0(1+a*22)`",
                "`a_1=|(R_1-R_0)/(R_0*t_2)| => a_1=|(1257-419)/(419*20)|=0.1 1/(C°)`",
              ],
            },
          },
          {
            type: "Title",
            children: "Rezultāti:",
          },
          {
            type: "Text",
            props: {
              text: [
                "`a_(text{stieples}) = 0.1 1/(C°)`",
                "`a_(text{termistora}) = 0.1 1/(C°)`",
              ],
            },
          },
          {
            type: "Title",
            children: "Secinājumi un darba analīze:",
          },
          {
            type: "Title",
            children: "Rezultātu analīze un eksperimenta izvērtēšana.",
          },
          {
            type: "Text",
            props: {
              text: [
                "Pētījumā par metāla stiepli, varētu būt iekļautas arī citas temperatūras vērtības, lai iegūtu vairāk datu un varētu novērot, kā pretestība mainās kad temperatūra palielinās vai samazinās vēl vairāk. Tāpat vēlams būtu iegūt vairāku lielumu paraugus no vienas metāla stieples, lai izslēgtu iespēju, ka konkrētajam paraugam ir kādi individuāli raksturlielumi, kas var ietekmēt rezultātus.",
                "Arī termirstora pētījumā varētu iekļaut vairāku tempt. vērtību, lai noteiktu precīzākupretestības izmaiņu līkumu. Varētu izmantot vairākus dažādus termistorus, lai pārbaudītu,vai visi termistori reaģē vienādi uz temperatūras izmaiņām. Rezultāti var neattiekties uz visiem materiāliem un visām temperatūrām.",
              ],
            },
          },
          {
            type: "Title",
            children: "Secinājumi",
          },
          {
            type: "Text",
            props: {
              text: [
                "Pēc datu analīzes var secināt, ka metāla stieplem ir pozitīvs temperatūras koeficients, jo pretestība palielinās, kad temperatūra paaugstinās. Tas nozīmē, ka metāla stieples pretestība pieaug, kad temperatūra pieaug.",
                "No otras puses, termistoriem ir negatīvs temperatūras koeficients, jo pretestība samazinās, kad temperatūra paaugstinās. Tas nozīmē, ka termistora pretestība samazinās, kad temperatūra palielinās.",
                "Šie rezultāti atbilst iepriekš rakstītajam un apstiprina mūsu hipotēzi par metāla stiepļu un termistoru temperatūras koeficientiem.",
              ],
            },
          },
        ],
      },
      {
        id: 6,
        nosaukums: "Darbs Nr. 6 Strāvas avota pētīšana.",
        components: [
          {
            type: "Title",
            children: "Darba piederumi",
          },

          {
            type: "Text",
            props: {
              text: [
                "Strāvas avots `(45V, 0.30Omega)`; voltmetrs `(20V+-0.01V)`; ampērmetrs `(20A+-0.01A)`; reostats `(5A 0-31Omega)`; vadi",
              ],
            },
          },
          {
            type: "Title",
            children: "Teorētiskias pamatojums:",
          },

          {
            type: "Text",
            props: {
              text: [
                "Dēļ ārējas pretestības atkarīgi mainās citi lielumi, kas ir saistīti. To apraksta formula `U=I*R` un citas. Eksperimenta laikā ir novēroti lielumi `U` (spriegums) un `I` (strāva). Formulas, kuras mēs lietosim:",
                "`r=(U_1-U_2)/(I_2-I_1)`, `E=U+Ir_(text{vid})`, `R=U/I`, `P=U*I`, `P_0=I*E`, `n%=P/P_0`, `P_(max)=E_(text{vid})^2/(4r_(text{vid}))`, `I_0=E_(text{vid})/r_(text{vid})`",
              ],
            },
          },
          {
            type: "Title",
            children: "Mērksailtļu tbula un aprēķina piemērs:",
          },
          {
            type: "Text",
            props: {
              text: ["Strāvas avota `E` un iekšējās pretestības noteikšana"],
            },
          },
          {
            type: "Table",
            props: {
              data: [
                ["Npk.", "1.", "2.", "3.", "4.", "5."],
                ["`U, V`", "4.31`+-0.01`", "4.09", "4.00", "3.61", "3.43"],
                ["`I, A`", "0.00`+-0.01`", "0.16", "0.25", "0.47", "0.85"],
                ["'`E, V`", "(nums[2][i]+nums[3][i]*1.15).toFixed(2)"],
                ["`r, Omega`", "-", "1.37", "1.00", "1.77", "0.47"],
                [
                  "*`E_(text{vid}, V)`",
                  "(sums[4]/(nums[3].length-1)).toFixed(2)",
                ],
                ["`r_(text{vid}), Omega`", "1.15"],
                ["`E_(text{novērtētais}), V`", "4.26"],
              ],
            },
          },
          {
            type: "Text",
            props: {
              text: [
                "Arpēķini:",
                "`r_2=(U_1-U_2)/(I_2-I_1) => r_1=(4.09-4.31)/(0.16-0.00)=1.37 Omega`",
                "`r_(text{vid})=(r_2+...+r_5)/4=1.15 Omega`",
                "`E_1=U_1+Ir_1 => E_1=4.31+0*0=4.31 V`",
                "`E_(text{vid})=(E_1+...+E_5)/4=4.26 V`",
              ],
            },
          },
          {
            type: "Text",
            props: {
              text: ["Strāvas avote raksturlielumu noteikšana"],
            },
          },
          {
            type: "Table",
            props: {
              data: [
                ["Npk.", "1.", "2.", "3.", "4.", "5.", "6.", "7.", "8."],
                [
                  "`U, A`",
                  "4.31`+-0.01`",
                  "4.09",
                  "4.00",
                  "3.61",
                  "3.43",
                  "3.25",
                  "3.06",
                  "2.88",
                ],
                [
                  "`I, V`",
                  "0.00`+-0.01`",
                  "0.16",
                  "0.25",
                  "0.47",
                  "0.85",
                  "1.00",
                  "1.25",
                  "1.50",
                ],
                ["'`R, Omega`", "(nums[2][i]/nums[3][i]).toFixed(2)"],
                [
                  "'`P_0, W`",
                  "(nums[3][i]*(nums[2][i]+nums[3][i]*1.15)).toFixed(2)",
                ],
                ["'`P, W`", "(nums[2][i]*nums[3][i]).toFixed(2)"],
                ["'`eta, %`", "(nums[6][i]/nums[5][i]*100).toFixed(2)"],
                ["'`E, V`", "(nums[2][i]+nums[3][i]*1.15).toFixed(2)"],
                // [
                //   "`r, Omega`",
                //   "0",
                //   "1.37",
                //   "1.00",
                //   "1.77",
                //   "0.47",
                //   "1.20",
                //   "0.76",
                //   "0.72",
                // ],
                ["`P_(max), W`", "4.58"],
                ["`I_0, A`", "4.19"],
              ],
            },
          },
          {
            type: "Text",
            props: {
              text: [
                "Arpēķini:",
                "`R_2=U_2/I_2 => R_2=4.09/0.16=25.56 Omega`",
                "`P_1=U_1*I_1 => P_1=4.31*0=0 W`",
                "`eta_2=P_2/P_(0_2) => eta_2=0.65/0.68=95.59%`",
                "`P_(max)=E_(text{vid})^2/(4r_(text{vid})) => P_(max)=4.26^2/(4*1.15)=4.58 W`",
                "`I_0=E_(text{vid})/r_(text{vid}) => I_0=4.26/1.15=4.19 A`",
              ],
            },
          },
          {
            type: "Text",
            props: {
              text: ["Spaiļa sprieguma atkarība no ārējās pretestības"],
            },
          },
          {
            type: "Chart",
            props: {
              info: {
                title: "Spaiļa sprieguma atkarība no ārējās pretestības",
                x: "R, Ω",
                y: "U, V",
              },
              data: [
                [
                  "Ārējā pretestība",
                  0.0,
                  25.56,
                  16.0,
                  7.66,
                  4.04,
                  3.25,
                  2.45,
                  2.0,
                ],
                [
                  "Spaiļa spriegums",
                  4.31,
                  4.09,
                  4.0,
                  3.61,
                  3.43,
                  3.25,
                  3.06,
                  2.88,
                ],
              ],
            },
          },
          {
            type: "Text",
            props: {
              text: ["Lietderīgās jaudas atkarība no ārējās pretestības"],
            },
          },
          {
            type: "Chart",
            props: {
              info: {
                title: "Lietderīgās jaudas atkarība no ārējās pretestības",
                x: "R, Ω",
                y: "P, W",
              },
              data: [
                [
                  "Ārējā pretestība",
                  0.0,
                  25.56,
                  16.0,
                  7.66,
                  4.04,
                  3.25,
                  2.45,
                  2.0,
                ],
                [
                  "Lietderīgās jauda",
                  0.0,
                  0.65,
                  1.0,
                  1.7,
                  2.92,
                  3.25,
                  3.83,
                  4.32,
                ],
              ],
            },
          },
          {
            type: "Text",
            props: {
              text: [
                "Avota lietderības koeficienta atkarība no ārējās pretestības",
              ],
            },
          },
          {
            type: "Chart",
            props: {
              info: {
                title:
                  "Avota lietderības koeficienta atkarība no ārējās pretestības",
                x: "R, Ω",
                y: "η, %",
              },
              data: [
                [
                  "Ārējā pretestība",
                  0.0,
                  25.56,
                  16.0,
                  7.66,
                  4.04,
                  3.25,
                  2.45,
                  2.0,
                ],
                [
                  "Avota lietderības koeficients",
                  100.0,
                  95.59,
                  93.59,
                  87.18,
                  77.87,
                  73.86,
                  68.15,
                  62.52,
                ],
              ],
            },
          },
          {
            type: "Title",
            children: "Rezultāti:",
          },
          {
            type: "Text",
            props: {
              text: [
                "`Deltaepsi=2.365*sqrt(((epsi_1-epsi_(text{vid}))^2+...+(epsi_8-epsi_(text{vid}))^2)/(7*6))=2.365*sqrt(0.0033)=0.14 V`",
                "`epsi_(text{vid})+-Deltaepsi=(4.26+-0.14)V`",
                "`R=(Deltaepsi)/(epsi_(text{vid}))*100%=0.14/(4.26)*100%=3%`",
                "``",
                "`Deltar=2.365*sqrt(((r_2-r_(text{vid}))^2+...+(r_5-r_(text{vid}))^2)/(4*3))=2,776*sqrt(0.0456)=0.59 Omega`",
                "`r_(text{vid})+-Deltar=(1.15+-0.59)Omega`",
                "`R=(Deltar)/(r_(text{vid}))*100%=0.59/(1.15)*100%=51%`",
              ],
            },
          },
          {
            type: "Title",
            children: "Secinājumi un darba analīze:",
          },
          {
            type: "Title",
            children: "Rezultātu analīze",
          },
          {
            type: "Text",
            props: {
              text: [
                "Rezulāti ir ticami, spaiļu sprieguma atkarības no ārējas pretestīobs grafikā ir redzams, ka palielinot pretestību, spriegums tuvojas EDS, bet nepārsniedz to, bet lietderības koef. atkarības no pretestības grafikā, redzams, ka `R` vērtībai `r (r = 1,09 Omega)` atbilst `n%` vērtība `50%`, kā arī ir jābūt. `E` un `r` relatīvās kļūdas nepārsniedz `50%`, kas arī norāda uz augstu rezultātu ticamību.",
              ],
            },
          },
          {
            type: "Title",
            children: "Eksperimenta izvērtēšana",
          },
          {
            type: "Text",
            props: {
              text: [
                "Eksperimenta galvenie trūkumi ir mērinstrumentu piemēram kā: voltmetra un ampērmetra neprecizitāte un neatbilstoša kvalitāte, piemēram,voltmetrs un ampērmetrs rāda mērījumus ar precizitāti, kas varētu būt augstāka nekā tā ir. Strāvas avots, ko lietojām šajā eksperimentā ir salīdzinoši nolietots, novecojis, kas var ietekmēt tā ticamību. Lai uzlabotu eksperimenta precizitāti, to jāveicar atbilstošiem speciāliem instrumentiem, kas ir izcilā stāvoklī.",
              ],
            },
          },
          {
            type: "Title",
            children: "Secinājumi",
          },
          {
            type: "Text",
            props: {
              text: [
                "Eksperimenta rezultātos mēs ieguvām strāvas avota elektrisko dzinējspēku `E= (4,35 +- 0,13) V` un iekšējo pretestību `r = (1,09 +- 0,33) Omega`.  Arī var secināt, ka jo lielāka ir pretestība `(R)`, jo lielāks ir avota lietderības koeficients, kas ir redzams grafikā.",
              ],
            },
          },
        ],
      },
      {
        id: 7,
        nosaukums:
          "Darbs Nr. 7 Pretestības un jaudas noteikšana elektriskajā ķēdē",
        components: [
          {
            type: "Title",
            children: "Darba uzdevumi",
          },

          {
            type: "OList",
            props: {
              data: [
                "Uzņemt a) kvēlspuldzes `(12V, 0.1A)`; b) rezistoram voltampēru raksturlīknes un iegūtās atkarības attēlot grafiski `I=I(U).`",
                "Grafiski attēlot a) kvēlspuldes, b) rezistora tinuma pretestības atkarību no patērētās jaudas `R=R(P)`.",
                "Noteikt kvēlspuldzes kvēldiega pretestību nominālā režīmā un salīdzināt ar praktiso. `(R_0=11.2Omega)`",
              ],
            },
          },
          {
            type: "Title",
            children: "Darba piederumi:",
          },

          {
            type: "Text",
            props: {
              text: [
                "Kvēlspuldze `(12V, 0.1A)`; voltmetrs `(text{iedaļas vērtība} 0.01V, text{maksimālā vērtība} 1000V)`, ampērmetrs `(text{iedaļas vērtība} 0.001A, text{maksimālā vērtība} 0.1A)`, sprieguma avots `12V, 3A`, rezistors `100Omega`, vadi.",
              ],
            },
          },
          {
            type: "Title",
            children: "Teorētiskias pamatojums:",
          },

          {
            type: "Text",
            props: {
              text: [
                "Elektroenerģiju var izvērtēt, pamatojoties uz strāvas stipruma (I, A) un sprieguma (U, V) lielumiem. Šie lielumi ietekmē arī citas vērtības: pretestību, kas tiek aprēķināta ar formulu R=U/I Omega, un jaudu P=I*U, W. Pretestība raksturo vadītāja pret strāvas plūsmu, bet jauda norāda uz darba veikšanu konkrētā laika periodā. `R_nom=U_nom/I_nom=12/0.1=120Omega`",
              ],
            },
          },
          {
            type: "Title",
            children: "Mērskaitļu tabulas un aprēķina piemērs:",
          },
          {
            type: "Text",
            props: {
              text: ["Kvēlspuldzes voltampēru raksturlīkne"],
            },
          },
          {
            type: "Table",
            props: {
              data: [
                ["Npk.", "1.", "2.", "3.", "4.", "5.", "6.", "7.", "8."],
                [
                  "`U, V`",
                  "1.10`+-0.20`",
                  "2.00",
                  "2.70",
                  "3.50",
                  "5.00",
                  "5.80",
                  "8.40",
                  "10.00",
                ],
                [
                  "`I, A`",
                  "0.030`+-0.001`",
                  "0.038",
                  "0.045",
                  "0.050",
                  "0.060",
                  "0.066",
                  "0.081",
                  "0.095",
                ],
                ["'`R, Omega`", "(nums[2][i]/nums[3][i]).toFixed(2)"],
                ["'`P, W`", "(nums[2][i]*nums[3][i]).toFixed(2)"],
              ],
            },
          },
          {
            type: "Text",
            props: {
              text: [
                "Aprēķini:",
                "`R_1=(U_1/I_1)=1.10/0.030=36.67Omega`",
                "`P_1=(U_1*I_1)=1.10*0.030=0.03W`",
                "`(DeltaR)/R=(DeltaU)/U+(DeltaJ)/J=>(DeltaR_8)/105.26=0.20/10.00+0.001/0.095=>DeltaR_8=3.21Omega`",
                "`R_(text{prakt})=10.00/0.095=105.26Omega`",
              ],
            },
          },
          {
            type: "Text",
            props: {
              text: ["Rezistora voltampēru raksturlīkne"],
            },
          },
          {
            type: "Table",
            props: {
              data: [
                ["Npk.", "1.", "2.", "3.", "4.", "5.", "6.", "7.", "8."],
                [
                  "`U, V`",
                  "2.20`+-0.20`",
                  "3.30",
                  "4.50",
                  "5.30",
                  "6.80",
                  "7.80",
                  "9.20",
                  "9.70",
                ],
                [
                  "`I, A`",
                  "0.023`+-0.001`",
                  "0.034",
                  "0.046",
                  "0.055",
                  "0.070",
                  "0.080",
                  "0.094",
                  "0.100",
                ],
                ["'`R, Omega`", "(nums[2][i]/nums[3][i]).toFixed(2)"],
                ["'`P, W`", "(nums[2][i]*nums[3][i]).toFixed(2)"],
              ],
            },
          },

          {
            type: "Title",
            children: "Rezultāti",
          },
          {
            type: "Text",
            props: {
              text: [
                "`R_(text{nom})=120Omega`",
                "`R_(text{prakt})=(105.3+-3.2)Omega`",
              ],
            },
          },
          {
            type: "Title",
            children: "Grafiki",
          },
          {
            type: "Text",
            props: {
              text: ["Rezistora I=I(U)"],
            },
          },
          {
            type: "Chart",
            props: {
              info: {
                title: "Rezistora I=I(U)",
                x: "U, V",
                y: "I, A",
              },
              data: [
                [
                  "Strāvas stirpums",
                  0.023,
                  0.034,
                  0.046,
                  0.055,
                  0.07,
                  0.08,
                  0.094,
                  0.1,
                ],
                ["Spriegums", 2.2, 3.3, 4.5, 5.3, 6.8, 7.8, 9.2, 9.7],
              ],
            },
          },
          {
            type: "Text",
            props: {
              text: ["Kvēlspuldzes I=I(U)"],
            },
          },
          {
            type: "Chart",
            props: {
              info: {
                title: "Kvēlspuldzes I=I(U)",
                x: "U, V",
                y: "I, A",
              },
              data: [
                [
                  "Strāvas stirpums",
                  0.03,
                  0.038,
                  0.045,
                  0.05,
                  0.06,
                  0.066,
                  0.081,
                  0.095,
                ],
                ["Spriegums", 1.1, 2, 2.7, 3.5, 5, 5.8, 8.4, 10],
              ],
            },
          },
          {
            type: "Text",
            props: {
              text: [
                "Kvēlspuldzes tinuma pretestīas atkarība no patērētās jaudas R=R(P)",
              ],
            },
          },
          {
            type: "Chart",
            props: {
              info: {
                title:
                  "Kvēlspuldzes pretestības atkarība no patērētās jaudas R=R(P)",
                x: "P, W",
                y: "R, Ω",
              },
              data: [
                [
                  "Pretestība",
                  36.67,
                  52.63,
                  60,
                  70,
                  83.33,
                  87.88,
                  103.7,
                  105.26,
                ],
                ["Jauda", 0.03, 0.08, 0.12, 0.18, 0.3, 0.38, 0.68, 0.95],
              ],
            },
          },
          {
            type: "Text",
            props: {
              text: [
                "Rezistora tinuma pretestīas atkarība no patērētās jaudas R=R(P)",
              ],
            },
          },
          {
            type: "Chart",
            props: {
              info: {
                title:
                  "Rezistora pretestības atkarība no patērētās jaudas R=R(P)",
                x: "P, W",
                y: "R, Ω",
              },
              data: [
                [
                  "Pretestība",
                  95.65,
                  97.06,
                  97.83,
                  96.36,
                  97.14,
                  97.5,
                  97.87,
                  97.0,
                ],
                ["Jauda", 0.05, 0.11, 0.21, 0.29, 0.48, 0.62, 0.86, 0.97],
              ],
            },
          },
          {
            type: "Title",
            children: "Secinājumi un darba analīze:",
          },
          {
            type: "Text",
            props: {
              text: [
                "Eksperimenta rezultāti ir ticami, jo teorētiskā kvēlspuldzes pretestība nominālā režīmā sakrīt ar praktiski iegūto kļūdu robežām. Arī iegūtie voltampēru raksturlīknes grafiki kvēlspuldzei un rezistoram sakrīt ar tiem, kas ir atrodami informācijas avotos, piemēram, https://www.letera.lv/wp-content/uploads/2018/01/elektronikas_pamati_1dala_LETERA.pdf, kur redzams, ka rezistoriem ir lineāra raksturlīkne, bet kvēlspuldzēm ir liekta raksturlīkne. Rezistoriem ir lineāra raksturlīkne, jo to pretestība paliek konstanta neatkarīgi no sprieguma vai strāvas, kas tai tiek piemērota. Tas nozīmē, ka rezistora pretestība mainās proporcionali sprieguma vai strāvas izmaiņām.",
                "Kvēlspuldzēm ir liekta raksturlīkne, jo to pretestība mainās ne-lineāri atkarībā no sprieguma vai strāvas. Tas ir saistīts ar kvēlspuldzes īpašībām un materiālu, no kuriem tās ir izgatavotas. Kvēlspuldzes raksturlīkne ir novērojama, jo tās pretestība palielinās straujāk, kad uz tām tiek piemērots lielāks spriegums vai strāva, bet pie mazākiem vērtībām to pieaugums ir mazāks.",
                "Eksperimenta trūkumi ir mērinstrumentu neprecizitāte, lai uzlabotu eksperimenta rezultātu ticamību, ir jālieto speciāli rīki ar mazāku mērījumu kļūdu. No eksperimenta varam secināt, ka kvēlspuldzei atkarībā no jaudas palielināšanas palielinās arī pretestība, bet rezistoram pretestība paliek konstanta pēc grafika.",
              ],
            },
          },
        ],
      },
      {
        nosaukums: "Kondesatora izlāda Nr. 8",
        id: 8,
        components: [
          {
            type: "Title",
            children: "Hipotēze:",
          },

          {
            type: "Text",
            props: {
              text: [
                "Ar uzlādes laika palielināšanos, uzkrātā kapacitāte palielināsies (līdz limitam), bet to uzlādes laiks samazināsies",
              ],
            },
          },
          {
            type: "Title",
            children: "Lielumi:",
          },

          {
            type: "Text",
            props: {
              text: [
                "neatkarīgais laiks `t, s`, atkarīgais kondensatora uzlāde strāva `I, mA`, nemainīgais (konstatnais) kapacitate `(F)`, spriegums `(V).`",
              ],
            },
          },
          {
            type: "Title",
            children: "Darba piederumi:",
          },

          {
            type: "Text",
            props: {
              text: [
                "līdzstrāvas avots `(12V, 3A)`, pretestību magazīna `(0-9000Omega)`, ampērmetrs `2mA`, `R_a=100Omega`, slēdzis, vadi, voltmetrs `(20V+-0.1V)`, hronometrs `(+-0.01s)`, kondensators `80V(2*40V); 940mF`",
              ],
            },
          },
          {
            type: "Title",
            children: "Teorētiskais pamatojums:",
          },

          {
            type: "Text",
            props: {
              text: [
                "Kondensatora izlādes laiks no 100% sākotnējā sprieguma līdz 36.8%  tiek aprēķināts ar formulu: `tau=RC`. Izlādes laiks no 100% sprieguma līdz 5% notiek `3tau` laikā, bet līdz 10% - `5tau` laikā. Kondensatora izlādes grafiks ir simetriski pretējs uzlādes grafikam. Lielumu `q` var aprēķināt ar formulu `q=It`, kur `I` ir strāva un `t` ir laiks.",
              ],
            },
          },
          {
            type: "Title",
            children: "Mērijumu tabula",
          },

          {
            type: "Text",
            props: {
              text: [
                "Kondesatora uzlāde (izlāde)",
                "1. `R=9000Omega`",
                "2. `R=6000Omega`",
              ],
            },
          },

          {
            type: "Table",
            props: {
              data: [
                ["`t, s`", "`I, mA`", "`I, mA`"],
                ["1", "1.240", "1.64"],
                ["5", "0.740", "1.35"],
                ["10", "0.410", "0.97"],
                ["15", "0.210", "0.69"],
                ["20", "0.130", "0.50"],
                ["25", "0.070", "0.36"],
                ["30", "0.040", "0.29"],
                ["35", "0.030", "0.19"],
                ["40", "0.020", "0.14"],
                ["45", "0.010", "0.11"],
                ["50", "0.010", "0.09"],
                ["55", "0.009", "0.06"],
                ["60", "0.007", "0.05"],
                ["65", "0.006", "0.04"],
                ["70", "0.004", "0.02"],
              ],
            },
          },
          {
            type: "Title",
            children:
              "Kondensatora uzlādes (izlādes) strāvas atkarība no laika.",
          },
          {
            type: "Chart",
            props: {
              info: {
                title:
                  "Kondensatora uzlādes (izlādes) strāvas atkarība no laika.",
                x: "I, mA",
                y: "t, s",
              },
              data: [
                [
                  "Laiks",
                  1,
                  5,
                  10,
                  15,
                  20,
                  25,
                  30,
                  35,
                  40,
                  45,
                  50,
                  55,
                  60,
                  65,
                  70,
                ],
                [
                  "Izlādes strāva (9000Ω)",
                  1.24,
                  0.74,
                  0.41,
                  0.21,
                  0.13,
                  0.07,
                  0.04,
                  0.03,
                  0.02,
                  0.01,
                  0.01,
                  0.009,
                  0.007,
                  0.006,
                  0.004,
                ],
                [
                  "Izlādes strāva (6000Ω)",
                  1.64,
                  1.35,
                  0.97,
                  0.69,
                  0.5,
                  0.36,
                  0.29,
                  0.19,
                  0.14,
                  0.11,
                  0.09,
                  0.06,
                  0.05,
                  0.04,
                  0.02,
                ],
              ],
            },
          },
          {
            type: "Text",
            props: {
              text: [
                "`U=6000*10^(-3)*1.240=7.44V`",
                "Aprēķinu piemēri:",
                "`tau_1=RC=9000*940*10^(-6)=8.46s`",
                "`q=7.44*10^(-6)*940=6.99*10^(-3)`",
              ],
            },
          },
          {
            type: "Title",
            children: "Rezultāts:",
          },

          {
            type: "Text",
            props: {
              text: [
                "`R=9000Omega`",
                "`q_(text{teor.})=6.99mC`",
                "`q_(text{real.})=8.11mC`",
                "`R=6000Omega`",
                "`q_(text{teor.})=6.99mC`",
                "`q_(text{real.})=7.45mC`",
              ],
            },
          },
          {
            type: "Title",
            children: "Secinājumi un darba analīze:",
          },

          {
            type: "Text",
            props: {
              text: [
                "Eksperiments tika veikts veiksmīgi, tika iegūti skaidri rezultāti. praktiski iegūtie rezultāti sakrīt ar teorētiski aprēķinātiem (nosacīti lielā kļūdu robežā) rezultātiem, tomēr tie apstiprina hipotēzi, un sakrīt ar informācijas avotos nolasīiem datiem (kļūdu robežā).",

                "Lai uzlabotu eksperimenta ticamību un efektivitāti, būtu vēlams lietot aprīkojumu ar lielāku precizitāti. Šis eksperiments var ciest no neprecīzām mērierīcēm, kas var ietekmēt iegūto datu precizitāti. Turklāt klases apstākļi var ietekmēt arī rezultātus, kas tiek iegūti skolas klasē. Mēs uzskatām, ka eksperimenta precizitāti ierobežo ievākto datu daudzums, kas, šajā gadījumā, neļāva pilnīgi precīzi attēlot eksperimentā notiekošo grafikā. Lai iegūtie rezultāti būtu precīzāki, mums jāpalielina mērijumu skaits.",
              ],
            },
          },
        ],
      },
      {
        id: 9,
        nosaukums: "Ampēra spēks Nr. 9",
        components: [
          {
            type: "Title",
            children: "Hipotēze",
          },

          {
            type: "Text",
            props: {
              text: [
                "Ampēra spēks ir tieši proporcionāls strāvas stiprumam un nepārtraukti samazinās, kad vads kļūst garāks vai masa palielinās.",
              ],
            },
          },
          {
            type: "Title",
            children: "Lielumi",
          },

          {
            type: "Text",
            props: {
              text: [
                "Neatkarīgais strāvas stiprums `I, A`, atkarīgais Ampēra spēks `A`, svaru masa; nemainīgie jeb konstantie lielumi gravitācijas paātrinājums `g=9.81m/s^2`.",
              ],
            },
          },
          {
            type: "Text",
            props: {
              text: [
                "Izmantojamās magnētu sistēmas magnēstiskā laika indukcija `B=(0.110+-0.005)T`.",
                "Strāvas kontūra horizontālā posma garums `L+-DeltaL=`(0.03+-0.001)/(F_A=CIB)m`",
              ],
            },
          },
          {
            type: "Title",
            children: "1. tabula Ampēra spēka atkarība no strāvas stipruma.",
          },
          {
            type: "Table",
            props: {
              data: [
                [
                  "Npk.",
                  "1.",
                  "2.",
                  "3.",
                  "4.",
                  "5.",
                  "6.",
                  "7.",
                  "8.",
                  "9.",
                  "10.",
                ],
                [
                  "`I+-DeltaI, A`",
                  "0.5`+-0.5`",
                  "1.0",
                  "1.5",
                  "2.0",
                  "2.5",
                  "3.0",
                  "3.5",
                  "4.0",
                  "4.5",
                  "5.0",
                ],
                [
                  "`m+-Deltam,g`",
                  "161.41`+-0.01`",
                  "161.27",
                  "161.11",
                  "160.95",
                  "160.82",
                  "160.67",
                  "160.51",
                  "160.37",
                  "160.25",
                  "160.08",
                ],
                [
                  "`F_A+-DeltaF_A,N`",
                  "0.0017`+-0.0001`",
                  "0.0033",
                  "0.0050",
                  "0.0066",
                  "0.0083",
                  "0.0099",
                  "0.0116",
                  "0.0132",
                  "0.0149",
                  "0.0165",
                ],
                ["'`mg+-Delta(mg),N`", "(nums[3][i]/100).toFixed(4)"],
              ],
            },
          },
          {
            type: "Title",
            children:
              "Ampēra spēka atkarība no kontūrā plūstošās strāvas stipruma `F_A=f(I)`",
          },
          {
            type: "Chart",
            props: {
              info: {
                title:
                  "Ampēra spēka atkarība no kontūrā plūstošās strāvas stipruma",
                x: "I, A",
                y: "FA, N",
              },
              data: [
                [
                  "Strāvas stiprums",
                  0.5,
                  1.0,
                  1.5,
                  2.0,
                  2.5,
                  3.0,
                  3.5,
                  4.0,
                  4.5,
                  5.0,
                ],
                [
                  "Ampēra spēks",
                  0.0017,
                  0.0033,
                  0.005,
                  0.0066,
                  0.0083,
                  0.0099,
                  0.0116,
                  0.0132,
                  0.0149,
                  0.0165,
                ],
              ],
            },
          },
          {
            type: "Text",
            props: {
              text: [
                "Nosakiet Ampēra spēka atkarību no vada garuma.",
                "Lielumi: Neatkarīgais strāvas stirpums, vada garums, akatarīgais Ampēra spēks `(F)`, nemainīgie jeb konstantie lielumi masa `(m)`.",
              ],
            },
          },
          {
            type: "Title",
            children: "2. tabula. Ampēra spēka atkarība no vada garuma.",
          },
          {
            type: "Table",
            props: {
              data: [
                ["Npk.", "1.", "2.", "3.", "4.", "5.", "6."],
                [
                  "`L+-DeltaL, m`",
                  "0.012",
                  "0.022",
                  "0.030",
                  "0.032",
                  "0.041",
                  "0.042",
                ],
                [
                  "`m+-Deltam,g`",
                  "161.24",
                  "160.96",
                  "160.70",
                  "159.90",
                  "160.39",
                  "159.35",
                ],
                [
                  "`F_A+-DeltaF_A,N`",
                  "0.0040",
                  "0.0073",
                  "0.0099",
                  "0.0106",
                  "0.0135",
                  "0.0139",
                ],
                ["'`mg+-Delta(mg),N`", "(nums[3][i]/100).toFixed(4)"],
              ],
            },
          },
          {
            type: "Text",
            props: {
              text: [
                "1) `m_2-m_1=161.24-16.41=-0.17g=-0.00017kg`",
                "`F_2=m_2*g=0.00017*9.81=0.00167N`",
                "Ampēra spēks: `F_2/F_1=0.00167/0.0040=0.4175 N/A`",
                "",
                "2. `0.4164 N/A`; 3. `0.4086 N/A`; 4. `0.9708 N/A`; 5. `0.3126 N/A`; 6. `0.9295 N/A`",
              ],
            },
          },
          {
            type: "Title",
            children:
              "Ampēra spēka atkarība no magnētiskā lauka esošās konturas daļas garuma `F_A=f(L)`",
          },
          {
            type: "Chart",
            props: {
              info: {
                title:
                  "Ampēra spēka atkarība no magnētiskā lauka esošās konturas daļas garuma",
                x: "L, m",
                y: "FA, N",
              },
              data: [
                [
                  "Magnētiskā lauka esošās konturas daļas garums",
                  0.012,
                  0.022,
                  0.03,
                  0.032,
                  0.041,
                  0.042,
                ],
                ["Ampēra spēks", 0.004, 0.0073, 0.0099, 0.0106, 0.0135, 0.0139],
              ],
            },
          },
          {
            type: "Title",
            children: "Secinājumi un darba analīze:",
          },
          {
            type: "Title",
            children: "Rezultātu analīze",
          },
          {
            type: "Text",
            props: {
              text: [
                "1. daļa:",
                "Nosakot Ampēra spēka atkarību no strāvas stipruma, tabulā ir redzams, ka jo lielāks ir strāvas stiprums, jo lielāks ir Ampēra spēks. Šis rezultāts ir saskaņā ar Ampēra likumu, kas nosaka, ka magnētiskais lauks vada apkārtnē ir proporcionāls strāvas stiprumam, tādējādi palielinot strāvas stiprumu, palielinās arī spēks, ar kuru magnētiskais lauks iedarbojas uz vadiem.",
                "2. daļa:",
                "Nosakot Ampēra spēka atkarību no vada garuma, tabulā ir redzams, ka jo lielāks ir vada garums, jo mazāks ir Ampēra spēks. Šis rezultāts ir saskaņā ar Ampēra likumu, kas nosaka, ka magnētiskais lauks vada apkārtnē ir proporcionāls vada garumam. Tādējādi, palielinot vada garumu, magnētiskais lauks vada apkārtnē samazinās un tādējādi samazinās arī spēks, ar kuru magnētiskais lauks iedarbojas uz vadiem.",
              ],
            },
          },
          {
            type: "Title",
            children: "Eksperimenta izvērtēšana",
          },
          {
            type: "Text",
            props: {
              text: ["Trūkumi un ierobežojumi:"],
            },
          },
          {
            type: "OList",
            props: {
              data: [
                "Eksperiments tika veikts tikai ar vienu veidu vadiem, kas nozīmē, ka iegūtie rezultāti var attiekties tikai uz šo veidu vadiem vai būt ierobežojoši.",
                "Nav ņemta vērā temperatūras un sprieguma ietekme uz eksperimentu, kas varētu ietekmēt iegūtos datus.",
                "Nepilnīga mērīšanas precizitāte varēja ietekmēt iegūtos datus (cilvēka kļūda).",
              ],
            },
          },
          {
            type: "Text",
            props: {
              text: ["Ierosinātie uzlabojumi:"],
            },
          },
          {
            type: "OList",
            props: {
              data: [
                "Veikt eksperimentu ar dažāda veida vadiem, lai iegūtu universālus rezultātus.",
                "Lai iegūtu plašāku priekšstatu par eksperimentālo situāciju, būtu jāņem vērā arī citi parametri, piemēram, temperatūra un mitrums.",
                "Veikt vairākus mērījumus: lai nodrošinātu precīzus rezultātus, būtu vēlams veikt vairākus mērījumus un iegūtos datus vidējot.",
                "Iegādāties precīzākas mērījumu iekārtas: pamatojoties uz eksperimenta iegūtajiem rezultātiem, varētu būt ieteicams iegādāties precīzākas mērījumu iekārtas.",
              ],
            },
          },
          {
            type: "Title",
            children: "Secinājumi",
          },
          {
            type: "Text",
            props: {
              text: [
                "Pētījums apstiprina, ka Ampēra spēks ir tieši proporcionāls strāvas stiprumam, bet nepārtraukti samazinās, kad vads kļūst garāks vai masa palielinās. Šie secinājumi var būt noderīgi elektrotehnikas un fizikas jomās, kur tiek izmantotas elektriskās strāvas un vadi. Hipotēze ir apstiprinājās, un rezultāti atbilst teorētiskajai hipotēzei un likumiem, kas apraksta Ampēra spēku un vada pretestību.",
              ],
            },
          },
        ],
      },
    ],
  },
];
