import React, { useState, Dispatch, Fragment, SetStateAction } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface BuyModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const BuyModal: React.FC<BuyModalProps> = ({ open, setOpen }) => {
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const handlePurchase = () => {
    // Simulate purchase success
    setPurchaseSuccess(true);
    setTimeout(() => {
      setOpen(false);
      setPurchaseSuccess(false);
    }, 2000);

  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-y-auto" onClose={setOpen}>
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="sm:mt-3 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">Realizar compra</Dialog.Title>
                    {purchaseSuccess ? (
                      <p className="text-green-600">Tu compra ha sido realizada con éxito</p>
                    ) : (
                      <form>
                         <div className="mt-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input type="text" id="name" name="name" className=" mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="mt-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo</label>
                        <input type="email" id="email" name="email" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="mt-4">
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Número de Tarjeta</label>
                        <input type="text" id="cardNumber" name="cardNumber" autoComplete="cc-number" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                        <div className="mt-4 sm:col-span-2">
                          <label htmlFor="expiration" className="block text-sm font-medium text-gray-700">Fecha de Expiración</label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input type="text" id="expiration" name="expiration" autoComplete="cc-exp" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300" placeholder="MM/AA" />
                          </div>
                        </div>
                        <div className="mt-4 sm:col-span-1">
                          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                          <input type="text" id="cvv" name="cvv" autoComplete="cc-csc" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                      </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={handlePurchase}>Comprar</button>
                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setOpen(false)}>Cancelar</button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default BuyModal;
