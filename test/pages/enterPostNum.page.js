class EnterPostNummerPage{
    get assertPostNummer(){
        return $('.modal-title')
    }

    get PostNummerTextBox(){
        return  $('.textfield.w-100.maxwidth-160.mr-2')
    }
    get VælgButton(){
        return $('.btn.primary-btn.w-50')
    }
   
    async checkPostNummerPageMsg(msg){
        await expect(this.assertPostNummer).toHaveText(msg)
        
    }  

    async enteringPostNummer(number){
        await this.PostNummerTextBox.setValue(number)
    }
    
    async clickingVælg(){
        await this.VælgButton.click()    
    }

   
}
module.exports = new EnterPostNummerPage()