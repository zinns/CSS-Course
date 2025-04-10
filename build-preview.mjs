import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';

const prepareBuild = () => {
  if (existsSync('build')) {
    rmSync('build', { recursive: true });
  }
  mkdirSync('build');

  moveSrcFolders('src');
};

const moveSrcFolders = dir => {
  const folders = readdirSync(dir, { withFileTypes: true });

  const exercises = [];

  for (const folder of folders) {
    if (folder.isDirectory()) {
      cpSync(`${dir}/${folder.name}`, `build/${folder.name}`, { recursive: true });

      const htmlFiles = readdirSync(`${dir}/${folder.name}`, { withFileTypes: true })
        .filter(file => file.isFile() && file.name.endsWith('.html'))
        .map(file => ({
          exercise: folder.name,
          name: file.name,
          path: `${folder.name}/${file.name}`,
        }));

      if (htmlFiles.length > 0) {
        exercises.push(...htmlFiles);
      }
    }
  }

  prepareIndex(exercises);
};

const prepareIndex = exercises => {
  const template = /* html */ `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Exercises</title>
      </head>
      <body>
        <h1>Exercises</h1>
        <ul>
          ${exercises
            .map(
              exercise => `
            <li>
              <a href="${exercise.path}">${exercise.exercise}</a>
            </li>
          `,
            )
            .join('')}
        </ul>
    </html>
  `;

  writeFileSync('build/index.html', template);
};

prepareBuild();
