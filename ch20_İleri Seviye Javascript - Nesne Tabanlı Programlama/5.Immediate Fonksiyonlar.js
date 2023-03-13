
// If we want that function works for one time, we use immediate functions

// normal function
function welcome(){

    var dates = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    var today = new Date();
    var msg = "Welcome. Today is " + dates[today.getDay()]
    return msg;
}

console.log(welcome());   // if we get error above, we should put ; after console.log()

// (function(){  // method 1

// }())


// (function(){  // method 2

// })()


// immediate functions
// (function(){ 

//     var dates = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
//     var today = new Date();
//     var msg = "Welcome. Today is " + dates[today.getDay()]
//     console.log(msg)    
// }());

(function(name){ 

    var dates = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    var today = new Date();
    var msg = 'Welcome ' + name +'. Today is ' + dates[today.getDay()]
    console.log(msg)    
}("Levent"));


