import React from 'react';
import { IconButton } from '@chakra-ui/react'
import { RxHamburgerMenu } from "react-icons/rx";
// import { HamburgerIcon } from '@chakra-ui/icons';
import { FaHome } from "react-icons/fa";
import { TbCalendarPlus } from "react-icons/tb";
import { IoIosText } from "react-icons/io";
import { BsFillPersonLinesFill } from "react-icons/bs";


import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  // MenuItemOption,
  // MenuGroup,
  // MenuOptionGroup,
  // MenuDivider,
} from '@chakra-ui/react'

const Nav = () => {
  return (
    <div className='nav'>

      <Menu>
        <MenuButton className='menuicon'
          as={IconButton}
          aria-label='Options'
          icon={<RxHamburgerMenu className='menuiconbtn' />}
          variant='outline'
        />
        <MenuList>

          <MenuItem icon={<FaHome />}>
            Home
          </MenuItem>

          <MenuItem icon={<BsFillPersonLinesFill />}>
            About
          </MenuItem>

          <MenuItem icon={<TbCalendarPlus />}>
            Book
          </MenuItem>

          <MenuItem icon={<IoIosText />}>
            Contact
          </MenuItem>

        </MenuList>
      </Menu>

    </div>
  )
}

export default Nav
