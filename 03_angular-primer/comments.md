# Angular Primer

https://cli.angular.io/

## Basic Project Setup

    > npm i -g @angular/cli
    > ng --version
    Angular CLI: 9.0.3

Create a new Angular Project without Unit Tests and skip the initialization of a git repository.

    > ng new little-crm --minimal=true --skipGit=true --prefix=crm --strict=true --routing=true --style=scss

## How to run the development environment
The Flag -o opens the default browser. Should be Chrome.

    > ng serve -o

## How to create a production ready build

If you want to serve your build from within the IDE, add the baseHref option.

    > ng build --prod --baseHref=./


## How to upgrade

Update your project at least weekly!

https://update.angular.io/
    