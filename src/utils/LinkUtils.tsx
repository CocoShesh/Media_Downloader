export const handleSelectedItem = (
  download: (link: string, fileName: string) => void,
  link: string,
  fileName: string
) => {
  download(link, fileName);
};
