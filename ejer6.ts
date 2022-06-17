

interface Persona {
  nombre: string;
  sexo: string;
}

const myFunction = () => {
  const personas: Persona[] = [
    {
      nombre: "Juan",
      sexo: "M",
    },
    {
      nombre: "Martha",
      sexo: "F",
    },
  ];

  const nuevasPersonas: Persona[] = [];

  for (let i = 0; i < personas.length; i++) {
    if (personas[i].sexo === "M")
      personas[i].nombre = `Sr. ${personas[i].nombre}`;
    else personas[i].nombre = `Srta. ${personas[i].nombre}`;

    nuevasPersonas.push(personas[i]);
  }

  console.log(nuevasPersonas);
};
myFunction();
 
