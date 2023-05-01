export const macibass = [ // TODO: change to macibas not macibass
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
            children: "Darba teorētiskias pamatojums:",
          },
          {
            type: "Text",
            props: {
              text: ["`R=((p_1-p_2)VM)/((m_1-m_2)T)` + EDZUS"],
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
                  "11760",
                  "19600",
                  "29400",
                  "39200",
                  "49000",
                  "58800",
                ],
                [
                  "`m_1+-Deltam_1. g`",
                  "247.61`+-0.01`",
                  "247.61",
                  "247.61",
                  "247.61",
                  "247.61",
                  "247.61",
                ],
                [
                  "`m_2+-Deltam_2. g`",
                  "247.49`+-0.01`",
                  "247.47",
                  "247.30",
                  "247.18",
                  "247.68",
                  "247.96",
                ],
                ["'`(m_1-m_2). g`", "(nums[3][i]-nums[4][i]).toFixed(2)"],
                ["'`R, J/(K*mol)`", "(nums[2][i]/nums[5][i])"],
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
              text: ["EDZUS"],
            },
          },
          {
            type: "Title",
            children: "Secinājumi un darba analīze",
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
                "a) stieplītes atrauāanas metodi;",
                "b) kapilārās pacelāanās metodi;",
                "c) piliena atrauāanās metodi.",
              ],
            },
          },
          {
            type: "Title",
            children: "Darba piederumi:",
          },
          {
            type: "Title",
            children: "Darba shēma un darba teorētiskais pamatojums:",
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
                ["'`sigma, N/m`", "(nums[3][i]/nums[2][i]/10).toFixed(2)"],
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
              text: ["Aprēķinu piemēri:"],
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
                  "((nums[3][i]*10)/(nums[2][i]*99.7*9.8)).toFixed(3)",
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
              text: ["Aprēķinu piemēri:"],
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
                  "`m, g+-Deltan`",
                  "1.0`+-0.1`",
                  "1.6",
                  "1.3",
                  "1.1",
                  "1.5",
                  "2.5",
                  "2.1",
                ],
                ["`N`", "20`+-1`", "31", "21", "20", "30", "30", "40"],
                [
                  "`m_0, kg`",
                  "0.050`+-0.001`",
                  "0.052",
                  "0.062",
                  "0.055",
                  "0.050",
                  "0.050",
                  "0.053",
                ],
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
                ["'`sigma, N/m`", "(nums[4][i]/(nums[5][i]*3.14)).toFixed(3)"],
                [
                  "*`sigma_(vid), N/m`",
                  "(sums[6]/(data[0].length-1)).toFixed(3)",
                ],
              ],
            },
          },
          {
            type: "Text",
            props: {
              text: ["Aprēķinu piemēri:"],
            },
          },
          {
            type: "Title",
            children: "Rezultāts:",
          },
          {
            type: "Title",
            children: "Secinājumi un darba analīze:",
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
        ],
      },
    ],
  },
];
