<template>
  <div class="container">
    <div>
      <h1 class="title">
        lemony
      </h1>
      <p class="temp">{{device}} °C</p>
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
  async fetch() {
    const { data } = await this.$axios.get('https://glacial-woodland-17786.herokuapp.com/sours/1')
    this.device = data.Temperature
  },
  computed: {
    async getDevice({ $axios }) {

      /* const { data: ip }= await $axios.$get('https://glacial-woodland-17786.herokuapp.com/sours/1')
      .then(
        (response) => {
          console.log(response)
          this.device = response.Temperature;
        },
        (error) => {
          console.log(error.response.status);
        }
      ); */
    }
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
.temp {
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
  font-weight: 700;
    font-size: 60px;
    color: #35495e;
    letter-spacing: 0;
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
