import { formatRelativeTime } from '@/lib/time-ago'

export const blogData = {
  'tedx-sist-2025': {
    image: "/placeholder.svg",
    badge: { icon: "🎯", text: "Featured" },
    className: "md:col-span-2",
    title: "TEDxSIST 2025: Resilience",
    author: { 
      name: "Neeharika and Team", 
      avatar: "/placeholder.svg" 
    },
    description: "Experience TEDxSIST 2025, where resilience meets innovation. Engage with thought-provoking talks, connect with visionary speakers, and expand your network in an inspiring environment that fosters creativity, transformation, and impactful ideas shaping the future.",
    timeAgo: formatRelativeTime(1739356812),
    sections: [
      { 
        title: "Introduction", 
        content: "TEDxSIST 2025 brings together innovative minds to explore the theme of resilience. This year's event focuses on the power of human adaptability and growth through challenges. The conference will highlight inspiring stories and groundbreaking ideas that redefine perseverance in a rapidly changing world." 
      },
      { 
        title: "Event Highlights", 
        content: "Join us for a day filled with compelling talks, interactive sessions, and networking opportunities. Our carefully curated speaker lineup features industry leaders, innovators, and changemakers who have navigated personal and professional obstacles to emerge stronger and more influential than ever." 
      },
      { 
        title: "What to Expect", 
        content: "Attendees will be immersed in thought-provoking presentations, gain valuable insights from expert speakers, and engage in meaningful discussions. From panel discussions to live Q&A sessions, every moment is designed to spark curiosity and ignite conversations that lead to action." 
      },
      { 
        title: "Behind the Scenes", 
        content: "Bringing TEDxSIST 2025 to life required months of planning and dedication. Our team has worked tirelessly to ensure every detail, from speaker curation to stage design, creates an atmosphere of learning and inspiration. Get an exclusive look at how this event came together." 
      },
      { 
        title: "How to Get Involved", 
        content: "Whether you're attending as a participant or want to contribute as a volunteer, TEDxSIST 2025 offers multiple ways to get involved. Engage with our online community, share your insights, and be part of a movement that promotes resilience and innovation." 
      }
    ]
  },
  'magic-in-quiet-moments': {
    image: "/placeholder.svg",
    badge: { icon: "✨", text: "Behind the Scenes" },
    title: "Magic in quiet moments: Behind the scenes journey",
    className: "md:col-span-1",
    author: { 
      name: "Aakriti Bose", 
      avatar: "/placeholder.svg" 
    },
    description: "Delving into this year's theme and its significance. A deeper look at how we crafted meaningful experiences through thoughtful design and careful attention to detail.",
    timeAgo: formatRelativeTime(1739356812),
    sections: [
      { 
        title: "The Creative Process", 
        content: "Our journey began with a simple question: How do we create moments that leave lasting impressions? Through meticulous brainstorming and collaboration, we crafted an experience that resonates with our audience. Every element, from the visual design to the speaker selection, was carefully considered to evoke an emotional connection." 
      },
      { 
        title: "Building the Experience", 
        content: "Every detail was carefully considered, from the venue layout to the timing of breaks. We wanted to create an environment that fostered connection and inspiration. The goal was to ensure attendees not only listened to ideas but also experienced a journey of transformation through storytelling and interactive engagements." 
      },
      { 
        title: "Lessons Learned", 
        content: "Throughout this journey, we discovered that the most impactful moments often happen in the quiet spaces between planned activities. Whether it’s a spontaneous conversation between attendees or a brief pause for reflection, these in-between moments often lead to the most profound insights and connections." 
      },
      { 
        title: "Challenges and Breakthroughs", 
        content: "Crafting a seamless behind-the-scenes experience wasn't without its challenges. From last-minute logistical hurdles to adapting to unexpected constraints, our team had to remain flexible and creative. These obstacles ultimately pushed us to think outside the box and innovate in ways we hadn't initially imagined." 
      },
      { 
        title: "Final Reflections", 
        content: "Looking back, the true magic of this event was in the quiet moments where people connected, reflected, and felt inspired. As organizers, our greatest reward was witnessing the lasting impact that these small yet significant moments had on every participant's journey." 
      }
    ]
  }
}

export type BlogDataType = typeof blogData;