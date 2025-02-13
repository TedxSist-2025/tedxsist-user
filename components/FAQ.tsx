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
import { useState } from "react";

export function FAQ2() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const faqItems = [
    {
      question: "What is TEDxSIST?",
      answer: "TEDxSIST is an independently organized event that brings together visionary speakers to share ideas worth spreading. Founded in 2022, TEDxSIST provides a platform for passionate minds to ignite new perspectives, inspire change, and encourage innovation. It is driven by the belief that transformative ideas can shape attitudes, improve lives, and ultimately make a lasting impact on the world."
    },
    {
      question: "How can I attend TEDxSIST 2025?",
      answer: "To attend TEDxSIST, interested attendees will need to fill out a registration form with basic information and answers to theme or TEDx-related questions. Based on your responses, we will carefully screen applications, and shortlisted attendees will be invited to attend the event. Make sure your responses reflect your interest in the theme and your enthusiasm for the TEDx experience!"
    },
    {
      question: "How can I become a speaker at TEDxSIST?",
      answer: "We are always looking for inspiring speakers who have unique and impactful ideas to share. To apply, visit our website and fill out the speaker application form. Our team will review submissions and contact you if you're a good fit for the event."
    },
    {
      question: "What kind of talks can I expect at TEDxSIST?",
      answer: "At TEDxSIST, you can expect a diverse range of talks that explore innovative ideas across various fields such as technology, education, business, art, and social impact. Each talk aims to inspire and challenge the way we think about the world."
    },
    {
      question: "How do I sponsor TEDxSIST?",
      answer: "If you're interested in sponsoring TEDxSIST, please visit our website for sponsorship opportunities. We offer a variety of packages that allow you to support the event and connect with like-minded individuals and organizations."
    },
    {
      question: "Can I watch TEDxSIST talks online?",
      answer: "Yes, TEDxSIST talks will be available on TEDx Talks Official YouTube channel after the event. Stay tuned for updates on when the talks will be uploaded for you to enjoy and share."
    },
    {
      question: "How do I volunteer for TEDxSIST?",
      answer: "Volunteering at TEDxSIST is a fantastic way to get involved and contribute to our vibrant community. Keep an eye on our social media platforms for announcements about team recruitment and volunteer opportunities. We're looking for passionate individuals who are eager to help create a memorable experience and make a meaningful impact."
    }
  ];

  return (
    <section id="faq-section" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          {/* Header Section - Keeping it centered */}
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <Badge variant="outline" className="px-2 py-0.1 text-xs sm:text-sm font-medium uppercase rounded-full border-[#EB0028] text-[#EB0028]">
                FAQ
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                <span className="text-primary">Everything You</span> Need to Know
              </h2>
              <p className="text-lg text-foreground max-w-2xl mx-auto">
                Get answers to common questions about <span className="font-bold text-[#EB0028]">TEDx</span>SIST 2025. Can&apos;t find what you&apos;re looking for? Reach out to our team directly.
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <Button 
  asChild
  variant="outline" 
  className="gap-2 hover:text-primary hover:bg-background focus:primary"
>
  <a href="mailto:tedxsist@gmail.com">
    Any Questions? Reach us <PhoneCall className="w-4 h-4" />
  </a>
</Button>

            </div>
          </div>

          {/* Accordion Section - Left aligned questions */}
          <div className="max-w-3xl mx-auto w-full">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => {
                const isOpen = openItem === index;
                return (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-foreground">
                    <AccordionTrigger 
                      className="text-lg sm:text-xl font-semibold hover:no-underline focus:no-underline flex items-start gap-4 text-foreground text-left"
                      onClick={() => setOpenItem(isOpen ? null : index)}
                    >
                      <span className="text-[#EB0028] font-bold">{String(index + 1).padStart(2, '0')}</span>
                      <span className="flex-1 text-left">{item.question}</span>
                      <div className="ml-auto w-8 h-8 flex items-center justify-center shrink-0">
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-foreground  px-[1.3rem]">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ2;