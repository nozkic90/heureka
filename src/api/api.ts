export class Api {
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    async getCategories() {
      return await fetch(this.url + "categories/").then(res => res.json());
    }

    async getProducts() {
        return await fetch(this.url + "products/").then(res => res.json());
    }

    async getOffers() {
        return await fetch(this.url + "offers/").then(res => res.json());
    }
}