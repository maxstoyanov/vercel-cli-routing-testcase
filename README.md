# vercel-cli-routing-testcase

## Setup

```
build command: npm run build
output directory: _site
install command: npm install
development command: npx @11ty/eleventy --input=src --output=_site --serve --watch --port $PORT
```

## Bug 1: handle filesystem does not work

### Expected Behavior

> You might find that there are many routes without a dest. These routes can be
> handled without being explicitly defined by using handle filesystem. Handle
> filesystem works the same as if you hardcoded all the routes in its place.
>
> ```json
> {
>   "routes": [
>     { "handle": "filesystem" },
>     { "src": "/([^/]+)", "dest": "/blog?slug=$1" }
>   ]
> }
> ```
>
> See: https://vercel.com/docs/configuration#routes/advanced/wildcard-routes

### Actual behavior

The second route `{ "src": "/.*", "dest": "/api/hello" }` takes precedence even
if the docs state otherwise. Happens on Windows and WSL2 with CLI 21.0.1 dev
(beta).

## Bug 2: Includes don't work

### Expected Behavior

> Most Runtimes use static analysis to determine which source files should be
> included in the Serverless Function output based on the build src input. Any
> unused code or assets is ignored to ensure your Serverless Function is as
> small as possible.

> For example, the Node Runtime looks at calls to require() or fs.readFile() in
> order to determine which files to include automatically.

> ```js
> // index.js
> const { readFileSync } = require("fs");
> const { join } = require("path");
> const file = readFileSync(join(__dirname, "config", "ci.yml"), "utf8");
> ```

See:
https://vercel.com/docs/runtimes#advanced-usage/technical-details/including-additional-files

### Actual behavior

The inclue does not work and the function emits:

```
ENOENT: no such file or directory, open '/var/task/_site/index.html
```

Fun fact: The code works with `vercel dev` on my machine. So the includes do not
work as expected. Also I do not understand how the `includeFiles` directive is
supposed to work. I set it up but no matter what I try I can't get it to include
the file that is generated during the build stage.
