import Link from "next/link";
import { FaEye, FaCodeBranch, FaStar } from "react-icons/fa";

const API = "https://api.github.com/users/mohlaroyivalijonova849/repos";
const fetchRepos = async () => {
  const request = await fetch(API);
  const repos = await request.json();

  return repos;
};
async function ReposPage() {
  const repos = await fetchRepos();
  return (
    <div className="repos-container">
      <h1>Repos List</h1>
      <ul className="repo-list">
        {repos.map((repo) => {
          return (
            <li key={repo.id}>
              <Link href={`/code/${repo.name}`}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>

                <div className="repo-details">
                  <span>
                    <FaStar /> {repo.stargazers_count}
                  </span>
                  <span>
                    <FaCodeBranch /> {repo.forks_count}
                  </span>
                  <span>
                    <FaEye /> {repo.watchers_count}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ReposPage;
