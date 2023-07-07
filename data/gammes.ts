export type GammeItem = {
  name: string;
  description: string;
  type: string;
  label: string;
  titre: string;
  volume: string;
  id: string;
  hide?: boolean;
};

const data: GammeItem[] = [
  {
    id: "gentiane",
    type: "Eaux-de-vie",
    label: "Gentiane",
    name: "Eau-de-vie de gentianes sauvages",
    titre: "50°",
    volume: "0.5L",
    description: `Cette eau-de-vie de gentianes sauvages est exceptionnelle par sa rareté et les qualités gustatives
qu’elle présente.
Les racines sont prélevées, nettoyées et broyées une à une à la main.
L’alcool obtenu après distillation présente des arômes extrêmement puissants, une forte amertume
ainsi qu’une persistance infinie en bouche caractéristiques de cette fleur de nos montagnes.`,
  },
  {
    id: "prune",
    type: "Eaux-de-vie",
    label: "Prune",
    name: "Eau-de-vie de prunes sauvage",
    titre: "48°",
    volume: "0.5L",
    description: `Cette eau-de-vie de prunes sauvages est exceptionnelle par sa rareté et les qualités gustatives qu’elle
présente.
Les fruits sont ramassés un à un à la main une fois leur maturité atteinte.
Les prunes sont distillées sans leur noyau de sorte à ce que le goût du fruit s’exprime pleinement.
Les arômes sont fruités, frais et gourmands et offrent une bonne longueur en bouche.
    `,
  },
  {
    id: "sorbier",
    type: "Eaux-de-vie",
    label: "Sorbier",
    name: "Eau-de-vie de sorbier sauvage",
    titre: "43°",
    volume: "0.5L",
    hide: true,
    description: `Cette eau-de-vie de sorbier sauvages est exceptionnelle par sa rareté et les qualités gustatives
qu’elle présente.
Les grappes de petits fruits rouges sont récoltées une à une à la main après les premières gelées.
Le résultat après distillation est surprenant : les arômes sont doux, légèrement acidulés avec des
notes de pâte d’amande.`,
  },
  {
    id: "aquavit",
    type: "Spiritueux",
    label: "Aquavit",
    name: "",
    titre: "40°",
    volume: "0.7L",
    description: `L’aquavit est une boisson typique des pays scandinaves parfumée au carvi et à l’aneth.
    Cet aquavit est étonnamment doux, il possède des saveurs subtiles de plantes aromatiques, très
    légèrement boisées et persistantes en bouche.
    Son goût frais et puissant est extrêmement efficace à l’apéritif ou pour accompagner un repas.`,
  },
  {
    id: "nazare",
    type: "Spiritueux",
    label: "Vodka",
    name: "Na Zare",
    titre: "37.5°",
    volume: "0.7L",
    description: `Notre vodka est élaborée à partir de céréales biologiques. Elle a été double distillée pour lui
    conférer une rondeur en bouche et atténuer ses notes éthyliques. Ses subtils arômes de grain frais
    s’expriment aussi bien lors de dégustations que dans des cocktails.`,
  },
  {
    id: "espritdegenepi",
    type: "Spiritueux",
    name: "Esprit de Génépi",
    label: "",
    titre: "48°",
    volume: "0.2L",
    description: `Notre esprit de génépi est issu du double processus de macération puis de distillation. Nous laissons
    infuser lentement nos brins dans notre alcool neutre à 60° puis nous distillons le macérat. Les
    arômes sont ainsi concentrés et la boisson qui en résulte est tout simplement exceptionnelle par les
    qualités gustatives qu’elle présente. Elle est non-sucrée pour préserver intactes toutes les saveurs
    sublimées par la distillation.`,
  },
  {
    id: "lowfall",
    type: "Gin",
    name: "Low Fall",
    label: "",
    titre: "40°",
    volume: "0.7L",
    description: `Le Low Fall est un gin extrêmement efficace, élaboré à partir de baies de genièvre et de grains de
poivre, il présente un profil aromatique légèrement boisé et épicé ainsi qu’un nez puissant. Il se
déguste seul ou en cocktail.`,
  },
  {
    id: "2g",
    type: "Gin",
    name: "2G",
    label: "",
    titre: "40°",
    volume: "0.7L",
    description: `Le 2G est notre gin signature. Mis au point à partir de brins de génépi et d’un mélange de baies, de
    grains et d’aromates, il présente des notes fraîches et épicées à la fois. Le génépi est ici subtilement
    amené et les saveurs de genièvre restent majoritaires. Il s’agit d’un gin de dégustation par
    excellence.`,
  },
  {
    id: "absinthe",
    type: "Spiritueux",
    label: "Absinthe",
    name: "Absinthe sauvage",
    titre: "72°",
    volume: "0.7L",
    description: `L’absinthe est une boisson emblématique du paysage culturel français du début du siècle passé.
    Largement consommée puis violemment diabolisée, elle est aujourd’hui de nouveau tolérée et
    appréciée.
    Ses arômes puissants de plantes sauvages distillées sont sublimés par des botaniques sèches
    macérées qui viennent apporter ces notes anisées caractéristiques.
    L’absinthe se consomme diluée en apéritif mais peut aussi être bue telle qu’elle ou avec un sucre.`,
  },
  {
    id: "genepi",
    type: "Liqueur",
    name: "Génépi",
    label: "Génépi",
    titre: "40°",
    volume: "0.7L, 0.5L et 0.2L",
    description: `Le procédé de fabrication de notre génépi permet d’en extraire les meilleurs arômes et de les
    diffuser puissamment. Nous ajoutons à cela une légère quantité de sucre biologique pour que la
    boisson qui en résulte présente un aspect sirupeux sans être écœurante. L’objectif est avant tout de
    laisser s’exprimer le caractère des brins de génépi.`,
  },
  {
    id: "sureau",
    type: "Liqueur",
    label: "Sureau",
    name: "Liqueur de sureau sauvage",
    titre: "35°",
    volume: "0.5L et 0.2L",
    hide: true,
    description: `La liqueur de sureau est obtenue à partir d’une macération de baies du même nom ramassées à
    maturité.
    Elle présente des notes fruitées avec des touches florales et un goût agréablement acidulé et sucré.
    Elle se déguste aussi bien à l’apéritif qu’en fin de repas.`,
  },
  {
    id: "hysope",
    type: "Liqueur",
    label: "Hysope",
    name: "Liqueur d’hysope sauvage",
    titre: "35°",
    volume: "0.5L et 0.2L",
    description: `La liqueur d’hysope est obtenue par macération de plantes d’hysope fleuries et sauvages.
   Son profil aromatique est bien particulier, très doux, il est néanmoins légèrement piquant avec des
   notes acidulées et fraîches.
   Cette liqueur se déguste parfaitement en fin de repas.`,
  },
  {
    id: "menthe",
    type: "Liqueur",
    label: "Menthe",
    name: "Apéritif de menthe fraîche",
    titre: "28°",
    volume: "0.7L",
    description: `Cette boisson fraîche obtenue à partir de menthe sauvage saura se faire apprécier au moment de
    l’apéritif.
    Légère en bouche, subtilement sucrée et au doux parfum mentholé, cette boisson a été obtenue à
    partir du double processus de macération de feuilles puis de distillation, d’où sa couleur limpide.`,
  },
  {
    id: "aneth",
    type: "Liqueur",
    label: "Aneth",
    name: "Liqueur d'aneth",
    titre: "35°",
    volume: "0.5L et 0.2L",
    description: `La liqueur d’aneth est obtenue par macération de graines d’aneth séchée.
    Elle possède toutes les qualités aromatiques de la plantes à partir de laquelle elle a été élaborée :
    légèrement anisée et douce, elle offre une bonne persistance en bouche soutenue par de subtiles
    notes sucrées qui viennent arrondir l’ensemble.`,
  },
  {
    id: "genepifume",
    type: "Liqueur",
    label: "Génépi fumé",
    name: "Distillat de génépi fumé",
    titre: "44°",
    volume: "0.7L, 0.5L et 0.2L",
    description: `La boisson typique de nos montagnes en version revisitée par l’Eau Folle.
    Comme son nom l’indique, cet alcool est fumé.
    
    Il présente une palette aromatique inédite : le nez fumé diffuse des notes fraîches, presque
    mentholées de génépi. Le goût est exceptionnel, très légèrement piquant en ouverture, puis la fumée
    prend le dessus avant de doucement s’atténuer pour laisser place à la puissance du génépi. La
    bouche est intense, longue et offre une excellente persistance.`,
  },
  {
    id: "aperitifdegenepi",
    type: "Autre",
    label: "TàB – Terre à Boire",
    name: "Apéritif de gentianes sauvages",
    titre: "20°",
    volume: "0.7L",
    description: `La Terre à Boire est la boisson emblématique de la distillerie l’Eau Folle.
    Fabriquée à partir de racines de gentianes sauvages et d’une sélection de plantes et de fruits macérés
    dans l’alcool.
    Elle présente un mélange de saveurs douces, sucrées, raisonnablement amères, florales, subtilement
    acidulées tirant doucement sur les agrumes.
    Il s’agit sans conteste de la boisson phare de l’apéritif.`,
  },
];

export default data;
