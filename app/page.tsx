import Link from "next/link";
import Image from "next/image";
import scientists from "@/app/data/scientists.json";
import {LinkedinIcon, TwitterIcon} from "react-share";

export default function Home() {
  return (
    <>
      <main className={"bg-primary text-center py-36"} style={{backgroundImage: "url('/trees.svg')", backgroundPosition: "bottom", backgroundSize: "cover"}}>
          <h2 className={"text-[#D1D6D5] mb-4 font-semibold"}>SOUTENIR LES SCIENTIFIQUES ET COMBATTRE LA DÉSINFORMATION</h2>
          <div className={"text-white text-5xl font-bold mb-4 max-w-3xl mx-auto"}>Les menaces aux scientifiques vous choquent ? Nous aussi.</div>
          <p className={"text-white max-w-3xl mx-auto"}>Les scientifiques qui prennent sur leur temps personnel, de manière bénévole, pour dialoguer avec les citoyens et apporter les faits scientifiques sans prescrire ne doivent pas faire l’objet d’insultes, de menaces, d’agressions.</p>
          <div className={"inline-flex gap-4 mt-16 mx-auto"}>
              <Link target={"_blank"} href="https://discord.gg/QeGjEhgF" className={"text-sm py-2 px-4 rounded-lg font-semibold leading-6 text-primary bg-secondary"}>Rejoindre la communauté</Link>
              <Link href="#le-constat" className={"text-sm py-2 px-4 rounded-lg font-semibold leading-6 text-white bg-primary-300"}>En savoir plus</Link>
          </div>
      </main>
        <section id={"le-constat"} className={"py-36 px-10 lg:px-0 max-w-7xl mx-auto"}>
            <div className={"text-center"}>
                <h2 className={"text-primary mb-4 font-semibold uppercase"}>Le constat</h2>
                <div className={"text-4xl text-primary font-bold mb-4 max-w-3xl mx-auto"}>Une escalade de la violence et de la désinformation autour du climat.</div>
                <p className={"text-text-on-light max-w-3xl mx-auto"}>Depuis 2022, les scientifiques du climat reçoivent de plus en plus d’insultes et de menaces, parfois même des agressions physiques lorsqu’ils cherchent à partager leurs travaux de manière neutre sur les réseaux sociaux. Ce phénomène est notamment lié à d’autres évènements récents préoccupants.</p>
            </div>
            <div className={"grid grid-cols-1 lg:grid-cols-3 gap-16 py-16"}>
                <div className={"bg-light-200 p-8 pt-12 rounded-lg text-center relative"}>
                    <Image width={64} height={64} src="/Warning.svg" alt="Attention" className={"absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2"}/>
                    <div className={"font-semibold text-lg mb-3 text-primary"}>Des réseaux sociaux en roue libre</div>
                    <p className={"text-text-on-light"}>
                        Le rachat de Twitter/X par Elon Musk a diminué la modération et dé-bannit des comptes de désinformation (notamment climatosceptiques et pro-nazi)
                    </p>
                </div>
                <div className={"bg-light-200 p-8 pt-12 rounded-lg text-center relative"}>
                    <Image width={56} height={56} src="/Loudspeaker.svg" alt="Attention" className={"absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2"}/>
                    <div className={"font-semibold text-lg mb-3 text-primary"}>Une montée en puissance de la désinformation</div>
                    <p className={"text-text-on-light"}>
                        Les sphères de la désinformation s'entremêlent et se renforcent mutuellement, ce qui rend l’information fiable invisible. [lien vers l'article]</p>
                </div>
                <div className={"bg-light-200 p-8 pt-12 rounded-lg text-center relative"}>
                    <Image width={64} height={64} src="/Chess pawn.svg" alt="Attention" className={"absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2"}/>
                    <div className={"font-semibold text-lg mb-3 text-primary"}>Une désinformation foncièrement voulue et organisée</div>
                    <p className={"text-text-on-light"}>
                        La désinformation bénéficie aujourd'hui de “fermes à troll”, des faux comptes robots qui participent activement à désinformer sur les réseaux sociaux</p>
                </div>
            </div>
            <div className={"bg-light-200 flex justify-between gap-6 rounded-lg mb-16"}>
                <div className={"px-24 py-16 max-w-2xl"}>
                    <div className={"font-semibold text-lg mb-3 text-primary"}>Des scientifiques excédés qui finissent par déserter car ils sont en danger</div>
                    <p className={"text-text-on-light"}>
                        Menaces, réponses violentes voir agressions physiques, les scientifiques subissent la violence des réseaux sociaux lorsqu’ils partagent leurs travaux et se voient considérés comme des “objets politiques” ou des militants. Sur les plateaux télé, ils sont mis face à des polémistes et ne se font pas entendre</p>
                </div>
                <Image className={"-translate-y-4 inline-block object-contain z-20 bg-white rounded-lg border"} src={"/tweet.png"} width={578} height={284} alt={"Tweet agression sur Twitter/X sur un scientifique"}/>
            </div>
            <div className={"bg-primary rounded-lg p-20 text-center relative"}>
                <h2 className={"text-[#CCD2D1] mb-4 font-semibold uppercase"}>Une majorité de soutiens silencieux</h2>
                <div className={"text-4xl text-white font-bold mb-4 max-w-5xl mx-auto"}>Il est temps que la majorité de silencieuse se fasse entendre pour apporter un soutien aux scientifiques afin de contrer la violence et la désinformation sur internet.</div>
                <div className={"inline-flex gap-4 mt-10 mx-auto"}>
                    <Link target={"_blank"} href="https://discord.gg/QeGjEhgF" className={"text-sm py-2 px-4 rounded-lg font-semibold leading-6 text-primary bg-white"}>Rejoindre la communauté</Link>
                    <Link href="/kit" className={"text-sm py-2 px-4 rounded-lg font-semibold leading-6 text-white bg-primary-300"}>Découvrir le kit anti-désinformation</Link>
                </div>
                <Image className={"absolute -bottom-4 z-20 -right-16 h-52"} src={"/BigFlag.svg"} width={254} height={304} alt={"Gros logo drapeau"}/>
            </div>
        </section>
        <section id={"le-projet"} className={"bg-primary"} style={{backgroundImage: "url('/trees2.svg')", backgroundPosition: "bottom", backgroundSize: "cover"}}>
            <div className={"max-w-7xl mx-auto py-20 flex justify-between items-center gap-12"}>
                <div className={""}>
                    <h2 className={"text-white mb-4 font-semibold uppercase"}>Le PROJET</h2>
                    <div className={"text-5xl text-white font-bold mb-4 max-w-3xl"}>Climalliés fédère une communauté de soutient aux scientifiques </div>
                    <p className={"text-white max-w-3xl"}>Relayer et rendre visible les propos des scientifiques sur nos réseaux sociaux, intervenir contre ceux qui désinforment</p>
                </div>
                <div className={"flex max-w-xl flex-col gap-6"}>
                    <div className={"bg-white p-8 rounded-lg"}>
                        <div className={"font-semibold text-xl mb-3 text-xm text-primary"}>Aider à rendre visible le propos des scientifiques sur internet et les soutenir</div>
                        <p className={"text-text-on-light"}>
                            Une communauté Discord afin de partager les derniers posts et actualités des scientifiques et permettre un engagement massif positif pour invisibiliser la violence et la désinformation.
                        </p>
                        <Link target={"_blank"} href="https://discord.gg/QeGjEhgF" className={"text-sm py-2 px-4 rounded-lg font-semibold leading-6 text-primary bg-secondary mt-3 inline-block"}>Rejoindre la communauté</Link>
                    </div>
                    <div className={"bg-white p-8 rounded-lg"}>
                        <div className={"font-semibold text-xl mb-3  text-primary"}>Contrer la désinformation grâce au kit anti-désinformation</div>
                        <p className={"text-text-on-light"}>
                            Un kit participatif de réponses sourcées et fiables aux propos les plus répandus afin de répondre massivement aux fausses informations
                        </p>
                        <Link href="/kit" className={"text-sm py-2 px-4 rounded-lg font-semibold leading-6 text-primary bg-secondary mt-3 inline-block"}>Découvrir le kit anti-désinformation</Link>
                    </div>
                </div>
            </div>
        </section>
        <section className={"bg-secondary-300"}>
            <div className={"max-w-7xl mx-auto py-20 flex gap-8"}>
                <div>
                    <h2 className={"mb-4 font-semibold uppercase"}>Le KIT ANTI-DÉSINFORMATION</h2>
                    <div className={"text-5xl font-bold mb-4 max-w-2xl"}>Un kit pour savoir répondre aux arguments fallacieux, malhonnêtes ou erronés</div>
                    <p className={"text-text-on-light max-w-3xl"}>Un kit 100% gratuit contenant des réponses correctement sourcées et fiables pour s’interposer lorsqu’un compte tente de faire de la désinformation sur les réseaux sociaux.</p>
                    <Link href="/kit" className={"text-sm py-2 px-4 rounded-lg font-semibold leading-6 text-primary bg-secondary mt-3 inline-block"}>Découvrir le kit anti-désinformation</Link>
                </div>
            </div>
        </section>
        <section className={""}>
            <div className={"max-w-7xl mx-auto py-20 gap-8"}>
                <div className={"text-center"}>
                    <h2 className={"text-primary mb-4 font-semibold uppercase"}>SOUTENEZ-LES</h2>
                    <div className={"text-4xl text-center mx-auto text-primary font-bold mb-4 max-w-3xl"}>Les scientifiques à suivre</div>
                </div>
                <div className={"grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12"}>
                    {scientists.slice(0, 6).map((scientist) => (
                        <div className={"bg-light-200 p-8 rounded-lg"} key={scientist.name}>
                            <Image className={"rounded-lg mx-auto block"} src={scientist.photo} width={96} height={96} alt={scientist.name}/>
                            <div className={"text-center mt-6 font-semibold mb-2"}>{scientist.name}</div>
                            <p className={"text-center text-text-on-light"}>{scientist.description}</p>
                            <div className={"mx-auto gap-2 mt-6 flex justify-center"}>
                                <Link href={scientist.twitter}>
                                    <TwitterIcon size={32} round />
                                </Link>
                                <Link href={scientist.linkedin}>
                                    <LinkedinIcon size={32} round />
                                </Link>
                            </div>
                        </div>
                    ))}
                    <div className={"bg-primary p-8 rounded-lg"}>
                        <div>
                            <div className={"w-12 h-12 font-semibold text-lg rounded-full flex justify-center items-center bg-secondary text-primary"}>+ {scientists.length - 7}</div>
                        </div>
                        <div className={"text-xl text-white mt-3 font-semibold mb-2"}>Pour découvrir tous les scientifiques, c’est ici</div>
                        <p className={"text-white"}>Seule une sélection de scientifiques sont listés ici, mais bien d'autres attendent d'être découverts. Accédez à la liste complète</p>
                        <Link href="/scientifiques" className={"text-sm py-2 px-4 rounded-lg font-semibold leading-6 text-primary bg-secondary mt-3 inline-block"}>Accéder à la liste complète</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}