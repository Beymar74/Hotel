import React from 'react';
import Header from '@/components/Header';
import Food from '@/components/Food';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div>
            <Header />
            <Food />
            <ContactSection />
            <Footer />
        </div>
    );
}
