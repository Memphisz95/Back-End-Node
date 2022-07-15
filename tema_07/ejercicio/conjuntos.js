// Un nuevo Set con los nombres de tu familia
const array = ["Miguel", "Ana", "Antonia", "Adrian"];
const nombres_familia = new Set(array);
console.log(nombres_familia);

// Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
nombres_familia.add("Adrian");
console.log(nombres_familia);

// Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
nombres_familia.add("Javascript");
console.log(nombres_familia);