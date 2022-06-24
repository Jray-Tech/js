// Let us model a paerson 

let person = {
    name: "Barak Obama", 
    age: 45, 
    children_names : [
        "john ", "david", "mary"
    ], 
    was_predient: true, 
    is_male: true,
    cars: [
        {
            color: "white", 
            price: 30, 
        },
        {
            color: "red", 
            price: 20, 
        },
        {
            color: "black", 
            price: 90, 
        },
    ]
}

console.log(person)

// Let us go through the person object 

// what is the color of his second car ? 

// step ne
let get_cars = person['cars']
console.log("the cars")
console.log(get_cars)
// remembwer the cars itself is an array 


// get the second car from the cars  we have to treat it as an array because it is an array 
let car_obj = get_cars[1] 
console.log("the car object ")
console.log(car_obj)


// finally get the coor from the object you have 
console.log(car_obj["color"])



// to simplify 
console.log("simplified version ")
console.log(person["cars"][1]["color"])

