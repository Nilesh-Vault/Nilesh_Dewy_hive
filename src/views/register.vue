<template>
  <div class="register-page">
    <div class="register-container">
      <h1 class="register-header">Register</h1>
      <form @submit.prevent="register" class="register-form">
        <div class="form-group">
          <label for="name" class="form-label">Name:</label>
          <input type="text" v-model="name" required class="form-input">
        </div>
        <div class="form-group">
          <label for="email" class="form-label">Email:</label>
          <input type="email" v-model="email" required class="form-input">
        </div>
        <div class="form-group">
          <label for="password" class="form-label">Password:</label>
          <input type="password" v-model="password" required class="form-input">
        </div>
        <div class="form-group">
          <label for="confirmPassword" class="form-label">Confirm Password:</label>
          <input type="password" v-model="confirmPassword" required class="form-input">
        </div>
        <div class="form-group">
          <label for="age" class="form-label">Age:</label>
          <input type="number" v-model="age" required class="form-input">
        </div>
        <div class="form-group">
          <label for="gender" class="form-label">Gender:</label>
          <select v-model="gender" required class="form-input">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" class="form-submit-btn">Register</button>
      </form>
    </div>
  </div>
  </template>
  
  <script>
  import firebase from 'firebase/compat/app';
  import 'firebase/auth';
  import db from '../firebase'
// const db = firebase.firestore();

  // const db = getFirestore();
  
  export default {
    name: 'Register',
    data () {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: '',
        gender: '',
      }
    },
    methods: {
      register () {
        if (this.password !== this.confirmPassword) {
          console.error('Passwords do not match')
          return
        }
              firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(userCredential => {
          console.log("User created: ", userCredential.user.uid);
          // Save the additional user data to the database
          console.log("DB reference: ", db);
          console.log("DB collection: ", db.collection);
          db.collection('users').doc(userCredential.user.uid).set({
            name: this.name,
            email: this.email,
            age: this.age,
            gender: this.gender,
          })
          .then(() => {
            console.log("User data saved to database");
            this.$router.push('/');
          })
          .catch(error => {
            console.error("Error saving user data: ", error);
          });
        })
        .catch(error => {
          console.error("Error creating user: ", error);
        });
      },
    },
  }
  </script>
  
  
  <style>
  .register-page{
  background: linear-gradient(to bottom right, #bc347a, #918c91);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

}
.register-container {
  margin: 0 auto;
  width: 600px;
  max-width: 600px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  animation: slideInUp 0.5s ease;
}

@keyframes slideInUp {
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
}

.register-header {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #555;
}

.register-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  font-size: 1.2rem;
  color: #333;
}

.form-input {
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #f5f5f5;
  font-size: 1.2rem;
  color: #333;
  width: 100%;
}

.form-submit-btn {
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form-submit-btn:hover {
  background-color: #0069d9;
}
/* Animation */
@keyframes slideInUp {
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
}

/* Responsive Layout */
@media screen and (max-width: 768px) {
  .register-container {
    width: 90%;
    max-width: none;
  }
}

/* Updated CSS */
.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(to bottom right, #bc347a, #918c91);
}

.register-container {
  width: 600px;
  max-width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  animation: slideInUp 0.5s ease;
}

.register-header {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #555;
}

.register-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  font-size: 1.2rem;
  color: #333;
}

.form-input {
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #f5f5f5;
  font-size: 1.2rem;
  color: #333;
  width: 100%;
}

.form-submit-btn {
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form-submit-btn:hover {
  background-color: #0069d9;
}

/* Animation for submit button */
.form-submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

</style>
