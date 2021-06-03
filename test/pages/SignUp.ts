import { Page } from "./BasePage";

export class SignUp extends Page{

     private signUpButton = "//a[text()='Sign up']";
     private formPage = "//form[contains(@class,'signup-form')]";
     private formInputField = "//form[contains(@class,'signup-form')]//input[@placeholder='##PLACEHOLDER##']";
     private dropDownSelectors = "//select[@placeholder='##PLACEHOLDER##']";
     private captchaCheckbox = "//div[@class='recaptcha-checkbox-spinner']";
     private createAccountButton = "//input[@type='submit' and @value='Create Free Account']";

    get Form(){
         return $(this.formPage);
     }

    async setInputField(placeHolderName , valueToSet){
        let inputFiled = await $(this.formInputField.replace(/##PLACEHOLDER##/g, placeHolderName));
        await inputFiled.addValue(valueToSet);
    }

    async setDropdownValue(placeHolderName , optionvalue){
        let dropDownOptions = await $(this.dropDownSelectors.replace(/##PLACEHOLDER##/g, placeHolderName));
         await dropDownOptions.selectByVisibleText(optionvalue);
    }

    async doVerifyIAmNotRobot(){

        //TODO
        await (await $(this.captchaCheckbox)).click();
       // await browser.pause(10000);
    }

    async clickSignupButton(){
        await (await $(this.signUpButton)).click();
    }

    async clickOnCreateFreeAccountButton(){
        await (await $(this.createAccountButton)).click();
    }

} 