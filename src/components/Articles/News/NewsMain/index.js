import React from 'react';
import NewsSlider from '../../../widjets/NewsSlider/slider';
import NewsList from '../../../widjets/NewsList/newsList';

const NewsMain = () => {
    return (
        <div>
            <NewsSlider
                type="featured"
                start={0}
                amount={3}
                settings={{
                    dots: false
                }}
            />
            <NewsList
                type="cardMain"
                loadMore={false}
                start={3}
                amount={10}
            />
        </div>
    )
};

export default NewsMain;