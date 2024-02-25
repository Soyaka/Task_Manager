type prpsType = {
  description: string;
  title: string;
  status: string;
  label: string
};

function TaskCard(props: prpsType) {
  let { description, title, status, label } = props;
  status = status? status: "todo"
  let btnClass =
    "px-2 w-16 rounded-lg text-white font-Rubik  text-lg opacity-65 ";
  switch (status) {
    case "done":
      btnClass += "bg-green-500";
      break;
    case "ongoing":
      btnClass += "bg-yellow-500";
      break;
    case "todo":
      btnClass += "bg-rose-500";
      break;
    default:
      break;
  }
  return (
    <div className=" flex flex-col md:w-56 justify-around md:h-52 px-2 cursor-pointer  opacity-50 hover:opacity-100 bg-zinc-700 border border-rose-300  shadow-lg rounded-xl  transition-all duration-300  ">
      <div className="flex gap-5 items-center overflow-hidden max-h-[20%]  w-full">
        <div className=" flex flex-1 text-lg   font-Rubik">
          {" "}
          {title}{" "}
        </div>
        <div className=" bg-gradient-to-tr from-cyan-100 to-indigo-400  px-2 rounded-lg ">
          {" "}
          {label}
        </div>
      </div>
      <div className=" flex  p-2 text-zinc-200 border-t   overflow-hidden ">{description}</div>
      <div className="flex gap-3 items-center justify-center border-t py-1 relative  bottom-2  ">
        <button className={btnClass}> {status}</button>
        <div> {"12/12/24 14:07 PM"}</div>
      </div>
    </div>
  );
}

export default TaskCard;
