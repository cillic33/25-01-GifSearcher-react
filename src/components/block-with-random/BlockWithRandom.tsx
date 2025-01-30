import {useAppDispatch, useAppSelector} from "../../store/redux-hook";
import {giphyActions, giphySelectors} from "../../store/slices/giphySlice";
import {Button} from "../button/Button";

export const BlockWithRandom = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(giphySelectors.status);
  const randomImage = useAppSelector(giphySelectors.randomImage);
  const url = randomImage?.images.fixed_height.webp;

  const handleClick = () => {
    dispatch(giphyActions.fetchRandomImage())
  }

  return (
    <div>
      <h1>RANDOM</h1>

      <Button title="Get Random Image" onClick={handleClick} />

      <div style={{height: '200px', margin: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#efefef'}}>
        {status === 'loading' &&
          <>Loading...</>
        }

        {url && status === 'loaded' &&
            <img src={url} />
        }
      </div>

      {/*<p>height {randomImage?.images.fixed_height.height}</p>

      {randomImage?.images && JSON.stringify(randomImage?.images).toString()}*/}

    </div>
  );
}
