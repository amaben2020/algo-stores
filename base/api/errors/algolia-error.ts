export class AlgoliaError extends Error {
  constructor(
    public readonly message: string,
    public readonly httpCode?: number,
  ) {
    super(message);
    this.httpCode = httpCode || 500;
  }
}
