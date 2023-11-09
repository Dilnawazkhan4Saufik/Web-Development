const bitcoinResponse = {
  bitcoin: {
    usd: 37238,
  },
  dogecoin: {
    usd: 0.076042,
  },
  ethereum: {
    usd: 2038.66,
  },
};

const bitcoin = document.getElementById('bitcoin');
const ethereum = document.getElementById('ethereum');
const dogecoin = document.getElementById('dogecoin');

bitcoin.innerHTML = bitcoinResponse.bitcoin.usd;
ethereum.innerHTML = bitcoinResponse.ethereum.usd;
dogecoin.innerHTML = bitcoinResponse.dogecoin.usd;
