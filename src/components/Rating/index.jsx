import React, { Component } from 'react';
import { Icon } from '../../components/Icons';
import { Star } from './styles';

class Index extends Component {
    state = {
        rating: this.props.rating || null,
        temp_rating: null,
    };

    rate = rating => {
        this.setState({
            rating: rating,
            temp_rating: rating,
        });
    };

    star_over = rating => {
        this.setState({
            rating: rating,
            temp_rating: this.state.rating,
        });
    };

    star_out = () => {
        this.setState({ rating: this.state.temp_rating });
    };

    render() {
        const stars = [];

        for (let i = 0; i < 5; i++) {
            const fill = this.state.rating >= i && this.state.rating != null ? 'goldenrod' : 'grey';

            stars.push(
                <Star
                    onClick={this.rate.bind(this, i)}
                    onMouseOver={this.star_over.bind(this, i)}
                    onMouseOut={this.star_out}
                    key={i}
                >
                    <Icon id="star" iconFill={fill} iconWidth="28" iconHeight="28" />
                </Star>,
            );
        }

        return <div className="star-rating">{stars}</div>;
    }
}

export default Index;
