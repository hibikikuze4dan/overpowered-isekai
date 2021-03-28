import opening from "./opening";
import perks from "./perks";
import world from "./world";
import powers from "./powers";
import drawbacks from "./drawbacks";
import startingLocation from "./starting-location";

const stand_powers = {
  title: "Stand Power",
  description: [
    "Choose the Power for your Stand here.",
    "*You must have purchased the Stand upgrade for the Manifest Spirit power to use this section.*",
  ],
  random: false,
  choices: powers.choices.filter(
    (choice) => choice.title !== "Manifest Spirit"
  ),
};

const data = {
  opening,
  perks,
  world,
  starting_location: startingLocation,
  powers,
  stand_powers,
  drawbacks,
};

export default data;
