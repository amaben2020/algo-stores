// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  RequestMethod,
  validateRequestMethod,
} from "~/base/helpers/validate-request";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  validateRequestMethod({ req, allowedMethods: [RequestMethod.POST] });
  res.status(200).json({ name: "John Doe" });
}
