<template>
<div class="tile">
  <h1 class="tile-header">{{config.header}}</h1>
  <div class="float-right relative z-50">
    <span class="float-right" v-on:click="isDropdownActive = !isDropdownActive">
      <wrench-icon v-bind:fill-color="'#999'" />
    </span>
    <ol class="list-reset bg-white" v-if="isDropdownActive">
      <li v-for="option in diagramOptions" v-bind:key="option.id">
        <button type="button" name="button" class="w-full block border"
v-on:click="select(option, config, diagramOptions)">
            <h4 class="tile-list-button-text">{{option.name}}</h4>
        </button>
      </li>
    </ol>
  </div>
  <div class="relative">
    <vue-chart v-if="showChart" :chart-type="config.type" :columns="config.columns"
:rows="config.rows" :options="config.options" ></vue-chart>
  </div>
</div>
</template>

<script>
import WrenchIcon from 'vue-material-design-icons/wrench';

import List from '../List/List';

export default {
  name: 'Tile',
  props: ['config'],
  components: {
    WrenchIcon,
    List,
  },
  data() {
    return {
      showChart: true,
      diagramOptions: [{
        id: 1,
        name: 'LineChart',
        active: false,
      }, {
        id: 2,
        name: 'BarChart',
        active: false,
      }],
      isDropdownActive: false,
    };
  },
  methods: {
    select(option, currentConfig) {
      const selectedConfig = option;
      this.$emit('configChanged', selectedConfig, currentConfig);
    },
  },
};
</script>
