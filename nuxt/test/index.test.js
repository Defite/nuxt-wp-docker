import test from 'ava'
import { Nuxt, Builder } from 'nuxt'
import { resolve } from 'path'

let nuxt = null;

// Init Nuxt.js и create server on localhost:4000
test.before('Init Nuxt.js', async t => {
    const rootDir = resolve(__dirname, '..')
    let config = {}
    try { config = require(resolve(rootDir, 'nuxt.config.js')) } catch (e) {}
    config.rootDir = rootDir // project folder
    config.dev = false // final build
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    nuxt.listen(4000, 'localhost')
});

// Пример генерации html-кода только для этого теста
test('Route / exits and render HTML', async t => {
    let context = {}
    const { html } = await nuxt.renderRoute('/', context)
    t.true(html.includes('<h1 class="red">Hello world!</h1>'))
});
  
  // Пример тестирования с помощью проверки DOM
test('Route / exits and render HTML with CSS applied', async t => {
    const window = await nuxt.renderAndGetWindow('http://localhost:4000/')
    const element = window.document.querySelector('.red')
    t.not(element, null)
    t.is(element.textContent, 'Hello world!')
    t.is(element.className, 'red')
    t.is(window.getComputedStyle(element).color, 'red')
});
  
  // Остановить сервер и попросить nuxt не отслеживать изменения файлов
test.after('Closing server and nuxt.js', t => {
    nuxt.close()
});