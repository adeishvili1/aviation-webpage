<template>
  <section id="home" class="hero-bg min-h-screen flex items-center relative wave-divider">

    <iframe
        id="player"
        src="https://www.youtube.com/embed/ULc0MvCoIlY?autoplay=1&mute=1&loop=1&playlist=ULc0MvCoIlY&controls=0&modestbranding=1&rel=0&playsinline=1"
        class="video"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        style="
        position:absolute;
        top:50%;
        left:50%;
        width:210.77vh;
        height:110.25vw;
        transform:translate(-50%, -50%);
        pointer-events:none;
        filter:brightness(0.4) contrast(1.1);
        "
    ></iframe>
    <!-- Floating particles -->
    <div
      v-for="p in particles"
      :key="p.id"
      class="particle"
      :style="{
        width: p.size + 'px',
        height: p.size + 'px',
        left: p.left + '%',
        animationDuration: p.duration + 's',
        animationDelay: p.delay + 's'
      }"
    ></div>

    <!-- Plane trails -->
    <div class="plane-trail" style="top:30%;animation-delay:0s"></div>
    <div class="plane-trail" style="top:50%;animation-delay:3s"></div>
    <div class="plane-trail" style="top:70%;animation-delay:6s"></div>

    <div class="max-w-7xl mx-auto px-6 pt-40 pb-32 relative z-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Text -->
        <div>
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 mb-8">
            <span class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span class="text-blue-300 text-sm font-medium">სამოქალაქო ავიაციის მომავალი</span>
          </div>

          <h1 class="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            ცა <span class="gradient-text">უფრო ახლოს</span> გახდა თქვენთან
          </h1>

          <p class="text-lg text-blue-200/80 leading-relaxed mb-10 max-w-xl">
            ჩვენი ქვეყანის საჰაერო ხომალდების, რომლებიც აერთიანებს ინოვაციურ ტექნოლოგიებს,
            მაქსიმალურ კომფორტს და მდგრადობის უმაღლეს. თქვენი მომავალი იწყება აქ.
          </p>

          <div class="flex flex-wrap gap-4">
            <a href="#fleet" class="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 flex items-center gap-2" @click.prevent="scrollTo('fleet')">
              ფლოტის ნახვა
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            <a href="#innovation" class="px-8 py-4 border-2 border-blue-400/30 hover:border-blue-400 text-white font-bold rounded-full transition-all hover:-translate-y-1 backdrop-blur-sm" @click.prevent="scrollTo('innovation')">
              ინოვაციები
            </a>
          </div>
        </div>

        <!-- Right: Stats Cards -->
        <div class="grid grid-cols-2 gap-4">
          <div v-for="stat in stats" :key="stat.label" class="stat-glow rounded-2xl p-6 text-center">
            <div class="text-3xl md:text-4xl font-black text-white mb-1" :data-count="stat.count">0</div>
            <div class="text-sm text-blue-300">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const particles = [
  { id: 1, size: 4, left: 10, duration: 12, delay: 0 },
  { id: 2, size: 6, left: 25, duration: 16, delay: 2 },
  { id: 3, size: 3, left: 40, duration: 14, delay: 4 },
  { id: 4, size: 5, left: 55, duration: 18, delay: 1 },
  { id: 5, size: 4, left: 70, duration: 13, delay: 3 },
  { id: 6, size: 7, left: 85, duration: 15, delay: 5 },
  { id: 7, size: 3, left: 90, duration: 11, delay: 7 },
]

const stats = [
  { count: 78, label: 'თანამედროვე აეროპლანი' },
  { count: 200, label: '+ კომპეტენტურ თასამშრომელი' },
  { count: 100, label: '+ ქვეყანაში ოპერაციები' },
  { count: 40, label: '% ნაკლები CO₂ გაფრქვევა' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
// Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
         // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '100%',
          videoId: 'M7lc1UVf-VE',
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
</script>
