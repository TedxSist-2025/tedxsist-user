'use client'

import * as React from "react"
import { Button } from "./button"

export function RegisterButton() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button 
        className="select-none"
        variant="default"
      >
        Register
      </Button>
    );
  }

  return (
    <Button 
      className="select-none"
      variant="default"
    >
      Register
    </Button>
  );
} 