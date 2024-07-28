import React from "react";
import ContactRequestModal from "@/app/pricing/components/contact-request-modal";
import {Modal, useModal} from "@/components/ui/animated-modal";
import {PricingTier, PricingTierFrequency} from "@/app/pricing/page";

interface ContactRequestParentProps {
    tier: PricingTier;
    frequency: PricingTierFrequency;
}

const ParentComponent = ({tier, frequency}: ContactRequestParentProps) => {

    return (
        <Modal>
            <ContactRequestModal tier={tier} frequency={frequency}/>
        </Modal>
    );
};

export default ParentComponent;