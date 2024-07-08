import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      />
      <Layout>
        <main className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <h1 className="hero__title">
                <Translate
                  id="theme.NotFound.title"
                  description="The title of the 404 page">
                  We moved!
                </Translate>
              </h1>
              <p>
              <Translate
                  id="theme.NotFound.p1"
                  description="The first paragraph of the 404 page">
                   So that is probably why you didn't find what you looked for 
                  

                </Translate>
                <img src="/img/icon_checkout.png" alt="Italian Trulli"></img>
              </p>
              <p>
                <Translate
                  id="theme.NotFound.p2"
                  description="The 2nd paragraph of the 404 page">
                  But don't stress, try to go to our new page and see if you can find it there: 

                 
                </Translate>
                <a href="https://developer.vippsmobilepay.com/"> https://developer.vippsmobilepay.com/</a>
              </p>
              
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
