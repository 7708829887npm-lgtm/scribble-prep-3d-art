import { useState, useRef } from "react";
import { Hero } from "@/components/Hero";
import { EditorPanel } from "@/components/EditorPanel";
import { PaperPreview } from "@/components/PaperPreview";
import { ExportButton } from "@/components/ExportButton";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [text, setText] = useState("Start typing your assignment here...\n\nThis is how your handwritten text will look!");
  const [fontFamily, setFontFamily] = useState("'Caveat', cursive");
  const [fontSize, setFontSize] = useState(22);
  const [lineHeight, setLineHeight] = useState(2);
  const [showEditor, setShowEditor] = useState(false);
  
  const editorRef = useRef<HTMLDivElement>(null);

  const handleGetStarted = () => {
    setShowEditor(true);
    setTimeout(() => {
      editorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero onGetStarted={handleGetStarted} />
      
      {showEditor && (
        <>
          <Separator className="my-8" />
          
          <div ref={editorRef} className="container max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Create Your Assignment
              </h2>
              <p className="text-lg text-muted-foreground">
                Type, customize, and export your handwritten masterpiece
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <EditorPanel
                  text={text}
                  onTextChange={setText}
                  fontFamily={fontFamily}
                  onFontFamilyChange={setFontFamily}
                  fontSize={fontSize}
                  onFontSizeChange={setFontSize}
                  lineHeight={lineHeight}
                  onLineHeightChange={setLineHeight}
                />
                
                <ExportButton
                  text={text}
                  fontFamily={fontFamily}
                  fontSize={fontSize}
                  lineHeight={lineHeight}
                />
              </div>
              
              <Card className="lg:sticky lg:top-8 border-2 border-border shadow-xl overflow-hidden bg-gradient-to-br from-background to-secondary/20">
                <div className="p-4 border-b border-border bg-card">
                  <h3 className="font-semibold text-center text-muted-foreground">Live Preview</h3>
                </div>
                <PaperPreview
                  text={text}
                  fontFamily={fontFamily}
                  fontSize={fontSize}
                  lineHeight={lineHeight}
                />
              </Card>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
