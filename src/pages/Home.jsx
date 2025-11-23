export default function Home(){
  return(
    <div className="birthday-card text-center">
      <div className="space-y-6">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bounce-animation">
          Happy Birthday Bestie! 🎉
        </h1>
        <div className="text-7xl space-x-2 my-8">
          <span className="inline-block animate-bounce">🎂</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '0.1s'}}>🎈</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '0.2s'}}>🎁</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '0.3s'}}>🎀</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '0.4s'}}>✨</span>
        </div>
        <p className="text-2xl text-gray-700 font-medium">
          You are truly special and make every day brighter!
        </p>
        <p className="text-lg text-gray-600 italic">
          Wishing you a day filled with love, laughter, and all your favorite things! 💝
        </p>
      </div>
    </div>
  )
}
