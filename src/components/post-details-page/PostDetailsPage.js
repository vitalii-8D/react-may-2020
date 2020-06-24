import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { accessToken } from '../../constants/index';
import {PostCard} from  '../post-card/PostCard'

class PostDetailsPageComponent extends Component {

  constructor(props) {
    super(props);
    // const {history} = this.props;
    this.state = {
      post: null,
      // +todo 3: добавить isLoading флажок - индикатор загрузки
      isLoading: false,
      eror: '',
      postLoaded: false
    };
  }

  componentDidMount() {
    // +todo 3: вызвать загрузку инфрмации про пост loadPost
    this.loadPost();
  }

  loadPost = async () => {
    // todo 3:
    //  достать id поста из props посредством пропсов, которые дает нам роутер
    const {match: { params: { id } }, history} = this.props;
    //  проверьте лежит ли ваш accessToken в constants/index.js
    if (!accessToken) {
      history.push('/posts');
    }
    //  прежде чем отправить запрос - включите в true флажок загрузки в стейте isLoading
    this.setState( {
      isLoading: true
    })
    //  выполните fetch запрос за поcтом на `https://gorest.co.in/public-api/posts/${id}?access-token=${accessToken}`
    let response = await fetch(`https://gorest.co.in/public-api/posts?access-token=${accessToken}&post_id=${id}`);

    if (response.ok) {
      let json = await response.json();

      const { result } = json;
      // debugger

      if (Array.isArray(result)) { // во время выполнения запроса м.б. вариант когда result не массив
        this.setState({
          postLoaded: true,
          error: '',
          post: result || [] // изменена проверка, если results существовать не будет - закидываем пустой массив
        });
      }
    } else {
      this.setState({
        postLoaded: false,
        error: response.status,
      });
    }
    //  похожий запрос выполнялся в компоненте PostCard в функции loadComments
    //  результат выполнения запроса нужно положить в стейт в post
    //  когда запрос выполнится - не забудьте поменять индикатор загрузки isLoading на false
    this.setState({
      isLoading: false
    })
    //  обратите внимание, что результат выполнения запроса - ОБЪЕКТ, а не массив
  };

  toUsersList = () => {
    this.props.history.push('/posts');
  };
  toHomePage = () => {
    this.props.history.push('/home');
  };

  render() {
    //todo 3: достать пост из стейта
    const {post, isLoading} = this.state;
    return (
      <div>
        <h1>Post Details Page</h1>
        {
          isLoading && (<div className='loading-indicator'>
            <div className="loader">Loading...</div>
          </div>)
        }
        {
          // todo 3: если идет загрузка - показываем лоадинг индикатор
          //    если нет и пост существует - показываем карточку поста PostCard,
          //    в которую как пропсу post передаем наш post из state
        }
        {
          !!post && <PostCard post={post}/>
        }
        <button className="btn btn-primary m-2" type="button" onClick={this.toUsersList}> Go back to posts list</button>
        <button className="btn btn-primary m-2" type="button" onClick={this.toHomePage}> Go back to homepage</button>
      </div>
    );
  }
}

// // todo 3: обратите внимание - если в App.js вы не передали routerProps в компоненту - то здесь нужно использовать withRouter
export default PostDetailsPageComponent;
export const PostDetailsPage = withRouter(PostDetailsPageComponent);