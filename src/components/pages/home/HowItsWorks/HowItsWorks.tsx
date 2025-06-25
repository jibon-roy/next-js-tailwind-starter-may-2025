"use client";

import { Container } from "@/components/ui-library/container";
import Image from "next/image";
import howItsWorksImage from "@/assets/images/howitsworks.png";

const HowItsWorks = () => {
  return (
    <div className="bg-gradient-to-l bg-[linear-gradient(266deg,rgba(28,136,255,0.06)_3.05%,rgba(255,255,255,0.16)_100%)] py-20">
      <Container>
        <div className="flex xl:flex-row flex-col items-center gap-[60px]">
          <div className="xl:w-2/5 w-full">
            <h2 className="sm:text-[26px] text-[20px] font-bold text-black-primary mb-4 ">
              How Shfflr Works in 3 Easy Steps
            </h2>
            <p className="sm:text-[20px] text-[16px] font-normal text-text-primary">
              A simple guide to how easily our app works for you & your club
              members.
            </p>

            <Image
              src={howItsWorksImage}
              alt="How Shfflr Works"
              className="mt-10 sm:w-[334px] w-[300px sm:h-[300px] h-[250px]"
              width={334}
              height={300}
            />
          </div>
          <div className="xl:w-3/5 w-full">
            <div className="flex lg:flex-row flex-col gap-4 lg:items-end">
              <div className="p-6 rounded-[20px] bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <g clip-path="url(#clip0_553_3635)">
                    <path
                      d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                      fill="#0C0E10"
                    />
                    <path
                      d="M14.1631 21.1231C14.0945 20.7094 14.077 20.1575 14.077 19.5194C14.077 17.1217 14.4396 13.5516 14.6635 12.2057C14.3014 12.4471 13.9393 12.5333 13.5941 12.5333C12.7316 12.5333 12.0244 11.9122 12.0244 11.3262L12.0414 11.1709C13.2836 10.7913 14.2668 10.05 15.0771 8.39419C15.2494 8.04907 15.6467 7.91138 16.1119 7.91138C16.9568 7.91138 17.9576 8.41177 17.9576 9.13599C17.9576 9.22212 17.9576 9.30825 17.923 9.39497C17.3881 11.0338 17.1643 12.879 17.1643 14.7247C17.1643 16.7602 17.4402 18.7952 17.9406 20.5547C17.9752 20.6579 17.9752 20.7616 17.9752 20.8477C17.9752 21.6586 16.9404 22.0893 15.9396 22.0893C15.0771 22.0893 14.2492 21.7788 14.1631 21.1231Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_553_3635">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <h3 className="text-black-primary font-semibold sm:text-[26px] text-[20px] mt-[26px]">
                  Organise Once — Let Shfflr Handle the Rest
                </h3>
                <p className="text-[16px] font-normal text-text-primary mt-4">
                  Set up events with player preferences like age, ability,
                  gender & more. Shfflr takes over from there.
                </p>
              </div>
              <div className="p-6 rounded-[20px] bg-white h-max">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <g clip-path="url(#clip0_553_3644)">
                    <path
                      d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                      fill="#0C0E10"
                    />
                    <path
                      d="M10.1879 21.201C10.0848 20.8388 10.0332 20.4937 10.0332 20.1832C10.0332 17.2166 14.0861 15.733 16.3291 13.1631C16.9326 12.4558 17.1916 11.7316 17.1916 11.1105C17.1916 10.248 16.7088 9.62693 15.9846 9.62693C15.657 9.62693 15.2773 9.76462 14.8637 10.0582C14.3287 10.4379 14.0012 11.1621 14.0012 11.8347C14.0012 12.3351 14.191 12.801 14.6223 13.0594C14.2596 13.6459 13.5699 13.9564 12.8803 13.9564C11.7418 13.9564 10.5518 13.1455 10.5518 11.4381L10.5687 11.1621C10.707 9.31638 12.742 7.83337 15.0535 7.83337C15.9676 7.83337 16.8992 8.05779 17.7957 8.57517C19.2102 9.4031 19.9689 10.9728 19.9689 12.5426C19.9689 13.7672 19.5207 14.9748 18.5545 15.8197C16.3637 17.7685 12.8105 18.2519 12.8105 19.8732V20.0115L13.0865 20.0285C14.259 20.0285 17.0193 19.5281 17.7951 18.7002C17.9504 18.5279 18.1227 18.4588 18.2779 18.4588C18.7262 18.4588 19.175 18.9937 19.3297 19.7004C19.3643 19.8726 19.3818 20.0625 19.3818 20.2523C19.3818 21.0633 19.0027 21.8912 18.0189 21.9943C17.5361 22.0459 16.001 22.1666 14.4312 22.1666C12.4648 22.1666 10.4123 21.9767 10.1879 21.201Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_553_3644">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <h3 className="text-black-primary font-semibold sm:text-[26px] text-[20px] mt-[26px]">
                  Participants Sign Up
                </h3>
                <p className="text-[16px] font-normal text-text-primary mt-4">
                  Players join events, with automatic waitlisting if slots are
                  full.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-[20px] bg-white max-w-[491px] mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <g clip-path="url(#clip0_553_3653)">
                  <path
                    d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                    fill="#0C0E10"
                  />
                  <path
                    d="M13.4305 22.3218C11.5332 22.0804 10.6191 20.7697 10.6191 19.6482C10.6191 19.0271 10.8951 18.4751 11.4301 18.1822C11.8092 18.9755 12.6887 19.3207 13.6203 19.3207C14.8279 19.3207 16.0865 18.7517 16.4838 17.8371C16.5359 17.7164 16.5529 17.5957 16.5529 17.5095C16.5529 17.182 16.2594 17.0613 15.8457 17.0613C15.2937 17.0613 14.5344 17.2857 14.0346 17.5095C13.8793 17.5787 13.7416 17.6126 13.6033 17.6126C12.827 17.6126 12.2926 16.681 12.2926 15.8707C12.2926 15.3703 12.5164 14.9044 13.0338 14.7667C14.5689 14.3525 15.7936 13.2146 16.4662 12.0931C16.8453 11.438 17.0006 10.8861 17.0006 10.4542C17.0006 9.69546 16.5178 9.2812 15.9137 9.2812C15.3617 9.2812 14.7066 9.62632 14.2408 10.3505C13.9818 10.7472 13.8266 11.1955 13.8266 11.5921C13.8266 12.1271 14.1025 12.5584 14.723 12.6269C14.4816 13.2134 13.7914 13.524 13.0672 13.524C12.1355 13.524 11.1184 13.0066 10.8248 11.9027C10.7732 11.6783 10.7387 11.4544 10.7387 11.23C10.7387 9.4019 12.5674 7.64233 15.275 7.64233L15.8961 7.6769C17.9316 7.86675 19.3801 9.34976 19.3801 11.0578C19.3801 11.8511 19.0701 12.6791 18.3623 13.4554C17.5859 14.3003 16.448 15.0943 15.258 15.4388C15.2234 15.4388 15.2059 15.4734 15.2059 15.508C15.2059 15.5425 15.2404 15.5771 15.275 15.5771L15.827 15.5601C17.9832 15.5601 19.1387 16.4396 19.1387 17.9056L19.1041 18.3023C18.7766 20.6824 16.2582 22.3558 13.9988 22.3558C13.809 22.3558 13.6191 22.3382 13.4293 22.3212L13.4305 22.3218Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_553_3653">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <h3 className="text-black-primary font-semibold sm:text-[26px] text-[20px] mt-[26px]">
               Shfflr Shuffles & Notifies in Real Time
              </h3>
              <p className="text-[16px] font-normal text-text-primary mt-4">
              On event day, players confirm attendance and are auto-organised for matches using smart logic.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowItsWorks;
