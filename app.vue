<script setup>
  const { data } = await useFetch('https://hur.webmania.cc/products.json')
  const products = useState('products', () => data.value.products)
</script>

<template>
  <div>
    <nav>
      <ul>
        <li><NuxtLink to="/">Shop</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </nav>
    <main><NuxtPage /></main>
  </div>
</template>

<style scoped>
  div {
    display: grid;
    grid-template-columns: 1fr 5fr;
    max-width: 56rem;
    margin: 0 auto;
    gap: 1em;
  }
</style>