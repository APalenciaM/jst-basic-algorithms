//1

let hacker1 = "Anna";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Carlota";
console.log(`The navigator's name is ${hacker2}`);

//2

let hacker1_count = hacker1.length;
let hacker2_count = hacker2.length;

hacker1_count > hacker2_count ? console.log(`The driver has the longest name, it has ${hacker1_count} characters.`) :
  hacker1_count < hacker2_count ? console.log(`It seems that the navigator has the longest name, it has ${hacker2_count} characters.`) :
    console.log(`Wow, you both have equally long names, ${hacker1_count} characters!`);

//3
console.log(...hacker1.toUpperCase().split(""));
console.log(hacker2.split("").reverse().join(""));

hacker1 < hacker2 ? console.log("The driver's name goes first.") :
  hacker1 > hacker2 ? console.log("Yo, the navigator goes first definitely.") :
    console.log("What?! You both have the same name?");

//Bonus 1

let longtext = 'Lorem fistrum nostrud diodenoo al ataquerl. La caidita commodo adipisicing ad. Consequat condemor ad ese que llega nisi. Llevame al sircoo a peich et de la pradera ese que llega dolore quis va usté muy cargadoo a wan dolore voluptate. Al ataquerl se calle ustée occaecat no te digo trigo por no llamarte Rodrigor no puedor pecador dolor irure de la pradera. Pupita nostrud no te digo trigo por no llamarte Rodrigor sit amet dolore va usté muy cargadoo labore llevame al sircoo reprehenderit la caidita la caidita.\nNo puedor commodo veniam condemor torpedo. Me cago en tus muelas hasta luego Lucas esse ese que llega no te digo trigo por no llamarte Rodrigor aute esse torpedo ullamco incididunt laboris. Jarl magna ahorarr me cago en tus muelas ad tiene musho peligro. La caidita apetecan labore reprehenderit pupita a peich al ataquerl. Papaar papaar torpedo sit amet officia diodenoo te voy a borrar el cerito caballo blanco caballo negroorl elit a wan. A wan sit amet la caidita me cago en tus muelas papaar papaar quis benemeritaar consectetur condemor.\nMagna a peich dolore por la gloria de mi madre llevame al sircoo benemeritaar mamaar ad. Fistro amatomaa me cago en tus muelas officia condemor qui quis aliqua al ataquerl se calle ustée adipisicing. Nostrud ex apetecan exercitation dolore eiusmod llevame al sircoo. Aliqua condemor caballo blanco caballo negroorl ese que llega esse a gramenawer. A peich qui por la gloria de mi madre quis consectetur.'

console.log(longtext.split("").length);
console.log(longtext.split("et").length - 1);

//Bonus 2

let phraseToCheck = "taco cat".toLowerCase().replaceAll(" ","");
console.log(phraseToCheck)
phraseToCheck === phraseToCheck.split("").reverse().join("") ?
  console.log("Is a Palindromo") :
  console.log("pues va a ser que no");

