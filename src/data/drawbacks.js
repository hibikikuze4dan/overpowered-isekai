const drawbacks = {
  title: "Drawbacks",
  description: [
    "We are not done just yet. We got the best part left! You might call these options drawbacks, I call them high quality entertainment. If you pick some of these options, I'll reward you with some extra Isekai points.",
  ],
  random: false,
  choices: [
    {
      title: "Lost Sense",
      description: [
        "Choose 1 of the five senses (sight, hearing, smell, taste and touch). You lose that sense and can never regain it in any way, magical or non-magical. You may take this drawback multiple times, if you do you must choose a new sense each time.",
      ],
      cost: 10,
      exclude: [],
      include: [],
      multi: true,
    },
    {
      title: "Hero of Justice",
      description: [
        "Your powers can only be used for good. Good counts as protecting the weak and defenceless, defeating villains, saving princesses, stopping crime, self defence (as long as you didn't provoke the attacker), selflessly helping others ect.",
      ],
      cost: 5,
      exclude: ["Edgy Villain"],
      include: [],
      multi: false,
    },
    {
      title: "Edgy Villain",
      description: [
        "Your powers can only be used for evil. Evil counts as committing crimes, defeating heroes, wreaking havoc, furthering your own selfish ambitions and goals (becoming a beloved hero is not a selfish ambition or goal) ect.",
      ],
      cost: 10,
      exclude: ["Hero of Justice"],
      include: [],
      multi: false,
    },
    {
      title: "Power Source",
      description: [
        "You gain a medium sized item of your choice. For example a urn, dagger, crown, gauntlet, mirror, goblet or mask. You can only use your powers when your chosen item is within 1 meter of you. When you are using your powers, the object will glow brightly. Making it obvious to everyone else that your item is the source of your powers. If the item is destroyed or lost, you will regain it after 1 year.",
      ],
      cost: 10,
      exclude: [],
      include: [],
      multi: false,
    },
    {
      title: "Mysterious Stranger",
      description: [
        "Whenever you leave someone's field of vision for more than 5 hours, they will forget your face, name and everything about you. But they won't forget your actions, for example if you slay a dragon, then they will remember that a stranger slew a dragon. This quirk won't affect your Waifu, but to everyone else you will forever be a mysterious stranger.",
      ],
      cost: 15,
      exclude: [],
      include: [],
      multi: false,
    },
    {
      title: "Hungry",
      description: [
        "Your body has an unusually high metabolism, you will need to eat 3 times as much food as the average person. Using your powers will drain energy from you, the more you use your powers the hungrier you will get. Food which is summoned by magic or powers will no longer satiate your hunger.",
      ],
      cost: 5,
      exclude: [],
      include: [],
      multi: false,
    },
    {
      title: "Mary Sue",
      description: [
        "All of the powers you have chosen won't be given to you, they will be given to your Waifu. Your waifu will also become more dominant and assertive. Essentially turning her into the main character and you into her powerless sidekick. The following drawbacks will be transferred to your waifu if you have taken them: High Metabolism, Hero of Justice, Edgy Villain, Naked Power, Power Source, Nocturnal Powers, Nemesis, Elemental Alignment, Power Rotation and Rookie.",
      ],
      cost: 10,
      exclude: ["Bestow Skill"],
      include: ["Waifu"],
      multi: false,
    },
    {
      title: "Warmonger",
      description: [
        "You have a strong desire to do battle. It will be very tempting for you to challenge other people to duels and start fights. Sparring with others will do nothing for you, you desire real battle. If you ignore your desire for battle for more than a week you will become highly aggressive. If you ignore it for more than a month you will enter a frenzied state and go berserk. You will only regain control of yourself once you have either been subdued or killed someone or something.",
      ],
      cost: 12,
      exclude: [],
      include: [],
      multi: false,
    },
    {
      title: "Anime Quirk",
      description: [
        "You gain an anime themed quirk. You may choose what kind of quirk. For example you're a flat chested girl and are very insecure about it, you have the dreaded \"Ooohoho\" ojousama laugh, you feel compelled to explain your powers and abilities to your enemies during fights, you get minor and harmless nosebleeds when sexually excited, you're a tsundere or you're an elf girl and your ears are super sensitive, stroking them can make you orgasm. You may take this drawback up to 3 times.",
      ],
      cost: 3,
      exclude: [],
      include: [],
      multi: true,
    },
    {
      title: "Be The Girl",
      description: [
        "Your new body must be female or futanari. You will forever be unable to become male, so even if you gain shapeshifting powers, spells or potions you will only be able to assume female forms.",
      ],
      cost: 8,
      exclude: ["Be The Monster"],
      include: ["New You"],
      multi: false,
    },
    {
      title: "Be The Monster",
      description: [
        "Your new body must be that of a monster. For example you could be a basilisk, slime, dragon or dire wolf. No matter what monster you choose you will be capable of human speech. However you will never be able to assume a humanoid form again.",
      ],
      cost: 14,
      exclude: ["Be The Girl", "Naked Power"],
      include: ["New Race"],
      multi: false,
    },
    {
      title: "Naked Power",
      description: [
        "Wearing clothes will suppress your powers proportional to how much skin you are showing. For reference_ wearing a full suit of plate armor including a helmet would reduce the effectiveness of your powers by 98%. While wearing a bikini armor which barely covers your naughty bits including a pair of boots would limit your powers by 4%.",
      ],
      cost: 10,
      exclude: ["Be The Monster"],
      include: [],
      multi: false,
    },
    {
      title: "Nocturnal Powers",
      description: [
        "You can only use your powers during the night. Night counts as when the sun is down, keep in mind that nights are longer in the winter and shorter during the summer.",
      ],
      cost: 13,
      exclude: [],
      include: [],
      multi: false,
    },
    {
      title: "Sleepy",
      description: [
        "Your body will now require 12 hours of sleep. If you don't get your 12 hours of sleep you will be super sleepy and find it hard to concentrate. You would struggle to perform even the most basic of tasks.",
      ],
      cost: 5,
      exclude: [],
      include: [],
      multi: false,
    },
    {
      title: "Magic Dunce",
      description: [
        "You are incapable of learning and casting magic, in any way shape or form. If you were to try casting a spell, it would just blow up in your face. This won't affect your powers since they do not count as magic.",
      ],
      cost: 5,
      exclude: ["Magical Affinity"],
      include: [],
      multi: false,
    },
    {
      title: "Nemesis",
      description: [
        "You gain a powerful eternally young enemy who is driven by the sole purpose of ruining your life. Select 1 of your powers which you want to keep, then randomly select a power which you will lose and your nemesis will gain. Repeat this process until all of your powers have been claimed. If you kill your nemesis, they will lose 1 random power which you will gain and they will revive in a random safe location 10km away. The same is true if your nemesis kills you. Once your nemesis have no powers left, the next death will be permanent. The same is true for you. Note that your nemesis ultimate objective is not to fight you, it is to ruin your life. Even if they don't get any good combat powers, there are plenty of ways to undo a man. For example your nemesis could spread vile rumors about you, poison your food, commit crime and plant the evidence to frame you, steal your most treasured items or kiddnap, rape and impregnate your waifu. Your nemesis won't be affected by the drawback: Mysterious Stranger.",
      ],
      cost: 20,
      exclude: [],
      include: [],
      multi: false,
    },
    {
      title: "Part-timer",
      description: [
        "You will remain in your original world, but when you sleep your spirit and mind will be transferred to another body which exists in another world. When you go to sleep in the other world your consciousness will return to your original body in your original world. Time is paused for the world which your consciousness isn't currently in. You won't be affected by and/or have access to any of your perks, powers or drawbacks when your consciousness is inside your original body. You won't even have eternal youth in your original body. When you die in your original world your consciousness ill be permanently transferred to your other body. Unless you died by suicide or aranged the conditions which led to your death on purpose. For example running around on an active minefield, telling your friend to shoot you or going on a killing spree and then getting shot by the police.",
      ],
      cost: 5,
      exclude: [],
      include: [],
      multi: false,
    },
    {
      title: "Elemental Alignment",
      description: [
        "Choose 1 element, your choices are wind, water, earth and fire. Your powers gets a visual makeover which makes them more thematically aligned with your chosen element. When you use your powers in a biome which isn't aligned with the element you choose, your powers will be 75% less potent. While you can't even use your powers in biomes associated with the element opposed to the element you chose. Wind is opposed to earth, fire is opposed to water and vice versa. For reference here are some examples on biomes: forest (earth), jungle (earth), mountain (earth), underground cave (earth), grassland (wind), floating island (wind), the sky (wind), plains (wind), desert (fire), volcanic landscape (fire), savanna (fire), a burning biome (fire), island or coast (water), swamp (water), ocean or lake (water) and arctic landscape (water). You can't be harmed by environmental effects inside a biome that is aligned with your chosen element. For example if your element is fire, you could swim in a volcano's lava.",
      ],
      cost: 10,
      exclude: [],
      include: [],
      multi: false,
    },
    {
      title: "Power Rotation",
      description: [
        "You can only use 1 power each day, you can use the power as much as you want. But you can't use any other power. The power which you can use is determined at random. You won't get the same random power again, until all of your powers have been cycled through. Making the randomly selected power more random at the start of a new cycle and less random at the end of it.",
      ],
      cost: 17,
      exclude: [],
      include: [],
      multi: false,
    },
    {
      title: "Character Gacha",
      description: [
        "Instead of getting your ideal waifu or companion, you will have to name 9 different fictional characters. Then randomly select 1 of them, that fictional character will be your waifu or companion. Do this for all of your companions and waifus you have. Note that these characters won't have any special powers, skills or abilities which are typically associated with them. For example Toga Himiko can't use her quirk.",
      ],
      cost: 3,
      exclude: [],
      include: ["Waifu", "Fictional Friend"],
      multi: false,
    },
    {
      title: "Rookie",
      description: [
        "Randomly select 1 of your purchased powers. You start your adventures with only your randomly selected power. Your purchased powers represents your true potential, you can unlock these powers by going on adventures, fighting monsters and similar stuff. Unlocking your powers will take both time and effort.",
      ],
      cost: 10,
      exclude: [],
      include: [],
      multi: false,
    },
  ],
};

