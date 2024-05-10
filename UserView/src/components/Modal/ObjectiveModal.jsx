import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import ObjectiveComponent from './ObjectiveComponent';

const ObjectiveModal = ({ open, handleClose }) => {
  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-50 ' onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-900/80' />
          </Transition.Child>

          <div className='fixed inset-0 flex justify-end'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <Dialog.Panel className='relative ml-16 flex w-full max-w-3xl flex-1'>
                <ObjectiveComponent handleClose={handleClose} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default ObjectiveModal;
