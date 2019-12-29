<template>
  <div class="ship-indicator" :class="{ destroyed: ship.destroyed == true }">
    <div class="ship-indicator--health">
      <span
        v-for="(health, idx) in ship.maxHP"
        :class="{ hit: idx >= ship.currentHP }"
      />
    </div>
    <p>{{ ship.name }}</p>
  </div>
</template>

<script>
export default {
  props: ["ship"],
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "./styles/_ship-indicator.scss";
</style>
