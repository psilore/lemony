export default function({ $axios, store, redirect }) {
  console.log('AXIOS PLUGIN LOADED');
  //const apiUrl = 'https://sense.applio.tech/data/device/a84041935182d48d/latest';
  const device = 'device/a84041935182d48d/latest';
  $axios.onRequest(request => {
    console.log('[ REQUEST ]' + "/api/device/a84041935182d48d/latest")
    request.headers.common['Accept'] = 'application/json';
    request.headers.common['Grpc-Metadata-Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjE3IiwiYXBwTmFtZSI6ImIxZGZmNDdlLTk4NWMtMTFlYi1hOGIzLTAyNDJhYzEzMDAwMyJ9.8kp2Mq7rvT7BkCjT0sKE15iL6N7cRtlBoffYZalverM';
    request.headers.common['Access-Control-Allow-Origin'] = '*';

    return request
  })

  $axios.onResponse(response => {
    console.log('[ RESPONSE ]' + response.request.responseURL, response)

    return response
  })

  $axios.onError(error => {
    console.error('[ ERROR ]', error)
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      return redirect('/')
    }

    return error
  })
}
