class SearchProdPage{

    get acceptAlleButton(){
        return  $('button[aria-label="Accepter alle"]')
    }
    get productTextbox(){
        return $('[id="autosuggest__input"]')
    }
    
   
    async acceptCookies(){
        await this.acceptAlleButton.click()    
    }
    
    async productSearch(productname){

        await this.productTextbox.setValue(productname) 
        await this.productTextbox.click() 
        browser.keys('Enter')
    }
   
    
}
module.exports = new SearchProdPage()