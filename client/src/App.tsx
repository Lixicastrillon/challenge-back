import React, { useEffect, useState } from "react";
import "./App.css";
import ListUsers from "./components/ListUsers/ListUsers";
import axios from "axios";
import { Users, queryUsers } from "./interfaces/users.interfaces";

function App() {
  const [users, setUsers] = useState<Users[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filterBySex, setFilterBySex] = useState<string>("");
  const [filterEmployee, setFilterEmployee] = useState<string>("");

  let params: queryUsers = {};
  if (search) params.searchName = search;
  if (filterBySex) params.filterBySex = filterBySex;
  if (filterEmployee) params.filterByEmployee = filterEmployee;

  useEffect(() => {
    getData();
  }, []);

  // Get users data from API
  const getData = async () => {
    try {
      let data = await axios.get("http://localhost:3000/users", { params });
      setUsers(data.data.users);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="escribe el nombre"
          onChange={(e) => handleChange(e)}
        ></input>
        <input type="submit" value="buscar" className="bg-purple-500"></input>
      </form>
      <ListUsers users={users} />
    </div>
  );
}

export default App;
