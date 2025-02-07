"use client";
import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function FAQ2() {
  return (
    <section id="faq-section" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 sm:gap-16">
          {/* Header Section */}
          <div className="text-center flex flex-col items-center gap-4">
            <Badge variant="outline" className="text-lg sm:text-xl">
              FAQ
            </Badge>
            <div className="flex gap-2 flex-col max-w-xl mx-auto">
              <h4 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-center">
                This is the start of something new
              </h4>
              <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground text-center">
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster than
                ever.
              </p>
            </div>
            <div className="mt-6">
              {/* Button */}
              <Button className="gap-2" variant="outline">
                Any questions? Reach out <PhoneCall className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Accordion Section */}
          <div className="max-w-3xl mx-auto w-full">
            <Accordion type="single" collapsible className="w-full">
              {Array.from({ length: 8 }).map((_, index) => (
                <AccordionItem key={index} value={"index-" + index}>
                  {/* Accordion Trigger with no underline or border on hover */}
                  <AccordionTrigger className="text-lg sm:text-xl font-semibold hover:no-underline focus:no-underline">
                    This is the start of something new
                  </AccordionTrigger>
                  <AccordionContent>
                    Managing a small business today is already tough. Avoid
                    further complications by ditching outdated, tedious trade
                    methods. Our goal is to streamline SMB trade, making it easier
                    and faster than ever.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
