//READ MD
const ReadMDErr = {
  NO_PATH_PROVIDED: "No Path Provided",
  NOT_A_MD_FILE: "Provided Path Not A MD Doc",
};

type ReadMDOpts = {
  path: string;
};

/**
 * reads a mark down file from path provided.
 * @throws
 */
const readMD = async (
  opts: ReadMDOpts,
): Promise<{ fileStream: ReadableStream<Uint8Array>; close: () => void }> => {
  if (!opts.path) {
    throw new Error(ReadMDErr.NO_PATH_PROVIDED);
  }
  if (opts.path.slice(-3) !== ".md") {
    throw new Error(ReadMDErr.NOT_A_MD_FILE);
  }
  const file = await Deno.open(opts.path, { read: true });

  return { fileStream: file.readable, close: () => file.close() };
};

export { readMD };
export type { ReadMDOpts };
