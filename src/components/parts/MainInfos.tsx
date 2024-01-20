import PlanetA from '../../assets/PlanetA.svg'
import PlanetB from '../../assets/PlanetB.svg'
import PlanetC from '../../assets/PlanetC.svg'

export default function MainInfos() {
    return (
        <>
            <div className="flex flex-col items-center justify-center space-y-10">

                <div className="flex flex-row justify-center w-full space-x-4">
                    <img className="w-20 md:w-30" src={PlanetA} />
                    <img className="w-20 md:w-30" src={PlanetC} />
                    <img className="w-20 md:w-30" src={PlanetB} />
                </div>

                <h1 className="text-3xl md:text-6xl font-bold text-center">THIBAUD LURO</h1>
                <h2 className="md:text-2xl text-center">ETUDIANT EN INGENIERIE LOGICIELLE</h2>
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