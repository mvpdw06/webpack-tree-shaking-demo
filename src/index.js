// Case.1
// import module.js but not use, will not include in bundle.
// import module form './module' 

// Case.2
// import module.js but only use A function, will include all module.js in bundle.
// import module form './module' 
// module.A()

// Case.3
// import only A function by Destructuring-Assignment of module.js, will only include A function in bundle.
// import { A } from './module'
// A()

// require syntax will be bundle all of module.js, weather you use or not.
// const module = require('./module')

console.log('Hello')