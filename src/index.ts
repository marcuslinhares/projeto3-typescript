import { Pokemon} from './classes/Pokemon';
import { Filme} from './classes/Filme';
import { Pais} from './classes/Pais';
import { PaisBordersEnum } from './enums/PaisBordersEnum';


const ditto = new Pokemon(
    132,
    "Ditto",
    101,
    3,
    40,
    false,
    "1996-06-01",
    ["limber", "imposter"],
    [
        {
            base_stat: 48,
            stat: "hp"
        },
        {
            base_stat: 48,
            stat: "attack"
        },
        {
            base_stat: 48,
            stat: "defense"
        }
    ]
);


const guardiansOfTheGalaxyVol3 = new Filme(
    false,
    "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
    447365,
    "en",
    "Guardians of the Galaxy Vol. 3",
    "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    4145.055,
    "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    "2023-05-03",
    "Guardians of the Galaxy Vol. 3",
    false,
    8.1,
    3154
);


const brasil = new Pais(
    {
        common: 'Brazil',
        official: 'Federative Republic of Brazil'
    },
    true,
    true,
    "Brasília",
    "Americas",
    "South America",
    ["Portuguese"],
    {
        lat: -10,
        lng: -55
    },
    [
        PaisBordersEnum.ARG,
        PaisBordersEnum.BOL,
        PaisBordersEnum.COL,
        PaisBordersEnum.GUF,
        PaisBordersEnum.GUY,
        PaisBordersEnum.PRY,
        PaisBordersEnum.PER,
        PaisBordersEnum.SUR,
        PaisBordersEnum.URY,
        PaisBordersEnum.VEN
    ],
    8515767,
    212559409,
    ["UTC-05:00", "UTC-04:00", "UTC-03:00", "UTC-02:00"],
    {
        png: "https://flagcdn.com/w320/br.png",
        svg: "https://flagcdn.com/br.svg"
    }
);


console.log(ditto.toJson());
console.log(guardiansOfTheGalaxyVol3.toJson());
console.log(brasil.toJson());
