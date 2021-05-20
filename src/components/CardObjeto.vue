<template>
  <div class="card">
    <div class="card-header bg-primary text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="bi bi-mailbox"
        viewBox="0 0 16 16"
      >
        <path
          d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"
        />
        <path
          d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z"
        />
      </svg>
      {{ descricaoObjeto }}
      <span
        class="badge"
        v-bind:class="{
          'bg-success': success,
          'bg-warning': warning,
          invisible: info,
        }"
        >!</span
      >
    </div>
    <img src="" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-upc-scan"
          viewBox="0 0 16 16"
        >
          <path
            d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5zM3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"
          />
        </svg>
        {{ codigoObjeto }}
      </h5>
      <p class="card-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-alarm"
          viewBox="0 0 16 16"
        >
          <path
            d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"
          />
          <path
            d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"
          />
        </svg>
        {{ dataHora }}
      </p>
      <p class="card-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-geo-alt"
          viewBox="0 0 16 16"
        >
          <path
            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
          />
          <path
            d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          />
        </svg>
        {{ origem }}
      </p>
      <p class="card-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-geo-alt"
          viewBox="0 0 16 16"
        >
          <path
            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
          />
          <path
            d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          />
        </svg>
        {{ destino }}
      </p>
    </div>
    <div
      class="card-footer text-center"
      v-bind:class="{
        'bg-success': success,
        'bg-warning': warning,
        'bg-secondary': info,
      }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="bi bi-card-checklist"
        viewBox="0 0 16 16"
      >
        <path
          d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
        />
        <path
          d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"
        />
      </svg>
      {{ statusObjeto }}
    </div>
  </div>
</template>

<script>
import sendMessageToBOT from "../sendMessageTelegram.js";
export default {
  name: "CardObjeto",
  props: {
    code: String,
  },
  data() {
    return {
      codigoObjeto: "",
      descricaoObjeto: "",
      statusObjeto: "",
      dataHora: "",
      origem: "",
      destino: "",
      success: false,
      warning: false,
      info: true,
      objetos: [
        { codigo: "LB105350774HK", descricao: "redmi note 10" },
        { codigo: "LB106571114HK", descricao: "raspberry pi pico" },
        { codigo: "LB228052136SG", descricao: "adaptador bluetooth" },
        { codigo: "LE126599690SE", descricao: "display nextion" },
        { codigo: "LE134346485SE", descricao: "fone syllable s101" },
      ],
    };
  },
  methods: {
    async getObjectData(objectCode) {
      objectCode = this.code;
      this.descricaoObjeto = this.getDescription(this.objetos, objectCode);
      const url_api = `https://api.rastrearpedidos.com.br/api/rastreio/v1?codigo=${objectCode}`;

      const res = await fetch(url_api, { method: "GET" });
      const json = await res.json();
      console.log(json[0]);

      this.codigoObjeto = this.code;
      this.statusObjeto = json[0].descricao;

      this.dataHora = "data e hora: " + json[0].dataHora;
      this.origem = "em: " + json[0].cidade + "/" + json[0].uf;

      if (this.alertaDeEntrega(this.statusObjeto)) {
        let message =
          "`objeto " +
          this.descricaoObjeto.toUpperCase() +
          " será entregue HOJE! " +
          this.dataHora +
          "`";
        this.destino = "para: " + json[0].cidade + "/" + json[0].uf;
        //alert("objeto " + this.descricaoObjeto + " será entregue hoje!");
        this.info = false;
        this.warning = true;
        sendMessageToBOT(message);
        return;
      }

      if (this.foiEntregue(this.statusObjeto)) {
        //let message =
        "`objeto " +
          this.descricaoObjeto.toUpperCase() +
          " foi entregue: " +
          this.dataHora +
          "`";
        this.destino =
          "encomenda entregue em " + json[0].cidade + "/" + json[0].uf;
        this.info = false;
        this.success = true;
        //sendMessageToBOT(message);
        return;
      }
      this.destino =
        "para: " + json[0].destino.cidade + "/" + json[0].destino.uf;
    },
    getDescription(array, cod) {
      for (var i in array) {
        if (array[i].codigo === cod) {
          return array[i].descricao;
        }
      }
    },
    foiEntregue(string) {
      var re = /entregue/gi;
      if (string.search(re) == -1) {
        return false;
      } else return true;
    },
    alertaDeEntrega(string) {
      var re = /saiu/gi;
      if (string.search(re) == -1) return false;
      else return true;
    },
  },
  async created() {
    this.getObjectData(this.code);
  },
};
</script>

<style scoped>
.card {
  width: 18rem;
}

.card-body {
  background-color: #546e7a;
}
</style>
