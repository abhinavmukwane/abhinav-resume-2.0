import React, { useEffect } from 'react';
import SearchPopup from './components/SearchPopup';
import Offcanvas from './components/Offcanvas';
import Header from './components/Header';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Footer from './components/Footer';
import AnimatedCursor from 'react-animated-cursor';

function App() {

  useEffect(() => {
    // Only load these scripts once, even in React Strict Mode
    if (window.themeScriptsLoaded) return;
    window.themeScriptsLoaded = true;

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false; // ensure they execute in order
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadAllScripts = async () => {
      try {
        const scripts = [
          '/assets/js/vendor/jquery.js',
          '/assets/js/vendor/waypoints.js',
          '/assets/js/bootstrap-bundle.js',
          '/assets/js/gsap/gsap.js',
          '/assets/js/gsap/gsap-scroll-to-plugin.js',
          '/assets/js/gsap/gsap-scroll-smoother.js',
          '/assets/js/gsap/gsap-scroll-trigger.js',
          '/assets/js/gsap/gsap-split-text.js',
          '/assets/js/chroma.min.js',
          '/assets/js/scroll-magic.js',
          '/assets/js/countdown.js',
          '/assets/js/swiper-bundle.js',
          '/assets/js/text-slide.js',
          '/assets/js/slick.js',
          '/assets/js/range-slider.js',
          '/assets/js/magnific-popup.js',
          '/assets/js/nice-select.js',
          '/assets/js/purecounter.js',
          '/assets/js/wow.js',
          '/assets/js/vanilla-tilt.min.js',
          '/assets/js/isotope-pkgd.js',
          '/assets/js/imagesloaded-pkgd.js',
          '/assets/js/ajax-form.js',
          '/assets/js/slider-active.js',
          '/assets/js/main.js'
        ];

        for (const src of scripts) {
          await loadScript(src);
        }
      } catch (err) {
        console.error('Failed to load theme scripts', err);
      }
    };

    // Small delay to ensure browser has painted the React DOM
    setTimeout(() => {
      loadAllScripts();
    }, 100);
  }, []);

  return (
    <>
      <SearchPopup />
      <Offcanvas />
      <Header />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: '#ff6644'
        }}
        outerStyle={{
          border: '1px solid #ff6644'
        }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Hero />
            <Resume />
            <Skills />
            <Projects />
            {/* <Blog /> */}
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App;
