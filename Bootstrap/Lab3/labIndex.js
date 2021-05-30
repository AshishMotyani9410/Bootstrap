//Template Literal

// function addressMaker(address) {
//     const newAddress = {
//         city: address.city,
//         state: address.state,
//         country: 'United States'
//     }

//     let {city,state,country} = newAddress
//     console.log(`${city},${state},${country}`)

// }


// let address = {
//     city: 'something',
//     state: 'somewhere'
// }


// addressMaker(address)

// console.log(obj.city)





// let arr = ['a','b','c','d','e']

// for(numIndex in arr){
//     console.log(numIndex)
// }

// for(arrValue of arr){
//     console.log(arrValue)
// }


async function resolveFewSeconds() {
    let variable = new Promise(resolve => {
    setTimeout(() => {
    resolve('resolved');
    }, 2000);
    });
    let result =  await variable
    console.log(result)
    }
    resolveFewSeconds()

    

