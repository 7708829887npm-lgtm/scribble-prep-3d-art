import { useEffect, useRef } from "react";

interface PaperPreviewProps {
  text: string;
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
}

export const PaperPreview = ({ text, fontFamily, fontSize, lineHeight }: PaperPreviewProps) => {
  const paperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paperRef.current) {
      paperRef.current.scrollTop = 0;
    }
  }, [text]);

  const lines = text.split('\n');

  return (
    <div className="perspective-1000 w-full h-full flex items-center justify-center p-8">
      <div 
        className="paper-shadow-3d animate-paper-float bg-paper rounded-lg transform-gpu"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(2deg) rotateY(-1deg)',
        }}
      >
        <div 
          ref={paperRef}
          className="paper-texture overflow-auto p-12 w-full max-w-3xl h-[600px] bg-paper rounded-lg"
          style={{
            backgroundSize: '100% 32px',
            backgroundPosition: '0 12px',
          }}
        >
          <div 
            className="handwriting text-ink whitespace-pre-wrap break-words"
            style={{
              fontFamily: fontFamily,
              fontSize: `${fontSize}px`,
              lineHeight: lineHeight,
              paddingTop: '20px',
            }}
          >
            {lines.map((line, i) => (
              <div key={i} style={{ minHeight: `${32 * lineHeight}px` }}>
                {line || '\u00A0'}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
