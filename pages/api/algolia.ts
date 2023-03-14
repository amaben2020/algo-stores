import type { NextApiRequest, NextApiResponse } from "next";
import {
  RequestMethod,
  validateRequestMethod,
} from "~/base/helpers/validate-request";
import { AlgoliaService } from "~/base/services/algolia";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  validateRequestMethod({ req, allowedMethods: [RequestMethod.POST] });
  try {
    const algolia = new AlgoliaService();

    await algolia.saveObjectsToAlgolia(req.body.data);

    res.status(200).json({ name: "John Doe" });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}
