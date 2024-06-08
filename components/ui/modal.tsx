"use clent";
import { Transition,TransitionChild, Dialog, DialogPanel } from "@headlessui/react";
import { Fragment } from "react";
import IconButton from "./icon-button";
import { X } from "lucide-react";
interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
    open,
    onClose,
    children
}) => {
    return (
        <Transition show={open} appear as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
                <div className="fixed inset-0 bg-black/50"/>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center p-4 justify-center text-center">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom= " opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel className="w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle border bg-white">
                                <div className="relative flex items-center w-full  overflow-hidden bg-whte px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 ">
                                    <div className="absolute right-4 top-4">
                                        <IconButton onClick={onClose} icon={<X size={16}/>}/>
                                    </div>
                                    {children}
                                </div>
                            </DialogPanel>

                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Modal