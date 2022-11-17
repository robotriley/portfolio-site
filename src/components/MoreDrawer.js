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
              <h4>Hey! Thank you for clicking "more." I appreciate it. <br /> 
              I'm going to level with you. I'm new to software engineering. I'm a "career shifter." <br />
              I was quite successful in my last career, but finding and keeping jobs in entertainment is kind of like a lottery.
              </h4>
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