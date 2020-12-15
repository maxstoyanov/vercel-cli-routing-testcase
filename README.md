# vercel-cli-routing-testcase

This repository demonstrates two bugs that I have.

> Set framework preset to eleventy!
```
build command: npm build
output directory: _site
install command: npm install
development command: npx @11ty/eleventy --serve --watch --port $PORT
```

Check those URLs:

```
/               maps to index.md
/README         maps to README.md
/different      maps to different.md
/api/hello      
/api/inlcude
```

Bug 1: handle filesystem does not work

Bug 2: includes does not work (see /api/include)

The code works on local `vercel dev` on Windows running CLI 21.0.1 dev (beta).

See the deployed code at: https://vercel-cli-routing-testcase.vercel.app
