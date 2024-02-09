import { Cart } from "../models/Cart";
import { Comment } from "../models/Comment";
import { Notification } from "../models/Notification";
import { Order } from "../models/Order";
import { Product, Types } from "../models/Product";
import { Roles, User } from "../models/User";

const ParfeTorta = require("../assets/parfeTorta.jpg");
const CokoladnaTorta = require("../assets/cokoladnaTorta.jpg");
const VocnaTorta = require("../assets/vocnaTorta.jpg");
const RafaeloTorta = require("../assets/rafaeloTorta.jpg");
const ReformaTorta = require("../assets/reformaTorta.jpg");
const DobosTorta = require("../assets/dobosTorta.jpg");
const CakePopsKolac = require("../assets/cakePopsKolac.jpg");
const CokoladaKolac = require("../assets/cokoladaKolac.jpg");
const CokoladneBombice = require("../assets/cokoladneBombiceKolac.jpg");
const MalineKolac = require("../assets/malineKolac.jpg");
const PrincesKrofne = require("../assets/princesKrofneKolac.jpg");
const VisnjaKolac = require("../assets/visnjeKolac.jpg");

export let users: User[] = [
    {
        id: 1,
        firstName: 'Jovan',
        lastName: 'Petrović',
        contactNumber: '0612345678',
        address: 'Knez Mihailova 1, Beograd',
        username: 'jovan',
        password: '123',
        role: Roles.buyer
      },
      {
        id: 2,
        firstName: 'Ana',
        lastName: 'Janković',
        contactNumber: '0649876543',
        address: 'Terazije 5, Novi Sad',
        username: 'ana',
        password: '456',
        role: Roles.buyer
      },
      {
        id: 3,
        firstName: 'Marko',
        lastName: 'Nikolić',
        contactNumber: '0655555555',
        address: 'Nemanjina 10, Niš',
        username: 'marko',
        password: 'bezbednaLozinka789',
        role: Roles.buyer
      }
  ];

  export let comments: Comment[] = [
    {
      userId: 1,
      productId: 1,
      text: "Dobar"
    },
    {
      userId: 2,
      productId: 1,
      text: "Super"
    }
  ]

  export let products: Product[] = [
    {
      id: 1,
      name: "Parfe torta",
      type: Types.cake,
      price: 2000,
      description: "Parfe torta je profinjena poslastica koja očarava nepce kombinacijom lakoće i bogatstva. Sastoji se od nežnih slojeva kremastog parfea, često obogaćenih aromom vanile ili drugih egzotičnih sastojaka. Ovi slojevi kremaste mekoće savršeno se stapaju sa hrskavim dodacima poput mrvica keksa ili lešnika, stvarajući savršenu ravnotežu tekstura.",
      pictureURL: ParfeTorta.src
    },
    {
      id: 2,
      name: "Cokoladna torta",
      type: Types.cake,
      price: 1000,
      description: "Cokoladna torta postaje neodoljiva poslastica za sve ljubitelje cokolade. Sastoji se od socnog biskvita od cokolade koji pruža intenzivan i bogat ukus, prozet mirisom sveze pecenih kolaca. Svaki sloj biskvita se topi u ustima, ostavljajući za sobom nezaboravnu notu cokoladnog užitka.",
      pictureURL: CokoladnaTorta.src
    },
    {
      id: 3,
      name: "Vocna torta",
      type: Types.cake,
      price: 1000,
      description: "Vocna torta je osvezavajuci i sareni delikates, savrsen spoj socnog voca i mekanog biskvita. Svaki sloj ove torte donosi festival boja i ukusa, stvarajuci harmoniju izmedju razlicitih vocnih nota i nežne teksture biskvita.",
      pictureURL: VocnaTorta.src
    },
    {
      id: 4,
      name: "Rafaelo torta",
      type: Types.cake,
      price: 1500,
      description: "Rafaelo torta je nebeska poslastica koja odusevljava svojom laganoscu, elegancijom i ukusom koji podseca na slavne kuglice Rafaelo. Ova torta se sastoji od nekoliko slojeva mekanog biskvita od kokosa, koji su prozeti kremom od bele cokolade i kokosa.",
      pictureURL: RafaeloTorta.src
    },
    {
      id: 5,
      name: "Reforma torta",
      type: Types.cake,
      price: 1250,
      description: "Reforma torta je rafinirana i socna poslastica koja spaja razlicite ukuse u savrsen sklad. Ova torta je obicno sastavljena od tanjih slojeva mekane vanilaste kore, izmedju kojih se nalazi bogat krem od oraha ili lesnika. Svaki sloj kore i kreme pazljivo je postavljen kako bi stvorio harmonicnu kombinaciju tekstura i ukusa.",
      pictureURL: ReformaTorta.src
    },
    {
      id: 6,
      name: "Dobos torta",
      type: Types.cake,
      price: 3200,
      description: "Dobos torta je klasicna poslastica koja odide elegancijom i rafiniranim ukusom. Sastoji se od vise slojeva hrskavog biskvita od jaja, izmedju kojih se nalazi bogat kremasti fil od maslaca. Ono sto ovu tortu čini posebnom jeste njena šećerna kora.",
      pictureURL: DobosTorta.src
    },
    {
      id: 7,
      name: "Cake pops kolac",
      type: Types.pastry,
      price: 1100,
      description: "Cake pops kolaci su slatki, zabavni i predivno ukraseni zalogaji koji nose caroliju ukusa u kompaktnom obliku. Svaki cake pop pocinje sa socnim biskvitom, mekanim i punim ukusa, koji se pazljivo mrvicama i kremom spaja u kompaktnu, okruglu formu.",
      pictureURL: CakePopsKolac.src
    },
    {
      id: 8,
      name: "Cokoladni kolac",
      type: Types.pastry,
      price: 1000,
      description: "Cokoladni kolac je istinski uzitak za sve ljubitelje cokolade. Ovaj socan dezert pruza bogatstvo cokoladnog ukusa u svakom zalogaju. Mekani biskvit od cokolade, prozet aromom kakaa, stvara neodoljivu osnovu koja se topi u ustima.",
      pictureURL: CokoladaKolac.src
    },
    {
      id: 9,
      name: "Cokoladne bombice",
      type: Types.pastry,
      price: 1600,
      description: "Cokoladne bombice su mala carolija u svetu slatkisa, pruzajući jedinstvenu eksploziju cokoladnog uzivanja. Svaka bombica je kao maleno blago, sa hrskavim spoljnim slojem koji štiti neodoljivu mekoću unutar.",
      pictureURL: CokoladneBombice.src
    },
    {
      id: 10,
      name: "Kolac sa malinama",
      type: Types.pastry,
      price: 1600,
      description: "Kolac sa malinama je ukusna poslastica koja sjedinjuje socnost malina s mekocom biskvita, stvarajuci savrsen sklad vocne svezine i slatke teksture. Mekani biskvit, prozet aromom vanile, pruza osnovu za svaku socnu malinu koja dodaje izrazenu notu kiselkastog osvezenja.",
      pictureURL: MalineKolac.src
    },
    {
      id: 11,
      name: "Princes krofne",
      type: Types.pastry,
      price: 600,
      description: "Princes krofne su ukusna poslastica koja ocarava svojom mekoćom i punjenjem. Ovaj klasican kolac ima prozracni biskvitni omotac koji se topi u ustima, pruzajući savrsenu kombinaciju mekoce i lagane hrskavosti. Ono što ovu poslasticu cini posebnom jeste njen bogati fil koji se krije unutar svake krofne.",
      pictureURL: PrincesKrofne.src
    },
    {
      id: 12,
      name: "Kolac sa visnjama",
      type: Types.pastry,
      price: 700,
      description: "Kolac sa visnjama je slatka poslastica koja odusevljava kombinacijom mekane teksture i socnih visanja. Biskvit, obogacen ukusom vanile, pruza savrsenu osnovu za ove socne vocne plodove. Svaki zalogaj otkriva slatkocu biskvita u kontrastu sa kiselkastim notama višanja, stvarajući neodoljivu simfoniju ukusa.",
      pictureURL: VisnjaKolac.src
    }
  ]

  export let notifications: Notification[] = [
    {
      id: 1,
      date: new Date(),
      userId: 1,
      status: true,
      text: "Vasa narudzbina sa id 1 je uspesno prihvacena"
    },
    {
      id: 2,
      date: new Date(),
      userId: 1,
      status: false,
      text: "Vasa narudzbina sa id 2 nije uspesno prihvacena"
    },
    {
      id: 3,
      date: new Date(),
      userId: 1,
      status: true,
      text: "Vasa narudzbina sa id 3 je uspesno prihvacena"
    }
  ]

  export let carts: Cart[] = [

  ]

  export let orders: Order[] = [

  ]