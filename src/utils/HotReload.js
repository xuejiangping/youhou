


export class HotReload {
  ws_url
  ws

  constructor({ ws_url }) {
    this.ws_url = ws_url
    this.ws = new WebSocket(this.ws_url)
    this.ws.addEventListener('message',(e) => {

      try {
        const { type } = JSON.parse(e.data)
        if (type == 'reload') location.reload()
      } catch (error) {
        console.error(error)
      }
    })
  }


}