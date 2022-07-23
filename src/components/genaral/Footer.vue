<template>
  <div class="head">
      <nav>
          <span v-for="item in menu" :key="item.name">
            <router-link to="/">{{ item.name }}</router-link> |
          </span>
      </nav>
  </div>
  <div class="clearfix"></div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'FooterView',
  computed: {
    ...mapState([
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