import Head from "next/head";
import { Project, getProjects } from "@/lib/projects";

export default function ProjectPage(p: Project) {
  return (
    <>
      <Head>
        <title>{p.name} | Miguel Guthridge</title>
        <meta name="description" content="Miguel Guthridge's homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{p.name}</h1>
      <p>{p.description}</p>
      <ul>
        {
          p.url
            ? <li><a href={p.url} target="_blank">Visit this project</a></li>
            : <></>
        }
        {
          p.repo
            ? <li><a href={p.repo} target="_blank">View the code</a></li>
            : <></>
        }
      </ul>
    </>
  );
}

export async function getStaticProps(
  { params }: { params: { id: string } }
) {
  const projects = await getProjects();
  return {
    props: projects[params.id],
  };
}

export async function getStaticPaths() {
  const projects = await getProjects();
  const paths = Object.keys(projects).map(id => {
    return { params: { id } };
  });

  return {
    paths,
    fallback: false
  };
}
