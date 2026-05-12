"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

type CoolBlobEffectProps = {
  className?: string;
};

export const Component = ({ className }: CoolBlobEffectProps) => {
  const [count, setCount] = useState(0);

  return (
    <section
      className={cn("cool-blob-effect", className)}
      onPointerEnter={() => setCount((value) => value + 1)}
      data-count={count}
    >
      <div className="meta">
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    </section>
  );
};
