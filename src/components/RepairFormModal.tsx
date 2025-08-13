"use client";

import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

interface RepairFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RepairFormModal({ isOpen, onClose }: RepairFormModalProps) {
  if (typeof document === "undefined") return null; // SSR safe

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal box with animated gradient background */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-md p-6 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Animated Gradient Background */}
            <motion.div
              className="absolute inset-0 z-0 rounded-xl overflow-hidden"
              style={{
                background: "linear-gradient(270deg, #A06FFF, #F27DFF, #5BC8FF)",
                backgroundSize: "600% 600%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Modal Content with glassmorphic gradient */}
            <div
              className="relative z-10 rounded-xl p-6
              bg-[linear-gradient(to_right,#F7AABE,#B57CEC,#E472D1)]
              bg-opacity-30
              backdrop-blur-md
              shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">Repair Request</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-lg p-3 bg-white/30 text-white placeholder-white/70 border-white/40"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border rounded-lg p-3 bg-white/30 text-white placeholder-white/70 border-white/40"
                />
                <textarea
                  placeholder="Describe the issue"
                  className="w-full border rounded-lg p-3 bg-white/30 text-white placeholder-white/70 border-white/40"
                  rows={4}
                ></textarea>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-lg border border-white/40 hover:bg-white/20 text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                  >
                    Submit
                  </button>
                </div>
              </form>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-200"
              >
                ✕
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
