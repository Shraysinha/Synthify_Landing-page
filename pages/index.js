import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Synthify Landing Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header>
        <div className="container">
          <div className="logo">Synthify</div>
          <nav>
            <ul>
              <li><a href="#">Log In</a></li>
              <li className="signIn"><a href="#">Sign In</a></li>
            </ul>
          </nav>
        </div>
        <div className="hero">
          <h1>AI-Powered Platform for All Your Works</h1>
          <p>Create, enhance, and optimize content with our powerful AI tools.</p>
        </div>
      </header>

      <div className="custom-image">
        <Image src="/Synthify.png" alt="Description of the image" width={900} height={500} />
      </div>

      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          {/* Repeat feature-card structure for each feature */}
          <div className="feature-card">
            <div className="card-inner">
              <div className="card-front">
                <h3>TEXT GENERATION</h3>
              </div>
              <div className="card-back">
                <p>Synthify offers GPT-powered text generation, perfect for content creation, translation, and creative writing.</p>
              </div>
            </div>
          </div>
          <div class="feature-card">
              <div class="card-inner">
                  <div class="card-front">
                      <h3>IMAGE GENERATION</h3>
                  </div>
                  <div class="card-back">
                      <p>Generate stunning images using AI. Ideal for creative projects and design work.</p>
                  </div>
              </div>
          </div>
          <div class="feature-card">
              <div class="card-inner">
                  <div class="card-front">
                      <h3>PARAPHRASER</h3>
                  </div>
                  <div class="card-back">
                      <p>Modify and rewrite text to maintain original meaning, using AI-powered natural language processing.</p>
                  </div>
              </div>
          </div>
          <div class="feature-card">
            <div class="card-inner">
                <div class="card-front">
                    <h3>IMAGE UPSCALER</h3>
                </div>
                <div class="card-back">
                    <p>Modify and rewrite text to maintain original meaning, using AI-powered natural language processing.</p>
                </div>
            </div>
        </div>
        <div class="feature-card">
          <div class="card-inner">
              <div class="card-front">
                  <h3>AUDIO ENHANCER & NOISE REMOVAL</h3>
              </div>
              <div class="card-back">
                  <p>Enrich sound clarity and eliminate background noise for a seamless audio experience.
                  </p>
              </div>
          </div>
      </div>
      <div class="feature-card">
        <div class="card-inner">
            <div class="card-front">
                <h3>GRAMMAR CHECKER
                </h3>
            </div>
            <div class="card-back">
                <p>Improve your writing with AI-powered grammar correction, offering real-time feedback and recommendations.
                </p>
            </div>
        </div>
    </div>
    <div class="feature-card">
      <div class="card-inner">
          <div class="card-front">
              <h3>AUDIO & VIDEO TRANSCRIPTION</h3>
          </div>
          <div class="card-back">
              <p>Quickly convert spoken words into written text for easy reference and analysis.</p>
          </div>
      </div>
  </div>
  <div class="feature-card">
    <div class="card-inner">
        <div class="card-front">
            <h3>TEXT TO SPEECH</h3>
        </div>
        <div class="card-back">
            <p>Convert written content into natural, audible speech, perfect for users with visual impairments or those who prefer auditory learning.</p>
        </div>
    </div>
</div>
<div class="feature-card">
  <div class="card-inner">
      <div class="card-front">
          <h3>OPTICAL CHARACTER RECOGNITIONL</h3>
      </div>
      <div class="card-back">
          <p>Convert scanned documents and images into editable, searchable text for easier data management.</p>
      </div>
  </div>
</div>
          
      
          {/* Add other feature cards similarly */}
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Synthify. All rights reserved.</p>
      </footer>
    </div>
  );
}
