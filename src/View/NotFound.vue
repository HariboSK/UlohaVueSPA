<template>
  <section class="not-found">
    <p class="not-found__code">404</p>
    <h1>Stránka sa nenašla</h1>
    <p>Ľutujeme, požadovaná stránka neexistuje.</p>
    <RouterLink to="/">Späť na domovskú stránku</RouterLink>
  </section>
</template>

<style scoped>
.not-found {
  min-height: calc(100vh - 170px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.not-found__code {
  margin: 0;
  color: #2c3e50;
  font-size: clamp(7rem, 22vw, 14rem);
  font-weight: 900;
  line-height: 0.85;
}

.not-found h1 {
  margin: 30px 0 10px;
  font-size: 2rem;
}

.not-found p:not(.not-found__code) {
  margin: 0 0 25px;
  font-size: 1.1rem;
}

.not-found a {
  padding: 12px 20px;
  border-radius: 5px;
  background: #2c3e50;
  color: white;
  transition: background 0.2s ease;
}

.not-found a:hover {
  background: #589e4c;
}
</style>
