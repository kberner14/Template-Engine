# Template Engine

* This application is a quick template engine that allows the user to create a quick breakdown of their team as well as store vital information about each member.


## Table of Contents



* [Depenencies](#Dependencies)

* [Goals](#Goals)

* [Challenges](#Challenges)

* [Touchups](#Touchups)

# Dependencies

* This application makes use of several dependencies.

* To access the dependencies of NPM, NPM will need to be initialized using NPM init

* A suite of dependencies from NPM include inquirer, path, and fs and should be installed using NPM install on the command line

* The jest package will be needed as well and can be downloaded using the NPM install --save jest on the command line

# Goals

* This application should simplify the tedious task of creating information sheets for new work or study groups
* After running the command line the user should be prompted with several questions
* After creating a manager, a user can enter any number of follow up team members information allowing for engineers and interns to be added to the group
* When no further members are needed, the entry process will end and an HTML file containing preconstructed cards should appear containing all entered information


# Challenges

* It was difficult, yet satisfying using jest's testing capabilities. This seems like an incredibly powerful tool
* Figuring out the correct exportation methods can be somewhat challenging
* Creating and combining the employee.js file to all the other job file.js was an interesting puzzle

# Things That Need Touch Ups

* The htmlRenderer page is not linked

* Adding some formatting to spice up the UI couldn't hurt

* Refactoring to DRY up the code is certainly an option

* Need a better working understanding of both fs.writeFile and sendFile type functions and understand when and why to use each.