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
 * Text-only Aurora effect. The animated color layer is clipped to the glyphs,
 * so the effect can never paint a rectangular block over the Hero.
 * The plain text layer remains as an always-visible fallback for accessibility,
 * reduced-motion, and browsers without background-clip:text support.
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
      <span
        className={cn(
          "relative z-0 block font-extrabold tracking-tight text-foreground",
          textClassName,
        )}
      >
        {text}
      </span>

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
