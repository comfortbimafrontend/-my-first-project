function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#f8f9fa', color: '#222' }}>
      
      {/* HERO */}
      <div style={{ backgroundColor: '#1a1a2e', color: 'white', textAlign: 'center', padding: '100px 20px 60px 20px' }}>
       <h1 style={{ fontSize: '32px', margin: '0 0 20px 0', color: 'white' }}>Hello, I'm Comfort 👋</h1>
        <p style={{ fontSize: '22px', color: '#e94560' }}>Frontend Developer | React + TypeScript</p>
        <p style={{ maxWidth: '600px', margin: '20px auto' }}>
          I build beautiful, simple and user-friendly websites. 
          After 10 years of learning, I am now showing my proof, one project at a time.
        </p>
        <a href="#projects" style={{ backgroundColor: '#e94560', color: 'white', padding: '12px 25px', borderRadius: '25px', textDecoration: 'none', fontWeight: 'bold' }}>
          See My Work ↓
          
        </a>
        {/* MY PROJECTS SECTION */}
<section id="projects" style={{ padding: '60px 20px', background: '#f0f9ff', textAlign: 'center' }}>
  <h2 style={{ fontSize: '32px', color: '#0ea5e9' }}>See My Work 💻</h2>
  <p style={{ color: '#555' }}>Here are projects I built with love.</p>

  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>

    <div style={{ background: 'white', padding: '25px', borderRadius: '15px', width: '300px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
      <h3 style={{ color: '#111' }}>🏫 School Environment Website</h3>
      <p style={{ color: '#555' }}>A beautiful website that shows my school environment and facilities — classrooms, library, science lab, and sports ground — so visitors can see how lovely our school is.</p>
    </div>

    <div style={{ background: 'white', padding: '25px', borderRadius: '15px', width: '300px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
      <h3 style={{ color: '#111' }}>⏱️ Sky Blue Stopwatch</h3>
      <p style={{ color: '#555' }}>A beautiful sky-blue stopwatch I built with Start, Stop and Reset buttons. It helps you time your study, sports, and games accurately.</p>
    </div>

  </div>
</section>

        
      </div>
      

      {/* ABOUT */}
      <div style={{ maxWidth: '800px', margin: '50px auto', padding: '0 20px', textAlign: 'center' }}>
        <h2>About Me</h2>
        <p>
          Hi! I'm Comfort Bima. I'm a Frontend Developer based in Nigeria, passionate about turning ideas into real websites.
          I love React, TypeScript, and clean design. My goal is to work with a company like Micro1 and grow into a professional developer.
        </p>
      </div>

      {/* SKILLS */}
      <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px', textAlign: 'center' }}>
        <h2>My Skills</h2>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Git & GitHub'].map(skill => (
            <span key={skill} style={{ backgroundColor: 'white', border: '1px solid #ddd', padding: '10px 20px', borderRadius: '20px', fontWeight: 'bold' }}>{skill}</span>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <div id="projects" style={{ maxWidth: '800px', margin: '50px auto', padding: '0 20px', textAlign: 'center' }}>
        <h2>My Projects</h2>
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
          <h3>🌟 Project 1: My First Project</h3>
          <p>My first React + TypeScript project pushed to GitHub. The start of my proof.</p>
          <p><b>Tech:</b> React, TypeScript, Vite</p>
        </div>
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', marginTop: '20px' }}>
          <h3>💼 Project 2: My Portfolio (This Website!)</h3>
          <p>My personal portfolio website to showcase my skills and journey.</p>
          <p><b>Tech:</b> React, TypeScript, CSS</p>
        </div>
      </div>

      {/* CONTACT */}
      <div style={{ backgroundColor: '#1a1a2e', color: 'white', textAlign: 'center', padding: '50px 20px' }}>
        <h2 style={{ color: '#E0E0E0', margin: '0 0 20px 0' }}>Let's Work Together!</h2>
        <p>I'm open to opportunities, internships, and freelance work.</p>
       <p>📧 <a href="mailto:bimadunamifson@gmail.com" style={{ color: 'white', fontWeight: 'bold' }}>Email me</a> | Find me on GitHub: <a href="https://github.com/comfortbimafrontend" style={{ color: 'white', fontWeight: 'bold' }}>comfortbimafrontend</a></p>
        <p style={{ fontSize: '14px', opacity: 1 }}>© 2026 Comfort Bima. Built with React.</p>
      </div>


    </div>
  )
}

export default App