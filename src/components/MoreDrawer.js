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
              I'm going to level with you. I'm new to software engineering. I'm a career shifter. <br />
              I was successful in my entertainment career, but finding and keeping jobs in that field is a bit too much like a lottery. <br /><br />
              My technical skills are growing rapidly as I navigate my post-bootcamp life. I'm a trainable, fast learning, dedicated guy. <br />
              Given my past experience, I'm a creative, outgoing and kind human being that values the human element in workplaces. <br /><br />
              Through no conscious effort, I naturally fell into a role on campus as someone with whom my classmates could have a sincere, encouraging conversation.<br /><br />
              When our bootcam's cost-saving, corner cutting tactics felt like a total rug-pull on the student body, I mobilized my cohort so we could collectively (successfully) demand better learning conditions. <br /><br />
              Come presentation day, my technology may not be the most advanced. But I'll be sure to present, communicate and connect in a way that will make an impression. <br />
              Thank you for reading.
                <br /><br />
                Riley 
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