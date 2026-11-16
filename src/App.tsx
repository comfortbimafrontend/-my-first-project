function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#f8f9fa', color: '#222' }}>
      
      {/* HERO */}
      <div style={{ backgroundColor: '#1a1a2e', color: 'white', textAlign: 'center', padding: '80px 20px' }}>
        <h1 style={{ fontSize: '48px', margin: '0' }}>Hello, I'm Comfort 👋</h1>
        <p style={{ fontSize: '22px', color: '#e94560' }}>Frontend Developer | React + TypeScript</p>
        <p style={{ maxWidth: '600px', margin: '20px auto' }}>
          I build beautiful, simple and user-friendly websites. 
          After 10 years of learning, I am now showing my proof, one project at a time.
        </p>
        <a href="#projects" style={{ backgroundColor: '#e94560', color: 'white', padding: '12px 25px', borderRadius: '25px', textDecoration: 'none', fontWeight: 'bold' }}>
          See My Work ↓
        </a>
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
        <h2>Let's Work Together!</h2>
        <p>I'm open to opportunities, internships, and freelance work.</p>
        <p>📧 Email me | Find me on GitHub: comfortbimafrontend</p>
        <p style={{ fontSize: '14px', opacity: 0.7 }}>© 2026 Comfort Bima. Built with React.</p>
      </div>

    </div>
  )
}

export default App