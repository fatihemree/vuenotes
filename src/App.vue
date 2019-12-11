<template>
  <div id="app">
    <div class="container">
      <date-picker
        v-model="zaman"
        format="hh:mm a"
        value-type="format"
        type="time"
        placeholder="hh:mm a"
      ></date-picker>
      <div class="row mt-3">
        <card
          :cardData="item"
          v-for="item in cardData"
          :key="item.id"
          class="col-4"
        ></card>
      </div>
    </div>
  </div>
</template>

<script>
import card from "@/components/card";
import cardData from "@/assets/data/card.json";

import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "app",
  components: {
    card,
    DatePicker
  },
  data() {
    return {
      cardData,
      zaman: null
    };
  }
};
</script>

<style lang="scss"></style>
