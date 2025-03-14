import React, { useState, useEffect } from 'react';
import TellUs from '../../components/tell-us/tell-us';
import facebook from '../../static/icon/facebook.png';
import linkedin from '../../static/icon/linkedin.png';
import twitter from '../../static/icon/twitter.png';
import { getSinglePost, formatDate } from '../../components/blog/ghost';
import Loading from '../../components/loading';
import './blog.post.css';

const BlogPost = ({ match }) => {
  const [post, setPost] = useState(null);
  let slug = match.params.slug;
  console.log(match.params.slug);
  let width = document.body.clientWidth;
  console.log(width);

  useEffect(() => {
    async function getSlugged() {
      if (!post) setPost(await getSinglePost(slug));
    }
    getSlugged();
  }, [post, slug]);
  if (!post) return <Loading />;

  if (post) {
    function createMarkup() {
      return { __html: post.html };
    }

    return (
      <div className='blog-post'>
        <div className='blog-post-header'>
          <div className='container'>
            <div className='row'>
              <div>
                <div className='col-xs-12 col-sm-10 col-md-10 post-text text-white'>
                  <h1 style={{ fontSize: '40px', fontWeight: '500' }}>
                    {post.title}
                  </h1>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <p>By: SmartSeal . {formatDate(post.created_at)}</p>
                    </div>
                    <div className='col-sm-6 '>
                      <div className='row'>
                        <div className='col-sm-5'></div>
                        <div className='col-sm-3'>
                          <p className='share'>Share</p>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <img src={facebook} alt='facebook' /> &nbsp;
                            <img src={linkedin} alt='linkedin' /> &nbsp;
                            <img src={twitter} alt='twitter' />{' '}
                          </div>
                        </div>
                        <div className='col-sm-4'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row rectangles-image center '>
            <div className='col-md-11'>
              <img
                src={post.feature_image}
                className='blog-pills'
                alt='pills'
              />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row  single-post '>
            <div dangerouslySetInnerHTML={createMarkup()} />
          </div>
        </div>

        <TellUs />
      </div>
    );
  }
};

export default BlogPost;
//  <div className='col-xs-12 col-sm-11 col-md-11 '>
//             <h2>Medicine and Up to date values in authenticity.</h2>
//             <p>
//               But I must explain to You how all this mistaken idea of denouncing
//               pleasure and praising pain was born and I will give.. You a
//               complete account of the system, and expound the actual teachings
//               of the great explorer of the truth, the master-builder of human
//               happiness. No one rejects, dislikes, or avoids pleasure itself,
//               because it is pleasure, but because those who do not know how to
//               pursue pleasure rationally encounter consequences that are
//               extremely painful. Nor again is there anyone who loves or pursues
//               or desires to obtain pain of itself, because it is pain, but
//               because occasionally circumstances occur in which toil and pain
//               can procure him some great pleasure. To take a trivial example,
//               which of us ever undertakes laborious physical exercise, except to
//               obtain some advantage from it? But who has any right to find fault
//               with a man who chooses to enjoy a pleasure that has no annoying
//               consequences, or one who avoids a pain that produces no resultant
//               pleasure?"But I must explain to you how all this mistaken idea of
//               denouncing pleasure and praising pain was born and I will give{' '}
//             </p>
//             <br />
//           </div>
//           <div className='col-xs-12 col-sm-11 col-md-11'>
//             <h2>
//               Medicine and Up to date values in authenticity.- Mental Health and
//               Psychiatric Nursing
//             </h2>

//             <p>
//               You a complete account of the system, and expound the actual
//               teachings of the great explorer of the truth, the master-builder
//               of human happiness. No one rejects, dislikes, or avoids pleasure
//               itself, because it is pleasure, but because those who do not know
//               how to pursue pleasure rationally encounter consequences that are
//               extremely painful. Nor again is there anyone who loves or pursues
//               or desires to obtain pain of itself, because it is pain, but
//               because occasionally circumstances occur in which toil and pain
//               can procure him some great pleasure. To take a trivial example,
//               which of us ever undertakes laborious physical exercise, except to
//               obtain some advantage from it? But who has any right to find fault
//               with a man who chooses to enjoy a pleasure that has no annoying
//               consequences, or one who avoids a pain that produces no resultant
//               pleasure?"But I must explain to you how all this mistaken idea of
//               denouncing pleasure and praising pain was born and I will give you
//               a complete account of the system, and expound the actual teachings
//               of the great explorer of the truth, the master-builder of human
//               happiness. No one rejects, dislikes, or avoids pleasure itself,
//               because it is pleasure, but because those who do not know how to
//               pursue pleasure rationally encounter consequences that are
//               extremely painful. Nor again is there anyone who loves or pursues
//               or desires to obtain pain of itself, because it is pain, but
//               because occasionally circumstances occur in which toil and pain
//               can procure him some great pleasure. To take a trivial example,
//               which of us ever undertakes laborious physical exercise, except to
//               obtain some advantage from it? But who has any right to find fault
//               with a man who chooses to enjoy a pleasure that has no annoying
//               consequences, or one who avoids a pain that produces no resultant
//               pleasure?"
//             </p>
//           </div>
