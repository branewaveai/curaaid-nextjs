import React from 'react';

const ThanksPage: React.FC = () => {
  return (
    <div>
      <Script id="conversion-analytics-script" strategy="lazyOnload">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-16480308560/pEK6CJX2j5gZENCatrI9',
            'transaction_id': ''
          });
        `}
      </Script>
      <h1>Thanks</h1>
    </div>
  );
};

export default ThanksPage;
