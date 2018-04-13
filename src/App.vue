<template>
<div id="app" class="">
  <div class="w-full h-5vh border shadow">
    <div class="float-left flex">
      <input type="text" name="" value="" class="border h-nav-input" placeholder="Search" >
      <button type="button" name="button" class="bg-grey py-1 px-4">
        <magnify-icon v-bind:fill-color="'#fff'"/>
      </button>
    </div>
    <div class="float-right">
      <input type="text" name="" value="" class="border h-nav-input" placeholder="Date From" >
      <input type="text" name="" value="" class="border h-nav-input" placeholder="Date To">
    </div>
  </div>
  <div class="flex h-95vh">
    <div class="h-auto w-1/6 max-w-1/6 border shadow">
      <ol class="list-reset">
        <li v-for="collection in viewCollections" v-bind:key="collection.id" class="">
          <div class="border">
              <button type="button" name="button" class="w-full block"
                      v-on:click="collection.active = !collection.active">
                <h4 class="p-2 text-grey font-sans font-light block text-left">
                  {{collection.name}}
                </h4>
              </button>
            <ol class="list-reset" v-if="collection.active" >
              <li v-for="view in collection.views" v-bind:key="view.id"
                  class="bg-grey-light text-white p-2 border-white border-b">
                  <h4 class="p-2 font-sans font-light ">
                    {{view.name}}
                  </h4>
              </li>
            </ol>
          </div>
        </li>
      </ol>
    </div>
    <div class="h-auto flex w-5/6">
      <Tile v-for="tile in tiles" v-bind:key="tile.id" v-bind:config="tile" />
    </div>
  </div>
</div>
</template>

<script>
import MagnifyIcon from 'vue-material-design-icons/magnify';

import Tile from './components/Tile/Tile';

import ViewService from './services/ViewService';

export default {
  name: 'App',
  components: {
    Tile,
    MagnifyIcon,
  },
  data() {
    return {
      show: false,
      tiles: ViewService.getTiles(),
      viewCollections: [{
        id: 1,
        name: 'Sales',
        active: false,
        views: [{
          id: 1,
          name: 'Sales Overview',
        }, {
          id: 2,
          name: 'Sales Deep Dive',
        }],
      }, {
        id: 2,
        name: 'Product',
        active: false,
        views: [{
          id: 1,
          name: 'Product Overview',
        }, {
          id: 2,
          name: 'Product Deep Dive',
        }],
      }],
    };
  },
};
</script>

<style>
@import './assets/styles/main.css';

/*Component Css*/

@import './components/HelloWorld.css';
@import './components/Tile/Tile.css';
</style>
