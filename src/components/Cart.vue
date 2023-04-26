<template>
    <div class="cart">
      <div class="cart-header">
        <h2>Cart</h2>
        <button class="cart-clear-button" @click="clearCart">Clear Cart</button>
      </div>
      <div class="cart-items">
        <div v-if="cartItems.length === 0">No items in cart</div>
        <div v-else>
          <div class="cart-item" v-for="(cartItem, index) in cartItems" :key="index">
            <img :src="cartItem.image" :alt="cartItem.name" class="cart-item-image">
            <div class="cart-item-info">
              <h3>{{ cartItem.name }}</h3>
              <p>{{ cartItem.price }}</p>
              <button class="cart-item-remove" @click="removeFromCart(index)">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Cart',
    props: {
      cartItems: {
        type: Array,
        required: true
      }
    },
    methods: {
      removeFromCart(index) {
        this.$emit('remove-from-cart', index);
      },
      clearCart() {
        this.$emit('clear-cart');
      }
    }
  };
  </script>
  
  <style>
  .cart {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .cart-clear-button {
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #dc3545;
    color: #fff;
    cursor: pointer;
  }
  
  .cart-items {
    margin-top: 20px;
  }
  
  .cart-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .cart-item-image {
    width: 100px;
    margin-right: 20px;
  }
  
  .cart-item-info {
    display: flex;
    flex-direction: column;
  }
  
  .cart-item-remove {
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #dc3545;
    color: #fff;
    cursor: pointer;
    margin-left: auto;
}
</style>
   
  