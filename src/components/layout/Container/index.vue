<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as *;

.container {
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
}

@include laptop {
  .container {
    max-width: 750px;
  }
}

@include phone {
  .container {
    max-width: 375px;
  }
}
</style>
