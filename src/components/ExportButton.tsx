import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "sonner";

interface ExportButtonProps {
  text: string;
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
}

export const ExportButton = ({ text, fontFamily, fontSize, lineHeight }: ExportButtonProps) => {
  const handleExport = async () => {
    if (!text.trim()) {
      toast.error("Please write something first!");
      return;
    }

    try {
      // Create a temporary container for the PDF content
      const container = document.createElement('div');
      container.style.width = '210mm'; // A4 width
      container.style.padding = '40px';
      container.style.fontFamily = fontFamily;
      container.style.fontSize = `${fontSize}px`;
      container.style.lineHeight = String(lineHeight);
      container.style.color = '#1a1a2e';
      container.style.whiteSpace = 'pre-wrap';
      container.style.wordWrap = 'break-word';
      
      // Add lined paper background
      container.style.backgroundImage = `repeating-linear-gradient(transparent, transparent 31px, #d1d5db 31px, #d1d5db 32px)`;
      container.style.backgroundSize = '100% 32px';
      container.style.backgroundPosition = '0 12px';
      
      container.textContent = text;
      
      document.body.appendChild(container);
      
      // Use html2canvas and jsPDF for export
      const html2canvas = (await import('html2canvas')).default;
      const jsPDF = (await import('jspdf')).default;
      
      const canvas = await html2canvas(container, {
        scale: 2,
        backgroundColor: '#fefcf8',
      });
      
      document.body.removeChild(container);
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });
      
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('handwritten-assignment.pdf');
      
      toast.success("PDF downloaded successfully!");
    } catch (error) {
      console.error('Export error:', error);
      toast.error("Failed to export PDF. Please try again.");
    }
  };

  return (
    <Button
      onClick={handleExport}
      size="lg"
      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <Download className="mr-2 h-5 w-5" />
      Download as PDF
    </Button>
  );
};
