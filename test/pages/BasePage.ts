export class Page{

    async open(url: string){
        await browser.url(url);
        await browser.maximizeWindow();
    }
}