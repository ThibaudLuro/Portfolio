export default function MainInfos() {
    return (
        <>
            <div className="flex flex-col items-center justify-center space-y-10">
                <div className="flex flex-col md:flex-row md:gap-4">
                    <h1 className="text-5xl md:text-6xl font-bold text-center">THIBAUD</h1>
                    <h1 className="text-3xl md:text-6xl font-bold text-center">LURO</h1>
                </div>
                <h2 className="text-xl md:text-2xl text-center">ETUDIANT EN INGENIERIE LOGICIELLE</h2>
            </div>

            <div className="flex flex-col mt-4 justify-center items-center text-xs font-medium text-center">
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