# Password strength task
## Pre requirements
Have installed:
* Git
* Yarn
* IDE

## Requirements
* Fork this repo
* Make failing tests pass
* Implement tests that are in .todo
* Complete the task described in briefing
* Add classnames to HTML templates according to BEM
* Meet the limitations
* Once the task is done make PR back to this repo and assign PR to one of repo admins

## Briefing
You're provided with only one input.
This input needs to be a password input which we want to validate with a set of rules.
Password is assumed as Strong when at least 5 of the rules below are satisfied.
We must show whether password weak or strong and highlight satisfied rules.

Rules:
* Has at least one letter
* Has at least one lower and one upper case letter
* Has at least one number
* Has at least one special character
* Has length > 4
* Has length > 8
* Has length > 12

## Limitations
* You can change components and structure to your taste
* You can change tests strucure as well unless you luse some test cases

## Project setup and start
Clone this repo and run:
```
yarn install
yarn serve
```

### Run your unit tests
```
yarn test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
