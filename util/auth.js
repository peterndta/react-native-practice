import axios from "axios";

const API_KEY = "AIzaSyAPlbTXPcc817nRx8i6rPxvkqrZIBRYYD8";

async function authentitcate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
}

export function createUser(email, password) {
  return authentitcate("signUp", email, password);
}

export function login(email, password) {
  return authentitcate("signInWithPassword", email, password);
}
