<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import request from '@/http/request'
export default {
  mounted () {
    this.getData()
  },
  methods: {
      getData() {
          request.http_mock('http://test.mockjs.com/test').then(response => {
              window.console.log(response._data)
          })
      }  
  }
}
</script>