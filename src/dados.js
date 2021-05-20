async function obtemDados(codigoObjeto) {
  const url_api = `https://api.rastrearpedidos.com.br/api/rastreio/v1?codigo=${codigoObjeto}`;
  const res = await fetch(url_api);
  const json = await res.json();

  return json;
}

export default obtemDados