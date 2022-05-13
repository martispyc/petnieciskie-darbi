// TODO: add y axis label to chart
// TODO: make the a tag look better in the 'Text AC
export const macibas = [
    {
        id: 0,
        macibasNosaukums: "fizika",
        darbi: [
            {
                id: 0,
                nosaukums: "Slīdes berzes spēks. Slīdes berzes koeficents. Nr.5",
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
                                "Noteikt klucīša slīdes berzes koeficentu.",
                                "Noteikt slīdes berzes keoficentu, izmantojot slīpo plakni",
                            ]
                        }
                    },
                    {
                        type: "Title",
                        children: "Darba Piederumi"
                    },
                    {
                        type: "OList",
                        props: {
                            data: [
                                "Lineāls `(+-0.1cm)`","Hronometrs `(+-0.01s)`", "Dinanometrs `(+-0.05N)`", "Dēlis", "Klucis", "Atsvari"
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
                                "neatkarīgais: Kluča masa `[kg]`",
                                "atkarīgais: Berzes spēks `[N]`",
                                "nemainīgais: Dēļa berzes keoficents"
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
                                "Sakarā ar to, ka palielinās masa `[kg]`, palielinās arī `mg` (masa * brīvās krišanas pātrinājums). Zinot, ka `F_r=mg` un `F_b=muF_r=mumgcosalpha`, kur `mu` ir `const` un `g` uz zemes arī ir `const`, un `cosalpha` ir `const`, tad sanāk:",
                                "`F_b = ({const})*m*({const})*({const})`",
                                "Var secināt, ka `F_b` ir atkarīgs no `m`, jeb- klucīša berzes spēks atkarīgs no masas."
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
                        children: "Kluča berzes spēks atkarībā no smaugma spēka"
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
                        children: "Secinājumi un darba anlīze"
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
                                "Dinonametra vērtības strauji lēkāja, ko varētu uzlabot ar elektriskā dinanometra ieviešanu, toties vajadzīgais budžets būtu samērā liels, tātad var veikt pirmo uzlabojumu, lai precīzāk varētu 'noķert' ar acīm pareizo vērtību. Toties, šis uz maziem lielumiem nebija ļoti ierobežojoši.",
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
                                "Hipotēze apstiprinājās. Kamēr palielinās klucīša masa, palielinās arī berzes spēks. Pēc grafika var arī redzēt šo parādību, jo līnija, kas attēlo, ka `F_b` no `mg` attiecība ir augoša, kas arī atbilst hipotēzei. Protams visprecīzāk būtu šo apskatīt arī ar ļoti lieliem svariem, bet dēļ skolas apstākļiem un pieeijamiem līdzekļiem, tas nebija iespējams izdarīt. Protams sakāra ar lielām `m` vērtībam nav praktiski nekas zināms, tikai teorētiski, tāpēc ir iespēja, ka hipotēze ļoti lielās `m` vērtības būs nepatiesa.",
                                "Kaut vai vēršoties par šō jautājumu dziļāk, uzzināju, ka lielām `m` vērtībam, kas līdzās melnajam caurumam, vēl nav zināms pat teorētiski precīzs dinamiskais berzes spēks apkārt esošajam melnajam caurumam. Info par šō rindkopu atrodams sekojoši: https://arxiv.org/abs/1108.1163"
                            ]
                        }
                    },
                ]
            },
        ]
    },
]