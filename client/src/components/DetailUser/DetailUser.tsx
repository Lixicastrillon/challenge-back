import { useEffect, useState } from "react";
import { Users } from "../../interfaces/users.interfaces";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export const DetailUser = () => {
  const { id } = useParams();

  const [edit, setEdit] = useState<boolean>(true);
  const [user, setUser] = useState<Users>({
    _id: "",
    name: "",
    age: 0,
    sex: "male",
    employee: false,
  });

  const getDetailUser = async () => {
    try {
      const dataDetail = await axios.get("http://localhost:3000/users/" + id);
      setUser(dataDetail.data);
    } catch (error) {
      console.log(`message : ${error}`);
    }
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.name === "employee") {
      setUser({
        ...user,
        employee: e.currentTarget.value === "true",
      });
    }
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const handleChangee = (e: React.FormEvent<HTMLSelectElement>) => {
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const updateDetailUser = async () => {
    const dataUpdated = await axios.put(
      "http://localhost:3000/users/" + id,
      user
    );
    setUser(dataUpdated.data);
    alert("actualizado satisfactoriamente!");
    try {
    } catch (error) {
      console.log(`message : ${error}`);
    }
  };

  const deleteDetailUser = async () => {
    const datadeleted = await axios.delete("http://localhost:3000/users/" + id);
    if (datadeleted.data.deleted) {
      window.location.href = "/";
      alert("eliminado!");
    }
    try {
    } catch (error) {
      console.log(`message : ${error}`);
    }
  };

  useEffect(() => {
    getDetailUser();
  }, []);
  return (
    <div className="container flex justify-center">
      <div>
        <Link
          className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          to={"/"}
        >
          inicio
        </Link>
      </div>
      <div className=" m-2 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-300 dark:border-gray-400  flex justify-center ">
        <form className="card-user">
          <label className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Nombre:
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-3 ps-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={user.name}
            name="name"
            disabled={edit}
            onChange={(e) => handleChange(e)}
          />
          <label className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Edad:
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-3 ps-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="age"
            value={user.age}
            disabled={edit}
            onChange={(e) => handleChange(e)}
          />
          <label className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Sexo
          </label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="sex"
            value={user.sex}
            disabled={edit}
            onChange={(e) => handleChangee(e)}
          >
            <option value={"female"}>Femenino 👩🏻‍🦰</option>
            <option value={"male"}>Masculino 👨🏽</option>
          </select>
          <label className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Empleado
          </label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="employee"
            value={user.employee?.toString()}
            disabled={edit}
            onChange={(e) => handleChangee(e)}
          >
            <option value={"true"}>si</option>
            <option value={"false"}>No</option>
          </select>
        </form>
        <div className="space-y-4 flex-col justify-center ">
          <div>
            <button
              className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {
                setEdit(false);
              }}
            >
              Editar
            </button>
          </div>
          <div>
            <button
              className="p-2.5 ms-2 text-sm font-medium text-white bg-lime-700 rounded-lg border border-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
              onClick={() => updateDetailUser()}
            >
              Guardar
            </button>
          </div>
          <div>
            <button
              className="p-2.5 ms-2 text-sm font-medium text-white bg-red-600 rounded-lg border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              onClick={() => deleteDetailUser()}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
