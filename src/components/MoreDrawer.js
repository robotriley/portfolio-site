import {useState} from 'react';
import '../App.css';
import { Drawer, Button} from 'rsuite'

const MoreDrawer = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleOpen = key => {
    setOpen(true);
    setPlacement(key);
  };
  return (
    <div>
      <Drawer
        placement={placement}
        open={open}
        keyboard={true}
        size={'md'}
        onClose={() => setOpen(false)}>
        <Drawer.Header id="aboutHeader" >
          <h2>More About Riley</h2>
          {/* <Button appearance="ghost" color="yellow">show me an example</Button> */}
        </Drawer.Header>
        <Drawer.Body>
          <div>

            <div className='drawerWords1'>
              <p>Hey! Thank you for clicking "more." I appreciate it.</p>
            </div>
            
          </div>
        </Drawer.Body>
      </Drawer>

      <Button
        appearance="link"
        size='lg'
        color="red"
        onClick={() => handleOpen('bottom')}>More</Button>
    </div>
  )
}

export default MoreDrawer ; 