export interface BirthstoneInfo {
  stone: string;
  color: string;
  meaning: string;
  symbolism: string;
}

export interface BirthFlowerInfo {
  flower: string;
  meaning: string;
  symbolism: string;
}

export interface MonthInfo {
  name: string;
  number: number;
  birthstone: BirthstoneInfo;
  birthFlower: BirthFlowerInfo;
  funFact: string;
  seasonNorthern: string;
  seasonSouthern: string;
}

export const MONTH_DATA: Record<number, MonthInfo> = {
  1: {
    name: "January",
    number: 1,
    birthstone: {
      stone: "Garnet",
      color: "Deep Crimson Red",
      meaning: "Protection & Vitality",
      symbolism: "Associated with devotion, trust, and lasting friendship."
    },
    birthFlower: {
      flower: "Carnation & Snowdrop",
      meaning: "Admiration & Hope",
      symbolism: "Symbolizes pure affection, resilience in cold weather, and rebirth."
    },
    funFact: "January is named after Janus, the Roman god of doors, gates, and new beginnings.",
    seasonNorthern: "Winter",
    seasonSouthern: "Summer"
  },
  2: {
    name: "February",
    number: 2,
    birthstone: {
      stone: "Amethyst",
      color: "Vibrant Violet Purple",
      meaning: "Clarity & Inner Peace",
      symbolism: "Historically praised for encouraging wisdom, calm focus, and sincerity."
    },
    birthFlower: {
      flower: "Violet & Primrose",
      meaning: "Modesty & Devotion",
      symbolism: "Represents humble grace, loyalty, and everlasting love."
    },
    funFact: "February is the only month that can pass without a single full moon (a Black Moon).",
    seasonNorthern: "Winter",
    seasonSouthern: "Summer"
  },
  3: {
    name: "March",
    number: 3,
    birthstone: {
      stone: "Aquamarine",
      color: "Oceanic Ice Blue",
      meaning: "Serenity & Harmony",
      symbolism: "Known as the mariner's gem, symbolizing clear vision and calm waters."
    },
    birthFlower: {
      flower: "Daffodil",
      meaning: "Rebirth & New Beginnings",
      symbolism: "Bright yellow blooms signifying the return of sunshine and joyful energy."
    },
    funFact: "March was originally the first month of the ancient Roman calendar year.",
    seasonNorthern: "Spring",
    seasonSouthern: "Autumn"
  },
  4: {
    name: "April",
    number: 4,
    birthstone: {
      stone: "Diamond",
      color: "Sparkling Brilliant White",
      meaning: "Everlasting Strength & Courage",
      symbolism: "Represents invincible strength, purity, and enduring love."
    },
    birthFlower: {
      flower: "Daisy & Sweet Pea",
      meaning: "Innocence & Blissful Pleasure",
      symbolism: "Embody cheerful optimism, gratitude, and delicate beauty."
    },
    funFact: "April derives its name from the Latin 'aperire', meaning 'to open', like opening flower buds.",
    seasonNorthern: "Spring",
    seasonSouthern: "Autumn"
  },
  5: {
    name: "May",
    number: 5,
    birthstone: {
      stone: "Emerald",
      color: "Rich Lush Green",
      meaning: "Growth & Wisdom",
      symbolism: "Associated with springtime renewal, flourishing success, and intuition."
    },
    birthFlower: {
      flower: "Lily of the Valley & Hawthorn",
      meaning: "Return of Happiness",
      symbolism: "Symbolizes sweet joy, hope, and protective warmth."
    },
    funFact: "May is named after Maia, the Roman goddess of growth, fertility, and spring blossoms.",
    seasonNorthern: "Spring",
    seasonSouthern: "Autumn"
  },
  6: {
    name: "June",
    number: 6,
    birthstone: {
      stone: "Pearl & Alexandrite",
      color: "Lustrous Iridescent Cream",
      meaning: "Purity & Balance",
      symbolism: "Symbolizes integrity, transformation, and calm elegance."
    },
    birthFlower: {
      flower: "Rose & Honeysuckle",
      meaning: "Love & Devotion",
      symbolism: "Classic symbols of affection, warmth, and everlasting bonds."
    },
    funFact: "June has the longest daylight day of the year in the Northern Hemisphere (Summer Solstice).",
    seasonNorthern: "Summer",
    seasonSouthern: "Winter"
  },
  7: {
    name: "July",
    number: 7,
    birthstone: {
      stone: "Ruby",
      color: "Fiery Flame Red",
      meaning: "Passion & Courage",
      symbolism: "Considered the king of gemstones, symbolizing vitality, passion, and prosperity."
    },
    birthFlower: {
      flower: "Larkspur & Water Lily",
      meaning: "Positivity & Purity of Heart",
      symbolism: "Represents lighthearted joy, open affection, and peaceful waters."
    },
    funFact: "July was named in honor of Julius Caesar after his calendar reform in 44 BCE.",
    seasonNorthern: "Summer",
    seasonSouthern: "Winter"
  },
  8: {
    name: "August",
    number: 8,
    birthstone: {
      stone: "Peridot",
      color: "Olive Lime Green",
      meaning: "Light & Joyful Abundance",
      symbolism: "Formed deep inside volcanic magma, symbolizing strength and golden light."
    },
    birthFlower: {
      flower: "Gladiolus & Poppy",
      meaning: "Integrity & Moral Strength",
      symbolism: "Symbolizes sword-like strength of character, sincerity, and imagination."
    },
    funFact: "August was renamed to honor Augustus Caesar, the first Roman emperor.",
    seasonNorthern: "Summer",
    seasonSouthern: "Winter"
  },
  9: {
    name: "September",
    number: 9,
    birthstone: {
      stone: "Sapphire",
      color: "Royal Velvet Blue",
      meaning: "Wisdom & Truth",
      symbolism: "Prized throughout history for representing noble focus, truth, and protection."
    },
    birthFlower: {
      flower: "Aster & Morning Glory",
      meaning: "Deep Love & Patience",
      symbolism: "Star-shaped flowers representing elegant wisdom and dawn beginnings."
    },
    funFact: "September comes from 'septem', meaning seven in Latin, as it was the 7th Roman month.",
    seasonNorthern: "Autumn",
    seasonSouthern: "Spring"
  },
  10: {
    name: "October",
    number: 10,
    birthstone: {
      stone: "Opal & Tourmaline",
      color: "Rainbow Prism Fire",
      meaning: "Creativity & Hope",
      symbolism: "Famous for carrying every spectral color, symbolizing inspiration and fortune."
    },
    birthFlower: {
      flower: "Marigold & Cosmos",
      meaning: "Warmth & Harmony",
      symbolism: "Golden petals symbolizing sunshine, creativity, and peaceful order."
    },
    funFact: "October sunrise foliage produces some of the richest golden spectrums of the year.",
    seasonNorthern: "Autumn",
    seasonSouthern: "Spring"
  },
  11: {
    name: "November",
    number: 11,
    birthstone: {
      stone: "Citrine & Topaz",
      color: "Golden Amber Honey",
      meaning: "Abundance & Joyful Energy",
      symbolism: "Known as the merchant's stone, symbolizing warmth, prosperity, and clarity."
    },
    birthFlower: {
      flower: "Chrysanthemum",
      meaning: "Loyalty & Longevity",
      symbolism: "Associated with joy, long life, and cheerful autumn gatherings."
    },
    funFact: "November was named from 'novem', Latin for nine, in the ancient Roman calendar.",
    seasonNorthern: "Autumn",
    seasonSouthern: "Spring"
  },
  12: {
    name: "December",
    number: 12,
    birthstone: {
      stone: "Turquoise & Zircon",
      color: "Sky Turquoise Blue",
      meaning: "Good Fortune & Healing",
      symbolism: "One of the oldest talismanic stones, bringing peace and clear expression."
    },
    birthFlower: {
      flower: "Holly & Narcissus",
      meaning: "Domestic Happiness & Cheer",
      symbolism: "Evergreen holly leaves symbolizing resilience and celebratory warmth."
    },
    funFact: "December hosts the Winter Solstice in the North and the Summer Solstice in the South.",
    seasonNorthern: "Winter",
    seasonSouthern: "Summer"
  }
};

export const WEEKDAY_LORE: Record<string, { character: string; description: string }> = {
  Sunday: {
    character: "Radiant & Inspiring",
    description: "Born under the Sun's day, Sunday individuals often carry optimism, warmth, and creative confidence."
  },
  Monday: {
    character: "Intuitive & Caring",
    description: "Born under the Moon's day, Monday individuals are known for emotional intelligence and protective empathy."
  },
  Tuesday: {
    character: "Driven & Courageous",
    description: "Born under Mars' day, Tuesday individuals possess determination, energy, and a pioneering spirit."
  },
  Wednesday: {
    character: "Quick-witted & Expressive",
    description: "Born under Mercury's day, Wednesday individuals excel in communication, curiosity, and versatile thinking."
  },
  Thursday: {
    character: "Generous & Exploratory",
    description: "Born under Jupiter's day, Thursday individuals carry expansive humor, generosity, and vision."
  },
  Friday: {
    character: "Harmonious & Artistic",
    description: "Born under Venus' day, Friday individuals value beauty, grace, friendship, and aesthetic balance."
  },
  Saturday: {
    character: "Wise & Dedicated",
    description: "Born under Saturn's day, Saturday individuals demonstrate wisdom, focus, and reliable craftsmanship."
  }
};
