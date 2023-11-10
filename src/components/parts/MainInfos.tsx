import Worldwide from "../../assets/Worldwide.svg";

export default function MainInfos() {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="relative">
                    <img src={Worldwide} className="opacity-75" />
                </div>
                <div className="absolute bg-primary w-full">
                    <h1 className="text-3xl md:text-6xl font-bold text-center">THIBAUD LURO</h1>
                    <h2 className="md:text-2xl text-center">ETUDIANT EN INGENIERIE LOGICIELLE</h2>
                </div>
            </div>

            <div className="mt-10 flex flex-col justify-center items-center text-xs font-medium text-center">
                <p>
                    BIENVENUE SUR MON PORTFOLIO.
                </p>
                <p>
                    VOUS Y TROUVEREZ TOUTES LES INFORMATIONS CONCERNANT MA CARRIÈRE PROFESSIONNELLE,
                </p>
                <p>
                    EN PASSANT PAR MES COMPÉTENCES, MES RÉALISATIONS, MON PARCOURS, ET MON CONTACT.
                </p>
            </div>
        </>
    )
}