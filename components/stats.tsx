import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AnimatedCounter = ({ value, duration = 2, inView }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      count.set(0); // Reset counter when coming into view
      const controls = animate(count, value, {
        duration,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [value, inView, count]);

  return <motion.span>{rounded}</motion.span>;
};

const StatsCard = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {stats.map((stat, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { margin: "-50px" }); // Remove 'once: true' to trigger every time

        return (
          <motion.div
            ref={ref}
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }} // No 'once: true' to allow retriggering
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <Card className="bg-background shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="space-y-2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ margin: "-50px" }}
                  >
                    <CardTitle className="text-center text-5xl font-bold text-primary">
                      <AnimatedCounter value={stat.value} inView={isInView} />
                      {stat.suffix}
                    </CardTitle>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-400 text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

const StatisticsSection = () => {
  const stats = [
    {
      label: "Client Success Rate",
      value: 98,
      suffix: "%",
      description: "Consistently exceeding expectations",
    },
    {
      label: "Projects Delivered",
      value: 250,
      suffix: "+",
      description: "On time and within budget",
    },
    {
      label: "Team Expertise",
      value: 15,
      suffix: "y",
      description: "Years of combined experience",
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-50px" }}
          className="text-4xl md:text-4xl font-bold mb-4"
        >
          Our Impact in <span className="text-primary">Numbers</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-50px" }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 text-lg max-w-2xl mx-auto"
        >
          Delivering exceptional results through dedication and expertise
        </motion.p>
      </div>
      <StatsCard stats={stats} />
    </section>
  );
};

export default StatisticsSection;
