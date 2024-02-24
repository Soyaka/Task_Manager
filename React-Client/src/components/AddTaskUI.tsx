import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  useDisclosure,
  Textarea,
  SelectItem,
  Select,
} from "@nextui-org/react";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";

export default function AddTaskUi() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [title, settitle] = useState("");
  const [desc, setDesc] = useState("");
  const [label, setlabel] = useState("");

  const handleSubmit = async() => {
    console.log(title, desc, label);
    const response= await AddTask(title, desc, label)
    console.log(response)
  };
  return (
    <>
      <Button
        onPress={onOpen}
        color="secondary"
        className=" flex flex-col text-xl md:w-56 md:h-52  cursor-pointer  opacity-50 hover:opacity-100 bg-zinc-700 border border-rose-300  shadow-lg rounded-xl  transition-all duration-300  "
      >
        <MdAddCircleOutline size={50} />
        Add Task
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          body: "py-6",
          backdrop: "bg-rose-300/20 backdrop-opacity-40",
          base: "border-[#292f46] bg-black dark:bg-zinc-800 text-[#a8b0d3]",
          header: "border-b-[1px] border-rose-500",
          footer: "border-t-[1px] border-rose-500",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-rose-500 gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <form action="" className="flex flex-col gap-2 ">
                  <Input
                    type="title"
                    variant={"faded"}
                    label="Title"
                    onChange={(e) => settitle(e.target.value)}
                    required
                  />
                  <Textarea
                    label="Description"
                    placeholder="Enter your description (Default autosize)"
                    variant={"faded"}
                    required
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <Select
                    items={labels}
                    label="Label"
                    placeholder="Select a label for the task"
                    className="max-w-xs"
                    onChange={(e) => setlabel(e.target.value)}
                  >
                    {(labels) => (
                      <SelectItem key={labels.value}>{labels.label}</SelectItem>
                    )}
                  </Select>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="light"
                  className="bg-white text-black"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button
                  className=" bg-rose-500 shadow-lg text-white shadow-rose-500/30"
                  onPress={onClose}
                  onClick={() => handleSubmit()}
                >
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

const labels = [
  {
    label: "work",
    value: "work",
  },
  {
    label: "school",
    value: "school",
  },
  {
    label: "home",
    value: "home",
  },
  {
    label: "personal",
    value: "personal",
  },
];

const AddTask = async (
  title: string,
  desc: string,
  label: string
): Promise<AxiosResponse<any, any> | null> => {
  try {
    const res = await axios.post(
      "http://localhost:5555/api/task",
      { title: title, desc: desc, label: label },
      { withCredentials: true }
    );
    return res;
  } catch (error) {
    console.log("Can't add task ", error);
    return null;
  }
};
