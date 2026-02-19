export const navLinks = [
  {
    id: 'home',
    label: 'მთავარი',
    to: '/',
    children: null,
  },
  {
    id: 'about',
    label: 'ჩვენს შესახებ',
    children: [
      { label: 'ისტორია', to: '/about/history', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
      { label: 'ქარხანა', to: '/about/factory', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
      { label: 'ხელმძღვანელობა', to: '/about/management', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
      {
        label: 'სერტიფიკატები',
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
        nested: [
          { label: 'ლიცენზიები', to: '/about/certificates/licenses', desc: 'ადგილობრივი ლიცენზიები' },
          { label: 'საერთაშორისო', to: '/about/certificates/international', desc: 'ISO და EN სერტიფიკატები' },
        ],
      },
    ],
  },
  {
    id: 'products',
    label: 'პროდუქცია',
    children: [
      {
        label: 'სამხედრო ავიაცია',
        icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8',
        nested: [
          { label: 'რეზინტექნიკური წარმოება', to: '/products/military/rubber', desc: 'რეზინტექნიკური პროდუქცია' },
          { label: 'ვერტმფრენები & თვითმფრინავები', to: '/products/military/helicopters', desc: 'საჰაერო ხომალდები' },
          { label: 'რაკეტები', to: '/products/military/missiles', desc: 'სარაკეტო სისტემები' },
        ],
      },
      { label: 'სერვისი', to: '/products/services', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
      { label: 'ტრენინგები', to: '/products/trainings', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
      { label: 'ტექნიკური შესაძლებლობები', to: '/products/technical', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
      { label: 'საწარმოო სიმძლავრე', to: '/products/capacity', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    ],
  },
  {
    id: 'news',
    label: 'ახალი ამბები & მედია',
    children: [
      { label: 'სიახლეები', to: '/news', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
      { label: 'ღონისძიებები', to: '/news/events', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
      { label: 'გალერეა', to: '/news/gallery', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
      { label: 'ვიდეო', to: '/news/video', icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' },
      { label: 'ბლოგი', to: '/news/blog', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
    ],
  },
  {
    id: 'careers',
    label: 'კარიერა',
    children: [
      { label: 'სამუშაო შეთავაზებები', to: '/careers/jobs', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
      { label: 'შემოგვიერთდით', to: '/careers/join', icon: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z' },
    ],
  },
  {
    id: 'partners',
    label: 'პარტნიორები',
    to: '/partners',
    children: null,
  },
  {
    id: 'contact',
    label: 'კონტაქტი',
    to: '/contact',
    children: null,
  },
]

export function getSidebarLinks(sectionId) {
  const section = navLinks.find(n => n.id === sectionId)
  if (!section || !section.children) return []
  const links = []
  for (const child of section.children) {
    if (child.to) {
      links.push({ to: child.to, label: child.label, icon: child.icon })
    }
    if (child.nested) {
      for (const nested of child.nested) {
        links.push({ to: nested.to, label: nested.label, icon: child.icon })
      }
    }
  }
  return links
}
