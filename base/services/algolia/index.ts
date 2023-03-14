import algoliasearch from "algoliasearch";

import { AlgoliaError } from "~/base/api/errors/algolia-error";
import IProducts from "~/types/types";

export class AlgoliaService {
  client;
  index;
  constructor() {
    this.client = algoliasearch(
      process.env.NEXT_ALGOLIA_APP_ID ?? "",
      process.env.ALGOLIA_API_KEY ?? "",
    );
    this.index = this.client.initIndex("algo-stores");
  }

  async saveObjectsToAlgolia(objects: IProducts[]) {
    const transformObjectsToAlgoliaFormat = objects.map((object) => ({
      objectID: object.id,
      ...object,
    }));
    try {
      const data = await this.index.saveObjects(
        transformObjectsToAlgoliaFormat,
      );

      const isSuccess = data.objectIDs && data;

      return isSuccess;
    } catch (error) {
      throw new AlgoliaError(error.message);
    }
  }
}
