"use client";

import React, { useEffect, useRef, useState } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { motion, useInView } from "framer-motion";

const App = () => {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Corrected property

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white text-center mb-8">
      {/* Flip Clock Countdown */}
      <motion.div
  ref={ref}
  initial={{ opacity: 0 }}
  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
  transition={{ duration: 0.9 }} // Move delay inside transition
  className="w-full flex justify-center"
>

        {isMounted && (
          <FlipClockCountdown
            to={new Date("2025-02-24T00:00:00").getTime()}
            labels={["Days", "Hours", "Minutes", "Seconds"]}
            labelStyle={{ fontSize: 20, color: "#eb0028", fontWeight: "bold" }}
            digitBlockStyle={{
              width: 80,
              height: 100,
              fontSize: 64,
              color: "#eb0028",
              background: "#E4E4E4E4",
              borderRadius: "12px",
            }}
            separatorStyle={{ size: 20, color: "#FFFFFF" }}
            duration={0.5}
            hideOnComplete={false}
          />
        )}
      </motion.div>
    </div>
  );
};

export default App;
