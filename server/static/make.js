const faker = require('faker');

categoriesQty = 8;
productsQty = 600;
relatedQty = 12;

const mathRandom = n => {
    return Math.floor(Math.random() * n);
};

const randomProducts = () => {
    const n = mathRandom(relatedQty);
    return new Array(n).fill(null).map(e => (e = mathRandom(productsQty)));
};

const randomCategory = () => {
    const n = mathRandom(categoriesQty);
    return new Array(n).fill(null).map(e => (e = mathRandom(categoriesQty)));
};

const randomGallery = () => {
    return new Array(6).fill(null).map(e => (e = faker.image.imageUrl()));
};

const products = new Array(productsQty).fill(null).map((e, i) => {
    return {
        id: i + 1,
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        short_description: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        thumbnail: faker.image.imageUrl(),
        gallery: randomGallery(),
        categories: randomCategory(),
        related: randomProducts(),
    };
});

module.exports = products;
