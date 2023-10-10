const Product = require('../models/productModel');

const products = [
  {
    name: 'Product 1',
    price: 50,
    category: 'Electronics',
    availability: true,
  },
  {
    name: 'Product 2',
    price: 30,
    category: 'Clothing',
    availability: false,
  },
  {
    name: 'Product 3',
    price: 40,
    category: 'Electronics',
    availability: true,
  },
  {
    name: 'Product 4',
    price: 25,
    category: 'Toys',
    availability: true,
  },
  {
    name: 'Product 5',
    price: 60,
    category: 'Electronics',
    availability: true,
  },
  {
    name: 'Product 6',
    price: 60,
    category: 'Electronics',
    availability: true,
  },
  {
    name: 'Product 7',
    price: 60,
    category: 'Electronics',
    availability: true,
  },
  {
    name: 'Product 8',
    price: 60,
    category: 'Electronics',
    availability: true,
  },
];

const seedProducts = async () => {
  try {
    await Product.create(products);
    console.log('Seed: Initial data seeded successfully');
  } catch (error) {
    console.error('Seed: Error seeding initial data:', error);
  }
};

module.exports = seedProducts;
