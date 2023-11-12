import Link from "next/link";
import Image from "next/image";
import scientists from "@/app/data/scientists.json";

export default function Page() {
    return (
            <main className={""}>
                <div className={"max-w-7xl mx-auto py-20 gap-8"}>
                    <div className={"text-center"}>
                        <h2 className={"text-primary mb-4 font-semibold uppercase"}>SOUTENEZ-LES</h2>
                        <div className={"text-4xl text-center mx-auto text-primary font-bold mb-4 max-w-3xl"}>Les scientifiques à suivre</div>
                    </div>
                    <div className={"grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12"}>
                        {scientists.map((scientist) => (
                            <div className={"bg-light-200 p-8 rounded-lg"} key={scientist.name}>
                                <Image className={"rounded-lg mx-auto block"} src={scientist.photo} width={96} height={96} alt={scientist.name}/>
                                <div className={"text-center mt-6 font-semibold mb-2"}>{scientist.name}</div>
                                <p className={"text-center text-text-on-light"}>{scientist.description}</p>
                                <div className={"mx-auto gap-2 mt-6 flex justify-center"}>
                                    <Link href={scientist.twitter}>Twitter</Link>
                                    <Link href={scientist.linkedin}>Linkedin</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
    )
}