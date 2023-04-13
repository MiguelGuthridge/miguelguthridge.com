
import { getProjects, Project } from "@/lib/projects";
import Head from "next/head";
import Link from "next/link";

export default function Projects(props: Record<string, Project>) {
  return (
    <>
      <Head>
        <title>Projects | Miguel Guthridge</title>
        <meta name="description" content="Miguel Guthridge's homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>My projects</h1>
        {Object.entries(props).map(([id, project]) => (
          <div key={id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <Link href={`/projects/${id}`}>View project</Link>
          </div>
        ))
        }
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: await getProjects(),
  };
}
