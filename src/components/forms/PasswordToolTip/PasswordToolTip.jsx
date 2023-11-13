import { useState } from 'react';
import {
  PasswordTipParagraph,
  PasswordTipStyled,
} from './PasswordToolTip.styled';
import { getTitle, checkPassword } from 'js/validation/passwordStrength';

const PasswordToolTip = ({ score, password }) => {
  const [showTip, setShowTip] = useState(false);
  const toggleToolTip = e => {
    setShowTip(!showTip);
  };

  return (
    <PasswordTipStyled $show={showTip}>
      <button type="button" onClick={toggleToolTip}>
        ?
      </button>
      <div>
        <p>Tips for creating strong passwords:</p>
        <PasswordTipParagraph $marked={checkPassword.hasNumber(password)}>
          Try to include numbers.
        </PasswordTipParagraph>
        <PasswordTipParagraph $marked={checkPassword.hasLetters(password)}>
          Both uppercase and lowercase letters.
        </PasswordTipParagraph>
        <PasswordTipParagraph $marked={checkPassword.hasSpecialSymb(password)}>
          Special symbols like:!"#$%&'()*+,-./:;&lt;=&gt;?@[\]&#123;&#124;&#125;
          ^_`~
        </PasswordTipParagraph>
        <span>Password strength: {getTitle(score)}</span>
      </div>
    </PasswordTipStyled>
  );
};

export default PasswordToolTip;
