import { InfiniteMovingCardsDemo } from "@/components/Testimonials";
import { FAQ2 } from "@/components/FAQ";
import {HeroScrollDemo} from "@/components/hero-section";
export default function HomePage() {
  return (
    <main>
      <div>
        <HeroScrollDemo />
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

