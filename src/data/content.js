import {
  Boxes,
  Database,
  FileCheck2,
  Recycle,
  Scissors,
  UserCheck,
  Workflow,
} from "lucide-react";
import { projects } from "./projects.js";

export { projects };

export const base = import.meta.env.BASE_URL;
export const certificateUrl = `${base}sertifikaat.pdf`;
export const contactEmail = "germo.eismann@example.com";

export const nav = [
  { href: "#tooviis", label: "Kuidas töötan" },
  { href: "#lahendused", label: "Lahendused" },
  { href: "#projektid", label: "Tehtud tööd" },
  { href: "#minust", label: "Minust" },
  { href: "#kontakt", label: "Kontakt" },
];

export const hero = {
  eyebrow: "Arendus · automatiseerimine · andmed",
  title: "Rätseplahendused tööprotsesside lihtsustamiseks.",
  lead: "Loon automatiseeringuid, andmelahendusi ja veebitööriistu tegeliku vajaduse järgi. Automatiseerin ainult selle osa, mis päriselt aega võtab — ilma üleliigsete funktsioonide ja ebavajaliku keerukuseta.",
  stats: [
    { label: "Fookus", value: "Praktilised töövood" },
    { label: "Peamised", value: "Python · SQL · React" },
    { label: "Põhimõte", value: "Väikseim toimiv lahendus" },
  ],
};

export const approachPrinciples = [
  {
    icon: Scissors,
    title: "Ehitan ainult vajaliku",
    text: "Automatiseerin selle osa, mis päriselt aega võtab. Mugavad lisad jäävad ootele, kuni neid päriselt vaja on.",
  },
  {
    icon: Recycle,
    title: "Automatiseerin korduva töö",
    text: "Käsitsi tehtavad kordused — kopeerimine, sisestamine, failide liigutamine — panen ühte selgesse töövoogu.",
  },
  {
    icon: Boxes,
    title: "Kasutan olemasolevaid vahendeid",
    text: "Enne uue süsteemi ehitamist vaatan, mida juba kasutatakse, ja valin väikseima lahenduse, mis töö ära teeb.",
  },
  {
    icon: UserCheck,
    title: "Ebaselge jääb inimesele",
    text: "Kindlad juhtumid liiguvad automaatselt edasi, ebaselged tulemused jäävad selgelt inimesele kinnitada.",
  },
];

export const services = [
  {
    icon: Workflow,
    index: "01",
    title: "Automatiseerimine ja failitöö",
    text: "Seon korduvad sammud üheks arusaadavaks töövooks — käsitsi sisestamine, kopeerimine ja failide liigutamine kaovad taustale.",
    items: ["Korduvad tööetapid", "Excel, PDF ja XML", "Failide ja kaustade liikumine", "Pythoni tööriistad"],
  },
  {
    icon: Database,
    index: "02",
    title: "Andmed ja kontroll",
    text: "Korrastan sisendandmed, võrdlen neid reeglitega ning toon vead ja erandid selgelt välja — ka läbi API-de ja AI eeltöötluse.",
    items: ["SQL ja PostgreSQL", "Andmete valideerimine", "API-d ja andmevahetus", "AI tuvastuse toeks"],
  },
  {
    icon: FileCheck2,
    index: "03",
    title: "Sisemised tööriistad",
    text: "Teen konkreetse ülesandega töölauarakendusi ja veebivaateid, kus kindel töö liigub ise ja erandid jäävad inimesele.",
    items: ["Töölauarakendused", "Sisemised veebivaated", "Kontrollkohad kasutajale"],
  },
];

export const about = {
  eyebrow: "Minust",
  title: "Protsessi mõistmine enne koodi.",
  paragraphs: [
    "Olen praktilise mõtlemisega arendaja. Mind huvitab enne koodi see, kuidas töö päriselt käib: kes seda teeb, millist infot on vaja ja millistes kohtades tekib ajakulu või eksimisvõimalus.",
    "Kui ülesande saab lahendada väikese automatiseeringu või olemasolevate vahendite ühendamisega, ei ole põhjust ehitada suurt süsteemi.",
  ],
  principles: ["Väikseim toimiv lahendus", "Nähtavad erandid", "Täiendused päris kasutusest"],
};

export const contact = {
  eyebrow: "Kontakt",
  title: "Kas mõni tööetapp võtab liiga palju käsitööd?",
  text: "Kirjelda mulle olukorda. Vaatan, kas seda saab mõistlikult lihtsustada või automatiseerida.",
};

export const featuredFacts = [
  ["problem", "Probleem"],
  ["simplified", "Mida lahendus lihtsustas"],
  ["role", "Minu roll"],
];
