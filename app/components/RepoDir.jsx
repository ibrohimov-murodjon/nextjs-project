"use client";
import Link from "next/link";

const fetchRepoDir = async (name) => {
  const request = await fetch(
    `https://api.github.com/repos/mohlaroyivalijonova849/${name}/contents`
  );
  const repos = await request.json();

  return repos;
};

async function RepoDir({ name }) {
  const urls = await fetchRepoDir(name);
  const dirs = urls.filter((url) => url.type == "dir");
  return (
    <div>
      <ul>
        {dirs.map((dir) => {
          return (
            <li key={dir.path}>
              <Link href={dir.url}>{dir.path}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RepoDir;
