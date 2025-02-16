"use client"

import { motion } from "framer-motion"

export default function AboutTED() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mb-12"
    ><div className="border-b border-t border-gray-700 pt-8">
      <h2 className="text-3xl font-bold mb-6">About <span className="text-primary">TEDx</span></h2>
      <p className="mb-16">
        In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring
        people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to
        spark deep discussion and connection. These local, self-organized events are branded TEDx, where x =
        independently organized TED event. The TED Conference provides general guidance for the TEDx program, but
        individual TEDx events are self-organized. (Subject to certain rules and regulations.)
      </p>
      </div>
      <div className="border-b  border-gray-700 pb-12">
      <h2 className="text-3xl font-bold mt-8 mb-6">About <span className="text-primary">TED</span></h2>
      <p className="mb-4">
        TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark
        conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity,
        reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and
        culture who seek a deeper understanding of the world and connection with others, and we invite everyone to
        engage with ideas and activate them in your community.
      </p>
      <p className="mb-4">
        TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a
        multitude of worldwide communities and initiatives exploring everything from science and business to education,
        arts and global issues. In addition to the TED Talks curated from our annual conferences and published on
        TED.com, we produce original podcasts, short video series, animated educational lessons (TED-Ed) and TV programs
        that are translated into more than 100 languages and distributed via partnerships around the world. Each year,
        thousands of independently run TEDx events bring people together to share ideas and bridge divides in
        communities on every continent. Through the Audacious Project, TED has helped catalyze more than $3 billion in
        funding for projects that seek to make the world more beautiful, sustainable and just. In 2020, TED launched
        Countdown, an initiative to accelerate solutions to the climate crisis and mobilize a movement for a net-zero
        future, and in 2023 TED launched TED Democracy to spark a new kind of conversation focused on realistic pathways
        towards a more vibrant and equitable future. View a full list of TED&apos;s many programs and initiatives.
      </p>
      </div>
    </motion.section>
  )
}

