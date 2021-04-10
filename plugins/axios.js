export default function({ $axios, store, redirect, config }) {
  console.log('AXIOS PLUGIN LOADED');
  //const API_URL = 'https://glacial-woodland-17786.herokuapp.com/';
  $axios.onRequest(request => {
    //console.log('[ REQUEST ]' + API_URL)
    //request.headers.common['Accept'] = 'application/json';
    //request.headers.common['Grpc-Metadata-Authorization'] = accessToken;
    //request.headers.common['Access-Control-Allow-Origin'] = '*';

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
