<template>
  <div class="container">
    <div>
      <h1 class="title">
        lemony
      </h1>
      <p>{{device}}</p>
      <p>{{ip}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      device: []
    }
  },
  computed: {
    console() {
      return "bonk"
    },
  },
  methods: {
      async loadDevice(){
          const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjE3IiwiYXBwTmFtZSI6ImIxZGZmNDdlLTk4NWMtMTFlYi1hOGIzLTAyNDJhYzEzMDAwMyJ9.8kp2Mq7rvT7BkCjT0sKE15iL6N7cRtlBoffYZalverM';
          const apiUrl = 'https://sense.applio.tech/data/device/a84041935182d48d/latest'
          await $axios.$get(apiUrl, {
            headers: {
              "Authorization": `Bearer ${accessToken}`
            }
          })
          .then(function( response ){
              this.device = response.data;
          }.bind(this));
      }
  },
  async asyncData({ $axios }) {
    const ip = await $axios.$get('http://icanhazip.com')
    return { ip }
  },
  async getBonk({ $axios }) {
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjE3IiwiYXBwTmFtZSI6ImIxZGZmNDdlLTk4NWMtMTFlYi1hOGIzLTAyNDJhYzEzMDAwMyJ9.8kp2Mq7rvT7BkCjT0sKE15iL6N7cRtlBoffYZalverM';
    const apiUrl = 'https://sense.applio.tech/data/device/a84041935182d48d/latest'

    const response = await $axios.$get(apiUrl, {
      headers: {
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${accessToken}`
      }
    })
    .then(
      (response) => {
       // this.data = response.data;
      },
      (error) => {
        console.log(error.response.status);
      }
    );
    return response
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
