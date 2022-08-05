let furniture = [
    {
        type: 'desk',
        price: 27.87
    },
    {
        type: 'closet',
        price: 187.32
    },
    {
        type: 'chair',
        price: 79.29
    },
    {
        type: 'bed',
        price: 239.99
    }
];
let devices = [
    {
        type: 'desktop',
        price: [272 + " - " + 769]
    },
    {
        type: 'laptop',
        price: [499 + " - " + 1800]
    },
    {
        type: 'smartphone',
        price: [100 + " - " + 800]
    },
    {
        type: 'tablet',
        price: [185 + " - " + 1000]
    },
    {
        type: 'console',
        price: 889
    }
];

let appliances = [
    {
        type: 'oven',
        price: 780
    },
    {
        type: 'microwave',
        price: [50 + " - " + 1400]
    },
    {
        type: 'mixer',
        price: 215.17
    }
];
function Product(category, type, price) {
    this.category = category;
    this.type = type;
    this.price = price;
    console.log(this.category)
    this.render = function () {
        return `
        <tr>
        <td><img src="images/${this.category}/${this.type}.svg"</td>
        <td>${this.type}</td>
        <td>${this.price} USD</td>
        <tr>
        `
    }
}
document.write(
    `<table class ="table">
<thead>
<tr>
<th class="cover">Icon</th>
<th>Name</th>
<th>Price</th>
</tr>
</thead>
<tbody>
${table(furniture,'furniture').join(" ")}
${table(devices,'devices').join(" ")}
${table(appliances,'appliances').join(" ")}
</tbody>
</table>`
)
function table(array,category) {
    let massive = [];
    array.forEach(object => {
        let product = new Product(category, object.type, object.price)
        massive.push(product.render())
    });
    return massive
}
table(furniture,'furniture');
table(devices,'devices');
table(appliances,'appliances');
