import {useAppDispatch, useAppSelector} from "../../store/redux-hook";
import {giphyActions, giphySelectors} from "../../store/slices/giphySlice";
import {Button} from "../button/Button";

export const BlockWithRandom = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(giphySelectors.status);
  const randomImage = useAppSelector(giphySelectors.randomImage);

  const handleClick = () => {
    dispatch(giphyActions.fetchRandomImage())
  }

  return (
    <div>
      <h1>RANDOM</h1>

      <Button title="Get Random Image" onClick={handleClick} />

      <div style={{height: '300px', margin: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', background: '#efefef'}}>
        {status === 'loading' &&
          <>Loading...</>
        }

        {randomImage && randomImage.url && status === 'loaded' &&
          <div>
            <img src={randomImage.url} alt={randomImage.alt} style={{ maxWidth: '100%' }} />
            <p>{randomImage.title}</p>
          </div>
        }

        {status === 'error' &&
          <>An error occurred when uploading the data</>
        }
      </div>

    </div>
  );
}
