import { NextApiRequest, NextApiResponse } from "next";
import { HTTP_STATUS } from "~/base/api/constants/http-status";
import { AlgoliaError } from "~/base/api/errors/algolia-error";

export enum RequestMethod {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
}

interface IValidateRequestMethodArgs {
  req: NextApiRequest;
  allowedMethods: RequestMethod[];
}

// use this if the method must be a post request
export const validateOnlyPostRequest = (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });

    return;
  }
};

export const validateRequestMethod = ({
  req,
  allowedMethods,
}: IValidateRequestMethodArgs) => {
  if (!allowedMethods.includes(req.method as RequestMethod)) {
    throw new AlgoliaError(
      `Method '${req.method}' is not allowed`,
      HTTP_STATUS.METHOD_NOT_ALLOWED.CODE,
    );
  }
};

// validateRequestMethod({ req, allowedMethods: [RequestMethod.POST] });
