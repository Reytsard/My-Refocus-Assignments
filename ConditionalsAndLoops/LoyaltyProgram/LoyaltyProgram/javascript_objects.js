let customer = {
    customer_name: "Johnny Manggo",
    points: 12300,
    cart: [
        {
            item: "Shampoo",
            quantity: 2,
            price_$: 3,
        },
        {
            item: "Soap",
            quantity: 2,
            price_$: 2,
        },
        {
            item: "Toothpaste",
            quantity: 1,
            price_$: 3,
        },
    ]
};
let total_bill = 0;

console.log(`Greetings ${customer.customer_name}! We are happy to see you today.`);
console.log(`You have ${customer.points} points.`);

for(let i = 0; i < customer.cart.length; i++){
    console.log(`${customer.cart[i].quantity}x ${customer.cart[i].item} ---- $${customer.cart[i].price_$}`);
    total_bill+=(customer.cart[i].quantity * customer.cart[i].price_$);
    customer.points += customer.cart[i].quantity;
}

console.log(`Total Bill: $${total_bill}`);
console.log(`New Total Points: ${customer.points}`);