import React from "react";

class Api {
  constructor(options) {
    this.url = options.baseUrl;
    this.headers = options.headers;
  }
  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _getHeaders() {
    const jwt = localStorage.getItem('jwt');
    return {
      'Authorization': `Bearer ${jwt}`,
      ...this._headers,
    };
  }

  getUserInfo() {
    return fetch(`${this.url}users/me/`, {
      headers: this._getHeaders(),
    }).then(this._getResponse);
  }

  getInitialCards() {
    return fetch(`${this.url}cards/`, {
      headers: this._getHeaders(),
    }).then(this._getResponse);
  }
  updateUserInfo(body) {
    return fetch(`${this.url}users/me/`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify(body),
    }).then(this._getResponse);
  }

  addNewCard(body) {
    return fetch(`${this.url}cards/`, {
      method: "POST",
      headers: this._getHeaders(),
      body: JSON.stringify(body),
    }).then(this._getResponse);
  }
  deleteCard(cardId) {
    return fetch(`${this.url}cards/${cardId}/`, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then(this._getResponse);
  }
  setLike(cardId) {
    return fetch(`${this.url}cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._getHeaders(),
    }).then(this._getResponse);
  }
  unsetLike(cardId) {
    return fetch(`${this.url}cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then(this._getResponse);
  }
  changeAvatar(data) {
    return fetch(`${this.url}users/me/avatar`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify({ avatar: data.avatar }),
    }).then(this._getResponse);
  }
}
const api = new Api({
  baseUrl: "https://network.mesto.nomoredomains.xyz",
  headers: {
    // authorization: "ade0a831-d345-4d2c-8394-f99ed3b27f1b",
    "Content-Type": "application/json",
  },
});
export default api;
