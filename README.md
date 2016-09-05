## chat

## Table of Content
1. [Description](#description)  
2. [Usage](#usage)  
3. [Branches](#branches)  
    a. [virgin](#virgin)  
    b. [virginAuth](#virginAuth)  
    c. [react](#react)  
4. [Todo](#todo)
---

## Description
This starter pack is designed to help you create a sails application with webpack and browserSync instead of grunt.  
Every change on any file will trigger a browser refresh.  
There is different branches for different purposes.  
All assets file can be written in ES6 format.  

## Usage
Simply clone the repo, switch to the needed branch, `npm install`, then `sails lift`  
Visit http://localhost:3000.  


---

## Branches
### virgin

##### Description
This is the native branch.  
Just sails + webpack + browserSync + sails-hook-autoreload

##### Todo
- add linker -> https://github.com/teamfa/linker-webpack-plugin

### virginAuth

##### Description
The `virgin` branch + an authentication layer

##### Todo
- add password length check
- add reCaptcha from google


### react
##### Description

- The `virginAuth` branch + react + redux + react-redux-router + redux-crud-async

---

## Todo
- ES6 support for `api` folder
- make a yeoman generator with this scaffold
