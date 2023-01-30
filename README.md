# HTML tailwind css starter 


The tutorial followed for this project can be found here:

https://daily-dev-tips.com/posts/plain-html-starter-with-tailwind-css/


<br>

## Running the project


When programming, you can run it with the following:

```
npm run dev
```

It will run an instance on http://127.0.0.1:8080

and also run postcss to hot reload with tailwind css.


If only the compile of tailwind css is needed, run the following command:


```
npm run build
```

Note that for those commands to work, they need to be configured in package.json as followed.

```
  "scripts": {
    "build": "postcss styles.css -o src/styles.css",
    "dev": "npm run build && live-server src --port=8080"
  },
```
