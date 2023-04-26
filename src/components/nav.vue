<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link :to="{ name: 'home' }">Skincare Store</router-link>
    </div>
    <button class="navbar-toggle" @click="toggleNav">
      <i class="fas fa-bars"></i>
    </button>
    <ul class="navbar-menu" :class="{ 'active': isNavOpen }">
      <li class="navbar-item">
        <router-link :to="{ name: 'Home' }"><i class="fas fa-home"></i> Home</router-link>
      </li>
      <li class="navbar-item">
        <router-link :to="{ name: 'About' }"><i class="fas fa-info-circle"></i> About</router-link>
      </li>
      <li class="navbar-item">
        <router-link :to="{ name: 'Contact' }"><i class="fas fa-envelope"></i> Contact</router-link>
      </li>
      <li class="navbar-item">
        <router-link :to="{ name: 'CartPage' }">
          <i class="fas fa-shopping-cart"></i> Cart
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import '@fortawesome/fontawesome-free/css/all.css'

  export default {
    name: 'Navbar',
    data() {
      return {
        isNavOpen: false,
      };
    },
    methods: {
      toggleNav() {
        this.isNavOpen = !this.isNavOpen;
      },
    },
  };
</script>

<style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #f089b2;
    color: #fff;
    position: relative;
    width:100% ;
  }
  
  .navbar-brand {
    font-size: 24px;
    font-weight: bold;
  }
  
  .navbar-menu {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #f089b2;
    transition: all 0.3s ease-in-out;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
  }
  
  .navbar-menu.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }
  
  .navbar-item {
    margin-bottom: 10px;
  }
  
  .navbar-item:last-child {
    margin-bottom: 0;
  }
  
  .fa {
    font-family: 'Font Awesome 5 Free';
    font-weight: 800;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
  }

  /* Media queries */
  @media (min-width: 768px) {
    .navbar-menu {
      position: static;
      flex-direction: row;
      background-color: transparent;
      opacity: 1;
      pointer-events: all;
      transform: none;
      margin: 0;
    }

    .navbar-menu.active {
      display: flex;
    }

    .navbar-item {
      margin-left: 20px;
      margin-bottom: 0;
    }

    .navbar-item:last-child {
      margin-right: 0;
    }

    .navbar-toggle {
      display: none;
    }
  }
</style>
