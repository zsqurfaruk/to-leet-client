import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://quickvara.com',
      lastModified: new Date(),
    },
    {
      url: 'https://quickvara.com/ads',
      lastModified: new Date(),
    },
    {
      url: 'https://quickvara.com/Bachelor-(Male)',
      lastModified: new Date(),
    },
    {
      url: 'https://quickvara.com/Bachelor-(Female)',
      lastModified: new Date(),
    },
    {
      url: 'https://quickvara.com/Mess-(Male)',
      lastModified: new Date(),
    },
    {
      url: 'https://quickvara.com/Mess-(Female)',
      lastModified: new Date(),
    },
  ]
}