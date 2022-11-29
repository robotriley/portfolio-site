import {useState} from 'react';
import '../App.css';
import { Drawer, Button} from 'rsuite'

const ResumeDrawer = () => {
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
        <Drawer.Body>
          <div>

            <div className='drawerWords1'>
              <h5>Resume</h5>
            </div>
            
          </div>
        </Drawer.Body>
      </Drawer>

      <Button
        appearance="primary"
        size='lg'
        color="violet"
        onClick={() => handleOpen('bottom')}>
          Resume
      </Button>
    </div>
  )
}

export default ResumeDrawer ; 