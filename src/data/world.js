const world = {
  title: "World",
  description: [
    "Now let's choose what kind of world you get isekai'd to. You can either choose a random world by rolling a 1D8 or you could pick 1 yourself, but choosing a world will cost Isekai points.",
  ],
  random: true,
  choices: [
    {
      title: "Agaria",
      description: [
        "Agaria is split up in multiple different kingdoms, which all have their own unique cultures and customs. But they all have one thing in common, they all employ the use of Adventurers Guilds. These guilds mainly work as social hubs for adventurers who pick up contract jobs known as quests from the kingdoms or private individuals. Quests usually involves contracted monster slaying as Agaria is plagued with monsters, but the Adventurers Guild accept all kinds of work as long as there is a reward for it. To avoid putting less experienced adventurers in danger by allowing them to accept any quest, the guilds have developed a universal system to measure an individual's strength in levels. After careful evaluation each quest is given a level requirement.",
      ],
      cost: -2,
      multi: false,
    },
    {
      title: "Kamitsuki",
      description: [
        "This is a world full of spirits, mortals and monsters. Mortals being the most numerous. There are many different mortal races. For example Oni, Kitsune, Neko, Usagi, Orochi and Humans. While mortals sometimes war among themselves, they live in harmony with the spirits of Kamitsuki, the spirits are often revered as gods and goddesses. Monsters, or Yökai as they are called, are in constant conflict with both spirits and mortals. In Kamitsuki there are 2 types of magic, Kami Utau and Taijutsu. Kami Utau shares many similarities with holy magic, the user draws their power from spirits which they have bonded to. They utilize chants and hand signs to cast powerful spells. Kami Utau users are often priests, oracles, sages and hermits. Taijutsu is far more common than Kami Utau. Practiced by samurai, shinobi, monks and nobles. It is best described as a mix of magic and martial art, there are many different styles of Taijutsu. For example Fire Fist Style, Rising Tide Style, 7 Moons and 7 Suns Style, Roaring White Tiger Style, Invisible Wind Blade Style, Black Lotus Spear Style, Iron Body Style ect.",
      ],
      cost: -2,
      multi: false,
    },
    {
      title: "Rhyvera",
      description: [
        "On the surface this world looks like your typical fantasy world. But if you dig a little deeper, you will realize that this world has a history shrouded in mystery. Rhyvera was once populated by a race which combined science and magic, their empire spanned across the entire world and across the very stars. But at their apex of glory they were all wiped out. There are multiple ancient ruins spread across Rhyvera, remnants of this lost civilisation. Most people keep away from these ruins, as they are often guarded by ancient magitech sentinels. But some bold adventurers raid these ruins in hope of finding priceless magitech artifacts. The success and survival rate for raiding a ruin is extremely low, but the fame, glory and wealth one could obtain ensures the continuation of these raids. While most adventurers would sell a magitech artifact if they found one and then live out the rest of their lives in luxury. There are those who collect magitech artifacts and arm themselves with them. They continue to raid these ruins to uncover the mysteries of the lost race, these adventurers are called seekers.",
      ],
      cost: -2,
      multi: false,
    },
    {
      title: "Calendria",
      description: [
        "There is no magic in Calendria, all of the worlds mana was siphoned long ago to create The Black Arms. The Black Arms are insanely powerful artifacts with magical properties. They were created during a time of need, when demons waged war upon Calendria and humanity was at the brink of extinction. Demons have long since been wiped out on Calendria. Each of the 7 legendary heroes who wielded The Black Arms later founded their own kingdom. Now the legendary weapons act as mere decoration, a symbol of the monarchs rightful rule. They also serve a deeper purpose, they are tools for keeping the balance between the 7 kingdoms. Ensuring an even power distribution between the different kingdoms. However if one of them would go missing, chaos and war would swiftly ensue. You could even destroy The Black Arms, to effectively return magic to the world.",
      ],
      cost: -2,
      multi: false,
    },
    {
      title: "Raxanix",
      description: [
        "Unlike the previous worlds, this world got some technology, you can expect stuff like muskets, trains and pocket watches. Mana is a finite resource in Raxanix. It is not naturally produced by living beings. Mana materializes deep beneath the earth as shimmering blue crystals. To fuel spells with mana, a magic user must purify the mana crystals into a liquid form and drink it. Magic users are quite powerful in this world and Alexandra Arden is the most powerful magic user of them all. She conquered all of Raxanix and named herself High Empress. Alexandra rules Raxanix with an iron fist, most people view her as a heartless tyrant who hordes mana to sustain her own youth and to entertain her own selfish pleasures. The academies of the empire teaches a different story, to them the High Empress is celebrated as Raxanix's savior, she is the one who brought an end to the mage wars and unified the world. Magic is heavily regulated in the empire, only a select few have the privilege of studying magic at one of the imperial mage academies. Unauthorized use of magic and unlawful possession of mana is punishable by death. Recently a rogue mage with several mana potions traveled across the world, healing the sick and feeding the poor with his magic. He was executed for this, there is now civil unrest and a rebellion is brewing.",
      ],
      cost: -2,
      multi: false,
    },
    {
      title: "Terra Omega",
      description: [
        "This is an alternate timeline universe of earth, it's pretty much the same as your original world, it's slightly more high tech. But Youtube exists, Nintendo sells Super Mario games and Belle Delphine sells her bath water. The main difference is that a small number of people are born with superpowers and you know what that means, don't you? Terra Omega has real superheroes and supervillains. Being a superhero is an actual profession and there exist several government funded superhero schools across the globe. The superhero schools have a fierce, but friendly rivalry going on and at the end of each year they compete against each other in an international superhero competition called Talent Open. Talent Open features many different types of competitions, including a fighting tournament. Those who do well in Talent Open are likely to receive sponsorships from big corporations and sidekick offers from established superheroes once they graduate. Perhaps you want to attend one of the superhero schools and become a licensed superhero? Maybe you want to be a strange and mysterious unlicensed vigilante? You could also become a villain and aim for world domination or maybe you just want to live a normal and comfortable life?",
      ],
      cost: -2,
      multi: false,
    },
    {
      title: "Heerion 4",
      description: [
        "How about a more technologically advanced world? Heerion 4, some call it the center of the universe while others call it a den of thieves. It's a planet where you can buy and sell everything. If there is a demand, there is supply. Slave girls, the latest stolen prototype weapons, intel, spaceships, illegal cybernetic implants and much much more. It's one of the few neutral zones left in this universe. The rest of the known universe is controlled by either the Terran Empire, the Azura Alliance, The Federation or the Tesamare. The Terran Empire is militaristic human supremacist faction, they seek to expand their borders through military conquest. The Azura Alliance is a technocratic faction made up of many alien races, their goal is to acquire knowledge and improve their technology. The Federation is a hyper capitalist trade federation made up of extremely wealthy corporations, both human and alien. The Tesamare is a crime syndicate, consisting of some of the most wanted criminals in the universe.",
      ],
      cost: -2,
      multi: false,
    },
    {
      title: "Another World",
      description: [
        "Not satisfied with any of the worlds I just described? The multiverse is a pretty big place, there literally exists an infinite amount of worlds. So instead of me describing more worlds to you, you could just loosely describe a world to me or pick a fictional world. I can find it and send you there. If you want, you could even choose earth, native isekais can be fun too. You also get to choose the timeline of the universe. For example if you pick earth you could choose to be sent back in time to the middle ages or world war 2.",
      ],
      cost: -5,
      multi: false,
    },
  ],
};

export default world;
