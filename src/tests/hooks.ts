import { Browser, BrowserContext, Page, chromium, firefox, webkit,  } from '@playwright/test';
import dotenv  from 'dotenv' 
import { Status } from "@cucumber/cucumber"
import LoginPage from './pages/login-page';
import { MyFixture } from './fixtures/fixtures';
// import { Context } from 'node:vm';

const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber")
setDefaultTimeout(60000)
// launch the browser
let browser: Browser
let bCtx: BrowserContext
let page:Page

BeforeAll(async function () {
      try {
         if (process.env.ENV) {
            dotenv.config({
               path: `.env.${process.env.ENV}`,
               override: true
            })
         }
   } catch (error) {
         console.error("Error in loading environment variables", error)
   }

   let browserType = process.env.BROWSER ?? "chrome"

   switch (browserType) {
      case 'chrome':
      case 'chromium':
      case 'gc':
         browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized']})
         break
      case 'firefox':
      case 'ff':
         browser = await firefox.launch({ headless: false, args: ['--start-maximized']})
         break
      case 'edge':
      case 'msedge':
         browser = await chromium.launch({ headless:false, channel: 'msedge', args: ['--start-maximized']})
         break
      default:
         throw new Error(`Invalid Browser Type ${browserType}.`)
  }
    
 });

 // Create a new browser context and page per scenario
Before(async function () {
   // context = await global.browser.newContext()
   bCtx = await browser.newContext({viewport:null, javaScriptEnabled:true});
   page = await bCtx.newPage();
   pageFixture.page = page
   // console.log(`----------------------${scenario.pickle.name} is started----------------`)
   const login = new LoginPage(page)
   await login.goto()

 });
 
 // Cleanup after each scenario
 After(async function () {
   await pageFixture.page.close()
   await bCtx.close()
   // console.log(`----------------${scenario.pickle.name} is started--------------------`)
   // console.log(`SCENARIO STATUS IS >>>> ${scenario.result?.status} >>>>>`)

   // if(scenario.result?.status==Status.FAILED) {
   //    console.log(`I am taking screenshot....!`)
   // }
 });
 
 // close the browser
 AfterAll(async function () {
    await browser.close()
 });