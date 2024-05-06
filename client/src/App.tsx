import React, { useEffect, useState } from "react";
import "./App.css";
import ListUsers from "./components/ListUsers/ListUsers";
import axios from "axios";
import { Users, queryUsers } from "./interfaces/users.interfaces";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

function App() {
  const [users, setUsers] = useState<Users[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filterBySex, setFilterBySex] = useState<string>("");
  const [filterEmployee, setFilterEmployee] = useState<string>("");
  const [pageCount, setPageCount] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5); // cuantos se van a mostrar
  const [page, setPage] = useState<number>(0);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [totalfoundUsers, setTotalfoundUsers] = useState<number>(0);

  useEffect(() => {
    getData(search, filterBySex, filterEmployee, pageSize, page);
  }, [search, filterBySex, filterEmployee, page, pageSize]);

  // Get users data
  const getData = async (
    search: string,
    filterBySex: string,
    filterEmployee: string,
    pageSize: number,
    page: number
  ) => {
    let params: queryUsers = {
      page: page,
      pageSize: pageSize,
    };
    if (search) params.searchName = search;
    if (filterBySex) params.filterBySex = filterBySex;
    if (filterEmployee) params.filterByEmployee = filterEmployee;

    try {
      let data = await axios.get("http://localhost:3000/users", { params });
      setUsers(data.data.users);
      setPageCount(data.data.totalPages);
      setTotalUsers(data.data.totalUsers);
      setTotalfoundUsers(data.data.totalFoundUsers);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getData(search, filterBySex, filterEmployee, pageSize, page);
    setSearch("");
  };

  const cleanFilters = () => {
    setFilterEmployee("");
    setFilterBySex("");
    setPage(0);
    setPageSize(5);
  };

  const handlePageClick = (e: any) => {
    setPage(e.selected);
  };

  const handlepageSize = (e: React.FormEvent<HTMLSelectElement>) => {
    setPageSize(parseInt(e.currentTarget.value));
    setPage(0);
  };

  return (
    <div className="container flex size-full">
      <div className="w-1/3">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex mb-3">
            <input
              type="text"
              placeholder="escribe el nombre"
              value={search}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-3 ps-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
            {/* <input
              type="submit"
              value="buscar"
              className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            ></input> */}
          </div>
          <div>
            <label className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              SEXO
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={filterBySex}
              onChange={(e) => setFilterBySex(e.currentTarget.value)}
            >
              <option value={""} selected disabled>
                seleccionar
              </option>
              <option value={"female"}>Femenino</option>
              <option value={"male"}>Masculino</option>
            </select>
          </div>
          <div>
            <label className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              EMPLEADO
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={filterEmployee}
              onChange={(e) => setFilterEmployee(e.currentTarget.value)}
            >
              <option value={""} selected disabled>
                seleccionar
              </option>
              <option value={"true"}>Si</option>
              <option value={"false"}>No</option>
            </select>
          </div>
          <button
            className="mb-2 mt-2 p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => cleanFilters()}
          >
            Borrar filtros
          </button>
        </form>
        <div>
          <Link to={"/create"}>
            <button className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              crear nuevo usuario
            </button>
          </Link>
        </div>
        <div>
          <p className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            total usuarios:{totalUsers}
          </p>
          <p className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Total usuarios filtrados:{totalfoundUsers}
          </p>
        </div>
      </div>

      <div className="w-3/4">
        <div>
          <ListUsers users={users} />
        </div>
        <div className="flex">
          <div>
            <label className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              cantidad de elementos
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={pageSize}
              onChange={(e) => handlepageSize(e)}
            >
              <option selected value={5}>
                5
              </option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>
          <ReactPaginate
            className="flex"
            pageClassName="icons"
            breakLabel="..."
            nextLabel="siguiente>"
            onPageChange={(e) => handlePageClick(e)}
            pageRangeDisplayed={3}
            previousLabel="< anterior"
            renderOnZeroPageCount={null}
            pageCount={pageCount}
            previousClassName="previos"
            nextClassName="nextClassName"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
