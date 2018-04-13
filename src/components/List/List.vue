<template>
  <ol class="list-reset">
    <li v-for="item in items" v-bind:key="item.id" class="">
      <div class="border">
          <button type="button" name="button" class="w-full block"
                  v-on:click="item.active = !item.active">
            <h4 class="p-2 text-grey font-sans font-light block text-left">
              {{item.name}}
            </h4>
          </button>
        <ol class="list-reset" v-if="item.active" >
          <li v-for="view in item.views" v-bind:key="view.id"
              class="bg-grey-light text-white p-2 border-white border-b">
              <h4 class="p-2 font-sans font-light ">
                {{view.name}}
              </h4>
          </li>
        </ol>
      </div>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'List',
  props: ['items'],
  data() {
    return {
    };
  },
};
</script>
