'use client'

import HelixImage from '../assets/images/helix2.png'
import EmojiImage from '../assets/images/emojistar.png'
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import RepairFormModal from '@/components/RepairFormModal';
import MessageImage from '../assets/images/message.png'

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  return (
    <div id="cta" className="bg-black text-white py-[72px] sm:py-24" ref={containerRef}>
      <div className="container max-w-xl relative">
        <motion.div style={{translateY}}>
          <Image src={MessageImage} alt="helix" className="absolute top-6 left-[calc(100%+36px)]" />
        </motion.div>
        <motion.div style={{translateY}}>
          <Image src={EmojiImage} alt="emoji" className="absolute -top-[120px] right-[calc(100%+30px)]" />
        </motion.div>

        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">Book A Repair</h2>
        <p className="text-xl text-white/70 mt-5">
          Get your mobile repaired quickly and reliably by our expert technicians. Schedule your repair now and enjoy free pickup and delivery!
        </p>

        {/* Book Repair Button */}
        <div className="mt-10 flex justify-center">
          <button
            className="bg-[#5D2CA8] hover:bg-[#4B2291] text-white h-12 rounded-lg px-6 font-medium transition-colors duration-150"
            onClick={() => setIsModalOpen(true)}
          >
            Book Repairs
          </button>
        </div>
      </div>

      {/* Modal Form */}
      <RepairFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
};
