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
                                "Lineāls (±0.1cm)","Hronometrs (±0.01s)", "Dinanometrs (±0.05N)", "Dēlis", "Klucis", "Atsvari"
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
                                "neatkarīgais: Kluča masa [kg]",
                                "atkarīgais: Berzes spēks",
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
                        children: "Sakarā ar to, ka palielinās masa [kg], palielinās arī 'mg' (masa * brīvās krišanas ppātrinājums). Zinot, ka N=mg un F₈=μN=μmg, kur μ ir konstants un g uz zemes arī ir konstants, var secināt, ka F₈ ir atkarīgs no m, jeb- klucīša berzes spēks atkarīgs no masas."
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
                                ["mg ±Δmg, N", "0.58±0.01", "1.60", "2.60", "3.60", "4.60", "5.60", "6.60"],
                                ["F₈ ±ΔF₈, N", "0.23±0.01", "0.72", "1.27", "1.82", "2.38", "2.92", "2.46"],
                                ["'μ", "(nums[3][i]/nums[2][i]).toFixed(2)"],
                                ["*μ", "sums[4].toFixed(2)"]
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
                                ["h ±Δh, cm", "25.0±0.1", "26.0", "28.0", "29.0", "29.5"],
                                ["'l ±Δl, cm", "'50.0'+(i==1?'±0.1':'')"],
                                ["'tg(α)", "(nums[2][i]/nums[3][i]).toFixed(2)"],
                                ["'μ", "(nums[4][i]).toFixed(2)"]
                            ]
                        }
                    },



                    {
                        type: "Chart",
                        props: {
                            data: [
                                
                            ]
                        }
                    }
                ]
            },
        ]
    },
]