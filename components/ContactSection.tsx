import React from 'react';
import Image from 'next/image';
import './ContactSection.css';

const ContactSection = () => {
    return (
        <section className="contact-section">
            <h2>Contactar con recepción</h2>
            <div className="contact-image">
                <Image src="/images/reception.jpg" alt="Recepción del hotel" width={300} height={200} />
                <h3 className="contact-button">Contactar</h3>
            </div>
        </section>
    );
};

export default ContactSection;
