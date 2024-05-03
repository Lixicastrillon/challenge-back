import { useState } from "react";
import { postUser } from "../../interfaces/users.interfaces";
import axios from "axios";

export const CreateUser = () => {
  const [user, setUser] = useState<postUser>({
    name: "",
    age: 0,
    sex: "",
    employee: "",
  });

  const postUser = async () => {
    try {
      const datacreate = await axios.post("http://localhost:3000/users", {
        name: user.name,
        age: user.age,
        sex: user.sex,
        employee: user.employee,
      });
      if (datacreate.data) {
        alert(`Usuario ${user.name} creado`);
        window.location.href = "/detail/" + datacreate.data._id;
      }
    } catch (error) {
      console.log(`message : ${error}`);
    }
  };
  const handleChange = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container">
      <form className="card-user">
        <div>
          <label
            className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            id="name"
          >
            Nombre:
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-3 ps-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="name"
            value={user.name}
            name="name"
            type="text"
            placeholder="Introduzca el nombre"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Edad:
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-3 ps-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="age"
            value={user.age}
            type="text"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Sexo
          </label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="sex"
            value={user.sex}
            onChange={(e) => handleChange(e)}
          >
            <option disabled value={""}>
              Seleccionar:
            </option>
            <option value={"female"}>Femenino 👩🏻‍🦰</option>
            <option value={"male"}>Masculino 👨🏽</option>
          </select>
        </div>
        <div>
          <label className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Empleado
          </label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="employee"
            value={user.employee?.toString()}
            onChange={(e) => handleChange(e)}
          >
            {" "}
            <option disabled value={""}>
              Seleccionar:
            </option>
            <option value={"true"}>si</option>
            <option value={"false"}>No</option>
          </select>
        </div>
      </form>
      <div>
        <button
          className="mt-2 p-2.5 ms-2 text-sm font-medium text-white bg-lime-700 rounded-lg border border-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
          onClick={() => postUser()}
        >
          Guardar
        </button>
      </div>
    </div>
  );
};
