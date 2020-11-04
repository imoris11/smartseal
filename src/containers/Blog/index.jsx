import React, { useEffect, useState } from 'react';
import pills from '../../static/img/pills.png';
import TellUs from '../../components/tell-us/tell-us';
import Latest from '../../reuseables/latest-story';
import { getPosts, formatDate } from '../../components/blog/ghost';
import Blog from '../../components/blog';
import Loading from '../../components/loading';

const BlogPage = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    if (!posts) {
      async function runCommand() {
        setPosts(await getPosts());
        console.log(posts);
      }
      runCommand();
    }
  }, [posts]);

  if (!posts) return <Loading />;

  return (
    <div>
      <div className='blog-header'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5 blog-pill-desktop'>
              <img
                src={posts[0].feature_image}
                className='pills'
                alt='pills'
                width={'100%'}
              />
            </div>
            <div className='col-xs-11 col-sm-7'>
              <div className='col fashion-text text-white'>
                <div className='feature-button'>
                  <p>Featured</p>
                </div>

                <h1>{posts[0].title}.</h1>
                <p>By: SmartSeal . {formatDate(posts[0].created_at)}</p>
              </div>
            </div>
            <div className='col-xs-11 col-sm-5 blog-pill-mobile'>
              <img src={pills} className='pills' alt='pills' />
            </div>
          </div>
        </div>
      </div>
      <div className='blog-body'>
        <div className='container-fluid'>
          <div>
            <h2>Latest Stories</h2>
            <Blog posts={posts} />
          </div>
        </div>
        <div className='container-fluid'>
          <div>
            <h2>Recommended For You</h2>
            <Latest />
          </div>
        </div>
      </div>

      <TellUs />
    </div>
  );
};

export default BlogPage;
