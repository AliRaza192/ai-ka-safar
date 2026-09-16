import React from 'react';
import Root from '@theme/Root';
import ReadingProgress from '@site/src/components/ReadingProgress';
import FocusMode from '@site/src/components/FocusMode';
import ReadAloud from '@site/src/components/ReadAloud';
import AiTutor from '@site/src/components/AiTutor';

export default function RootWrapper({children}: {children: React.ReactNode}): JSX.Element {
  return (
    <>
      <a className="skip-to-content" href="#main-content">
        Skip to content
      </a>
      <ReadingProgress />
      <FocusMode />
      <ReadAloud />
      <AiTutor />
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'AI ka Safar — AI Agents Roman Urdu Mein',
            description: 'Aasan Roman Urdu mein AI Agents seekhein. Digital FTEs, AI Workers, aur AI-Native Companies banana seekhein.',
            provider: {
              '@type': 'Organization',
              name: 'Panaversity',
              sameAs: 'https://panaversity.org/',
            },
            inLanguage: 'ur',
            isAccessibleForFree: true,
            hasCourseInstance: {
              '@type': 'CourseInstance',
              courseMode: 'online',
              courseWorkload: 'PT40H',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'AI ka Safar',
            url: 'https://ai-ka-safar.vercel.app',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://ai-ka-safar.vercel.app/search?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
    </>
  );
}
