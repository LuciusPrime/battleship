<template>
  <div id="app">
    <info-pane />
    <main id="game" :class="$store.state.turnStatus">
      <div class="board-wrapper">
        <div>
          <h3>Your Board</h3>
          <game-board />
        </div>
        <div>
          <h3>Enemy Board</h3>
          <game-board />
        </div>
      </div>

      <h4>Your Ships</h4>
      <tool-bar :ships="$store.getters.ships" />
      <h4>Enemy Ships</h4>
      <tool-bar :ships="$store.getters.enemyShips" />
    </main>
    <portal to="modal" v-if="$store.state.turnStatus === 'start'">
      <button v-on:click="startGame">Start</button>
    </portal>
    <portal-target name="modal" id="modal" v-if="$store.state.showModal"></portal-target>
  </div>
</template>

<script>
import InfoPane from "./components/InfoPane";
import ToolBar from "./components/ToolBar";
import GameBoard from "./components/GameBoard";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    InfoPane,
    ToolBar,
    GameBoard
  },
  methods: {
    startGame: function() {
      this.$store.commit("statusUpdate", "setPieces");
      this.$store.commit("toggleModal");
    }
  }
};
</script>

<style lang="scss">
@import "./components/styles/_app.scss";
</style>
