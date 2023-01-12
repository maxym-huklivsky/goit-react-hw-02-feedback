import { Reviews } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Reviews>Good: {good}</Reviews>
      <Reviews>Neutral: {neutral}</Reviews>
      <Reviews>Bad: {bad}</Reviews>
      <Reviews>Total: {total}</Reviews>
      <Reviews>Positive feedback: {positivePercentage}%</Reviews>
    </>
  );
};
