import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";

interface EditorPanelProps {
  text: string;
  onTextChange: (text: string) => void;
  fontFamily: string;
  onFontFamilyChange: (font: string) => void;
  fontSize: number;
  onFontSizeChange: (size: number) => void;
  lineHeight: number;
  onLineHeightChange: (height: number) => void;
}

export const EditorPanel = ({
  text,
  onTextChange,
  fontFamily,
  onFontFamilyChange,
  fontSize,
  onFontSizeChange,
  lineHeight,
  onLineHeightChange,
}: EditorPanelProps) => {
  return (
    <div className="space-y-6">
      <Card className="p-6 border-2 border-border shadow-lg">
        <div className="space-y-6">
          <div>
            <Label htmlFor="text-input" className="text-base font-semibold mb-3 block">
              Your Text
            </Label>
            <Textarea
              id="text-input"
              placeholder="Start typing your assignment here..."
              value={text}
              onChange={(e) => onTextChange(e.target.value)}
              className="min-h-[200px] text-base resize-none border-2 focus-visible:ring-accent"
            />
          </div>

          <div className="space-y-4 pt-4 border-t border-border">
            <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
              Customize Appearance
            </h3>

            <div>
              <Label htmlFor="font-select" className="text-sm mb-2 block">
                Handwriting Style
              </Label>
              <Select value={fontFamily} onValueChange={onFontFamilyChange}>
                <SelectTrigger id="font-select" className="border-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="'Caveat', cursive">Caveat (Casual)</SelectItem>
                  <SelectItem value="'Kalam', cursive">Kalam (Neat)</SelectItem>
                  <SelectItem value="'Patrick Hand', cursive">Patrick Hand (Friendly)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="font-size" className="text-sm mb-2 block">
                Font Size: {fontSize}px
              </Label>
              <Slider
                id="font-size"
                min={16}
                max={32}
                step={1}
                value={[fontSize]}
                onValueChange={([value]) => onFontSizeChange(value)}
                className="py-2"
              />
            </div>

            <div>
              <Label htmlFor="line-height" className="text-sm mb-2 block">
                Line Spacing: {lineHeight.toFixed(1)}
              </Label>
              <Slider
                id="line-height"
                min={1.5}
                max={2.5}
                step={0.1}
                value={[lineHeight]}
                onValueChange={([value]) => onLineHeightChange(value)}
                className="py-2"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
