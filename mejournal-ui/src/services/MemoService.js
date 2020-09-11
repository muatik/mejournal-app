const orderByDateDesc = (a, b) => (a.date.isAfter(b.date) ? 1 : -1);

export default class MemoSerice {
  constructor(authentication, memoClient) {
    this.authentication = authentication;
    this.memoClient = memoClient;
  }

  setAuthentication(authentication) {
    this.authentication = authentication;
  }

  async getAll() {
    return this.memoClient
      .getAll(this.authentication.token)
      .then((data) => data.sort(orderByDateDesc));
  }

  async add(text, date, weeklyHighlight = false, monthlyHighlight = false) {
    const memo = { text, date, weeklyHighlight, monthlyHighlight };
    return await this.memoClient.add(this.authentication.token, memo);
  }

  async changePinState(memo, weeklyHighlight, monthlyHighlight) {
    const updated = { ...memo, weeklyHighlight, monthlyHighlight };
    return await this.memoClient.update(this.authentication.token, updated);
  }

  async delete(memo) {
    return await this.memoClient.delete(this.authentication.token, memo);
  }
}
