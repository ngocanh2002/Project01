// Task 1
function printListProducts (listProducts)
{
    console.log(listProducts);
}

const listProducts = [
    {
        id: 'TP001',
        name: 'Iphone',
        price: 30000000,
    },
    {
        id: 'TP002',
        name: 'SamSung',
        price: 20000000,
    },
    {
        id: 'TP003',
        name: 'Nokia',
        price: 10000000,
    },
    {
        id: 'TP004',
        name: 'Xiaomi',
        price: 25000000,
    },
    {
        id: 'TP005',
        name: 'LG',
        price: 35000000,
    },
];
console.log('Task 1:')
printListProducts(listProducts);

// Task 2 : the Product is higher than 30.000.000 and lower than 10.000.000

const result = listProducts.filter(function(listProducts, index, array){
    return (listProducts.price < 30000000) && (listProducts.price > 10000000);
})
console.log('Task 2: ')
console.log(result);

// Task 3 : the Product is lower than 20.000.000
function comparePrice(listProduct)
{
    if (listProduct.price < 20000000){
        return {
            id: listProduct.id,
            name: `${listProduct.name} - Hot deal`,
            price: listProduct.price
        }
    }
}

const tagProducts = listProducts.map(comparePrice);
console.log('Task 3:')
console.log(tagProducts);

// Total Price
const totalPrice = listProducts.reduce((a,b)=> a + b.price,0);
console.log(totalPrice);