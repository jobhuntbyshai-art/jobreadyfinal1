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
        const next = prev - 0.05;
        const resetPoint = -(100 / 3);
        
        if (next <= resetPoint) {
          return 0;
        }
        
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#E8E4D9] text-[#1A1A2E]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-[#E8E4D9]/90 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <img 
            src="/jobreadylogo.png" 
            alt="jobready logo" 
            className="h-8 w-auto animate-tilt"
            data-testid="img-logo"
          />
          <span className="text-lg font-semibold text-[#1A1A2E]">UX jobready</span>
        </div>
        <button className="px-4 py-2 bg-[#F4E04D] text-[#1A1A2E] text-sm rounded-md hover:bg-[#F4E04D]/90 transition font-semibold">
          Join Program
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
            The <span className="relative inline-block px-2">
              <span className="relative z-10">2-week</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#F4E04D] -rotate-1 animate-highlight"></span>
            </span> playbook top designers use to land real interviews.
          </h1>
          <p className="text-[#1A1A2E]/60 text-lg mb-8">
            Standing out in a crowded UX market isn't that hard!
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <button className="px-8 py-4 bg-[#1A1A2E] text-[#E8E4D9] rounded-lg hover:bg-[#1A1A2E]/90 transition font-semibold">
              Join the Job Ready Sprint
            </button>
            <button 
              onClick={() => document.getElementById('syllabus')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 text-[#1A1A2E] border border-[#1A1A2E]/20 rounded-lg hover:bg-white/50 transition font-semibold flex items-center gap-2"
            >
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
      </section>

      {/* Image with fade effect */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#E8E4D9] to-transparent"></div>
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#E8E4D9] to-transparent"></div>
          </div>
          <img
            src="/uxdesginers_1760958195882.png"
            alt="UX Designer"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Program Schedule Section */}
      <section 
        id="syllabus" 
        className="py-24 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: 'url(/ux-background.png)' }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Your 14-Day Journey</h2>
            <p className="text-[#1A1A2E]/60 text-lg">
              A structured path to transform your portfolio and land interviews
            </p>
          </div>

          <div className="border-4 border-[#1A1A2E] rounded-lg overflow-hidden bg-white hidden md:block">
          <table className="w-full table-fixed">
            <colgroup>
              <col style={{ width: '12%' }} />
              <col style={{ width: '60%' }} />
              <col style={{ width: '28%' }} />
            </colgroup>
            <thead>
              <tr className="border-b-2 border-[#1A1A2E] bg-[#F4E04D]">
                <th className="px-6 py-4 text-left text-sm font-bold text-[#1A1A2E]">Day</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-[#1A1A2E]">Topic</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-[#1A1A2E]">Type</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#1A1A2E] hover:bg-[#E8E4D9]/30 transition">
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-[#1A1A2E]">Day 0</span>
                </td>
                <td className="px-6 py-4 text-sm text-[#1A1A2E]">Learn to Whiteboard</td>
                <td className="px-6 py-4">
                  <span className="text-xs font-semibold text-[#1A1A2E] bg-[#F4E04D] px-3 py-1 rounded">Live Session</span>
                </td>
              </tr>
              <tr className="border-b border-[#1A1A2E] hover:bg-[#E8E4D9]/30 transition">
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-[#1A1A2E]">Day 1</span>
                </td>
                <td className="px-6 py-4 text-sm text-[#1A1A2E]">Learn - How to Build a Perfect UX Case Study</td>
                <td className="px-6 py-4">
                  <span className="text-xs font-semibold text-[#1A1A2E] bg-[#F4E04D] px-3 py-1 rounded">Live Session</span>
                </td>
              </tr>
              <tr className="border-b border-[#1A1A2E] hover:bg-[#E8E4D9]/30 transition">
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-[#1A1A2E]">Day 2</span>
                </td>
                <td className="px-6 py-4 text-sm text-[#1A1A2E]">Optimize your Perfect UX Case Study</td>
                <td className="px-6 py-4">
                  <span className="text-xs font-semibold text-[#1A1A2E] bg-[#B8A8D8] px-3 py-1 rounded">Assignment</span>
                </td>
              </tr>
              <tr className="border-b border-[#1A1A2E] hover:bg-[#E8E4D9]/30 transition">
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-[#1A1A2E]">Day 3</span>
                </td>
                <td className="px-6 py-4 text-sm text-[#1A1A2E]">Submit the Optimized Case Study and get Feedback</td>
                <td className="px-6 py-4">
                  <span className="text-xs font-semibold text-[#1A1A2E] bg-[#FFB6C1] px-3 py-1 rounded">Review</span>
                </td>
              </tr>
              <tr className="border-b border-[#1A1A2E] hover:bg-[#E8E4D9]/30 transition">
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-[#1A1A2E]">Day 4</span>
                </td>
                <td className="px-6 py-4 text-sm text-[#1A1A2E]">Learn - How to Build a Perfect Presentation deck of your UX Case Study for a Portfolio Round</td>
                <td className="px-6 py-4">
                  <span className="text-xs font-semibold text-[#1A1A2E] bg-[#F4E04D] px-3 py-1 rounded">Live Session</span>
                </td>
              </tr>
              <tr className="border-b border-[#1A1A2E] hover:bg-[#E8E4D9]/30 transition">
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-[#1A1A2E]">Day 5</span>
                </td>
                <td className="px-6 py-4 text-sm text-[#1A1A2E]">Use the template to build your presentation deck for your UX Case study</td>
                <td className="px-6 py-4">
                  <span className="text-xs font-semibold text-[#1A1A2E] bg-[#B8A8D8] px-3 py-1 rounded">Assignment</span>
                </td>
              </tr>
              <tr className="border-b border-[#1A1A2E] hover:bg-[#E8E4D9]/30 transition">
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-[#1A1A2E]">Day 6</span>
                </td>
                <td className="px-6 py-4 text-sm text-[#1A1A2E]">Submit your Pitch Deck and get Feedback</td>
                <td className="px-6 py-4">
                  <span className="text-xs font-semibold text-[#1A1A2E] bg-[#FFB6C1] px-3 py-1 rounded">Review</span>
                </td>
              </tr>
              <tr className="border-b border-[#1A1A2E] hover:bg-[#E8E4D9]/30 transition">
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-[#1A1A2E]">Day 7</span>
                </td>
                <td className="px-6 py-4 text-sm text-[#1A1A2E]">Learn - Build Perfect Resume (with Template)</td>
                <td className="px-6 py-4">
                  <span className="text-xs font-semibold text-[#1A1A2E] bg-[#F4E04D] px-3 py-1 rounded">Live Session</span>
                </td>
              </tr>
              <tr className="border-b border-[#1A1A2E] hover:bg-[#E8E4D9]/30 transition">
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-[#1A1A2E]">Day 8</span>
                </td>
                <td className="px-6 py-4 text-sm text-[#1A1A2E]">Optimize and build your resume</td>
                <td className="px-6 py-4">
                  <span className="text-xs font-semibold text-[#1A1A2E] bg-[#B8A8D8] px-3 py-1 rounded">Assignment</span>
                </td>
              </tr>
              <tr className="border-b border-[#1A1A2E] hover:bg-[#E8E4D9]/30 transition">
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-[#1A1A2E]">Day 9</span>
                </td>
                <td className="px-6 py-4 text-sm text-[#1A1A2E]">Submit your resume and get feedback</td>
                <td className="px-6 py-4">
                  <span className="text-xs font-semibold text-[#1A1A2E] bg-[#FFB6C1] px-3 py-1 rounded">Review</span>
                </td>
              </tr>
              <tr className="border-b border-[#1A1A2E] hover:bg-[#E8E4D9]/30 transition">
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-[#1A1A2E]">Day 10</span>
                </td>
                <td className="px-6 py-4 text-sm text-[#1A1A2E]">Learn - How to Build a Perfect LinkedIn</td>
                <td className="px-6 py-4">
                  <span className="text-xs font-semibold text-[#1A1A2E] bg-[#F4E04D] px-3 py-1 rounded">Live Session</span>
                </td>
              </tr>
              <tr className="border-b border-[#1A1A2E] hover:bg-[#E8E4D9]/30 transition">
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-[#1A1A2E]">Day 11</span>
                </td>
                <td className="px-6 py-4 text-sm text-[#1A1A2E]">Optimize your LinkedIn</td>
                <td className="px-6 py-4">
                  <span className="text-xs font-semibold text-[#1A1A2E] bg-[#B8A8D8] px-3 py-1 rounded">Assignment</span>
                </td>
              </tr>
              <tr className="border-b border-[#1A1A2E] hover:bg-[#E8E4D9]/30 transition">
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-[#1A1A2E]">Day 12</span>
                </td>
                <td className="px-6 py-4 text-sm text-[#1A1A2E]">Submit your optimized LinkedIn and get Feedback</td>
                <td className="px-6 py-4">
                  <span className="text-xs font-semibold text-[#1A1A2E] bg-[#FFB6C1] px-3 py-1 rounded">Review</span>
                </td>
              </tr>
              <tr className="border-b border-[#1A1A2E] hover:bg-[#E8E4D9]/30 transition">
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-[#1A1A2E]">Day 13</span>
                </td>
                <td className="px-6 py-4 text-sm text-[#1A1A2E]">Learn - How to Crack the HR Interview</td>
                <td className="px-6 py-4">
                  <span className="text-xs font-semibold text-[#1A1A2E] bg-[#F4E04D] px-3 py-1 rounded">Live Session</span>
                </td>
              </tr>
              <tr className="hover:bg-[#E8E4D9]/30 transition">
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-[#1A1A2E]">Day 14</span>
                </td>
                <td className="px-6 py-4 text-sm text-[#1A1A2E]">Ask me Anything - QA on Discord (Text Communication)</td>
                <td className="px-6 py-4">
                  <span className="text-xs font-semibold text-[#1A1A2E] bg-[#D4A574] px-3 py-1 rounded">AMA</span>
                </td>
              </tr>
            </tbody>
          </table>
          </div>

          {/* Mobile Cards View */}
          <div className="md:hidden space-y-4">
          {[
            { day: 'Day 0', topic: 'Learn to Whiteboard', type: 'Live Session', color: 'bg-[#F4E04D]' },
            { day: 'Day 1', topic: 'Learn - How to Build a Perfect UX Case Study', type: 'Live Session', color: 'bg-[#F4E04D]' },
            { day: 'Day 2', topic: 'Optimize your Perfect UX Case Study', type: 'Assignment', color: 'bg-[#B8A8D8]' },
            { day: 'Day 3', topic: 'Submit the Optimized Case Study and get Feedback', type: 'Review', color: 'bg-[#FFB6C1]' },
            { day: 'Day 4', topic: 'Learn - How to Build a Perfect Presentation deck of your UX Case Study for a Portfolio Round', type: 'Live Session', color: 'bg-[#F4E04D]' },
            { day: 'Day 5', topic: 'Use the template to build your presentation deck for your UX Case study', type: 'Assignment', color: 'bg-[#B8A8D8]' },
            { day: 'Day 6', topic: 'Submit your Pitch Deck and get Feedback', type: 'Review', color: 'bg-[#FFB6C1]' },
            { day: 'Day 7', topic: 'Learn - Build Perfect Resume (with Template)', type: 'Live Session', color: 'bg-[#F4E04D]' },
            { day: 'Day 8', topic: 'Optimize and build your resume', type: 'Assignment', color: 'bg-[#B8A8D8]' },
            { day: 'Day 9', topic: 'Submit your resume and get feedback', type: 'Review', color: 'bg-[#FFB6C1]' },
            { day: 'Day 10', topic: 'Learn - How to Build a Perfect LinkedIn', type: 'Live Session', color: 'bg-[#F4E04D]' },
            { day: 'Day 11', topic: 'Optimize your LinkedIn', type: 'Assignment', color: 'bg-[#B8A8D8]' },
            { day: 'Day 12', topic: 'Submit your optimized LinkedIn and get Feedback', type: 'Review', color: 'bg-[#FFB6C1]' },
            { day: 'Day 13', topic: 'Learn - How to Crack the HR Interview', type: 'Live Session', color: 'bg-[#F4E04D]' },
            { day: 'Day 14', topic: 'Ask me Anything - QA on Discord (Text Communication)', type: 'AMA', color: 'bg-[#D4A574]' },
          ].map((item, i) => (
            <div key={i} className="border-2 border-[#1A1A2E] rounded-lg p-4 bg-white">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-[#1A1A2E]">{item.day}</span>
                <span className={`text-xs font-semibold text-[#1A1A2E] ${item.color} px-3 py-1 rounded`}>
                  {item.type}
                </span>
              </div>
              <p className="text-sm text-[#1A1A2E]">{item.topic}</p>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 pt-24 pb-24">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Don't just take our word for it — real students, real results.
          </h2>
          <p className="text-[#1A1A2E]/60">
            How does everybody made to kick their clients — chosen income. Students, not funded, changed.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: '01',
              title: 'I made my first £1,000 in a weekend!',
              text: 'Honestly? I was sceptical. But within two days of launching my product, I had made four figures. It completely changed how I see online income. This is not luck. This is a blueprint.',
              author: 'Emma Harper',
              role: 'Graphic Designer',
              color: 'bg-[#FEFB9F]',
              rotation: 'rotate-1'
            },
            {
              icon: '01',
              title: 'Digital income finally made sense to me.',
              text: "I'd tried everything — blogging, freelancing, even dropshipping. Nothing stuck. Then I took this course. The approach is so simple, so logical. I launched my first product in a weekend, made my first sale on day three, and I haven't looked back.",
              author: 'Sarah Lin',
              role: 'Former teacher',
              color: 'bg-[#E8D5F2]',
              rotation: '-rotate-1'
            },
            {
              icon: '02',
              title: 'This course paid for itself in just days!',
              text: 'By Saturday, I had already made back the course fee. Then it kept going. By Monday, I had tripled my investment. If you are on the fence, just do it. The ROI is insane.',
              author: 'Sadie Hart',
              role: 'University Intern',
              color: 'bg-[#FFE5E5]',
              rotation: '-rotate-2'
            },
            {
              icon: '02',
              title: 'I launched my first product in a weekend!',
              text: 'I thought it would take months to build something worth selling. Turns out, I already had what I needed — I just did not know how to package it. Now I have a live product generating sales while I sleep.',
              author: 'Dani C. Oregon',
              role: 'Content Writer',
              color: 'bg-[#D9F0FF]',
              rotation: 'rotate-2'
            },
            {
              icon: '03',
              title: 'I finally own something that earns for me.',
              text: 'Everyone talks about assets, but no one tells you how to actually build one. This showed me exactly how to create something I own, something that makes money even when I am not working. That is real freedom.',
              author: 'Louis Mitchell',
              role: 'Junior Designer',
              color: 'bg-[#FEFB9F]',
              rotation: 'rotate-1'
            },
            {
              icon: '03',
              title: 'I earned more than a week\'s salary overnight!',
              text: 'I worked a 9-5. I launched a thing on a Tuesday, By Thursday morning, I had made more than I would in a full week at my job. I could not believe it. I still have my job, but now I also have options.',
              author: 'Mia Nguyen',
              role: 'Engineer',
              color: 'bg-[#D5F5E3]',
              rotation: '-rotate-1'
            },
            {
              icon: '04',
              title: 'It turned my knowledge into real income.',
              text: 'I always felt like I had something to offer, but did not know how to monetise it. This course showed me how to package what I already knew and turn it into a product people would actually pay for.',
              author: 'Lucas Lei',
              role: 'Writer',
              color: 'bg-[#FFE5E5]',
              rotation: '-rotate-2'
            },
            {
              icon: '04',
              title: 'My side hustle finally started earning.',
              text: "I have tried side hustles before. Most fizzled out. But this one stuck. I followed the steps, kept it simple, launched small — and it worked. Now I am earning consistently every month, and it only took me a weekend to set up.",
              author: 'Evelyn Huang',
              role: 'UX Designer',
              color: 'bg-[#E8D5F2]',
              rotation: 'rotate-2'
            }
          ].map((testimonial, i) => (
            <div 
              key={i} 
              className={`${testimonial.color} ${testimonial.rotation} p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-0`}
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)'
              }}
            >
              <div className="text-[#1A1A2E] text-sm font-bold mb-4">{testimonial.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-[#1A1A2E]">{testimonial.title}</h3>
              <p className="text-[#1A1A2E]/70 text-sm mb-6 leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#1A1A2E]/10 rounded-full"></div>
                <div>
                  <div className="text-sm font-medium text-[#1A1A2E]">{testimonial.author}</div>
                  <div className="text-xs text-[#1A1A2E]/50">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
