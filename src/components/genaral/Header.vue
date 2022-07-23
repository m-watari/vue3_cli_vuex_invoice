<template>
  <div class="head">
    <!-- <h2>Header</h2> -->
      <nav>
          <!-- <li class="head">{{ item.name }}</li> -->
          <span v-for="item in menu" :key="item.name">
            <router-link to="/">{{ item.name }}</router-link> |
          </span>
      </nav>

      <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  </div>
  <div class="clearfix"></div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HeaderView',
  computed: {
    ...mapState([
      "test",
      "count",
      "menu"
    ])
  }
}
</script>

<style>
.head {
  text-align: left;
}
.head nav{
  width: 100%;
  /* background-color: greenyellow; */
}
.head li{
  float: left;
  margin-right: 30px;
  /* display: inline-block; */
  list-style: none;
  /* background-color: lightpink; */
}
.clearfix {
  clear: both;
}
</style>