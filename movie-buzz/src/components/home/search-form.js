import React, { Component } from 'react';

import { connect } from 'react-redux'

import { searchMovie } from '../../actions/searchActions'
import { Form, Button } from 'react-bootstrap';

export class SearchForm extends Component {
    onChange = (e) => {
        this.props.searchMovie(e.target.value)
    }
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control onChange={this.onChange} type="text" placeholder="Search movies" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
})

export default connect(mapStateToProps, { searchMovie })(SearchForm)
