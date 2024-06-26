import usersModel from "../models/users.model";

const data = [
  {
    name: "María González",
    sex: "female",
    age: 35,
    employee: true,
  },
  {
    name: "Juan Pérez",
    sex: "male",
    age: 28,
    employee: false,
  },
  {
    name: "Ana Martínez",
    sex: "female",
    age: 42,
    employee: true,
  },
  {
    name: "Carlos Rodríguez",
    sex: "male",
    age: 30,
    employee: false,
  },
  {
    name: "Laura Sánchez",
    sex: "female",
    age: 25,
    employee: true,
  },
  {
    name: "Pedro López",
    sex: "male",
    age: 45,
    employee: true,
  },
  {
    name: "Sofía Ramírez",
    sex: "female",
    age: 38,
    employee: false,
  },
  {
    name: "Javier García",
    sex: "male",
    age: 31,
    employee: true,
  },
  {
    name: "Lucía Fernández",
    sex: "female",
    age: 29,
    employee: false,
  },
  {
    name: "Diego Martín",
    sex: "male",
    age: 33,
    employee: true,
  },
  {
    name: "Elena Díaz",
    sex: "female",
    age: 40,
    employee: false,
  },
  {
    name: "Mario Ruiz",
    sex: "male",
    age: 27,
    employee: true,
  },
  {
    name: "Isabel Jiménez",
    sex: "female",
    age: 36,
    employee: false,
  },
  {
    name: "Pablo Serrano",
    sex: "male",
    age: 32,
    employee: true,
  },
  {
    name: "Carmen Torres",
    sex: "female",
    age: 39,
    employee: false,
  },
  {
    name: "Antonio Navarro",
    sex: "male",
    age: 34,
    employee: true,
  },
  {
    name: "Silvia Castro",
    sex: "female",
    age: 26,
    employee: false,
  },
  {
    name: "Daniel Molina",
    sex: "male",
    age: 37,
    employee: true,
  },
  {
    name: "Marina Ruiz",
    sex: "female",
    age: 41,
    employee: false,
  },
  {
    name: "Francisco Gómez",
    sex: "male",
    age: 22,
    employee: true,
  },
  {
    name: "Raquel Vázquez",
    sex: "female",
    age: 43,
    employee: false,
  },
  {
    name: "Alberto Ramos",
    sex: "male",
    age: 24,
    employee: true,
  },
  {
    name: "Eva Torres",
    sex: "female",
    age: 44,
    employee: false,
  },
  {
    name: "Luisa Gutiérrez",
    sex: "female",
    age: 23,
    employee: true,
  },
  {
    name: "Miguel Sánchez",
    sex: "male",
    age: 47,
    employee: false,
  },
  {
    name: "Paula Martínez",
    sex: "female",
    age: 20,
    employee: true,
  },
  {
    name: "Roberto Rodríguez",
    sex: "male",
    age: 29,
    employee: false,
  },
  {
    name: "Andrea Pérez",
    sex: "female",
    age: 38,
    employee: true,
  },
  {
    name: "José López",
    sex: "male",
    age: 36,
    employee: false,
  },
  {
    name: "María José Ruiz",
    sex: "female",
    age: 33,
    employee: true,
  },
  {
    name: "David García",
    sex: "male",
    age: 31,
    employee: false,
  },
  {
    name: "Sara Serrano",
    sex: "female",
    age: 30,
    employee: true,
  },
  {
    name: "Jorge Martínez",
    sex: "male",
    age: 28,
    employee: false,
  },
  {
    name: "Lucas Fernández",
    sex: "male",
    age: 25,
    employee: true,
  },
  {
    name: "Cristina Díaz",
    sex: "female",
    age: 22,
    employee: false,
  },
  {
    name: "Álvaro González",
    sex: "male",
    age: 40,
    employee: true,
  },
  {
    name: "Natalia Torres",
    sex: "female",
    age: 27,
    employee: false,
  },
  {
    name: "Manuel Ruiz",
    sex: "male",
    age: 38,
    employee: true,
  },
  {
    name: "Patricia López",
    sex: "female",
    age: 32,
    employee: false,
  },
  {
    name: "Rafael García",
    sex: "male",
    age: 35,
    employee: true,
  },
  {
    name: "Laura Pérez",
    sex: "female",
    age: 29,
    employee: false,
  },
  {
    name: "Juan José Martínez",
    sex: "male",
    age: 34,
    employee: true,
  },
  {
    name: "Marta Sánchez",
    sex: "female",
    age: 26,
    employee: false,
  },
  {
    name: "Fernando Rodríguez",
    sex: "male",
    age: 31,
    employee: true,
  },
  {
    name: "Elena Martínez",
    sex: "female",
    age: 24,
    employee: false,
  },
  {
    name: "Gonzalo Pérez",
    sex: "male",
    age: 30,
    employee: true,
  },
  {
    name: "Raquel García",
    sex: "female",
    age: 28,
    employee: false,
  },
  {
    name: "Javier Fernández",
    sex: "male",
    age: 27,
    employee: true,
  },
  {
    name: "Celia Gómez",
    sex: "female",
    age: 25,
    employee: false,
  },
  {
    name: "Óscar Díaz",
    sex: "male",
    age: 36,
    employee: true,
  },
  {
    name: "Andrea López",
    sex: "female",
    age: 23,
    employee: false,
  },
  {
    name: "Sergio Ruiz",
    sex: "male",
    age: 29,
    employee: true,
  },
  {
    name: "Clara Martínez",
    sex: "female",
    age: 42,
    employee: false,
  },
  {
    name: "Marcos González",
    sex: "male",
    age: 37,
    employee: true,
  },
  {
    name: "Beatriz Sánchez",
    sex: "female",
    age: 31,
    employee: false,
  },
  {
    name: "Adrián Pérez",
    sex: "male",
    age: 35,
    employee: true,
  },
  {
    name: "Julia Fernández",
    sex: "female",
    age: 26,
    employee: false,
  },
  {
    name: "Alonso Martínez",
    sex: "male",
    age: 39,
    employee: true,
  },
  {
    name: "Nuria López",
    sex: "female",
    age: 27,
    employee: false,
  },
  {
    name: "Hugo García",
    sex: "male",
    age: 28,
    employee: true,
  },
  {
    name: "Paula Rodríguez",
    sex: "female",
    age: 30,
    employee: false,
  },
  {
    name: "César Sánchez",
    sex: "male",
    age: 32,
    employee: true,
  },
  {
    name: "Marina Martínez",
    sex: "female",
    age: 29,
    employee: false,
  },
  {
    name: "Guillermo Pérez",
    sex: "male",
    age: 34,
    employee: true,
  },
  {
    name: "Victoria Gómez",
    sex: "female",
    age: 28,
    employee: false,
  },
  {
    name: "Diego Rodríguez",
    sex: "male",
    age: 33,
    employee: true,
  },
  {
    name: "Sara Martínez",
    sex: "female",
    age: 31,
    employee: false,
  },
  {
    name: "Alejandro López",
    sex: "male",
    age: 30,
    employee: true,
  },
  {
    name: "Mónica García",
    sex: "female",
    age: 26,
    employee: false,
  },
  {
    name: "Iván Sánchez",
    sex: "male",
    age: 35,
    employee: true,
  },
  {
    name: "Elena Rodríguez",
    sex: "female",
    age: 33,
    employee: false,
  },
  {
    name: "Pablo Martínez",
    sex: "male",
    age: 29,
    employee: true,
  },
  {
    name: "María José Pérez",
    sex: "female",
    age: 27,
    employee: false,
  },
  {
    name: "Carlos García",
    sex: "male",
    age: 31,
    employee: true,
  },
  {
    name: "Laura Martínez",
    sex: "female",
    age: 30,
    employee: false,
  },
  {
    name: "José Luis Sánchez",
    sex: "male",
    age: 32,
    employee: true,
  },
  {
    name: "Ana García",
    sex: "female",
    age: 28,
    employee: false,
  },
  {
    name: "Javier Martínez",
    sex: "male",
    age: 34,
    employee: true,
  },
  {
    name: "Sandra López",
    sex: "female",
    age: 29,
    employee: false,
  },
  {
    name: "Luis García",
    sex: "male",
    age: 33,
    employee: true,
  },
  {
    name: "Carmen Martínez",
    sex: "female",
    age: 31,
    employee: false,
  },
  {
    name: "Alberto García",
    sex: "male",
    age: 30,
    employee: true,
  },
  {
    name: "María Fernández",
    sex: "female",
    age: 28,
    employee: false,
  },
  {
    name: "Diego Martínez",
    sex: "male",
    age: 32,
    employee: true,
  },
  {
    name: "Sofía López",
    sex: "female",
    age: 29,
    employee: false,
  },
  {
    name: "Jorge García",
    sex: "male",
    age: 31,
    employee: true,
  },
  {
    name: "Elena Martínez",
    sex: "female",
    age: 27,
    employee: false,
  },
  {
    name: "Pedro Rodríguez",
    sex: "male",
    age: 34,
    employee: true,
  },
  {
    name: "Ana Pérez",
    sex: "female",
    age: 30,
    employee: false,
  },
  {
    name: "Javier García",
    sex: "male",
    age: 28,
    employee: true,
  },
  {
    name: "Laura Martínez",
    sex: "female",
    age: 29,
    employee: false,
  },
  {
    name: "José Martínez",
    sex: "male",
    age: 33,
    employee: true,
  },
  {
    name: "María López",
    sex: "female",
    age: 31,
    employee: false,
  },
  {
    name: "David García",
    sex: "male",
    age: 30,
    employee: true,
  },
  {
    name: "Cristina Fernández",
    sex: "female",
    age: 28,
    employee: false,
  },
  {
    name: "Pablo López",
    sex: "male",
    age: 32,
    employee: true,
  },
  {
    name: "Sara Martínez",
    sex: "female",
    age: 29,
    employee: false,
  },
  {
    name: "Francisco García",
    sex: "male",
    age: 31,
    employee: true,
  },
  {
    name: "Marta Sánchez",
    sex: "female",
    age: 27,
    employee: false,
  },
  {
    name: "Alberto Martínez",
    sex: "male",
    age: 33,
    employee: true,
  },
  {
    name: "Nuria Pérez",
    sex: "female",
    age: 30,
    employee: false,
  },
  {
    name: "Roberto García",
    sex: "male",
    age: 29,
    employee: true,
  },
  {
    name: "Eva Fernández",
    sex: "female",
    age: 28,
    employee: false,
  },
  {
    name: "Manuel López",
    sex: "male",
    age: 32,
    employee: true,
  },
  {
    name: "Patricia Martínez",
    sex: "female",
    age: 29,
    employee: false,
  },
  {
    name: "Rafael García",
    sex: "male",
    age: 31,
    employee: true,
  },
  {
    name: "Laura Pérez",
    sex: "female",
    age: 27,
    employee: false,
  },
  {
    name: "Juan Martínez",
    sex: "male",
    age: 33,
    employee: true,
  },
  {
    name: "Marta García",
    sex: "female",
    age: 30,
    employee: false,
  },
  {
    name: "Antonio Martínez",
    sex: "male",
    age: 28,
    employee: true,
  },
  {
    name: "Silvia García",
    sex: "female",
    age: 32,
    employee: false,
  },
  {
    name: "Daniel Martínez",
    sex: "male",
    age: 29,
    employee: true,
  },
  {
    name: "María Fernández",
    sex: "female",
    age: 31,
    employee: false,
  },
  {
    name: "José García",
    sex: "male",
    age: 30,
    employee: true,
  },
  {
    name: "Elena Martínez",
    sex: "female",
    age: 28,
    employee: false,
  },
  {
    name: "Alejandro García",
    sex: "male",
    age: 32,
    employee: true,
  },
  {
    name: "Laura Pérez",
    sex: "female",
    age: 29,
    employee: false,
  },
  {
    name: "David Martínez",
    sex: "male",
    age: 31,
    employee: true,
  },
  {
    name: "Sandra García",
    sex: "female",
    age: 30,
    employee: false,
  },
  {
    name: "Pablo Martínez",
    sex: "male",
    age: 28,
    employee: true,
  },
  {
    name: "Marta García",
    sex: "female",
    age: 32,
    employee: false,
  },
  {
    name: "Francisco Martínez",
    sex: "male",
    age: 29,
    employee: true,
  },
  {
    name: "Nuria García",
    sex: "female",
    age: 31,
    employee: false,
  },
  {
    name: "Roberto Martínez",
    sex: "male",
    age: 30,
    employee: true,
  },
  {
    name: "Eva García",
    sex: "female",
    age: 28,
    employee: false,
  },
  {
    name: "Manuel Martínez",
    sex: "male",
    age: 32,
    employee: true,
  },
  {
    name: "Patricia García",
    sex: "female",
    age: 29,
    employee: false,
  },
  {
    name: "Rafael Martínez",
    sex: "male",
    age: 31,
    employee: true,
  },
  {
    name: "Laura García",
    sex: "female",
    age: 30,
    employee: false,
  },
  {
    name: "Juan García",
    sex: "male",
    age: 28,
    employee: true,
  },
  {
    name: "Marta Martínez",
    sex: "female",
    age: 32,
    employee: false,
  },
  {
    name: "Antonio García",
    sex: "male",
    age: 29,
    employee: true,
  },
  {
    name: "Silvia Martínez",
    sex: "female",
    age: 31,
    employee: false,
  },
  {
    name: "Daniel García",
    sex: "male",
    age: 30,
    employee: true,
  },
  {
    name: "María García",
    sex: "female",
    age: 28,
    employee: false,
  },
  {
    name: "José Martínez",
    sex: "male",
    age: 32,
    employee: true,
  },
  {
    name: "Elena García",
    sex: "female",
    age: 29,
    employee: false,
  },
  {
    name: "Alejandro Martínez",
    sex: "male",
    age: 31,
    employee: true,
  },
  {
    name: "Laura García",
    sex: "female",
    age: 30,
    employee: false,
  },
];

export const fillDb = async () => {
  await usersModel.deleteMany(); //borrar muchos
  await usersModel.insertMany(data); // insertar muchos
  console.log("inserted users");
};
