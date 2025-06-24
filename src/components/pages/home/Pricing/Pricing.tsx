
"use client"

import SubscriptionModal from "@/components/shared/modals/SubscriptionModal";
import { useState } from "react"


export default function Pricing() {
    const [open,setOpen]=useState(false)

    const handleMonthlyPlanClick = () => {
        setOpen(true);
    }
  return (
    <div className=" bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple Full Access Pricing Plans
          </h1>
          <p className="text-lg text-text-primary max-w-3xl mx-auto">
            Full access from the start – no limitations, no hidden features. Just powerful event automation for your
            club.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex max-w-full flex-wrap gap-4 justify-center">
          {/* First Month - Free Trial */}
          <div className="bg-[#F6F6F6] rounded-[20px] shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300 max-w-[300px]">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#1C88FF] mb-2">First Month</h3>
              <p className="text-text-primary text-sm mb-4">Perfect for trying out Shiftir with basic features.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$0</span>
              </div>
              <button className="w-full bg-white border-2 border-gray-300 text-black-primary py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                Start free Trial
              </button>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-text-primary text-sm">Full access for 1 month</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-text-primary text-sm">No payment required upfront</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-text-primary text-sm">Explore all features risk-free</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-text-primary text-sm">Cancel anytime during trial</span>
              </li>
            </ul>
          </div>

          {/* Monthly Plan - Featured */}
          <div className="bg-white rounded-lg shadow-xl p-8 border-2  border-blue-400/25 hover:shadow-2xl transition-shadow duration-300 relative max-w-[300px]">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#1C88FF] mb-2">Monthly Plan</h3>
              <p className="text-text-primary text-sm mb-4">Perfect for trying out Shiftir with basic features.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$60</span>
              </div>
              <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200" onClick={handleMonthlyPlanClick}>
                Choose Monthly Plan
              </button>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-text-primary text-sm">Full access to all features</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-text-primary text-sm">Pay as you go monthly</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-text-primary text-sm">Free access for club members</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-text-primary text-sm">Real-time automation, booking & notifications</span>
              </li>
            </ul>
          </div>

          {/* Yearly Plan */}
          <div className="bg-[#F6F6F6] rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300 max-w-[300px]">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#1C88FF] mb-2">Yearly Plan</h3>
              <p className="text-text-primary text-sm mb-4">Perfect for trying out Shiftir with basic features.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$600</span>
              </div>
              <button className="w-full bg-white border-2 border-gray-300 text-black-primary py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                Choose Annual Plan
              </button>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-text-primary text-sm">2 months free vs monthly</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-text-primary text-sm">Best value for long-term use</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-text-primary text-sm">All automation tools included</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-text-primary text-sm">Free access for all your players</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <SubscriptionModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  )
}
