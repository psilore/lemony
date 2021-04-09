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
    async getDevice({ $axios }) {
      const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjE3IiwiYXBwTmFtZSI6ImIxZGZmNDdlLTk4NWMtMTFlYi1hOGIzLTAyNDJhYzEzMDAwMyJ9.8kp2Mq7rvT7BkCjT0sKE15iL6N7cRtlBoffYZalverM';
      const apiUrl = 'https://sense.applio.tech/data/device/a84041935182d48d/latest';

      const response = await $axios.$get(apiUrl, {
        headers: {
          'accept': 'application/json',
          'grpc-metadata-authorization': accessToken,
        }
      })
      .then(
        (response) => {
          console.log(response.data);
          this.device = response.data;
        },
        (error) => {
          console.log(error.response.status);
        }
      );

    }
  },
  methods: {
  },
  async asyncData({ $axios }) {
    const ip = await $axios.$get('http://icanhazip.com')
    return { ip }
  },
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
