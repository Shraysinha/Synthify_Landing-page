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
        <div className="flex justify-between items-center px-10 py-5 bg-white">
          <div className="text-2xl font-bold text-blue-500">Synthify</div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-700 px-4 py-2 rounded-md bg-gray-300">Log In</a>
              </li>
              <li>
                <a href="#" className="text-white px-4 py-2 rounded-md bg-blue-500">Sign In</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
          <h1 className="text-4xl font-bold">AI-Powered Platform for All Your Works</h1>
          <p className="mt-4 text-xl">Create, enhance, and optimize content with our powerful AI tools.</p>
        </div>
      </header>

      <div className="w-4/5 mx-auto my-16">
        <Image
          src="/Synthify.png"
          alt="Description of the image"
          width={900}
          height={500}
          className="rounded-md shadow-md"
        />
      </div>


   <section className="features-section py-20 bg-gray-50 text-center">
  <h2 className="text-3xl mb-10 text-gray-800">Key Features</h2>
  <div className="features-grid flex justify-center gap-5 flex-wrap">
    {/* TEXT GENERATION */}
    <div className="feature-card w-1/4 h-52 perspective mb-5 rounded-3xl shadow-lg">
      <div className="card-inner relative w-full h-full transition-transform duration-800 transform-style preserve-3d">
        <div className="card-front bg-blue-500 absolute w-full h-full backface-hidden rounded-xl flex justify-center items-center p-5 text-white text-lg font-bold">
          <h3>TEXT GENERATION</h3>
        </div>
        <div className="card-back bg-purple-600 absolute w-full h-full backface-hidden rounded-xl flex justify-center items-center p-5 text-white text-lg font-bold transform rotate-y-180">
          <p>Synthify offers GPT-powered text generation, perfect for content creation, translation, and creative writing.</p>
        </div>
      </div>
    </div>

    {/* IMAGE GENERATION */}
    <div className="feature-card w-1/4 h-52 perspective mb-5 rounded-3xl shadow-lg">
      <div className="card-inner relative w-full h-full transition-transform duration-800 transform-style preserve-3d">
        <div className="card-front bg-blue-500 absolute w-full h-full backface-hidden rounded-xl flex justify-center items-center p-5 text-white text-lg font-bold">
          <h3>IMAGE GENERATION</h3>
        </div>
        <div className="card-back bg-purple-600 absolute w-full h-full backface-hidden rounded-xl flex justify-center items-center p-5 text-white text-lg font-bold transform rotate-y-180">
          <p>Generate stunning images using AI. Ideal for creative projects and design work.</p>
        </div>
      </div>
    </div>

    {/* PARAPHRASER */}
    <div className="feature-card w-1/4 h-52 perspective mb-5 rounded-3xl shadow-lg">
      <div className="card-inner relative w-full h-full transition-transform duration-800 transform-style preserve-3d">
        <div className="card-front bg-blue-500 absolute w-full h-full backface-hidden rounded-xl flex justify-center items-center p-5 text-white text-lg font-bold">
          <h3>PARAPHRASER</h3>
        </div>
        <div className="card-back bg-purple-600 absolute w-full h-full backface-hidden rounded-xl flex justify-center items-center p-5 text-white text-lg font-bold transform rotate-y-180">
          <p>Modify and rewrite text to maintain original meaning, using AI-powered natural language processing.</p>
        </div>
      </div>
    </div>

    {/* IMAGE UPSCALER */}
    <div className="feature-card w-1/4 h-52 perspective mb-5 rounded-3xl shadow-lg">
      <div className="card-inner relative w-full h-full transition-transform duration-800 transform-style preserve-3d">
        <div className="card-front bg-blue-500 absolute w-full h-full backface-hidden rounded-xl flex justify-center items-center p-5 text-white text-lg font-bold">
          <h3>IMAGE UPSCALER</h3>
        </div>
        <div className="card-back bg-purple-600 absolute w-full h-full backface-hidden rounded-xl flex justify-center items-center p-5 text-white text-lg font-bold transform rotate-y-180">
          <p>Enhance image quality using AI, ideal for projects that need high-resolution images.</p>
        </div>
      </div>
    </div>

    {/* AUDIO ENHANCER & NOISE REMOVAL */}
    <div className="feature-card w-1/4 h-52 perspective mb-5 rounded-3xl shadow-lg">
      <div className="card-inner relative w-full h-full transition-transform duration-800 transform-style preserve-3d">
        <div className="card-front bg-blue-500 absolute w-full h-full backface-hidden rounded-xl flex justify-center items-center p-5 text-white text-lg font-bold">
          <h3>AUDIO ENHANCER & NOISE REMOVAL</h3>
        </div>
        <div className="card-back bg-purple-600 absolute w-full h-full backface-hidden rounded-xl flex justify-center items-center p-5 text-white text-lg font-bold transform rotate-y-180">
          <p>Enrich sound clarity and eliminate background noise for a seamless audio experience.</p>
        </div>
      </div>
    </div>

    {/* GRAMMAR CHECKER */}
    <div className="feature-card w-1/4 h-52 perspective mb-5 rounded-3xl shadow-lg">
      <div className="card-inner relative w-full h-full transition-transform duration-800 transform-style preserve-3d">
        <div className="card-front bg-blue-500 absolute w-full h-full backface-hidden rounded-xl flex justify-center items-center p-5 text-white text-lg font-bold">
          <h3>GRAMMAR CHECKER</h3>
        </div>
        <div className="card-back bg-purple-600 absolute w-full h-full backface-hidden rounded-xl flex justify-center items-center p-5 text-white text-lg font-bold transform rotate-y-180">
          <p>Improve your writing with AI-powered grammar correction, offering real-time feedback and recommendations.</p>
        </div>
      </div>
    </div>

    {/* AUDIO & VIDEO TRANSCRIPTION */}
    <div className="feature-card w-1/4 h-52 perspective mb-5 rounded-3xl shadow-lg">
      <div className="card-inner relative w-full h-full transition-transform duration-800 transform-style preserve-3d">
        <div className="card-front bg-blue-500 absolute w-full h-full backface-hidden rounded-xl flex justify-center items-center p-5 text-white text-lg font-bold">
          <h3>AUDIO & VIDEO TRANSCRIPTION</h3>
        </div>
        <div className="card-back bg-purple-600 absolute w-full h-full backface-hidden rounded-xl flex justify-center items-center p-5 text-white text-lg font-bold transform rotate-y-180">
          <p>Quickly convert spoken words into written text for easy reference and analysis.</p>
        </div>
      </div>
    </div>

    {/* TEXT TO SPEECH */}
    <div className="feature-card w-1/4 h-52 perspective mb-5 rounded-3xl shadow-lg">
      <div className="card-inner relative w-full h-full transition-transform duration-800 transform-style preserve-3d">
        <div className="card-front bg-blue-500 absolute w-full h-full backface-hidden rounded-xl flex justify-center items-center p-5 text-white text-lg font-bold">
          <h3>TEXT TO SPEECH</h3>
        </div>
        <div className="card-back bg-purple-600 absolute w-full h-full backface-hidden rounded-xl flex justify-center items-center p-5 text-white text-lg font-bold transform rotate-y-180">
          <p>Convert written content into natural, audible speech, perfect for users with visual impairments or those who prefer auditory learning.</p>
        </div>
      </div>
    </div>

    {/* OPTICAL CHARACTER RECOGNITION */}
    <div className="feature-card w-1/4 h-52 perspective mb-5 rounded-3xl shadow-lg">
      <div className="card-inner relative w-full h-full transition-transform duration-800 transform-style preserve-3d">
        <div className="card-front bg-blue-500 absolute w-full h-full backface-hidden rounded-xl flex justify-center items-center p-5 text-white text-lg font-bold">
          <h3>OPTICAL CHARACTER RECOGNITION</h3>
        </div>
        <div className="card-back bg-purple-600 absolute w-full h-full backface-hidden rounded-xl flex justify-center items-center p-5 text-white text-lg font-bold transform rotate-y-180">
          <p>Convert scanned documents and images into editable, searchable text for easier data management.</p>
        </div>
      </div>
    </div>
  </div>
</section>
      <footer className="text-center py-5 bg-gray-800 text-white">
        <p>&copy; 2024 Synthify. All rights reserved.</p>
      </footer>
    </div>
  );
}
