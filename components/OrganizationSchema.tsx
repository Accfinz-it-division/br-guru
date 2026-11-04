export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://br-guru.vercel.app/#organization",
    "name": "BR Guru",
    "url": "https://br-guru.vercel.app/",
    "description":
      "Business registration and corporate consultancy services in Sri Lanka.",
    "logo": "https://br-guru.vercel.app/logo.png"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  )
}

