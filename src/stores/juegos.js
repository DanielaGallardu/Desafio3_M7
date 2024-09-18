import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useJuegosStore = defineStore('juegos', () => {
  const juegos = ref([]);

  async function fetchGames() {
    try {
      const url = '/api/juegos.json';
      const { data } = await axios.get(url);
      juegos.value = data;
    } catch (error) {
      alert('Lista de Juegos no disponible');
      console.error(error);
    }
  }

  function sumarStock(codigo) {
    juegos.value.map(juego => {
      if (juego.codigo === codigo) {
        juego.stock++
      }
    })
  }

  function restarStock(codigo) {
    juegos.value.map(juego => {
      if (juego.codigo === codigo && juego.stock > 0) {
        juego.stock--
      }
    })
  }

  return {
    juegos,
    fetchGames,
    sumarStock,
    restarStock
  }
});
