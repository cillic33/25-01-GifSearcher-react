import {Button} from "../button/Button";
import {ResultTypes} from "../../utils/constants";
import {useNavigate} from "react-router-dom";


export const Switcher = () => {
  const navigate = useNavigate();

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
      <Button title="Search" onClick={handlerSearchClick} />
      <Button title="Random" onClick={handlerRandomClick} />
      <Button title="Trends" onClick={handlerTrendsClick} />
    </>
  );
}
