Requirements:
- npm version 9.0 or higher
- node version 16.x

To build:
```shell
npm install
npm run build
```

To run:
```npm start [jsonfile]```

jsonfile is optional. If one is not provided it will use the example file.

Sample output:
```shell
adiproblem-ts git:(main) ✗ npm install

added 20 packages, and audited 21 packages in 532ms

found 0 vulnerabilities
 adiproblem-ts git:(main) ✗ npm run build

> release-utils@1.0.0 build
> tsc

  adiproblem-ts git:(main) ✗ npm start

> release-utils@1.0.0 start
> node dist/index.js

- this
-- is
--- an
---- example
- an
-- example
 adiproblem-ts git:(main) ✗ 

```


