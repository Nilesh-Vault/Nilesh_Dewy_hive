<template>
    <div class="product-details">
      <div class="product-details-header">
        <img :src="product.image" :alt="product.name" class="product-details-image">
        <div class="product-details-info">
          <h1>{{ product.name }}</h1>
          <p class="product-details-price">{{ product.price }}</p>
          <p class="product-details-description">{{ product.description }}</p>
          <button class="product-details-add-to-cart" @click="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductDetails',
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
  .product-details {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .product-details-header {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  .product-details-image {
    width: 300px;
    margin-right: 20px;
  }
  
  .product-details-info {
    display: flex;
    flex-direction: column;
  }
  
  .product-details-price {
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  
  .product-details-add-to-cart {
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }
  </style>
  