'use client'

import { useState } from 'react'
import RepairFormModal from '@/components/RepairFormModal'

interface PricingTabProps {
  planName: string
  price: number
  planDescription: string
  features: string[]
  popular?: boolean
}

export function PricingTab(props: PricingTabProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="h-full w-full">
      <div className="relative flex flex-col h-full p-6 rounded-2xl bg-black border border-white/30 shadow shadow-black/80">
        {props.popular && (
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full">
              Most Popular
            </div>
          </div>
        )}
        <div className="mb-5">
          <div className="text-white/70 font-semibold mb-1">{props.planName}</div>
          <div className="inline-flex items-baseline mb-2">
            <span className="text-white/70 font-bold text-3xl">₹</span>
            <span className="text-white/50 font-bold text-4xl">{props.price}</span>
            <span className="text-white/70 font-medium ml-1">per repair</span>
          </div>
          <div className="text-sm text-white/70 mb-5">{props.planDescription}</div>
          <button
            className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-[#5D2CA8] px-3.5 py-2.5 text-sm font-medium text-white hover:bg-[#4B2291] transition-colors duration-150"
            onClick={() => setIsModalOpen(true)}
          >
            Book Repair
          </button>
        </div>
        <div className="text-slate-200 font-medium mb-3">Includes:</div>
        <ul className="text-slate-400 text-sm space-y-3 grow">
          {props.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-xs text-slate-500">
          6-month warranty on all repairs • Free pickup & delivery available
        </div>
      </div>
      <RepairFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default function PricingTable() {
  return (
    <div className="px-4">
      {/* Plans */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
        <PricingTab
          planName="iPhone Repairs"
          price={12000}
          planDescription="Specialized iPhone screen and battery repairs."
          features={[
            'Screen Replacement – ₹12,000',
            'Battery Replacement – ₹5,500',
            'Diagnostic Check – Free',
            'Software Update – Free',
            'Water Damage Cleaning – ₹1,500',
          ]}
        />

        <PricingTab
          popular
          planName="Samsung Repairs"
          price={10500}
          planDescription="Expert Samsung phone servicing."
          features={[
            'Screen Replacement – ₹10,500',
            'Battery Replacement – ₹4,800',
            'Diagnostic Check – Free',
            'Camera Repair – ₹3,000',
            'Software Optimization – Free',
          ]}
        />

        <PricingTab
          planName="Multi-Brand Repairs"
          price={9500}
          planDescription="Repairs for all major smartphone brands."
          features={[
            'Water Damage Repair – from ₹3,500',
            'Charging Port Replacement – from ₹2,000',
            'Screen Calibration – ₹2,500',
            'Battery Health Check – Free',
            'Accessory Installation – ₹500',
          ]}
        />
      </div>
    </div>
  )
}
