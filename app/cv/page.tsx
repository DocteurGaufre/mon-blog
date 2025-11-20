import CvEntry from "@/components/CvEntry"

export default function Cv() {
    return (
        <>
            <h1 className="text-center text-3xl my-8 font-bold">Curriculum Vitae</h1>

            <div className="lg:flex">
                <section className="border border-slate-200 rounded-2xl p-4 m-4">
                    <h2>A propos de moi</h2>
                    <p>Voici mon CV avec mes expériences incroyables</p>
                </section>

                <section className="lg:grow">
                    <h2 className="text-3xl my-4">FORMATIONS</h2>

                    <CvEntry title="Enseignement en physique quantique" employer="ECAM">
                        <ul>
                            <li>Donne cours de physique quantique en master</li>
                        </ul>
                    </CvEntry>

                    <CvEntry title="Directeur général de la NASA" employer="NASA">
                        <ul>
                            <li>Donne des ordres à la NASA</li>
                        </ul>
                    </CvEntry>

                    <CvEntry title="Agent de la CIA" employer="CIA">
                        <ul>
                            <li>Donne des ordres aux aliens qui atterissent aux USA</li>
                        </ul>
                    </CvEntry>

                    <CvEntry title="Astronaute chez SpaceX" employer="Space X">
                        <ul>
                            <li>Donne des ordres aux aliens qui sont sur Mars</li>
                        </ul>
                    </CvEntry>
                </section>
            </div>
        </>
    )
}