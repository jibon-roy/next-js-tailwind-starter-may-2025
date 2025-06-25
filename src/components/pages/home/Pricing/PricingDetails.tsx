"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Select } from "antd";

// Zod schema for form validation
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  countryCode: z.string().min(1, "Please select a country code"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  role: z.string().min(1, "Please select your role"),
  athleteCount: z.string().min(1, "Please enter the number of athletes"),
  currentSystem: z.string().min(1, "Please tell us about your current system"),
});

type FormData = z.infer<typeof formSchema>;

const roles = [
  "Coach",
  "Athletic Director",
  "Team Manager",
  "Administrator",
  "Other",
];

type CountryCodeOption = {
  code: string;
  country: string;
};

const countryCodes: CountryCodeOption[] = [
  { code: "+1", country: "US/CA" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "AU" },
  { code: "+33", country: "FR" },
  { code: "+49", country: "DE" },
  { code: "+81", country: "JP" },
  { code: "+86", country: "CN" },
  { code: "+91", country: "IN" },
];

export default function PricingDetails() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      countryCode: undefined,
      role: undefined,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Console log the form data
    console.log("=== FORM SUBMISSION DATA ===");
    console.log("First Name:", data.firstName);
    console.log("Last Name:", data.lastName);
    console.log("Email:", data.email);
    console.log("Country Code:", data.countryCode);
    console.log("Phone Number:", data.phoneNumber);
    console.log("Role:", data.role);
    console.log("Athlete Count:", data.athleteCount);
    console.log("Current System:", data.currentSystem);
    console.log("Complete Form Data:", data);
    console.log("=============================");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Form submitted successfully! Check console for data.");
      reset({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+1",
        phoneNumber: "",
        role: "",
        athleteCount: "",
        currentSystem: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const design = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
  <path d="M15.4277 11.1252C15.668 10.2798 15.668 9.72016 15.4277 8.8748C14.5824 5.89978 7.50815 8.8748 7.50815 8.8748C7.50815 8.8748 10.4832 1.80057 7.50815 0.955207C6.66279 0.714997 6.12988 0.846716 5.25778 0.955207C-1.75259 1.82731 -1.75259 18.1727 5.25778 19.0448C6.12988 19.1533 6.66279 19.285 7.50815 19.0448C10.4832 18.1994 7.50815 11.1252 7.50815 11.1252C7.50815 11.1252 14.5824 14.1002 15.4277 11.1252Z" fill="#0F172A"/>
</svg>

  return (
    <div className=" bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Information */}
          <div className="space-y-6">
            <div>
              <h1 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[62px] font-bold text-black-primary leading-tight ">
                Let&apos;s Talk About Your Club&lsquo;s Needs
              </h1>
              <p className="mt-[30px] text-[16px] text-text-primary  font-normal">
                Shfflr is designed to fit your structure, support your goals,
                and grow with you. Tell us a bit about your organization, and
                we&apos;ll show you how we can help.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <p>{design}</p>
                <p className="text-text-primary -mt-1">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <p>{design}</p>
                <p className="text-text-primary -mt-1">
                  Ultricies ornare nulla blandit amet iaculis sollicitudin.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <p>{design}</p>
                <p className="text-text-primary -mt-1">
                  Lorem ipsum dolor sit amet consectetur. Ultricies ornare nulla
                  blandit amet iaculis sollicitudin.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <p>{design}</p>
                <p className="text-text-primary -mt-1">
                  Ultricies ornare nulla blandit amet iaculis sollicitudin.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-text-primary -mt-1 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    {...register("firstName")}
                    type="text"
                    id="firstName"
                    placeholder="Enter your first name"
                    className={`w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                      errors.firstName ? "border-red-300" : "border-gray-300"
                    }`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-text-primary -mt-1 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    {...register("lastName")}
                    type="text"
                    id="lastName"
                    placeholder="Enter your last name"
                    className={`w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                      errors.lastName ? "border-red-300" : "border-gray-300"
                    }`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-primary -mt-1 mb-2"
                >
                  Email Address
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className={`w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                    errors.email ? "border-red-300" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-text-primary -mt-1 mb-2"
                >
                  Phone Number
                </label>
                <div className="flex sm:flex-row flex-col gap-2 space-x-2">
                  <Controller
                    name="countryCode"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        placeholder="Select country code"
                        className={errors.countryCode ? "border-red-300" : ""}
                        style={{
                          width: 90,
                          height: 42
                        }}
                       
                        options={countryCodes.map((country) => ({
                          label: `${country.code} ${country.country}`,
                          value: country.code,
                        }))}
                      />
                    )}
                  />
                  <input
                    {...register("phoneNumber")}
                    type="tel"
                    id="phoneNumber"
                    placeholder="+880 ••••••••••"
                    className={`flex-1 max-w-full   px-3 sm:py-[5px] py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                      errors.phoneNumber ? "border-red-300" : "border-gray-300"
                    }`}
                  />
                </div>
                {(errors.countryCode || errors.phoneNumber) && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.countryCode?.message || errors.phoneNumber?.message}
                  </p>
                )}
              </div>

              {/* Role Selection */}
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-text-primary -mt-1 mb-2"
                >
                  What best describes your role?
                </label>
                 <Controller
                  name="role"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      placeholder="Select your role"
                      className={`w-full ${errors.role ? "border-red-300" : ""}`}
                      style={{height: 42}}
                      options={roles.map((role) => ({ label: role, value: role }))}
                    />
                  )}
                />
                {errors.role && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.role.message}
                  </p>
                )}
              </div>

              {/* Athlete Count */}
              <div>
                <label
                  htmlFor="athleteCount"
                  className="block text-sm font-medium text-text-primary -mt-1 mb-2"
                >
                  How many athletes are in your organization?
                </label>
                <input
                  {...register("athleteCount")}
                  type="text"
                  id="athleteCount"
                  placeholder="Enter..."
                  className={`w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                    errors.athleteCount ? "border-red-300" : "border-gray-300"
                  }`}
                />
                {errors.athleteCount && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.athleteCount.message}
                  </p>
                )}
              </div>

              {/* Current System */}
              <div>
                <label
                  htmlFor="currentSystem"
                  className="block text-sm font-medium text-text-primary -mt-1 mb-2"
                >
                  What system do you currently use?
                </label>
                <input
                  {...register("currentSystem")}
                  type="text"
                  id="currentSystem"
                  placeholder="Enter..."
                  className={`w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                    errors.currentSystem ? "border-red-300" : "border-gray-300"
                  }`}
                />
                {errors.currentSystem && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.currentSystem.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cursor-pointer bg-green-500 hover:bg-green-600 disabled:bg-green-400 text-white font-semibold py-3 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                {isSubmitting ? "Submitting..." : "Submit & Pay"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
