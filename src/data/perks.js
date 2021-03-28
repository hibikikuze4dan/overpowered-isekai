const perks = {
  title: "Perks",
  description: [
    "First things first, do you want some perks? Note that each perk have 1 or 2 purchasable upgrades. You don't have to purchase upgrades in any specific order and you can purchase as many upgrades as you want. As long as you pay their cost, but you can't purchase the same upgrade multiple times, unless it says so in the upgrade's description.",
  ],
  choices: [
    {
      title: "New You",
      description: [
        "How about a makeover? Do you want to look handsome and heroic? You may now choose a new appearance for your body, but your appearance must still be within human limits.",
      ],
      cost: -3,
      multi: false,
      upgrades: [
        {
          title: "New Race",
          description: [
            "Your new appearance is no longer limited to a human appearance. You can be whatever race you want and look however you want as long as you're still a humanoid.",
          ],
          cost: -1,
          multi: false,
        },
        {
          title: "Improved Biology",
          description: [
            "You no longer need to do gross things like urinate, defecate, fart ect.",
          ],
          cost: -1,
          multi: false,
        },
      ],
    },
    {
      title: "World Knowledge",
      description: [
        "If you don't want to look like a disoriented tourist I could fill your head with basic knowledge of the world you get isekai'd to. For example you will know all of the major cities, the history of the different kingdoms, the names and deeds of famous heros and stuff like that.",
      ],
      cost: -1,
      multi: false,
      upgrades: [
        {
          title: "Encyclopedic Knowledge",
          description: [
            "Instead of gaining basic knowledge of the world. You will gain advanced knowledge about the world. For example, detailed data about monsters, magical metals, alchemical herbs etc.",
          ],
          cost: -1,
          multi: false,
        },
      ],
    },
    {
      title: "Starting Gear",
      description: [
        "Why not start your adventures looking like a proper adventurer and not a sweaty NEET in a tracksuit? With this option you will be given a basic set of adventuring gear. This includes a weapon and armor of your choice, a backpack, a 3 meter rope, a bedroll, a flint and steel, a knife, a coin purse, food rations to last for a week, a waterskin and a traveler's cloak.",
      ],
      cost: -1,
      multi: false,
      upgrades: [
        {
          title: "Epic Set",
          description: [
            "The weapon and armor you will be given will be indestructible and of legendary quality. You will also be able to summon and unsummon your legendary weapon and armor at will.",
          ],
          cost: -4,
          multi: false,
        },
      ],
    },
    {
      title: "Preparation",
      description: [
        "I won't spirit you away immediately, I will give you 1 year to prepare yourself. Maybe you want to read up on survival techniques, science or just abuse your powers before you get isekai'd. Once the 1 year is up l will teleport you and everything you are wearing and carrying. If you want to get isekai'd earlier just call my name 3 times.",
      ],
      cost: -2,
      multi: false,
      upgrades: [
        {
          title: "Item Upgrade",
          description: [
            "Any item you bring to the new world will become indestructible and have infinite battery, energy or fuel.",
          ],
          cost: -3,
          multi: false,
        },
        {
          title: "More Time",
          description: [
            "Instead of 1 year you will have 10 years to prepare yourself.",
          ],
          cost: -1,
          multi: false,
        },
      ],
    },
    {
      title: "Companion",
      description: [
        "Choose 1 person, your chosen person will gain eternal youth and get isekai'd along with you. Your companion will receive all the same perks which you have purchased, except Companion. They will also get 10 Isekai points which they can spend on purchasing options and upgrades in the Power section. You may purchase this option multiple times.",
      ],
      cost: -5,
      multi: true,
      upgrades: [
        {
          title: "Fictional Friend",
          description: [
            "Alternatively you can choose 1 fictional character as your companion. They will automatically like you and become your loyal friend. But they won't have any special powers from their canon.",
          ],
          cost: -1,
          multi: false,
        },
      ],
    },
    {
      title: "Waifu",
      description: [
        "Why not adventure with your waifu? You will be given your ideal partner, they will have the perfect appearance and personality according to your taste. Your waifu will possess eternal youth. You may purchase this option multiple times.",
      ],
      cost: -5,
      multi: true,
      upgrades: [
        {
          title: "Weapon Waifu",
          description: [
            "Choose a weapon, your waifu gains the ability to transform into your chosen weapon. She will be indestructible in her weapon form.",
          ],
          cost: -3,
          multi: false,
        },
        {
          title: "Power of Love",
          description: [
            "Choose 1 upgrade for 1 of your purchased powers. You gain your chosen upgrade as long as your waifu is within 10 meters of you.",
          ],
          cost: -3,
          multi: false,
        },
      ],
    },
  ],
};

const images = [
  "https://i.imgur.com/YYB9SJj.png",
  "https://i.imgur.com/zvpqGSY.png",
  "https://i.imgur.com/MMThjLd.png",
  "https://i.imgur.com/HkWiCkz.png",
  "https://i.imgur.com/m3bA0ev.png",
  "https://i.imgur.com/WYtigQ9.png",
];

perks.choices = perks.choices.map((choice, index) => ({
  ...choice,
  src: images[index],
}));

export default perks;
