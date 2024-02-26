import { useState } from "react"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { useToast } from "../ui/use-toast"

export default function ContactForm() {
    const { toast } = useToast();

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    function send() {
        if (name === '' || email === '' || message === '') {
            toast({
                variant: "destructive",
                title: "Erreur !",
                description: "Veuillez remplir tous les champs.",
            })
            return
        }

        toast({
            title: "Envoyé !",
            description: "Votre message a bien été envoyé",
        })
    }

    return (
        <div className="w-full lg:w-1/3 flex flex-col justify-center items-center mt-10 gap-4">
            <Input
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="NOM / PRENOM" />
            <Input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="EMAIL" />
            <Textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="MESSAGE"
            />

            <div className="w-full md:w-fit self-start">
                <Button onClick={() => send()}>
                    ENVOYER
                </Button>
            </div>
        </div>
    )
}