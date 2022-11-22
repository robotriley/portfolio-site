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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Y2jxvthfZIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             <div className='credits'>
                  <Button color="cyan"
                    appearance='ghost'
                    target="_blank"
                    href="https://github.com/robotriley/troll-builder">
                    <ion-icon name="logo-github"></ion-icon>
                    Github
                  </Button>
              </div>
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