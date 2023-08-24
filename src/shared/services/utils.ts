export const splitTextByQuery = (
  text: string,
  query: string
): [string, string, string] => {
  const start_index = text.toLowerCase().search(query.toLowerCase());
  const end_index = start_index + query.length;

  if (start_index < 0) {
    return [text, "", ""];
  }

  return [
    text.substring(0, start_index),
    text.substring(start_index, end_index),
    text.substring(end_index),
  ];
};
