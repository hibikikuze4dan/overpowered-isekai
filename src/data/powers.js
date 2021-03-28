const powers = {
  title: "Powers",
  description: [
    "Now this is the fun part, what kind of overpowered powers do you want anon? I can't have you running around like a weak powerless schmuck. You're gonna be overpowered as fuck! Main characters with overpowered powers make great isekai protagonists, as a NEET you should know this.",
  ],
  random: false,
  choices: [
    {
      title: "Giant Wielding",
      description: [
        "Any weapons which you use will become weightless in relation to yourself for as long as you wield them, while retaining their normal weight for everyone else. This will allow you to wield ridiculously oversized weapons which no man should be able to lift, let alone swing as if it were light as a feather.",
      ],
      cost: -15,
      multi: false,
      upgrades: [
        {
          title: "Living Fortress",
          description: [
            "This power will also affect any armor or shield you are wearing.",
          ],
          cost: -2,
          multi: false,
        },
        {
          title: "Heavy Metal",
          description: [
            "Any items affected by this power will have their weight increased by 50%.",
          ],
          cost: -1,
          multi: false,
        },
      ],
    },
    {
      title: "Infinite Mana",
      description: [
        "Unlike other magic users, your mana pool is infinite. This power won't teach you any spells, but because of your absurd amount of mana you will be able to physically manifest your mana. A feat which is sure to impress any magic user and grant you any kind of apprenticeship you would like.",
      ],
      cost: -10,
      multi: false,
      upgrades: [
        {
          title: "Hidden Power",
          description: [
            "With this upgrade you will be able to completely conceal your magical presence at will. Normally magic users are able to sense other magic users magical powers. Without this upgrade you will be like a beacon of power which will draw both wanted and unwanted attention to yourself.",
          ],
          cost: -3,
          multi: false,
        },
      ],
    },
    {
      title: "Multishot",
      description: [
        "Whenever you fire a ranged weapon, the projectile you fire will split into 13 projectiles.",
      ],
      cost: -15,
      multi: false,
      upgrades: [
        {
          title: "Homing Projectile",
          description: [
            "The ranged projectiles you fire will become slightly homing to your target. If you aim carefully prior to your shoot, you can pick out multiple targets for your copied projectiles.",
          ],
          cost: -2,
          multi: false,
        },
        {
          title: "Elemental Projectiles",
          description: [
            "Your ranged projectiles will be imbued with an element of your choice (fire, water, wind or earth), dealing elemental damage on impact.",
          ],
          cost: -2,
          multi: false,
        },
      ],
    },
    {
      title: "Harem Protagonist",
      description: [
        "Beautiful members of the gender which you are attracted to, can't help but to fall in love with you. While your love interests might fight for your attention and love and develop rivalries, they won't suffer any negative effects from their jealousy, like depression etc.",
      ],
      cost: -5,
      multi: false,
      upgrades: [
        {
          title: "World of Waifus",
          description: [
            "You are much more likely to encounter attractive people of the gender which you are attracted to.",
          ],
          cost: -2,
          multi: false,
        },
        {
          title: "Harem Life",
          description: [
            "Fate will conspire to frequently put you into cliched harem anime situations. For example a female adventurer might bump into you, trip and knock you down. Resulting in her lying on top of you with her breasts pressed against your face.",
          ],
          cost: -2,
          multi: false,
        },
      ],
    },
    {
      title: "Instant Mastery",
      description: [
        "Whenever you use any kind of item which is not a weapon, you will be able to use the item with the combined skill of all of its previous users. For example buy an old fishing rod and you will be able to fish like a master fisherman or pick up a used map and you will know how to navigate it.",
      ],
      cost: -10,
      multi: false,
      upgrades: [
        {
          title: "Weapon Mastery",
          description: ["This power will also affect weapons."],
          cost: -3,
          multi: false,
        },
        {
          title: "Dual Wielding",
          description: [
            "Dual wielding the same type of item will grant you the combined skill of both of the item's previous users. You also become ambidextrous.",
          ],
          cost: -2,
          multi: false,
        },
      ],
    },
    {
      title: "Restore State",
      description: [
        "You can restore the physical state of anything you touch to a previous state of your choice. This power has many uses, for example you can heal yourself, you can make someone younger, you can repair broken objects or you can revert a sword to it's glowing hot state when it was forged.",
      ],
      cost: -15,
      multi: false,
      upgrades: [
        {
          title: "Mind Restore",
          description: [
            "You can now restore the mental and spiritual state of anything you touch. This would among other things allow you to erase other people's memories and resurrect dead people.",
          ],
          cost: -5,
          multi: false,
        },
        {
          title: "Future Past",
          description: [
            "You will now be able to restore anything you touch to a future state.",
          ],
          cost: -3,
          multi: false,
        },
      ],
    },
    {
      title: "Monster Maker",
      description: [
        "Each day you gain a certain amount of wild power, you can use wild power to create non- humanoid monsters. When you create a monster you get to design it and give it beneficial perks, abilities etc which costs wild power. Generally the more wild power you spend on a monster the more powerful it will be. For reference 1 days worth of wild power would allow you to create a pack of wolves or 1 giant spider, 4 days for a hellhound, 7 days for a hydra, 10 days for a great wyrm and 14 days for a mature dragon. By default your monsters will be neutral towards you. If you want them to follow your commands you will either need to tame them naturally or spend 25% more wild power to make them permanently loyal towards you. You can store a maximum of 20 days worth of wild power.",
      ],
      cost: -20,
      multi: false,
      upgrades: [
        {
          title: "Humanoid Monsters",
          description: [
            "You can now create humanoid monsters, like monster girls.",
          ],
          cost: -2,
          multi: false,
        },
      ],
    },
    {
      title: "Favored Enemy",
      description: [
        "Choose 1 enemy, for example dragons, vampires, demons, witches or goblins. You become an expert at fighting your chosen enemy and gain special skills and abilities which will help you fight your chosen enemy. These skills and abilities will be stronger the more specific your chosen enemy is. For example choosing humans or males as you favored enemy would give you some useful skills and abilities that would give you a slight advantage against your chosen enemy. While choosing dragons, vampires or goblins would give you the skills and abilities to make you an unstoppable warrior god while fighting your favored enemy. You may purchase this option multiple times.",
      ],
      cost: -5,
      multi: true,
      upgrades: [
        {
          title: "Arch Enemy",
          description: [
            "You may name anyone as your arch enemy, you may only have 1 arch enemy at the same time and you can only change arch enemy once every month. All of your powers are twice as effective when used against your arch enemy.",
          ],
          cost: -3,
          multi: false,
        },
      ],
    },
    {
      title: "Replicate Item",
      description: [
        "You gain the power to summon spectral copies of any item you have touched after gaining this power. Your replicas will have an ethereal epperance, but they will be solid and tangible. This power has many uses, for example you could summon a replica of a legendary magical sword, summon rare and valuable magical potions, summon a loaded cannon, summon a ship, summon miscellaneous items like torches, ropes or lockpicks. However if the replicated items remain 1 minute outside of your line of sight the item will cease to exist. This makes copied food and drink useless for satiating long term hunger and thirst and copied potions you drink will only last for 1 minute.",
      ],
      cost: -15,
      multi: false,
      upgrades: [
        {
          title: "Perfect Replication",
          description: [
            "The items you replicate are now perfect copies. They won't disappear, unless you want them to.",
          ],
          cost: -4,
          multi: false,
        },
      ],
    },
    {
      title: "Slave Crest",
      description: [
        "By performing an elaborate ritual upon a living being, you can place or remove a slave crest on them. Living beings with slave crests will be unable to resist your commands. You may choose what shape your slave crest will take. For example it could be an ornate design, a rune or a simple heart.",
      ],
      cost: -10,
      multi: false,
      upgrades: [
        {
          title: "Conditioning",
          description: [
            "Whenever your slaves obey you, they will feel joy and happiness. This will slowly turn even the most headstrong slave into a loyal servant who only lives to serve you.",
          ],
          cost: -4,
          multi: false,
        },
      ],
    },
    {
      title: "Save and Load",
      description: [
        "You gain the power to create and delete save slots, you can load a save slot to send your consciousness back (or forward) in time to that specific moment.",
      ],
      cost: -10,
      multi: false,
      upgrades: [
        {
          title: "Autosave",
          description: [
            "You can create automatic save slots, which will create save slots if a certain requirement is fulfilled. For example 1 hour has passed or at the start of a fight.",
          ],
          cost: -1,
          multi: false,
        },
        {
          title: "Autoload",
          description: [
            "Instead of dying, you will automatically load 1 of your save slots, you may choose which.",
          ],
          cost: -2,
          multi: false,
        },
      ],
    },
    {
      title: "Character Editor",
      description: [
        "By sitting down and concentrating you can enter a mental space inside your mind. This mind space allows you to freely alter your body into any humanoid shape you want, but you can't increase your body size more than 2 times your original size. You can save and load different appearances and you can also choose to copy someone else's appearance.",
      ],
      cost: -10,
      multi: false,
      upgrades: [
        {
          title: "Edit",
          description: [
            "You can now alter other people's bodies, by touching them while you enter your mental space.",
          ],
          cost: -3,
          multi: false,
        },
      ],
    },
    {
      title: "Throne of Creation",
      description: [
        "You can summon a magical throne of creation, which cannot be moved. When you sit atop your throne you won't need to sleep and you will be able to freely manipulate the land and terrain within the throne's area of control. For example you can build castles out of diamond, make forests sprout up from nowhere, turn stone into gold, carve out rivers, summon mighty volcanoes and create edible plants from nothing. You can also astral project yourself within the throne's area of control. The area of control will start at a radius of 2 meters from the throne and grow larger by a radius of 3 meters for each day you have touched your throne. If you leave your throne for more than 6 hours per day, the throne will crumble to dust and all of your changes will become undone.",
      ],
      cost: -20,
      multi: false,
      upgrades: [
        {
          title: "Eternal Throne",
          description: [
            "Your throne will no longer crumble, unless you summon a second throne.",
          ],
          cost: -5,
          multi: false,
        },
        {
          title: "Divine Creation",
          description: [
            "The creations you make are no longer limited by the laws of physics. For example change the color of water, create ice as hard as steel which will never melt or create floating islands.",
          ],
          cost: -3,
          multi: false,
        },
      ],
    },
    {
      title: "Automatic Action",
      description: [
        "You can create, alter and delete pre-programed responses which your body will perform in response to specific circumstances. For example, if someone makes a high vertical sword cut against your torso, you could program your body to block the attack with a sideway parry. With enough programming you could make yourself impossible to hit. Another use of this power would be to program your body to hold your bow and arrow in perfect aim in relation to the head of the person you are pointing your arrow towards. Giving you something akin to an aimbot.",
      ],
      cost: -10,
      multi: false,
      upgrades: [
        {
          title: "Autocast",
          description: [
            "You can now program your mind's responses to specific circumstances. This would allow you to automatically cast spells. For example casting a magical barrier when an arrow is fired at you or program 1 of your other powers to be activated in response to a specific circumstance.",
          ],
          cost: -2,
          multi: false,
        },
      ],
    },
    {
      title: "Manifest Spirit",
      description: [
        "Choose 1 emotion, for example anger, greed, joy, sadness, lust, disgust, fear, serenity or embarrassment. You gain the power to harness that emotion and summon it as a physical manifestation. This spiritual avatar will instinctively carry out your will and the spirit's power will be based on your emotional state. For example if you choose anger and you're pissed off beyond comprehension then your spirit will possess the strength to bring down a god, but if you aren't angry at all the spirit will be slightly stronger than a squirrel.",
      ],
      cost: -13,
      multi: false,
      upgrades: [
        {
          title: "Stand",
          description: [
            "Choose 1 power and as many upgrades as you want for that power, your spiritual avatar gain your chosen power. The cost of this upgrade is equal to the chosen power's cost minus 5, including the cost for any upgrades which you chose. Your spiritual avatar's lifeforce is now tied to yours, if they suffer any damage you will sustain the same damage and vice versa.",
          ],
          cost: 0,
          multi: false,
        },
        {
          title: "Greater Spirit",
          description: [
            "Choose a second emotion. Your spiritual avatar draws power from both of your chosen emotions.",
          ],
          cost: -5,
          multi: false,
        },
      ],
    },
    {
      title: "Consume and Evolve",
      description: [
        "By consuming a creature's DNA you can mutate your body to become more like that creature. You choose exactly what mutations you get. For example you could mutate your right arm into that of a demon, that arm would gain fire resistance and increased strength. You could mutate your eyes into basilisk eyes, gaining a petrifying gaze. You could add the wings of a pegasus to gain the ability to fly.",
      ],
      cost: -20,
      multi: false,
      upgrades: [
        {
          title: "Hybridization",
          description: [
            "Whenever you consume new DNA which contains traits which your mutations already possess. Then those traits will be improved by the new DNA. For example having a dragon wings and consuming a wyvern's DNA would improve your flight capabilities as well as increasing the hardness of your scales.",
          ],
          cost: -5,
          multi: false,
        },
      ],
    },
    {
      title: "Force of Many",
      description: [
        "Choose 1 type of attack, for example kicking, punching, swinging a sword etc. Whenever you perform your chosen type of attack, that attack will hit with the cumulative force of every attack of that type which you have performed since you gained this power. For example if you have kicked 9999 times, then your next kick will hit with the force of 10000 kicks.",
      ],
      cost: -15,
      multi: false,
      upgrades: [
        {
          title: "Hold Back",
          description: [
            "You can choose to reduce the cumulative force of your attack, to any number which you have previously reached. This is great if you want to go easy on your enemies and don't want to kill them.",
          ],
          cost: -2,
          multi: false,
        },
        {
          title: "Multiplied Force",
          description: [
            "Your chosen type of attack will now hit with twice the cumulative force.",
          ],
          cost: -2,
          multi: false,
        },
      ],
    },
    {
      title: "Magical Affinity",
      description: [
        "Choose 1 type of magic, for example Elementalism, Necromancy, Demonology, Holy Magic, Divination, Summoning, Nature Magic, Enchanting or Eromancy. You gain a powerful magical affinity for your chosen magic type. You will be able to learn spells from your chosen magic type 2 times faster and when you cast them they will be twice as potent.",
      ],
      cost: -20,
      multi: false,
      upgrades: [
        {
          title: "Magical Prodigy",
          description: [
            "Choose 1 additional type of magic which you gain an affinity for. You may purchase this upgrade multiple times.",
          ],
          cost: -3,
          multi: true,
        },
        {
          title: "Magic Resistance",
          description: [
            "You gain a 80% magic resistance to any spells which you have an affinity for.",
          ],
          cost: -2,
          multi: false,
        },
      ],
    },
    {
      title: "Extra Lives",
      description: [
        "Not a fan of dying? Take this power and gain 3 extra lives. Whenever you die you will lose 1 extra life and resurrect at a random safe location nearby. You regain lost extra lives after 1 year of time has passed.",
      ],
      cost: -5,
      multi: false,
      upgrades: [
        {
          title: "Resurrect",
          description: [
            "You can spend your extra lives to resurrect other people.",
          ],
          cost: -1,
          multi: false,
        },
        {
          title: "Immortality",
          description: [
            "If you die and have no extra lives left, you will resurrect after 10 years. While being dead you won't experience time. It will simply feel like you got resurrected just after you died.",
          ],
          cost: -2,
          multi: false,
        },
      ],
    },
    {
      title: "Aura of Terror",
      description: [
        "When activated you become surrounded by an aura of fear, granting you a frightful presence not unlike that of a terrifying dragon. Even the bravest of souls would be stopped dead in their tracks by the sheer amount of killing intent that is radiating from you.",
      ],
      cost: -10,
      multi: false,
      upgrades: [
        {
          title: "Overwhelming Fear",
          description: [
            "Your aura is powerful enough to make weak willed individuals faint.",
          ],
          cost: -3,
          multi: false,
        },
        {
          title: "Directed Menace",
          description: [
            "You may selectively choose who will be affected by your aura.",
          ],
          cost: -2,
          multi: false,
        },
      ],
    },
    {
      title: "World Portal",
      description: [
        "Choose a second world in the World section, you can't choose Another World. You have the power to open and close portals between your 2 chosen worlds.",
      ],
      cost: -7,
      multi: false,
      upgrades: [
        {
          title: "Planar Portal",
          description: [
            "You can now open and close portals across the multiverse. This means that you will be able to visit any fictional universe you know as well as returning home to your original world.",
          ],
          cost: -13,
          multi: false,
        },
        {
          title: "Teleportation",
          description: [
            "You can now instantly teleport yourself to any place you have visited or anywhere within your line of sight.",
          ],
          cost: -7,
          multi: false,
        },
      ],
    },
    {
      title: "Energy Barrier",
      description: [
        "You can summon an impenetrable disk like barrier within 3 meters of your body. Each time you summon it you must choose how big it will be. For example 1 meter diameter, 20 meter diameter, 100 meter diameter or 5000 meter diameter. The barrier will last for up to an equal amount of its diameter in seconds and have a cooldown equal to half its diameter in seconds. For example, if the barrier is 2 meter diameter it will last for up to 2 seconds and when it vanishes you won't be able to use this power again until 1 second has passed.",
      ],
      cost: -7,
      multi: false,
      upgrades: [
        {
          title: "Reflective Barrier",
          description: [
            "Any projectiles that hit your barrier will bounce back at the attacker.",
          ],
          cost: -3,
          multi: false,
        },
        {
          title: "Alter Shape",
          description: [
            "You may choose what shape your barriers will take when you summon them. For example you can summon a dome like barrier for better protection or you could summon a barrier with a net shape for walling of enemies and making the most out of your barrier size.",
          ],
          cost: -3,
          multi: false,
        },
      ],
    },
    {
      title: "God Fist",
      description: [
        'Choose 1 concept, like distance, damage, ugliness or magic, but you can\'t choose omnipotence. When activated this power will make your fists glow and you will have the power to destroy your chosen concept by punching it. For example if your chosen concept is distance, then you could "punch away" the distance between you and your enemy, essentially teleporting your enemy to you or teleporting you to your enemy, whichever you choose. Note that your punch must make contact with your chosen concept for this power to work.',
      ],
      cost: -15,
      multi: false,
      upgrades: [
        {
          title: "Destruction and Creation",
          description: [
            "This power will now work differently for your different fists. 1 fist will destroy your chosen concept while other will create your chosen concept. For example punches from your left hand would destroy damage, essentially healing anything or anyone you punch. While punches from your right hand would create damage, causing massive destruction on anything or anyone you punch.",
          ],
          cost: -5,
          multi: false,
        },
      ],
    },
    {
      title: "Chrono Break",
      description: [
        "This power allows you to stop time for everyone except yourself. While time is stopped, a 2 meter diameter time circle will appear on the ground beneath you. If the majority of your body moves outside of the time circle, this power will deactivate and time will resume and you won't be able to use this power until 1 second has passed. You do not have to step outside of the circle to make time resume, you can deactivate this power at will. Stuff like thrown items, ranged projectiles, summoned pets and spells will get time stopped if they are outside of the time circle.",
      ],
      cost: -20,
      multi: false,
      upgrades: [
        {
          title: "Time Lord",
          description: [
            "In the unlikely event someone else stops time, this power will automatically activate. The time circle beneath you will be increased to 6 meter diameter if this happens.",
          ],
          cost: -2,
          multi: false,
        },
        {
          title: "Fracture Time",
          description: [
            "When you activate this power, you can choose to not stop time for specific individuals. If they aren't within your time circle they won't be able to move, but they will still remain conscious.",
          ],
          cost: -2,
          multi: false,
        },
      ],
    },
    {
      title: "Razor Trail",
      description: [
        "Whenever you swing a sharp object like a sword or a claw, the sharp section of the object will leave a trail of energy behind it. The trail will act as an indestructible razor sharp static force to everyone but yourself. However the trail will only last for 2 seconds. You will be able to attack and defend in a single action. With clever use, you could weave a deadly web of sword cuts that would leave your enemy with no opening to attack.",
      ],
      cost: -10,
      multi: false,
      upgrades: [
        {
          title: "Slash Wave",
          description: [
            "The trail can now be fired like a ranged projectile attack. The projectile will travel at a speed of 54 kilometer per hour, which allows it to travel 30 meters before it dissolves.",
          ],
          cost: -5,
          multi: false,
        },
        {
          title: "Invisible Trail",
          description: ["The trail is now invisible to everyone except you."],
          cost: -3,
          multi: false,
        },
      ],
    },
    {
      title: "Affix Object",
      description: [
        "You have the power to affix the molecules of an object you touch to maintain its current position until you release it. Effectively freezing the position of the object, turning it indestructible and making it immovable. For example, you can use this power to stop multiple thrown swords, turn your normal clothes into an indestructible and immovable armor or affixing a bunch of sticks in the air to make a climbable ladder.",
      ],
      cost: -15,
      multi: false,
      upgrades: [
        {
          title: "Affix Momentum",
          description: [
            "When you release an object from this power you can choose to allow the object to retain its original momentum and any momentum which was added to it while it were affixed. Among other things, this would allow you to line up a couple of affixed arrows and spells. Then use them like a trap and release them when someone stands in their line of fire.",
          ],
          cost: -2,
          multi: false,
        },
      ],
    },
    {
      title: "Swift Learning",
      description: [
        "Anything that makes it into your short-term memory will be added to your long-term memory and your muscle memory will be more malleable during training exercises. This will basically make you really good at learning, memorizing and mastering new things. For example take a couple of fencing lessons and you're guaranteed to be best in class. Your amazing learning speed is sure to bring you lots of attention, admiration and envy from your fellow students.",
      ],
      cost: -5,
      multi: false,
      upgrades: [
        {
          title: "Perfect Memory",
          description: [
            "Anything that makes it to your long-term memory stays there and won't ever be forgotten.",
          ],
          cost: -3,
          multi: false,
        },
        {
          title: "Apply Knowledge",
          description: [
            "The first time you use something you have learned, outside of a training setting will be twice as potent.",
          ],
          cost: -1,
          multi: false,
        },
      ],
    },
    {
      title: "Reality Warping",
      description: [
        "Choose 1 material. Whenever you activate this power you must target 1 material. Your targeted material's consistency will be altered to match your chosen material's consistency in relation to yourself and anyone you touch. For example if your chosen material is water you can use this power to alter the consistency of glass to be that of water and simply walk through a window. If your chosen material is rock, you can alter the consistency of water and walk on water as if it was made out of rock. If your chosen material is glass you can alter the consistency of metal and smash it apart.",
      ],
      cost: -15,
      multi: false,
      upgrades: [
        {
          title: "World Warping",
          description: [
            "You can choose to have your targeted material's consistency altered in relation to everyone and/or everything within 100 meters of your body. An example of using this power would be to wear spiked ice climbing boots and then alter the floor's consistency to that of ice. Your enemies would slip and slide on the floor, while you wouldn't be affected thanks to your spiked boots.",
          ],
          cost: -5,
          multi: false,
        },
        {
          title: "Reality Bender",
          description: [
            "Choose 1 additional material which this power can alter a material's consistency to. You may purchase this upgrade multiple times.",
          ],
          cost: -3,
          multi: true,
        },
      ],
    },
    {
      title: "Rule of Cool",
      description: [
        'Ever wanted to do something really cool, but then you realize how impractical it would be? Like using a super long bladed whip sword, wielding 3 swords (1 in each hand and 1 in your mouth), juggle throwing multiple spinning sword axe boomerangs. Get this power and practicality will be a thing of the past! With this power probability, logic and physics will bend in favor of you doing cool shit. Doing cool shit will be slightly more effective than doing things the "normal way". For example, if a screaming enemy is charging you from the back and you are armed with a throwing knife, it would be more effective to nonchalantly throw the knife at your enemy without turning around to aim, than it would be to actually turn around and aim.',
      ],
      cost: -4,
      multi: false,
      upgrades: [
        {
          title: "Stylish",
          description: [
            "Whatever you do you will look absolutely amazing doing it. The way you move, talk and fight will make you look like a natural badass. Especially the way you fight. Your moves will be super flashy and awesome to behold. Alternatively they could look more gritty and be cool through pure brutal efficiency.",
          ],
          cost: -2,
          multi: false,
        },
        {
          title: "Aura of Coolness",
          description: [
            "This power will also affect your companions and/or your waifu.",
          ],
          cost: -1,
          multi: false,
        },
      ],
    },
    {
      title: "Accelerate",
      description: [
        "This power basically increases your speed and reaction time the longer you fight. At activation you start at gear 1, which will double your speed. After 10 seconds of use you will reach gear 2 and become 4 times faster than normal and your sweat will begin to evaporate into mist. After 40 seconds of use you reach gear 3, you can now jump short distances at a speed akin to teleportation and your body will be radiating steam. After 2 minutes of use you reach gear 4, you now move at a speed which is hard to detect for the human eye. After 3 minutes of use you reach gear 5, your speed is further increased and when you move you will create multiple afterimages. After 4 minutes of use you reach gear 6, you now move at a speed which gives you the illusion of time being stopped. You will only have less than a nanosecond in this state. But to you it will feel like roughly 1 minute, then you will collapse and lose consciousness. When you deactivate this power it's deactivation is delayed, until just before you reach the next gear. This power has a cooldown equal to the activation time of the highest gear you reached when deactivating it.",
      ],
      cost: -10,
      multi: false,
      upgrades: [
        {
          title: "Ignition",
          description: [
            "At activation you may choose which gear you start in. Activation times will be changed accordingly.",
          ],
          cost: -3,
          multi: false,
        },
      ],
    },
    {
      title: "Bestow Skill",
      description: [
        "By taking on an apprentice, you can slowly over several years of training and tutoring teach them to use your powers.",
      ],
      cost: -5,
      multi: false,
      upgrades: [
        {
          title: "Grand Master",
          description: ["You can teach multiple apprentices at once."],
          cost: -3,
          multi: false,
        },
        {
          title: "Great Teacher",
          description: [
            "Instead of taking several years, your training will only take several months.",
          ],
          cost: -4,
          multi: false,
        },
      ],
    },
    {
      title: "Invisibility",
      description: [
        "You have the power to turn invisible at will. While invisible you can turn others invisible by touching them.",
      ],
      cost: -10,
      multi: false,
      upgrades: [
        {
          title: "Conceptual Invisibility",
          description: [
            "Once invisible your body heat and scent will be masked. You will leave no footprints and even the sound you make will be muted, unless you don't want it to.",
          ],
          cost: -3,
          multi: false,
        },
        {
          title: "Aether Form",
          description: ["You're immune to magic when invisible."],
          cost: -10,
          multi: false,
        },
      ],
    },
    {
      title: "Sexual Prowess",
      description: [
        "Ever wanted to be really good at sex? With this power you will basically become a god in bed. Your sexual skills will be second to none and borderline supernatural.",
      ],
      cost: -3,
      multi: false,
      upgrades: [
        {
          title: "Porn Physics",
          description: [
            "While doing lewd things the laws of physics will be suspended in favor of porn and hentai tropes you like. For example you can fuck people silly or when cumming your penis sprays cum like a fire hose.",
          ],
          cost: -3,
          multi: false,
        },
      ],
    },
    {
      title: "Clone",
      description: [
        "You gain the power to summon and unsummon clones of yourself. Your clones will be submissive towards you and blindly follow your command. The clones will possess all of your powers and drawbacks. You will be able to summon 2 different types of clones, permanent clones and temporary clones. Permanent clones lasts forever and temporary clones will disappear after 1 minute. You can only summon 1 permanent clone per day. While temporary clones can be summoned at a rate of 2 clones per minute. You and your clones will share this limitation. For example if you summon a permanent clone, then your permanent clone won't be able to summon another permanent clone the same day as they were summoned.",
      ],
      cost: -20,
      multi: false,
      upgrades: [
        {
          title: "Hive Mind",
          description: [
            "You and your clones will be telepathically linked to each other and your mind will expand into a hive mind, which will control all of your clones and your original body.",
          ],
          cost: -5,
          multi: false,
        },
      ],
    },
    {
      title: "Redistribute Stat",
      description: [
        "This power allows you to lower 1 of your stats (strength, dexterity, constitution, luck, charisma, intelligence and wisdom). You get to decide how much you lower it, but don't lower it more than 80% or it might get ugly. Like if you reduce your strength by an extreme amount then your heart won't have the strength to keep beating. The lowered amount of the stat is stored inside your body. You can at any time boost 1 or more of your stats using your stored stats. For example when you sleep you can lower your strength to become as weak and feeble as an old man and then become roughly twice as strong during the day. Or you could save up your strength during a month and then use it up in a burst of power to gain godlike strength for a short time.",
      ],
      cost: -13,
      multi: false,
      upgrades: [
        {
          title: "Drain Stat",
          description: [
            "By touching someone you can drain 1 of their stats, reducing it by up to 80% for up to 24 hours. The drained amount of the stat will be stored in you. You can only do this once per day.",
          ],
          cost: -10,
          multi: false,
        },
      ],
    },
    {
      title: "Telekinesis",
      description: [
        "You can now move and levitate objects and living beings with your mind. The maximum telekinetic force you can exert is equal to 50% of your physical strength. Some of the other powers requires you to touch or wield something or someone in order for the power to work. Using telekinesis on an object or person can fulfill those requirements.",
      ],
      cost: -10,
      multi: false,
      upgrades: [
        {
          title: "Telepathy",
          description: [
            "You can read other people's minds and communicate with them through telepathy. Your ability to locate and communicate with people over great distances. Is dependent on how well you know the person. You could communicate with a close friend pretty easy, but an unknown person is next to impossible to locate among all the other minds.",
          ],
          cost: -5,
          multi: false,
        },
        {
          title: "Mind Over Matter",
          description: [
            "The maximum telekinetic force you can exert is based on your willpower, wisdom and intelligence. With enough willpower you could crush a tank.",
          ],
          cost: -5,
          multi: false,
        },
      ],
    },
  ],
};

