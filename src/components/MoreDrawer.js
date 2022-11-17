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
              <p>Hey! Thank you for clicking "more." I appreciate it. <br /> <br /> 
              I'm going to level with you. I'm new to software engineering. I'm a "career shifter." <br />
              I was quite successful in my last career, but finding and keeping jobs in entertainment is kind of like a lottery. <br />
              My technical skills are growing rapidly as I navigate my post-bootcamp life. I'm a trainable, fast learning, dedicated guy. <br />
              I'm also a creative, outgoing and kind human being interested in amplifying the human element in workplaces. <br />
              I mobilized my bootcamp cohort so we could collectively demand better learning conditions. <br />
              Come presentation day, my technology may not be the most advanced. But I'll be sure to present and communicate in a way that will make an impression. <br />
              I naturally gravitate towards communicative leadership roles. 

              </p>
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