import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
const AnimatedCursor = lazy(() => import("react-animated-cursor"));

const Root = () => {
  return (
    <div>
      {/* <Suspense fallback={null}>
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "var(--cursor-color, #00ffff)", // fallback color
            zIndex: 9999,
          }}
          outerStyle={{
            border: "3px solid var(--cursor-color, #00ffff)", // fallback color
            zIndex: 9999,
          }}
        />
      </Suspense> */}
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
