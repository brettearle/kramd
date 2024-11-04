const ReadMDErr = {
  NO_PATH_PROVIDED: "No Path Provided",
  NOT_A_MD_FILE: "Provided Path Not A MD Doc",
};

type ReadMDOpts = {
  path: string;
};

const readMD = (opts: ReadMDOpts) => {
  if (!opts.path) {
    throw new Error(ReadMDErr.NO_PATH_PROVIDED);
  }
  if (opts.path.slice(-3) !== ".md") {
    throw new Error(ReadMDErr.NOT_A_MD_FILE);
  }
  return {};
};

export { readMD };
export type { ReadMDOpts };
