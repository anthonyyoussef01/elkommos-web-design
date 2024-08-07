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
        location: { latitude: 0, longitude: 0 },
    });
    const [loading, setLoading] = useState(false); // Add loading state
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
        setLoading(true); // Show loading indicator

        // Get user's location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                setFormData(prevState => ({
                    ...prevState,
                    location: { latitude, longitude }
                }));

                // Submit the form with location data
                try {
                    const response = await fetch('/api/send-contact-request', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            ...formData,
                            location: { latitude, longitude }
                        }),
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
                } finally {
                    setLoading(false); // Hide loading indicator
                }
            }, async (error) => {
                console.error('Error getting location:', error);
                // Handle form submission without location if geolocation fails
                await submitFormWithoutLocation();
                setLoading(false); // Hide loading indicator
            });
        } else {
            console.error('Geolocation is not supported by this browser.');
            // Handle form submission without location if geolocation is not supported
            await submitFormWithoutLocation();
            setLoading(false); // Hide loading indicator
        }
    };

    const submitFormWithoutLocation = async () => {
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
        } finally {
            setLoading(false); // Hide loading indicator
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
                            disabled={loading} // Disable input while loading
                        />
                        <input
                            type="text"
                            name="company"
                            placeholder="Your Company"
                            className="w-full px-4 py-2 border rounded-md"
                            value={formData.company}
                            onChange={handleChange}
                            disabled={loading} // Disable input while loading
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 border rounded-md"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={loading} // Disable input while loading
                        />
                        <PhoneInput
                            value={formData.phone}
                            onChange={(phone) => setFormData(prevState => ({...prevState, phone}))}
                            disabled={loading} // Disable input while loading
                        />
                        <textarea
                            name="projectDetails"
                            placeholder="Tell us more about your project"
                            className="w-full px-4 py-2 border rounded-md"
                            onChange={handleChange}
                            disabled={loading} // Disable input while loading
                        />
                        <div className="h-0 !mb-12" />
                        <ModalFooter className="gap-4">
                            <Button
                                className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28"
                                variant="outline"
                                onClick={() => setOpen(false)}
                                disabled={loading} // Disable button while loading
                            >
                                Cancel
                            </Button>
                            <Button
                                className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28"
                                type="submit"
                                disabled={loading} // Disable button while loading
                            >
                                {loading ? 'Submitting...' : 'Submit'}
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </ModalBody>
        </>
    );
};

export default ContactRequestModal;