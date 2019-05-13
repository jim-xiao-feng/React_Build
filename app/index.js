import { add } from './utils/math'

class App {
  constructor() {
    document.addEventListener('click', () => {
      this.getComponent().then(element => {
        document.body.appendChild(element)
      })
    })
  }

  getComponent() {
    // 懒加载
    return import(/* webpackChunkName: 'lodash' */ 'lodash/join').then(({ default: { join } }) => {
      const element = document.createElement('div')
      element.innerText = join(['hello', 'jim'], '-')
      return element
    })
  }

  render() {
    document.getElementById('app').innerText = 'webpack入门' + add(1, 3)
  }
}

new App().render()