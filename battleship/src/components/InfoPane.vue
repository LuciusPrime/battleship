<template>
  <header class="info-pane">
    Battleship
    <div class="info-message">{{ message }}</div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return { message: "" };
  },
  computed: { ...mapState(["turnStatus"]) },
  watch: {
    turnStatus: {
      immediate: true,
      handler: function(newValue) {
        if (newValue == "start") {
          this.message = "Press start to begin";
        } else {
          this.message = "xxx";
        }
      }
    }
  }
};
</script>

<style lang="scss">
@import "./styles/_info-pane.scss";
</style>
