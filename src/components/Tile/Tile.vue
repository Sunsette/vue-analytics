<template>
<div class="flex-auto p-2 mx-2 mt-2 border shadow h-64">
  <h1 class="text-grey font-sans font-light px-2 inline-block">{{config.header}}</h1>
  <div class="">
    <vue-chart :chart-type="config.type" :columns="config.columns" :rows="config.rows"
      :options="config.options"></vue-chart>
  </div>
</div>
</template>

<script>
export default {
  name: 'Tile',
  props: ['config'],
  data() {
    return {
      type: 'BarChart',
    };
  },
};
</script>
