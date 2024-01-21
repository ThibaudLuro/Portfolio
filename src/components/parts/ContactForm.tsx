import AppInput from "../common/AppInput"
import AppTextArea from "../common/AppTextArea"
import AppButton from "../common/AppButton"

export default function ContactForm() {

    // const [name, setName] = useState<string>('')
    // const [email, setEmail] = useState<string>('')
    // const [message, setMessage] = useState<string>('')

    return (
        <div className="flex flex-col justify-center items-center w-full mt-10 gap-4">

            <AppInput placeholder="NOM / PRENOM" />
            <AppInput placeholder="EMAIL" />
            <AppTextArea placeholder="MESSAGE" />

            <div className="w-full md:w-fit self-start">
                <AppButton placeholder="ENVOYER" />
            </div>
        </div>
    )
}