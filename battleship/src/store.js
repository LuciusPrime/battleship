import Vue from "vue";
import Vuex from "vuex";
import "es6-promise/auto";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    turnStatus: "start",
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
    //TODO:delete
    change(state, flavor) {
      state.flavor = flavor;
    },
    checkSpot(state, payload) {
      payload[0] == "player"
        ? state.guesses.push(payload[1])
        : state.enemyGuesses.push(payload[1]);
    }
  },
  getters: {
    ships: state => state.ships,
    enemyShips: state => state.enemyShips,
    turnStatus: state => state.turnStatus
  }
});
