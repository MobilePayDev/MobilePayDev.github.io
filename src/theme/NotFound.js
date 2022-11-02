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
                  Whoops - Page Not Found
                </Translate>
              </h1>
              <p>
                <Translate
                  id="theme.NotFound.p1"
                  description="The first paragraph of the 404 page">
                  We tried really hard but we could not find whatever you were looking for. But we are sure it is here somewhere. We have been rearanging a lot lately so it may have been lost in the moving process. But fear not we are here to help!
                  
                  If you know what product it concerns you could try the top menu right at the very top. If you look to the right there is also a search option which we think can be really helpfull in times of need.
                </Translate>
              </p>
              <p>
                <Translate
                  id="theme.NotFound.p2"
                  description="The 2nd paragraph of the 404 page">
                  If everything else fails you are very welcome to contact us at developer@mobilepay.dk. We will gladly help you find what it is you are looking for. Purhaps it is not even there anymore but then we will do what we can to find something else for you. 
                </Translate>
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
