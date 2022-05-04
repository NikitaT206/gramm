class MainApi {
  private _token: any
  private _url: any
  constructor({url, headers}: any) {
    this._url = url;
    this._token = headers['Cookie']
  };

  _returnRes(res: any) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  async signup(data: any) {
    const res = await fetch(this._url + 'signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        login: data.login,
        name: data.name
      }),
      credentials: 'include',
    })
    return this._returnRes(res)
  }

  async signin(data: any) {
    const res = await fetch(this._url + 'signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
      credentials: 'include',

    })
    return this._returnRes(res)
  }

  async getUserInfo() {
    const res = await fetch(this._url + 'profile', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': this._token,
      },
      credentials: 'include',
    })
    return this._returnRes(res)
  }
}

export const api = new MainApi(
  {url: 'http://localhost:3000/', 
  headers: {
    'Content-Type': 'application/json'
  },
})