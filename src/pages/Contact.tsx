import TopBar from "../components/common/Topbar";
import ContactForm from "../components/parts/ContactForm";


export default function Contact() {
    return (
        <div className="h-full w-full bg-primary text-accent font-montserrat p-10">
            <TopBar />

            <h2 className="text-2xl font-bold mb-5 mt-20">CONTACT</h2>
            <ContactForm />
        </div>
    )
}