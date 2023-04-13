
import fs from 'fs/promises';


export interface Project {
  name: string,
  description: string,
  repo?: string,
  url?: string,
  languages: string[],
  frameworks: string[],
  skills: string[],
}

export async function getProjects(): Promise<Record<string, Project>> {
  return JSON.parse(
    await fs.readFile(
      'public/projects.json',
      { flag: 'r', encoding: 'utf-8'}
    )
  );
}
