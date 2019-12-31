import Vue from "vue";
import Vuex from "vuex";
import "es6-promise/auto";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    turnStatus: "start",
    showModal: true,
    guesses: [],
    enemyGuesses: [],
    ships: [
      {
        name: "Carrier",
        destroyed: false,
        maxHP: 5,
        currentHP: 4
      },
      {
        name: "Battle Ship",
        destroyed: false,
        maxHP: 4,
        currentHP: 2
      },
      {
        name: "Cruiser ",
        destroyed: false,
        maxHP: 3,
        currentHP: 1
      },
      {
        name: "Submarine",
        destroyed: false,
        maxHP: 3,
        currentHP: 3
      },
      {
        name: "Destroyer",
        destroyed: false,
        maxHP: 2,
        currentHP: 1
      }
    ],
    enemyShips: [
      {
        name: "Carrier",
        destroyed: false,
        maxHP: 5,
        currentHP: 5
      },
      {
        name: "Battle Ship",
        destroyed: false,
        maxHP: 4,
        currentHP: 3
      },
      {
        name: "Cruiser ",
        destroyed: false,
        maxHP: 3,
        currentHP: 1
      },
      {
        name: "Submarine",
        destroyed: false,
        maxHP: 3,
        currentHP: 3
      },
      {
        name: "Destroyer",
        destroyed: true,
        maxHP: 2,
        currentHP: 0
      }
    ]
  },
  mutations: {
    statusUpdate(state, status) {
      state.turnStatus = status;
    },
    toggleModal(state) {
      setTimeout(() => {
        state.showModal = false;
      }, 2000);
    },
    checkSpot(state, payload) {
      if (state.turnStatus == "player" || state.turnStatus == "computer") {
        state.turnStatus == "player"
          ? state.guesses.push(payload)
          : state.enemyGuesses.push(payload);
      }
    }
  },
  getters: {
    ships: state => state.ships,
    enemyShips: state => state.enemyShips,
    turnStatus: state => state.turnStatus
  }
});
