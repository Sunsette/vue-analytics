<template>
  <ol class="list-reset">
    <li v-for="list in lists" v-bind:key="list.id" class="">
      <div class="border">
          <button type="button" name="button" class="w-full block"
                  v-on:click="list.active = !list.active">
            <h4 class="p-2 text-grey font-sans font-light block text-left">
              {{list.name}}
            </h4>
          </button>
        <ol class="list-reset" v-if="list.active" >
          <li v-for="item in list.items" v-bind:key="item.id"
              class="bg-grey-light text-white p-2 border-white border-b">
              <h4 class="p-2 font-sans font-light ">
                {{item.name}}
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
  props: ['list'],
  data() {
    return {
    };
  },
};
</script>
