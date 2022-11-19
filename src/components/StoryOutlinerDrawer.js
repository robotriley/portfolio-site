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
        size={'lg'}
        onClose={() => setOpen(false)}>
        <Drawer.Header id="aboutHeader" >
          <h2>Story Outliner</h2>
        </Drawer.Header>
        <Drawer.Body>
          <div>
            <div className='drawerWords1'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/U5DdcyA72Y0?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div className='credits'>
                  <Button color="cyan"
                    appearance='ghost'
                    target="_blank"
                    size="lg"
                    href="https://github.com/robotriley/story-outliner">
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

export default StoryOutlinerDrawer ; 