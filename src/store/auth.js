const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_APIKEY;
const BASE_URI = "https://identitytoolkit.googleapis.com/v1/accounts:";
function AuthStore(store) {
  store.on("@init", () => ({ auth: initialState }));
  store.on("auth/signInWithPassword", signInWithPassword);
  store.on("auth/register", signUp);
  store.on("auth/resetPassword", resetPassword);
}

async function signInWithPassword(currentState, value) {
  await postRequest("signInWithPassword");
  return {
    ...currentState
  };
}
async function signUp(currentState, value) {
  await postRequest("signUp");
  return {
    ...currentState
  };
}
async function resetPassword(currentState, value) {
  return {
    ...currentState
  };
}
const initialState = {
  user: undefined
};
async function postRequest(url, options) {
  try {
    const data = await fetch(`${BASE_URI}${url}?key=${API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      ...options
    });
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
export default AuthStore;
