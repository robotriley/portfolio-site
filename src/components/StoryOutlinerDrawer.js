import {useState} from 'react';
import '../App.css';
import { Drawer, Button} from 'rsuite'

const StoryOutlinerDrawer = () => {
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
          <h2>Story Outliner</h2>
        </Drawer.Header>
        <Drawer.Body>
          <div>
            <div className='drawerWords1'>
              <h4>Yo here's where some info about story outliner will go.</h4>
            </div>
            <div className='credits'>
                  <Button color="cyan"
                    appearance='ghost'
                    target="_blank"
                    href="https://github.com/robotriley/story-outliner">
                    <ion-icon name="logo-github"></ion-icon>
                    Github
                  </Button>
            </div>
          </div>
        </Drawer.Body>
      </Drawer>
      <Button
        appearance="link"
        size='sm'
        color="red"
        onClick={() => handleOpen('bottom')}>About</Button>
    </div>
  )
}

export default StoryOutlinerDrawer ; 