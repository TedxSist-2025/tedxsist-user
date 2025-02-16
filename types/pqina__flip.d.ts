declare module '@pqina/flip' {
  interface TickOptions {
    value?: string | number;
    didInit?: (tick: any) => void;
    willDestroy?: () => void;
    locale?: string;
  }

  interface TickInstance {
    destroy(): void;
    value: string | number;
  }

  interface CountResult {
    onupdate: (value: string) => void;
  }

  interface CountMethods {
    down(target: string | Date): CountResult;
    up(target: string | Date): CountResult;
  }

  interface TickStatic {
    DOM: {
      create(element: HTMLElement, options?: TickOptions): TickInstance;
    };
    count: CountMethods;
  }

  const Tick: TickStatic;
  export = Tick;
}
