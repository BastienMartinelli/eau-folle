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
