import { By, WebDriver } from "selenium-webdriver"; 
import {BasePage} from "./basePage" 

export class TaylorMadePage extends BasePage {
    driver: WebDriver
    url: string
    loginBtn: By=By.css('#header-login')
    userNameInput: By=By.css('#username')
    passwordInput1: By=By.css('#password')
    continueBtn: By=By.xpath('//button[@class="c063cb1a4 c295cd12c c1abb73c2 ca574d24e c469b7493"]')

    signUpBtn: By=By.css('#header-createaccount')
    firstNameInput1: By=By.css('#registration-form-fname')
    lastNameInput1: By=By.css('#registration-form-lname')
    emailInput1: By=By.css('#registration-form-email')
    passwordInput2: By=By.css('#registration-form-password')
    createAccountBtn: By=By.xpath('//button[@class="btn btn-block btn-primary"]')

    gearBtn: By=By.xpath('(//a[text()="Gear"])[1]')
    glovesBtn: By=By.xpath('(//a[text()="Gloves"])')
    glovesChoiceBtn: By=By.xpath('(//img[@class="tile-image"])[1]')
    addToCartBtn: By=By.css('#add-to-cart.add-to-cart.btn-primary')

    contactUsBtn: By=By.xpath('//a[text()="Contact Us"]')
    firstNameInput2: By=By.xpath('(//input[@class="text form-control "])[1]')
    lastNameInput2: By=By.xpath('(//input[@class="text form-control "])[2]')
    emailInput2: By=By.xpath('(//input[@class="text form-control "])[3]')
    categoryBtn: By=By.xpath('//select[@class="lookup form-control "]')
    categoryOptionBtn: By=By.xpath('(//option[text()="Order Status"])')
    descriptionInput: By=By.css('#description.textarea.form-control')
    submitBtn: By=By.xpath('#description.textarea.form-control')

    searchBarInput: By=By.xpath('//input[@class="form-control search-field"]')
    magnifyingBtn: By=By.xpath('//button[@class="fa fa-search"]')

    subscribeBtn: By=By.xpath('//button[@class="email-subscribe btn-secondary btn-block"]')
    firstNameInput3: By=By.xpath('//input[@class="needsclick go1889483518 kl-private-reset-css-Xuajs1"])[1]')
    lastNameInput3: By=By.xpath('//input[@class="needsclick go1889483518 kl-private-reset-css-Xuajs1"])[2]')
    emailInput3: By=By.xpath('//input[@class="needsclick go1889483518 kl-private-reset-css-Xuajs1"])[3]')
    subscribeBtn2: By=By.xpath('//button[@class="needsclick go332817621 kl-private-reset-css-Xuajs1"]')

    constructor() {
        super({url: 'https://www.taylormadegolf.com/home/?lang=en_US'})
    }
}
