import {useState} from 'react';
import '../App.css';
import { Drawer, Button} from 'rsuite'

const TrollSimulatorDrawer = () => {
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
          <h2>Troll Simulator</h2>
          {/* <Button appearance="ghost" color="yellow">show me an example</Button> */}
        </Drawer.Header>
        <Drawer.Body>
          <div>

            <div className='drawerWords1'>
              <h4>Baahhh troll story.</h4>
            </div>
            <div className='credits'>
              {/* <h6>Built by: Riley Soloner</h6> */}
                  <Button color="cyan"
                    appearance='ghost'
                    target="_blank"
                    href="https://github.com/robotriley/troll-builder">
                    <ion-icon name="logo-github"></ion-icon>
                    Github
                  </Button>
                
            </div>
          </div>
        </Drawer.Body>
      </Drawer>

      <Button
        appearance="link"
        size='lg'
        color="red"
        onClick={() => handleOpen('bottom')}>About</Button>
    </div>
  )
}

export default TrollSimulatorDrawer ; 