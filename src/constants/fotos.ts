import foto1 from '../images/fotos/1.png'
import foto2 from '../images/fotos/2.png'
import foto3 from '../images/fotos/3.png'
import foto4 from '../images/fotos/4.png'
import foto5 from '../images/fotos/5.png'
import foto6 from '../images/fotos/6.png'
import foto7 from '../images/fotos/7.png'
import foto8 from '../images/fotos/8.png'
import foto10 from '../images/fotos/10.png'
import foto11 from '../images/fotos/11.png'
import foto12 from '../images/fotos/12.png'
import foto13 from '../images/fotos/13.png'
import foto14 from '../images/fotos/14.png'
import foto15 from '../images/fotos/15.png'
import foto16 from '../images/fotos/16.png'
import foto17 from '../images/fotos/17.png'
import foto18 from '../images/fotos/18.png'
import foto19 from '../images/fotos/19.png'
import foto20 from '../images/fotos/20.png'
import { user, user2, user3, user4 } from './users'

class Api {
  async getComments() {
    const data = await fetch('https://jsonplaceholder.typicode.com/comments')
    const response = await data.json()
    return response
  }
}

export const api = new Api()

export const fotoObj1: any = {
  image: foto1,
  likes: [...new Array(Math.floor(Math.random() * 100))],
  description: 'description',
  date: new Date(),
}

export const fotoObj2: any = {
  image: foto2,
  likes: [],
  description: 'description',
  date: new Date(),
  // owner: user
}

export const fotoObj3: any = {
  image: foto3,
  likes: [],
  description: 'description',
  date: new Date(),
  // owner: user
}

export const fotoObj4: any = {
  image: foto4,
  likes: [],
  description: 'description',
  date: new Date(),
  // owner: user
}

export const fotoObj5: any = {
  image: foto5,
  likes: [],
  description: 'description',
  date: new Date(),
  // owner: user
}

export const fotoObj6: any = {
  image: foto6,
  likes: [],
  description: 'description',
  date: new Date(),
  // owner: user2
}

export const fotoObj7: any = {
  image: foto7,
  likes: [],
  description: 'description',
  date: new Date(),
  // owner: user2
}

export const fotoObj8: any = {
  image: foto8,
  likes: [],
  description: 'description',
  date: new Date(),
  // owner: user2
}

export const fotoObj10: any = {
  image: foto10,
  likes: [],
  description: 'description',
  date: new Date(),
  // owner: user2
}

export const fotoObj11: any = {
  image: foto11,
  likes: [],
  description: 'description',
  date: new Date(),
  // owner: user3
}

export const fotoObj12: any = {
  image: foto12,
  likes: [],
  description: 'description',
  date: new Date(),
  // owner: user3
}

export const fotoObj13: any = {
  image: foto13,
  likes: [],
  description: 'description',
  date: new Date(),
  // owner: user3
}

export const fotoObj14: any = {
  image: foto14,
  likes: [],
  description: 'description',
  date: new Date(),
  // owner: user3
}

export const fotoObj15: any = {
  image: foto15,
  likes: [],
  description: 'description',
  date: new Date(),
  // owner: user3
}

export const fotoObj16: any = {
  image: foto16,
  likes: [],
  description: 'description',
  date: new Date(),
  // owner: user3
}

export const fotoObj17: any = {
  image: foto17,
  likes: [],
  description: 'description',
  date: new Date(),
  // owner: user3
}

export const fotoObj18: any = {
  image: foto18,
  likes: [],
  description: 'description',
  date: new Date(),
  // owner: user3
}

export const fotoObj19: any = {
  image: foto19,
  likes: [],
  description: 'description',
  date: new Date(),
  // owner: user4
}

export const fotoObj20: any = {
  image: foto20,
  likes: [],
  description: 'description',
  date: new Date(),
  // owner: user4
}
