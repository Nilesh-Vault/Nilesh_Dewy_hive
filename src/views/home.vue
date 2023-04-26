<template>
    <div class="home">
        <Navbar></Navbar>
      <h1 class="home__heading">Welcome to our Skincare Store</h1>
      <p class="home__subheading">Here are some of our featured products:</p>
      <div class="product-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <router-link :to="{ name: 'product-details', params: { id: product.id }}">
            <div class="product-card__image" :style="{ backgroundImage: 'url(' + product.image + ')' }"></div>
            <div class="product-card__details">
              <h3 class="product-card__name">{{ product.name }}</h3>
              <p class="product-card__price">${{ product.price }}</p>
              <p class="product-card__description">{{ product.description }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    
  </template>
  <script>
  import Navbar from '@/components/nav.vue'
  export default {
    name: 'Home',
    components: {
    Navbar
  },
    data() {
      return {
      
        products: [
      {
        id: 1,
        name: 'Vitamin C Serum',
        description: 'A powerful antioxidant serum that helps brighten and enhance skin radiance.',
        image: 'https://via.placeholder.com/150x150.png?text=Vitamin+C+Serum',
        price: 35,
        category: 'Serums'
      },
      {
        id: 2,
        name: 'Retinol Cream',
        description: 'A retinol-based cream that helps reduce the appearance of fine lines and wrinkles.',
        image: 'https://via.placeholder.com/150x150.png?text=Retinol+Cream',
        price: 45,
        category: 'Moisturizers'
      },
      {
        id: 3,
        name: 'Hyaluronic Acid Serum',
        description: 'A hydrating serum that helps plump and moisturize the skin.',
        image: 'https://via.placeholder.com/150x150.png?text=Hyaluronic+Acid+Serum',
        price: 25,
        category: 'Serums'
      },
      {
        id: 4,
        name: 'Glycolic Acid Toner',
        description: 'A toner that exfoliates and helps improve the texture of the skin.',
        image: 'https://via.placeholder.com/150x150.png?text=Glycolic+Acid+Toner',
        price: 20,
        category: 'Toners'
      },
      {
        id: 5,
        name: 'SPF 30 Sunscreen',
        description: 'A broad-spectrum sunscreen that protects the skin from UVA and UVB rays.',
        image: 'https://via.placeholder.com/150x150.png?text=SPF+30+Sunscreen',
        price: 15,
        category: 'Sunscreen'
      }
    ],
      };
    },
  };
  </script>
  <style scoped>
 .home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
  max-width: 100%;
}

.home__heading {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.home__subheading {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2rem;
}

.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card__image {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
}

.product-card__details {
  padding: 1rem;
  text-align: center;
}

.product-card__name {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.product-card__price {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.product-card__description {
  font-size: 1rem;
  margin-bottom: 1rem;
}

/* Media query for smaller screens */
@media only screen and (max-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  .product-card__image {
    height: 150px;
  }

  .product-card__name {
    font-size: 1rem;
  }

  .product-card__price {
    font-size: 1rem;
  }

  .product-card__description {
    font-size: 0.8rem;
  }
}
</style>