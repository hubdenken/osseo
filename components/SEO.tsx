import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = '/osseo-mais-imagens1.png', 
  url,
  type = 'website',
  author = 'Ósseo+',
  publishedTime,
  modifiedTime
}) => {
  const { t } = useTranslation();
  
  const siteTitle = 'Ósseo+';
  const defaultDescription = t('description', 'Saúde Óssea, Equilíbrio e Força de Elite');
  
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDescription = description || defaultDescription;

  // Usa window.location.pathname apenas no lado do cliente
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  const pathUrl = url || currentPath;
  
  const canonicalUrl = pathUrl.startsWith('http') ? pathUrl : `https://osseo.pt${pathUrl}`;
  const imageUrl = image.startsWith('http') ? image : `https://osseo.pt${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteTitle} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {/* AI Bot directives (allow all) */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    </Helmet>
  );
};

export default SEO;
