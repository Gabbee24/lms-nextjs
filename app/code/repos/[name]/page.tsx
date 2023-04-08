import { Suspense } from "react";
import Link from "next/link";
import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";

const RepoPage = ({params}:{params:any}) => {
    const {name} = params;

    return (
    <div className="card">
        {/* <h2>{name}</h2> */}
        <Link href='/code/repos' className="btn btn-back">Back to repositories</Link>
        <Suspense fallback={<div>Loading repo...</div>}>
            <Repo name={name} />
        </Suspense>

        <Suspense fallback={<div>Loading directories...</div>}>
            <RepoDirs name={name} />
        </Suspense>
    </div> 
  )
}

export default RepoPage