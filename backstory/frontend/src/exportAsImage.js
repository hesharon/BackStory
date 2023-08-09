import html2canvas from 'html2canvas';

// Code taken from https://blog.logrocket.com/export-react-components-as-images-html2canvas/

export const exportAsImage = async (el, imageFileName) => {
  const canvas = await html2canvas(el, {
    useCORS: true,
  });

  const image = canvas.toDataURL('image/png', 1.0);
  downloadImage(image, imageFileName);
};

const downloadImage = (blob, fileName) => {
  const fakeLink = window.document.createElement('a');
  fakeLink.style = 'display:none;';
  fakeLink.download = fileName;

  fakeLink.href = blob;

  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);

  fakeLink.remove();
};
