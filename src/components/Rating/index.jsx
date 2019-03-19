import React, { Component } from 'react';
import { func } from 'prop-types';
import Icon from '../../components/Icons';
import { Star } from './styles';

class Rating extends Component {
    static propTypes = {
        setReview: func,
    };

    state = {
        rating: this.props.rating || null,
        tempRating: null,
    };

    setRate = rating => {
        if (this.props.value) {
            return;
        }

        if (this.props.setReview) {
            this.props.setReview(rating);
        }

        this.setState({
            rating: rating,
            tempRating: rating,
        });
    };

    starHover = rating => {
        this.setState({
            rating: rating,
            tempRating: this.state.rating,
        });
    };

    starOut = () => {
        this.setState({ rating: this.state.tempRating });
    };

    render() {
        const stars = [];
        const value = this.props.value ? this.props.value - 1 : this.state.rating;

        for (let i = 0; i < 5; i++) {
            const fill = value >= i && value != null ? 'goldenrod' : 'grey';

            stars.push(
                <Star
                    onClick={() => this.setRate(i)}
                    onMouseOver={() => this.starHover(i)}
                    onMouseOut={this.starOut}
                    key={i}
                    className={this.props.value ? 'fixed' : ''}
                >
                    <Icon id="star" iconFill={fill} iconWidth="28" iconHeight="28" />
                </Star>,
            );
        }

        return stars;
    }
}

export default Rating;
