import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { seoData } from '../portfolio';

function SEO() {
  return (
    <>
      <NextSeo
        title={seoData.title}
        description={seoData.description}
        canonical={seoData.url}
        openGraph={{
          url: seoData.url,
          title: seoData.title,
          description: seoData.description,
          images: [
            {
              url: seoData.image,
              width: 1200,
              height: 630,
              alt: seoData.title,
            }
          ],
          siteName: seoData.title,
        }}
        twitter={{
          handle: seoData.twitterHandle,
          site: seoData.url,
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: seoData.keywords.join(', '),
          },
          {
            name: 'author',
            content: seoData.author,
          },
          {
            name: 'robots',
            content: 'index, follow',
          },
        ]}
      />
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
      </Head>
    </>
  );
}

export default SEO;