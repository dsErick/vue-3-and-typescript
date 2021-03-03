// Union operator |

type ButtonType = "primary" | "secondary" | "success" | "danger";

type ComicUniverse = "Marvel" | "DC";

interface Hero {
  name: string;
  age: number;
  activeAvenger: boolean;
  powers: string[];
  universe: ComicUniverse;
}

const buttonStyle: ButtonType = "primary";
const person: Hero = {
  name: "Tony Stark",
  age: 31,
  activeAvenger: false,
  powers: ["Rich", "Full-Tech Armor"],
  universe: "Marvel"
};
