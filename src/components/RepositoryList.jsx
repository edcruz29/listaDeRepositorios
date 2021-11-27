import RepositoryItem from "./RepositoryItem";
import "../styles/repositoryStyle.scss";
import { useState, useEffect } from "react";


const RepositoryList = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/edcruz29/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
          {
              repositories.map(repository=>{
                  return <RepositoryItem key={repository.name} repository={repository} />
              })
          }
        
      </ul>
    </section>
  );
};

export default RepositoryList;
