const getUsers = (token) => {
  const requestOptions = {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  return fetch('http://142.93.138.137:8080/auth', requestOptions)
    .then((resp) => {
      resp.json();
    });
};

const postbyKeyword = (token, key, data) => {
  const requestOptions = {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };
  return fetch(`http://142.93.138.137:8080/users/${key}`, requestOptions)
    .then((resp) => {
      // console.log(data);
      console.log(resp);
      resp.json();
    });
};
export default {
  getUsers,
  postbyKeyword,
};
