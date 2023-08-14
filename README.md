# mock-poly-repo-cmpnt-lib
questions regarding standalone component library in nextjs using pandacss



### How to us

after cloning


##### first install and set up the design-system package.

```
$> cd design-system
$>  pnpm install

// or npm install if you pnpm
```

The `prepare` script  in the package.json  should create an `@tms/styled-components`'
package in the `node_modules`. 

Run the following command to create a `/dist` directory and start the storybook. 

you can go to `http:/localhost:6006` to see the storybook

##### 2nd install and set up the the web-app.

**1st Step**
```
$> cd web-app
$>  pnpm install
// or npm install if you pnpm
```

**2nd Step**
add  `"@tms/design-system":"^1.017"`the following to the `package.json`, **dependencies** file in the `web-app` directory

```
     dependencies: {
        ...
        "@tms/design-system":"^1.017"
        ...
     }
```

**3rd Step**
Copy the  `@tms` directory  `web-app/@tms` to the  `/node_modules` directory
and then run the script `panda-prep` in the `web-app` directory for good measure.

```
$> pnpm  panda-prep

```

If you change the component code  in the design-system you will need to run 
`pnpm build`  to create a new `dist`. Then you will need to copy the `dist` and
the source directory `web-app/node_module/@tms/design-system ` directory 
and you may have to run `panda-prep` again.

