<template>
  <div id="app">
    <header>
      Battleship
    </header>
    <main id="game">
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
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar";
import GameBoard from "./components/GameBoard";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    ToolBar,
    GameBoard
  }
};
</script>
