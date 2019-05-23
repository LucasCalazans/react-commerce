import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from '../../components';
import { connect } from 'react-redux';
// import * as actionTypes from '../../redux/actions/index'

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
        <Form
            isVisible={props.isVisible}
            id="searchForm"
            onSubmit={onSubmitHandler}
            data-testid="form-test"
        >
            <Input
                large
                placeholder="Busque um produto"
                onChange={onChangeHandler}
                value={input}
                autoFocus
            />
            <Button size="large" type="submit">
                Buscar
            </Button>
        </Form>
    );
};

const mapStateToProps = state => {
    return {
        isVisible: state.toggleSearch.isVisible,
    };
};

export default connect(mapStateToProps)(Search);
