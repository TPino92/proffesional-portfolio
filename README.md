old repo: https://github.com/TPino92/trevor-pino/settings

<!-- error msg on deploy -->

ssh key is already paired to github account not sure what this error is in reguards to.



PS C:\Users\Trevor Pino\Desktop\trevor-pino> npm run deploy

> professional-portfolio@0.1.0 predeploy
> npm run build


> professional-portfolio@0.1.0 build
> react-scripts build

(node:14368) [DEP0148] DeprecationWarning: Use of deprecated folder mapping "./" in the "exports" field module resolution of the package at C:\Users\Trevor Pino\Desktop\trevor-pino\node_modules\postcss-safe-parser\node_modules\postcss\package.json.
Update this package.json to use a subpath pattern like "./*".
(Use `node --trace-deprecation ...` to show where the warning was created)
Creating an optimized production build...
Compiled with warnings.

src\components\Projects\index.js
  Line 43:29:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop  jsx-a11y/img-redundant-alt

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

File sizes after gzip:

  41.76 KB  build\static\js\2.38864cf5.chunk.js
  2.54 KB   build\static\js\main.1abd0dd5.chunk.js
  1.4 KB    build\static\js\3.e078b912.chunk.js
  1.26 KB   build\static\css\main.12b16948.chunk.css
  1.18 KB   build\static\js\runtime-main.a13dc86c.js

The project was built assuming it is hosted at /professional-portfolio/.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.

Find out more about deployment here:

  https://cra.link/deployment

> professional-portfolio@0.1.0 deploy
> gh-pages -d build

git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.

npm ERR! code 1
npm ERR! path C:\Users\Trevor Pino\Desktop\trevor-pino
npm ERR! command failed
npm ERR! command C:\WINDOWS\system32\cmd.exe /d /s /c gh-pages -d build

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Trevor Pino\AppData\Local\npm-cache\_logs\2020-12-30T16_58_49_157Z-debug.log