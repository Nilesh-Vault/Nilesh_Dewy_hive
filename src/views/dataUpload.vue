<template>
<div class="product-form">
  <h1>Add New Product</h1>
  <form @submit.prevent="addProduct">
    <label>
      Name:
      <input type="text" v-model="name" required>
    </label>
    <br>
    <label>
      Description:
      <textarea v-model="description" required></textarea>
    </label>
    <br>
    <label>
      Image:
      <input type="file" ref="image" @change="handleImageUpload" required>
    </label>
    <br>
    <label>
      Price:
      <input type="number" v-model="price" required>
    </label>
    <br>
    <label>
      Category:
      <select v-model="category" required>
        <option value="">--Select--</option>
        <option value="Serums">Serums</option>
        <option value="Moisturizers">Moisturizers</option>
        <option value="Toners">Toners</option>
        <option value="Sunscreen">Sunscreen</option>
      </select>
    </label>
    <br>
    <button type="submit">Add Product</button>
  </form>
</div>

  </template>
  <script>
  import { collection, addDoc } from 'firebase/firestore';
  import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
  import db, { storage } from '../firebase';
  
  export default {
    name: 'Upload',
    data() {
      return {
        name: '',
        description: '',
        image: '',
        price: '',
        category: '',
      };
    },
    methods: {
      async addProduct() {
        const product = {
          name: this.name,
          description: this.description,
          image: this.image,
          price: parseFloat(this.price),
          category: this.category,
        };
        const productsRef = collection(db, 'Products');
  
        try {
          await addDoc(productsRef, product);
          console.log('Product added successfully!');
          this.name = '';
          this.description = '';
          this.price = '';
          this.category = '';
          this.$refs.image.value = null; // clear the file input field
        } catch (error) {
          console.error('Error adding product: ', error);
        }
      },
      async handleImageUpload() {
        const file = this.$refs.image.files[0];
        const storageRef = ref(storage, 'product_images/' + file.name);
        try {
          const snapshot = await uploadBytes(storageRef, file);
          const downloadURL = await getDownloadURL(snapshot.ref);
          this.image = downloadURL;
        } catch (error) {
          console.error('Error uploading image: ', error);
        }
      },
    },
  };
  </script>

  <style>
.product-form {
  font-family: Arial, sans-serif;
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

h1 {
  text-align: center;
  font-size: 28px;
  color: #333;
}

label {
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
}

input,
textarea,
select {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  color: #333;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: none;
}

input[type="file"] {
  margin-bottom: 0;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #555;
}

form {
  animation-name: slide-up;
  animation-duration: 1s;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>