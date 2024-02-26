import ContactForm from "../components/parts/ContactForm";


export default function Contact() {
    return (
        <div className="w-full flex flex-col items-center justify-center" style={{ minHeight: 'calc(100vh - 5rem)' }}> 
            <h2 className="text-2xl font-bold mb-5 mt-20">CONTACT</h2>
            <ContactForm />
        </div>
    )
}