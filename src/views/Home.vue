<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {
  requestAllModule,
  requestOperateMenuTenant
} from '@/api'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      list: []
    }
  },
  mounted () {
    requestAllModule({ tenantId: '20d3c93d-11e1-41a4-915a-7cf28043392b' }).then(res => {
      this.list = res.data.menu.concat(res.data.global)
      setTimeout(() => {
        this.init()
      }, 2000)
    })
  },
  methods: {
    init() {
      requestOperateMenuTenant(this.list).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
