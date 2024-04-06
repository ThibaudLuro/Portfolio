import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="h-[100vh] text-accent w-full flex flex-col items-center justify-center font-montserrat p-10">
            <h1 className="text-3xl font-bold text-center">CETTE PAGE N'EXISTE PAS</h1>
            <div className="w-44 mt-4">
                <Link to={"/"} style={{ textDecoration: 'none' }}>
                    <Button>Retour à l'accueil</Button>
                </Link>
            </div>
        </div>
    )
}