const images = [
  "https://i.imgur.com/GvL6dKA.png",
  "https://i.imgur.com/KFdlTwm.png",
  "https://i.imgur.com/f3gjnSP.png",
  "https://i.imgur.com/ICy4aE0.png",
  "https://i.imgur.com/i6rsmMD.png",
  "https://i.imgur.com/SRXdUlJ.png",
  "https://i.imgur.com/2rqaeJJ.png",
  "https://i.imgur.com/mz7fbOt.png",
  "https://i.imgur.com/lfqiLzd.png",
  "https://i.imgur.com/dPeBySP.png",
  "https://i.imgur.com/uIppVKX.png",
  "https://i.imgur.com/QNfzLrV.png",
  "https://i.imgur.com/Fv1c2k7.png",
  "https://i.imgur.com/t2BhDT0.png",
  "https://i.imgur.com/WrLtn4i.png",
  "https://i.imgur.com/If3bcqJ.png",
  "https://i.imgur.com/zNlwOc4.png",
  "https://i.imgur.com/yyeBACt.png",
  "https://i.imgur.com/uMBx1wp.png",
  "https://i.imgur.com/aHoJScO.png",
  "https://i.imgur.com/2Hr0V17.png",
];

drawbacks.choices = drawbacks.choices.map((choice, index) => ({
  ...choice,
  src: images[index],
}));

export default drawbacks;
