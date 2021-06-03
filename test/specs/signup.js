describe('Sign UP Feature', () => {
    it('Validate URL title',  async () => {
      await browser.url("https://www.heroku.com/");
      await expect(browser.getTitle()=="Cloud Application Platform | Heroku")
    })

   it('Validate Signup Page', async ()=>{
    await (await $("//a[text()='Sign up']")).click();
    const isNavigatedToSignupPage = await (await $("//h1[text()='Sign up for free and experience Heroku today']")).isDisplayed();
    expect(isNavigatedToSignupPage).toBeTruthy();
   })

})  