const images = [
  "https://i.imgur.com/XQ9nqIa.png",
  "https://i.imgur.com/m9aRCab.png",
  "https://i.imgur.com/HAy0UnP.png",
  "https://i.imgur.com/DbEDWvO.png",
  "https://i.imgur.com/tLnARlF.png",
  "https://i.imgur.com/lPWGLkz.png",
  "https://i.imgur.com/XwoiD0F.png",
  "https://i.imgur.com/bqfq61O.png",
  "https://i.imgur.com/vYEFSjv.png",
  "https://i.imgur.com/SReNfAF.png",
  "https://i.imgur.com/CIReaYy.png",
  "https://i.imgur.com/yRem9b0.png",
  "https://i.imgur.com/0A1bM2K.png",
  "https://i.imgur.com/EOv7687.png",
  "https://i.imgur.com/SVQ8YPA.png",
  "https://i.imgur.com/Ob2aZYJ.png",
  "https://i.imgur.com/IQnVFpG.png",
  "https://i.imgur.com/JWJEeAM.png",
  "https://i.imgur.com/76WCoSR.png",
  "https://i.imgur.com/bKjhKXb.png",
  "https://i.imgur.com/Ra6popF.png",
  "https://i.imgur.com/0qLPS26.png",
  "https://i.imgur.com/E3FLkDH.png",
  "https://i.imgur.com/4rDjjnI.png",
  "https://i.imgur.com/piB3QYk.png",
  "https://i.imgur.com/9yesmtB.png",
  "https://i.imgur.com/XjcLSE8.png",
  "https://i.imgur.com/WBvB6wZ.png",
  "https://i.imgur.com/EDZuZ9i.png",
  "https://i.imgur.com/HzU4Wzn.png",
  "https://i.imgur.com/vdEtJ8U.png",
  "https://i.imgur.com/TSuZ8At.png",
  "https://i.imgur.com/YLDuaiL.png",
  "https://i.imgur.com/80qzSYV.png",
  "https://i.imgur.com/9ZjUYAY.png",
  "https://i.imgur.com/YKZsPtP.png",
];

powers.choices = powers.choices.map((choice, index) => ({
  ...choice,
  src: images[index],
}));

export default powers;
