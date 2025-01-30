import {Input} from "../input/Input";
import {ChangeEvent, FormEvent, useState} from "react";

export const Form = () => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }

  const submitHandle = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('query', query)
  }

  return (
    <form onSubmit={submitHandle}>
      <Input value={query} onChange={handleChange} placeholder="Введите текст для поиска" />
    </form>
  );
}
