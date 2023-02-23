export default function initBitcoinFetch() {
  const url = "https://blockchain.info/ticker";
  const price = document.querySelector("[data-bitcoin]");

  async function getBtcValue() {
    try {
      const allBtcData = await fetch(url);
      const getBtcObjects = await allBtcData.json();
      price.innerText = (1000 / getBtcObjects.BRL.sell).toFixed(4);
    } catch {
      console.log("Deu erro!");
    }
  }

  getBtcValue();
}
