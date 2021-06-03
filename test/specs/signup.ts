import { SignUp } from "../pages/SignUp";
import { expect as chaiExpect} from 'chai';
import allureReporter from '@wdio/allure-reporter'

let signUp : SignUp = new SignUp();

describe('Sign UP Feature', () => {

  before(async ()=>{
    await signUp.open("/");
  })
  
    it('Validate URL title',  async () => {
      allureReporter.addFeature('Sign UP Feature')
      let actualTitle : string = await browser.getTitle();
      chaiExpect(actualTitle).to.be.equal("Cloud Application Platform | Heroku");
    })

   it('Validate Signup Page', async ()=>{
    await signUp.clickSignupButton();
    let isPageDisplayed = await (await signUp.Form).isDisplayed();
    await chaiExpect(isPageDisplayed);
   })

   it('Perform Signup Page Operation', async ()=>{
    await signUp.clickSignupButton();
    await signUp.setInputField("First name","Akanksha");
    await signUp.setInputField("Last name","Gupta");
    await signUp.setInputField("Email address","akankshagupta.mitrccs@gmail.com");
    await signUp.setInputField("Company name","Testing");
    await signUp.setDropdownValue("Role","Professional Developer");
    await signUp.setDropdownValue("Country","India");
    await signUp.setDropdownValue("Primary development language","Node.js");
    await signUp.doVerifyIAmNotRobot();
    await signUp.clickOnCreateFreeAccountButton();
   })


})  


