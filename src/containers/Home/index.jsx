import React, { Fragment, Component } from 'react';
import BaseApi from '../../api/BaseApi';
import Banner from '../../components/Banner';

class Home extends Component {
    state = {
        banners: [],
    };

    componentDidMount = () => {
        this.getBanners();
    };

    getBanners = async () => {
        const url = BaseApi.getUrl('banners');
        const response = await fetch(url);
        const responseBanner = await response.json();
        const banners = responseBanner.map(banner => {
            return [
                {
                    url: banner[0],
                    alt: '',
                },
                {
                    url: banner[1],
                    alt: '',
                },
            ];
        });
        this.setState({ banners });
    };

    render() {
        return (
            <section>
                <Banner images={this.state.banners} />
            </section>
        );
    }
}

export default Home;
