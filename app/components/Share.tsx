"use client"

import {
    EmailIcon,
    EmailShareButton, FacebookIcon,
    FacebookShareButton, LinkedinIcon,
    LinkedinShareButton, TelegramIcon,
    TelegramShareButton, TwitterIcon,
    TwitterShareButton, WhatsappIcon,
    WhatsappShareButton,
} from "react-share";
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const shareTitle = "Découvrez climalliés, la communauté de soutien aux scientifiques"

export default function Share() {
    return (
        <div className="">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="text-sm py-2 px-4 rounded-lg font-semibold leading-6 text-white bg-[#1A302C] inline-flex w-full justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                        Partager le site
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute w-full right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="px-1 py-1 grid grid-cols-2">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active ? 'bg-slate-200 text-white' : 'text-gray-900'
                                        } group flex w-full justify-center items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        <TwitterShareButton title={shareTitle} url={""}>
                                            <TwitterIcon size={32} round />
                                        </TwitterShareButton>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active ? 'bg-slate-200 text-white' : 'text-gray-900'
                                        } group flex justify-center w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        <FacebookShareButton title={shareTitle} url={""} >
                                            <FacebookIcon size={32} round />
                                        </FacebookShareButton>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active ? 'bg-slate-200 text-white' : 'text-gray-900'
                                        } group flex justify-center w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        <LinkedinShareButton title={shareTitle} url={""} >
                                            <LinkedinIcon size={32} round />
                                        </LinkedinShareButton>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active ? 'bg-slate-200 text-white' : 'text-gray-900'
                                        } group flex justify-center w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        <WhatsappShareButton title={shareTitle} url={""} >
                                            <WhatsappIcon size={32} round />
                                        </WhatsappShareButton>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active ? 'bg-slate-200 text-white' : 'text-gray-900'
                                        } group flex justify-center w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        <TelegramShareButton title={shareTitle} url={""} >
                                            <TelegramIcon size={32} round />
                                        </TelegramShareButton>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active ? 'bg-slate-200 text-white' : 'text-gray-900'
                                        } group flex justify-center w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        <EmailShareButton title={shareTitle} url={""} >
                                            <EmailIcon size={32} round />
                                        </EmailShareButton>
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}