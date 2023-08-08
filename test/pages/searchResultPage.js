class SearchResultPage{
    get assertSerachResult(){
        return $('=Search')
    }

    get LægIKurvButton(){
        return  $('.icon_basket')
    }
   
    async checkSerachResultMsg(msg){
        await expect(this.assertSerachResult).toHaveText(msg)
        
    }  
    
    async clickingLægIKurv(){
        await this.LægIKurvButton.click()    
    }

   
}
module.exports = new SearchResultPage()