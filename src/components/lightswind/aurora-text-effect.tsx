import { cn } from "../lib/utils";

export interface AuroraTextEffectProps {
  text: string;
  className?: string;
  textClassName?: string;
  fontSize?: string;
  colors?: {
    first?: string;
    second?: string;
    third?: string;
    fourth?: string;
  };
  blurAmount?: string;
  animationSpeed?: {
    border?: number;
    first?: number;
    second?: number;
    third?: number;
    fourth?: number;
  };
}

/**
 * Text-only Aurora effect. Only the animated glyph layer is rendered visually,
 * while a visually-hidden label preserves the text for screen readers.
 */
export function AuroraTextEffect({
  text,
  className,
  textClassName,
  fontSize = "clamp(3rem, 8vw, 7rem)",
}: AuroraTextEffectProps) {
  return (
    <span
      className={cn("relative inline-block align-baseline", className)}
      style={{ fontSize }}
    >
      <span className="sr-only">{text}</span>
      <span
        aria-hidden="true"
        className={cn(
          "aurora-text-layer absolute inset-0 z-10 block font-extrabold tracking-tight pointer-events-none",
          textClassName,
        )}
      >
        {text}
      </span>
    </span>
  );
}
