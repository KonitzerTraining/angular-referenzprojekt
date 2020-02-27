# Angular Primer

https://cli.angular.io/

## Basic Project Setup

Consider to use your own virtual machine or Docker image.

    > npm i -g @angular/cli
    > ng --version
    Angular CLI: 9.0.3    
    
    > ng new little-crm --skipTests=true --skipGit=true --prefix=crm --strict=true --routing=true --style=scss
    > ng serve -o

Create a production ready build:
    
    > ng build --prod --baseHref=./

## Add a layout Framework e.g. Bootstrap

    > npm i -P jquery bootstrap popper.js
    
Add following lines to your angular.json file:

        "scripts": [
          "node_modules/jquery/dist/jquery.slim.js",
          "node_modules/bootstrap/dist/js/bootstrap.bundle.js"
        ]

Now add the necessary SCSS file in styles.scss in your src-folder:

    @import "~bootstrap/scss/bootstrap";
    
    