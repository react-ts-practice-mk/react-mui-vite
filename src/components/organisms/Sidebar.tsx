//import { useState } from 'react';
// import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import SidebarList from '@/components/molecules/SidebarList'


interface SidebarProps {
  open: boolean
  emitsHandleSidebarOpen: (flag: boolean) => void
}

export default function Sidebar({ open, emitsHandleSidebarOpen }: SidebarProps) {
  // const [open, setOpen] = useState(false);

  const toggleSidebar = (newOpen: boolean) => () => {
    // open = newOpen
    emitsHandleSidebarOpen(newOpen)
    console.log('open value: ',open)
  };

  const DrawerList = (
    // <Box sx={{ width: 250 }} role="presentation" onClick={toggleSidebar(false)}>
    //   <List>
    //     {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
    //       <ListItem key={text} disablePadding>
    //         <ListItemButton>
    //           <ListItemIcon>
    //             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    //           </ListItemIcon>
    //           <ListItemText primary={text} />
    //         </ListItemButton>
    //       </ListItem>
    //     ))}
    //   </List>
    //   <Divider />
    //   <List>
    //     {['All mail', 'Trash', 'Spam'].map((text, index) => (
    //       <ListItem key={text} disablePadding>
    //         <ListItemButton>
    //           <ListItemIcon>
    //             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    //           </ListItemIcon>
    //           <ListItemText primary={text} />
    //         </ListItemButton>
    //       </ListItem>
    //     ))}
    //   </List>
    // </Box>
    <SidebarList />
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleSidebar(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}