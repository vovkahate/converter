import { logo } from '../assets';
//import logo from '../assets/111.png';

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img
                    src={logo}
                    alt='crypto tool logo'
                    className='w-64  object-contain'
                ></img>
                <button
                    type='button'
                    onClick={() => window.open('https://github.com')}
                    className='black_btn'
                >
                    GitHub
                </button>
            </nav>

            <h1 className='head_text'>
                Summarize Articles with <br className='max-md:hidden' />
                <span className='orange_gradient'>OpenAI GPT-4</span>
            </h1>
            <h2 className='desc'>
                Simplify your reading with Summize, an open-source article
                summarizer that transforms lengthy articles into clear and
                concise summaries
            </h2>
        </header>
    );
};

export default Hero;
Hero;
