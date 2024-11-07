const mdParser = async (mdFileStream: ReadableStream) => {
  const result = new ReadableStream();
  for await (const chunk of mdFileStream) {
    console.log(chunk);
  }
  return result;
};

export { mdParser };
