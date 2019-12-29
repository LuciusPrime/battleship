<template>
  <div class="ships-container">
    <div v-for="ship in this.ships">
      <ship-indicator v-bind:ship="{ ...ship }" />
    </div>
  </div>
</template>

<script>
import ShipIndicator from "./ShipIndicator";
export default {
  props: ["ships"],
  components: {
    ShipIndicator
  }
};
</script>

<style lang="scss">
@import "./styles/_ships-container.scss";
</style>
