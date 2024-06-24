"use client";

import { types } from "@/app/lib/data/maker";
import { IComponent, IComponentType } from "@/app/lib/interfaces/maker";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { useState } from "react";
import ComponentList from "./ComponentList";
import CompositorModal from "./ModalComponent";

const Maker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [components, setComponents] = useState<IComponent[]>([]);
  const [currentComponent, setCurrentComponent] = useState<IComponent>();

  const handleSave = () => {
    if (currentComponent) setComponents([...components, currentComponent]);

    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChangeValue = (
    value: string | string[],
    type: IComponentType,
  ) => {
    setCurrentComponent({ value: value, type: type });
  };

  return (
    <div className="flex flex-col my-8 gap-4 items-center">
      <div className="my-auto w-3/5 rounded-md bg-black/5 dark:bg-white/5 p-4 ">
        <ComponentList componentList={components} />

        <div className="w-full flex justify-center my-6">
          <Button
            onClick={handleOpen}
            className="w-fit rounded-md bg-black/15 dark:bg-white/15 py-1.5 px-3 text-black dark:text-white focus:outline-none hover:bg-black/10 dark:hover:bg-white/10"
          >
            +
          </Button>
        </div>
      </div>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none bg-white dark:bg-black"
        onClose={handleClose}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-white/50 dark:bg-black/50">
            <DialogPanel className="w-full max-w-md rounded-md bg-black/5 dark:bg-white/5 p-6 backdrop-blur-2xl duration-300">
              <DialogTitle
                as="h3"
                className="mb-4 text-base/7 font-medium text-black dark:text-white"
              >
                New component
              </DialogTitle>
              <TabGroup>
                <TabList className="grid grid-cols-3 gap-1 justify-between">
                  {types.map((type) => (
                    <Tab
                      key={type.name}
                      className="rounded-md py-1 px-3 text-sm/6 font-semibold text-black dark:text-white focus:outline-none data-[focus]:outline-1 data-[selected]:bg-black/10 data-[hover]:bg-black/5 data-[selected]:data-[hover]:bg-black/10 dark:data-[selected]:bg-white/10 dark:data-[hover]:bg-white/5 dark:data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-black dark:data-[focus]:outline-white"
                    >
                      {type.name}
                    </Tab>
                  ))}
                </TabList>
                <TabPanels className="mt-3">
                  {types.map((type) => (
                    <TabPanel key={type.name} className="rounded-md">
                      <CompositorModal
                        type={type}
                        onChange={handleChangeValue}
                      />
                    </TabPanel>
                  ))}
                </TabPanels>
              </TabGroup>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-black/15 dark:bg-white/15 py-1.5 px-3 text-sm/6 font-semibold text-black dark:text-white focus:outline-none hover:bg-white/10 dark:hover:bg-white/10"
                  onClick={handleSave}
                >
                  Save
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Maker;
