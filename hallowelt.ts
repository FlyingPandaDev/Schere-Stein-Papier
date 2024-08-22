let selection = "Schere";
let options = ["Schere", "Stein", "Papier"];
let secondSelection = options[Math.floor(Math.random() * options.length)]; // theoretisch laesst sich das Ganze auch "einfacher" machem - hard coded choice

console.log("Deine Auswahl: " + selection);
console.log("Gegner Auswahl: " + secondSelection);

if (selection === secondSelection) {
  console.log("Unentschieden!");
} else if (selection === "Schere" && secondSelection === "Papier") {
  console.log("Du hast gewonnen!");
} else if (selection === "Schere" && secondSelection === "Stein") {
  console.log("Du hast verloren!");
} else if (selection === "Papier" && secondSelection === "Schere") {
  console.log("Du hast gewonnen!");
} else if (selection === "Papier" && secondSelection === "Stein") {
  console.log("Du hast verloren!");
} else if (selection === "Stein" && secondSelection === "Schere") {
  console.log("Du hast verloren!");
} else if (selection === "Stein" && secondSelection === "Papier") {
  console.log("Du hast gewonnen!");
} else {
  console.log("Bitte geben Sie eine gültige Wahl (Schere, Stein, Papier) ein!");
}
