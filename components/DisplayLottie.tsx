import React, { useState, useEffect } from "react";
import Lottie, { LottieComponentProps } from "lottie-react";

type Props = {
  animationPath: string; // Now accepts path string (e.g., "/lottie/build.json")
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  fallback?: React.ReactNode;
} & Partial<LottieComponentProps>;

const DisplayLottie = ({ 
  animationPath, 
  width = "100%", 
  height = "100%",
  className = "",
  loop = true,
  autoplay = true,
  fallback = <div style={{ width, height }} className={className} />,
  ...lottieProps
}: Props) => {
  const [animationData, setAnimationData] = useState<unknown>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        // Fetch animation data from public folder
        const response = await fetch(animationPath);
        if (!response.ok) throw new Error("Failed to load animation");
        const data = await response.json();
        setAnimationData(data);
      } catch (err) {
        console.error("Lottie load error:", err);
        setError(err as Error);
      }
    };

    loadAnimation();
  }, [animationPath]);

  if (error) {
    console.warn(`Failed to load Lottie animation from ${animationPath}`);
    return <>{fallback}</>;
  }

  if (!animationData) {
    return <>{fallback}</>;
  }

  return (
    <div className={className} style={{ width, height }}>
      <Lottie 
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
        {...lottieProps}
      />
    </div>
  );
};

export default DisplayLottie;