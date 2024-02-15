import  { ElementType, useState } from 'react';
import { FaTasks } from 'react-icons/fa';
import { MdOutlineTaskAlt } from 'react-icons/md';
import { TbUrgent } from 'react-icons/tb';
import MenuItem from './MenuItem';

function Menu() {
  const [SelectedItem, SetSelected] = useState('All Tasks')

  return (
    <div className='flex flex-col gap-2 '>
      {MenuData.map(item => (
        <div onClick={()=> SetSelected(item.content)}><MenuItem  Icon={item.Icon} size={26} content={item.content} IsSelected ={item.content === SelectedItem} /></div>
      ))}
    </div>
  );
}








export default Menu;


const MenuData: MenuObj[] = [
  { Icon: FaTasks, content: "All Tasks" },
  { Icon: MdOutlineTaskAlt, content: "Important!" },
  { Icon: FaTasks, content: "Completed" },
  { Icon: TbUrgent, content: "Todo Now" },
];


type MenuObj ={
  Icon: ElementType,
  content: string
}

