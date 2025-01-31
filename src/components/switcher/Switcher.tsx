import {Button} from "../button/Button";
import {ResultTypes} from "../../utils/constants";
import {useMatch, useNavigate} from "react-router-dom";

export const Switcher = () => {
  const navigate = useNavigate();
  const isSearch = useMatch(ResultTypes.Search);
  const isRandom = useMatch(ResultTypes.Random);
  const isTrends = useMatch(ResultTypes.Trends);

  const activeCss = {
    background: '#65a165'
  }

  const handlerSearchClick = () => {
    navigate(ResultTypes.Search);
  }

  const handlerRandomClick = () => {
    navigate(ResultTypes.Random);
  }

  const handlerTrendsClick = () => {
    navigate(ResultTypes.Trends);
  }

  return (
    <>
      <Button title="Search" onClick={handlerSearchClick} style={isSearch ? activeCss : null} />
      <Button title="Random" onClick={handlerRandomClick} style={isRandom ? activeCss : null} />
      <Button title="Trends" onClick={handlerTrendsClick} style={isTrends ? activeCss : null} />
    </>
  );
}
