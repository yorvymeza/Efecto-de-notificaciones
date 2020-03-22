const puppeteer = require('puppeteer');

  async function run(){

  	 const browser = await puppeteer.launch()
  	 const page = await browser.newPage()
  	  await page.goto('https://https://platzi.com/cursos/blazor/')
  	  await page.screenshot({
  	  	      path: 'screenshot.png',
  	  	      fullPage: true,
  	 })
  	}

  run()  