import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from "next/link";
import Image from "next/image";
import Share from "@/app/components/Share";

export default function Navigation() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-primary text-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex me-14">
                    <Link href="/" className="p-1.5 inline-block">
                        <span className="sr-only">Climalliés</span>
                        <Image className="" width={126} height={34} src="/logo.svg" alt="Climalliés" />
                    </Link>
                </div>
                {/*<div className="flex lg:hidden">*/}
                {/*    <button*/}
                {/*        type="button"*/}
                {/*        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"*/}
                {/*        onClick={() => setMobileMenuOpen(true)}*/}
                {/*    >*/}
                {/*        <span className="sr-only">Open main menu</span>*/}
                {/*        <Bars3Icon className="h-6 w-6" aria-hidden="true" />*/}
                {/*    </button>*/}
                {/*</div>*/}
                <div className="hidden lg:flex lg:gap-x-7">
                    <Link href="#le-constat" className="text-sm leading-6 text-white px-3 py-1 hover:bg-[#1A302C] rounded-lg">
                        Le constat
                    </Link>
                    <Link href="#le-projet" className="text-sm leading-6 text-white px-3 py-1 hover:bg-[#1A302C] rounded-lg">
                        Le projet
                    </Link>
                    <Link href="/kit" className="text-sm leading-6 text-white px-3 py-1 hover:bg-[#1A302C] rounded-lg">
                        Le kit
                    </Link>
                    <Link href="/scientifiques" className="text-sm leading-6 text-white px-3 py-1 hover:bg-[#1A302C] rounded-lg">
                        Les scientifiques à suivre
                    </Link>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:gap-4 lg:justify-end">
                    <Link target={"_blank"} href="https://discord.gg/QeGjEhgF" className="text-sm py-2 px-4 rounded-lg font-semibold leading-6 text-primary bg-secondary">
                        Rejoindre la communauté
                    </Link>
                    <Share/>
                </div>
            </nav>
            {/*<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>*/}
            {/*    <div className="fixed inset-0 z-10" />*/}
            {/*    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">*/}
            {/*        <div className="flex items-center justify-between">*/}
            {/*            <a href="#" className="-m-1.5 p-1.5">*/}
            {/*                <span className="sr-only">Climalliés</span>*/}
            {/*                <img*/}
            {/*                    className="h-8 w-auto"*/}
            {/*                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"*/}
            {/*                    alt=""*/}
            {/*                />*/}
            {/*            </a>*/}
            {/*            <button*/}
            {/*                type="button"*/}
            {/*                className="-m-2.5 rounded-md p-2.5 text-gray-700"*/}
            {/*                onClick={() => setMobileMenuOpen(false)}*/}
            {/*            >*/}
            {/*                <span className="sr-only">Close menu</span>*/}
            {/*                <XMarkIcon className="h-6 w-6" aria-hidden="true" />*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*        <div className="mt-6 flow-root">*/}
            {/*            <div className="-my-6 divide-y divide-gray-500/10">*/}
            {/*                <div className="space-y-2 py-6">*/}
            {/*                    <a*/}
            {/*                        href="#constat"*/}
            {/*                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"*/}
            {/*                    >*/}
            {/*                        Le constat*/}
            {/*                    </a>*/}
            {/*                    <a*/}
            {/*                        href="#projet"*/}
            {/*                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"*/}
            {/*                    >*/}
            {/*                        Le projet*/}
            {/*                    </a>*/}
            {/*                    <Link*/}
            {/*                        href="/scientifiques"*/}
            {/*                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"*/}
            {/*                    >*/}
            {/*                        Company*/}
            {/*                    </Link>*/}
            {/*                </div>*/}
            {/*                <div className="py-6">*/}
            {/*                    <a*/}
            {/*                        href="#"*/}
            {/*                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"*/}
            {/*                    >*/}
            {/*                        Rejoindre la communauté*/}
            {/*                    </a>*/}
            {/*                    <a*/}
            {/*                        href="#"*/}
            {/*                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"*/}
            {/*                    >*/}
            {/*                        Partager le site*/}
            {/*                    </a>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </Dialog.Panel>*/}
            {/*</Dialog>*/}
        </header>
    )
}