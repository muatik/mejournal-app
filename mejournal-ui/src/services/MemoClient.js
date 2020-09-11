import moment from "moment";
import ServerError from "./ServerError";
import AuthenticationError from "./AuthenticationError";

const deserialize = (memo) => {
  return {
    id: memo.id,
    text: memo.text,
    date: moment(memo.date),
    monthlyHighlight: memo.monthly_highlight,
    weeklyHighlight: memo.weekly_highlight,
  };
};

const serialize = (memo) => {
  return {
    id: memo.id,
    text: memo.text,
    date: memo.date,
    monthly_highlight: memo.monthlyHighlight,
    weekly_highlight: memo.weeklyHighlight,
  };
};

const prepareHeaders = (token) => {
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: "Bearer " + token,
  };
};

const sendRequest = (url, method, token, memo) => {
  return fetch(url, {
    method: method,
    headers: prepareHeaders(token),
    body: memo && JSON.stringify(serialize(memo)),
  })
    .catch(() => {
      throw new ServerError("connection error");
    })
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response;
      } else if (response.status >= 401 && response.status <= 403) {
        throw new AuthenticationError("aaa");
      } else if (response.status >= 500 && response.status <= 599) {
        throw new ServerError(response.statusText);
      } else {
        throw Error(response.statusText);
      }
    });
};

class MemoClient {
  constructor(config) {
    this.config = config;
  }

  authenticateWithGoogle(token) {
    return sendRequest(
      `${this.config.baseUrl}/users/me`,
      "GET",
      token
    ).then((data) => data.json());
  }

  getAll(token) {
    return sendRequest(this._getResourcePath(), "GET", token)
      .then((data) => data.json())
      .then((memoList) => {
        return memoList.map(deserialize);
      });
  }

  add(token, memo) {
    return sendRequest(this._getResourcePath(), "POST", token, memo)
      .then((data) => data.json())
      .then(deserialize);
  }

  update(token, memo) {
    return sendRequest(this._getResourcePath(), "PUT", token, memo)
      .then((data) => data.json())
      .then(deserialize);
  }

  delete(token, memo) {
    return sendRequest(
      `${this._getResourcePath()}/${memo.id}`,
      "DELETE",
      token,
      memo
    );
  }

  _getResourcePath() {
    return `${this.config.baseUrl}/api/v1/memo`;
  }
}

export default MemoClient;
