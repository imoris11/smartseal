import React from 'react';
import { formatDate } from './ghost';
import { Link } from 'react-router-dom';
import './blog.css';

const Latest = ({ posts }) => {
  if (posts) console.log(posts);
  return (
    <div
      className='row'
      style={{
        paddingLeft: '7%',
        paddingRight: '7%',
        paddingBottom: '7%',
      }}
    >
      {posts
        ? posts.map((post) => (
            <div className='col-sm-4 single-post' key={post.id}>
              <Link to={`/blog/${post.slug}`}>
                <img
                  src={post.feature_image}
                  className='authentic'
                  alt='authentic'
                  style={{ marginBottom: '20px', width: '100%' }}
                />
                <span className='feature-bold-text'>{post.title}</span>
                <p className='feature-small-text' style={{ color: '#2DAA8D' }}>
                  By: SmartSeal . {formatDate(post.created_at)}
                </p>
              </Link>
            </div>
          ))
        : null}
    </div>
  );
};

export default Latest;
