<template>
    <div><Navbar></Navbar>
    
    <div class="product-list">

      <div v-for="product in products" :key="product.id">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p>
        <img :src="product.image" alt="product image">
      </div>
    </div>
</div>
  </template>
  
  

  <script>
import Navbar from '@/components/nav.vue'
  import db from '../firebase'
  
  export default {
    name : 'Temp',
    data() {
      return {
        products: []
      };
    },
    mounted() {
      db.collection("Products")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const product = doc.data();
            product.id = doc.id;
            this.products.push(product);
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  </script>
  <style>
.product-list {
  display: flex;
  flex-wrap: wrap;
}

.product-list div {
  width: 25%;
  padding: 20px;
  box-sizing: border-box;
}

.product-list h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.product-list p {
  margin-bottom: 10px;
}

.product-list img {
  width: 100%;
  height: auto;
}
</style>