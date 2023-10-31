import Repo from "@/app/components/Repo";
import RepoDir from "@/app/components/RepoDir";
import { Suspense } from "react";

function RepoPage({ params: { name } }) {
  return (
    <div className="card">
      <Suspense fallback={<div>Loading Repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading Dirs...</div>}>
        <RepoDir name={name} />
      </Suspense>
    </div>
  );
}

export default RepoPage;
