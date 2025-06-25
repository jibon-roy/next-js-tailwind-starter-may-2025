"use client"

import type React from "react"

import { useState } from "react"

interface SubscriptionModalProps {
  isOpen: boolean
  onClose?: () => void
}

export default function SubscriptionModal({ isOpen }: SubscriptionModalProps) {
  const [cardNumber, setCardNumber] = useState("")
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [expiryDate, setExpiryDate] = useState("08/25")

  // Format card number with spaces every 4 digits
  const formatCardNumber = (value: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, "")
    // Limit to 16 digits
    const limitedDigits = digits.slice(0, 16)
    // Add space every 4 digits
    return limitedDigits.replace(/(\d{4})(?=\d)/g, "$1 ")
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value)
    setCardNumber(formatted)
  }

  const handleDateSelect = (month: string, year: string) => {
    setExpiryDate(`${month}/${year}`)
    setShowDatePicker(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.8)] backdrop-blur-sm"></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        {/* Close button */}


        {/* Modal Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Purchase the subscription plan to manage the club.
          </h2>

          {/* Stripe Logo */}
          <div className="mb-6">
            <span className="text-4xl font-bold text-blue-600">stripe</span>
          </div>
        </div>

        {/* Payment Form */}
        <form className="space-y-6">
          {/* Card Holder Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Card Holder Name</label>
            <input
              type="text"
              defaultValue="Harrison Mathovu"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Card Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="1234 1234 1234 1234"
              maxLength={19} // 16 digits + 3 spaces
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          {/* EXP Year and CVV */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">EXP Year</label>
              <div className="relative">
                <input
                  type="text"
                  value={expiryDate}
                  readOnly
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none pr-10 cursor-pointer"
                  onClick={() => setShowDatePicker(!showDatePicker)}
                />
                <button
                  type="button"
                  onClick={() => setShowDatePicker(!showDatePicker)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:text-gray-600"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </button>

                {/* Date Picker Dropdown */}
                {showDatePicker && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-4 w-64">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Month</label>
                        <select
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          onChange={(e) => {
                            const month = e.target.value.padStart(2, "0")
                            const year = expiryDate.split("/")[1] || "24"
                            handleDateSelect(month, year)
                          }}
                          defaultValue={expiryDate.split("/")[0] || "08"}
                        >
                          <option value="01">01</option>
                          <option value="02">02</option>
                          <option value="03">03</option>
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                          <option value="07">07</option>
                          <option value="08">08</option>
                          <option value="09">09</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                        <select
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          onChange={(e) => {
                            const month = expiryDate.split("/")[0] || "08"
                            handleDateSelect(month, e.target.value)
                          }}
                          defaultValue={expiryDate.split("/")[1] || "11"}
                        >
                          {Array.from({ length: 20 }, (_, i) => {
                            const year = (new Date().getFullYear() - 2000 + i).toString().padStart(2, "0")
                            return (
                              <option key={year} value={year}>
                                20{year}
                              </option>
                            )
                          })}
                        </select>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowDatePicker(false)}
                      className="mt-3 w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition-colors"
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">CVV Number</label>
              <input
                type="text"
                maxLength={4}
                placeholder="1234"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors mt-8"
          >
            Proceed to pay
          </button>
        </form>
      </div>
    </div>
  )
}
