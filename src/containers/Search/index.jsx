import React, { useState, useEffect } from 'react';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Search = props => {
    const [input, setInput] = useState('');
    const [query, setQuery] = useState('');
    const [searchResult, setSearchResult] = useState();
    const [isError, setIsError] = useState(false);

    const onChangeHandler = e => {
        setInput(e.target.value);
    };
    const fetchData = async () => {
        try {
            const response = await fetch(`${props.url}?title=${query}`);
            const data = await response.json();
            setSearchResult(data);
        } catch (error) {
            setIsError(true);
        }
    };
    const onSubmitHandler = e => {
        e.preventDefault();
        setQuery(input);
        setInput('');
    };

    useEffect(() => {
        fetchData();
    }, [query]);

    return (
        <Form onSubmit={onSubmitHandler} data-testid="form-test">
            <Input placeholder="Busque um produto" onChange={onChangeHandler} value={input} />
            <Button type="submit">Buscar</Button>
        </Form>
    );
};

export default Search;
