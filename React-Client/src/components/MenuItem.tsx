import React, { ElementType } from 'react';

type MenuItemProps = {
  Icon: ElementType;
  content: string;
  size: number;
  IsSelected : boolean
};

const MenuItem: React.FC<MenuItemProps> = ({ Icon, content, size, IsSelected }) => {
  const normalClass = "flex gap-3 text-xl  items-center cursor-pointer  p-3 rounded-md  w-full hover:bg-zinc-700  hover:text-rose-500 transition-all duration-200 hover:border-r-4 border-rose-500"
  const selectClass = "flex gap-3 text-xl  items-center cursor-pointer  p-3 rounded-md  w-full bg-rose-500 text-zinc-300"
  const classContent = !IsSelected ? normalClass:selectClass
  return (
    <div className={classContent}>
      <Icon size={size} /> {content}
    </div>
  );
};

export default MenuItem;
