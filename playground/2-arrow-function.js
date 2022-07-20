// const square = (x) => {
//     return x * x;
// }

// const square = (x) => x * x;
// console.log(square(39))

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Henry'],
    pringGuestList() {
        console.log('Guest List for ' + this.name)
        // Arrow functions dont bind their own this value like a normal function,
        // they bind with the context they are created in. hence more suitable below
        // and not suitable for methods.
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.pringGuestList();