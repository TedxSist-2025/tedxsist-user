"use client";

import React, { useEffect, useRef, useState } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { motion, useInView } from "framer-motion";

const App = () => {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white text-center mb-8 px-4">
      {/* Flip Clock Countdown */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.9 }}
        className="w-full flex flex-col items-center justify-center"
      >
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <span className="text-primary font-bold">Ipsum</span> in primary.
        </p>

        {isMounted && (
          <FlipClockCountdown
            to={new Date("2025-02-24T00:00:00").getTime()}
            labels={["Days", "Hours", "Minutes", "Seconds"]}
            labelStyle={{
              fontSize: "clamp(12px, 3vw, 20px)",
              color: "#eb0028",
              fontWeight: "bold",
            }}
            digitBlockStyle={{
              width: "clamp(40px, 10vw, 80px)",
              height: "clamp(50px, 12vw, 100px)",
              fontSize: "clamp(32px, 6vw, 64px)",
              color: "#eb0028",
              background: "#E4E4E4",
              borderRadius: "12px",
            }}
            separatorStyle={{ size: "clamp(10px, 2vw, 20px)", color: "#FFFFFF" }}
            duration={0.5}
            hideOnComplete={false}
          />
        )}
      </motion.div>
    </div>
  );
};

export default App;
