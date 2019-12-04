
export default ({ $axios }, inject) => {
  $axios.onRequest((config) => {
    console.log(`Request on ${ config.url}`)
  })

  $axios.onResponse((resp) => {
    if (resp.status === 200) {
      console.log('Response data: ', resp.data)
    }
  })

  inject('testAxios', () => {
    $axios.get('https://jsonplaceholder.typicode.com/todos/1')
  })
}
