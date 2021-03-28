const startingLocation = {
  title: "Starting Location",
  description: [
    "Now where do you want to start your adventures in your new world? Like the worlds, you can either choose a random location by rolling a 1D6 or you could pay their cost and choose 1 yourself. Upgrades will cost Isekai points regardless if you chose a random location or not.",
  ],
  random: true,
  choices: [
    {
      title: "Prison",
      parent: true,
      description: [
        "You will start in a prison full of dangerous criminals. If you play your cards right you can make some friends in the underworld and make an epic escape together with your new friends. You could become their leader and go on epic anti-hero adventures. If you don't want to escape, it will take the guards several months to realize you're not suppose to be there. But once they realize they will release you.",
      ],
      cost: -1,
      multi: false,
      upgrades: [
        {
          title: "Specific Cellmates",
          description: [
            "You may choose what kind of cellmates you will share a cell with. For example a sexy female dark elf assassin with big tits, a charismatic male human rogue who likes to talk and a big towering male orc who got more muscles than brains.",
          ],
          cost: -2,
          multi: false,
        },
      ],
    },
    {
      title: "Battlefield",
      parent: true,
      description: [
        "You will appear in the middle of a raging battle. You will only have a few moments to figure out what is happening around you. As dangerous as your situation is, you have a golden opportunity before you. Pick a side and fight for it, at the end of the battle you will probably become a hero for that side. Earning the favor of a kingdom can be a useful thing indeed. Just hope you chose your side wisely.",
      ],
      cost: -2,
      multi: false,
      upgrades: [
        {
          title: "Specific Battle",
          description: [
            "You may choose what kind of battle you will appear during. For example you appear during a battle between the kings army and an army of rebels or a battle where a princess is ambushed by a group of assassins.",
          ],
          cost: -2,
          multi: false,
        },
      ],
    },
    {
      title: "Wilderness",
      parent: true,
      description: [
        "You will find yourself in the middle of a forest. You're in a random wilderness and the nearest towns will lie a couple of weeks away. On the bright side there is plenty of animals, plants and berries to eat and there are several sources of water spread out across the wilderness. So you won't have to starve. The wilderness is an excellent place to safely explore your powers and get a feel for them.",
      ],
      cost: -2,
      multi: false,
      upgrades: [
        {
          title: "Specific Environment",
          description: [
            "You may choose what kind of wilderness you appear in. For example you could appear in a tropical jungle full of rare and exotic monsters or a forest bordering an elven kingdom that is regularly patrolled by elven rangers.",
          ],
          cost: -2,
          multi: false,
        },
      ],
    },
    {
      title: "City",
      parent: true,
      description: [
        "Your adventures start in a city, a bustling metropolis full of strangers. You will blend right in. From here on, you can see where the world takes you or perhaps you have a specific goal in mind? Like joining the army, becoming a bounty hunter, joining some kind of guild, trying to get an audience with the ruler or just laying low while reviewing your different options.",
      ],
      cost: -2,
      multi: false,
      upgrades: [
        {
          title: "Specific City",
          description: [
            "You get to choose what kind of city you start in. For example, the capital city of the biggest kingdom, a hidden fairy village, a city full of injustice which is in need of a hero or a small town of kind hearted farmers.",
          ],
          cost: -1,
          multi: false,
        },
      ],
    },
    {
      title: "Ritual",
      parent: true,
      description: [
        "With a blinding flash of light you will appear during a summoning ritual or portal experiment. The summoner will take great interest in you, since summoning a person from another world is unheard of. They will make sure to care for you and provide you with food and shelter and act as your guide in the new world.",
      ],
      cost: -2,
      multi: false,
      upgrades: [
        {
          title: "Specific Summoner",
          description: [
            "You get to choose what kind of summoner summoned you and the circumstances of your summoning. For example the summoner is a cute little loli witch who goes to a magical school and she summoned you because she wanted a familiar.",
          ],
          cost: -2,
          multi: false,
        },
      ],
    },
    {
      title: "Home",
      parent: true,
      description: [
        "Instead of being teleported into your new world, you will be reincarnated. You will be given a new life and will be born into a new family, but you will retain your old memories. You may choose an age and I will time skip until you are that age. You will get all the memories of the time skipped period and during the time skip you will act like you would want to act. If you brought any companions along, they will be reborn as your siblings or childhood friends.",
      ],
      cost: -2,
      multi: false,
      upgrades: [
        {
          title: "Specific Family",
          description: [
            "You get to choose what kind of family you will have. For example, your father and mother are the rulers of the most powerful kingdom in the world.",
          ],
          cost: -2,
          multi: false,
        },
      ],
    },
  ],
};

const images = [
  "https://i.imgur.com/TDIF7DL.png",
  "https://i.imgur.com/L22mGPV.png",
  "https://i.imgur.com/qt9rlmL.png",
  "https://i.imgur.com/L7NMo2p.png",
  "https://i.imgur.com/r03rtma.png",
  "https://i.imgur.com/zjJl5fp.png",
];

startingLocation.choices = startingLocation.choices.map((choice, index) => ({
  ...choice,
  src: images[index],
}));

export default startingLocation;
