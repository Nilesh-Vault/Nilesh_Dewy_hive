<template>
    <div>
      <Navbar></Navbar>
      
    
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
  console.log(Navbar)
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
  justify-content: space-between;
  gap: 20px;
}

.product-list div {
  flex-basis: calc(33.33% - 20px);
  background-color: #f7f7f7;
  padding: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
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