async function sendMessageToBOT(message) {
  const url_api = `https://api.telegram.org/bot1889249564:AAEqv-6CctbKFMBvqb-wwCrZ78_6Ny-2eKw/sendMessage?chat_id=1265273370&parse_mode=markdown&text=${message}`;
  fetch(url_api, { method: "POST" })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

export default sendMessageToBOT;
