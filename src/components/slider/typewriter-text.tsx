import { useEffect, useMemo, useState } from "react";

interface TypewriterTextProps {
  text: string;
  active: boolean;
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  typeChunk?: number;
  deleteChunk?: number;
  startDelay?: number;
}

export default function TypewriterText({
  text,
  active,
  className,
  typeSpeed = 7,
  deleteSpeed = 4,
  typeChunk = 1,
  deleteChunk = 1,
  startDelay = 12,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const safeText = useMemo(() => text ?? "", [text]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (active) {
        if (displayed === safeText) return;

        if (!safeText.startsWith(displayed)) {
          setDisplayed("");
          return;
        }

        const nextLength = Math.min(displayed.length + typeChunk, safeText.length);
        setDisplayed(safeText.slice(0, nextLength));
        return;
      }

      if (displayed.length === 0) return;
      const nextLength = Math.max(displayed.length - deleteChunk, 0);
      setDisplayed(displayed.slice(0, nextLength));
    }, active && displayed.length === 0 ? startDelay : active ? typeSpeed : deleteSpeed);

    return () => clearTimeout(timeout);
  }, [active, displayed, safeText, typeSpeed, deleteSpeed, typeChunk, deleteChunk, startDelay]);

  return <span className={className}>{displayed.length > 0 ? displayed : " "}</span>;
}