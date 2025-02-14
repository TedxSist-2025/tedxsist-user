import { InfiniteMovingCardsDemo } from "@/components/Testimonials";
import { FAQ2 } from "@/components/FAQ";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import HeroScrollDemo from "@/components/hero-section";
export default function HomePage() {
  return (
    <main>
      <div>
        
        <HeroScrollDemo />
      </div>
      <div>
         <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-foreground dark:text-foreground">
              lorem ipsum  <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                TEDxSIST 2025
              </span>
            </h1>
          </>
        }
      >
        
        <Image
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
       
      </div>
      <div>
        <InfiniteMovingCardsDemo />
      </div>
      <div>
        <FAQ2 />
      </div>
      
    </main>
  )
}

