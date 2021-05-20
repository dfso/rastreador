<template>
  <CardObjeto code="LB105350774HK" />
  <CardObjeto code="LB106571114HK" />
  <CardObjeto code="LB228052136SG" />
  <CardObjeto code="LE126599690SE" />
  <CardObjeto code="LE134346485SE" />
  <p>{{ lastUpdate }}</p>
</template>

<script>
import CardObjeto from "./components/CardObjeto.vue";
export default {
  name: "App",
  data() {
    return {
      lastUpdate: "",
    };
  },
  components: {
    CardObjeto,
  },
  methods: {
    getLastUpdate() {
      let currentDate = new Date();
      let time =
        currentDate.getHours() +
        ":" +
        currentDate.getMinutes() +
        ":" +
        currentDate.getSeconds();
      this.lastUpdate = "last update: " + time;
    },
  },
  mounted() {
    // reload page a cada 10 min
    setTimeout(() => {
      location.reload();
    }, 600000); // 5 minutos
    this.getLastUpdate();
  },
};
</script>

<style>
#app {
  display: flex;
  flex-wrap: wrap;
}
</style>
