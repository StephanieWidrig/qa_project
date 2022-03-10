import { Builder, Capabilities } from "selenium-webdriver"

import {TaylorMadePage} from "./pageObject"

const chromedriver= require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const myTest = new TaylorMadePage 