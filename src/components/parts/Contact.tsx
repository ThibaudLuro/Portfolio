import { useState } from "react"
import AppInput from "../common/AppInput"
import AppTextArea from "../common/AppTextArea"
import App from "../../App"
import AppButton from "../common/AppButton"

export default function Contact(props: any) {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    return (
        <>
            <h2 className="text-2xl font-bold mb-5">CONTACT</h2>

            <div className="flex flex-col justify-center items-center w-full mt-10 gap-4">

                <AppInput placeholder="NOM / PRENOM" />
                <AppInput placeholder="EMAIL" />
                <AppTextArea placeholder="MESSAGE" />

                <div className="w-full md:w-fit self-start">
                    <AppButton placeholder="ENVOYER" />
                </div>
            </div>
        </>
    )
}