import { ReviewBtnContainer, ReviewBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ReviewBtnContainer>
      {options.map(option => (
        <ReviewBtn key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </ReviewBtn>
      ))}
    </ReviewBtnContainer>
  );
};
