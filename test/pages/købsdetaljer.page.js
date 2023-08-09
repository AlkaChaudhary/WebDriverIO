class KøbsdetaljerPage{
    get assertKøbsdetaljer(){
        return $('h1=Købsdetaljer')
    }   

    get NavnTextBox(){
        return  $('.form-control.textfield')
    }

    get TelefonTextBox(){
        return  $('#input-1')
    }
   
    get VejNavnTextBox(){
        return  $('[autocomplete="address-line1"]')
    }

    get HusnrTextBox(){
        return  $('[autocomplete="address-line2"]')
    }

    get EmailTextBox(){
        return  $('[type="text"][autocomplete="email"]')
    }

    get PostnrTextBox(){
        return  $('[type="number"][autocomplete="shipping postal-code"]')
    }

    get ByTextBox(){
        return  $('[type="text"][autocomplete="shipping locality"]')
    }
    get TilLeveringsdetaljerButton(){
        return $('.btn.cta-btn.ml-sm-auto.order-1.order-sm-2.mb-4.mb-sm-0')
    }

    async checkKøbsdetaljerMsg(msg){
        await expect(this.assertKøbsdetaljer).toHaveText(msg)
        
    }  
    
    async enterNavn(navn){
        await this.NavnTextBox.setValue(navn)  
    }

    async enterTelefon(telefone){
        await this.TelefonTextBox.setValue(telefone)  
    }

    async enterVejNavn(vejnavn){
        await this.VejNavnTextBox.setValue(vejnavn)  
    }

    async enterHusnr(setvalue){
        await this.HusnrTextBox.setValue(setvalue)  
    }
    async enterEmail(email){
        await this.EmailTextBox.setValue(email)  
    }
    async enterPostnr(postnr){
        await this.PostnrTextBox.setValue(postnr)  
    }
    async enterBy(by){
        await this.ByTextBox.setValue(by)  
    }
    async clickingTilLeveringsdetaljer(){
        await this.TilLeveringsdetaljerButton.click()  
    }

}
module.exports = new KøbsdetaljerPage()