/*
Austin Oliveira tem 19 anos, pesa 64 kg
tem 1.8 de altura e seu IMC é de 
Austin Oliveira nasceu em 2007
*/

const person = {
    name: "Austin",
    lastName: "Oliveira",
    age: 19,
    weight: 64,
    heightInM: 1.75
};

const bodyMassIndex = person.weight / (person.heightInM * person.heightInM);

console.log(`${person.name}, ${person.lastName}, tem ${person.age} anos, pesa ${person.weight} kg`);
console.log(`Tem ${person.heightInM} de altura e seu IMC é  de ${bodyMassIndex}`);
console.log(`${person.name} ${person.lastName} nasceu em ${new Date().getFullYear() - person.age}.`);

