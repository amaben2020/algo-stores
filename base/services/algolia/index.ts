import algoliasearch from "algoliasearch";

class AlgoliaService {
  client;
  index;
  constructor() {
    this.client = algoliasearch(
      process.env.NEXT_ALGOLIA_APP_ID ?? "",
      process.env.ALGOLIA_API_KEY ?? "",
    );
    this.index = this.client.initIndex("algo-stores");
  }

  async saveObjectsToAlgolia() {
    try {
    } catch (error) {}
  }
}
