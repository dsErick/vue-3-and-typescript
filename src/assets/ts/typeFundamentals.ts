const firstName = "Erick";
const lastName = "Silva";
const age = 20;
const isMarried = false;
const frameworksAndLanguages: string[] = [
    "JavaScript",
    "Vue",
    "PHP",
    "Laravel"
];

const fullName = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
};

const heroe: {
    name: string;
    age: number;
    activeAvenger: boolean;
    powers: string[];
} = {
    name: "Peeter Parker",
    age: 20,
    activeAvenger: true,
    powers: ["wall-crawl", "spider-sense"]
};

console.log(
    firstName,
    lastName,
    age,
    isMarried,
    frameworksAndLanguages,
    heroe,
    fullName(firstName, lastName)
);
