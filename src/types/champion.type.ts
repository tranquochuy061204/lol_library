/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ChampionCardProps {
  champion: Champion;
}

export interface Champion {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  lore: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  tags: string[]; // Ví dụ: ["Fighter", "Tank"]
  partype: string; // Ví dụ: "Bể Máu"
  stats: {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
  };
  spells: Spell[]; // Danh sách kỹ năng của tướng

  passive: Passive; // Kỹ năng bị động của tướng
}

export interface Passive {
  name: string;
  description: string;
  image: {
    full: string;
  };
}

export interface Spell {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: {
    label: string[];
    effect: string[];
  };
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  datavalues: Record<string, any>;
  effect: Array<number[] | null>;
  effectBurn: (string | null)[];
  vars: any[];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: {
    full: string;
  };
  resource: string;
}
