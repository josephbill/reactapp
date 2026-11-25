# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Creation of a react app 
npm create vite@latest projectName -- --template react-js
## where to run the npm commands 
- npm runs where the package.json lives 
- cd into project 
- npm install  - to install dependencies  
- npm run dev - start the server  

## Component Tree 
- description of the components merged for the interface 
                      Navbar 
side menu(ASIDE)             MAINcontent                content 
                      Footer 

App(grid layout / flexbox layout) - data can flow in a unidirectional (fetch data) - using props - drill down the info to the other components 
 |
 Navbar (user) - searchForm-Component
 |
 SideMenu
 |
 Main content (user)
 |
 Footer

## React communication 
1. Parent to child component - unidirectional data flow - props 
2. Child back to parent - callback functions 


## building a team card gallery 
Header - banner detail 
TeamCard - showcase of a team member 
TeamList - list showcase of team members 
Footer - footer content 

                                header 
                            Team      Gallery
                                Footer 
 

## STYLING APPROACHES IN REACT 
- Global CSS : index.css  : global resets , fonts / base styles 
- CSS files per component : App.css 
- Advanced styling libs like Tailwind.css , Bootstrap.css 