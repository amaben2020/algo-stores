export const handleAsyncError = (error: Error) => {
  if (error instanceof Error) {
    throw new Error(
      `Error of name ${error.name} on ${error.stack} caused by ${error.cause}`,
    );
  }
};
