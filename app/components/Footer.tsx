import Image from "next/image";

const Footer = () => (
    <div className={"bg-primary py-8"}>
        <div className={"max-w-7xl mx-auto items-end flex justify-between"}>
            <div>
                <Image width={119} height={30} src={"/logo.svg"} alt={"Logo"}/>
                <p className={"text-white"}>Une initiative portée avec ❤︎ par <span className={"font-semibold"}>Alexandre Macé</span> et <span className={"font-semibold"}>Valentine Michel</span></p>
            </div>
            <div className={"text-white"}>
                © 2023 Climalliés. All rights reserved.
            </div>
        </div>
    </div>
)
export default Footer