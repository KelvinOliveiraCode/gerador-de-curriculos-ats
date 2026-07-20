import html2pdf from 'html2pdf.js';

export function exportToPDF(element: HTMLElement, filename: string): void {
  const opt = {
    margin: 0,
    filename: `${filename || 'curriculo'}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  html2pdf().set(opt).from(element).save();
}
