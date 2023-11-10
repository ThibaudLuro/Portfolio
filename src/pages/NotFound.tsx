import AppButton from "../components/common/AppButton";

export default function NotFound() {
    return (
        <div className="h-[100vh] w-full flex flex-col items-center justify-center bg-primary font-montserrat p-10">
            <h1 className="text-3xl font-bold text-center">CETTE PAGE N'EXISTE PAS</h1>
            <div className="w-44 mt-4">
                <AppButton placeholder="Retour à l'accueil" onClick={() => window.location.href = "/Portfolio"}/>
            </div>
        </div>
    )
}