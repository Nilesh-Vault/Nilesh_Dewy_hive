<template>
   <div class="login-page">
    <div class="login-container">
  <h1 class="login-header">Login</h1>
  <form @submit.prevent="login" class="login-form">
    <div class="form-group">
      <label for="email" class="form-label">Email:</label>
      <input type="email" v-model="email" required class="form-input">
    </div>
    <div class="form-group">
      <label for="password" class="form-label">Password:</label>
      <input type="password" v-model="password" required class="form-input">
    </div>
    <button type="submit" class="form-submit-btn">Login</button>
  </form>
  <hr>
  <h1 class="register-header">Don't have an account?</h1>
  <p class="register-subtext">Register now to access exclusive features and content.</p>
  <router-link :to="{ name: 'Register' }">
    <button class="register-btn">Register</button>
        </router-link>
  
</div>

  </div>
  </template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/compat/firestore';

// const db = firebase.firestore();
// db.collection('users').doc('user1').set({
//   name: 'John Doe',
//   age: 30,
//   email: 'johndoe@example.com'
// });


export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push('/home');
        })
        .catch(error => {
          console.error(error.message); // use console.error instead of alert
        });
    },
    
  },
};

  
</script>
<style scoped>
.login-page {
  background: linear-gradient(to bottom right, #bc347a, #918c91);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  animation: fade-in 1s;
}

.login-header {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;
  animation: slide-up 1s;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  animation: slide-up 1s;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
  width: 100%;
  animation: slide-up 1s;
}

.form-label {
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
}

.form-input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.form-submit-btn {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: slide-up 1s;
}

.form-submit-btn:hover {
  background-color: #3e8e41;
}

.register-header {
  margin-top: 30px;
  font-size: 1.5rem;
  color: #555;
  animation: slide-up 1s;
}

/* Animations */
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

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


</style>