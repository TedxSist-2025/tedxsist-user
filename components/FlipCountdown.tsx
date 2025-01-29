import { useEffect, useRef } from 'react';
import Tick from '@pqina/flip';
import '@pqina/flip/dist/flip.min.css';

interface FlipCountdownProps {
  locale?: {
    YEAR_PLURAL: string;
    YEAR_SINGULAR: string;
    MONTH_PLURAL: string;
    MONTH_SINGULAR: string;
    WEEK_PLURAL: string;
    WEEK_SINGULAR: string;
    DAY_PLURAL: string;
    DAY_SINGULAR: string;
    HOUR_PLURAL: string;
    HOUR_SINGULAR: string;
    MINUTE_PLURAL: string;
    MINUTE_SINGULAR: string;
    SECOND_PLURAL: string;
    SECOND_SINGULAR: string;
    MILLISECOND_PLURAL: string;
    MILLISECOND_SINGULAR: string;
  };
}

const FlipCountdown: React.FC<FlipCountdownProps> = ({ locale }) => {
  const tickRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Tick
    const tick = Tick.DOM.create(tickRef.current!, {
      didInit: (tick) => {
        // Set custom locale if provided
        if (locale) {
          Object.entries(locale).forEach(([key, value]) => {
            tick.setConstant(key, value);
          });
        }

        // Calculate next year
        const nextYear = new Date().getFullYear() + 1;

        // Start countdown
        Tick.count.down(`${nextYear}-01-01`).onupdate = function(value) {
          tick.value = value;
        };
      },
    });

    // Cleanup on unmount
    return () => {
      tick.destroy();
    };
  }, [locale]);

  return (
    <>
      <style jsx>{`
        .tick {
          padding-bottom: 1em;
          font-size: 1rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
        }

        .tick-label {
          font-size: 0.375em;
          text-align: center;
        }

        .tick-group {
          margin: 0 0.25em;
          text-align: center;
        }
      `}</style>

      <div ref={tickRef}>
        <div
          data-repeat="true"
          data-layout="horizontal center fit"
          data-transform="preset(d, h, m, s) -> delay"
        >
          <div className="tick-group">
            <div
              data-key="value"
              data-repeat="true"
              data-transform="pad(00) -> split -> delay"
            >
              <span data-view="flip"></span>
            </div>
            <span data-key="label" data-view="text" className="tick-label"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipCountdown;