import { Star, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const testimonials = [
    {
      name: 'Komal',
      text: 'Nandini\'s session completely changed how I see resumes and ATS—clear, simple, and full of new insights; I\'m now confident and hopeful about getting real interview call-backs!',
      avatar: '/1758565386416.jpeg',
      isImage: true
    },
    {
      name: 'Arun',
      text: 'The Job Ready workshop gave me clarity and confidence to showcase my portfolio—every review was valuable and I\'ve already recommended it to friends!',
      avatar: '/arun.png',
      isImage: true
    },
    {
      name: 'Aishwarya',
      text: 'The program helped me easily improve my case study, pitch deck, and resume—I loved the detailed reviews!',
      avatar: '/aishwarya copy.png',
      isImage: true
    },
    {
      name: 'Madhulika',
      text: 'The program gave me clarity and confidence to build my case study, resume, and pitch deck—super detailed reviews, great sessions, and overall a genuinely valuable experience!',
      avatar: '/madhulika.png',
      isImage: true
    },
    {
      name: 'Sundaraganapathy',
      text: 'The program boosted my confidence and taught me real industry standards for presenting work and interview prep—an incredible learning journey overall!',
      avatar: '/sundar.png',
      isImage: true
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const cardHeight = 100 / testimonials.length;
        const next = prev - 0.05;
        if (Math.abs(next) >= cardHeight * testimonials.length) {
          return 0;
        }
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-[#E8E4D9] text-[#1A1A2E]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-[#E8E4D9]/90 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1A1A2E] rounded-lg flex items-center justify-center">
            <span className="text-[#E8E4D9] font-bold">D</span>
          </div>
          <span className="text-sm text-[#1A1A2E]/60">DigitalProduct • 1 tutorial • $99.00</span>
        </div>
        <button className="px-4 py-2 bg-[#F4E04D] text-[#1A1A2E] text-sm rounded-md hover:bg-[#F4E04D]/90 transition font-semibold">
          Full access
        </button>
      </header>

      {/* Main Content */}
      <section className="pt-24 px-6 max-w-4xl mx-auto">
        {/* Auto-scrolling Testimonials - Vertical */}
        <div className="h-[280px] overflow-hidden relative mb-8">
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#E8E4D9] to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#E8E4D9] to-transparent"></div>
          </div>
          <div
            className="flex flex-col gap-3"
            style={{ transform: `translateY(${scrollPosition}%)` }}
          >
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#1A1A2E]/10 max-w-xl mx-auto w-full"
              >
                <div className="flex items-start gap-3">
                  {testimonial.isImage ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full flex-shrink-0 object-cover"
                    />
                  ) : (
                    <div className={`w-10 h-10 bg-gradient-to-br ${testimonial.avatar} rounded-full flex-shrink-0`}></div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-[#1A1A2E] mb-1 text-sm">{testimonial.name}</div>
                    <p className="text-xs text-[#1A1A2E]/60 leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            The 2-week playbook top designers use to land real interviews.
          </h1>
          <p className="text-[#1A1A2E]/60 text-lg mb-8">
            Standing out in a crowded UX market isn't that hard!
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <button className="px-8 py-4 bg-[#1A1A2E] text-[#E8E4D9] rounded-lg hover:bg-[#1A1A2E]/90 transition font-semibold">
              Join the Job Ready Sprint
            </button>
            <button className="px-8 py-4 text-[#1A1A2E] border border-[#1A1A2E]/20 rounded-lg hover:bg-white/50 transition font-semibold flex items-center gap-2">
              <FileText className="w-5 h-5" />
              View Syllabus
            </button>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <span className="text-sm text-[#1A1A2E]/60">4.8/5</span>
            <span className="text-xs text-[#1A1A2E]/40">from 100+ designers</span>
          </div>
        </div>

        {/* Full Width Image */}
        <div className="w-full">
          <img
            src="/uxdesigner.png"
            alt="UX Designer"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Freedom Section */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Freedom isn't bought<br />
              with burnout — it's built<br />
              through smart income
            </h2>
          </div>
          <div className="text-[#1A1A2E]/60">
            <p>I don't have the $10,000 made with<br />
            less effort by letting someone<br />
            else work when you rest.</p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          <div className="bg-white rounded-xl p-8">
            <div className="w-12 h-12 bg-[#F4E04D]/30 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">💤</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Earn while you sleep</h3>
            <p className="text-[#1A1A2E]/60 text-sm">
              Launch once. Sell infinitely. Wake up to new sales every morning while it sits doing nothing.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8">
            <div className="w-12 h-12 bg-[#F4E04D]/30 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Scale without stress</h3>
            <p className="text-[#1A1A2E]/60 text-sm">
              Share the best of your work. Spend it all reaching new people. No need to think about inventory.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8">
            <div className="w-12 h-12 bg-[#F4E04D]/30 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">⏰</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Get your time back</h3>
            <p className="text-[#1A1A2E]/60 text-sm">
              Stop trading hours for money when you could get paid again and again for work you've already done.
            </p>
          </div>
        </div>
      </section>

      {/* Employment Warning Section */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              You are set for the wrong<br />
              path — employment<br />
              will turn you into a slave
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✕</span>
                <span className="text-[#1A1A2E]/70">Your only trying to move your employment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✕</span>
                <span className="text-[#1A1A2E]/70">Work = Pay worry forever</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✕</span>
                <span className="text-[#1A1A2E]/70">Your free to work 40 years in office, But slave in 1k or less as retirement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✕</span>
                <span className="text-[#1A1A2E]/70">Can't escape bad work lives (until you enter or find) otherwise and worse</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✕</span>
                <span className="text-[#1A1A2E]/70">If anyone else does, bad luck is on it or way.</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="text-right space-y-32">
              <div className="text-sm text-[#1A1A2E]/40">Time Working</div>
              <div className="text-sm text-[#1A1A2E]/40">Money earned</div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-1 bg-gradient-to-r from-red-500 to-orange-500 transform rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Don't just take our<br />
            word for it — real<br />
            students, real results.
          </h2>
          <p className="text-[#1A1A2E]/60">
            How does everybody made to kick<br />
            their clients — chosen income.<br />
            Students, not funded, changed.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: '01',
              title: 'I made my first £1,000 in a weekend!',
              text: 'Honestly? I was sceptical. But within two days of launching my product, I had made four figures. It completely changed how I see online income. This is not luck. This is a blueprint.',
              author: 'Emma Harper',
              role: 'Graphic Designer'
            },
            {
              icon: '01',
              title: 'Digital income finally made sense to me.',
              text: "I'd tried everything — blogging, freelancing, even dropshipping. Nothing stuck. Then I took this course. The approach is so simple, so logical. I launched my first product in a weekend, made my first sale on day three, and I haven't looked back.",
              author: 'Sarah Lin',
              role: 'Former teacher'
            },
            {
              icon: '02',
              title: 'This course paid for itself in just days!',
              text: 'By Saturday, I had already made back the course fee. Then it kept going. By Monday, I had tripled my investment. If you are on the fence, just do it. The ROI is insane.',
              author: 'Sadie Hart',
              role: 'University Intern'
            },
            {
              icon: '02',
              title: 'I launched my first product in a weekend!',
              text: 'I thought it would take months to build something worth selling. Turns out, I already had what I needed — I just did not know how to package it. Now I have a live product generating sales while I sleep.',
              author: 'Dani C. Oregon',
              role: 'Content Writer'
            },
            {
              icon: '03',
              title: 'I finally own something that earns for me.',
              text: 'Everyone talks about assets, but no one tells you how to actually build one. This showed me exactly how to create something I own, something that makes money even when I am not working. That is real freedom.',
              author: 'Louis Mitchell',
              role: 'Junior Designer'
            },
            {
              icon: '03',
              title: 'I earned more than a week\'s salary overnight!',
              text: 'I worked a 9-5. I launched a thing on a Tuesday, By Thursday morning, I had made more than I would in a full week at my job. I could not believe it. I still have my job, but now I also have options.',
              author: 'Mia Nguyen',
              role: 'Engineer'
            },
            {
              icon: '04',
              title: 'It turned my knowledge into real income.',
              text: 'I always felt like I had something to offer, but did not know how to monetise it. This course showed me how to package what I already knew and turn it into a product people would actually pay for.',
              author: 'Lucas Lei',
              role: 'Writer'
            },
            {
              icon: '04',
              title: 'My side hustle finally started earning.',
              text: "I have tried side hustles before. Most fizzled out. But this one stuck. I followed the steps, kept it simple, launched small — and it worked. Now I am earning consistently every month, and it only took me a weekend to set up.",
              author: 'Evelyn Huang',
              role: 'UX Designer'
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-white rounded-xl p-8">
              <div className="text-[#1A1A2E] text-sm font-bold mb-4">{testimonial.icon}</div>
              <h3 className="text-xl font-bold mb-4">{testimonial.title}</h3>
              <p className="text-[#1A1A2E]/60 text-sm mb-6 leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#F4E04D] to-[#F4E04D]/70 rounded-full"></div>
                <div>
                  <div className="text-sm font-medium">{testimonial.author}</div>
                  <div className="text-xs text-[#1A1A2E]/40">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 text-center text-[#1A1A2E]/40 text-sm">
        <p>© 2024 Digital Product Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
