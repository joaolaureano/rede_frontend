import styled from 'styled-components';
import RedeButton from '../../RedeButton/RedeButton';
import TimeSlotWrapper from './timeslot-wrapper';
import IconsWrapper from './icons-wrapper';

const CardFooterContent = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;

@media screen and (max-width:500px){
  flex-direction:column;
  justify-content:space-between;
  ${IconsWrapper}, ${TimeSlotWrapper}{
    justify-content:space-around;
  }
}
`;
export default CardFooterContent;