# Havendale - A good site overall

> We are Runesmith Studios. A brand new game development studio. Check us out at http://runesmithstudios.com !

[![devDependency Status](https://david-dm.org/RunesmithStudios/Havendale/dev-status.svg?style=flat-square)](https://david-dm.org/RunesmithStudios/Havendale#info=devDependencies)

---

Havendale is build upon [Angular 1.5](https://angularjs.org/) with CSS background from [Siimple](http://siimple.juanes.xyz/).
It's completely written in plain good ES2015 Javascript, and SASS.

## Install

```sh
$ github clone git@github.com:RunesmithStudios/Havendale.git
$ cd Havendale
$ pip install virtualenv
$ virtualenv hav-env
$ source .env
$ pip install -r requirements.txt
$ npm install
$ npm run build
```

Havendale is hosted by [GitHub](https://git-scm.com) and installs its dependencies with [npm](http://npmjs.org/) and [pip](https://pip.pypa.io/en/stable/installing/). Make sure all that is properly installed before anything else.

## Usage

```sh
$ source .env
```

`.env` is your environment activation file. To exit your environment, run `deactivate`.

```sh
$ npm run build
$ flask run
```

`gulp` runs all due compilations for you. `flask`, in the other hand, runs the localserver.
Check your `127.0.0.1:5000` to see the server with your own eyes.

## Common mistakes

> "SyntaxError: Unexpected reserved word" while running gulp

TL;DR: Run `source .repair` and try again.

That one happens because we change .babelrc during the execution of gulp. If something goes off during this and gulp is aborted without fixing the file, you are left with the wrong .babelrc. The `.repair` file is there to fix exactely this.

> "-bash: flask: command not found" while running flask

TL;DR: Run `source .env` and try again.

If you don't have a global installation of flask (you shouldn't), executing it outside of the virtualenv will raise this. Just run your virtual environment and you'll be fine.

> "npm WARN This failure might be due to the use of legacy binary 'node'" while running `npm run build`

TL;DR: Run `sudo npm install -g n && sudo n stable`

Your version of node is probably out of date. Run the above commands to update it.
