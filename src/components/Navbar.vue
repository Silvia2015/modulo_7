<template>
    <nav class="navbar navbar-expand-lg bg-success" data-bs-theme="dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
     
        <router-link class="navbar-brand" to="/">Enseñansa en linea</router-link>
  
        <router-link  to="/carrito">
          <div class="icon-carrito d-md-block d-lg-none mx-3">
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </router-link>
  
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Home</router-link>
             
            </li>
          </ul>
          
          <select class="btn btn-dark">
            <option>HTML</option>
            <option>CSS</option>
            <option>SCSS</option>
            <option>VUE</option>
          </select>
  
          <router-link class="carrito-container d-flex" to="/carrito">
            <div class="icon-carrito d-none d-md-none d-lg-block mx-3">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div class="counter">
              <div class="counter-number">
                {{ Object.keys(carrito).length }}
              </div>
            </div>
          </router-link>
  
          <button class="btn btn-outline-light btn-sm" @click="logout">Cerrar Sesión</button>
         
  
        </div>
      </div>
    </nav>
  </template>
  
  
  <script>
  export default {
    name: 'Navbar',
    methods: {
      logout() {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('carrito');
        this.$router.push('/login');
      }
    },
    computed: {
      carrito() {
        return this.$store.state.carrito;
      }
    }
  }
  </script>
  
  <style scoped>
  .icon-carrito {
    color: white;
    font-size: 2rem;
    
  }
  .carrito-container {
    position:relative;
  }
  .counter {
    position:absolute;
    background-color:red;
    padding:10px;
    border-radius: 30%;
    width:30px;
    height:32px;
    top:-8px;
    left:37px;
  }
  .counter .counter-number {
    position:relative;
    top: -8px;
    color:white;
  }
  </style>