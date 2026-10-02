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
  blurAmount?:
    | "blur-none"
    | "blur-sm"
    | "blur-md"
    | "blur-lg"
    | "blur-xl"
    | "blur-2xl"
    | "blur-3xl"
    | string;
  animationSpeed?: {
    border?: number;
    first?: number;
    second?: number;
    third?: number;
    fourth?: number;
  };
}

/**
 * Aurora text visual effect.
 *
 * This component deliberately uses spans so it can be placed inside the
 * homepage H1 without creating a nested heading. The visible text itself
 * remains real DOM text for accessibility and SEO.
 */
export function AuroraTextEffect({
  text,
  className,
  textClassName,
  fontSize = "clamp(3rem, 8vw, 7rem)",
  colors = {
    first: "bg-cyan-400",
    second: "bg-yellow-400",
    third: "bg-green-400",
    fourth: "bg-primarylw",
  },
  blurAmount = "blur-lg",
  animationSpeed = {
    border: 6,
    first: 5,
    second: 5,
    third: 3,
    fourth: 13,
  },
}: AuroraTextEffectProps) {
  return (
    <span
      className={cn(
        "relative inline-flex items-center justify-center overflow-visible align-baseline",
        className,
      )}
    >
      <span
        className={cn(
          "relative z-0 font-extrabold tracking-tight text-white",
          textClassName,
        )}
        style={{ fontSize }}
      >
        {text}
      </span>

      <span
        aria-hidden="true"
        className="absolute inset-0 z-10 pointer-events-none overflow-hidden mix-blend-darken"
      >
        <span
          className={cn(
            "absolute w-[60vw] h-[60vw] rounded-[37%_29%_27%_27%/28%_25%_41%_37%] filter mix-blend-overlay",
            colors.first,
            blurAmount,
          )}
          style={{
            animationName: "aurora-border, aurora-1",
            animationDuration: `${animationSpeed.border}s, ${animationSpeed.first}s`,
            animationTimingFunction: "ease-in-out, ease-in-out",
            animationIterationCount: "infinite, infinite",
            animationDirection: "normal, alternate",
          }}
        />

        <span
          className={cn(
            "absolute w-[60vw] h-[60vw] rounded-[37%_29%_27%_27%/28%_25%_41%_37%] filter mix-blend-overlay",
            colors.second,
            blurAmount,
          )}
          style={{
            animationName: "aurora-border, aurora-2",
            animationDuration: `${animationSpeed.border}s, ${animationSpeed.second}s`,
            animationTimingFunction: "ease-in-out, ease-in-out",
            animationIterationCount: "infinite, infinite",
            animationDirection: "normal, alternate",
          }}
        />

        <span
          className={cn(
            "absolute w-[60vw] h-[60vw] rounded-[37%_29%_27%_27%/28%_25%_41%_37%] filter mix-blend-overlay",
            colors.third,
            blurAmount,
          )}
          style={{
            animationName: "aurora-border, aurora-3",
            animationDuration: `${animationSpeed.border}s, ${animationSpeed.third}s`,
            animationTimingFunction: "ease-in-out, ease-in-out",
            animationIterationCount: "infinite, infinite",
            animationDirection: "normal, alternate",
          }}
        />

        <span
          className={cn(
            "absolute w-[60vw] h-[60vw] rounded-[37%_29%_27%_27%/28%_25%_41%_37%] filter mix-blend-overlay",
            colors.fourth,
            blurAmount,
          )}
          style={{
            animationName: "aurora-border, aurora-4",
            animationDuration: `${animationSpeed.border}s, ${animationSpeed.fourth}s`,
            animationTimingFunction: "ease-in-out, ease-in-out",
            animationIterationCount: "infinite, infinite",
            animationDirection: "normal, alternate",
          }}
        />
      </span>
    </span>
  );
}
