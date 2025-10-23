import React, { useEffect, useState, useRef } from 'react';
import { Star, FileText, ChevronRight, ChevronLeft, X, ChevronDown } from 'lucide-react';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentMentor, setCurrentMentor] = useState(0);
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [iframeUrl, setIframeUrl] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllSchedule, setShowAllSchedule] = useState(false);
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const scheduleData = [
    {
      day: 0,
      title: 'Learn to Whiteboard',
      type: 'Live Session',
      color: 'bg-[#F4E04D]',
      details: [
        'Understand how to approach whiteboard challenges with structure',
        'Learn frameworks to communicate design reasoning clearly',
        'Build confidence for live design thinking rounds'
      ]
    },
    {
      day: 1,
      title: 'Build a Winning UX Case Study',
      type: 'Live Workshop',
      color: 'bg-[#F4E04D]',
      details: [
        'Learn how to tell your design story with clarity and impact',
        'Identify the "why" and "impact" behind your projects',
        'Structure your case studies like top-hired designers'
      ]
    },
    {
      day: 2,
      title: 'Refine & Polish Your Case Study',
      type: 'Assignment',
      color: 'bg-[#B8A8D8]',
      details: [
        'Apply the storytelling formula learned in Day 1',
        'Focus on clarity, flow, and measurable outcomes',
        'Make your visuals recruiter-friendly'
      ]
    },
    {
      day: 3,
      title: 'Case Study Review & Feedback',
      type: 'Review',
      color: 'bg-[#FFB6C1]',
      details: [
        'Get direct mentor feedback on your case study',
        'Learn how to improve your storytelling and visual flow'
      ]
    },
    {
      day: 4,
      title: 'Build a Portfolio Deck for UX Case Studies',
      type: 'Live Session',
      color: 'bg-[#F4E04D]',
      details: [
        'Learn to turn your UX case study into a presentation deck',
        'Understand what hiring panels expect in a portfolio round',
        'Learn the structure and pacing of a strong portfolio pitch'
      ]
    },
    {
      day: 5,
      title: 'Build Your Presentation Deck Using Templates',
      type: 'Assignment',
      color: 'bg-[#B8A8D8]',
      details: [
        'Use pre-built templates to save time and improve layout',
        'Customize the deck with your own case study visuals'
      ]
    },
    {
      day: 6,
      title: 'Portfolio Deck Review & Feedback',
      type: 'Review',
      color: 'bg-[#FFB6C1]',
      details: [
        'Get detailed mentor critique on your presentation deck',
        'Refine storytelling for your next design interview'
      ]
    },
    {
      day: 7,
      title: 'Build an ATS-Proof Resume (with Template)',
      type: 'Live Session',
      color: 'bg-[#F4E04D]',
      details: [
        'Write resumes that pass ATS scans and attract recruiters',
        'Learn to highlight outcomes and measurable results',
        'Use real examples from hired designers'
      ]
    },
    {
      day: 8,
      title: 'Optimize and Build Your Resume',
      type: 'Assignment',
      color: 'bg-[#B8A8D8]',
      details: [
        'Refine your resume using mentor-tested methods',
        'Add clarity, hierarchy, and action-driven impact lines'
      ]
    },
    {
      day: 9,
      title: 'Resume Review & Feedback',
      type: 'Review',
      color: 'bg-[#FFB6C1]',
      details: [
        'Receive personal mentor feedback on your resume',
        'Make your final job-ready version for applications'
      ]
    },
    {
      day: 10,
      title: 'Build a High-Conversion LinkedIn Profile',
      type: 'Live Session',
      color: 'bg-[#F4E04D]',
      details: [
        'Learn how recruiters search and filter candidates',
        'Optimize headline, summary, and experience to convert views',
        'Understand how to create content that builds visibility'
      ]
    },
    {
      day: 11,
      title: 'Optimize Your LinkedIn Profile',
      type: 'Assignment',
      color: 'bg-[#B8A8D8]',
      details: [
        'Apply real-world LinkedIn SEO strategies',
        'Update sections to reflect your new portfolio and results'
      ]
    },
    {
      day: 12,
      title: 'LinkedIn Profile Review & Feedback',
      type: 'Review',
      color: 'bg-[#FFB6C1]',
      details: [
        'Get personalized review of your LinkedIn profile',
        'Learn quick tweaks that improve recruiter response rates'
      ]
    },
    {
      day: 13,
      title: 'Crack the HR Interview',
      type: 'Live Session',
      color: 'bg-[#F4E04D]',
      details: [
        'Learn how to answer "Tell me about yourself" and tricky HR questions',
        'Understand recruiter psychology and selection criteria',
        'Master the balance of confidence and clarity'
      ]
    },
    {
      day: 14,
      title: 'Ask Me Anything (QA on Discord)',
      type: 'AMA',
      color: 'bg-[#D4A574]',
      details: [
        'Clarify final doubts before job applications',
        'Get personalized mentor insights on resumes, portfolios, and interviews'
      ]
    }
  ];

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

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (observerRef.current) {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        if (!el.classList.contains('visible')) {
          observerRef.current?.observe(el);
        }
      });
    }
  }, [showAllSchedule]);


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
          <span className="text-lg font-semibold text-[#1A1A2E]">UX Job Ready</span>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-[#F4E04D] text-[#1A1A2E] text-sm rounded-md hover:bg-[#F4E04D]/90 transition font-semibold"
          data-testid="button-join-program-header"
        >
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
          <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight animate-on-scroll animate-reveal-blur">
            The <span className="relative inline-block px-2">
              <span className="relative z-10">2-week</span>
              <span className="absolute bottom-1 left-0 w-full h-5 bg-[#F4E04D] -rotate-1 animate-highlight"></span>
            </span> playbook top designers use to land real interviews.
          </h1>
          <p className="text-[#1A1A2E]/60 text-base md:text-lg mb-8 animate-on-scroll animate-reveal-blur stagger-1">
            Standing out in a crowded UX market isn't that hard!
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 animate-on-scroll animate-elastic-up stagger-2">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full md:w-auto px-8 py-4 bg-[#1A1A2E] text-[#E8E4D9] rounded-lg hover:bg-[#1A1A2E]/90 transition font-semibold"
              data-testid="button-join-sprint"
            >
              Join Program
            </button>
            <button 
              onClick={() => document.getElementById('syllabus')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full md:w-auto px-8 py-4 text-[#1A1A2E] border border-[#1A1A2E]/20 rounded-lg hover:bg-white/50 transition font-semibold flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5 md:block hidden" />
              View Syllabus
            </button>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mb-12 animate-on-scroll animate-pop-scale stagger-3">
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
      <div className="max-w-4xl mx-auto px-6 animate-on-scroll">
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
        className="py-24 bg-[#1A1A2E]"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll animate-rise-tilt">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">Your 14-Day Journey</h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
              A structured path to transform your portfolio and land interviews
            </p>
          </div>

          {/* Program Info Bar */}
          <div className="max-w-3xl mx-auto mb-12 animate-on-scroll animate-rise-tilt">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10">
              <div className="flex items-center justify-around divide-x divide-white/10">
                {/* Start Date */}
                <div className="flex-1 text-center px-4">
                  <p className="text-xs text-white/40 mb-2 uppercase tracking-wide">Start Date</p>
                  <p className="text-sm md:text-base font-bold text-white">15th Nov'25</p>
                </div>

                {/* Seats */}
                <div className="flex-1 text-center px-4">
                  <p className="text-xs text-white/40 mb-2 uppercase tracking-wide">Seats</p>
                  <p className="text-sm md:text-base font-bold text-white">4/20</p>
                </div>

                {/* Duration */}
                <div className="flex-1 text-center px-4">
                  <p className="text-xs text-white/40 mb-2 uppercase tracking-wide">Duration</p>
                  <p className="text-sm md:text-base font-bold text-white">2 Weeks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Pathway */}
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Items */}
            <div className="space-y-6 mb-8">
              {scheduleData.slice(0, showAllSchedule ? scheduleData.length : 7).map((item, index, array) => {
                const isLastItem = index === array.length - 1;
                return (
                  <div 
                    key={item.day}
                    className="relative"
                  >
                    {/* Vertical Line between cards */}
                    {!isLastItem && (
                      <div 
                        className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-0.5 h-6 bg-gradient-to-b from-white/10 to-white/5 animate-on-scroll animate-reveal-blur"
                        style={{ animationDelay: `${index * 30}ms` }}
                      ></div>
                    )}
                    
                    {/* Timeline Item */}
                    <div 
                      className="cursor-pointer group animate-on-scroll animate-reveal-blur"
                      style={{ animationDelay: `${index * 30}ms` }}
                      onClick={() => setExpandedDay(expandedDay === item.day ? null : item.day)}
                    >
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-bold text-white text-base md:text-lg mb-3">{item.title}</h3>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 font-medium">
                                Day {item.day}
                              </span>
                              <span className={`text-xs px-3 py-1 rounded-full bg-white/5 border ${
                                item.color === 'bg-[#F4E04D]' ? 'border-[#F4E04D]/40 text-[#F4E04D]' :
                                item.color === 'bg-[#B8A8D8]' ? 'border-[#B8A8D8]/40 text-[#B8A8D8]' :
                                'border-[#FFB6C1]/40 text-[#FFB6C1]'
                              } font-medium`}>
                                {item.type}
                              </span>
                            </div>
                          </div>
                          <ChevronDown 
                            className={`w-5 h-5 text-white/40 transition-transform flex-shrink-0 ${
                              expandedDay === item.day ? 'rotate-180' : ''
                            }`}
                          />
                        </div>

                        {/* Expanded Details */}
                        {expandedDay === item.day && (
                          <div className="mt-4 pt-4 border-t border-white/10">
                            <ul className="space-y-2.5 text-sm text-white/70">
                              {item.details.map((detail, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <span className="text-[#F4E04D] mt-0.5 flex-shrink-0">●</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* View More/Less Button */}
            <div className="text-center">
              <button
                onClick={() => setShowAllSchedule(!showAllSchedule)}
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition font-semibold text-sm border border-white/20 hover:border-white/30"
                data-testid="button-toggle-schedule"
              >
                {showAllSchedule ? '← View Less' : 'View More Days →'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Mentors Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll animate-slide-right">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#1A1A2E]">
              Meet Your Mentors
            </h2>
            <p className="text-[#1A1A2E]/60 text-sm md:text-lg">
              Learn from industry veterans who've helped hundreds of designers land their dream roles
            </p>
          </div>

          {/* Mentor Card */}
          <div className="bg-white border-2 border-[#1A1A2E] rounded-lg overflow-hidden animate-on-scroll animate-spotlight stagger-2">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left: Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                {currentMentor === 0 ? (
                  <div data-testid="mentor-content-0">
                    <h3 className="text-2xl font-bold text-[#1A1A2E] mb-3">
                      📨 A Note from Shai Krishna
                    </h3>
                    <p className="text-[#1A1A2E]/60 text-sm mb-4">
                      Staff Product Designer @Sense | Ex-Freshworks | Founder @Designfolio
                    </p>
                    
                    <div className="space-y-3 text-[#1A1A2E]/70 text-sm leading-relaxed mb-6">
                      <p className="font-bold italic">Great designers — despite how good they are — often fail to showcase their work the best.</p>
                      <p>Last year, I reviewed over 200+ portfolios and realized most weren't bad at design — just bad at storytelling. Brilliant work often gets lost in cluttered layouts and weak narratives.</p>
                      <p>That's why I built this program: to help designers translate their work into stories recruiters actually understand. Your portfolio isn't just a showcase — it's your story, told right. By the end, you won't just have better projects, you'll have a narrative that truly sells you.</p>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 text-sm text-[#1A1A2E]/60">
                      <span className="px-3 py-1 bg-[#D9F0FF] rounded-full text-[#1A1A2E] font-medium">Portfolio Storytelling</span>
                      <span className="px-3 py-1 bg-[#FFE5F0] rounded-full text-[#1A1A2E] font-medium">UX Whiteboarding</span>
                      <span className="px-3 py-1 bg-[#D4B5FF] rounded-full text-[#1A1A2E] font-medium">Personal Branding for Designers</span>
                    </div>
                  </div>
                ) : (
                  <div data-testid="mentor-content-1">
                    <h3 className="text-2xl font-bold text-[#1A1A2E] mb-3">
                      📨 A Note from Nandini Singh
                    </h3>
                    <p className="text-[#1A1A2E]/60 text-sm mb-4">
                      Top 0.1% Career Coach on Topmate | Ex-HR @ Unacademy, SugarFit (Cult), Wakefit
                    </p>
                    
                    <div className="space-y-3 text-[#1A1A2E]/70 text-sm leading-relaxed mb-6">
                      <p className="font-bold italic">While there are thousands of openings today, each attracts twice as many applicants — making it harder than ever to stand out. It's time to stop relying on luck and start ranking smarter.</p>
                      <p>Having mentored hundreds of designers, I've seen how the right strategy, clarity, and preparation can completely change your job-hunt outcome. My mission is simple — to help you navigate hiring systems with confidence and land opportunities that truly fit you.</p>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 text-sm text-[#1A1A2E]/60">
                      <span className="px-3 py-1 bg-[#D9F0FF] rounded-full text-[#1A1A2E] font-medium">Career Coaching</span>
                      <span className="px-3 py-1 bg-[#FFE5F0] rounded-full text-[#1A1A2E] font-medium">Interview Prep</span>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center gap-4 mt-8">
                  <button
                    onClick={() => setCurrentMentor(currentMentor === 0 ? 1 : 0)}
                    disabled={currentMentor === 0}
                    className={`p-2 rounded-full border-2 border-[#1A1A2E] transition ${
                      currentMentor === 0 
                        ? 'opacity-30 cursor-not-allowed' 
                        : 'hover:bg-[#F4E04D] cursor-pointer'
                    }`}
                    data-testid="button-prev-mentor"
                    aria-label="Previous mentor"
                  >
                    <ChevronLeft className="w-5 h-5 text-[#1A1A2E]" />
                  </button>
                  <button
                    onClick={() => setCurrentMentor(currentMentor === 0 ? 1 : 0)}
                    disabled={currentMentor === 1}
                    className={`p-2 rounded-full border-2 border-[#1A1A2E] transition ${
                      currentMentor === 1 
                        ? 'opacity-30 cursor-not-allowed' 
                        : 'hover:bg-[#F4E04D] cursor-pointer'
                    }`}
                    data-testid="button-next-mentor"
                    aria-label="Next mentor"
                  >
                    <ChevronRight className="w-5 h-5 text-[#1A1A2E]" />
                  </button>
                  <span className="text-sm text-[#1A1A2E]/60">
                    {currentMentor + 1} of 2
                  </span>
                </div>
              </div>

              {/* Right: Image/Video */}
              <div 
                className="order-1 md:order-2 flex items-center justify-center p-8 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/mentorbg.png)' }}
              >
                {currentMentor === 0 ? (
                  <video
                    src="/shai-mentor-hi.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-lg"
                    data-testid="video-mentor-0"
                  />
                ) : (
                  <video
                    src="/uxmentor2.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-lg"
                    data-testid="video-mentor-1"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section - Carousel */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#1A1A2E]">
              UX case studies built during the program.
            </h2>
            <p className="text-[#1A1A2E]/60 text-sm md:text-lg">
              Portfolio-ready work that landed them interviews at top companies.
            </p>
          </div>

          {/* Case Studies Carousel */}
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              {/* Desktop: 2 slides with 2 cards each */}
              <div 
                className="hidden md:flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentCaseStudy * 100}%)` }}
              >
                {/* Slide 1: First 2 cards */}
                <div className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Pooja's Real Case Study */}
                    <div 
                      className="bg-white border-2 border-[#1A1A2E] rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                      data-testid="card-case-study-0"
                      onClick={() => setIframeUrl('https://pooja-yerne.designfolio.me/project/68e7779dcb2d80278cace1a2')}
                    >
                      {/* Real Thumbnail */}
                      <div className="w-full h-48 overflow-hidden">
                        <img 
                          src="/pooja-uxproject.jpeg" 
                          alt="Pooja Yerne Case Study" 
                          className="w-full h-full object-cover border-b-2 border-[#1A1A2E]/10"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="p-4">
                        <h3 className="font-bold text-lg text-[#1A1A2E] mb-1 line-clamp-2">
                          Increased User Engagement by 20% on AI Fashion Assistant
                        </h3>
                        <p className="text-[#1A1A2E]/60 text-sm mb-0.5">
                          AI Assistant
                        </p>
                        <p className="text-[#1A1A2E]/80 text-sm mb-3">
                          by Pooja Yerne
                        </p>
                        
                        {/* View Button */}
                        <button 
                          className="inline-flex items-center gap-2 text-[#1A1A2E] font-semibold text-sm hover:gap-3 transition-all"
                          data-testid="button-view-case-0"
                        >
                          View Case Study
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Madhulika's Real Case Study */}
                    <div 
                      className="bg-white border-2 border-[#1A1A2E] rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                      data-testid="card-case-study-1"
                      onClick={() => setIframeUrl('https://madhulikak.framer.website/')}
                    >
                      {/* Real Thumbnail */}
                      <div className="w-full h-48 overflow-hidden">
                        <img 
                          src="/madhulika-uxproject.png" 
                          alt="Madhulika Case Study" 
                          className="w-full h-full object-cover border-b-2 border-[#1A1A2E]/10"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="p-4">
                        <h3 className="font-bold text-lg text-[#1A1A2E] mb-1 line-clamp-2">
                          Designing AI Mentor experience from 0→1 for the first 50,000 learners
                        </h3>
                        <p className="text-[#1A1A2E]/60 text-sm mb-0.5">
                          AI Mentor Platform
                        </p>
                        <p className="text-[#1A1A2E]/80 text-sm mb-3">
                          by Madhulika
                        </p>
                        
                        {/* View Button */}
                        <button 
                          className="inline-flex items-center gap-2 text-[#1A1A2E] font-semibold text-sm hover:gap-3 transition-all"
                          data-testid="button-view-case-1"
                        >
                          View Case Study
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 2: Second 2 cards */}
                <div className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Shreshth's Real Case Study */}
                    <div 
                      className="bg-white border-2 border-[#1A1A2E] rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                      data-testid="card-case-study-2"
                      onClick={() => setIframeUrl('https://shreshth.designfolio.me/project/68b2eae4c864c84e8c17dc12')}
                    >
                      {/* Real Thumbnail */}
                      <div className="w-full h-48 overflow-hidden">
                        <img 
                          src="/shreshth-uxproject.jpeg" 
                          alt="Shreshth Case Study" 
                          className="w-full h-full object-cover border-b-2 border-[#1A1A2E]/10"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="p-4">
                        <h3 className="font-bold text-lg text-[#1A1A2E] mb-1 line-clamp-2">
                          Redesigning University Living's Listing Page experience for 2M+ international students
                        </h3>
                        <p className="text-[#1A1A2E]/60 text-sm mb-0.5">
                          Stay Aggregator Platform
                        </p>
                        <p className="text-[#1A1A2E]/80 text-sm mb-3">
                          by Shreshth
                        </p>
                        
                        {/* View Button */}
                        <button 
                          className="inline-flex items-center gap-2 text-[#1A1A2E] font-semibold text-sm hover:gap-3 transition-all"
                          data-testid="button-view-case-2"
                        >
                          View Case Study
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Sundar's Real Case Study */}
                    <div 
                      className="bg-white border-2 border-[#1A1A2E] rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                      data-testid="card-case-study-3"
                      onClick={() => setIframeUrl('https://sundaraganapathyv.designfolio.me/project/68e665aecb2d80278caaeb83')}
                    >
                      {/* Real Thumbnail */}
                      <div className="w-full h-48 overflow-hidden">
                        <img 
                          src="/sundaruxcasestudy.png" 
                          alt="Sundar Case Study" 
                          className="w-full h-full object-cover border-b-2 border-[#1A1A2E]/10"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="p-4">
                        <h3 className="font-bold text-lg text-[#1A1A2E] mb-1 line-clamp-2">
                          Redesigning LinkedIn's Comment Section UX to Cut "Time to Insight" by 66%
                        </h3>
                        <p className="text-[#1A1A2E]/60 text-sm mb-0.5">
                          Linkedin - Comment Section
                        </p>
                        <p className="text-[#1A1A2E]/80 text-sm mb-3">
                          by Sundar
                        </p>
                        
                        {/* View Button */}
                        <button 
                          className="inline-flex items-center gap-2 text-[#1A1A2E] font-semibold text-sm hover:gap-3 transition-all"
                          data-testid="button-view-case-3"
                        >
                          View Case Study
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile: 4 slides with 1 card each */}
              <div 
                className="flex md:hidden transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentCaseStudy * 100}%)` }}
              >
                {/* Slide 1: Pooja */}
                <div className="w-full flex-shrink-0">
                  <div 
                    className="bg-white border-2 border-[#1A1A2E] rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    data-testid="card-case-study-mobile-0"
                    onClick={() => setIframeUrl('https://pooja-yerne.designfolio.me/project/68e7779dcb2d80278cace1a2')}
                  >
                    <div className="w-full h-48 overflow-hidden">
                      <img 
                        src="/pooja-uxproject.jpeg" 
                        alt="Pooja Yerne Case Study" 
                        className="w-full h-full object-cover border-b-2 border-[#1A1A2E]/10"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-[#1A1A2E] mb-1 line-clamp-2">
                        Increased User Engagement by 20% on AI Fashion Assistant
                      </h3>
                      <p className="text-[#1A1A2E]/60 text-sm mb-0.5">AI Assistant</p>
                      <p className="text-[#1A1A2E]/80 text-sm mb-3">by Pooja Yerne</p>
                      <button className="inline-flex items-center gap-2 text-[#1A1A2E] font-semibold text-sm hover:gap-3 transition-all">
                        View Case Study
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Slide 2: Madhulika */}
                <div className="w-full flex-shrink-0">
                  <div 
                    className="bg-white border-2 border-[#1A1A2E] rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    data-testid="card-case-study-mobile-1"
                    onClick={() => setIframeUrl('https://madhulikak.framer.website/')}
                  >
                    <div className="w-full h-48 overflow-hidden">
                      <img 
                        src="/madhulika-uxproject.png" 
                        alt="Madhulika Case Study" 
                        className="w-full h-full object-cover border-b-2 border-[#1A1A2E]/10"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-[#1A1A2E] mb-1 line-clamp-2">
                        Designing AI Mentor experience from 0→1 for the first 50,000 learners
                      </h3>
                      <p className="text-[#1A1A2E]/60 text-sm mb-0.5">AI Mentor Platform</p>
                      <p className="text-[#1A1A2E]/80 text-sm mb-3">by Madhulika</p>
                      <button className="inline-flex items-center gap-2 text-[#1A1A2E] font-semibold text-sm hover:gap-3 transition-all">
                        View Case Study
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Slide 3: Shreshth */}
                <div className="w-full flex-shrink-0">
                  <div 
                    className="bg-white border-2 border-[#1A1A2E] rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    data-testid="card-case-study-mobile-2"
                    onClick={() => setIframeUrl('https://shreshth.designfolio.me/project/68b2eae4c864c84e8c17dc12')}
                  >
                    <div className="w-full h-48 overflow-hidden">
                      <img 
                        src="/shreshth-uxproject.jpeg" 
                        alt="Shreshth Case Study" 
                        className="w-full h-full object-cover border-b-2 border-[#1A1A2E]/10"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-[#1A1A2E] mb-1 line-clamp-2">
                        Redesigning University Living's Listing Page experience for 2M+ international students
                      </h3>
                      <p className="text-[#1A1A2E]/60 text-sm mb-0.5">Stay Aggregator Platform</p>
                      <p className="text-[#1A1A2E]/80 text-sm mb-3">by Shreshth</p>
                      <button className="inline-flex items-center gap-2 text-[#1A1A2E] font-semibold text-sm hover:gap-3 transition-all">
                        View Case Study
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Slide 4: Sundar */}
                <div className="w-full flex-shrink-0">
                  <div 
                    className="bg-white border-2 border-[#1A1A2E] rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    data-testid="card-case-study-mobile-3"
                    onClick={() => setIframeUrl('https://sundaraganapathyv.designfolio.me/project/68e665aecb2d80278caaeb83')}
                  >
                    <div className="w-full h-48 overflow-hidden">
                      <img 
                        src="/sundaruxcasestudy.png" 
                        alt="Sundar Case Study" 
                        className="w-full h-full object-cover border-b-2 border-[#1A1A2E]/10"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-[#1A1A2E] mb-1 line-clamp-2">
                        Redesigning LinkedIn's Comment Section UX to Cut "Time to Insight" by 66%
                      </h3>
                      <p className="text-[#1A1A2E]/60 text-sm mb-0.5">Linkedin - Comment Section</p>
                      <p className="text-[#1A1A2E]/80 text-sm mb-3">by Sundar</p>
                      <button className="inline-flex items-center gap-2 text-[#1A1A2E] font-semibold text-sm hover:gap-3 transition-all">
                        View Case Study
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation - Desktop (2 slides) */}
            <div className="hidden md:flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setCurrentCaseStudy((prev) => (prev - 1 + 2) % 2)}
                className="p-2 rounded-full border-2 border-[#1A1A2E] transition hover:bg-[#F4E04D] cursor-pointer"
                data-testid="button-prev-case-study"
                aria-label="Previous case studies"
              >
                <ChevronLeft className="w-5 h-5 text-[#1A1A2E]" />
              </button>
              <button
                onClick={() => setCurrentCaseStudy((prev) => (prev + 1) % 2)}
                className="p-2 rounded-full border-2 border-[#1A1A2E] transition hover:bg-[#F4E04D] cursor-pointer"
                data-testid="button-next-case-study"
                aria-label="Next case studies"
              >
                <ChevronRight className="w-5 h-5 text-[#1A1A2E]" />
              </button>
              <span className="text-sm text-[#1A1A2E]/60">
                {currentCaseStudy + 1} of 2
              </span>
            </div>

            {/* Navigation - Mobile (4 slides) */}
            <div className="flex md:hidden items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setCurrentCaseStudy((prev) => (prev - 1 + 4) % 4)}
                className="p-2 rounded-full border-2 border-[#1A1A2E] transition hover:bg-[#F4E04D] cursor-pointer"
                data-testid="button-prev-case-study-mobile"
                aria-label="Previous case study"
              >
                <ChevronLeft className="w-5 h-5 text-[#1A1A2E]" />
              </button>
              <button
                onClick={() => setCurrentCaseStudy((prev) => (prev + 1) % 4)}
                className="p-2 rounded-full border-2 border-[#1A1A2E] transition hover:bg-[#F4E04D] cursor-pointer"
                data-testid="button-next-case-study-mobile"
                aria-label="Next case study"
              >
                <ChevronRight className="w-5 h-5 text-[#1A1A2E]" />
              </button>
              <span className="text-sm text-[#1A1A2E]/60">
                {currentCaseStudy + 1} of 4
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 pt-16 pb-24">
        <div className="text-center mb-16 max-w-4xl mx-auto animate-on-scroll animate-rise-tilt">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Don't just take our word for it — real students, real results.
          </h2>
          <p className="text-[#1A1A2E]/60 text-sm md:text-base">
            Hear from designers who transformed their portfolios and landed interviews.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden px-1">
            {/* Desktop: 3 slides with 2 testimonials each */}
            <div 
              className="hidden md:flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {/* Slide 1: Harshita & Madhulika */}
              <div className="w-full flex-shrink-0 px-1">
                <div className="grid grid-cols-2 gap-8">
          {/* Harshita's Testimonial */}
          <div 
            className="bg-[#D9F0FF] p-6 shadow-md hover:shadow-2xl transition-all duration-300 rounded-sm border-t-4 border-[#A8D5F0] relative h-full"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)'
            }}
            data-testid="testimonial-harshita"
          >
            <p className="text-[#1A1A2E]/80 text-sm mb-6 leading-relaxed italic">
              It started off great for me, and I got a much-needed reality check on my existing work — which I see as a positive thing. Even senior designers rarely give such honest feedback, so that's really valuable.
              <br/><br/>
              Both Shai and Nandini have been very supportive throughout.
              <br/><br/>
              I'm trying to catch up with everything, and <span className="relative inline-block px-1">
                <span className="relative z-10">I even got two interview calls during the sessions</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#A8D5F0] -rotate-1"></span>
              </span>. I haven't cleared them completely yet since I'm still learning, but I'm confident that I'll land a good opportunity within the next 2–3 months.
            </p>
            <div className="flex items-center gap-3">
              <img 
                src="/harshita.png" 
                alt="Harshita Gautam" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-medium text-[#1A1A2E]">Harshita Gautam</div>
                <div className="text-xs text-[#1A1A2E]/50">Product Designer</div>
              </div>
            </div>
          </div>

          {/* Madhulika's Testimonial */}
          <div 
            className="bg-[#FFE5F0] p-6 shadow-md hover:shadow-2xl transition-all duration-300 rounded-sm border-t-4 border-[#FFB6D9] relative h-full"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)'
            }}
            data-testid="testimonial-madhulika"
          >
            <p className="text-[#1A1A2E]/80 text-sm mb-6 leading-relaxed italic">
              The program has been incredibly helpful. I'd spent weeks refining my case study but was never fully satisfied. <span className="relative inline-block px-1">
                <span className="relative z-10">Session 1 with Shai brought complete clarity—within two days, I felt confident about my case study.</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#FFB6D9] -rotate-1"></span>
              </span>
              <br/><br/>
              Session 2 gave deeper insights into Shai's process and how to connect design decisions to real outcomes. The resume session was highly actionable—I learned small mistakes that could've affected my ATS ranking. Nandini's session was clear, structured, and easy to apply.
              <br/><br/>
              Overall, I'm very happy with the program. Great work, team!
            </p>
            <div className="flex items-center gap-3">
              <img 
                src="/madhulika_1761106014792.png" 
                alt="Madhulika" 
                className="w-10 h-10 rounded-full object-cover"
                data-testid="img-madhulika"
              />
              <div>
                <div className="text-sm font-medium text-[#1A1A2E]">Madhulika</div>
                <div className="text-xs text-[#1A1A2E]/50">UX UI Designer</div>
              </div>
            </div>
          </div>
                </div>
              </div>

              {/* Slide 2: Komalpreet & Sundar */}
              <div className="w-full flex-shrink-0 px-1">
                <div className="grid grid-cols-2 gap-8">
          {/* Komalpreet's Testimonial */}
          <div 
            className="bg-[#FFF9E5] p-6 shadow-md hover:shadow-2xl transition-all duration-300 rounded-sm border-t-4 border-[#F4E04D] relative h-full"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)'
            }}
            data-testid="testimonial-komalpreet"
          >
            <p className="text-[#1A1A2E]/80 text-sm mb-6 leading-relaxed italic">
              The sprint has been incredible. Shai explained everything clearly and handled every doubt with patience and genuine dedication. While applying his feedback, I could see my case study completely transform. <span className="relative inline-block px-1">
                <span className="relative z-10">His detailed feedback—complete with examples for every section—was beyond what I expected.</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#F4E04D] -rotate-1"></span>
              </span>
              <br/><br/>
              Nandini's session completely changed my perspective on resumes. She explained how ATS works, how to validate resumes, and how small details make a big difference. Her clarity and structured approach made everything click.
              <br/><br/>
              I'm confident that after this 2-week sprint, I'll start getting more HR callbacks and even inbound opportunities. Thank you, Shai and Nandini!
            </p>
            <div className="flex items-center gap-3">
              <img 
                src="/komal_1761106764386.png" 
                alt="Komalpreet Kaur" 
                className="w-10 h-10 rounded-full object-cover"
                data-testid="img-komalpreet"
              />
              <div>
                <div className="text-sm font-medium text-[#1A1A2E]">Komalpreet Kaur</div>
                <div className="text-xs text-[#1A1A2E]/50">UX Designer</div>
              </div>
            </div>
          </div>

          {/* Sundar's Testimonial */}
          <div 
            className="bg-[#E5F9F0] p-6 shadow-md hover:shadow-2xl transition-all duration-300 rounded-sm border-t-4 border-[#A8E6CF] relative h-full"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)'
            }}
            data-testid="testimonial-sundar"
          >
            <p className="text-[#1A1A2E]/80 text-sm mb-6 leading-relaxed italic">
              This program has truly boosted my confidence. It's pushed me to refine my work and understand the finer, industry-level nuances of presenting it effectively. <span className="relative inline-block px-1">
                <span className="relative z-10">I've learned how to prepare for interviews, build strong supporting assets, and position myself to stand out.</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#A8E6CF] -rotate-1"></span>
              </span>
              <br/><br/>
              It's been a valuable and insightful journey in every aspect of job hunting.
            </p>
            <div className="flex items-center gap-3">
              <img 
                src="/sundaraganapthy.png" 
                alt="Sundar" 
                className="w-10 h-10 rounded-full object-cover"
                data-testid="img-sundar"
              />
              <div>
                <div className="text-sm font-medium text-[#1A1A2E]">Sundar</div>
                <div className="text-xs text-[#1A1A2E]/50">UI UX Designer</div>
              </div>
            </div>
          </div>
                </div>
              </div>

              {/* Slide 3: Satvik & Jai */}
              <div className="w-full flex-shrink-0 px-1">
                <div className="grid grid-cols-2 gap-8">
          {/* Satvik's Testimonial */}
          <div 
            className="bg-[#F0E5FF] p-6 shadow-md hover:shadow-2xl transition-all duration-300 rounded-sm border-t-4 border-[#D4B5FF] relative h-full"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)'
            }}
            data-testid="testimonial-satvik"
          >
            <p className="text-[#1A1A2E]/80 text-sm mb-6 leading-relaxed italic">
              When I joined this program, my goal was to understand what recruiters truly look for. Even with solid projects and a good portfolio, I hadn't received interview calls for over a month — until I joined Shai's Job Ready Program. <span className="relative inline-block px-1">
                <span className="relative z-10">It turned out to be a game-changer, helping me craft an ATS-friendly résumé and build a strong case study from a project I had once overlooked.</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#D4B5FF] -rotate-1"></span>
              </span>
              <br/><br/>
              Nandini's LinkedIn Masterclass was equally transformative — after implementing her tips, I started receiving inbound interest from companies like SuperMoney, PhonePe, and Juspay. I'm deeply grateful to Shai and Nandini!
            </p>
            <div className="flex items-center gap-3">
              <img 
                src="/satvik_1761115411601.png" 
                alt="Satvik" 
                className="w-10 h-10 rounded-full object-cover"
                data-testid="img-satvik"
              />
              <div>
                <div className="text-sm font-medium text-[#1A1A2E]">Satvik</div>
                <div className="text-xs text-[#1A1A2E]/50">Product Designer, NxtWave</div>
              </div>
            </div>
          </div>

          {/* Jai's Testimonial */}
          <div 
            className="bg-[#FFE5D9] p-6 shadow-md hover:shadow-2xl transition-all duration-300 rounded-sm border-t-4 border-[#FFCCB3] relative h-full"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)'
            }}
            data-testid="testimonial-jai"
          >
            <p className="text-[#1A1A2E]/80 text-sm mb-6 leading-relaxed italic">
              For the past year, my biggest hurdle was building a portfolio. I kept overthinking layouts and spending endless hours chasing perfection. <span className="relative inline-block px-1">
                <span className="relative z-10">Thanks to Job Ready and the Designfolio template, that struggle is finally over.</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#FFCCB3] -rotate-1"></span>
              </span>
              <br/><br/>
              The program gave me a clear, structured way to present my work — letting me focus on the story, not the design. The hesitation is gone, and I now have a professional UI/UX portfolio that I'm genuinely proud of. I'm confident it will help me land my next opportunity.
              <br/><br/>
              A huge thank you to the Job Ready B2 program for empowering me! 💪🏻✨
            </p>
            <div className="flex items-center gap-3">
              <img 
                src="/jai_1761117846125.png" 
                alt="Jai Sankhla" 
                className="w-10 h-10 rounded-full object-cover"
                data-testid="img-jai"
              />
              <div>
                <div className="text-sm font-medium text-[#1A1A2E]">Jai Sankhla</div>
                <div className="text-xs text-[#1A1A2E]/50">Lead UX UI Designer</div>
              </div>
            </div>
          </div>
                </div>
              </div>
            </div>

            {/* Mobile: 6 slides with 1 testimonial each */}
            <div 
              className="flex md:hidden transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {/* Mobile Slide 1: Harshita */}
              <div className="w-full flex-shrink-0">
                <div 
                  className="bg-[#D9F0FF] p-6 shadow-md hover:shadow-2xl transition-all duration-300 rounded-sm border-t-4 border-[#A8D5F0] relative"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)'
                  }}
                  data-testid="testimonial-harshita-mobile"
                >
                  <p className="text-[#1A1A2E]/80 text-sm mb-6 leading-relaxed italic">
                    It started off great for me, and I got a much-needed reality check on my existing work — which I see as a positive thing. Even senior designers rarely give such honest feedback, so that's really valuable.
                    <br/><br/>
                    Both Shai and Nandini have been very supportive throughout.
                    <br/><br/>
                    I'm trying to catch up with everything, and <span className="relative inline-block px-1">
                      <span className="relative z-10">I even got two interview calls during the sessions</span>
                      <span className="absolute bottom-0 left-0 w-full h-3 bg-[#A8D5F0] -rotate-1"></span>
                    </span>. I haven't cleared them completely yet since I'm still learning, but I'm confident that I'll land a good opportunity within the next 2–3 months.
                  </p>
                  <div className="flex items-center gap-3">
                    <img 
                      src="/harshita.png" 
                      alt="Harshita Gautam" 
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-medium text-[#1A1A2E]">Harshita Gautam</div>
                      <div className="text-xs text-[#1A1A2E]/50">Product Designer</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Slide 2: Madhulika */}
              <div className="w-full flex-shrink-0">
                <div 
                  className="bg-[#FFE5F0] p-6 shadow-md hover:shadow-2xl transition-all duration-300 rounded-sm border-t-4 border-[#FFB6D9] relative"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)'
                  }}
                  data-testid="testimonial-madhulika-mobile"
                >
                  <p className="text-[#1A1A2E]/80 text-sm mb-6 leading-relaxed italic">
                    The program has been incredibly helpful. I'd spent weeks refining my case study but was never fully satisfied. <span className="relative inline-block px-1">
                      <span className="relative z-10">Session 1 with Shai brought complete clarity—within two days, I felt confident about my case study.</span>
                      <span className="absolute bottom-0 left-0 w-full h-3 bg-[#FFB6D9] -rotate-1"></span>
                    </span>
                    <br/><br/>
                    Session 2 gave deeper insights into Shai's process and how to connect design decisions to real outcomes. The resume session was highly actionable—I learned small mistakes that could've affected my ATS ranking. Nandini's session was clear, structured, and easy to apply.
                    <br/><br/>
                    Overall, I'm very happy with the program. Great work, team!
                  </p>
                  <div className="flex items-center gap-3">
                    <img 
                      src="/madhulika_1761106014792.png" 
                      alt="Madhulika" 
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-medium text-[#1A1A2E]">Madhulika</div>
                      <div className="text-xs text-[#1A1A2E]/50">UX UI Designer</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Slide 3: Komalpreet */}
              <div className="w-full flex-shrink-0">
                <div 
                  className="bg-[#FFF9E5] p-6 shadow-md hover:shadow-2xl transition-all duration-300 rounded-sm border-t-4 border-[#F4E04D] relative"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)'
                  }}
                  data-testid="testimonial-komalpreet-mobile"
                >
                  <p className="text-[#1A1A2E]/80 text-sm mb-6 leading-relaxed italic">
                    The sprint has been incredible. Shai explained everything clearly and handled every doubt with patience and genuine dedication. While applying his feedback, I could see my case study completely transform. <span className="relative inline-block px-1">
                      <span className="relative z-10">His detailed feedback—complete with examples for every section—was beyond what I expected.</span>
                      <span className="absolute bottom-0 left-0 w-full h-3 bg-[#F4E04D] -rotate-1"></span>
                    </span>
                    <br/><br/>
                    Nandini's session completely changed my perspective on resumes. She explained how ATS works, how to validate resumes, and how small details make a big difference. Her clarity and structured approach made everything click.
                    <br/><br/>
                    I'm confident that after this 2-week sprint, I'll start getting more HR callbacks and even inbound opportunities. Thank you, Shai and Nandini!
                  </p>
                  <div className="flex items-center gap-3">
                    <img 
                      src="/komal_1761106764386.png" 
                      alt="Komalpreet Kaur" 
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-medium text-[#1A1A2E]">Komalpreet Kaur</div>
                      <div className="text-xs text-[#1A1A2E]/50">UX Designer</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Slide 4: Sundar */}
              <div className="w-full flex-shrink-0">
                <div 
                  className="bg-[#E5F9F0] p-6 shadow-md hover:shadow-2xl transition-all duration-300 rounded-sm border-t-4 border-[#A8E6CF] relative"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)'
                  }}
                  data-testid="testimonial-sundar-mobile"
                >
                  <p className="text-[#1A1A2E]/80 text-sm mb-6 leading-relaxed italic">
                    This program has truly boosted my confidence. It's pushed me to refine my work and understand the finer, industry-level nuances of presenting it effectively. <span className="relative inline-block px-1">
                      <span className="relative z-10">I've learned how to prepare for interviews, build strong supporting assets, and position myself to stand out.</span>
                      <span className="absolute bottom-0 left-0 w-full h-3 bg-[#A8E6CF] -rotate-1"></span>
                    </span>
                    <br/><br/>
                    It's been a valuable and insightful journey in every aspect of job hunting.
                  </p>
                  <div className="flex items-center gap-3">
                    <img 
                      src="/sundaraganapthy.png" 
                      alt="Sundar" 
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-medium text-[#1A1A2E]">Sundar</div>
                      <div className="text-xs text-[#1A1A2E]/50">UI UX Designer</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Slide 5: Satvik */}
              <div className="w-full flex-shrink-0">
                <div 
                  className="bg-[#F0E5FF] p-6 shadow-md hover:shadow-2xl transition-all duration-300 rounded-sm border-t-4 border-[#D4B5FF] relative"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)'
                  }}
                  data-testid="testimonial-satvik-mobile"
                >
                  <p className="text-[#1A1A2E]/80 text-sm mb-6 leading-relaxed italic">
                    When I joined this program, my goal was to understand what recruiters truly look for. Even with solid projects and a good portfolio, I hadn't received interview calls for over a month — until I joined Shai's Job Ready Program. <span className="relative inline-block px-1">
                      <span className="relative z-10">It turned out to be a game-changer, helping me craft an ATS-friendly résumé and build a strong case study from a project I had once overlooked.</span>
                      <span className="absolute bottom-0 left-0 w-full h-3 bg-[#D4B5FF] -rotate-1"></span>
                    </span>
                    <br/><br/>
                    Nandini's LinkedIn Masterclass was equally transformative — after implementing her tips, I started receiving inbound interest from companies like SuperMoney, PhonePe, and Juspay. I'm deeply grateful to Shai and Nandini!
                  </p>
                  <div className="flex items-center gap-3">
                    <img 
                      src="/satvik_1761115411601.png" 
                      alt="Satvik" 
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-medium text-[#1A1A2E]">Satvik</div>
                      <div className="text-xs text-[#1A1A2E]/50">Product Designer, NxtWave</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Slide 6: Jai */}
              <div className="w-full flex-shrink-0">
                <div 
                  className="bg-[#FFE5D9] p-6 shadow-md hover:shadow-2xl transition-all duration-300 rounded-sm border-t-4 border-[#FFCCB3] relative"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)'
                  }}
                  data-testid="testimonial-jai-mobile"
                >
                  <p className="text-[#1A1A2E]/80 text-sm mb-6 leading-relaxed italic">
                    For the past year, my biggest hurdle was building a portfolio. I kept overthinking layouts and spending endless hours chasing perfection. <span className="relative inline-block px-1">
                      <span className="relative z-10">Thanks to Job Ready and the Designfolio template, that struggle is finally over.</span>
                      <span className="absolute bottom-0 left-0 w-full h-3 bg-[#FFCCB3] -rotate-1"></span>
                    </span>
                    <br/><br/>
                    The program gave me a clear, structured way to present my work — letting me focus on the story, not the design. The hesitation is gone, and I now have a professional UI/UX portfolio that I'm genuinely proud of. I'm confident it will help me land my next opportunity.
                    <br/><br/>
                    A huge thank you to the Job Ready B2 program for empowering me! 💪🏻✨
                  </p>
                  <div className="flex items-center gap-3">
                    <img 
                      src="/jai_1761117846125.png" 
                      alt="Jai Sankhla" 
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-medium text-[#1A1A2E]">Jai Sankhla</div>
                      <div className="text-xs text-[#1A1A2E]/50">Lead UX UI Designer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation - Desktop (3 slides) */}
          <div className="hidden md:flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + 3) % 3)}
              className="p-2 rounded-full border-2 border-[#1A1A2E] transition hover:bg-[#F4E04D] cursor-pointer"
              data-testid="button-prev-testimonial"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 text-[#1A1A2E]" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % 3)}
              className="p-2 rounded-full border-2 border-[#1A1A2E] transition hover:bg-[#F4E04D] cursor-pointer"
              data-testid="button-next-testimonial"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 text-[#1A1A2E]" />
            </button>
            <span className="text-sm text-[#1A1A2E]/60">
              {currentTestimonial + 1} of 3
            </span>
          </div>

          {/* Navigation - Mobile (6 slides) */}
          <div className="flex md:hidden items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + 6) % 6)}
              className="p-2 rounded-full border-2 border-[#1A1A2E] transition hover:bg-[#F4E04D] cursor-pointer"
              data-testid="button-prev-testimonial-mobile"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-[#1A1A2E]" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % 6)}
              className="p-2 rounded-full border-2 border-[#1A1A2E] transition hover:bg-[#F4E04D] cursor-pointer"
              data-testid="button-next-testimonial-mobile"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-[#1A1A2E]" />
            </button>
            <span className="text-sm text-[#1A1A2E]/60">
              {currentTestimonial + 1} of 6
            </span>
          </div>
        </div>
        </div>
      </section>

      {/* Next Batch Section */}
      <section className="border-t border-[#1A1A2E]/10">
        <div className="max-w-6xl mx-auto px-6 py-20">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start md:items-center mb-16 animate-on-scroll animate-depth-lift">
            {/* Left: Headline */}
            <div className="text-left">
              <h2 className="text-2xl md:text-4xl font-bold text-[#1A1A2E] mb-2">
                Next batch starts soon
              </h2>
              <p className="text-[#1A1A2E]/60 text-sm md:text-base">Limited seats available</p>
            </div>

            {/* Center: Stats */}
            <div className="flex items-center justify-start md:justify-center gap-6 text-left md:text-center">
              <div>
                <p className="text-xs text-[#1A1A2E]/50 mb-1 uppercase tracking-wide">Batch</p>
                <p className="text-lg font-bold text-[#1A1A2E]" data-testid="text-batch-date">15th Nov'25</p>
              </div>
              <div className="h-12 w-px bg-[#1A1A2E]/10"></div>
              <div>
                <p className="text-xs text-[#1A1A2E]/50 mb-1 uppercase tracking-wide">Seats</p>
                <p className="text-lg font-bold text-[#1A1A2E]" data-testid="text-seats-left">4/20</p>
              </div>
              <div className="h-12 w-px bg-[#1A1A2E]/10"></div>
              <div>
                <p className="text-xs text-[#1A1A2E]/50 mb-1 uppercase tracking-wide">Duration</p>
                <p className="text-lg font-bold text-[#1A1A2E]" data-testid="text-duration">2 Weeks</p>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="text-left md:text-right">
              <p className="text-2xl font-bold text-[#1A1A2E] mb-1">
                ₹8,999 <span className="text-base text-[#1A1A2E]/40 line-through ml-1">₹11,000</span>
              </p>
              <p className="text-xs text-[#1A1A2E]/50 mb-4">Early bird pricing</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full md:w-auto px-6 py-2.5 bg-[#1A1A2E] text-white rounded-md hover:bg-[#1A1A2E]/90 transition font-medium text-sm shadow-sm"
                data-testid="button-join-now-footer"
              >
                Join Now →
              </button>
            </div>
          </div>

          {/* Bottom: Mentee Photos */}
          <div className="relative overflow-hidden pt-8 border-t border-[#1A1A2E]/5 flex justify-start md:justify-center">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#E8E4D9] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#E8E4D9] to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex gap-3 animate-scroll-seamless">
              {/* First set */}
              <img src="/harshita.png" alt="Harshita" className="w-10 h-10 rounded-full border border-[#1A1A2E]/20 flex-shrink-0 object-cover opacity-80" />
              <img src="/madhulika_1761106014792.png" alt="Madhulika" className="w-10 h-10 rounded-full border border-[#1A1A2E]/20 flex-shrink-0 object-cover opacity-80" />
              <img src="/satvik_1761115411601.png" alt="Satvik" className="w-10 h-10 rounded-full border border-[#1A1A2E]/20 flex-shrink-0 object-cover opacity-80" />
              <img src="/komal_1761106764386.png" alt="Komal" className="w-10 h-10 rounded-full border border-[#1A1A2E]/20 flex-shrink-0 object-cover opacity-80" />
              <img src="/jai_1761117846125.png" alt="Jai" className="w-10 h-10 rounded-full border border-[#1A1A2E]/20 flex-shrink-0 object-cover opacity-80" />
              <img src="/sundar.png" alt="Sundar" className="w-10 h-10 rounded-full border border-[#1A1A2E]/20 flex-shrink-0 object-cover opacity-80" />
              <img src="/arun.png" alt="Arun" className="w-10 h-10 rounded-full border border-[#1A1A2E]/20 flex-shrink-0 object-cover opacity-80" />
              <img src="/sanket.png" alt="Sanket" className="w-10 h-10 rounded-full border border-[#1A1A2E]/20 flex-shrink-0 object-cover opacity-80" />
              {/* Second set for seamless loop */}
              <img src="/harshita.png" alt="Harshita" className="w-10 h-10 rounded-full border border-[#1A1A2E]/20 flex-shrink-0 object-cover opacity-80" />
              <img src="/madhulika_1761106014792.png" alt="Madhulika" className="w-10 h-10 rounded-full border border-[#1A1A2E]/20 flex-shrink-0 object-cover opacity-80" />
              <img src="/satvik_1761115411601.png" alt="Satvik" className="w-10 h-10 rounded-full border border-[#1A1A2E]/20 flex-shrink-0 object-cover opacity-80" />
              <img src="/komal_1761106764386.png" alt="Komal" className="w-10 h-10 rounded-full border border-[#1A1A2E]/20 flex-shrink-0 object-cover opacity-80" />
              <img src="/jai_1761117846125.png" alt="Jai" className="w-10 h-10 rounded-full border border-[#1A1A2E]/20 flex-shrink-0 object-cover opacity-80" />
              <img src="/sundar.png" alt="Sundar" className="w-10 h-10 rounded-full border border-[#1A1A2E]/20 flex-shrink-0 object-cover opacity-80" />
              <img src="/arun.png" alt="Arun" className="w-10 h-10 rounded-full border border-[#1A1A2E]/20 flex-shrink-0 object-cover opacity-80" />
              <img src="/sanket.png" alt="Sanket" className="w-10 h-10 rounded-full border border-[#1A1A2E]/20 flex-shrink-0 object-cover opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 text-left md:text-center text-[#1A1A2E]/40 text-sm">
        <p>© 2025 Job Ready By Designfolio. All rights reserved.</p>
      </footer>

      {/* Iframe Modal Popup */}
      {iframeUrl && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIframeUrl(null)}
          data-testid="iframe-modal-overlay"
        >
          <div 
            className="relative w-full h-full max-w-7xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIframeUrl(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#1A1A2E] hover:bg-[#F4E04D] text-white hover:text-[#1A1A2E] rounded-full transition-all shadow-lg"
              data-testid="button-close-iframe"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Iframe */}
            <iframe
              src={iframeUrl}
              className="w-full h-full border-0"
              title="Case Study Viewer"
              data-testid="iframe-case-study"
            />
          </div>
        </div>
      )}

      {/* Join Program Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsModalOpen(false)}
          data-testid="join-modal-overlay"
        >
          <div 
            className="relative w-full max-w-lg bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#1A1A2E] hover:bg-[#F4E04D] text-white hover:text-[#1A1A2E] rounded-full transition-all shadow-lg"
              data-testid="button-close-join-modal"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="p-8 md:p-12">
              {/* Circular Video */}
              <div className="flex justify-center mb-8">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#F4E04D] shadow-lg">
                  <video
                    src="/shai.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    data-testid="video-join-modal"
                  />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#1A1A2E]">
                Ready to Get Started?
              </h2>

              {/* 3 Steps */}
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F4E04D] flex items-center justify-center font-bold text-[#1A1A2E]">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="text-[#1A1A2E]/70 leading-relaxed">
                      Join WhatsApp group:{" "}
                      <a 
                        href="https://chat.whatsapp.com/IOcvgOE9VRfHFIFjJShBty"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1A1A2E] font-semibold underline hover:text-[#F4E04D] transition"
                        data-testid="link-whatsapp"
                      >
                        Click here
                      </a>
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F4E04D] flex items-center justify-center font-bold text-[#1A1A2E]">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-[#1A1A2E]/70 leading-relaxed">
                      Text there <span className="font-semibold text-[#1A1A2E]">"Job Ready"</span>
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F4E04D] flex items-center justify-center font-bold text-[#1A1A2E]">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="text-[#1A1A2E]/70 leading-relaxed">
                      Shai/Nandini will get in touch with you
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 text-center">
                <a
                  href="https://chat.whatsapp.com/IOcvgOE9VRfHFIFjJShBty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-[#1A1A2E] text-[#E8E4D9] rounded-lg hover:bg-[#1A1A2E]/90 transition font-semibold"
                  data-testid="button-join-whatsapp"
                >
                  Join WhatsApp Group
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
