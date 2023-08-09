class TilføjetTilKurvenPage{
    get assertTilføjetTilKurven(){
        return $('.modal-title')
    }

    get GåTilKurvenButton(){
        return  $('.btn.secondary-btn')
    }
   
    async checkTilføjetTilKurventMsg(msg){
        await expect(this.assertTilføjetTilKurven).toHaveText(msg)
        
    }  
    
    async clickingGåTilKurven(){
        await this.GåTilKurvenButton.click()    
    }

   
}
module.exports = new TilføjetTilKurvenPage()