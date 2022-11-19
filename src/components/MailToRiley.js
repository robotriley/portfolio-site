import React from 'react';
import '../App.css';

const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a target='_blank' href={`mailto:${email}${params}`}>{children}</a>;
};

const MailToRiley = () => {
  return (
    <div>
      <Mailto email="rileysoloner@gmail.com" subject="Nice Portfolio!" body="Riley,">
        <h1>email me!</h1>
      </Mailto>

    </div>
  )
}

export default MailToRiley; 