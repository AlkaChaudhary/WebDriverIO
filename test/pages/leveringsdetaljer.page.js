class LeveringsdetaljerPage {
    get assertLeveringsdetaljer() {
        return $('h1.mr-auto.pb-0.order-2.order-xl-1')
    }
    get TilOpsummeringButton() {
        return $('//button[contains(@class, "cta-btn")]')
    }

    async checkLeveringsdetaljerMsg(msg) {
        await expect(this.assertLeveringsdetaljer).toHaveText(msg)
    }

    async clickingTilOpsummering() {
        await this.TilOpsummeringButton.click()
    }

}
module.exports = new LeveringsdetaljerPage()