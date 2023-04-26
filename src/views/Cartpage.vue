<template>
    <div class="home">
      <!-- Render some content -->
      
      <!-- Render the Cart component -->
      <Cart :cartItems="cartItems" @remove-from-cart="removeFromCart" @clear-cart="clearCart" />
    </div>
  </template>
  
  <script>
  import Cart from '@/components/Cart.vue';
  
  export default {
    name: 'Home',
    components: {
      Cart
    },
    data() {
      return {
        cartItems: [
          {
            name: 'Item 1',
            price: 10.99,
            image: 'path/to/item1.png'
          },
          {
            name: 'Item 2',
            price: 5.99,
            image: 'path/to/item2.png'
          },
          // Add more items as needed
        ]
      }
    },
    methods: {
      removeFromCart(index) {
        // Handle remove from cart event
      },
      clearCart() {
        // Handle clear cart event
      }
    }
  }
  </script>
  