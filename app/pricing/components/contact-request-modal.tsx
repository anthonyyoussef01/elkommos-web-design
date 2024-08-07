import {Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger, useModal} from "@/components/ui/animated-modal";
import {cn} from "@/lib/utils";
import {motion} from "framer-motion";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {PricingTier, PricingTierFrequency} from "@/app/pricing/page";
import {PhoneInput} from "@/components/ui/phone-input";
import {Button} from "@/components/ui/button";

interface ContactRequestModalProps {
  tier: PricingTier;
  frequency: PricingTierFrequency;
}

const ContactRequestModal = ({ tier, frequency }: ContactRequestModalProps) => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '', // Assuming PhoneInput component properly updates this field
        projectDetails: '',
        selectedPackage: tier.name,
        selectedFrequency: frequency.label,
    });
    const { setOpen } = useModal();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/send-contact-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Email sent successfully');
                setOpen(false); // Close the modal on success
            } else {
                const errorData = await response.json();
                console.error('Error sending email:', errorData.message);
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <>
            <ModalTrigger
                className={cn(
                    'w-full text-black dark:text-white',
                    !tier.highlighted && !tier.featured
                        ? 'bg-gray-100 dark:bg-gray-600'
                        : 'bg-red-300 hover:bg-red-400 dark:bg-red-600 dark:hover:bg-red-700',
                    tier.featured || tier.soldOut ? 'bg-white dark:bg-neutral-900 hover:bg-gray-200 dark:hover:bg-black' : 'hover:opacity-80 transition-opacity group/modal-btn flex justify-center',
                )}>
                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                  Contact Us
                </span>
                <div
                    className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                    👋
                </div>
            </ModalTrigger>
            <ModalBody>
                <ModalContent>
                    <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                    Request a Quote
                    </h4>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 border rounded-md"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="company"
                            placeholder="Your Company"
                            className="w-full px-4 py-2 border rounded-md"
                            value={formData.company}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 border rounded-md"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <PhoneInput
                            value={formData.phone}
                            onChange={(phone) => setFormData(prevState => ({...prevState, phone}))}
                        />
                        <textarea
                            name="projectDetails"
                            placeholder="Tell us more about your project"
                            className="w-full px-4 py-2 border rounded-md mb-12"
                            onChange={handleChange}
                        />
                        <ModalFooter className="gap-4">
                            <Button
                                className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28"
                                variant="outline"
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </ModalBody>
        </>
    );
};

export default ContactRequestModal;

const PlaneIcon = ({className}: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z"/>
        </svg>
    );
};

const VacationIcon = ({className}: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0"/>
            <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z"/>
            <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196"/>
            <path d="M15 9l-3 5.196"/>
            <path
                d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25"/>
        </svg>
    );
};

const ElevatorIcon = ({className}: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"/>
            <path d="M10 10l2 -2l2 2"/>
            <path d="M10 14l2 2l2 -2"/>
        </svg>
    );
};

const FoodIcon = ({className}: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16"/>
        </svg>
    );
};

const MicIcon = ({className}: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9"/>
            <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z"/>
        </svg>
    );
};

const ParachuteIcon = ({className}: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M22 12a10 10 0 1 0 -20 0"/>
            <path
                d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3"/>
            <path d="M2 12l10 10l-3.5 -10"/>
            <path d="M15.5 12l-3.5 10l10 -10"/>
        </svg>
    );
};