'use client';
import * as React from 'react';

export default function Home() {
   const [siteSettings, setSiteSettings] = React.useState<Record<string, unknown> | null>(null);

   // eslint-disable-next-line @typescript-eslint/no-unused-expressions
   React.useEffect(() => {
      (async () => {
         const res = await fetch('/api/public', {
            method: 'GET',
            cache: 'no-store',
         });
         if (!res.ok) {
            throw new Error('Failed to fetch data');
         }
         const data = await res.json();
         setSiteSettings(data.data);
      })();
   }, []);

   console.log('siteSettings', siteSettings);

   return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
         {siteSettings && JSON.stringify(siteSettings, null, 2)}
      </div>
   );
}
