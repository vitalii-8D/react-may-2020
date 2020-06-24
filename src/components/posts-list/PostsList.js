import React, { Component } from 'react';
import { accessToken, usersList } from '../../constants';
import {PostCard} from '../post-card/PostCard';
import { withRouter } from 'react-router';
import './PostsList.scss'

class PostsListComponent extends Component {
  state = {
    posts: [],
    // +todo 2: добавить isLoading индикатор
    isPostsLoading: false,
    loadEror: '',
    loadEnded: false
  };

  componentDidMount(prevProps, prevState, snapshot) {
    // +todo 2: вызвать загрузку постов
      this.loadPosts();
  }

  loadPosts = async () => {
    // +todo 2:
    //  проверьте лежит ли ваш accessToken в constants/index.js
    if (!accessToken) return;
      //  прежде чем отправить запрос - включите в true флажок загрузки в стейте isLoading
      this.setState({isPostsLoading: true});
      //  выполните fetch запрос за поcтами на `https://gorest.co.in/public-api/posts?access-token=${accessToken}`
      //  похожий запрос выполнялся в компоненте PostCard в функции loadComments
      let response = await fetch(`https://gorest.co.in/public-api/posts?access-token=${accessToken}`);

    //  результат выполнения запроса нужно положить в стейт в posts
      if (response.ok) {
        let json = await response.json();
        const { result } = json;
         debugger

        if (Array.isArray(result)) { // во время выполнения запроса м.б. вариант когда result не массив
          this.setState({
            loadEror: '',
            posts: result || [] // изменена проверка, если results существовать не будет - закидываем пустой массив
          });
        }
      } else {
        this.setState({
          loadEror: response.status,
        });
      }
        if (!this.state.posts.length) {
          this.setState({
            loadEror: response.status,
          });
        }

    //  + когда запрос выполнится - не забудьте поменять индикатор загрузки isLoading на false
    this.setState({
      isPostsLoading: false,
    })
  };

  render() {
    // +todo 2: достать также лоадинг индикатор из стейта
    const { posts, isPostsLoading, loadEror } = this.state;

    return (
      <div>
        <h2 className='posts-header'>Posts page</h2>

        {/* +todo 2: ниже добавить проверку если сейчас идет загрука то показываем лоадинг индикатор (как в задании 7)
                    если загрузка не идет то показываем список постов*/}
        {
          isPostsLoading && (<div className='loading-indicator'>
            <div className="loader">Loading...</div>
            </div>)
        }

        {
          !!loadEror && !isPostsLoading && <div className='error-box'>
            <h1>Error!!!!!</h1>
            <div className='error-number'>{`Error: ${loadEror}`}</div>
          </div>
        }

        <div className='posts-container'>
          {
            posts.map((item) => {
              const user = usersList.find(user => user.id === item.user_id);
              const author = user ? `${user.first_name} ${user.last_name}` : '';

              return <PostCard
                  post={item}
                  key={item.id}
                  author={author}
              />;
            })
          }
        </div>
      </div>
    );
  }
}

export const PostsList = withRouter(PostsListComponent);
export default PostsListComponent;