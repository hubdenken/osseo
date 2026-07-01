import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'LocalBusiness' | 'FAQPage' | 'Article' | 'Person' | 'WebSite';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
