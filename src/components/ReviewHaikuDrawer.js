import {useState} from 'react';
import '../App.css';
import { Drawer, Button, ButtonToolbar, ButtonGroup} from 'rsuite'

const ReviewHaikuDrawer = () => {
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
        size={'full'}
        onClose={() => setOpen(false)}>
        <Drawer.Header id="aboutHeader" >
          <h2>Review Haiku</h2>
          {/* <Button appearance="ghost" color="yellow">show me an example</Button> */}
        </Drawer.Header>
        <Drawer.Body>
          <div>

            <div className='drawerWords1'>
              <h4>A fun website where</h4>
              <h4>All of the movie reviews</h4>
              <h4>are haiku poems</h4>
            </div>
            <div className='credits'>
              {/* <h6>Built by: Riley Soloner</h6> */}
              <ButtonToolbar>
                <ButtonGroup>
                  <Button color="cyan"
                    appearance='ghost'
                    target="_blank"
                    href="https://www.linkedin.com/in/riley-soloner/">
                    {/* <LinkedinIcon /> */}
                    Riley Soloner
                  </Button>
                  <Button color="cyan"
                    appearance='ghost'
                    target="_blank"
                    href="https://github.com/robotriley/story-outliner">
                    <ion-icon name="logo-github"></ion-icon>
                    Github
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
            </div>
          </div>
        </Drawer.Body>
      </Drawer>

      <Button
        appearance="link"
        size='sm'
        color="red"
        onClick={() => handleOpen('top')}>About</Button>
    </div>
  )
}

export default ReviewHaikuDrawer ; 