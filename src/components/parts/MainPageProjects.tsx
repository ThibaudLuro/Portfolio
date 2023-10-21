export default function MainPageProjects(props: any) {
    return (
        <>
            <h2 className="text-2xl font-bold mb-5">MES REALISATIONS</h2>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-2">
                {/* Darker bg and project name on hover */}
                <div className="h-80 bg-zinc-300" />
                <div className="h-80 bg-zinc-300" />
                <div className="h-80 bg-zinc-300" />
                <div className="h-80 bg-zinc-300" />
                <div className="md:col-span-2 h-80 bg-zinc-300" />
            </div>
        </>
    )
}