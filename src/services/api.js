import mockarooKey from "../keys/mockaro";

export function logInUser(email, password) {
  const info = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  };
  return fetch(
    `https://my.api.mockaroo.com/login?key=${mockarooKey}`,
    info
  ).then(data => {
    if (data.ok) {
      return data.json();
    } else {
      throw data;
    }
  });
}
