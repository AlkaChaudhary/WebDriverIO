class KurvPage{
    get assertKurv(){
        return $('h1=Kurv')
    }

    get TilKøbsdetaljerButton(){
        return  $('.btn.cta-btn.w-100.mt-4')
    }
   
    async checkKurvMsg(msg){
        await expect(this.assertKurv).toHaveText(msg)
        
    }  
    
    async clickingTilKøbsdetaljer(){
        await this.TilKøbsdetaljerButton.click()    
    }

   
}
module.exports = new KurvPage()