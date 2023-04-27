<template>
    <div class="product">
      <div class="product-image">
        <img :src="product.image" :alt="product.name">
      </div>
      <div class="product-info">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p>
        <button class="product-add-to-cart" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Product',
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    methods: {
      addToCart() {
        this.$emit('add-to-cart', this.product);
      }
    }
  };
  </script>
  
  <style>
  .product {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
  }
  
  .product-image img {
    width: 100%;
    max-width: 300px;
  }
  
  .product-info {
    text-align: center;
    margin-top: 20px;
  }
  
  .product-info h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .product-info p {
    margin-bottom: 10px;
  }
  
  .product-add-to-cart {
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }
  </style>
  