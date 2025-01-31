import {Input} from "../input/Input";
import {ChangeEvent, FC, FormEvent, useState} from "react";
import {Props} from "./props";

export const Form: FC<Props> = ({onSubmit}) => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }

  const submitHandle = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(query);
  }

  return (
    <form onSubmit={submitHandle}>
      <Input value={query} onChange={handleChange} placeholder="Введите текст для поиска" />
    </form>
  );
}
