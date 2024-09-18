<script>
import { mapStores } from "pinia";
import { useJuegosStore } from '@/stores/juegos.js';

export default {
  name: 'JuegosTable',
  computed: {
    ...mapStores(useJuegosStore)
  },
  created() {
    this.juegosStore.fetchGames()
  },
  methods: {
    sumarStock(codigo) {
      this.juegosStore.sumarStock(codigo)
    },
    restarStock(codigo) {
      this.juegosStore.restarStock(codigo)
    }
  }
};
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Código</th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Stock</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="juego in juegosStore.juegos" :key="juego.codigo">
        <td>{{ juego.codigo }}</td>
        <td>{{ juego.nombre }}</td>
        <td>${{ juego.precio }}</td>
        <td>{{ juego.stock }}</td>
        <td>
          <button @click="sumarStock(juego.codigo)">+</button>
          <button @click="restarStock(juego.codigo)">-</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.tabla-container {
  margin: 20px;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

th,
td {
  padding: 10px 10px;
  text-align: left;
}

thead {
  background-color: #8d2d52;
  color: white;
}

tbody tr {
  border-bottom: 1px solid #ffff;
}

tbody tr:hover {
  background-color: #f1f1f1;
}

button {
  background-color: #9c2478;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  margin: 5px;
}

button:hover {
  background-color: #882154;
}
</style>