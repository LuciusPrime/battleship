<template>
  <div class="game-board">
    <input type="checkbox" v-for="n in 100" v-on:click="checkClick" :name="n" />
  </div>
</template>

<script>
export default {
  methods: {
    checkClick: function(event) {
      this.$store.commit("checkSpot", event.target.name);
      event.target.disabled = true;
    }
  }
};
</script>

<style lang="scss">
@import "./styles/_game-board.scss";
</style>
