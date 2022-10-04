const pdfOptions = (docName) => {
  return {
    margin: [0.3, 0.3],
    filename: docName,
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2, letterRendering: true },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
};

export default pdfOptions;
